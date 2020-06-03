import axios from 'axios'

const instance = axios.create({
    headers: {
        contentType: 'application/json'
    },
    baseURL: `http://localhost:8000/currency`,


});

export const fetchedCurrencies = async () => {

    try {
        const {data: {valid, timestamp, base, rates}} = await instance.get()
        if(valid==='false') {
           throw new Error("Valid")
        }
        return {valid, timestamp, base, rates}
    } catch (error) {
        if (error.message==="Valid") console.error('Something wrong in the valid')
        else console.error('Something wrong in the fetch data from http://localhost:8000/currency')
    }
}