$(document).ready(function(){
    
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    $('#sendBtn').click(function(){
        let $email = $('#correo_input').val();
        let $comment = $('#message').val();
        if(!pattern.test($email))
        {
            $('#correo_warning').show();
            return;
        }
        $('#correo_warning').hide();
        if (!$comment){
            $('#comment_warning').show();
            return;
        }
        $('#comment_warning').hide();
        $('#comment').html($comment);
    });


    $('#submitBtn').click(function(){
        let $tortilla = $('#tortillaSelect option:selected').val();
        let $principal = $('input:radio[name=ingrediente]:checked').val();
        let $selectedIngredients = [];
        $('input:checkbox[name=adicional]:checked').each(function() {
            $selectedIngredients.push($(this).attr('value'));
        });
        let $selectedSalsas = [];
        $('input:checkbox[name=salsa]:checked').each(function() {
            $selectedSalsas.push($(this).attr('value'));
        });
        let $nachos = $('#input_nachos').prop('checked');
        let $cantidad = $('#input_cantidad').val();
        let $is_valid_quantity = !isNaN(parseFloat($cantidad)) && isFinite($cantidad);

        if ($tortilla == '0'){
            $('#tortilla_warning').show();
        } else {
            $('#tortilla_warning').hide();
        }

        if (!$principal){
            $('#ingrediente_warning').show();
        } else {
            $('#ingrediente_warning').hide();
        }

        if (!$is_valid_quantity){
            $('#cantidad_warning').show();
        } else {
            $('#cantidad_warning').hide();
        }

        if ($tortilla == '0'){
            $('#tortilla')[0].scrollIntoView();
            $('#resumen').hide();
            return;
        }
        if (!$principal){
            $('#principal')[0].scrollIntoView();
            $('#resumen').hide();
            return;
        }

        if (!$is_valid_quantity){
            $('#extras')[0].scrollIntoView();
            $('#resumen').hide();
            return;
        }

        $('#tortilla_info').text($tortilla);

        $('#principal_info').text($principal);
        let $adicionales = $selectedIngredients.length > 0? $selectedIngredients.join(', '):'Sin adicionales';
        $('#adicionales_info').text($adicionales);
        let $salsas = $selectedSalsas.length>0? $selectedSalsas.join(', '): 'Sin salsas';
        $('#salsas_info').text($salsas);
        $('#nachos_info').text($nachos? 'Sí': 'No');
        $('#cantidad_info').text($cantidad);
        $('#resumen').show();
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        
    });

    $('#clearBtn').click(function(){
        $('#tortillaSelect').prop('selectedIndex',0)
        $('input:checkbox, input:radio').prop('checked', false);
        $('#input_cantidad').val('1');
        $('#tortilla')[0].scrollIntoView();
        $('#resumen').hide();

    });

});