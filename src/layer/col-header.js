'use strict';

var layer = {events: {}};

layer.dataBind = function (data) {
    var chart = this.chart();
    return this.selectAll('text').data(data.cols, chart.colKey());
};

layer.insert = function () {
    var chart = this.chart();
    return this.append('text').attr('opacity', 0);
};

function transformCol(sel, chart) {
    var bottom = chart.bottomMargin;
    var slanted = chart.slanted();
    sel.attr('transform', function (d, i) {
        var result;
        result = 'translate(' + (chart.xScale(i)) + ',' + bottom + ')';
        if (slanted) {
            result += 'rotate(-45)';
        }
        return result;
    });
}

layer.events['enter'] = function () {
    this.call(transformCol, this.chart());
};

layer.events['merge'] = function () {
    var chart = this.chart();
    this.text(chart.colHeader())
    this.on('click', function(d, i) { 
        if (chart.sortable()) {
            var dataObj = chart.dataObj()
            dataObj.rows.sort(function(rowA, rowB) {
                return d3.descending(rowA.values[i], rowB.values[i]);
            });

            chart.draw(dataObj)
        }
    })
    

};

layer.events['enter:transition'] = function () {
    var chart = this.chart();
    this.duration(chart.duration());
    this.attr('opacity', 1);
};


layer.events['update:transition'] = function () {
    var chart = this.chart();
    this.duration(chart.duration());
    this.call(transformCol, chart);
    this.attr('opacity', 1);
};

layer.events['exit'] = function () {
    this.remove();
};

module.exports = layer;
