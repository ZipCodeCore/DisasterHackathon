require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || 'Help ZipCode Emergency Site',
    url: META_URL || 'https://help.zipcode.rocks',
    description: META_DESC || 'An emergency information website built by ZipCode Students',
    lang: META_LANG || 'en',
    primaryColor: META_COLOR || '#DB0000',
    email: META_EMAIL || 'helpus@zipcodewilmington.com',
    telephone: META_TELEPHONE || 'tel:+18444272818',
    dateFormat: 'dd LLLL yyyy'
}