const formatMoney = (value: string | number) => {
    const _p = value != "" ? parseInt(value.toString().replace(/\D/g, '')) : 0;
    const _f = (_p / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    return _f;
}

const formatToCents = (value: string) => {
    return parseInt(value.toString().replace(/\D/g, ''));
}

export { formatMoney, formatToCents }