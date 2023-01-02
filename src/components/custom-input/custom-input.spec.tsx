import { render } from '@testing-library/react'
import Colors from '../../theme/theme.colors'
import CustomInput from './custom-input.component'

describe('Custom Input', () => {
  it('should render with error if hasError is true', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem ipsum" hasError={true}></CustomInput>
    )
    const input = getByPlaceholderText('Lorem ipsum')
    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` })
  })
})
