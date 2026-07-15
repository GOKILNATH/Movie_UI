import Menu from "./Menu"
import SearchBar from "./SearchBar"
import Movies_Comp from "./Movies_Comp"
import Recent_Movies from "./Recent_Movies"
import Footer from "./Footer"

function Only_movies() {
    return (
        <>
        <Menu />
        <SearchBar />
        <Movies_Comp />
        <Recent_Movies />
        <Footer />
        </>
    )
}

export default Only_movies