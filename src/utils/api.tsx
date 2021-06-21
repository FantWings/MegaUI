import { fetchData } from './fetch'
import { useHistory } from 'react-router'

const baseURL = 'http://127.0.0.1:4523/mock/368264'

const apiAuth = `${baseURL}/auth`
const apiInstance = `${baseURL}/instance`

// Auth API
export function AuthAPI() {
  const history = useHistory()
  // Login
  const logIn = async (form: any) => {
    await fetchData(
      `${apiAuth}/login`,
      'POST',
      {},
      {
        email: form.username,
        password: form.password,
      }
    ).then((data) => {
      if (data.token !== undefined) {
        localStorage.setItem('sessionToken', data.token)
        history.push('/admin')
      }
    })
  }

  // Logout
  const logOut = async () => {
    await fetchData(`${apiAuth}/signOut`, 'DELETE', {
      token: localStorage.getItem('sessionToken'),
    })
    localStorage.removeItem('sessionToken')
    history.push('/login')
  }
  return { logIn, logOut }
}

// InstanceAPI
export function InstanceAPI() {
  const getInstanceList = async () => {
    const response = await fetchData(`${apiInstance}/list`, 'GET')
    return response
  }
  return { getInstanceList }
}
