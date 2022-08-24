# The install script is based off of the Apache 2.0 script from Helm,
# https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3

: ${BINARY_NAME:="labctl"}
: ${PROJECT_NAME:="labctl"} # if project name does not match binary name
: ${USE_SUDO:="true"}
: ${USE_PKG:="false"} # default --use-pkg flag value. will use tar.gz bin installation by default unless the default is changed to true
: ${VERIFY_CHECKSUM:="false"}
: ${BIN_INSTALL_DIR:=$(pwd)}
: ${PKG_INSTALL_DIR:="/usr/bin/"}
: ${REPO_NAME:="labctl/labctl"}
: ${REPO_URL:="https://github.com/$REPO_NAME"}

# detectArch discovers the architecture for this system.
detectArch() {
  ARCH=$(uname -m)
  case $ARCH in
    # armv5*) ARCH="armv5" ;;
    # armv6*) ARCH="armv6" ;;
    armv7*) ARCH="arm" ;;
    aarch64) ARCH="arm64" ;;
    # x86) ARCH="386" ;;
    x86_64) ARCH="amd64" ;;
    i686) ARCH="386" ;;
    i386) ARCH="386" ;;
  esac
}

# detectOS discovers the operating system for this system and its package format
detectOS() {
  OS=$(echo $(uname) | tr '[:upper:]' '[:lower:]')

  case "$OS" in
    # Minimalist GNU for Windows
    mingw*) OS='windows' ;;
  esac

  if type "rpm" &>/dev/null; then
    PKG_FORMAT="rpm"
  elif type "dpkg" &>/dev/null; then
    PKG_FORMAT="deb"
  fi
}

# runs the given command as root (detects if we are root already)
runAsRoot() {
  local CMD="$*"

  if [ $EUID -ne 0 -a $USE_SUDO = "true" ]; then
    CMD="sudo $CMD"
  fi

  $CMD
}

curl_exists() {
  type "curl" &>/dev/null
}

# verifySupported checks that the os/arch combination is supported
verifySupported() {
  local supported="linux-amd64\nlinux-arm\nlinux-armv6\ndarwin-amd64\ndarwin-armv6"
  if ! echo "${supported}" | grep -q "${OS}-${ARCH}"; then
    echo "No prebuilt binary for ${OS}-${ARCH}."
    echo "To build from source, go to ${REPO_URL}"
    exit 1
  fi

  if ! curl_exists && ! type "wget" &>/dev/null; then
    echo "Either curl or wget is required"
    exit 1
  fi
  if ! type "sed" &>/dev/null; then
    echo "sed required"
    exit 1
  fi
  if ! type "grep" &>/dev/null; then
    echo "grep required"
    exit 1
  fi
}

# verifyOpenssl checks if openssl is installed to perform checksum operation
verifyOpenssl() {
  if [ $VERIFY_CHECKSUM == "true" ]; then
    if ! type "openssl" &>/dev/null; then
      echo "openssl is not found. It is used to verify checksum of the downloaded file."
      exit 1
    fi
  fi
}

# Get the latest release from github, parameter the full repo name labctl/labctl
get_latest_release() {
  local latest_url="https://api.github.com/repos/$1/releases/latest"
  if curl_exists; then
    curl --silent $latest_url | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/'
  else
    wget -q $latest_url -O- | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/'
  fi
}

# setDesiredVersion sets the desired version either to an explicit version provided by a user
# or to the latest release available on github releases
setDesiredVersion() {
  if [ "x$DESIRED_VERSION" == "x" ]; then
    # when desired version is not provided
    # get latest tag from the gh releases
    TAG=$(get_latest_release $REPO_NAME)
    # tag with stripped `v` prefix
    TAG_WO_VER=$(echo "${TAG}" | cut -c 2-)
  else
    TAG=$DESIRED_VERSION
    TAG_WO_VER=$(echo "${TAG}" | cut -c 2-)

    local desired_url="https://api.github.com/repos/$REPO_NAME/tags/$DESIRED_VERSION"

    if curl_exists; then
      if ! curl -s -o /dev/null --fail $desired_url; then
        echo "release $DESIRED_VERSION not found"
        exit 1
      fi
    else
      if ! wget -q $desired_url; then
        echo "release $DESIRED_VERSION not found"
        exit 1
      fi
    fi
  fi
}

# checkInstalledVersion checks which version is installed and
# if it needs to be changed.
checkInstalledVersion() {
  if [[ -f "${BIN_INSTALL_DIR}/${BINARY_NAME}" ]]; then
    local version=$("${BIN_INSTALL_DIR}/${BINARY_NAME}" -v | grep version | awk '{print $NF}')
    if [[ "v$version" == "$TAG" ]]; then
      echo "${BINARY_NAME} is already at ${DESIRED_VERSION:-latest ($version)}" version
      return 0
    else
      echo "A newer ${BINARY_NAME} ${TAG_WO_VER} is available."
      echo "You are running labctl $version version"
      UPGR_NEEDED="Y"
      # check if stdin is open (i.e. capable of getting users input)
      if [ -t 0 ]; then
        read -e -p "Proceed with upgrade? [Y/n]: " -i "Y" UPGR_NEEDED
      fi
      if [ "$UPGR_NEEDED" == "Y" ]; then
        return 1
      fi
      return 0
    fi
  else
    return 1
  fi
}

# createTempDir creates temporary directory where we downloaded files
createTempDir() {
  TMP_ROOT="$(mktemp -d)"
  TMP_BIN="$TMP_ROOT/$BINARY_NAME"
}

# downloadFile downloads the latest binary archive, the checksum file and performs the sum check
downloadFile() {
  EXT="tar.gz" # download file extension
  if [ $USE_PKG == "true" ]; then
    EXT=$PKG_FORMAT
  fi
  ARCHIVE="${PROJECT_NAME}_${TAG_WO_VER}_${OS}_${ARCH}.${EXT}"
  DOWNLOAD_URL="${REPO_URL}/releases/download/${TAG}/${ARCHIVE}"
  CHECKSUM_URL="${REPO_URL}/releases/download/${TAG}/checksums.txt"
  TMP_FILE="$TMP_ROOT/$ARCHIVE"
  SUM_FILE="$TMP_ROOT/checksums.txt"
  echo "Downloading $DOWNLOAD_URL"
  if curl_exists; then
    curl -SsL "$CHECKSUM_URL" -o "$SUM_FILE"
    curl -SsL "$DOWNLOAD_URL" -o "$TMP_FILE"
  else
    wget -q -O "$SUM_FILE" "$CHECKSUM_URL"
    wget -q -O "$TMP_FILE" "$DOWNLOAD_URL"
  fi

  # verify downloaded file
  if [ $VERIFY_CHECKSUM == "true" ]; then
    local sum=$(openssl sha1 -sha256 ${TMP_FILE} | awk '{print $2}')
    local expected_sum=$(cat ${SUM_FILE} | grep -i $ARCHIVE | awk '{print $1}')
    if [ "$sum" != "$expected_sum" ]; then
      echo "SHA sum of ${TMP_FILE} does not match. Aborting."
      exit 1
    fi
    echo "Checksum verified"
  fi
}

# installFile verifies the SHA256 for the file, then unpacks and
# installs it. By default, the installation is done from .tar.gz archive, that can be overridden with --use-pkg flag
installFile() {
  tar xf "$TMP_FILE" -C "$TMP_ROOT"
  echo "Preparing to install $BINARY_NAME ${TAG_WO_VER} into ${BIN_INSTALL_DIR}"
  runAsRoot cp "$TMP_ROOT/$BINARY_NAME" "$BIN_INSTALL_DIR/$BINARY_NAME"
  echo "$BINARY_NAME installed into $BIN_INSTALL_DIR/$BINARY_NAME"
}

# installPkg installs the downloaded version of a package in a deb or rpm format
installPkg() {
  echo "Preparing to install $BINARY_NAME ${TAG_WO_VER} from package"
  if [ $PKG_FORMAT == "deb" ]; then
    runAsRoot dpkg -i $TMP_FILE
  elif [ $PKG_FORMAT == "rpm" ]; then
    runAsRoot rpm -U $TMP_FILE
  fi
}

# fail_trap is executed if an error occurs.
fail_trap() {
  result=$?
  if [ "$result" != "0" ]; then
    if [[ -n "$INPUT_ARGUMENTS" ]]; then
      echo "Failed to install $BINARY_NAME with the arguments provided: $INPUT_ARGUMENTS"
      help
    else
      echo "Failed to install $BINARY_NAME"
    fi
    echo -e "\tFor support, go to $REPO_URL/issues"
  fi
  cleanup
  exit $result
}

# testVersion tests the installed client to make sure it is working.
testVersion() {
  set +e
  if [ $USE_PKG == "true" ]; then
    BIN_INSTALL_DIR=$PKG_INSTALL_DIR
  fi
  $BIN_INSTALL_DIR/$BINARY_NAME -v
  if [ "$?" = "1" ]; then
    echo "$BINARY_NAME not found. Is $BIN_INSTALL_DIR in your "'$PATH?'
    exit 1
  fi
  set -e
}

# help provides possible cli installation arguments
help() {
  echo "Accepted cli arguments are:"
  echo -e "\t[--help|-h ] ->> prints this help"
  echo -e "\t[--version|-v <desired_version>] . When not defined it fetches the latest release from GitHub"
  echo -e "\t e.g. --version v0.1.1"
  echo -e "\t[--use-pkg]  ->> install from deb/rpm packages"
  echo -e "\t[--no-sudo]  ->> install without sudo"
  echo -e "\t[--verify-checksum]  ->> verify checksum of the downloaded file"
}

# removes temporary directory used to download artefacts
cleanup() {
  if [[ -d "${TMP_ROOT:-}" ]]; then
    rm -rf "$TMP_ROOT"
  fi
}

# Execution

#Stop execution on any error
trap "fail_trap" EXIT
set -e

# Parsing input arguments (if any)
export INPUT_ARGUMENTS="${@}"
set -u
while [[ $# -gt 0 ]]; do
  case $1 in
    '--version' | -v)
      shift
      if [[ $# -ne 0 ]]; then
        export DESIRED_VERSION="v${1}"
      else
        echo -e "Please provide the desired version. e.g. --version 0.1.1"
        exit 0
      fi
      ;;
    '--no-sudo')
      USE_SUDO="false"
      ;;
    '--verify-checksum')
      VERIFY_CHECKSUM="true"
      ;;
    '--use-pkg')
      USE_PKG="true"
      ;;
    '--help' | -h)
      help
      exit 0
      ;;
    *)
      exit 1
      ;;
  esac
  shift
done
set +u

detectArch
detectOS
verifySupported
setDesiredVersion
if ! checkInstalledVersion; then
  createTempDir
  verifyOpenssl
  downloadFile
  if [ $USE_PKG == "true" ]; then
    installPkg
  else
    installFile
  fi
  testVersion
  cleanup
fi