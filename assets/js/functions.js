$(document).ready(function() {

    // Adding Down arrow for sidebar menu that have children
    $('.nav .nav-item.hasChild').append('<button class="arrowupDown"><i class="fa fa-chevron-down"></i></button>');

    // Collapse sidebar on click
    $('#collapseSidebar').on('click tap', function() {
        $('.sidebar').toggleClass('collapseIt');
        $('.main-panel').toggleClass('expendIt');
        $(this).find('i.fa').toggleClass('fa-long-arrow-left fa-long-arrow-right');
    });

    // Open Sub-menu
    $('.nav .nav-item.hasChild').on('click tap', function() {
        $(this).find('.arrowupDown i.fa').toggleClass('fa-chevron-down fa-chevron-up');
        $(this).find('.sub-menu').toggleClass('hideShowMenu');
    })

    // Set active class to sub menu
    $('.nav .nav-item.hasChild .sub-menu .sub-nav-item').on('click tap', function() {
       $('.nav .nav-item.hasChild .sub-menu .sub-nav-item').removeClass('item-active');
       $(this).addClass('item-active');
    })
})