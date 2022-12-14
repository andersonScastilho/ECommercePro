import React, { FunctionComponent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/header.components'
import LoadingComponent from '../components/loading/loading.component'

interface childrentIsComponent {
  children: React.ReactNode
}

const AuthenticationGuard: FunctionComponent<childrentIsComponent> = ({
  children
}) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])
  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <LoadingComponent message="Você precisa estar logado para você acessar esta pagina, Você sera redirecionado para a pagina de login" />
      </>
    )
  }
  return <>{children}</>
}
export default AuthenticationGuard
