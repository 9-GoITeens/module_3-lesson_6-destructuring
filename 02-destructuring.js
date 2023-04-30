/*
 * Деструктуризація обєкта
 * - Значення за замовчуванням
 * - Імя змінної відмінне від імені властивості
 */

// const playlist = {
//   name: 'Мій супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   // autor: 'Polly',
// };

// const {
//   rating,
//   tracks,
//   name,
//   trackCount: trackOfCount = 0,
//   autor = 'Mango',
// } = playlist;

// console.log(rating, tracks, name, trackOfCount, autor);

// const {} = obj;
// const [] = ar;

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

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

/*
 * Деструктуризація масивів
 */

const rgb = [255, 100, 80];

const [a, b, c] = rgb;

// console.log(a, b, c);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);
for (const entry of entries) {
  const name = entry[0];
  const rating = entry[1];

  // console.log(name, rating);
}

// console.log(entries);

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

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);

// const restProps = {
//   auror: profile.avatar,
//   stats: profile.stats,
// };

// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обєкт налаштувань»
 * - деструктуризація параметра-обєкта в підписі функції
 * - rest при деструктуризаціи в підписі
 */

const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...resProps } = userProfile;

  console.log(name, tag, location);
  console.log(resProps);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);
