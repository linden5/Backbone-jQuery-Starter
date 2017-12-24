var basicSetting = {
    dataType: 'json',
    method: 'get'
};

function ajax(setting) {
    var param = _.extend(basicSetting, setting);
    return $.ajax(param);
}

function get(url) {
    var param = {
        url: url,
        method: 'get'
    };
    return $.ajax(param);
}

function post(url) {
    var param = {
        url: url,
        method: 'post'
    };
    return $.ajax(param);
}

export default ajax
export {get, post}