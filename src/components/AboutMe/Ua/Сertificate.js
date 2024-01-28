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
                            <img src={'/images/certificate1.png'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/certificate1.png')} />
                            <img src={'/images/certificate1.png'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/certificate1.png')} />
                            <img src={'/images/certificate1.png'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/certificate1.png')} />
                            <img src={'/images/certificate1.png'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/certificate1.png')} />
                            <img src={'/images/certificate1.png'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/certificate1.png')} />
                            <img src={'/images/certificate1.png'} className={'photoCeAboutMe'} onClick={() => this.openModal('/images/certificate1.png')} />
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