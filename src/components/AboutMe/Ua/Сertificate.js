import React from 'react';

class Certificate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedImage: null
        };
    }

    openModal = (imageSrc) => {
        this.setState({ showModal: true, selectedImage: imageSrc });
    }

    closeModal = () => {
        this.setState({ showModal: false, selectedImage: null });
    }
    render(){
        return(
                <div className={'certificate'}>
                    <div className={'container'}>
                        <h1>Дипломи та сертифікати</h1>
                        <div className={'certificateImages'}>
                            <img src={'/images/diplomas/1.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/1.jpg')} />
                            <img src={'/images/diplomas/2.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/2.jpg')} />
                            <img src={'/images/diplomas/3.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/3.jpg')} />
                            <img src={'/images/diplomas/4.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/4.jpg')} />
                            <img src={'/images/diplomas/5.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/5.jpg')} />
                            <img src={'/images/diplomas/6.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/6.jpg')} />
                            <img src={'/images/diplomas/7.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/7.jpg')} />
                            <img src={'/images/diplomas/8.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/8.jpg')} />
                            <img src={'/images/diplomas/9.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/9.jpg')} />
                            <img src={'/images/diplomas/10.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/10.jpg')} />
                            <img src={'/images/diplomas/11.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/11.jpg')} />
                            <img src={'/images/diplomas/12.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/12.jpg')} />
                            <img src={'/images/diplomas/13.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/13.jpg')} />
                            <img src={'/images/diplomas/14.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/14.jpg')} />
                            <img src={'/images/diplomas/15.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/15.jpg')} />
                            <img src={'/images/diplomas/16.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/16.jpg')} />
                            <img src={'/images/diplomas/17.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/17.jpg')} />
                            <img src={'/images/diplomas/18.jpg'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/diplomas/18.jpg')} />
                        </div>
                    </div>
                    {this.state.showModal &&
                        <div className="modal" onClick={this.closeModal}>
                            <img src={this.state.selectedImage} className="fullPageImage" />
                        </div>
                    }
                </div>
            )


    }
}
export default Certificate ;