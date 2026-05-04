// js/viewer.js
// viewer functions: file reading, language detection, display

let currentFileContent = '';
let currentFileLanguage = 'none';
let currentFileName = '';

function detectLanguage(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const map = {
    'js':'javascript', 'jsx':'jsx', 'ts':'typescript', 'tsx':'tsx',
    'py':'python', 'rb':'ruby', 'java':'java', 'c':'c', 'cpp':'cpp',
    'cs':'csharp', 'go':'go', 'rs':'rust', 'php':'php',
    'html':'html', 'htm':'html', 'css':'css', 'scss':'scss', 'sass':'sass',
    'json':'json', 'xml':'xml', 'yaml':'yaml', 'yml':'yaml',
    'md':'markdown', 'markdown':'markdown', 'sql':'sql',
    'sh':'bash', 'bat':'batch', 'ps1':'powershell',
    'ini':'ini', 'cfg':'ini', 'conf':'nginx',
    'log':'none', 'txt':'none', '':'none'
  };
  return map[ext] || 'none';
}

function updateViewerUI(content, filename) {
  currentFileContent = content;
  currentFileName = filename || 'unknown.txt';
  const language = detectLanguage(currentFileName);
  currentFileLanguage = language;
  const charCount = content.length;
  const lineCount = content.split('\n').length;
  const sizeInBytes = new Blob([content]).size;
  const sizeStr = sizeInBytes < 1024 ? `${sizeInBytes} B` : sizeInBytes < 1024*1024 ? `${(sizeInBytes/1024).toFixed(2)} KB` : `${(sizeInBytes/(1024*1024)).toFixed(2)} MB`;
  
  document.getElementById('currentFileName').textContent = currentFileName;
  document.getElementById('currentFileMeta').textContent = `${sizeStr} · ${lineCount} บรรทัด`;
  document.getElementById('viewerCharCount').textContent = charCount;
  document.getElementById('viewerLineCount').textContent = lineCount;
  document.getElementById('viewerLanguage').textContent = language === 'none' ? 'plain text' : language;
  
  const codeEl = document.getElementById('viewerCode');
  const preEl = document.getElementById('viewerPre');
  const wrapper = document.getElementById('viewerContentWrapper');
  const dropzone = document.getElementById('viewerDropzone');
  
  codeEl.textContent = content;
  codeEl.className = `language-${language}`;
  preEl.className = `line-numbers language-${language}`;
  
  dropzone.style.display = 'none';
  wrapper.style.display = 'block';
  
  document.getElementById('viewerCopyBtn').disabled = false;
  document.getElementById('viewerSaveBtn').disabled = false;
  
  if (window.Prism) Prism.highlightElement(codeEl);
}

function clearViewer() {
  currentFileContent = '';
  currentFileName = '';
  currentFileLanguage = 'none';
  document.getElementById('currentFileName').textContent = 'ยังไม่ได้เลือกไฟล์';
  document.getElementById('currentFileMeta').textContent = '—';
  document.getElementById('viewerCharCount').textContent = '0';
  document.getElementById('viewerLineCount').textContent = '0';
  document.getElementById('viewerLanguage').textContent = 'plain';
  document.getElementById('viewerContentWrapper').style.display = 'none';
  document.getElementById('viewerDropzone').style.display = 'block';
  document.getElementById('viewerCopyBtn').disabled = true;
  document.getElementById('viewerSaveBtn').disabled = true;
  document.getElementById('viewerFileInput').value = '';
}

function handleViewerFile(file) {
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) {
    showToast('ไฟล์ใหญ่เกินไป (จำกัด 10MB)', 'error');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    updateViewerUI(e.target.result, file.name);
    showToast(`โหลดไฟล์ "${file.name}" สำเร็จ`, 'success');
  };
  reader.onerror = () => showToast('เกิดข้อผิดพลาดในการอ่านไฟล์', 'error');
  reader.readAsText(file);
}

function copyViewerContent() {
  if (!currentFileContent) {
    showToast('ไม่มีเนื้อหาให้คัดลอก', 'error');
    return;
  }
  navigator.clipboard.writeText(currentFileContent)
    .then(() => showToast('คัดลอกเนื้อหาไฟล์เรียบร้อย', 'success'))
    .catch(() => showToast('ไม่สามารถคัดลอกได้', 'error'));
}

function saveViewerContent() {
  if (!currentFileContent) {
    showToast('ไม่มีเนื้อหาให้บันทึก', 'error');
    return;
  }
  const blob = new Blob([currentFileContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = currentFileName || 'file.txt';
  a.click();
  URL.revokeObjectURL(url);
  showToast('บันทึกไฟล์เรียบร้อย', 'success');
}

function initViewer() {
  const dropzone = document.getElementById('viewerDropzone');
  const fileInput = document.getElementById('viewerFileInput');
  
  dropzone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleViewerFile(file);
  });
  
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('drag-over');
  });
  
  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('drag-over');
  });
  
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleViewerFile(file);
  });
  
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => e.preventDefault());
}

// เริ่มต้น viewer เมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', initViewer);
