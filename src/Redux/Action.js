export const ADD="ADD"
export const SUB="SUB"
export const MUL="MUL"
export const DIV="DIV"
export const ADD_TODO="ADD_TODO"
export const DEL_TODO="DEL_TODO"

// we are dispatching action here
export const add=(payload)=>({type:ADD,payload})
export const sub=(payload)=>({type:SUB,payload})
export const mul=(payload)=>({type:MUL,payload})
export const div=(payload)=>({type:DIV,payload})
export const addTodo=(payload)=>({type:ADD_TODO,payload})
export const delTodo=(payload)=>({type:DEL_TODO,payload})