var Validation = function () {
    this.checkEmpty = function (value, selector, ClassError, selectorNote, Note) {
        if (value.trim() === '') {
            document.querySelector(selector).classList.add(ClassError);
            document.querySelector(selectorNote).innerHTML = Note;
            return false;
        }
        document.querySelector(selector).classList.remove(ClassError);
        document.querySelector(selectorNote).innerHTML = '';
        return true;
    }
    this.checkEmail = function (value, selector, ClassError, selectorNote, Note) {
        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.match(regexEmail)) {
            document.querySelector(selector).classList.add(ClassError);
            document.querySelector(selectorNote).innerHTML = Note;
            return false;
        }
        document.querySelector(selector).classList.remove(ClassError);
        document.querySelector(selectorNote).innerHTML = '';
        return true;
    }
    this.checkScore = function (value, min, max, selector, ClassError, selectorNote, Note) {
        var regexNumber = /^\d+$/;
        if (!value.match(regexNumber)) {
            document.querySelector(selector).classList.add(ClassError);
            document.querySelector(selectorNote).innerHTML = Note;
            return false;
        }
        if (value < min || value > max) {
            document.querySelector(selector).classList.add(ClassError);
            document.querySelector(selectorNote).innerHTML = Note;
            return false;
        }
        document.querySelector(selector).classList.remove(ClassError);
        document.querySelector(selectorNote).innerHTML = '';
        return true;
    }
    this.checkPhone = function (value,selector,ClassError,selectorNote,Note) {
        var regexPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        if (!value.match(regexPhone)) {
            document.querySelector(selector).classList.add(ClassError);
            document.querySelector(selectorNote).innerHTML = Note;
            return false;
        }
        document.querySelector(selector).classList.remove(ClassError);
        document.querySelector(selectorNote).innerHTML = '';
        return true;
    }
}