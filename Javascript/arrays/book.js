
const getBooks = () =>{
    const result = getLibrisData();
    console.log(result);
    const bookTable = getTable(result);
    const newElementposition = document.getElementById("book-table");
    newElementposition.appendChild(bookTable);
}

const getLibrisData = () =>{
    return  [
        {
          "identifier": "http://libris.kb.se/bib/6131039",
          "title": "Essays on the philosophy of W.V. Quine",
          "isbn": "0855270187",
          "type": "book",
          "publisher": "Hassocks, Sussex : Harvester P",
          "date": "cop. 1979",
          "language": "eng"
        },
        {
          "identifier": "http://libris.kb.se/bib/4739804",
          "title": "The time of my life : an autobiography",
          "creator": "Quine, W. V.",
          "isbn": "0262170035",
          "type": "book",
          "publisher": "Cambridge, Mass. : MIT Press",
          "date": "cop. 1985",
          "language": "eng"
        },
        {
          "identifier": "http://libris.kb.se/bib/5704464",
          "title": "Essays on the philosophy of W.V. Quine",
          "isbn": "0806115165",
          "type": "book",
          "publisher": "Norman : Univ. of Oklahoma P",
          "date": "cop. 1979",
          "language": "eng"
        },
        {
          "identifier": "http://libris.kb.se/bib/11216457",
          "title": "Quine in dialogue",
          "creator": "Quine, W. V.",
          "isbn": [
            "9780674030831",
            "0674030834"
          ],
          "type": "book",
          "publisher": "Cambridge, Mass. Harvard University Press",
          "date": "2008",
          "language": "eng"
        },
        {
          "identifier": "http://libris.kb.se/bib/2025932",
          "title": "In conversation W. V. Quine. [Videoupptagning]",
          "creator": "Quine, W. V.",
          "type": "moving image",
          "publisher": "London : Philosophy International",
          "date": "1994",
          "language": "eng",
          "description": "Huvudpost (flerbandsverk)"
        },
        {
          "identifier": "http://libris.kb.se/bib/2025933",
          "title": "In conversation W. V. Quine [Videoupptagning]",
          "creator": "Quine, W. V.",
          "type": "moving image",
          "publisher": "London : Philosophy International",
          "date": "1994",
          "language": "eng",
          "relation": "In conversation W. V. Quine : [Videoupptagning]"
        },
        {
          "identifier": "http://libris.kb.se/bib/2025934",
          "title": "In conversation W. V. Quine [Videoupptagning]",
          "creator": "Quine, W. V.",
          "type": "moving image",
          "publisher": "London : Philosophy International",
          "date": "1994",
          "language": "eng",
          "relation": "In conversation W. V. Quine : [Videoupptagning]"
        },
        {
          "identifier": "http://libris.kb.se/bib/2025935",
          "title": "In conversation W. V. Quine [Videoupptagning]",
          "creator": "Quine, W. V.",
          "type": "moving image",
          "publisher": "London : Philosophy International",
          "date": "1994",
          "language": "eng",
          "relation": "In conversation W. V. Quine : [Videoupptagning]"
        },
        {
          "identifier": "http://libris.kb.se/bib/2025936",
          "title": "In conversation W. V. Quine [Videoupptagning]",
          "creator": "Quine, W. V.",
          "type": "moving image",
          "publisher": "London : Philosophy International",
          "date": "1994",
          "language": "eng",
          "relation": "In conversation W. V. Quine : [Videoupptagning]"
        },
        {
          "identifier": "http://libris.kb.se/bib/2025937",
          "title": "In conversation W. V. Quine [Videoupptagning]",
          "creator": "Quine, W. V.",
          "type": "moving image",
          "publisher": "London : Philosophy International",
          "date": "1994",
          "language": "eng",
          "relation": "In conversation W. V. Quine : [Videoupptagning]"
        }
      ];
}
const getTable = (bookList) => {
    const newTable = document.createElement("table");
    bookList.map((book) =>{
        const newRow = getRow(book);
        newTable.appendChild(newRow);
    })
    return newTable;
}   

const getRow = (rowData) => {
    const rowToAdd = document.createElement("tr");

    const tableData = document.createElement("td");
    tableData.innerText = rowData.title;
    rowToAdd.appendChild(tableData);

    const tableData2 = document.createElement("td");
    tableData2.innerText = rowData.publisher;
    rowToAdd.appendChild(tableData2);

    const tableData3 = document.createElement("td");
    tableData3.innerText = rowData.date;
    rowToAdd.appendChild(tableData3);

    // console.log(rowData.date);
    // console.log(rowData.publisher);
    // console.log(rowData.title);

    return rowToAdd;
}    
const target = document.getElementById("btn");
target.addEventListener("click",getBooks);