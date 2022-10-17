import { LoadingContainer } from './loadin.styles'
import SyncLoader from 'react-spinners/SyncLoader'
import { FunctionComponent } from 'react'
interface LoadingProps {
  message?: string
}

const LoadingComponent: FunctionComponent<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}
export default LoadingComponent
