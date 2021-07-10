import Header from '../components/Header/Header'
import Bootom from '../components/Bootom/Bootom';
import Timeline from '../components/Timeline/Timeline'
import BannerHistoria from '../components/BannerHistoria/BannerHistoria';

function Historia({ Component, pageProps }) {

    return (
        <>
            <Header />
            <BannerHistoria />
            <Timeline />
            <Bootom />
        </>
    )
}

export default Historia

