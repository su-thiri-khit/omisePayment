import Omise from 'omise-react-native';

const PUBLIC_KEY = 'pkey_test_5rrcize7zvkrk3nvj6b'
const SECRET_KEY = 'skey_test_5rrcizzz5sxtu1vqad0'

Omise.config(PUBLIC_KEY, SECRET_KEY);

export const createToken = async() => {
    const data = await Omise.createToken({
        card: {
            name: 'Khit',
            city: 'Bangkok',
            postal_code: 10120,
            number: '4242424242424242',
            expiration_month: 10,
            expiration_year: 2025,
            security_code: 123
        }
    })
    console.log('data', JSON.stringify(data))
}

export const retrieveCustomer = async() => {
    const data = await Omise.retrieveCustomer('Khit')
    console.log('Customer', JSON.stringify(data))
}