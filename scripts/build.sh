#!/usr/bin/env bash

echo "module.exports = require('./dist/index.js').default;\n" > index.js
echo "Created index.js"

tsup src/index.ts --dts $1
