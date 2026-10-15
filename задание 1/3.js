function buildDoctorMessage(obj) {
    return "Пациент " + obj.name + ", врач " + obj.doctor + ", время " + obj.time;
}
console.log("3. Сообщение:", buildDoctorMessage({ name: "Иван", doctor: "Петров", time: "12:00" }));