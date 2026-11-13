import { NavLink, Outlet } from 'react-router'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/teams">Teams</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <div>Footer</div>
    </>
  )
}

export default App
