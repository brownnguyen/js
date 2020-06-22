var Validation = function(){
    this.checkEmpty = function(value,selector, classError,selectNote,note){
        if(value.trim()===''){
            document.querySelector(selector).classList.add(classError);
            document.querySelector(selectNote).innerHTML = note;
            return false;
        }
        document.querySelector(selector).classList.remove(classError);
        document.querySelector(selectNote).innerHTML = '';
        return true;
    }
    this.checkEmail = function(value,selector,classError,selectNote,note){
        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!value.match(regexEmail)){
            document.querySelector(selector).classList.add(classError);
            document.querySelector(selectNote).innerHTML = note;
            return false;
        }
        document.querySelector(selector).classList.remove(classError);
        document.querySelector(selectNote).innerHTML = '';
        return true;
    }
    this.checkNumber = function(value, selector, classError,selectNote,note){
        var regexNumber = /^\d+$/;
        if(!value.match(regexNumber)){
            document.querySelector(selector).classList.add(classError);
            document.querySelector(selectNote).innerHTML = note;
            return false;
        }
        if(value < 0 || value > 10){
            document.querySelector(selector).classList.add(classError);
            document.querySelector(selectNote).innerHTML = note;
            return false;
        }
        document.querySelector(selector).classList.remove(classError);
        document.querySelector(selectNote).innerHTML = '';
        return true;
    }
    this.checkLength = function(value, minLength, maxLength, selector, classError, selectNote, note){
        if(value.trim().length < minLength || value.trim().length > maxLength){
            document.querySelector(selector).classList.add(classError);
            document.querySelector(selectNote).innerHTML = note;
            return false;
        }
        document.querySelector(selector).classList.remove(classError);
        document.querySelector(selectNote).innerHTML = '';
        return true;
    }
    
}