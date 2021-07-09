import { representantesAL } from "../../pages/api/representantesAL"

function RepresentantesAL({ Component, pageProps }) {
  return (
    <>
      <section className="container">
        <div className="contact-section-two">
          <div className="auto-container">
            <div className="sec-title">
              <h2>Representantes América Latina</h2>
            </div>
            <div className="">
              <div className=" col-md-12 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <div className="branches-carousel owl-theme">
                    <div className="slide">
                      <div className="branch-info-box">
                        <div className="row clearfix">

                          {
                            representantesAL.map((r) => {
                              return <div className="info-column col-md-6 col-sm-12 col-xs-12">
                                <div className="lucation">{r.empresa}</div>
                                <ul>
                                  <li>
                                    <span className="icon flaticon-support"></span>
                                    <h5>{r.nome}</h5>
                                    <p><a href="#">{r.telefone}</a></p>
                                    <p><a href="#">{r.telefone2}</a></p>
                                  </li>
                                  <li>
                                    <span className="icon flaticon-place"></span>
                                    <h5>Rua Álvaro Rodrigues, 182, sl 95/96</h5>
                                    <p>São Paulo - SP</p>
                                  </li>
                                  <li>
                                    <span className="icon flaticon-plane"></span>
                                    <h5>E-Mail</h5>
                                    <p><a href="#">renato.pierri@cerp.com.br</a></p>
                                  </li>
                                </ul>
                              </div>
                            })
                          }

                        </div>
                      </div>

                    </div>
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

export default RepresentantesAL
