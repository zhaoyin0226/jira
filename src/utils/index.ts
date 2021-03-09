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