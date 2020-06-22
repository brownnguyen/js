var SinhVien = function(maSinhVien,tenSinhVien,email,loai,diemToan,diemLy,diemHoa,diemRenLuyen){
    this.maSinhVien = maSinhVien;
    this.tenSinhVien = tenSinhVien;
    this.email = email;
    this.loai = loai;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemRenLuyen = diemRenLuyen;
    this.tinhDiemTrungBinh = function(){
        return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa))/3;
    }
}