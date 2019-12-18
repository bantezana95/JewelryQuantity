import React from 'react'
// import { navigate } from 'gatsby-link'
import styled from 'styled-components'
import {  colors, md, tb } from '../common'
import FormWrap from '../components/formWrap'

export default () => (
  <div css={`margin:auto;${md}{padding:1rem;}`}>
      <FormWrap FormStyles={FormStyles}>
        <p css={`min-width:200px;text-align:left;padding-bottom:4px;`}>join our email list</p>
        <div css={`display:flex;`}>

        <Input
          type={"email"}
          name={"email"}
          required={true}
          placeholder="Email"
          id={'email'}
           />
            <Label>Sign Up</Label>

        </div>
        <p css={`min-width:200px;text-align:left;padding-top:4px;`}>© {new Date().getFullYear()} The Kings Jewelers</p>
      </FormWrap>
      </div>
    )

const FormStyles = `
  text-align: right;
  margin-top: 30px;
  width: 30%;

  ${tb} {
    margin: 0 0 30px 0;
    text-align: center;
    width: 100%;
  }

  ${md} {
    margin: auto;
    text-align: center;
  }
`

const Label = styled.button`
  padding: 10px;
  background-color: ${colors.brownDark};
  color: white;
  font-size: 12px;
  border:0;
  min-width:90px;
`
const Input = styled.input `
  border: none;
  padding: 11px 20px 11px 20px;
  background-color: ${colors.brown};
  max-width: 200px;
  opacity: .7;
  color: white;

  ::placeholder {
    color: white;
  }
`
