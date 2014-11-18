var ld = require('lodash')
var d3 = require('d3');





quartile_utils = {

    datasetToRows: function(dataset, columns, nameColumn) {
        var rows = ld.map(dataset.toJSON(), function(rowobj) {
            var columnValues = ld.map(columns, function(col) { return rowobj[col]; })
            return {
                name: rowobj[nameColumn],
                values: columnValues
            }
        });

        return rows;
    },


    computeColumnQuartiles: function(dataset, columns, descending_columns) {
        var columnQuartiles = ld.map(columns, function(col) {
            var isDescending = (col in descending_columns);
            var order = isDescending ? d3.descending : d3.ascending;
            var columnData = dataset.column(col).data.concat().sort(order);
            var columnQuartileData = {
                q1: d3.quantile(columnData, 0.25),
                q2: d3.quantile(columnData, 0.50),
                q3: d3.quantile(columnData, 0.75),
                min: d3.min(columnData),
                max: d3.max(columnData)
            };
            if (isDescending) { 
                columnQuartileData['iqr'] = columnQuartileData.q1 - columnQuartileData.q3;
                columnQuartileData['fence_lo'] = columnQuartileData.q1 - 1.5 * columnQuartileData.iqr;
                columnQuartileData['fence_hi'] = columnQuartileData.q3 + 1.5 * columnQuartileData.iqr;
            } else {
                columnQuartileData['iqr'] = columnQuartileData.q3 - columnQuartileData.q1;
                columnQuartileData['fence_lo'] = columnQuartileData.q1 - 1.5 * columnQuartileData.iqr;
                columnQuartileData['fence_hi'] = columnQuartileData.q3 + 1.5 * columnQuartileData.iqr;
            }
            columnQuartileData['descending'] = isDescending;
            return columnQuartileData;

        });
        return ld.object(columns, columnQuartiles)
    },


    computePercentile: function(quartiles, val) {
        if (quartiles.descending) {
            if (val > quartiles.q1) {
                return 0 + 0.25 * (quartiles.max - val) / (quartiles.max-quartiles.q1)
            }
            if (val > quartiles.q2){
                return .25 + 0.25 * (val-quartiles.q1) / (quartiles.q2-quartiles.q1)
            }
            if (val > quartiles.q3){
                return .5 + 0.25 * (val-quartiles.q2) / (quartiles.q3-quartiles.q2)
            }
            return .75 + 0.25 * (quartiles.q3 - val) / (quartiles.q3 - quartiles.min)
        } else {
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
        }
    },




    rowsToPercentiles: function(data, quartiles) {
        var scope = this
        var rows = ld.map(data.rows, function(row) {
            var percentiles = ld.map(ld.zip(data.columns, row.values), function(d) {
                var col = d[0]
                var val = d[1]
                return scope.computePercentile(quartiles[col], val);
            });
            return {
                name: row.name,
                values: row.values,
                percentiles: percentiles
            }

        });

        return rows;

    },

    percentileString: function(percentile) {
        var n = Math.round(percentile * 100)
        var suffix = "th"

        if (n == 1) {
            suffix = "st"
        } else if (n == 2) {
            suffix = "nd"
        } else if (n == 3) {
            suffix = "rd"
        }

        return n + suffix + "-%ile";
    }


}

module.exports = quartile_utils
