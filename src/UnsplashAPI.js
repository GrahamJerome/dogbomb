import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "15bf48e3b6c618e86ba481c00d7ee8d1a2d69e9ab9402ed84299ea765a8d0d14",
  secret: "f9d6d9e9615eb5230c5c2a7554612668786d20d96e34ba6143ef8b9e92d120f3"
});

export const getRandom = () =>
  unsplash.photos.getRandomPhoto()
    .then(res => res.json());


// const api = "https://api.unsplash.com/search/photos?client_id=15bf48e3b6c618e86ba481c00d7ee8d1a2d69e9ab9402ed84299ea765a8d0d14&page=1&query="


// // Generate a unique token for storing your bookshelf data on the backend server.
// let token = localStorage.token
// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)

// const headers = {
//   'Accept': 'application/json',
//   'Authorization': token
// }

// export const get = (bookId) =>
//   fetch(`${api}/books/${bookId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)

// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)

// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())

// export const search = (query) =>
//   fetch(`${api}/search`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
//   }).then(res => res.json())
//     .then(data => data.books)
