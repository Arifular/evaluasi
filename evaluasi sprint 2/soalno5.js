var people = {
    "1. Abduh Muhamad" : [
        'abduh',
        'Muhamad',
        'male',
        28
    ],
    "2. Ahmad Taufik" : [
        'Ahmad',
        'Tafik',
        'male',
        35
    ]
}
function arrayToObject(add) {
    var date = new Date()
    var data1 = date.getFullyear() - add["1. Abduh Muhamad"[3]];
    var data2 = date.getFullyear() - add["2. Ahmad Taufik"[3]]

    var people1 = {
        firtname : add ["1. Abduh Muhamad"][0],
        lastname : add ["1. Abduh Muhamad"][1],
        gender : add ["1. Abduh Muhamad"][2],
        age : data1
    }

    var people2 = {
        firtname : add ["2. Ahmad Taufik"][0],
        lastname : add ["2. Ahmad Taufik"][1],
        gender : add ["2. Ahmad Taufik"] [2],
        age : data2
    }
}



console.log("1. Abduh Muhamad : ", people1);
