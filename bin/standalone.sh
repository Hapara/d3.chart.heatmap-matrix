#!/bin/bash
set -e
mkdir -p example/.build
#browserify example/example.js -o example/.build/example.js 
#browserify example/minimal/example.js -o example/.build/minimal.js 
#browserify example/percentile/example.js -o example/.build/percentile.js 
watchify example/minimal/example.js --standalone percentile -o example/.build/minimal.js &
watchify example/percentile/example.js --standalone percentile -o example/.build/percentile.js &
stylus src -o example/.build/ --watch &
#serve -L example

cd example
python -m SimpleHTTPServer 8081
