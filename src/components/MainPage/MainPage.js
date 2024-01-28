import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import Contacts from '../Contacts/Ua/Contacts';
import BasicInf from '../AboutMe/Ua/BasicInf';
import Certificate from '../AboutMe/Ua/Сertificate';
import Course from '../Course/Ua/Course';
import Diagnostics from "../Patient/Ua/Diagnostics";
import Questions from "../Patient/Ua/Questions";
import NotFound from "../Errors/NotFound";
import MapComponent from "../Map/Ua/Map";
import HeaderUa from "../Header/HeaderUa";
import FooterUa from "../Footer/FooterUa";
class MainPage extends React.Component {


    render() {
        return (
            <>
                <HeaderUa></HeaderUa>
                <div className={"mainPage"}>
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="about/basic-info" element={<BasicInf />} />
                        <Route path="about/certificates" element={<Certificate />} />
                        <Route path='course' element={<Course/>}></Route>
                        <Route path='patient/diagnostics' element={<Diagnostics/>}></Route>
                        <Route path='patient/questions' element={<Questions/>}></Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <FooterUa></FooterUa>
            </>


        );
    }
}

export default MainPage;
