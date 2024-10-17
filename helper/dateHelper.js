const { DateTime } = require('luxon');

class DateGenerator { 
     
    static generateStartDate() { 
        return DateTime.now().setZone('America/Denver').toFormat('MM/dd/yyyy');
    }

    static generateEndDate() { 
        return DateTime.now().setZone('America/Denver').plus({ days: 2 }).toFormat('MM/dd/yyyy');
    }
}

module.exports = DateGenerator;
