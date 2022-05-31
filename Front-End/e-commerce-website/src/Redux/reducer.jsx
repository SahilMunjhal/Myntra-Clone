import { HOMEDATA } from "./action";

const intialstate={
    homedata:[]
}

export const Reducer=(store=intialstate,{type,payload})=>{
       switch(type){
           case HOMEDATA:
               return {...store,homedata:payload}
            default :
              return store;
       }
}
