import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
//import ProductGrid from '~/components/ProductGrid'
import ItemInfo from '../components/testI'
import Header from '../components/header'
import styled from 'styled-components'
const IndexPage = () => (
  <>
  <Wrapper>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Header />
    <h1>Welcome to Test site</h1>
    <p>Purchase this Ring</p>
    <img src="../images/gatsby-icon.png"></img>
    <ItemInfo />
    </Wrapper>
  </>
)

export default IndexPage

const Wrapper = styled.h1`
text-align: center;
font-size: 1em
`

