import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, defaultValue } from '../src/app/feature/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      {/* <h2>This is a redux app</h2> */}
      <h2 style={{color: "black"}}>State Management Using Redux Toolkit</h2>
        <h1>
          <span style={{ margin: "4px", color: "blue" }}>
            {count}
          </span>
        </h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{ margin: "4px", color: "green" }}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{ margin: "4px", color: "red" }}
        >
          Decrement
        </button>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
          style={{ margin: "4px", color: "yellow" }}
        >
          Increment by 5
        </button>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(defaultValue(0))}
          style={{ margin: "4px", color: "white" }}
        >
        Reset Value
        </button>

      </div>
    </>
  )
}

export default App
