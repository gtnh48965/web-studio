import React, {Fragment} from 'react';
import styled from 'styled-components'
import telegram from '../images/telegram.svg'
import vk from '../images/vk.svg'
import whatsup from '../images/whatsup.svg'
import messages from '../images/messages.svg'
import logotype from '../images/logotype.svg'
import topLine from '../images/topLine.svg'
import bottomLine from '../images/bottomLine.svg'
import arrowRight from '../images/arrowRight.svg'

const HeaderTag = styled.header`
  height: 63px;
  padding: 6px 0;
  box-shadow: 0px 7px 10px rgba(157, 157, 157, 0.3);
  z-index: 200;
  position: relative;
  .wrapper {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-right: 59px;
  }
  .list {
    display: flex;
    align-items: center;
    .listItem:last-child{
      position: relative;
    }
    .listItem:last-child::before{
      content: '';
      position: absolute;
      width: 5px;
      height: 9px;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
      background: url(${arrowRight})center center/cover no-repeat;
    }
  }
  .itemLink {
    color: #1A1A1A;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
  .listItem:first-child{
    position: relative;
  }
  .listItem:first-child::before{
    content: '';
    width: 23px;
    height: 3px;
    background-color: #1E4FCD;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .listItem + .listItem {
    margin-left: 33px;
  }

  .second {
    display: flex;
    flex-direction: column;
    .itemLink{
      position: relative;
    }
    .itemLink::before{
      content: '';
      position: absolute;
      width: 24px;
      height: 9px;
    }
    .itemLink:first-child::before{
      left: -28px;
      bottom: 0px;
      background: url(${topLine})center center/cover no-repeat;
    }
    .itemLink:last-child::before{
      left: -28px;
      top: 2px;
      background: url(${bottomLine})center center/cover no-repeat;
    }
    .itemLink + .listItem {
      margin-top: 2px;
    }
  }
  .language{
    margin-left: 95px;
    position: relative;
  }
  .language::before{
    content: '';
    position: absolute;
    width: 5px;
    height: 9px;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${arrowRight})center center/cover no-repeat;
  }
  .socials{
    margin-left: 42px;
    display: flex;
  }
  .social+.social{
    margin-left: 20px;
  }
  .social:nth-child(2){
    display: flex;
    align-items: center;
  }
  .contacts{
    margin-left: auto;
  }
`


const Header = () => {
    return (
        <Fragment>
            <HeaderTag className="header">
                <div className="container">
                    <div className="wrapper">
                        <div className="logo">
                            <a href="#">
                                <img src={logotype} alt="logotype"/>
                            </a>
                        </div>
                        <nav className="nav">
                            <ul className="list">
                                <li className="listItem">
                                    <a href="#" className='itemLink'>Сайты</a>
                                </li>
                                <li className="listItem">
                                    <div className="second">
                                        <a href="#" className="itemLink">Кейсы и цены</a>
                                        <a href="#" className="itemLink">Услуги</a>
                                    </div>
                                </li>
                                <li className="listItem">
                                    <a href="#" className='itemLink'>Контекст</a>
                                </li>
                                <li className="listItem">
                                    <a href="#" className='itemLink'>SEO</a>
                                </li>
                                <li className="listItem">
                                    <a href="#" className='itemLink'>SMM</a>
                                </li>
                                <li className="listItem">
                                    <a href="#" className='itemLink'>Маркетинг</a>
                                </li>
                                <li className="listItem">
                                    <a href="#" className='itemLink'>Другие услуги</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="language">Ru</div>
                        <div className="socials">
                            <div className="social">
                                <a href="#">
                                    <img src={telegram} alt="telegram"/>
                                </a>
                            </div>
                            <div className="social">
                                <a href="#">
                                    <img src={vk} alt="vk"/>
                                </a>
                            </div>
                            <div className="social">
                                <a href="#">
                                    <img src={whatsup} alt="whatsup"/>
                                </a>
                            </div>
                            <div className="social">
                                <a href="#">
                                    <img src={messages} alt="messages"/>
                                </a>
                            </div>
                        </div>
                        <div className="contacts">
                            <div className="contact">
                                <a href="#">+ 7 981 103 65 38</a>
                            </div>
                            <div className="contact">
                                test_mail@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderTag>
        </Fragment>
    );
};

export default Header;