import { banner } from './api'
function Banner({ Component, pageProps }) {
    return (
        <>
            <div id="minimal-bootstrap-carousel" className="carousel slide carousel-fade slider-home-one" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    {
                        banner.map((ban) => {
                            return <div key={ban.classe} className={ban.classe} style={ban.estilo} >
                                <div className="carousel-caption">
                                    <div className="container">
                                        <div className="box valign-middle">
                                            <div className="content">
                                                <div className="main-banner-content light" data-animation="animated fadeInUp">
                                                    <h2 style={ban.subestilo}>{ban.titulo}</h2>
                                                    <p className="text text-center" style={ban.subestilo2}>{ban.subtitulo}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
                

                
            </div>
        </>
    )
}

export default Banner

