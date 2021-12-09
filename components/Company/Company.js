function Company({ Component, ...pageProps }) {
    const company = pageProps.companies
    return (
        <>
            {
                company.map((c) => {
                    let conteudo = ''
                    let texto = <div className="col-md-6">
                        <div className="sec-title">
                            <h2 style={{ color: c.corTexto }}>{c.empresa}</h2>
                        </div>
                        <div className="content-box">
                            <h3 style={{ color: c.corTexto }}>{c.slogan}</h3>
                            <p className="text-justify" style={{ color: c.corTexto }}>
                                {c.item1}
                                {conteudo}
                            </p>
                        </div>
                    </div>

                    let imagem = <div className="col-md-6">
                        <div className="image-box">
                            <img src={c.item2} alt="Awesome Image" />
                        </div>
                    </div>



                    return <section style={{ backgroundColor: c.cor }} className="about-style-one">
                        <div className="auto-container">
                            <div className="row">
                                {c.posicao ? texto : imagem}
                                {c.posicao ? imagem : texto}
                            </div>
                        </div>
                    </section>
                })
            }

        </>
    )
}
export default Company

