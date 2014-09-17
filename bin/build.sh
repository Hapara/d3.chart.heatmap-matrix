#!/bin/bash
set -e
mkdir -p example/.build
watchify example/example.js -o example/.build/example.js &
watchify example/minimal/example.js -o example/.build/minimal.js &
watchify example/percentile/example.js -o example/.build/percentile.js &
stylus src -o example/.build/ --watch &
#serve -L example

cd example
python -m SimpleHTTPServer 8081
