import styled from 'styled-components'

export const Container = styled.div`
  width: min(1024px, calc(100% - 32px));
  margin: 0 auto;
`

export const Brand = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #e66767;
  font-size: 38px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -3px;

  span {
    position: relative;
  }

  small {
    font-size: 9px;
    letter-spacing: 1px;
    font-weight: 900;
    margin-left: 3px;
    margin-top: 8px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
`

export const Button = styled.button`
  border: 0;
  background: #e66767;
  color: #ffebd9;
  padding: 6px 10px;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`
