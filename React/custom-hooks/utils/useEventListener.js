import { useEffect } from "react"

const useEventListener= (eventName, handler, element=window) => {
    const savedHandler = useRef()

    useEffect(()=>{
        savedHandler.current = handler;
    }, [handler])

    useEffect(()=>{
        const isSupported = element && element.addEventListener;
        if(!isSupported) return;
        const eventListener = (event) => savedHandler.current(event)
        element.addEventListener(eventListener)

        return()=>{
            element.removeEventListener(eventName, eventListener)
        }
    }, [eventName, element])

}