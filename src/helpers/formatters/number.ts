const formatToInt = (value: string) => {
    return value != "" ? parseInt(value.toString().replace(/\D/g, '')) : 0;
}

const formatToStringNumber = (value: string) => {
    return value != "" ? value.toString().replace(/\D/g, '') : 0;
}

export { formatToInt, formatToStringNumber }