document.addEventListener("DOMContentLoaded", function() {

    // ### JS Performance ###########################
    const start_time = performance.now();

    let sidebar             = document.querySelector("#sidebar_container");
    let btn_menu            = document.querySelector("#btn_menu");
    let btn_header_menu     = document.querySelector("#btn_header_menu");
    let btn_search          = document.querySelector("#btn_search");
    let input_search        = document.querySelector("#search");

    // ### Removing onhover display text behaviour #########
    const html_a_elements   = document.getElementsByClassName("no-link");
    const arr_anchors       = Array.prototype.filter.call(
        html_a_elements,
        (element) => element.nodeName === "A",
    );
    arr_anchors.forEach((anchor) => {
        anchor.removeAttribute('href');
        anchor.removeAttribute('title');
    });

    // ### Expand menu button ###########################
    btn_menu.onclick = function() {
        sidebar.classList.toggle("active");
    }

    // ### Expand menu button (header) ###########################
    btn_header_menu.onclick = function() {
        sidebar.classList.toggle("active");
    }

    // ### Search button ###########################
    btn_search.onclick = function() {
        search();
    }

    // ### Input search behaviour ###########################
    input_search.onclick = function() {
        input_search.value = '';
    };

    // ### JS Performance ###########################
    const duration = performance.now() - start_time;
    console.log(`nav.js: DOMContentLoaded took ${duration}ms`);
});

const search = function() {
    
    let sidebar     = document.querySelector("#sidebar_container");
    let query       = null;
    let message     = null;

    if (sidebar.classList.contains('active')) {
        // ### Menu Desplegado #########
        query = document.querySelector("#search");
        search_results(query.value);
    } else {
        // ### Menu Colapsado #########
        /*
        alertify.prompt('Búsqueda').set('modal', true).setting({
            'labels': {ok:'Buscar', cancel:'Cancelar'},
            'title': 'Búsqueda',
            'message': 'Ingrese la receta deseada: ',
            'onok': function(evt, value) {
                query   = value;
                message = "Buscando en el sistema...";
                alertify.notify(message, 'custom', 3, function() {
                    message = "Resultados: " + query;
                    alertify.notify(message, 'search-results', 5, function() {
                        console.log('Displaying search results...'); 
                    });
                });
            }
        });
        */

        alertify.prompt('Búsqueda').set('modal', true).setting({
            'labels': {ok:'Buscar', cancel:'Cancelar'},
            'title': 'Búsqueda',
            'message': 'Ingrese la receta deseada: ',
            'onok': function(evt, value) { search_results(evt, value) }
        });
        
    }
}

const search_results = function(evt, query) {

    if (query != '') {
        let message = "Buscando en el sistema...";

        alertify.notify(message, 'custom', 3, function() {
            message = "Resultados: " + query.value;
            alertify.notify(message, 'search-results', 5, function() {  
                console.log('Displaying search results...'); 
            });
        });
    }

}

const profile = function() {
    let message = "Perfil del usuario...";
    alertify.notify(message, 'custom', 3, function() {
        message = "Opciones personales.";
        console.log(message);
        alertify.success(message);
    });
}

const messaging = function() {
    let message = "Mensajes del sistema...";
    alertify.notify(message, 'custom', 3, function() {
        message = "Desplegando mensajes.";
        console.log(message);
        alertify.success(message);
    });
}

const shopping_list = function() {
    let message = "Listado de compras...";
    alertify.notify(message, 'custom', 3, function() {
        message = "Desplegando listado.";
        console.log(message);
        alertify.success(message);
    });
}

const settings = function() {
    let message = "Opciones de la aplicación...";
    alertify.notify(message, 'custom', 3, function() {
        message = "Opciones generales.";
        console.log(message);
        alertify.success(message);
    });
}

const logout = function() {
    let message = "Saliendo del sistema...";
    alertify.notify(message, 'custom', 3, function(){
        message = "Muchas gracias.";
        console.log(message);
        alertify.success(message);
    });
}

