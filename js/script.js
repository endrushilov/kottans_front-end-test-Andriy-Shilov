var result = $(".result");
var hide_password = $("#hide_password");
var reload_number = $("#reload_number");
var arr_number = $('.number');
var arr_number_lang = arr_number.length;
var button_value;
var digital_array = [];
$(document).ready(function(){
    if(!reload_number.is(":checked")){
        add_number_for_buttons();
    }
    else{
        add_random_number_for_buttons();
    }
    hide_password.change(function() {
        if($(this).is(":checked")) {
            result.attr('type', 'password');
        }
        else{
           result.attr('type', 'text');
        }
    });
    $(".number").on('click', function(){
        var $this = $(this);
        addSymbol($this);
        if(reload_number.is(":checked")){
            add_random_number_for_buttons();
        }
    });
    $("#cancel").on('click', function(){
        removeSymbol();
    });
    $("#clear").on('click', function(){
        clearPassword();
    });
    $("#enter").on('click', function(){
        printPassword();
    });
});
function add_number_for_buttons(){
    arr_number.each(function(index){
        $(this).text(index + 1);
        if(index == arr_number_lang -1){
             $(this).text("0");
        }
    });
};
function add_random_number_for_buttons(){
    var random_numbers = [];
    arr_number.each(function(index){
        var random;
        get_random();
        function get_random(){
            random = randomInteger(0, 9);
            if(random_numbers.indexOf(random.rand) === -1){
                random_numbers.push(random.rand);
            }
            else{
                get_random();
            }
        };
    });
    arr_number.each(function(index){
        $(this).text(random_numbers[index]);
    });
};
function addSymbol($this){
    button_value = $this.text();
    digital_array.push(button_value);
    var this_result_val = result.val();
    result.val(this_result_val + button_value);
};
function removeSymbol($this){
    digital_array.pop();
    var new_result = digital_array.join('');
    result.val(new_result);
};
function clearPassword($this){
    digital_array.length = 0;
    result.val("");
};
function printPassword($this){
    var this_result_val = result.val();
    alert(this_result_val);
    result.val("");
    digital_array.length = 0;
};
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return{
        rand
    }
}
