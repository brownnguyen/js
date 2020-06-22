var mangSinhVien = [];
var validation = new Validation();
document.querySelector('.xacNhan').onclick = function () {
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('.maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('.tenSinhVien').value;
    sinhVien.email = document.querySelector('.emailSinhVien').value;
    sinhVien.loai = document.querySelector('.loaiSinhVien').value;
    sinhVien.diemToan = document.querySelector('.diemToan').value;
    sinhVien.diemLy = document.querySelector('.diemLy').value;
    sinhVien.diemHoa = document.querySelector('.diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('.diemRenLuyen').value;

    valid = true;
    var note = 'Điểm có giá trị từ 0 -> 10.';    
    valid = validation.checkEmpty(sinhVien.maSinhVien,'.maSinhVien','ErrorClass','.erMaSinhVien','Xin vui lòng nhập mã.') &
    validation.checkEmpty(sinhVien.tenSinhVien,'.tenSinhVien','ErrorClass','.erTenSinhVien','Xin vui lòng nhập tên.') &
    validation.checkEmail(sinhVien.email,'.emailSinhVien','ErrorClass','.erEmail',"Email không đúng định dạng.") &
    validation.checkNumber(sinhVien.diemToan,'.diemToan','ErrorClass','.erDiemToan',note) &
    validation.checkNumber(sinhVien.diemLy,'.diemLy','ErrorClass','.erDiemLy',note) &
    validation.checkNumber(sinhVien.diemHoa,'.diemHoa','ErrorClass','.erDiemHoa',note) &
    validation.checkNumber(sinhVien.diemRenLuyen,'.diemRenLuyen','ErrorClass','.erDiemRenLuyen',note) &
    validation.checkLength(sinhVien.maSinhVien,8,12,'.maSinhVien','ErrorClass','.erMaSinhVien',"Mã phải từ 8 đến 12 kí tự");
    
    if(!valid){
        return;
    }
    mangSinhVien.push(sinhVien);
    console.log(mangSinhVien);
    renderTable();
    saveLocalStorage();
}

var renderTable = function () {
    var noiDung = '';
    var sinhVienMang;
    for (var i = 0; i < mangSinhVien.length; i++) {
        sinhVienMang = mangSinhVien[i];
        var sinhVien = new SinhVien(sinhVienMang.maSinhVien,sinhVienMang.tenSinhVien,sinhVienMang.email,sinhVienMang.loai,sinhVienMang.diemToan,sinhVienMang.diemLy,sinhVienMang.diemHoa,sinhVienMang.diemRenLuyen);
        var trSinhVien = `
        <tr>
        <td>${sinhVien.maSinhVien}</td>
        <td>${sinhVien.tenSinhVien}</td>
        <td>${sinhVien.email}</td>
        <td>${sinhVien.loai}</td>
        <td>${sinhVien.tinhDiemTrungBinh()}</td>
        <td>${sinhVien.diemRenLuyen}</td>
        <td><button class="btn btn-danger" onclick="XoaSinhVien('${sinhVien.maSinhVien}')">Delete</button></td>
        </tr>
        `;
        noiDung += trSinhVien;

    }
    document.querySelector('#tblSinhVien').innerHTML = noiDung;
}
var XoaSinhVien = function (maSinhVien) {
    var DeleteSinhVien;
    for (var i = mangSinhVien.length - 1; i >= 0; i--) {
        DeleteSinhVien = mangSinhVien[i];
        if(DeleteSinhVien.maSinhVien === maSinhVien){
            mangSinhVien.splice(i,1);
        }
    }
    renderTable();
}
var saveLocalStorage = function(){
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    localStorage.setItem('mangSinhVien',sMangSinhVien);
}

var getLocalStorage = function (){
    if(localStorage.getItem('mangSinhVien')){
      var sMangSinhVien =  localStorage.getItem('mangSinhVien');
      mangSinhVien = JSON.parse(sMangSinhVien);
      renderTable();
    }
}
getLocalStorage();
let services = new Services();
let res = services.httpGet("http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
console.log(res.json())


