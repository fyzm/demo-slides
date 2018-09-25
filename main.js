let $buttons =  $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({transform:'translateX(-259px)'})
bindEvents()
$(next).on('click',function(){
  goToSlide(current+1)
})
$(previous).on('click',function(){
  goToSlide(current-1)
})

let timer = setInterval(function(){
  goToSlide(current+1)
},2000)
$('.container').on('mouseenter',function(){
  window.clearInterval(timer)
}).on('mouseleave',function(){
  timer = setInterval(function(){
    goToSlide(current+1)
  },2000)
})

function bindEvents(){
  $('#buttonWrapper').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlide(index)

  })
}

function goToSlide(index){
  if(index > $buttons.length-1){
    index = 0
  }else if(index < 0){
    index = $buttons.length - 1
  }
  console.log('current','index')
  console.log(current,index)
  if(current === $buttons.length - 1 && index === 0){
    //最后一张到第一张
    console.log('here')
    $slides.css({transform:`translateX(${-($buttons.length + 1) * 259}px)`})
      .one('transitionend',function(){
        $slides.hide()
        $slides.offset()
        $slides.css({transform:`translateX(${-(index+1)*259}px)`}).show()
      })
    
  }else if(current === 0 && index === $buttons.length -1){
    //从第一张到最后一张
    $slides.css({transform:`translateX(0px)`})
    .one('transitionend',function(){
      $slides.hide().offset()
      $slides.css({transform:`translateX(${-(index+1)*259}px)`}).show()
    })
  }else{
    $slides.css({transform:`translateX(${- (index+1) * 259}px)`})
  }
  current = index
}

function makeFakeSlides(){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length-1).clone(true)
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}


 /* $buttons.eq(0).on('click',function(){
    if(current == 2){
      console.log('最后一张到第一张')
      $slides.css({transform:'translateX(-1036px)'})
        .one('transitionend',function(){
          $slides.hide()
          .offset()
          $slides.css({transform:'translateX(-259px)'})
          .show()
        })
    }else{
      $slides.css({transform:'translateX(-259px)'})
    }
    current = 0
  })
  $buttons.eq(1).on('click',function(){
    console.log(current)
    $slides.css({transform:'translateX(-518px)'})
    current = 1
  })
  $buttons.eq(2).on('click',function(){
    if(current == 0){
      console.log('说明你是从第一张到最后一张')
      $slides.css({transform:'translateX(0)'})
      .one('transitionend',function(){
        $slides.hide()
        .offset()
        $slides.css({transform:'translateX(-777px)'})
        .show()
      })
    }
    $slides.css({transform:'translateX(-777px)'})
    current = 2
  })
}
*/







/*let n = 1
初始化()
let timer = setInterval(()=>{
  makeLeave(getImage(n))
  .one('transitionend',(e)=>{
    makeEnter($(e.currentTarget))
  })
  makeCurrent(getImage(n+1))
  n +=1
},2000)


document.addEventListener('visibilitychange',function(e){
  if(document.hidden){
    window.clearInterval(timer)
  }else{
    timer = setInterval(()=>{
      makeLeave(getImage(n))
      .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
      })
      makeCurrent(getImage(n+1))
      n +=1
    },2000)
  }
})












function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}


function x(n){
  if(n>3){
    n = n%3
    if (n===0){
      n =3
    }
  }// n =1 2 3
  return n
}

function 初始化(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}
function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
  return $node.removeClass('current leave').addClass('Enter')
}

*/


