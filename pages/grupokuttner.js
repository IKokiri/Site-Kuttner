import Kuettner from '../components/Kuettner/Kuettner'
import Header from '../components/Header/Header'
import Bootom from '../components/Bootom/Bootom'
import kkgCompany from '../pages/api/kkgCompany'
import Company from '../components/Company/Company'
function GrupoKuttner({ Component, pageProps }) {

    return (
        <>
            <Header/>
            <Company companies={[kkgCompany]}/>
            <Kuettner/>
            <Bootom/>
        </>
    )
}

export default GrupoKuttner

