'use strict';

var d3 = require('d3');
var colorbrewer = require('../colorbrewer')
var chart = require('d3.chart.heatmap-matrix');


//var palette = 'RdYlGn'
//var numClasses = 11

//var colors = d3.scale.quantize().domain([0,1]).range(colorbrewer[palette][numClasses])
var chart = d3.select('#vis').append('svg')
              .chart('HeatmapMatrix')
              .width(1024).height(512)
              .rowKey(function(d) { return d.name; })
              //.colorScale(colors)

var data = require('./data');
chart.draw(data)
