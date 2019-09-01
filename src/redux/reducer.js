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

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState, { id: action.payload });
      newState.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.UPDATE_ITEM: {
      
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState, { id: action.payload.id });

      newState[index].title=action.payload.title;
      newState[index].description=action.payload.description;
      newState[index].url=action.payload.url;

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;