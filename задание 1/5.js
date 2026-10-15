function fakeAuth(isAuthorized) {
    if (isAuthorized === true) {
        return "123e4567"; 
    } else {
        return "Ошибка: не авторизован";
    }
}
console.log("Авторизация (true):", fakeAuth(true));
console.log("Авторизация (false):", fakeAuth(false));