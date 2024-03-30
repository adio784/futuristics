import axios from 'axios'

const baseUrl = "https://sfapi.zuuroo.com"

export const registerUser = async (payload) => {
    const response = await axios.post(`${baseUrl}/api/auth/register`, payload)
    console.log(response)
    return response
};

export const verifyEmail = async (payload) => {
  const response = await axios.post(`${baseUrl}/email/verify`, payload, {
    headers : {
      Accept: 'application/json',
      Authorization : `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
      'Content-Type': 'application/json'
    }
  })
  console.log(response)
  return response
}

export const loginUser = async payload => {
  const response = await axios.post(
    `${baseUrl}/api/auth/login`,
    payload
  )
  console.log(response?.data)
  const { access_token } = response.data
  localStorage.setItem('userToken', JSON.stringify(access_token))

  const isUser = JSON.parse(localStorage.getItem("userToken"));
  console.log(isUser)
  return response
}
