const api = "https://reactnd-books-api.udacity1.com"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllData = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)
    .catch(error => error)    