$(document).ready(function(){
    //Cuando se clickea un "li" dentro de un "ul", se asigna el evento
    $('ul').on('click','li',function(){
        $(this).toggleClass('completed')
    })
    
    $('ul').on('click','span',function(event){
        $(this).parent().fadeOut(300,function(){
            $(this).remove()
        })
        event.stopPropagation()
    })

    $('input[type="text"]').keypress(function(event){
        if(event.which === 13){
            var todoText = $(this).val()
            var newLi = '<li><span><i class="fas fa-trash-alt"></i></span> '+todoText+'</li>'
            $('ul').append(newLi)
            $(this).val('')
        }
    })

    $('.fa-pencil-alt').on('click',function(){
        $('input[type="text"]').fadeToggle(200)
    })
})


