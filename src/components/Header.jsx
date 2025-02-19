function Header (){
    return(
        <header>
            <div className="container">
                <figure>
                    <img src="../src/assets/imgs/dc-logo.png" alt="logo"></img>
                </figure>
                <nav>
                    <ul>

                    <li><a href="#">CHARACTERS</a></li>
                    <li className="active"><a className="active" href="#">COMICS</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">COLLECTIBLES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">FANS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">SHOP</a></li>

                    </ul>
                   
                </nav>

            </div>
        </header>

    )

}

export default Header;