import styled from 'styled-components'

export const Page = styled.main`
  min-height: 600px;
  padding: 56px 0;
`

export const CheckoutCard = styled.section`
  width: min(620px, 100%);
  margin: 0 auto;
  padding: 32px;
  background: #e66767;
  color: #ffebd9;

  @media (max-width: 640px) {
    padding: 24px 16px;
  }
`

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 900;
`

export const Subtitle = styled.p`
  margin: -12px 0 24px;
  font-size: 14px;
  line-height: 22px;
`

export const FormGrid = styled.div`
  display: grid;
  gap: 16px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

type FieldProps = {
  $hasError?: boolean
}

export const Field = styled.div<FieldProps>`
  display: grid;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    width: 100%;
    height: 36px;
    border: 2px solid ${({ $hasError }) => ($hasError ? '#8b1e1e' : '#ffebd9')};
    padding: 0 10px;
    background: #ffebd9;
    color: #4b1f1f;
    font: inherit;
    outline: none;
  }

  input:focus {
    border-color: #fff;
  }

  small {
    min-height: 16px;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
  }
`

export const Actions = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 24px;
`

export const PrimaryButton = styled.button`
  width: 100%;
  min-height: 36px;
  border: 0;
  padding: 8px 12px;
  background: #ffebd9;
  color: #e66767;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`

export const SecondaryButton = styled.button`
  width: 100%;
  min-height: 36px;
  border: 1px solid #ffebd9;
  padding: 8px 12px;
  background: transparent;
  color: #ffebd9;
  font-weight: 700;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  margin-top: 16px;
  padding: 10px 12px;
  background: #ffebd9;
  color: #a33030;
  font-size: 13px;
  font-weight: 700;
`

export const EmptyState = styled.div`
  width: min(620px, 100%);
  margin: 0 auto;
  padding: 32px;
  border: 1px solid #e66767;
  background: #fff;

  h1 {
    margin-bottom: 8px;
    color: #e66767;
  }

  p {
    margin-bottom: 20px;
    color: #8f4b4b;
  }

  a {
    display: inline-block;
    padding: 10px 14px;
    background: #e66767;
    color: #ffebd9;
    font-weight: 700;
  }
`

export const ConfirmationText = styled.div`
  display: grid;
  gap: 16px;
  font-size: 14px;
  line-height: 22px;
`

export const OrderId = styled.strong`
  display: inline-block;
  word-break: break-word;
`

export const HomeLink = styled.a`
  display: block;
  width: 100%;
  margin-top: 24px;
  padding: 10px 14px;
  background: #ffebd9;
  color: #e66767;
  text-align: center;
  font-weight: 900;
`
