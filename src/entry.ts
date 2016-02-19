/// <reference path="typings/all.d.ts" />
require('es6-shim');

window['jQuery'] = require("jquery");
window['$'] = window['jQuery'];
require("jquery-ui");
$

import { Widget, WidgetOptions } from './widget/widget.ts';

import { Plugin, PluginOptions } from './plugin/plugin.ts';

//this doesn't work because my jquery interface does not have my plugin functions
//(function($: JQueryStatic) {

(function($: any) {
    
    $.widget("custom.widgetTest", new Widget());

    $.fn.pluginTest = function(options ?: PluginOptions) {
        return new Plugin(this, options);
    };
    
    $(document).ready(function(){
        $('.widget-test').widgetTest({height:100,color:'#2900FF'});
        $('.plugin-test').pluginTest({height:100,color:'#2900FF'});
    });

})(jQuery);

interface JQuery{
    widgetTest(options ?: WidgetOptions) : any;
    pluginTest(options ?: PluginOptions) : any;
}


