let response = 0
input.onButtonPressed(Button.A, function () {
    response = randint(1, 3)
    if (response == 1) {
        basic.showString("You will win the £100")
    } else if (response == 2) {
        basic.showString("It is possible")
    } else {
        basic.showString("It is very unlikely")
    }
})
