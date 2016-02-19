import { widgetBase } from './widgetBase.ts';

export class Widget extends widgetBase {
    
    public options : WidgetOptions;
    
    _init(){
        console.log('widget init');
        debugger;
    }
    
    _create(){
        console.log('widget start');
    }
}

export interface WidgetOptions {
    disabled?: boolean;
    create?: any;
    color?: string;
    height?: number;
}