import digital from "../assets/imgs/buy-comics-digital-comics.png"
import merch from "../assets/imgs/buy-comics-merchandise.png"
import shop from "../assets/imgs/buy-comics-shop-locator.png"
import subscript from "../assets/imgs/buy-comics-subscriptions.png"
import visa from "../assets/imgs/buy-dc-power-visa.svg"


function Main (){
    return(
        <main>
            <div className="container_main_top">
                <h3 className="title_main">
                    --	&gt; Content goes here! &lt;--
                </h3>
            </div>

            <div className="container_main_bottom">
                <div className="container_icon_span">
                    <figure>
                        <img className="img_main" src={digital} alt="foto digital"></img> 
                    </figure>
                    <span className="span_main">DIGITAL COMICS</span>

                </div>
                <div className="container_icon_span">
                    <figure>
                        <img className="img_main" src={merch} alt="foto merch"></img> 
                    </figure>
                    <span className="span_main">DC MERCHANDISE</span>

                </div>

                <div className="container_icon_span">
                    <figure>
                        <img className="img_main" src={subscript} alt="foto digital"></img> 
                    </figure>
                    <span className="span_main">SUBSCRIPTION</span>

                </div>

                <div className="container_icon_span">
                    <figure>
                        <img className="img_main" src={shop} alt="foto digital"></img> 
                    </figure>
                    <span className="span_main">COMIC SHOP LOCATOR</span>

                </div>

                <div className="container_icon_span">
                    <figure>
                        <img className="img_main" src={visa} alt="foto digital"></img> 
                    </figure>
                    <span className="span_main"> DC POWER VISA </span>

                </div>


            </div>
        </main>

    )

}

export default Main;