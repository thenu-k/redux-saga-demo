import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { InterfaceReduxState, setCount } from "./stateManager/mainSlice"


const App: FC = () => {

  const count = useSelector((state: InterfaceReduxState)=> state.count)
  const dispatch = useDispatch()
  console.log(count)

  return (
    <>
      <h1>{count}</h1>
      <button>Inc</button>
      <button>Dec</button>
    </>
  )
}

export default App