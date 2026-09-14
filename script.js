// script.js — 基本交互：主题切换与 PDF 下载
(function(){
  const toggle = document.getElementById('toggleTheme');
  const downloadBtn = document.getElementById('downloadPdf');

  function initTheme(){
    const saved = localStorage.getItem('theme');
    if(saved === 'dark') document.body.classList.add('dark');
  }
  initTheme();

  toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  downloadBtn.addEventListener('click', ()=>{
    // 期望用户将 PDF 上传到仓库根目录并命名为：刘雨悦3063273.pdf
    const pdfPath = './刘雨悦3063273.pdf';
    // 尝试打开新标签页下载；如果未上传文件，用户会看到 404
    window.open(pdfPath, '_blank');
  });
})();
