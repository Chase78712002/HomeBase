import "./App.scss";

import Nav from './Nav';

export default function App() {

  return (
    <main className="layout">
      <section className="sidebar">
        <div className="sidebar__logo sidebar--centered">
          Insert logo
        </div>
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu sidebar--centered">
          <Nav />
        </nav>
      </section>
      <section className="content">
        <h1>Title of Component</h1>
        <p>This is where the content will go.</p>
      </section>
    </main>
  );
}
