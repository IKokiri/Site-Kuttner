import { historia } from '../../pages/api/historia'
function Timeline({ Component, pageProps }) {

    return (
        <><style jsx>{`        
        .timeline {
            position: relative;
            padding:4px 0 0 0;
            margin-top:22px;
            list-style: none;
        }
        
        .timeline>li:nth-child(even) {
            position: relative;
            margin-bottom: 50px;
            height: 180px;
            right:-100px;
        }
        
        .timeline>li:nth-child(odd) {
            position: relative;
            margin-bottom: 50px;
            height: 180px;
            left:-100px;
        }
        
        .timeline>li:before,
        .timeline>li:after {
            content: " ";
            display: table;
        }
        
        .timeline>li:after {
            clear: both;
            min-height: 170px;
        }
        
        .timeline > li .timeline-panel {
          position: relative;
          float: left;
          width: 41%;
          padding: 0 20px 20px 30px;
          text-align: right;
        }
        
        .timeline>li .timeline-panel:before {
            right: auto;
            left: -15px;
            border-right-width: 15px;
            border-left-width: 0;
        }
        
        .timeline>li .timeline-panel:after {
            right: auto;
            left: -14px;
            border-right-width: 14px;
            border-left-width: 0;
        }
        
        .timeline>li .timeline-image {
            z-index: 100;
            position: absolute;
            left: 50%;
            border: 7px solid #3b5998;
            border-radius: 100%;
            background-color: #3b5998;
            box-shadow: 0 0 5px #4582ec;
            width: 200px;
            height: 200px;
            margin-left: -100px;
        }
        
        .timeline>li .timeline-image h4 {
            margin-top: 12px;
            font-size: 10px;
            line-height: 14px;
        }
        
        .timeline>li.timeline-inverted>.timeline-panel {
            float: right;
            padding: 0 30px 20px 20px;
            text-align: left;
        }
        
        .timeline>li.timeline-inverted>.timeline-panel:before {
            right: auto;
            left: -15px;
            border-right-width: 15px;
            border-left-width: 0;
        }
        
        .timeline>li.timeline-inverted>.timeline-panel:after {
            right: auto;
            left: -14px;
            border-right-width: 14px;
            border-left-width: 0;
        }
        
        .timeline>li:last-child {
            margin-bottom: 0;
        }
        
        .timeline .timeline-heading h4 {
          margin-top:22px;
            margin-bottom: 4px;
            padding:0;
            color: #b3b3b3;
        }
        
        .timeline .timeline-heading h4.subheading {
          margin:0;
          padding:0;
            text-transform: none;
            font-size:18px;
            color:#333333;
        }
        
        .timeline .timeline-body>p,
        .timeline .timeline-body>ul {
            margin-bottom: 0;
            color:#808080;
        }
        /*Style for even div.line*/
        .timeline>li:nth-child(odd) .line:before {
            content: "";
            position: absolute;
            top: 60px;
            bottom: 0;
            left: 690px;
            width: 4px;
            height:340px;
            background-color: #3b5998;
            -ms-transform: rotate(-44deg); /* IE 9 */
            -webkit-transform: rotate(-44deg); /* Safari */
            transform: rotate(-44deg);
            box-shadow: 0 0 5px #4582ec;
        }
        /*Style for odd div.line*/
        .timeline>li:nth-child(even) .line:before  {
            content: "";
            position: absolute;
            top: 60px;
            bottom: 0;
            left: 450px;
            width: 4px;
            height:340px;
            background-color: #3b5998;
            -ms-transform: rotate(44deg); /* IE 9 */
            -webkit-transform: rotate(44deg); /* Safari */
            transform: rotate(44deg);
            box-shadow: 0 0 5px #4582ec;
        }
        /* Medium Devices, .visible-md-* */
        @media (min-width: 992px) and (max-width: 1199px) {
          .timeline > li:nth-child(even) {
            margin-bottom: 0px;
            min-height: 0px;
            right: 0px;
          }
          .timeline > li:nth-child(odd) {
            margin-bottom: 0px;
            min-height: 0px;
            left: 0px;
          }
          .timeline>li:nth-child(even) .timeline-image {
            left: 0;
            margin-left: 0px;
          }
          .timeline>li:nth-child(odd) .timeline-image {
            left: 690px;
            margin-left: 0px;
          }
          .timeline > li:nth-child(even) .timeline-panel {
            width: 76%;
            padding: 0 0 20px 0px;
            text-align: left;
          }
          .timeline > li:nth-child(odd) .timeline-panel {
            width: 70%;
            padding: 0 0 20px 0px;
            text-align: right;
          }
          .timeline > li .line {
            display: none;
          }
        }
        /* Small Devices, Tablets */
        @media (min-width: 768px) and (max-width: 991px) {
          .timeline > li:nth-child(even) {
            margin-bottom: 0px;
            min-height: 0px;
            right: 0px;
          }
          .timeline > li:nth-child(odd) {
            margin-bottom: 0px;
            min-height: 0px;
            left: 0px;
          }
          .timeline>li:nth-child(even) .timeline-image {
            left: 0;
            margin-left: 0px;
          }
          .timeline>li:nth-child(odd) .timeline-image {
            left: 520px;
            margin-left: 0px;
          }
          .timeline > li:nth-child(even) .timeline-panel {
            width: 70%;
            padding: 0 0 20px 0px;
            text-align: left;
          }
          .timeline > li:nth-child(odd) .timeline-panel {
            width: 70%;
            padding: 0 0 20px 0px;
            text-align: right;
          }
          .timeline > li .line {
            display: none;
          }
        }
        /* Custom, iPhone Retina */
        @media only screen and (max-width: 767px) {
          .timeline > li:nth-child(even) {
            margin-bottom: 0px;
            min-height: 0px;
            right: 0px;
          }
          .timeline > li:nth-child(odd) {
            margin-bottom: 0px;
            min-height: 0px;
            left: 0px;
          }
          .timeline>li .timeline-image {
            position: static;
            width: 150px;
            height: 150px;
            margin-bottom:0px;
          }
          .timeline>li:nth-child(even) .timeline-image {
            left: 0;
            margin-left: 0;
          }
          .timeline>li:nth-child(odd) .timeline-image {
            float:right;
            left: 0px;
            margin-left:0;
          }
          .timeline > li:nth-child(even) .timeline-panel {
            width: 100%;
            padding: 0 0 20px 14px;
          }
          .timeline > li:nth-child(odd) .timeline-panel {
            width: 100%;
            padding: 0 14px 20px 0px;
          }
          .timeline > li .line {
            display: none;
          }
        }
        
      `}</style>
            <div className="what-we-do container">
                <div className="row">
                    <div className="col-lg-12">

                        <ul className="timeline">

                            {
                                historia.map((item) => {
                                    return <li>
                                        <div className="timeline-image">
                                            <img className="img-circle img-responsive" src={item.imagem} alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>{item.titulo}</h4>
                                                <h4 className="subheading">{item.ano}</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">
                                                    {item.texto}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="line"></div>
                                    </li>
                                })
                            }


                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Timeline

