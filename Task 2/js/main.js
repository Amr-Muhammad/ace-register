let mainObj = {
    value1: 1,
    value2: 2,
    value3: 3,
    log: function () {
        console.log(this);
    }
}


let secObj = {
    value4: 4,
    value5: 5,
    value6: 6,

}

let test = mainObj.log.apply(secObj)
console.log(secObj.log());