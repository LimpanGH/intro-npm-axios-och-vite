import axios from 'axios' // Importerar
const url = "https://jsonplaceholder.typicode.com/users"
async function getUser(url) {
    try {
      const response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  getUser(url)