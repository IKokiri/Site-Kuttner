import { representantesBrasil } from "../../pages/api/representantesBrasil"

function RepresentantesBrasil({ Component, pageProps }) {
  return (
    <>
      <section className="container">
        <div className="contact-section-two">
          <div className="auto-container">
            <div className="sec-title">
              <h2>Representantes Brasil</h2>
            </div>
            <div className="">
              <div className=" col-md-12 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <div className="branches-carousel owl-theme">
                    <div className="slide">
                      <div className="branch-info-box">
                        <div className="row clearfix">

                          {
                            representantesBrasil.map((r) => {
                              return <div className="info-column col-md-6 col-sm-12 col-xs-12">
                                <div className="lucation">{r.local}{(r.campo)?' - ':''}{r.campo}</div>
                                <h4>{r.empresa}</h4>
                                <ul>
                                  <li>
                                    <span className="icon flaticon-support"></span>
                                    <h5>{r.nome}</h5>
                                    <p><a href="#">{r.telefone}</a></p>
                                    <p><a href="#">{r.telefone2}</a></p>
                                  </li>
                                  <li>
                                    <span className="icon flaticon-place"></span>
                                    <h5>{r.endereco}</h5>
                                    <p>{r.complemento}</p>
                                  </li>
                                  <li>
                                    <span className="icon flaticon-plane"></span>
                                    <h5>E-Mail</h5>
                                    <p><a href="#">{r.email}</a></p>
                                  </li>
                                </ul>
                                <br/>
                                <br/>
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

export default RepresentantesBrasil
