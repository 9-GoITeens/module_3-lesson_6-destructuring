/*
 * Операція spread (розпилення)
 * - Array.prototype.concat() і аналог через spread
 */
// const numbers = [1, 2, 3].concat([7, 8, 9], [4, 5, 6]);

// const numbers = [...[1, 2, 3], ...[1, 2, 3], 4, 5, 6, ...[1, 2, 3]];

// console.log(numbers);

/*
 * Пошук най меншої або най більшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.min(...temps));
// console.log(Math.max(...temps));

// console.log(Math.max(1, 5, 17, 3));
// console.log(Math.min(1, 5, 17, 3));

/*
 * Зшиваємо декілька масивів в один через spread
 */
const lastWeekTemps = [{ a: 1, b: 2, c: 3 }];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// const allTemps = [lastWeekTemps, currentTemps, nextWeekTemps];
const allTemps = [...currentTemps, ...lastWeekTemps, ...nextWeekTemps];
// console.log(allTemps);

/*
 * Розпилення обєктів spread
 */
const b = { x: 0, z: 3 };
const a = { x: 1, y: 2 };

const c = {
  ...b,
  mame: 'Mango',
  ...a,
};

// console.log(c);

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
const finalSettings = {
  theme: 'light',
  showNotifications: false,
  hideSidebar: true,
};

// console.log(finalSettings);
