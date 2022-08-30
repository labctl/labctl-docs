# Template functions

Available template functions include:
- [Gomplate](https://docs.gomplate.ca/) template functions

    Gomplate provides an extensive list of template functions.
    Please refer to the Gomplate documentation for all available [functions](https://docs.gomplate.ca/)
- Config Engine's [custom](https://github.com/kellerza/template) functions

    Several custom functions were added for Config Engine. They are documented on this page.
- Golang's [text/template](https://pkg.go.dev/text/template#hdr-Functions) functions

    Functions from Golang's standard library

## Config Engine's functions

A couple of custom functions can be used in Config Engine. They are documented below and the source can be found [here](https://github.com/kellerza/template)

## 👉 Data validation

These functions can be used in a template to indicate required input parameters.

- `expect` tests if the input is a certain type or in some cases even wihin an allowable range.
    If the input matches the expected type, the function returns and will not affect your template.
    If the input does not match, an error will be raised and template execution will be stopped.

    Expect supports the following formats:

    - a simple type: **str**, **string**, **int**
    - and IP address with mask,  **IP/mask**
    - a numeric range, e.g. 0-100
    - a regular expression

    Usage: `expect <value> <format>`

- `optional`  takes exactly the same parameters as expect.
    The only difference is that template execution will continue if the value is not present.
    Typically `optional` would be used in conjunction with `default`

    Usage: `optional <value> <format>`

- `default` returns a default value if a value is not available

    Usage: `default <default-value> <value>`


## 👉 String manipulation

There are three string manulpilation functions:
- `contains <substr> <value>` tests is substr is presnt in the value.
- `join <separator> <values>` joins a list of values into a single string, using the specified seperator
- `split <seperator> <value>` splits a string into a list

## 👉 IP functions

- `ip <value>` returns only the IP address from a string that contains an IP/mask
- `ipmask <value>` returns only the mask from a string that contains an IP/mask

## 👉 Enhanced standard functions

- `index` was adapted to support pipelines.
    The indexes can either follow the value, or be before the value (supporting pipe).
    Negative indexes are allowed and will be the offset from the length.

    This is an extension of golang's standard `index` function:

    > `index` returns the result of indexing its first argument by the
    > following arguments. Thus `index x 1 2 3` is, in Go syntax,
    > `x[1][2][3]`. Each indexed item must be a map, slice, or array.

- `slice` returns the result of Golang's slice that supports pipelines.
    It will attempt the standard slice function, but if that fails,
    it attempts an alternative implementation, the the first 2 parameters
    are indexes followed by the value.
    Negative indexes are allowed and will be the offset from the length.

    The standard slice function
    > `slice` returns the result of slicing its first argument by the
    > remaining arguments. Thus `slice x 1 2` is, in Go syntax, `x[1:2]`,
    > while `slice x` is `x[:]`, `slice x 1` is `x[1:]`, and `slice x 1 2 3`
    > is `x[1:2:3]`. The first argument must be a string, slice, or array.

## Golang's template functions

Golang's [text/template](https://pkg.go.dev/text/template#hdr-Functions) includes several standard functions and comparison operators. This section repeats the text/template documentation.

- `call` - Returns the result of calling the first argument, which
    must be a function, with the remaining arguments as parameters.
    Thus `call .X.Y 1 2` is, in Go notation, `dot.X.Y(1, 2)` where
    Y is a func-valued field, map entry, or the like.
    The first argument must be the result of an evaluation
    that yields a value of function type (as distinct from
    a predefined function such as print). The function must
    return either one or two result values, the second of which
    is of type error. If the arguments don't match the function
    or the returned error value is non-nil, execution stops.

- `html` - Returns the escaped HTML equivalent of the textual
    representation of its arguments. This function is unavailable
    in html/template, with a few exceptions.

- `js` - Returns the escaped JavaScript equivalent of the textual
    representation of its arguments.

- `len` - Returns the integer length of its argument.

- `print` - An alias for fmt.Sprint

- `printf` - An alias for fmt.Sprintf

- `println` - An alias for fmt.Sprintln

- `urlquery` - Returns the escaped value of the textual representation of
    its arguments in a form suitable for embedding in a URL query.
    This function is unavailable in html/template, with a few
    exceptions.


## 👉 Boolean operators

- `and` returns the boolean AND of its arguments by returning the
    first empty argument or the last argument. That is,
    `and x y` behaves as `if x then y else x.`
    Evaluation proceeds through the arguments left to right
    and returns when the result is determined.

- `not` returns the boolean negation of its single argument.

- `or` returns the boolean OR of its arguments by returning the
    first non-empty argument or the last argument, that is,
    `or x y` behaves as `if x then x else y`.
    Evaluation proceeds through the arguments left to right
    and returns when the result is determined.

## 👉 Comparison

Go includes standard comparison functions

| Operator | Result                                                     |
| :------: | :--------------------------------------------------------- |
|   `eq`   | `eq arg1 arg2` returns the boolean truth of `arg1 == arg2` |
|   `ne`   | `ne arg1 arg2` returns the boolean truth of `arg1 != arg2` |
|   `lt`   | `lt arg1 arg2` returns the boolean truth of `arg1 < arg2`  |
|   `le`   | `le arg1 arg2` returns the boolean truth of `arg1 <= arg2` |
|   `gt`   | `gt arg1 arg2` returns the boolean truth of `arg1 > arg2`  |
|   `ge`   | `ge arg1 arg2` returns the boolean truth of `arg1 >= arg2` |
