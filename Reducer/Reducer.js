import API from "../API";

let Obj={
    UserArray:[],
    Value:0
}

let Reduce=(State=Obj , Action)=>
{
    switch(Action.type)
    {
        case "Inc" :
        return{
            ...State,
            Value:State.Value < API.length-1 ? State.Value + 1 : API.length-1
        }
        case "Dec" :
        return{
            ...State,
            Value:State.Value >0 ? State.Value - 1 : 0
        }
        default :
            return State
    }
}

export default Reduce