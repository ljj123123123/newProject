     
  var mySwiper = new Swiper ('#banner', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'fade',
    autoplay:true,
     

    pagination: {
        el: '.swiper-pagination',
        
      },

      // 如果需要分页器
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }) 


  var mySwiper1 = new Swiper ('#order', {
    
  
    direction: 'horizontal',
    loop: true,
    // effect: 'fade', 
    autoplay:true, 
    slidesPerView : 3,
    slidesPerGroup : 3,
    
    // 循环模式选项
      
 
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    

  })    
             
