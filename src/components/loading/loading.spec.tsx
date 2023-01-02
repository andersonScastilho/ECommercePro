import { render } from '@testing-library/react'
import LoadingComponent from './loading.component'

describe('Loading', () => {
  it('should shen a message if there is one', () => {
    const { getByText } = render(<LoadingComponent message="aguarde" />)

    getByText('aguarde')
  })
})
