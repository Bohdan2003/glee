$(function(){

    $('.related__slider').slick({
        slidesToShow:4,
        slidesToScroll:2,
        infinite: false,
    });

    $('.descr__top-link').on('click',function(e){
        e.preventDefault();
        $('.descr__top-link').removeClass('descr__top-link--active');
        $(this).addClass('descr__top-link--active');
        $('.descr__bottom-item').removeClass('descr__bottom-item--active');
        $($(this).attr('href')).addClass('descr__bottom-item--active');
    });

    $('.product-detalis__input').styler();

    $('.product-slide__small').slick({
        asNavFor:'.product-slide__big',
        slidesToShow: 3,
        vertical:true,
        arrows:false,
        focusOnSelect: true,
        draggable:false
    });

    $('.product-slide__big').slick({
        asNavFor:'.product-slide__small',
        slidesToShow: 1,
        arrows:false,
        draggable:false,
        fade:true
    });

    $('.star').rateYo({
        readOnly: true,
        ratedFill: "#ffcc00",
        starWidth: "11px",
        spacing: "8px",
        starSvg:' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="17px" viewBox="0 0 19 17" version="1.1"> <g id="surface1"> <path d="M 8.554688 0.589844 L 6.398438 4.988281 L 1.578125 5.695312 C 0.714844 5.820312 0.371094 6.894531 0.996094 7.507812 L 4.484375 10.925781 L 3.65625 15.757812 C 3.507812 16.632812 4.421875 17.285156 5.1875 16.878906 L 9.5 14.597656 L 13.8125 16.878906 C 14.578125 17.28125 15.492188 16.632812 15.34375 15.757812 L 14.515625 10.925781 L 18.003906 7.507812 C 18.628906 6.894531 18.285156 5.820312 17.421875 5.695312 L 12.601562 4.988281 L 10.445312 0.589844 C 10.0625 -0.191406 8.941406 -0.203125 8.554688 0.589844 Z M 8.554688 0.589844 " /> </g> </svg>',
    }); 
    $('.products__star, .product-detalis__star').rateYo({
        readOnly: true,
        ratedFill: "#ffcc00",
        starWidth: "18px",
        spacing: "13px",
        starSvg:' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="17px" viewBox="0 0 19 17" version="1.1"> <g id="surface1"> <path d="M 8.554688 0.589844 L 6.398438 4.988281 L 1.578125 5.695312 C 0.714844 5.820312 0.371094 6.894531 0.996094 7.507812 L 4.484375 10.925781 L 3.65625 15.757812 C 3.507812 16.632812 4.421875 17.285156 5.1875 16.878906 L 9.5 14.597656 L 13.8125 16.878906 C 14.578125 17.28125 15.492188 16.632812 15.34375 15.757812 L 14.515625 10.925781 L 18.003906 7.507812 C 18.628906 6.894531 18.285156 5.820312 17.421875 5.695312 L 12.601562 4.988281 L 10.445312 0.589844 C 10.0625 -0.191406 8.941406 -0.203125 8.554688 0.589844 Z M 8.554688 0.589844 " /> </g> </svg>',
    }); 

  var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance;

   $(".js-range-slider").ionRangeSlider({
      type: "double",
      step: 0.25,
      onStart: updateInputs,
      onChange: updateInputs,
      onFinish: updateInputs
   });

   instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from ='$'+ data.from.toFixed(2);
        to = '$'+ data.to.toFixed(2);
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
   }

   $inputFrom.on("change", function () {
      var val = $(this).prop("value");
  
      // validate
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
  
      instance.update({
          from: val
      });
  
      $(this).prop("value", val);
  
  });
  
  $inputTo.on("change", function () {
      var val = $(this).prop("value");
  
      // validate
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
  
      instance.update({
          to: val
      });
  
      $(this).prop("value", val);
  });




  

   $('.slider-content__items').slick({
        arrows:false,
        dots:true,
        fade:true,
      //   autoplay:true,
      //   autoplaySpeed:3000
   });

   var mixer = mixitup('.products__items');
   var mixer = mixitup('.design__items');
});