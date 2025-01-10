import './MemoList.css'
function MemoList({ memos, setSelectedMemoIndex, deleteMemo }) {
  return (
    <div className="memoList">
      {memos.map((memo, index) => (
        <div
          className="memo"
          key={index}
          onClick={() => {
            setSelectedMemoIndex(index)
          }}
        >
          <div>{memo.title}</div>
          <div
            className="deleteMemo"
            onClick={() => {
              deleteMemo(index)
            }}
          >
            -
          </div>
        </div>
      ))}
    </div>
  )
}
export default MemoList
