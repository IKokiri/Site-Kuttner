import { trabalhos } from '../../pages/api/trabalhos'
function Trabalhos({ Component, pageProps }) {
  return (
    <><style jsx>{`
      img:hover{
        opacity:0.8
      }
      `}
    </style>
      <section className="container">
        <div className="projects-section-two">
          <div className="auto-container">
            <div className="mixitup-gallery">
              <div className="inner-container clearfix">
                <div className="filters text-center clearfix">
                  <ul className="filter-tabs filter-btns clearfix">
                    <h2>TRABALHOS</h2>
                  </ul>
                </div>
              </div>
              {
                trabalhos.map((t, i) => {
                  return <div className="project-block-one mix all power col-md-4 col-sm-6 col-xs-12">
                    <div className="image-box">
                      <a href={t.arquivo} target="_blank">
                        <img src={t.imagem} alt={t.titulo} style={{ cursor: "pointer" }} />
                      </a>
                      <div className="overlay-box">
                      </div>
                    </div>
                    <div className="content-box">
                      <h4 style={{ height: "60px" }}><span>{t.titulo.toUpperCase()}</span></h4>
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

export default Trabalhos
