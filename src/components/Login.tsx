import React, { useEffect } from 'react'
import { useReducer } from 'react'


interface authState {
  validando: boolean,
  token: string | null,
  userName: string,
  name: string
}

const initialState = {
  validando: true,
  token: null,
  userName: '',
  name: ''
}

type LoginPayload = {
  userName: string,
  name: string
}

type AuthAction = 
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload}


const authReducer = (state: authState, action: AuthAction): authState  => {
  
  switch (action.type) {
    case 'logout':
      return {
        ...state,
        validando: false,
        token: null,
        name: '',
        userName: ''
      }
      case 'login':
        const {name, userName} = action.payload
        return {
          ...state,
          validando: false,
          token: '12dewf',
          name,
          userName
        }

    default:
      return state
  }
}

export const Login = () => {
  const [{validando, token, name}, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'logout'
      })
    }, 1500)
  }, [])


  if(validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
            Validando...
        </div>
      </>
    )
  }

  const handleLogin = () => {
    dispatch({
      type: 'login',
      payload: {
        name: 'nacho',
        userName: 'sonidiaz'
      }
    })
  }
  const logout = () => {
    dispatch({
      type: 'logout'
    })
  }
  return (
    <div>
      <h3>Login</h3>
      {
        (token) ? (
          <div className="alert alert-success">
            Autenticado como {name}
          </div>
        ) : (
          <div className="alert alert-danger">
            No autenticado
          </div>
        )
      }

      {
        (token) ? (
          <button className="btn btn-danger"
            onClick={logout}
          >
            LogOut
          </button>
        ) : (
          <button className="btn btn-primary"
            onClick={handleLogin}
          >
            Login
          </button>
        )
      }
      
    </div>
  )
}
