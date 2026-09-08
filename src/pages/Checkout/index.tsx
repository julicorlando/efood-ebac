import { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import { usePurchaseMutation } from '../../services/api'
import type { RootState } from '../../store'
import { limpar } from '../../store/reducers/cart'
import { Container } from '../../styles/shared'
import {
  Actions,
  CheckoutCard,
  ConfirmationText,
  EmptyState,
  ErrorMessage,
  Field,
  FormGrid,
  HomeLink,
  OrderId,
  Page,
  PrimaryButton,
  Row,
  SecondaryButton,
  Subtitle,
  Title
} from './styles'

type Step = 'delivery' | 'payment' | 'confirmation'

type FormValues = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
  cardName: string
  cardNumber: string
  cardCode: string
  month: string
  year: string
}

const currentYear = new Date().getFullYear()

const validationSchema = Yup.object({
  receiver: Yup.string()
    .min(3, 'Informe o nome de quem irá receber')
    .required('Campo obrigatório'),
  address: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  zipCode: Yup.string()
    .matches(/^\d{5}-?\d{3}$/, 'Informe um CEP válido')
    .required('Campo obrigatório'),
  number: Yup.number()
    .typeError('Informe um número válido')
    .positive('Informe um número válido')
    .integer('Informe um número válido')
    .required('Campo obrigatório'),
  complement: Yup.string(),
  cardName: Yup.string().min(3, 'Informe o nome impresso no cartão').required('Campo obrigatório'),
  cardNumber: Yup.string()
    .test('card-number', 'Informe um número de cartão válido', (value) => {
      const digits = (value || '').replace(/\D/g, '')
      return digits.length >= 13 && digits.length <= 19
    })
    .required('Campo obrigatório'),
  cardCode: Yup.string()
    .matches(/^\d{3,4}$/, 'Informe um CVV válido')
    .required('Campo obrigatório'),
  month: Yup.number()
    .typeError('Mês inválido')
    .min(1, 'Mês inválido')
    .max(12, 'Mês inválido')
    .required('Campo obrigatório'),
  year: Yup.number()
    .typeError('Ano inválido')
    .min(currentYear, 'O cartão está vencido')
    .max(currentYear + 25, 'Ano inválido')
    .required('Campo obrigatório')
})

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = useSelector((state: RootState) => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price, 0)
  const [step, setStep] = useState<Step>('delivery')
  const [orderId, setOrderId] = useState('')
  const [requestError, setRequestError] = useState('')
  const [purchase, { isLoading }] = usePurchaseMutation()

  const formik = useFormik<FormValues>({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      month: '',
      year: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setRequestError('')

      try {
        const response = await purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.price
          })),
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber.replace(/\s/g, ''),
              code: Number(values.cardCode),
              expires: {
                month: Number(values.month),
                year: Number(values.year)
              }
            }
          }
        }).unwrap()

        setOrderId(response.orderId)
        setStep('confirmation')
        dispatch(limpar())
      } catch {
        setRequestError('Não foi possível concluir o pedido. Revise os dados e tente novamente.')
      }
    }
  })

  const getError = (field: keyof FormValues) => {
    if (!formik.touched[field] || !formik.errors[field]) return ''
    return String(formik.errors[field])
  }

  const goToPayment = async () => {
    const deliveryFields: Array<keyof FormValues> = [
      'receiver',
      'address',
      'city',
      'zipCode',
      'number'
    ]

    await formik.setTouched(
      {
        ...formik.touched,
        receiver: true,
        address: true,
        city: true,
        zipCode: true,
        number: true
      },
      false
    )

    const errors = await formik.validateForm()
    const hasDeliveryErrors = deliveryFields.some((field) => Boolean(errors[field]))

    if (!hasDeliveryErrors) {
      setStep('payment')
      setRequestError('')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (step === 'confirmation') {
    return (
      <>
        <RestaurantHeader />
        <Page>
          <Container>
            <CheckoutCard>
              <Title>Pedido realizado - <OrderId>{orderId}</OrderId></Title>

              <ConfirmationText>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo de preparação e,
                  em breve, será entregue no endereço fornecido.
                </p>
                <p>Nossos entregadores não estão autorizados a realizar cobranças extras.</p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o recebimento do pedido,
                  garantindo assim sua segurança e bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica.
                  Bom apetite!
                </p>
              </ConfirmationText>

              <HomeLink as={Link} to="/">
                Concluir
              </HomeLink>
            </CheckoutCard>
          </Container>
        </Page>
        <Footer />
      </>
    )
  }

  if (items.length === 0) {
    return (
      <>
        <RestaurantHeader />
        <Page>
          <Container>
            <EmptyState>
              <h1>Seu carrinho está vazio</h1>
              <p>Adicione produtos antes de iniciar a entrega.</p>
              <Link to="/">Ver restaurantes</Link>
            </EmptyState>
          </Container>
        </Page>
        <Footer />
      </>
    )
  }

  return (
    <>
      <RestaurantHeader />

      <Page>
        <Container>
          <CheckoutCard>
            <form onSubmit={formik.handleSubmit} noValidate>
              {step === 'delivery' && (
                <>
                  <Title>Entrega</Title>
                  <Subtitle>Informe os dados do endereço onde o pedido deverá ser entregue.</Subtitle>

                  <FormGrid>
                    <Field $hasError={Boolean(getError('receiver'))}>
                      <label htmlFor="receiver">Quem irá receber</label>
                      <input
                        id="receiver"
                        name="receiver"
                        value={formik.values.receiver}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="name"
                      />
                      <small>{getError('receiver')}</small>
                    </Field>

                    <Field $hasError={Boolean(getError('address'))}>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="street-address"
                      />
                      <small>{getError('address')}</small>
                    </Field>

                    <Field $hasError={Boolean(getError('city'))}>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="address-level2"
                      />
                      <small>{getError('city')}</small>
                    </Field>

                    <Row>
                      <Field $hasError={Boolean(getError('zipCode'))}>
                        <label htmlFor="zipCode">CEP</label>
                        <input
                          id="zipCode"
                          name="zipCode"
                          value={formik.values.zipCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          inputMode="numeric"
                          placeholder="00000-000"
                          autoComplete="postal-code"
                        />
                        <small>{getError('zipCode')}</small>
                      </Field>

                      <Field $hasError={Boolean(getError('number'))}>
                        <label htmlFor="number">Número</label>
                        <input
                          id="number"
                          name="number"
                          value={formik.values.number}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          inputMode="numeric"
                        />
                        <small>{getError('number')}</small>
                      </Field>
                    </Row>

                    <Field>
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <input
                        id="complement"
                        name="complement"
                        value={formik.values.complement}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <small />
                    </Field>
                  </FormGrid>

                  <Actions>
                    <PrimaryButton type="button" onClick={goToPayment}>
                      Continuar com o pagamento
                    </PrimaryButton>
                    <SecondaryButton type="button" onClick={() => navigate('/carrinho')}>
                      Voltar para o carrinho
                    </SecondaryButton>
                  </Actions>
                </>
              )}

              {step === 'payment' && (
                <>
                  <Title>Pagamento - Valor a pagar {formatPrice(total)}</Title>
                  <Subtitle>Preencha os dados do cartão para concluir o pedido.</Subtitle>

                  <FormGrid>
                    <Field $hasError={Boolean(getError('cardName'))}>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        id="cardName"
                        name="cardName"
                        value={formik.values.cardName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="cc-name"
                      />
                      <small>{getError('cardName')}</small>
                    </Field>

                    <Field $hasError={Boolean(getError('cardNumber'))}>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        value={formik.values.cardNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        inputMode="numeric"
                        autoComplete="cc-number"
                      />
                      <small>{getError('cardNumber')}</small>
                    </Field>

                    <Row>
                      <Field $hasError={Boolean(getError('cardCode'))}>
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          id="cardCode"
                          name="cardCode"
                          value={formik.values.cardCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          inputMode="numeric"
                          autoComplete="cc-csc"
                        />
                        <small>{getError('cardCode')}</small>
                      </Field>

                      <Field $hasError={Boolean(getError('month'))}>
                        <label htmlFor="month">Mês de vencimento</label>
                        <input
                          id="month"
                          name="month"
                          value={formik.values.month}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          inputMode="numeric"
                          placeholder="MM"
                          autoComplete="cc-exp-month"
                        />
                        <small>{getError('month')}</small>
                      </Field>
                    </Row>

                    <Field $hasError={Boolean(getError('year'))}>
                      <label htmlFor="year">Ano de vencimento</label>
                      <input
                        id="year"
                        name="year"
                        value={formik.values.year}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        inputMode="numeric"
                        placeholder="AAAA"
                        autoComplete="cc-exp-year"
                      />
                      <small>{getError('year')}</small>
                    </Field>
                  </FormGrid>

                  {requestError && <ErrorMessage>{requestError}</ErrorMessage>}

                  <Actions>
                    <PrimaryButton type="submit" disabled={isLoading}>
                      {isLoading ? 'Enviando pedido...' : 'Finalizar pedido'}
                    </PrimaryButton>
                    <SecondaryButton
                      type="button"
                      disabled={isLoading}
                      onClick={() => {
                        setStep('delivery')
                        setRequestError('')
                      }}
                    >
                      Voltar para a edição de endereço
                    </SecondaryButton>
                  </Actions>
                </>
              )}
            </form>
          </CheckoutCard>
        </Container>
      </Page>

      <Footer />
    </>
  )
}

export default Checkout
