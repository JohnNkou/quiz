/*! For license information please see quiz.js.LICENSE.txt */
var Quiz;(()=>{"use strict";var e={869:(e,t)=>{Symbol.for("react.transitional.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.consumer"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,n={};function c(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||a}function l(){}function o(e,t,r){this.props=e,this.context=t,this.refs=n,this.updater=r||a}c.prototype.isReactComponent={},c.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},c.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},l.prototype=c.prototype;var s=o.prototype=new l;s.constructor=o,r(s,c.prototype),s.isPureReactComponent=!0;Array.isArray;var i={H:null,A:null,T:null,S:null};Object.prototype.hasOwnProperty;"function"==typeof reportError&&reportError;t.createRef=function(){return{current:null}},t.useEffect=function(e,t){return i.H.useEffect(e,t)},t.useState=function(e){return i.H.useState(e)}},540:(e,t,a)=>{e.exports=a(869)}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,a),c.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{a.r(r),a.d(r,{QuestionaireForm:()=>x,default:()=>N});var e=a(540);function t(t){let{myAssertion:a,questions:r,totalResponse:c,onClose:l}=t,[o,s]=(0,e.useState)(""),[i,u]=(0,e.useState)(0),[m,d]=(0,e.useState)(0),[f,p]=(0,e.useState)(null);return(0,e.useEffect)((()=>{let e=0,t={};r.forEach(((r,n)=>{let c={success:!1,assertions:{}};a[n].every((t=>{let a=!1;return r.assertions[t].checked&&(e++,a=!0),c.assertions[t]=a,a}))&&(c.success=!0),t[n]=c})),o=Math.floor(e/c*100)+"%",s(o),u(e),p(t)}),[!0]),React.createElement("div",null,React.createElement("div",{className:"mb-5"},React.createElement("h1",{className:"text-3xl font-bold text-blue-500"},"Resultats")),React.createElement("div",null,React.createElement("div",{className:"text-blue-900"},React.createElement("p",{className:"grid grid-cols-2"},React.createElement("span",{className:"text-right font-medium"},"Pourcentage:"),React.createElement("span",null,o)),React.createElement("p",{className:"grid grid-cols-2"},React.createElement("span",{className:"text-right font-medium"},"Bonne reponse:"),React.createElement("span",null,i,"/",c)))),React.createElement("div",{className:"mt-5"},React.createElement("h3",{className:"text-red-500 text-xl"},"Corrections"),React.createElement(n,{cursor:m,report:f,questions:r,onNavigation:function(e){d(e)},userAssertions:a})),React.createElement("p",{className:"mt-5"},React.createElement("button",{onClick:function(e){e.preventDefault(),l&&l()},className:"bg-indigo-900 p-2 rounded-xl text-white"},"Fermer")))}function n(t){let{cursor:a,report:r,questions:n,onShowResult:l,onAssertionUpdated:o,allowResult:s,onNavigation:i,totalResponse:u,userTotalResponse:m,userAssertions:d}=t,[f,p]=(0,e.useState)([]),[C,h]=(0,e.useState)(),R=n[a];return R?React.createElement("div",{style:{minHeight:"500px"},className:"relative h-full px-4"},React.createElement("div",{className:"mt-3"},React.createElement("div",{className:"bg-indigo-950 rounded text-white grid grid-cols-3 place-items-start items-start p-2"},React.createElement("p",{className:"font-bold"},"Question ",Number(a)+1,"."),React.createElement("p",{className:"col-span-2"},R.title),React.createElement("p",{className:"col-span-2"},React.createElement(c,{onAssertionNumber:function(e){h(e)},assertions:R.assertions}))),React.createElement("div",{onClick:function(e){e.preventDefault();let t=e.target.getAttribute("data-assertion-index");if(t){if(t=Number(t),t!=t==1)return console.error("Assertion_index is not a number",t,t!=t);let e=d[a]||[],r=e.indexOf(t);if(-1==r){if(1==C)e.length&&e.pop(),e.push(t);else if(e.length<C)e.push(t);else if(C==e.length)return}else e.splice(r,1),0==e.length&&(e=null);o&&o(e)}},className:"mt-5"},R.assertions.map(((e,t)=>{let n=e.id,c=e.text,l="mb-5 border rounded p-2",o=d[a];if(r){let n=r[a].assertions;n[t]||e.checked?l+=" bg-green-500 text-white":!1===n[t]&&(l+=" bg-red-500")}else o&&-1!=o.indexOf(t)?l+=" bg-green-500 text-white active:bg-red-500":l+=" hover:bg-indigo-500 active:bg-blue-800 hover:text-white";return React.createElement("p",{"data-assertion-index":t,className:l,key:n},c)})))),s&&u==m?React.createElement("div",{className:"mb-5"},React.createElement("button",{onClick:l,className:"bg-indigo-900 text-white p-2 rounded"},"Terminer")):null,React.createElement("div",{className:"absolute bottom-2 w-full",onClick:function(e){e.preventDefault();let t=e.target.getAttribute("data-cursor");t&&(d[a]&&-1==f.indexOf(a)&&d[a].length==C&&f.push(Number(a)),i&&i(t))}},n.map(((e,t)=>{let n=t+1,c="py-1 px-3 rounded-xl me-2 shadow";return r?r[t].success?c+=" bg-green-500 text-white":c+=" bg-red-500":t==a?c+=" bg-indigo-500 text-white":-1!=f.indexOf(t)?c+=" bg-zinc-400 text-white":c+=" text-black",React.createElement("span",{key:t,className:c,"data-cursor":t},n)})))):React.createElement("p",null,"No current question found")}function c(t){let[a,r]=(0,e.useState)("");return(0,e.useEffect)((()=>{let e=t.assertions.reduce(((e,t)=>(t.checked&&e++,e)),0);r(1==e?"choix Unique":`choix multiple (${e})`),t.onAssertionNumber&&t.onAssertionNumber(e)}),[t.assertions]),React.createElement("span",{className:"text-xs mt-5 inline-block"},a)}const l={TINY:16,NORMAL:30,MEDIUM:60,LARGE:80};function o(e){return`q-${e}`}function s(e,t){return o(e)+`-a-${t}`}function i(e){return o(e)+"-c"}function u(e){-1==e.className.indexOf("border-red-500")&&(e.className+=" border-red-500")}function m(e){e.className=e.className.replaceAll("border-red-500","")}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(null,arguments)}function f(e){let{size:t=l.NORMAL,data:a={},color:r}=e,n=r||"#212121";return React.createElement("svg",d({width:t,height:t,viewBox:"0 0 48 48",fill:n},a),React.createElement("path",d({},a,{d:"M11.25 6C8.3505 6 6 8.35051 6 11.25V36.75C6 39.6495 8.35051 42 11.25 42H24.5187C24.0191 41.2196 23.6006 40.3823 23.275 39.5H11.25C9.73122 39.5 8.5 38.2688 8.5 36.75V11.25C8.5 9.73122 9.73122 8.5 11.25 8.5H36.75C38.2688 8.5 39.5 9.73122 39.5 11.25V22.6351C40.3781 22.9207 41.2151 23.2972 42 23.7536V11.25C42 8.3505 39.6495 6 36.75 6H11.25Z"})),React.createElement("path",d({},a,{d:"M24.5215 27.9956C24.0215 28.7759 23.6026 29.6132 23.2766 30.4956H11.25C10.5596 30.4956 10 29.936 10 29.2456C10 28.5553 10.5596 27.9956 11.25 27.9956H24.5215Z"})),React.createElement("path",d({},a,{d:"M32.9976 11.2481C32.9976 10.5578 32.4379 9.99811 31.7476 9.99811C31.0572 9.99811 30.4976 10.5578 30.4976 11.2481V14H27.75C27.0596 14 26.5 14.5596 26.5 15.25C26.5 15.9404 27.0596 16.5 27.75 16.5H30.4976V19.2483C30.4976 19.9386 31.0572 20.4983 31.7476 20.4983C32.4379 20.4983 32.9976 19.9386 32.9976 19.2483V16.5H35.7501C36.4405 16.5 37.0001 15.9404 37.0001 15.25C37.0001 14.5596 36.4405 14 35.7501 14H32.9976V11.2481Z"})),React.createElement("path",d({},a,{d:"M20.6533 10.7712C20.4601 10.3034 20.0039 9.99831 19.4977 9.99838C18.9916 9.99846 18.5355 10.3037 18.3424 10.7716L13.5945 22.2776C13.3311 22.9157 13.635 23.6465 14.2731 23.9099C14.9113 24.1732 15.6421 23.8694 15.9054 23.2312L16.6124 21.5181H22.3869L23.0946 23.2316C23.3581 23.8696 24.089 24.1733 24.7271 23.9097C25.3652 23.6462 25.6688 22.9153 25.4053 22.2772L20.6533 10.7712ZM21.3544 19.0181H17.644L19.4984 14.5242L21.3544 19.0181Z"})),React.createElement("path",d({},a,{d:"M10 35.25C10 34.5596 10.5596 34 11.25 34H19.2581C19.9484 34 20.5081 34.5596 20.5081 35.25C20.5081 35.9404 19.9484 36.5 19.2581 36.5H11.25C10.5596 36.5 10 35.9404 10 35.25Z"})),React.createElement("path",d({},a,{d:"M46.4751 35C46.4751 41.0751 41.5502 46 35.4751 46C29.4 46 24.4751 41.0751 24.4751 35C24.4751 28.9249 29.4 24 35.4751 24C41.5502 24 46.4751 28.9249 46.4751 35ZM36.4751 28C36.4751 27.4477 36.0274 27 35.4751 27C34.9228 27 34.4751 27.4477 34.4751 28V34H28.4751C27.9228 34 27.4751 34.4477 27.4751 35C27.4751 35.5523 27.9228 36 28.4751 36H34.4751V42C34.4751 42.5523 34.9228 43 35.4751 43C36.0274 43 36.4751 42.5523 36.4751 42V36H42.4751C43.0274 36 43.4751 35.5523 43.4751 35C43.4751 34.4477 43.0274 34 42.4751 34H36.4751V28Z"})))}function p(e){let{size:t=l.NORMAL,data:a={},color:r}=e,n=r||"#212121";return React.createElement("svg",d({width:t,height:t,viewBox:"0 0 48 48",fill:n},a),React.createElement("path",d({},a,{d:"M17.644 19.0181H21.3545L19.4984 14.5241L17.644 19.0181Z"})),React.createElement("path",d({},a,{d:"M11.25 6C8.3505 6 6 8.35051 6 11.25V36.75C6 39.6495 8.35051 42 11.25 42H24.5187C23.2251 39.9794 22.4751 37.5773 22.4751 35C22.4751 33.4165 22.7582 31.899 23.2766 30.4956H11.25C10.5596 30.4956 10 29.936 10 29.2456C10 28.5553 10.5596 27.9956 11.25 27.9956H24.5215C26.8322 24.3897 30.8745 22 35.4751 22C37.8533 22 40.0823 22.6386 42 23.7536V11.25C42 8.3505 39.6495 6 36.75 6H11.25ZM10 35.25C10 34.5596 10.5596 34 11.25 34H19.2581C19.9484 34 20.5081 34.5596 20.5081 35.25C20.5081 35.9404 19.9484 36.5 19.2581 36.5H11.25C10.5596 36.5 10 35.9404 10 35.25ZM19.4977 9.99829C20.0039 9.99821 20.4601 10.3033 20.6533 10.7711L25.4053 22.2771C25.6688 22.9152 25.3652 23.6461 24.7271 23.9096C24.089 24.1732 23.3581 23.8695 23.0946 23.2315L22.387 21.5181H16.6123L15.9054 23.2311C15.6421 23.8693 14.9113 24.1731 14.2731 23.9098C13.635 23.6465 13.3311 22.9156 13.5945 22.2775L18.3424 10.7715C18.5355 10.3036 18.9916 9.99837 19.4977 9.99829ZM31.7476 9.99811C32.4379 9.99811 32.9976 10.5578 32.9976 11.2481V14H35.7501C36.4405 14 37.0001 14.5596 37.0001 15.25C37.0001 15.9404 36.4405 16.5 35.7501 16.5H32.9976V19.2483C32.9976 19.9386 32.4379 20.4983 31.7476 20.4983C31.0572 20.4983 30.4976 19.9386 30.4976 19.2483V16.5H27.75C27.0596 16.5 26.5 15.9404 26.5 15.25C26.5 14.5596 27.0596 14 27.75 14H30.4976V11.2481C30.4976 10.5578 31.0572 9.99811 31.7476 9.99811Z"})),React.createElement("path",d({},a,{d:"M46.4751 35C46.4751 41.0751 41.5502 46 35.4751 46C29.4 46 24.4751 41.0751 24.4751 35C24.4751 28.9249 29.4 24 35.4751 24C41.5502 24 46.4751 28.9249 46.4751 35ZM36.4751 28C36.4751 27.4477 36.0274 27 35.4751 27C34.9228 27 34.4751 27.4477 34.4751 28V34H28.4751C27.9228 34 27.4751 34.4477 27.4751 35C27.4751 35.5523 27.9228 36 28.4751 36H34.4751V42C34.4751 42.5523 34.9228 43 35.4751 43C36.0274 43 36.4751 42.5523 36.4751 42V36H42.4751C43.0274 36 43.4751 35.5523 43.4751 35C43.4751 34.4477 43.0274 34 42.4751 34H36.4751V28Z"})))}function C(e){let{size:t=l.NORMAL,data:a={},color:r}=e;return React.createElement("svg",d({width:t,height:t,viewBox:"0 0 24 24",fill:r},a),React.createElement("path",d({},a,{d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"})))}function h(e){let{size:t=l.NORMAL,data:a={},color:r}=e,n=r||"#292D32";return React.createElement("svg",d({width:t,height:t,viewBox:"0 0 24 24",fill:n},a),React.createElement("path",d({},a,{d:"M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"})))}function R(e){let{size:t=l.NORMAL,data:a={},color:r}=e,n=r||"#0F0F0F";return React.createElement("svg",d({width:t,height:t,viewBox:"0 0 24 24",fill:n},a),React.createElement("path",d({},a,{fillRule:"evenodd",clipRule:"evenodd",d:"M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"})))}function b(t){let[a,r]=(0,e.useState)(t.assertions),[n,c]=(0,e.useState)(0),[u,m]=(0,e.useState)(!1),[d,f]=(0,e.useState)((0,e.createRef)()),R=o(t.number);function b(e){d.current,e&&(e.preventDefault(),e.stopPropagation()),a.push({text:"",checked:!1,id:n++,focus:!t.autoFocus}),r([...a]),c(n)}return(0,e.useEffect)((()=>{let e=d.current;e?e.scrollIntoView():console.error("No Node?",e)}),[d]),(0,e.useEffect)((()=>{u&&r(a.map((e=>({...e,focus:!1}))))}),[u,a]),(0,e.useEffect)((()=>{if(0==a.length)b(),b();else{let e=a.reduce(((e,t)=>e.id>t.id?e.id:t.id),0);e++,c(e)}}),[a]),t.assertions?null==t.id?React.createElement("p",{className:"text-red-500 bg-white-100"},"No id given"):React.createElement("div",{className:"mt-5 bg-white grid grid-cols-1 place-items-center"},React.createElement("div",{className:"content-center relative w-full"},React.createElement("div",{className:"text-center bg-indigo-900 rounded-t-xl"},React.createElement("p",{className:"align-top mb-2 font-bold text-white"},"Question.",t.number+1),React.createElement("textarea",{autoFocus:t.autoFocus,name:R,className:"w-80 p-2 text-sm rounded",defaultValue:t.title})),React.createElement("div",{className:"absolute left-full top-0 flex gap-2 ms-2"},React.createElement("button",{className:"",onClick:b},React.createElement(p,null)),React.createElement("button",{className:""},React.createElement(h,{color:"rgb(255, 78, 78)",data:{"data-q-id":t.id}})))),React.createElement("div",{className:"",ref:d,onClick:function(e){e.stopPropagation();let t=e.target,n=t.getAttribute("data-q-id");t.getAttribute("data-c-id"),n&&(e.preventDefault(),n=Number(n),a.splice(n,1),r([...a]))}},React.createElement("div",{className:"bg-white"},React.createElement("h1",{className:"font-bold"},"Assertions"),a.map(((e,r)=>{let{text:n,checked:c,id:o,focus:u}=e,m=s(t.number,r),d=i(t.number);return React.createElement("div",{key:o,className:"relative mb-5"},React.createElement("div",{className:""},React.createElement("textarea",{autoFocus:u,defaultValue:n,name:m,className:"border rounded text-center w-72 align-bottom me-1",placeholder:""})),React.createElement("div",{className:"absolute left-full grid grid-cols-2 w-10 place-items-center top-0"},React.createElement("input",{type:"checkbox",defaultChecked:c,"data-check":"true","data-c-id":r,name:d}),a.length>2?React.createElement(React.Fragment,null,React.createElement("button",{"data-q-id":r,className:"text-sm px-2 text-white align-bottom me-2"},React.createElement(C,{size:l.TINY,color:"rgb(255, 78, 78)",data:{"data-q-id":r}}))):null))}))))):React.createElement("p",{className:"text-red-500 bg-white-100"},"No assertion givens")}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},E.apply(null,arguments)}let g=0,v=(0,e.createRef)();const N=function(a){let[r,c]=(0,e.useState)(a.questionaire),[l,o]=(0,e.useState)(0),[s,i]=(0,e.useState)([]),[u,m]=(0,e.useState)({}),[d,f]=(0,e.useState)(),[p,C]=(0,e.useState)(0),[h,R]=(0,e.useState)(0),[b,E]=(0,e.useState)(!1),g=r.title,v=r.questions;function N(e){e&&e.preventDefault(),a.onBack&&a.onBack()}return v[l],(0,e.useEffect)((()=>{-1==location.hash.indexOf("start")&&(location.hash+="/start"),0==p&&(r.questions.forEach(((e,t)=>{e.assertions.forEach((e=>{e.checked&&p++}))})),C(p))}),[p,r]),React.createElement("div",{className:"shadow w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white text-center inline-block pb-10"},b?React.createElement(t,{myAssertion:u,questions:v,onClose:N,totalResponse:p}):React.createElement("div",{className:"relative"},React.createElement("div",{className:"p-5"},React.createElement("div",{className:""},React.createElement("h1",{className:"text-2xl font-bold relative "},React.createElement("button",{onClick:N,className:"absolute text-sm mt-2 left-0"},"Back"),g))),React.createElement(n,{allowResult:!0,cursor:l,questions:v,onShowResult:()=>E(!0),onAssertionUpdated:function(e){if(e)u[l]=[...e];else{if(null!==e)return console.error("ODD NEW USERASSERTION",e);delete u[l]}let t=0;Object.keys(u).forEach((e=>{t+=u[e].length})),m({...u}),R(t)},onNavigation:function(e){o(e)},totalResponse:p,userTotalResponse:h,userAssertions:u})))},x=function(t){let[a,r]=(0,e.useState)([]),[n,c]=(0,e.useState)(t.title||"");if((0,e.useEffect)((()=>{if(t.questions){let e=[...t.questions];"id"in e[0]||(e=e.map((e=>(e.id=g++,e))),console.log("KAKA",e),r(e))}else r([{title:"",assertions:[],id:g++,autoFocus:!0}])}),[t.questions]),!t.onSave)throw Error("No onSave property given");return React.createElement("div",{className:"text-center"},React.createElement("div",{className:"fixed w-full bg-indigo-900 p-2 top-0 z-50 shadow"},React.createElement("div",{className:"grid grid-cols-3 text-white"},React.createElement("button",{onClick:function(e){e.preventDefault();let r=v.current;if(r){let e=[],n=a.length,c=r.elements.title;if(!c.value.length)return u(c),console.error("No title provided");m(c);for(let t=0;t<n;t++){let a,n,c,l,d=o(t),f=i(t),p=r.elements[d],C=0;if(p){if(a=p.value,!a)return u(p),p.focus(),console.error("Question number",t+1,"has nothing");if(m(p),l=r.elements[f],n=[],!l)return u(p),console.error("No assertion provided for question",t);if(!l.length)return console.error("No checks found for questions",t+1);for(let e=0,a=0;;e++){let o;if(c=s(t,e),o=r.elements[c],!o)break;n.push({text:o.value,checked:l[e].checked,id:a++}),l[e].checked&&C++}if(!C)return u(p),l[0].focus(),console.error("No assertion has been checked");if(!n.length)return console.error("No checked assertion provided for question",t);e.push({title:a,assertions:n})}}console.log("NewQuestion is",{title:c.value,questions:e}),t.onSave({title:c.value,questions:e})}else console.error("No form given")},className:" text-white w-52 px-2"},React.createElement(R,{color:"white"})),React.createElement("h1",{className:"text-3xl font-bold"},"Questionnaires"),React.createElement("div",{className:"flex justify-end items-center pe-5"},React.createElement("button",{className:"me-2",onClick:function(e){e.preventDefault(),a=a.map((e=>({...e,autoFocus:!1}))),a.push({title:"",id:g++,assertions:[],autoFocus:!0}),r(a)}},React.createElement(f,{color:"white"})),React.createElement("a",{href:"#"},React.createElement(C,{color:"rgb(255, 78, 78)",style:{color:"rgb(255, 78, 78)"}}))))),React.createElement("form",{className:"mt-20 grid grid-cols-1 place-items-center",ref:v},React.createElement("div",null,React.createElement("div",null,React.createElement("span",null),React.createElement("input",{className:"border text-center p-1 text-base grow rounded-lg w-96",name:"title",defaultValue:n,placeholder:"Titre du questionnaire"}),React.createElement("span",null)),React.createElement("div",{onClick:function(e){e.preventDefault();let t,n=e.target,c=n.getAttribute("data-q-id");console.log("target",n),c&&(t=a.filter((e=>e.id!=c)),r(t))},className:"mt-10"},a.map(((e,t)=>React.createElement(b,E({key:e.id},e,{number:t}))))))))}})(),Quiz=r})();