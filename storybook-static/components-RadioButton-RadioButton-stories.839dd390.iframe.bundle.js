"use strict";(self.webpackChunkvaldez_hanz_ui_garden=self.webpackChunkvaldez_hanz_ui_garden||[]).push([[391],{"./src/components/RadioButton/RadioButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,CustomBackground:()=>CustomBackground,Default:()=>Default,Disabled:()=>Disabled,DisabledChecked:()=>DisabledChecked,LongLabel:()=>LongLabel,RadioGroup:()=>RadioGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioButton_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioContainer=styled_components_browser_esm.Ay.label`
  display: flex;
  align-items: center;
  cursor: ${props=>props.disabled?"not-allowed":"pointer"};
  opacity: ${props=>props.disabled?.6:1};
  background-color: ${props=>props.backgroundColor||"transparent"};
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  &:hover:not(:disabled) {
    background-color: ${props=>props.backgroundColor||"#f8f9fa"};
  }

  @media (max-width: 768px) {
    padding: 6px;
  }
`,HiddenRadio=styled_components_browser_esm.Ay.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`,CustomRadio=styled_components_browser_esm.Ay.div`
  width: 20px;
  height: 20px;
  border: 2px solid
    ${props=>props.disabled?"#ced4da":props.checked?"#007bff":"#ced4da"};
  border-radius: 50%;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  background-color: #ffffff;
  transition: all 0.2s ease-in-out;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${props=>props.disabled&&props.checked?"#6c757d":props.checked?"#007bff":"transparent"};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 10px;

    &::after {
      width: 8px;
      height: 8px;
    }
  }
`,RadioLabel=styled_components_browser_esm.Ay.span`
  font-size: 14px;
  color: ${props=>props.disabled?"#6c757d":"#495057"};
  line-height: 1.4;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`,RadioButton=({name,value,label,checked=!1,disabled=!1,backgroundColor,className,onChange,...props})=>(0,jsx_runtime.jsxs)(RadioContainer,{disabled,backgroundColor,className,name,value,label,checked,...props,children:[(0,jsx_runtime.jsx)(HiddenRadio,{name,value,checked,disabled,onChange:event=>{onChange&&event.target.checked&&onChange(value)}}),(0,jsx_runtime.jsx)(CustomRadio,{checked,disabled}),(0,jsx_runtime.jsx)(RadioLabel,{disabled,children:label})]});try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}const RadioButton_stories={title:"Components/RadioButton",component:RadioButton,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},value:{control:"text"},label:{control:"text"}}},Default={args:{name:"default-radio",value:"option1",label:"Option 1"}},Checked={args:{name:"checked-radio",value:"option1",label:"Selected Option",checked:!0}},Disabled={args:{name:"disabled-radio",value:"option1",label:"Disabled Option",disabled:!0}},DisabledChecked={args:{name:"disabled-checked-radio",value:"option1",label:"Disabled Selected",disabled:!0,checked:!0}},CustomBackground={args:{name:"custom-radio",value:"option1",label:"Custom Background",backgroundColor:"#e3f2fd"}},RadioGroup={render:()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[(0,jsx_runtime.jsx)(RadioButton,{name:"size",value:"small",label:"Small",checked:!0}),(0,jsx_runtime.jsx)(RadioButton,{name:"size",value:"medium",label:"Medium"}),(0,jsx_runtime.jsx)(RadioButton,{name:"size",value:"large",label:"Large"})]})},LongLabel={args:{name:"long-label-radio",value:"option1",label:"This is a very long label that demonstrates how the radio button component handles longer text content"}},__namedExportsOrder=["Default","Checked","Disabled","DisabledChecked","CustomBackground","RadioGroup","LongLabel"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'default-radio',\n    value: 'option1',\n    label: 'Option 1'\n  }\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'checked-radio',\n    value: 'option1',\n    label: 'Selected Option',\n    checked: true\n  }\n}",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'disabled-radio',\n    value: 'option1',\n    label: 'Disabled Option',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},DisabledChecked.parameters={...DisabledChecked.parameters,docs:{...DisabledChecked.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'disabled-checked-radio',\n    value: 'option1',\n    label: 'Disabled Selected',\n    disabled: true,\n    checked: true\n  }\n}",...DisabledChecked.parameters?.docs?.source}}},CustomBackground.parameters={...CustomBackground.parameters,docs:{...CustomBackground.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'custom-radio',\n    value: 'option1',\n    label: 'Custom Background',\n    backgroundColor: '#e3f2fd'\n  }\n}",...CustomBackground.parameters?.docs?.source}}},RadioGroup.parameters={...RadioGroup.parameters,docs:{...RadioGroup.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: \'flex\',\n    flexDirection: \'column\',\n    gap: \'12px\'\n  }}>\n      <RadioButton name="size" value="small" label="Small" checked={true} />\n      <RadioButton name="size" value="medium" label="Medium" />\n      <RadioButton name="size" value="large" label="Large" />\n    </div>\n}',...RadioGroup.parameters?.docs?.source}}},LongLabel.parameters={...LongLabel.parameters,docs:{...LongLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'long-label-radio',\n    value: 'option1',\n    label: 'This is a very long label that demonstrates how the radio button component handles longer text content'\n  }\n}",...LongLabel.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-RadioButton-RadioButton-stories.839dd390.iframe.bundle.js.map