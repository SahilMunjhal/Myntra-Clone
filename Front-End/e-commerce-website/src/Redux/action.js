export const HOMEDATA="HOMEDATA";


export const homeData=(payload)=>{
    console.log(payload);
    return({
        type:HOMEDATA,
        payload
    }
  )
};

