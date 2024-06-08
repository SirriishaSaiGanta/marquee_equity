import React,{useState} from "react";

function Card(props){
    const bookName = props.book.author_name;
    const editionCount = props.book.edition_count;
    // const bookName ="hi";
    // const editionCount =1;
    const [showTooltip, setShowTooltip] = useState(false);

    const addBooksTOShelf = (e)=>{
        const existingBooks = JSON.parse(localStorage.getItem('bookShelf')) || [];
        const newBook = {
            author_name: bookName,
            editionCount: editionCount
        };
        const updatedBooks = [...existingBooks, newBook];
        localStorage.setItem('bookShelf', JSON.stringify(updatedBooks));

        setShowTooltip(true); // Show tooltip when the button is clicked
        // Hide tooltip after a certain time (e.g., 2 seconds)
        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    }

    return(
        <div className="card">
            <div className="card-content">
                <div className="book-name">
                    <p ><b>Book Title: </b></p>
                    <p>{bookName}</p>
                </div>
                    <p><b>Edition Count:</b> {editionCount}</p>
            </div>
            <div className="button-container">
                <button className="card-button" onClick={addBooksTOShelf} >Add to BookShelf</button>
            </div>
            {showTooltip && <div className="tooltip">Book added to shelf!</div>}
            {/* {showTooltip ? <div className="tooltip">Book added to shelf!</div>: null} */}
        </div>

    )
}
export default Card