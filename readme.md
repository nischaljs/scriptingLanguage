### Regex Symbols Explanation

- `^` and `$`: 
  - **Start** (`^`) and **end** (`$`) of the string, respectively.
  
- `[]`: 
  - **Character set**, defining the allowed characters inside the brackets.
  
- `[^]`: 
  - **Negated character set**, defining the characters that are **not** allowed.
  
- `\s`: 
  - Matches **whitespace characters** (spaces, tabs, newlines, etc.).
  
- `.`: 
  - Matches **any character** (except newlines).
  
- `\.`: 
  - **Escaped dot**, matches a literal period (`.`).
  
- `\d`: 
  - Matches **any digit** (`0-9`).

- `+`: 
  - Matches **one or more** of the preceding element.
  
- `*`: 
  - Matches **zero or more** of the preceding element.
  
- `(?=...)`: 
  - **Lookahead assertion**, ensures the presence of a pattern without consuming it in the string.
  
- `{min,max}`: 
  - Specifies the **minimum** and **maximum** length for the preceding element.
