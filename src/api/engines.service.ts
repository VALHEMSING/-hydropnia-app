import { URL_ESP32 } from "../constants/constants"



export const engineServices = {
    handleRoot: async () => {
        await fetch(`${URL_ESP32}/`)
    },
    handleLedOn: async () => {
        await fetch(`${URL_ESP32}/on`)
    },
    handleLedOff: async () => {
        await fetch(`${URL_ESP32}/off`)
    },
    handleSubir: async () => {
        await fetch(`${URL_ESP32}/subir`)
    },
    handleBajar: async () => {
        await fetch(`${URL_ESP32}/bajar`)
    },
    handleBombaOn: async () => {
        await fetch(`${URL_ESP32}/bomba_on`)
    },
    handleBombaOff: async () => {
        await fetch(`${URL_ESP32}/bomba_off`)
    },
    handleSecadorFrio: async () => {
        await fetch(`${URL_ESP32}/secador_frio`,
            {method: 'POST'}
        )
    },
    handleSecadorCalor: async () => {
        await fetch(`${URL_ESP32}/secador_calor`, {
            method: 'POST'
        })
    }
}