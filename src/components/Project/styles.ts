import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`

export const LinkBtn = styled.a`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.bgColor};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
