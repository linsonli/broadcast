radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . # . # .
            # # . # .
            # . . . #
            # . . . #
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # # . # #
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
