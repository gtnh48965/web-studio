import React from 'react';
import styled from 'styled-components'
import bg from '../images/bg.png'
import manVector from '../images/manVector.svg'
import bublik from '../images/bublik.jpg'
import seo from '../images/seoAnimation.png'
import polyhedron from '../images/polyhedron.jpg'
import qrCode from '../images/qr.svg'

const ServicesTag = styled.section`
  padding: 80px 0;
  background-color: #fff;
  background-image: url(${bg});
  background-position: center 5px;
  background-repeat: repeat;
  .title{
    font-size: 88px;
    line-height: 106px;
    color: #1A1A1A;
  }
  .blue{
    color: #1E4FCD;
  }
  .black{
    color: #000;
  }
  .description{
    max-width: 490px;
    font-size: 18px;
    line-height: 21px;
    color: #1A1A1A;
    margin-bottom: 70px;
  }
  
  .gridWrapper{
    display: grid;
    grid-template-columns: 300px 190px 190px 190px 80px 80px 80px;
    grid-template-rows: 307px 190px 190px 87px 190px;
    grid-gap: 30px;
    overflow: hidden;
  }
  .er{
    color: #FFFFFF;
  }
  .er18{
    line-height: 21px;
    font-size: 18px;
  }
  .er14{
    font-size: 14px;
    line-height: 16px;
  }
  // gridItem - 1
  .landing{
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: #1A1A1A;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
  }
  .landing::before{
    content: '';
    position: absolute;
    height: 100%;
    width: 30px;
    background-color: #fff;
    left: 80px;
    top: 0;
  }
  .landingText{
    font-family: 'Russo One';
    font-size: 45px;
    line-height: 54px;
    text-transform: uppercase;
    color: #FFFFFF;
    
    position: relative;
  }
  .landingInner{
    margin-bottom: 52px;
    padding-left: 25px;
    position: absolute;
    transform: rotate(-90deg);
    bottom: 50px;
    right: -50px;
  }
  .landingText::before, .landingText::after{
    content: '';
    position: absolute;
    width: 30px;
    height: 8px;
    left: 0;
  }
  .landingText::before{
    background-color: #1E4FCD;
    top: -32px;
  }
  .landingText::after{
    background-color: #fff;
    top: -45px;
  }
  // gridItem - 2
  .parsing{
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .parsingWrapper{
    width: 190px;
    height: 190px;
    background-color: #1E4FCD;
    padding: 0 25px 38px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .parsingText{
    font-family: 'Russo One';
    font-size: 25px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  // gridItem - 3
  .systems{
    grid-column: 2/4;
    grid-row: 1/3;
    background-color: #1A1A1A;
  }
  .systemsWrapper{
    margin-top: 16px;
    padding-left: 33px;
  }
  .systemsText{
    font-family: 'Russo One';
    font-size: 45px;
    line-height: 54px;
    text-transform: uppercase;
    color: #fff;
  }
  // gridItem - 4
  .ad{
    grid-column: 4/6;
    grid-row: 1/3;
    background-color: #1E4FCD;
  }
  .bublikWrapper{
    padding-left: 33px;
    margin-top: 15px;
  }
  .bublikText{
    font-family: 'Russo One';
    font-size: 45px;
    line-height: 54px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  // gridItem - 5
  .marketing{
    grid-column: 6/8;
    grid-row: 1/3;
    background-color: #1A1A1A;
    position: relative;
  }
  .marketingText{
    font-family: 'Russo One';
    font-size: 55px;
    line-height: 66px;
    text-transform: uppercase;
    color: #FFFFFF;
    position: relative;
  }
  .marketingText::before{
    content: '';
    width: 8px;
    height: 8px;
    background: #fff;
    position: absolute;
    top: -31px;
    left: 42px;
  }
  .marketingText::after{
    content: '';
    height: 8px;
    width: 37px;
    background: #1E4FCD;
    position: absolute;
    top: -31px;
    left: 0;
  }
  .marketingWrapper{
    position: absolute;
    transform: rotate(-90deg);
    bottom: 170px;
    left: -50px;
  }
  // gridItem - 6
  .seo{
    grid-column: 1/2;
    grid-row: 3/5;
    background-color: #1a1a1a;
    position: relative;
  }
  .seo::before{
    content: '';
    position: absolute;
    height: 100%;
    width: 30px;
    left: 80px;
    background-color: #fff;
  }
  .seoText{
    font-family: 'Russo One';
    font-size: 60px;
    line-height: 72px;
    text-transform: uppercase;
    color: #FFFFFF;
    position: relative;
  }
  .seoText::before{
    content: '';
    width: 37px;
    height: 8px;
    background-color: #1E4FCD;
    position: absolute;
    top: -33px;
    left: 0;
  }
  .seoWrapper{
    position: absolute;
    transform: rotate(-90deg);
    right: 15px;
    bottom: 50px;
  }
  // gridItem - 7
  .sites{
    grid-column: 1/2;
    grid-row: 5/6;
  }
  .sitesWrapper{
    width: 190px;
    height: 100%;
    background-color: #1a1a1a;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 23px;
  }
  .sitesText{
    font-family: 'Russo One';
    font-size: 25px;
    line-height: 30px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 40px;
    margin-top: 5px;

  }
  // gridItem - 8
  .apps{
    grid-column: 2/3;
    grid-row: 3/6;
    background-color: #1E4FCD;
    position: relative;
  }
  .appsText{
    font-family: 'Russo One';
    font-size: 55px;
    line-height: 66px;
    text-transform: uppercase;
    color: #FFFFFF;
    position: relative;
  }
  .appsText::before{
    content: '';
    position: absolute;
    width: 37px;
    height: 8px;
    background-color: #fff;
    top: -31px;
    left: 0;
  }
  .appsText::after{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #1a1a1a;
    top: -31px;
    left: 42px;
  }
  .appsWrapper{
    position: absolute;
    transform: rotate(-90deg);
    left: -100px;
    top: 235px;
  }
  // gridItem - 9
  .branding{
    grid-column: 3/5;
    grid-row: 3/6;
    background-color: #1a1a1a;
    padding: 4px;
  }
  .brandingText{
    font-family: 'Russo One';
    font-size: 45px;
    line-height: 54px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  .brandingWrapper{
    padding: 38px 0 0 33px;
  }
  // gridItem - 10
  .online{
    grid-column: 5/8;
    grid-row: 3/4;
    background-color: #1E4FCD;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .onlineText{
    font-family: 'Russo One';
    font-size: 25px;
    line-height: 30px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 5px;
  }
  .onlineWrapper{
    margin-bottom: 38px;
    margin-left: 24px;
  }
  // gridItem - 11
  .smm{
    grid-column: 5/7;
    grid-row: 4/6;
    background-color: #1a1a1a;
    position: relative;
  }
  .smmImg{
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .smmText{
    font-family: 'Russo One';
    font-size: 60px;
    line-height: 72px;
    text-transform: uppercase;
    color: #FFFFFF;
    position: relative;
  }
  .smmText::before{
    content: '';
    width: 37px;
    height: 8px;
    background-color: #1E4FCD;
    position: absolute;
    top: -32px;
    left: 0;
  }
  .smmText::after{
    content: '';
    width: 8px;
    height: 8px;
    background-color: #fff;
    position: absolute;
    top: -32px;
    left: 42px;
  }
  .smmWrapper{
    position: absolute;
    transform: rotate(-90deg);
    right: 5px;
    bottom: 65px;
  }
`

const Services = () => {
    return (
        <ServicesTag>
            <div className="container">
                <h2 className="title">Услуги <span className='blue'>><span className="black">/...</span>{`<`}</span></h2>
                <p className="description">Предоставим вашему бизнесу комплекс услуг по развитию и продвижению. Создадим техническую часть вашего бизнеса, займемся брендингом и рекламой.</p>
                <div className="gridWrapper">
                    <div className="landing">
                       <div className="landingInner">
                           <div className="er er18">er-9817</div>
                           <div className="landingText">лендинги</div>
                       </div>
                    </div>
                    <div className="parsing">
                        <div className="parsingWrapper">
                            <div className="er er14">er-9817</div>
                            <div className="parsingText">парсинг данных</div>
                        </div>
                    </div>
                    <div className="systems">
                        <div className="man">
                            <img src={manVector} alt="vector man"/>
                        </div>
                        <div className="systemsWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="systemsText">самописные системы и сервисы</div>
                        </div>
                    </div>
                    <div className="ad">
                        <div className="bublik">
                            <img src={bublik} alt="bublik"/>
                        </div>
                        <div className="bublikWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="bublikText">реклама google, yandex</div>
                        </div>
                    </div>
                    <div className="marketing">
                        <div className="marketingWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="marketingText">marketing</div>
                        </div>
                    </div>
                    <div className="seo">
                        <div className="seoImg">
                            <img src={seo} alt=""/>
                        </div>
                        <div className="seoWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="seoText">seo</div>
                        </div>
                    </div>
                    <div className="sites">
                        <div className="sitesWrapper">
                            <div className="er er14">er-9817</div>
                            <div className="sitesText">сайты компаний</div>
                        </div>
                    </div>
                    <div className="apps">
                        <div className="appsWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="appsText">приложения</div>
                        </div>
                    </div>
                    <div className="branding">
                        <div className="brandingImg">
                            <img src={polyhedron} alt="polyhedronAnimation"/>
                            <div className="brandingWrapper">
                                <div className="er er18">er-9817</div>
                                <div className="brandingText">брендинг и репутация</div>
                            </div>
                        </div>
                    </div>
                    <div className="online">
                        <div className="onlineWrapper">
                            <div className="er er14">er-9817</div>
                            <div className="onlineText">online<br/>магазины</div>
                        </div>
                    </div>
                    <div className="smm">
                        <div className="smmImg">
                            <img src={qrCode} alt="QR Code"/>
                        </div>
                        <div className="smmWrapper">
                            <div className="er er18">er-9817</div>
                            <div className="smmText">smm</div>
                        </div>
                    </div>
                </div>
            </div>
        </ServicesTag>
    );
};

export default Services;