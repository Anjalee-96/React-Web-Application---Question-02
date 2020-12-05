import React from 'react'
import { Link } from 'react-router-dom'
const Book = (props) => {
    const { book } = props
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
            <div className="card-body">
               <h5>{book.title}</h5>
               <p className="card-text">
               <strong><i className="fas fa-book"></i> Book</strong>: {book.description}
               <br/>
               <strong><i className="fas fa-user-edit"></i> Author</strong>: {book.author}
               <br/>
               <strong><i className="fas fa-user-edit"></i> Publisher</strong>: {book.publisher}
               <br/>
               <strong><i className="fas fa-user-edit"></i> Contribute</strong>: {book.contributor}
               

               </p>
               <Link to={`results/${book.title}`} className="btn btn-dark btn-block">
                   <i className="fas fa-chevron-right"></i>View Book Details
               </Link>
               
               
               <a class="btn btn-dark btn-block" href="https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155">
               <i className="fas fa-chevron-right"></i>Buy Now with Amazon
               </a>

            </div>
            </div> 
        </div>
    )
}
export default Book
