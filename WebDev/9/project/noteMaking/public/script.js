const { useState, useEffect } = React;

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    loadNotes();
  }, []);

  async function loadNotes() {
    const response = await fetch("/notes");
    const data = await response.json();
    setNotes(data.notes || []);
  }

  async function saveNote() {
    const trimmed = noteText.trim();
    if (!trimmed) {
      return;
    }

    await fetch("/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note: trimmed }),
    });

    setNoteText("");
    loadNotes();
  }

  return (
    <div className="app-shell">
      <header>
        <h1>Notes</h1>
        <p>Write a note and save it to see it appear below.</p>
      </header>

      <section className="input-panel">
        <textarea
          value={noteText}
          onChange={(event) => setNoteText(event.target.value)}
          rows={4}
          placeholder="Type your note here..."
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              saveNote();
            }
          }}
        />
        <button type="button" onClick={saveNote}>
          Create new note
        </button>
      </section>

      <section className="notes-panel">
        <h2>Saved notes</h2>

        <div className="notes-list">
          {notes.length === 0 ? (
            <div className="note-card empty">No notes yet. Add one above.</div>
          ) : (
            notes.map((note, index) => {
              const timestamp = note.createdAt
                ? new Date(note.createdAt).toLocaleString()
                : "Unknown time";

              return (
                <div key={index} className="note-card">
                  <div className="note-text">{note.text}</div>
                  <div className="note-time">{timestamp}</div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(<NotesApp />, document.getElementById("root"));
