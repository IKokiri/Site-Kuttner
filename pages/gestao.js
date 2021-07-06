import Header from "../components/Header/Header"
import Bootom from "../components/Bootom/Bootom"
import Equipe from '../components/Equipe/Equipe'
import Organograma from '../components/Organograma/Organograma'

function Gestao({ Component, pageProps }) {

    return (
        <>
            <Header/>
            <Equipe/>
            <Organograma/>
            <Bootom/>
        </>
    )
}

export default Gestao

