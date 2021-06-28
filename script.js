var container = $('#container')
var timeEl = $('#currentDay')
// var timeRef = moment().format()
timeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))

setInterval(timer,1000)

function timer(){
    var timeRef = moment().format()
    console.log(timeRef)
    var track1 = timeRef.charAt(17)
    var track2 = timeRef.charAt(18)
    console.log(track1 + track2)
    timeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}


for(let i=0; i<9; i++){
    var blockContainer = $('<div>')
    var blocklTitle = $('<h1>')
    var blockText = $('<textarea>')
    var blockButton = $('<button>')

    blockContainer.attr('id', 'hourblock')
    blockContainer.addClass('container')
    blocklTitle.attr('id', 'test')
    blockText.addClass('form-control')
    blockText.attr('id', 'exampleFormControlTextarea1')
    blockText.attr('rows', '3')
    blockButton.addClass('btn btn-primary mb-3')
    blockButton.text('save')

    if(i>3){
        blocklTitle.text(i-3 + " AM")
    }
    else{
    blocklTitle.text(i+9 + " AM")
    }

    console.log('asdf')

    blockContainer.append(blocklTitle)
    blockContainer.append(blockText)
    blockContainer.append(blockButton)
    container.append(blockContainer)
}

