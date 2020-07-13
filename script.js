$(document).ready(function() {
    $('.digit').on('click', function() {
        if($(this).attr('data-btn') != 'op') {
          $('.result').val($('.result').val() + $(this).val());
        } else if($('.result').val()!='') {
            $('.result').val($('.result').val() + $(this).val());
        }
    });

    
    $('.clear').on('click', function() {
        $('.result').val('');
    });

    
    $('.equal').on('click', function() {
        let exp = $('.result').val();
        let res = 0;

        let expArr = Array.from(exp);
        expArr.filter((item) => {
            let r;

            switch(item) {
                case "+":
                    r = exp.split("+");
                    res = parseFloat(r[0]) + parseFloat(r[1]);
                    $('.result').val(res);
                    break; 
                    
                case "-":
                    r = exp.split("-");
                    res = parseFloat(r[0]) - parseFloat(r[1]);
                    $('.result').val(res);
                    break;
            
                case "*":
                    r = exp.split("*");
                    res = parseFloat(r[0]) * parseFloat(r[1]);
                    $('.result').val(res);
                    break;  
    
                case "/":
                    r = exp.split("/");
                    res = parseFloat(r[0]) / parseFloat(r[1]);
                    $('.result').val(res);
                    break;  
            }
        })
    });
})

/*такий собі калькулятор..*/