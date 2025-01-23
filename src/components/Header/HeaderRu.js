import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const HeaderRu = () => {
    const [isAboutMeDropdownOpen, setIsAboutMeDropdownOpen] = useState(false);
    const [isPatientDropdownOpen, setIsPatientDropdownOpen] = useState(false);
    const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const location = useLocation();
    const currentPath = location.pathname;
    useEffect(() => {
        const updateWindowSize = () => {
            setWindowWidth(window.innerWidth);
            if(windowWidth>768){
                setIsBurgerOpen(false);
            }
        };
        window.addEventListener('resize', updateWindowSize);

        console.log(windowWidth)

        updateWindowSize();
        return () => {
            updateWindowSize();
        };
    }, []);

    const toggleAboutMeDropdown = () => {
        setIsAboutMeDropdownOpen((prevState) => !prevState);
        setIsPatientDropdownOpen(false);
        setIsCourseDropdownOpen(false);
        setIsContactDropdownOpen(false);
        setIsMainDropdownOpen(false);
    };


    const togglePatientDropdown = () => {
        setIsAboutMeDropdownOpen(false);
        setIsPatientDropdownOpen((prevState) => !prevState);
        setIsCourseDropdownOpen(false);
        setIsContactDropdownOpen(false);
        setIsMainDropdownOpen(false);
    };
    const toggleCourseDropdown = () => {
        setIsAboutMeDropdownOpen(false);
        setIsPatientDropdownOpen(false);
        setIsCourseDropdownOpen((prevState) => !prevState);
        setIsContactDropdownOpen(false);
        setIsMainDropdownOpen(false);
    };
    const toggleContactDropdown = () => {
        setIsAboutMeDropdownOpen(false);
        setIsPatientDropdownOpen(false);
        setIsCourseDropdownOpen(false);
        setIsContactDropdownOpen((prevState) => !prevState);
        setIsMainDropdownOpen(false);
    };
    const toggleMainDropdown = () => {
        setIsAboutMeDropdownOpen(false);
        setIsPatientDropdownOpen(false);
        setIsCourseDropdownOpen(false);
        setIsContactDropdownOpen(false);
        setIsMainDropdownOpen((prevState) => !prevState);
    };
    const toggleBurger = () =>{
        if(windowWidth<769){
            setIsBurgerOpen((prevState) => !prevState)
        }
        else{
            setIsBurgerOpen(false)
        }
    }

    return (
        <header>
            <div className={'topHeader'}>
                <div className={'container'}>
                    <a href={'tel:+380123456789'} className={`phoneElement`}>
                        <svg width="15" height="15" fill="currentColor"
                             className={'icon'} viewBox="0 0 16 16">
                            <path
                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        +380123456789
                    </a>
                    <a href={'mailto:doctor@gmail.com'} className={`emailElement`}>
                        <svg width="15" height="15" fill="currentColor"
                             viewBox="0 0 16 16" className={'icon'}>

                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        doctor@gmail.com
                    </a>
                    <a href={'#'} className={'addressEl'}>
                        <svg width="15" height="15" fill="currentColor"
                             className="icon" viewBox="0 0 16 16">
                            <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        Адрес
                    </a>
                    <div className={'socialGroup'}>
                        <a href={'#'}>
                            <svg width="15" height="15" fill="currentColor"
                                 className="icon" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                            </svg>
                            Telegram
                        </a>
                        <a href={'#'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" className="icon">
                                <path d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"/>
                            </svg>
                            Viber
                        </a>
                    </div>
                    <div className={'local'}>
                        <a><Link to={'/ru/'} className={'Active'}>
                            Рус
                        </Link></a>
                        <a>
                            <Link to={currentPath.replace('/ru', '')}>
                                Укр
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
            <div className={'mainHeader'}>
                <div className={'container'}>
                    <a className={'logo'} href={'#'}>
                        <Link to={'/ru/'} onClick={()=>{
                            if(isBurgerOpen){
                                setIsBurgerOpen(false)
                            }}}>
                            <img className={'logo'} src={'/images/logo2.png'} alt={'logo'} />
                        </Link>
                    </a>
                    <div className={'burgerMenu'} onClick={()=>toggleBurger()}>☰</div>
                    <ul className={`${isBurgerOpen ? `navigationBurger`:`navigation`} `}>
                        <li className={`${isBurgerOpen ? `burgerElement`:``}`}>
                            <ul className={'aboutMe'}>
                                <li  className={'navLink'} onClick={() =>{toggleAboutMeDropdown()} }>
                                    Про меня
                                </li>
                                {isAboutMeDropdownOpen && (
                                    <div className="dropdown-content">
                                        <ul className={'dropdownBlock'}>
                                            <li onClick={() =>{ toggleAboutMeDropdown(); toggleBurger();}}>
                                                <Link to="/ru/about/basic-info">Общая информация</Link>
                                            </li>
                                            <li onClick={() => { toggleAboutMeDropdown(); toggleBurger();}}>
                                                <Link to="/ru/about/certificates">Сертификаты</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </ul>
                        </li>
                        <li className={`${isBurgerOpen ? `burgerElement`:``}`}>
                            <ul className={'patient'}>
                                <li  className={'navLink'} onClick={() => togglePatientDropdown()}>
                                    Пациентам
                                </li>
                                {isPatientDropdownOpen && (
                                    <div className="dropdown-content">
                                        <ul className={'dropdownBlock'}>
                                            <li onClick={() => { togglePatientDropdown(); toggleBurger();}}>
                                                <Link to="/ru/patient/diagnostics">Диагностика</Link>
                                            </li>
                                            <li onClick={() => { togglePatientDropdown(); toggleBurger();}}>
                                                <Link to="/ru/patient/questions">Вопрос-Ответ</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </ul>
                        </li>

                        <li className={`${isBurgerOpen ? `burgerElement`:``}`} onClick={() => { toggleBurger();}}>
                            <Link className={'navLink'} to={'/ru/course'}>
                                Направление
                            </Link>
                        </li>
                        <li className={`${isBurgerOpen ? `burgerElement`:``}`} onClick={() => {  toggleBurger();}}>
                            <Link className={'navLink'} to={'/ru/contacts'}>
                                Контакты
                            </Link>
                        </li>
                        <li className={`${isBurgerOpen ? `burgerElement`:``}`} onClick={() => { toggleBurger();}}>
                            <Link className={'navLink'} to={'/ru/'}>
                                Главная
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default HeaderRu;