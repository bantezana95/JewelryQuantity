import React from 'react'
import styled from 'styled-components'
import { colors, md } from '../common'

const AddressBar = () => {
  return(
    <Section>
    <AddressWrap>
      <p>
        <a href="https://www.google.com/maps/place/1501+N+California+Blvd,+Walnut+Creek,+CA+94596/@37.8993284,-122.0661139,17z/data=!3m1!4b1!4m5!3m4!1s0x808561eb28261697:0xa7cf03fd87f64b5d!8m2!3d37.8993284!4d-122.0639252" target="_blank" rel="noopener noreferrer">1501A N CALIFORNIA BLVD, WALNUT CREEK, CA 94596</a>
      </p>
      <p>&#9679;</p>
      <p><a href="tel:9259381030"> 925.938.1030</a></p>
      <p>&#9679;</p>
      <p><a href="mailto:info@thekingsjewelers.com">EMAIL US</a></p>
    </AddressWrap>
    <MobileWrap>
      <a href="https://www.google.com/maps/place/1501+N+California+Blvd,+Walnut+Creek,+CA+94596/@37.8993267,-122.0661054,17z/data=!3m1!4b1!4m2!3m1!1s0x808561eb2829df" target="_blank" rel="noopener noreferrer">
        <div><img src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/locationIcon-dark.png" alt="icon for locations" /></div>
      </a>

      <a href="tel:9259381030">
        <div><img src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/phoneIcon-dark.png" alt="icon for phone" /></div>
      </a>

      <a href="mailto:info@thekingsjewelers.com">
        <div><img src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/emailIcon-dark.png" alt="icon for email" /></div>
      </a>
    </MobileWrap>
    </Section>
  )
}

export default AddressBar

const Section = styled.div`
    background-color: ${colors.brownLight};
`

const AddressWrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;

  a {
    text-decoration: none;
    color: ${colors.brownDark};
    margin: 0 10px 0 10px;
    text-transfrom: uppercase;
  }

  ${md} {
    display: none;
  }
`

const MobileWrap = styled.div`
  display: none;
  padding: .5rem;
  justify-content: space-around;

  img {
    width: 35px;
    height: 35px;
  }

  ${md} {
    display: flex;
  }
`
