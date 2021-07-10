import { historia } from '../../pages/api/historia'
import FundoSlide from '../FundoSlide/FundoSlide'

function Timeline({ Component, pageProps }) {

    return (
        <>
            <section class="container">
                <div className="content-side col-md-12 col-sm-12 col-xs-12">
                    <div className="our-blog padding-right">
                        <div className="news-block-two">
                            <div className="inner-box">
                                <div className="image-box"><a href="javascript:void(0)"><img src="imgs/historia/kdbhistoria1.webp" alt="" /></a></div>
                                <div className="lower-content clearfix">
                                    <div className="info">
                                        <ul>
                                            <li><h2><i className="fa fa-clock-o"></i>Maio, 1974</h2></li>
                                        </ul>
                                    </div>
                                    <div className="text">
                                        O Grupo Küttner Alemanha se estabelece no Brasil com uma filial em Belo Horizonte para atender a crescente demanda do mercado brasileiro de indústria siderúrgica, fundição e mineração
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FundoSlide />
            <br/>
            <section class="container">
                <div className="content-side col-md-12 col-sm-12 col-xs-12">
                    <div className="our-blog padding-right">
                        <div className="news-block-two">
                            <div className="inner-box">
                                <div className="image-box"><a href="javascript:void(0)"><img src="imgs/historia/knbshistoria1.webp" alt="" /></a></div>
                                <div className="lower-content clearfix">
                                    <div className="info">
                                        <ul>
                                            <li><h2><i className="fa fa-clock-o"></i>Julho, 2017</h2></li>
                                        </ul>
                                    </div>
                                    <div className="text">
                                        A IMF Brasil é incorporada no Grupo Küttner como afiliada da Kuttner do Brasil, mudando o seu nome para Kuttner No-Bake Solutions
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Timeline

