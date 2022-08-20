import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import API from "../API";

const Result = () => {
    let [Res,setRes]=useState(null)

  let Stats = useSelector((Stat) => {
    return Stat.Reducer;
  });

  useEffect(() => {
    let UserArray=Stats.UserArray;
    let Sum=0
    API.map((Elem ,Ind)=>
    {
        if(Elem.Answer==UserArray[Ind])
        {
            ++Sum
        }
    })
    setRes(Sum)
  },[]);

  return (
    <div className="grid w-100 max-w[50vw] grid-cols-12 grid-rows-2 gap-2 relative">
      <div className="Left col-span-7 row-span-2">
        <div className="A bg-[#34495e] mb-2 p-3 space-x-5 All items-center ">
          <p>Result 20%</p>
          <div className="P-1 bg-black rounded-full h-[100px] w-[100px] flex justify-center items-center overflow-hidden">
            <p className="ABC w-[100%] h-[100%] flex items-center justify-center"></p>
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
                <p>{API.length-Res}</p>
            </div>
        </div>
      </div>

      <div className="Right col-span-5 row-span-2">
        <div className="C bg-[#9b59b6] p-3 h-[100%] absolute All flex-col overflow-scroll w-max">
          {
            API.map((Elem,Ind)=>
            {
                return(
                    <div>
                        <p>Question # {Ind+1}</p>
                        <p className="text-[#ffdd59]">Ans: {Elem.Options[Elem.Answer]}</p>
                        <p>Question # {Ind+1}</p>
                        <p className="text-[#ffdd59]">Ans: {Elem.Options[Elem.Answer]}</p>
                        <p>Question # {Ind+1}</p>
                        <p className="text-[#ffdd59]">Ans: {Elem.Options[Elem.Answer]}</p>
                    </div>
                )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Result;
