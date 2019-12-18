import React from 'react'
import styled from 'styled-components'

export const colors = {
  'brownLight': '#C09E6E',
  'brown': '#533926',
  'brownDark': '#312117',
  'brown30': '#e8ddc9',
  'header': 'rgba(56,37,23,.9)',
  'greyDark': '#747373',
  'grey30': '#afa8a2'
}

export const md = '@media(max-width: 768px)'
export const tb = '@media(max-width: 860px)'
export const lt = '@media(max-width: 1000px)'

export const sans = "font-family: 'Karla', sans-serif;"

const ShopBtn = styled.div`
  width: 30%;
  margin-bottom: 20px;
  align-self: center;

  ${md} {
    width: 100%;
  }
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const MsgBtnWrap = ({ children }) => {
  return(
    <BtnWrap>
      <ShopBtn>
        {children}
      </ShopBtn>
    </BtnWrap>
  )
}

export const Copy = styled.p`
  padding: 1.5rem;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1px;
  color: ${colors.greyDark};
`

export const Section = styled.div`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  /*changed the side setting values to just reference content to be semantic in components w/o an image section 2.22.2019 ADH */
  flex-direction: ${props =>
    props.order === 'contentLeft' ? 'row' : 'row-reverse'};

  @media (max-width: 768px) {
    flex-direction: ${props =>
      props.mobileOrder === 'contentTop' ? 'column' : 'column-reverse'};
  }

  background-color: ${props => props.bgColor};
  background-image: url('${props => props.bgImage}');
  background-size: cover;
  background-position: center;
`

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 2rem;
  margin-${ props => props.overlap }: -100px;
  z-index: 2;
  width: 50vw;
  ${ props => props.contentCss };

  p {
    color: ${colors.greyDark};
    ${sans};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`

export const ImageBlock = styled.div`
  box-sizing: border-box;
  width: 60vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const PageBtnWrap = styled.div`
  padding-bottom: 50px;
  width: 500px;
  margin: auto;

  ${md} {
    width: 100%;
  }
`

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  ${md} {
    flex-direction: column;
    margin: auto;
  }
`

export const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        })
