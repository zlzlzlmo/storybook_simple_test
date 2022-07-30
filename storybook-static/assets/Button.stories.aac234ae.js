import{j as o,r}from"./jsx-runtime.0481583b.js";import"./iframe.5fe4dc07.js";const s=()=>o("div",{style:{backgroundColor:"#99938F",borderRadius:"8px",padding:"12px 16px",color:"white",display:"inline-block",cursor:"pointer"},children:"\uC704\uCE58\uD655\uC778"}),c=s,i=()=>o("div",{style:{backgroundColor:"#67615D",borderRadius:"8px",padding:"12px 16px",color:"white",display:"inline-block",cursor:"pointer"},children:"\uAE38\uC548\uB0B4"}),a=i;class t extends r.exports.Component{renderButton(e){switch(e.btnType){case"location":return o(c,{});case"navigation":return o(a,{})}}render(){return this.renderButton(this.props)}}try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{btnType:{defaultValue:null,description:"",name:"btnType",required:!0,type:{name:"enum",value:[{value:'"location"'},{value:'"navigation"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/buttons/Button.tsx#Button"]={docgenInfo:t.__docgenInfo,name:"Button",path:"src/components/buttons/Button.tsx#Button"})}catch{}const p={parameters:{storySource:{source:`import Button from "../components/buttons/Button";

export default {
  title: "Button",
  component: Button,
};

export const Location = () => <Button btnType="location" />;
`,locationsMap:{location:{startLoc:{col:24,line:8},endLoc:{col:59,line:8},startBody:{col:24,line:8},endBody:{col:59,line:8}}}}},title:"Button",component:t},d=()=>o(t,{btnType:"location"}),B=["Location"];export{d as Location,B as __namedExportsOrder,p as default};
//# sourceMappingURL=Button.stories.aac234ae.js.map
