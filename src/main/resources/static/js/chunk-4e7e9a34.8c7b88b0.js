(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e7e9a34"],{1148:function(e,t,n){"use strict";var a=n("5926"),r=n("577e"),o=n("1d80"),u=RangeError;e.exports=function(e){var t=r(o(this)),n="",i=a(e);if(i<0||i==1/0)throw u("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},"6d2d":function(e,t,n){},b680:function(e,t,n){"use strict";var a=n("23e7"),r=n("e330"),o=n("5926"),u=n("408a"),i=n("1148"),l=n("d039"),c=RangeError,s=String,d=Math.floor,p=r(i),h=r("".slice),f=r(1..toFixed),m=function(e,t,n){return 0===t?n:t%2===1?m(e,t-1,n*e):m(e*e,t/2,n)},g=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},b=function(e,t,n){var a=-1,r=n;while(++a<6)r+=t*e[a],e[a]=r%1e7,r=d(r/1e7)},y=function(e,t){var n=6,a=0;while(--n>=0)a+=e[n],e[n]=d(a/t),a=a%t*1e7},S=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var a=s(e[t]);n=""===n?a:n+p("0",7-a.length)+a}return n},v=l((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!l((function(){f({})}));a({target:"Number",proto:!0,forced:v},{toFixed:function(e){var t,n,a,r,i=u(this),l=o(e),d=[0,0,0,0,0,0],f="",v="0";if(l<0||l>20)throw c("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return s(i);if(i<0&&(f="-",i=-i),i>1e-21)if(t=g(i*m(2,69,1))-69,n=t<0?i*m(2,-t,1):i/m(2,t,1),n*=4503599627370496,t=52-t,t>0){b(d,0,n),a=l;while(a>=7)b(d,1e7,0),a-=7;b(d,m(10,a,1),0),a=t-1;while(a>=23)y(d,1<<23),a-=23;y(d,1<<a),b(d,1,1),y(d,2),v=S(d)}else b(d,0,n),b(d,1<<-t,0),v=S(d)+p("0",l);return l>0?(r=v.length,v=f+(r<=l?"0."+p("0",l-r)+v:h(v,0,r-l)+"."+h(v,r-l))):v=f+v,v}})},cf4e:function(e,t,n){"use strict";n.r(t);n("ac1f"),n("841c"),n("b680");var a=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{background:"#fff",padding:"10px"}},[t("reloadAndsearch",{ref:"search",attrs:{config:e.searchConfig,hidden:e.hidden,hidden1:e.hidden},on:{search:e.search}}),t("div",{staticClass:"list-model"},[t("TableList",{attrs:{pageMethod:e.getTableData,searchMethod:e.getTableData,"table-data":e.tableData,multiCheck:e.multiCheck,tableColumn:e.tableColumn,query:e.query,total:e.total,loading:e.loadings.table},on:{"update:query":function(t){e.query=t}},scopedSlots:e._u([{key:"column-num",fn:function(n){return[t("span",[e._v(e._s(n.row.inOrderNum+n.row.productNum+n.row.onWayNum+n.row.inStoreSum))])]}},{key:"column-sum",fn:function(n){return[t("span",[e._v(e._s(n.row.inOrderSum+n.row.productSum+n.row.onWaySum+n.row.inStoreSum))])]}},{key:"column-rate",fn:function(n){return[n.row.returnSum&&n.row.inStoreSum?t("span",[e._v(e._s((n.row.returnSum/n.row.inStoreSum*100).toFixed(2))+"%")]):e._e()]}}])})],1)],1)},r=[],o=(n("d3b7"),n("159b"),n("14d9"),n("c367")),u=n("ffd4"),i=n("d417"),l=n("7e1e"),c={name:"slist",data:function(){return{pageSize:10,pageNo:1,total:null,drawer:!1,multiCheck:!1,hidden:!0,rowData:{},tableData:[],multipleSelection:[],loadings:{table:!0},query:{pageNo:1,pageSize:10},shopOptions:[]}},computed:{tableColumn:function(){return[{prop:"shopCode",label:"门店编码"},{prop:"shopName",label:"门店名称"},{slots:{name:"column-num"},label:"总单数(不含退货)"},{slots:{name:"column-sum"},label:"总数量(不含退货)"},{prop:"inOrderNum",label:"在单订单"},{prop:"inOrderSum",label:"在单数量"},{prop:"productNum",label:"生产订单"},{prop:"productSum",label:"生产数量"},{prop:"onWayNum",label:"在途订单"},{prop:"onWaySum",label:"在途数量"},{prop:"inStoreNum",label:"入库订单"},{prop:"inStoreSum",label:"入库数量"},{prop:"returnCount",label:"有退货订单"},{prop:"returnSum",label:"退货数量"},{slots:{name:"column-rate"},label:"退货率"}]},searchConfig:function(){return[{label:"请选择",placeholder:"请选择门店",field:"shopCode",value:"",type:"select",options:this.shopOptions}]}},props:{},components:{TableList:o["a"],reloadAndsearch:u["a"]},created:function(){this.getshoplist()},methods:{getshoplist:function(){var e=this;Object(l["ob"])().then((function(t){200==t.data.code?t.data.data.forEach((function(t){e.shopOptions.push({label:t.shopName,value:t.shopCode})})):e.$message.error("获取失败!")}))},getTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,n&&(this.query.pageSize=n),this.loadings.table=!0;var a={page:this.query.pageNo,size:this.query.pageSize,shopCode:""};Object(i["f"])(a).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},search:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;this.query.pageNo=t,n&&(this.query.pageSize=n);var a=this.$refs.search.search;Object(i["f"])({shopCode:a.shopCode||"",page:this.query.pageNo,size:this.query.pageSize}).then((function(t){200===t.data.code?(e.total=t.data.data.total,e.tableData=t.data.data.records):console.log("error")})).finally((function(){e.loadings.table=!1}))},deleteRow:function(e){var t=this;this.$confirm("删除操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){shopkeeperWarehouseDelete({belongKey:e.belongKey,inventoryKey:e.inventoryKey}).then((function(e){200==e.data.code?(t.$message.success("删除成功!"),t.getTableData(),t.$forceUpdate()):t.$message.error("删除失败!")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},reload:function(){this.getTableData()}}},s=c,d=(n("dafa"),n("2877")),p=Object(d["a"])(s,a,r,!1,null,"c9f6d66a",null);t["default"]=p.exports},d417:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return p}));var a=n("b775"),r=(n("4328"),"/api");function o(e){return Object(a["a"])({url:r+"/countCheck/getById",method:"get",params:e})}function u(e){return Object(a["a"])({url:r+"/countCheck/list-page",method:"get",params:e})}function i(e){return Object(a["a"])({url:r+"/countCheck/list",method:"get",params:e})}function l(e){return Object(a["a"])({url:r+"/countCheck/add",method:"POST",data:e})}function c(e){return Object(a["a"])({url:r+"/countCheck/update",method:"POST",data:e})}function s(e){return Object(a["a"])({url:r+"/purchaseIntegrate/list-page",method:"get",params:e})}function d(e){return Object(a["a"])({url:r+"/salesIntegrate/list-page",method:"get",params:e})}function p(e){return Object(a["a"])({url:r+"/transferIntegrate/list-page",method:"get",params:e})}},dafa:function(e,t,n){"use strict";n("6d2d")}}]);
//# sourceMappingURL=chunk-4e7e9a34.8c7b88b0.js.map