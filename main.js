const listUl = document.querySelector("#lists")
const taskUl = document.querySelector("#tasks")
const listText = document.querySelector("#listText")
const taskText = document.querySelector("#taskText")
const listSubmit = document.querySelector("#listSubmit")
const taskSubmit = document.querySelector("#taskSubmit")

class List {
    addNew (event, input, target) {
        event.preventDefault();
        const newLi = document.createElement("li")
        let text = document.createTextNode(input.value)
        newLi.appendChild(text);
        target.appendChild(newLi)
    }
}

myList = new List();