function throttle(fn, duration){
  let timer = null
  
  return function(...args){
    if(timer !== null){
      return 
    }

    timer = setTimeout(()=>{
      timer = null
      fn.apply(this, args)
    },duration)
  }

}
