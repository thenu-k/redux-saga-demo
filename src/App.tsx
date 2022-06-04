import { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { InterfaceReduxState, setCount } from "./stateManager/mainSlice"


const App: FC = () => {

  // @ts-ignore
  const {count} = useSelector((state: InterfaceReduxState)=> state.count)
  const dispatch = useDispatch()

  const handleInc = ():void => {
    dispatch(setCount('ayo'))
  }
  const handleDec = ():void => {
    dispatch(setCount('ayo'))
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </>
  )
}

export default App