import { useEffect, useState } from 'react';


let MEMORY_STORE = [
  //{ id: 1, title: 'Login bug', description: 'Cannot sign in with Google', status: 'open', createdAt: new Date() },
 // { id: 2, title: 'UI glitch', description: 'Buttons misaligned on mobile', status: 'closed', createdAt: new Date() },
];

export function useTickets() {
  const [tickets, setTickets] = useState(MEMORY_STORE);

  
  useEffect(() => {
    setTickets([...MEMORY_STORE]);
  }, []);

  const createTicket = (newTicket) => {
    const ticket = {
      id: Date.now(),
      ...newTicket,
      status: 'open',
      createdAt: new Date(),
    };
    MEMORY_STORE = [...MEMORY_STORE, ticket];
    setTickets(MEMORY_STORE);
    return ticket;
  };

  const updateTicket = (id, updates) => {
    MEMORY_STORE = MEMORY_STORE.map((t) => (t.id === id ? { ...t, ...updates } : t));
    setTickets([...MEMORY_STORE]);
  };

  const deleteTicket = (id) => {
    MEMORY_STORE = MEMORY_STORE.filter((t) => t.id !== id);
    setTickets([...MEMORY_STORE]);
  };

  return { tickets, createTicket, updateTicket, deleteTicket };
}