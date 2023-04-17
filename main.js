var btnTinhTong = document.getElementById("btnTinhTong");
btnTinhTong.onclick = function () {
  //Dom tới 2 thẻ input lấy value
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;

  //chuyển kiểu dữ liệu string => number
  //   number1 = parseInt(number1);
  //   number2 = parseInt(number2);

  //tính tổng 2 số number1 & number2
  var tong = number1 *  number2;

  //show kết quả
  var content = "Lương là: " + tong;
  //dom tới thẻ div#divResult hiển thị nội dung kết quả
  document.getElementById("divResult1").innerHTML = content;
}

var btnTinhChia = document.getElementById("btnTinhChia");
btnTinhChia.onclick = function () {
    var number3 = document.getElementById("number3").value * 1;
    var number4 = document.getElementById("number4").value * 1;
    var number5 = document.getElementById("number5").value * 1;
    var number6 = document.getElementById("number6").value * 1;
    var number7 = document.getElementById("number7").value * 1;

    var chia = (number3 + number4 +number5 + number6 +number7)/5;
    var content = "Giá trị  " + chia;
    document.getElementById("divResult2").innerHTML = content;
}


var btnTinhtien = document.getElementById("btnTinhtien");
btnTinhtien.onclick = function () {
    var number8 = document.getElementById("number8").value * 1;
    var tien = number8 * 23500;
    var content = "Khoảng: " + tien;
    document.getElementById("divResult3").innerHTML = content;

}

var btnTinhHinh = document.getElementById("btnTinhHinh");
btnTinhHinh.onclick = function () {
    var number9 = document.getElementById("number9").value * 1;
    var number10 = document.getElementById("number10").value * 1;
    var chuvi =(number9 + number10)*2;
    var dientich = number9 * number10;
    var content = "chu vi: " + chuvi;
    document.getElementById("divResult4").innerHTML = content;
    var content = "diện tích: " + dientich;
    document.getElementById("divResult5").innerHTML = content;

}

var btnTinhBien = document.getElementById("btnTinhBien");
btnTinhBien.onclick = function () {
    var number11 = document.getElementById("number11").value * 1;
    var bien = (number11 / 10) + (number11 % 10);
    var content = "tổng: " + Math.round(bien);
     document.getElementById("divResult6").innerHTML = content;
}