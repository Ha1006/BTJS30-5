//bài tập 1 :Tính lương nhân viên 
var btnTinhLuong = document.getElementById('btnTinhLuong');

btnTinhLuong.onclick = function () {
    var luongNhanVien1Ngay = document.getElementById('luongNhanVien1Ngay').value;

    var soNgayLam = document.getElementById('soNgayLam').value;

    var tienLuong = luongNhanVien1Ngay * soNgayLam;

    if (tienLuong > 0) {

        alert('Số tiền lương của bạn tháng này :  ' + tienLuong + 'đồng');
    } else {
        alert('Bạn có thể đã nhập sai . Mời bạn nhập lại');
    }
}

//Bài tập 2 : Tính giá trị trung bình 

var btnTinhGiaTriTrungBinh = document.getElementById('btnTinhGiaTriTrungBinh');
btnTinhGiaTriTrungBinh.onclick = function() {

    var soA = document.getElementById('soA').value;
    var soB = document.getElementById('soB').value;
    var soC = document.getElementById('soC').value;
    var soD = document.getElementById('soD').value;
    var soE = document.getElementById('soE').value;

    var giaTriTrungBinh = (Number(soA) + Number(soB) + Number(soC) + Number(soD) + Number(soE)) / 5;

    alert('Giá Trị Trung Bình Của Các Số :  ' + giaTriTrungBinh);
}

//Bài tập 3 : Tính tiền khi được đỏi từ USD sang VNĐ

var btnTienNhanDuoc = document.getElementById('btnTienNhanDuoc');

btnTienNhanDuoc.onclick = function () {
    var tienUSD = document.getElementById('tienUSD').value;

    var tienNhanDuoc = tienUSD * 23000;

    if (tienUSD > 0) {

        alert('Số tiền bạn sẽ nhận được :  ' + tienNhanDuoc + 'đồng');
    } else {
        alert('Bạn có thể đã nhập sai . Mời bạn nhập lại');
    }
}

//Bài Tập 4 : Tính diện tích và chu vi của hình chữ nhật
//chu vi : (dai * rong) / 2
//dien tich : dai * rong

var btnDienTich = document.getElementById('btnDienTich');

btnDienTich.onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value;

    var chieuRong = document.getElementById('chieuRong').value;

    var dienTich = chieuDai * chieuRong;

    if (dienTich > 0) {

        alert('Diện tích hình chữ nhật đó là :  ' + dienTich);
    } else {
        alert('Bạn có thể đã nhập sai . Mời bạn nhập lại');
    }
}

var btnChuVi = document.getElementById('btnChuVi');

btnChuVi.onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value;

    var chieuRong = document.getElementById('chieuRong').value;

    var chuVi = (chieuDai * chieuRong) / 2;

    if (chuVi > 0) {

        alert('Chu Vi hình chữ nhật đó là :  ' + chuVi);
    } else {
        alert('Bạn có thể đã nhập sai . Mời bạn nhập lại');
    }
}

// Bài tập 5 : tính tổng 

var btnTong = document.getElementById('btnTong');

btnTong.onclick = function () {
    var soTuChon = document.getElementById('soTuChon').value;

    var soHangDonVi = soTuChon % 10;
    var soHangChuc = soTuChon / 10;

    var Tong = Number(soHangChuc) + Number(soHangDonVi);

    alert('Tổng Hai Số :  ' + Tong);

}