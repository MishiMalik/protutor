$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".top-navbar-div").css('background-color','rgba(55, 31, 85, 0.896)');
        $(".top-navbar-div").css('padding-top','10px');
        $(".top-navbar-div").css('padding-bottom','10px');
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".top-navbar-div").css('background-color','transparent');
       $(".top-navbar-div").css('padding-top','18px');
       $(".top-navbar-div").css('padding-bottom','18px');
    }
});


$(document).ready(function() {
    // Initially, hide all subject-detail-cards
    $('.subject-detail-card').hide();

     // Trigger a click event on the .english-btn button
     $('.english-btn').click();
     $('.english-tutor').show();
   // Add click event handler for all subject buttons
   $('.subject-card').click(function() {
    // Remove active-subject class from all buttons
    $('.subject-card').removeClass('active-subject');
    // Add active-subject class to the clicked button
    $(this).addClass('active-subject');
    
    // Hide all detail cards
    $('.subject-detail-card').hide();
    
    // Show the corresponding detail card
    const targetClass = $(this).data('target'); // Get the data-target attribute
    $(`.${targetClass}`).show(); // Show the detail card based on data-target attribute

    });
});

