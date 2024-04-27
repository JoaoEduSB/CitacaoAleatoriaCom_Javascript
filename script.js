function generate() {
    var quotes = { 
        "Alysha Speer" : '"You never really know what is coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity."',
        "Napoleon Bonaparte" : '"Ten people who speak make more noise than ten thousand who are silent."',
        "Virginia Satir" : '"We must not allow other people limited perceptions to define us."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}