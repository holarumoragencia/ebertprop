const {chromium}=require('playwright');
(async()=>{
 const [,,mode,out]=process.argv; const fps=30;
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
 const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});
 await p.goto('file://'+__dirname+'/render.html'); await p.evaluate(()=>window.ready); await p.waitForTimeout(300);
 const total=await p.evaluate(()=>window.TOTAL);
 const times= mode==='test'?[0.5,1.9,2.0,2.1,8.5,10.5,14.5,16.0,17.5]:[...Array(Math.round(total*fps)).keys()].map(i=>i/fps);
 for(let i=0;i<times.length;i++){await p.evaluate(t=>window.render(t),times[i]);
   await p.screenshot({path:`${out}/f${String(i).padStart(4,'0')}.png`});}
 console.log('frames',times.length,'total',total); await b.close();
})();
