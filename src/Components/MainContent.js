import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import SmallHeading from './SmallHeading';
import blockchain from '../img/bchain.png'
import CtaButton from './CtaButton';

function MainContent() {
  return (
  <MainContentStyled>
    <Navigation/>

    <div className="content">
      <div className="left">
        <SmallHeading title={'All Digital Currencies in One Place'} identifier={'Before'} />

        <h1>
          All NFTs You need in one Marketplace 
          The Beast Place to Collect, Buy and Sell <span className="GradientText">Awesome NFTs</span>
        </h1>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi, 
        placeat architecto est sapiente sunt, neque tempora, vero illo minima eius hic illum esse sint! Similique,quia architecto.
        </p>
        <div className="btns-content">
          <CtaButton name={'discover more'}/>
          <CtaButton name={'get help'} />
        </div>
      </div>
      
      <div className="right">
        <img src={blockchain} alt="" />
      </div>
    </div>
  </MainContentStyled>
  )
}

const MainContentStyled = styled.div`
  position: absolute;
  top:0;
  left: 10%;
  width: 80%;
  height: 100%;

  .content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;

    .btns-content{
      margin-top: 1rem;
    }
    .left{
      display: flex;
      justify-content: center;
      flex-direction: column;
      h1{
        padding: 1.6rem 0;
      }
    }

    .right{
      img{
        position: absolute;
        right: -11%;
        bottom: 0;
        width: 60%;
      }
    }
  }

`;

export default MainContent;
