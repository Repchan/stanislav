import React from 'react'

class MainContent extends React.Component{
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
            <div className={'mainContent'}>
                <div className={'blockTop'}>
                    <div className={'blockTopImage'}></div>
                    <div className={'container'}>

                        <h2>Lorem ipsum&nbsp;&mdash; gravida, vivamus eget tellus magna gravida massa quisque quam lectus rutrum massa magna commodo auctor tempus magna massa. </h2>
                    </div>
                </div>
                <div className={'secondBlock'}>
                    <div className={'container'}>
                        <h2>Напрямки лікування</h2>
                        <div className={'secondBlockContainer'}>
                            <div className={'card'}>
                                <img src={'/images/dahiliye.jpg'}></img>
                                <p>Операції</p>
                            </div>
                            <div className={'card'}>
                                <img src={'/images/dahiliye.jpg'}></img>
                                <p>Консультації</p>
                            </div>
                            <div className={'card'}>
                                <img src={'/images/dahiliye.jpg'}></img>
                                <p>Виїзд</p>
                            </div>
                            <div className={'card'}>
                                <img src={'/images/dahiliye.jpg'}></img>
                                <p>Текст</p>
                            </div>
                            <div className={'card'}>
                                <img src={'/images/dahiliye.jpg'}></img>
                                <p>Текст</p>
                            </div>
                            <div className={'card'}>
                                <img src={'/images/dahiliye.jpg'}></img>
                                <p>Текст</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={'blockMiddle'}>
                    <div className={'blockMiddleImage'} ></div>
                    <div className={'container'}>
                        <div className={'middleBlockContainerCard'}>
                            <div className={'middleBlockCard'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                     className="cardLogo" viewBox="0 0 16 16">
                                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
                                </svg>
                                <p>Some info about medicine</p>
                            </div>
                            <div className={'middleBlockCard'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                     className="cardLogo" viewBox="0 0 16 16">
                                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
                                </svg>
                                <p>Some info about medicine</p>
                            </div>
                            <div className={'middleBlockCard'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                     className="cardLogo" viewBox="0 0 16 16">
                                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/>
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
                                </svg>
                                <p>Some info about medicine</p>
                            </div>
                            <div className={'middleBlockCard'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                     className="cardLogo" viewBox="0 0 16 16">
                                    <path d="M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"/>
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
                                </svg>
                                <p>Some info about medicine</p>
                            </div>
                            <div className={'middleBlockCard'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                     className="cardLogo" viewBox="0 0 16 16">
                                    <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/>
                                </svg>
                                <p>Some info about medicine</p>
                            </div>
                            <div className={'middleBlockCard'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                     className="cardLogo" viewBox="0 0 16 16">
                                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.21 3.855c1.612 0 2.515.99 2.573 1.899H9.494c-.1-.358-.51-.815-1.312-.815-1.078 0-1.817 1.09-1.805 3.036h.082c.229-.545.855-1.155 1.98-1.155 1.254 0 2.508.88 2.508 2.555 0 1.77-1.218 2.783-2.847 2.783-.932 0-1.84-.328-2.409-1.254-.369-.603-.597-1.459-.597-2.642 0-3.012 1.248-4.407 3.117-4.407Zm-.099 4.008c-.92 0-1.564.65-1.564 1.576 0 1.032.703 1.635 1.558 1.635.868 0 1.553-.533 1.553-1.629 0-1.06-.744-1.582-1.547-1.582"/>
                                </svg>
                                <p>Some info about medicine</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'aboutMe'}>
                    <div className={'container'}>
                        <div className={'aboutMeContainer'}>
                            <div className={'doctorImageBlock'}>
                                <img src={'/images/doctorPhoto.jpg'} className={'doctorImage'} alt={'name doctor'} ></img>
                            </div>
                            <div className={'about'}>
                                <h2 className={'aboutName'}>Шевченко Ростислав</h2>
                                <ul className={'aboutUl'}>
                                    <li className={'aboutLi'}>Лауреат премії </li>
                                    <li className={'aboutLi'}>Лауреат премії </li>
                                    <li className={'aboutLi'}>Кандидат наук по дослідженям у сфері </li>
                                    <li className={'aboutLi'}>Дійсний </li>
                                </ul>
                                <div className={'aboutPhotosSlider'}>
                                    <img src={'/images/diplomas/1.jpg'} className={'photoC'} onClick={() => this.openModal('/images/diplomas/1.jpg')} />
                                    <img src={'/images/diplomas/2.jpg'} className={'photoC'} onClick={() => this.openModal('/images/diplomas/2.jpg')} />
                                    <img src={'/images/diplomas/3.jpg'} className={'photoC'} onClick={() => this.openModal('/images/diplomas/3.jpg')} />
                                    <img src={'/images/diplomas/4.jpg'} className={'photoC'} onClick={() => this.openModal('/images/diplomas/4.jpg')} />
                                </div>
                            </div>
                        </div>
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
export default MainContent