(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17566319"],{"3c43":function(e,t,o){},"4ec3":function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"e",(function(){return i})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return c})),o.d(t,"d",(function(){return d})),o.d(t,"f",(function(){return p}));o("751a");var r=o("4328"),n=o.n(r),a=o("b775"),s="/api";function u(e){return Object(a["a"])({url:s+"/user/list",method:"get",params:n.a.parse(e)})}function i(e){return Object(a["a"])({url:s+"/user/selectUserPage",method:"get",params:n.a.parse(e)})}function l(e){return Object(a["a"])({url:s+"/user/createUser",method:"post",data:n.a.parse(e)})}function c(e){return Object(a["a"])({url:s+"/user/deleteUserById",method:"get",params:n.a.parse(e)})}function d(e){return Object(a["a"])({url:s+"/user/deleteUserByIdList",method:"get",params:n.a.parse(e)})}function p(e){return Object(a["a"])({url:s+"/user/updateUserById",method:"post",data:n.a.parse(e)})}},"4ec9":function(e,t,o){o("6f48")},"4fad":function(e,t,o){var r=o("d039"),n=o("861d"),a=o("c6b6"),s=o("d86b"),u=Object.isExtensible,i=r((function(){u(1)}));e.exports=i||s?function(e){return!!n(e)&&((!s||"ArrayBuffer"!=a(e))&&(!u||u(e)))}:u},"64dc":function(e,t,o){"use strict";o.d(t,"x",(function(){return a})),o.d(t,"y",(function(){return s})),o.d(t,"u",(function(){return u})),o.d(t,"g",(function(){return i})),o.d(t,"v",(function(){return l})),o.d(t,"w",(function(){return c})),o.d(t,"m",(function(){return d})),o.d(t,"e",(function(){return p})),o.d(t,"d",(function(){return h})),o.d(t,"a",(function(){return m})),o.d(t,"f",(function(){return f})),o.d(t,"b",(function(){return b})),o.d(t,"c",(function(){return v})),o.d(t,"o",(function(){return g})),o.d(t,"s",(function(){return y})),o.d(t,"r",(function(){return C})),o.d(t,"n",(function(){return F})),o.d(t,"t",(function(){return O})),o.d(t,"p",(function(){return w})),o.d(t,"q",(function(){return S})),o.d(t,"k",(function(){return N})),o.d(t,"h",(function(){return T})),o.d(t,"l",(function(){return D})),o.d(t,"i",(function(){return k})),o.d(t,"j",(function(){return P}));var r=o("b775"),n=(o("4328"),"/api");function a(e){return Object(r["a"])({url:n+"/SupplierInventory/list",method:"get",params:e})}function s(e){return Object(r["a"])({url:n+"/SupplierInventory/list-page",method:"get",params:e})}function u(e){return Object(r["a"])({url:n+"/SupplierInventory/add",method:"POST",data:e})}function i(e){return Object(r["a"])({url:n+"/SupplierInventory/update",method:"POST",data:e})}function l(e){return Object(r["a"])({url:n+"/SupplierInventory/delete",method:"POST",data:e})}function c(e){return Object(r["a"])({url:n+"/SupplierInventory/delete-list",method:"POST",data:e})}function d(e){return Object(r["a"])({url:n+"/ShopInventory/getByshopCode",method:"get",params:e})}function p(e){return Object(r["a"])({url:n+"/ShopInventory/list-page",method:"get",params:e})}function h(e){return Object(r["a"])({url:n+"/ShopInventory/list",method:"get",params:e})}function m(e){return Object(r["a"])({url:n+"/ShopInventory/add",method:"POST",data:e})}function f(e){return Object(r["a"])({url:n+"/ShopInventory/update",method:"POST",data:e})}function b(e){return Object(r["a"])({url:n+"/ShopInventory/delete",method:"POST",data:e})}function v(e){return Object(r["a"])({url:n+"/ShopInventory/delete-list",method:"POST",data:e})}function g(e){return Object(r["a"])({url:n+"/shopkeeperWarehouse/getByShopCode",method:"get",params:e})}function y(e){return Object(r["a"])({url:n+"/shopkeeperWarehouse/list-page",method:"get",params:e})}function C(e){return Object(r["a"])({url:n+"/shopkeeperWarehouse/list",method:"get",params:e})}function F(e){return Object(r["a"])({url:n+"/shopkeeperWarehouse/add",method:"POST",data:e})}function O(e){return Object(r["a"])({url:n+"/shopkeeperWarehouse/update",method:"POST",data:e})}function w(e){return Object(r["a"])({url:n+"/shopkeeperWarehouse/delete",method:"POST",data:e})}function S(e){return Object(r["a"])({url:n+"/shopkeeperWarehouse/delete-list",method:"POST",data:e})}function N(e){return Object(r["a"])({url:n+"/detailWarehouse/list-page",method:"get",params:e})}function T(e){return Object(r["a"])({url:n+"/detailWarehouse/add",method:"POST",data:e})}function D(e){return Object(r["a"])({url:n+"/detailWarehouse/update",method:"POST",data:e})}function k(e){return Object(r["a"])({url:n+"/detailWarehouse/delete",method:"POST",data:e})}function P(e){return Object(r["a"])({url:n+"/detailWarehouse/delete-list",method:"POST",data:e})}},6566:function(e,t,o){"use strict";var r=o("9bf2").f,n=o("7c73"),a=o("6964"),s=o("0366"),u=o("19aa"),i=o("7234"),l=o("2266"),c=o("c6d2"),d=o("4754"),p=o("2626"),h=o("83ab"),m=o("f183").fastKey,f=o("69f3"),b=f.set,v=f.getterFor;e.exports={getConstructor:function(e,t,o,c){var d=e((function(e,r){u(e,p),b(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),h||(e.size=0),i(r)||l(r,e[c],{that:e,AS_ENTRIES:o})})),p=d.prototype,f=v(t),g=function(e,t,o){var r,n,a=f(e),s=y(e,t);return s?s.value=o:(a.last=s={index:n=m(t,!0),key:t,value:o,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=s),r&&(r.next=s),h?a.size++:e.size++,"F"!==n&&(a.index[n]=s)),e},y=function(e,t){var o,r=f(e),n=m(t);if("F"!==n)return r.index[n];for(o=r.first;o;o=o.next)if(o.key==t)return o};return a(p,{clear:function(){var e=this,t=f(e),o=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete o[r.index],r=r.next;t.first=t.last=void 0,h?t.size=0:e.size=0},delete:function(e){var t=this,o=f(t),r=y(t,e);if(r){var n=r.next,a=r.previous;delete o.index[r.index],r.removed=!0,a&&(a.next=n),n&&(n.previous=a),o.first==r&&(o.first=n),o.last==r&&(o.last=a),h?o.size--:t.size--}return!!r},forEach:function(e){var t,o=f(this),r=s(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:o.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!y(this,e)}}),a(p,o?{get:function(e){var t=y(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),h&&r(p,"size",{get:function(){return f(this).size}}),d},setStrong:function(e,t,o){var r=t+" Iterator",n=v(t),a=v(r);c(e,t,(function(e,t){b(this,{type:r,target:e,state:n(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,o=e.last;while(o&&o.removed)o=o.previous;return e.target&&(e.last=o=o?o.next:e.state.first)?d("keys"==t?o.key:"values"==t?o.value:[o.key,o.value],!1):(e.target=void 0,d(void 0,!0))}),o?"entries":"values",!o,!0),p(t)}}},6964:function(e,t,o){var r=o("cb2d");e.exports=function(e,t,o){for(var n in t)r(e,n,t[n],o);return e}},"6d61":function(e,t,o){"use strict";var r=o("23e7"),n=o("da84"),a=o("e330"),s=o("94ca"),u=o("cb2d"),i=o("f183"),l=o("2266"),c=o("19aa"),d=o("1626"),p=o("7234"),h=o("861d"),m=o("d039"),f=o("1c7e"),b=o("d44e"),v=o("7156");e.exports=function(e,t,o){var g=-1!==e.indexOf("Map"),y=-1!==e.indexOf("Weak"),C=g?"set":"add",F=n[e],O=F&&F.prototype,w=F,S={},N=function(e){var t=a(O[e]);u(O,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(y&&!h(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return y&&!h(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!h(e))&&t(this,0===e?0:e)}:function(e,o){return t(this,0===e?0:e,o),this})},T=s(e,!d(F)||!(y||O.forEach&&!m((function(){(new F).entries().next()}))));if(T)w=o.getConstructor(t,e,g,C),i.enable();else if(s(e,!0)){var D=new w,k=D[C](y?{}:-0,1)!=D,P=m((function(){D.has(1)})),x=f((function(e){new F(e)})),j=!y&&m((function(){var e=new F,t=5;while(t--)e[C](t,t);return!e.has(-0)}));x||(w=t((function(e,t){c(e,O);var o=v(new F,e,w);return p(t)||l(t,o[C],{that:o,AS_ENTRIES:g}),o})),w.prototype=O,O.constructor=w),(P||j)&&(N("delete"),N("has"),g&&N("get")),(j||k)&&N(C),y&&O.clear&&delete O.clear}return S[e]=w,r({global:!0,constructor:!0,forced:w!=F},S),b(w,e),y||o.setStrong(w,e,g),w}},"6f48":function(e,t,o){"use strict";var r=o("6d61"),n=o("6566");r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},"751a":function(e,t,o){"use strict";o("b775")},"8f43":function(e,t,o){},"9bb3":function(e,t,o){"use strict";o.r(t);o("ac1f"),o("841c");var r=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{background:"#fff",padding:"10px"}},[t("reloadAndsearch",{ref:"search",attrs:{config:e.searchConfig},on:{search:e.search}}),t("div",{staticClass:"list-model"},[t("TableList",{attrs:{pageMethod:e.getTableData,searchMethod:e.getTableData,"table-data":e.tableData,tableColumn:e.tableColumn,query:e.query,total:e.total,loading:e.loadings.table},on:{"update:query":function(t){e.query=t}},scopedSlots:e._u([{key:"column-status",fn:function(o){return[t("span",[e._v(e._s("0"==o.row.status?"在单":"1"==o.row.status?"生产":"2"==o.row.status?"在途":"3"==o.row.status?"入库":"4"==o.row.status?"占用":"5"==o.row.status?"出库":"-"))])]}},{key:"column-type",fn:function(o){return[0==o.row.type?t("span",[e._v("零售")]):e._e(),1==o.row.type?t("span",[e._v("客户订购")]):e._e(),2==o.row.type?t("span",[e._v("调货出库")]):e._e()]}},{key:"column-createTime",fn:function(o){return[o.row.createTime?t("span",[e._v(e._s(e._f("datefmt")(o.row.createTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-deadlineTime",fn:function(o){return[o.row.deadlineTime?t("span",[e._v(e._s(e._f("datefmt")(o.row.deadlineTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-todo",fn:function(o){return[4==o.row.status?t("el-button",{attrs:{type:"text",icon:"el-icon-s-promotion"},on:{click:function(t){return e.editRow1(o.row)}}},[e._v("发货")]):e._e(),0==e.userType?t("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.editRow(o.row)}}},[e._v("编辑")]):e._e(),t("el-button",{staticClass:"prohibitclick",attrs:{type:"text",size:"small",icon:"el-icon-document"},on:{click:function(t){return e.deleteRow(o.row)}}},[e._v("删除")])]}}])})],1),e.drawer?t("salesOrderEdit",{attrs:{drawer:e.drawer,rowData:e.rowData,output:e.output},on:{close:function(t){e.drawer=!1},success:function(t){return e.success()}}}):e._e()],1)},n=[],a=(o("d3b7"),o("159b"),o("14d9"),o("b7be")),s=o("c367"),u=o("ffd4"),i=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{size:"30%",title:e.ifCreate?"新增销售单":e.output?"发货":"编辑销售单",visible:e.drawer,direction:e.direction,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,wrapperClosable:!1,"append-to-body":!0,width:"1200px"},on:{"update:visible":function(t){e.drawer=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店",prop:"shopCode"}},[t("el-select",{ref:"selection",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"",clearable:"",disabled:e.output},model:{value:e.ruleForm.shopCode,callback:function(t){e.$set(e.ruleForm,"shopCode",t)},expression:"ruleForm.shopCode"}},e._l(e.shopOptions,(function(o){return t("el-option",{key:o.shopKey,attrs:{label:o.shopName,value:o.shopCode,disabled:6!=o.shopStatus&&1!=o.shopStatus},nativeOn:{click:function(t){return e.setShopName(o)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"商品",prop:"goodsCode"}},[t("el-select",{ref:"goodsSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"商品",clearable:"",disabled:e.output},model:{value:e.ruleForm.goodsCode,callback:function(t){e.$set(e.ruleForm,"goodsCode",t)},expression:"ruleForm.goodsCode"}},e._l(e.goodsOptions,(function(o){return t("el-option",{key:o.goodsCode,attrs:{label:o.goodsName,value:o.goodsCode},nativeOn:{click:function(t){return e.setGoodsName(o)}}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"客户",prop:"customerCode"}},[t("el-select",{ref:"customerSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"客户",clearable:"",disabled:e.output},model:{value:e.ruleForm.customerCode,callback:function(t){e.$set(e.ruleForm,"customerCode",t)},expression:"ruleForm.customerCode"}},e._l(e.customerOptions,(function(o){return t("el-option",{key:o.customerKey,attrs:{label:o.customerName,value:o.customerCode},nativeOn:{click:function(t){return e.setCustomerName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"出库价格",prop:"outputPrice"}},[t("el-input",{attrs:{disabled:e.output,clearable:"",placeholder:"出库价格",min:0,type:"Number"},model:{value:e.ruleForm.outputPrice,callback:function(t){e.$set(e.ruleForm,"outputPrice",t)},expression:"ruleForm.outputPrice"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"计划出库数",prop:"outputPlan"}},[t("el-input",{attrs:{disabled:e.output,clearable:"",placeholder:"计划出库数",min:0,type:"Number"},on:{blur:e.checkNum},model:{value:e.ruleForm.outputPlan,callback:function(t){e.$set(e.ruleForm,"outputPlan",t)},expression:"ruleForm.outputPlan"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"出库类型",prop:"type"}},[t("el-select",{attrs:{size:"small",placeholder:"出库类型",clearable:"",disabled:e.output},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[t("el-option",{attrs:{label:"客户订购出库",value:1}})],1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店操作员",prop:"shopPeopleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"门店操作员",clearable:"",disabled:e.output},model:{value:e.ruleForm.shopPeopleCode,callback:function(t){e.$set(e.ruleForm,"shopPeopleCode",t)},expression:"ruleForm.shopPeopleCode"}},e._l(e.userOptions,(function(e){return t("el-option",{key:e.userId,attrs:{label:e.userName,value:e.userCode}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("span",{staticStyle:{"margin-left":"8%"}},[e._v("起止日期")]),t("el-date-picker",{staticStyle:{width:"310px","margin-left":"10px"},attrs:{type:"daterange",align:"right",size:"large","unlink-panels":"","range-separator":"至","start-placeholder":"预计日期","end-placeholder":"最迟日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss",disabled:e.output},on:{change:e.setTime},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1),e.output?t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"仓库",prop:"inventoryCode"}},[t("el-select",{ref:"inventorySelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"仓库",clearable:""},model:{value:e.ruleForm.inventoryCode,callback:function(t){e.$set(e.ruleForm,"inventoryCode",t)},expression:"ruleForm.inventoryCode"}},e._l(e.inventoryOptions,(function(o){return t("el-option",{key:o.inventoryKey,attrs:{label:o.inventoryName,value:o.inventoryCode,disabled:1!=o.status},nativeOn:{click:function(t){return e.setPosition.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"库位",prop:"positionCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"库位",clearable:""},model:{value:e.ruleForm.positionCode,callback:function(t){e.$set(e.ruleForm,"positionCode",t)},expression:"ruleForm.positionCode"}},e._l(e.positionOptions,(function(e){return t("el-option",{key:e.positionCode,attrs:{label:e.positionCode,value:e.positionCode,clearable:"",placeholder:"库位"}})})),1)],1)],1)],1):e._e(),e.output?t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"仓库操作员",prop:"inventoryPeopleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"仓库操作员",clearable:""},model:{value:e.ruleForm.inventoryPeopleCode,callback:function(t){e.$set(e.ruleForm,"inventoryPeopleCode",t)},expression:"ruleForm.inventoryPeopleCode"}},e._l(e.userOptions1,(function(e){return t("el-option",{key:e.userId,attrs:{label:e.userName,value:e.userCode}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"实际数",prop:"outputActual"}},[t("el-input",{attrs:{clearable:"",placeholder:"实际数",min:0,type:"Number"},on:{blur:e.checkNum1},model:{value:e.ruleForm.outputActual,callback:function(t){e.$set(e.ruleForm,"outputActual",t)},expression:"ruleForm.outputActual"}})],1)],1)],1):e._e(),e.output?t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"车辆",prop:"vehicleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"车辆",clearable:""},model:{value:e.ruleForm.vehicleCode,callback:function(t){e.$set(e.ruleForm,"vehicleCode",t)},expression:"ruleForm.vehicleCode"}},e._l(e.vehicleOptions,(function(e){return t("el-option",{key:e.vehicleKey,attrs:{label:e.vehicleCode,value:e.vehicleCode}})})),1)],1)],1)],1):e._e()],1),t("div",{staticClass:"dialog_footer"},[0==e.ifCreate?t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save("ruleForm")}}},[e._v("保存")]):t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.create("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(t){return e.close()}}},[e._v("关闭")])],1)],1)},l=[],c=o("ade3"),d=(o("4ec9"),o("3ca3"),o("ddb0"),o("4de4"),o("7e1e")),p=o("64dc"),h=o("4ec3"),m=o("c1df"),f=o.n(m),b={name:"guestEdit",data:function(){var e;return{direction:"btt",ifCreate:!1,ruleForm:{outputWarehouseKey:"",shopCode:"",shopName:"",goodsCode:"",goodsName:"",customerCode:"",customerName:"",outputPlan:"",outputPrice:"",outputActual:"",inventoryCode:"",positionCode:"",createTime:"",deadlineTime:"",vehicleCode:"",status:"",type:1,shopPeopleCode:"",inventoryPeopleCode:"",isDeleted:"",returnReason:"",returnNum:"",outputShopCode:"",outputShopName:""},availableNum:"",shopOptions:[],goodsOptions:[],positionOptions:[],customerOptions:[],vehicleOptions:[],inventoryOptions:[],userOptions:[],userOptions1:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,o=new Date;t.setTime(t.getTime()+6048e5),e.$emit("pick",[o,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,o=new Date;t.setTime(t.getTime()+2592e6),e.$emit("pick",[o,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,o=new Date;t.setTime(t.getTime()+7776e6),e.$emit("pick",[o,t])}}],disabledDate:function(e){return new Date(e).getTime()<(new Date).getTime()-864e5||new Date(e).getTime()>(new Date).getTime()+15552e6}},value2:"",rules:(e={shopCode:[{required:!0,message:"请选择",trigger:"blur"}],goodsCode:[{required:!0,message:"请选择商品",trigger:"blur"}],customerCode:[{required:!0,message:"请选择客户",trigger:"blur"}],inventoryCode:[{required:!0,message:"请选择仓库",trigger:"blur"}],positionCode:[{required:!0,message:"请选择货位",trigger:"blur"}],outputPlan:[{required:!0,message:"请设置计划出库数",trigger:"blur"}],outputPrice:[{required:!0,message:"请设置出库价格",trigger:"blur"}],outputActual:[{required:!0,message:"请设置实际出库数",trigger:"blur"}],type:[{required:!0,message:"请设置出库类型",trigger:"blur"}]},Object(c["a"])(e,"type",[{required:!0,message:"请设置出库类型",trigger:"blur"}]),Object(c["a"])(e,"shopPeopleCode",[{required:!0,message:"请设置门店操作员",trigger:"blur"}]),Object(c["a"])(e,"inventoryPeopleCode",[{required:!0,message:"请设置仓库操作员",trigger:"blur"}]),e)}},props:{drawer:{default:!0},rowData:{},output:{default:!1}},watch:{},created:function(){this.getshoplist(),this.getCustomerList(),this.getUserList(),this.getvehicleList(),this.rowData.outputWarehouseKey?(this.ruleForm.outputWarehouseKey=this.rowData.outputWarehouseKey,this.ruleForm.shopCode=this.rowData.shopCode,this.ruleForm.shopName=this.rowData.shopName,this.ruleForm.goodsCode=this.rowData.goodsCode,this.ruleForm.goodsName=this.rowData.goodsName,this.ruleForm.customerCode=this.rowData.customerCode,this.ruleForm.customerName=this.rowData.customerName,this.ruleForm.outputPlan=this.rowData.outputPlan,this.ruleForm.outputPrice=this.rowData.outputPrice,this.ruleForm.outputActual=this.rowData.outputActual,this.ruleForm.inventoryCode=this.rowData.inventoryCode,this.ruleForm.positionCode=this.rowData.positionCode,this.ruleForm.createTime=this.rowData.createTime,this.ruleForm.deadlineTime=this.rowData.deadlineTime,this.ruleForm.vehicleCode=this.rowData.vehicleCode,this.ruleForm.isDeleted=this.rowData.isDeleted,this.ruleForm.status=this.rowData.status,this.ruleForm.shopPeopleCode=this.rowData.shopPeopleCode,this.ruleForm.inventoryPeopleCode=this.rowData.inventoryPeopleCode,this.ruleForm.returnReason=this.rowData.returnReason,this.ruleForm.returnNum=this.rowData.returnNum,this.ruleForm.outputShopCode=this.rowData.outputShopCode,this.ruleForm.outputShopName=this.rowData.outputShopName,this.value2=[this.rowData.createTime,this.rowData.deadlineTime]):this.ifCreate=!0,this.getShopInventoryList()},methods:{getvehicleList:function(){var e=this;Object(d["yb"])().then((function(t){200==t.data.code?e.vehicleOptions=t.data.data:e.$message.error("获取失败!")}))},getUserList:function(){var e=this;Object(h["a"])({userType:2}).then((function(t){e.userOptions=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)})),Object(h["a"])({userType:1}).then((function(t){e.userOptions1=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)}))},unique:function(e){var t=new Map;return e.filter((function(e){return!t.has(e.shopCode)&&t.set(e.shopCode,1)}))},getshoplist:function(){var e=this;Object(p["r"])().then((function(t){200==t.data.code?e.shopOptions=e.unique(t.data.data):e.$message.error("获取失败!")}))},getgoodslist:function(e){var t=this;Object(p["o"])({shopCode:e.shopCode,shopName:e.shopName}).then((function(e){200==e.data.code?t.goodsOptions=e.data.data:t.$message.error("获取失败!")}))},getCustomerList:function(){var e=this;Object(d["e"])().then((function(t){200==t.data.code?e.customerOptions=t.data.data:e.$message.error("获取失败!")}))},getShopInventoryList:function(){var e=this;Object(p["m"])({shopCode:this.ruleForm.shopCode}).then((function(t){200==t.data.code?(e.inventoryOptions=t.data.data,e.getpositionList()):e.$message.error("获取失败!")}))},setShopName:function(e){this.goodsOptions=[],this.getShopInventoryList(),this.ruleForm.shopName=this.$refs.selection.selectedLabel,this.getgoodslist(e)},setCustomerName:function(){var e=this;this.ruleForm.customerName=this.$refs.customerSelect.selectedLabel,this.shopOptions.forEach((function(t){t.goodsCode==t.goodsCode&&t.shopCode==e.ruleForm.shopCode&&(e.availableNum=t.availableNum)}))},setGoodsName:function(e){console.log(this.$refs.goodsSelect.selectedLabel),this.ruleForm.goodsName=this.$refs.goodsSelect.selectedLabel,this.ruleForm.outputPrice=e.priceWholesaler},checkNum:function(){this.ruleForm.outputPlan>this.availableNum&&(this.$message.error("超过最大可用数：".concat(this.availableNum)),this.ruleForm.outputPlan="")},checkNum1:function(){var e=this;this.shopOptions.forEach((function(t){t.goodsCode==t.goodsCode&&t.shopCode==e.ruleForm.shopCode&&(e.accountNum=t.accountNum)})),this.ruleForm.outputActual>this.accountNum&&(this.$message.error("超过最大可用数：".concat(this.accountNum)),this.ruleForm.checkNum1="")},setPosition:function(){var e=this;this.ruleForm.inventoryName=this.$refs.inventorySelect.selectedLabel;var t=this.inventoryOptions.filter((function(t){return t.inventoryCode==e.ruleForm.inventoryCode}));this.getpositionList(t[0].inventoryKey)},getpositionList:function(){var e=this;this.inventoryOptions.forEach((function(t){t.inventoryCode==e.ruleForm.inventoryCode&&Object(d["hb"])({inventoryKey:t.inventoryKey}).then((function(t){200==t.data.code?e.positionOptions=t.data.data:e.$message.error("获取失败!")}))}))},setTime:function(){this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1]},close:function(){this.$parent.drawer=!1,this.$emit("close")},save:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],1==this.output?this.ruleForm.status=5:this.ruleForm.status=4,this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var o={shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,customerCode:t.ruleForm.customerCode,customerName:t.ruleForm.customerName,outputPlan:t.ruleForm.outputPlan,outputPrice:t.ruleForm.outputPrice,outputActual:t.ruleForm.outputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,isDeleted:t.ruleForm.isDeleted,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,returnNum:t.ruleForm.returnNum,outputShopCode:t.ruleForm.outputShopCode,outputShopName:t.ruleForm.outputShopName,outputWarehouseKey:t.ruleForm.outputWarehouseKey};Object(a["f"])(o).then((function(e){if(200==e.data.code)if(5==t.ruleForm.status){var o={inputOutputKey:e.data.data.outputWarehouseKey,shopkeeperWarehouseKey:"",type:1,transType:4,quantity:t.ruleForm.outputActual,startNum:"",finalNum:"",atTime:f()().format("YYYY-MM-DD HH:mm:ss"),status:t.rowData.status,detailWarehouseKey:"",shopCode:t.ruleForm.shopCode,goodsCode:t.ruleForm.goodsCode};Object(p["h"])(o).then((function(e){t.$message.success("编辑成功!"),t.$parent.success(),t.$forceUpdate()}))}else t.$message.success("编辑成功!"),t.$parent.success(),t.$forceUpdate();else t.$message.error("编辑失败!")}))}))},create:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],1==this.output?this.ruleForm.status=5:this.ruleForm.status=4,this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var o={shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,customerCode:t.ruleForm.customerCode,customerName:t.ruleForm.customerName,outputPlan:t.ruleForm.outputPlan,outputPrice:t.ruleForm.outputPrice,outputActual:t.ruleForm.outputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,isDeleted:t.ruleForm.isDeleted,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnNum:t.ruleForm.returnNum,outputShopCode:t.ruleForm.outputShopCode,outputShopName:t.ruleForm.outputShopName,returnReason:t.ruleForm.returnReason};Object(a["a"])(o).then((function(e){200==e.data.code?(t.$message.success("新增成功!"),t.$parent.success(),t.$forceUpdate()):t.$message.error("新增失败!")}))}))}}},v=b,g=(o("b070"),o("2877")),y=Object(g["a"])(v,i,l,!1,null,null,null),C=y.exports,F={name:"slist",data:function(){return{total:null,drawer:!1,rowData:{},tableData:[],output:!1,multipleSelection:[],loadings:{table:!0},query:{pageNo:1,pageSize:10},userType:"",shopOptions:[],goodsOptions:[],inventoryOptions:[],vehicleOptions:[],customerOptions:[]}},computed:{tableColumn:function(){return[{prop:"shopCode",label:"门店编码",width:"120px",sortable:!0},{prop:"shopName",label:"门店名称",width:"200px",sortable:!0},{prop:"goodsCode",label:"商品编码",width:"120px",sortable:!0},{prop:"goodsName",label:"商品名称",width:"200px",sortable:!0},{prop:"customerCode",label:"客户编码",width:"120px",sortable:!0},{prop:"customerName",label:"客户名称",width:"200px",sortable:!0},{prop:"outputPlan",label:"计划数",width:"100px",sortable:!0},{prop:"outputPrice",label:"出库价格",width:"120px",sortable:!0},{slots:{name:"column-status"},label:"状态"},{slots:{name:"column-type"},label:"出库类型"},{prop:"shopPeopleCode",label:"门店操作员",width:"100px"},{slots:{name:"column-createTime"},label:"预计日期",width:"150px",sortable:!0},{slots:{name:"column-deadlineTime"},label:"最迟日期",width:"150px",sortable:!0},{slots:{name:"column-todo"},label:"操作",fixed:"right",width:250}]},searchConfig:function(){return[{label:"请选择",placeholder:"请选择门店",field:"shopCode",value:"",type:"select",options:this.shopOptions},{label:"请选择",placeholder:"请选择商品",field:"goodsCode",value:"",type:"select",options:this.goodsOptions},{label:"请选择",placeholder:"请选择仓库",field:"inventoryCode",value:"",type:"select",options:this.inventoryOptions},{label:"请选择",placeholder:"请选择客户",field:"customerCode",value:"",type:"select",options:this.customerOptions}]}},props:{},components:{TableList:s["a"],salesOrderEdit:C,reloadAndsearch:u["a"]},created:function(){this.getshoplist(),this.getgoodslist(),this.getCustomerList(),this.getinventorylist();var e=JSON.parse(localStorage.getItem("userInfo"));this.userType=e.userType},methods:{getCustomerList:function(){var e=this;Object(d["e"])().then((function(t){200==t.data.code?(e.customerOptions=[],t.data.data.forEach((function(t){e.customerOptions.push({label:t.customerName,value:t.customerCode})}))):e.$message.error("获取失败!")}))},getinventorylist:function(){var e=this;Object(d["cb"])().then((function(t){200===t.data.code?(e.inventoryOptions=[],t.data.data.forEach((function(t){("2"==t.inventoryType&&null!=t.belongKey||""!=t.belongKey)&&e.inventoryOptions.push({label:t.inventoryName,value:t.inventoryCode})}))):e.$message.error(t.msg)})).catch((function(e){console.log(e)}))},getshoplist:function(){var e=this;Object(d["ob"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.shopOptions.push({label:t.shopName,value:t.shopCode})})):e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(d["W"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.goodsOptions.push({label:t.goodsName,value:t.goodsCode})})):e.$message.error("获取失败!")}))},getTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,o&&(this.query.pageSize=o),this.loadings.table=!0;var r={page:this.query.pageNo,size:this.query.pageSize,shopCode:"",goodsCode:"",customerCode:"",inventoryCode:"",status:4,isDeleted:0,type:1};Object(a["e"])(r).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},search:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,o&&(this.query.pageSize=o);var r=this.$refs.search.search;Object(a["e"])({page:this.query.pageNo,size:this.query.pageSize,shopCode:r.shopCode,goodsCode:r.goodsCode,customerCode:r.customerCode,inventoryCode:r.inventoryCode,status:4,isDeleted:0,type:1}).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},editRow:function(e){this.output=!1,this.rowData=e,this.drawer=!0},editRow1:function(e){this.output=!0,this.rowData=e,this.drawer=!0},deleteRow:function(e){var t=this;this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["b"])({isDeleted:0,outputWarehouseKey:e.outputWarehouseKey}).then((function(e){200==e.data.code?(t.$message.success("删除成功!"),t.getTableData(),t.$forceUpdate()):t.$message.error("删除失败!")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},success:function(){this.drawer=!1,this.rowData={},this.drawer1=!1,this.rowData1={},this.getTableData()},reload:function(){this.getTableData()},add:function(){this.rowData={},this.drawer=!0},handleSelectionDelete:function(e){this.multipleSelection=e},handleDeleteList:function(){var e=this;if(this.multipleSelection.length>0){var t=[];this.multipleSelection.forEach((function(e){t.push({isDeleted:0,outputWarehouseKey:e.outputWarehouseKey})})),console.log(t),this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["c"])(t).then((function(){e.getTableData(),e.$message({type:"success",message:"删除成功!"})})).catch((function(e){console.log(e)}))})).catch((function(){e.$message({type:"info",message:"已取消删除"}),e.multipleSelection=[]}))}else this.$message({type:"error",message:"至少选择一项"})}}},O=F,w=(o("bc61"),Object(g["a"])(O,r,n,!1,null,"66f2ddda",null));t["default"]=w.exports},b070:function(e,t,o){"use strict";o("3c43")},b7be:function(e,t,o){"use strict";o.d(t,"d",(function(){return a})),o.d(t,"e",(function(){return s})),o.d(t,"a",(function(){return u})),o.d(t,"f",(function(){return i})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return c}));var r=o("b775"),n=(o("4328"),"/api");function a(e){return Object(r["a"])({url:n+"/outputWarehouse/list",method:"get",params:e})}function s(e){return Object(r["a"])({url:n+"/outputWarehouse/list-page",method:"get",params:e})}function u(e){return Object(r["a"])({url:n+"/outputWarehouse/add",method:"POST",data:e})}function i(e){return Object(r["a"])({url:n+"/outputWarehouse/update",method:"POST",data:e})}function l(e){return Object(r["a"])({url:n+"/outputWarehouse/delete",method:"POST",data:e})}function c(e){return Object(r["a"])({url:n+"/outputWarehouse/delete-list",method:"POST",data:e})}},bb2f:function(e,t,o){var r=o("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bc61:function(e,t,o){"use strict";o("8f43")},d86b:function(e,t,o){var r=o("d039");e.exports=r((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},f183:function(e,t,o){var r=o("23e7"),n=o("e330"),a=o("d012"),s=o("861d"),u=o("1a2d"),i=o("9bf2").f,l=o("241c"),c=o("057f"),d=o("4fad"),p=o("90e3"),h=o("bb2f"),m=!1,f=p("meta"),b=0,v=function(e){i(e,f,{value:{objectID:"O"+b++,weakData:{}}})},g=function(e,t){if(!s(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!u(e,f)){if(!d(e))return"F";if(!t)return"E";v(e)}return e[f].objectID},y=function(e,t){if(!u(e,f)){if(!d(e))return!0;if(!t)return!1;v(e)}return e[f].weakData},C=function(e){return h&&m&&d(e)&&!u(e,f)&&v(e),e},F=function(){O.enable=function(){},m=!0;var e=l.f,t=n([].splice),o={};o[f]=1,e(o).length&&(l.f=function(o){for(var r=e(o),n=0,a=r.length;n<a;n++)if(r[n]===f){t(r,n,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:c.f}))},O=e.exports={enable:F,fastKey:g,getWeakData:y,onFreeze:C};a[f]=!0}}]);
//# sourceMappingURL=chunk-17566319.d3c73ea1.js.map