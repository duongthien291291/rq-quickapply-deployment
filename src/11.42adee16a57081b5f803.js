(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FLPN:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("fXoL");let s=(()=>{class t{constructor(t){this.el=t,this.keyupEnterEvent=new r.n}onKeyupHandler(t){this.keyupEnterEvent.emit(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.l))},t.\u0275dir=r.Jb({type:t,selectors:[["","keyup-enter",""]],hostBindings:function(t,e){1&t&&r.bc("keyup.enter",function(t){return e.onKeyupHandler(t)},!1,r.tc)},outputs:{keyupEnterEvent:"keyupEnterEvent"}}),t})()},IYQ7:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("X9bf"),s=n("fXoL");const o=["*"];let a=(()=>{class t extends r.a{constructor(){super()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-buttons"]],inputs:{componentId:"componentId"},features:[s.zb],ngContentSelectors:o,decls:2,vars:1,consts:[[1,"body",3,"id"]],template:function(t,e){1&t&&(s.jc(),s.Ub(0,"div",0),s.ic(1),s.Tb()),2&t&&s.lc("id",e.componentId)},encapsulation:2}),t})()},LSF9:function(t,e,n){"use strict";n.r(e),n.d(e,"routes",function(){return z}),n.d(e,"BorrowerNameModule",function(){return E});var r=n("ofXK"),s=n("3Pt+"),o=n("tyNb"),a=n("R6jH"),c=n("sYmb"),i=n("07it"),l=n("fXoL"),u=n("VyQA"),p=n("mHFS"),b=n("tQNN"),d=n("dJxU"),f=n("ZC3Y"),m=n("E/Rz"),g=n("FLPN"),h=n("rae3"),v=n("IYQ7"),k=n("Iz0z"),C=n("PU3+"),y=n("las5"),w=n("RzIq"),T=n("zr/w");function I(t,e){1&t&&(l.Ub(0,"div",22),l.Bc(1," Firstname is required. "),l.Tb())}function V(t,e){1&t&&(l.Ub(0,"div",22),l.Bc(1," Lastname is required. "),l.Tb())}const P=function(t){return{homeUrl:t}};function U(t,e){if(1&t&&(l.Pb(0,"submit-disclaimer",23),l.ec(1,"translate")),2&t){const t=l.dc();l.kc("disclaimerDescr",l.gc(1,1,"disclaimer_description",l.nc(4,P,t.homeUrl)))}}function F(t,e){if(1&t&&l.Pb(0,"submit-message",24),2&t){const t=l.dc();l.kc("message",t.errorMessage)("messageType","error-message")}}function x(t,e){if(1&t){const t=l.Vb();l.Ub(0,"app-button",25),l.bc("clickFn",function(e){return l.uc(t),l.dc().nextStepFn(e)}),l.ec(1,"translate"),l.Tb()}if(2&t){const t=l.dc();l.lc("text",l.fc(1,2,"submit")),l.kc("promiseEvent",t.submitOb)}}function S(t,e){if(1&t){const t=l.Vb();l.Ub(0,"app-button",26),l.bc("clickFn",function(e){return l.uc(t),l.dc().nextStepFn(e)}),l.ec(1,"translate"),l.Tb()}2&t&&l.lc("text",l.fc(1,1,"next"))}function O(t,e){if(1&t){const t=l.Vb();l.Ub(0,"no-border-button",27),l.bc("clickFn",function(e){return l.uc(t),l.dc().skipThisStep(e)}),l.ec(1,"translate"),l.Tb()}2&t&&l.lc("text",l.fc(1,1,"skip_step"))}const z=[{path:"",component:(()=>{class t extends i.a{constructor(t){super(t),this.form=new s.e({})}ngOnInit(){super.ngOnInit(),setTimeout(()=>{this.initFormData(),this.subscribeDataChange()})}initFormData(){this.form.patchValue({firstname:this.loanApp.borrowerFirstname,lastname:this.loanApp.borrowerLastname})}subscribeDataChange(){this.form.valueChanges.subscribe(t=>{this.loanApp.borrowerFirstname=t.firstname,this.loanApp.borrowerLastname=t.lastname,this.saveChange()})}nextStepFn(t){if(this.form.invalid)return void this.form.markAllAsTouched();const e=this.getNextRouter();this.nextStep(e)}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(l.s))},t.\u0275cmp=l.Ib({type:t,selectors:[["borrower-name-page"]],features:[l.zb],decls:28,vars:25,consts:[[3,"progressValue"],["navigate-animate","",1,"page","borrower-name"],[1,"container"],[3,"title"],["animation-overlay-effect","",3,"componentId","triggerAnimateEffect"],[1,"page-container-padded-100"],[1,"row"],["keyup-enter","",3,"formGroup","keyupEnterEvent"],[1,"col-6"],["controlName","firstname",3,"form","placeholder"],["class","error-hint",4,"ngIf"],["controlName","lastname",3,"form","placeholder"],[3,"disclaimerDescr",4,"ngIf"],[3,"message","messageType",4,"ngIf"],[3,"componentId"],[1,"row","row-page-nav","buttons-wrapper"],[1,"col-4"],[3,"ngSwitch"],["buttonType","promise","color","button-secondary",3,"promiseEvent","text","clickFn",4,"ngSwitchCase"],["color","button",3,"text","clickFn",4,"ngSwitchCase"],["color","no-border-button font-heavy","iconUrl","assets/img/skip_icon.svg","icon","left-icon",3,"text","clickFn",4,"ngIf"],[3,"widgets"],[1,"error-hint"],[3,"disclaimerDescr"],[3,"message","messageType"],["buttonType","promise","color","button-secondary",3,"promiseEvent","text","clickFn"],["color","button",3,"text","clickFn"],["color","no-border-button font-heavy","iconUrl","assets/img/skip_icon.svg","icon","left-icon",3,"text","clickFn"]],template:function(t,e){1&t&&(l.Ub(0,"app-body"),l.Pb(1,"progress-bar",0),l.Ub(2,"div",1),l.Ub(3,"div",2),l.Pb(4,"title-banner",3),l.ec(5,"translate"),l.Ub(6,"content",4),l.Ub(7,"div",5),l.Ub(8,"div",6),l.Ub(9,"form",7),l.bc("keyupEnterEvent",function(t){return e.nextStepFn(t)}),l.Ub(10,"div",8),l.Pb(11,"text-input",9),l.ec(12,"translate"),l.zc(13,I,2,0,"div",10),l.Tb(),l.Ub(14,"div",8),l.Pb(15,"text-input",11),l.ec(16,"translate"),l.zc(17,V,2,0,"div",10),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.zc(18,U,2,6,"submit-disclaimer",12),l.zc(19,F,1,2,"submit-message",13),l.Tb(),l.Ub(20,"app-buttons",14),l.Ub(21,"div",15),l.Ub(22,"div",16),l.Ub(23,"div",17),l.zc(24,x,2,4,"app-button",18),l.zc(25,S,2,3,"app-button",19),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.zc(26,O,2,3,"no-border-button",20),l.Tb(),l.Tb(),l.Pb(27,"dynamic-widget",21),l.Tb()),2&t&&(l.Cb(1),l.kc("progressValue",e.flowPercent),l.Cb(3),l.lc("title",l.fc(5,19,"ask_name_question")),l.Cb(2),l.kc("componentId","app-content")("triggerAnimateEffect",e.triggerAnimateEffect),l.Cb(3),l.kc("formGroup",e.form),l.Cb(2),l.lc("placeholder",l.fc(12,21,"first_name_hint")),l.kc("form",e.form),l.Cb(2),l.kc("ngIf",(null==e.form.controls.firstname||null==e.form.controls.firstname.errors?null:e.form.controls.firstname.errors.required)&&(null==e.form.controls.firstname?null:e.form.controls.firstname.touched)),l.Cb(2),l.lc("placeholder",l.fc(16,23,"last_name_hint")),l.kc("form",e.form),l.Cb(2),l.kc("ngIf",(null==e.form.controls.lastname||null==e.form.controls.lastname.errors?null:e.form.controls.lastname.errors.required)&&(null==e.form.controls.lastname?null:e.form.controls.lastname.touched)),l.Cb(1),l.kc("ngIf",e.isFinalScreen),l.Cb(1),l.kc("ngIf",e.isFinalScreen),l.Cb(1),l.kc("componentId","app-buttons"),l.Cb(3),l.kc("ngSwitch",e.isFinalScreen),l.Cb(1),l.kc("ngSwitchCase",!0),l.Cb(1),l.kc("ngSwitchCase",!1),l.Cb(1),l.kc("ngIf",e.skipScreen),l.Cb(1),l.kc("widgets",e.widgets))},directives:[u.a,p.a,b.a,d.a,f.a,m.a,s.p,s.k,g.a,s.f,h.a,r.l,v.a,r.m,r.n,k.a,C.a,y.a,w.a,T.a],pipes:[c.c],encapsulation:2}),t})()}];let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({imports:[[o.e.forChild(z),a.a,c.b,r.c,s.g,s.n]]}),t})()},dJxU:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("fXoL"),s=n("zK9L"),o=n("VTD4");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Ib({type:t,selectors:[["title-banner"]],inputs:{title:"title"},decls:5,vars:2,consts:[[3,"componentId"],[1,"row"],[1,"col-12","text-center"],[1,"font-heaviest","page-title-wrapper"],[3,"title"]],template:function(t,e){1&t&&(r.Ub(0,"banner",0),r.Ub(1,"div",1),r.Ub(2,"div",2),r.Ub(3,"h1",3),r.Pb(4,"page-title",4),r.Tb(),r.Tb(),r.Tb(),r.Tb()),2&t&&(r.kc("componentId","app-banner"),r.Cb(4),r.kc("title",e.title))},directives:[s.a,o.a],encapsulation:2}),t})()},mHFS:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n("DidZ"),s=n("fXoL");let o=(()=>{class t{constructor(){}get currentPercentage(){return this.currentPercentageValue}set currentPercentage(t){this.currentPercentageValue=t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var a=n("ofXK"),c=n("RzIq");let i=(()=>{class t extends c.a{constructor(){super()}ngOnInit(){}onClickFn(t){history.back()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["icon-button"]],inputs:{icon:"icon"},features:[s.zb],decls:2,vars:1,consts:[[1,"progress-bar-back",3,"click"],["src","assets/img/back_icon.svg","alt","",3,"ngClass"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.bc("click",function(t){return e.onClickFn(t)}),s.Pb(1,"img",1),s.Tb()),2&t&&(s.Cb(1),s.kc("ngClass",e.icon))},directives:[a.j],encapsulation:2}),t})();const l=function(t){return{"block-hide":t}};function u(t,e){if(1&t&&(s.Ub(0,"div",1),s.Ub(1,"div",2),s.Bc(2),s.Tb(),s.Ub(3,"div",3),s.Pb(4,"icon-button"),s.Ub(5,"div",4),s.Pb(6,"div",5),s.Pb(7,"div",6),s.Tb(),s.Tb(),s.Tb()),2&t){const t=s.dc();s.Cb(1),s.kc("ngClass",s.nc(4,l,!t.displayPercentNumber)),s.Cb(1),s.Dc(" ",t.progressPercent,"% "),s.Cb(5),s.yc("width",t.progressWidth+"%")}}let p=(()=>{class t{constructor(t){this.progressBarService=t,this.maxValue=r.a.progressDefaults.maxValue,this.minValue=r.a.progressDefaults.minValue,this.currentValue=r.a.progressDefaults.currentValue,this.progressPercent=r.a.progressDefaults.progressPercentValue,this.displayPercentNumber=r.a.progressDefaults.displayPercentNumber}ngOnInit(){this.progressWidth=this.calculateProgressWidth(),this.simulateAnimation()}calculateProgressWidth(){return this.progressPercent=this.progressValue?this.progressValue:Math.floor((this.currentValue-this.minValue)/(this.maxValue-this.minValue)*100),this.calculateDisplayWidth(this.progressPercent)}calculateDisplayWidth(t){return Math.floor(t)+r.a.progressDefaults.gapOfWidth}simulateAnimation(){const t=this.calculateDisplayWidth(this.progressBarService.currentPercentage||0),e=this.progressWidth;t!==e&&(this.progressWidth=t,setTimeout(()=>this.progressWidth=e),this.progressBarService.currentPercentage=this.progressPercent)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(o))},t.\u0275cmp=s.Ib({type:t,selectors:[["progress-bar"]],inputs:{maxValue:"maxValue",minValue:"minValue",currentValue:"currentValue",progressValue:"progressValue"},decls:1,vars:1,consts:[["id","nav-progress-bar","class","progress-bar-container",4,"ngIf"],["id","nav-progress-bar",1,"progress-bar-container"],[1,"progress-bar-label",3,"ngClass"],[1,"progress-bar-wrapper"],[1,"progress-bar"],[1,"progress-bar-fill-starter"],[1,"progress-bar-fill"]],template:function(t,e){1&t&&s.zc(0,u,8,6,"div",0),2&t&&s.kc("ngIf",e.progressPercent>0)},directives:[a.l,a.j,i],encapsulation:2}),t})()},rae3:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n("fXoL"),s=n("3Pt+"),o=n("DidZ"),a=n("ofXK");const c=function(t){return{error:t}};function i(t,e){if(1&t&&r.Pb(0,"input",3),2&t){const t=r.dc();r.kc("formControl",t.control)("ngClass",r.nc(3,c,(null==t.control?null:t.control.errors)&&t.control.touched))("placeholder",t.placeholder)}}function l(t,e){if(1&t){const t=r.Vb();r.Ub(0,"input",4),r.bc("ngModelChange",function(e){return r.uc(t),r.dc().value=e})("ngModelChange",function(e){return r.uc(t),r.dc().modelChangeFn(e)}),r.Tb()}if(2&t){const t=r.dc();r.kc("ngModel",t.value)("placeholder",t.placeholder)}}function u(t,e){1&t&&r.Qb(0)}let p=(()=>{class t{constructor(){this.validators=[s.o.required],this.asyncValidators=[],this.updateOn=o.a.updateOnForm.change,this.valueChange=new r.n}ngOnInit(){this.form&&(this.form.contains(this.controlName)?this.control=this.form.controls[this.controlName]:(this.control=new s.c(this.value,{validators:this.validators,asyncValidators:this.asyncValidators,updateOn:this.updateOn}),this.form.addControl(this.controlName,this.control)))}modelChangeFn(t){this.valueChange.emit(this.value)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Ib({type:t,selectors:[["text-input"]],inputs:{value:"value",label:"label",placeholder:"placeholder",styles:"styles",form:"form",controlName:"controlName",validators:"validators",asyncValidators:"asyncValidators",updateOn:"updateOn"},outputs:{valueChange:"valueChange"},decls:5,vars:1,consts:[["withinFormTemplate",""],["withoutFormTemplate",""],[4,"ngTemplateOutlet"],["type","text",3,"formControl","ngClass","placeholder"],["type","text",3,"ngModel","placeholder","ngModelChange"]],template:function(t,e){if(1&t&&(r.zc(0,i,1,5,"ng-template",null,0,r.Ac),r.zc(2,l,1,2,"ng-template",null,1,r.Ac),r.zc(4,u,1,0,"ng-container",2)),2&t){const t=r.sc(1),n=r.sc(3);r.Cb(4),r.kc("ngTemplateOutlet",e.form?t:n)}},directives:[a.p,s.b,s.j,s.d,a.j,s.l],encapsulation:2}),t})()},tQNN:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("DidZ"),s=n("fXoL"),o=n("JH1z");let a=(()=>{class t{constructor(t,e,n){this.navigationFlowService=t,this.default=!0,this.faster=!0,this.navigationFlowService.isBackwardNavigated()?e.addClass(n.nativeElement,r.a.animate.slideLeft):e.addClass(n.nativeElement,r.a.animate.slideRight)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(o.a),s.Ob(s.E),s.Ob(s.l))},t.\u0275dir=s.Jb({type:t,selectors:[["","navigate-animate",""]],hostVars:4,hostBindings:function(t,e){2&t&&s.Gb("animate__animated",e.default)("animate__faster",e.faster)}}),t})()}}]);