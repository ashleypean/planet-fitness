import axios from 'axios'

const API = {}

API.login = async (user) => {
  try {
    const response = await axios.post('/login', {
      email: user.username, 
      password: user.password
    })
    
    return response.data

  }catch(err) {
    return err
  }
}

API.redirect = async () => {
  try{
    await axios.get('/profile')
  }catch(err) {
    console.log(err)
  }
}

API.register = async(user) => {
  try {
    const response = await axios.post('/signup', {
      email: user.username, 
      password: user.password, 
      name: 'Ashley'
    })

    return response.data
  }catch(err) {
    console.log(err)
  }
}

export default API