/**
 * ESP32 BLE UART Extension for micro:bit
 */

//% color=#0fbc11 icon="\uf2db" block="ESP32 BLE"
namespace esp32ble {

    let lastMessage = ""

    /**
     * Initialize Bluetooth UART service
     */
    //% block="ESP32 BLE init"
    export function init(): void {
        bluetooth.startUartService()
    }

    /**
     * Read message from ESP32 (expects newline \\n)
     */
    //% block="ESP32 read message"
    export function readMessage(): string {
        lastMessage = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        return lastMessage
    }

    /**
     * Check if last message contains given text
     */
    //% block="ESP32 message contains %text"
    export function messageContains(text: string): boolean {
        return lastMessage.indexOf(text) >= 0
    }

    /**
     * Get last received message
     */
    //% block="ESP32 last message"
    export function last(): string {
        return lastMessage
    }
}
