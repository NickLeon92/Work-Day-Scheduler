var container = $('#container')
var timeEl = $('#currentDay')
var textarray = ["","","","","","","","",""];
// var timeRef = moment().format()
timeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))

setInterval(timer,1000)

function timer(){
    
    timeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
render()

function render(){
    for(let i=0; i<9; i++){

        var storedtextarry = JSON.parse(localStorage.getItem("data"))
        if(storedtextarry !== null){
            textarray = storedtextarry
        }
        
        var blockContainer = $('<div>')
        var blocklTitle = $('<h1>')
        var blockText = $('<textarea>')
        var blockButton = $('<button>')
        
        blockContainer.attr('id', 'hourblock')
        blockContainer.addClass('blockcontainer')
        blocklTitle.attr('id', 'test')
        blockText.addClass('form-control')
        blockText.attr('id', 'exampleFormControlTextarea1')
        blockText.attr('rows', '3')
        blockText.text(textarray[i])
        blockButton.attr('id','savebutton')
        blockButton.addClass('btn btn-primary mb-3')
        blockButton.text('save')
        
        if(i>3){
            blocklTitle.text(i-3 + " AM")
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
        track1 = timeRef.charAt(17)
        track2 = timeRef.charAt(18)
        compare = track1 + track2
        elementCall = "div:nth-child(" + n + ")"
        
        if (n * 10 <= compare) {
            
            $(elementCall).css("background-color", "yellow")
            container.css("background-color", "white")
        }
        else {
            $(elementCall).css("background-color", "white")
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