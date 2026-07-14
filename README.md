# flagrix-test-low

**Intentional test fixture for [Flagrix](https://flagrix.io) — a clean, benign library with no risky patterns.**

This repository exists so you can try the Flagrix security scanner and see its
**low-risk / "safe to clone"** verdict end to end. It is an ordinary little
utility library: pure string and array helpers, no dependencies, no network
calls, no obfuscation, no secrets.

There is nothing to flag here — that is the point. It is the clean control in
the Flagrix demo set, alongside
[flagrix-test-medium](https://github.com/flagrix-io/flagrix-test-medium) and
[flagrix-test-high](https://github.com/flagrix-io/flagrix-test-high).

## Contents

| File | Purpose |
|------|---------|
| `src/slugify.js` | turn a title into a URL-safe slug |
| `src/chunk.js` | split an array into fixed-size chunks |
| `src/clamp.js` | constrain a number to a range |

**Expected verdict: LOW RISK — safe to clone** (no findings).
