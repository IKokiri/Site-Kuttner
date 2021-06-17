function Bootom({ Component, pageProps }) {
    return (
        <>
            {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <section className="contact-section-three">
                                <div className="auto-container">
                                    <div className="row clearfix">
                                        <div className="form-column col-md-12 col-sm-12 col-xs-12">
                                            <div className="inner-column">
                                                <div className="sec-title">
                                                    <h2>Faça seu registro e receba nossas novidades.</h2>
                                                    <div className="text">&nbsp;</div>
                                                </div>
                                                <div className="contact-form style-three">
                                                    <form>
                                                        <div className="row clearfix">
                                                            <div className="left-column col-md-6 col-sm-6 col-xs-12">
                                                                <div className="form-group">
                                                                    <label>Empresa</label>
                                                                    <input type="text" name="username" value="" placeholder="Sua Empresa" required />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Nome</label>
                                                                    <input type="text" name="username" value="" placeholder="Seu Nome" required />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Email</label>
                                                                    <input type="email" name="email" value="" placeholder="Seu E-Mail" required />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Função</label>
                                                                    <input type="text" name="subject" value="" placeholder="Sua Função" required />
                                                                </div>
                                                            </div>
                                                            <div className="column col-md-6 col-sm-6 col-xs-12">
                                                                <div className="form-group border-left">
                                                                    <label>Mensagem</label>
                                                                    <textarea name="message" placeholder="Sua Mensagem"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="column col-md-12 col-sm-6 col-xs-12">
                                                                <div className="form-group">
                                                                    <button type="submit" className="theme-btn">Enviar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div> */}
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
                                            <p style={{color: "#444 !important"}}>Deseja receber as novidades da Kuttner do Brasil por e-mail?</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-widget">
                                        <div className="text-box">
                                            <span href="/" data-toggle="modal" className="cliq" data-target="#exampleModal" style={{cursor:'pointer'}}> Clique aqui.</span>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title"><h2>Atalhos</h2></div>
                                    <div className="widget-content">
                                        <ul className="list clearfix">
                                            <li><a style={{color: "#FFF !important;"}} href="about.php">Sobre Nós</a></li>
                                            <li><a style={{color: "#FFF !important;"}} href="docs\tecnologias\tecnologias.pdf">Tecnologias</a></li>
                                            <li><a style={{color: "#FFF !important;"}} href="trabalhostecnicos.php">Trabalhos Técnicos</a></li>
                                            <li><a style={{color: "#FFF !important;"}} href="news.php">Notícias</a></li>
                                            <li><a style={{color: "#FFF !important;"}} href="catalogos.php">Catálogos</a></li>
                                            <li><a style={{color: "#FFF !important;"}} href="contato.php">Contato</a></li>
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
                                            <p style={{color:"#444 !important"}}>08:00 - 18:00</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-widget">
                                        <div className="icon-box">
                                            <i className="machinery-icon-map"></i>
                                        </div>
                                        <div className="text-box">
                                            <p style={{color:"#444 !important"}}>R. Santiago Balesteiros, 610<br />Cinco - Contagem, MG.</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-widget">
                                        <div className="icon-box">
                                            <i className="machinery-icon-send"></i>
                                        </div>
                                        <div className="text-box">
                                            <h3>E-Mail</h3>
                                            <p style={{color:"#444 !important"}}>kuttner@kuttner.com.br</p>
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

