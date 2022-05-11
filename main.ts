input.onButtonPressed(Button.A, function () {
    score += 1
    radio.sendNumber(score)
})
input.onButtonPressed(Button.AB, function () {
    score += 0
    radio.sendNumber(score)
})
input.onButtonPressed(Button.B, function () {
    score += -1
    radio.sendNumber(score)
})
let score = 0
radio.setGroup(84)
score = 0
basic.showNumber(score)
