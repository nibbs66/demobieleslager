const MAX_STRING_LENGTH = 10


export const label = (str) => {
    return str
        .toLowerCase()
        .split('_')
        .map(function (word) {
            return word.replace(word[0], word[0].toUpperCase())
        })
        .join(' ')
}
export const truncate = (value, MAX_LENGTH) => {
    let output = value?.toString() ?? ''

    if (output.length > MAX_LENGTH) {
        output = output.substring(0, MAX_LENGTH) + '...'
    }

    return output
}
export const filteredSearch = (data, query) => {

    return     query === ''
        ? data
        : data.filter((item) => {
               item.name.toLowerCase().includes(query.toLowerCase())
        })

}
