import {detailview} from '../../lib/easyui'
import {apiBase, method} from '../../config/config'

var Datagrid = Backbone.View.extend({
    render: function() {
        this.$el.html(require('./datagrid.html'));

        var $dg = $('#dg');
        
        $dg.datagrid({
            view: detailview,
            url: apiBase + method.example,
            detailFormatter:function(){
                return '<div class="ddv" style="padding:5px 0"></div>';
            },
            onExpandRow: function(index,row){
                var ddv = $(this).datagrid('getRowDetail',index).find('div.ddv');
                ddv.panel({
                    border:false,
                    cache:false,
                    href: apiBase + $scope.url + '?itemid='+row.itemid,
                    onLoad:function(){
                        $dg.datagrid('fixDetailRowHeight',index);
                    }
                });
                $dg.datagrid('fixDetailRowHeight',index);
            }
        });
        return this;
    }
});

export default Datagrid;