'use strict';


var STROKE_WIDTH = 0.15;
var layer = {events: {}};

layer.dataBind = function (data) {
    var chart = this.chart();
    if (chart.colKey()) {
        chart._cellKey = function (d, i) {
            return chart.colKey()(data.cols[i], i);
        };
    } else {
        chart._cellKey = void 0;
    }
    return this.selectAll('g.row').data(data.rows, chart.rowKey());
};

layer.insert = function () {
    var chart;
    chart = this.chart();
    return this.append('g').classed('row', true);
};

var cellEnter = function (sel, chart) {
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
    this.on('mouseover', chart.tip().show );
    this.on('mouseout', chart.tip().hide );
        
        
    return this

};

var cellMerge = function (sel, chart) {
    return this.attr('stroke-width', STROKE_WIDTH * chart.maxRadius);
};

var cellExit = function (sel, chart) {
    return this.remove();
};

var cellMergeTransition = function (sel, chart) {
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
    if (chart._cellKey) {
        key = function () {
            if (this instanceof Array) {
                return chart._cellKey.apply(this, arguments);
            }
            return this.__key__;
        };
    }
    var cells = this.selectAll('rect').data(chart.rowData(), key);
    cells.enter().append('rect').call(cellEnter, chart);
    cells.exit().call(cellExit, chart);
    cells.call(cellMerge, chart);
    if (key !== null) {
        cells.each(function (d, i) {
            this.__key__ = chart._cellKey(d, i);
        });
    }
    return cells.transition().call(cellMergeTransition, chart);
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
