var country = 'ar';
var menu_position = 0;

document.addEventListener("DOMContentLoaded", function() {

  // ### JS Performance ###########################
  const start_time = performance.now();
  let home_container = document.getElementById('home_content');

  // ### Hide/Show Top button ###########################
  home_container.addEventListener("scroll", (event) => {
    setTimeout(() => {
      let btn_to_top = document.getElementById("to-top");
      btn_to_top.removeAttribute('title');

      if (home_container.scrollTop > 20) {
        btn_to_top.style.display = "block";
      } else {
        btn_to_top.style.display = "none";
      }
    }, 1000);
  });

  // ### TextArea autoresize behaviour ###########################
  const growers = document.querySelectorAll(".grow-wrap");
  growers.forEach((grower) => {
    const textarea = grower.querySelector("textarea");
    textarea.addEventListener("input", () => {
      grower.dataset.replicatedValue = textarea.value;
    });
  });

  // ### Slidr ###########################
  let s_all = slidr.create('slidr_recipes_all_img', {
      after: function(e) { console.log('in: ' + e.in.slidr); },
      breadcrumbs: true,
      overflow: true,
      opacity: 0.3
    }).add('h', ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']).start();
  
  let s_15min = slidr.create('slidr_recipes_15min_img', {
    breadcrumbs: true,
    overflow: true
  }).add('h', ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']).start();
  
  let s_30min = slidr.create('slidr_recipes_30min_img', {
    breadcrumbs: true,
    overflow: true
  }).add('h', ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']).start();
  
  let s_1hr = slidr.create('slidr_recipes_1hr_img', {
    breadcrumbs: true,
    overflow: true
  }).add('h', ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']).start();
  
  let s_popular = slidr.create('slidr_recipes_popular_img', {
    breadcrumbs: true,
    overflow: true
  }).add('h', ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']).start();
  
  let s_favourites = slidr.create('slidr_recipes_favourites_img', {
    breadcrumbs: true,
    overflow: true
  }).add('h', ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']).start();
  
  new DynamicSelect('#contact_country', {
    width: '100%',
    placeholder: 'Seleccione su lugar de residencia...',
    name: 'contact_country',
    onChange: function(value, text, option) {
    	console.log(value, text, option);
      country = value;
    }
  });
  
  // ### JS Performance ###########################
  const duration = performance.now() - start_time;
  console.log(`ui.js: DOMContentLoaded took ${duration}ms`);
      
});

// ### Sticky Header ###########################
const sticky_header = function(div_scroll_top) {
  let header          = document.getElementById("header_content");
  let sidebar         = document.querySelector("#sidebar_container");
  let sidebar_ative   = false;

  if (sidebar.classList.contains("active")) {
    // ### Menu Desplegado #########
    console.log('Menú desplegado.');
    sidebar_ative = true;
  }

  if (div_scroll_top > 1) {
    if (sidebar_ative) {
      header.classList.add("sticky-header-active");
    } else {
      header.classList.add("sticky-header");
    }
  } else {
    if (sidebar_ative) {
      header.classList.remove("sticky-header-acive");
    } else {
      header.classList.remove("sticky-header");
    }
  }
}

// ### Go to top ###########################
const to_top = function() {
  let home_container = document.getElementById('home_content');
  home_container.scrollTop = 0;
}

// ### Forms ###########################

const sign_up = function(e) {
  let title = "Enviar";
  let message = "Los datos de registro serán enviados.";

  e.preventDefault();

  alertify.confirm(title, message, 
    function() {
      if (register_validation()) {
        alertify.success('Registro exitoso.');
      } else {
        alertify.error('Revise los datos.')
      }
    }, 
    function() { 
      alertify.error('Cancelado por el usuario.');
    });

  return false;
}

const log_in = function(e) {
  // ### Preventing defaul event #########
  e.preventDefault();

  let message = "Ingresando al sistema...";
  alertify.notify(message, 'custom', 3, 
    function() {
      if (login_validation()) {
        message = "Bienvenido.";
        alertify.success(message);
      } else {
        alertify.error('Revise los datos.')
      }
    }
  );

  return false;
}

const contact = function(e) {
  // ### Preventing defaul event #########
  e.preventDefault();

  let message = "Enviando el fomulario...";

  alertify.notify(message, 'custom', 3, 
    function() {

      if (contact_validation()) {
        message = "Lo contactaremos...";
        alertify.success(message);
      } else {
        alertify.error('Revise los datos.')
      }
    }
  );

  return false;
}

const register_validation = function() {

  let first_name                  = document.querySelector("#register_first_name");
  let last_name                   = document.querySelector("#register_last_name");
  let email                       = document.querySelector("#register_email");
  let register_confirm_email      = document.querySelector("#register_confirm_email");
  let register_password           = document.querySelector("#register_password");
  let register_confirm_password   = document.querySelector("#register_confirm_password");
  let register_accept_terms       = document.querySelector("#register_accept_terms");

  const list = [
    first_name, 
    last_name, 
    email, 
    register_confirm_email, 
    register_password, 
    register_confirm_password
  ];

  const isEmpty = (currentValue) => currentValue.value;
  let output = list.every(isEmpty);

  return output && register_accept_terms.checked;
}

const login_validation = function() {

  let login_email     = document.querySelector("#login_email");
  let login_password  = document.querySelector("#login_password");

  const list = [
    login_email, 
    login_password
  ];

  const isEmpty = (currentValue) => currentValue.value;
  let output = list.every(isEmpty);

  return output;
}

const contact_validation = function() {

  let contact_first_name  = document.querySelector("#contact_first_name");
  let contact_last_name   = document.querySelector("#contact_last_name");
  let contact_email       = document.querySelector("#contact_email");
  let contact_role        = document.querySelector("#contact_role");
  let contact_motive_1    = document.querySelector("#contact_motive_1");
  let contact_motive_2    = document.querySelector("#contact_motive_2");
  let contact_motive_3    = document.querySelector("#contact_motive_3");
  let contact_motive_4    = document.querySelector("#contact_motive_4");
  // let contact_country     = document.querySelector("#contact_country"); data[] al crealo
  let contact_cause       = document.querySelector("#contact_cause");

  const list = [
    contact_first_name, 
    contact_last_name, 
    contact_email,
    contact_cause
  ];
  const role    = contact_role.options[contact_role.selectedIndex].text != '';
  const motive  = (contact_motive_1.checked || contact_motive_2.checked || contact_motive_3.checked || contact_motive_4.checked);
  // const country = contact_country.data[0].value; ################################################################

  const isEmpty = (currentValue) => currentValue.value;
  let output = list.every(isEmpty);

  return output && role && motive && country;
}

const suscribe_newsletter = function() {
  let newsletter_email  = document.querySelector("#newsletter_email");

  if (newsletter_email.value) {
    message = 'Gracias por suscribirse.';
    alertify.success(message);
  } else {
    alertify.error('Complete los datos.')
  }

  return false;
}
