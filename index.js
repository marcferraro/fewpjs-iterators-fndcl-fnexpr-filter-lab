const findMatching = (drivers, name) => drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => {
        return driver.toLowerCase().startsWith(string.toLowerCase())
    })
}

const matchName= (drivers, name) => {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}