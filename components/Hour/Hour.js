
import Nav from '../Nav/Nav';
import Link from 'next/link'

function Hour({ Component, pageProps }) {
    return (
        <>
            <header className="main-header style-two">
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="top-left">
                                <ul className="clearfix top-menu">
                                </ul>
                            </div>
                            <div className="top-right clearfix">
                                <ul className="clearfix right-info">
                                    <li><i className="icon flaticon-clock-circular-outline"></i> Seg - Qui: 08:00 - 18:00 / Sex - 08:00 - 17:00 </li>
                                </ul>
                                <div className="language dropdownn">
                                    <a className="btn btn-default dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" href="#"><span className="icon flaticon-globe"></span> Brasil <i className="fa fa-angle-down"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-upper">
                    <div className="auto-container">
                        <div className="clearfix">

                            <div className="pull-left logo-outer">
                                <div className="logo"><Link href="/"><img src="./imgs/logo/logo.png" alt="" title="" /></Link></div>
                            </div>

                            <div className="pull-right upper-right clearfix">

                                <div className="upper-column info-box">
                                    <div className="icon-box"><span className="machinery-icon-map"></span></div>
                                    <ul>
                                        <li>R. Santiago Balesteiros, 610</li>
                                        <li><strong>Cinco - Contagem, MG.</strong></li>
                                    </ul>
                                </div>

                                <div className="upper-column info-box">
                                    <div className="icon-box"><span className="machinery-icon-contact"></span></div>
                                    <ul>
                                        <li>+55 31 3399-7200</li>
                                        <li><strong>kuttner@kuttner.com.br</strong></li>
                                    </ul>
                                </div>

                                <div className="upper-column info-box">
                                    <div className="social-icons">
                                        <a href="#"><i className="fa fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Nav/>
            </header>
        </>
    )
}

export default Hour

