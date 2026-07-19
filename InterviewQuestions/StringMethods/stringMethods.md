# String Methods

In JavaScript, string methods are built-in functions used to manipulate, inspect, and format text. Because JavaScript strings are immutable, these methods never alter the original string; they always return a brand-new string or value.

### JavaScript String Methods Cheat Sheet

| Category                | Method                      | Description                                                                    | Example Output                                                              |
| ----------------------- | --------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| **Basics**              | `length`                    | Returns string length                                                          | `"JS".length → 2`                                                           |
|                         | `charAt(index)`             | Character at position                                                          | `"JS".charAt(1) → "S"`                                                      |
|                         | `charCodeAt(index)`         | Unicode value of character                                                     | `"A".charCodeAt(0) → 65`                                                    |
|                         | `at(index)`                 | Modern alternative to `charAt`, supports negative indices                      | `"JS".at(-1) → "S"`                                                         |
| **Searching**           | `indexOf(substr)`           | First occurrence index                                                         | `"JS JS".indexOf("S") → 1`                                                  |
|                         | `lastIndexOf(substr)`       | Last occurrence index                                                          | `"JS JS".lastIndexOf("S") → 4`                                              |
|                         | `includes(substr)`          | Boolean check if substring exists                                              | `"JS".includes("J") → true`                                                 |
|                         | `startsWith(substr)`        | Checks prefix                                                                  | `"JS".startsWith("J") → true`                                               |
|                         | `endsWith(substr)`          | Checks suffix                                                                  | `"JS".endsWith("S") → true`                                                 |
| **Extracting**          | `slice(start, end)`         | Extracts substring (supports negative indices i.e Counts from the end No swap) | `"JavaScript".slice(0,4) → "Java"` <br>`"Javascript.slice(0,-5) -> Javasc"` |
|                         | `substring(start, end)`     | Extracts substring (negative → 0, swaps if start > end)                        | `"JavaScript".substring(4,0) → "Java"`                                      |
|                         | `substr(start, length)`     | Legacy, extracts substring of given length                                     | `"JavaScript".substr(0,4) → "Java"`                                         |
| **Modifying**           | `toUpperCase()`             | Convert to uppercase                                                           | `"js".toUpperCase() → "JS"`                                                 |
|                         | `toLowerCase()`             | Convert to lowercase                                                           | `"JS".toLowerCase() → "js"`                                                 |
|                         | `trim()`                    | Remove whitespace from both ends                                               | `"  JS  ".trim() → "JS"`                                                    |
|                         | `trimStart()` / `trimEnd()` | Remove whitespace from one side                                                | `"  JS".trimStart() → "JS"`                                                 |
|                         | `padStart(len, str)`        | Pad at beginning                                                               | `"5".padStart(3,"0") → "005"`                                               |
|                         | `padEnd(len, str)`          | Pad at end                                                                     | `"5".padEnd(3,"0") → "500"`                                                 |
|                         | `repeat(n)`                 | Repeat string n times                                                          | `"JS".repeat(3) → "JSJSJS"`                                                 |
| **Splitting & Joining** | `split(separator)`          | Splits string into array                                                       | `"a,b,c".split(",") → ["a","b","c"]`                                        |
|                         | `concat(str1, str2, …)`     | Concatenates strings                                                           | `"JS".concat(" Rocks") → "JS Rocks"`                                        |
|                         | `replace(search, new)`      | Replace first match                                                            | `"JS JS".replace("JS","Node") → "Node JS"`                                  |
|                         | `replaceAll(search, new)`   | Replace all matches                                                            | `"JS JS".replaceAll("JS","Node") → "Node Node"`                             |
| **Regex**               | `match(regex)`              | Returns array of matches                                                       | `"abc".match(/a/) → ["a"]`                                                  |
|                         | `matchAll(regex)`           | Iterator of all matches                                                        | `[... "abcabc".matchAll(/a/g)] → ["a","a"]`                                 |
|                         | `search(regex)`             | Index of first match                                                           | `"abc".search(/b/) → 1`                                                     |
|                         | `replace(regex, new)`       | Replace using regex                                                            | `"abc".replace(/a/,"z") → "zbc"`                                            |
