var validation = new Validation();
var renderTable = function(result){
    var noiDung = '';
    for(var i = 0; i < result.data.length; i++){
        var sinhVienArr = result.data[i];
        var sinhVien = new SinhVien(sinhVienArr.MaSV,sinhVienArr.HoTen,sinhVienArr.Email,sinhVienArr.SoDT,sinhVienArr.CMND,sinhVienArr.DiemToan,sinhVienArr.DiemLy,sinhVienArr.DiemHoa);
        noiDung +=`
        <tr>
            <td>${sinhVien.MaSV}</td>
            <td>${sinhVien.HoTen}</td>
            <td>${sinhVien.Email}</td>
            <td>${sinhVien.SoDT}</td>
            <td>${sinhVien.CMND}</td>
            <td>${sinhVien.DiemToan}</td>
            <td>${sinhVien.DiemLy}</td>
            <td>${sinhVien.DiemHoa}</td>
            <td>${sinhVien.tinhDiemTrungBinh()}</td>
            <td>
                <button class="btn btn-primary btn__Repair" onclick = "RepairSinhVien('${sinhVien.MaSV}')">Sửa</button>
                <button class="btn btn-danger btn__Delete" onclick="DeleteSinhVien('${sinhVien.MaSV}')">Xóa</button>
            </td>
        </tr>
        `;
    }
   document.querySelector('#tblSinhVien').innerHTML = noiDung;
}

var manageSinhVien = new ManageSinhVien();
var getSinhVien = manageSinhVien.GetSinhVien().then(renderTable).catch();

document.querySelector('#btnThemSinhVien').onclick = function(){
    document.querySelector('.modal-title').innerHTML = "Thêm Sinh Viên Mới";
    document.querySelector('.modal-footer').innerHTML = `
        <button class="btn btn__Add" onclick ="AddSinhVien()">Thêm</button>
        <button type="button" class="btn btn__Close" data-dismiss="modal">Đóng</button>
    `;
}
var AddSinhVien = function(){
    var MaSV = document.querySelector('#MaSV').value ;
    var HoTen = document.querySelector('#HoTen').value;
    var Email = document.querySelector('#Email').value;
    var SoDT = document.querySelector('#SoDT').value;
    var CMND = document.querySelector('#CMND').value;
    var DiemToan = document.querySelector('#DiemToan').value;
    var DiemLy = document.querySelector('#DiemLy').value;
    var DiemHoa = document.querySelector('#DiemHoa').value;
    var sinhVien = new SinhVien(MaSV,HoTen,Email,SoDT,CMND,DiemToan,DiemLy,DiemHoa);
    
    var valid = true;
    var Note ='Ô này không được bỏ trống';
    valid = validation.checkEmpty(sinhVien.MaSV,'#MaSV','ErrorClass','.erMaSV',Note) &
    validation.checkEmpty(sinhVien.HoTen,'#HoTen','ErrorClass','.erHoTen',Note) &
    validation.checkEmpty(sinhVien.CMND,'#CMND','ErrorClass','.erCMND',Note) &
    validation.checkEmail(sinhVien.Email,'#Email','ErrorClass','.erEmail',"Email sai định dạng") &
    validation.checkPhone(sinhVien.SoDT,'#SoDT','ErrorClass','.erSoDT',"Số điện thoại sai định dạng") &
    validation.checkScore(sinhVien.DiemToan,0,10,'#DiemToan','ErrorClass','.erDiemToan','Điểm là số tư 0 - 10') &
    validation.checkScore(sinhVien.DiemLy,0,10,'#DiemLy','ErrorClass','.erDiemLy','Điểm là số tư 0 - 10') &
    validation.checkScore(sinhVien.DiemHoa,0,10,'#DiemHoa','ErrorClass','.erDiemHoa','Điểm là số tư 0 - 10');
    if(!valid){
        return;
    }
    manageSinhVien.AddSinhVien(sinhVien).then(function(result){
        alert('Đã thêm thành công!')
        location.reload();
    }).catch(function(err){
        alert('Đã thêm thành công!');
        location.reload();
    })
}
var DeleteSinhVien = function(MaSV){
    var confirmLog = confirm(`Bạn có muốn xóa sinh viên có mã ${MaSV} này không?`);
    if(confirmLog === true){
        manageSinhVien.DeleteSinhVien(MaSV).then(function(result){
            alert("Xóa thành công!");
            location.reload();
        }).catch(function(err){
            alert("Xóa thất bại");
        })
    }
}
var RepairSinhVien = function(MaSV){
    document.querySelector('#btnThemSinhVien').click();
    document.querySelector('.modal-title').innerHTML = "Cập nhật thông tin Sinh Viên";
    document.querySelector('.modal-footer').innerHTML = `
    <button class="btn btn__Update" onclick='UpdateSinhVien()'>Cập nhật</button>
    <button class="btn btn__Close" data-dismiss="modal">Đóng</button>
    `;
    manageSinhVien.RepairSinhVien(MaSV).then(function(result){
        var sinhVien = result.data;
        document.querySelector('#MaSV').value = sinhVien.MaSV;
        document.querySelector('#HoTen').value = sinhVien.HoTen;
        document.querySelector('#Email').value= sinhVien.Email;
        document.querySelector("#SoDT").value = sinhVien.SoDT;
        document.querySelector('#CMND').value = sinhVien.CMND;
        document.querySelector('#DiemToan').value = sinhVien.DiemToan;
        document.querySelector('#DiemLy').value = sinhVien.DiemLy;
        document.querySelector('#DiemHoa').value = sinhVien.DiemHoa;
    }).catch(function(err){
        alert("lỗi");
    });
}
var UpdateSinhVien = function(){
    var MaSV = document.querySelector('#MaSV').value ;
    var HoTen = document.querySelector('#HoTen').value;
    var Email = document.querySelector('#Email').value;
    var SoDT = document.querySelector('#SoDT').value;
    var CMND = document.querySelector('#CMND').value;
    var DiemToan = document.querySelector('#DiemToan').value;
    var DiemLy = document.querySelector('#DiemLy').value;
    var DiemHoa = document.querySelector('#DiemHoa').value;
    var sinhVien = new SinhVien(MaSV,HoTen,Email,SoDT,CMND,DiemToan,DiemLy,DiemHoa);
    
    var valid = true;
    var Note ='Ô này không được bỏ trống';
    valid = validation.checkEmpty(sinhVien.MaSV,'#MaSV','ErrorClass','.erMaSV',Note) &
    validation.checkEmpty(sinhVien.HoTen,'#HoTen','ErrorClass','.erHoTen',Note) &
    validation.checkEmpty(sinhVien.CMND,'#CMND','ErrorClass','.erCMND',Note) &
    validation.checkEmail(sinhVien.Email,'#Email','ErrorClass','.erEmail',"Email sai định dạng") &
    validation.checkPhone(sinhVien.SoDT,'#SoDT','ErrorClass','.erSoDT',"Số điện thoại sai định dạng") &
    validation.checkScore(sinhVien.DiemToan,0,10,'#DiemToan','ErrorClass','.erDiemToan','Điểm là số tư 0 - 10') &
    validation.checkScore(sinhVien.DiemLy,0,10,'#DiemLy','ErrorClass','.erDiemLy','Điểm là số tư 0 - 10') &
    validation.checkScore(sinhVien.DiemHoa,0,10,'#DiemHoa','ErrorClass','.erDiemHoa','Điểm là số tư 0 - 10');
    if(!valid){
        return;
    }
    manageSinhVien.UpdateSinhVien(sinhVien).then(function(result){
        alert("Cập nhật thành công!");
        location.reload();
    }).catch();
}