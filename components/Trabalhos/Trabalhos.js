import { trabalhos } from '../../pages/api/trabalhos'
function Trabalhos({ Component, pageProps }) {
  return (
    <><style jsx>{`
      img:hover{
        opacity:0.8
      }
      `}
    </style>
      <div class="container">
        <section className="projects-section-two">
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
                trabalhos.map((t) => {
                  return <div className="project-block-one mix all power col-md-4 col-sm-4 col-xs-12">
                    <div className="image-box">
                      <a href={t.arquivo} target="_blank">
                        <img src={t.imagem} alt={t.titulo} style={{ cursor: "pointer" }} />
                      </a>
                      <div className="overlay-box">
                      </div>
                    </div>
                    <div className="content-box">
                      <h4><span>{t.titulo.length > 20 ? t.titulo.substr(0, 20) + "..." : t.titulo}</span></h4>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Trabalhos
