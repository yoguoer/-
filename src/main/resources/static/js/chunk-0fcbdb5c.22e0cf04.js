(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fcbdb5c"],{"02a5":function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c");var o=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{background:"#fff",padding:"10px"}},[t("reloadAndsearch",{ref:"search",attrs:{config:e.searchConfig,hidden:e.hidden,hidden1:e.hidden},on:{search:e.search}}),t("div",{staticClass:"list-model"},[t("TableList",{attrs:{pageMethod:e.getTableData,searchMethod:e.getTableData,"table-data":e.tableData,multiCheck:e.multiCheck,tableColumn:e.tableColumn,query:e.query,total:e.total,loading:e.loadings.table},on:{"update:query":function(t){e.query=t}},scopedSlots:e._u([{key:"column-status",fn:function(r){return[t("span",[e._v(e._s("0"==r.row.checkStatus?"未审批":"1"==r.row.checkStatus?"同意":"2"==r.row.checkStatus?"驳回":"-"))])]}},{key:"column-type",fn:function(r){return[0==r.row.type?t("span",[e._v("采购入库")]):e._e(),1==r.row.type?t("span",[e._v("调货入库")]):e._e()]}},{key:"column-happenTime",fn:function(r){return[r.row.happenTime?t("span",[e._v(e._s(e._f("datefmt")(r.row.happenTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-checkTime",fn:function(r){return[r.row.checkTime?t("span",[e._v(e._s(e._f("datefmt")(r.row.checkTime,"YYYY-MM-DD HH:mm:ss")))]):e._e()]}},{key:"column-todo",fn:function(r){return[t("el-button",{staticStyle:{visibility:"hidden"},attrs:{type:"text"}},[e._v("空")]),1!=r.row.checkStatus?t("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.editRow(r.row)}}},[e._v("编辑")]):e._e(),t("el-button",{staticClass:"prohibitclick",attrs:{type:"text",size:"small",icon:"el-icon-document"},on:{click:function(t){return e.deleteRow(r.row)}}},[e._v("删除")])]}}])})],1),e.drawer?t("PreturnOrderEdit",{attrs:{drawer:e.drawer,rowData:e.rowData},on:{close:function(t){e.drawer=!1},success:function(t){return e.success()}}}):e._e()],1)},n=[],a=r("ade3"),i=(r("d3b7"),r("159b"),r("14d9"),r("4ec9"),r("3ca3"),r("ddb0"),r("4de4"),r("15d4")),s=r("c367"),l=r("ffd4"),u=(r("a4d3"),r("e01a"),function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{size:"30%",title:e.ifCreate?"新增":"编辑",visible:e.drawer,direction:e.direction,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,wrapperClosable:!1,"append-to-body":!0,width:"1200px"},on:{"update:visible":function(t){e.drawer=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店",prop:"shopCode"}},[t("el-select",{ref:"selection",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"门店",clearable:"",disabled:""},model:{value:e.ruleForm.shopCode,callback:function(t){e.$set(e.ruleForm,"shopCode",t)},expression:"ruleForm.shopCode"}},e._l(e.shopOptions,(function(r){return t("el-option",{key:r.shopKey,attrs:{label:r.shopName,value:r.shopCode},nativeOn:{click:function(t){return e.setShopName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"商品",prop:"goodsCode"}},[t("el-select",{ref:"goodsSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"商品",clearable:"",disabled:""},model:{value:e.ruleForm.goodsCode,callback:function(t){e.$set(e.ruleForm,"goodsCode",t)},expression:"ruleForm.goodsCode"}},e._l(e.goodsOptions,(function(r){return t("el-option",{key:r.goodsCode,attrs:{label:r.goodsName,value:r.goodsCode},nativeOn:{click:function(t){return e.setGoodsName.apply(null,arguments)}}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"供应商",prop:"supplierCode"}},[t("el-select",{ref:"supplierSelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"供应商",clearable:"",disabled:""},model:{value:e.ruleForm.supplierCode,callback:function(t){e.$set(e.ruleForm,"supplierCode",t)},expression:"ruleForm.supplierCode"}},e._l(e.supplierOptions,(function(r){return t("el-option",{key:r.supplierKey,attrs:{label:r.supplierName,value:r.supplierCode},nativeOn:{click:function(t){return e.setSupplierName.apply(null,arguments)}}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"仓库",prop:"inventoryCode"}},[t("el-select",{ref:"inventorySelect",staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"仓库",clearable:"",disabled:""},model:{value:e.ruleForm.inventoryCode,callback:function(t){e.$set(e.ruleForm,"inventoryCode",t)},expression:"ruleForm.inventoryCode"}},e._l(e.inventoryOptions,(function(r){return t("el-option",{key:r.inventoryKey,attrs:{label:r.inventoryName,value:r.inventoryCode,disabled:1!=r.status},nativeOn:{click:function(t){return e.setPosition.apply(null,arguments)}}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"库位",prop:"positionCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"库位",clearable:"",disabled:""},model:{value:e.ruleForm.positionCode,callback:function(t){e.$set(e.ruleForm,"positionCode",t)},expression:"ruleForm.positionCode"}},e._l(e.positionOptions,(function(e){return t("el-option",{key:e.positionCode,attrs:{label:e.positionCode,value:e.positionCode,clearable:"",placeholder:"库位"}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"计划数",prop:"inputPlan"}},[t("el-input",{attrs:{clearable:"",placeholder:"计划数",min:0,disabled:"",type:"Number"},model:{value:e.ruleForm.inputPlan,callback:function(t){e.$set(e.ruleForm,"inputPlan",t)},expression:"ruleForm.inputPlan"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"入库价格",prop:"inputPrice"}},[t("el-input",{attrs:{clearable:"",placeholder:"入库价格",min:0,disabled:"",type:"Number"},model:{value:e.ruleForm.inputPrice,callback:function(t){e.$set(e.ruleForm,"inputPrice",t)},expression:"ruleForm.inputPrice"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"实际数",prop:"inputActual"}},[t("el-input",{attrs:{clearable:"",placeholder:"实际数",min:0,disabled:"",type:"Number"},model:{value:e.ruleForm.inputActual,callback:function(t){e.$set(e.ruleForm,"inputActual",t)},expression:"ruleForm.inputActual"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"入库类型",prop:"type"}},[t("el-select",{attrs:{size:"small",placeholder:"入库类型",clearable:"",disabled:""},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[t("el-option",{attrs:{label:"采购入库",value:0}}),t("el-option",{attrs:{label:"调货入库",value:1}})],1)],1)],1),t("el-col",{attrs:{span:10}},[t("span",{staticStyle:{"margin-left":"8%"}},[e._v("起止日期")]),t("el-date-picker",{staticStyle:{width:"310px","margin-left":"10px"},attrs:{type:"daterange",align:"right",disabled:"",size:"large","unlink-panels":"","range-separator":"至","start-placeholder":"预计日期","end-placeholder":"最迟日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},nativeOn:{click:function(t){return e.setTime.apply(null,arguments)}},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"门店操作员",prop:"shopPeopleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"门店操作员",clearable:"",disabled:""},model:{value:e.ruleForm.shopPeopleCode,callback:function(t){e.$set(e.ruleForm,"shopPeopleCode",t)},expression:"ruleForm.shopPeopleCode"}},e._l(e.userOptions,(function(e){return t("el-option",{key:e.userId,attrs:{label:e.userName,value:e.userCode}})})),1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"仓库操作员",prop:"inventoryPeopleCode"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{size:"middle",placeholder:"仓库操作员",disabled:"",clearable:""},model:{value:e.ruleForm.inventoryPeopleCode,callback:function(t){e.$set(e.ruleForm,"inventoryPeopleCode",t)},expression:"ruleForm.inventoryPeopleCode"}},e._l(e.userOptions1,(function(e){return t("el-option",{key:e.userId,attrs:{label:e.userName,value:e.userCode}})})),1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审批结果",prop:"checkStatus"}},[t("el-select",{attrs:{size:"small",placeholder:"审批结果",clearable:"",disabled:""},model:{value:e.ruleForm.checkStatus,callback:function(t){e.$set(e.ruleForm,"checkStatus",t)},expression:"ruleForm.checkStatus"}},[t("el-option",{attrs:{label:"未审批",value:0,disabled:""}},[t("span",{staticStyle:{float:"left"}},[t("i",{staticClass:"el-icon-minus"}),e._v(" 未审批 ")])]),t("el-option",{attrs:{label:"同意",value:1}},[t("span",{staticStyle:{float:"left"}},[t("i",{staticClass:"el-icon-check"}),e._v(" 同意 ")])]),t("el-option",{attrs:{label:"驳回",value:2}},[t("span",{staticStyle:{float:"left"}},[t("i",{staticClass:"el-icon-close"}),e._v(" 驳回 ")])])],1)],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审批意见",prop:"description"}},[t("el-input",{attrs:{clearable:"",placeholder:"审批意见",type:"textarea",disabled:""},model:{value:e.ruleForm.description,callback:function(t){e.$set(e.ruleForm,"description",t)},expression:"ruleForm.description"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"申请退货数",prop:"checkNum",type:"Number"}},[t("el-input",{attrs:{clearable:"",placeholder:"申请退货数",min:0},model:{value:e.ruleForm.checkNum,callback:function(t){e.$set(e.ruleForm,"checkNum",t)},expression:"ruleForm.checkNum"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"退货原因",prop:"returnReason"}},[t("el-input",{attrs:{clearable:"",placeholder:"退货原因",type:"textarea"},model:{value:e.ruleForm.returnReason,callback:function(t){e.$set(e.ruleForm,"returnReason",t)},expression:"ruleForm.returnReason"}})],1)],1)],1)],1),t("div",{staticClass:"dialog_footer"},[0==e.ifCreate?t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save("ruleForm")}}},[e._v("提交")]):t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.create("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(t){return e.close()}}},[e._v("取消")])],1)],1)}),c=[],d=r("7e1e"),p=r("64dc"),h=r("4ec3"),m=r("c1df"),f=r.n(m),b={name:"guestEdit",data:function(){return{direction:"btt",ifCreate:!1,ruleForm:{returnCheckKey:"",inputWarehouseKey:"",shopCode:"",shopName:"",goodsCode:"",goodsName:"",supplierCode:"",supplierName:"",inputPlan:"",inputPrice:"",inputActual:"",inventoryCode:"",positionCode:"",createTime:"",deadlineTime:"",vehicleCode:"",status:"",type:"",checkNum:"",checkStatus:"",description:"",shopPeopleCode:"",inventoryPeopleCode:"",isDeleted:"",returnReason:"",returnNum:"",checkType:"",inputShopCode:"",inputShopName:""},shopOptions:[],goodsOptions:[],positionOptions:[],supplierOptions:[],inventoryOptions:[],userOptions:[],userOptions1:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;t.setTime(t.getTime()+7776e6),e.$emit("pick",[r,t])}}]},value2:"",rules:{shopCode:[{required:!0,message:"请选择门店",trigger:"blur"}],goodsCode:[{required:!0,message:"请选择商品",trigger:"blur"}],supplierCode:[{required:!0,message:"请选择供应商",trigger:"blur"}],inventoryCode:[{required:!0,message:"请选择仓库",trigger:"blur"}],inputPlan:[{required:!0,message:"请设置计划数",trigger:"blur"}],inputPrice:[{required:!0,message:"请设置入库价格",trigger:"blur"}],type:[{required:!0,message:"请设置入库类型",trigger:"blur"}],checkNum:[{required:!0,message:"请设置退货数",trigger:"blur"}],returnReason:[{required:!0,message:"请设置退货原因",trigger:"blur"}]}}},props:{drawer:{default:!0},rowData:{}},watch:{},created:function(){this.getshoplist(),this.getgoodslist(),this.getSupplierlist(),this.getUserList(),this.rowData.returnCheckKey?(this.ruleForm.inputWarehouseKey=this.rowData.inputWarehouseKey,this.ruleForm.returnCheckKey=this.rowData.returnCheckKey,this.ruleForm.shopCode=this.rowData.shopCode,this.ruleForm.shopName=this.rowData.shopName,this.ruleForm.goodsCode=this.rowData.goodsCode,this.ruleForm.goodsName=this.rowData.goodsName,this.ruleForm.supplierCode=this.rowData.supplierCode,this.ruleForm.supplierName=this.rowData.supplierName,this.ruleForm.inputPlan=this.rowData.inputPlan,this.ruleForm.inputPrice=this.rowData.inputPrice,this.ruleForm.inputActual=this.rowData.inputActual,this.ruleForm.inventoryCode=this.rowData.inventoryCode,this.ruleForm.positionCode=this.rowData.positionCode,this.ruleForm.createTime=this.rowData.createTime,this.ruleForm.deadlineTime=this.rowData.deadlineTime,this.ruleForm.vehicleCode=this.rowData.vehicleCode,this.ruleForm.status=this.rowData.status,this.ruleForm.type=this.rowData.type,this.ruleForm.shopPeopleCode=this.rowData.shopPeopleCode,this.ruleForm.isDeleted=this.rowData.isDeleted,this.ruleForm.inventoryPeopleCode=this.rowData.inventoryPeopleCode,this.ruleForm.returnReason=this.rowData.returnReason,this.ruleForm.checkNum=this.rowData.checkNum,this.ruleForm.checkStatus=this.rowData.checkStatus,this.ruleForm.description=this.rowData.description,this.ruleForm.returnNum=this.rowData.returnNum,this.ruleForm.checkType=this.rowData.checkType,this.ruleForm.inputShopCode=this.rowData.inputShopCode,this.ruleForm.inputShopName=this.rowData.inputShopName,this.value2=[this.rowData.createTime,this.rowData.deadlineTime]):this.ifCreate=!0,this.getInventoryByshopCode()},methods:{getUserList:function(){var e=this;Object(h["a"])({userType:2}).then((function(t){e.userOptions=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)})),Object(h["a"])({userType:1}).then((function(t){e.userOptions1=t.data.data,e.$forceUpdate()})).catch((function(e){console.log(e)}))},getshoplist:function(){var e=this;Object(d["ob"])().then((function(t){200==t.data.code?e.shopOptions=t.data.data:e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(d["W"])().then((function(t){200==t.data.code?e.goodsOptions=t.data.data:e.$message.error("获取失败!")}))},getSupplierlist:function(){var e=this;Object(d["o"])().then((function(t){200==t.data.code?e.supplierOptions=t.data.data:e.$message.error("获取失败!")}))},getInventoryByshopCode:function(){var e=this;Object(p["m"])({shopCode:this.ruleForm.shopCode}).then((function(t){200==t.data.code?(e.inventoryOptions=t.data.data,e.getpositionList()):e.$message.error("获取失败!")}))},setShopName:function(){this.getInventoryByshopCode(),this.ruleForm.shopName=this.$refs.selection.selectedLabel},setSupplierName:function(){this.ruleForm.supplierName=this.$refs.supplierSelect.selectedLabel},setGoodsName:function(){this.ruleForm.goodsName=this.$refs.goodsSelect.selectedLabel},getpositionList:function(){var e=this;this.inventoryOptions.forEach((function(t){t.inventoryCode==e.ruleForm.inventoryCode&&Object(d["hb"])({inventoryKey:t.inventoryKey}).then((function(t){200==t.data.code?e.positionOptions=t.data.data:e.$message.error("获取失败!")}))}))},setTime:function(){this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1]},close:function(){this.$parent.drawer=!1,this.$emit("close")},save:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r={returnCheckKey:t.ruleForm.returnCheckKey,description:t.ruleForm.description,checkType:t.ruleForm.checkType,inputOutputKey:t.ruleForm.inputWarehouseKey,checkStatus:0,happenTime:f()().format("YYYY-MM-DD HH:mm:ss"),checkTime:t.ruleForm.checkTime,checkNum:t.ruleForm.checkNum,inputWarehouse:{inputWarehouseKey:t.ruleForm.inputWarehouseKey,shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,isDeleted:t.ruleForm.isDeleted,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,returnNum:t.ruleForm.returnNum,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName}};Object(i["f"])(r).then((function(e){200==e.data.code?(t.$message.success("编辑成功!"),t.$parent.success(),t.$forceUpdate()):t.$message.error("编辑失败!")}))}))},create:function(e){var t=this;this.ruleForm.createTime=this.value2[0],this.ruleForm.deadlineTime=this.value2[1],this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r={returnCheckKey:t.ruleForm.returnCheckKey,description:t.ruleForm.description,checkType:t.ruleForm.checkType,inputOutputKey:t.ruleForm.inputWarehouseKey,checkStatus:0,happenTime:f()().format("YYYY-MM-DD HH:mm:ss"),checkTime:t.ruleForm.checkTime,checkNum:t.ruleForm.checkNum,inputWarehouse:{inputWarehouseKey:t.ruleForm.inputWarehouseKey,shopCode:t.ruleForm.shopCode,shopName:t.ruleForm.shopName,goodsCode:t.ruleForm.goodsCode,goodsName:t.ruleForm.goodsName,supplierCode:t.ruleForm.supplierCode,supplierName:t.ruleForm.supplierName,inputPlan:t.ruleForm.inputPlan,inputPrice:t.ruleForm.inputPrice,inputActual:t.ruleForm.inputActual,inventoryCode:t.ruleForm.inventoryCode,positionCode:t.ruleForm.positionCode,createTime:t.ruleForm.createTime,deadlineTime:t.ruleForm.deadlineTime,isDeleted:t.ruleForm.isDeleted,vehicleCode:t.ruleForm.vehicleCode,status:t.ruleForm.status,type:t.ruleForm.type,shopPeopleCode:t.ruleForm.shopPeopleCode,inventoryPeopleCode:t.ruleForm.inventoryPeopleCode,returnReason:t.ruleForm.returnReason,returnNum:t.ruleForm.returnNum,inputShopCode:t.ruleForm.inputShopCode,inputShopName:t.ruleForm.inputShopName}};Object(i["a"])(r).then((function(e){200==e.data.code?(t.$message.success("编辑成功!"),t.$parent.success(),t.$forceUpdate()):t.$message.error("编辑失败!")}))}))}}},v=b,y=(r("43e6"),r("2877")),g=Object(y["a"])(v,u,c,!1,null,null,null),C=g.exports,F={name:"slist",data:function(){return{total:null,drawer:!1,rowData:{},tableData:[],multipleSelection:[],loadings:{table:!0},query:{pageNo:1,pageSize:10},userType:"",hidden:!0,multiCheck:!1,shopOptions:[],goodsOptions:[],inventoryOptions:[],supplierOptions:[],checkOptions:[{label:"未审批",value:0},{label:"同意",value:1},{label:"驳回",value:2}]}},computed:{tableColumn:function(){return[{prop:"shopCode",label:"门店编码"},{prop:"shopName",label:"门店名称"},{prop:"goodsCode",label:"商品编码"},{prop:"goodsName",label:"商品名称"},{prop:"supplierCode",label:"供应商编码"},{prop:"supplierName",label:"供应商名称"},{prop:"inputPlan",label:"计划数"},{prop:"inputPrice",label:"入库价格"},{prop:"inputActual",label:"实际数"},{prop:"inventoryCode",label:"仓库编码"},{prop:"positionCode",label:"货位编码"},{prop:"vehicleCode",label:"车辆编码"},{prop:"checkNum",label:"退货数"},{prop:"returnReason",label:"退货原因"},{slots:{name:"column-happenTime"},label:"申请时间"},{slots:{name:"column-status"},label:"审批状态"},{prop:"description",label:"审批意见"},{slots:{name:"column-checkTime"},label:"审批时间"},{prop:"shopPeopleCode",label:"门店操作员"},{prop:"inventoryPeopleCode",label:"仓库操作员"},{slots:{name:"column-todo"},label:"操作",fixed:"right",width:200}]},searchConfig:function(){return[{label:"请选择",placeholder:"请选择门店",field:"shopCode",value:"",type:"select",options:this.shopOptions},{label:"请选择",placeholder:"请选择商品",field:"goodsCode",value:"",type:"select",options:this.goodsOptions},{label:"请选择",placeholder:"请选择仓库",field:"inventoryCode",value:"",type:"select",options:this.inventoryOptions},{label:"请选择",placeholder:"请选择供应商",field:"supplierCode",value:"",type:"select",options:this.supplierOptions},{label:"请选择",placeholder:"请选择审批状态",field:"checkStatus",value:"",type:"select",options:this.checkOptions}]}},props:{},components:{TableList:s["a"],PreturnOrderEdit:C,reloadAndsearch:l["a"]},created:function(){this.getshoplist(),this.getgoodslist(),this.getSupplierlist(),this.getShopInventoryList();var e=JSON.parse(localStorage.getItem("userInfo"));this.userType=e.userType},methods:{getSupplierlist:function(){var e=this;Object(d["o"])().then((function(t){200==t.data.code?(e.supplierOptions=[],t.data.data.forEach((function(t){e.supplierOptions.push({label:t.supplierName,value:t.supplierCode})}))):e.$message.error("获取失败!")}))},unique:function(e){var t=new Map;return e.filter((function(e){return!t.has(e.shopKey)&&t.set(e.shopKey,1)}))},getShopInventoryList:function(){var e=this;Object(p["d"])().then((function(t){200==t.data.code?(e.inventoryOptions=[],t.data.data.forEach((function(t){e.inventoryOptions.push({label:t.inventoryName,value:t.inventoryCode})}))):e.$message.error("获取失败!")}))},getshoplist:function(){var e=this;Object(d["ob"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.shopOptions.push({label:t.shopName,value:t.shopCode})})):e.$message.error("获取失败!")}))},getgoodslist:function(){var e=this;Object(d["W"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.goodsOptions.push({label:t.goodsName,value:t.goodsCode})})):e.$message.error("获取失败!")}))},getTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,r&&(this.query.pageSize=r),this.loadings.table=!0;var o=Object(a["a"])({page:this.query.pageNo,size:this.query.pageSize,shopCode:"",goodsCode:"",supplierCode:"",inventoryCode:"",checkStatus:"",checkType:0},"checkStatus","");Object(i["e"])(o).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},search:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,r&&(this.query.pageSize=r);var o=this.$refs.search.search;Object(i["e"])({page:this.query.pageNo,size:this.query.pageSize,shopCode:o.shopCode,goodsCode:o.goodsCode,supplierCode:o.supplierCode,inventoryCode:o.inventoryCode,checkStatus:o.checkStatus,checkType:0}).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},editRow:function(e){this.rowData=e,this.drawer=!0},deleteRow:function(e){var t=this;this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["c"])({returnCheckKey:e.returnCheckKey}).then((function(e){200==e.data.code?(t.$message.success("删除成功!"),t.getTableData(),t.$forceUpdate()):t.$message.error("删除失败!")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},success:function(){this.drawer=!1,this.rowData={},this.getTableData()},reload:function(){this.getTableData()},add:function(){this.rowData={},this.drawer=!0},handleSelectionDelete:function(e){this.multipleSelection=e},handleDeleteList:function(){var e=this;if(this.multipleSelection.length>0){var t=[];this.multipleSelection.forEach((function(e){t.push({returnCheckKey:e.returnCheckKey})})),console.log(t),this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["d"])(t).then((function(){e.getTableData(),e.$message({type:"success",message:"删除成功!"})})).catch((function(e){console.log(e)}))})).catch((function(){e.$message({type:"info",message:"已取消删除"}),e.multipleSelection=[]}))}else this.$message({type:"error",message:"至少选择一项"})}}},k=F,O=(r("7948"),Object(y["a"])(k,o,n,!1,null,"66810e28",null));t["default"]=O.exports},"15d4":function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return c})),r.d(t,"j",(function(){return d})),r.d(t,"g",(function(){return p})),r.d(t,"k",(function(){return h})),r.d(t,"h",(function(){return m})),r.d(t,"i",(function(){return f}));var o=r("b775"),n=(r("4328"),"/api");function a(e){return Object(o["a"])({url:n+"/returnCheck/list-page",method:"get",params:e})}function i(e){return Object(o["a"])({url:n+"/returnCheck/add",method:"POST",data:e})}function s(e){return Object(o["a"])({url:n+"/returnCheck/update",method:"POST",data:e})}function l(e){return Object(o["a"])({url:n+"/returnCheck/delete",method:"POST",data:e})}function u(e){return Object(o["a"])({url:n+"/returnCheck/delete-list",method:"POST",data:e})}function c(e){return Object(o["a"])({url:n+"/returnCheck/getById",method:"get",params:e})}function d(e){return Object(o["a"])({url:n+"/transferCheck/list-page",method:"get",params:e})}function p(e){return Object(o["a"])({url:n+"/transferCheck/add",method:"POST",data:e})}function h(e){return Object(o["a"])({url:n+"/transferCheck/update",method:"POST",data:e})}function m(e){return Object(o["a"])({url:n+"/transferCheck/delete",method:"POST",data:e})}function f(e){return Object(o["a"])({url:n+"/transferCheck/delete-list",method:"POST",data:e})}},"43e6":function(e,t,r){"use strict";r("afc5")},"4ec3":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return d})),r.d(t,"f",(function(){return p}));r("751a");var o=r("4328"),n=r.n(o),a=r("b775"),i="/api";function s(e){return Object(a["a"])({url:i+"/user/list",method:"get",params:n.a.parse(e)})}function l(e){return Object(a["a"])({url:i+"/user/selectUserPage",method:"get",params:n.a.parse(e)})}function u(e){return Object(a["a"])({url:i+"/user/createUser",method:"post",data:n.a.parse(e)})}function c(e){return Object(a["a"])({url:i+"/user/deleteUserById",method:"get",params:n.a.parse(e)})}function d(e){return Object(a["a"])({url:i+"/user/deleteUserByIdList",method:"get",params:n.a.parse(e)})}function p(e){return Object(a["a"])({url:i+"/user/updateUserById",method:"post",data:n.a.parse(e)})}},"4ec9":function(e,t,r){r("6f48")},"4fad":function(e,t,r){var o=r("d039"),n=r("861d"),a=r("c6b6"),i=r("d86b"),s=Object.isExtensible,l=o((function(){s(1)}));e.exports=l||i?function(e){return!!n(e)&&((!i||"ArrayBuffer"!=a(e))&&(!s||s(e)))}:s},"64dc":function(e,t,r){"use strict";r.d(t,"x",(function(){return a})),r.d(t,"y",(function(){return i})),r.d(t,"u",(function(){return s})),r.d(t,"g",(function(){return l})),r.d(t,"v",(function(){return u})),r.d(t,"w",(function(){return c})),r.d(t,"m",(function(){return d})),r.d(t,"e",(function(){return p})),r.d(t,"d",(function(){return h})),r.d(t,"a",(function(){return m})),r.d(t,"f",(function(){return f})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return v})),r.d(t,"o",(function(){return y})),r.d(t,"s",(function(){return g})),r.d(t,"r",(function(){return C})),r.d(t,"n",(function(){return F})),r.d(t,"t",(function(){return k})),r.d(t,"p",(function(){return O})),r.d(t,"q",(function(){return S})),r.d(t,"k",(function(){return w})),r.d(t,"h",(function(){return T})),r.d(t,"l",(function(){return N})),r.d(t,"i",(function(){return P})),r.d(t,"j",(function(){return D}));var o=r("b775"),n=(r("4328"),"/api");function a(e){return Object(o["a"])({url:n+"/SupplierInventory/list",method:"get",params:e})}function i(e){return Object(o["a"])({url:n+"/SupplierInventory/list-page",method:"get",params:e})}function s(e){return Object(o["a"])({url:n+"/SupplierInventory/add",method:"POST",data:e})}function l(e){return Object(o["a"])({url:n+"/SupplierInventory/update",method:"POST",data:e})}function u(e){return Object(o["a"])({url:n+"/SupplierInventory/delete",method:"POST",data:e})}function c(e){return Object(o["a"])({url:n+"/SupplierInventory/delete-list",method:"POST",data:e})}function d(e){return Object(o["a"])({url:n+"/ShopInventory/getByshopCode",method:"get",params:e})}function p(e){return Object(o["a"])({url:n+"/ShopInventory/list-page",method:"get",params:e})}function h(e){return Object(o["a"])({url:n+"/ShopInventory/list",method:"get",params:e})}function m(e){return Object(o["a"])({url:n+"/ShopInventory/add",method:"POST",data:e})}function f(e){return Object(o["a"])({url:n+"/ShopInventory/update",method:"POST",data:e})}function b(e){return Object(o["a"])({url:n+"/ShopInventory/delete",method:"POST",data:e})}function v(e){return Object(o["a"])({url:n+"/ShopInventory/delete-list",method:"POST",data:e})}function y(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/getByShopCode",method:"get",params:e})}function g(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/list-page",method:"get",params:e})}function C(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/list",method:"get",params:e})}function F(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/add",method:"POST",data:e})}function k(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/update",method:"POST",data:e})}function O(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/delete",method:"POST",data:e})}function S(e){return Object(o["a"])({url:n+"/shopkeeperWarehouse/delete-list",method:"POST",data:e})}function w(e){return Object(o["a"])({url:n+"/detailWarehouse/list-page",method:"get",params:e})}function T(e){return Object(o["a"])({url:n+"/detailWarehouse/add",method:"POST",data:e})}function N(e){return Object(o["a"])({url:n+"/detailWarehouse/update",method:"POST",data:e})}function P(e){return Object(o["a"])({url:n+"/detailWarehouse/delete",method:"POST",data:e})}function D(e){return Object(o["a"])({url:n+"/detailWarehouse/delete-list",method:"POST",data:e})}},6566:function(e,t,r){"use strict";var o=r("9bf2").f,n=r("7c73"),a=r("6964"),i=r("0366"),s=r("19aa"),l=r("7234"),u=r("2266"),c=r("c6d2"),d=r("4754"),p=r("2626"),h=r("83ab"),m=r("f183").fastKey,f=r("69f3"),b=f.set,v=f.getterFor;e.exports={getConstructor:function(e,t,r,c){var d=e((function(e,o){s(e,p),b(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),h||(e.size=0),l(o)||u(o,e[c],{that:e,AS_ENTRIES:r})})),p=d.prototype,f=v(t),y=function(e,t,r){var o,n,a=f(e),i=g(e,t);return i?i.value=r:(a.last=i={index:n=m(t,!0),key:t,value:r,previous:o=a.last,next:void 0,removed:!1},a.first||(a.first=i),o&&(o.next=i),h?a.size++:e.size++,"F"!==n&&(a.index[n]=i)),e},g=function(e,t){var r,o=f(e),n=m(t);if("F"!==n)return o.index[n];for(r=o.first;r;r=r.next)if(r.key==t)return r};return a(p,{clear:function(){var e=this,t=f(e),r=t.index,o=t.first;while(o)o.removed=!0,o.previous&&(o.previous=o.previous.next=void 0),delete r[o.index],o=o.next;t.first=t.last=void 0,h?t.size=0:e.size=0},delete:function(e){var t=this,r=f(t),o=g(t,e);if(o){var n=o.next,a=o.previous;delete r.index[o.index],o.removed=!0,a&&(a.next=n),n&&(n.previous=a),r.first==o&&(r.first=n),r.last==o&&(r.last=a),h?r.size--:t.size--}return!!o},forEach:function(e){var t,r=f(this),o=i(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:r.first){o(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!g(this,e)}}),a(p,r?{get:function(e){var t=g(this,e);return t&&t.value},set:function(e,t){return y(this,0===e?0:e,t)}}:{add:function(e){return y(this,e=0===e?0:e,e)}}),h&&o(p,"size",{get:function(){return f(this).size}}),d},setStrong:function(e,t,r){var o=t+" Iterator",n=v(t),a=v(o);c(e,t,(function(e,t){b(this,{type:o,target:e,state:n(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,r=e.last;while(r&&r.removed)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?d("keys"==t?r.key:"values"==t?r.value:[r.key,r.value],!1):(e.target=void 0,d(void 0,!0))}),r?"entries":"values",!r,!0),p(t)}}},6964:function(e,t,r){var o=r("cb2d");e.exports=function(e,t,r){for(var n in t)o(e,n,t[n],r);return e}},"6d61":function(e,t,r){"use strict";var o=r("23e7"),n=r("da84"),a=r("e330"),i=r("94ca"),s=r("cb2d"),l=r("f183"),u=r("2266"),c=r("19aa"),d=r("1626"),p=r("7234"),h=r("861d"),m=r("d039"),f=r("1c7e"),b=r("d44e"),v=r("7156");e.exports=function(e,t,r){var y=-1!==e.indexOf("Map"),g=-1!==e.indexOf("Weak"),C=y?"set":"add",F=n[e],k=F&&F.prototype,O=F,S={},w=function(e){var t=a(k[e]);s(k,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!h(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return g&&!h(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!h(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})},T=i(e,!d(F)||!(g||k.forEach&&!m((function(){(new F).entries().next()}))));if(T)O=r.getConstructor(t,e,y,C),l.enable();else if(i(e,!0)){var N=new O,P=N[C](g?{}:-0,1)!=N,D=m((function(){N.has(1)})),j=f((function(e){new F(e)})),x=!g&&m((function(){var e=new F,t=5;while(t--)e[C](t,t);return!e.has(-0)}));j||(O=t((function(e,t){c(e,k);var r=v(new F,e,O);return p(t)||u(t,r[C],{that:r,AS_ENTRIES:y}),r})),O.prototype=k,k.constructor=O),(D||x)&&(w("delete"),w("has"),y&&w("get")),(x||P)&&w(C),g&&k.clear&&delete k.clear}return S[e]=O,o({global:!0,constructor:!0,forced:O!=F},S),b(O,e),g||r.setStrong(O,e,y),O}},"6f48":function(e,t,r){"use strict";var o=r("6d61"),n=r("6566");o("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},"751a":function(e,t,r){"use strict";r("b775")},7948:function(e,t,r){"use strict";r("c6a3")},afc5:function(e,t,r){},bb2f:function(e,t,r){var o=r("d039");e.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c6a3:function(e,t,r){},d86b:function(e,t,r){var o=r("d039");e.exports=o((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},f183:function(e,t,r){var o=r("23e7"),n=r("e330"),a=r("d012"),i=r("861d"),s=r("1a2d"),l=r("9bf2").f,u=r("241c"),c=r("057f"),d=r("4fad"),p=r("90e3"),h=r("bb2f"),m=!1,f=p("meta"),b=0,v=function(e){l(e,f,{value:{objectID:"O"+b++,weakData:{}}})},y=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!s(e,f)){if(!d(e))return"F";if(!t)return"E";v(e)}return e[f].objectID},g=function(e,t){if(!s(e,f)){if(!d(e))return!0;if(!t)return!1;v(e)}return e[f].weakData},C=function(e){return h&&m&&d(e)&&!s(e,f)&&v(e),e},F=function(){k.enable=function(){},m=!0;var e=u.f,t=n([].splice),r={};r[f]=1,e(r).length&&(u.f=function(r){for(var o=e(r),n=0,a=o.length;n<a;n++)if(o[n]===f){t(o,n,1);break}return o},o({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:c.f}))},k=e.exports={enable:F,fastKey:y,getWeakData:g,onFreeze:C};a[f]=!0}}]);
//# sourceMappingURL=chunk-0fcbdb5c.22e0cf04.js.map