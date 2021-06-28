var container = $('#container')
var timeEl = $('#currentDay')
// var timeRef = moment().format()
timeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))

setInterval(timer,1000)

function timer(){
    
    timeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
render()

function render(){
for(let i=0; i<9; i++){
    var timeRef = moment().format()
    // console.log(timeRef)
    var track1 = timeRef.charAt(17)
    var track2 = timeRef.charAt(18)
    // console.log(track1 + track2)
    var compare = track1 + track2
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
    blockButton.addClass('btn btn-primary mb-3')
    blockButton.text('save')

    check()
    setInterval(check,1000)

    function check(){

    // if ((i+1)*10<compare){
    //     blockContainer.css("background-color","yellow")
        
    // }
    // else{
    //     blockContainer.css("background-color","white")
      
    // }
}

    if(i>3){
        blocklTitle.text(i-3 + " AM")
    }
    else{
    blocklTitle.text(i+9 + " AM")
    }

    // console.log('asdf')

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
// setInterval(color, 1000)
function color(){
    // console.log('TEST')
for (n = 1; n < 10; n++) {
    timeRef = moment().format()
    // console.log(timeRef)
    track1 = timeRef.charAt(17)
    track2 = timeRef.charAt(18)
    // console.log(track1 + track2)
    compare = track1 + track2
    console.log(compare)
    elementCall = "div:nth-child(" + n + ")"
    console.log(elementCall)
    console.log(compare)

    console.log(n*10)
    if (n * 10 < compare) {
        console.log("true")
        $(elementCall).css("background-color", "yellow")
        container.css("background-color", "white")
    }
    else {
        $(elementCall).css("background-color", "white")
        container.css("background-color", "white")
    }
    
}
}
