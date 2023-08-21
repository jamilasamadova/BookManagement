let books = [];
let createForm = document.getElementById("bookForm");

let bookname = document.getElementById("bookname");
let authorname = document.getElementById("authorname");
let year = document.getElementById("year");
let submit = document.getElementById("submit");
let booksTable = document.querySelector(".booksTable");
let bookForm = document.getElementById("bookForm");
let bookManager = document.getElementById("bookManager");

let bookInfo = {
  bookName: bookNameInp.value,
  authorName: authorNameInp.value,
  year: year.value,
};
books.push(bookInfo);
let error = [];
submit.addEventListener("click", function (event) {
  event.preventDefault();
  alert("form is submitted");

  if (bookname.value == "") {
    error.push("fill in the gaps");
  }
  if (authorname.value == "") {
    error.push("fill in the gaps");
  }
  if (year.value == "") {
    error.push("fill in the gaps");
  }
  let message = document.getElementById("message");
  message.innerText = error;
});

let bookHtmlTr = "";

books.forEach(function (book) {
  bookHtmlTr += `
            <tr>
                <td>FIN CODE</th>
                <td>${book.bookname}</td>
                <td>${book.authorname}</td>
                <td>${book.year}</td>
                td>
                <button class="btn btn-danger remove-btn"> 
                    <i class="fa-solid fa-trash"></i>
                 </button>
                <button class="btn btn-primary edit-btn"> 
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </td>
            </tr>
        `;
});

booksTable.innerHTML = bookHtmlTr;
let removeBtns = document.querySelectorAll(".remove-btn");

removeBtns.forEach(function (removeBtn) {
  removeBtn.addEventListener("click", function () {
    console.log(removeBtn.parentElement.parentElement.remove());
  });
});

bookNameInp.value = "";
authorNameInp.value = "";
year.value = "";
