# The Interface for the Multi-Lingual Engine

This module allows to check if a JavaScript program is running inside of the Multi-Lingual Engine (MLE) and to fetch the bindings to the native functions provided by the engine.

## Usage

`require('mle').enabled()` returns `true` if running inside the Multi-Lingual Engine.

`require('mle').env()` holds the bindings to the Multi-Lingual Engine.

## Example
In MySQL, we can get the database connector with:
```
var mle = require('mle');
if (mle.enabled()) {
  var connector = mle.env().connector({ synchronous: true });
  connector.query(...);
}
```
