import { tecnologias } from '../../pages/api/tecnologias'
function Tecnologias({ Component, pageProps }) {
  return (
    <><style jsx>{`
      img:hover{
        opacity:0.8
      }
      `}
    </style>
      <section className="projects-section-two container">
        <div className="auto-container">
          <div className="mixitup-gallery">
            <div className="inner-container clearfix">
              <div className="filters text-center clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                  <h2>TECNOLOGIAS</h2>
                </ul>
              </div>
            </div>
            {
              tecnologias.map((t) => {
                return <div className="project-block-one mix all power col-md-6 col-sm-6 col-xs-12">
                  <div className="image-box">
                    <a href={t.arquivo} target="_blank">
                      <img src={t.imagem} alt="" style={{cursor:"pointer"}} />
                      </a>
                    <div className="overlay-box">
                    </div>
                  </div>
                  <div className="content-box">
                    <h4><span>{t.titulo}</span></h4>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Tecnologias
