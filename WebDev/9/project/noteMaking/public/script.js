const noteInput = document.getElementById("noteInput");
const saveButton = document.getElementById("saveButton");
const notesList = document.getElementById("notesList");

async function loadNotes() {
  const response = await fetch("/notes");
  const data = await response.json();
  renderNotes(data.notes || []);
}

function renderNotes(notes) {
  notesList.innerHTML = "";

  if (!notes.length) {
    const emptyCard = document.createElement("div");
    emptyCard.className = "note-card empty";
    emptyCard.textContent = "No notes yet. Add one above.";
    notesList.appendChild(emptyCard);
    return;
  }

  notes.forEach((note) => {
    const card = document.createElement("div");
    card.className = "note-card";

    const timestamp = note.createdAt
      ? new Date(note.createdAt).toLocaleString()
      : "Unknown time";

    card.innerHTML = `
      <div class="note-text">${note.text}</div>
      <div class="note-time">${timestamp}</div>
    `;

    notesList.appendChild(card);
  });
}

async function saveNote() {
  const note = noteInput.value.trim();
  if (!note) {
    noteInput.focus();
    return;
  }

  await fetch("/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ note }),
  });

  noteInput.value = "";
  loadNotes();
}

saveButton.addEventListener("click", saveNote);
noteInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    saveNote();
  }
});

loadNotes();
