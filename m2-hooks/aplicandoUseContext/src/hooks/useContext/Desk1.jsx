import { useContext } from "react";
import SharedNotesContext from "./SharedNotesContext";

export default function Desk1() {
  const { sharedNotes } = useContext(SharedNotesContext);

  return (
    <div className="desk">
      <h2>Escritorio 1</h2>
      <ul>
        {sharedNotes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
