const Types = {
    CREATE_ITEM: "CREATE_ITEM",
};

const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
});

  export default {
    createItem,
    Types,
  };