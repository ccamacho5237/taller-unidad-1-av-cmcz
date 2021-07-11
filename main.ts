let conductividad = 0
let proporcionalidad1 = 0
let proporcionalidad3 = 0
let proporcionalidad2 = 0
input.onButtonPressed(Button.A, function () {
    conductividad = pins.analogReadPin(AnalogPin.P0)
    proporcionalidad1 = pins.map(
    conductividad,
    0,
    1023,
    0,
    100
    )
    if (proporcionalidad1 >= 0 && proporcionalidad1 <= 20) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.unplot(0, 3)
        led.plot(0, 4)
    } else if (proporcionalidad1 >= 21 && proporcionalidad1 <= 40) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
    } else if (proporcionalidad1 >= 41 && proporcionalidad1 <= 60) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
    } else if (proporcionalidad1 >= 61 && proporcionalidad1 <= 80) {
        led.unplot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
    } else {
        led.plot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    conductividad = pins.analogReadPin(AnalogPin.P2)
    proporcionalidad3 = pins.map(
    conductividad,
    0,
    1023,
    0,
    100
    )
    if (proporcionalidad3 >= 0 && proporcionalidad3 <= 20) {
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.unplot(4, 2)
        led.unplot(4, 3)
        led.plot(4, 4)
    } else if (proporcionalidad3 >= 21 && proporcionalidad3 <= 40) {
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.unplot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    } else if (proporcionalidad3 >= 41 && proporcionalidad3 == 60) {
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    } else if (proporcionalidad3 >= 61 && proporcionalidad3 == 80) {
        led.unplot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    } else {
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    conductividad = pins.analogReadPin(AnalogPin.P1)
    proporcionalidad2 = pins.map(
    conductividad,
    0,
    1023,
    0,
    100
    )
    if (proporcionalidad2 >= 0 && proporcionalidad2 <= 20) {
        led.unplot(2, 0)
        led.unplot(2, 1)
        led.unplot(2, 2)
        led.unplot(2, 3)
        led.plot(2, 4)
    } else if (proporcionalidad2 >= 21 && proporcionalidad2 <= 40) {
        led.unplot(2, 0)
        led.unplot(2, 1)
        led.unplot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
    } else if (proporcionalidad2 >= 41 && proporcionalidad2 == 60) {
        led.unplot(2, 0)
        led.unplot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
    } else if (proporcionalidad2 >= 61 && proporcionalidad2 == 80) {
        led.unplot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
    } else {
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
    }
})
