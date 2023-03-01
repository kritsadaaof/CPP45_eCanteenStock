$(document).ready(() => {
    $("#Summit_Create").click(() => {
        var inputProduct = $("#inputId, #inputName, #inputBuy, #inputQuantity, #inputPrice, #inputData").val();
        if (inputProduct.trim() === "") { // Check if the input value is null or empty
            alert("กรุณากรอกข้อมูล ให้ครบ"); // Show an alert asking the user to enter data
            $("#inputId, #inputName, #inputBuy, #inputQuantity, #inputPrice, #inputData").addClass("is-invalid"); // Add "is-invalid" class to show a request tag
            return;
        }
        $.post(baseUrl + "Stock/Summit", {
            ADDID: $("#inputId").val(),
            ADDNAME: $("#inputName").val(),
            ADDBUY: $("#inputBuy").val(),
            ADDQTY: $("#inputQuantity").val(),
            ADDPRICE: $("#inputPrice").val(),
            ADDDATE: $("#inputData").val()
        }).done((data) => {
            alert("บันทึกชื่อของคุณสำเร็จแล้ว");
            location.reload();
        });
    });
});