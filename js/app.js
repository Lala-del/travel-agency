const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));






(function($) {
  $(document).ready(function() {
    var customSelect = $(".custom-select");

    customSelect.each(function() {
      var thisCustomSelect = $(this),
        options = thisCustomSelect.find("option"),
        firstOptionText = options.first().text();

      var selectedItem = $("<div></div>", {
        class: "selected-item"
      })
        .appendTo(thisCustomSelect)
        .text(firstOptionText);

      var allItems = $("<div></div>", {
        class: "all-items all-items-hide"
      }).appendTo(thisCustomSelect);

      options.each(function() {
        var that = $(this),
          optionText = that.text();

        var item = $("<div></div>", {
          class: "item",
          on: {
            click: function() {
              var selectedOptionText = that.text();
              selectedItem.text(selectedOptionText).removeClass("arrowanim");
              allItems.addClass("all-items-hide");
            }
          }
        })
          .appendTo(allItems)
          .text(optionText);
      });
    });

    var selectedItem = $(".selected-item"),
      allItems = $(".all-items");

    selectedItem.on("click", function(e) {
      var currentSelectedItem = $(this),
        currentAllItems = currentSelectedItem.next(".all-items");

      allItems.not(currentAllItems).addClass("all-items-hide");
      selectedItem.not(currentSelectedItem).removeClass("arrowanim");

      currentAllItems.toggleClass("all-items-hide");
      currentSelectedItem.toggleClass("arrowanim");

      e.stopPropagation();
    });

    $(document).on("click", function() {
      var opened = $(".all-items:not(.all-items-hide)"),
        index = opened.parent().index();

      customSelect
        .eq(index)
        .find(".all-items")
        .addClass("all-items-hide");
      customSelect
        .eq(index)
        .find(".selected-item")
        .removeClass("arrowanim");
    });
  });
})(jQuery);

    



// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplay: true,
    
// });

var owl = $('#owl-demo');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    },
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: true,
		dots: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: ["<span class='arrow-icon-left'></span>", "<span class='arrow-icon-right'></span>"],
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})




var owl = $('#slider-header');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: false,
		dots: false,
		loop: true
		// navText: ["<span class='arrow-icon-left'></span>", "<span class='arrow-icon-right'></span>"],
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



var owl = $('#slider-tour');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: false,
		dots: false,
		loop: true,
		navText: ["<span class='icon-tour-left'></span>", "<span class='icon-tour-right'></span>"],
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

