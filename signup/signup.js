let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let psw = document.getElementById("password");
let confirmPsw = document.getElementById("password_confirmation");

let submitButton = document.getElementById("submitBtn");
let errorMsg = document.getElementsByClassName("errorMsg");

submitButton.addEventListener("click", handleSubmit);
function handleSubmit() {
    let isValid = checkValidate();
    if(isValid) {
        document.getElementById("popup-signup").classList.add("show");
        document.getElementById("form-signup").classList.add("hidden");
    }
}

function checkValidate() {
    let isValid = true;
    
    let fullnameValue = fullName.value;
    let emailValue = email.value;
    let pswValue = psw.value;
    let confirmPswValue = confirmPsw.value;

    if(fullnameValue == "") {
        setError(0, "Username cannot be blank");
        isValid = false;
        console.log("test");
    }
    else if(!isValidName(fullnameValue)){
        setError(0, "Invalid full name");
        isValid = false;
    }
    else setSuccess(0);

    if(emailValue == "") {
        setError(1, "Email cannot be blank");
        isValid = false;
    }
    else if(!isValidEmail(emailValue)){
        setError(1, "Invalid email");
        isValid = false;
    }
    else setSuccess(1);

    if(pswValue == "") {
        setError(2, "Password cannot be blank");
        isValid = false;
    }
    else if(!isValidPsw(pswValue)){
        setError(2, "Invalid password");
        isValid = false;
    }
    else setSuccess(2);

    if(confirmPswValue == "") {
        setError(3, "Password confirmation cannot be blank");
        isValid = false;
    }
    else if(pswValue != confirmPswValue) {
        setError(3, "The password confirmation does not match");
        isValid = false;
    }
    else setSuccess(3);

    return isValid;
}

function setError(index, message){
    errorMsg[index].innerHTML = message;
}

function setSuccess(index) {
    errorMsg[index].innerHTML = "";
}

function isValidName(name) {
    const REG_NAME = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;
    return REG_NAME.test(name);
}

function isValidEmail(email) {
    const REG_EMAIL = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return REG_EMAIL.test(email);
}

function isValidPsw(password) {
    const REG_PSW = /^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    return REG_PSW.test(password);
}

function closePopup() {
    document.getElementById("popup-signup").classList.remove("show");
    document.getElementById("form-signup").classList.remove("hidden");
}