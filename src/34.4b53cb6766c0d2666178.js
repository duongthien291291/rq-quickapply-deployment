(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"3eZ9":function(e,t,n){"use strict";n.r(t),n.d(t,"routes",function(){return m}),n.d(t,"PurchaseSituationModule",function(){return _});var i=n("ofXK"),a=n("tyNb"),r=n("R6jH"),o=n("sYmb"),s=n("gLFm"),c=n("07it"),u=n("fXoL"),p=n("VyQA"),b=n("mHFS"),l=n("tQNN"),d=n("dJxU"),g=n("ZC3Y"),h=n("E/Rz"),f=n("5rIt"),v=n("Iz0z");const m=[{path:"",component:(()=>{class e extends c.a{constructor(e){super(e)}ngOnInit(){super.ngOnInit(),this.translateService.get(["signed_agreement_choice","offer_pending_choice","near_future_buying_choice","shop_around_choice"]).subscribe(e=>{this.initDataControl(e)})}initDataControl(e){this.options=[{value:s.m.SignedPurchaseAgreement,displayText:this.translateService.instant(e.signed_agreement_choice)},{value:s.m.PendingOffer,displayText:this.translateService.instant(e.offer_pending_choice)},{value:s.m.NearTerm3To6Months,displayText:this.translateService.instant(e.near_future_buying_choice)},{value:s.m.ResearchOnly,displayText:this.translateService.instant(e.shop_around_choice)}],this.borrowerCurrentSituation=this.options.find(e=>e.value===this.loanApp.borrowerCurrentSituation)||{value:void 0}}nextStepFn(e){this.loanApp.borrowerCurrentSituation=e.value,this.saveChange();const t=this.getNextRouter();this.navigateTo(t)}}return e.\u0275fac=function(t){return new(t||e)(u.Ob(u.s))},e.\u0275cmp=u.Ib({type:e,selectors:[["purchase-situation-page"]],features:[u.zb],decls:12,vars:9,consts:[[3,"progressValue"],["navigate-animate","",1,"page"],[1,"container"],[3,"title"],["animation-overlay-effect","",3,"componentId","triggerAnimateEffect"],[1,"page-container-padded-100"],[1,"row"],[1,"col-12"],[3,"options","value","valueChange"],[3,"widgets"]],template:function(e,t){1&e&&(u.Ub(0,"app-body"),u.Pb(1,"progress-bar",0),u.Ub(2,"div",1),u.Ub(3,"div",2),u.Pb(4,"title-banner",3),u.ec(5,"translate"),u.Ub(6,"content",4),u.Ub(7,"div",5),u.Ub(8,"div",6),u.Ub(9,"div",7),u.Ub(10,"radio-input",8),u.bc("valueChange",function(e){return t.borrowerCurrentSituation=e})("valueChange",function(e){return t.nextStepFn(e)}),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Pb(11,"dynamic-widget",9),u.Tb()),2&e&&(u.Cb(1),u.kc("progressValue",t.flowPercent),u.Cb(3),u.lc("title",u.fc(5,7,"purchase_plan_situation_question")),u.Cb(2),u.kc("componentId","app-content")("triggerAnimateEffect",t.triggerAnimateEffect),u.Cb(4),u.kc("options",t.options)("value",t.borrowerCurrentSituation),u.Cb(1),u.kc("widgets",t.widgets))},directives:[p.a,b.a,l.a,d.a,g.a,h.a,f.a,v.a],pipes:[o.c],encapsulation:2}),e})()}];let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Mb({type:e}),e.\u0275inj=u.Lb({imports:[[a.e.forChild(m),r.a,o.b,i.c]]}),e})()}}]);