import { empresas } from "../../pages/api/empresas"

function Empresas({ Component, pageProps }) {
  return (
    <>
      <section className="container">
        <div className="about-section-two col-md-12">

          {
            empresas.map((e) => {
              return <div key={e.email} className="info-column col-md-6 col-sm-6 col-xs-12">
                <div className="branch-info-box">
                  <div className="image-box">
                    <div className="image">
                      <a href={e.site} target='_blank'><img src={e.imagem} alt=""  /></a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <ul>
                      <li className="lilogo">
                      <a href={e.site} target='_blank'> <img src={e.logo} alt="" /></a>
                      </li>
                      <li>
                        <span className="icon flaticon-place"></span>
                        <h5>{e.endereco}</h5>
                        <p>{e.complemento}</p>
                      </li>

                      <li>
                        <span className="icon flaticon-support"></span>
                        <h5>Contato</h5>
                        <p><a href="#">{e.telefone}</a></p>
                      </li>

                      <li>
                        <span className="icon flaticon-plane"></span>
                        <h5>E-Mail</h5>
                        <p><a href="#">{e.email}</a></p>
                      </li>
                      <br />
                    </ul>
                  </div>
                </div>
              </div>

            })
          }


        </div>
      </section>
    </>
  )
}

export default Empresas
