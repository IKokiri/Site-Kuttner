import Header from '../components/Header/Header'
import Bootom from '../components/Bootom/Bootom';
import Timeline from '../components/Timeline/Timeline'

function Historia({ Component, pageProps }) {

    return (
        <>
            <Header />

            <section className="page-title" style={{ backgroundImage: "url(imgs/historia/kuttnerdobrasilhistoria.webp)" }}>
                <div className="auto-container">
                    <h1>História</h1>
                    <ul className="page-breadcrumb">
                        <li></li>
                    </ul>
                </div>
            </section>
            <Timeline />
            <Bootom />
        </>
    )
}

export default Historia

