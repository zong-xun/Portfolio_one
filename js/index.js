$('.map_btn').on('click',function(){
    let map_data = {
        name : " ",
        tel : " ",
        email : " ",
        number : "",
        vegetarian  : "",
    }
    map_data.name = $('#map_name').val();
    map_data.tel = $('#map_tel').val();
    map_data.email = $('#map_email').val();
    map_data.number = $('#map_number').val();
    map_data.vegetarian = $("input[name='contact']:checked").val();
    console.log($("input[name='contact']:checked").val())
    if(map_data.name == "" || map_data.tel == "" || map_data.email == "" || map_data.number =="" || map_data.vegetarian == ""){
        $("#exampleModalLabel").text("資料填寫未完畢");
        $("#mistake").text("資料填寫未完畢");
        $('#dialog_name').text("");
        $('#dialog_tel').text("");
        $('#dialog_email').text("");
        $('#dialog_number').text("");
        $('#dialog_veg').text("");
    } else{
        $("#mistake").text("");
        $("#exampleModalLabel").text("感謝您的定位");
        $('#dialog_name').text(map_data.name +"您好");
        $('#dialog_tel').text("聯絡資訊 : " + map_data.tel);
        $('#dialog_email').text("E-mail : " + map_data.email);
        $('#dialog_number').text("預定人數 : " + map_data.number + "人");
        $('#dialog_veg').text("是否需要素食 : " + map_data.vegetarian);
    }

    $("input[name='contact']:checked")[0].checked = false;
    $('input[name="contact"]')[0].checked = true; 
    $('#map_name,#map_tel,#map_email,#map_number').val(" ")
});