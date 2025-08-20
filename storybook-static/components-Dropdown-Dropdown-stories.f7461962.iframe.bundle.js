"use strict";(self.webpackChunkvaldez_hanz_ui_garden=self.webpackChunkvaldez_hanz_ui_garden||[]).push([[215],{"./src/components/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Countries:()=>Countries,CustomBackground:()=>CustomBackground,CustomPlaceholder:()=>CustomPlaceholder,Default:()=>Default,Disabled:()=>Disabled,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dropdown_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledSelect=styled_components_browser_esm.Ay.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: ${props=>props.disabled?"#f8f9fa":props.backgroundColor?props.backgroundColor:"#ffffff"};
  color: ${props=>props.disabled?"#6c757d":"#495057"};
  cursor: ${props=>props.disabled?"not-allowed":"pointer"};
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 40px;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &:hover:not(:disabled) {
    border-color: #adb5bd;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
    padding-right: 36px;
  }
`,StyledOption=styled_components_browser_esm.Ay.option`
  background-color: #ffffff;
  color: #495057;
  padding: 8px 12px;
`,Dropdown=({options,placeholder="Select an option",value,disabled=!1,backgroundColor,className,onChange,...props})=>(0,jsx_runtime.jsxs)(StyledSelect,{value:value||"",disabled,backgroundColor,className,onChange:event=>{onChange&&onChange(event.target.value)},children:[(0,jsx_runtime.jsx)(StyledOption,{value:"",disabled:!0,children:placeholder}),options.map(option=>(0,jsx_runtime.jsx)(StyledOption,{value:option.value,children:option.label},option.value))]});try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}},placeholder:{defaultValue:{value:"Select an option"},description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}const Dropdown_stories={title:"Components/Dropdown",component:Dropdown,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},value:{control:"text"},placeholder:{control:"text"}}},sampleOptions=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],countryOptions=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"}],Default={args:{options:sampleOptions,placeholder:"Select an option"}},WithValue={args:{options:sampleOptions,value:"option2",placeholder:"Select an option"}},Countries={args:{options:countryOptions,placeholder:"Select a country"}},Disabled={args:{options:sampleOptions,disabled:!0,placeholder:"Disabled dropdown"}},CustomBackground={args:{options:sampleOptions,backgroundColor:"#f0f8ff",placeholder:"Custom background"}},CustomPlaceholder={args:{options:countryOptions,placeholder:"Choose your location..."}},__namedExportsOrder=["Default","WithValue","Countries","Disabled","CustomBackground","CustomPlaceholder"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: sampleOptions,\n    placeholder: 'Select an option'\n  }\n}",...Default.parameters?.docs?.source}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: sampleOptions,\n    value: 'option2',\n    placeholder: 'Select an option'\n  }\n}",...WithValue.parameters?.docs?.source}}},Countries.parameters={...Countries.parameters,docs:{...Countries.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: countryOptions,\n    placeholder: 'Select a country'\n  }\n}",...Countries.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: sampleOptions,\n    disabled: true,\n    placeholder: 'Disabled dropdown'\n  }\n}",...Disabled.parameters?.docs?.source}}},CustomBackground.parameters={...CustomBackground.parameters,docs:{...CustomBackground.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: sampleOptions,\n    backgroundColor: '#f0f8ff',\n    placeholder: 'Custom background'\n  }\n}",...CustomBackground.parameters?.docs?.source}}},CustomPlaceholder.parameters={...CustomPlaceholder.parameters,docs:{...CustomPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: countryOptions,\n    placeholder: 'Choose your location...'\n  }\n}",...CustomPlaceholder.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Dropdown-Dropdown-stories.f7461962.iframe.bundle.js.map