// ====== CONFIGURACIÓN (Supabase → Project Settings → API) ======
const CFG={URL:'https://TU-PROYECTO.supabase.co',KEY:'TU_ANON_PUBLIC_KEY',SENA_POR_PERSONA:3000};
const sb=supabase.createClient(CFG.URL,CFG.KEY);
const $=i=>document.getElementById(i),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),money=n=>'$'+Math.round(n).toLocaleString('es-AR');
const hhmm=d=>new Date(d).toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
const mmss=ms=>{ms=Math.max(0,ms);const s=Math.floor(ms/1000);return Math.floor(s/3600)+':'+String(Math.floor(s/60)%60).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
function toast(h){const t=$('toast');t.innerHTML=h;t.style.display='block';clearTimeout(toast.k);toast.k=setTimeout(()=>t.style.display='none',7000)}
