//theme changer
$('.themeToggle').click(function(){
    let currentTheme  =  $(this).val();
    $('*').attr('data-theme' , currentTheme);
});

//handle the display of  numbers 
$('.btn').click(function (e) { 
   if($('#displayNum').text() === '0')
   {
       $('#displayNum').text($(this).val());
   }
   else{
       $('#displayNum').text( $('#displayNum').text() + $(this).val());
   }
})

//deleting a number 
$('.del').click(function (e){
    var num = $('#displayNum').text();
    if(num.length>1)       //seprate the number with all other values
    {
        $('#displayNum').text(num.slice(0 , num.length - 1));
    }
    if(num.length == 1){
        $('#displayNum').text('0');
    }
});

//all clear button 
$('.reset').click(function(e){
    $('#displayNum').text('0');
});

//evalute the whole equation 
$('.eq').click(function(e){
    var res;

    try{
        res = (eval($('#displayNum').text()));
    }catch(e){
        if(e instanceof TypeError)
        {
            alert('Error found reseting the calculator');
            $('#displayNum').text('0');
        } 
    }

    //if everything works display the result
    $('#displayNum').text(res);
});