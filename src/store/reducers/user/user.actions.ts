import User from '../../../types/user.types'
import UserActionTypes from './user.actions.type'

export const LoginAction = (payload: User) => ({
  type: UserActionTypes.LOGIN,
  payload
})
export const LogoutAction = () => ({
  type: UserActionTypes.LOGOUT
})
