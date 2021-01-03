
// ===================================================
// init

$(".owl-carousel1").on("initialized.owl.carousel", () => {
    setTimeout(() => {
      $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
      $("section").show();
    }, 200);
  });
  
  const $owlCarousel = $(".owl-carousel1").owlCarousel({
    items: 1,
    loop: true,
    nav: true
    // navText: [
    //   '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    //   '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
    // ]
  });
  
  $owlCarousel.on("changed.owl.carousel", e => {
    $(".owl-slide-animated").removeClass("is-transitioned");
  
    const $currentOwlItem = $(".owl-item").eq(e.item.index);
    $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
  
    const $target = $currentOwlItem.find(".owl-slide-text");
    doDotsCalculations($target);
  });
  
  $owlCarousel.on("resize.owl.carousel", () => {
    setTimeout(() => {
      setOwlDotsPosition();
    }, 500);
  });
  
  /*if there isn't content underneath the carousel*/
  //$owlCarousel.trigger("refresh.owl.carousel");
  
  setOwlDotsPosition();
  
  function setOwlDotsPosition() {
    const $target = $(".owl-item.active .owl-slide-text");
    doDotsCalculations($target);
  }
  
  function doDotsCalculations(el) {
    const height = el.height();
    const {top, left} = el.position();
    const res = height + top + 20;
  
    $(".owl-carousel1 .owl-dots").css({
      top: `${res}px`,
      left: `${left}px`
    });
  }



  $('.owl-carousel2').owlCarousel({
    center: true,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
          center:false,
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})




$('.owl-carousel3').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:true
      }
  }
})


$('.owl-carousel4').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:true
      }
  }
})


$('.owl-carousel5').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:2,
          nav:true,
          loop:true
      }
  }
})


$('.owl-carousel6').owlCarousel({
  center: true,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:true
      }
  }
})