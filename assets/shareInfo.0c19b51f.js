var z=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var A=(r,l)=>{var c={};for(var n in r)j.call(r,n)&&l.indexOf(n)<0&&(c[n]=r[n]);if(r!=null&&z)for(var n of z(r))l.indexOf(n)<0&&$.call(r,n)&&(c[n]=r[n]);return c};import{d as L,m as U,l as G,a5 as J,r as d,n as W,o as Y,a as Q,b as E,c as T,w as u,f as t,a8 as X,E as f,s as S,e as o,af as Z,ad as ee,y as D,A as I,B as ae,R as O,D as K,an as se,aq as te,S as ue,aR as oe,ap as le,J as ne,aS as ie,aT as re,O as de,ah as ce,V as h,a9 as _e,H as pe,ae as ve}from"./vendor.6d03c7d3.js";import{i as R,b as fe}from"./index.4641366f.js";const he={class:"share-info-page"},me={key:0,class:"header"},ke={class:"title n-ellipsis"},ye=D("\u5168\u90E8\u6587\u4EF6"),ge={class:"action"},Fe={key:1,class:"share-password"},we=f("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[f("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),f("div",{class:"logo-box__text"},"PikPak")],-1),Be=D("\u63D0\u53D6\u6587\u4EF6"),Ee={key:2,class:"share-file-box",style:{height:"100vh"}},De=D("\u53BB\u9996\u9875"),Ce=L({setup(r){const l=U(),c=G(),n=J(()=>l.params.id),a=d(),m=d(!0),_=d(""),p=d([]),N=d([]),C=d(""),V=d([{type:"selection"},{title:"\u540D\u79F0",key:"name",sorter:"default",render:e=>h("div",{class:"file-info",onClick:()=>{e.kind==="drive#folder"&&(l.query.id||(C.value=e.id),c.push({name:"shareInfo",params:l.params,query:{id:e.id}}))}},[h("img",{src:e.thumbnail_link||e.icon_link}),h(_e,{class:"title"},{default:()=>String(e.name)}),h("span",{class:"action"},"1")])},{title:"\u5927\u5C0F",key:"size",sorter:(e,s)=>e.size-s.size,align:"right",render:e=>Number(e.size)>0?fe(Number(e.size)):"",className:"size",width:100},{title:"\u4FEE\u6539\u65F6\u95F4",key:"modified_time",sorter:"default",align:"right",render:e=>h(pe,{time:new Date(String(e.modified_time)||""),format:"MM-dd HH:MM"}),className:"modified_time",width:160},{title:"",key:"action",width:60,align:"right",render:e=>h(ve,{justify:"end"},{default:()=>[]})}]),k=()=>{var e,s,y,g,F;if(((e=a.value)==null?void 0:e.share_status)!=="OK"&&l.query.id)return c.push({name:"shareInfo",params:l.params,query:{id:""}});m.value=!0,R.get("https://api-drive.mypikpak.com/drive/v1/share"+(l.query.id&&((s=a.value)==null?void 0:s.pass_code_token)?"/detail":""),{params:{share_id:n.value,parent_id:l.query.id,pass_code_token:((y=a.value)==null?void 0:y.pass_code_token)||void 0,pass_code:((g=a.value)==null?void 0:g.pass_code_token)?void 0:_.value,limit:"30",page_token:(F=a.value)==null?void 0:F.next_page_token}}).then(v=>{var B;const w=v.data,{files:x}=w,b=A(w,["files"]),i=(B=a.value)==null?void 0:B.next_page_token;a.value=Object.assign(a.value||{},b),v.data.share_status==="OK"?(i||(N.value=[]),N.value=N.value.concat(x)):window.$message.error(v.data.share_status)}).finally(()=>{m.value=!1})},H=e=>{var s;e.target.offsetHeight+e.target.scrollTop>=e.target.scrollHeight-30&&((s=a.value)==null?void 0:s.next_page_token)&&!m.value&&k()},M=()=>{var s;const e=[];l.query.id&&e.push(C.value),R.post("https://api-drive.mypikpak.com/drive/v1/share/restore",{share_id:n.value,pass_code_token:(s=a.value)==null?void 0:s.pass_code_token,ancestor_ids:e,file_ids:p.value||void 0,folder_type:"DOWNLOAD"}).then(y=>{window.$message.success("\u8F6C\u5B58\u6210\u529F\uFF0C\u53EF\u80FD\u9700\u8981\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4"),p.value=[]})};W(l,(e,s)=>{_.value=String(l.params.password)||"",p.value=[],a.value&&(a.value.next_page_token="",a.value.files=[]),k()});const P=()=>{window.location.href="./"};return Y(()=>{_.value=String(l.params.password)||"",C.value="",k(),window.onbeforeunload=function(e){return!window.$downId||window.$downId.length===0?null:(e=e||window.event,e&&(e.returnValue="\u8FD8\u6709\u5F85\u4E0B\u8F7D\u6587\u4EF6"),"\u8FD8\u6709\u5F85\u4E0B\u8F7D\u6587\u4EF6?")}}),(e,s)=>{const y=Q("router-link");return E(),T(t(X),{show:m.value,description:"\u83B7\u53D6\u4E2D"},{default:u(()=>{var g,F,v,x,b;return[f("div",he,[((g=a.value)==null?void 0:g.share_status)==="OK"?(E(),S("div",me,[f("div",ke,[o(t(ee),{separator:">"},{default:u(()=>[o(t(Z),null,{default:u(()=>[o(y,{to:{query:{id:""}}},{default:u(()=>[ye]),_:1})]),_:1})]),_:1}),o(t(ae),{depth:"3",style:{"font-size":"12px"}},{default:u(()=>{var i,w,B,q;return[D(" \u5931\u6548\u65F6\u95F4\uFF1A "+I(((i=a.value)==null?void 0:i.expiration_left)==="-1"?"\u6C38\u4E45\u6709\u6548":((w=a.value)==null?void 0:w.expiration_left)+"\u5929")+" \u5931\u6548\u6B21\u6570\uFF1A"+I(((B=a.value)==null?void 0:B.restore_count_left)==="-1"?"\u65E0\u9650\u6B21":((q=a.value)==null?void 0:q.restore_count_left)+"\u6B21"),1)]}),_:1})]),f("div",ge,[o(t(O),{type:"primary",onClick:M},{default:u(()=>[D(I(p.value.length?"\u8F6C\u5B58\u5DF2\u9009":"\u8F6C\u5B58\u5168\u90E8"),1)]),_:1})])])):K("",!0),((F=a.value)==null?void 0:F.share_status)==="PASS_CODE_EMPTY"||((v=a.value)==null?void 0:v.share_status)==="PASS_CODE_ERROR"?(E(),S("div",Fe,[we,o(t(le),{class:"password-form"},{default:u(()=>[o(t(se),{label:"\u8BF7\u8F93\u5165\u63D0\u53D6\u7801"},{default:u(()=>[o(t(te),null,{default:u(()=>[o(t(ue),{value:_.value,"onUpdate:value":s[0]||(s[0]=i=>_.value=i),type:"password","show-password-on":"mousedown",onKeyup:oe(k,["enter"]),placeholder:"\u8BF7\u8F93\u5165\u63D0\u53D6\u7801"},null,8,["value","onKeyup"]),o(t(O),{type:"primary",loading:m.value&&!!_.value,onClick:k},{default:u(()=>[Be]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])):((x=a.value)==null?void 0:x.share_status)==="DELETED"?(E(),S("div",Ee,[o(t(re),{description:"\u62B1\u6B49\uFF0C\u8BE5\u5206\u4EAB\u5DF2\u88AB\u4F5C\u8005\u5220\u9664"},{icon:u(()=>[o(t(ne),null,{default:u(()=>[o(t(ie))]),_:1})]),extra:u(()=>[o(t(O),{size:"small",onClick:P},{default:u(()=>[De]),_:1})]),_:1})])):((b=a.value)==null?void 0:b.share_status)==="OK"?(E(),T(t(de),{key:3,style:{"max-height":"calc(100vh - 110px)"},onScroll:H},{default:u(()=>[o(t(ce),{"checked-row-keys":p.value,"onUpdate:checked-row-keys":s[1]||(s[1]=i=>p.value=i),"row-key":i=>i.id,data:N.value,size:"small",columns:V.value,bordered:!1},null,8,["checked-row-keys","row-key","data","columns"])]),_:1})):K("",!0)])]}),_:1},8,["show"])}}});export{Ce as default};
