import React, { useState } from "react";
import API from "../API";
import { useSelector ,useDispatch} from "react-redux";
import { Inc, Dec } from "../Reducer/Actions";

const Question = () => {

  let Dispatch=useDispatch()
  let Stats = useSelector((Stat) => {
    return Stat.Reducer;
  });

  return (
    <>
      <div className="text-white p-3 my-2 bg-black rounded-md">
        <div className="Ask">Question : {`${API[Stats.Value].Question} ? `} </div>

        <div className="Options">
          {API[Stats.Value].Options.map((Elem, Ind) => {
            return (
              <label
                htmlFor={Ind}
                className="flex space-x-2 Blur my-3 p-2 rounded-md items-center"
              >
                <input
                  type="radio"
                  id={Ind}
                  name={Stats.Value}
                  value={Elem}
                  className="appearance-none bg-white h-[15px] w-[15px] rounded-full checked:bg-yellow-500"
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
          className="B1 bg-yellow-500 w-[50%] p-2 rounded-md cursor-pointer"
        >
          Previous
        </div>
        <div
          onClick={() => {
            Dispatch(Inc());
          }}
          className="B2 bg-yellow-500 w-[50%] p-2 rounded-md cursor-pointer"
        >
          Next
        </div>
        <div className="B3 hidden">Submit</div>
      </div>
    </>
  );
};

export default Question;
