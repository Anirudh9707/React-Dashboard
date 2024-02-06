
  // src/store/reducers.js
  const initialState = {
    employeeData: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMPLOYEE_DATA':
        return {
          ...state,
          employeeData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;