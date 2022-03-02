const navToggle=document.querySelector(".nav-toggle");
const sidebar=document.querySelector(".sidebar");
const toggleIcon=document.querySelector(".bars");
// toggeling
navToggle.addEventListener("click",(e)=>{
if(toggleIcon.classList.contains("fa-bars"))
{ 
    sidebar.style.left=0;
   toggleIcon.classList.replace("fa-bars","fa-times")
}
  else{
      sidebar.style.left="-50rem";
      toggleIcon.classList.replace("fa-times","fa-bars")
  }

})