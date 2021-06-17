import { menu } from '../../pages/api/menu'
import Link from 'next/link'

function Bootom({ Component, pageProps }) {
    return (
        <>
            <footer className="main-footer padding-top">
                <div className="auto-container">
                    <div className="widgets-section">
                        <div className="row clearfix">
                            <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-widget contact-widget">
                                    <div className="single-contact-widget">
                                        <div className="text-box">
                                            <img src="imgs/logo/logo.png" alt="" title="" /><br />&nbsp; <br />&nbsp;
                                        </div>
                                    </div>
                                    <div className="single-contact-widget">
                                        <div className="text-box">
                                            <p style={{ color: "#444 !important" }}>Deseja receber as novidades da Kuttner do Brasil por e-mail?</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-widget">
                                        <div className="text-box">
                                            <span href="/" data-toggle="modal" className="cliq" data-target="#exampleModal" style={{ cursor: 'pointer' }}> Clique aqui.</span>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title"><h2>Atalhos</h2></div>
                                    <div className="widget-content">
                                        <ul className="list clearfix">
                                            {
                                                menu.map((nav) => {
                                                    return <li key={nav.titulo}>
                                                        <Link href={nav.local}>
                                                            {nav.titulo}
                                                        </Link>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-widget contact-widget">
                                    <div className="single-contact-widget">
                                        <div className="icon-box">
                                            <i className="machinery-icon-telephone"></i>
                                        </div>
                                        <div className="text-box">
                                            <h3>Contato:</h3>
                                            <span>+55 31 3399-7200</span>
                                            <p style={{ color: "#444 !important" }}>08:00 - 18:00</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-widget">
                                        <div className="icon-box">
                                            <i className="machinery-icon-map"></i>
                                        </div>
                                        <div className="text-box">
                                            <p style={{ color: "#444 !important" }}>R. Santiago Balesteiros, 610<br />Cinco - Contagem, MG.</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-widget">
                                        <div className="icon-box">
                                            <i className="machinery-icon-send"></i>
                                        </div>
                                        <div className="text-box">
                                            <h3>E-Mail</h3>
                                            <p style={{ color: "#444 !important" }}>kuttner@kuttner.com.br</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Bootom

