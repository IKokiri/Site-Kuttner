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
                <a className="left carousel-control" href="" role="button" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="" role="button" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                </a>

                <ul className="carousel-indicators list-inline custom-navigation">
                    <li data-target="#" data-slide-to="0"></li>
                    <li data-target="#" data-slide-to="1"></li>
                    <li data-target="#" data-slide-to="2"></li>
                    <li data-target="#" data-slide-to="3"></li>
                    <li data-target="#" data-slide-to="4"></li>
                    <li data-target="#" data-slide-to="5"></li>
                </ul>
            </div>
        </>
    )
}

export default Banner

