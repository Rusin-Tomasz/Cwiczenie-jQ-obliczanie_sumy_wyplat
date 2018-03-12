$(document).ready(function () {


    $('#count-sum').click(function () {
        var salary = $('span.salary');
        var suma = 0;
        var i;

        for(i = 0; i<salary.length; i++) {
            suma = suma + parseInt(salary.eq(i).text())      
        };
        
        $('#sum').html(suma);
    });

});
