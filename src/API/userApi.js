import axios from 'axios'

const baseUrl = 'https://sfapi.zuuroo.com'

export const registerUser = async payload => {
  const response = await axios.post(`${baseUrl}/api/auth/register`, payload)
  console.log(response)
  const { access_token } = response.data
  localStorage.setItem('userToken', JSON.stringify(access_token))
  console.log(access_token)

  const userToken = JSON.parse(localStorage.getItem('userToken'))
  console.log(userToken)
  return response
}

export const verifyUserEmail = async (payload) => {
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    console.log(userToken)
    const response = await axios.post(`${baseUrl}/email/verify`, payload, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(response.data)
    return response
};


export const loginUser = async payload => {
  const response = await axios.post(`${baseUrl}/api/auth/login`, payload)
  console.log(response?.data)
  return response
}


export const sendMessage = async (payload) => {
  const userToken = JSON.parse(localStorage.getItem('userToken'));
  console.log(userToken)
  const response = await axios.post(`${baseUrl}/api/send-message`, payload, {
    headers: {
       Accept: 'application/json',
       Authorization: `Bearer ${userToken}`,
       "Content-Type": 'application/json'
    }
  })
  console.log(response.data)
  return response
}  