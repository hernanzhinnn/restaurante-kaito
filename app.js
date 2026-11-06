// ====== CONFIGURACIÓN (Supabase → Project Settings → API) ======
const CFG={URL:'https://ddwraknmjoqaapdkoorm.supabase.co',KEY:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkd3Jha25tam9xYWFwZGtvb3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM3NTQ1ODYsImV4cCI6MjEwOTMzMDU4Nn0.i8cHBHQ3qhyijIwqTiSyTev5nnUkYgqQfaW95vQcEnw',SENA_POR_PERSONA:3000};
const sb=supabase.createClient(CFG.URL,CFG.KEY);
const $=i=>document.getElementById(i),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),money=n=>'$'+Math.round(n).toLocaleString('es-AR');
const hhmm=d=>new Date(d).toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
const mmss=ms=>{ms=Math.max(0,ms);const s=Math.floor(ms/1000);return Math.floor(s/3600)+':'+String(Math.floor(s/60)%60).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
function toast(h){const t=$('toast');t.innerHTML=h;t.style.display='block';clearTimeout(toast.k);toast.k=setTimeout(()=>t.style.display='none',7000)}
