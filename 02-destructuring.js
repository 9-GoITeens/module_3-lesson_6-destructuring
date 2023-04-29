/*
 * Деструктуризація обєкта
 * - Значення за замовчуванням
 * - Імя змінної відмінне від імені властивості
 */

const playlist = {
  name: 'Мій супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  autor: 'Mango',
};

/*
 * Глибока деструктуризація
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

/*
 * Деструктуризація масивів
 */

const rgb = [255, 100, 80];

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

/*
 * Операція rest (збір)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обєкт налаштувань»
 * - деструктуризація параметра-обєкта в підписі функції
 * - rest при деструктуризаціи в підписі
 */

const showProfileInfo = function (userProfile) {
  //   console.log(userProfile);
};

// showProfileInfo(profile);
