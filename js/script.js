let a;

function showHide() {
    if(a == 1) {
        document.querySelector(".password").type="password";
        document.querySelector(".eye-icon").src="./img/off.png";
        a=0;
    }
    else {
        document.querySelector(".password").type="text";
        document.querySelector(".eye-icon").src="./img/on.png";
        a=1;
    }
}