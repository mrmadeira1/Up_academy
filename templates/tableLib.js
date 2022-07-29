// variaveis
let headers = {}

function initTable(data, selector) {

    getheaderkeys(data, selector)

    fillHeader(data[0], selector)

    fillBody(data, selector)
}

function getheaderkeys(data, selector) {
    headers[selector] = []
    data.map(item => {
        for (const key in item) {
            if (!headers[selector].some(headerkey => headerkey === key))
                headers[selector].push(key)
        }
    })
}


function fillHeader(data, selector) {
    headers[selector] = []
    for (const key in data) {
        headers[selector].push(key)
    }
    $(`${selector} #table-head`).html('');
    let rows = ''
    for (const key of headers[selector]) {
        rows += `<th scope="col">${key}</th>`
    }
    const tableRow = `
<tr>
${rows}
</tr>
`
    $(`${selector} #table-head`).html(tableRow);
}

function fillBody(data, selector) {
    $(`${selector} #table-body`).html('')
    data.forEach(item => addRowToTable(item, selector));
}


function addRowToTable(data, selector) {
    let dataRow = ""
    for (const key of headers[selector]) {
        if (data[key].includes('http://books.google.com/books/content')) {
            dataRow += `<td><img src=  ${JSON.stringify(data[key])} ></td>`
        } else if (data[key].includes('http://books.google.pt/books?id') || data[key].includes('https://play.google.com/store/books/details?id')) {
            dataRow += `<td><a href =  ${JSON.stringify(data[key])} target="_blank">Comprar</td>`
        }
        else if (Object.hasOwnProperty.call(data, key)) {
            let element = data[key];
            if (typeof element === "object" || typeof element === "string") {
                element = JSON.stringify(element)

                dataRow += `<td>${element}</td>`
            }
            else {
                dataRow += `<td> N/D </td>`
            }
        }
    }
    const nextId = parseInt(getLastId(selector)) + 1;
    $(`${selector} #table-body`).append(
        `
<tr>
  ${dataRow}
</tr>
`
    )
}

function getLastId(selector) {
    return $(`${selector} #table-body th:last`).text()
}

function clearTable(selector) {
    $(`${selector} #table-body`).html('')
    $(`${selector} #table-head`).html('')
}
