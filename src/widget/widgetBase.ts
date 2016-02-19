export class widgetBase {
    /**
     * An element to use when a widget instance is constructed without providing an element. 
     * For example, since the progressbar's defaultElement is "<div>", $.ui.progressbar({ value: 50 }) instantiates a progressbar widget instance on a newly created <div>.
     */
    public defaultElement : HTMLElement;
    
    /**
     * A jQuery object containing the document that the widget's element is within. Useful if you need to interact with widgets within iframes
     */
    public document : JQuery;
    
    /**
     * A jQuery object containing the element used to instantiate the widget. 
     * If you select multiple elements and call .myWidget(), a separate widget instance will be created for each element. Therefore, this property will always contain one element.
     */
    public element : JQuery;
    
    /**
     * The location on the global jQuery object that the widget's prototype is stored on. For example a namespace of "ui" indicates that the widget's prototype is stored on $.ui.
     */
    public namespace : string;
    
    /**
     * A unique integer identifier for the widget.
     */
    public uuid : any;
    
    /**
     * The string version of the widget. For jQuery UI widgets this will be set to the version of jQuery UI the widget is using. 
     * Widget developers have to set this property in their prototype explicitly.
     */
    public version : any;
    
    /**
     * The prefix prepended to the name of events fired from this widget. 
     * For example the widgetEventPrefix of the draggable widget is "drag", therefore when a draggable is created, the name of the event fired is "dragcreate". 
     * By default the widgetEventPrefix of a widget is its name. 
     * Note: This property is deprecated and will be removed in a later release. Event names will be changed to widgetName:eventName (e.g. "draggable:create").
     */
    public widgetEventPrefix : string;
    
    /**
     * The full name of the widget including the namespace. For $.widget( "myNamespace.myWidget", {} ), widgetFullName will be "myNamespace-myWidget".
     */
    public widgetFullName : string;
    
    /**
     * The name of the widget. For  $.widget( "myNamespace.myWidget", {} ), widgetName will be "myWidget".
     */
    public widgetName : string;
    
    /**
     * A jQuery object containing the window that the widget's element is within. Useful if you need to interact with widgets within iframes.
     */
    public window : JQuery;
    
    public options : any;
    
    // _create();
    
    // _init();
    
    // option(optionName:string, value?:any):any;
}