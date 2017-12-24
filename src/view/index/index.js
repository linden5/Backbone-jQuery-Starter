import './index.scss'

import {$root, router} from '../../config/route'
import template from './index.html'

router.route('index', 'index', function() {
    $root.html(template);
})