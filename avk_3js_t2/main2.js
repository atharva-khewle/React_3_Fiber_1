//using jquery here




//instead of dowloading the jquery file everytime, you can use jquery cdn .
// //its just online source of ffile instead of downlooading it 
// like thias 
// <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

//syntaxx is 
//$('selector').acion()

//ajax is used to change data without refreshing page
//ajax syntax
//$.get(url,(data,status)=>())
//$.post(url,()=>)




$(document).ready(function(){

    $('#edit31').click(function(){
        $('#edit33').css('background-color','red');
    })
    $('#edit32').click(function(){
        $('#edit33').css('background-color','blue');
    })

    $('#edit2').click(function(){
        $('#edit22').text('value changed by text() function');
    })


    $('#edit').click(function(){
        $('#edit1').html('<p> i am editing in html UwU</p>');
    })



    $('p').click(function(){
        console.log("clicked");
    });
    $('p').dblclick(function(){

        //1000ms took to hide 
        console.log("you double clicked");
        $(this).hide(1000,function(){
            console.log("hidden");
          
        });

        
        $(this).show(1000,function(){
            console.log("shown");
        });
      
    })
    
    
    $('#test').click(function(){
        //toggle means if shown->hide if hide->show
        $('#t1').toggle(1000);

    });

});

