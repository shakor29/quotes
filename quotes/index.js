const Quote = document. getElementById ( "quote" );
const Author = document.getElementById ("author" );

function getQuote(){
    fetch("https://type.fit/api/quotes")
    .then((res)=> {
        return res.json();
    })
    .then((data) => {
        Quote.innerText = data.quote;
        Author.innerText = `-${data.author}`;
    });
}
getQuote();