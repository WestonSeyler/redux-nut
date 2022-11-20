export default function createStore(reducer) {
  let currentStore;
  let currentListener = [];
  function getState() {
    return currentStore;
  }
  function dispatch(action) {
    currentStore = reducer(currentStore, action);
    currentListener.forEach((i) => i());
  }
  dispatch("ADDWDDD?DDDD");
  function subscribe(listener) {
    currentListener.push(listener);
    return () => {
      const index = currentListener.indexOf(listener);
      currentListener.splice(index, 1);
    };
  }
  return {
    getState,
    dispatch,
    subscribe,
    currentStore,
  };
}
