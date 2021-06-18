import { userToken } from '../Type'

const login = {
  token: ""
}

const loginReducer = function (state = login, action) {
  switch (action.type) {
    case userToken:
      return {
        ...state,
        token: action.value
      }
    default:
      return state
  }
}

export default loginReducer