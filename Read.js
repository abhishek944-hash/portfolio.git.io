const readMoreBtn = document.getElementById("read-more");
const hiddPargraphs = document.querySelectorAll(".hidden-element");
let isHidden = true;

readMoreBtn.addEventListener("click",function(event){
    event.preventDefault(); //it is for prent the link from navigating

    hiddPargraphs.forEach((paragraph)=>{
        paragraph.style.display= isHidden? "none" : "block";
    });

    readMoreBtn.textContent = isHidden ? "Read More" : "Read Less";
    isHidden = !isHidden;
});