let addEventButton = document.getElementById( "add-btn" );
let backdrop = document.getElementById( "backdrop" );
let modal = document.getElementById( "modal1" );
let form = document.getElementById( "form1" );
let formAddBtn = document.getElementById( "formAddBtn" );
let formCancelBtn = document.getElementById( "formCancelBtn" );
let calendarEl = document.getElementById('calendar');
let calendar = null ;


eventData = [
    {
        title: 'Fuck Harshal',
        start: '2020-08-10',
        address: '69 road Harda India'
    }
]
calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'today',
        center: 'prev title next',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: eventData
    
  });

calendar.render();


function AddTodo(todo,date,address) {
    let event = {
        title: todo,
        start: date,
        address: address
    }
    eventData.push(event);
    console.log(eventData)
    calendar.addEvent(event);
    calendar.render();

}

function renderEvents() {

}

$(addEventButton).click(() => {
    $(backdrop).addClass("backdrop");
    $(modal).addClass("modal1");
    $(backdrop).removeClass("backdrop-rmv");
    $(modal).removeClass("modal-rmv")
})

$(backdrop).click(() => {
    $(backdrop).removeClass("backdrop");
    $(modal).removeClass("modal1");
    $(backdrop).addClass("backdrop-rmv");
    $(modal).addClass("modal-rmv")
    $("#inputDate").val("");
    $("#inputEvent").val("");
    $("inputAddress").val("");
})

$(form).click(event => {
    event.preventDefault()
})

$(formCancelBtn).click(() => {
    $(backdrop).removeClass("backdrop");
    $(modal).removeClass("modal1");
    $(backdrop).addClass("backdrop-rmv");
    $(modal).addClass("modal-rmv");
    $("#inputDate").val("");
    $("#inputEvent").val("");
    $("inputAddress").val("");
})


$(formAddBtn).click(() => {
    let todo = $("#inputEvent").val();
    let date = $("#inputDate").val();
    let address = $("inputAddress").val();
    console.log(todo,date,address);
    AddTodo(todo,date,address);
    $(backdrop).removeClass("backdrop");
    $(modal).removeClass("modal1");
    $(backdrop).addClass("backdrop-rmv");
    $(modal).addClass("modal-rmv");
    $("#inputDate").val("");
    $("#inputEvent").val("");
    $("inputAddress").val("");

})

