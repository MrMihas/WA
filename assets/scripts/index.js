// change language
let languages = document.querySelectorAll('.language--change');

for (let i = 0; i < languages.length; i++) {
    
    languages[i].addEventListener('click', function(){
        var current = document.querySelectorAll(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    
}

// language.forEach(item => {
//     item.addEventListener('click', function(e){
//         e.preventDefault;
//         if(item.classList.contains('active')){
//              item.classList.remove('active');
//         }
      
//     })
// });