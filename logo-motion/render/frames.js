const {chromium}=require('playwright');
// uso: node frames.js <ancho> <alto> <carpeta> [test]
(async()=>{
 const [,,w,h,out,mode]=process.argv; const fps=30;
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
 const p=await b.newPage({viewport:{width:+w,height:+h},deviceScaleFactor:1});
 await p.goto('file://'+__dirname+'/render.html'); await p.evaluate(()=>window.ready);
 const total=await p.evaluate(()=>window.TOTAL);
 const times= mode==='test'?[2.0,2.6,3.2,3.4,3.6,3.8,4.0,4.2,4.5,4.8]:[...Array(Math.round(total*fps)).keys()].map(i=>i/fps);
 for(let i=0;i<times.length;i++){await p.evaluate(t=>window.render(t),times[i]);
   await p.screenshot({path:`${out}/f${String(i).padStart(4,'0')}.png`});}
 console.log('frames',times.length,'total',total); await b.close();
})();
