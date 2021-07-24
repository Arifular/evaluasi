var nilai = prompt("Inputkan nilai akhir:");
var grade = "";

switch(nilai >= 90){
    case nilai >= 90:
        grade = "A"
        break;
    case nilai >= 80:
        grade = "B+"
        break;
    case nilai >= 70:
        grade = "B"
    case nilai >= 60:
        grade = "C+"
    case nilai >= 50:
        grade = "C"
    case nilai >= 40:
        grade = "D"
    case nilai >= 30:
        grade = "E"
    default:
        grade = "F"

}
if (grade === "");{
    document.write(`Grade anda: ${grade}`);
}



    