let nodeList = document.getElementsByTagName("LI");
for (let i = 0; i < nodeList.length; i++) {
    let addSpanClose = document.createElement("SPAN");
    let xSymbol = document.createTextNode("\u00D7");
    addSpanClose.className = "close";
    addSpanClose.appendChild(xSymbol);
    nodeList[i].appendChild(addSpanClose);
}

let tasklist = document.querySelector('ul')
tasklist.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked")
    }
}, false)

function newElement() {
    let listItem = document.createElement('li')
    let inputData = document.getElementById('tasklist__input').value
    let listItemNode = document.createTextNode(inputData)
    listItem.appendChild(listItemNode)
    console.log(listItem)
    if (inputData === '') {
        alert('Input your task')
    } else {
        document.getElementById('tasklist__list').appendChild(listItem)
    }
    document.getElementById("tasklist__input").value = ''
    let closeSpan = document.createElement('span')
    let xNode = document.createTextNode('\u00D7')

    closeSpan.className = 'close'
    closeSpan.appendChild(xNode)
    listItem.appendChild(closeSpan)

    let closeSpanList = document.getElementsByClassName('close');
    for (let i = 0; i < closeSpanList.length; i++) {
        closeSpanList[i].onclick = function () {
            let block = this.parentElement;
            block.style.display = "none";
        }
    }

}
