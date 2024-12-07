//checks for the document to load
$(document).ready(function(){
    //load in all the meta, header and footer
    $(function(){
        $("#meta").load("./includes/meta.html");
        $("#header").load("./includes/header.html");
        $("#footer").load("./includes/footer.html");
    });
    $(".hover").hover(
        //first hover function that has a different color than the first
        function(){
            //mouse enter
            $(this).css('background-color', '#transparent');
            $(this).css('color', '#057dfd');
        },
        function(){
            //mouse leave
            $(this).css('background-color', '#transparent');
            $(this).css('color', '#000000');
        }
    );
    $(".hover2").hover(
        //second hover function that has a different color
        function(){
            //mouse enter
            $(this).css('background-color', '#transparent');
            $(this).css('color', '#057dfd');
        },
        function(){
            //mouse leave
            $(this).css('background-color', '#transparent');
            $(this).css('color', '#FFFFFF');
        }
    );

    
});