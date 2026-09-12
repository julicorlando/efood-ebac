import styled from 'styled-components'

export const Container = styled.div`
  width: min(1024px, calc(100% - 32px));
  margin: 0 auto;
`

export const Brand = styled.span`
  position: relative;
  display: inline-flex;
  width: 125px;
  height: 58px;
  align-items: center;
  justify-content: center;
  color: #e66767;
  font-family: Arial Black, Roboto, Arial, Helvetica, sans-serif;
  font-size: 39px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -4px;

  span {
    transform: translateX(-5px);
  }

  small {
    position: absolute;
    top: 16px;
    right: 5px;
    font-size: 8px;
    line-height: 1;
    letter-spacing: 0.5px;
    font-weight: 900;
    writing-mode: vertical-rl;
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
