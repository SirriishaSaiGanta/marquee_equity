import React,{ useState } from "react"
import SearchBooks from "./SearchBooks";
import { Link } from 'react-router-dom'



function Header(){
     // State variables for input value and query
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');

    // Function to handle input change
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
        setQuery(e.target.value)
       
    }
    
    return(
        <>
        <header className="headerr">
            <div>
            <h3>Search by Book name: </h3>
            <input type="text" placeholder="Search the book..." onChange={handleInputChange}/>
            </div>
            
            <div>
                <Link to="/MyBookShelf" className="card-button add-shelf-button">My BookShelf</Link>
            </div>
        </header>
        {/* Render SearchBooks component with query value */}
        <SearchBooks queryValue={query}/>
        </>
    )
}
export default Header