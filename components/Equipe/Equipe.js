import { equipe } from '../../pages/api/equipe'
function Equipe({ Component, pageProps }) {
  return (
    <>
      <section class="team-section">
        <div class="auto-container">
          <div class="sec-title text-center">
            <h2>Equipe</h2>
          </div>
          <div class="row clearfix">
            {
              equipe.map((e) => {
                return <div class="team-block col-md-4 col-sm-6 col-xs-12">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure><img src={e.imagem} alt="" /></figure>
                      <div class="overlay-box">
                        <ul class="social-links">
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="lower-content">
                      <h3 class="name">{e.nome}</h3>
                      <span class="designation">{e.cargo}</span>
                    </div>
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

export default Equipe
