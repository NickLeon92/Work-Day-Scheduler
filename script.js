//declare variables for the main container, and time display element 
var container = $('#container')
var timeEl = $('#currentDay')
//this initializes the data array to index the information saved in the timeblocks independently
var textarray = ["","","","","","","","",""];
timeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))

setInterval(timer,1000)

function timer(){
    
    timeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
render()
//this funtion generates all of the timeblock elements through a main for loop
function render(){
    for(let i=0; i<9; i++){
        //this if statment checks to see if there is already a stored data array
        var storedtextarry = JSON.parse(localStorage.getItem("data"))
        if(storedtextarry !== null){
            //if there is then the data array is set as equal to the stored one
            textarray = storedtextarry
        }
        //creates elements for a single block
        var blockContainer = $('<div>')
        var blocklTitle = $('<h1>')
        var blockText = $('<textarea>')
        var blockButton = $('<button>')
        //assign classes and id's
        blockContainer.attr('id', 'hourblock')
        blockContainer.addClass('blockcontainer')
        blocklTitle.attr('id', 'test')
        blockText.addClass('form-control')
        blockText.attr('id', 'exampleFormControlTextarea1')
        blockText.attr('rows', '3')
        //this line assigns the text value as the corresponding entry in the data array
        blockText.text(textarray[i])
        blockButton.attr('id','savebutton')
        blockButton.addClass('btn btn-primary mb-3')
        blockButton.text('save')
        //numbering corrector
        if(i==3){
            blocklTitle.text("12  PM")
        }
        else if(i>3){
            blocklTitle.text(i-3 + " PM")
        }
        else{
            blocklTitle.text(i+9 + " AM")
        }
        
        blockContainer.append(blocklTitle)
        blockContainer.append(blockText)
        blockContainer.append(blockButton)
        container.append(blockContainer)
    }
}


let n = 1;
let elementCall = "div:nth-child(" + n + ")"
let track1 = 0
let track2 = 0
let compare = track1 + track2

color()
setInterval(color, 1000)

function color(){
    
    for (n = 1; n < 10; n++) {
        timeRef = moment().format()
        track1 = timeRef.charAt(11)
        track2 = timeRef.charAt(12)
        compare = track1 + track2
        console.log(compare)
        elementCall = "div:nth-child(" + n + ")"
        
        if (n+8 < compare) {
            
            $(elementCall).css("background-color", "#d3d3d3")
            $(elementCall).children("textarea").css("background-color", "#d3d3d3")
            container.css("background-color", "white")
        }

        else if (n+8 == compare) {
            
            $(elementCall).css("background-color", "#ff6961")
            $(elementCall).children("textarea").css("background-color", "#ff6961")
            container.css("background-color", "white")
        }


        else if (n+8 > compare) {
            $(elementCall).css("background-color", "#77dd77")
            $(elementCall).children("textarea").css("background-color", "#77dd77")
            container.css("background-color", "white")
        }
        
    }
}

var button = $('button')
var content = $('#exampleFormControlTextarea1')
// button.on('click', function () {
    //     console.log("asdfa")
    // });
    
    
button.on("click", function (event) {
    event.preventDefault()
    var test = $(this).siblings('textarea').val();
    var blocknum = $(this).parent().index()
    console.log(test)
    console.log(blocknum)

    textarray.splice(blocknum, 1, test)
    console.log(textarray)
    
    localStorage.setItem("data",JSON.stringify(textarray))

})

    // var set = localStorage.getItem("data")