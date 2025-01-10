import { useState } from 'react'
import './App.css'
import MemoContainer from './components/memoContainer/MemoContainer'
import SideBar from './components/sideBar/SideBar'

function App() {
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0)
  const [memos, setMemos] = useState([
    {
      title: 'title1',
      content: 'content1',
      createdAt: 0,
      updatedAt: 0
    },
    {
      title: 'title2',
      content: 'content2',
      createdAt: 0,
      updatedAt: 0
    }
  ])

  const setMemo = newMemo => {
    const newMemos = [...memos]
    newMemos[selectedMemoIndex] = { ...newMemo }
    setMemos(newMemos)
  }

  const addMemo = () => {
    setMemos([
      ...memos,
      {
        title: '제목 없음',
        content: '',
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime()
      }
    ])
    setSelectedMemoIndex(memos.length)
  }

  const deleteMemo = index => {
    console.log('Memos', memos)
    if (index == selectedMemoIndex) {
      setSelectedMemoIndex(0)
    }
    console.log('index ' + index)
    const newMemos = memos.filter((a, i) => {
      return i != index
    })
    console.log(newMemos, selectedMemoIndex)
    setMemos(newMemos)
  }

  return (
    <>
      <div className="app">
        <SideBar
          memos={memos}
          setMemos={setMemos}
          setSelectedMemoIndex={setSelectedMemoIndex}
          addMemo={addMemo}
          deleteMemo={deleteMemo}
        ></SideBar>
        <MemoContainer
          memo={memos[selectedMemoIndex]}
          setMemo={setMemo}
        ></MemoContainer>
      </div>
    </>
  )
}

export default App
