window.addEventListener("DOMContentLoaded", function(){
     'use strict';
    let infoHeader = document.querySelector('.info-header'),
        infoHeaderTab = document.querySelectorAll('.info-header-tab'),
        infoTabContent = document.querySelectorAll('.info-tabcontent');
    

        function hideTabContent (a){
            for(let i = a; i < infoTabContent.length; i++){
              infoTabContent[i].classList.remove('show');
              infoTabContent[i].classList.add("hide");
            }
        }
        
    hideTabContent(1);

        function showTabContent(b){
            if (infoTabContent[b].classList.contains("hide")){
                infoTabContent[b].classList.remove('hide');
                infoTabContent[b].classList.add("show");    
            }
        }
    
        
        infoHeader.addEventListener('click', function(event){
          let target = event.target;
            if(target && target.classList.contains("info-header-tab")){
                for(let i = 0; i <infoHeaderTab.length; i++){
                    if(target == infoHeaderTab[i]){
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }

        });


});