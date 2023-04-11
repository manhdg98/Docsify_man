### Bài toán 1:
You need to write regex that will validate a password to make sure it meets the following criteria:

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)

```re
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$
```

Explanation:

```note
^ : start of string
(?=.*[a-z]) : positive lookahead to ensure the presence of a lowercase letter
(?=.*[A-Z]) : positive lookahead to ensure the presence of an uppercase letter
(?=.*\d) : positive lookahead to ensure the presence of a digit
[a-zA-Z\d]{6,} : match any alphanumeric character (excluding '_') at least 6 times
$ : end of string
This regex enforces that a password must contain at least one lowercase letter, one uppercase letter, and one digit, and must consist only of alphanumeric characters. It also requires that the password be at least 6 characters long.
```