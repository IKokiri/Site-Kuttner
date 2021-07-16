import Bootom from "../components/Bootom/Bootom"
import Empresas from "../components/Empresas/Empresas"
import FaleConosco from "../components/FaleConosco/FaleConosco"
import Header from "../components/Header/Header"
import MapaKdb from "../components/MapaKdb/MapaKdb"
import NossaEquipe from "../components/NossaEquipe/NossaEquipe"
import RepresentantesAL from "../components/RepresentantesAL/RepresentantesAL"
import RepresentantesBrasil from "../components/RepresentantesBrasil/RepresentantesBrasil"

function Contato({ Component, pageProps }) {

    return (
        <>
            <Header />
            <FaleConosco />
            <Empresas />
            <NossaEquipe />
            <RepresentantesBrasil />
            <RepresentantesAL />
            <MapaKdb />
            <Bootom />
        </>
    )
}

export default Contato

