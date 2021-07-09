import { company } from "../../pages/api/company"

function Company({ Component, pageProps }) {

    return (
        <>
            {
                company.map((c) => {
                    let conteudo = ''
                    let texto = <div className="content-column col-md-6 col-sm-12 col-xs-12">
                        <div className={c.classe}>
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <h2 style={{ color: c.corTexto }}>{c.empresa}</h2>
                                    <h5 style={{ color: c.corTexto }}>{c.slogan}</h5>
                                </div>
                                <p style={{ color: c.corTexto }} className='lead text-justify'>
                                    {c.item1}
                                </p>
                            </div>
                        </div>
                    </div>

                    let imagem = <div className="video-column col-md-6 col-sm-12 col-xs-12">
                        <div className="inner-column">
                            <figure className="image"><img src={c.item2} alt="" />
                            </figure>
                        </div>
                    </div>

                    conteudo = c.posicao ? imagem : texto

                    return <section className="about-style-one">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="image-box">
                                    <img src="images/resource/about-1-1.jpg" alt="Awesome Image" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="sec-title">
                                    <h4>Company</h4>
                                    <h2>About Our Company</h2>
                                </div>
                                <div className="content-box">
                                    <h3>Our Mission</h3>
                                    <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                                        and we will give you a complete account of the system, and expound the actual teachings.</p>
                                    <h3>Our Vision</h3>
                                    <ul className="list-items">
                                        <li><i className="machinery-icon-favorites-button"></i> Desires to obtain pain of itself expound
                                        </li>
                                        <li><i className="machinery-icon-favorites-button"></i> Take a trivial example, which of us
                                            undertakes works</li>
                                        <li><i className="machinery-icon-favorites-button"></i> Chooses to enjoy a pleasure annoying results
                                        </li>
                                    </ul>
                                    <a href="#" className="more-btn"><i className="machinery-icon-next"></i>More About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                })
            }

        </>
    )
}
export default Company

