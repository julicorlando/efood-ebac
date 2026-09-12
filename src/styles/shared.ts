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
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 40px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -3.6px;

  span {
    transform: translate(-5px, -1px);
  }

  small {
    position: absolute;
    top: 12px;
    right: 4px;
    color: #e66767;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.8px;
    font-weight: 900;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
`

export const Button = styled.button`
  height: 24px;
  border: 0;
  padding: 4px;
  background: #e66767;
  color: #ffebd9;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`
