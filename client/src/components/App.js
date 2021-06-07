import "./App.scss";

import Nav from './Nav';

export default function App() {

  return (
    <main className="layout">
      
      <nav className="sidebar__menu sidebar--centered">
        <Nav />
      </nav>
      
      <section className="content">
        <h1>Title of Component</h1>
        <p>This is where the content will go.</p>
      </section>
    </main>
  );
}
