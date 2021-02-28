input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        if (randint(0, 100) == randint(0, 100)) {
            if (randint(0, 5) > randint(0, 5)) {
                Gambling_machine += 3
            }
        } else if (randint(0, 97) > randint(0, 100)) {
            Gambling_machine += 1
        } else {
            Gambling_machine += -1
        }
    }
    basic.showString("" + (Gambling_machine))
})
input.onButtonPressed(Button.AB, function () {
    Powerball += randint(1, 40)
    basic.showString("" + (Powerball))
    basic.pause(1000)
    Powerball = 0
    Powerball += randint(1, 40)
    basic.showString("" + (Powerball))
    basic.pause(1000)
    Powerball = 0
    Powerball += randint(1, 40)
    basic.showString("" + (Powerball))
    basic.pause(1000)
    Powerball = 0
    Powerball += randint(1, 40)
    basic.showString("" + (Powerball))
    basic.pause(1000)
    Powerball = 0
    Powerball += randint(1, 40)
    basic.showString("" + (Powerball))
    basic.pause(1000)
    Powerball = 0
    Powerball += randint(1, 40)
    basic.showString("" + (Powerball))
    basic.pause(2000)
    Powerball = 0
    Powerball += randint(1, 9)
    basic.showString("" + (Powerball))
})
input.onButtonPressed(Button.B, function () {
    Gambling_machine = 0
    Powerball = 0
    basic.showString("" + (Gambling_machine))
})
let Powerball = 0
let Gambling_machine = 0
for (let index = 0; index < 8; index++) {
    led.plot(1, 2)
    led.plot(2, 1)
    led.plot(2, 2)
    led.plot(3, 2)
    led.plot(2, 3)
    basic.pause(100)
    led.unplot(2, 3)
    led.unplot(1, 2)
    led.unplot(2, 1)
    led.unplot(2, 2)
    led.unplot(3, 2)
    basic.pause(100)
}
basic.forever(function () {
	
})
