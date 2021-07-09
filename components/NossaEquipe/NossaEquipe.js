import { nossaEquipe } from "../../pages/api/nossaEquipe"

function NossaEquipe({ Component, pageProps }) {
  return (
    <>
      <section className="container">
        <div className="team-section">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h2>Nossa Equipe</h2>
            </div>
            <div className="row clearfix">
              {
                nossaEquipe.map((n) => {
                  return <div key={n.email} className="team-block col-md-6 col-sm-6 col-xs-12">
                    <div className="inner-box">
                      <div className="lower-content">
                        <div className="email"><a href="#"><span className="flaticon-email-1"></span></a></div>
                        <h3 className="name">{n.cargo}</h3>
                        <span className="designation">{n.nome}</span>
                        <span className="designation">{n.email}</span>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NossaEquipe
