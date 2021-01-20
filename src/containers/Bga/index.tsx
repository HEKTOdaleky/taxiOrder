import React from 'react';
import './index.scss'
import './custom.scss'

const Bga = () => (
    <div className="newletter-div">
        <div className="div-block-225">
            <img
                src="https://uploads-ssl.webflow.com/58b88fd6a18854d96391b083/5e83ff3b6948e1481c205fe7_BGA-New-Logotype-White.png"
                width="500" alt=" Black Ghost Audio Logotype" sizes="(max-width: 479px) 90vw, 350px"
                srcSet="https://uploads-ssl.webflow.com/58b88fd6a18854d96391b083/5e83ff3b6948e1481c205fe7_BGA-New-Logotype-White-p-500.png 500w, https://uploads-ssl.webflow.com/58b88fd6a18854d96391b083/5e83ff3b6948e1481c205fe7_BGA-New-Logotype-White.png 1000w"
                className="image-29"/>
        </div>
        <div className="newsletter-content mod bandpay">
            <div className="content-wrapper">
                <img
                    src="https://uploads-ssl.webflow.com/58b88fd6a18854d96391b083/600651a8f39fb923cb586b95_Bandpay-logotype-White.png"
                    loading="lazy" width="500"
                    srcSet="https://uploads-ssl.webflow.com/58b88fd6a18854d96391b083/600651a8f39fb923cb586b95_Bandpay-logotype-White-p-500.png 500w, https://uploads-ssl.webflow.com/58b88fd6a18854d96391b083/600651a8f39fb923cb586b95_Bandpay-logotype-White.png 915w"
                    sizes="(max-width: 479px) 90vw, 350px" alt="" className="image-91"/>
                <div className="text-block-191">BandPay is the perfect mobile payment app for music industry
                    professionals who perform, record, mix, and master music. With BandPay, you gain access to:
                </div>
                <ul role="list" className="list-3">
                    <li>
                        <div>Guaranteed client payments</div>
                    </li>
                    <li>
                        <div>Customizable payment milestones</div>
                    </li>
                    <li>
                        <div>A FREE project submission web page</div>
                    </li>
                    <li>
                        <div>Dispute resolution</div>
                    </li>
                </ul>
                <div className="order-page__cont">
                    <div className='order-page__widget' id='bandpay-widget'/>
                </div>
            </div>
        </div>
    </div>
);

export default Bga;
