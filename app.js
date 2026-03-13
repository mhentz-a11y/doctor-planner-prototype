const doctors = [
  { id: "d1", name: "Dr. Müller", role: "Oberarzt" },
  { id: "d2", name: "Dr. Rossi", role: "Oberarzt" },
  { id: "d3", name: "Dr. Weber", role: "Assistenzarzt" },
  { id: "d4", name: "Dr. Keller", role: "Assistenzarzt" },
  { id: "d5", name: "Dr. Meier", role: "Assistenzarzt" },
  { id: "d6", name: "Dr. Baumann", role: "Assistenzarzt" },
  { id: "d7", name: "Dr. Huber", role: "Assistenzarzt" },
  { id: "d8", name: "Dr. Schneider", role: "Assistenzarzt" }
];

const days = [
  {
    key: "mo",
    label: "Montag",
    events: [
      { time: "08:00", title: "Morgenrapport", participants: "Alle Ärzte" }
    ]
  },
  {
    key: "di",
    label: "Dienstag",
    events: [
      { time: "08:00", title: "Morgenrapport", participants: "Alle Ärzte" }
    ]
  },
  {
    key: "mi",
    label: "Mittwoch",
    events: [
      { time: "08:00", title: "Morgenrapport", participants: "Alle Ärzte" },
      { time: "10:00", title: "Chefarztvisite", participants: "Alle Ärzte" }
    ]
  },
  {
    key: "do",
    label: "Donnerstag",
    events: [
      { time: "08:00", title: "Morgenrapport", participants: "Alle Ärzte" }
    ]
  },
  {
    key: "fr",
    label: "Freitag",
    events: [
      { time: "08:00", title: "Morgenrapport", participants: "Alle Ärzte" }
    ]
  }
];

const tasks = [
  {
    id: "oberarzt",
    title: "Diensthabender Oberarzt",
    category: "Verantwortung",
    allowedRoles: ["Oberarzt"]
  },
  {
    id: "visiteA",
    title: "Visite Bereich A",
    category: "Klinisch",
    allowedRoles: ["Oberarzt", "Assistenzarzt"]
  },
  {
    id: "visiteB",
    title: "Visite Bereich B",
    category: "Klinisch",
    allowedRoles: ["Oberarzt", "Assistenzarzt"]
  },
  {
    id: "konsile",
    title: "Konsile",
    category: "Klinisch",
    allowedRoles: ["Oberarzt"]
  },
  {
    id: "sprechstunde",
    title: "Sprechstunde",
    category: "Ambulant",
    allowedRoles: ["Oberarzt", "Assistenzarzt"]
  },
  {
    id: "sono",
    title: "Sonographie",
    category: "Diagnostik",
    allowedRoles: ["Oberarzt", "Assistenzarzt"]
  }
];

const assignments = {};
let selectedDayKey = "mo";

function createAssignmentKey(dayKey, taskId) {
  return `${dayKey}__${taskId}`;
}

function getDoctorById(doctorId) {
  return doctors.find((doctor) => doctor.id === doctorId);
}

function getDayByKey(dayKey) {
  return days.find((day) => day.key === dayKey);
}

function getTaskById(taskId) {
  return tasks.find((task) => task.id === taskId);
}

function isAssignmentValid(task, doctor) {
  if (!task || !doctor) return false;
  return task.allowedRoles.includes(doctor.role);
}

function getAllowedRolesLabel(task) {
  return task.allowedRoles.join(", ");
}

function renderDoctorPool() {
  const pool = document.getElementById("doctor-pool");
  pool.innerHTML = "";

  doctors.forEach((doctor) => {
    const card = document.createElement("div");
    card.className = "doctor-card";
    card.draggable = true;
    card.dataset.doctorId = doctor.id;

    card.innerHTML = `
      <div class="doctor-name">${doctor.name}</div>
      <div class="doctor-role">${doctor.role}</div>
    `;

    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", doctor.id);
    });

    pool.appendChild(card);
  });
}

function renderWeekGrid() {
  const weekGrid = document.getElementById("week-grid");
  weekGrid.innerHTML = "";

  days.forEach((day) => {
    const column = document.createElement("div");
    column.className = `day-column clickable ${selectedDayKey === day.key ? "active" : ""}`;
    column.dataset.dayKey = day.key;

    const eventsText = day.events.map((event) => `${event.time} ${event.title}`).join(" • ");

    const taskListHtml = tasks
      .map((task) => {
        const key = createAssignmentKey(day.key, task.id);
        const assignedDoctorId = assignments[key];
        const assignedDoctor = getDoctorById(assignedDoctorId);
        const isValid = assignedDoctor ? isAssignmentValid(task, assignedDoctor) : true;

        return `
          <div class="task-card">
            <div class="task-title">${task.title}</div>
            <div class="task-rule">Erlaubte Rolle: ${getAllowedRolesLabel(task)}</div>
            <div class="drop-zone ${assignedDoctor ? "filled" : ""} ${!isValid ? "invalid" : ""}" 
                 data-day="${day.key}" 
                 data-task="${task.id}">
              ${
                assignedDoctor
                  ? `
                    <div style="width:100%">
                      <div class="assigned-doctor ${!isValid ? "invalid" : ""}">
                        ${assignedDoctor.name}
                      </div>
                      ${!isValid ? `<div class="validation-text">Rollenregel verletzt</div>` : ""}
                    </div>
                  `
                  : `<div class="empty-text">Arzt hierhin ziehen</div>`
              }
            </div>
          </div>
        `;
      })
      .join("");

    column.innerHTML = `
      <div class="day-header">
        <h3>${day.label}</h3>
        <div class="day-events">${eventsText}</div>
      </div>
      <div class="task-list">
        ${taskListHtml}
      </div>
    `;

    column.addEventListener("click", (event) => {
      if (event.target.closest(".drop-zone") || event.target.closest(".assigned-doctor")) {
        return;
      }

      selectedDayKey = day.key;
      renderWeekGrid();
      renderDayDetail();
    });

    weekGrid.appendChild(column);
  });

  attachDropEvents();
}

function attachDropEvents() {
  const dropZones = document.querySelectorAll(".drop-zone");

  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("highlight");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("highlight");
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("highlight");

      const doctorId = event.dataTransfer.getData("text/plain");
      const dayKey = zone.dataset.day;
      const taskId = zone.dataset.task;
      const key = createAssignmentKey(dayKey, taskId);

      assignments[key] = doctorId;

      if (!selectedDayKey) {
        selectedDayKey = dayKey;
      }

      renderWeekGrid();
      renderDayDetail();
    });
  });
}

function renderDayDetail() {
  const day = getDayByKey(selectedDayKey);
  if (!day) return;

  const title = document.getElementById("detail-day-title");
  const subtitle = document.getElementById("detail-day-subtitle");
  const eventsContainer = document.getElementById("detail-events");
  const tasksContainer = document.getElementById("detail-tasks");

  title.textContent = `Tagesdetail – ${day.label}`;
  subtitle.textContent = "Detailansicht des ausgewählten Tages";

  eventsContainer.innerHTML = "";
  day.events.forEach((event) => {
    const card = document.createElement("div");
    card.className = "detail-card";
    card.innerHTML = `
      <div class="detail-card-title">${event.time} – ${event.title}</div>
      <div class="detail-card-subtitle">Teilnehmer: ${event.participants}</div>
      <div class="detail-pill">Event</div>
    `;
    eventsContainer.appendChild(card);
  });

  tasksContainer.innerHTML = "";
  tasks.forEach((task) => {
    const key = createAssignmentKey(day.key, task.id);
    const assignedDoctorId = assignments[key];
    const assignedDoctor = getDoctorById(assignedDoctorId);
    const isValid = assignedDoctor ? isAssignmentValid(task, assignedDoctor) : true;

    const card = document.createElement("div");
    card.className = `detail-card ${!isValid ? "invalid" : ""}`;

    card.innerHTML = `
      <div class="detail-card-title">${task.title}</div>
      <div class="detail-card-subtitle">
        ${
          assignedDoctor
            ? `Zugeordnet an: ${assignedDoctor.name} (${assignedDoctor.role})`
            : "Noch nicht zugeordnet"
        }
      </div>
      <div class="detail-pill">${task.category}</div>
      <div class="detail-card-subtitle" style="margin-top:8px;">
        Erlaubte Rolle: ${getAllowedRolesLabel(task)}
      </div>
      ${
        assignedDoctor && !isValid
          ? `<div class="detail-warning">Diese Zuteilung verletzt die Rollenregel.</div>`
          : ""
      }
    `;

    tasksContainer.appendChild(card);
  });
}

function resetAssignments() {
  Object.keys(assignments).forEach((key) => delete assignments[key]);
  renderWeekGrid();
  renderDayDetail();
}

function init() {
  renderDoctorPool();
  renderWeekGrid();
  renderDayDetail();

  document.getElementById("resetBtn").addEventListener("click", resetAssignments);
}

init();