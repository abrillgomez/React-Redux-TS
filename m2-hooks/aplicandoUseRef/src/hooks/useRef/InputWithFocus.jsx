import { useRef } from 'react'

export const InputWithFocus = () => {

  const inputRef = useRef()

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div>
        <input ref={inputRef} type="text" className="input-ref"/>
        <button onClick={focusInput}>Enfocar input</button>
    </div>
  )
}
