(self.webpackChunkresume=self.webpackChunkresume||[]).push([[556],{556:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>E});var t=r(294),o=r(697),a=r.n(o),A=r(379),s=r.n(A),i=r(795),l=r.n(i),c=r(569),m=r.n(c),p=r(565),d=r.n(p),f=r(216),C=r.n(f),b=r(589),u=r.n(b),h=r(917),x={};x.styleTagTransform=u(),x.setAttributes=d(),x.insert=m().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=C(),s()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;var y=function(e){var n=e.works;return t.createElement("div",{className:"__work"},t.createElement("h3",null,"Experience"),n.map((function(e,n){return t.createElement("ul",{className:"work__experience",key:n},t.createElement("div",{className:"experience__time"},t.createElement("span",{className:"__rounder"}),t.createElement("span",{className:"__line"})),t.createElement("div",{className:"experience__data bd-grid"},t.createElement("li",{className:"position"},e.position),t.createElement("li",{className:"company"},e.company),t.createElement("div",{className:"date"},t.createElement("li",null,e.startDate),t.createElement("li",null,e.endDate)),t.createElement("li",null,e.summary)))})))};y.propTypes={works:a().array.isRequired};const E=y},917:(e,n,r)=>{"use strict";r.d(n,{Z:()=>s});var t=r(537),o=r.n(t),a=r(645),A=r.n(a)()(o());A.push([e.id,':root{--header-height: 3rem;--title-color: #434c5e;--text-color: #4c566a;--text-color-light: #7b88a1;--container-color: #ffffff;--container-color-alt: #f7f9fb;--body-color: #f2f4f8;--container-basics: #d3dbeb;--body-font: "Poppins", sans-serif;--h1-font-size: 1.5rem;--h2-font-size: 1.25rem;--h3-font-size: 1rem;--normal-font-size: 0.938rem;--small-font-size: 0.875rem;--smaller-font-size: 0.813rem;--font-medium: 500;--font-semi-bold: 600;--mb-1: 0.5rem;--mb-2: 1rem;--mb-3: 1.5rem;--mb-4: 3.5rem;--z-tooltip: 10;--z-fixed: 100;--mobile-main-color: #6096ba}@supports(-moz-appearance: none){.date li:last-child::before{border:.1rem solid var(--text-color)}}@media screen and (-webkit-min-device-pixel-ratio: 0)and (min-resolution: 0.001dpcm){.date li:last-child::before{border:1px solid var(--text-color)}}@media not all and (min-resolution: 0.001dpcm){@supports(-webkit-appearance: none) and (stroke-color: transparent){.date li:last-child::before{border:1px solid var(--text-color)}}}.company{text-transform:uppercase;font-weight:700}',"",{version:3,sources:["webpack://./src/_variables.scss","webpack://./src/components/Experience/Experience.scss"],names:[],mappings:"AAAA,MACI,qBAAA,CAEA,sBAAA,CACA,qBAAA,CACA,2BAAA,CACA,0BAAA,CACA,8BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,kCAAA,CACA,sBAAA,CACA,uBAAA,CACA,oBAAA,CACA,4BAAA,CACA,2BAAA,CACA,6BAAA,CAEA,kBAAA,CACA,qBAAA,CAEA,cAAA,CACA,YAAA,CACA,cAAA,CACA,cAAA,CAEA,eAAA,CACA,cAAA,CAEA,4BAAA,CAGJ,iCACI,4BACI,oCAAA,CAAA,CAIR,qFACI,4BACI,kCAAA,CAAA,CAIR,+CACI,oEACI,4BACI,kCAAA,CAAA,CAAA,CC9CZ,SACI,wBAAA,CACA,eAAA",sourcesContent:[':root {\n    --header-height: 3rem;\n  \n    --title-color: #434c5e;\n    --text-color: #4c566a;\n    --text-color-light: #7b88a1;\n    --container-color: #ffffff;\n    --container-color-alt: #f7f9fb;\n    --body-color: #f2f4f8;\n    --container-basics: #d3dbeb;\n  \n    --body-font: "Poppins", sans-serif;\n    --h1-font-size: 1.5rem;\n    --h2-font-size: 1.25rem;\n    --h3-font-size: 1rem;\n    --normal-font-size: 0.938rem;\n    --small-font-size: 0.875rem;\n    --smaller-font-size: 0.813rem;\n  \n    --font-medium: 500;\n    --font-semi-bold: 600;\n  \n    --mb-1: 0.5rem;\n    --mb-2: 1rem;\n    --mb-3: 1.5rem;\n    --mb-4: 3.5rem;\n  \n    --z-tooltip: 10;\n    --z-fixed: 100;\n\n    --mobile-main-color: #6096ba;\n}\n\n@supports (-moz-appearance:none) {\n    .date li:last-child::before { \n        border: .10rem solid var(--text-color);\n     }\n}\n\n@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {\n    .date li:last-child::before { \n        border: 1px solid var(--text-color);\n    }\n}\n\n@media not all and (min-resolution:.001dpcm){\n    @supports (-webkit-appearance:none) and (stroke-color:transparent) {\n        .date li:last-child::before { \n            border: 1px solid var(--text-color);\n        }\n    }\n}',"@import '../../variables';\n\n.company {\n    text-transform: uppercase;\n    font-weight: 700;\n}\n"],sourceRoot:""}]);const s=A},703:(e,n,r)=>{"use strict";var t=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,n,r,o,a,A){if(A!==t){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,n,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=556.bundle.js.map