import './index.css';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
        <nav>
          <ul>
            <li><a href='/applications'>Applications</a></li>
            <li><a href='/configurations'>Configurations</a></li>
            <li><a href='/users'>Users</a></li>
          </ul>
        </nav>
      </aside>
    )
}