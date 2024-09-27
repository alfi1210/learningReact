import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDialogButton from './components/dialog.button/my.dialog.button';
import { Button } from 'react-bootstrap';
import NamesAgeComponent from './components/names.age/names.age';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(0)
  //const queryClient = useQueryClient();

  function handleClickOld() {
    setCount((count) => count + 1);
  }

  const handleClickNew = (a: number) => {
    setCount((count) => count + a);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            1. count is {count}
          </button>
          <button onClick={handleClickOld}>
            2. count is {count}
          </button>
          <button onClick={() => handleClickNew(2)}>
            3. count is {count}
          </button>

          <button onClick={handleReset}>
            reset all
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>

          <MyDialogButton dialogTitle="Title" dialogContent={
            <div>
              <input ref={inputRef} type="text" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} />
              <div>
                <span>Value: {inputValue}</span>
              </div>
            </div>
          } dialogFooter={
            <Button variant="secondary" onClick={() => alert(inputRef.current?.value)}>
              Show Value
            </Button>
          }>
            Click Me
          </MyDialogButton>


          <MyDialogButton dialogTitle="Title" dialogContent={
            <NamesAgeComponent names={['Alfred', 'Sandi', 'Manfred', 'Fred', 'Marko']} />
          }>
            Click Me to load data!!!
          </MyDialogButton>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </QueryClientProvider>
    </>
  )
}

export default App
