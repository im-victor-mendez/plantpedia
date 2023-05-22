const types = Object.freeze([
    'large',
    'medium',
    'short',
    'horizontal large',
    'horizontal medium',
    'horizontal short',
])

const defaultTypes = Object.freeze(types.slice(0, 2))
const horizontalTypes = Object.freeze(types.slice(3))

export function getRandomCard() {
    const number = Math.random()
    const index = Math.floor(number * types.length)
    const randomType = types[index]
    
    return randomType
}

export function getRandomCardByArraySection(array) {
    const number = Math.random()
    const index = Math.floor(number * array.length)
    const randomType = array[index]

    return randomType
}

export function getRandomDefaultCard() {
    const number = Math.random()
    const index = Math.floor(number * defaultTypes.length)
    const randomType = defaultTypes[index]
    
    return randomType
}

export function getRandomHorizontalCard() {
    const number = Math.random()
    const index = Math.floor(number * horizontalTypes.length)
    const randomType = horizontalTypes[index]
    
    return randomType
}

export function getRandomCardByTextLength(text) {
    let array = types.slice(), type
    
    if (text.length < 12) array = array.slice(0, 2)
    else array = array.slice(3)

    type = getRandomCardByArraySection(array)

    return type
}