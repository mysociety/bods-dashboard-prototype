jQuery(function($){
    $('.js-four-year-sparkline').each(function(){
        var data = [];
        $(this).parent('td').nextAll().each(function(){
            data.push( Number( $(this).text() ) );
        });
        sparkline.sparkline( $(this)[0], data );
    });
});
