function Company({ Component, pageProps }) {

    return (
        <><style jsx>{`        
        .tc1 {
            color: white !important; 
        }
        
        .tc2 {
            color: #0894d5 !important; Company
        }
        
      `}</style>
            <section className="what-we-do" style={{backgroundColor:'#0894d5'}}>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <h2>Kuttner do Brasil</h2>
                                    <h5 className="tc1">Interdisciplinary work. One Group.</h5>
                                </div>

                                <p className="lead tc1 text-justify">Kuttner do Brasil, fornecedora tradicional de equipamentos e instalações para a indústria siderúrgica, de fundição, mineração, meio ambiente e energia, é uma empresa afiliada ao GRUPO Kuttner que tem atividades na Europa, Ásia e Américas.
                                    Fundada em 1974,  com sede em Contagem – MG,  atende aos mercados do Brasil e América do Sul.
                                    A combinação entre network global, know-how e experiência de mercado, faz da Kuttner do Brasil a parceira ideal para a realização de projetos industriais.
                                    A gama de atividades compreende o desenvolvimento de tecnologias e soluções técnicas avançadas, engenharia, projetos conceitual, básico e detalhado, fornecimento de equipamentos e sistemas, montagem e o start-up de instalações industriais completas com seus componentes mecânicos e elétricos, assim como, sistemas de automação e supervisórios de processos, em conformidade com as necessidades específicas de cada cliente.
                                </p>
                            </div>
                        </div>

                        <div className="video-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <figure className="image"><img src="imgs/empresa/kuttner do brasil.png" alt=""/>
                        </figure>
                    </div>
                            </div>
                        </div>
                    </div>
            
            </section>
                <section className="what-we-do">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="video-column col-md-6 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <figure className="image"><img src="imgs/empresa/grupo kuttner.png" alt=""/>
                        </figure>
                    </div>
                                </div>
                                <div className="content-column col-md-6 col-sm-12 col-xs-12">
                                    <div className="inner-column">
                                        <div className="sec-title light">
                                            <h2 className="tc2">Grupo Kuttner</h2>
                                        </div>

                                        <p className="lead tc2 text-justify">A Kuttner Holding com sede em Essen/Alemanha foi fundada no ano de 1949 pelo Engenheiro Dr. Carl Kuttner, sendo hoje um Grupo empresarial internacional com atividades na Europa, Ásia, América do Norte e América do Sul, dedicado à engenharia e fornecimento de instalações industriais “Turn Key”, principalmente para a indústria siderúrgica, metalúrgica/mineração e de fundição.
                                            O GRUPO Kuttner ocupa uma posição de líder no desenvolvimento e na implementação de tecnologias inovadoras nas áreas de matérias primas, meio ambiente e de recuperação energética, projetadas para economizar energia, reduzir o impacto sobre o meio ambiente, aumentar a eficiência operacional e otimizar o ciclo dos materiais.
                                            No Brasil, o GRUPO Kuttner está presente através de suas afiliadas Kuttner do Brasil em Contagem/MG e Kuttner No-Bake Solutions em Piracicaba/SP.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
    </section>
        </>
                )
}
export default Company

