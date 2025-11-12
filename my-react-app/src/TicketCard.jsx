export default function TicketCard({ ticket, onStatusChange, onDelete }) {
  const toggleStatus = () => {
    const newStatus = ticket.status === 'open' ? 'closed' : 'open';
    onStatusChange(ticket.id, { status: newStatus });
  };

  return (
    <article className="ticket-card">
      <header>
        <h3>{ticket.title}</h3>
        <span className={`status ${ticket.status}`}>{ticket.status}</span>
      </header>

      {ticket.description && <p>{ticket.description}</p>}

      <footer>
        <button onClick={toggleStatus}>
          Mark as {ticket.status === 'open' ? 'Closed' : 'Open'}
        </button>
        <button className="delete" onClick={() => onDelete(ticket.id)}>
          Delete
        </button>
      </footer>
    </article>
  );
}