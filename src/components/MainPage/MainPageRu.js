import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactsRu from '../Contacts/Ru/ContactsRu';
import BasicInfRu from '../AboutMe/Ru/BasicInfRu';
import CertificateRu from '../AboutMe/Ru/CertificateRu';
import CourseRu from '../Course/Ru/CourseRu';
import NotFound from "../Errors/NotFound";
import HeaderRu from "../Header/HeaderRu";
import FooterRu from "../Footer/FooterRu";
import MainContentRu from "../MainContent/MainContentRu";
import QuestionsRu from "../Patient/Ru/QuestionsRu";
import DiagnosticsRu from "../Patient/Ru/DiagnosticsRu";
class MainPageRu extends React.Component {


    render() {
        return (
            <>
                <HeaderRu></HeaderRu>
                <div className={"mainPage"}>
                    <Routes>
                        <Route path="/" element={<MainContentRu />} />
                        <Route path="contacts/ru" element={<ContactsRu />} />
                        <Route path="about/basic-info/ru" element={<BasicInfRu />} />
                        <Route path="about/certificates/ru" element={<CertificateRu />} />
                        <Route path='course/ru' element={<CourseRu/>}></Route>
                        <Route path='patient/diagnostics/ru' element={<DiagnosticsRu/>}></Route>
                        <Route path='patient/questions/ru' element={<QuestionsRu/>}></Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <FooterRu></FooterRu>
            </>

        );
    }
}

export default MainPageRu;
