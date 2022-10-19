
$('.shopping_cart').on( "click", function() {
    $('#dialog_menu_img').removeClass();
    let menuobj = {
        name : " ",
        price : " "
    };
    let $this = $( this ).parent();
    menuobj.name = $this.find('p')[0].innerHTML;
    menuobj.price = $this.find('p')[3].innerHTML;
    console.log( $this[0].firstElementChild.className)
    $("#exampleModalLabel").html(menuobj.name)
    $("#dialog_menu_price").html("價錢:"+ menuobj.price)
    $('#dialog_menu_img').addClass($this[0].firstElementChild.className);
});