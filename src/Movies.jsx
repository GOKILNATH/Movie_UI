import Movies_Comp from "./Movies_Comp"
import Recent_Movies from "./Recent_Movies"
import SearchBar from "./SearchBar"
import Menu from "./Menu"
import Footer from "./footer"

function Movies(){
    

    
    return(
        <>
        <Menu />
        <SearchBar />
        <Movies_Comp />
        <Recent_Movies />
        <Footer />
        </>
    )
}

export default Movies