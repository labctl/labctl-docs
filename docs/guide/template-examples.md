# Template Examples

## String manupilation

The following examples perform the same function. They extract a number from the string name of the router.

The templates marked with asterisk (*) are not ideal, since it assumes you know if the numeric part of the router is one or more digits.

```jinja
{{  "PE9"  | slice 2 0 }}
{{  "PE12" | slice 2 0 }}

*{{  "PE9"  | slice -1 0 }}
*{{  "PE12" | slice -2 0 }}
*{{ "PE9"  | index -1 | printf "%c" }}

{{ "PE9"  | split "PE" | index -1 }}
{{ "R9"   | split "R"  | index -1 }}
{{ "PE12" | split "PE" | index -1 }}

{{  "PE12" | strings.ReplaceAll "PE" "" }}
{{  "PE8" | strings.ReplaceAll "PE" "" }}
```
