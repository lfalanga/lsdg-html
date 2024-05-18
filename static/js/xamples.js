let btn_menu = document.querySelector('#btn_menu');

btn_menu.addEventListener('click', function() {
    alert('click btn_menu');
});

const searching = function() {
    
    let message = "Buscando en el sistema...";
    let sidebar = document.querySelector("#sidebar_container");
    let query = null;

    if (sidebar.classList.contains('active')) {
        query = document.querySelector("#search");
        console.log('Menu desplegado:', query.value);
        alertify.success('Resultados: ' + query.value);
    } else {
        // Get the closable setting value.
        let closable = alertify.prompt().setting('closable');
        
        let notification = alertify.prompt('Modal: true').set('modal', true).setting({
            'label':'Agree',
            'message': 'Ingrese la receta deseada: ',
            'onok': function(evt, value) {
                query = value;
                alertify.success('Resultados: ' + query, 120);
                console.log('Menu colapsado', query);
            }
        });
        
        
        /*
        alertify.prompt('Modal: true').set('modal', true).setting({
            'label':'Agree',
            'message': 'Ingrese la receta deseada: ',
            'onok': alertify_test()
        });
        */

        //success.addClass('alertify-test');
        
    }

    //alertify.success('Resultados: Lorem ipsum...').set('resizable',true).resizeTo('100%',250);
    /*
    alertify.alert('The call back will be invoked when this dialog is about to resize.')
         .set({
             resizable:true,
         }).resizeTo('100%',250);;
    */
}


function factory() {
    let message = "Alertify Factory!";
    console.log(message);
    return {
         // The dialog startup function
         // This will be called each time the dialog is invoked
         // For example: alertify.myDialog( data );
         main:function(params){
                 // manipulate parameters and set options
                 this.setting('myProp', data);
         },
         // The dialog setup function
         // This should return the dialog setup object ( buttons, focus and options overrides ).
         setup:function(){
             return {
                    /* buttons collection */
                    buttons:[
                    
                        /*button defintion*/
                        {
                             /* button label */
                            text: 'OK',
                            
                            /*bind a keyboard key to the button */
                            key: 27, 
                            
                            /* indicate if closing the dialog should trigger this button action */
                            invokeOnClose: true, 
                            
                            /* custom button class name  */
                            //className: alertify.defaults.theme.ok,
                            className: 'alertify-test',
                            
                            /* custom button attributes  */
                            attrs:{attribute:'value'},
                            
                            /* Defines the button scope, either primary (default) or auxiliary */
                            scope:'auxiliary',
                            
                            /* The will conatin the button DOMElement once buttons are created */
                            element:undefined
                        }
                    ],
                    
                    /* default focus */
                    focus:{                    
                        /* the element to receive default focus, has differnt meaning based on value type:
                            number:     action button index.
                            string:     querySelector to select from dialog body contents.
                            function:   when invoked, should return the focus element.
                            DOMElement: the focus element.
                            object:     an object that implements .focus() and .select() functions. 
                        */
                        element: 0,
                        
                        /* indicates if the element should be selected on focus or not*/
                        select: false
                        
                    },
                    /* dialog options, these override the defaults */
                    /*
                    options: {
                        title: ...,
                        modal: ...,
                        basic:...,
                        frameless:...,
                        pinned: ...,
                        movable: ...,
                        moveBounded:...,
                        resizable: ...,
                        autoReset: ...,
                        closable: ...,
                        closableByDimmer: ...,
                        maximizable: ...,
                        startMaximized: ...,
                        pinnable: ...,
                        transition: ...,
                        padding:...,
                        overflow:...,
                        onshow:...,
                        onclose:...,
                        onfocus:...,
                        onmove:...,
                        onmoved:...,
                        onresize:...,
                        onresized:...,
                        onmaximize:...,
                        onmaximized:...,
                        onrestore:...,
                        onrestored:...
                    }
                    */
                };
         },
         // This will be called once the dialog DOM has been created, just before its added to the document.
         // Its invoked only once.
         build:function(){

            // Do custom DOM manipulation here, accessible via this.elements
            
            // this.elements.root           ==> Root div 
            // this.elements.dimmer         ==> Modal dimmer div
            // this.elements.modal          ==> Modal div (dialog wrapper)
            // this.elements.dialog         ==> Dialog div
            // this.elements.reset          ==> Array containing the tab reset anchor links
            // this.elements.reset[0]       ==> First reset element (button).
            // this.elements.reset[1]       ==> Second reset element (button).
            // this.elements.header         ==> Dialog header div
            // this.elements.body           ==> Dialog body div
            // this.elements.content        ==> Dialog body content div
            // this.elements.footer         ==> Dialog footer div
            // this.elements.resizeHandle   ==> Dialog resize handle div            
            
            // Dialog commands (Pin/Maximize/Close)
            // this.elements.commands           ==> Object containing  dialog command buttons references
            // this.elements.commands.container ==> Root commands div
            // this.elements.commands.pin       ==> Pin command button
            // this.elements.commands.maximize  ==> Maximize command button
            // this.elements.commands.close     ==> Close command button
            
            // Dialog action buttons (Ok, cancel ... etc)
            // this.elements.buttons                ==>  Object containing  dialog action buttons references
            // this.elements.buttons.primary        ==>  Primary buttons div
            // this.elements.buttons.auxiliary      ==>  Auxiliary buttons div
            
            // Each created button will be saved with the button definition inside buttons collection
            // this.__internal.buttons[x].element
            
         },
         // This will be called each time the dialog is shown
         prepare:function(){
             // Do stuff that should be done every time the dialog is shown.
         },
         // This will be called each time an action button is clicked.
         callback:function(closeEvent){
            //The closeEvent has the following properties
            //
            // index: The index of the button triggering the event.
            // button: The button definition object.
            // cancel: When set true, prevent the dialog from closing.
         },
         // To make use of AlertifyJS settings API, group your custom settings into a settings object.
         settings:{
                 class:'alertify-test'
         },
         // AlertifyJS will invoke this each time a settings value gets updated.
         settingUpdated:function(key, oldValue, newValue){
                 // Use this to respond to specific setting updates.
                 switch(key){
                    case 'myProp':
                        // Do something when 'myProp' changes
                        break;
                }
         },
         // listen to internal dialog events.
         hooks:{
            // triggered when the dialog is shown, this is seperate from user defined onshow
            onshow: function(){
            },
            // triggered when the dialog is closed, this is seperate from user defined onclose
            onclose: function(){
            },
            // triggered when a dialog option gets updated.
            // IMPORTANT: This will not be triggered for dialog custom settings updates ( use settingUpdated instead).
            onupdate: function(){
            }
         }
    }
}
