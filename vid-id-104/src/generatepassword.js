// this is old generatepassword function

function generatepassword(){
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numberchanged){
            str+="0123456789";
        }
        if(Characterchanged){
            str+="!@#$%%^&*()_+="
        }
        let pass="";
        for(let i=0;i<length;i++){
          pass+=str[Math.floor(Math.random()*str.length)]
        }

        setpassword(pass);
    }