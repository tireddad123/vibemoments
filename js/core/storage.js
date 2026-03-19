import {STORAGE_KEY,state} from './state.js';
export function load(){try{const raw=localStorage.getItem(STORAGE_KEY);if(raw)return JSON.parse(raw);}catch(e){}return null;}
export function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));return true;}catch(e){const b=document.getElementById('error-banner');if(b){b.textContent='Storage full - please export & clear some data';b.classList.remove('hidden');}return false;}}
export function quotaOK(){try{const t=STORAGE_KEY+'_t';localStorage.setItem(t,'1');localStorage.removeItem(t);return true;}catch{return false;}}