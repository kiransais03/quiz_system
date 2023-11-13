import { TOKEN,LOADING,EMAIL,SAVEDQUES } from "./actionTypes";


export const usertokenAdd = (tokendata)=>{
    return {type : TOKEN,
            payload : tokendata}
}

export const isLoading = (status)=>{
    return {  type : LOADING,
              payload : status
    }
}

export const emailAdd = (status)=>{
    return {  type : EMAIL,
                payload : status
    }
}

export const savedquesAdd = (obj)=>{
        return {  type : SAVEDQUES,
                  payload : obj
        }
}
