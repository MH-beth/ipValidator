function check(){
    // getting all the userinfo
    let fcon = document.ipInfo.fcon.value;
    let scon = document.ipInfo.scon.value;
    let tcon = document.ipInfo.tcon.value;
    let frcon = document.ipInfo.frcon.value;
    let result = document.getElementById('result');
    let ipShow = document.getElementById('ipShow'); //if the ip is correct it's will be shown
    let statue; // this will help if the ip is correct to show it
    // making 2 variables of false result and true one
    let trueIp = 'this ip address is correct';
    let falseIp = 'this ip address is incorrect';

    // in an ip every number have to be less than 256
    if(fcon >255 || scon > 255 || tcon >255 || frcon>255){
        result.textContent=falseIp;
    }
    // ip adress's numbers have to be between 0(only excluded in the first container)and should be inferior or equal to 255
    if((fcon <=255 && scon <=255 && tcon <=255 && frcon<=255)&&(fcon >=0 && scon >=0 && tcon >=0 && frcon>=0)){
        if(fcon.length >0 && scon.length >0 && tcon.length > 0 && frcon > 0){
            result.textContent = `${trueIp}`;
            statue = true;
        }
    }
    else if(fcon.length == 0 || scon.length == 0 || tcon.length == 0 || frcon == 0){
        result.textContent = `please complete the ip adress !`;
        statue = false;
    }
    else if(fcon == 0 && scon == 0 && tcon == 0 && frcon == 0){
        result.textContent = `${falseIp}`;
        statue = false;
    }
    else if(fcon >=1 && scon == 0 && tcon == 0 && frcon == 0){
        result.textContent = `${trueIp}`;
        statue = true;
    }
    else{
        result.textContent = `${falseIp}`;
        statue = false;
    }
    // show the ip
    // if the statue is true show the ip
    if(statue){
        ipShow.textContent = `${fcon}.${scon}.${tcon}.${frcon}`;
    }
    else{
        ipShow.textContent = `this ip is incorrect !`;
    }

    

}