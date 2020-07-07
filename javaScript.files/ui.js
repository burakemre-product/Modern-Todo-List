function UI() {

}

// Release ui object
const ui = new UI()

UI.prototype.addNewToDoToUI = function(newTodo) {
   displayNone(first_message)
   ui.createTodoListItem(newTodo)  
}


UI.prototype.deleteToDoFromUI = function (element) {
    element.parentElement.remove()
}


UI.prototype.filterTodosEventListener = function () {
    const filterareas = Array.from(document.getElementsByClassName("todo-search"))

    filterareas.forEach(element => {
        element.addEventListener("keyup", function(){
            ui.filterTodos()
        })
    });
}


UI.prototype.filterTodos = function() {
    const filterValue = event.target.value.toLowerCase()
    const listItems = document.querySelectorAll(".todoN")

    listItems.forEach(function(listItem){
        const text = listItem.innerHTML.toLocaleLowerCase()

        if (text.indexOf(filterValue)=== -1) {
            listItem.parentElement.setAttribute("style","display : none")
        }
        else {
            listItem.parentElement.setAttribute("style","display : block")
        }
    })

} 


UI.prototype.filterFamilies = function() {
    const filterValue = event.target.value.toLowerCase()
    const listItems = document.querySelectorAll(".family")

    listItems.forEach(function(listItem){
        const text = listItem.innerHTML.toLocaleLowerCase()

        if (text.indexOf(filterValue)=== -1) {
            listItem.parentElement.setAttribute("style","display : none")
            listItem.parentElement.setAttribute("style","display : none")

        }
        else {
            listItem.parentElement.setAttribute("style","display : block")
            listItem.parentElement.setAttribute("style","display : block")
        }
    })

}


UI.prototype.loadAllTodos = function() {
    let todos = storage.getToDosFromStorage()

    todos.forEach(element => {
        ui.addNewToDoToUI(element)
    });
}

UI.prototype.loadAllFamilies = function() {
    let families = storage.getFamiliesFromStorage()

    families.forEach(element => {
        ui.addNewFamilyToUI(element)
    });
}


//Reset Input Values on UI
UI.prototype.resetInput = function() {
    topic_add.value = ""
    main_add.value = ""
    value_add.value = "Must Do"
    duedate_add.value = ""
    family_add.value = ""
}

UI.prototype.resetFamilyInput = function() {
    add_family.value = ""
}


//Ad newTodo Li into the target family's next sibling UL
UI.prototype.createTodoListItem = function(newTodo){
    let targetFamily = ui.determineTargetFamily(newTodo)
    let new_todo_container = targetFamily.nextElementSibling.firstElementChild
    
    const new_list_item = document.createElement("li")
    const new_todoN = document.createElement("p")
    const new_i_item_delete = document.createElement("i")

    new_todo_container.appendChild(new_list_item)
    new_list_item.appendChild(new_todoN)
    new_list_item.appendChild(new_i_item_delete)

    new_list_item.className = "list-item" 
    new_todoN.className = "todoN"
    new_i_item_delete.classList.add("material-icons", "delete-icon-todo")
    
    new_i_item_delete.textContent = "delete"
    new_todoN.textContent = newTodo.topic

    //Modal

    const myModal_div = document.createElement("div")
    const modal_content_div = document.createElement("div")
    const modal_container_div = document.createElement("div")
    const modal_header_div = document.createElement("div")
    const modal_topic_p = document.createElement("p")
    const modal_status_container = document.createElement("div")
    const modal_status_select = document.createElement("select")
    const modal_value_container = document.createElement("div")
    const modal_value_select = value_add.cloneNode(true)
    const modal_dueDate_input = duedate_add.cloneNode(true)
    const modal_commend_textarea = document.createElement("textarea")
    const modal_main_textarea = document.createElement("textarea")
    const modal_buttonContainer_div = document.createElement("div")
    const modal_saveButton = document.createElement("button")
    const status_option1 = document.createElement("option")
    const status_option2 = document.createElement("option")
    const status_option3 = document.createElement("option")
    const status_option4 = document.createElement("option") 
   
    myModal_div.className = "modal"
    modal_content_div.className = "modal-content"
    modal_container_div.className = "modal-body-container"
    modal_header_div.className = "modal-header"
    modal_topic_p.className = "modal-topic"
    modal_status_container.className = "modal-status-container"
    modal_value_container.className = "modal-value-container"
    modal_dueDate_input.className = "modal-due-date"
    modal_commend_textarea.className = "modal-commend"
    modal_main_textarea.className = "modal-main"
    modal_buttonContainer_div.className = "save-button-container"
    modal_saveButton.className = "modal-save-button"

    new_list_item.appendChild(myModal_div)
    myModal_div.appendChild(modal_content_div)
    modal_content_div.appendChild(modal_container_div)
    modal_container_div.appendChild(modal_header_div)
    modal_header_div.appendChild(modal_topic_p)
    modal_container_div.appendChild(modal_value_container)
    modal_value_container.appendChild(modal_value_select)
    modal_container_div.appendChild(modal_status_container)
    modal_status_container.appendChild(modal_status_select)
    modal_status_select.add(status_option1)
    modal_status_select.add(status_option2)
    modal_status_select.add(status_option3)
    modal_status_select.add(status_option4)  
    modal_container_div.appendChild(modal_dueDate_input)
    modal_container_div.appendChild(modal_commend_textarea)
    modal_container_div.appendChild(modal_main_textarea)
    modal_container_div.appendChild(modal_buttonContainer_div)
    modal_buttonContainer_div.appendChild(modal_saveButton)

    // Element Values
     
    modal_topic_p.textContent = newTodo.topic
    modal_commend_textarea.value = newTodo.commend
    modal_commend_textarea.placeholder = "Your notes about the progress"
    modal_main_textarea.value = newTodo.main
    modal_value_select.value = newTodo.value
    modal_dueDate_input.value = newTodo.dueDate
    modal_saveButton.textContent = "Save Changes"
    
    status_option1.text = "Waiting"
    status_option2.text = "In Progress"
    status_option3.text = "Waiting for 3rd Party"
    status_option4.text = "Done"

    // Element Properties
    modal_dueDate_input.style.paddingRight = "20px"
    modal_dueDate_input.style.paddingLeft = "20px"

     // Event Listeners
    modal(new_list_item,myModal_div)
}


//Determine Target Family ("p") for newTodo
UI.prototype.determineTargetFamily = function(newTodo){
    let familyList = Array.from(document.getElementsByClassName("family"))
    let matchList = []

    for (let i = 0; i < familyList.length; i++) {
        const family = familyList[i];
        if(family.textContent !== newTodo.family) {
            continue
        } 
        else {
            matchList.push(family)
        }      
    }  
    //Catch Error
    if (matchList.length > 1) {
        ui.showAlert("System problem occured, somehow UI contains duplicate family")

    }
    return matchList[0]
}


UI.prototype.addNewFamilyToUI = function(family) {
    // let familyNamesList = storage.getFamiliesFromStorage()
    const add_family = document.getElementById("todo-family-1")
    const families_container = document.getElementById("families-container")

    const new_familyContainer = document.createElement("div")
    const new_family = document.createElement("p")
    const new_family_delete_button = document.createElement("i")
    const new_ul_modal_container = document.createElement("div")
    const new_todo_container = document.createElement("ul")

    new_familyContainer.classList.add("family-container")
    new_family.classList.add("family")
    new_ul_modal_container.className = "ul-modal-container"
    new_todo_container.classList.add("todo-container")
    new_family_delete_button.classList.add("material-icons", "delete-icon-family")

    families_container.appendChild(new_familyContainer)
    new_familyContainer.appendChild(new_family)
    new_familyContainer.appendChild(new_family_delete_button)
    new_family.insertAdjacentElement("afterend",new_ul_modal_container)
    new_ul_modal_container.appendChild(new_todo_container)
    
    new_family_delete_button.textContent = "delete"
    new_family.textContent = family
    new_todo_container.innerHTML += `
        <form action="" class="part search-container" style="margin-bottom:30px;">
            <input type="text" name="todo-search" class="todo-search" placeholder="Search for a todo">
        </form>`

    new_familyContainer.style.cursor = "pointer"

    // add_family.innerHTML += `
    // <option value="${family}">${family}</option>`     

    modal(new_familyContainer,new_ul_modal_container)
}    
   

UI.prototype.deleteFamilyFromUI = function(family) {
    family.remove()  
}


// Todo Alert Message
UI.prototype.showAlert = function(message) {
    const form_container = document.getElementById("form-container")
    const alert_div = document.createElement("div")
    const alert = document.createElement("div")
    const alert_message = document.createElement("p")

    alert.className = "alert"
    alert_message.textContent = message

    form_container.appendChild(alert_div)
    alert_div.appendChild(alert)
    alert.appendChild(alert_message)
    
    setTimeout(function() {
        alert_div.remove()
    },2000)
}

UI.prototype.addFamiliestoOptions = function() {
    let families = storage.getFamiliesFromStorage()

    family_add.innerHTML = ""
    
    families.forEach(family => {
        family_add.innerHTML += `
        <option value="${family}">${family}</option>`
    });
}




