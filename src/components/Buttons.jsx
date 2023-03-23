import React, { useState, useEffect } from "react";
import { myArray } from "./Text";
import { generatePath, useNavigate } from "react-router-dom";

export default function Buttons() {


  const [letters, setLetters] = useState([]);

  console.log("bef is " + letters.length , letters);

  useEffect(() => {
    setLetters(myArray)
  }, []);



    function generateColor(index, value, colorMap) {
      let color = colorMap[value];
      if (!color) {
        let randomNumber = Math.floor(Math.random() * 16777215);
        color = "#" + randomNumber.toString(16);
        colorMap[value] = color;
      }
      document.getElementById(`button-${index}`).style.backgroundColor = color;
    }
    

  useEffect(() => {
    const colorMap = {};
    letters.forEach((item, index) => {
      generateColor(index, item, colorMap);
    });
  }, [letters]);


  

  function handleInput(value, index) {
    console.log("id is " + index, "val is " + value);

    const newArr = split(index, value);
    setLetters(newArr);
  }

  function split(j, x) {
    const newArr = [];  
    for (let i = 0; i < letters.length; i++) {
      if (i === j || letters[i] !== x) {
        newArr.push(letters[i]);
      }
    }
    return newArr;
  }
  const navigate = useNavigate();

  function clicked() {
    setLetters([]);
if(letters.length === 0)
{
    navigate("/");

}
    console.log("len is " + letters.length , letters);

  }


  
  return (
    <>
      <button
        onClick={clicked}
        className="m-10 bg-white hover:bg-white-700 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Back
      </button>
      <div className="flex justify-center items-center">
        {letters.map((letter, index) => (
          <span className="text-5xl text-white" key={index}>
            {letter}
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className="auto-rows-auto justify-center items-center min-w-fit">
          {letters.map((item, index) => (
            <button
              onClick={() => handleInput(item, index)}
              value={item}
              id={`button-${index}`}
              key={index}
              className="m-8 w-20 h-20 hover:bg-blue-700 text-white font-bold rounded"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
