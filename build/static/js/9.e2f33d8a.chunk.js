(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{590:function(e,t,a){"use strict";var n;n="http://59.110.159.217:3221/",t.a={baseURL:n,version:"",picURL:"http://59.110.159.217:3221/mongo/images"}},598:function(e,t,a){"use strict";var n=a(590),r=a(600),i=a.n(r);i.a.defaults.withCredentials=!0;var o=i.a.create({baseURL:n.a.baseURL,timeout:3e4}),s=function(e,t){return o.post(e,t).then(function(e){return e.data})},c=function(e,t){return t?o.get("".concat(e,"?").concat(t)).then(function(e){return e.data}):o.get(e).then(function(e){return e.data})};n.a.version,t.a={getTask:function(e){return c("",e)},postLines:function(e){return s("lines",e)},getLines:function(e){return c("lines",e)},putLines:function(e){return function(e,t){return o.put(e,t).then(function(e){return e.data})}("lines",e)},delLines:function(e){return function(e,t){return o.delete(e,{data:t}).then(function(e){return e.data})}("lines/"+e._id)},postFile:function(e){return s("upload",e)},login:function(e){return s("login",e)},register:function(e){return s("register",e)}}},753:function(e,t,a){e.exports={invitation:"WFWLrfxxcYBTfU9cxb8ys",copy:"_2yzwYoSueqXeFuo-0Xxe3L",span:"_1ijgZ2Rg1V8gNdsY7pOp1Y",prompt:"_39ln1y73N1bJJqi_0znglq",img:"_2NxKoB_JarDTF_pwakgHTN"}},804:function(e,t,a){"use strict";a.r(t);var n=a(751),r=a.n(n),i=a(752),o=a(61),s=a(62),c=a(39),l=a(63),u=a(64),p=a(0),m=a.n(p),f=a(795),h=a(586),d=a(587),g=a(185),E=a(698),b=a(699),v=a(607),w=a.n(v),L=a(590),y=a(598),_=a(753),D=a.n(_),O=a(801),j=a(15),I=a(600),k=a.n(I),x=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).triggerChange=function(e){var t=a.props.onChange;t&&t(e)};var n=a.props.callBack;return a.propsConfig={name:"file",action:"",headers:{authorization:"authorization-text"},withCredentials:!0,beforeUpload:function(e){var t=e.size/1024/1024<5;return/image\/\w+/.test(e.type)?t?void 0:(f.a.error("\u56fe\u7247\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc75M"),!1):(f.a.error("\u8bf7\u786e\u4fdd\u6587\u4ef6\u4e3a\u56fe\u50cf\u7c7b\u578b"),!1)},customRequest:function(e){var t=e.file,a=new FormData;a.append("file",t);var r={method:"POST",url:"".concat(L.a.baseURL,"upload"),data:a,headers:{"content-type":"multipart/form-data"}};k()(r).then(function(e){200===e.data.code?(f.a.success("\u4e0a\u4f20\u6210\u529f"),n(e.data.md5)):f.a.error("\u4e0a\u4f20\u5931\u8d25")}).catch(function(e){console.log(e)}),console.log(33333,e)},onRemove:function(e){console.log(e)},onStart:function(e){console.log("onStart",e.name)},onSuccess:function(e){console.log("onSuccess",e)},onProgress:function(e,t){console.log("onProgress",Math.round(e.percent),t.name)},onError:function(e){console.log("onError",e)}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return m.a.createElement(O.a,Object.assign({},this.propsConfig,this.props),m.a.createElement(g.a,null,m.a.createElement(j.a,{type:"upload"})," \u70b9\u51fb\u4e0a\u4f20"))}}]),t}(m.a.Component),C=function(e){function t(){var e,a,n;Object(o.a)(this,t);for(var s=arguments.length,u=new Array(s),p=0;p<s;p++)u[p]=arguments[p];return Object(c.a)(n,(a=n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(u))),n.state={},n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll(function(e,t){if(!e){if(console.log("Received values of form: ",t),!n.state.md5&&!t.file_path)return void f.a.error("\u8bf7\u4e0a\u4f20\u56fe\u7247\u6216\u8005\u586b\u5199\u56fe\u7247\u8def\u5f84");n.state.md5&&(t.md5=n.state.md5),n.EDIT?(t._id=window.location.search.slice(1),y.a.putLines(t).then(function(e){200===e.code?(f.a.success("\u4fee\u6539\u4efb\u52a1\u6210\u529f"),n.props.history.goBack()):f.a.error(e.message)})):y.a.postLines(t).then(function(e){e&&200===e.code?(f.a.success("\u521b\u5efa\u6210\u529f"),n.setState({md5:""}),n.props.form.resetFields()):f.a.error(e.message)}).catch(function(e){f.a.error(e)})}})},n.componentDidMount=function(){window.location.search.slice(1)?(n.EDIT=!0,n.getLineDetail()):n.EDIT=!1},n.getLineDetail=Object(i.a)(r.a.mark(function e(){var t,a,i,o,s,c,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getLines(w.a.stringify({_id:window.location.search.slice(1)}));case 2:200===(t=e.sent).code&&(a=t.data[0],i=a.lines,o=a.character,s=a.title,c=a.md5,l=a.file_path,n.setState({lines:i,character:o,title:s,md5:c,file_path:l}));case 4:case"end":return e.stop()}},e)})),a))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return m.a.createElement(h.a,{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:19}}},m.a.createElement("span",{className:D.a.prompt},"\u4e0a\u4f20\u56fe\u7247\u6216\u8005\u56fe\u7247url\u4e0a\u4f20\u5176\u4e00\u5373\u53ef "),m.a.createElement(h.a.Item,{label:"\u4e0a\u4f20\u56fe\u7247"},m.a.createElement(x,{callBack:function(t){e.setState({md5:t})}})),this.state.md5&&m.a.createElement("img",{className:D.a.img,src:"".concat(L.a.picURL).concat(this.state.md5)}),!this.state.md5&&m.a.createElement(h.a.Item,{label:"\u56fe\u7247url"},t("file_path",{initialValue:this.EDIT?this.state.file_path:"",rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u56fe\u7247url!",whitespace:!0}]})(m.a.createElement(d.a,null))),this.state.file_path&&m.a.createElement("img",{className:D.a.img,src:this.state.file_path}),m.a.createElement(h.a.Item,{label:"\u53f0\u8bcd"},t("lines",{initialValue:this.EDIT?this.state.lines:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53f0\u8bcd!",whitespace:!0}]})(m.a.createElement(d.a,null))),m.a.createElement(h.a.Item,{label:"\u52a8\u6f2b\u89d2\u8272"},t("character",{initialValue:this.EDIT?this.state.character:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u52a8\u6f2b\u89d2\u8272!",whitespace:!0}]})(m.a.createElement(d.a,null))),m.a.createElement(h.a.Item,{label:"\u52a8\u6f2b\u540d\u79f0"},t("title",{initialValue:this.EDIT?this.state.title:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u52a8\u6f2b\u540d\u79f0!",whitespace:!0}]})(m.a.createElement(d.a,null))),m.a.createElement(h.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:19,offset:5}}},m.a.createElement(g.a,{type:"primary",onClick:this.handleSubmit},this.EDIT?"\u4fdd\u5b58":"\u63d0\u4ea4\u53f0\u8bcd"),m.a.createElement(g.a,{style:{marginLeft:"20px"},onClick:function(){e.props.history.goBack()}},"\u8fd4\u56de")))}}]),t}(m.a.Component),T=h.a.create({name:"register"})(C);t.default=function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,null,m.a.createElement(b.a,{span:15},m.a.createElement(T,e))))}}}]);