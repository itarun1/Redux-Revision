
const initialState={
    num:0,
    todo:[]
}
export const reducer=(store=initialState,{type,payload})=>{
   switch(type){
       case "ADD":
           return{...store,num:store.num+payload}
           case "SUB":
           return{...store,num:store.num-payload} 
           case "MUL":
           return{...store,num:store.num*payload} 
           case "DIV":
           return{...store,num:Math.floor(store.num/payload)} 
           case "ADD_TODO":
           return{...store,todo:[...payload]} 
           case "DEL_TODO":
           return{...store,payload} 
           default:
               return store
   }
}