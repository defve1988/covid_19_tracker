import data_clean from "./data_clean"
import { std, min, max, mean } from 'mathjs'

// perform data selection, grouping, averaging, mostly like pandas
export default class data_filter extends data_clean {
    constructor() {
        super()
        this.df_filter = []
    }
    // set a new col based on func and cols 

    // set col values types
    set_col(col, type) {
        this.df = this.df.map(x => {
            switch (type) {
                case "num":
                    x[col] = Number(x[col]);
                    break;
                case "date":
                    x[col] = new Date(x[col]);
                    break;
                case "int":
                    x[col] = parseInt(x[col]);
                    break;
                case "float":
                    x[col] = parseFloat(x[col]);
                    break;
            }
            return x
        })
    }
    // filter a column based on value array
    filter_col(col, val) {
        // col: col name
        // val: array
        this.df_filter = this.df.filter(item => { return val.includes(item[col]) })
        return this.df_filter
    }
    // get unique values for a column
    unique_col(col, df = this.df_filter) {
        var res = df.reduce((prev, curr) => {
            if (curr[col] != "" && !prev.includes(curr[col])) {
                prev.push(curr[col])
            }
            return prev
        }, [])
        return res
    }
    // get statistic for a col
    stats_col(col, func, df = this.df_filter) {
        var res
        var y = df.filter(x => x[col] != null).map(x => x[col])
        if (y.length == 0) return null
        switch (func) {
            case "min":
                res = min(y)
                break;
            case "max":
                res = max(y)
                break;
            case "mean":
                res = mean(y)
                break;
            case "std":
                res = std(y)
                break;
        }
        return Math.round(res * 100) / 100
    }

}
