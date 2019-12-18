import { Location } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
// http://3.15.173.151/index.php
//name of folder for the site in the S3 helix-form bucket
const currentSite = 'kings'
//bit of Html to render at the top of the email body before the list of values
const defaultHTML = '<div style="text-align:center;"><img style="max-width:200px;padding-bottom:50px;" src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/logo.png" alt="logo" ></div>'

export default ({ children, html = defaultHTML, FormStyles }) => {
  return(
    <Location>
      {({ location }) => {
        return <Form action="http://helix-forms.ttgmxd.com" method="POST" FormStyles={FormStyles} className="bill">
                <input name="_sendgrid_notification" readOnly value={html} hidden/>
                <input name="helix_referral" readOnly value={currentSite} hidden/>
                <input name="*redirect" readOnly value={`${location.origin}/thanks`} hidden/>
                {children}
                <input name="page" value={location.href} readOnly hidden />
              </Form>
      }}
    </Location>
)}

const Form = styled.form`
  ${ props => props.FormStyles };
`
