import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Company from '../components/Company/Company'
import Bootom from '../components/Bootom/Bootom'
import kkgCompany from "../pages/api/kkgCompany"
import kdbCompany from "../pages/api/kdbCompany"

export default function Home() {
  let company = [kdbCompany, kkgCompany]
  return (
    <>
     <Header/>
     <Banner/>
     <Company companies={company}/>
     <Bootom />
    </>
  )
}
