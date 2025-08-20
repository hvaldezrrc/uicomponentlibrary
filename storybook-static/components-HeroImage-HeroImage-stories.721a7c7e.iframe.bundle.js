"use strict";(self.webpackChunkvaldez_hanz_ui_garden=self.webpackChunkvaldez_hanz_ui_garden||[]).push([[407],{"./src/components/HeroImage/HeroImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomBackground:()=>CustomBackground,CustomHeight:()=>CustomHeight,Default:()=>Default,Disabled:()=>Disabled,LongContent:()=>LongContent,ResponsiveDemo:()=>ResponsiveDemo,SmallHeight:()=>SmallHeight,SubtitleOnly:()=>SubtitleOnly,TitleOnly:()=>TitleOnly,WithoutText:()=>WithoutText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HeroImage_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeroContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  height: ${props=>props.height||"400px"};
  background-image: url(${props=>props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  opacity: ${props=>props.disabled?.6:1};
  cursor: ${props=>props.disabled?"not-allowed":"default"};
  background-color: ${props=>props.backgroundColor||"#f8f9fa"};
  transition: all 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: ${props=>{const height=props.height||"400px";if("string"==typeof height&&height.includes("px")){const numHeight=parseInt(height);return`${Math.max(250,.75*numHeight)}px`}return"250px"}};
  }

  @media (max-width: 480px) {
    height: ${props=>{const height=props.height||"400px";if("string"==typeof height&&height.includes("px")){const numHeight=parseInt(height);return`${Math.max(200,.6*numHeight)}px`}return"200px"}};
  }
`,ContentOverlay=styled_components_browser_esm.Ay.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 20px;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 16px;
    max-width: 90%;
  }
`,HeroTitle=styled_components_browser_esm.Ay.h1`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 8px;
  }
`,HeroSubtitle=styled_components_browser_esm.Ay.p`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,HeroImage=({src,alt,title,subtitle,height="400px",disabled=!1,backgroundColor,className,...props})=>(0,jsx_runtime.jsx)(HeroContainer,{src,height,disabled,backgroundColor,className,role:"img","aria-label":alt,alt,title,subtitle,...props,children:(title||subtitle)&&(0,jsx_runtime.jsxs)(ContentOverlay,{children:[title&&(0,jsx_runtime.jsx)(HeroTitle,{children:title}),subtitle&&(0,jsx_runtime.jsx)(HeroSubtitle,{children:subtitle})]})});try{HeroImage.displayName="HeroImage",HeroImage.__docgenInfo={description:"",displayName:"HeroImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string | undefined"}},height:{defaultValue:{value:"400px"},description:"",name:"height",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HeroImage/HeroImage.tsx#HeroImage"]={docgenInfo:HeroImage.__docgenInfo,name:"HeroImage",path:"src/components/HeroImage/HeroImage.tsx#HeroImage"})}catch(__react_docgen_typescript_loader_error){}const HeroImage_stories={title:"Components/HeroImage",component:HeroImage,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},height:{control:"text"},src:{control:"text"},alt:{control:"text"},title:{control:"text"},subtitle:{control:"text"}}},landscapeUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",mountainUrl="https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",cityUrl="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",Default={args:{src:landscapeUrl,alt:"Beautiful landscape",title:"Welcome to Our Platform",subtitle:"Discover amazing features and capabilities"}},WithoutText={args:{src:mountainUrl,alt:"Mountain landscape"}},TitleOnly={args:{src:cityUrl,alt:"City skyline",title:"Explore the City"}},SubtitleOnly={args:{src:landscapeUrl,alt:"Serene landscape",subtitle:"Experience tranquility in nature"}},CustomHeight={args:{src:mountainUrl,alt:"Tall mountain view",title:"Reach New Heights",subtitle:"Push beyond your limits",height:"600px"}},SmallHeight={args:{src:cityUrl,alt:"City overview",title:"Urban Adventure",subtitle:"Compact city experience",height:"250px"}},Disabled={args:{src:landscapeUrl,alt:"Disabled hero image",title:"Disabled Hero",subtitle:"This hero section is disabled",disabled:!0}},CustomBackground={args:{src:"",alt:"Custom background hero",title:"Custom Background",subtitle:"This uses a custom background color",backgroundColor:"#667eea"}},LongContent={args:{src:mountainUrl,alt:"Mountain panorama",title:"This is a Very Long Title That Demonstrates Text Wrapping",subtitle:"This is also a longer subtitle that shows how the hero component handles multiple lines of text content and maintains good readability across different screen sizes"}},ResponsiveDemo={args:{src:landscapeUrl,alt:"Responsive hero image",title:"Responsive Design",subtitle:"Resize your browser to see how this adapts"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"100%",maxWidth:"1200px",margin:"0 auto"},children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["Default","WithoutText","TitleOnly","SubtitleOnly","CustomHeight","SmallHeight","Disabled","CustomBackground","LongContent","ResponsiveDemo"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: landscapeUrl,\n    alt: 'Beautiful landscape',\n    title: 'Welcome to Our Platform',\n    subtitle: 'Discover amazing features and capabilities'\n  }\n}",...Default.parameters?.docs?.source}}},WithoutText.parameters={...WithoutText.parameters,docs:{...WithoutText.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: mountainUrl,\n    alt: 'Mountain landscape'\n  }\n}",...WithoutText.parameters?.docs?.source}}},TitleOnly.parameters={...TitleOnly.parameters,docs:{...TitleOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: cityUrl,\n    alt: 'City skyline',\n    title: 'Explore the City'\n  }\n}",...TitleOnly.parameters?.docs?.source}}},SubtitleOnly.parameters={...SubtitleOnly.parameters,docs:{...SubtitleOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: landscapeUrl,\n    alt: 'Serene landscape',\n    subtitle: 'Experience tranquility in nature'\n  }\n}",...SubtitleOnly.parameters?.docs?.source}}},CustomHeight.parameters={...CustomHeight.parameters,docs:{...CustomHeight.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: mountainUrl,\n    alt: 'Tall mountain view',\n    title: 'Reach New Heights',\n    subtitle: 'Push beyond your limits',\n    height: '600px'\n  }\n}",...CustomHeight.parameters?.docs?.source}}},SmallHeight.parameters={...SmallHeight.parameters,docs:{...SmallHeight.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: cityUrl,\n    alt: 'City overview',\n    title: 'Urban Adventure',\n    subtitle: 'Compact city experience',\n    height: '250px'\n  }\n}",...SmallHeight.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: landscapeUrl,\n    alt: 'Disabled hero image',\n    title: 'Disabled Hero',\n    subtitle: 'This hero section is disabled',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},CustomBackground.parameters={...CustomBackground.parameters,docs:{...CustomBackground.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: '',\n    // No image to show background color\n    alt: 'Custom background hero',\n    title: 'Custom Background',\n    subtitle: 'This uses a custom background color',\n    backgroundColor: '#667eea'\n  }\n}",...CustomBackground.parameters?.docs?.source}}},LongContent.parameters={...LongContent.parameters,docs:{...LongContent.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: mountainUrl,\n    alt: 'Mountain panorama',\n    title: 'This is a Very Long Title That Demonstrates Text Wrapping',\n    subtitle: 'This is also a longer subtitle that shows how the hero component handles multiple lines of text content and maintains good readability across different screen sizes'\n  }\n}",...LongContent.parameters?.docs?.source}}},ResponsiveDemo.parameters={...ResponsiveDemo.parameters,docs:{...ResponsiveDemo.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: landscapeUrl,\n    alt: 'Responsive hero image',\n    title: 'Responsive Design',\n    subtitle: 'Resize your browser to see how this adapts'\n  },\n  decorators: [Story => <div style={{\n    width: '100%',\n    maxWidth: '1200px',\n    margin: '0 auto'\n  }}>\n        <Story />\n      </div>]\n}",...ResponsiveDemo.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-HeroImage-HeroImage-stories.721a7c7e.iframe.bundle.js.map