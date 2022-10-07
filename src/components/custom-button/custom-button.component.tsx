import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'

// Styles
import { CustomButtonContainer, IconContainer } from './custom-button.styles'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startICon?: React.ReactNode
  children?: string
}
const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  startICon,
  ...rest
}) => {
  return (
    <CustomButtonContainer {...rest}>
      {startICon && <IconContainer>{startICon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
