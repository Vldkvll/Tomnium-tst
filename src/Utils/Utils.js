export default {
    formatCurrency: function (num) {
        return `${Number(num.toFixed(4).toLocaleString())} `
    }
}