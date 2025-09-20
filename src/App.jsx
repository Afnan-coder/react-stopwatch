import './App.css'

function App() {


  return (
    <div className="flex flex-col m-auto w-fit p-10 items-center gap-10 text-4xl rounded-2xl text-white mt-20 bg-green-900">
      <h1 className="font-bold text-6xl">{"00:00:00"}</h1>
      <div className="buttons flex gap-2">
        <button className="bg-white text-blue-500 hover:scale-105 transition duration-500 rounded-xl px-4 outline-1 cursor-pointer py-1 text-xl font-bold" >Start</button>
        <button className="bg-white text-blue-500 hover:scale-105 transition duration-500 rounded-xl px-4 outline-1 cursor-pointer py-1 text-xl font-bold" >Stop</button>
        <button className="bg-white text-blue-500 hover:scale-105 transition duration-500 rounded-xl px-4 outline-1 cursor-pointer py-1 text-xl font-bold" >Reset</button>
      </div>
    </div>
  );
}

export default App;
