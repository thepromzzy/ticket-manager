import { useState } from 'react';
import { useTickets } from './useTickets';

export default function TicketForm({ onCreated }) {
  const { createTicket } = useTickets();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    createTicket({ title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
    onCreated?.();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <h2>Create New Ticket</h2>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Short summary"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Details (optional)"
        />
      </div>

      <button type="submit">Add Ticket</button>
    </form>
  );
}