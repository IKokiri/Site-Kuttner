
import Nav from '../Nav/Nav';
import Link from 'next/link'

function Header({ Component, pageProps }) {
    return (
        <>
            <header className="main-header style-two">
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="clearfix">
                                <div className="info-box">
                                    <div className="social-icons">
                                        <a href="/pt" target="_blank">
                                            <b>BR</b>
                                        </a>
                                        <a href="/en" target="_blank">
                                            <b>EN</b>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-upper">
                    <div className="auto-container">
                        <div className="clearfix">

                            <div className="pull-right logo-outer">
                                <div className="logo">
                                    {
                                        <a href='/'>
                                            <img src="./imgs/logo/logo.png" alt="" title="" />
                                        </a>
                                    }
                                </div>
                            </div>

                            <div className="upper-right clearfix">

                                <div className="upper-column info-box">
                                    <div className="icon-box"><span className="machinery-icon-map"></span></div>
                                    <ul>
                                        <li>R. Santiago Ballesteros, 610</li>
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
                                        <a href="https://www.youtube.com/channel/UCI3_AlU__S5z8z6Ca6QYgsQ" target="_blank">
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/company/kuttner-do-brasil/" target="_blank">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Nav />
        </>
    )
}

export default Header

