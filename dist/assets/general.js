var protocol = 'https://'
var domain = 'api.fahmifa.my.id/'


var rolesuser = localStorage.getItem('role');
if (rolesuser == 'admin') {
    var source = protocol + domain + 'admin/';
} else if (rolesuser == 'agent') {
    var source = protocol + domain + 'agent/';
} else {
    var source = protocol + domain;
}

// var token = 'Bearer ' + localStorage.getItem('api_token')
var token = localStorage.getItem('api_token')