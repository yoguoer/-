(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-644e2278"],{"06f9":function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c"),r("b680");var n=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{background:"#fff",padding:"10px"}},[t("reloadAndsearch",{ref:"search",attrs:{config:e.searchConfig,hidden:e.hidden,hidden1:e.hidden},on:{search:e.search}}),t("div",{staticClass:"list-model"},[t("TableList",{attrs:{pageMethod:e.getTableData,searchMethod:e.getTableData,"table-data":e.tableData,multiCheck:e.multiCheck,tableColumn:e.tableColumn,query:e.query,total:e.total,loading:e.loadings.table},on:{"update:query":function(t){e.query=t}},scopedSlots:e._u([{key:"column-num",fn:function(r){return[t("span",[e._v(e._s(r.row.inOrderNum+r.row.productNum+r.row.onWayNum+r.row.inStoreSum))])]}},{key:"column-sum",fn:function(r){return[t("span",[e._v(e._s(r.row.inOrderSum+r.row.productSum+r.row.onWaySum+r.row.inStoreSum))])]}},{key:"column-rate",fn:function(r){return[r.row.returnSum&&r.row.inStoreSum?t("span",[e._v(e._s((r.row.returnSum/r.row.inStoreSum*100).toFixed(2))+"%")]):e._e()]}}])})],1)],1)},a=[],o=(r("d3b7"),r("159b"),r("14d9"),r("c367")),i=r("ffd4"),u=r("d417"),l=r("7e1e"),s={name:"slist",data:function(){return{pageSize:10,pageNo:1,total:null,drawer:!1,multiCheck:!1,hidden:!0,rowData:{},tableData:[],multipleSelection:[],loadings:{table:!0},query:{pageNo:1,pageSize:10},supplierOptions:[]}},computed:{tableColumn:function(){return[{prop:"supplierCode",label:"供应商编码",width:"100px"},{prop:"supplierName",label:"供应商名称",width:"300px"},{slots:{name:"column-num"},label:"总单数(不含退货)",width:"160px",sortable:!0},{slots:{name:"column-sum"},label:"总数量(不含退货)",width:"160px",sortable:!0},{prop:"inOrderNum",label:"在单订单",width:"120px",sortable:!0},{prop:"inOrderSum",label:"在单数量",width:"120px",sortable:!0},{prop:"productNum",label:"生产订单",width:"120px",sortable:!0},{prop:"productSum",label:"生产数量",width:"120px",sortable:!0},{prop:"onWayNum",label:"在途订单",width:"120px",sortable:!0},{prop:"onWaySum",label:"在途数量",width:"120px",sortable:!0},{prop:"inStoreNum",label:"入库订单",width:"120px",sortable:!0},{prop:"inStoreSum",label:"入库数量",width:"120px",sortable:!0},{prop:"returnCount",label:"有退货订单",width:"120px",sortable:!0},{prop:"returnSum",label:"退货数量",width:"120px",sortable:!0},{slots:{name:"column-rate"},label:"退货率",width:"120px",sortable:!0}]},searchConfig:function(){return[{label:"请选择",placeholder:"请选择供应商",field:"supplierCode",value:"",type:"select",options:this.supplierOptions}]}},props:{},components:{TableList:o["a"],reloadAndsearch:i["a"]},created:function(){this.getSupplierlist()},methods:{getSupplierlist:function(){var e=this;Object(l["o"])().then((function(t){200==t.data.code?(e.supplierOptions=[],t.data.data.forEach((function(t){e.supplierOptions.push({label:t.supplierName,value:t.supplierCode})}))):e.$message.error("获取失败!")}))},getTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,r&&(this.query.pageSize=r),this.loadings.table=!0;var n={page:this.query.pageNo,size:this.query.pageSize,supplierCode:""};Object(u["f"])(n).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},search:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,r&&(this.query.pageSize=r);var n=this.$refs.search.search;Object(u["f"])({supplierCode:n.supplierCode||"",page:this.query.pageNo,size:this.query.pageSize}).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},deleteRow:function(e){var t=this;this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){shopkeeperWarehouseDelete({belongKey:e.belongKey,inventoryKey:e.inventoryKey}).then((function(e){200==e.data.code?(t.$message.success("删除成功!"),t.getTableData(),t.$forceUpdate()):t.$message.error("删除失败!")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},reload:function(){this.getTableData()}}},c=s,d=(r("1797"),r("2877")),p=Object(d["a"])(c,n,a,!1,null,"4287b879",null);t["default"]=p.exports},1148:function(e,t,r){"use strict";var n=r("5926"),a=r("577e"),o=r("1d80"),i=RangeError;e.exports=function(e){var t=a(o(this)),r="",u=n(e);if(u<0||u==1/0)throw i("Wrong number of repetitions");for(;u>0;(u>>>=1)&&(t+=t))1&u&&(r+=t);return r}},1797:function(e,t,r){"use strict";r("ae1d")},ae1d:function(e,t,r){},b680:function(e,t,r){"use strict";var n=r("23e7"),a=r("e330"),o=r("5926"),i=r("408a"),u=r("1148"),l=r("d039"),s=RangeError,c=String,d=Math.floor,p=a(u),h=a("".slice),f=a(1..toFixed),b=function(e,t,r){return 0===t?r:t%2===1?b(e,t-1,r*e):b(e*e,t/2,r)},m=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},g=function(e,t,r){var n=-1,a=r;while(++n<6)a+=t*e[n],e[n]=a%1e7,a=d(a/1e7)},w=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=d(n/t),n=n%t*1e7},S=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=c(e[t]);r=""===r?n:r+p("0",7-n.length)+n}return r},y=l((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!l((function(){f({})}));n({target:"Number",proto:!0,forced:y},{toFixed:function(e){var t,r,n,a,u=i(this),l=o(e),d=[0,0,0,0,0,0],f="",y="0";if(l<0||l>20)throw s("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return c(u);if(u<0&&(f="-",u=-u),u>1e-21)if(t=m(u*b(2,69,1))-69,r=t<0?u*b(2,-t,1):u/b(2,t,1),r*=4503599627370496,t=52-t,t>0){g(d,0,r),n=l;while(n>=7)g(d,1e7,0),n-=7;g(d,b(10,n,1),0),n=t-1;while(n>=23)w(d,1<<23),n-=23;w(d,1<<n),g(d,1,1),w(d,2),y=S(d)}else g(d,0,r),g(d,1<<-t,0),y=S(d)+p("0",l);return l>0?(a=y.length,y=f+(a<=l?"0."+p("0",l-a)+y:h(y,0,a-l)+"."+h(y,a-l))):y=f+y,y}})},d417:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return c})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return p}));var n=r("b775"),a=(r("4328"),"/api");function o(e){return Object(n["a"])({url:a+"/countCheck/getById",method:"get",params:e})}function i(e){return Object(n["a"])({url:a+"/countCheck/list-page",method:"get",params:e})}function u(e){return Object(n["a"])({url:a+"/countCheck/list",method:"get",params:e})}function l(e){return Object(n["a"])({url:a+"/countCheck/add",method:"POST",data:e})}function s(e){return Object(n["a"])({url:a+"/countCheck/update",method:"POST",data:e})}function c(e){return Object(n["a"])({url:a+"/purchaseIntegrate/list-page",method:"get",params:e})}function d(e){return Object(n["a"])({url:a+"/salesIntegrate/list-page",method:"get",params:e})}function p(e){return Object(n["a"])({url:a+"/transferIntegrate/list-page",method:"get",params:e})}}}]);
//# sourceMappingURL=chunk-644e2278.54a5576a.js.map