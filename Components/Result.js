import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../API";

import { useDispatch } from "react-redux";
import { ShowResult } from "../Reducer/Actions";

const Result = () => {
  let Dispatch = useDispatch();
  let [Res, setRes] = useState(null);

  let Stats = useSelector((Stat) => {
    return Stat.Reducer;
  });

  useEffect(() => {
    let UserArray = Stats.UserArray;
    let Sum = 0;
    API.map((Elem, Ind) => {
      if (Elem.Answer == UserArray[Ind]) {
        ++Sum;
      }
    });
    setRes(Sum);
  }, []);

  return (
    <>
      <div className="flex flex-col sm:grid h-auto w-[90vw] sm:w-[50vw] sm:grid-cols-12 sm:grid-rows-2 sm:gap-2 relative">
        <div className="Left sm:col-span-7 sm:row-span-2">
          <div className="A bg-[#34495e] mb-2 p-3 space-x-5 justify-between All items-center ">
            <p>Result {Math.floor((Res/API.length)*100)}%</p>
            <div className="P-1 bg-black rounded-full h-[100px] w-[100px] flex justify-center items-center overflow-hidden">
              <p style={{"background":`conic-gradient(#4bcffa 0 ${(Res/API.length)*100}%, transparent 0 0%)`}} className="w-[100%] h-[100%] flex items-center justify-center"></p>
            </div>
          </div>
          <div className="B bg-[#1abc9c] p-3 flex All justify-between text-center">
            <div className="B1">
              <p>Total</p>
              <p>{API.length}</p>
            </div>
            <div className="B1">
              <p>Correct</p>
              <p>{Res}</p>
            </div>
            <div className="B1">
              <p>Wrong</p>
              <p>{API.length - Res}</p>
            </div>
          </div>
        </div>

        <div className="Right sm:col-span-5 sm:row-span-2">
          <div className="C bg-[#9b59b6] h-[30vh] sm:h-max p-3 sm:w-max sm:max-h-[100%] All flex-col overflow-scroll w-[90vw] mt-2 sm:mt-0 absolute">
            {API.map((Elem, Ind) => {
              return (
                <div>
                  <p>Question # {Ind + 1}</p>
                  <p className="text-[#ffdd59]">
                    Ans: {Elem.Options[Elem.Answer]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
