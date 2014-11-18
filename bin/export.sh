TGT_DIR=.build
mkdir -p $TGT_DIR
browserify src/static_export.js  --standalone initializeDependencies  > $TGT_DIR/heatmap_bundle.js
cat $TGT_DIR/heatmap_bundle.js | uglifyjs > $TGT_DIR/heatmap_bundle.min.js
