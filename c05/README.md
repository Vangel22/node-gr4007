### Regular Expressions

    - Literals - numbers, letters, symbols
    - Metacharacters - Symbols with special meanings

        . (dot): Matches any single character except newline.
        ^ (caret): Matches the start of a string.
        $ (dollar): Matches the end of a string.
        * (asterisk): Matches zero or more occurrences of the preceding character.
        + (plus): Matches one or more occurrences of the preceding character.
        ? (question mark): Matches zero or one occurrence of the preceding character.
        \ (backslash): Escapes a metacharacter, allowing you to match it literally.
        \s: Matches any whitespace character.
        \d: Letter denoting any number from (0-9).

    - Character classes
        [] - Matches any single character within the brackets, most symbols inside are treated as literals (+, -, ., *)
            ex. [aeiou]
        [^ ]: Matches any single character not within the brackets.

    - Quantifiers
        { }: Specifies exact repetitions or a range. {3} matches exactly three occurrences, {2,4} matches 2 to 4 occurrences

    - Groups and Alternation:
        () : Creates a group for capturing or applying quantifiers. (abc)+ matches    "abc", "abcabc", etc.
        | : Alternation operator, matches either the expression before or after the pipe.

    - Anchors
        \b : Word boundary, matches positions where word starts or ends.

    - Email example: ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
    - Explanation:
        ^: Denotes the start of the string.
        [a-zA-Z0-9_.+-]+: Matches the username part before @, allowing letters, numbers, dots, underscores, plus signs, and hyphens.
        @: Matches the "@" symbol.
        [a-zA-Z0-9-]+: Matches the domain name part after @, allowing letters, numbers, and hyphens.
        \.: Matches the dot separating the domain name and extension.
        [a-zA-Z0-9-.]+: Matches the domain extension, allowing letters, numbers, dots, and hyphens.
        $: Denotes the end of the string.
    - Password example: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
    - Explanation:
        ^: Denotes the start of the string.
        (?=._[a-z]): Requires at least one lowercase letter.
        (?=._[A-Z]): Requires at least one uppercase letter.
        (?=._\d): Requires at least one digit.
        (?=._[@$!%*?&]): Requires at least one special character among @$!%*?&.
        [A-Za-z\d@$!%\*?&]{8,}: Matches a combination of uppercase letters, lowercase letters, digits, and specified special characters with a minimum length of 8 characters.
        $: Denotes the end of the string.

    - The (?= ...) - Positive lookahead in regular expressions is like a condition or a check. It's a way of saying, "Look ahead in the string, and check if something specific is there,
    without actually consuming (matching) those characters." It's a condition that must be satisfied for the overall pattern to match.

    Plus:
    - url.parse(req.url, true) - gives us
    {
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'localhost:3000',
        port: '3000',
        hostname: 'localhost',
        hash: null,
        search: '?username=johndoe',
        query: { username: 'johndoe' },
        pathname: '/user',
        path: '/user?username=johndoe',
        href: 'http://localhost:3000/user?username=johndoe'
    }
