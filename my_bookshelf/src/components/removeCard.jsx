import React,{useState} from "react";

function RemoveCard(props){
    const bookName = props.book.author_name;
    const editionCount = props.book.edition_count;
    

    return(
        <div className="card">
            <div className="book-name">
            <p ><b>Book Title: </b></p>
            <p>{bookName}</p>
            </div>
            <p><b>Edition Count:</b> {editionCount}</p>
            
        </div>

    )
}
export default RemoveCard