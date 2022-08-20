let Obj = {
    Show:false,
};

let ReduceTwo = (State = {...Obj} , Action) => {
  switch (Action.type) {
    case "ShowResult":
      return {
        ...State,
        Show:true
      };
    default:
      return State;
  }
};

export default ReduceTwo;
