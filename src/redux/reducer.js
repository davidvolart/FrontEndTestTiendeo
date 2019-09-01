import ACTIONS from "./action";
import _ from "lodash";


const reducer = (state = [], action) => {
  switch (action.type) {
    
    case ACTIONS.Types.CREATE_ITEM: {
      let item = action.payload;
      let maxId = 0;
      state.forEach(function(element) {
        if(element.id > maxId){
            maxId = element.id;
        }
      });
      item.id = maxId + 1;
      let newState = _.cloneDeep(state); 
      newState.push(item);
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;