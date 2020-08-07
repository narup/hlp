// $(document).ready(function(){
//     //Mobile menu toggle
//     if ($('.navbar-burger').length) {
//         $('.navbar-burger').on("click", function(){

//             var menu_id = $(this).attr('data-target');
//             $(this).toggleClass('is-active');
//             $("#"+menu_id).toggleClass('is-active');
//             $('.navbar.is-light').toggleClass('is-dark-mobile')
//         });
//     }
//     //Animate left hamburger icon and open sidebar
//     $('.menu-icon-trigger').click(function(e){
//         e.preventDefault();
//         $('.menu-icon-wrapper').toggleClass('open');
//         $('.sidebar').toggleClass('is-active');
//     });

//     const bulmaCollapsibleInstances = bulmaCollapsible.attach('.is-collapsible');
//     // Loop into instances
//     bulmaCollapsibleInstances.forEach(bulmaCollapsibleInstance => {
//         // Check if current state is collapsed or not
//         bulmaCollapsibleInstance.collapsed();
//     });
// });
let tabsWithContent = (function () {
    let tabs = document.querySelectorAll('.tabs li');
    let tabsContent = document.querySelectorAll('.tab-content');
  
    let deactvateAllTabs = function () {
      tabs.forEach(function (tab) {
        tab.classList.remove('is-active');
      });
    };
  
    let hideTabsContent = function () {
      tabsContent.forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
    };
  
    let activateTabsContent = function (tab) {
      tabsContent[getIndex(tab)].classList.add('is-active');
    };
  
    let getIndex = function (el) {
      return [...el.parentElement.children].indexOf(el);
    };
  
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        deactvateAllTabs();
        hideTabsContent();
        tab.classList.add('is-active');
        activateTabsContent(tab);
      });
    })
  
    tabs[0].click();
  })();