
$(document).ready(function() {

    var Today = (moment().format("MMMM D, YYYY"))
    $("#currentDay").text(Today);
}); 
    tasks = [];

    var loadTasks = function(){
        tasks = JSON.parse(localStorage.getItem("tasks"))
        if(!tasks) {
            tasks={};
        } ;
        printTasks(tasks)
    }
    
    var printTasks = function(){
        $.each(tasks, function(list, arr){
    
            var taskP = $("<p>").addClass("description task-item-" + list).text(arr)
    
            $("#task-item-" + list).replaceWith(taskP);
        })
     }
 
//var dateString = moment().format('MMMM Do YYYY, h:mm:ss a');

//$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

function storeTodaysDate() { 
    savedSchedule = JSON.parse(localStorage.getItem(date));

//colorcode blocks
$("p:first").addClass("intro");
};
$('.colorcode').each(function(){
        var time = parseInt($(this).prop('id'));
//past less  currenthour
console.log(time)

    if(time < currentHour) { 

            $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
//present = currenthour
    else if (time===currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
//future greater than  currenthour
    else {
        $(this).addClass("future"); 
        $(this).removeClass("past");
        $(this).removeClass("present");
    };

});

 var tasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
}; 

$(".taskBin").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addclass("form-control")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
})

function colorSchedule() {
    $("input").each(function(){
        var currentHour = $(this).attr("id");
       // var row = 
    })
}




/*  if(val > currentHour && val < currentHour+6){
        if(val > currentHour && val < currentHour+6){
            
            $(this)
        }else if(val < currentHour && val > currentHour-6){
            $(this).addClass("present");
        }else if(val === currentHour){
            $(this).addClass("future");
        }
            //$(this).addClass();
        }
    }); */
  

//var currentHour = moment().format('h')
//console.log('currentHour', currentHour)



//update tasks on click


/*textarea.each(function() {
    textArray.push($(this))

}); */

//checkTime()

/* function checkTime() {
    for (var i = 0; i < timeBlocks.length; i++) {
        if (currentHour < timeBlocks[i]) {
            $(timeBlocks[i]).addClass('future');
        }

        else if (currentHour > timeBlocks[i]) {
            $(timeBlocks[i]).addClass('past');   
        }
        else {
            $(timeBlocks[i]).addClass('present');
        }
    } 

    var setTasks = function() {
        /* add tasks to localStorage 
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();

    } */
