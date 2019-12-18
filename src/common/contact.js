import styled from 'styled-components'
import { colors, md, sans } from './index'

export const Title = styled.h1`
  ${sans};
  text-align: center;
`

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${colors.brownLight};
  ${sans};
  margin: 5px;
  font-size: 16px;
`

export const Message = styled.textarea`
  padding: 1rem;
  font-size: 16px;
  border: 1px solid ${colors.brownLight};
  ${sans};
  margin: 5px;
  margin-bottom: 20px;
`

export const FormStyles = `
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  text-align: center;
  ${sans}

  ${md} {
    width: 100%;
  }
`

export const Names = styled.div`
  display: flex;
  width: 100%;

  input {
    width: 88%;
  }

  ${md} {
    flex-direction: column;
    width: inherit;
  }
`

export const Submit = styled.button`
  padding: 1rem 2rem;
  background-color: ${colors.brownDark};
  text-align: center;
  color: white;
  border: 0;
  font-size: 16px;
  text-transform: uppercase;
  margin: 20px 0 40px 0;
`

export const Label = styled.label`
  visibility: hidden;
  height: 0;
  ${sans};
`
