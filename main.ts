let textline = ""
for (let index = 0; index < 10; index++) {
    light.showAnimation(light.rainbowAnimation, 1000)
    textline = "TempC" + convertToText(input.temperature(TemperatureUnit.Celsius)) + "TimeMS" + convertToText(control.millis())
    storage.appendLine("log.txt", textline)
    pause(1000)
}
light.setAll(0x00ff00)
