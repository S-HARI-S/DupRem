import { BrowserRouter as Router, Route, Routes , Link , useNavigate} from "react-router-dom";
let myArray = [];
let str;



export default function Tetx() {

    const navigate = useNavigate();
  

  let k = 0;
  function handleClick() {
    str = document.getElementById("message").value;
    if (str == "") {
      alert("This cant be blank");
    } else {
      navigate("/buttons");
      console.log(str);

      split();

      for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
      }
    }
  }

  function split() {
    for (let i = 0; i < str.length; i++) {
        myArray[k] = str[i];
        k++;
    }
  }



  return (
    <>
            <div className="flex justify-center items-center">
          <h1 className="mt-8 text-8xl text-white">Duplicate remover</h1>
        </div>
      <div className="mt-40 flex justify-center w-screen h-96 items-center flex-col">
        <div className="text">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type a string
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write string here"
          ></textarea>
        </div>

        <button
          type="button"
          onClick={handleClick}

          className=" mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button> 

      </div>

    </>
  );
  
}

export {myArray};
