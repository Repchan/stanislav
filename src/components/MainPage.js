import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainContent from './MainContent';
import Contacts from './Contacts';
import BasicInf from './AboutMe/BasicInf';
import Certificate from './AboutMe/Сertificate';
import Course from './Course';
import Publications from './Science/Publications';
import ScienceExperience from './Science/ScienceExperience';
import Diagnostics from "./Patient/Diagnostics";
import Questions from "./Patient/Questions";
import NotFound from "./Errors/NotFound";
import MapComponent from "./Map";
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAboutMeDropdownOpen: false,
            isScienceDropdownOpen: false,
            isPatientDropdownOpen: false,
        };
    }

    toggleAboutMeDropdown = () => {
        this.setState((prevState) => ({
            isAboutMeDropdownOpen: !prevState.isAboutMeDropdownOpen,
            isScienceDropdownOpen: false,
            isPatientDropdownOpen: false
        }));
    };

    toggleScienceDropdown = () => {
        this.setState((prevState) => ({
            isScienceDropdownOpen: !prevState.isScienceDropdownOpen,
            isAboutMeDropdownOpen: false,
            isPatientDropdownOpen: false
        }));
    };
    togglePatientDropdown = () => {
        this.setState((prevState) => ({
            isPatientDropdownOpen: !prevState.isPatientDropdownOpen,
            isAboutMeDropdownOpen: false,
            isScienceDropdownOpen: false,
        }));
    };

    render() {
        const { isAboutMeDropdownOpen, isScienceDropdownOpen,isPatientDropdownOpen } = this.state;

        return (
            <Router>
                <header>
                    <div className={'topHeader'}>
                        <div className={'container'}>
                            <a href={'tel:+380123456789'}>
                                <svg width="15" height="15" fill="currentColor"
                                     className={'icon'} viewBox="0 0 16 16">
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>
                                +380123456789</a>
                            <a href={'mailto:doctor@gmail.com'}>
                                <svg width="15" height="15" fill="currentColor"
                                     viewBox="0 0 16 16" className={'icon'}>

                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                                doctor@gmail.com</a>
                            <a href={'#'}>
                                <svg width="15" height="15" fill="currentColor"
                                     className="icon" viewBox="0 0 16 16">
                                    <path
                                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                Адресс</a>
                            <a href={'#'}>
                                <svg width="15" height="15" fill="currentColor"
                                     className="icon" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                </svg>
                                Telegram
                            </a>
                        </div>
                    </div>
                    <div className={'mainHeader'}>
                        <div className={'container'}>
                            <a className={'logo'} href={'#'}><Link to={"/"}><img className={'logo'} src={'/images/heart-pulse.svg'} alt={'logo'}/></Link></a>
                            <div className={'navigation'}>
                                <div className={'aboutMe'}>
                                    <a href={'#'} onClick={this.toggleAboutMeDropdown}>Про мене</a>
                                    {isAboutMeDropdownOpen && (
                                        <div className="dropdown-content">
                                            <ul className={'dropdownBlock'}>
                                                <li onClick={this.toggleAboutMeDropdown}><Link to="/about/basic-info">Загальна інформація</Link></li>
                                                <li onClick={this.toggleAboutMeDropdown}><Link to="/about/certificates">Сертифікати</Link></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className={'science'}>
                                    <a href={'#'} onClick={this.toggleScienceDropdown}>Наука</a>
                                    {isScienceDropdownOpen && (
                                        <div className="dropdown-content">
                                            <ul className={'dropdownBlock'}>
                                                <li onClick={this.toggleScienceDropdown}><Link to="/science/publications">Публікації</Link></li>
                                                <li onClick={this.toggleScienceDropdown}><Link to="/science/experience">Науковий досвід</Link></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className={'patient'}>
                                    <a href={'#'} onClick={this.togglePatientDropdown}>Паціентам</a>
                                    {isPatientDropdownOpen && (
                                        <div className="dropdown-content">
                                            <ul className={'dropdownBlock'}>
                                                <li onClick={this.togglePatientDropdown}><Link to="/patient/diagnostics">Діагностика</Link></li>
                                                <li onClick={this.togglePatientDropdown}><Link to="/patient/questions">Питання-Відповідь</Link></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <a href={'#'}><Link to={'/course'}>Напрямок</Link></a>
                                <a href={'#'}><Link to={"/contacts"}>Контакти</Link></a>
                                <a href={'#'}><Link to={"/"}>Головна</Link></a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={"mainPage"}>
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/about/basic-info" element={<BasicInf />} />
                        <Route path="/about/certificates" element={<Certificate />} />
                        <Route path='/course' element={<Course/>}></Route>
                        <Route path='/science/publications' element={<Publications/>}></Route>
                        <Route path='/science/experience' element={<ScienceExperience/>}></Route>
                        <Route path='/patient/diagnostics' element={<Diagnostics/>}></Route>
                        <Route path='/patient/questions' element={<Questions/>}></Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <footer>
                    <div className={'footerTop'}>
                        <div className={'container'}>
                            <div className={'footerInfo'}>
                                <h2>Контакти</h2>
                                <ul className={'footerInfoList'}>
                                    <li>380(098)1234567</li>
                                    <li>380(098)1234567</li>
                                    <li>somemail@gmail.com</li>
                                </ul>
                                <div className={'socialBlock'}></div>
                            </div>
                            <div className={'footerInfo'}>
                                <h2>Адреси</h2>
                                <ul className={'footerInfoList'}>
                                    <li>Some address</li>
                                    <li>Some address</li>
                                </ul>
                            </div>
                            <div className={'footerInfo'}>
                                <h2>Операції</h2>
                                <ul className={'footerInfoList'}>
                                    <li>Some operations</li>
                                    <li>Some operations</li>
                                    <li>Some operations</li>
                                    <li>Some operations</li>
                                    <li>Some operations</li>
                                </ul>
                            </div>
                        </div>
                        <MapComponent/>
                    </div>
                    <div className={'footerBott'}>
                        <div className={'container'}>
                            2023 Шевченко Станислав Ростиславович| Хірург-Підоролог у м. Київ. Всі права захищено.
                        </div>
                    </div>
                </footer>
            </Router>
        );
    }
}

export default MainPage;
