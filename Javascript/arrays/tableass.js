
const getCompany = () =>{
    const result = getCompanyData();
    console.log(result);
    const companyTable = getTable(result);
    const newElementposition = document.getElementById("company-table");
    newElementposition.appendChild(companyTable);
}

const getCompanyData = () =>{
    return [
        ["Saab AB", "Stockholm", 1937],
        ["Volvo Group", "Goteborg", 1927],
        ["Sandvik AB", "Stockholm", 1862],
        ["Atlas Copco Group", "Nacka", 1873],
        ["Electrolux AB", "Stockholm", 1919],
        ["Skanska AB", "Stockholm", 1887],
    ];
}
const getTable = (companyList) => {
    const newTable = document.createElement("table");
    companyList.map((company) =>{
        const newRow = getRow(company);
        newTable.appendChild(newRow);
    })
    return newTable;
}   

const getRow = (rowData) => {
    const rowToAdd = document.createElement("tr");

    const tableData = document.createElement("td");
    tableData.innerText = rowData;
    rowToAdd.appendChild(tableData);
    return rowToAdd;
}    
const target = document.getElementById("btn");
target.addEventListener("click",getCompany);