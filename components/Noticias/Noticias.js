import { noticias } from '../../pages/api/noticias'
function Noticias({ Component, pageProps }) {
  return (
    <><style jsx>{`
    img:hover{
      opacity:0.8;
      border:solid 1px blue;
    }
    `}
    </style>
      <div className="container">
        <section className="projects-section-two">
          <div className="auto-container">
            <div className="mixitup-gallery">
              <div className="inner-container clearfix">
                <div className="filters text-center clearfix">
                  <ul className="filter-tabs filter-btns clearfix">
                    <h2>NOTICIAS</h2>
                  </ul>
                </div>
              </div>
              {
                noticias.map((t) => {
                  return <div style={{ cursor: "pointer" }} className="project-block-one mix all power tecnologiaskuttner col-md-3 col-sm-6 col-xs-12">
                    <div className="image-box">
                      <a href={t.arquivo} target="_blank" className="lightbox-image" data-fancybox="Gallery">
                        <figure>
                          <img src={t.imagem} alt="" />
                        </figure>
                      </a>

                      <div className="overlay-box">

                      </div>
                      <div className="content-box">
                        <h4><span>{t.numero}<br />&nbsp;</span><br /></h4>
                        <span className="tag">{t.tag}</span>
                      </div>
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

export default Noticias

