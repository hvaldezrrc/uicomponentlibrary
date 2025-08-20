"use strict";(self.webpackChunkvaldez_hanz_ui_garden=self.webpackChunkvaldez_hanz_ui_garden||[]).push([[513],{"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
  border: none;
  border-radius: 4px;
  cursor: ${props=>props.disabled?"not-allowed":"pointer"};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
  padding: ${props=>{switch(props.size){case"small":return"8px 16px";case"large":return"16px 32px";default:return"12px 24px"}}};
  font-size: ${props=>{switch(props.size){case"small":return"12px";case"large":return"16px";default:return"14px"}}};
  background-color: ${props=>{if(props.disabled)return"#cccccc";if(props.backgroundColor)return props.backgroundColor;switch(props.variant){case"secondary":return"#ffffff";case"danger":return"#dc3545";default:return"#007bff"}}};
  color: ${props=>props.disabled?"#666666":"secondary"===props.variant?"#007bff":"#ffffff"};
  border: ${props=>"secondary"===props.variant?"1px solid #007bff":"none"};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: ${props=>{switch(props.size){case"small":return"6px 12px";case"large":return"12px 24px";default:return"10px 20px"}}};
    font-size: ${props=>{switch(props.size){case"small":return"11px";case"large":return"15px";default:return"13px"}}};
  }
`,Button=({label,size="medium",variant="primary",disabled=!1,backgroundColor,className,onClick,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledButton,{type:"button",size,variant,disabled,backgroundColor,className,onClick,label,...props,children:label});try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BlogPostCard:()=>BlogPostCard,ContentOnly:()=>ContentOnly,CustomBackground:()=>CustomBackground,Default:()=>Default,Disabled:()=>Disabled,FixedDimensions:()=>FixedDimensions,ProductCard:()=>ProductCard,ResponsiveGrid:()=>ResponsiveGrid,TallCard:()=>TallCard,TitleOnly:()=>TitleOnly,WideCard:()=>WideCard,WithCustomChildren:()=>WithCustomChildren,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledCard=styled_components_browser_esm.Ay.div`
  background-color: ${props=>props.backgroundColor||"#ffffff"};
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: ${props=>props.width||"auto"};
  height: ${props=>props.height||"auto"};
  opacity: ${props=>props.disabled?.6:1};
  cursor: ${props=>props.disabled?"not-allowed":"default"};
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;

    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`,CardTitle=styled_components_browser_esm.Ay.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #212529;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`,CardContent=styled_components_browser_esm.Ay.div`
  color: #495057;
  font-size: 14px;
  line-height: 1.5;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,CardContentText=styled_components_browser_esm.Ay.p`
  margin: 0;
  color: #495057;
  font-size: 14px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Card=({title,content,children,width,height,disabled=!1,backgroundColor,className,...props})=>(0,jsx_runtime.jsxs)(StyledCard,{width,height,disabled,backgroundColor,className,title,content,...props,children:[title&&(0,jsx_runtime.jsx)(CardTitle,{children:title}),children?(0,jsx_runtime.jsx)(CardContent,{children}):content?(0,jsx_runtime.jsx)(CardContentText,{children:content}):null]});try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx");const Card_stories={title:"Components/Card",component:Card,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},width:{control:"text"},height:{control:"text"},title:{control:"text"},content:{control:"text"}}},Default={args:{title:"Card Title",content:"This is the default card content. It provides a clean and simple layout for displaying information."}},TitleOnly={args:{title:"Title Only Card"}},ContentOnly={args:{content:"This card has content but no title. It focuses entirely on the message or information being presented."}},WithCustomChildren={args:{title:"Card with Custom Content",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Text.E,{content:"This card uses custom children instead of the content prop."}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Button.$,{label:"Learn More",variant:"primary"})]})}},FixedDimensions={args:{title:"Fixed Size Card",content:"This card has fixed width and height dimensions.",width:"300px",height:"200px"}},WideCard={args:{title:"Wide Card Layout",content:"This is a wider card that demonstrates how the component handles different aspect ratios and content layouts.",width:"500px"}},TallCard={args:{title:"Tall Card Layout",content:"This is a taller card that shows how the component handles more vertical space. It can accommodate longer content while maintaining good proportions and readability.",height:"300px",width:"250px"}},Disabled={args:{title:"Disabled Card",content:"This card is disabled and shows the appropriate visual state.",disabled:!0}},CustomBackground={args:{title:"Custom Background",content:"This card has a custom background color to match your design system.",backgroundColor:"#e3f2fd"}},ProductCard={args:{title:"Premium Plan",width:"280px",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Text.E,{content:"Perfect for growing businesses",size:"small"}),(0,jsx_runtime.jsx)("div",{style:{margin:"16px 0"},children:(0,jsx_runtime.jsx)(Text.E,{content:"$29/month",size:"large",weight:"bold"})}),(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,jsx_runtime.jsx)(Text.E,{content:"✓ Up to 100 users",size:"small"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Text.E,{content:"✓ Advanced analytics",size:"small"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Text.E,{content:"✓ Priority support",size:"small"})]}),(0,jsx_runtime.jsx)(Button.$,{label:"Get Started",variant:"primary"})]})}},BlogPostCard={args:{title:"Understanding React Components",width:"350px",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Text.E,{content:"Learn the fundamentals of React components and how to build reusable UI elements for your applications."}),(0,jsx_runtime.jsx)("div",{style:{marginTop:"16px",marginBottom:"20px"},children:(0,jsx_runtime.jsx)(Text.E,{content:"Published: March 15, 2024",size:"small",color:"#6c757d"})}),(0,jsx_runtime.jsx)(Button.$,{label:"Read More",variant:"secondary",size:"small"})]})}},ResponsiveGrid={render:()=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px",maxWidth:"800px"},children:[(0,jsx_runtime.jsx)(Card,{title:"Feature One",content:"Description of the first feature and its benefits for users."}),(0,jsx_runtime.jsx)(Card,{title:"Feature Two",content:"Description of the second feature and how it improves the user experience."}),(0,jsx_runtime.jsx)(Card,{title:"Feature Three",content:"Description of the third feature and its impact on productivity."})]})},__namedExportsOrder=["Default","TitleOnly","ContentOnly","WithCustomChildren","FixedDimensions","WideCard","TallCard","Disabled","CustomBackground","ProductCard","BlogPostCard","ResponsiveGrid"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Card Title',\n    content: 'This is the default card content. It provides a clean and simple layout for displaying information.'\n  }\n}",...Default.parameters?.docs?.source}}},TitleOnly.parameters={...TitleOnly.parameters,docs:{...TitleOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Title Only Card'\n  }\n}",...TitleOnly.parameters?.docs?.source}}},ContentOnly.parameters={...ContentOnly.parameters,docs:{...ContentOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    content: 'This card has content but no title. It focuses entirely on the message or information being presented.'\n  }\n}",...ContentOnly.parameters?.docs?.source}}},WithCustomChildren.parameters={...WithCustomChildren.parameters,docs:{...WithCustomChildren.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Card with Custom Content\',\n    children: <div>\n        <Text content="This card uses custom children instead of the content prop." />\n        <br />\n        <Button label="Learn More" variant="primary" />\n      </div>\n  }\n}',...WithCustomChildren.parameters?.docs?.source}}},FixedDimensions.parameters={...FixedDimensions.parameters,docs:{...FixedDimensions.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Fixed Size Card',\n    content: 'This card has fixed width and height dimensions.',\n    width: '300px',\n    height: '200px'\n  }\n}",...FixedDimensions.parameters?.docs?.source}}},WideCard.parameters={...WideCard.parameters,docs:{...WideCard.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Wide Card Layout',\n    content: 'This is a wider card that demonstrates how the component handles different aspect ratios and content layouts.',\n    width: '500px'\n  }\n}",...WideCard.parameters?.docs?.source}}},TallCard.parameters={...TallCard.parameters,docs:{...TallCard.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Tall Card Layout',\n    content: 'This is a taller card that shows how the component handles more vertical space. It can accommodate longer content while maintaining good proportions and readability.',\n    height: '300px',\n    width: '250px'\n  }\n}",...TallCard.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Disabled Card',\n    content: 'This card is disabled and shows the appropriate visual state.',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},CustomBackground.parameters={...CustomBackground.parameters,docs:{...CustomBackground.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Custom Background',\n    content: 'This card has a custom background color to match your design system.',\n    backgroundColor: '#e3f2fd'\n  }\n}",...CustomBackground.parameters?.docs?.source}}},ProductCard.parameters={...ProductCard.parameters,docs:{...ProductCard.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Premium Plan\',\n    width: \'280px\',\n    children: <div>\n        <Text content="Perfect for growing businesses" size="small" />\n        <div style={{\n        margin: \'16px 0\'\n      }}>\n          <Text content="$29/month" size="large" weight="bold" />\n        </div>\n        <div style={{\n        marginBottom: \'20px\'\n      }}>\n          <Text content="✓ Up to 100 users" size="small" />\n          <br />\n          <Text content="✓ Advanced analytics" size="small" />\n          <br />\n          <Text content="✓ Priority support" size="small" />\n        </div>\n        <Button label="Get Started" variant="primary" />\n      </div>\n  }\n}',...ProductCard.parameters?.docs?.source}}},BlogPostCard.parameters={...BlogPostCard.parameters,docs:{...BlogPostCard.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Understanding React Components\',\n    width: \'350px\',\n    children: <div>\n        <Text content="Learn the fundamentals of React components and how to build reusable UI elements for your applications." />\n        <div style={{\n        marginTop: \'16px\',\n        marginBottom: \'20px\'\n      }}>\n          <Text content="Published: March 15, 2024" size="small" color="#6c757d" />\n        </div>\n        <Button label="Read More" variant="secondary" size="small" />\n      </div>\n  }\n}',...BlogPostCard.parameters?.docs?.source}}},ResponsiveGrid.parameters={...ResponsiveGrid.parameters,docs:{...ResponsiveGrid.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: \'grid\',\n    gridTemplateColumns: \'repeat(auto-fit, minmax(250px, 1fr))\',\n    gap: \'20px\',\n    maxWidth: \'800px\'\n  }}>\n      <Card title="Feature One" content="Description of the first feature and its benefits for users." />\n      <Card title="Feature Two" content="Description of the second feature and how it improves the user experience." />\n      <Card title="Feature Three" content="Description of the third feature and its impact on productivity." />\n    </div>\n}',...ResponsiveGrid.parameters?.docs?.source}}}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledText=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.p`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: ${props=>props.disabled?"#999999":props.color?props.color:"#333333"};
  background-color: ${props=>props.backgroundColor||"transparent"};
  font-size: ${props=>{switch(props.size){case"small":return"12px";case"large":return"18px";default:return"14px"}}};
  font-weight: ${props=>{switch(props.weight){case"light":return"300";case"bold":return"700";default:return"400"}}};
  line-height: 1.5;
  cursor: ${props=>props.disabled?"not-allowed":"default"};
  transition: color 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: ${props=>{switch(props.size){case"small":return"11px";case"large":return"16px";default:return"13px"}}};
  }
`,Text=({content,size="medium",weight="normal",color,disabled=!1,backgroundColor,className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledText,{size,weight,color,disabled,backgroundColor,className,content,...props,children:content});try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},weight:{defaultValue:{value:"normal"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"bold"'},{value:'"light"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Card-Card-stories.b45490f8.iframe.bundle.js.map