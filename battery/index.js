{/* <span id="charge" class="fa"></span> */}

const chargeLoad =()=>{
    let charge = document.getElementById("charge");
    charge.innerHTML= '&#xf244';

    setTimeout(()=>{
        charge.innerHTML= '&#xf243';
    },1000);

    setTimeout(()=>{
        charge.innerHTML= '&#xf242';
    },2000);

    setTimeout(()=>{
        charge.innerHTML= '&#xf241';
    },3000);

    setTimeout(()=>{
        charge.innerHTML= '&#xf240';
    },4000);





}
chargeLoad();

