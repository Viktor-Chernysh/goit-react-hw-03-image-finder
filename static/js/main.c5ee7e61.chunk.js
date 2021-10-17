(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={Button:"Button_Button__n6DDq",ButtonWrapper:"Button_ButtonWrapper__ozwvt"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3Y7hl",Modal:"Modal_Modal__3aKdx"}},31:function(e,t,a){},32:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(12),c=a.n(o),s=(a(31),a(4)),l=a(5),i=a(7),u=a(6),h=(a(32),a(8)),m=a.n(h),d=a(0),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchQuery.toLowerCase().trim()),e.setState({searchQuery:""})},e.handleQueryChange=function(t){e.setState({searchQuery:t.target.value})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:m.a.Searchbar,children:Object(d.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(d.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{onChange:this.handleQueryChange,className:m.a.SearchFormInput,value:this.state.searchQuery,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),p=a(17),b=a(26),j=a.n(b),f=a(9),y=a.n(f);function O(e){var t=e.searchResults,a=e.onClick;return t.map((function(e){return Object(d.jsx)("li",{className:y.a.ImageGalleryItem,children:Object(d.jsx)("img",{onClick:function(){a(e)},src:e.webformatURL,alt:e.tags,className:y.a.ImageGalleryItemImage})},e.id)}))}var _=a(14),v=a.n(_);function S(e){var t=e.onClick;return Object(d.jsx)("div",{className:v.a.ButtonWrapper,onClick:t,children:Object(d.jsx)("button",{type:"button",className:v.a.Button,children:"Load more"})})}var I=a(15),w=a.n(I),x=new(function(){function e(t,a){Object(s.a)(this,e),this.BASE_URL=t,this.API_KEY=a,this._page=1}return Object(l.a)(e,[{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"searchPhotos",value:function(e,t){w.a.defaults.baseURL=this.BASE_URL;var a="?key=".concat(this.API_KEY,"&q=").concat(e,"&per_page=").concat(t,"&page=").concat(this._page);return w.a.get(a).then((function(e){return e.data.hits})).catch((function(e){return console.log(e.message)}))}}]),e}())("https://pixabay.com/api/","23234796-47fbd745329069e6b0b2bf0fd"),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchResults:[],showModal:!1,isLoading:!1,currentImage:{url:"",alt:""}},e.handleLoadMore=function(){e.setState({isLoading:!0}),x.page=1,x.searchPhotos(e.props.searchQuery,12).then((function(t){return e.setState((function(e){return{searchResults:[].concat(Object(p.a)(e.searchResults),Object(p.a)(t)),isLoading:!1}}))})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.searchQuery!==this.props.searchQuery&&(this.setState({isLoading:!0}),x.searchPhotos(this.props.searchQuery,12).then((function(e){a.setState({searchResults:e,isLoading:!1})})))}},{key:"render",value:function(){var e=this.state.searchResults;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:y.a.ImageGallery,children:Object(d.jsx)(O,{searchResults:this.state.searchResults,onClick:this.props.clickOnImage})}),this.state.isLoading&&Object(d.jsx)(j.a,{type:"Bars",color:"#00BFFF",height:100,width:100,timeout:3e3}),e.length>0&&Object(d.jsx)(S,{onClick:this.handleLoadMore})]})}}]),a}(r.Component),M=a(16),L=a.n(M),B=document.querySelector("#modal-root"),F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.toggleModal()},e.onOverlayClick=function(t){t.currentTarget===t.target&&e.props.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(d.jsx)("div",{className:L.a.Overlay,onClick:this.onOverlayClick,children:Object(d.jsx)("div",{className:L.a.Modal,children:Object(d.jsx)("img",{src:this.props.currentImage.url,alt:this.props.currentImage.alt})})}),B)}}]),a}(r.Component),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",showModal:!1,currentImage:{url:"",alt:""}},e.handleSubmit=function(t){e.setState({searchQuery:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleGalleryItem=function(t){e.setState({currentImage:{url:t.largeImageURL,alt:t.tags}}),e.toggleModal()},e.scrollOnLoadButton=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[this.state.showModal&&Object(d.jsx)(F,{currentImage:this.state.currentImage,toggleModal:this.toggleModal}),Object(d.jsx)(g,{onSubmit:this.handleSubmit}),Object(d.jsx)(k,{searchQuery:this.state.searchQuery,clickOnImage:this.handleGalleryItem,scroll:this.scrollOnLoadButton})]})}}]),a}(r.Component);c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__h1Vbd",SearchForm:"Searchbar_SearchForm__2xtPT",SearchFormButton:"Searchbar_SearchFormButton__23ydN",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2IXNL",SearchFormInput:"Searchbar_SearchFormInput__3MsJA","SearchForm-input":"Searchbar_SearchForm-input__cSGW8"}},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2JfvH",ImageGalleryItem:"ImageGallery_ImageGalleryItem__2Ufu4",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__1Xb2B"}}},[[72,1,2]]]);
//# sourceMappingURL=main.c5ee7e61.chunk.js.map