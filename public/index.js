function getCoins() {
  const cbs = document.getElementsByClassName("coincb");
  const list=[];
  for(var i=0;i<cbs.length;i++){
    if(cbs.checked)
      list.push(cbs.value);
  }
  list.sort();
  alert(list.join(" "));
}
function onLoad(obj){

  var list = "BCH BTC DOGE XRP XMR".split(/\s+/);
  var group=document.getElementById("coins");
  var cbs=[];
  
  while(list.length){
    const tr = document.createElement("tr");
    group.appendChild(tr);
    for(var i=0;list.length && i<4;i++) {
      const c=list.shift();
      if(c==null || 0==c.length)
        continue;

      const td = document.createElement("td");
      tr.appendChild(td);
      const lb = document.createElement("label");
      td.appendChild(lb);
      const cb = document.createElement("input");
      td.appendChild(cb);
      const tx = document.createTextNode(c);
      td.appendChild(tx);
      const id="cb-"+c;
      cb.class="coincb";
      cb.type="checkbox";
      cb.id=id;
      cb.value=c;
      cb.checked="checked";
      lb.for=id;
      cbs.push(cb);
      cb.onchange=cb.onclick=function (){ console.log(getCoins()); };
    }
  }
  console.log(cbs);
}
window.onload=onLoad;


