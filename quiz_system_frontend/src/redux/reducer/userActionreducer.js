import { LOADING,TOKEN,EMAIL,SAVEDQUES, TESTPROGRESS } from "../actions/actionTypes"

const intialState = {
    token : "",
    loading : false,
    email:"",
    savedques : {location : "",pagenos :[]},
    testprogress : {location : "",quesno : ""}
}

const userActionreducer = (state = intialState,action)=>{
   switch(action.type)
   {
    case TOKEN : return (
                          {...state,token:action.payload} )

    case LOADING : return ({...state,loading:action.payload})

    case EMAIL : return ({...state,email:action.payload})

    case SAVEDQUES : return ({...state,savedques:action.payload})

    case TESTPROGRESS : return ({...state,testprogress : action.payload})

    default : return (state);
   }
}

export default userActionreducer;