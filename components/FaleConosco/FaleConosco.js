function FaleConosco({ Component, pageProps }) {
  return (
    <>
      <section className="container">
        <div className="form-column col-md-12 col-sm-12 col-xs-12">
          <div className="inner-column">
            <div className="form-column col-md-12 col-sm-12 col-xs-12">
              <div className="inner-column">
                <div className="sec-title text-center">
                  <h1>Fale conosco.</h1>
                  <div className="text">&nbsp;</div>
                </div>
                <div className="contact-form style-three">
                  <form>
                    <div className="row clearfix">
                      <div className="left-column col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Empresa</label>
                          <input type="text" name="username" placeholder="Sua Empresa" required />
                        </div>

                        <div className="form-group">
                          <label>Nome</label>
                          <input type="text" name="username" placeholder="Seu Nome" required />
                        </div>

                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" name="email" placeholder="Seu E-Mail" required />
                        </div>

                        <div className="form-group">
                          <label>Função</label>
                          <input type="text" name="subject" placeholder="Sua Função" required />
                        </div>
                      </div>
                      <div className="column col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group border-left">
                          <label>Mensagem</label>
                          <textarea name="message" placeholder="Sua Mensagem"></textarea>
                        </div>
                      </div>
                      <div className="column col-md-12 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <button type="submit" className="theme-btn">Enviar</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaleConosco
