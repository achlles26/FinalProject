//checks for the document to load
$(document).ready(function(){
    //load in all the meta, header and footer
    $(function(){
        $("#meta").load("./includes/meta.html");
        $("#header").load("./includes/header.html");
        $("#footer").load("./includes/footer.html");
    });
    $(".hover").hover(
        //Bind an event handler to the "mouseenter" event, or trigger that event on an element
        function(){
            //mouse enter
            $(this).css('background-color', '#f8f8f8');
            $(this).css('color', '#057dfd');
        },
        function(){
            //mouse leave
            $(this).css('background-color', '#transparent');
            $(this).css('color', '#000000');
        }
    );
    
});