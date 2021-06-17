import {menu} from './menu'
import Link from 'next/link'

function Nav({ Component, pageProps }) {

    return (
        <><style jsx>{`
        .sublink{
            color:#444 !important
        }
            
        .header-lower{
            background: #0894d5 !important;
        }
        
        .main-menu .navigation>li>a:before {
        background-color: #FFF;
        }
        
        .menutopo{
            color:#FFF
        }
        
        
        .main-menu .navigation>li:hover>a, .main-menu .navigation>li.current>a, .main-menu .navigation>li.current-menu-item>a {
        
        color: #FFF;
        }
      `}</style>
            <div className="header-lower" >
                <div className="auto-container">
                    <div className="nav-outer clearfix">
                        <nav className="main-menu">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse clearfix">

                                <ul className="navigation clearfix">
                                    {
                                        menu.map((link) => {
                                            return <li key={link.titulo} className={link.classe}><Link href={link.local}>{link.titulo}</Link>
                                                <ul>
                                                    {
                                                        link.submenu != undefined ? (link.submenu.map((sub) => {
                                                            return <li key={sub.titulo} className="sublink"><Link href={sub.local}>{sub.titulo}</Link></li>
                                                        })) : null
                                                    }
                                                </ul>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="sticky-header">
                <div className="auto-container clearfix">
                    <div className="logo pull-left">
                        <a href="index.php" className="img-responsive"><img src="imgs/logo/logo.png" alt="" title="" /></a>
                    </div>
                    <div className="right-col pull-right">
                        <nav className="main-menu">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="navbar-collapse collapse clearfix">
                                <ul className="navigation clearfix">
                                    {
                                        menu.map((link) => {
                                            return <li key={link.titulo} className={link.classe}><Link href={link.local}>{link.titulo}</Link>
                                                <ul>
                                                    {
                                                        link.submenu != undefined ? (link.submenu.map((sub) => {
                                                            return <li key={sub.titulo} className="sublink"><Link href={sub.local}>{sub.titulo}</Link></li>
                                                        })) : null
                                                    }
                                                </ul>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav

