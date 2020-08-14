let addEventButton = document.getElementById( "add-btn" );
let backdrop = document.getElementById( "backdrop" );
let modal = document.getElementById( "modal1" );
let form = document.getElementById( "form1" );
let formAddBtn = document.getElementById( "formAddBtn" );
let formCancelBtn = document.getElementById( "formCancelBtn" );
let calendarEl = document.getElementById('calendar');
let calendar = null ;
let eventsDescription = document.getElementsByClassName('event-btn');
let eventaRendered = document.querySelector('.events');


let eventData = [
    {
        title: 'Design Conference',
        start: '2020-08-14',
        address: '56 Davion Mission Suite 158 Sweden'
    },
    {
        title: 'Weekend Festival',
        start: '2020-08-16',
        address: '853 Moore Flats Suite 158 Sweden'
    },
];
console.log(eventData);

monthOf = {
    "01": "January",
    "02": "Feburary",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'today prev,next',
        center: 'title',
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
    // console.log(eventData)
    calendar.addEvent(event);
    calendar.render();
    // console.log(calendar.getEvents());
    RenderEventsAll();

    

    setTimeout(function(){ SelectXButtonAll(); }, 100);

}
function RemoveTodo(todo,date) {
    // let event = eventData.find(event => {
    //     return event.title == todo && event.start ==  date;
    // });
    // let pos = eventData.indexOf(event)
    // eventData.splice(pos, 1);
    var nameList = eventData.map(function(item) { return item.title; })
    var removeIndex = -1 ;
    for (let index = 0; index < nameList.length; index++) {
        if(nameList[index] === todo) removeIndex = index ;
    }
    eventData.splice(removeIndex, 1);
    console.log("loda le le plox",todo);
    calendar.render();
    calendar.getEvents().forEach(event => event.remove());
    for (let index = 0; index < eventData.length; index++) {
        calendar.addEvent(eventData[index]);
    }
    calendar.render();
    setTimeout(function(){ SelectXButtonAll(); }, 100);

    

}

function RenderEventsAll() {
    let renderedContent = eventData.map(event => {
        let dateList = event.start.split("-");
        let dateNew = `${dateList[2]} ${monthOf[dateList[1]]} ${dateList[0]}`
        //console.log(dateList);
        return `
        <div class="event">    
            <div class="img-container">
              <img src="https://source.unsplash.com/random/41x40" alt="">
            </div>
            <div class="text-container">
                <strong class=" event-heading">${event.title}</strong><button id="${event.start} ${event.title}" class="btn event-btn">x</button><br>
              <div class="text-wrapper">
                ${dateNew}<br>
                ${event.address}
              </div>
            </div>
        </div>`
    }).join('');
    document.querySelector('.events').innerHTML = renderedContent;

    // SelectXButtonAll();


}

function SelectXButtonAll()  {
    document.querySelectorAll('.event-btn').forEach(item => {
        console.log(69);
        item.addEventListener('click', function() {
            let string = this.id ;
            let pos = string.indexOf(" ");
            let date = string.substring(0,pos);
            let title = string.substring(pos + 1);
            

            RemoveTodo(title,date);

            // console.log(eventData);
            RenderEventsAll();
            
    
            // let dateList = date.split("-");
            // console.log(monthOf[dateList[1]]);
        }) 
    });
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
    $("#inputAddress").val("");
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
    $("#inputAddress").val("");
})


$(formAddBtn).click(() => {
    let todo = $("#inputEvent").val();
    let date = $("#inputDate").val();
    let address = $("#inputAddress").val();
    // console.log(todo,date,address);
    AddTodo(todo,date,address);
    $(backdrop).removeClass("backdrop");
    $(modal).removeClass("modal1");
    $(backdrop).addClass("backdrop-rmv");
    $(modal).addClass("modal-rmv");
    $("#inputDate").val("");
    $("#inputEvent").val("");
    $("#inputAddress").val("");

})
// console.log(eventsDescription)


setTimeout(function(){ SelectXButtonAll(); }, 100);