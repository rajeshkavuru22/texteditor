import styled from 'styled-components'

export const TextInput = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${props => props.color};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  padding: 10px;
  font-size: 18px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
`
