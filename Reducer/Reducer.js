import API from "../API";

let Obj = {
  UserArray:[],
  Value: 0,
};

let Reduce = (State = {...Obj} , Action) => {
  switch (Action.type) {
    case "Inc":
      return {
        ...State,
        Value: State.Value < API.length - 1 ? State.Value + 1 : API.length - 1,
      };
    case "Dec":
      return {
        ...State,
        Value: State.Value > 0 ? State.Value - 1 : 0,
      };
    case "Selected":
        let Arr = [...State.UserArray];
        Arr[Action.payload.Qu] = Action.payload.In;
        return{
          ...State,
            UserArray:[...Arr]
      }
    default:
      return State;
  }
};

export default Reduce;
