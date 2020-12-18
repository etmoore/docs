(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(144)),b={id:"bold-editor",title:"Bold Editor",sidebar_label:"Bold Editor",description:"How to use the Standard Notes bold editor.",keywords:["standard notes","docs","notes app","end-to-end encryption","bold editor"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},i={unversionedId:"usage/bold-editor",id:"usage/bold-editor",isDocsHomePage:!1,title:"Bold Editor",description:"How to use the Standard Notes bold editor.",source:"@site/docs/usage/bold-editor.md",slug:"/usage/bold-editor",permalink:"/usage/bold-editor",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/usage/bold-editor.md",version:"current",lastUpdatedAt:1594535914,sidebar_label:"Bold Editor",sidebar:"someSidebar",previous:{title:"General Usage",permalink:"/usage"},next:{title:"Markdown Basic Editor",permalink:"/usage/markdown-basic"}},l=[{value:"Introduction",id:"introduction",children:[{value:'<Highlight color="#1877F2">Warning</Highlight>',id:"warning",children:[]}]},{value:"Keyboard Shortcuts",id:"keyboard-shortcuts",children:[]},{value:"Development",id:"development",children:[]},{value:"License",id:"license",children:[]},{value:"Resources",id:"resources",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}}," ",t," ")},d={rightToc:l,Highlight:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"The Bold Editor is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/help/77/what-are-editors"}),"derived editor")," for Standard Notes. It is derived from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://imperavi.com/redactor"}),"Redactor"),". The instructions for adding in-line images, videos, and audio recordings are available ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/help/71/how-do-i-add-images-to-my-notes"}),"here"),"."),Object(o.b)("h3",{id:"warning"},Object(o.b)(c,{color:"#1877F2",mdxType:"Highlight"},"Warning")),Object(o.b)("p",null,"Changing the editor for a note to the Bold Editor will add ",Object(o.b)("inlineCode",{parentName:"p"},"html")," tags around each line of your text. These tags will be present when you change the editor back to a markdown editor."),Object(o.b)("p",null,"If you want to convert a note from HTML to plaintext, you will need to you will need to remove these tags manually or by using a separate text editor such as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"VS Code")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://atom.io"}),"Atom"),' because we do not yet have a "find and replace" feature. If you would like to test the Bold Editor with your note, you can restore a previous copy of the note in the Session History. If you restore an old copy, then any changes made with the Bold Editor will be lost.'),Object(o.b)("p",null,"The search feature in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions/markdown-minimist"}),"Minimist editor")," may help you remove the tags manually."),Object(o.b)("h2",{id:"keyboard-shortcuts"},"Keyboard Shortcuts"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Result"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Shortcut"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Remove format"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + m")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Undo"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + z")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Redo"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + y or Shift + Ctrl/\u2318 + z")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Bold"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + b")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Italic"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + i")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Superscript"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + h")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Subscript"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + l")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Link"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + k")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ordered List"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + 7")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Unordered List"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + 8")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Outdent"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + [")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Indent"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + ]")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Normal (Pagagraph)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + Alt + 0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Heading 1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + Alt + 1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Heading 2"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + Alt + 2")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Heading 3"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + Alt + 3")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Heading 4"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + Alt + 4")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Heading 5"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + Alt + 5")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Heading 6"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Ctrl/\u2318 + Alt + 6")))),Object(o.b)("h2",{id:"development"},"Development"),Object(o.b)("p",null,"Please see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/standardnotes/bold-editor"}),"README.md")," in the GitHub repository for the latest development information."),Object(o.b)("h2",{id:"license"},"License"),Object(o.b)("p",null,"The Bold Editor is licensed under the GNU ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/standardnotes/bold-editor/blob/master/LICENSE"}),"AGPL-3.0-or-later"),"."),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/standardnotes/bold-editor"}),"GitHub"))))}p.isMDXComponent=!0},144:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),O=a,j=p["".concat(b,".").concat(O)]||p[O]||s[O]||o;return r?n.a.createElement(j,i(i({ref:t},c),{},{components:r})):n.a.createElement(j,i({ref:t},c))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,b=new Array(o);b[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<o;c++)b[c]=r[c];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);