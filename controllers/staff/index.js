var db = require('../../db');
var staff = db.users[0].staff;

// Should sort the staff here then provide it sorted?

exports.sorted = function(req, res) {
    staff.sort(function (a,b) {
        if (a.firstName > b.firstName) {
            return 1;
        }
        if (a.firstName < b.firstName) {
            return -1;
        }
        return 0;
    });
}

