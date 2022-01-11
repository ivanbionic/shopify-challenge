let hbtn = document.getElementById('btn');
  
function Toggle(){
    if(hbtn.classList.contains("far")) {
      hbtn.classList.remove("far");
      hbtn.classList.add("fas");
    }else{
        hbtn.classList.remove("fas");
        hbtn.classList.add("far");
    }
  }