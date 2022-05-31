# Ezida
Generate short identifiers. EZ 😉.

## Warning: Do not use this library for:
- Authentication
- Dynamically generated identifiers like user ids because this library saves used identifiers in the memory.

## This library is suitable for:
- Generating CSS classes
- Generating HTML IDs

## Usage

```js
import createUID from "ezida";

const ID = createUID(
    minLen: Number?
); // This is where we store the IDs

ID.generate(); // Generate a new ID
```
