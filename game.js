let num = Math.round(Math.random()*2);
let cmp = ["snake","water","gun"]
let cinp = cmp[num];
let uinp = prompt("enter any below option: snake/water/gun");
const match = ()=>{
    if(uinp == "gun" && cinp == "snake"){
       return "uinp";
    }
    else if(uinp == "gun" && cinp == "water"){
        return "cinp";
     }
     else if(uinp == "snake" && cinp == "gun"){
        return "cinp";
     }
     else if(uinp == "snake" && cinp == "water"){
        return "uinp";
     }
     else if(uinp == "water" && cinp == "snake"){
        return "cinp";
     }
     if(uinp == "water" && cinp == "gun"){
        return "uinp";
     }
     else{
        return "none";
     }
};

let result  = match(uinp,cinp);

if(uinp==cinp){
    document.write(`computer chose :${cinp} and user chose: ${uinp}`);
    console.log(`user have entered same option as computer choosed, ${cinp} and ${uinp}`);

}
else if(result == "uinp"){
    document.write(`computer chose :${cinp} and user chose: ${uinp}`);
    console.log("user is winner");

}
else if(result == "cinp"){
    document.write(`ccomputer choses :${cinp} and user chose: ${uinp}`);
    console.log("computer is winner");

}
else{
    console.log(`you have entered incorrect values please try again CPU is ${cinp} and user: ${uinp}`);
    
}
// console.log(cinp);