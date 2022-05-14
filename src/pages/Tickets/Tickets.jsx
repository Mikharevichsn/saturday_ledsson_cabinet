import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, markAsDone } from "redux/actions/ticketActions";

export const Tickets = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((store) => store.ticket.tickets);

  const deleteTicket = (id) => {
    dispatch(remove(id));
  };

  const closeTicket = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <div>
      Tickets
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <h4>{ticket.title}</h4>
            <h6>Статус: {ticket.isDone ? "Завершен" : "Не завершен"}</h6>
            <p>{ticket.description}</p>
            <button onClick={() => deleteTicket(ticket.id)}>Удалить</button>
            {!ticket.isDone && (
              <button onClick={() => closeTicket(ticket.id)}>
                Закрыть тикет
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
