export const getUser = (userId) => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json())

export const getPhoto = (photoId) => new Promise((resolve, reject) => fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
    .then(res => res.json())
    .then(data => data?.id ? resolve(data) : reject('Error!')));
