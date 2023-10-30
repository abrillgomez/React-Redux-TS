import { useState } from "react";
import SharedNotesContext from "./SharedNotesContext";
import Desk1 from "./Desk1";
import Desk2 from "./Desk2";

const Office = () => {
  const [sharedNotes, setSharedNotes] = useState([]);

  const addNotes = (note) => {
    setSharedNotes([...sharedNotes, note]);
  };

  return (
    <SharedNotesContext.Provider value={{ sharedNotes, addNotes }}>
      <div>
        <div className="office">
          <h1>Oficina Compartida</h1>
          <Desk1 />
          <Desk2 />
        </div>
      </div>
    </SharedNotesContext.Provider>
  );
};

export default Office;
