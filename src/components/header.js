import { Link } from "gatsby"
import React, { useState } from "react"
import styled from 'styled-components'
import { colors, md } from '../common'
import AddressBar from './headerAddressBar'
import './testI/style.css'

const Header = () => {
  const [ show, setShow ] = useState(false)

  function handleClick() {
    setShow(!show)
    console.log(show)
  }

  return(
  <Head>
    <AddressBar />
    <div>
      <LogoWrap>
        <IconWrap>

          <StyledLink to="/stories">
            <div><Icon src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/bookIcon.png" alt="icon for stories" /></div>
            <p>Stories</p>
            
          </StyledLink>

          <StyledLink to="/events">
            <div><Icon src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/calanderIcon.png" alt="icon for events"/></div>
            <p>Events</p>
          </StyledLink>

        </IconWrap>

        <CenterLogo>
          <div onClick={handleClick} css={`display:none;${md}{display:flex;}`}><img css={`width:40px;margin:auto;align-self:center;`} src={`https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/${ show ? 'menuClose' : 'menuIcon'}.png`} alt="hamburger menu icon"/></div>
          <Link to="/"><img css={`margin:auto;width:175px;${md}{width:120px;}`} src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/logo.png" alt="company logo"/></Link>
          <div css={`display:none;${md}{display:flex;width:20px;}`}></div>
          {/*<div css={`display:none;${md}{display:flex}`}><Link css={`{display:flex}`} to="/products"><img css={`width:40px;align-self:center;margin:auto;`} src="https://kings-jewelers.s3.us-east-2.amazonaws.com/medis/noun_Shopping+Bag_2595561.png" alt="shopping bag icon"/></Link></div> */}
        </CenterLogo>

        <div>
          <IconWrap>

        {/*  <StyledLink to="/search">
            <div><Icon src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/searchIcon.png" alt="icon for search"/></div>
            <p>Search</p>
          </StyledLink>  */}

          <StyledLink to="/page2">
            <div><Icon src="https://kings-jewelers.s3.us-east-2.amazonaws.com/medis/noun_Shopping+Bag_2595561+(1).png" alt="icon for shopping bag"/></div>
            <p>Cart</p>
            <span class="badge">1</span>
          </StyledLink>

          <StyledLink to="/about">
            <div><Icon src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/aboutIcon.png" alt="icon for about page"/></div>
            <p>about</p>
          </StyledLink>

          </IconWrap>
        </div>
      </LogoWrap>
      <LinksWrap>
        {
          menuItems.map((data) => {
            return <NavLink to={data.path} key={data.title}>{data.title}</NavLink>
          })
        }
      </LinksWrap>


    </div>

    <MobileBlock view={ show !== true ? 'none' : 'flex' }>
      {
        mobileMenuItems.map((data) => {
          return <MobileLink onClick={handleClick} to={data.path} key={data.title}>{data.title}</MobileLink>
        })
      }
      <MobileIconWrap css={`display:flex;justify-content:space-around;`}>

        <StyledLink to="/stories">
          <div><Icon src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/bookIcon-dark.png" alt="icon for stories" /></div>
          <p css={`color:${colors.brownDark}`}>Stories</p>
        </StyledLink>

        <StyledLink to="/events">
          <div><Icon src="https://s3.us-east-2.amazonaws.com/kings-jewelers/medis/calanderIcon-dark.png" alt="icon for events"/></div>
          <p css={`color:${colors.brownDark}`}>Events</p>
        </StyledLink>

      </MobileIconWrap>
    </MobileBlock>

  </Head>
)
}

export default Header

const menuItems = [
  { title: 'engagement', path: '/engagement'},
  { title: 'diamonds & gems', path: '/diamond-gemstones'},
  { title: 'Jewelry', path: '/jewelry'},
  { title: 'consignment', path: '/consignment'},
  { title: 'custom', path: '/custom'},
  { title: 'services', path: '/services'},
]

const mobileMenuItems = [
  { title: 'engagement', path: '/engagement'},
  { title: 'diamonds', path: '/diamonds'},
  { title: 'gemstones', path: '/gemstones'},
  { title: 'Jewelry', path: '/jewelry'},
  { title: 'consignment', path: '/consignment'},
  { title: 'custom', path: '/custom'},
  { title: 'services', path: '/services'},
  { title: 'shop', path: '/products'},
]

const Head = styled.header`
  background-color: ${colors.brown30};
`

const LogoWrap = styled.div`
  display: flex;
  background-color: white;
  color: ${colors.brownLight};
  justify-content: space-around;
  text-align: center;
  text-transform: uppercase;
  padding: 20px;

  ${md} {
    border-bottom: 1px solid ${colors.brownDark};
    padding: 10px 5px;
  }
`

const Icon = styled.img`
  height: 40px;
  width: 40px;
`

const IconWrap = styled.div`
  display: flex;

  ${md} {
    display: none;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.brownLight};
  margin: 20px;
  font-size: 12px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: .875rem;
  padding: 1rem;

  :hover {
    color: ${colors.brownLight};
  }

  ${md} {
    display: none;
  }
`

const MobileLink = styled(Link)`
  text-decoration: none;
  color: ${colors.brownDark};
  font-size: 1rem;
  padding: 1rem;
`

const LinksWrap = styled.div`
  background-color: ${colors.brownDark};
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  border-top 1px solid ${colors.brownLight}

  ${md} {
    display: none;
  }
`

const CenterLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;

  ${md} {
    justify-content: space-between;
  }
`

const MobileBlock = styled.div`
  width: 100%;
  background-color: #fff;
  display: ${ props => props.view };
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
`

const MobileIconWrap = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${colors.brownDark};
`
