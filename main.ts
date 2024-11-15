radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 254) {
        basic.showIcon(IconNames.Silly)
        babyState = 0
    }
})
input.onButtonPressed(Button.A, function () {
    babyState = 0
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.StickFigure)
    babyState = 0
})
let babyState = 0
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Target)
} else {
    basic.showIcon(IconNames.Yes)
}
esp8266.connectWiFi("YNWA", "liverpool")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
input.setSoundThreshold(SoundThreshold.Loud, 255)
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    if (babyState == 1) {
        esp8266.sendTelegramMessage("7556620551:AAFrgjj9yWPZzzfPE1_8QsfpfTmHvvxcOeM", "-4537034579", "Your Car is baby!")
        basic.showIcon(IconNames.TShirt)
    } else {
        basic.showIcon(IconNames.Rollerskate)
    }
})
