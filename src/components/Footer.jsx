import facebook from "../assets/imgs/footer-facebook.png"
import periscope from "../assets/imgs/footer-periscope.png"
import pinterest from "../assets/imgs/footer-pinterest.png"
import twitter from "../assets/imgs/footer-twitter.png"
import youtube from "../assets/imgs/footer-youtube.png"


function Footer (){
    return(
        <footer>
            <div className="container_top_footer">
                <div className="container_top_footer_left">
                <section className="container_footer_ul_left">
                    <ul>
                        <li className="big_li">DC COMICS</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>

                    </ul>
                    <ul>
                    <li className="big_li">SHOP</li>
                        <li>esempio</li>
                        <li>esempio</li>

                    </ul>   
                </section>
                <section>
                <ul>
                        <li className="big_li">DC</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>

                    </ul>
                    
                </section>
                <section>
                <ul>
                        <li className="big_li">SITES</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>
                        <li>esempio</li>

                    </ul>
                    
                </section>

                </div>
                

            </div>

            <div className="container_bottom_footer">

                
                <div className="bottom_footer_left">
                    <button id="btn_footer">SING-UP NOW!</button>

                </div>

                <div className="bottom_footer_right">

                        <h3 id="text_bottom_footer_right">FOLLOW US</h3>
                        <figure>
                            <img src={facebook} alt="foto social" />
                        </figure>
                        <figure>
                            <img src={periscope} alt="foto social" />
                        </figure>
                        <figure>
                            <img src={pinterest} alt="foto social" />
                        </figure>
                        <figure>
                            <img src={twitter} alt="foto social" />
                        </figure>
                        <figure>
                            <img src={youtube} alt="foto social" />
                        </figure>

                </div>


            </div>
        </footer>

    )

}

export default Footer;