import { useTickets } from './useTickets';
import TicketCard from './TicketCard';

export default function TicketList() {
  const { tickets, updateTicket, deleteTicket } = useTickets();

  return (
    <div>
      <h2>All Tickets ({tickets.length})</h2>
      {tickets.length === 0 ? (
        <p>No tickets yet – create one above</p>
      ) : (
        <div className="ticket-grid">
          {tickets.map((t) => (
            <TicketCard
              key={t.id}
              ticket={t}
              onStatusChange={updateTicket}
              onDelete={deleteTicket}
            />
          ))}
        </div>
      )}
    </div>
  );
}