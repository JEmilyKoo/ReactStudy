import './SideBarFooter.css'
function SideBarFooter({ addMemo }) {
  return (
    <div className="sideBarFooter">
      <div
        className="addMemo"
        onClick={() => {
          addMemo()
        }}
      >
        +
      </div>
    </div>
  )
}
export default SideBarFooter
