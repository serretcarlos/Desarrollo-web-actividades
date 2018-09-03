;(function () {
    var getInfo = function(){
        $.ajax({
            url: 'https://api.myjson.com/bins/1ejd64',
            type: 'GET',
            dataType: 'json', 
            success: function (data) {
                const menuObj = data.menu;
                $.each(menuObj.tipo_burrito, function(i, field){
                    $('#tortillaSelect').append(`<option value="${field.type}">${field.type}</option>`);
                });
                $.each(menuObj.ingrediente, function(i, field){
                    $('#ingredientesContainer ul').append(`<li><label><input type="radio" name="ingrediente" value="${field.type}">${field.type}</label></li>`)
                });
                $.each(menuObj.toppings, function(i, field){
                    $('#adicionalesContainer ul').append(`<li><label><input type="checkbox" name="adicional" value="${field.topping}">${field.topping}</label></li>`)
                });
                $.each(menuObj.salsas, function(i, field){
                    $('#salsasContainer ul').append(`<li><label><input type="checkbox" name="salsa" value="${field.salsa}">${field.salsa}</label></li>`)
                });
             },
            error: function(errorMsg){
                console.log(errorMsg);
             }
        });
    }

    var getComments = function(){
        $.ajax({
            url: 'https://raw.githubusercontent.com/serretcarlos/Desarrollo-web-actividades/master/4to%20laboratorio/assets/comments.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(data){
                $(data).find('comment').each(function(){
                    var name = $(this).find('name').text();
                    var email = $(this).find('name').attr('email');
                    var comment = $(this).find('text').text();
                    $('#comments tbody').append(`<tr><td>${name}</td><td>${email}</td><td>${comment}</td> </tr>`)
                })
            },
            error: function(errorMsg){

            }
        });
    }

    $(function(){
        getInfo();
        getComments();
	});
}());