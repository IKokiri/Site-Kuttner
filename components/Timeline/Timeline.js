import { historia } from '../../pages/api/historia'
import FundoSlide from '../FundoSlide/FundoSlide'

function Timeline({ Component, pageProps }) {

    return (
        <>
            {
                historia.map((h, i) => {

                    let tam = historia.length;

                    let hist = <section class="container">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="our-blog padding-right">
                                <div className="news-block-two">
                                    <div className="inner-box">
                                        <div className="image-box"><a href="javascript:void(0)"><img src={h.imagem} alt="" /></a></div>
                                        <div className="lower-content clearfix">
                                            <div className="info">
                                                <ul>
                                                    <li><h2><i className="fa fa-clock-o"></i>{h.data}</h2></li>
                                                </ul>
                                            </div>
                                            <div className="text">
                                                {h.texto}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    let fundo = (tam / 2 == i + 1) ? <FundoSlide /> : ''

                    return <div>
                        {
                            hist
                        }
                        {
                            fundo
                        }
                    </div>
                })
            }



        </>
    )
}
export default Timeline

