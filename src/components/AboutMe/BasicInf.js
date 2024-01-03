import React from 'react'

class BasicInf extends React.Component{
    render(){
        return(
            <div className={'basicInf'}>
                <div className={'container'}>
                <div className={'aboutDoctor'}>
                    <h1>Про мене</h1>
                    <p>Some text</p>
                </div>
                <div className={'education'}>
                    <h2>Вища освіта</h2>
                    <p>Some text</p>
                </div>
                <div className={'experience'}>
                    <h2>Професійній Досвід</h2>
                    <p>Some text</p>
                </div>
                <div className={'practice'}>
                    <h2>Пріоритетні напрямки практичної діяльності:</h2>
                    <p>Some text</p>
                </div>
                </div>
            </div>
        )
    }
}
export default BasicInf