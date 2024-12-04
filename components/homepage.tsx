"use client";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { objectImage, shuffleArray } from "@/utils/pictures";
import { ratingIt, rating, genre } from "@/utils/storage";
import Link from "next/link";
import Image from "next/image";
import library from '@/utils/library.json';

interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number | string;
  genre: string[]; // Assuming genres is an array of strings
  cover_image: string;
}

export default function HomePage() {
  const books = library;
  const ratings = rating;

  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchCategory, setSearchCategory] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    if (books.length > 0) {
      setFilteredBooks(books);
      setShuffledImages(shuffleArray(Object.values(objectImage)));
    }
  }, [books]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shuffledImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSearch = () => {
    const query = searchInput.trim().toLowerCase();
    if (query) {
      setFilteredBooks(
        books.filter((book) => {
          if (searchCategory === "author") return book.author.toLowerCase().includes(query);
          if (searchCategory === "title") return book.title.toLowerCase().includes(query);
          if (searchCategory === "publication_year") return book.publication_year.toString().includes(query);
          return false;
        })
      );
    } else {
      setFilteredBooks(books);
    }
    setSearchInput("");
  };

  const handleReset = () => {
    setSearchCategory(""); // Reset the search category
    setSearchInput("");    // Clear the search input
    setFilteredBooks(books);
  };

  const handleStorage = (book: Book) => {
    localStorage.setItem("bookData", JSON.stringify(book));
    localStorage.setItem("rating", JSON.stringify(ratingIt[book.id]));
  };

  return (
    <>
      <main style={{ backgroundImage: `url(${shuffledImages[currentIndex]})` }}>
        <div className="notes">
          <h4>ARE YOU SEARCHING FOR A BOOK?</h4>
          <h1>BIGGEST LIBRARY</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis numquam nobis iste.</p>
        </div>
      </main>
      <div className="divArrows">
        <IoIosArrowBack onClick={handlePrevious} className="iconsArrow" />
        <IoIosArrowForward onClick={handleNext} className="iconsArrow" />
      </div>

      <section className="section2">
        {["TITLE", "AUTHOR", "PUBLICATION_YEAR"].map((category) => (
          <button
            key={category}
            className="btnSection"
            onClick={() => {
              setSearchCategory(category.toLowerCase());
              setSearchInput(""); // Clear the search input when changing category
            }}
          >
            {category}
          </button>
        ))}
        <button className="btnSection" onClick={handleReset}>RESTART</button>
      </section>

      <section className="secondPart">
        {searchCategory && (
          <>
            <input
              type="text"
              value={searchInput}
              placeholder={`Search by ${searchCategory}`}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}>SEARCH</button>
          </>
        )}
      </section>

      <section className="thirdPart">
        <div className="imgContainer">
          {filteredBooks.length === 0 ? (
            <p>No books found matching your search criteria.</p>
          ) : (
            filteredBooks.map((book) => (
              <div key={book.id} className="library-book">
                <Link
                  href="/sign-up"
                  className="linkStyle"
                  onClick={() => handleStorage(book)}
                >
                  <div className="imgP">
                    <Image src={book.cover_image} alt={book.title} width={1000} height={1000} loading="lazy" className="image"/>
                  </div>
                  <div className="box">
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    <div>{book.publication_year}</div>
                    <div>
  {book.genre.map((g, index) => (
    <span key={index} className="genreItem">{g}</span>
  ))}
</div>

                    <div className="rating">
                      <div className="rating1">{ratingIt[book.id]}</div>
                      <div>{ratings[book.id]}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
