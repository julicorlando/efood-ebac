import styled from 'styled-components'

export const CheckoutCard = styled.section`
  color: #ffebd9;
`

export const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
`

export const FormGrid = styled.div`
  display: grid;
  gap: 8px;
`

export const Row = styled.div<{ $card?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $card }) =>
    $card ? 'minmax(0, 1fr) 87px' : '1fr 1fr'};
  gap: 16px;
`

export const Field = styled.div<{ $hasError?: boolean }>`
  display: grid;
  min-width: 0;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    width: 100%;
    height: 32px;
    border: 2px solid ${({ $hasError }) => ($hasError ? '#8b1e1e' : '#ffebd9')};
    padding: 0 8px;
    background: #ffebd9;
    color: #4b1f1f;
    font: inherit;
  }

  small {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
  }

  small:empty {
    display: none;
  }
`

export const Actions = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 24px;
`

export const PrimaryButton = styled.button`
  width: 100%;
  min-height: 24px;
  border: 0;
  padding: 4px 8px;
  background: #ffebd9;
  color: #e66767;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`

export const SecondaryButton = styled(PrimaryButton)``

export const ErrorMessage = styled.p`
  margin-top: 16px;
  padding: 8px;
  background: #ffebd9;
  color: #a33030;
  font-size: 13px;
`

export const ConfirmationText = styled.div`
  display: grid;
  gap: 16px;
  font-size: 14px;
  line-height: 22px;
`

export const OrderId = styled.strong`
  word-break: break-word;
`
