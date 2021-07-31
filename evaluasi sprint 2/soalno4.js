for (var y = 1; y < 10; y++){
    for (var x = 1; x < 10; x++){
        if(y == x){
            document.write(y * 2 - 1)
        }else if(x == 9 - (y - 1)){
            document.write(x * 2 - 2)
        }else if (x == 5){
            document.write(y * 2 - 1)
        }else if (y == 5){
            document.write(x * 2 - 2)
        }
        else{
            document.write(" _ ")
        }
    }
    document.write("<br>")
        
}