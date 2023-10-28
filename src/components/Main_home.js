import React from 'react'

import { Link, useLocation } from "react-router-dom";

function Main_home() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <title>Welcome to Our Bookstore</title>
  <header>
  
  </header>
  <section class="wel_msg">
   
   <h1 class="center">Welcome to Our Bookstor</h1>

  </section>
  <section className="featured-book">
    <div>
    <img src="https://www.creatopy.com/blog/wp-content/uploads/2020/08/The-Great-Gatsby-Book-Cover-391x600.jpg" alt="Book Cover" />

    </div>

    <div>
    <h2>Title: "Book Title"</h2>
    <p>Author: Author Name</p>
    <p>Description: A brief description of the book.</p>
    <Link to="/books" className="view-details">
      lets explore all books
    </Link>
    </div>

   
  </section>
  {/* Other sections like "Browse by Genre," "New Arrivals," and "Customer Reviews" can be added here. */}
</>
  )
}

export default Main_home