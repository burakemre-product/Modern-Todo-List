class storage {

    static addNewToDoToStorage(newTodo) {
        let todos = this.getToDosFromStorage()

        todos.push(newTodo)

        localStorage.setItem("todos", JSON.stringify(todos))

    }

    static getToDosFromStorage() {
        let todos

        if (localStorage.getItem("todos") === null){
            todos = []
        }
        else {
            todos = JSON.parse(localStorage.getItem("todos"))  
        }

        return todos
    }

    static deleteToDoFromStorage(todoTopic) {
        let todos = this.getToDosFromStorage() 
        
        todos.forEach(function(element,index){
            if (element.topic === todoTopic) {
                todos.splice(index,1)
            }
        })

        localStorage.setItem("todos",JSON.stringify(todos))
    
    }

    static updateTodoInStorage(updatedTodo) {
        let todos = this.getToDosFromStorage()

        todos.forEach(function(element,index){
            if (element.topic === updatedTodo.topic) {
                todos.splice(index,1,updatedTodo)
            }
        })

        localStorage.setItem("todos",JSON.stringify(todos))

    } 

    static deleteFamilyFromStorage(familyName) {
        let families = this.getFamiliesFromStorage()

        families.forEach(function(element,index){
           if (element === familyName) {
               families.splice(index,1)
           }
        })

        localStorage.setItem("families",JSON.stringify(families))
    }

    static addNewFamilyToStorage(family) {
        let families = this.getFamiliesFromStorage()

        families.push(family)

        localStorage.setItem("families", JSON.stringify(families))
    }

    static getFamiliesFromStorage() {
        let families

        if (localStorage.getItem("families") === null){
            families = []
        }
        else {
            families = JSON.parse(localStorage.getItem("families")) 
        }

        return families

    }

}