const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar:
    'https://images.pexels.com/photos/16110027/pexels-photo-16110027.jpeg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const makeProfileMarkup = function (userProfile) {
  const {
    avatar = 'https://i.pravatar.cc/400?img=6',
    name,
    tag,
    location = 'Planet Earth',
    stats: { followers, views, likes },
  } = userProfile;

  return `<div>
    <img src="${avatar}" width="400" alt="user avatar">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
      <li>Followers: ${followers}</li>
      <li>Views: ${views}</li>
      <li>Likes: ${likes}</li>
    </ul>
  </div>`;
};

const markup = makeProfileMarkup(profile);

console.log(markup);

document.body.insertAdjacentHTML('afterbegin', markup);
