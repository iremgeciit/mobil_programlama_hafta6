import { createContext, useContext, useState } from "react";
import { tickets as initialTickets } from "../data/tickets";

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState(initialTickets);

  const addTicket = (ticket) => {
    setTickets((current) => [
      ...current,
      {
        ...ticket,
        id: Date.now().toString(),
        status: "Açık",
      },
    ]);
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
}

export function useTickets() {
  return useContext(TicketContext);
}
