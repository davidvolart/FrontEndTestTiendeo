const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM:  "DELETE_ITEM",
    UPDATE_ITEM: "UPDATE_ITEM"
};

const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
});

const deleteItem = id => ({
  type: Types.DELETE_ITEM,
  payload: id
});

const updateItem = target => ({
  type: Types.UPDATE_ITEM,
  payload: target
});

  export default {
    createItem,
    deleteItem,
    updateItem,
    Types,
  };