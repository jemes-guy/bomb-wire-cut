let button_to_press = randint(0, 2)
let timer = 0
basic.showString("" + (timer))
control.waitMicros(100000)
timer = 9
for (let index = 0; index < 9; index++) {
    if (button_to_press == 0) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("You stopped the bomb! You can leave.                                ")
        }
    } else if (button_to_press == 1) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("You stopped the bomb! You can leave.                                ")
        }
    } else if (button_to_press == 2) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.showString("You stopped the bomb! You can leave.                                ")
        }
    } else if (button_to_press == 0 && (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB))) {
        basic.showString("Boom! It Exploded!                                            ")
    } else if (button_to_press == 1 && (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.AB))) {
        basic.showString("Boom! It Exploded!                                            ")
    } else if (button_to_press == 2 && (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.showString("Boom! It Exploded!                                            ")
    }
    basic.showString("" + (timer))
    timer += -1
    control.waitMicros(100000)
}
