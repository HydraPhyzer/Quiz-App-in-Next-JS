import React, { useEffect, useState } from "react";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec, UserSelecOption } from "../Reducer/Actions";

const Question = () => {
  let [State,setState]=useState(null);
  let [Index,setIndex]=useState(null);

  let Dispatch = useDispatch();
  let Stats = useSelector((Stat) => {
    return Stat.Reducer;
  });

  useEffect(()=>
  {
    if(Stats.UserArray[Stats.Value]!=null)
    {
      setIndex(Stats.UserArray[Stats.Value])
      setState(true)
    }
    else
    {
      setState(false)
      setIndex(null)
    }
  })

  return (
    <>
      <div className="text-white p-3 my-2 bg-black rounded-md">
        <div className="Ask">
          Question : {`${API[Stats.Value].Question} ? `}{" "}
        </div>

        <div className="Options">
          {API[Stats.Value].Options.map((Elem, Ind) => {
            return (
              <label
                key={Ind}
                onClick={() => {  
                  Dispatch(UserSelecOption(Stats.Value, Ind));
                }}
                htmlFor={Ind}
                className="flex space-x-2 Blur my-3 p-2 rounded-md items-center"
              >
                <input
                  type="radio"
                  id={Ind}
                  name={Stats.Value}
                  value={Elem}
                  className={`appearance-none bg-white h-[15px] w-[15px] rounded-full bg-${(Index!==null &&Index==Ind ) && 'yellow-500'}`}
                />
                <p>{Elem}</p>
              </label>
            );
          })}
        </div>
      </div>
      <div className="Buttons flex w-[100%] justify-between space-x-2">
        <div
          onClick={() => {
            Dispatch(Dec());
          }}
          className="B1 bg-yellow-500 w-[50%] p-2 rounded-md cursor-pointer text-center"
        >
          Previous
        </div>
        <div
          onClick={() => {
            Dispatch(Inc());
          }}
          className={`B2 ${
            Stats.Value != API.length - 1
              ? "text-center block bg-yellow-500 w-[50%] p-2 rounded-md cursor-pointer"
              : "hidden"
          }`}
        >
          Next
        </div>
        <div
          className={`B3 ${
            Stats.Value == API.length - 1
              ? "block bg-red-500 text-white w-[50%] p-2 rounded-md cursor-pointer text-center"
              : "hidden"
          }`}
        >
          Submit
        </div>
      </div>
    </>
  );
};

export default Question;
