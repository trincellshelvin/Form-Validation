function tooShort(userName){
    if(userName.length < 5){
        return true;
    } else{
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

let toosHort = document.getElementById("tooShort");
let haSi = document.getElementById("hasI");
let firstNameInput = document.getElementById("firstName");

function handleChangeinuserName(){
    console.log("Hello!")
    let input = firstNameInput.value;
    let isShort = toosHort(input);
    if(isShort){
        toosHort.style.color = "green";
        console.log("&#x2713 Username is meets requirements!")
    } else{
        toosHort.style.color = "pink";
        console.log("Username must be more than 5 characters")
    }
}

function handleChangeInI(){
    let input = firstNameInput.value;
    let i = haSi(input);
    if(i){
        haSi.style.color = "green";
    } else {
        haSi.style.color = "red";
    }
}

firstNameInput.addEventListener("input", handleChangeinuserName)
firstNameInput.addEventListener("input", handleChangeInI)

function validateEmailInput(emailAddress) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(emailAddress);
}

function validateForm() {
    let x = document.forms["myForm"]["firstName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
