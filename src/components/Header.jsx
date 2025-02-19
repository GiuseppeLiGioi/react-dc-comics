function Header ({links}){

    

    return(
        <header>
            <div className="container">
                <figure>
                    <img src="../src/assets/imgs/dc-logo.png" alt="logo"></img>
                </figure>
                <nav>
                    <ul>

                    {links.map((link, index) => (
                            <li key={link.id}>
                                {/* Usando link.url per il link e un testo generico come l'URL */}
                                <a href={link.url}>{link.url.slice(1).toUpperCase() || 'HOME'}</a>
                            </li>
                        ))}

                    </ul>
                   
                </nav>

            </div>
        </header>

    )

}

export default Header;