const moment = require('moment');
const { ltv, eras } = require('../models/ltv');


module.exports.getList = () => new Promise(async (resolve, reject) => {
    let allEps = [];
    for (const era in eras) {
        let eraEps = await ltv[eras[era]].find();
        allEps = [...allEps, ...eraEps]
    }
    resolve(allEps);
})

module.exports.filterYear = (year, epList) => new Promise( async (resolve, reject) => {
    if(!isNaN(year)) {
        epList = epList.filter(ep => (
            moment(ep.date).utc().format('Y') == year
        ))
        resolve(epList);
    } else reject("Invalid Year!");
})

module.exports.filterMonth = (month, epList) => new Promise( async (resolve, reject) => {
    let monthList = ['jan', 'january', 'feb', 'february', 'mar', 'march', 'apr', 'april', 'may', 'jun', 'june', 'jul', 'july', 'aug', 'august', 'sept', 'september', 'oct', 'october', 'nov', 'november', 'dec', 'december'];

    let tmpMonth
    if (isNaN(parseInt(month)) && monthList.includes(month.toLowerCase())) {
        tmpMonth = month.toLowerCase();
        epList = epList.filter(ep => (
            moment(ep.date).utc().format('MMM').toLowerCase().includes(tmpMonth) ||
            moment(ep.date).utc().format('MMMM').toLowerCase().includes(tmpMonth)
        ))
        resolve(epList);
    } else if (!isNaN(parseInt(month)) && month >= 1 && month <= 12 ) {
        tmpMonth = parseInt(month);
        epList = epList.filter(ep => (
            moment(ep.date).utc().format('M') == tmpMonth ||
            moment(ep.date).utc().format('MM') == tmpMonth
        ))
        resolve(epList);
    } else reject("Invalid Month!");
})

module.exports.filterDate = (date, epList) => new Promise( async (resolve, reject) => {
    if (!isNaN(parseInt(date)) && date >= 1 && date <= 31) {
        epList = epList.filter(ep => (
            moment(ep.date).utc().format('D') == date ||
            moment(ep.date).utc().format('DD') == date
        ))
        resolve(epList);
    } else reject("Invalid Date!");
})

