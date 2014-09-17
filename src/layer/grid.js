'use strict';

var STROKE_WIDTH = 0.15;
var layer = {events: {}};

layer.dataBind = function (data) {
    var chart = this.chart();
    if (chart.colKey()) {
        chart._gridKey = function (d, i) {
            return chart.colKey()(data.cols[i], i);
        };
    } else {
        chart._gridKey = void 0;
    }
    return this.selectAll('g.row').data(data.rows, chart.rowKey());
};

layer.insert = function () {
    var chart;
    chart = this.chart();
    return this.append('g').classed('row', true);
};

var gridEnter = function (sel, chart) {
    this.attr('r', 0);
    this.attr('fill', function (d) {
        return chart.colorScale()(chart.color()(d));
    });
    this.attr('opacity', 0);
    var xDelta = chart.xScale(1) - chart.xScale(0);
    var yDelta = chart.yScale(1) - chart.yScale(0);
    this.attr('x', function(d,i) {
        return chart.xScale(i)-xDelta/2;
    });
    this.attr('y', chart.yScale(0)-yDelta);
    this.attr('width', xDelta);
    this.attr('height', yDelta);
    return this

};

var gridMerge = function (sel, chart) {
    return this.attr('stroke-width', STROKE_WIDTH * chart.maxRadius);
};

var gridExit = function (sel, chart) {
    return this.remove();
};

var gridMergeTransition = function (sel, chart) {
    this.duration(chart.duration());
    this.attr('opacity', 0.9);
    return this

};

var transformRow = function (sel, chart) {
    return this.attr('transform', function (d, i) {
        return 'translate(0,' + (chart.yScale(i)) + ')';
    });
};

layer.events['enter'] = function () {
    var chart = this.chart();
    return this.call(transformRow, chart);
};

layer.events['merge'] = function () {
    var key = null;
    var chart = this.chart();
    if (chart._gridKey) {
        key = function () {
            if (this instanceof Array) {
                return chart._gridKey.apply(this, arguments);
            }
            return this.__key__;
        };
    }
    var grids = this.selectAll('rect').data(chart.rowData(), key);
    grids.enter().append('rect').call(gridEnter, chart);
    grids.exit().call(gridExit, chart);
    grids.call(gridMerge, chart);
    if (key !== null) {
        grids.each(function (d, i) {
            this.__key__ = chart._gridKey(d, i);
        });
    }
    return grids.transition().call(gridMergeTransition, chart);
};

layer.events['update:transition'] = function () {
    var chart;
    chart = this.chart();
    this.duration(chart.duration());
    return this.call(transformRow, chart);
};

layer.events['exit'] = function () {
    return this.remove();
};

module.exports = layer;
