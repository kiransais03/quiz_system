import { LOADING,TOKEN,EMAIL } from "../actions/actionTypes"

const intialState = {
    token : "",
    loading : false,
    email:""
}

const userActionreducer = (state = intialState,action)=>{
   switch(action.type)
   {
    case TOKEN : return (
                          {...state,token:action.payload} )

    case LOADING : return ({...state,loading:action.payload})

    case EMAIL : return ({...state,email:action.payload})

    default : return (state);
   }
}

export default userActionreducer;