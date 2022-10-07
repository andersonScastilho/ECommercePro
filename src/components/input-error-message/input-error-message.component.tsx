import { FunctionComponent } from 'react'

// Styles
import { InputErrorMessageContainer } from './input-error-message.styles'
interface childrenTypeProps {
  children: string
}
const InputErrorMessage: FunctionComponent<childrenTypeProps> = ({
  children
}) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}
export default InputErrorMessage
