// const bookTitle = document.getElementById("book-title");
// const bookAuthor = document.getElementById("book-author");
// const bookReadingStatus = document.getElementById("book-reading");
// const searchInput = document.querySelector(".search-container");
// const searchCheckBox = document.querySelector("#search-box");
// const formError = document.getElementById("form_error");
// const searchError = document.getElementById("search_error");
// const bookFilter = document.getElementById("book-filter");
// const resetBtn = document.getElementById("reset-btn");

// class Book {
//   constructor(title, author, readingStatus) {
//     this.title = title;
//     this.author = author;
//     this.readingStatus = readingStatus;
//   }

//   displayInfo() {
//     return `${this.title}, ${this.author}, ${
//       this.readingStatus ? "Done" : "Not done"
//     }`;
//   }

//   isSimilar(book) {
//     return this.title === book.title && this.author === book.author;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(book) {
//     if (book.title !== "" && book.author !== "") {
//       this.books.push(book);
//       formError.style.display = "none";
//     } else {
//       formError.innerText = "please enter title and author";
//       formError.style.display = "block";
//     }
//   }

//   contains(bookTitle) {
//     return this.books.some((book) => book.title === bookTitle);
//   }

//   deleteBook(title) {
//     const index = this.books.findIndex((book) => book.title === title);
//     if (index !== -1) {
//       this.books.splice(index, 1);
//       return true;
//     } else {
//       alert("this book don't exist");
//       return false;
//     }
//   }

//   displayAllBooks() {
//     return this.books;
//   }

//   toggleReadingStatus(book) {
//     book.readingStatus = !book.readingStatus;
//   }

//   filterByReadingStatus(status) {
//     if (status === null) {
//       return this.books;
//     }
//     return this.books.filter((b) => b.readingStatus === status);
//   }

//   countBooks() {
//     return this.books.length;
//   }

//   clearLibrary() {
//     this.books = [];
//   }

//   findBookByTitle(title) {
//     return this.books.find((b) => b.title === title);
//   }
//   findBooksByTitle(title) {
//     return this.books.filter((b) => b.title === title);
//   }

//   findBooks(str) {
//     return this.books.filter((book) =>
//       book.title.toLowerCase().includes(str.toLowerCase())
//     );
//   }

//   getAllAuthors() {
//     const uniqueAuthors = [...new Set(this.books.map((book) => book.author))];
//     return uniqueAuthors;
//   }

//   findBooksByAuthor(author) {
//     return this.books.filter((book) => book.author === author);
//   }
// }

// let books = new Library();

// document.getElementById("add-btn").addEventListener("click", function () {
//   let newBook = new Book(
//     bookTitle.value,
//     bookAuthor.value,
//     bookReadingStatus.checked
//   );

//   if (books.contains(newBook.title)) {
//     formError.innerText = "this book already exist";
//     formError.style.display = "block";
//   } else {
//     books.addBook(newBook);
//     bookTitle.value = "";
//     bookAuthor.value = "";
//     bookReadingStatus.checked = false;
//     displayAllBooks();
//   }
//   resetAll();
// });

// let currentBooks = books.displayAllBooks();

// function updateBooksNumber(currentBooks) {
//   const bookNumber = document.querySelector("#book-number");
//   bookNumber.innerText = currentBooks.length;
// }
// function displayAllBooks() {
//   const tableBody = document.querySelector("#booksTable tbody");
//   tableBody.innerHTML = "";

//   currentBooks.forEach((book) => {
//     const row = tableBody.insertRow();

//     const titleCell = row.insertCell();
//     titleCell.innerText = book.title;

//     const authorCell = row.insertCell();
//     authorCell.innerText = book.author;

//     const statusCell = row.insertCell();
//     statusCell.innerText = book.readingStatus ? "Done" : "Not done";

//     const actionCell = row.insertCell();

//     const toggleBtn = document.createElement("button");
//     toggleBtn.type = "button";
//     toggleBtn.id = `book-${book.title}`;
//     toggleBtn.name = book.title;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
//     toggleBtn.innerHTML = book.readingStatus
//       ? `<i class="fa-solid fa-circle-check"></i>`
//       : `<i class="fa-regular fa-circle-check"></i>`;

//     deleteBtn.addEventListener("click", () => {
//       books.deleteBook(book.title);
//       currentBooks = books.displayAllBooks();
//       displayAllBooks();
//     });

//     toggleBtn.addEventListener("click", () => {
//       books.toggleReadingStatus(book);
//       displayAllBooks();
//     });

//     actionCell.appendChild(toggleBtn);
//     actionCell.appendChild(deleteBtn);
//   });
//   updateBooksNumber(currentBooks);
// }

// function handleSearch() {
//   searchError.style.display = "none";

//   if (searchCheckBox.checked) {
//     currentBooks = books.findBooksByTitle(searchInput.value);
//   } else {
//     currentBooks = books.findBooks(searchInput.value);
//   }

//   if (currentBooks.length === 0) {
//     searchError.innerText = "There are no matching results.";
//     searchError.style.display = "block";
//   } else {
//     searchError.style.display = "none";
//   }

//   displayAllBooks();
// }

// searchInput.addEventListener("input", () => {
//   handleSearch();
//   if (searchInput.value === "") {
//     searchCheckBox.checked = false;
//     resetAll();
//   }
// });

// searchCheckBox.addEventListener("change", () => {
//   handleSearch();
// });

// bookFilter.addEventListener("change", () => {
//   const selectedValue = bookFilter.value;
//   let filterValue;
//   if (selectedValue === "all") {
//     filterValue = null;
//   } else if (selectedValue === "Read") {
//     filterValue = true;
//   } else {
//     filterValue = false;
//   }
//   const filteredBooks = books.filterByReadingStatus(filterValue);
//   currentBooks = filteredBooks;
//   displayAllBooks();
// });

// function resetAll() {
//   currentBooks = books.displayAllBooks();
//   searchError.style.display = "none";
//   displayAllBooks();
//   searchCheckBox.checked = false;
//   bookFilter.selectedIndex = 0;
//   searchInput.value = "";
//   const tableBody = document.querySelector("#booksTable");
//   tableBody.style.display = "block";
// }
// resetBtn.addEventListener("click", resetAll);

// let book1 = new Book("A Song of Ice and Fire", "George R.R. Martin", false);
// let book2 = new Book("A", "A", false);
// let book3 = new Book("AA", "AA", false);
// let book4 = new Book("AAA", "AAA", false);
// books.addBook(book1);
// books.addBook(book2);
// books.addBook(book3);
// books.addBook(book4);
// displayAllBooks();

// const bookTitle = document.getElementById("book-title");
// const bookAuthor = document.getElementById("book-author");
// const bookReadingStatus = document.getElementById("book-reading");
// const searchInput = document.querySelector(".search-container");
// const searchCheckBox = document.querySelector("#search-box");
// const formError = document.getElementById("form_error");
// const searchError = document.getElementById("search_error");
// const bookFilter = document.getElementById("book-filter");
// const resetBtn = document.getElementById("reset-btn");

// class Book {
//   constructor(title, author, readingStatus) {
//     this.title = title;
//     this.author = author;
//     this.readingStatus = readingStatus;
//   }

//   displayInfo() {
//     return `${this.title}, ${this.author}, ${
//       this.readingStatus ? "Done" : "Not done"
//     }`;
//   }

//   isSimilar(book) {
//     return this.title === book.title && this.author === book.author;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(book) {
//     if (book.title !== "" && book.author !== "") {
//       this.books.push(book);
//       formError.style.display = "none";
//     } else {
//       formError.innerText = "please enter title and author";
//       formError.style.display = "block";
//     }
//   }

//   contains(bookTitle) {
//     return this.books.some((book) => book.title === bookTitle);
//   }

//   deleteBook(title) {
//     const index = this.books.findIndex((book) => book.title === title);
//     if (index !== -1) {
//       this.books.splice(index, 1);
//       return true;
//     } else {
//       return false;
//     }
//   }

//   displayAllBooks() {
//     return this.books;
//   }

//   toggleReadingStatus(book) {
//     book.readingStatus = !book.readingStatus;
//   }

//   filterByReadingStatus(status) {
//     if (status === null) {
//       return this.books;
//     }
//     return this.books.filter((b) => b.readingStatus === status);
//   }

//   countBooks() {
//     return this.books.length;
//   }

//   clearLibrary() {
//     this.books = [];
//   }

//   findBookByTitle(title) {
//     return this.books.find((b) => b.title === title);
//   }
//   findBooksByTitle(title) {
//     return this.books.filter((b) => b.title === title);
//   }

//   findBooks(str) {
//     return this.books.filter((book) =>
//       book.title.toLowerCase().includes(str.toLowerCase())
//     );
//   }

//   getAllAuthors() {
//     const uniqueAuthors = [...new Set(this.books.map((book) => book.author))];
//     return uniqueAuthors;
//   }

//   findBooksByAuthor(author) {
//     return this.books.filter((book) => book.author === author);
//   }
// }

// let books = new Library();

// document.getElementById("add-btn").addEventListener("click", function () {
//   let newBook = new Book(
//     bookTitle.value,
//     bookAuthor.value,
//     bookReadingStatus.checked
//   );

//   if (books.contains(newBook.title)) {
//     formError.innerText = "this book already exist";
//     formError.style.display = "block";
//   } else {
//     books.addBook(newBook);
//     bookTitle.value = "";
//     bookAuthor.value = "";
//     bookReadingStatus.checked = false;
//     displayAllBooks();
//   }
//   resetAll();
// });

// let currentBooks = books.displayAllBooks();

// function updateBooksNumber(currentBooks) {
//   const bookNumber = document.querySelector("#book-number");
//   bookNumber.innerText = currentBooks.length;
// }

// function fetchData() {
//   fetch("books.json")
//     .then((response) => response.json())
//     .then((data) => {
//       let bookData = data.books;
//       bookData.forEach((book) => {
//         let newBook = new Book(book.title, book.author, book.readingStatus);
//         currentBooks.push(newBook);
//       });
//       currentBooks = books.displayAllBooks();
//       displayAllBooks();
//     })
//     .catch((error) => console.error("Error loading the JSON:", error));
// }
// fetchData();

// function displayAllBooks() {
//   const tableBody = document.querySelector("#booksTable tbody");
//   tableBody.innerHTML = "";

//   currentBooks.forEach((book) => {
//     const row = tableBody.insertRow();

//     const titleCell = row.insertCell();
//     titleCell.innerText = book.title;

//     const authorCell = row.insertCell();
//     authorCell.innerText = book.author;

//     const statusCell = row.insertCell();
//     statusCell.innerText = book.readingStatus ? "Done" : "Not done";

//     const actionCell = row.insertCell();

//     const toggleBtn = document.createElement("button");
//     toggleBtn.type = "button";
//     toggleBtn.id = `book-${book.title}`;
//     toggleBtn.name = book.title;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
//     toggleBtn.innerHTML = book.readingStatus
//       ? `<i class="fa-solid fa-circle-check"></i>`
//       : `<i class="fa-regular fa-circle-check"></i>`;

//     deleteBtn.addEventListener("click", () => {
//       const confirmation = document.querySelector(".confirmation");
//       const yesBtn = document.querySelector(".yes-button");
//       const noBtn = document.querySelector(".no-button");
//       const bookName = document.querySelector(".book-name");
//       confirmation.style.display = "block";
//       bookName.innerText = book.title;
//       yesBtn.addEventListener("click", () => {
//         books.deleteBook(book.title);
//         currentBooks = books.displayAllBooks();
//         confirmation.style.display = "none";
//         displayAllBooks();
//       });
//       noBtn.addEventListener("click", () => {
//         confirmation.style.display = "none";
//       });
//     });

//     toggleBtn.addEventListener("click", () => {
//       books.toggleReadingStatus(book);
//       displayAllBooks();
//     });

//     actionCell.appendChild(toggleBtn);
//     actionCell.appendChild(deleteBtn);
//   });
//   updateBooksNumber(currentBooks);
// }

// function handleSearch() {
//   searchError.style.display = "none";

//   if (searchCheckBox.checked) {
//     currentBooks = books.findBooksByTitle(searchInput.value);
//   } else {
//     currentBooks = books.findBooks(searchInput.value);
//   }

//   if (currentBooks.length === 0) {
//     searchError.innerText = "There are no matching results.";
//     searchError.style.display = "block";
//   } else {
//     searchError.style.display = "none";
//   }

//   displayAllBooks();
//   console.log(currentBooks);
// }

// searchInput.addEventListener("input", () => {
//   handleSearch();
//   if (searchInput.value.toLowerCase() === "") {
//     searchCheckBox.checked = false;
//     resetAll();
//   }
// });

// searchCheckBox.addEventListener("change", () => {
//   handleSearch();
// });

// bookFilter.addEventListener("change", () => {
//   const selectedValue = bookFilter.value;
//   let filterValue;
//   if (selectedValue === "all") {
//     filterValue = null;
//   } else if (selectedValue === "Read") {
//     filterValue = true;
//   } else {
//     filterValue = false;
//   }
//   currentBooks = books.filterByReadingStatus(filterValue);
//   displayAllBooks();
// });

// bookFilter.addEventListener("change", () => {
//   const selectedValue = bookFilter.value;
//   let filterValue;
//   if (selectedValue === "all") {
//     filterValue = null;
//   } else if (selectedValue === "Read") {
//     filterValue = true;
//   } else {
//     filterValue = false;
//   }
//   currentBooks = books.filterByReadingStatus(filterValue);
//   displayAllBooks();
// });

// function resetAll() {
//   currentBooks = books.displayAllBooks();
//   searchError.style.display = "none";
//   displayAllBooks();
//   searchCheckBox.checked = false;
//   bookFilter.selectedIndex = 0;
//   searchInput.value = "";
//   const tableBody = document.querySelector("#booksTable");
//   tableBody.style.display = "block";
// }
// resetBtn.addEventListener("click", resetAll);
// displayAllBooks();

// function handleLocalStoarge() {}
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookReadingStatus = document.getElementById("book-reading");
const searchInput = document.querySelector(".search-container");
const searchCheckBox = document.querySelector("#search-box");
const formError = document.getElementById("form_error");
const searchError = document.getElementById("search_error");
const bookFilter = document.getElementById("book-filter");
const resetBtn = document.getElementById("reset-btn");

class Book {
  constructor(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
  }

  displayInfo() {
    return `${this.title}, ${this.author}, ${
      this.readingStatus ? "Done" : "Not done"
    }`;
  }

  isSimilar(book) {
    return this.title === book.title && this.author === book.author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (book.title !== "" && book.author !== "") {
      this.books.push(book);
      formError.style.display = "none";
    } else {
      formError.innerText = "please enter title and author";
      formError.style.display = "block";
    }
  }

  contains(bookTitle) {
    return this.books.some((book) => book.title === bookTitle);
  }

  deleteBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  displayAllBooks() {
    return this.books;
  }

  toggleReadingStatus(book) {
    book.readingStatus = !book.readingStatus;
  }

  filterByReadingStatus(status) {
    if (status === null) {
      return this.books;
    }
    return this.books.filter((b) => b.readingStatus === status);
  }

  countBooks() {
    return this.books.length;
  }

  clearLibrary() {
    this.books = [];
  }

  findBookByTitle(title) {
    return this.books.find((b) => b.title === title);
  }
  findBooksByTitle(title) {
    return this.books.filter((b) => b.title === title);
  }

  findBooks(str) {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(str.toLowerCase())
    );
  }

  getAllAuthors() {
    const uniqueAuthors = [...new Set(this.books.map((book) => book.author))];
    return uniqueAuthors;
  }

  findBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }
}

let books = new Library();

document.getElementById("add-btn").addEventListener("click", function () {
  let newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookReadingStatus.checked
  );

  if (books.contains(newBook.title)) {
    formError.innerText = "this book already exist";
    formError.style.display = "block";
  } else {
    books.addBook(newBook);
    bookTitle.value = "";
    bookAuthor.value = "";
    bookReadingStatus.checked = false;
    displayAllBooks();
  }
  resetAll();
});

let currentBooks = books.displayAllBooks();

function updateBooksNumber(currentBooks) {
  const bookNumber = document.querySelector("#book-number");
  bookNumber.innerText = currentBooks.length;
}

function fetchData() {
  fetch("books.json")
    .then((response) => response.json())
    .then((data) => {
      let bookData = data.books;
      bookData.forEach((book) => {
        let newBook = new Book(book.title, book.author, book.readingStatus);
        currentBooks.push(newBook);
      });
      currentBooks = books.displayAllBooks();
      displayAllBooks();
    })
    .catch((error) => console.error("Error loading the JSON:", error));
}
fetchData();

function displayAllBooks() {
  const tableBody = document.querySelector("#booksTable tbody");
  tableBody.innerHTML = "";

  currentBooks.forEach((book) => {
    const row = tableBody.insertRow();

    const titleCell = row.insertCell();
    titleCell.innerText = book.title;

    const authorCell = row.insertCell();
    authorCell.innerText = book.author;

    const statusCell = row.insertCell();
    statusCell.innerText = book.readingStatus ? "Done" : "Not done";

    const actionCell = row.insertCell();

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.id = `book-${book.title}`;
    toggleBtn.name = book.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    toggleBtn.innerHTML = book.readingStatus
      ? `<i class="fa-solid fa-circle-check"></i>`
      : `<i class="fa-regular fa-circle-check"></i>`;

    deleteBtn.addEventListener("click", () => {
      const confirmation = document.querySelector(".confirmation");
      const yesBtn = document.querySelector(".yes-button");
      const noBtn = document.querySelector(".no-button");
      const bookName = document.querySelector(".book-name");
      confirmation.style.display = "block";
      bookName.innerText = book.title;
      yesBtn.addEventListener("click", () => {
        books.deleteBook(book.title);
        currentBooks = books.displayAllBooks();
        confirmation.style.display = "none";
        displayAllBooks();
      });
      noBtn.addEventListener("click", () => {
        confirmation.style.display = "none";
      });
    });

    toggleBtn.addEventListener("click", () => {
      books.toggleReadingStatus(book);
      displayAllBooks();
    });

    actionCell.appendChild(toggleBtn);
    actionCell.appendChild(deleteBtn);
  });
  updateBooksNumber(currentBooks);
}

function handleSearch() {
  searchError.style.display = "none";

  if (searchCheckBox.checked) {
    currentBooks = books.findBooksByTitle(searchInput.value);
  } else {
    currentBooks = books.findBooks(searchInput.value);
  }

  if (currentBooks.length === 0) {
    searchError.innerText = "There are no matching results.";
    searchError.style.display = "block";
  } else {
    searchError.style.display = "none";
  }

  displayAllBooks();
  console.log(currentBooks);
}

searchInput.addEventListener("input", () => {
  handleSearch();
  if (searchInput.value.toLowerCase() === "") {
    searchCheckBox.checked = false;
    resetAll();
  }
});

searchCheckBox.addEventListener("change", () => {
  handleSearch();
});

bookFilter.addEventListener("change", () => {
  const selectedValue = bookFilter.value;
  let filterValue;
  if (selectedValue === "all") {
    filterValue = null;
  } else if (selectedValue === "Read") {
    filterValue = true;
  } else {
    filterValue = false;
  }
  currentBooks = books.filterByReadingStatus(filterValue);
  displayAllBooks();
});

bookFilter.addEventListener("change", () => {
  const selectedValue = bookFilter.value;
  let filterValue;
  if (selectedValue === "all") {
    filterValue = null;
  } else if (selectedValue === "Read") {
    filterValue = true;
  } else {
    filterValue = false;
  }
  currentBooks = books.filterByReadingStatus(filterValue);
  displayAllBooks();
});

function resetAll() {
  currentBooks = books.displayAllBooks();
  searchError.style.display = "none";
  displayAllBooks();
  searchCheckBox.checked = false;
  bookFilter.selectedIndex = 0;
  searchInput.value = "";
  const tableBody = document.querySelector("#booksTable");
  tableBody.style.display = "block";
}
resetBtn.addEventListener("click", resetAll);
displayAllBooks();

