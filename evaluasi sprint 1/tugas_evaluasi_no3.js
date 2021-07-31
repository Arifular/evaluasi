// for(var y = 1; y < 10; y++){
//     for(var x = 1; x < 10; x++){
//         if(y == x){
//             document.write(' * ')
//         } else{
//             if(y + x == 10){
//                 document.write(' * ')
//             }else {
//                 document.write(' - ')
//             }
//         }   
//     }
//     document.write('<br>')
// }

for (var y = 1; y < 10; y++){
    for (var x = 1; x < 10; x++){
        if(y == x || y + x == 10 || x == 5 || y == 5){
            document.write(" ❤️ ")
        }else{
            document.write(" 😎 ")
        }
    } document.write('<br>')
}