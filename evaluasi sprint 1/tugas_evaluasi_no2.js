var nilai = prompt("Inputkan nilai akhir:");
var grade = "";

switch (true){
    case nilai >= 90:
        grade = "A"
        break;
    case nilai >= 80:
        grade = "B+"
        break;
    case nilai >= 70:
        grade = "B"
        break;
    case nilai >= 60:
        grade = "C+"
        break;
    case nilai >= 50:
        grade = "C"
        break;
    case nilai >= 40:
        grade = "D"
        break;
    case nilai >= 30:
        grade = "E"
        break;
    default:
        grade = "F"
}
document.write("grade anda :" + grade );




    