import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors, md, tb } from '../common'
import FooterForm from './footerForm'

const Footer = () => {
  const [ show, setShow ] = useState(false)

  function handleClick() {
    setShow(!show)
  }

  return (<Section>
    <SocialLinks>
      <a href="https://www.facebook.com/thekingsjewelers" target="_blank"  rel="noopener noreferrer" aria-label="link to facebook page">
        <SocialIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310"><path d="M81.703 165.106h33.981V305a5 5 0 0 0 5 5H178.3a5 5 0 0 0 5-5V165.765h39.064a5 5 0 0 0 4.967-4.429l5.933-51.502a5 5 0 0 0-4.966-5.572h-44.996V71.978c0-9.732 5.24-14.667 15.576-14.667h29.42a5 5 0 0 0 5-5V5.037a5 5 0 0 0-5-5h-40.545A39.746 39.746 0 0 0 185.896 0c-7.035 0-31.488 1.381-50.804 19.151-21.402 19.692-18.427 43.27-17.716 47.358v37.752H81.703a5 5 0 0 0-5 5v50.844a5 5 0 0 0 5 5.001z"/></SocialIcon>
      </a>
      <a href="https://www.instagram.com/thekingsjewelers/" target="_blank"  rel="noopener noreferrer" aria-label="link to instagram">
        <SocialIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M38.52.012h222.978C282.682.012 300 17.336 300 38.52v222.978c0 21.178-17.318 38.49-38.502 38.49H38.52c-21.184 0-38.52-17.313-38.52-38.49V38.52C0 17.336 17.336.012 38.52.012zm180.026 33.317c-7.438 0-13.505 6.091-13.505 13.525v32.314c0 7.437 6.067 13.514 13.505 13.514h33.903c7.426 0 13.506-6.077 13.506-13.514V46.854c0-7.434-6.08-13.525-13.506-13.525h-33.903zm47.538 93.539h-26.396a87.715 87.715 0 0 1 3.86 25.759c0 49.882-41.766 90.34-93.266 90.34-51.487 0-93.254-40.458-93.254-90.34 0-8.963 1.37-17.584 3.861-25.759H33.35V253.6c0 6.563 5.359 11.902 11.916 11.902h208.907c6.563 0 11.911-5.339 11.911-11.902V126.868zm-115.801-35.89c-33.26 0-60.24 26.128-60.24 58.388 0 32.227 26.98 58.375 60.24 58.375 33.278 0 60.259-26.148 60.259-58.375 0-32.261-26.981-58.388-60.259-58.388z"/></SocialIcon>
      </a>
      <a href="https://twitter.com/kingsjewelers" target="_blank"  rel="noopener noreferrer" aria-label="link to twitter feed">
        <SocialIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310"><path d="M302.973 57.388a117.512 117.512 0 0 1-14.993 5.463 66.276 66.276 0 0 0 13.494-23.73 5 5 0 0 0-7.313-5.824 117.994 117.994 0 0 1-34.878 13.783c-12.381-12.098-29.197-18.983-46.581-18.983-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204a5.001 5.001 0 0 0-8.196.642c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 0 1-8.907-3.977 5 5 0 0 0-7.427 4.257c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.372 57.372 0 0 1-5.063-.735 4.998 4.998 0 0 0-5.699 6.437c7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 0 1-14.095-.826 5 5 0 0 0-3.286 9.174c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367 0-1.826-.028-3.67-.084-5.508 11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 0 0-6.182-7.351z"/></SocialIcon>
      </a>
    </SocialLinks>

    <div css={`position: relative;width:100%;`}>
    <MobileFoot view={ show ? 'flex' : 'none'}>
      {
        footerMenu.map((data) => {
          return <MobileFooterLink to={data.path} key={data.title}>{data.title}</MobileFooterLink>
        })
      }
    </MobileFoot>
    </div>

    <div>
      <MobileButton onClick={handleClick}>{ show ? 'hide' : 'show'} menu</MobileButton>
    </div>

    <Foot>
      <LinksWrap>
        {
          footerMenu.map((data) => {
            return <FooterLink to={data.path} key={data.title}>{data.title}</FooterLink>
          })
        }
      </LinksWrap>

      <FooterForm />
    </Foot>
  </Section>)
}

const Foot = styled.div `
  width: 100vw;
  display: flex;
  background-color: ${colors.brownLight};

  p {
    margin: 0;
    font-size: 12px;
    color: ${colors.brown}
  }

  ${tb} {
    flex-direction: column;
  }
`

const MobileFoot = styled.div`
  display: ${ props => props.view };
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
  position: absolute;
  bottom: 1px;
  width: 100%;
  background-color: ${colors.brownDark};
  z-index: 1000;
  opacity: .9;
  padding: 20px;
`

const MobileFooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 10px;
  font-size: 12px;
  text-transform: uppercase;
  z-index: 2;
  width: 40%;
`


const Section = styled.footer `
  width: 100vw;

  ${md} {
    margin-top: 1rem;
  }
`

const SocialLinks = styled.div `
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-top: 1px solid ${colors.brownLight};
`

const SocialIcon = styled.svg `
  width: 25px;
  height: 25px;
  fill: ${colors.brownDark};
  padding: 1rem;
`

const LinksWrap = styled.div `
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  width: 66%;
  letter-spacing: 1.25px;

  ${tb} {
    width: 100%;
  }

  ${md} {
    display: none;
  }
`

const FooterLink = styled(Link)`
  text-decoration: none;
  width: 20%;
  color: ${colors.brownDark};
  padding: 5px;
  font-size: 12px;
  text-transform: uppercase;
`

const MobileButton = styled.button`
  width: 100%;
  border: 0;
  padding: 20px;
  color: white;
  text-align: center;
  font-size: 14px;
  background-color: ${colors.brownDark};
  text-transform: uppercase;
  margin-top: -1px;
  display: none;

  ${md} {
    display: block;
  }
`

const footerMenu = [
  {
    title: 'home',
    path: '/'
  }, {
    title: 'Jewelry',
    path: '/jewelry'
  }, {
    title: 'services',
    path: '/services'
  }, {
    title: 'About us',
    path: '/about'
  }, {
    title: 'engagement',
    path: '/engagement'
  }, {
    title: 'consignment',
    path: '/consignment'
  }, {
    title: 'events',
    path: '/events'
  }, {
    title: 'privacy policy',
    path: '/privacy-policy'
  }, {
    title: 'diamonds',
    path: '/diamonds'
  }, {
    title: 'gemstones',
    path: '/gemstones'
  }, {
    title: 'custom',
    path: '/custom'
  }, {
    title: 'stories',
    path: '/stories'
  }, {
    title: 'contact us',
    path: '/contact'
  }, {
    title: 'newsletters',
    path: '/newsletters'
  }
]

export default Footer
