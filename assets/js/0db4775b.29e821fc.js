"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[400],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8405:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Getting started",c={unversionedId:"Introduction/getting-started",id:"Introduction/getting-started",title:"Getting started",description:"\ud83d\udd0d Holmes is a 0 config, fast and elementary state orchestrator for React.",source:"@site/docs/Introduction/getting-started.md",sourceDirName:"Introduction",slug:"/Introduction/getting-started",permalink:"/react-holmes/docs/Introduction/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Introduction/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/react-holmes/docs/Introduction/motivation"},next:{title:"useHolmesState",permalink:"/react-holmes/docs/Hooks/use-holmes-state"}},u={},p=[{value:"Why Holmes?",id:"why-holmes",level:3},{value:"Getting Started",id:"getting-started-1",level:3},{value:"What you&#39;ll need",id:"what-youll-need",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"\ud83d\udd0d ",(0,o.kt)("strong",{parentName:"p"},"Holmes")," is a 0 config, fast and elementary state orchestrator for React."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Holmes")," has a very minimal API. It is as simple to use as React\u2019s integrated hooks, but all state is globally accessible."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca1 Easy as React state hooks"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd04 State synchronization between components"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udef0\ufe0f Distributed and not centralized state"),(0,o.kt)("li",{parentName:"ul"},"\ud83e\udd2f No mutable objects"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\ude80 Fast")),(0,o.kt)("h3",{id:"why-holmes"},"Why Holmes?"),(0,o.kt)("p",null,"Holmes has one objective: ",(0,o.kt)("strong",{parentName:"p"},"make state management as easy and fast as possible"),"."),(0,o.kt)("p",null,"Simplifying the state management process is a great way to improve the performance of your application and with Holmes we can achieve this result."),(0,o.kt)("p",null,"Holmes is built on top of RxJS, which is a library for reactive programming and we are using it to make the state management process as fast as possible."),(0,o.kt)("p",null,"No external configuration is required, no boilerplate code, install the npm package and you are ready to use Holmes's elementary hooks."),(0,o.kt)("h3",{id:"getting-started-1"},"Getting Started"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm -i @devx-os/react-holmes\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @devx-os/react-holmes\n")),(0,o.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 14 or above:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))))}m.isMDXComponent=!0}}]);