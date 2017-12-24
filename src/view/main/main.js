import Datagrid from '../../component/datagrid/datagrid'
import template from './main.html'
import {$root, router} from '../../config/route'

router.route('main', 'main', function() {
    $root.html(template);
    // 挂载模板
    var view = new Datagrid({
        el: $('#datagrid')
    });
    view.render();
});