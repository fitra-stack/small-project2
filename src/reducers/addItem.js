const initialState = {
    counter: 0,
  }

const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD') 
    {
      return {
        ...state,
        counter: state.counter + 1
      }
    }
    if (action.type === 'MIN') 
    {
      return {
        ...state,
        counter: state.counter - 1
      }
    }
    return state;
}
  
export default rootReducer;