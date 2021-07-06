import { catalogos } from '../../pages/api/catalogos'
function Catalogos({ Component, pageProps }) {
  return (
    <><style jsx>{`
      img:hover{
        opacity:0.8;
        border:solid 1px blue;
        cursor:pointer;
      }
      `}
    </style>
      <section className="projects-section-two container">
        <div className="auto-container">
          <div className="mixitup-gallery">
            <div className="inner-container clearfix">
              <div className="filters text-center clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                  <h2>Catalogo</h2>
                </ul>
              </div>
            </div>
            {
              catalogos.map((c) => {
                return <div className="project-block-one mix all power col-md-4 col-sm-6 col-xs-12">
                  <div className="image-box">
                    <a href={c.arquivo} target="_blank" className="lightbox-image" data-fancybox="Gallery">
                      <figure><img src={c.imagem} alt="" /></figure>
                    </a>
                    <div className="overlay-box">
                    </div>
                  </div>
                  <div className="content-box">
                    <h4><span>{c.titulo.length > 25 ? c.titulo.substr(0, 25) + "..." : c.titulo}</span><br /></h4>
                    <span className="tag">{c.tag}</span>
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

export default Catalogos
