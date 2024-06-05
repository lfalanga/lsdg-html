document.addEventListener("DOMContentLoaded", function() {

    // ### JS Performance ###########################
    const start_time = performance.now();

    let sidebar             = document.querySelector("#sidebar_container");
    let header              = document.querySelector("#header_content");
    let header_menu         = document.querySelector("#header_menu");
    let btn_menu            = document.querySelector("#btn_menu");
    let btn_header_menu     = document.querySelector("#btn_header_menu");
    let btn_search          = document.querySelector("#btn_search");
    let input_search        = document.querySelector("#search");
    const width             = window.screen.width * window.devicePixelRatio;
    const height            = window.screen.height * window.devicePixelRatio;

    console.log("screen size:", width + "x" + height);

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
        header.classList.toggle("active");
        header_menu.classList.toggle("active");
    }

    // ### Expand menu button (header) ###########################
    btn_header_menu.onclick = function() {
        sidebar.classList.toggle("active");
        header.classList.toggle("active");
        header_menu.classList.toggle("active");
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

const search_handle_keypress = function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        console.log("Enter key was pressed...");
        search();
    }
  }

const search = function() {
    let sidebar     = document.querySelector("#sidebar_container");
    let query       = null;

    if (sidebar.classList.contains('active')) {
        // ### Menu Desplegado #########
        query = document.querySelector("#search");
        search_results(null, query.value);
    } else {
        // ### Menu Colapsado #########
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
            message = "Resultados: " + query;
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
        alertify.success(message, 300);
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

const menu_down = function() {
    
    // ### Last menu_position #########
    if (menu_position === 3) {
        return false;
    }

    // ### menu_position == 0 #########
    let html_i_elements   = document.getElementsByClassName('menu-position-' + menu_position);
    let arr_i = Array.prototype.filter.call(
        html_i_elements,
        (element) => element.nodeName === "LI",
    );
    arr_i.forEach((li) => {
        li.setAttribute('style', 'display:none !important');
    });
  
    // ### menu_position > 0 #########
    menu_position++;
    html_i_elements   = document.getElementsByClassName('menu-position-' + menu_position);
    arr_i = Array.prototype.filter.call(
        html_i_elements,
        (element) => element.nodeName === "LI",
    );
    arr_i.forEach((li) => {
        li.setAttribute('style', 'display:flex !important; justify-content: space-around;');
    });
    const menu_positioner_up = document.querySelector('.menu-positioner-up');
    menu_positioner_up.setAttribute('style', 'display:flex !important; justify-content: space-around;');

    if (menu_position >= 3) {
        const menu_positioner_down = document.querySelector('.menu-positioner-down');
        menu_positioner_down.setAttribute('style', 'display:none !important');
    }

    return false;
  }
  
  const menu_up = function() {
    
    // ### menu_position == 0 #########
    let html_i_elements   = document.getElementsByClassName('menu-position-' + menu_position);
    let arr_i = Array.prototype.filter.call(
        html_i_elements,
        (element) => element.nodeName === "LI",
    );
    arr_i.forEach((li) => {
        li.setAttribute('style', 'display:none !important');
    });
  
    // ### menu_position > 0 #########
    menu_position--;
    html_i_elements   = document.getElementsByClassName('menu-position-' + menu_position);
    arr_i = Array.prototype.filter.call(
        html_i_elements,
        (element) => element.nodeName === "LI",
    );
    arr_i.forEach((li) => {
        li.setAttribute('style', 'display:flex !important; justify-content: space-around;');
    });

    if (menu_position === 0) {
        const menu_positioner_up = document.querySelector('.menu-positioner-up');
        menu_positioner_up.setAttribute('style', 'display:none !important');
    }

    if (menu_position < 3) {
        const menu_positioner_down = document.querySelector('.menu-positioner-down');
        menu_positioner_down.setAttribute('style', 'display:flex !important; justify-content: space-around;');
    }
  
    return false;
  }
