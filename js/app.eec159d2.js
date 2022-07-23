(function(){"use strict";var e={5845:function(e,t,r){var i=r(9963),s=r(6252);const n={class:"app__wrapper"};function a(e,t,r,i,a,o){const c=(0,s.up)("navigation-bar"),u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(c,{class:"app__nav"}),(0,s.Wm)(u,{currenciesList:a.currenciesList,cryptoCurrenciesList:o.cryptoCurrenciesList},null,8,["currenciesList","cryptoCurrenciesList"])])}function o(e,t){const r=e.join("%2C"),i=t.join("%2C");return fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${r}&vs_currencies=${i}`).then((e=>e.json())).then((e=>Object.values(e)))}function c(e,t){return fetch(`https://api.coingecko.com/api/v3/coins/${e}/market_chart?vs_currency=${t}&days=14`).then((e=>e.json())).then((e=>e.prices.map((e=>[e[0],e[1].toFixed(8)]))))}const u=e=>((0,s.dD)("data-v-868e67d4"),e=e(),(0,s.Cn)(),e),l={class:"nav"},p={class:"nav__svg",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",style:{transform:"rotate(180deg)"}},d=u((()=>(0,s._)("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"},null,-1))),h=[d],m=(0,s.Uk)(" CONVERTER "),v=(0,s.Uk)("PORTFOLIO "),_=u((()=>(0,s._)("svg",{class:"nav__svg",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},[(0,s._)("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})],-1)));function f(e,t,r,i,n,a){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",l,[(0,s.Wm)(o,{to:"/",class:"nav__button"},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.iD)("svg",p,h)),m])),_:1}),(0,s.Wm)(o,{to:"/portfolio",class:"nav__button"},{default:(0,s.w5)((()=>[v,_])),_:1})])}var g={name:"NavigationBar",data(){return{}}},y=r(3744);const C=(0,y.Z)(g,[["render",f],["__scopeId","data-v-868e67d4"]]);var k=C,w=(r(78),{name:"App",components:{NavigationBar:k},data(){return{currenciesList:[{name:"bitcoin",id:"btc",isCrypto:!0,prices:{}},{name:"ethereum",id:"eth",isCrypto:!0,prices:{}},{name:"usd",id:"usd",isCrypto:!1,prices:{}}]}},created(){this.updatePrices()},computed:{cryptoCurrenciesList(){return this.currenciesList.filter((e=>e.isCrypto))}},methods:{async updatePrices(){const e=await o(this.currenciesList.map((e=>[e.name])),this.currenciesList.map((e=>[e.id])));this.currenciesList.forEach(((t,r)=>{t.prices=e[r]}))}}});const b=(0,y.Z)(w,[["render",a]]);var L=b;const D={class:"button"};function P(e,t,r,i,n,a){return(0,s.wg)(),(0,s.iD)("button",D,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}var I={name:"BaseButton"};const x=(0,y.Z)(I,[["render",P],["__scopeId","data-v-721722e6"]]);var U=x;const M=["value"];function T(e,t,r,i,n,a){return(0,s.wg)(),(0,s.iD)("input",{value:r.modelValue,onInput:t[0]||(t[0]=(...e)=>a.updateInput&&a.updateInput(...e)),onBeforeinput:t[1]||(t[1]=(...e)=>a.inputValidation&&a.inputValidation(...e)),class:"input",maxlength:"16",inputmode:"decimal"},null,40,M)}r(6699);var V={name:"BaseNumInput",props:{modelValue:[String,Number]},methods:{inputValidation(e){const t=e.data;if(null===t)return;const r=e.target.value.includes("."),i=""===e.target.value,s=r||i?/\d/:/\d|\./;","!==t||r||i?t.match(s)||e.preventDefault():(e.preventDefault(),e.target.value=e.target.value+".")},updateInput(e){this.$emit("update:modelValue",+e.target.value)}}};const O=(0,y.Z)(V,[["render",T],["__scopeId","data-v-d4e91438"]]);var A=O,S=[U,A],z=r(2201);const W=e=>((0,s.dD)("data-v-82b5fcb4"),e=e(),(0,s.Cn)(),e),B={class:"app__converter converter__wrapper"},E={class:"converter__chart"},N=W((()=>(0,s._)("h2",{class:"converter__heading"},"Two-week currencies chart",-1)));function $(e,t,r,i,n,a){const o=(0,s.up)("converter-form"),c=(0,s.up)("apexchart");return(0,s.wg)(),(0,s.iD)("div",B,[(0,s.Wm)(o,{onUpdateCurrenciesName:a.updateChartData,currenciesList:r.currenciesList,class:"converter__form"},null,8,["onUpdateCurrenciesName","currenciesList"]),(0,s._)("section",E,[N,(0,s.Wm)(c,{type:"area",height:"80%",options:n.chartData.chartOptions,series:n.chartData.series},null,8,["options","series"])])])}var j=r(4489),F=r.n(j),Z=r(3577);const H=e=>((0,s.dD)("data-v-0ba7d2a6"),e=e(),(0,s.Cn)(),e),Y={class:"form"},q=H((()=>(0,s._)("h2",{class:"form__heading"},"Cryptocurrency Converter",-1))),K={class:"form__group"},R={class:"form__item"},X=["disabled","value"],J=H((()=>(0,s._)("svg",{class:"form__svg",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 16 22"},[(0,s._)("path",{d:"M0 6.875v-3.75h10.82V0L16 5l-5.18 5V6.875H0zM16 18.875v-3.75H5.18V12L0 17l5.18 5v-3.125H16z"})],-1))),G=[J],Q={class:"form__item"},ee=["disabled","value"],te=H((()=>(0,s._)("p",{class:"clue"},[(0,s._)("svg",{class:"clue__svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 330 330"},[(0,s._)("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394\n\tl-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393\n\tC307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})]),(0,s.Uk)(" swipe up ")],-1)));function re(e,t,r,n,a,o){const c=(0,s.up)("base-num-input");return(0,s.wg)(),(0,s.iD)("section",Y,[q,(0,s._)("div",K,[(0,s._)("div",R,[(0,s.Wm)(c,{onInput:o.updateVsPrice,onFocusout:o.checkEmptyInput,modelValue:a.mainPrice,"onUpdate:modelValue":t[0]||(t[0]=e=>a.mainPrice=e),min:"0"},null,8,["onInput","onFocusout","modelValue"]),(0,s.wy)((0,s._)("select",{onChange:t[1]||(t[1]=e=>{o.updateVsPrice(),o.updateMainCurrency()}),"onUpdate:modelValue":t[2]||(t[2]=e=>a.mainCurrency=e),class:"form__select"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.currenciesList,(e=>((0,s.wg)(),(0,s.iD)("option",{disabled:e===a.vsCurrency,key:e.id,value:e},(0,Z.zw)(e.id.toUpperCase()),9,X)))),128))],544),[[i.bM,a.mainCurrency]])]),(0,s._)("a",{onClick:t[3]||(t[3]=(...e)=>o.reverseCurrencies&&o.reverseCurrencies(...e)),class:"form__button"},G),(0,s._)("div",Q,[(0,s.Wm)(c,{onInput:o.updateMainPrice,onFocusout:o.checkEmptyInput,modelValue:a.vsPrice,"onUpdate:modelValue":t[4]||(t[4]=e=>a.vsPrice=e),min:"0"},null,8,["onInput","onFocusout","modelValue"]),(0,s.wy)((0,s._)("select",{onChange:t[5]||(t[5]=e=>{o.updateMainPrice(),o.updateVsCurrency()}),"onUpdate:modelValue":t[6]||(t[6]=e=>a.vsCurrency=e),class:"form__select"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.currenciesList,(e=>((0,s.wg)(),(0,s.iD)("option",{disabled:e===a.mainCurrency,key:e.id,value:e},(0,Z.zw)(e.id.toUpperCase()),9,ee)))),128))],544),[[i.bM,a.vsCurrency]])])]),te])}var ie={name:"ConverterForm",props:{currenciesList:{type:Array,required:!0}},data(){return{mainCurrency:"",vsCurrency:"",mainPrice:0,vsPrice:0}},created(){this.updateMainCurrency(),this.updateVsCurrency()},computed:{exchangePrice(){return this.mainCurrency.prices[this.vsCurrency.id]}},methods:{checkEmptyInput(e){""===e.target.value&&(e.target.value=0)},updateMainCurrency(){this.mainCurrency||(this.mainCurrency=this.currenciesList[0]),this.$emit("updateCurrenciesName",this.mainCurrency.name,this.vsCurrency.id)},updateVsCurrency(){this.vsCurrency||(this.vsCurrency=this.currenciesList[this.currenciesList.length-1]),this.$emit("updateCurrenciesName",this.mainCurrency.name,this.vsCurrency.id)},updateMainPrice(){this.mainPrice=Math.round(this.vsPrice/this.exchangePrice*1e6)/1e6},updateVsPrice(){this.vsPrice=Math.round(this.mainPrice*this.exchangePrice*1e6)/1e6},reverseCurrencies(){const e=this.mainCurrency;this.mainCurrency=this.vsCurrency,this.vsCurrency=e,[this.mainPrice,this.vsPrice]=[this.vsPrice,this.mainPrice],this.$emit("updateCurrenciesName",this.mainCurrency.name,this.vsCurrency.id)}}};const se=(0,y.Z)(ie,[["render",re],["__scopeId","data-v-0ba7d2a6"]]);var ne=se,ae={name:"ConverterPage",components:{apexchart:F(),ConverterForm:ne},props:{currenciesList:{type:Array,required:!0}},data(){return{chartData:{series:[{name:"Price",data:[]}],chartOptions:{chart:{type:"area",foreColor:"#ebedfc",fontFamily:"IBM Plex Sans, sans-serif",fontSize:"20px",toolbar:{show:!1},zoom:{enabled:!1}},colors:["#DE6A4C"],dataLabels:{enabled:!1},fill:{colors:["#DE6A4C"],type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,inverseColors:!1,opacityFrom:.8,opacityTo:0}},grid:{show:!1},responsive:[{breakpoint:675,options:{chart:{height:"80%"}}}],stroke:{curve:"straight",width:3},title:{text:void 0},subtitle:{text:void 0},tooltip:{style:{foreColor:"#fff"},theme:"dark"},xaxis:{type:"datetime",labels:{style:{fontSize:"0.7em"}}},yaxis:{opposite:!0,labels:{show:!0,formatter:e=>e,style:{fontSize:"0.7em"}}},legend:{show:!0,horizontalAlign:"left"}}}}},methods:{async updateChartData(e,t){e&&t&&(this.chartData.series[0].data=await c(e,t))}}};const oe=(0,y.Z)(ae,[["render",$],["__scopeId","data-v-82b5fcb4"]]);var ce=oe;const ue=e=>((0,s.dD)("data-v-52a4043c"),e=e(),(0,s.Cn)(),e),le={class:"app__portfolio porfolio__wrapper"},pe={key:0,class:"portfolio__no-tickers"},de=ue((()=>(0,s._)("h2",null,"Specify amount of cryptocurrency to get portfolio statistics",-1))),he=[de],me={class:"porfolio__chart"},ve=ue((()=>(0,s._)("h2",{class:"chart__heading"},"Portfolio chart",-1)));function _e(e,t,r,i,n,a){const o=(0,s.up)("portfolio-tickers"),c=(0,s.up)("portfolio-evaluation"),u=(0,s.up)("apexchart");return(0,s.wg)(),(0,s.iD)("div",le,[(0,s.Wm)(o,{onUpdateTickers:a.updateTickers,cryptoCurrenciesList:r.cryptoCurrenciesList,class:"porfolio__tickers"},null,8,["onUpdateTickers","cryptoCurrenciesList"]),a.haveNoTickers?((0,s.wg)(),(0,s.iD)("section",pe,he)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s.Wm)(c,{tickersList:n.tickersList,class:"porfolio__evaluation"},null,8,["tickersList"]),(0,s._)("section",me,[ve,(0,s.Wm)(u,{type:"pie",height:"80%",options:n.pieChartData.chartOptions,series:n.pieChartData.series},null,8,["options","series"])])],64))])}const fe=e=>((0,s.dD)("data-v-88d290e4"),e=e(),(0,s.Cn)(),e),ge={class:"tickers"},ye=fe((()=>(0,s._)("h2",{class:"tickers__heading"},"My portfolio",-1))),Ce={class:"tickers__group"},ke={class:"ticker__heading"},we={class:"ticker__amount"},be={class:"ticker__buttons"},Le=(0,s.Uk)("ADD"),De=(0,s.Uk)(" SUBTRACT "),Pe=fe((()=>(0,s._)("p",{class:"clue"},[(0,s._)("svg",{class:"clue__svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 330 330"},[(0,s._)("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394\n\tl-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393\n\tC307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})]),(0,s.Uk)(" swipe up ")],-1)));function Ie(e,t,r,i,n,a){const o=(0,s.up)("base-num-input"),c=(0,s.up)("base-button");return(0,s.wg)(),(0,s.iD)("section",ge,[ye,(0,s._)("div",Ce,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.tickersList,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id,class:"ticker"},[(0,s._)("h3",ke,(0,Z.zw)(e.id.toUpperCase()),1),(0,s._)("p",we,(0,Z.zw)(e.amount),1),(0,s.Wm)(o,{class:"ticker__input",modelValue:e.insertedAmount,"onUpdate:modelValue":t=>e.insertedAmount=t,min:"0"},null,8,["modelValue","onUpdate:modelValue"]),(0,s._)("div",be,[(0,s.Wm)(c,{onClick:t=>a.addAmount(e)},{default:(0,s.w5)((()=>[Le])),_:2},1032,["onClick"]),(0,s.Wm)(c,{onClick:t=>a.subtractAmount(e),disabled:a.comparedAmounts(e)},{default:(0,s.w5)((()=>[De])),_:2},1032,["onClick","disabled"])])])))),128))]),Pe])}var xe={name:"PortfolioTickers",props:{cryptoCurrenciesList:{type:Array,required:!0}},emits:["updateTickers"],data(){return{tickersList:{}}},created(){this.createTickersList(),this.updateTickersPriceInUsd()},computed:{tickersPriceInUsd(){return this.cryptoCurrenciesList.map((e=>[e.prices.usd]))}},methods:{createTickersList(){null===localStorage.getItem("tickersList")?this.tickersList=this.cryptoCurrenciesList.map((e=>({...e,amount:0,insertedAmount:"",priceInUsd:0}))):(this.tickersList=JSON.parse(localStorage.getItem("tickersList")),this.$emit("updateTickers",this.tickersList))},updateTickersPriceInUsd(){this.tickersList.map(((e,t)=>e.priceInUsd=this.tickersPriceInUsd[t]))},addAmount(e){e.amount=Math.round(1e6*(e.amount+e.insertedAmount))/1e6,e.insertedAmount="",localStorage.setItem("tickersList",JSON.stringify(this.tickersList)),this.$emit("updateTickers",this.tickersList)},subtractAmount(e){e.amount=Math.round(1e6*(e.amount-e.insertedAmount))/1e6,e.insertedAmount="",localStorage.setItem("tickersList",JSON.stringify(this.tickersList)),this.$emit("updateTickers",this.tickersList)},comparedAmounts(e){return e.amount-e.insertedAmount<0}},watch:{tickersPriceInUsd(){this.updateTickersPriceInUsd()}}};const Ue=(0,y.Z)(xe,[["render",Ie],["__scopeId","data-v-88d290e4"]]);var Me=Ue;const Te=e=>((0,s.dD)("data-v-24df1230"),e=e(),(0,s.Cn)(),e),Ve={class:"evaluation"},Oe=Te((()=>(0,s._)("h2",{class:"evaluation__heading"},"Portfolio Evaluation",-1))),Ae={class:"evaluation__group"},Se=Te((()=>(0,s._)("br",null,null,-1))),ze={class:"evaluation__group-item"},We=(0,s.Uk)("Total:"),Be=Te((()=>(0,s._)("br",null,null,-1))),Ee=Te((()=>(0,s._)("p",{class:"clue"},[(0,s._)("svg",{class:"clue__svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 330 330"},[(0,s._)("path",{id:"XMLID_224_",d:"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394\n\tl-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393\n\tC307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"})]),(0,s.Uk)(" swipe up ")],-1)));function Ne(e,t,r,i,n,a){return(0,s.wg)(),(0,s.iD)("section",Ve,[Oe,(0,s._)("div",Ae,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.notEmptyTickers,(e=>((0,s.wg)(),(0,s.iD)("p",{class:"evaluation__group-item",key:e.id},[(0,s.Uk)((0,Z.zw)(e.id.toUpperCase())+":",1),Se,(0,s.Uk)(" "+(0,Z.zw)(a.getCurrencyInUsd(e))+"$ ",1)])))),128)),(0,s._)("p",ze,[We,Be,(0,s.Uk)((0,Z.zw)(a.totalSum)+"$",1)])]),Ee])}var $e={name:"PortfolioEvaluation",props:{tickersList:{type:Array,required:!0}},computed:{notEmptyTickers(){return this.tickersList.filter((e=>e.amount>0))},totalSum(){if(0===this.tickersList.length)return 0;let e=this.tickersList.map((e=>Math.round(e.priceInUsd*e.amount*1e6)/1e6)).reduce(((e,t)=>Math.round(1e6*(e+t))/1e6));return e}},methods:{getCurrencyInUsd(e){return Math.round(e.priceInUsd*e.amount*1e6)/1e6||"0"}}};const je=(0,y.Z)($e,[["render",Ne],["__scopeId","data-v-24df1230"]]);var Fe=je,Ze={name:"PortfolioPage",components:{apexchart:F(),PortfolioTickers:Me,PortfolioEvaluation:Fe},props:{cryptoCurrenciesList:{type:Array,required:!0}},data(){return{pieChartData:{series:[],chartOptions:{chart:{animations:{enabled:!0},type:"pie"},theme:{monochrome:{enabled:!0,color:"#003F5C",shadeTo:"light",shadeIntensity:.5}},labels:[],tooltip:{y:{formatter:e=>e+" $"}},legend:{show:!1},responsive:[{breakpoint:960,options:{chart:{}}},{breakpoint:675,options:{chart:{},legend:{show:!1,position:"bottom",fontSize:"16px",fontFamily:"IBM Plex Sans",labels:{colors:["#ebedfc"]},markers:{width:14,height:14,strokeWidth:"2px",strokeColor:"#ebedfc",radius:12,offsetX:0,offsetY:0},itemMargin:{horizontal:10,vertical:10}}}}]}},tickersList:[]}},computed:{haveNoTickers(){return this.tickersList.every((e=>0==e.amount))}},methods:{updateTickers(e){this.tickersList=e,e.map(((e,t)=>{this.pieChartData.series[t]=Math.round(e.priceInUsd*e.amount*1e6)/1e6,this.pieChartData.chartOptions.labels[t]=e.id.toUpperCase()})),this.pieChartData.series.every((e=>0===e))&&(this.pieChartData.series.length=0,this.pieChartData.chartOptions.labels.length=0)}}};const He=(0,y.Z)(Ze,[["render",_e],["__scopeId","data-v-52a4043c"]]);var Ye=He;const qe=[{path:"/",component:ce},{path:"/portfolio",component:Ye}],Ke=(0,z.p7)({routes:qe,history:(0,z.r5)()});var Re=Ke;const Xe=(0,i.ri)(L);S.forEach((e=>{Xe.component(e.name,e)})),Xe.use(Re).mount("#app")}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,i,s,n){if(!i){var a=1/0;for(l=0;l<e.length;l++){i=e[l][0],s=e[l][1],n=e[l][2];for(var o=!0,c=0;c<i.length;c++)(!1&n||a>=n)&&Object.keys(r.O).every((function(e){return r.O[e](i[c])}))?i.splice(c--,1):(o=!1,n<a&&(a=n));if(o){e.splice(l--,1);var u=s();void 0!==u&&(t=u)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[i,s,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,n,a=i[0],o=i[1],c=i[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(c)var l=c(r)}for(t&&t(i);u<a.length;u++)n=a[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(l)},i=self["webpackChunkcryptocurrencyconverter"]=self["webpackChunkcryptocurrencyconverter"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(5845)}));i=r.O(i)})();
//# sourceMappingURL=app.eec159d2.js.map