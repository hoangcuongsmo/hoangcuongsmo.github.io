$(document).ready(function() {
    $('.sendvia input').click(function() {
        $val = $(this).val();
        console.log($val);
        $("#nav-onerecp form").removeClass("show");
        $("#nav-onerecp form#onerecep-" + $val).addClass("show");
     });

});