let submit_btn = document.getElementById('submitBtn');
let clear_button = document.getElementById('clearBtn');
let ingredientes = document.getElementsByName('ingrediente')
let adicionales = document.getElementsByName('adicional');
let salsas = document.getElementsByName('salsa');
var cantidad;
var resumen = document.getElementById('resumen');
let selectedIngredient = [];
let selectedSalsas = [];
let selectedAdicionales = [];
var ingrediente_flag = false;
var incrementScroll = function() {
    window.scrollBy(0, 120) ;
}
var scrolling;



submit_btn.addEventListener("click", function(event){
    selectedIngredient = [];
    selectedSalsas = [];
    selectedAdicionales = [];
    ingrediente_flag = false;
    cantidad = document.getElementById('input_cantidad').value;
    var is_valid_quantity = !isNaN(parseFloat(cantidad)) && isFinite(cantidad);
    let tortilla = document.getElementById('tortillaSelect').value;

    ingredientes.forEach(function(element){
        if (element.checked){
            selectedIngredient.push(element);
            ingrediente_flag = true;
        }
    })

    adicionales.forEach(function(element){
        if (element.checked){
            selectedAdicionales.push(element.value);
        }
    });

    salsas.forEach(function(element){
        if (element.checked){
            selectedSalsas.push(element.value);
        }
    })

    
    if (tortilla == '0'){
        document.getElementById('tortilla_warning').classList.remove('hidden');
        resumen.style.maxHeight = null;
    } else {
        document.getElementById('tortilla_warning').classList.add('hidden');
    }

    if (!ingrediente_flag){
        document.getElementById('ingrediente_warning').classList.remove('hidden');
        resumen.style.maxHeight = null;
    } else {
        document.getElementById('ingrediente_warning').classList.add('hidden');
    }

    if (!is_valid_quantity){
        document.getElementById('cantidad_warning').classList.remove('hidden');
        resumen.style.maxHeight = null;
    } else {
        document.getElementById('cantidad_warning').classList.add('hidden');
    }

    if (tortilla == '0'){
        document.getElementById('tortilla').scrollIntoView();
        return;
    }
    if (!ingrediente_flag){
        document.getElementById('principal').scrollIntoView();
        return;
    } 
    if (!is_valid_quantity){
        document.getElementById('extras').scrollIntoView();
        return;
    }

    let con_nachos = document.getElementById('input_nachos');
    document.getElementById('tortilla_info').innerHTML = tortilla;
    document.getElementById('principal_info').innerHTML = selectedIngredient[0].value;
    document.getElementById('adicionales_info').innerHTML = selectedAdicionales.length > 0? selectedAdicionales.join(', '): 'Sin adicionales';
    document.getElementById('salsas_info').innerHTML = selectedSalsas.length>0? selectedSalsas.join(', '): 'Sin salsas';
    document.getElementById('nachos_info').innerHTML = con_nachos.checked ? 'Sí' : 'No';
    document.getElementById('cantidad_info').innerHTML = cantidad;
    resumen.style.maxHeight = '50vh';
    scrolling = setInterval(incrementScroll, 1);
    setTimeout(function(){ clearInterval(scrolling)}, 1000);
});


clear_button.addEventListener('click', function(){
    document.getElementById('tortillaSelect').value = '0';
    document.getElementById('input_cantidad').value = 1;
    document.getElementsByName('ingrediente').forEach(function(element){
        element.checked = false;
    })
    document.getElementsByName('adicional').forEach(function(element){
        element.checked = false;
    })
    document.getElementsByName('salsa').forEach(function(element){
        element.checked = false;
    })
    resumen.style.maxHeight = null;
    document.getElementById('input_nachos').checked = false;
    document.getElementById('tortilla').scrollIntoView();

})