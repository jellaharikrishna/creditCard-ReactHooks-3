import styled from 'styled-components'

export const AppContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
@media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: center;
}
`

export const CreditCardContainer = styled.div`
background-color: #3b4b69;
height: 50%;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (min-width: 768px){
    height: 100%;
}
`

export const CreditCardHeading = styled.h1`
font-family: roboto;
font-size: 28px;
color: #ffffff;
text-align: center;
margin-bottom: 0;

`

export const CreditCardBgImage = styled.div`
background: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
background-size: cover;
height: 200px;
width: 300px;
border-radius: 15px;
margin-top: 30px;
margin-bottom: 30px;
display: flex;
flex-direction: column;
justify-content: flex-end;
@media screen and (min-width: 768px){
    margin-top: 160px;
}

`

export const CardNumber = styled.p`
font-family: roboto;
color: #ffffff;
font-size: 30px;
margin-left: 30px;
margin-bottom: 30px;
`

export const CardHolderHeading = styled.p`
font-family: roboto;
color: #d3d9e0;
font-size: 12px;
margin: 0;
margin-left: 30px;
`

export const CardHolderName = styled.p`
font-family: roboto;
color: #ffffff;
font-size: 14px;
margin-left: 30px;
margin-top: 2px;
height: 20px;
`

export const PaymentMethodContainer = styled.div`
background-color: #ffffff;
height: 50%;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media screen and (min-width: 768px){
    height: 100%;
}
`

export const PaymentMethodInputCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffff;
box-shadow: 0px 0px 2px 5px #f1f1f1;
border-radius: 10px;
padding: 10px;
height: 220px;
width: 320px;
`

export const PaymentMethodHeading = styled.h1`
font-family: roboto;
color: #475569;
text-align: center;
font-size: 28px;
`

export const NumberInput = styled.input`
height: 35px;
width: 90%;
margin-bottom: 25px;
outline: none;
padding-left: 20px;
font-weight: 500;
border: 1px solid #c3cad9;
`

export const NameInput = styled.input`
height: 35px;
width: 90%;
outline: none;
padding-left: 20px;
font-weight: 500;
border: 1px solid #c3cad9;
`