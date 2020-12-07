import file_loader from "./file_loader"

// perform data selection, grouping, averaging, mostly like pandas
// mutiple key is not supported
export default class data_clean extends file_loader {
    constructor() {
        super()
    }

    // merge new data based on col
    merge(new_data, col) {
        new_data.forEach(element => {
            let row_index = []
            let temp = this.df.filter((row, index) => {
                var isEqual = true
                cols.forEach(c => {
                    isEqual = isEqual && (row[c] == new_data[c])
                });
                if (isEqual) row_index.push(index)
                return isEqual
            })
            if (temp.length == 0) {
                // if this is a new row
                this.df.push(element)
            }
            else {
                // if mutiple row 

            }
        });
    }

    // handle duplicated rows based on col
    // keep_last, keep_first, mean
    remove_duplicate(col, methods = "keep_last") {

    }

    // replace val1 with val2, can not handle mutiple level objects
    replace(val1, val2) {
        this.df = this.df.map(row => {
            let temp = row
            for (const [key, value] of Object.entries(row)) {
                if (value == val1) row[key] = val2
            }
            return temp
        })
    }



}