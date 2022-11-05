var isName, isEmail, isPwd, confirm;

// check full name
var fullName = document.getElementById("fullname");
fullName.addEventListener("change", () => {
    var regName = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;
    if(!regName.test(fullName.value)) {
        fullName.nextElementSibling.innerHTML = "Please enter your full name";
        isName = false;
    }
    else {
        fullName.nextElementSibling.innerHTML = "";
        isName = true;
    }
});

// check email
var email = document.getElementById("email");
var checkEmail = email.addEventListener("change", () => {
    var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regEmail.test(email.value)) {
        email.nextElementSibling.innerHTML = "Please enter your email";
        isEmail = false;
    }
    else{
        email.nextElementSibling.innerHTML = "";
        isEmail = true;
    }
});

// check password
var firstPass = document.getElementById("password");
var secondPass = document.getElementById("password_confirmation");
firstPass.addEventListener("change", () => {
    var regPass = /^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    secondPass.value = '';
    if(!regPass.test(firstPass.value)) {
        firstPass.nextElementSibling.innerHTML = "Wrong password";
        isPwd = false;
    }
    else{
        firstPass.nextElementSibling.innerHTML = "";
        isPwd = true;
    }
});

secondPass.addEventListener("change", () => {
    if(firstPass.value != secondPass.value) {
        secondPass.nextElementSibling.innerHTML = "No matching";
        confirm = false;
    }
    else {
        secondPass.nextElementSibling.innerHTML = "";
        confirm = true;
    }
});

// submit and show popup
var submitButton = document.querySelector(".form-submit");
submitButton.addEventListener("click", () => {
    if(isName && isEmail && isPwd && confirm) {
        document.getElementById("popup-signup").classList.add("show");
        document.getElementById("form-signup").classList.add("hidden");
    }
});

function closePopup() {
    document.getElementById("popup-signup").classList.remove("show");
    document.getElementById("form-signup").classList.remove("hidden");}