//selectors
const container = $("#container")
const inputBtn = $("#inputBtn")
const todoCont = $(".todo-container")


//create new li item
inputBtn.click(function () {

    const inputVal = $("#inputVal").val()
    console.log(inputVal)

    if (inputVal) {
       newId++
        $("#list").append(`<li id="${newId}" class=item>${inputVal}<i id="delete-${newId}" class="far fa-trash-alt"></i><i id="check-${newId}" class="fas fa-check"></i></li>`)
    } else { alert("Add a todo") }
    
    const inputItem = $(".inputItem")
    inputItem.val('').empty()

    const deleteBtn = $(".far")
    const markBtn = $(".fas")
 

    // delete item
    deleteBtn.click(function (e) {
       const item = $(`#${e.target.id.split("-")[1]}`) 
       console.log(e.target.id)
        $(item).remove()
    })

    //mark item
    markBtn.click(function (e) {
        const check = $(`#${e.target.id.split("-")[1]}`)
        console.log(e.target.id)
        check.css("background-color", "rgb(86 85 85 / 51%)") 
    })
})

let newId = 01













