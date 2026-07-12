import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div className="menu">
            <h1>Net Mirror</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/series">Series</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <span><Link to="/login">Login</Link></span>
                </ul>
            </nav>
        </div>
    )
}

export default Menu