import './styles.css'
function Sidebar(prop) {
  return (
    // <h1 className="sidebar-wrapper">ini sidebar</h1>
    <aside className="aside-sidebar">
      <p>{prop.contentSidebar}</p>
    </aside>
  )
}

export default Sidebar
