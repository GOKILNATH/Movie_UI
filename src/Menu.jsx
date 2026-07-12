function Menu(){
    return(
        <div className="menu">
            <h1>Net Mirror</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/series">Series</a></li>
                    <li><a href="/about">About</a></li>
                    <span ><a href="/login">Login</a></span>
                </ul>
            </nav>
        </div>
    )
}

export default Menu