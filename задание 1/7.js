let fakeLocalStorage = {}; 
function fakeRegister(obj) {
    fakeLocalStorage["user"] = JSON.stringify(obj);
    return "Данные сохранены в localStorage";
}

console.log("7. Регистрация:", fakeRegister({ login: "viktoria" }));