import { useEffect, useState } from 'react'
const isFalsy = (value: any) => value === 0 ? false : !value

export const cleanObj = (obj: any) => {
    const result = { ...obj }
    Object.keys(obj).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}

export const useMount = (callback: Function) => {
    useEffect(() => {
        callback()
    }, [])
}
export const useDebounce = (value: any, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay);
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}