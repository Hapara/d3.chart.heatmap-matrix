'use strict';

var d3 = require('d3');
var ld = require('lodash')
var Miso = require('miso.dataset')
var colorbrewer = require('../colorbrewer')
var chart = require('d3.chart.heatmap');
var _ = require('underscore.deferred');

window.ld = ld
window.Miso = Miso

window._ = _

        

function datasetToRows(dataset, columns, nameColumn) {
    var rows = ld.map(dataset.toJSON(), function(rowobj) {
        var columnValues = ld.map(columns, function(col) { return rowobj[col]; })
        return {
            name: rowobj[nameColumn],
            values: columnValues
        }
    });

    return rows
}


function computeColumnQuartiles(dataset, columns) {
    var columnQuartiles = ld.map(columns, function(col) {
        var columnData = dataset.column(col).data.concat().sort(d3.ascending);
        var columnQuartileData = {
            q1: d3.quantile(columnData, 0.25),
            q2: d3.quantile(columnData, 0.50),
            q3: d3.quantile(columnData, 0.75),
            min: d3.min(columnData),
            max: d3.max(columnData)
        };
        columnQuartileData['iqr'] = columnQuartileData.q3 - columnQuartileData.q1;
        columnQuartileData['fence_lo'] = columnQuartileData.q1 - 1.5 * columnQuartileData.iqr;
        columnQuartileData['fence_hi'] = columnQuartileData.q3 + 1.5 * columnQuartileData.iqr;
        return columnQuartileData;

    });
    return ld.object(columns, columnQuartiles)
}


function computePercentile(quartiles, val) {
    if (val < quartiles.q1) {
        return 0 + 0.25 * (val-quartiles.min) / (quartiles.q1-quartiles.min)
    }
    if (val < quartiles.q2){
        return .25 + 0.25 * (val-quartiles.q1) / (quartiles.q2-quartiles.q1)
    }
    if (val < quartiles.q3){
        return .5 + 0.25 * (val-quartiles.q2) / (quartiles.q3-quartiles.q2)
    }
    return .75 + 0.25 * (val-quartiles.q3) / (quartiles.max - quartiles.q3)
};




function rowsToPercentiles(data, quartiles) {
    var rows = ld.map(data.rows, function(row) {
        var percentiles = ld.map(ld.zip(data.columns, row.values), function(d) {
            var col = d[0]
            var val = d[1]
            return computePercentile(quartiles[col], val);
        });
        return {
            name: row.name,
            values: percentiles
        }

    });
    return {
        columns: data.columns,
        rows: rows
    }

}


d3.csv("/percentile/time.csv", function(d) {
    console.log(d);

    var ds = new Miso.Dataset({
        data: d,
    });

    ds.fetch({
        success: function() {
            console.log("There are " + this.length + " rows");
            console.log(d)
            console.log(ds)
            window.dataset = ds;

            var columns = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                           'Friday', 'Saturday', 'Sunday']

            /*
            var selectedColumn = 'Monday';
            ds.sort(function(rowA, rowB) { 
                return d3.ascending(rowA[selectedColumn], rowB[selectedColumn]); 
            });
            */


            var palette = 'RdYlGn'
            var numClasses = 11

            var colors = d3.scale.quantize().domain([0,1]).range(colorbrewer[palette][numClasses])
            var chart = d3.select('#vis').append('svg')
                          .chart('Heatmap')
                          .width(1024).height(768)
                          .colorScale(colors)

            var data = require('./data');
            var objrows = ds.toJSON()

            var quartiles = computeColumnQuartiles(ds, columns)
            var rows = datasetToRows(ds, columns, 'Time')
            var params = {
                columns: columns,
                rows: rows
            }

            var percentileParams = rowsToPercentiles(params, quartiles)

            chart.draw(percentileParams)

        }
    });


});






