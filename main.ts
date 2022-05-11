input.onButtonPressed(Button.A, function () {
    scoremaker = 1
    radio.sendNumber(scoremaker)
})
input.onButtonPressed(Button.AB, function () {
    scoremaker = 0
    radio.sendNumber(scoremaker)
})
input.onButtonPressed(Button.B, function () {
    scoremaker = -1
    radio.sendNumber(scoremaker)
})
let scoremaker = 0
radio.setGroup(0)
scoremaker = 0
basic.showNumber(scoremaker)
basic.forever(function () {
	
})
