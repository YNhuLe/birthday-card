import React, { useState } from "react";
import data from "./data";
import List from "./List";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <Header />
      <main>
        <section className="container">
          <h3>{people.length} Birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
