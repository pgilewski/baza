import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { useNavigate } from "react-router-dom";
import NotyfContext from './NotyfContext'

type UserProps = {
    username: string;
    email: string;
};

type authContextType = {
    user: boolean | UserProps;
    login: (formState: any) => Promise<void>;
    logout: () =>  Promise<void>;
};

const authContextDefaultValues: authContextType = {
    user: false,
    login: (async () => {}),
    logout: (async () => {}),
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props){

    let navigate = useNavigate();
    const notyf = useContext(NotyfContext)

    const [user, setUser] = useState<UserProps | boolean >(false);

    const login = async (formState:any) => {
        console.log(formState)
        const { username, password } = formState
        if (username === '') {
          notyf.error("Username can't be empty.")
        } else if (password === '') {
          notyf.error("Password can't be empty.")
        } else {
          try {
            const user = await Auth.signIn({
              username,
              password,
            })
            console.log(user)

            if (user) {
              console.log(user)
              notyf.success('You sucessfully logged in.')
              navigate(`/app/`);
              setUser(true);
            } else {
              notyf.error(`Couldn't log in. Check your username or password.`)
            }
          } catch (error) {
            notyf.error(`Couldn't log in. Check your username or password.`)
          }
        }
      }

    const logout = async () => {
        setUser(false);
        localStorage.removeItem('user')
        await Auth.signOut()
        navigate('/')
        notyf.success('You logged out.')
    };

    const value = {
        user,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

//wrapper for the provieder
// export const AuthProvider2: React.FC<AuthProps> = (props: AuthProps) => {
//   const AuthContext = createContext(null)
//   const { user, children } = props;
//   const [currentUser, setCurrentUser] = useState(user)

//   return (
//     <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

export const useAuthContext = () => useContext(AuthContext)