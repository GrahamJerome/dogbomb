import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
  secret: process.env.REACT_APP_UNSPLASH_SECRET
});

// This will request an image based on the query category
// and the window width and height to reduce file size.
export const getRandom = (category) =>
  unsplash.photos.getRandomPhoto({
    width: window.innerWidth,
    height: window.innerHeight,
    query: category
  })
    .then(res => {
      if (res.status === 403) {
        throw new Error('You have exceeded your Unsplash API requests for this hour.')
      } else {
        return res.json()
      }
    })
    .then(data => data.urls.custom )
    .catch(err => {
      console.log(err)
      alert(err)
    })
