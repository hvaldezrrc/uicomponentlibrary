"use strict";(self.webpackChunkvaldez_hanz_ui_garden=self.webpackChunkvaldez_hanz_ui_garden||[]).push([[727],{"./src/components/Table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Table});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledTable=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: ${props=>props.backgroundColor||"#ffffff"};
  border: 1px solid #dee2e6;
  border-radius: 4px;
  overflow: hidden;
  cursor: ${props=>props.disabled?"not-allowed":"default"};
  opacity: ${props=>props.disabled?.6:1};
  transition: opacity 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 14px;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`,Table=({children,disabled=!1,backgroundColor,className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledTable,{disabled,backgroundColor,className,...props,children});try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TableCell/TableCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>TableCell});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledTableCell=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.td`
  padding: 12px 16px;
  text-align: left;
  border-right: 1px solid #dee2e6;
  background-color: ${props=>props.backgroundColor||"transparent"};
  color: #495057;
  font-size: 14px;
  cursor: ${props=>props.disabled?"not-allowed":"default"};
  opacity: ${props=>props.disabled?.6:1};
  transition: opacity 0.2s ease-in-out;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
    display: block;
    border: none;
    border-bottom: 1px solid #dee2e6;

    &:before {
      content: attr(data-label) ': ';
      font-weight: bold;
      display: inline-block;
      width: 100px;
    }
  }
`,StyledTableHeaderCell=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.th`
  padding: 12px 16px;
  text-align: left;
  border-right: 1px solid #dee2e6;
  background-color: ${props=>props.backgroundColor||"#f8f9fa"};
  color: #495057;
  font-size: 14px;
  font-weight: 600;
  cursor: ${props=>props.disabled?"not-allowed":"default"};
  opacity: ${props=>props.disabled?.6:1};
  transition: opacity 0.2s ease-in-out;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`,TableCell=({children,header=!1,disabled=!1,backgroundColor,className,...props})=>{const CellComponent=header?StyledTableHeaderCell:StyledTableCell;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CellComponent,{disabled,backgroundColor,className,header,...props,children})};try{TableCell.displayName="TableCell",TableCell.__docgenInfo={description:"",displayName:"TableCell",props:{header:{defaultValue:{value:"false"},description:"",name:"header",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TableCell/TableCell.tsx#TableCell"]={docgenInfo:TableCell.__docgenInfo,name:"TableCell",path:"src/components/TableCell/TableCell.tsx#TableCell"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TableFooter/TableFooter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomBackground:()=>CustomBackground,Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TableFooter__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TableFooter/TableFooter.tsx"),_Table_Table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Table/Table.tsx"),_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TableRow/TableRow.tsx"),_TableCell_TableCell__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TableCell/TableCell.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/TableFooter",component:_TableFooter__WEBPACK_IMPORTED_MODULE_0__.G,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"}}},Default={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_2__.H,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TableCell_TableCell__WEBPACK_IMPORTED_MODULE_3__.n,{children:"Total"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TableCell_TableCell__WEBPACK_IMPORTED_MODULE_3__.n,{children:"$150.00"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TableCell_TableCell__WEBPACK_IMPORTED_MODULE_3__.n,{children:"10 items"})]})},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Table_Table__WEBPACK_IMPORTED_MODULE_1__.X,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Story,{})})]},Disabled={args:{disabled:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_2__.H,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TableCell_TableCell__WEBPACK_IMPORTED_MODULE_3__.n,{children:"Summary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TableCell_TableCell__WEBPACK_IMPORTED_MODULE_3__.n,{children:"Disabled"})]})},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Table_Table__WEBPACK_IMPORTED_MODULE_1__.X,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Story,{})})]},CustomBackground={args:{backgroundColor:"#e8f5e8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_TableRow_TableRow__WEBPACK_IMPORTED_MODULE_2__.H,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TableCell_TableCell__WEBPACK_IMPORTED_MODULE_3__.n,{children:"Grand Total"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TableCell_TableCell__WEBPACK_IMPORTED_MODULE_3__.n,{children:"$250.00"})]})},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Table_Table__WEBPACK_IMPORTED_MODULE_1__.X,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Story,{})})]},__namedExportsOrder=["Default","Disabled","CustomBackground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <TableRow>\n        <TableCell>Total</TableCell>\n        <TableCell>$150.00</TableCell>\n        <TableCell>10 items</TableCell>\n      </TableRow>\n  },\n  decorators: [Story => <Table>\n        <Story />\n      </Table>]\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    children: <TableRow>\n        <TableCell>Summary</TableCell>\n        <TableCell>Disabled</TableCell>\n      </TableRow>\n  },\n  decorators: [Story => <Table>\n        <Story />\n      </Table>]\n}",...Disabled.parameters?.docs?.source}}},CustomBackground.parameters={...CustomBackground.parameters,docs:{...CustomBackground.parameters?.docs,source:{originalSource:"{\n  args: {\n    backgroundColor: '#e8f5e8',\n    children: <TableRow>\n        <TableCell>Grand Total</TableCell>\n        <TableCell>$250.00</TableCell>\n      </TableRow>\n  },\n  decorators: [Story => <Table>\n        <Story />\n      </Table>]\n}",...CustomBackground.parameters?.docs?.source}}}},"./src/components/TableFooter/TableFooter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>TableFooter});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledTableFooter=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.tfoot`
  background-color: ${props=>props.backgroundColor||"#f8f9fa"};
  border-top: 2px solid #dee2e6;
  font-weight: 500;
  cursor: ${props=>props.disabled?"not-allowed":"default"};
  opacity: ${props=>props.disabled?.6:1};
  transition: opacity 0.2s ease-in-out;

  td {
    padding: 12px 16px;
    text-align: left;
    color: #495057;
    font-size: 14px;
    border-right: 1px solid #dee2e6;

    &:last-child {
      border-right: none;
    }

    @media (max-width: 768px) {
      padding: 8px 12px;
      font-size: 12px;
    }
  }
`,TableFooter=({children,disabled=!1,backgroundColor,className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledTableFooter,{disabled,backgroundColor,className,...props,children});try{TableFooter.displayName="TableFooter",TableFooter.__docgenInfo={description:"",displayName:"TableFooter",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TableFooter/TableFooter.tsx#TableFooter"]={docgenInfo:TableFooter.__docgenInfo,name:"TableFooter",path:"src/components/TableFooter/TableFooter.tsx#TableFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TableRow/TableRow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>TableRow});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledTableRow=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.tr`
  background-color: ${props=>props.backgroundColor||"transparent"};
  border-bottom: 1px solid #dee2e6;
  cursor: ${props=>props.disabled?"not-allowed":"default"};
  opacity: ${props=>props.disabled?.6:1};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    display: block;
    border: 1px solid #dee2e6;
    margin-bottom: 8px;
    border-radius: 4px;
  }
`,TableRow=({children,disabled=!1,backgroundColor,className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledTableRow,{disabled,backgroundColor,className,...props,children});try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TableRow/TableRow.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/components/TableRow/TableRow.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-TableFooter-TableFooter-stories.8a27b0cd.iframe.bundle.js.map