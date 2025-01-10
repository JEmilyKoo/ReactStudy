import './MemoContainer.css'
function MemoContainer({ memo, setMemo }) {
  return (
    <div className="memoContainer">
      <input
        type="text"
        className="memoTitle"
        value={memo.title}
        onChange={e =>
          setMemo({
            ...memo,
            title: e.target.value,
            updatedAt: new Date().getTime()
          })
        }
      />
      <div className="memoContentContainer">
        <textarea
          name="memoContent"
          id="memoContent"
          value={memo.content}
          onChange={e =>
            setMemo({
              ...memo,
              content: e.target.value,
              updatedAt: new Date().getTime()
            })
          }
          placeholder="메모의 내용을 입력하세요."
        />
      </div>
    </div>
  )
}
export default MemoContainer
