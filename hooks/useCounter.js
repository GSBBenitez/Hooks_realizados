import { useState } from "react"


 export const useCounter = (initialState = 10) => {


    const [state, setState] = useState(initialState);

    const incremente = () =>{
       setState(state + 1);
    }

    const decremente = () =>{
      setState(state - 1);
   }


  // const incremente = (factor = 1) =>{
  //     setState(state + factor);
  // }

  // const decremente = (factor = 1) =>{
  //   setState(state - factor);
  // }

  // const reset = ()=>{
  //   setState(initialState);
  // }

   return {
    state,
    incremente,
    decremente,
    
    
   }
}
