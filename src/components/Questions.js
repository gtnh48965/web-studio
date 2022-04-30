import React from 'react';
import styled from 'styled-components'
import bg from '../images/bg.png'
import telegram from '../images/telegram.svg'
import crosses from '../images/crosses.jpg'

const QustionsTag = styled.section`
  padding: 60px 0 120px;
  background-color: #fff;
  background-image: url(${bg});
  background-position: center -200px;
  background-repeat: repeat;
  .title{
    font-size: 88px;
    line-height: 100%;
    text-align: center;
    color: #1A1A1A;
    margin-bottom: 30px;
  }
  .description{
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #1A1A1A;
    margin-bottom: 65px;
  }
  .formWrapper{
    width: 750px;
    background-color: #1A1A1A;
    margin: 0 auto 20px;
    padding: 30px 7px 30px 30px;
    position: relative;
  }
  .formWrapper::before, .formWrapper::after{
    content: '';
    width: 60px;
    height: 220px;
    background-color: #1A1A1A;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .formWrapper::before{
    left: -80px;
  }
  .formWrapper::after{
    right: -80px;
  }
  .form{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .inputs{
    flex: 0 1 330px;
  }
  .other{
    flex: 0 1 350px;
  }
  .input{
    width: 100%;
    height: 51px;
    font-size: 18px;
    line-height: 21px;
    color: #1A1A1A;
    padding-left: 24px;
  }
  .input::placeholder{
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #9D9D9D;
  }
  .input+.input{
    margin-top: 20px;
  }
  .socials{
    width: 141px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 20px;
    height: 51px;
  }
  .agreement{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    padding-right: 3px;
    margin-bottom: 20px;
  }
  .special{
    text-decoration-line: underline;
  }
  .submit{
    background: #1E4FCD;
    width: 271px;
    height: 52px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
  }
  .contactsWrapper{
    display: flex;
    height: 133px;
    max-width: 750px;
    align-items: center;
    margin: 0 auto;
    background-color: #1E4FCD;
  }
  .animation{
    flex: 0 1 440px;
  }
  .contacts{
    flex-grow: 1;
  }
  .contact{
    text-align: center;
  }
  .contact+.contact{
    margin-top: 12px;
  }
  .contact, .mail{
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  }
  .contactPhone{
    color: #FFFFFF;
  }
`

const Questions = () => {
    return (
        <QustionsTag>
            <div className="container">
                <h2 className="title">Остались вопросы?</h2>
                <p className="description">Пишите или звоните. Отвечаем круглосуточно.</p>
                <div className="formWrapper">
                    <form action="#" className="form">
                        <div className="inputs flexItem">
                            <input type="text" className="input" placeholder='Ваше имя'/>
                            <input type="tel" className="input" placeholder='Телефон'/>
                            <input type="email" className="input" placeholder='e-mail'/>
                        </div>
                        <div className="other flexItem">
                            <div className="socials">
                                <div className="social">
                                    <a href="#">
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.6051 1.57763L17.4868 16.2837C17.2515 17.3216 16.638 17.5799 15.7661 17.091L11.0148 13.5897L8.72228 15.7948C8.46865 16.0484 8.25639 16.2607 7.76742 16.2607L8.10873 11.4216L16.9148 3.4643C17.2977 3.12298 16.8318 2.93382 16.3197 3.27518L5.43328 10.13L0.746532 8.66311C-0.272925 8.34479 -0.291343 7.6436 0.958698 7.15468L19.2905 0.0922834C20.1392 -0.225988 20.8819 0.28136 20.6051 1.57763Z" fill="#fff"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="social">
                                    <a href="#">
                                        <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.5403 0.610759H19.5643C19.402 0.610758 19.2428 0.654756 19.1035 0.738071C18.9642 0.821385 18.8502 0.940899 18.7734 1.08389C18.7734 1.08389 17.1876 4.00435 16.6783 4.98802C15.3079 7.6342 14.4206 6.80347 14.4206 5.57535V1.3408C14.4206 0.986944 14.28 0.647584 14.0298 0.397372C13.7796 0.14716 13.4402 0.00659233 13.0864 0.00659233H10.097C9.68984 -0.0236768 9.28175 0.0506329 8.91144 0.222464C8.54113 0.394295 8.2209 0.657942 7.98116 0.988363C7.98116 0.988363 9.49914 0.742927 9.49914 2.78827C9.49914 3.29546 9.52526 4.75451 9.54907 5.97827C9.55356 6.15861 9.5026 6.33598 9.40309 6.48644C9.30357 6.6369 9.16028 6.75319 8.99257 6.81963C8.82486 6.88607 8.6408 6.89946 8.46525 6.85797C8.28969 6.81648 8.13109 6.72213 8.01086 6.58765C6.78725 4.88581 5.77368 3.04241 4.9922 1.09748C4.92509 0.951984 4.81765 0.828796 4.68263 0.742526C4.54761 0.656257 4.39068 0.610526 4.23046 0.610759C3.36819 0.610759 1.64271 0.610759 0.61801 0.610759C0.518644 0.610083 0.4206 0.63354 0.332299 0.679115C0.243999 0.72469 0.168083 0.791021 0.111073 0.872409C0.0540633 0.953796 0.0176643 1.04781 0.00500325 1.14637C-0.00765785 1.24492 0.00379745 1.34508 0.038385 1.43824C1.1353 4.44706 5.86045 13.9024 11.2537 13.9024H13.5238C13.7616 13.9024 13.9897 13.8079 14.1579 13.6398C14.3261 13.4716 14.4206 13.2435 14.4206 13.0056V11.6349C14.4206 11.4629 14.4709 11.2947 14.5653 11.151C14.6597 11.0073 14.7941 10.8944 14.9519 10.8261C15.1098 10.7578 15.2841 10.7372 15.4535 10.7668C15.6229 10.7964 15.7799 10.8749 15.9052 10.9927L18.6223 13.5455C18.8663 13.7748 19.1885 13.9024 19.5234 13.9024H23.0913C24.8122 13.9024 24.8122 12.7083 23.874 11.7843C23.2137 11.134 20.831 8.62253 20.831 8.62253C20.6269 8.41115 20.5052 8.13375 20.4879 7.84047C20.4705 7.54719 20.5586 7.25737 20.7363 7.02338C21.5064 6.00988 22.7661 4.35085 23.3004 3.64013C24.0306 2.66871 25.3522 0.610759 23.5403 0.610759Z" fill="#fff"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="social">
                                    <a href="#">
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.48478 4.3176C6.31027 3.92288 6.17794 3.90787 5.91356 3.89778C5.82356 3.89287 5.7233 3.88795 5.61206 3.88795C5.26809 3.88795 4.90852 3.98291 4.69153 4.19276C4.42716 4.44763 3.77114 5.04223 3.77114 6.26145C3.77114 7.4808 4.71263 8.66004 4.83961 8.82512C4.97194 8.98981 6.67519 11.5284 9.31992 12.563C11.3881 13.3725 12.0018 13.2975 12.4725 13.2026C13.1601 13.0628 14.0223 12.5828 14.2393 12.0033C14.4561 11.4236 14.4561 10.9289 14.3925 10.824C14.3291 10.719 14.1545 10.6593 13.8901 10.5342C13.6257 10.4092 12.3403 9.80953 12.097 9.72958C11.8589 9.64471 11.6315 9.67473 11.4518 9.91459C11.1978 10.2494 10.9493 10.5893 10.7482 10.7941C10.5896 10.954 10.3303 10.974 10.1135 10.889C9.82252 10.7743 9.00802 10.5041 8.00297 9.65972C7.22531 9.00522 6.69642 8.19081 6.54314 7.94591C6.38972 7.69609 6.52725 7.55105 6.64889 7.41625C6.78122 7.26126 6.90806 7.15142 7.04025 7.00639C7.17258 6.86149 7.24655 6.78659 7.3312 6.61659C7.4212 6.45177 7.35764 6.28177 7.29422 6.15679C7.23066 6.03155 6.70177 4.8122 6.48478 4.3176ZM8.99733 0C4.0358 0 0 3.81265 0 8.49987C0 10.3587 0.634781 12.0828 1.7138 13.4819L0.592312 16.6401L4.05169 15.5959C5.47453 16.4854 7.17244 17 9.00267 17C13.9642 17 18 13.1871 18 8.50013C18 3.81291 13.9642 0.000265625 9.00267 0.000265625H8.99747V0H8.99733Z" fill="#fff"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="social">
                                    <a href="#">
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.325 13.1292C6.325 13.0333 6.325 12.9375 6.325 12.8417C6.325 12.5542 6.22917 12.3625 6.22917 12.075C6.22917 8.625 9.775 5.75 14.1833 5.75C14.4708 5.75 14.7583 5.75 15.0458 5.75C15.1417 5.75 15.2375 5.75 15.3333 5.75C15.525 5.75 15.7167 5.75 15.9083 5.84583C16.0042 5.84583 16.1958 5.94167 16.2917 5.94167C16.4833 5.94167 16.5792 6.0375 16.7708 6.0375C16.8667 6.0375 17.0583 6.13333 17.1542 6.13333C17.25 6.13333 17.3458 6.22917 17.5375 6.22917C17.6333 6.22917 17.7292 6.325 17.825 6.325C17.4417 2.77917 13.6083 0 8.9125 0C4.025 0.191667 0 3.25833 0 7.09167C0 9.00833 1.05417 10.925 2.97083 12.1708C3.1625 12.2667 3.25833 12.5542 3.1625 12.7458L2.20417 14.5667L4.69583 13.3208C4.79167 13.225 4.98333 13.225 5.07917 13.3208C5.55833 13.5125 6.0375 13.6083 6.51667 13.7042C6.51667 13.6083 6.51667 13.6083 6.51667 13.5125C6.42083 13.4167 6.325 13.225 6.325 13.1292ZM12.075 3.64167C12.5542 3.64167 12.8417 4.025 12.8417 4.40833C12.8417 4.79167 12.4583 5.27083 12.075 5.27083C11.5958 5.27083 11.3083 4.8875 11.3083 4.50417C11.3083 4.12083 11.5958 3.64167 12.075 3.64167ZM4.98333 4.50417C4.98333 4.025 5.36667 3.7375 5.75 3.7375C6.22917 3.7375 6.51667 4.12083 6.51667 4.50417C6.51667 4.8875 6.22917 5.27083 5.75 5.27083C5.36667 5.27083 4.98333 4.8875 4.98333 4.50417Z" fill="#fff"/>
                                            <path d="M21.0833 12.075C21.0833 10.2542 19.8375 8.62499 18.0167 7.66665C17.7292 7.57082 17.5375 7.37915 17.25 7.28332C17.1542 7.28332 17.0583 7.18749 17.0583 7.18749C16.7708 7.09165 16.4833 6.99582 16.1958 6.89999C15.9083 6.80415 15.6208 6.80415 15.3333 6.70832C15.2375 6.70832 15.1417 6.70832 15.1417 6.70832C14.8542 6.70832 14.5667 6.61249 14.1833 6.61249C10.35 6.61249 7.1875 9.00832 7.1875 11.9792C7.1875 12.1708 7.1875 12.3625 7.1875 12.5542C7.1875 12.65 7.1875 12.65 7.1875 12.7458C7.1875 12.8417 7.1875 13.0333 7.28333 13.1292C7.28333 13.225 7.28333 13.225 7.37917 13.3208C7.37917 13.4167 7.475 13.5125 7.475 13.6083C7.475 13.7042 7.57083 13.8 7.57083 13.8958C8.52917 16.0042 11.1167 17.4417 14.0875 17.4417C15.1417 17.4417 16.1958 17.25 17.1542 16.8667C17.25 16.8667 17.25 16.8667 17.3458 16.8667C17.4417 16.8667 17.5375 16.8667 17.5375 16.9625L19.2625 17.825L18.6875 16.675C18.5917 16.4833 18.6875 16.1958 18.8792 16.1C20.2208 15.0458 21.0833 13.6083 21.0833 12.075ZM11.6917 11.8833C11.2125 11.8833 10.925 11.5 10.925 11.1167C10.925 10.6375 11.3083 10.35 11.6917 10.35C12.1708 10.35 12.4583 10.7333 12.4583 11.1167C12.4583 11.5 12.1708 11.8833 11.6917 11.8833ZM16.5792 11.8833C16.1 11.8833 15.8125 11.5 15.8125 11.1167C15.8125 10.6375 16.1958 10.35 16.5792 10.35C17.0583 10.35 17.3458 10.7333 17.3458 11.1167C17.4417 11.5 17.0583 11.8833 16.5792 11.8833Z" fill="#fff"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="agreement">
                                Нажимая на кнопку "Связаться с нами", вы даете согласие на <span className='special'>обработку персональных данных</span>.
                            </div>
                            <button type='submit' className="submit">
                                Получить консультацию
                            </button>
                        </div>
                    </form>
                </div>
                <div className="contactsWrapper">
                    <div className="animation">
                        <img src={crosses} alt="animation"/>
                    </div>
                    <div className="contacts">
                        <div className="contact">
                            <a href="tel:+79811036538" className="contactPhone">+7 981 103 65 38</a>
                        </div>
                        <div className="contact">
                            <div className="mail">
                                studio_test_mail@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </QustionsTag>
    );
};

export default Questions;