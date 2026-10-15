const sortAsc = arr => [...arr].sort((a, b) => a - b);  
const sortDesc = arr => [...arr].sort((a, b) => b - a); 
console.log("2. Сортировка вверх:", sortAsc([3, 1, 5, 2]));
console.log("2. Сортировка вниз:", sortDesc([3, 1, 5, 2]));