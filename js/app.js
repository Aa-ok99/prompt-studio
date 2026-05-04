// js/app.js
// core application logic: history, toast, tabs, editor, export/import

const STORAGE_KEY = 'prompt_studio_history';
let history = [];

function loadHistory() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) history = JSON.parse(stored);
  } catch (e) { console.error('Failed to load history:', e); history = []; }
}

function saveHistory() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history)); }
  catch (e) { console.error('Failed to save history:', e); }
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut .3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      document.getElementById(`panel-${tabName}`).classList.add('active');
      if (tabName === 'history') renderHistory();
      if (tabName === 'templates') {
        if (typeof renderTemplates === 'function') renderTemplates();
      }
    });
  });
}

function updateStats() {
  const text = document.getElementById('promptInput').value;
  document.getElementById('charCount').textContent = text.length;
  document.getElementById('wordCount').textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById('lineCount').textContent = text ? text.split('\n').length : 0;
}

function clearEditor() {
  document.getElementById('promptInput').value = '';
  updateStats();
  showToast('ล้างข้อความเรียบร้อย', 'success');
}

function savePrompt() {
  const text = document.getElementById('promptInput').value.trim();
  if (!text) { showToast('กรุณาเขียน prompt ก่อนบันทึก', 'error'); return; }
  const promptData = { id: Date.now(), text, timestamp: new Date().toLocaleString('th-TH'), charCount: text.length };
  history.unshift(promptData);
  if (history.length > 50) history = history.slice(0, 50);
  saveHistory();
  showToast('บันทึก prompt เรียบร้อย', 'success');
  if (document.querySelector('#panel-history').classList.contains('active')) renderHistory();
}

function copyPrompt() {
  const text = document.getElementById('promptInput').value;
  if (!text) { showToast('ไม่มีข้อความให้คัดลอก', 'error'); return; }
  navigator.clipboard.writeText(text).then(() => showToast('คัดลอกข้อความเรียบร้อย', 'success'))
    .catch(() => { document.getElementById('promptInput').select(); document.execCommand('copy'); showToast('คัดลอกข้อความเรียบร้อย', 'success'); });
}

function renderHistory() {
  const list = document.getElementById('historyList');
  const clearBtn = document.getElementById('clearAllBtn');
  if (history.length === 0) {
    list.innerHTML = `<div class="empty-state"><i class="fa-solid fa-clock-rotate-left"></i><p>ยังไม่มีประวัติการบันทึก</p><p style="font-size:12px;margin-top:8px;">ลองเขียนและบันทึก prompt แรกของคุณ</p></div>`;
    clearBtn.style.display = 'none';
    return;
  }
  clearBtn.style.display = 'block';
  list.innerHTML = history.map(item => `
    <div class="history-item" onclick="loadFromHistory(${item.id})">
      <div style="flex:1;">
        <div class="history-text">${escapeHtml(item.text.substring(0, 100))}${item.text.length > 100 ? '...' : ''}</div>
        <div class="history-meta"><i class="fa-regular fa-clock"></i> ${item.timestamp} · ${item.charCount} ตัวอักษร</div>
      </div>
      <button class="history-del" onclick="event.stopPropagation(); deleteHistoryItem(${item.id})" title="ลบ"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `).join('');
}

function escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }

function loadFromHistory(id) {
  const item = history.find(h => h.id === id);
  if (item) { document.getElementById('promptInput').value = item.text; updateStats(); document.querySelector('[data-tab="editor"]').click(); showToast('โหลด prompt จากประวัติ', 'success'); }
}

function deleteHistoryItem(id) { history = history.filter(h => h.id !== id); saveHistory(); renderHistory(); showToast('ลบรายการเรียบร้อย', 'success'); }

function confirmClearAll() { document.getElementById('modalOverlay').classList.add('show'); }
function closeModal() { document.getElementById('modalOverlay').classList.remove('show'); }
function clearAllHistory() { history = []; saveHistory(); renderHistory(); closeModal(); showToast('ล้างประวัติทั้งหมดเรียบร้อย', 'success'); }

function exportAll() {
  if (history.length === 0) { showToast('ไม่มีข้อมูลให้ export', 'error'); return; }
  const data = { exportDate: new Date().toISOString(), version: '1.0', prompts: history };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `prompt-studio-export-${Date.now()}.json`; a.click();
  URL.revokeObjectURL(url);
  showToast(`ส่งออก ${history.length} รายการเรียบร้อย`, 'success');
}

function importPrompts() { document.getElementById('fileInput').click(); }

function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      let importedPrompts = [];
      if (data.prompts && Array.isArray(data.prompts)) importedPrompts = data.prompts;
      else if (Array.isArray(data)) importedPrompts = data;
      else throw new Error('รูปแบบไฟล์ไม่ถูกต้อง');
      history = [...importedPrompts, ...history];
      if (history.length > 50) history = history.slice(0, 50);
      saveHistory(); renderHistory();
      showToast(`นำเข้า ${importedPrompts.length} รายการเรียบร้อย`, 'success');
    } catch (error) { showToast('ไม่สามารถอ่านไฟล์ได้: ' + error.message, 'error'); }
    event.target.value = '';
  };
  reader.readAsText(file);
}

function initEventListeners() {
  document.getElementById('promptInput').addEventListener('input', updateStats);
  document.getElementById('modalOverlay').addEventListener('click', (e) => { if (e.target.classList.contains('modal-overlay')) closeModal(); });
  document.getElementById('promptInput').addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') { e.preventDefault(); savePrompt(); } });
}

function initApp() {
  loadHistory();
  initTabs();
  initEventListeners();
  if (typeof renderTemplates === 'function') renderTemplates();
  renderHistory();
  updateStats();
  if (history.length === 0) {
    const samplePrompt = { id: Date.now(), text: 'คุณเป็นผู้ช่วย AI ที่เชี่ยวชาญด้านการเขียนโปรแกรม\nช่วยอธิบายแนวคิดเรื่อง [หัวข้อ] ให้ฉันเข้าใจง่ายๆ\nพร้อมยกตัวอย่างโค้ดประกอบ', timestamp: new Date().toLocaleString('th-TH'), charCount: 120 };
    history.push(samplePrompt);
    saveHistory();
  }
}

// รอให้ DOM โหลดเสร็จแล้วค่อย init
document.addEventListener('DOMContentLoaded', initApp);
