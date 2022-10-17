import { FunctionComponent, useEffect, useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.components'
import {
  PaymentConfiramtionContainer,
  PaymentConfiramtionContent
} from './payment-confirmation.styles'
import Colors from '../../theme/theme.colors'
import { CartContext } from '../../contexts/cart.context'

const PaymentConfirmationPage: FunctionComponent = () => {
  const navigate = useNavigate()
  const handleBackHome = () => {
    navigate('/')
  }
  const { clearProducts } = useContext(CartContext)

  const [searcParams] = useSearchParams()
  const status = searcParams.get('success')
  const isCanceled = searcParams.get('canceled') === 'true'

  useEffect(() => {
    if (status === 'true') {
      clearProducts()
    }
  }, [status])
  return (
    <>
      <Header />
      <PaymentConfiramtionContainer>
        <PaymentConfiramtionContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi realizada com sucesso</p>
            </>
          )}
          {status === 'false' ||
            (isCanceled && (
              <>
                <AiOutlineCloseCircle size={120} color={Colors.error} />
                <p>
                  Ocorreu um erro ao realizar o pagamento. Por favor, tente
                  novamente
                </p>
              </>
            ))}
          <CustomButton startICon={<AiOutlineHome />} onClick={handleBackHome}>
            Ir para a pagina inicial
          </CustomButton>
        </PaymentConfiramtionContent>
      </PaymentConfiramtionContainer>
    </>
  )
}
export default PaymentConfirmationPage
