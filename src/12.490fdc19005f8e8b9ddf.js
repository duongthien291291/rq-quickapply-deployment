(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{FLPN:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("fXoL");let o=(()=>{class e{constructor(e){this.el=e,this.keyupEnterEvent=new r.n}onKeyupHandler(e){this.keyupEnterEvent.emit(e)}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.l))},e.\u0275dir=r.Jb({type:e,selectors:[["","keyup-enter",""]],hostBindings:function(e,t){1&e&&r.bc("keyup.enter",function(e){return t.onKeyupHandler(e)},!1,r.tc)},outputs:{keyupEnterEvent:"keyupEnterEvent"}}),e})()},IYQ7:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("X9bf"),o=n("fXoL");const s=["*"];let c=(()=>{class e extends r.a{constructor(){super()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["app-buttons"]],inputs:{componentId:"componentId"},features:[o.zb],ngContentSelectors:s,decls:2,vars:1,consts:[[1,"body",3,"id"]],template:function(e,t){1&e&&(o.jc(),o.Ub(0,"div",0),o.ic(1),o.Tb()),2&e&&o.lc("id",t.componentId)},encapsulation:2}),e})()},NZsQ:function(e,t,n){"use strict";n.r(t),n.d(t,"routes",function(){return L}),n.d(t,"BorrowerPhoneModule",function(){return W});var r=n("ofXK"),o=n("3Pt+"),s=n("tyNb"),c=n("R6jH"),a=n("sYmb"),i=n("07it"),l=n("DidZ"),u=n("fXoL"),p=n("VyQA"),b=n("mHFS"),d=n("tQNN"),m=n("dJxU"),f=n("ZC3Y"),h=n("E/Rz"),g=n("FLPN"),v=n("rae3"),k=n("tmjD");const C=function(e){return{error:e}};function y(e,t){if(1&e&&u.Pb(0,"input",3),2&e){const e=u.dc();u.kc("formControl",e.control)("ngClass",u.nc(6,C,(null==e.control?null:e.control.errors)&&e.control.touched))("mask",e.mask)("patterns",e.patterns)("dropSpecialCharacters",!1)("placeholder",e.placeholder)}}function w(e,t){if(1&e){const e=u.Vb();u.Ub(0,"input",4),u.bc("ngModelChange",function(t){return u.uc(e),u.dc().value=t})("ngModelChange",function(t){return u.uc(e),u.dc().modelChangeFn(t)}),u.Tb()}if(2&e){const e=u.dc();u.kc("ngModel",e.value)("mask",e.mask)("patterns",e.patterns)("dropSpecialCharacters",!1)("placeholder",e.placeholder)}}function T(e,t){1&e&&u.Qb(0)}let P=(()=>{class e extends v.a{constructor(){super(),this.mask=l.a.maskConst.phone.mask,this.patterns=l.a.maskConst.defaultPatterns}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Ib({type:e,selectors:[["phone-input"]],features:[u.zb],decls:5,vars:1,consts:[["withinFormTemplate",""],["withoutFormTemplate",""],[4,"ngTemplateOutlet"],["type","text","inputmode","numeric",3,"formControl","ngClass","mask","patterns","dropSpecialCharacters","placeholder"],["type","text","inputmode","numeric",3,"ngModel","mask","patterns","dropSpecialCharacters","placeholder","ngModelChange"]],template:function(e,t){if(1&e&&(u.zc(0,y,1,8,"ng-template",null,0,u.Ac),u.zc(2,w,1,5,"ng-template",null,1,u.Ac),u.zc(4,T,1,0,"ng-container",2)),2&e){const e=u.sc(1),n=u.sc(3);u.Cb(4),u.kc("ngTemplateOutlet",t.form?e:n)}},directives:[r.p,o.b,k.a,o.j,o.d,r.j,o.l],encapsulation:2}),e})();var V=n("IYQ7"),I=n("Iz0z"),U=n("PU3+"),F=n("las5"),x=n("RzIq"),N=n("zr/w");function S(e,t){1&e&&(u.Ub(0,"div",21),u.Bc(1," Phone number is required. "),u.Tb())}function z(e,t){1&e&&(u.Ub(0,"div",21),u.Bc(1," Phone number is incorrect format. "),u.Tb())}const O=function(e){return{homeUrl:e}};function D(e,t){if(1&e&&(u.Pb(0,"submit-disclaimer",22),u.ec(1,"translate")),2&e){const e=u.dc();u.kc("disclaimerDescr",u.gc(1,1,"disclaimer_description",u.nc(4,O,e.homeUrl)))}}function E(e,t){if(1&e&&u.Pb(0,"submit-message",23),2&e){const e=u.dc();u.kc("message",e.errorMessage)("messageType","error-message")}}function M(e,t){if(1&e){const e=u.Vb();u.Ub(0,"app-button",24),u.bc("clickFn",function(t){return u.uc(e),u.dc().nextStepFn(t)}),u.ec(1,"translate"),u.Tb()}if(2&e){const e=u.dc();u.lc("text",u.fc(1,2,"submit")),u.kc("promiseEvent",e.submitOb)}}function A(e,t){if(1&e){const e=u.Vb();u.Ub(0,"app-button",25),u.bc("clickFn",function(t){return u.uc(e),u.dc().nextStepFn(t)}),u.ec(1,"translate"),u.Tb()}2&e&&u.lc("text",u.fc(1,1,"next"))}function _(e,t){if(1&e){const e=u.Vb();u.Ub(0,"no-border-button",26),u.bc("clickFn",function(t){return u.uc(e),u.dc().skipThisStep(t)}),u.ec(1,"translate"),u.Tb()}2&e&&u.lc("text",u.fc(1,1,"skip_step"))}const L=[{path:"",component:(()=>{class e extends i.a{constructor(e){super(e),this.form=new o.e({}),this.phoneValidators=[o.o.required,o.o.pattern(l.a.pattern.usPhoneNumber)]}ngOnInit(){super.ngOnInit(),setTimeout(()=>{this.initFormData(),this.subscribeDataChange()})}initFormData(){this.form.patchValue({phoneNumber:this.loanApp.borrowerPhone})}subscribeDataChange(){this.form.valueChanges.subscribe(e=>{this.loanApp.borrowerPhone=e.phoneNumber,this.saveChange()})}nextStepFn(e){if(this.form.invalid)return void this.form.markAllAsTouched();const t=this.getNextRouter();this.nextStep(t)}}return e.\u0275fac=function(t){return new(t||e)(u.Ob(u.s))},e.\u0275cmp=u.Ib({type:e,selectors:[["borrower-phone-page"]],features:[u.zb],decls:26,vars:22,consts:[[3,"progressValue"],["navigate-animate","",1,"page","page-submit","borrower-phone"],[1,"container"],[3,"title"],["animation-overlay-effect","",3,"componentId","triggerAnimateEffect"],[1,"page-container-padded-100"],[1,"row"],[1,"col-12"],["keyup-enter","",3,"formGroup","keyupEnterEvent"],["controlName","phoneNumber",3,"form","placeholder","validators"],["class","error-hint",4,"ngIf"],[3,"disclaimerDescr",4,"ngIf"],[3,"message","messageType",4,"ngIf"],[3,"componentId"],[1,"row","row-page-nav","buttons-wrapper"],[1,"col-4"],[3,"ngSwitch"],["buttonType","promise","color","button-secondary",3,"promiseEvent","text","clickFn",4,"ngSwitchCase"],["color","button",3,"text","clickFn",4,"ngSwitchCase"],["color","no-border-button font-heavy","iconUrl","assets/img/skip_icon.svg","icon","left-icon",3,"text","clickFn",4,"ngIf"],[3,"widgets"],[1,"error-hint"],[3,"disclaimerDescr"],[3,"message","messageType"],["buttonType","promise","color","button-secondary",3,"promiseEvent","text","clickFn"],["color","button",3,"text","clickFn"],["color","no-border-button font-heavy","iconUrl","assets/img/skip_icon.svg","icon","left-icon",3,"text","clickFn"]],template:function(e,t){1&e&&(u.Ub(0,"app-body"),u.Pb(1,"progress-bar",0),u.Ub(2,"div",1),u.Ub(3,"div",2),u.Pb(4,"title-banner",3),u.ec(5,"translate"),u.Ub(6,"content",4),u.Ub(7,"div",5),u.Ub(8,"div",6),u.Ub(9,"div",7),u.Ub(10,"form",8),u.bc("keyupEnterEvent",function(e){return t.nextStepFn(e)}),u.Pb(11,"phone-input",9),u.ec(12,"translate"),u.zc(13,S,2,0,"div",10),u.zc(14,z,2,0,"div",10),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.zc(15,D,2,6,"submit-disclaimer",11),u.zc(16,E,1,2,"submit-message",12),u.Tb(),u.Ub(17,"app-buttons",13),u.Ub(18,"div",5),u.Ub(19,"div",14),u.Ub(20,"div",15),u.Ub(21,"div",16),u.zc(22,M,2,4,"app-button",17),u.zc(23,A,2,3,"app-button",18),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.zc(24,_,2,3,"no-border-button",19),u.Tb(),u.Tb(),u.Pb(25,"dynamic-widget",20),u.Tb()),2&e&&(u.Cb(1),u.kc("progressValue",t.flowPercent),u.Cb(3),u.lc("title",u.fc(5,18,"phone_number_question")),u.Cb(2),u.kc("componentId","app-content")("triggerAnimateEffect",t.triggerAnimateEffect),u.Cb(4),u.kc("formGroup",t.form),u.Cb(1),u.lc("placeholder",u.fc(12,20,"phone_number_hint")),u.kc("form",t.form)("validators",t.phoneValidators),u.Cb(2),u.kc("ngIf",(null==t.form.controls.phoneNumber||null==t.form.controls.phoneNumber.errors?null:t.form.controls.phoneNumber.errors.required)&&(null==t.form.controls.phoneNumber?null:t.form.controls.phoneNumber.touched)),u.Cb(1),u.kc("ngIf",(null==t.form.controls.phoneNumber||null==t.form.controls.phoneNumber.errors?null:t.form.controls.phoneNumber.errors.pattern)&&(null==t.form.controls.phoneNumber?null:t.form.controls.phoneNumber.touched)),u.Cb(1),u.kc("ngIf",t.isFinalScreen),u.Cb(1),u.kc("ngIf",t.isFinalScreen),u.Cb(1),u.kc("componentId","app-buttons"),u.Cb(4),u.kc("ngSwitch",t.isFinalScreen),u.Cb(1),u.kc("ngSwitchCase",!0),u.Cb(1),u.kc("ngSwitchCase",!1),u.Cb(1),u.kc("ngIf",t.skipScreen),u.Cb(1),u.kc("widgets",t.widgets))},directives:[p.a,b.a,d.a,m.a,f.a,h.a,o.p,o.k,g.a,o.f,P,r.l,V.a,r.m,r.n,I.a,U.a,F.a,x.a,N.a],pipes:[a.c],encapsulation:2}),e})()}];let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Mb({type:e}),e.\u0275inj=u.Lb({imports:[[s.e.forChild(L),c.a,a.b,r.c,o.g,o.n]]}),e})()},dJxU:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("fXoL"),o=n("zK9L"),s=n("VTD4");let c=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Ib({type:e,selectors:[["title-banner"]],inputs:{title:"title"},decls:5,vars:2,consts:[[3,"componentId"],[1,"row"],[1,"col-12","text-center"],[1,"font-heaviest","page-title-wrapper"],[3,"title"]],template:function(e,t){1&e&&(r.Ub(0,"banner",0),r.Ub(1,"div",1),r.Ub(2,"div",2),r.Ub(3,"h1",3),r.Pb(4,"page-title",4),r.Tb(),r.Tb(),r.Tb(),r.Tb()),2&e&&(r.kc("componentId","app-banner"),r.Cb(4),r.kc("title",t.title))},directives:[o.a,s.a],encapsulation:2}),e})()},mHFS:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n("DidZ"),o=n("fXoL");let s=(()=>{class e{constructor(){}get currentPercentage(){return this.currentPercentageValue}set currentPercentage(e){this.currentPercentageValue=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var c=n("ofXK"),a=n("RzIq");let i=(()=>{class e extends a.a{constructor(){super()}ngOnInit(){}onClickFn(e){history.back()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["icon-button"]],inputs:{icon:"icon"},features:[o.zb],decls:2,vars:1,consts:[[1,"progress-bar-back",3,"click"],["src","assets/img/back_icon.svg","alt","",3,"ngClass"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.bc("click",function(e){return t.onClickFn(e)}),o.Pb(1,"img",1),o.Tb()),2&e&&(o.Cb(1),o.kc("ngClass",t.icon))},directives:[c.j],encapsulation:2}),e})();const l=function(e){return{"block-hide":e}};function u(e,t){if(1&e&&(o.Ub(0,"div",1),o.Ub(1,"div",2),o.Bc(2),o.Tb(),o.Ub(3,"div",3),o.Pb(4,"icon-button"),o.Ub(5,"div",4),o.Pb(6,"div",5),o.Pb(7,"div",6),o.Tb(),o.Tb(),o.Tb()),2&e){const e=o.dc();o.Cb(1),o.kc("ngClass",o.nc(4,l,!e.displayPercentNumber)),o.Cb(1),o.Dc(" ",e.progressPercent,"% "),o.Cb(5),o.yc("width",e.progressWidth+"%")}}let p=(()=>{class e{constructor(e){this.progressBarService=e,this.maxValue=r.a.progressDefaults.maxValue,this.minValue=r.a.progressDefaults.minValue,this.currentValue=r.a.progressDefaults.currentValue,this.progressPercent=r.a.progressDefaults.progressPercentValue,this.displayPercentNumber=r.a.progressDefaults.displayPercentNumber}ngOnInit(){this.progressWidth=this.calculateProgressWidth(),this.simulateAnimation()}calculateProgressWidth(){return this.progressPercent=this.progressValue?this.progressValue:Math.floor((this.currentValue-this.minValue)/(this.maxValue-this.minValue)*100),this.calculateDisplayWidth(this.progressPercent)}calculateDisplayWidth(e){return Math.floor(e)+r.a.progressDefaults.gapOfWidth}simulateAnimation(){const e=this.calculateDisplayWidth(this.progressBarService.currentPercentage||0),t=this.progressWidth;e!==t&&(this.progressWidth=e,setTimeout(()=>this.progressWidth=t),this.progressBarService.currentPercentage=this.progressPercent)}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(s))},e.\u0275cmp=o.Ib({type:e,selectors:[["progress-bar"]],inputs:{maxValue:"maxValue",minValue:"minValue",currentValue:"currentValue",progressValue:"progressValue"},decls:1,vars:1,consts:[["id","nav-progress-bar","class","progress-bar-container",4,"ngIf"],["id","nav-progress-bar",1,"progress-bar-container"],[1,"progress-bar-label",3,"ngClass"],[1,"progress-bar-wrapper"],[1,"progress-bar"],[1,"progress-bar-fill-starter"],[1,"progress-bar-fill"]],template:function(e,t){1&e&&o.zc(0,u,8,6,"div",0),2&e&&o.kc("ngIf",t.progressPercent>0)},directives:[c.l,c.j,i],encapsulation:2}),e})()},rae3:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n("fXoL"),o=n("3Pt+"),s=n("DidZ"),c=n("ofXK");const a=function(e){return{error:e}};function i(e,t){if(1&e&&r.Pb(0,"input",3),2&e){const e=r.dc();r.kc("formControl",e.control)("ngClass",r.nc(3,a,(null==e.control?null:e.control.errors)&&e.control.touched))("placeholder",e.placeholder)}}function l(e,t){if(1&e){const e=r.Vb();r.Ub(0,"input",4),r.bc("ngModelChange",function(t){return r.uc(e),r.dc().value=t})("ngModelChange",function(t){return r.uc(e),r.dc().modelChangeFn(t)}),r.Tb()}if(2&e){const e=r.dc();r.kc("ngModel",e.value)("placeholder",e.placeholder)}}function u(e,t){1&e&&r.Qb(0)}let p=(()=>{class e{constructor(){this.validators=[o.o.required],this.asyncValidators=[],this.updateOn=s.a.updateOnForm.change,this.valueChange=new r.n}ngOnInit(){this.form&&(this.form.contains(this.controlName)?this.control=this.form.controls[this.controlName]:(this.control=new o.c(this.value,{validators:this.validators,asyncValidators:this.asyncValidators,updateOn:this.updateOn}),this.form.addControl(this.controlName,this.control)))}modelChangeFn(e){this.valueChange.emit(this.value)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Ib({type:e,selectors:[["text-input"]],inputs:{value:"value",label:"label",placeholder:"placeholder",styles:"styles",form:"form",controlName:"controlName",validators:"validators",asyncValidators:"asyncValidators",updateOn:"updateOn"},outputs:{valueChange:"valueChange"},decls:5,vars:1,consts:[["withinFormTemplate",""],["withoutFormTemplate",""],[4,"ngTemplateOutlet"],["type","text",3,"formControl","ngClass","placeholder"],["type","text",3,"ngModel","placeholder","ngModelChange"]],template:function(e,t){if(1&e&&(r.zc(0,i,1,5,"ng-template",null,0,r.Ac),r.zc(2,l,1,2,"ng-template",null,1,r.Ac),r.zc(4,u,1,0,"ng-container",2)),2&e){const e=r.sc(1),n=r.sc(3);r.Cb(4),r.kc("ngTemplateOutlet",t.form?e:n)}},directives:[c.p,o.b,o.j,o.d,c.j,o.l],encapsulation:2}),e})()},tQNN:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("DidZ"),o=n("fXoL"),s=n("JH1z");let c=(()=>{class e{constructor(e,t,n){this.navigationFlowService=e,this.default=!0,this.faster=!0,this.navigationFlowService.isBackwardNavigated()?t.addClass(n.nativeElement,r.a.animate.slideLeft):t.addClass(n.nativeElement,r.a.animate.slideRight)}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(s.a),o.Ob(o.E),o.Ob(o.l))},e.\u0275dir=o.Jb({type:e,selectors:[["","navigate-animate",""]],hostVars:4,hostBindings:function(e,t){2&e&&o.Gb("animate__animated",t.default)("animate__faster",t.faster)}}),e})()}}]);