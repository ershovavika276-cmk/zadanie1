let localStorage = { user: "viktoria" };
let cookie = "";
function fakeAuth() {
    if (localStorage.user) {
        let uuid4 = "123e4567-e89b-12d3-a456-426614174000";
        cookie = uuid4;
        return "Ключ записан в куки: " + cookie;
    }
    return "Нет данных в localStorage";
}

console.log(fakeAuth());