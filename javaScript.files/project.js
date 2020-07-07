

//Getting all events
eventListeners()

function eventListeners() {
    
    document.addEventListener("DOMContentLoaded", function(){
        ui.loadAllFamilies()
    })
    document.addEventListener("DOMContentLoaded", function(){
        ui.loadAllTodos()
    })
    form_container.addEventListener("submit",addTodo)
    document.addEventListener("DOMContentLoaded", function(){
        ui.filterTodosEventListener()
    })
    search_todo.addEventListener("keyup",function(){
        ui.filterFamilies()
    })
    families_container.addEventListener("click",deleteTodo)
    families_container.addEventListener("click",updateTodo)
    families_container.addEventListener("click",deleteFamily)
    add_family_container.addEventListener("submit",addFamily)
    family_add.addEventListener("click",function(){
        ui.addFamiliestoOptions()
    })

}


function addTodo(e){
    const topic = topic_add.value
    const main = main_add.value
    const value = value_add.value
    const dueDate = duedate_add.value
    const family = family_add.value 
    
    if (topic === "") {
        ui.showAlert("Todo Topic and Family is required. Please indicate a name for your todo.")
    }
    else if (family === ""){
        ui.showAlert("Todo Topic and Family is required. Please indicate a family for your todo.")
    }
    else {
        const newTodo = new toDo(topic,main,value,dueDate,family,"","")
        storage.addNewToDoToStorage(newTodo)
        ui.addNewToDoToUI(newTodo)         
    }

    ui.resetInput()
    e.preventDefault() //Avoid from submiting the form

}

function deleteTodo(e) {
    if (e.target.classList.contains("delete-icon-todo") === true ) {
        ui.deleteToDoFromUI(e.target)
        storage.deleteToDoFromStorage(e.target.previousElementSibling.textContent)      
    }
}

function updateTodo(e) {
    if (e.target.classList.contains("modal-save-button") === true) {

    const container = e.target.parentElement.parentElement
    const topic = container.firstElementChild.firstElementChild.textContent
    const value = container.children[1].firstElementChild.value
    const main = container.children[5].value
    const status = container.children[2].firstElementChild.value
    const dueDate = container.children[3].value
    const commend = container.children[4].value
    const family = container.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.textContent

    const updatedTodo = new toDo(topic,main,value,dueDate,family,status,commend)
    storage.updateTodoInStorage(updatedTodo)
        
    }
    // e.preventDefault()
}

function addFamily(e) {
    const add_family_input = document.getElementById("add-family-input")
    let family = add_family_input.value
    let families = storage.getFamiliesFromStorage()

    if (families.includes(family) === false) {

        storage.addNewFamilyToStorage(family)
        ui.addNewFamilyToUI(family)
        ui.resetFamilyInput()
        
    }
    
    e.preventDefault()
}

function deleteFamily(e) {
    if (e.target.classList.contains("delete-icon-family") === true) {
        let familyContainer = e.target.parentElement
        let familyName = e.target.previousElementSibling.previousElementSibling.textContent
        let todos = storage.getToDosFromStorage()

        ui.deleteFamilyFromUI(familyContainer)
        storage.deleteFamilyFromStorage(familyName)


        todos.forEach(element => {
            if (element.family === familyName) {
                storage.deleteToDoFromStorage(element.topic)
            }
        });

    }
}