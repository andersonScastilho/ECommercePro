import User from '../../../types/user.types'
import UserActionTypes from './user.actions.type'

interface InitialState {
  currentUser: User | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  currentUser: null,
  isAuthenticated: false
}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currenUser: action.payload, isAuthenticated: true }
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null, isAuthenticated: false }
    default:
      return {
        ...state
      }
  }
}
export default userReducer
