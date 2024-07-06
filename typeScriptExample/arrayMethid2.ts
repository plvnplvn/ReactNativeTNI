interface Book {
    title: string;
    genre: 'fiction' | 'non-fiction' | 'educational' ;
    price: number;
}

const books: Book[] =[
    {title: "The Great Gaysby", genre:"fiction",price:320},
    {title: "War and Peace", genre:"fiction",price:250},
    {title: "Economics 101", genre:"educational",price:480},
    {title: "In Cold Blood", genre:"non-fiction",price:300},
    {title: "The Catcher in the Rye", genre:"fiction",price:400}
]

function filtBookByPrice(books:Book[],minPrice:number):Book[]{
    let bookfil = books.filter(books=>books.price>minPrice && books.genre==="fiction");
    return bookfil.map(book=>({...book,price:book.price*0.9}));
}

let filterBookByPrice = filtBookByPrice(books,300);
console.log(filterBookByPrice);
