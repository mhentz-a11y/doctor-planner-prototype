* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f6f8;
  color: #1f2937;
}

.app {
  min-height: 100vh;
  padding: 24px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.topbar h1 {
  margin: 0 0 6px 0;
  font-size: 28px;
}

.topbar p {
  margin: 0;
  color: #6b7280;
}

.badge {
  background: #dbeafe;
  color: #1d4ed8;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: bold;
  font-size: 14px;
}

.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 20px;
  align-items: start;
}

.panel {
  background: white;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.panel h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
}

.panel h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
}

.hint {
  margin-top: 0;
  color: #6b7280;
  font-size: 14px;
}

.doctor-pool {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.doctor-card {
  background: #eef2ff;
  border: 1px solid #c7d2fe;
  border-radius: 12px;
  padding: 12px;
  cursor: grab;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.doctor-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.doctor-name {
  font-weight: bold;
  margin-bottom: 4px;
}

.doctor-role {
  font-size: 13px;
  color: #4b5563;
}

.event-list {
  margin: 0;
  padding-left: 18px;
  color: #374151;
}

.event-list li {
  margin-bottom: 8px;
}

.planner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.reset-btn {
  border: none;
  background: #111827;
  color: white;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
  font-weight: bold;
}

.reset-btn:hover {
  opacity: 0.9;
}

.week-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.day-column {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 12px;
  min-height: 560px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.day-column.clickable {
  cursor: pointer;
}

.day-column:hover {
  border-color: #93c5fd;
}

.day-column.active {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.day-header {
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e7eb;
}

.day-header h3 {
  margin: 0 0 6px 0;
  font-size: 18px;
}

.day-events {
  font-size: 13px;
  color: #6b7280;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task-card {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 10px;
}

.task-title {
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 14px;
}

.task-rule {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 8px;
}

.drop-zone {
  min-height: 58px;
  border: 2px dashed #cbd5e1;
  border-radius: 10px;
  padding: 8px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drop-zone.filled {
  border-style: solid;
  background: #ecfeff;
  border-color: #67e8f9;
}

.drop-zone.invalid {
  border-style: solid;
  background: #fef2f2;
  border-color: #f87171;
}

.drop-zone.highlight {
  border-color: #2563eb;
  background: #dbeafe;
}

.assigned-doctor {
  width: 100%;
  background: #dcfce7;
  color: #166534;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

.assigned-doctor.invalid {
  background: #fee2e2;
  color: #991b1b;
}

.validation-text {
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  color: #b91c1c;
  font-weight: bold;
}

.empty-text {
  color: #9ca3af;
  font-size: 13px;
  text-align: center;
}

/* Modal / Layer */

.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
}

.modal.hidden {
  display: none;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(17, 24, 39, 0.45);
}

.modal-content {
  position: relative;
  z-index: 1001;
  width: min(920px, calc(100vw - 32px));
  max-height: calc(100vh - 32px);
  margin: 16px auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.close-btn {
  border: none;
  background: #111827;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
}

.close-btn:hover {
  opacity: 0.9;
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
}

.detail-section {
  margin-bottom: 24px;
}

.detail-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
}

.detail-card.invalid {
  border-color: #fca5a5;
  background: #fef2f2;
}

.detail-card-title {
  font-weight: bold;
  margin-bottom: 6px;
}

.detail-card-subtitle {
  font-size: 14px;
  color: #4b5563;
}

.detail-pill {
  display: inline-block;
  margin-top: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #e0f2fe;
  color: #075985;
  font-size: 12px;
  font-weight: bold;
}

.detail-warning {
  margin-top: 8px;
  color: #b91c1c;
  font-size: 13px;
  font-weight: bold;
}

@media (max-width: 1200px) {
  .week-grid {
    grid-template-columns: 1fr;
  }

  .layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .app {
    padding: 16px;
  }

  .modal-content {
    width: calc(100vw - 16px);
    max-height: calc(100vh - 16px);
    margin: 8px auto;
  }

  .modal-header,
  .modal-body {
    padding: 16px;
  }
}
