import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  CreditCardHeading,
  CreditCardBgImage,
  CardNumber,
  CardHolderHeading,
  CardHolderName,
  PaymentMethodContainer,
  PaymentMethodInputCard,
  PaymentMethodHeading,
  NumberInput,
  NameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNo, setCardNo] = useState('')
  const [name, setName] = useState('')

  const onChangeCardNo = event => setCardNo(event.target.value)
  const onChangeName = event => setName(event.target.value)

  return (
    <AppContainer>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <hr width="170" color="#ffd773" />
        <CreditCardBgImage data-testid="creditCard">
          <CardNumber>{cardNo}</CardNumber>
          <CardHolderHeading>CARDHOLDER NAME</CardHolderHeading>
          <CardHolderName>{name.toUpperCase()}</CardHolderName>
        </CreditCardBgImage>
      </CreditCardContainer>
      <PaymentMethodContainer>
        <PaymentMethodInputCard>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <NumberInput
            onChange={onChangeCardNo}
            value={cardNo}
            type="text"
            placeholder="Card Number"
          />
          <NameInput
            onChange={onChangeName}
            value={name}
            type="text"
            placeholder="Cardholder Name"
          />
        </PaymentMethodInputCard>
      </PaymentMethodContainer>
    </AppContainer>
  )
}

export default CreditCard
