import {get} from '../../service/httpService'
import {apiBase, method} from '../../config/config'
import listRender from './list.art'

import {$root, router} from '../../config/route'
import template from './login.html'

router.route('login/:id', 'login', function(id) {
    $root.html(template);
    
    $('#param').html(id);
    get(apiBase + method.example).then((res) => {
        var response = JSON.parse(res);
        console.log(response)
        var html = listRender({list: response.rows});
        $('#list').html(html)
    })
});
