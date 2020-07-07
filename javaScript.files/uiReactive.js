//Constant Elements

const frame = document.getElementById("frame")

const header_container = document.getElementById("header")

const first_message = document.getElementsByClassName("first-message")[0]

const add_todo_H1 = document.getElementById("add-todo")

const form_container = document.getElementById("form-container")
const topic_add = document.getElementById("todo-topic")
const main_add = document.getElementById("todo-main")
const value_add = document.getElementById("todo-value")
const duedate_add = document.getElementById("due-date")
const add_button = document.querySelector("input[name=add-todo]")
const family_add = document.querySelector("#todo-family-1")


const add_family_container = document.getElementById("add-family-container")
const add_family = document.getElementById("add-family-input")

const search_container = document.querySelector("#search-container")
const search_icon = document.getElementsByClassName("search-icon")[0]
const search_todo = document.getElementById("todo-search")

const families_container = document.getElementById("families-container")
const family_container = document.getElementsByClassName("family-container")[0]
const list_item_todo = document.getElementsByClassName("list-item")

const button_li = document.getElementById("button-container")
const button_menu = document.querySelector("#menu")
const button_deleteAll = document.querySelector("input[name=delete-all]")

const deleteAll_confirm_modal = document.getElementById("deleteAll-confirm-modal")
const confirm_deleteAll = document.getElementById("confirm-deleteAll")
const cancel_deleteAll = document.getElementById("cancel-deleteAll")

const modal_container = document.getElementsByClassName("modal-body-container")
const modal_menu = document.getElementById("menu-modal")
const set_value = document.getElementById("change-value")
const set_status = document.getElementById("change-status")
const logout = document.getElementById("logout")
const delete_account = document.getElementById("delete-account")

const delete_option_modal = document.getElementById("delete-account-modal")
const cancel_delete_button = document.getElementById("cancelbtn")
const delete_account_button = document.getElementById("deletebtn")

const value_option_modal = document.getElementById("value-option-modal")
const add_value = document.getElementById("add-value-option")
const remove_value = document.getElementById("remove-value-option")

const status_option_modal = document.getElementById("status-option-modal")
const add_status = document.getElementById("add-status-option")
const remove_status = document.getElementById("remove-status-option")




uiEventListeners()

function uiEventListeners(){
    main_add.addEventListener("click", () => {textAreaSize(main_add,5)})
    main_add.addEventListener("mouseout", () => {textAreaSize(main_add,1)})
    frame.addEventListener("mousemove", () => {setOpacity(header_container,1)})
    frame.addEventListener("mouseout", () => {setOpacity(header_container,0.9)})
    search_container.addEventListener("mousemove",red_search_icon)
    search_container.addEventListener("mouseout",white_search_icon)
    document.addEventListener("DOMContentLoaded",accordion)
}


// accordion()
function accordion() {
    const accordion_items = document.getElementsByClassName("accordion-item")
    const accordion_items_array = Array.from(accordion_items)
    // console.log(accordion_items_array)

    for (let i = 0; i < accordion_items_array.length; i++) {
        accordion_items_array[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
    }
}


// Modal Open - Close Function
function modal(modal_button,area) {



    function modal_display_block() {
        area.style.display = "block"
    }

    function modal_display_none(event) {
        if (event.target == area) {
            area.style.display = "none"
        }
    }

    
    modal_button.addEventListener("click", modal_display_block)
    
    window.addEventListener("click", modal_display_none)

}

//Display None
const displayNone = (e) => {e.classList.add("display-none")}

// //Display Block
const displayBlock = (e) => {e.classList.remove("display-none")}

//Text Area Row Count
const textAreaSize = (area,row_count) => {area.rows = row_count}


// Set Opacity
const setOpacity = (area,amount) => (area.style.opacity = amount) 


// Modal Menu Opening and Closing
modal(button_menu, modal_menu)

// Modal Value Option Opening and Closing
modal(set_value, value_option_modal)
set_status.addEventListener("click",function(){value_option_modal.style.display = "none"})
delete_account.addEventListener("click",function(){value_option_modal.style.display = "none"})

function setValue_display_none(event) {
    if (event.target == modal_menu) {
        value_option_modal.style.display = "none"
    }
}

window.addEventListener("click",setValue_display_none)

// Modal Delete Account Opening and Closing
modal(delete_account, delete_option_modal)
set_status.addEventListener("click", function(){delete_option_modal.style.display = "none"})
set_value.addEventListener("click", function(){delete_option_modal.style.display = "none"})


function optionDelete_display_none(event) {
    if (event.target == modal_menu) {
        delete_option_modal.style.display = "none"
    }
}

window.addEventListener("click", optionDelete_display_none)


// Modal Status Option Opening and Closing
modal(set_status, status_option_modal)
set_value.addEventListener("click",function(){status_option_modal.style.display = "none"})
delete_account.addEventListener("click",function(){status_option_modal.style.display = "none"})

function setStatus_display_none(event) {
    if (event.target == modal_menu) {
        status_option_modal.style.display = "none"
    }
}

window.addEventListener("click",setStatus_display_none)

// Confirm Cancel Modal Opening and Closing
modal(button_deleteAll,deleteAll_confirm_modal)
cancel_deleteAll.addEventListener("click",cancelAll_display_none)
confirm_deleteAll.addEventListener("click",cancelAll_display_none)
if (button_menu){
    button_menu.addEventListener("click",cancelAll_display_none)
}


function cancelAll_display_none(event) {
    
    deleteAll_confirm_modal.style.display = "none"
}


//Search Icon Effect
search_container.addEventListener("mousemove",red_search_icon)
search_container.addEventListener("mouseout",white_search_icon)

function red_search_icon(){
    search_icon.style.color = "rgb(211,84,0)"
    search_icon.style.transform = "scale(1.1)"
}

function white_search_icon() {
    search_icon.style.color = "white"
    search_icon.style.transform = "scale(0.89)"
}


