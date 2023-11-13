import { createContext, ReactNode, useContext, useState } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import NotyfContext from './NotyfContext'

type UserProps = {
  username: string
  email: string
}

type authContextType = {
  user: UserProps | false
  setUser: any
  login: (formState: any) => Promise<void>
  signUp: (formState: any) => Promise<void>
  logout: () => Promise<void>
}

const authContextDefaultValues: authContextType = {
  user: false,
  setUser: async () => {},
  login: async () => {},
  signUp: async () => {},
  logout: async () => {}
}

const AuthContext = createContext<authContextType>(authContextDefaultValues)

export function useAuth() {
  return useContext(AuthContext)
}

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const navigate = useNavigate()

  const notyf = useContext(NotyfContext)

  const [user, setUser] = useState<UserProps | false>(false)

  const login = async (formState: any) => {
    const { username, password } = formState
    if (username === '') {
      notyf.error("Username can't be empty.")
    } else if (password === '') {
      notyf.error("Password can't be empty.")
    } else {
      try {
        const userInfo = await Auth.signIn({
          username,
          password
        })
        const user = {
          username: userInfo.username,
          email: userInfo.attributes.email
        }

        if (userInfo) {
          setUser(user)
          notyf.success('You sucessfully logged in.')
          navigate(`/app/`)
        } else {
          console.log(userInfo)

          notyf.error(`Couldn't log in. Check your username or password.`)
        }
      } catch (error: any) {
        const getKeys = function (error: any) {
          const keys = []
          for (const key in error) {
            keys.push(key)
          }
          return keys
        }
        notyf.error(error.code)
      }
    }
  }

  const logout = async () => {
    await Auth.signOut()
    setUser(false)
    localStorage.removeItem('user')
    navigate('/')
    notyf.success('You logged out.')
  }

  const signUp = async (formState: any) => {
    const { username, email, password } = formState
    if (password === '') {
      notyf.error("Password can't be empty.")
    } else if (username === '') {
      notyf.error("Username can't be empty.")
    } else if (email === '') {
      notyf.error("Email can't be empty.")
    } else {
      try {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email
          }
        }).then((user) => {
          notyf.success(
            'You have created an account. Confirm it by going to your e-mail.'
          )
        })
      } catch (error) {
        notyf.error('An account with the given email already exists.')
      }
    }
  }

  const value = {
    user,
    setUser,
    login,
    logout,
    signUp
  }

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}

export const useAuthContext = () => useContext(AuthContext)
