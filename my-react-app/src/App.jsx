import { useState } from 'react'
import TicketForm from './TicketForm'
import TicketList from './TicketList';
import LandingPage from './LandingPage';
import './App.css'
import './LandingPage.css'

function App() {
  const [refresh, setRefresh] = useState(0);

  const handleNewTicket = () => setRefresh((r) => r + 1);

  return (
    <div className="container">
      <header className="header">
        <h1>Ticket Manager</h1>
      </header>

      <main className="main">
        <section className="hero-section">
          <LandingPage onCreated={handleNewTicket} />
        </section>

        <section className="form-section">
          <TicketForm onCreated={handleNewTicket} />
        </section>

        <section className="list-section">
          <TicketList key={refresh} />
        </section>
      </main>
    </div>
  );
}

export default App
