var SinhVien = function(MaSV,HoTen,Email,SoDT,CMND,DiemToan,DiemLy,DiemHoa){
    this.MaSV = MaSV;
    this.HoTen = HoTen;
    this.Email = Email;
    this.SoDT = SoDT;
    this.CMND = CMND;
    this.DiemToan = DiemToan;
    this.DiemLy = DiemLy;
    this.DiemHoa = DiemHoa;
    this.tinhDiemTrungBinh = function(){
        return ((Number(DiemToan)+Number(DiemLy)+Number(DiemHoa))/3).toFixed(2);
    }
}