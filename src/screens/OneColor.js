import { View, Text } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";


const reducer=(state,action)=>{
  // state==={red:number, green:number, blue:number}
  // action==={type:'red' || 'green' || 'blue', payload:10 || -10}
  switch (action.type) {
    case 'red':
      if(state.red+action.payload>255 || state.red+action.payload<0) return state
      return {...state,red:state.red+action.payload}
    case 'green':
      if(state.green+action.payload>255 || state.green+action.payload<0) return state
      return {...state,green:state.green+action.payload}
    case 'blue':
      return state.blue+action.payload>255 || state.blue+action.payload<0 ? state:{...state,blue:state.blue+action.payload}
    default:
      return state
  }
}

const OneColor = () => {
  const [state, dispatch]=useReducer(reducer,{red:0,green:0,blue:0})
  const {red,green,blue}=state

  return (
    <View>
      <ColorCounter color='Red'
      onIncrease={()=>dispatch({type:'red',payload:10})} 
      onDecrease={()=>dispatch({type:'red',payload:-10})}/>

      <ColorCounter color='Green' 
      onIncrease={()=>dispatch({type:'green',payload:10})} 
      onDecrease={()=>dispatch({type:'green',payload:-10})}/>

      <ColorCounter color='Blue' 
      onIncrease={()=>dispatch({type:'blue',payload:10})} 
      onDecrease={()=>dispatch({type:'blue',payload:-10})}/>

      <View style={{height:200,width:200,backgroundColor:`rgb(${red}, ${green}, ${blue})`,alignSelf:'center',marginTop:40}}/>
      
    </View>
  );
};

export default OneColor;
