/**
 * Demo LED Extension
 */

//% color=#ff6600 icon="\uf111" block="Demo Camera"
namespace demoCamera {

    //% block="camera detected circle"
    export function cameraDetectedCircle(): void {
        basic.showIcon(IconNames.Target)
    }

    //% block="camera detected nothing"
    export function cameraDetectedNothing(): void {
        basic.clearScreen()
    }

}
