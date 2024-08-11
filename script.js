function tooShort(userName){
    if(userName.length < 5){
        return true;
    }else{
        return false;
    }
}

function hasI(userName){
    if(userName.includes("i")){
        return true;
    } else{
        return false
    }
}

let tooShort = document.getElementById("tooShort");
let hasI = document.getElementById("hasI");
let firstNameInput = document.getElementById("firstName");

function handleChangeinuserName(){
    console.log("Hello!")
    let input = firstNameInput.value;
    let isShort = tooShort(input);
    if(isShort){
        tooShort.style.color = "green";
        console.log("&#x2713 Username is meets requirements!")
    } else{
        tooShort.style.color = "pink";
        console.log("Username must be more than 5 characters")
    }
}

function handleChangeInI(){
    let input = firstNameInput.value;
    let i = hasI(input);
    if(i){
        hasI.style.color = "green";
    } else {
        hasI.style.color = "red";
    }
}

firstNameInput.addEventListener("input", handleChangeinuserName)
firstNameInput.addEventListener("input", handleChangeInI)