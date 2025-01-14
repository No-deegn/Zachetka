function checkForm(el) {
const name = el.name.value;
const pass = el.password.value;
const repass = el.checkPassword.value;
const state = el.state.value;

let fail = "";

if(name == "" || pass == "" || state == "")
fail = "Заполните все поля";
else if(name.lenght <+ 1 || name.length > 50)
fail = "Введите корректное имя";
else if(pass != repass)
fail = "Пароли не совпадают";
else if(pass.split("&").length > 1)
fail = "Некорректный пароль"

if(fail != "") {
    document.getElementById('error').innerHTML = fail;
}
    return false;
};