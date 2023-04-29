/*
 * Операція spread (розпилення)
 * - Array.prototype.concat() і аналог через spread
 */

/*
 * Пошук най меншої або най більшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

/*
 * Зшиваємо декілька масивів массивов в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
// console.log(allTemps);

/*
 * Розпилення обєктів spread
 */
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

//наприклад
// є системні налаштування
const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};
// юзер поміняв деякі налаштування
const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};
// в результаті базові залишились і ті що змінились
const finalSettings = {};

// console.log(finalSettings);
