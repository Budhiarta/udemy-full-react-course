const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["high-fantasy", "adventure", "fiction", "novels", "literature"],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// /*
// const book = getBook(4);
// //mendeskripsikan atribut
// const { title, author, genres, publicationDate, pages, reviews } = book;

// // const primaryGenre = genres[0]
// // const secondaryGenre = genres[1]

// const [primaryGenre, secondaryGenre] = genres;

// console.log(primaryGenre, secondaryGenre);

// //cara membuat function biasa
// // function getYear(str) {
// //   return str.split('-')[0]
// // }

// //arrow function
// const getYear = (str) => str.split("-")[0];

// //split date by (-)
// const sumary = ` ${title}, with ${pages} pages ${getYear(
//   publicationDate
// )} ini adalah contoh sumary`;

// const ternary = book.pages > 100 ? "bukune tebel" : "bukune sing tebel";

// ternary;

// sumary;

// console.log(getYear(publicationDate));

// console.log(false && "salah");
// console.log(false || "bener");
// console.log(true && "otomatis nampilin ini");

// const translateBengali = book.translations.bengali || "sing ade";

// console.log(translateBengali);

// console.log(
//   book.reviews.goodreads.ratingsCount + book.reviews.librarything.ratingsCount
// );

// function totalRating(book) {
//   const goodreads = book.reviews.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   librarything;
//   goodreads;
//   return librarything + goodreads;
// }

// console.log(totalRating(book));
// */

// //map method
// const y = [1, 2, 3].map((e) => e * 2);

// const books = getBooks();
// books;

// // const title = books.map((book) => book.title)
// // title;

// // const title = books.title;
// // title;

// // const penting = {
// //   title: books.title,
// //   author: books.author,
// //   pages: books.pages,
// // };

// // penting;

// /*cara untuk menampilkan data yang kita perlu saja
// penggunaan ({}) agar tidak perlu penuliskan return pada map method
// jika hanya arrow function akan dianggap sebagai decralation*/

// const essensialData = books.map((books) => ({
//   title: books.title,
//   author: books.author,
//   pages: books.pages,
// }));
// essensialData;

// /*
// kegunaan filter disini untuk memfilter data sesuai keinginan, dapat dilakuan dengan dua cara yaitu menulis 1 1 kondisi filter
// atau menambahkan && untuk menuliskan kondisi berikutnya.
// */
// //Filter method
// const longBooks = books.filter(
//   (books) => books.pages > 500 && books.hasMovieAdaptation
// );
// longBooks;

// const genreFilter = books.filter((books) => books.genres.includes("fantasy"));
// genreFilter;

// //Filter method + map
// const longBookTittle = books
//   .filter((books) => books.pages > 500)
//   .map((books) => books.title);
// longBookTittle;

// //reduce method
// /*
// digunakan untuk membuat seperti looping dengan menggunakan akumulasi
// setelah method reduce, isi 2 callback value. 1 buat akumulasi 1 buat ngambil data nya. acc buat nyimpen initial values nanti (jadi array ke 0).
// */
// const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
// totalPages;

// //sort method
// /*
// untuk mengurutkan array
// jika ingin memanggil array tanpa melalui sort dapat ditambahkan slice()
// dengan slice, jika ingin memanggil array yang sudah mengalami sort harus memanggil functionnya
// */
// // const number = [6, 9, 3, 2, 10];
// // const numberSort = number.slice().sort((x, y) => x - y);
// // numberSort;
// // number;

// //pengurutan data dengan asc
// const sortedByPages = books.sort((a, b) => a.pages - b.pages);
// sortedByPages;

// //pengurutan data dengan desc
// const sortedByPagesDesc = books.sort((a, b) => b.pages - a.pages);

// //Add new data
// /*
// menambahkan data baru tanpa mengubah data yang sudah ada.
// caranya dengan membuat object data baru dan menambahkan pada data yang sudah ada
// */

// const newBook = {
//   id: 6,
//   title: "the pig with the Bangsat",
//   author: "awake",
// };

// const bookAfterAdd = [...books, newBook];
// bookAfterAdd;

// //Delete new Data
// /*
// Contoh disini menggunakan logic penampilkan data selain data yang didelete.
// caranya dengan mengembalikan value hasil filter bukann dari data yang diinginkan menggunakan filter method
// */

// const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 4);
// bookAfterDelete;

// //update data
// /*
// update data digunakan untuk mengubah data yang sudah ada dengan nilai yang kita inginkan.
// pada contoh ini data tujuan akan dicari mengunakan ternary option untuk menambahkan value yang sesuai.
// pada update data dapat digunakan map method karena map method digunakan untuk manipulasi data
// */

// const bookAfterUpdate = bookAfterDelete.map((book) =>
//   book.id == 1 ? { ...book, author: "nyen nawang" } : book
// );
// bookAfterUpdate;

/*
//pengambilan data menggunakan fetch method
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("ini duluan, karna javascript perlu waktu buat fetch API");
*/

//pengambilan data menggunakan async function
/* 
disini javascript tidak akan melewati line sebelum line pertama selesai
pada fungsi async ditambahkan await untuk memberikan perintah js menunggu proses line tersebut selesai terlebih dahulu.
*/
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

getTodos();
