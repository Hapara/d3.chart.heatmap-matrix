'use strict';


module.exports = function() {
    window.d3 = require('d3');
    window.ld = require('lodash')
    window.Miso = require('miso.dataset')
    window.colorbrewer = require('colorbrewer')
    window.chart = require('d3.chart.heatmap-matrix');
    window.quartile_utils = require('./quartile_utils.js')
    window.d3tip = require('d3.tip')
    //window.horizLegend = require('./example/percentile/d3.chart.horizontal-legend.min.js')
    window.horizLegend = require('d3.chart.horizontal-legend')
}
