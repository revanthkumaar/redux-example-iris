

export default (state,action) => {

    switch(action.type) {
        case "START_ACTION":
            return{
                rotating: action.payload
            };
        case "STOP_ACTION":
            return{
                rotating:action.payload
            };
        default:
            return state;
    }


}