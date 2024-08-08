'use client'

import React, { useRef } from 'react'
import Input from '../components/input'
import { useHistory } from '../components/history/hook'
import { banner } from '../utils/bin'
import { History } from '../components/history/History'

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickAnywhere = () => {
    inputRef.current!.focus()
  }

  const containerRef = React.useRef(null)
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([])

  const init = React.useCallback(() => setHistory(banner()), [])

  React.useEffect(() => {
    init()
  }, [init])

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView()
      inputRef.current.focus({ preventScroll: true })
    }
  }, [history])

  return (
    <div onClick={onClickAnywhere}>
      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </div>
  )
}
