(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8269:function(e,t,r){Promise.resolve().then(r.bind(r,6562))},8461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},getImageProps:function(){return l}});let n=r(7043),a=r(5346),o=r(5878),s=n._(r(5084));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let i=o.Image},1849:function(e,t,r){"use strict";r.d(t,{Ce:function(){return o},h0:function(){return s}});var n=r(3557),a=r(4960);let o=(0,n.LC)({reducerPath:"festivalAPI",baseQuery:(0,a.ni)({baseUrl:"".concat("http://openapi.seoul.go.kr:8088","/").concat("48504d46446d696e373365494c7848","/json/culturalEventInfo")}),tagTypes:[],endpoints:e=>({getFestivalPerPage:e.query({query:e=>{let{start:t,end:r,codeName:n,title:a,date:o}=e;return"/".concat(t,"/").concat(r,"/").concat(n,"/").concat(a,"/").concat(o)}})})}),{useGetFestivalPerPageQuery:s}=o},6562:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(7437),a=r(2265),o=r(1849),s=r(3253),l=r(2744),i=r(8575),c=r(8683);function u(){let{totalCount:e,currentPage:t}=(0,i.v9)(e=>e.festivals),[r,o]=(0,a.useState)([]),u=Math.ceil(e/25),d=(0,i.I0)();(0,a.useEffect)(()=>{let n=(t-1)*25+1,a=25*t;e>0&&(u<5?o([...Array.from({length:u},(e,t)=>1+t)]):r.includes(t)||(t>=u-4?o([...Array.from({length:5},(e,t)=>u-4+t)]):o([...Array.from({length:5},(e,r)=>t+r)]))),d((0,c.oW)({currentPage:t})),d((0,c.ZL)({startNumber:n})),d((0,c._q)({endNumber:a}))},[t,e,u,d]);let m=e=>{d((0,c.oW)({currentPage:Number(e.target.innerHTML)}))};return(0,n.jsxs)("div",{className:"max-w-80 min-w-60 flex leading-4 justify-evenly mx-auto mt-12",children:[(0,n.jsx)(s.u8L,{className:"cursor-pointer",onClick:()=>{d((0,c.oW)({currentPage:1}))}}),(0,n.jsx)(l.rpj,{className:"cursor-pointer",onClick:()=>{r[4]-5>0?t-5<0?d((0,c.oW)({currentPage:1})):d((0,c.oW)({currentPage:t-5})):d((0,c.oW)({currentPage:1}))}}),r.map((e,r)=>t===e?(0,n.jsx)("span",{className:"mx-2 font-extrabold cursor-pointer",onClick:m,children:e},r):(0,n.jsx)("span",{className:"mx-2 cursor-pointer",onClick:m,children:e},r)),(0,n.jsx)(l.KEG,{className:"cursor-pointer",onClick:()=>{r[0]+5<u&&d((0,c.oW)({currentPage:r[0]+5}))}}),(0,n.jsx)(s.dn6,{className:"cursor-pointer",onClick:()=>{d((0,c.oW)({currentPage:u}))}})]})}var d=r(8461),m=r.n(d),f=r(2972),h=r.n(f),g=r(1273);function p(e){let{CODENAME:t,GUNAME:r,TITLE:o,DATE:s,HMPG_ADDR:l,MAIN_IMG:i}=e.info,c=l.slice(l.lastIndexOf("cultcode")+9,l.indexOf("&")),[u,d]=(0,a.useState)(!1),f=e=>{setTimeout(()=>{d(e)},100)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"relative",children:(0,n.jsxs)("div",{className:"transition-all duration-500 hover:bg-slate-500 m-auto rounded-xl w-80 h-72 relative",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[(0,n.jsx)(m(),{className:"rounded-xl m-auto",src:i,alt:i,fill:!0,sizes:"(max-width: 768px)",quality:75,style:{width:"100%",height:"100%"}}),!1===u?null:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"rounded-xl bg-slate-500 opacity-70 m-auto w-80 h-72 absolute text-white font-bold text-center leading-imgLineHeight",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:t}),(0,n.jsx)("p",{children:r})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"leading-8",children:o}),(0,n.jsx)("p",{children:s}),(0,n.jsxs)(h(),{className:"min-w-80 min-h-72",href:"/Detail/".concat(encodeURI(o),"/").concat(c),children:[(0,n.jsx)("p",{children:"자세히 보기"}),(0,n.jsx)(g.ZTc,{className:"animate-bounce w-6 h-6 m-auto"})]})]})]})})]},i)})})}function v(){return(0,n.jsx)("div",{className:"h-screen w-screen bg-gray-100 flex items-center",children:(0,n.jsxs)("div",{className:"container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700",children:[(0,n.jsxs)("div",{className:"max-w-md",children:[(0,n.jsx)("div",{className:"text-5xl font-dark font-bold",children:"404"}),(0,n.jsx)("p",{className:"text-2xl md:text-3xl font-light leading-normal",children:"검색결과가 존재하지 않습니다. "}),(0,n.jsx)("button",{className:"px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700",children:"back to homepage"})]}),(0,n.jsx)("div",{className:"max-w-lg",children:(0,n.jsx)("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2395 1800",width:"400"})})]})})}function x(){let{festivals:e,isEmpty:t}=(0,i.v9)(e=>e.festivals);return t?(0,n.jsx)(v,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"grid laptop:grid-cols-3 desktop:grid-cols-4 bigDesktop:grid-cols-5 gap-5 p-4",children:e&&e.map(e=>(0,n.jsx)(p,{info:e},e.ORG_LINK))},Math.random())})}var j=r(4295);function b(){let e=Array(25);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("main",{className:"block min-h-screen mt-6",children:(0,n.jsx)("div",{className:"grid laptop:grid-cols-3 desktop:grid-cols-4 bigDesktop:grid-cols-5 gap-5 p-4",children:[...e].map((e,t)=>(0,n.jsxs)("div",{role:"status",className:"flex items-center justify-center max-w-sm m-auto rounded-xl w-80 h-72 relative animate-pulse dark:bg-gray-700",children:[(0,n.jsxs)("svg",{className:"w-10 h-10 text-gray-200 dark:text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:[(0,n.jsx)("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"}),(0,n.jsx)("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"})]}),(0,n.jsx)("span",{className:"sr-only",children:"Loading..."})]},t))},"loading")})})}function y(){let e=(0,i.I0)(),[t,r]=(0,a.useState)(!1),{startNumber:s,endNumber:l,codeName:u,codeCategory:d,title:m,date:f}=(0,i.v9)(e=>e.festivals),h=()=>{r(e=>!e)},{data:g,error:p,isLoading:v}=(0,o.h0)({start:s.toString(),end:l.toString(),codeName:u,title:m,date:f}),x=t=>{"전체"===t?e((0,c.VF)({codeName:" "})):e((0,c.VF)({codeName:t})),e((0,c.oW)({currentPage:1})),h()};return((0,a.useEffect)(()=>{g&&g.culturalEventInfo&&(e((0,c.eh)({totalCount:g.culturalEventInfo.list_total_count})),e((0,c.Y5)({festivals:g.culturalEventInfo.row})))},[g,u,e,l,s,m,f]),v)?(0,n.jsx)(b,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"w-36 border-l-2 text-center",children:[(0,n.jsx)("p",{className:"cursor-pointer m-1",onClick:h,children:" "===u?"전체":u}),!0==t?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"z-20 rounded-xl bg-white border-cyan-950 p-2 absolute",children:d.map(e=>(0,n.jsx)("p",{onClick:e=>x(e.target.outerText),className:"cursor-pointer",children:e},e))})}):null]})})}var w=r(9119);function N(){let e=(0,i.I0)(),[t,r]=(0,a.useState)(""),[s,l]=(0,a.useState)(!1),[u,d]=(0,a.useState)(!1),{startNumber:m,endNumber:f,codeName:h,title:g,date:p}=(0,i.v9)(e=>e.festivals),{data:v,error:x,isLoading:N}=(0,o.h0)({start:m.toString(),end:f.toString(),codeName:h,title:g,date:p}),E=e=>{r(e),e.length>=1?l(!0):l(!1)},{borderHighlight:P,showSearchIcon:O}=(0,i.v9)(e=>e.reaction),C=t=>{"Enter"===t.key&&(d(!0),e((0,c.Td)({title:t.target.value})),e((0,c.oW)({currentPage:1})))},I=t=>{e((0,w.i2)({borderHighlight:!0})),e((0,w.tg)({showSearchIcon:!1}))},k=t=>{e((0,w.i2)({borderHighlight:!1})),e((0,w.tg)({showSearchIcon:!0}))};return((0,a.useEffect)(()=>{u&&(v&&v.culturalEventInfo&&v.culturalEventInfo.row?(e((0,c.Y5)({festivals:v.culturalEventInfo.row})),e((0,c.eh)({totalCount:v.culturalEventInfo.list_total_count})),e((0,c.Wl)({isEmpty:!1}))):(e((0,c.Y5)({festivals:[]})),e((0,c.eh)({totalCount:0})),e((0,c.Wl)({isEmpty:!0}))))},[v,e,u]),N)?(0,n.jsx)(b,{}):(0,n.jsx)("div",{className:"w-screen flex justify-center leading-9",onClick:e=>I(e),onMouseEnter:e=>I(e),onMouseLeave:e=>k(e),children:(0,n.jsxs)("div",{className:"w-search h-14 flex -mt-8 rounded-xl bg-white z-10 p-2  ".concat(P?"border-2 border-indigo-500/50":""),children:[(0,n.jsxs)("div",{className:"w-full focus:border-2 flex",children:[(0,n.jsx)("div",{className:"w-1/6",children:O?(0,n.jsx)(j.FKI,{className:"w-6 h-8"}):""}),(0,n.jsx)("input",{type:"text",value:t,name:"",id:"",className:"w-4/6 rounded-xl h-full focus:outline-none focus:border-none focus:shadow-none",onChange:e=>E(e.target.value),onKeyDown:e=>C(e)}),(0,n.jsx)("div",{className:"w-6",children:!0===s?(0,n.jsx)("p",{className:"cursor-pointer",onClick:()=>{r(" "),l(!1)},children:"X"}):null})]}),(0,n.jsx)(y,{})]})})}function E(){let e=(0,i.I0)(),{startNumber:t,endNumber:r,codeName:s,title:l,date:d}=(0,i.v9)(e=>e.festivals),{data:m,error:f,isLoading:h}=(0,o.h0)({start:t.toString(),end:r.toString(),codeName:s,title:l,date:d});return((0,a.useEffect)(()=>{m&&m.culturalEventInfo&&m.culturalEventInfo.row&&(e((0,c.Y5)({festivals:m.culturalEventInfo.row})),e((0,c.eh)({totalCount:m.culturalEventInfo.list_total_count})))},[m,f,e]),f)?(0,n.jsx)("p",{children:"Error occurred.."}):h?(0,n.jsx)(b,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"block h-maingPage",children:[(0,n.jsx)(N,{}),(0,n.jsx)(x,{}),(0,n.jsx)(u,{})]})})}},8683:function(e,t,r){"use strict";r.d(t,{Td:function(){return m},VF:function(){return u},Wl:function(){return f},Y5:function(){return a},ZL:function(){return l},_q:function(){return i},eh:function(){return o},oW:function(){return s}});let n=(0,r(9129).oM)({name:"festival",initialState:{festivals:[],totalCount:0,currentPage:1,startNumber:1,endNumber:25,codeCategory:["전체","교육/체험","국악","기타","독주/독창회","무용","뮤지컬/오페라","연극","영화","전시/미술","축제-기타","축제-문화예술","축제-시민화합","축제-자연/경관","죽제-전통/역사","콘서트","클래식"],codeName:" ",date:" ",title:" ",isEmpty:!1},reducers:{setFestivals:(e,t)=>{e.festivals=t.payload.festivals},setTotalCount:(e,t)=>{e.totalCount=t.payload.totalCount},setPageNumber:(e,t)=>{e.currentPage=t.payload.currentPage},setStartNumber:(e,t)=>{e.startNumber=t.payload.startNumber},setEndNumber:(e,t)=>{e.endNumber=t.payload.endNumber},setCodeCategory:(e,t)=>{e.codeCategory=t.payload.codeCategory},setCodeName:(e,t)=>{e.codeName=t.payload.codeName},setTitle:(e,t)=>{e.title=t.payload.title},setDate:(e,t)=>{e.date=t.payload.date},setIsEmpty:(e,t)=>{e.isEmpty=t.payload.isEmpty}}}),{setFestivals:a,setTotalCount:o,setPageNumber:s,setStartNumber:l,setEndNumber:i,setCodeCategory:c,setCodeName:u,setDate:d,setTitle:m,setIsEmpty:f}=n.actions;t.ZP=n.reducer},9119:function(e,t,r){"use strict";r.d(t,{i2:function(){return a},tg:function(){return o}});let n=(0,r(9129).oM)({name:"react",initialState:{borderHighlight:!1,showSearchIcon:!0},reducers:{setborderHighlight:(e,t)=>{e.borderHighlight=t.payload.borderHighlight},setshowSearchIcon:(e,t)=>{e.showSearchIcon=t.payload.showSearchIcon}}}),{setborderHighlight:a,setshowSearchIcon:o}=n.actions;t.ZP=n.reducer},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),s=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:o,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[51,452,240,614,878,557,972,971,117,744],function(){return e(e.s=8269)}),_N_E=e.O()}]);