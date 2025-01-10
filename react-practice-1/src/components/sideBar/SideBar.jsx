import MemoList from './MemoList/MemoList'
import './SideBar.css'
import SideBarFooter from './SideBarFooter/SideBarFooter'
import SideBarHeader from './SideBarHeader/SideBarHeader'
function SideBar({ memos, setSelectedMemoIndex, addMemo, deleteMemo }) {
  return (
    <div className="sideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter addMemo={addMemo} />
    </div>
  )
}
export default SideBar
