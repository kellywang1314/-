function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}

myPromise.prototype.then=function(onFullfilled,onRejected){
    let self=this;
    switch(self.status){
       case "resolved":
         onFullfilled(self.value);
         break;
       case "rejected":
         onRejected(self.reason);
         break;
       default:       
    }
}


// 另外一种方式
function myPromise(fn){
   let value = null,status = 'pending',callbacks = [],that = this

   this.then = function(onFullfilled,onRejected){
      return new myPromise(function(reso,reje){
         try{
            if (state == 'pending') {
               callbacks.push(fulfilled);
               //实现链式调用
               return;
           }else if(status === 'fullFilled'){
               let data = onFullfilled(value)
               reso(data)
               return 
            }else if(status === 'rejected'){
               let data = onRejected(value)
               reje(data)
               return
            }
         }catch(e){

         }
      })
      
   }

   function resolve(valueP){
      value = valueP
      status = 'fullFilled'
      exec()
   }
   function reject(valueP){
      value = valueP
      status = 'rejected'
      exec()
   }

   function exec(){
      //加入延时机制 防止promise里面有同步函数 导致resolve先执行 then还没注册上函数
      setTimeout(function(){
         callbacks.forEach(function(fn){
            value = fn(value)
         })
      },0)
   }
   try{
      fn(resolve,reject)
   }catch(e){
      reject(e)
   }
}