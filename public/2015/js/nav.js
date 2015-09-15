function initNavigation() {
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
}

$(document).ready(initNavigation);