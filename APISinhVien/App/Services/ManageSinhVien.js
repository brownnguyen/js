var ManageSinhVien = function () {
    this.GetSinhVien = function () {
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
            method: 'GET',
            responseType: 'json'
        })
    }
    this.AddSinhVien = function (sinhVien) {
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/ThemSinhVien',
            method: 'POST',
            responseType: 'json',
            data: sinhVien
        })
    }
    this.DeleteSinhVien = function (MaSV) {
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/' + MaSV,
            method: 'DELETE',
            responseType: 'json'
        })
    }
    this.RepairSinhVien = function(MaSV){
        return axios({
            url:'http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/'+ MaSV,
            method: 'GET',
            responseType: 'json',
        })
    }
    this.UpdateSinhVien = function(sinhVien){
        return axios({
            url:'http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien',
            method:'PUT',
            responseType: 'json',
            data: sinhVien
        })
    }
}