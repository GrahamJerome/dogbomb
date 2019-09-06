import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
  secret: process.env.REACT_APP_UNSPLASH_SECRET
});

export const getRandom = (category) =>
  unsplash.photos.getRandomPhoto({query: category})
    .then(res => {
      console.log(res)
      if (res.status === 403) {
        throw 'You have exceeded your Unsplash API requests for this hour.'
      } else {
        return res.json()
      }
    })
    .then(data => data.urls.small)
    .catch(err => {
      console.log(err)
      alert(err)
    })
