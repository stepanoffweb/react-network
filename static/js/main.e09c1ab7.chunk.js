(this["webpackJsonpreact-kamasutra-1"]=this["webpackJsonpreact-kamasutra-1"]||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/logo.3705b72a.png"},132:function(e,t,a){e.exports={post:"Post_post__2epSW"}},133:function(e,t,a){e.exports=a.p+"static/media/fireball_1200x226.8048d8c1.jpg"},134:function(e,t,a){},135:function(e,t,a){e.exports={appWrapper:"App_appWrapper__2o9lB","app-wrapper-content":"App_app-wrapper-content__29-Kl"}},14:function(e,t,a){e.exports={userWrapper:"Users_userWrapper__gekLR",userInfo:"Users_userInfo__3k0-l",userAction:"Users_userAction__1Wy46",name:"Users_name__1qRDH",location:"Users_location__3K8ON",status:"Users_status__6aOHa",img:"Users_img__1WX-G",btn:"Users_btn__Ha2jj"}},162:function(e,t,a){e.exports=a(289)},26:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2aMUS",dialogItems:"Dialogs_dialogItems__3oW-L",active:"Dialogs_active__7jQ9_",dialogItem:"Dialogs_dialogItem__2LEdu",messages:"Dialogs_messages__2ooMr",message:"Dialogs_message__teRNO"}},286:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(65),s=a.n(o),c=a(10),i=a(11),l=a(22),u=a(23),m=a(25),p=a(24),d=a(33),f=a(6),g=a(34),h=a.n(g);function E(){return r.a.createElement("nav",{className:h.a.nav},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{activeClassName:h.a.activeLink,to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement(i.b,{activeClassName:h.a.activeLink,to:"/dialogs"},"Messages")),r.a.createElement("li",null,r.a.createElement(i.b,{activeClassName:h.a.activeLink,to:"/users"},"Users")),r.a.createElement("li",null,r.a.createElement(i.b,{activeClassName:h.a.activeLink,to:"/news"},"News")),r.a.createElement("li",null,r.a.createElement(i.b,{activeClassName:h.a.activeLink,to:"/music"},"Music")),r.a.createElement("li",null,r.a.createElement(i.b,{activeClassName:h.a.activeLink,to:"/settings"},"Settings"))))}var v=a(129),b=a.n(v),_=a(89),w=a.n(_);function O(e){return r.a.createElement("header",{className:w.a.header},r.a.createElement("img",{src:b.a,alt:"logo"}),r.a.createElement("div",{className:w.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.setLogout},"LogOut")," "):r.a.createElement(i.b,{to:"/login"},"Login")))}var j=a(9),y=a(8),P=a.n(y),S=a(13),k=a(130).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"85b1845a-610b-40eb-b2eb-a23834f06e57"}}),N={getUsers:function(){var e=arguments;return Object(S.a)(P.a.mark((function t(){var a,n,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:2,n=e.length>1&&void 0!==e[1]?e[1]:20,t.next=4,k.get("users?page=".concat(a,"&count=").concat(n));case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})))()},postFollow:function(e){return k.post("follow/".concat(e))},deleteFollow:function(e){return k.delete("follow/".concat(e))},getUserProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),C.getUserProfile(e)}},C={getUserProfile:function(e){return k.get("profile/".concat(e))},getStatus:function(e){return k.get("profile/status/".concat(e))},updateStatus:function(e){return k.put("profile/status",{status:e})},pushPhoto:function(e){var t=new FormData;return t.append("image",e),k.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},A=function(){return k.get("auth/me")},I=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return k.post("auth/login",{email:e,password:t,rememberMe:a})},U=function(){return k.delete("auth/login")},x=a(30),D=function(e,t,a,n){return{type:"SET_USER_AUTH_DATA",payload:{id:e,email:t,login:a,isAuth:n}}},L=function(){return function(){var e=Object(S.a)(P.a.mark((function e(t){var a,n,r,o,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.email,s=n.login,t(D(r,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F={id:7243,login:"ivanstepanov",email:"dovolnyi@inbox.ru",isAuth:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_AUTH_DATA":return Object(j.a)({},e,{},t.payload);default:return e}},R=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(O,this.props)}}]),a}(r.a.Component),M=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,id:e.auth.id,login:e.auth.login,email:e.auth.email}}),{setLogout:function(){return function(){var e=Object(S.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:0===e.sent.data.resultCode&&t(D(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(R),W=a(26),G=a.n(W),z=a(38),H={dialogItems:[{name:"userName-1",id:0},{name:"userName-2",id:2},{name:"userName-3",id:3},{name:"userName-4",id:4},{name:"userName-5",id:5},{name:"userName-6",id:6}],messages:[{text:"What's up?",id:0},{text:"Yo!!!",id:1},{text:"How is Your webDev?",id:2},{text:"Who are you??",id:3}]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return Object(j.a)({},e,{messages:[].concat(Object(z.a)(e.messages),[{id:t.id,text:t.text}])});default:return e}},J=function(e){return{isAuth:e.auth.isAuth}},K=function(e){var t=function(t){Object(m.a)(n,t);var a=Object(p.a)(n);function n(){return Object(l.a)(this,n),a.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(d.a,{to:"/login"})}}]),n}(r.a.Component);return Object(c.b)(J)(t)},Y=a(124),q=a(125),X=function(e){var t=e.name,a=e.id;return r.a.createElement("div",{className:G.a.dialogItem+" "+G.a.active},r.a.createElement(i.b,{to:"/dialogs/".concat(a)},t))},Z=function(e){var t=e.message,a=e.id;return r.a.createElement("div",{id:a,className:G.a.message},t)},Q=a(69),$=a(53),V=a.n($),ee=function(e){var t=e.input,a=e.Element,n=e.meta,o=Object(Q.a)(e,["input","Element","meta"]),s=n.touched&&n.error;return r.a.createElement("div",{className:V.a.formControl+" "+(s?V.a.error:"")},r.a.createElement("div",null,r.a.createElement(a,Object.assign({},t,o))," "),s&&r.a.createElement("span",null,n.error))},te=function(e){return r.a.createElement(ee,Object.assign({},e,{Element:"textarea"}))},ae=function(e){return r.a.createElement(ee,Object.assign({},e,{Element:"input"}))},ne=function(e,t,a,n,o,s,c,i){return r.a.createElement("div",null,r.a.createElement(Y.a,{component:e,type:t,placeholder:a,name:n,validate:o,id:i}),s&&r.a.createElement("label",{htmlFor:c,id:i},"Remember me"))},re=function(e){if(!e)return"Field is required"},oe=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},se=oe(10),ce=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(Y.a,{component:te,name:"dialogMessage",placeholder:"write letters",cols:"30",rows:"3",validate:[re,se]}),r.a.createElement("div",null,r.a.createElement("button",null,"Send message")))};ce=Object(q.a)({form:"dialogform"})(ce);var ie=function(e){var t=e.dialogItems,a=e.messages,n=e.callDispatchAddMessage;e.isAuth;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:G.a.dialogs},r.a.createElement("div",{className:G.a.dialogItems},t.map((function(e){var t=e.name,a=e.id;return r.a.createElement(X,{name:t,key:a,id:a})}))),r.a.createElement("div",{className:G.a.messages},r.a.createElement(ce,{onSubmit:function(e){var t=Date.now();console.log(e.dialogMessage),n(t,e.dialogMessage)}}),a.map((function(e){var t=e.text,a=e.id;return r.a.createElement(Z,{key:a,id:a,message:t})})))))},le=Object(f.d)(Object(c.b)((function(e){return{dialogItems:e.messagePage.dialogItems,messages:e.messagePage.messages}}),(function(e){return{callDispatchAddMessage:function(t,a){e(function(e,t){return{type:"ADD_MESSAGE",id:e,text:t}}(t,a))}}})),K)(ie),ue=a(92),me=a.n(ue),pe=a(132),de=a.n(pe);function fe(e){var t=e.id,a=e.message,n=e.onClick,o=e.count,s=e.pic;return r.a.createElement("div",{className:de.a.post,"data-id":t,"data-count":o},r.a.createElement("img",{src:s,alt:"avatar"}),r.a.createElement("h5",null,"Another Post"),r.a.createElement("p",null,a),r.a.createElement("button",{onClick:n},"Like ",o))}var ge=oe(10),he=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(Y.a,{component:te,placeholder:"Write your message",name:"text",id:"post",cols:"30",rows:"5",validate:[re,ge]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))};he=Object(q.a)({form:"postform"})(he);var Ee=function(e){return{type:"SET_STATUS",status:e}},ve={posts:[{id:0,message:"Hi, it's my first post!",likeCount:0,pic:"https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550"},{id:1,message:"You'r welcome, my friend!!!!",likeCount:0,pic:"https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550"},{id:2,message:"Ammmmm...",likeCount:0,pic:"https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550"}],profile:null,status:"Server is not available"},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(j.a)({},e,{posts:[].concat(Object(z.a)(e.posts),[{id:t.id,message:t.postText}])});case"DELETE_POST":return Object(j.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.id}))});case"SET_PROFILE":return Object(j.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(j.a)({},e,{status:t.status||e.status});case"ADD_LIKE":return Object(j.a)({},e,{posts:Object(z.a)(e.posts)});case"SET_PFOTO_SUCCESS":return Object(j.a)({},e,{profile:Object(j.a)({},e.profile,{photos:t.photos})});default:return e}},_e=Object(c.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{callDispatchAddPost:function(t,a){return e(function(e,t){return{type:"ADD_POST",id:e,postText:t}}(t,a))},callDispatchAddLike:function(t,a){return e(function(e,t){return{type:"ADD_LIKE",id:e,likeCount:t}}(t,a))}}}))((function(e){var t=e.posts,a=e.callDispatchAddPost,n=(e.callDispatchShowLetters,e.callDispatchAddLike),o=(e.isAuth,function(e){var t=+e.target.parentNode.dataset.count,a=e.target.parentNode.dataset.id;t++,n(a,t)}),s=t.map((function(e){var t=e.id,a=e.message,n=e.likeCount,s=e.pic;return r.a.createElement(fe,{key:t,id:t,message:a,onClick:o,count:n,pic:s})}));return r.a.createElement("div",{className:me.a.myPosts},r.a.createElement("h3",null,"My Posts"),r.a.createElement(he,{onSubmit:function(e){var t=Date.now();a(t,e.text)}}),r.a.createElement("div",{className:me.a.posts},s))})),we=a(39),Oe=a.n(we),je=a(133),ye=a.n(je),Pe=a(93),Se=a.n(Pe);function ke(){return r.a.createElement("div",{className:Se.a.preloader},r.a.createElement("h1",null,"Loaded!!!"),r.a.createElement("div",{className:Se.a.ldsRing},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("h1",null,"Loaded!!!"))}var Ne=a(56),Ce=function(e){var t=Object(n.useState)(!1),a=Object(Ne.a)(t,2),o=a[0],s=a[1],c=Object(n.useState)(e.status),i=Object(Ne.a)(c,2),l=i[0],u=i[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("div",{className:Oe.a.statusText},r.a.createElement("p",{onDoubleClick:function(){return s(!0)}},"Status: ",e.status," \ud83d\ude09")),o&&r.a.createElement("div",{className:Oe.a.statusInput},r.a.createElement("input",{autoFocus:!0,onChange:function(e){return u(e.target.value)},onBlur:function(){s(!1),e.updateStatus(l)}})))};function Ae(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.pushPhoto,s=e.isOwner;return t?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:ye.a,alt:"hero",className:Oe.a.hero})),r.a.createElement("div",{className:Oe.a.contentHead},r.a.createElement("img",{src:t.photos.large?t.photos.large:"https://sun9-6.userapi.com/QqHBpjLe2yLFnKJ58RKzAm5Ha0JrcRpCI70M5A/HL3ROS3t4h0.jpg?ava=1",alt:"avatar"}),s&&r.a.createElement("input",{type:"file",onChange:function(e){o(e.target.files[0])}}),r.a.createElement("h5",{className:Oe.a.descr},"About Me"),r.a.createElement("p",null,"My Name: ",t.fullName," "),r.a.createElement(Ce,{status:a,updateStatus:n}),r.a.createElement("p",null,"Looking For A Job: ",t.lookingForAJob?"AbsoFuckingLootely!!!!":"Nope...I already have a GOOD one."," ",r.a.createElement("br",null)," ",t.lookingForAJobDescription," "))):r.a.createElement(ke,null)}var Ie=a(134),Ue=a.n(Ie);function xe(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Ue.a.content},r.a.createElement(Ae,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,pushPhoto:e.pushPhoto,isOwner:e.isOwner}),r.a.createElement(_e,null)))}var De=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId||this.props.myId;e||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(xe,Object.assign({},this.props,{profile:this.props.profile,isOwner:!this.props.match.params.userId}))}}]),a}(r.a.Component),Le=Object(f.d)(Object(c.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,myId:e.auth.id}}),{getUserProfile:function(e){return function(){var t=Object(S.a)(P.a.mark((function t(a){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getUserProfile(e);case 2:n=t.sent,a({type:"SET_PROFILE",profile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(S.a)(P.a.mark((function t(a){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.getStatus(e);case 2:n=t.sent,a(Ee(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(S.a)(P.a.mark((function t(a){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(Ee(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},pushPhoto:function(e){return function(){var t=Object(S.a)(P.a.mark((function t(a){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.pushPhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"SET_PFOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),d.f,K)(De),Fe=oe(18),Te=function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("form",{onSubmit:t},ne(ae,"text","Login","login",[re,Fe],!1,null,null),ne(ae,"text","Password","password",[re,Fe],!1,null,null),ne("input","checkbox",null,"rememberme",[],!0,"loginMemo","loginMemo"),a&&r.a.createElement("div",{className:V.a.formError},a),r.a.createElement("button",null,"Login"))};function Re(e){var t=e.isAuth,a=e.getAuthData;return t?r.a.createElement(d.a,{to:"/profile"}):r.a.createElement(Te,{onSubmit:function(e){for(var t in a(e.login,e.password,e.loginMemo),e)e[t]=""}})}Te=Object(q.a)({form:"loginForm"})(Te);var Me=Object(c.b)((function(e){return{isAuth:e.auth.isAuth}}),{setLogin:function(e,t,a){return function(){var n=Object(S.a)(P.a.mark((function n(r){var o,s;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I(e,t,a);case 2:0===(o=n.sent).data.resultCode?r(L()):(s=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(x.a)("loginForm",{_error:s})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return r.a.createElement(Re,Object.assign({},e,{getAuthData:function(t,a,n){e.setLogin(t,a,n)}}))}));a(286);function We(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Settings"))}var Ge=a(14),ze=a.n(Ge),He=function(e){var t=e.userId,a=e.name,n=e.status,o=e.country,s=e.city,c=e.followed,l=e.pic,u=e.handleFollow,m=e.handleUnfollow,p=e.followingInProgress;return r.a.createElement("div",{className:ze.a.userWrapper,"data-id":t},r.a.createElement("div",{className:ze.a.userAction},r.a.createElement(i.b,{to:"/profile/".concat(t)},r.a.createElement("img",{className:ze.a.img,src:l||"https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg",alt:"avatar"})),c?r.a.createElement("button",{disabled:p.some((function(e){return e===t})),className:ze.a.btn,onClick:function(){return m(t)}},"Unfollow"):r.a.createElement("button",{disabled:p.some((function(e){return e===t})),className:ze.a.btn,onClick:function(){return u(t)}},"Follow")),r.a.createElement("div",{className:ze.a.userInfo},r.a.createElement("div",{className:ze.a.name},r.a.createElement("span",{className:ze.a.username},a),r.a.createElement("span",{className:ze.a.status},n)),r.a.createElement("div",{className:ze.a.location},r.a.createElement("span",{className:ze.a.country},o,","),r.a.createElement("span",{className:ze.a.city},s))))},Be=a(45),Je=a.n(Be),Ke=function(e){for(var t=Object.assign({},e),a=Object(n.useState)(1),o=Object(Ne.a)(a,2),s=o[0],c=o[1],i=Math.ceil(t.totalUsersCount/t.pageSize),l=[],u=1;u<=i;)l.push(u),u++;var m=Math.ceil(i/10),p=10*(s-1)+1,d=10*s;return r.a.createElement("div",{className:Je.a.paginator},s>1&&r.a.createElement("button",{className:Je.a.show,onClick:function(){return c(s-1)}},"Show Prev"),l.filter((function(e){return e>=p&&e<=d})).map((function(e){return r.a.createElement("span",{key:e,className:"".concat(Je.a.pagination," ").concat(t.currentPage===e?Je.a.selected:""),onClick:function(){return t.handleClickPage(e)}},e)})),m>s&&r.a.createElement("button",{className:Je.a.show,onClick:function(){return c(s+1)}},"Show Next"))},Ye=function(e){var t=e.followingInProgress,a=e.handleFollow,n=e.handleUnfollow,o=e.totalUsersCount,s=e.pageSize,c=e.handleClickPage,i=e.currentPage,l=e.users;Object(Q.a)(e,["followingInProgress","handleFollow","handleUnfollow","totalUsersCount","pageSize","handleClickPage","currentPage","users"]);return r.a.createElement("div",{className:ze.a.usersWrapper},r.a.createElement(Ke,{totalUsersCount:o,pageSize:s,handleClickPage:c,currentPage:i}),l.map((function(e){var o=e.id,s=e.name,c=e.status,i=e.country,l=e.city,u=e.followed,m=e.photos.small;return r.a.createElement(He,{key:"".concat(o,"-").concat(c),userId:o,name:s,status:c,country:i,city:l,followed:u,pic:m,followingInProgress:t,handleFollow:function(){return a(o)},handleUnfollow:function(){return n(o)}})})))},qe=function(e,t,a,n){return e.map((function(e){return e[a]===t?Object(j.a)({},e,{},n):e}))},Xe=function(e){return{type:"FOLLOW",userId:e}},Ze=function(e){return{type:"UNFOLLOW",userId:e}},Qe=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},$e=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Ve=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},et=function(){var e=Object(S.a)(P.a.mark((function e(t,a,n,r){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(Ve(!0,t)),e.next=3,n(t);case 3:0===e.sent.data.resultCode&&a(r(t)),a(Ve(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),tt={users:[],pageSize:20,totalUsersCount:0,currentPage:2,isFetching:!1,followingInProgress:[]},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)({},e,{users:qe(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(j.a)({},e,{users:qe(e.users,t.userId,"id",{followed:!1})});case"ADD_USERS":return Object(j.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(j.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_COUNT":return Object(j.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(j.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(j.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(z.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},nt=function(e){return e.usersPage.users},rt=function(e){return e.usersPage.pageSize},ot=function(e){return e.usersPage.totalUsersCount},st=function(e){return e.usersPage.currentPage},ct=function(e){return e.usersPage.isFetching},it=function(e){return e.usersPage.followingInProgress},lt=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClickPage=function(t){e.props.getUsersData(t,e.props.pageSize)},e.handleFollow=function(t){e.props.Follow(t)},e.handleUnfollow=function(t){e.props.Unfollow(t)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsersData(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ke,null):null,r.a.createElement(Ye,Object.assign({},this.props,{handleUnfollow:this.handleUnfollow,handleFollow:this.handleFollow,handleClickPage:this.handleClickPage})))}}]),a}(r.a.Component),ut=Object(f.d)(Object(c.b)((function(e){return{users:nt(e),pageSize:rt(e),totalUsersCount:ot(e),currentPage:st(e),isFetching:ct(e),followingInProgress:it(e)}}),{Follow:function(e){return function(){var t=Object(S.a)(P.a.mark((function t(a){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:et(e,a,N.postFollow.bind(N),Xe);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Unfollow:function(e){return function(){var t=Object(S.a)(P.a.mark((function t(a){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:et(e,a,N.deleteFollow.bind(N),Ze);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsersData:function(e,t){return function(){var a=Object(S.a)(P.a.mark((function a(n){var r;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n($e(!0)),n(Qe(e)),a.next=4,N.getUsers(e,t);case 4:r=a.sent,n({type:"ADD_USERS",users:r.items}),n({type:"SET_TOTAL_COUNT",totalUsersCount:r.totalCount}),n($e(!1));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}))(lt);a(287);function mt(){return r.a.createElement("div",null,r.a.createElement("h1",null,"News"))}a(288);function pt(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Music"))}var dt=a(135),ft=a.n(dt),gt={initialized:!1},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(j.a)({},e,{initialized:!0});default:return e}},Et=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.initialiseApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:ft.a.appWrapper},r.a.createElement(M,null),r.a.createElement(E,null),r.a.createElement("div",{className:"appWrapperContent"},r.a.createElement(d.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(d.b,{path:"/dialogs",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(d.b,{path:"/users",render:function(){return r.a.createElement(ut,null)}}),r.a.createElement(d.b,{path:"/login",render:function(){return r.a.createElement(Me,null)}}),r.a.createElement(d.b,{path:"/music",component:pt}),r.a.createElement(d.b,{path:"/news",component:mt}),r.a.createElement(d.b,{path:"/settings",component:We}))):r.a.createElement(ke,null)}}]),a}(r.a.Component),vt=Object(f.d)(d.f,Object(c.b)((function(e){return{initialized:e.app.initialized}}),{initialiseApp:function(){return function(e){e(L()).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(Et),bt=a(136),_t=a(126),wt=Object(f.c)({profilePage:be,messagePage:B,usersPage:at,auth:T,app:ht,form:_t.a}),Ot=Object(f.e)(wt,Object(f.a)(bt.a));window.store=Ot;var jt=Ot;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,null,r.a.createElement(c.a,{store:jt},r.a.createElement(vt,null))),document.getElementById("root"))},34:function(e,t,a){e.exports={nav:"navbar_nav__3ZsFr",activeLink:"navbar_activeLink__1-c8E"}},39:function(e,t,a){e.exports={hero:"ProfileInfo_hero__F2T2b",contentHead:"ProfileInfo_contentHead__2fj0c",descr:"ProfileInfo_descr__sHZ11"}},45:function(e,t,a){e.exports={pagination:"Paginator_pagination__3597y",selected:"Paginator_selected__2Iu-U",show:"Paginator_show__1zoa6",paginator:"Paginator_paginator__25lpd"}},53:function(e,t,a){e.exports={formControl:"formControl_formControl__E7yqZ",error:"formControl_error__2Yef3",formError:"formControl_formError__xnzuW"}},89:function(e,t,a){e.exports={header:"header_header__2BoI4",loginBlock:"header_loginBlock__9mQ_u"}},92:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__Yjx6y"}},93:function(e,t,a){e.exports={preloader:"Preloader_preloader__6et_g",ldsRing:"Preloader_ldsRing__XzqbH","lds-ring":"Preloader_lds-ring__3nQUD"}}},[[162,1,2]]]);
//# sourceMappingURL=main.e09c1ab7.chunk.js.map