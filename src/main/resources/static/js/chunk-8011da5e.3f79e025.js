(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8011da5e"],{3982:function(e,t,o){"use strict";o("8b46")},"4ec9":function(e,t,o){o("6f48")},"4fad":function(e,t,o){var r=o("d039"),s=o("861d"),i=o("c6b6"),a=o("d86b"),n=Object.isExtensible,l=r((function(){n(1)}));e.exports=l||a?function(e){return!!s(e)&&((!a||"ArrayBuffer"!=i(e))&&(!n||n(e)))}:n},"5a1c":function(e,t,o){},6566:function(e,t,o){"use strict";var r=o("9bf2").f,s=o("7c73"),i=o("6964"),a=o("0366"),n=o("19aa"),l=o("7234"),u=o("2266"),p=o("c6d2"),c=o("4754"),d=o("2626"),h=o("83ab"),m=o("f183").fastKey,f=o("69f3"),v=f.set,y=f.getterFor;e.exports={getConstructor:function(e,t,o,p){var c=e((function(e,r){n(e,d),v(e,{type:t,index:s(null),first:void 0,last:void 0,size:0}),h||(e.size=0),l(r)||u(r,e[p],{that:e,AS_ENTRIES:o})})),d=c.prototype,f=y(t),b=function(e,t,o){var r,s,i=f(e),a=g(e,t);return a?a.value=o:(i.last=a={index:s=m(t,!0),key:t,value:o,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=a),r&&(r.next=a),h?i.size++:e.size++,"F"!==s&&(i.index[s]=a)),e},g=function(e,t){var o,r=f(e),s=m(t);if("F"!==s)return r.index[s];for(o=r.first;o;o=o.next)if(o.key==t)return o};return i(d,{clear:function(){var e=this,t=f(e),o=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete o[r.index],r=r.next;t.first=t.last=void 0,h?t.size=0:e.size=0},delete:function(e){var t=this,o=f(t),r=g(t,e);if(r){var s=r.next,i=r.previous;delete o.index[r.index],r.removed=!0,i&&(i.next=s),s&&(s.previous=i),o.first==r&&(o.first=s),o.last==r&&(o.last=i),h?o.size--:t.size--}return!!r},forEach:function(e){var t,o=f(this),r=a(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:o.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!g(this,e)}}),i(d,o?{get:function(e){var t=g(this,e);return t&&t.value},set:function(e,t){return b(this,0===e?0:e,t)}}:{add:function(e){return b(this,e=0===e?0:e,e)}}),h&&r(d,"size",{get:function(){return f(this).size}}),c},setStrong:function(e,t,o){var r=t+" Iterator",s=y(t),i=y(r);p(e,t,(function(e,t){v(this,{type:r,target:e,state:s(e),kind:t,last:void 0})}),(function(){var e=i(this),t=e.kind,o=e.last;while(o&&o.removed)o=o.previous;return e.target&&(e.last=o=o?o.next:e.state.first)?c("keys"==t?o.key:"values"==t?o.value:[o.key,o.value],!1):(e.target=void 0,c(void 0,!0))}),o?"entries":"values",!o,!0),d(t)}}},6964:function(e,t,o){var r=o("cb2d");e.exports=function(e,t,o){for(var s in t)r(e,s,t[s],o);return e}},"6d61":function(e,t,o){"use strict";var r=o("23e7"),s=o("da84"),i=o("e330"),a=o("94ca"),n=o("cb2d"),l=o("f183"),u=o("2266"),p=o("19aa"),c=o("1626"),d=o("7234"),h=o("861d"),m=o("d039"),f=o("1c7e"),v=o("d44e"),y=o("7156");e.exports=function(e,t,o){var b=-1!==e.indexOf("Map"),g=-1!==e.indexOf("Weak"),C=b?"set":"add",F=s[e],w=F&&F.prototype,O=F,D={},N=function(e){var t=i(w[e]);n(w,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!h(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return g&&!h(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!h(e))&&t(this,0===e?0:e)}:function(e,o){return t(this,0===e?0:e,o),this})},k=a(e,!c(F)||!(g||w.forEach&&!m((function(){(new F).entries().next()}))));if(k)O=o.getConstructor(t,e,b,C),l.enable();else if(a(e,!0)){var x=new O,S=x[C](g?{}:-0,1)!=x,T=m((function(){x.has(1)})),$=f((function(e){new F(e)})),P=!g&&m((function(){var e=new F,t=5;while(t--)e[C](t,t);return!e.has(-0)}));$||(O=t((function(e,t){p(e,w);var o=y(new F,e,O);return d(t)||u(t,o[C],{that:o,AS_ENTRIES:b}),o})),O.prototype=w,w.constructor=O),(T||P)&&(N("delete"),N("has"),b&&N("get")),(P||S)&&N(C),g&&w.clear&&delete w.clear}return D[e]=O,r({global:!0,constructor:!0,forced:O!=F},D),v(O,e),g||o.setStrong(O,e,b),O}},"6f48":function(e,t,o){"use strict";var r=o("6d61"),s=o("6566");r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),s)},8829:function(e,t,o){"use strict";o("5a1c")},"8b46":function(e,t,o){},bb2f:function(e,t,o){var r=o("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d77b:function(e,t,o){"use strict";o.r(t);o("ac1f"),o("841c");var r=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{background:"#fff",padding:"10px"}},[t("reloadAndsearch",{ref:"search",attrs:{config:e.searchConfig,hidden:e.hidden},on:{search:e.search}}),t("div",{staticClass:"list-model"},[t("TableList",{attrs:{pageMethod:e.getTableData,searchMethod:e.getTableData,"table-data":e.tableData,tableColumn:e.tableColumn,query:e.query,total:e.total,loading:e.loadings.table},on:{"update:query":function(t){e.query=t}},scopedSlots:e._u([{key:"column-status",fn:function(o){return[t("span",[e._v(e._s("0"==o.row.status?"在单":"1"==o.row.status?"生产":"2"==o.row.status?"在途":"3"==o.row.status?"入库":"4"==o.row.status?"占用":"5"==o.row.status?"出库":"-"))])]}},{key:"column-type",fn:function(o){return[0==o.row.type?t("span",[e._v("采购入库")]):e._e(),1==o.row.type?t("span",[e._v("调货入库")]):e._e()]}},{key:"column-createTime",fn:function(o){return[o.row.createTime?t("span",[e._v(e._s(e._f("datefmt")(o.row.createTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-deadlineTime",fn:function(o){return[o.row.deadlineTime?t("span",[e._v(e._s(e._f("datefmt")(o.row.deadlineTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-isDeleted",fn:function(o){return[t("span",[e._v(e._s("0"==o.row.isDeleted?"否":"1"==o.row.isDeleted?"是":"-"))])]}},{key:"column-todo",fn:function(o){return[t("el-button",{staticStyle:{visibility:"hidden"},attrs:{type:"text"}},[e._v("空")]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:!o.row.returnNum&&3==o.row.status&&1!=o.row.type,expression:"!props.row.returnNum && props.row.status == 3 && props.row.type != 1"}],attrs:{type:"text",icon:"el-icon-truck"},on:{click:function(t){return e.editRow1(o.row)}}},[e._v("退货")]),0==e.userType?t("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.editRow(o.row)}}},[e._v("编辑")]):e._e(),0==e.userType?t("el-button",{staticClass:"prohibitclick",attrs:{type:"text",size:"small",icon:"el-icon-document"},on:{click:function(t){return e.deleteRow(o.row)}}},[e._v("删除")]):e._e()]}}])})],1),e.drawer?t("billsEdit",{attrs:{drawer:e.drawer,rowData:e.rowData},on:{close:function(t){e.drawer=!1},success:function(t){return e.success()}}}):e._e(),e.drawer1?t("enterWarehouseReturn",{attrs:{drawer:e.drawer1,rowData:e.rowData1},on:{close:function(t){e.drawer1=!1},success:function(t){return e.success()}}}):e._e()],1)},s=[],i=(o("d3b7"),o("159b"),o("14d9"),o("4ec9"),o("3ca3"),o("ddb0"),o("4de4"),o("972b")),a=o("c367"),n=o("ffd4"),l=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{size:"30%",title:e.ifCreate?"新增":"编辑",visible:e.drawer,direction:e.direction,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,wrapperClosable:!1,"append-to-body":!0,width:"1200px"},on:{"update:visible":function(t){e.drawer=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店",prop:"shopCode"}},[t("el-select",{ref:"selection",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"门店",clearable:""},model:{value:e.ruleForm.shopCode,callback:function(t){e.$set(e.ruleForm,"shopCode",t)},expression:"ruleForm.shopCode"}},e._l(e.shopOptions,(function(o){return t("el-option",{key:o.shopKey,attrs:{label:o.shopName,value:o.shopCode},nativeOn:{click:function(t){return e.setShopName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"商品",prop:"goodsCode"}},[t("el-select",{ref:"goodsSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"商品",clearable:""},model:{value:e.ruleForm.goodsCode,callback:function(t){e.$set(e.ruleForm,"goodsCode",t)},expression:"ruleForm.goodsCode"}},e._l(e.goodsOptions,(function(o){return t("el-option",{key:o.goodsCode,attrs:{label:o.goodsName,value:o.goodsCode},nativeOn:{click:function(t){return e.setGoodsName.apply(null,arguments)}}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"供应商",prop:"supplierCode"}},[t("el-select",{ref:"supplierSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"供应商",clearable:""},model:{value:e.ruleForm.supplierCode,callback:function(t){e.$set(e.ruleForm,"supplierCode",t)},expression:"ruleForm.supplierCode"}},e._l(e.supplierOptions,(function(o){return t("el-option",{key:o.supplierKey,attrs:{label:o.supplierName,value:o.supplierCode},nativeOn:{click:function(t){return e.setSupplierName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"仓库",prop:"inventoryCode"}},[t("el-select",{ref:"inventorySelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"仓库",clearable:""},model:{value:e.ruleForm.inventoryCode,callback:function(t){e.$set(e.ruleForm,"inventoryCode",t)},expression:"ruleForm.inventoryCode"}},e._l(e.inventoryOptions,(function(o){return t("el-option",{key:o.inventoryKey,attrs:{label:o.inventoryName,value:o.inventoryCode,disabled:1!=o.status},nativeOn:{click:function(t){return e.setPosition.apply(null,arguments)}}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"库位",prop:"positionCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"库位",clearable:""},model:{value:e.ruleForm.positionCode,callback:function(t){e.$set(e.ruleForm,"positionCode",t)},expression:"ruleForm.positionCode"}},e._l(e.positionOptions,(function(e){return t("el-option",{key:e.positionCode,attrs:{label:e.positionCode,value:e.positionCode,clearable:"",placeholder:"库位"}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"计划入库数",prop:"inputPlan"}},[t("el-input",{attrs:{clearable:"",placeholder:"计划入库数",min:0,type:"Number"},model:{value:e.ruleForm.inputPlan,callback:function(t){e.$set(e.ruleForm,"inputPlan",t)},expression:"ruleForm.inputPlan"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"入库价格",prop:"inputPrice"}},[t("el-input",{attrs:{clearable:"",placeholder:"入库价格",min:0,type:"Number"},model:{value:e.ruleForm.inputPrice,callback:function(t){e.$set(e.ruleForm,"inputPrice",t)},expression:"ruleForm.inputPrice"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"实际数",prop:"inputActual"}},[t("el-input",{attrs:{clearable:"",placeholder:"实际数",min:0,type:"Number"},model:{value:e.ruleForm.inputActual,callback:function(t){e.$set(e.ruleForm,"inputActual",t)},expression:"ruleForm.inputActual"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"入库类型",prop:"type"}},[t("el-select",{attrs:{size:"small",placeholder:"入库类型",clearable:""},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[t("el-option",{attrs:{label:"采购入库",value:0}}),t("el-option",{attrs:{label:"调货入库",value:1}})],1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"状态",prop:"status"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"状态",clearable:""},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},e._l(e.statusOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店操作员",prop:"shopPeopleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"门店操作员",clearable:""},model:{value:e.ruleForm.shopPeopleCode,callback:function(t){e.$set(e.ruleForm,"shopPeopleCode",t)},expression:"ruleForm.shopPeopleCode"}},e._l(e.userOptions,(function(e){return t("el-option",{key:e.userId,attrs:{label:e.userName,value:e.userCode}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"仓库操作员",prop:"inventoryPeopleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"仓库操作员",clearable:""},model:{value:e.ruleForm.inventoryPeopleCode,callback:function(t){e.$set(e.ruleForm,"inventoryPeopleCode",t)},expression:"ruleForm.inventoryPeopleCode"}},e._l(e.userOptions1,(function(e){return t("el-option",{key:e.userId,attrs:{label:e.userName,value:e.userCode}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"车辆",prop:"vehicleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"车辆",clearable:""},model:{value:e.ruleForm.vehicleCode,callback:function(t){e.$set(e.ruleForm,"vehicleCode",t)},expression:"ruleForm.vehicleCode"}},e._l(e.vehicleOptions,(function(e){return t("el-option",{key:e.vehicleKey,attrs:{label:e.vehicleCode,value:e.vehicleCode}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("span",{staticStyle:{"margin-left":"8%"}},[e._v("起止日期")]),t("el-date-picker",{staticStyle:{width:"310px","margin-left":"10px"},attrs:{type:"daterange",align:"right",size:"large","unlink-panels":"","range-separator":"至","start-placeholder":"预计日期","end-placeholder":"最迟日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.setTime},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1)],1),t("div",{staticClass:"dialog_footer"},[0==e.ifCreate?t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save("ruleForm")}}},[e._v("保存")]):t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.create("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(t){return e.close()}}},[e._v("关闭")])],1)],1)},u=[],p=o("7e1e"),c=o("64dc"),d=o("4ec3"),h=o("c1df"),m=o.n(h),f={name:"guestEdit",data:function(){return{direction:"btt",ifCreate:!1,ruleForm:{inputWarehouseKey:"",shopCode:"",shopName:"",goodsCode:"",goodsName:"",supplierCode:"",supplierName:"",inputPlan:"",inputPrice:"",inputActual:"",inventoryCode:"",positionCode:"",createTime:"",deadlineTime:"",vehicleCode:"",status:"",type:"",shopPeopleCode:"",inventoryPeopleCode:"",isDeleted:"",returnNum:"",returnReason:"",inputShopCode:"",inputShopName:""},statusOptions:[{label:"在单",value:0},{label:"生产",value:1},{label:"在途",value:2},{label:"入库",value:3}],shopOptions:[],goodsOptions:[],positionOptions:[],supplierOptions:[],inventoryOptions:[],userOptions:[],userOptions1:[],vehicleOptions:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,o=new Date;t.setTime(t.getTime()+6048e5),e.$emit("pick",[o,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,o=new Date;t.setTime(t.getTime()+2592e6),e.$emit("pick",[o,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,o=new Date;t.setTime(t.getTime()+7776e6),e.$emit("pick",[o,t])}}]},value2:"",rules:{shopCode:[{required:!0,message:"请选择门店",trigger:"blur"}],goodsCode:[{required:!0,message:"请选择商品",trigger:"blur"}],supplierCode:[{required:!0,message:"请选择供应商",trigger:"blur"}],inputPlan:[{required:!0,message:"请设置计划入库数",trigger:"blur"}],inputPrice:[{required:!0,message:"请设置入库价格",trigger:"blur"}],type:[{required:!0,message:"请设置入库类型",trigger:"blur"}],status:[{required:!0,message:"请设置入库状态",trigger:"blur"}]}}},props:{drawer:{default:!0},rowData:{}},watch:{},created:function(){this.getshoplist(),this.getgoodslist(),this.getSupplierlist(),this.getUserList(),this.getvehicleList(),this.rowData.inputWarehouseKey?(this.ruleForm.inputWarehouseKey=this.rowData.inputWarehouseKey,this.ruleForm.shopCode=this.rowData.shopCode,this.ruleForm.shopName=this.rowData.shopName,this.ruleForm.goodsCode=this.rowData.goodsCode,this.ruleForm.goodsName=this.rowData.goodsName,this.ruleForm.supplierCode=this.rowData.supplierCode,this.ruleForm.supplierName=this.rowData.supplierName,this.ruleForm.inputPlan=this.rowData.inputPlan,this.ruleForm.inputPrice=this.rowData.inputPrice,this.ruleForm.inputActual=this.rowData.inputActual,this.ruleForm.inventoryCode=this.rowData.inventoryCode,this.ruleForm.positionCode=this.rowData.positionCode,this.ruleForm.isDeleted=this.rowData.isDeleted,this.ruleForm.returnNum=this.rowData.returnNum,this.ruleForm.createTime=this.rowData.createTime,this.ruleForm.deadlineTime=this.rowData.deadlineTime,this.ruleForm.vehicleCode=this.rowData.vehicleCode,this.ruleForm.status=this.rowData.status,this.ruleForm.type=this.rowData.type,this.ruleForm.shopPeopleCode=this.rowData.shopPeopleCode,this.ruleForm.inventoryPeopleCode=this.rowData.inventoryPeopleCode,this.ruleForm.returnReason=this.rowData.returnReason,this.ruleForm.inputShopCode=this.rowData.inputShopCode,this.ruleForm.inputShopName=this.rowData.inputShopName,this.value2=[this.rowData.createTime,this.rowData.deadlineTime]):this.ifCreate=!0,this.getShopInventoryList()},methods:{getvehicleList:function(){var e=this;Object(p["yb"])().then((function(t){200==t.data.code?e.vehicleOptions=t.data.data:e.$message.error("获取失败!")}))},getUserList:function(){var e=this;Object(d["a"])({userType:2}).then((function(t){e.userOptions=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)})),Object(d["a"])({userType:1}).then((function(t){e.userOptions1=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)}))},getshoplist:function(){var e=this;Object(p["ob"])().then((function(t){200==t.data.code?e.shopOptions=t.data.data:e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(p["W"])().then((function(t){200==t.data.code?e.goodsOptions=t.data.data:e.$message.error("获取失败!")}))},getSupplierlist:function(){var e=this;Object(p["o"])().then((function(t){200==t.data.code?e.supplierOptions=t.data.data:e.$message.error("获取失败!")}))},getShopInventoryList:function(){var e=this;Object(c["m"])({shopCode:this.ruleForm.shopCode}).then((function(t){200==t.data.code?(e.inventoryOptions=t.data.data,e.getpositionList()):e.$message.error("获取失败!")}))},setShopName:function(){this.getShopInventoryList(this.ruleForm.shopCode),this.ruleForm.shopName=this.$refs.selection.selectedLabel},setSupplierName:function(){this.ruleForm.supplierName=this.$refs.supplierSelect.selectedLabel},setGoodsName:function(){this.ruleForm.goodsName=this.$refs.goodsSelect.selectedLabel},setPosition:function(){var e=this;this.ruleForm.inventoryName=this.$refs.inventorySelect.selectedLabel;var t=this.inventoryOptions.filter((function(t){return t.inventoryCode==e.ruleForm.inventoryCode}));this.getpositionList(t[0].inventoryKey)},getpositionList:function(){var e=this;this.inventoryOptions.forEach((function(t){t.inventoryCode==e.ruleForm.inventoryCode&&Object(p["hb"])({inventoryKey:t.inventoryKey}).then((function(t){200==t.data.code?e.positionOptions=t.data.data:e.$message.error("获取失败!")}))}))},setTime:function(){this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1]},close:function(){this.$parent.drawer=!1},save:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var o={shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,isDeleted:t.ruleForm.isDeleted,returnNum:t.ruleForm.returnNum,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName,inputWarehouseKey:t.ruleForm.inputWarehouseKey};Object(i["f"])(o).then((function(e){if(200==e.data.code)if(3==t.ruleForm.status){var o={inputOutputKey:t.ruleForm.inputWarehouseKey,shopkeeperWarehouseKey:"",type:0,transType:0==t.ruleForm.type?0:6,quantity:t.ruleForm.inputActual,startNum:"",finalNum:"",atTime:m()().format("YYYY-MM-DD HH:mm:ss"),status:t.rowData.status,detailWarehouseKey:"",shopCode:t.ruleForm.shopCode,goodsCode:t.ruleForm.goodsCode};t.rowData.status<3?Object(c["h"])(o).then((function(e){t.$message.success("新增成功!"),t.$parent.success(),t.$forceUpdate()})):Object(c["l"])(o).then((function(e){t.$message.success("新增成功!"),t.$parent.success(),t.$forceUpdate()}))}else t.$message.success("新增成功!"),t.$parent.success(),t.$forceUpdate();else t.$message.error("编辑失败!")}))}))},create:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var o={shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,isDeleted:0,returnNum:t.ruleForm.returnNum,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,inputWarehouseKey:t.ruleForm.inputWarehouseKey};Object(i["a"])(o).then((function(e){if(200==e.data.code)if(3==t.ruleForm.status){var o={inputOutputKey:e.data.data.inputWarehouseKey,shopkeeperWarehouseKey:"",type:0,transType:0==t.ruleForm.type?0:6,quantity:t.ruleForm.inputActual,startNum:"",finalNum:"",atTime:m()().format("YYYY-MM-DD HH:mm:ss"),status:t.rowData.status,detailWarehouseKey:"",shopCode:t.ruleForm.shopCode,goodsCode:t.ruleForm.goodsCode};Object(c["h"])(o).then((function(e){t.$message.success("新增成功!"),t.$parent.success(),t.$forceUpdate()}))}else t.$message.success("新增成功!"),t.$parent.success(),t.$forceUpdate();else t.$message.error("新增失败!")}))}))}}},v=f,y=(o("8829"),o("2877")),b=Object(y["a"])(v,l,u,!1,null,null,null),g=b.exports,C=o("15d4"),F=o("4c5f"),w={name:"slist",data:function(){return{total:null,hidden:!0,drawer:!1,rowData:{},drawer1:!1,rowData1:{},tableData:[],multipleSelection:[],loadings:{table:!0},query:{pageNo:1,pageSize:10},userType:"",shopOptions:[],goodsOptions:[],inventoryOptions:[],supplierOptions:[],statusOptions:[{label:"在单",value:0},{label:"生产",value:1},{label:"在途",value:2}],typeOptions:[{label:"采购入库",value:0},{label:"调货入库",value:1}],deletedOptions:[{label:"否",value:0},{label:"是",value:1}]}},computed:{tableColumn:function(){return[{prop:"shopCode",label:"门店编码"},{prop:"shopName",label:"门店名称"},{prop:"goodsCode",label:"商品编码"},{prop:"goodsName",label:"商品名称"},{prop:"supplierCode",label:"供应商编码"},{prop:"supplierName",label:"供应商名称"},{prop:"inventoryCode",label:"仓库编码"},{prop:"positionCode",label:"货位编码"},{prop:"vehicleCode",label:"车辆编码"},{slots:{name:"column-status"},label:"状态"},{slots:{name:"column-type"},label:"入库类型"},{prop:"shopPeopleCode",label:"门店操作员"},{prop:"inventoryPeopleCode",label:"仓库操作员"},{prop:"inputPlan",label:"计划数"},{prop:"inputPrice",label:"入库价格"},{prop:"inputActual",label:"实际数"},{prop:"returnNum",label:"退货数"},{prop:"returnReason",label:"退货原因"},{slots:{name:"column-createTime"},label:"预计日期"},{slots:{name:"column-deadlineTime"},label:"最迟日期"},{slots:{name:"column-todo"},label:"操作",fixed:"right",width:250}]},searchConfig:function(){return[{label:"请选择",placeholder:"请选择门店",field:"shopCode",value:"",type:"select",options:this.shopOptions},{label:"请选择",placeholder:"请选择商品",field:"goodsCode",value:"",type:"select",options:this.goodsOptions},{label:"请选择",placeholder:"请选择仓库",field:"inventoryCode",value:"",type:"select",options:this.inventoryOptions},{label:"请选择",placeholder:"请选择供应商",field:"supplierCode",value:"",type:"select",options:this.supplierOptions},{label:"请选择",placeholder:"请选择状态",field:"status",value:"",type:"select",options:this.statusOptions},{label:"请选择",placeholder:"请选择类型",field:"type",value:"",type:"select",options:this.typeOptions}]}},props:{},components:{TableList:a["a"],billsEdit:g,enterWarehouseReturn:F["a"],reloadAndsearch:n["a"]},created:function(){this.getshoplist(),this.getgoodslist(),this.getSupplierlist(),this.getinventorylist();var e=JSON.parse(localStorage.getItem("userInfo"));this.userType=e.userType},methods:{getSupplierlist:function(){var e=this;Object(p["o"])().then((function(t){200==t.data.code?(e.supplierOptions=[],t.data.data.forEach((function(t){e.supplierOptions.push({label:t.supplierName,value:t.supplierCode})}))):e.$message.error("获取失败!")}))},unique:function(e){var t=new Map;return e.filter((function(e){return!t.has(e.shopKey)&&t.set(e.shopKey,1)}))},getinventorylist:function(){var e=this;Object(c["d"])().then((function(t){if(200==t.data.code){e.inventoryOptions=[];var o=e.unique(t.data.data);o.forEach((function(t){e.inventoryOptions.push({label:t.shopName,value:t.shopCode})}))}else e.$message.error("获取失败!")}))},getshoplist:function(){var e=this;Object(p["ob"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.shopOptions.push({label:t.shopName,value:t.shopCode})})):e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(p["W"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.goodsOptions.push({label:t.goodsName,value:t.goodsCode})})):e.$message.error("获取失败!")}))},getTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,o&&(this.query.pageSize=o),this.loadings.table=!0;var r={page:this.query.pageNo,size:this.query.pageSize,shopCode:"",goodsCode:"",supplierCode:"",inventoryCode:"",status:"",isDeleted:0,type:""};Object(i["e"])(r).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},search:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,o&&(this.query.pageSize=o);var r=this.$refs.search.search;Object(i["e"])({page:this.query.pageNo,size:this.query.pageSize,shopCode:r.shopCode,goodsCode:r.goodsCode,supplierCode:r.supplierCode,inventoryCode:r.inventoryCode,status:r.status,type:r.type,isDeleted:0}).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},editRow:function(e){this.rowData=e,this.drawer=!0},editRow1:function(e){var t=this;Object(C["b"])({checkType:0,inputOutputKey:e.inputWarehouseKey}).then((function(o){200==o.data.code?(t.rowData1=o.data.data||e,t.drawer1=!0):t.$message.error("获取失败!")}))},deleteRow:function(e){var t=this;this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["b"])({inputWarehouseKey:e.inputWarehouseKey,isDeleted:1}).then((function(e){200==e.data.code?(t.$message.success("删除成功!"),t.getTableData(),t.$forceUpdate()):t.$message.error("删除失败!")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},success:function(){this.drawer=!1,this.rowData={},this.drawer1=!1,this.rowData1={},this.getTableData()},reload:function(){this.getTableData()},add:function(){this.rowData={},this.drawer=!0},handleSelectionDelete:function(e){this.multipleSelection=e},handleDeleteList:function(){var e=this;if(this.multipleSelection.length>0){var t=[];this.multipleSelection.forEach((function(e){t.push({inputWarehouseKey:e.inputWarehouseKey,isDeleted:1})})),console.log(t),this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["c"])(t).then((function(){e.getTableData(),e.$message({type:"success",message:"删除成功!"})})).catch((function(e){console.log(e)}))})).catch((function(){e.$message({type:"info",message:"已取消删除"}),e.multipleSelection=[]}))}else this.$message({type:"error",message:"至少选择一项"})}}},O=w,D=(o("3982"),Object(y["a"])(O,r,s,!1,null,"7cde1431",null));t["default"]=D.exports},d86b:function(e,t,o){var r=o("d039");e.exports=r((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},f183:function(e,t,o){var r=o("23e7"),s=o("e330"),i=o("d012"),a=o("861d"),n=o("1a2d"),l=o("9bf2").f,u=o("241c"),p=o("057f"),c=o("4fad"),d=o("90e3"),h=o("bb2f"),m=!1,f=d("meta"),v=0,y=function(e){l(e,f,{value:{objectID:"O"+v++,weakData:{}}})},b=function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!n(e,f)){if(!c(e))return"F";if(!t)return"E";y(e)}return e[f].objectID},g=function(e,t){if(!n(e,f)){if(!c(e))return!0;if(!t)return!1;y(e)}return e[f].weakData},C=function(e){return h&&m&&c(e)&&!n(e,f)&&y(e),e},F=function(){w.enable=function(){},m=!0;var e=u.f,t=s([].splice),o={};o[f]=1,e(o).length&&(u.f=function(o){for(var r=e(o),s=0,i=r.length;s<i;s++)if(r[s]===f){t(r,s,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:p.f}))},w=e.exports={enable:F,fastKey:b,getWeakData:g,onFreeze:C};i[f]=!0}}]);
//# sourceMappingURL=chunk-8011da5e.3f79e025.js.map