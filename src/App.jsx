import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState(0)
  const [isRunnig, setIsRunnig] = useState(false)
  const timeRef = useRef(null)

  const start = () => {
   if (!isRunnig) {
    setIsRunnig(true)
    timeRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 20)
    }, 20);
   }
  }

  const stop = () => {
    clearInterval(timeRef.current)
    setIsRunnig(false)
  }

  const reset = () => {
    clearInterval(timeRef.current)
    setTime(0)
    setIsRunnig(false)
  }

  const formateTime = (time) => {
    const milliSeconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2)
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2)
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2)
    return `${minutes}:${seconds}:${milliSeconds}`
  }


  return (
    <div className="flex flex-col m-auto w-fit p-10 items-center gap-10 text-4xl rounded-2xl text-white mt-20 bg-green-900">
      <h1 className="font-bold text-6xl">{formateTime(time)}</h1>
      <div className="buttons flex gap-2">
        <button className="bg-white text-blue-500 hover:scale-105 transition duration-500 rounded-xl px-4 outline-1 cursor-pointer py-1 text-xl font-bold" onClick={start}>Start</button>
        <button className="bg-white text-blue-500 hover:scale-105 transition duration-500 rounded-xl px-4 outline-1 cursor-pointer py-1 text-xl font-bold" onClick={stop}>Stop</button>
        <button className="bg-white text-blue-500 hover:scale-105 transition duration-500 rounded-xl px-4 outline-1 cursor-pointer py-1 text-xl font-bold" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
