(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _groups_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups/group-detail/group-detail.component */ "./src/app/groups/group-detail/group-detail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");





var routes = [
    { path: '', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"] },
    { path: 'group/:id', component: _groups_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_1__["GroupDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<!-- <div class=\"container\"> -->\r\n  <!-- <div [ngStyle]=\"{'background-image': 'url(./assets/img/wallpaper.jpg)'}\"> -->\r\n    <div class=\"row\" >\r\n      <div class=\"col-lg-12\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  <!-- </div> -->\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'groups-hive';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _groups_group_detail_peoplegroup_list_modal_change_avatar_person_modal_change_avatar_person_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component */ "./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.ts");
/* harmony import */ var _groups_group_detail_modal_mail_sender_modal_mail_sender_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groups/group-detail/modal-mail-sender/modal-mail-sender.component */ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.ts");
/* harmony import */ var _groups_group_detail_modal_change_description_modal_change_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups/group-detail/modal-change-description/modal-change-description.component */ "./src/app/groups/group-detail/modal-change-description/modal-change-description.component.ts");
/* harmony import */ var _getip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getip.service */ "./src/app/getip.service.ts");
/* harmony import */ var _groups_group_detail_modal_remove_group_modal_remove_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./groups/group-detail/modal-remove-group/modal-remove-group.component */ "./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.ts");
/* harmony import */ var _groups_group_detail_peoplegroup_list_peoplegroup_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groups/group-detail/peoplegroup-list/peoplegroup-list.component */ "./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.ts");
/* harmony import */ var _groups_filter_dontshowinstart_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./groups/filter-dontshowinstart.pipe */ "./src/app/groups/filter-dontshowinstart.pipe.ts");
/* harmony import */ var _groups_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/filter.pipe */ "./src/app/groups/filter.pipe.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _groups_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groups/groups-list/groups-list.component */ "./src/app/groups/groups-list/groups-list.component.ts");
/* harmony import */ var _groups_group_item_group_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./groups/group-item/group-item.component */ "./src/app/groups/group-item/group-item.component.ts");
/* harmony import */ var _groups_group_newModal_group_newModal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./groups/group-newModal/group-newModal.component */ "./src/app/groups/group-newModal/group-newModal.component.ts");
/* harmony import */ var _groups_group_newModal_person_person_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./groups/group-newModal/person/person.component */ "./src/app/groups/group-newModal/person/person.component.ts");
/* harmony import */ var _groups_group_newModal_person_group_person_group_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./groups/group-newModal/person-group/person-group.component */ "./src/app/groups/group-newModal/person-group/person-group.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _groups_group_newModal_person_group_person_group_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./groups/group-newModal/person-group/person-group.service */ "./src/app/groups/group-newModal/person-group/person-group.service.ts");
/* harmony import */ var _groups_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./groups/group-detail/group-detail.component */ "./src/app/groups/group-detail/group-detail.component.ts");
/* harmony import */ var _groups_group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./groups/group-detail/group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _groups_group_detail_modal_change_avatar_group_modal_change_avatar_group_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component */ "./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_header_modal_change_avatar_account_modal_change_avatar_account_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./core/header/modal-change-avatar-account/modal-change-avatar-account.component */ "./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_18__["GroupsComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _groups_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_19__["GroupsListComponent"],
                _groups_group_item_group_item_component__WEBPACK_IMPORTED_MODULE_20__["GroupItemComponent"],
                _groups_group_newModal_group_newModal_component__WEBPACK_IMPORTED_MODULE_21__["GroupNewModalComponent"],
                _groups_group_newModal_person_person_component__WEBPACK_IMPORTED_MODULE_22__["PersonComponent"],
                _groups_group_newModal_person_group_person_group_component__WEBPACK_IMPORTED_MODULE_23__["PersonGroupComponent"],
                _groups_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
                _groups_filter_dontshowinstart_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterDontshowinstartPipe"],
                _groups_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_28__["GroupDetailComponent"],
                _groups_group_detail_peoplegroup_list_peoplegroup_list_component__WEBPACK_IMPORTED_MODULE_6__["PeoplegroupListComponent"],
                _groups_group_detail_modal_remove_group_modal_remove_group_component__WEBPACK_IMPORTED_MODULE_5__["ModalRemoveGroupComponent"],
                _groups_group_detail_modal_change_avatar_group_modal_change_avatar_group_component__WEBPACK_IMPORTED_MODULE_30__["ModalChangeAvatarGroupComponent"],
                _groups_group_detail_modal_change_description_modal_change_description_component__WEBPACK_IMPORTED_MODULE_3__["ModalChangeDescriptionComponent"],
                _groups_group_detail_modal_mail_sender_modal_mail_sender_component__WEBPACK_IMPORTED_MODULE_2__["ModalMailSenderComponent"],
                _groups_group_detail_peoplegroup_list_modal_change_avatar_person_modal_change_avatar_person_component__WEBPACK_IMPORTED_MODULE_1__["ModalChangeAvatarPersonComponent"],
                _core_header_modal_change_avatar_account_modal_change_avatar_account_component__WEBPACK_IMPORTED_MODULE_32__["ModalChangeAvatarAccountComponent"]
                // DropdownDirective
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_31__["SharedModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_24__["AngularFontAwesomeModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_25__["TooltipModule"].forRoot(),
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["ScrollingModule"]
                // DropdownDirective
            ],
            providers: [
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["BsModalRef"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                _groups_group_newModal_person_group_person_group_service__WEBPACK_IMPORTED_MODULE_27__["PersonGroupService"],
                _groups_group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_29__["GroupDetailService"],
                _getip_service__WEBPACK_IMPORTED_MODULE_4__["GetipService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]
            ],
            entryComponents: [
                _groups_group_newModal_group_newModal_component__WEBPACK_IMPORTED_MODULE_21__["GroupNewModalComponent"],
                _groups_group_detail_modal_remove_group_modal_remove_group_component__WEBPACK_IMPORTED_MODULE_5__["ModalRemoveGroupComponent"],
                _groups_group_detail_modal_change_avatar_group_modal_change_avatar_group_component__WEBPACK_IMPORTED_MODULE_30__["ModalChangeAvatarGroupComponent"],
                _groups_group_detail_modal_change_description_modal_change_description_component__WEBPACK_IMPORTED_MODULE_3__["ModalChangeDescriptionComponent"],
                _groups_group_detail_modal_mail_sender_modal_mail_sender_component__WEBPACK_IMPORTED_MODULE_2__["ModalMailSenderComponent"],
                _groups_group_detail_peoplegroup_list_modal_change_avatar_person_modal_change_avatar_person_component__WEBPACK_IMPORTED_MODULE_1__["ModalChangeAvatarPersonComponent"],
                _core_header_modal_change_avatar_account_modal_change_avatar_account_component__WEBPACK_IMPORTED_MODULE_32__["ModalChangeAvatarAccountComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _groups_people_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../groups/people.model */ "./src/app/groups/people.model.ts");
/* harmony import */ var src_app_getip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/getip.service */ "./src/app/getip.service.ts");
/* harmony import */ var _groups_peopleGroup_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../groups/peopleGroup.model */ "./src/app/groups/peopleGroup.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AuthService = /** @class */ (function () {
    function AuthService(route, http, router, getipService) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.getipService = getipService;
        // private user = new PeopleDb('', '', '', '', '');
        this.user = new _groups_people_model__WEBPACK_IMPORTED_MODULE_1__["People"]('', '', '', ['', ''], { adfsUID: '', uniqueID: '' }, [{ adfsUID: '', uniqueID: '' }], '', '');
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        console.log(user);
        /** Shraga */
        this.user = new _groups_people_model__WEBPACK_IMPORTED_MODULE_1__["People"](user.id, user.displayName, '111111', [''], { adfsUID: 'first@sadasd', uniqueID: 'first@fdsfl.idf' }, [{ adfsUID: 'first@fgh', uniqueID: 'first@fgh.idf' }], user.mail, "assets/img/guest.png");
        this.http.post('http://' + this.getipService.getip() + ':5000/api/checkUser', this.user).subscribe(function (res) {
            if (res != { message: "User created!" }) {
                _this.user = new _groups_people_model__WEBPACK_IMPORTED_MODULE_1__["People"](res._id, res.fullName, res.personalNumber, res.hierarchy, res.primaryDomainUser, res.secondaryDomainUsers, res.mail, res.avatarPath);
            }
        });
        /** Angular */
        // this.user = new People('5d2594e36fcb691a0d178a71', 'first', '111111', ['aman', 'modiin'], { adfsUID: 'first@sadasd', uniqueID: 'first@fdsfl.idf'}, [{ adfsUID: 'first@fgh', uniqueID: 'first@fgh.idf'}, { adfsUID: 'first@qwe', uniqueID: 'first@qwe.idf'}], 'first@test.com', 'assets/img/guest.png');
        // this.http.post('http://' + this.getipService.getip() + ':5000/api/checkUser', this.user).subscribe((res: any) => {
        //     console.log(res);
        //     if(res != { message: "User created!" }){
        //         this.user = new People(res._id, res.fullName, res.personalNumber, res.hierarchy, res.primaryDomainUser, res.secondaryDomainUsers, res.mail, res.avatarPath);
        //     }
        // });
    };
    AuthService.prototype.logout = function () {
    };
    // public getId() {
    //     return this.user._id;
    // }
    // public getNumber() {
    //     return this.user.number;
    // }
    AuthService.prototype.getName = function () {
        // return this.user.name;
        return this.user.fullName;
    };
    AuthService.prototype.getId = function () {
        return this.user._id;
    };
    AuthService.prototype.getEmail = function () {
        // return this.user.email;
        return this.user.mail;
    };
    AuthService.prototype.getAvatarPath = function () {
        return this.user.avatarPath;
    };
    AuthService.prototype.setAvatarPath = function (avatar) {
        this.user.avatarPath = avatar;
        this.http.put('http://' + this.getipService.getip() + ':5000/api/updateUser', this.user).subscribe(function (res) {
            console.log(res);
            if (res === { message: "User Updated!" }) {
                return true;
            }
            else {
                return false;
            }
        });
        return false;
    };
    AuthService.prototype.setAvatarPathLocal = function (avatar) {
        this.user.avatarPath = avatar;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.getAcc = function () {
        // let acc = new PeopleGroup('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");
        // return acc;
        return this.user;
    };
    AuthService.prototype.getAccForGroup = function () {
        // let acc = new PeopleGroup(this.user._id, this.user.fullName, this.user.personalNumber, this.user.mail, true, this.user.avatarPath);
        var acc = new _groups_peopleGroup_model__WEBPACK_IMPORTED_MODULE_3__["PeopleGroup"](this.user, true);
        return acc;
    };
    AuthService.prototype.checkAdmin = function (people) {
        // let acc = new PeopleGroup('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");
        var _this = this;
        // var result = people.find( person => {
        //     return person.user.name === acc.user.name && person.admin === acc.admin;
        // });
        var result = people.find(function (person) {
            return person.user.fullName === _this.user.fullName && person.admin;
        });
        if (result) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_getip_service__WEBPACK_IMPORTED_MODULE_2__["GetipService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\r\n    background: url(../../../assets/img/background.jpg) no-repeat center center fixed;\r\n} */\r\n\r\n.backgrounds {\r\n    width: 150px;\r\n    height: 75px;\r\n    border-radius: 10%;\r\n}\r\n\r\n#userAvatar {\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 3px;\r\n}\r\n\r\n#userAvatar:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#userName {\r\n    color: white;\r\n    padding-top: 10px;\r\n}\r\n\r\n#btnBackgrounds {\r\n    cursor: pointer;\r\n    color: white;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n/* .backgrounds:hover {\r\n    color: slategray;\r\n} */\r\n\r\n.navbar {\r\n    background-color: black;\r\n    color: black;\r\n}\r\n\r\n.navbar-header a {\r\n    color: black;\r\n}\r\n\r\n.nav-item a {\r\n    color: white;\r\n}\r\n\r\nh2 {\r\n    color: white;\r\n}\r\n\r\nh2:hover {\r\n  color: slategrey;\r\n}\r\n\r\n#home:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    background-color: black\r\n}\r\n\r\nul li {\r\n\tfloat: left;\r\n\tpadding: 3px;\r\n\r\n}\r\n\r\nul li a {\r\n\tdisplay: block;\r\n\tpadding: 20px;\r\n\tcolor: #fff;\r\n    text-decoration: none;\r\n    font-weight: 700;\r\n}\r\n\r\nul li a:hover {\r\n\tbackground: #444;\r\n\t -webkit-transition-property: background-color;\r\n\t transition-property: background-color;\r\n   -webkit-transition-duration: 0.4s;\r\n           transition-duration: 0.4s;\r\n   -webkit-transition-timing-function: ease;\r\n           transition-timing-function: ease;\r\n   color: #FFF;\r\n\r\n\r\n\r\n}\r\n\r\nul li:hover {\r\n    background: #a3c2c2;\r\n    cursor: pointer;\r\n    border-radius: 10%;\r\n}\r\n\r\n.dropdown-menu {\r\n    background-color: black;\r\n}\r\n\r\n.form-control:focus {\r\n  box-shadow: none;\r\n}\r\n\r\n.form-control-underlined {\r\n  border-width: 0;\r\n  border-bottom-width: 1px;\r\n  border-radius: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.p-1{\r\n  padding: .35rem!important;\r\n}\r\n\r\n.form-inline {\r\n  margin-right: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZOztBQUViOztBQUdBO0NBQ0MsY0FBYztDQUNkLGFBQWE7Q0FDYixXQUFXO0lBQ1IscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtFQUNmLDZDQUFxQztFQUFyQyxxQ0FBcUM7R0FDcEMsaUNBQXlCO1dBQXpCLHlCQUF5QjtHQUN6Qix3Q0FBZ0M7V0FBaEMsZ0NBQWdDO0dBQ2hDLFdBQVc7Ozs7QUFJZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbn0gKi9cclxuXHJcbi5iYWNrZ3JvdW5kcyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbiN1c2VyQXZhdGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuI3VzZXJBdmF0YXI6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jdXNlck5hbWUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNidG5CYWNrZ3JvdW5kcyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLyogLmJhY2tncm91bmRzOmhvdmVyIHtcclxuICAgIGNvbG9yOiBzbGF0ZWdyYXk7XHJcbn0gKi9cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXItaGVhZGVyIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0gYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDI6aG92ZXIge1xyXG4gIGNvbG9yOiBzbGF0ZWdyZXk7XHJcbn1cclxuXHJcbiNob21lOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXHJcbn1cclxuXHJcbnVsIGxpIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRwYWRkaW5nOiAzcHg7XHJcblxyXG59XHJcblxyXG5cclxudWwgbGkgYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnVsIGxpIGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICM0NDQ7XHJcblx0IHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XHJcbiAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICBjb2xvcjogI0ZGRjtcclxuXHJcblxyXG5cclxufVxyXG5cclxudWwgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2EzYzJjMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtdW5kZXJsaW5lZCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnAtMXtcclxuICBwYWRkaW5nOiAuMzVyZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <div class=\"row\">\r\n\r\n\r\n            <p>\r\n               <a href=\"/\">\r\n                <img border=\"0\" src=\"assets/img/z.jpg\" style=\"width:180px; height:30px; position:absolute; top: 12px;\">\r\n                </a>\r\n            </p>\r\n\r\n        <!--\r\n         <img id=\"logoSite\" (click)=\"onHome()\" src=\"assets/img/la.jpg\" alt=\"avatar\" style=\"width:160px; height:40px\" >\r\n        <a (click)=\"onHome()\" id=\"home\"><h2>z</h2></a> -->\r\n        <!-- <img id=\"userAvatar\" [src]=\"ervice.getAvatarPath()\" alt=\"avatar\" (click)=\"onChangeAvatar()\">\r\n        <h5 id=\"userName\">{{ authService.getName() }}</h5> -->\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"collaps navbar-collapse\">\r\n      </div> -->\r\n      <div class=\"navbar-nav nav-right\">\r\n\r\n          <!-- <div class=\"p-1 bg-light rounded rounded-pill shadow-sm mb-4\"> -->\r\n              <!-- <div class=\"input-group\"> -->\r\n                <!-- <input type=\"search\" name=\"nameGroup\" [(ngModel)]=\"nameGroup\" placeholder=\"Search groups\" aria-describedby=\"button-addon1\" class=\"form-control border-0 bg-light\"> -->\r\n                <!-- <input type=\"search\" name=\"nameGroup\" placeholder=\"Search groups\" aria-describedby=\"button-addon1\" class=\"form-control border-0 bg-light\">\r\n                <div class=\"input-group-append\">\r\n                  <button id=\"button-addon1\" type=\"submit\" class=\"btn btn-link text-primary\"><i class=\"fa fa-search\"></i></button>\r\n                </div>\r\n              </div>\r\n          </div> -->\r\n\r\n        <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form> -->\r\n        <img id=\"userAvatar\" class=\"navbar-nav nav-right\" style=\"width:30px; height:30px;\" [src]=\"authService.getAvatarPath()\"\r\n          alt=\"avatar\" (click)=\"onChangeAvatar()\">\r\n          <span>&</span>\r\n        <h5 id=\"userName\" style=\"padding-right:40px; padding-top:5px;\">Hello {{ authService.getName() }}</h5>\r\n        <li class=\"dropdown\" appDropdown #r=\"appDropdown\" style=\"align-items: center;\" >\r\n            <a id=\"btnBackgrounds\" class=\"dropdown-toggle\" role=\"button\">Backgrounds <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\" [ngClass]=\"{'show':r.isOpen}\">\r\n              <ng-container *ngFor=\"let background of backgrounds\">\r\n                <li (click)=\"onChooseBackground(background)\"><img class=\"backgrounds\" src=\"assets/img/backgrounds/{{ background }}\" alt=\"image\"></li>\r\n              </ng-container>\r\n          </ul>\r\n      </li>\r\n      </div>\r\n  </div>\r\n\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _getip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../getip.service */ "./src/app/getip.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _groups_group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../groups/group-detail/group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_change_avatar_account_modal_change_avatar_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-change-avatar-account/modal-change-avatar-account.component */ "./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");









var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, router, groupDetailService, elementRef, http, getipService, authService, modalRef, modalService) {
        this.route = route;
        this.router = router;
        this.groupDetailService = groupDetailService;
        this.elementRef = elementRef;
        this.http = http;
        this.getipService = getipService;
        this.authService = authService;
        this.modalRef = modalRef;
        this.modalService = modalService;
        this.backgrounds = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg', 'background5.jpg'];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** Shraga */
        this.http.get('http://' + this.getipService.getip() + ':4200/user').subscribe(function (res) {
            _this.authService.login(res);
            console.log(_this.authService.getUser());
        });
        /** Angular */
        // this.authService.login("dasd");
    };
    HeaderComponent.prototype.onHome = function () {
        // this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(assets/img/backgrounds/background2.jpg) no-repeat center center fixed';
        this.groupDetailService.cleanGroup();
        this.router.navigate(['/'], { relativeTo: this.route });
    };
    HeaderComponent.prototype.onChooseBackground = function (background) {
        this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(assets/img/backgrounds/' + background + ') no-repeat center center fixed';
    };
    HeaderComponent.prototype.onChangeAvatar = function () {
        this.modalRef = this.modalService.show(_modal_change_avatar_account_modal_change_avatar_account_component__WEBPACK_IMPORTED_MODULE_7__["ModalChangeAvatarAccountComponent"], {
            initialState: {
                title: 'Change Avatar Of Account',
                imgPath: this.authService.getAvatarPath()
            }
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _groups_group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_4__["GroupDetailService"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _getip_service__WEBPACK_IMPORTED_MODULE_2__["GetipService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import url(\"https://fonts.googleapis.com/css?family=Saira+Condensed\"); */\r\nhtml {\r\n    box-sizing: border-box;\r\n  }\r\nhtml *,\r\n  html *:after,\r\n  html *:before {\r\n    box-sizing: inherit;\r\n  }\r\n#text {\r\n      /* width:auto;\r\n      max-width: 100%;\r\n      overflow:hidden;\r\n      background-color:#FFF;\r\n      color:#222;\r\n      font-family:Courier, monospace;\r\n      font-weight:normal;\r\n      font-size:18px;\r\n      resize:none;\r\n      line-height:40px;\r\n      padding-left:100px;\r\n      padding-right:30px;\r\n      padding-top:45px;\r\n      padding-bottom:34px;\r\n      background-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);\r\n      background-repeat:repeat-y, repeat;\r\n      -webkit-border-radius:12px;\r\n      border-radius:12px;\r\n      -webkit-box-shadow: 0px 2px 14px #000;\r\n      box-shadow: 0px 2px 14px #000;\r\n      border-top:1px solid #FFF;\r\n      border-bottom:1px solid #FFF; */\r\n      \r\n      display: block;\r\n      width: 100%;\r\n      padding: 5px 0;\r\n      margin-bottom: 10px;\r\n      background: none;\r\n      border: 0;\r\n      outline: 0;\r\n      font-size: 1.5em;\r\n      font-weight: 400;\r\n      font-family: inherit;\r\n  }\r\n/* textarea {\r\n      height:200px;\r\n      max-width:600px;\r\n      color:#999;\r\n      font-weight:400;\r\n      font-size:30px;\r\n      font-family:'Ubuntu', Helvetica, Arial, sans-serif;\r\n      width:100%;\r\n      background:#fff;\r\n      border-radius:3px;\r\n      line-height:2em;\r\n      border:none;\r\n      box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);\r\n      padding:30px;\r\n      -webkit-transition: height 2s ease;\r\n      -moz-transition: height 2s ease;\r\n      -ms-transition: height 2s ease;\r\n      -o-transition: height 2s ease;\r\n      transition: height 2s ease;\r\n  }\r\n  \r\n  * {\r\n      -webkit-font-smoothing:antialiased !important;\r\n  } */\r\nbody {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    background-color: #fe7b1a;\r\n  }\r\n.form {\r\n    max-width: 35em;\r\n    width: 100%;\r\n    padding: 4em;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    box-shadow: 0 0 40px 2px rgba(48, 48, 48, 0.22);\r\n  }\r\n.form__fieldset {\r\n    padding: 0;\r\n    border: 0;\r\n    margin: 0;\r\n  }\r\n.form__legend {\r\n    font-size: 1.5em;\r\n    margin-bottom: 1em;\r\n    color: #3e3e42;\r\n  }\r\n.form__label {\r\n    display: block;\r\n  }\r\n.form__input {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    margin-bottom: 10px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 400;\r\n    font-family: inherit;\r\n  }\r\n.form__input:not(:last-of-type) {\r\n    border-bottom: 1px solid #e4e4e4;\r\n  }\r\n.form__input::-webkit-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n.form__input::-ms-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n.form__input::-moz-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n.form__input::placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n.form__btn {\r\n    position: relative;\r\n    z-index: 1;\r\n    display: block;\r\n    width: 140px;\r\n    height: 40px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    color: #fe7b1a;\r\n    border: 0;\r\n    padding: .5em 3.5em;\r\n    border-radius: 25px;\r\n    border-radius: 0;\r\n    margin-top: 1.5em;\r\n    font-family: inherit;\r\n    box-shadow: inset 0 0 0 1px #e4e4e4;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n    -webkit-transition-delay: .4s;\r\n            transition-delay: .4s;\r\n  }\r\n.is-valid .form__btn {\r\n    color: #fff;\r\n    -webkit-transition-delay: 0;\r\n            transition-delay: 0;\r\n  }\r\n.form__btn::before {\r\n    content: ' ';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    background-color: #fe7b1a;\r\n    border-radius: inherit;\r\n    -webkit-transform: scaleX(0);\r\n            transform: scaleX(0);\r\n    -webkit-transition: all .5s ease-in-out;\r\n    transition: all .5s ease-in-out;\r\n  }\r\n.is-valid .form__btn::before {\r\n    -webkit-transform: scaleX(1);\r\n            transform: scaleX(1);\r\n    -webkit-transition-delay: .3s;\r\n            transition-delay: .3s;\r\n  }\r\n.form__indicator {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.form__indicator .progressbar {\r\n    stroke-width: 2px;\r\n    stroke: #fe7b1a;\r\n    fill: none;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvbW9kYWwtY2hhbmdlLWF2YXRhci1hY2NvdW50L21vZGFsLWNoYW5nZS1hdmF0YXItYWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUM1RTtJQUNJLHNCQUFzQjtFQUN4QjtBQUNBOzs7SUFHRSxtQkFBbUI7RUFDckI7QUFLQTtNQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBcUIrQjs7TUFFL0IsY0FBYztNQUNkLFdBQVc7TUFDWCxjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixTQUFTO01BQ1QsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsb0JBQW9CO0VBQ3hCO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdUJHO0FBRUg7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLCtDQUErQztFQUNqRDtBQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0VBQ1g7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBS0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFIQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQiw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNEJBQTRCO1lBQ3BCLG9CQUFvQjtJQUM1Qix1Q0FBK0I7SUFBL0IsK0JBQStCO0VBQ2pDO0FBQ0E7SUFDRSw0QkFBNEI7WUFDcEIsb0JBQW9CO0lBQzVCLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0lBQ1YsdUNBQStCO0lBQS9CLCtCQUErQjtFQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL21vZGFsLWNoYW5nZS1hdmF0YXItYWNjb3VudC9tb2RhbC1jaGFuZ2UtYXZhdGFyLWFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNhaXJhK0NvbmRlbnNlZFwiKTsgKi9cclxuaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBodG1sICosXHJcbiAgaHRtbCAqOmFmdGVyLFxyXG4gIGh0bWwgKjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgI3RleHQge1xyXG4gICAgICAvKiB3aWR0aDphdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkZGO1xyXG4gICAgICBjb2xvcjojMjIyO1xyXG4gICAgICBmb250LWZhbWlseTpDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgIHJlc2l6ZTpub25lO1xyXG4gICAgICBsaW5lLWhlaWdodDo0MHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6MTAwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6MzBweDtcclxuICAgICAgcGFkZGluZy10b3A6NDVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MzRweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9zdGF0aWMudHVtYmxyLmNvbS9tYW9wYnRnL0U5Qm1ndG9odC9saW5lcy5wbmcpLCB1cmwoaHR0cHM6Ly9zdGF0aWMudHVtYmxyLmNvbS9tYW9wYnRnL25CVW1ndG9neC9wYXBlci5wbmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteSwgcmVwZWF0O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMTRweCAjMDAwO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMnB4IDE0cHggIzAwMDtcclxuICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0ZGRjtcclxuICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0ZGRjsgKi9cclxuICAgICAgXHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHRleHRhcmVhIHtcclxuICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6NjAwcHg7XHJcbiAgICAgIGNvbG9yOiM5OTk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OidVYnVudHUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDoyZW07XHJcbiAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICBib3gtc2hhZG93OjBweCAwcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgIHBhZGRpbmc6MzBweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgICAgLW1zLXRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlO1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gICoge1xyXG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmEgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTdiMWE7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIHtcclxuICAgIG1heC13aWR0aDogMzVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDJweCByZ2JhKDQ4LCA0OCwgNDgsIDAuMjIpO1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9fZmllbGRzZXQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1fX2xlZ2VuZCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgY29sb3I6ICMzZTNlNDI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtX19sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1fX2lucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogI2U0ZTRlNDtcclxuICB9XHJcbiAgLmZvcm1fX2lucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogI2U0ZTRlNDtcclxuICB9XHJcbiAgLmZvcm1fX2lucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtX19idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBjb2xvcjogI2ZlN2IxYTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IC41ZW0gMy41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2U0ZTRlNDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuNHM7XHJcbiAgfVxyXG4gIC5pcy12YWxpZCAuZm9ybV9fYnRuIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMDtcclxuICB9XHJcbiAgLmZvcm1fX2J0bjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlN2IxYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5pcy12YWxpZCAuZm9ybV9fYnRuOjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtX19pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5mb3JtX19pbmRpY2F0b3IgLnByb2dyZXNzYmFyIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgc3Ryb2tlOiAjZmU3YjFhO1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"row align-items-center justify-content-center\">\r\n            <div class=\"col-xs-2\" style=\"float: left;\">\r\n              <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onBack()\"><i class=\"fa fa-arrow-circle-o-left fa-2x\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n            <div class=\"col-xs-8\">\r\n              <img [src]=\"imgPath\" style=\"width: 150px;\">\r\n            </div>\r\n            <div class=\"col-xs-2 align-items-right\" style=\"float: right;\">\r\n              <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onForward()\"><i class=\"fa fa-arrow-circle-o-right fa-2x\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSaveAvatar()\">Save</button>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n\r\n<div class=\"modal-content modal modal-wide\" style=\"width: auto; max-width: 600px;\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"width: auto; height: auto; max-height: 100%;\">\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-12\">\r\n            <form class=\"form\">\r\n              <fieldset class=\"form__fieldset\">\r\n            \r\n                <legend class=\"form__legend\">{{ title }}</legend>\r\n            \r\n                <label class=\"form__label\" for=\"subject\"></label>\r\n                <div class=\"row align-items-center justify-content-center\">\r\n                  <div class=\"col-xs-2\" style=\"float: left;\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onBack()\"><i class=\"fa fa-arrow-circle-o-left fa-2x\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                  <div class=\"col-xs-8\">\r\n                    <img [src]=\"imgPath\" style=\"width: 150px;\">\r\n                  </div>\r\n                  <div class=\"col-xs-2 align-items-right\" style=\"float: right;\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onForward()\"><i class=\"fa fa-arrow-circle-o-right fa-2x\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n            </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSaveAvatar()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ModalChangeAvatarAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalChangeAvatarAccountComponent", function() { return ModalChangeAvatarAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");

// import { PeopleGroup } from './../../../peopleGroup.model';



// import { GroupDetailService } from '../../group-detail.service';
var ModalChangeAvatarAccountComponent = /** @class */ (function () {
    function ModalChangeAvatarAccountComponent(modalRef, authService) {
        this.modalRef = modalRef;
        this.authService = authService;
        this.imgNumber = 1;
    }
    // imgPath: string = "assets/img/people/person1.png";
    ModalChangeAvatarAccountComponent.prototype.ngOnInit = function () {
        // console.log(this.title);
        // console.log(this.personIndex);
    };
    ModalChangeAvatarAccountComponent.prototype.onForward = function () {
        if (this.imgNumber === 9) {
            this.imgNumber = 1;
        }
        else {
            this.imgNumber++;
        }
        console.log(this.imgNumber);
        this.imgPath = "assets/img/people/person" + this.imgNumber + ".png";
    };
    ModalChangeAvatarAccountComponent.prototype.onBack = function () {
        if (this.imgNumber === 1) {
            this.imgNumber = 9;
        }
        else {
            this.imgNumber--;
        }
        console.log(this.imgNumber);
        this.imgPath = "assets/img/people/person" + this.imgNumber + ".png";
    };
    ModalChangeAvatarAccountComponent.prototype.onSaveAvatar = function () {
        var _this = this;
        if (this.authService.setAvatarPath(this.imgPath)) {
            this.modalRef.hide();
        }
        // this.groupDetailService.updateAvatarOfPerson(this.person, this.personIndex);
        setTimeout(function () {
            _this.modalRef.hide();
            // window.location.reload();
        }, 200);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalChangeAvatarAccountComponent.prototype, "imgPath", void 0);
    ModalChangeAvatarAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-change-avatar-account',
            template: __webpack_require__(/*! ./modal-change-avatar-account.component.html */ "./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.html"),
            styles: [__webpack_require__(/*! ./modal-change-avatar-account.component.css */ "./src/app/core/header/modal-change-avatar-account/modal-change-avatar-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ModalChangeAvatarAccountComponent);
    return ModalChangeAvatarAccountComponent;
}());



/***/ }),

/***/ "./src/app/getip.service.ts":
/*!**********************************!*\
  !*** ./src/app/getip.service.ts ***!
  \**********************************/
/*! exports provided: GetipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetipService", function() { return GetipService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GetipService = /** @class */ (function () {
    function GetipService() {
    }
    GetipService.prototype.getip = function () {
        return "localhost";
        // return "52.164.251.204";
    };
    GetipService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GetipService);
    return GetipService;
}());



/***/ }),

/***/ "./src/app/groups/filter-dontshowinstart.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/groups/filter-dontshowinstart.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FilterDontshowinstartPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDontshowinstartPipe", function() { return FilterDontshowinstartPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-detail/group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var FilterDontshowinstartPipe = /** @class */ (function () {
    function FilterDontshowinstartPipe(authService, groupDetailService) {
        this.authService = authService;
        this.groupDetailService = groupDetailService;
    }
    FilterDontshowinstartPipe.prototype.transform = function (arr, prop, value, method) {
        var _this = this;
        if (arr) {
            if (!value || value.length < 3) {
                return [];
            }
            else {
                return arr.filter(function (obj) { return _this.filter(obj[prop], value, method); });
            }
        }
        else {
            return [];
        }
    };
    FilterDontshowinstartPipe.prototype.filter = function (source, target, method) {
        switch (method) {
            case "includes": return source.toUpperCase().includes(target.toUpperCase());
            case "equal": return source === target;
            case "not-equal": return source !== target;
            case "addpeople": {
                if (this.groupDetailService.getGroup()) {
                    var groupAddPeople = this.groupDetailService.getPeople();
                    var sdf = groupAddPeople.filter(function (el) {
                        if (el.user.fullName.toUpperCase().includes(target.toUpperCase())) {
                            return true;
                        }
                    });
                    if (sdf.length > 0) {
                        return false;
                    }
                    else {
                        return source.toUpperCase().includes(target.toUpperCase());
                    }
                }
                else {
                    return source.toUpperCase().includes(target.toUpperCase());
                }
            }
        }
    };
    FilterDontshowinstartPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"])({
            name: 'filterdontshowinstart'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_1__["GroupDetailService"]])
    ], FilterDontshowinstartPipe);
    return FilterDontshowinstartPipe;
}());



/***/ }),

/***/ "./src/app/groups/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/groups/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (arr, prop, value, method) {
        var _this = this;
        if (arr) {
            if (!value || value.length < 3) {
                return arr;
            }
            else {
                if (prop.length == 2) {
                    return arr.filter(function (obj) { return _this.filter(obj[prop[0]][prop[1]], value, method); });
                }
                else {
                    return arr.filter(function (obj) { return _this.filter(obj[prop[0]], value, method); });
                }
            }
        }
        else {
            return [];
        }
    };
    FilterPipe.prototype.filter = function (source, target, method) {
        switch (method) {
            case "includes": return source.toUpperCase().includes(target.toUpperCase());
            case "equal": return source === target;
            case "not-equal": return source !== target;
        }
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/groups/group-detail/group-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/groups/group-detail/group-detail.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Hexagons */\r\n#hexGrid {\r\n    overflow: hidden;\r\n    width: 5%;\r\n    margin: 0 auto;\r\n    /* padding: 0.866% 0; */\r\n    padding: 3.7%;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 15px;\r\n}\r\n#cancel {\r\n    border-bottom-right-radius: 8%;\r\n    border-top-right-radius: 8%;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n    background: transparent;\r\n}\r\n#hexGrid:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n}\r\n.hex {\r\n    position: relative;\r\n    list-style-type: none;\r\n    float: left;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n    -webkit-transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n            transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n}\r\n.hex * {\r\n    position: absolute;\r\n    visibility: visible;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n}\r\n.hexIn {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    color: #fff;\r\n    overflow: hidden;\r\n    -webkit-transform: skewY(-30deg) rotate(60deg);\r\n            transform: skewY(-30deg) rotate(60deg);\r\n}\r\n/*** HEX CONTENT **********************************************************************/\r\n.hex img {\r\n    left: -100%;\r\n    right: -100%;\r\n    width: auto;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n}\r\n.hex h1, .hex p {\r\n    margin: 0;\r\n    width: 102%;\r\n    left: -1%;  /* prevent line on the right where background doesn't cover image */\r\n    padding: 5%;\r\n    box-sizing: border-box;\r\n    background-color: rgba(0, 128, 128, 0.8);\r\n    font-weight: 300;\r\n    -webkit-transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n}\r\n.hex h1 {\r\n    bottom: 50%;\r\n    padding-top: 50%;\r\n    font-size: 1.5em;\r\n    z-index: 1;\r\n    -webkit-transform: translateY(-100%) translatez(-1px);\r\n            transform: translateY(-100%) translatez(-1px);\r\n}\r\n.hex h1:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 45%;\r\n    width: 10%;\r\n    text-align: center;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.hex p {\r\n    top: 50%;\r\n    padding-bottom: 50%;\r\n    -webkit-transform: translateY(100%) translatez(-1px);\r\n            transform: translateY(100%) translatez(-1px);\r\n}\r\n/*** HOVER EFFECT  **********************************************************************/\r\n.hexIn:hover h1, .hexIn:focus h1, .hexIn:hover p, .hexIn:focus p {\r\n    -webkit-transform: translateY(0%) translatez(-1px);\r\n            transform: translateY(0%) translatez(-1px);\r\n}\r\n/*** SPACING AND SIZING *****************************************************************/\r\n@media (min-width:1201px) {  /* <- 2-3  hexagons per row */\r\n.hex {\r\n    width: 32.666%;    /* = (100-2) / 3 */\r\n    padding-bottom: 37.720%;    /* =  width / sin(60) */\r\n}\r\n.hex:nth-child(5n+1),\r\n.hex:nth-child(5n+2) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n}\r\n.hex:nth-child(5n+3),\r\n.hex:nth-child(5n+4),\r\n.hex:nth-child(5n+5) {\r\n    margin-top: -8.564%;\r\n    margin-bottom: -8.564%;\r\n}\r\n.hex:nth-child(5n+2),\r\n.hex:nth-child(5n+4) {\r\n    margin-right: 1%;\r\n    margin-left: 1%;\r\n}\r\n.hex:nth-child(5n+1) {\r\n    margin-left: 0.5%;\r\n}\r\n.hex:nth-child(5n+3),\r\n.hex:nth-child(5n+6) {\r\n    clear: left;\r\n}\r\n}\r\n@media (max-width: 1200px) {  /* <- 1-2  hexagons per row */\r\n.hex {\r\n    width: 49.5%;    /* = (100-1) / 2 */\r\n    padding-bottom: 57.158%;    /* =  width / sin(60) */\r\n}\r\n.hex:nth-child(3n+1) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n}\r\n.hex:nth-child(3n+2),\r\n.hex:nth-child(3n+3) {\r\n    margin-top: -13.423%;\r\n    margin-bottom: -13.423%;\r\n}\r\n.hex:nth-child(3n+1) {\r\n    margin-left: 0.5%\r\n}\r\n.hex:nth-child(3n+3) {\r\n    margin-left: 1%;\r\n}\r\n.hex:nth-child(3n+2),\r\n.hex:nth-child(3n+4) {\r\n    clear: left;\r\n}\r\n}\r\n@media (max-width: 400px) {\r\n#hexGrid {\r\n    font-size: 13px;\r\n}\r\n}\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 24px;\r\n}\r\n.switch input { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    left: 4px;\r\n    bottom: 3px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n}\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(14px);\r\n    transform: translateX(14px);\r\n}\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n.form-control:focus {\r\n    box-shadow: none;\r\n}\r\n.form-control-underlined {\r\n    border-width: 0;\r\n    border-bottom-width: 1px;\r\n    border-radius: 0;\r\n    padding-left: 0;\r\n}\r\n.p-1{\r\n    padding: .35rem!important;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9ncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEIsR0FBRyxtREFBbUQ7SUFDcEYsK0RBQXVEO1lBQXZELHVEQUF1RDtBQUMzRDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEIsR0FBRyxtREFBbUQ7QUFDeEY7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7QUFHQSx1RkFBdUY7QUFFdkY7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTLEdBQUcsbUVBQW1FO0lBQy9FLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQix3RUFBd0Q7SUFBeEQsZ0VBQXdEO0lBQXhELHdEQUF3RDtJQUF4RCx3RkFBd0Q7QUFDNUQ7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixxREFBNkM7WUFBN0MsNkNBQTZDO0FBQ2pEO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsb0RBQTRDO1lBQTVDLDRDQUE0QztBQUNoRDtBQUdBLHlGQUF5RjtBQUV6RjtJQUNJLGtEQUEwQztZQUExQywwQ0FBMEM7QUFDOUM7QUFHQSx5RkFBeUY7QUFFekYsNkJBQTZCLDZCQUE2QjtBQUMxRDtJQUNJLGNBQWMsS0FBSyxrQkFBa0I7SUFDckMsdUJBQXVCLEtBQUssdUJBQXVCO0FBQ3ZEO0FBQ0E7O0lBRUksOERBQXNEO1lBQXRELHNEQUFzRDtBQUMxRDtBQUNBOzs7SUFHSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLFdBQVc7QUFDZjtBQUNBO0FBRUEsOEJBQThCLDZCQUE2QjtBQUMzRDtJQUNJLFlBQVksS0FBSyxrQkFBa0I7SUFDbkMsdUJBQXVCLEtBQUssdUJBQXVCO0FBQ3ZEO0FBQ0E7SUFDSSw4REFBc0Q7WUFBdEQsc0RBQXNEO0FBQzFEO0FBQ0E7O0lBRUksb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOztJQUVJLFdBQVc7QUFDZjtBQUNBO0FBRUE7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksbUNBQW1DO0lBRW5DLDJCQUEyQjtBQUMvQjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWwvZ3JvdXAtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXhhZ29ucyAqL1xyXG4jaGV4R3JpZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvKiBwYWRkaW5nOiAwLjg2NiUgMDsgKi9cclxuICAgIHBhZGRpbmc6IDMuNyU7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4jY2FuY2VsIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4JTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4JTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNoZXhHcmlkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uaGV4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgIC8qIGZpeCBmb3IgamFnZ2VkIGVkZ2VzIGluIEZGIG9uIGhvdmVyIHRyYW5zaXRpb24gKi9cclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZykgc2tld1koMzBkZWcpIHRyYW5zbGF0ZXooLTFweCk7XHJcbn1cclxuXHJcbi5oZXggKiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyAgLyogZml4IGZvciBqYWdnZWQgZWRnZXMgaW4gRkYgb24gaG92ZXIgdHJhbnNpdGlvbiAqL1xyXG59XHJcblxyXG4uaGV4SW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogc2tld1koLTMwZGVnKSByb3RhdGUoNjBkZWcpO1xyXG59XHJcblxyXG5cclxuLyoqKiBIRVggQ09OVEVOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmhleCBpbWcge1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaGV4IGgxLCAuaGV4IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMiU7XHJcbiAgICBsZWZ0OiAtMSU7ICAvKiBwcmV2ZW50IGxpbmUgb24gdGhlIHJpZ2h0IHdoZXJlIGJhY2tncm91bmQgZG9lc24ndCBjb3ZlciBpbWFnZSAqL1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDEyOCwgMC44KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LCBvcGFjaXR5IC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmhleCBoMSB7XHJcbiAgICBib3R0b206IDUwJTtcclxuICAgIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRleigtMXB4KTtcclxufVxyXG5cclxuLmhleCBoMTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmhleCBwIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG59XHJcblxyXG5cclxuLyoqKiBIT1ZFUiBFRkZFQ1QgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaGV4SW46aG92ZXIgaDEsIC5oZXhJbjpmb2N1cyBoMSwgLmhleEluOmhvdmVyIHAsIC5oZXhJbjpmb2N1cyBwIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgdHJhbnNsYXRleigtMXB4KTtcclxufVxyXG5cclxuXHJcbi8qKiogU1BBQ0lORyBBTkQgU0laSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6MTIwMXB4KSB7ICAvKiA8LSAyLTMgIGhleGFnb25zIHBlciByb3cgKi9cclxuLmhleCB7XHJcbiAgICB3aWR0aDogMzIuNjY2JTsgICAgLyogPSAoMTAwLTIpIC8gMyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM3LjcyMCU7ICAgIC8qID0gIHdpZHRoIC8gc2luKDYwKSAqL1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDVuKzEpLFxyXG4uaGV4Om50aC1jaGlsZCg1bisyKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGUoLTYwZGVnKSBza2V3WSgzMGRlZyk7XHJcbn1cclxuLmhleDpudGgtY2hpbGQoNW4rMyksXHJcbi5oZXg6bnRoLWNoaWxkKDVuKzQpLFxyXG4uaGV4Om50aC1jaGlsZCg1bis1KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOC41NjQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTguNTY0JTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCg1bisyKSxcclxuLmhleDpudGgtY2hpbGQoNW4rNCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCg1bisxKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41JTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCg1biszKSxcclxuLmhleDpudGgtY2hpbGQoNW4rNikge1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgeyAgLyogPC0gMS0yICBoZXhhZ29ucyBwZXIgcm93ICovXHJcbi5oZXgge1xyXG4gICAgd2lkdGg6IDQ5LjUlOyAgICAvKiA9ICgxMDAtMSkgLyAyICovXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTcuMTU4JTsgICAgLyogPSAgd2lkdGggLyBzaW4oNjApICovXHJcbn1cclxuLmhleDpudGgtY2hpbGQoM24rMSkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlKC02MGRlZykgc2tld1koMzBkZWcpO1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzIpLFxyXG4uaGV4Om50aC1jaGlsZCgzbiszKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTMuNDIzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMy40MjMlO1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzEpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjUlXHJcbn1cclxuLmhleDpudGgtY2hpbGQoM24rMykge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzIpLFxyXG4uaGV4Om50aC1jaGlsZCgzbis0KSB7XHJcbiAgICBjbGVhcjogbGVmdDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuI2hleEdyaWQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbn1cclxuXHJcblxyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHsgXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTRweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTRweCk7XHJcbn1cclxuXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXVuZGVybGluZWQge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnAtMXtcclxuICAgIHBhZGRpbmc6IC4zNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/group-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/groups/group-detail/group-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <!-- <div class=\"jumbotron\"> -->\r\n    <!-- <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" name=\"namePerson\" [(ngModel)]=\"namePerson\" placeholder=\"Search\">\r\n    </div> -->\r\n\r\n    <div class=\"p-1 bg-light rounded rounded-pill shadow-sm mb-4\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control border-0 bg-light\" aria-describedby=\"button-addon1\" name=\"namePerson\" [(ngModel)]=\"namePerson\" placeholder=\"Search users\">\r\n          <div class=\"input-group-append\">\r\n            <button id=\"button-addon1\" type=\"submit\" class=\"btn btn-link text-primary\"><i class=\"fa fa-search\"></i></button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n  <!-- </div> -->\r\n</div>\r\n<!-- <hr style=\"border: none;\r\nbackground-color: black;\r\nheight: 2px;\"> -->\r\n<br>\r\n<div class=\"row\" *ngIf=\"groupDetailService.existGroup()\">\r\n  <div class=\"col-lg-12\">\r\n\r\n    <div class=\"container align-items-center justify-content-center\">\r\n      <div class=\"input-group\" style=\"width: 475px; margin: 0 auto; float: none;\" *ngIf=\"changeName\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"\" [value]=\"groupDetailService.getGroupName()\" [(ngModel)]=\"changingName\">\r\n        <div class=\"input-group-prepend\">\r\n          <button class=\"btn btn-primary\" type=\"button\" id=\"savename\" (click)=\"onSaveName(changingName)\">Save Name</button>\r\n          <button class=\"btn btn-danger\" type=\"button\" id=\"cancel\" (click)=\"onCancelChangingName()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h1 style=\"text-align: center\" *ngIf=\"!changeName\">\r\n      <img [src]=\"groupDetailService.getGroupImagePath()\" style=\"width: 50px;\" alt=\"\"/>\r\n      <span> {{ groupDetailService.getGroupName() }}</span>\r\n      <button class=\"btn btn-primary\" style=\"margin-left: 25px;\" *ngIf=\"admin\" (click)=\"onChangeName()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Change Name</button>\r\n      <button class=\"btn btn-primary\" style=\"margin-left: 25px;\" *ngIf=\"admin\" (click)=\"onChangAvatarGroup()\"><i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i> Change Avatar</button>\r\n      <button class=\"btn btn-primary\" style=\"margin-left: 25px;\" (click)=\"onSendMailForGroup()\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Send Mail</button>\r\n    </h1>\r\n\r\n    <hr style=\"border: none;\r\n    background-color: black;\r\n    height: 1px;\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-9\">\r\n        <app-peoplegroup-list [namePersonSearch]=\"namePerson\" [people]=\"groupDetailService.getPeople()\" [admin]=\"admin\"></app-peoplegroup-list>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <div>\r\n          <!-- <div class=\"row\"> -->\r\n            <label style=\"margin-left: 5px;\"><h1>Description</h1></label>\r\n            <button class=\"btn btn-warning\" style=\"position: relative; margin-bottom: 15px; margin-left: 15px;\" (click)=\"onChangeDescriptionGroup()\">Change Description</button>\r\n          <!-- </div> -->\r\n          <cdk-virtual-scroll-viewport style=\"height: 600px;\" itemSize=\"250\" class=\"viewport\">\r\n            <h3>{{ description }}</h3>\r\n          </cdk-virtual-scroll-viewport>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<button class=\"btn btn-danger\" *ngIf=\"admin\" style=\"float: right; margin-right: 20px;\" (click)=\"onRemoveGroup()\">Remove Group</button>\r\n<button class=\"btn btn-danger\" style=\"float: right; margin-right: 20px;\" (click)=\"onLeaveFromGroup()\">Leave Group</button>\r\n"

/***/ }),

/***/ "./src/app/groups/group-detail/group-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/groups/group-detail/group-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: GroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailComponent", function() { return GroupDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_change_description_modal_change_description_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-change-description/modal-change-description.component */ "./src/app/groups/group-detail/modal-change-description/modal-change-description.component.ts");
/* harmony import */ var _getip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../getip.service */ "./src/app/getip.service.ts");
/* harmony import */ var _modal_remove_group_modal_remove_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-remove-group/modal-remove-group.component */ "./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _modal_change_avatar_group_modal_change_avatar_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-change-avatar-group/modal-change-avatar-group.component */ "./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.ts");
/* harmony import */ var _modal_mail_sender_modal_mail_sender_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-mail-sender/modal-mail-sender.component */ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.ts");












var GroupDetailComponent = /** @class */ (function () {
    function GroupDetailComponent(modalService, router, route, http, groupDetailService, authService, getipService) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.groupDetailService = groupDetailService;
        this.authService = authService;
        this.getipService = getipService;
        this.changeName = false;
    }
    GroupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        if (id) {
            this.http.get('http://' + this.getipService.getip() + ':5000/api/getOneGroupById/' + id).subscribe(function (res) {
                console.log(res);
                _this.groupDetailService.setGroup(res);
                _this.changingName = _this.groupDetailService.getGroupName();
                _this.admin = _this.authService.checkAdmin(_this.groupDetailService.getPeople());
                _this.description = _this.groupDetailService.getGroupDescription();
                // this.group = res;        
            });
        }
    };
    GroupDetailComponent.prototype.onChangeName = function () {
        this.changeName = true;
    };
    GroupDetailComponent.prototype.onCancelChangingName = function () {
        this.changeName = false;
    };
    GroupDetailComponent.prototype.onSaveName = function (name) {
        // console.log(name);
        this.changeName = false;
        this.groupDetailService.updateNameGroup(name);
        this.changingName = this.groupDetailService.getGroupName();
    };
    GroupDetailComponent.prototype.onRemoveGroup = function () {
        // this.groupDetailService.removeGroup();
        this.modalRef = this.modalService.show(_modal_remove_group_modal_remove_group_component__WEBPACK_IMPORTED_MODULE_3__["ModalRemoveGroupComponent"], {
            initialState: {
                title: 'Remove Group',
                leaveOrRemove: false
            }
        });
    };
    GroupDetailComponent.prototype.onChangAvatarGroup = function () {
        this.modalRef = this.modalService.show(_modal_change_avatar_group_modal_change_avatar_group_component__WEBPACK_IMPORTED_MODULE_10__["ModalChangeAvatarGroupComponent"], {
            initialState: {
                title: 'Change Avatar Group',
                data: {}
            }
        });
    };
    GroupDetailComponent.prototype.onChangeDescriptionGroup = function () {
        this.modalRef = this.modalService.show(_modal_change_description_modal_change_description_component__WEBPACK_IMPORTED_MODULE_1__["ModalChangeDescriptionComponent"], {
            initialState: {
                title: 'Change Descripition Of Group',
                description: this.groupDetailService.getGroupDescription()
            }
        });
    };
    GroupDetailComponent.prototype.onLeaveFromGroup = function () {
        this.modalRef = this.modalService.show(_modal_remove_group_modal_remove_group_component__WEBPACK_IMPORTED_MODULE_3__["ModalRemoveGroupComponent"], {
            initialState: {
                title: 'Leave From Group',
                leaveOrRemove: true
            }
        });
    };
    GroupDetailComponent.prototype.onSendMailForGroup = function () {
        this.modalRef = this.modalService.show(_modal_mail_sender_modal_mail_sender_component__WEBPACK_IMPORTED_MODULE_11__["ModalMailSenderComponent"], {
            initialState: {
                title: 'Mail Sender'
            }
        });
    };
    GroupDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-group-detail',
            template: __webpack_require__(/*! ./group-detail.component.html */ "./src/app/groups/group-detail/group-detail.component.html"),
            styles: [__webpack_require__(/*! ./group-detail.component.css */ "./src/app/groups/group-detail/group-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _group_detail_service__WEBPACK_IMPORTED_MODULE_8__["GroupDetailService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _getip_service__WEBPACK_IMPORTED_MODULE_2__["GetipService"]])
    ], GroupDetailComponent);
    return GroupDetailComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-detail/group-detail.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/groups/group-detail/group-detail.service.ts ***!
  \*************************************************************/
/*! exports provided: GroupDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailService", function() { return GroupDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _getip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../getip.service */ "./src/app/getip.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var GroupDetailService = /** @class */ (function () {
    function GroupDetailService(http, route, router, getipService, authService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.getipService = getipService;
        this.authService = authService;
    }
    GroupDetailService.prototype.setGroup = function (group) {
        this.group = group;
    };
    GroupDetailService.prototype.getPeople = function () {
        return this.group.people;
    };
    GroupDetailService.prototype.existGroup = function () {
        if (this.group) {
            return true;
        }
        else {
            return false;
        }
    };
    GroupDetailService.prototype.getGroup = function () {
        return this.group;
    };
    GroupDetailService.prototype.getGroupId = function () {
        return this.group._id;
    };
    GroupDetailService.prototype.getGroupName = function () {
        return this.group.name;
    };
    GroupDetailService.prototype.getGroupImagePath = function () {
        return this.group.imgPath;
    };
    GroupDetailService.prototype.getGroupDescription = function () {
        return this.group.description;
    };
    GroupDetailService.prototype.updateGroup = function (name, people, imgPath) {
        this.group = name;
        this.group.people = people;
        this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe(function (res) {
            console.log(res);
        });
    };
    GroupDetailService.prototype.updatePeopleGroup = function (people) {
        this.group.people = people;
        this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe(function (res) {
            console.log(res);
        });
    };
    GroupDetailService.prototype.updateAvatarOfPerson = function (person, index) {
        this.group.people[index] = person;
        console.log(this.group);
        this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe(function (res) {
            console.log(res);
        });
    };
    GroupDetailService.prototype.updateNameGroup = function (name) {
        this.group.name = name;
        console.log(this.group);
        this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe(function (res) {
            console.log(res);
        });
    };
    GroupDetailService.prototype.updateDescriptionGroup = function (description) {
        this.group.description = description;
        console.log(this.group);
        this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe(function (res) {
            console.log(res);
        });
    };
    GroupDetailService.prototype.leaveGroup = function (modalRef) {
        var _this = this;
        var name = this.authService.getAcc().fullName;
        console.log(name);
        var result = this.group.people.filter(function (el) {
            return el.user.fullName === name;
        });
        if (result.length > 0) {
            this.group.people.splice(this.group.people.indexOf(result[0]), 1);
            this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe(function (res) {
                if (res.message === "Group updated!") {
                    modalRef.hide();
                    _this.router.navigate([''], { relativeTo: _this.route });
                }
            });
        }
    };
    GroupDetailService.prototype.updateImgGroup = function (imgPath) {
        this.group.imgPath = imgPath;
        console.log(this.group);
        this.http.put('http://' + this.getipService.getip() + ':5000/api/updateGroup', this.group).subscribe(function (res) {
            console.log(res);
        });
    };
    GroupDetailService.prototype.removeGroup = function () {
        var _this = this;
        var data = {
            _id: this.group._id
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            body: data
        };
        this.http.delete('http://' + this.getipService.getip() + ':5000/api/deleteGroup', httpOptions).subscribe(function (res) {
            console.log(res);
            if (res.message === 'Deleted!') {
                _this.group = undefined;
                _this.router.navigate([''], { relativeTo: _this.route });
            }
        });
    };
    GroupDetailService.prototype.cleanGroup = function () {
        this.group = null;
    };
    GroupDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _getip_service__WEBPACK_IMPORTED_MODULE_2__["GetipService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], GroupDetailService);
    return GroupDetailService;
}());



/***/ }),

/***/ "./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#leftPart {\r\n    float: left;\r\n}\r\n\r\n#centerPart {\r\n    width: 150px;\r\n}\r\n\r\n#rightPart {\r\n    float: right;\r\n}\r\n\r\n.btns-back-and-forward {\r\n    width: 50px;\r\n}\r\n\r\n/* @import url(\"https://fonts.googleapis.com/css?family=Saira+Condensed\"); */\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n  }\r\n\r\nhtml *,\r\n  html *:after,\r\n  html *:before {\r\n    box-sizing: inherit;\r\n  }\r\n\r\n#text {\r\n      /* width:auto;\r\n      max-width: 100%;\r\n      overflow:hidden;\r\n      background-color:#FFF;\r\n      color:#222;\r\n      font-family:Courier, monospace;\r\n      font-weight:normal;\r\n      font-size:18px;\r\n      resize:none;\r\n      line-height:40px;\r\n      padding-left:100px;\r\n      padding-right:30px;\r\n      padding-top:45px;\r\n      padding-bottom:34px;\r\n      background-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);\r\n      background-repeat:repeat-y, repeat;\r\n      -webkit-border-radius:12px;\r\n      border-radius:12px;\r\n      -webkit-box-shadow: 0px 2px 14px #000;\r\n      box-shadow: 0px 2px 14px #000;\r\n      border-top:1px solid #FFF;\r\n      border-bottom:1px solid #FFF; */\r\n      \r\n      display: block;\r\n      width: 100%;\r\n      padding: 5px 0;\r\n      margin-bottom: 10px;\r\n      background: none;\r\n      border: 0;\r\n      outline: 0;\r\n      font-size: 1.5em;\r\n      font-weight: 400;\r\n      font-family: inherit;\r\n  }\r\n\r\n/* textarea {\r\n      height:200px;\r\n      max-width:600px;\r\n      color:#999;\r\n      font-weight:400;\r\n      font-size:30px;\r\n      font-family:'Ubuntu', Helvetica, Arial, sans-serif;\r\n      width:100%;\r\n      background:#fff;\r\n      border-radius:3px;\r\n      line-height:2em;\r\n      border:none;\r\n      box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);\r\n      padding:30px;\r\n      -webkit-transition: height 2s ease;\r\n      -moz-transition: height 2s ease;\r\n      -ms-transition: height 2s ease;\r\n      -o-transition: height 2s ease;\r\n      transition: height 2s ease;\r\n  }\r\n  \r\n  * {\r\n      -webkit-font-smoothing:antialiased !important;\r\n  } */\r\n\r\nbody {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    background-color: #fe7b1a;\r\n  }\r\n\r\n.form {\r\n    max-width: 35em;\r\n    width: 100%;\r\n    padding: 4em;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    box-shadow: 0 0 40px 2px rgba(48, 48, 48, 0.22);\r\n  }\r\n\r\n.form__fieldset {\r\n    padding: 0;\r\n    border: 0;\r\n    margin: 0;\r\n  }\r\n\r\n.form__legend {\r\n    font-size: 1.5em;\r\n    margin-bottom: 1em;\r\n    color: #3e3e42;\r\n  }\r\n\r\n.form__label {\r\n    display: block;\r\n  }\r\n\r\n.form__input {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    margin-bottom: 10px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 400;\r\n    font-family: inherit;\r\n  }\r\n\r\n.form__input:not(:last-of-type) {\r\n    border-bottom: 1px solid #e4e4e4;\r\n  }\r\n\r\n.form__input::-webkit-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n\r\n.form__input::-ms-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n\r\n.form__input::-moz-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n\r\n.form__input::placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n\r\n.form__btn {\r\n    position: relative;\r\n    z-index: 1;\r\n    display: block;\r\n    width: 140px;\r\n    height: 40px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    color: #fe7b1a;\r\n    border: 0;\r\n    padding: .5em 3.5em;\r\n    border-radius: 25px;\r\n    border-radius: 0;\r\n    margin-top: 1.5em;\r\n    font-family: inherit;\r\n    box-shadow: inset 0 0 0 1px #e4e4e4;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n    -webkit-transition-delay: .4s;\r\n            transition-delay: .4s;\r\n  }\r\n\r\n.is-valid .form__btn {\r\n    color: #fff;\r\n    -webkit-transition-delay: 0;\r\n            transition-delay: 0;\r\n  }\r\n\r\n.form__btn::before {\r\n    content: ' ';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    background-color: #fe7b1a;\r\n    border-radius: inherit;\r\n    -webkit-transform: scaleX(0);\r\n            transform: scaleX(0);\r\n    -webkit-transition: all .5s ease-in-out;\r\n    transition: all .5s ease-in-out;\r\n  }\r\n\r\n.is-valid .form__btn::before {\r\n    -webkit-transform: scaleX(1);\r\n            transform: scaleX(1);\r\n    -webkit-transition-delay: .3s;\r\n            transition-delay: .3s;\r\n  }\r\n\r\n.form__indicator {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n.form__indicator .progressbar {\r\n    stroke-width: 2px;\r\n    stroke: #fe7b1a;\r\n    fill: none;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9tb2RhbC1jaGFuZ2UtYXZhdGFyLWdyb3VwL21vZGFsLWNoYW5nZS1hdmF0YXItZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBLDRFQUE0RTs7QUFDNUU7SUFDSSxzQkFBc0I7RUFDeEI7O0FBQ0E7OztJQUdFLG1CQUFtQjtFQUNyQjs7QUFLQTtNQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBcUIrQjs7TUFFL0IsY0FBYztNQUNkLFdBQVc7TUFDWCxjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixTQUFTO01BQ1QsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsb0JBQW9CO0VBQ3hCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVCRzs7QUFFSDtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLCtDQUErQztFQUNqRDs7QUFFQTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztFQUNYOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7QUFDQTtJQUNFLGdDQUFnQztFQUNsQzs7QUFDQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztBQUtBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7QUFIQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFDL0IsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7QUFDQTtJQUNFLFdBQVc7SUFDWCwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNEJBQTRCO1lBQ3BCLG9CQUFvQjtJQUM1Qix1Q0FBK0I7SUFBL0IsK0JBQStCO0VBQ2pDOztBQUNBO0lBQ0UsNEJBQTRCO1lBQ3BCLG9CQUFvQjtJQUM1Qiw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0lBQ1YsdUNBQStCO0lBQS9CLCtCQUErQjtFQUNqQyIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWwvbW9kYWwtY2hhbmdlLWF2YXRhci1ncm91cC9tb2RhbC1jaGFuZ2UtYXZhdGFyLWdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGVmdFBhcnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNjZW50ZXJQYXJ0IHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuI3JpZ2h0UGFydCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5idG5zLWJhY2stYW5kLWZvcndhcmQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TYWlyYStDb25kZW5zZWRcIik7ICovXHJcbmh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgaHRtbCAqLFxyXG4gIGh0bWwgKjphZnRlcixcclxuICBodG1sICo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICN0ZXh0IHtcclxuICAgICAgLyogd2lkdGg6YXV0bztcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRjtcclxuICAgICAgY29sb3I6IzIyMjtcclxuICAgICAgZm9udC1mYW1pbHk6Q291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICByZXNpemU6bm9uZTtcclxuICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OjEwMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjMwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjQ1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjM0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vbWFvcGJ0Zy9FOUJtZ3RvaHQvbGluZXMucG5nKSwgdXJsKGh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vbWFvcGJ0Zy9uQlVtZ3RvZ3gvcGFwZXIucG5nKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXksIHJlcGVhdDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MTJweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDE0cHggIzAwMDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxNHB4ICMwMDA7XHJcbiAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNGRkY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNGRkY7ICovXHJcbiAgICAgIFxyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAvKiB0ZXh0YXJlYSB7XHJcbiAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgbWF4LXdpZHRoOjYwMHB4O1xyXG4gICAgICBjb2xvcjojOTk5O1xyXG4gICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICBmb250LWZhbWlseTonVWJ1bnR1JywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgICAgbGluZS1oZWlnaHQ6MmVtO1xyXG4gICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgYm94LXNoYWRvdzowcHggMHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAgIC1tcy10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAqIHtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICBcclxuICBib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LWZhbWlseTogJ1NhaXJhIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU3YjFhO1xyXG4gIH1cclxuICBcclxuICAuZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDM1ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCAycHggcmdiYSg0OCwgNDgsIDQ4LCAwLjIyKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1fX2ZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtX19sZWdlbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGNvbG9yOiAjM2UzZTQyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9fbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtX19pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9fYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY29sb3I6ICNmZTdiMWE7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAuNWVtIDMuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlNGU0ZTQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG4gIH1cclxuICAuaXMtdmFsaWQgLmZvcm1fX2J0biB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XHJcbiAgfVxyXG4gIC5mb3JtX19idG46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTdiMWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuaXMtdmFsaWQgLmZvcm1fX2J0bjo6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9faW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuZm9ybV9faW5kaWNhdG9yIC5wcm9ncmVzc2JhciB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZTogI2ZlN2IxYTtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content modal modal-wide\" style=\"width: auto; max-width: 600px;\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Changing image of group</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"width: auto; height: auto; max-height: 100%;\">\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-12\">\r\n            <form class=\"form\">\r\n              <fieldset class=\"form__fieldset\">\r\n            \r\n                <legend class=\"form__legend\">Change avatar of group</legend>\r\n            \r\n                <label class=\"form__label\" for=\"subject\"></label>\r\n                <div class=\"row align-items-center justify-content-center\">\r\n                  <div class=\"col-xs-2\" id=\"leftPart\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-circle btns-back-and-forward\" (click)=\"onBack()\"><i class=\"fa fa-arrow-circle-o-left fa-2x\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                  <div class=\"col-xs-8\">\r\n                    <img [src]=\"imgPath\" id=\"centerPart\">\r\n                  </div>\r\n                  <div class=\"col-xs-2 align-items-right\" id=\"rightPart\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-circle btns-back-and-forward\" (click)=\"onForward()\"><i class=\"fa fa-arrow-circle-o-right fa-2x\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n            </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSaveImage()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ModalChangeAvatarGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalChangeAvatarGroupComponent", function() { return ModalChangeAvatarGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _group_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");




var ModalChangeAvatarGroupComponent = /** @class */ (function () {
    function ModalChangeAvatarGroupComponent(modalRef, groupDetailService) {
        this.modalRef = modalRef;
        this.groupDetailService = groupDetailService;
        this.imgNumber = 1;
        // imgPath: string = this.groupDetailService.getGroupImagePath();
        this.imgPath = "assets/img/default1.png";
    }
    ModalChangeAvatarGroupComponent.prototype.ngOnInit = function () {
    };
    ModalChangeAvatarGroupComponent.prototype.onForward = function () {
        if (this.imgNumber === 10) {
            this.imgNumber = 1;
        }
        else {
            this.imgNumber++;
        }
        this.imgPath = "assets/img/default" + this.imgNumber + ".png";
    };
    ModalChangeAvatarGroupComponent.prototype.onBack = function () {
        if (this.imgNumber === 1) {
            this.imgNumber = 10;
        }
        else {
            this.imgNumber--;
        }
        this.imgPath = "assets/img/default" + this.imgNumber + ".png";
    };
    ModalChangeAvatarGroupComponent.prototype.onSaveImage = function () {
        this.groupDetailService.updateImgGroup(this.imgPath);
        this.modalRef.hide();
        // window.location.reload();
    };
    ModalChangeAvatarGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-modal-change-avatar-group',
            template: __webpack_require__(/*! ./modal-change-avatar-group.component.html */ "./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.html"),
            styles: [__webpack_require__(/*! ./modal-change-avatar-group.component.css */ "./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"], _group_detail_service__WEBPACK_IMPORTED_MODULE_1__["GroupDetailService"]])
    ], ModalChangeAvatarGroupComponent);
    return ModalChangeAvatarGroupComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-detail/modal-change-description/modal-change-description.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-change-description/modal-change-description.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    box-sizing: border-box;\r\n  }\r\n  html *,\r\n  html *:after,\r\n  html *:before {\r\n    box-sizing: inherit;\r\n  }\r\n  #text {\r\n      /* width:auto;\r\n      max-width: 100%;\r\n      overflow:hidden;\r\n      background-color:#FFF;\r\n      color:#222;\r\n      font-family:Courier, monospace;\r\n      font-weight:normal;\r\n      font-size:18px;\r\n      resize:none;\r\n      line-height:40px;\r\n      padding-left:100px;\r\n      padding-right:30px;\r\n      padding-top:45px;\r\n      padding-bottom:34px;\r\n      background-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);\r\n      background-repeat:repeat-y, repeat;\r\n      -webkit-border-radius:12px;\r\n      border-radius:12px;\r\n      -webkit-box-shadow: 0px 2px 14px #000;\r\n      box-shadow: 0px 2px 14px #000;\r\n      border-top:1px solid #FFF;\r\n      border-bottom:1px solid #FFF; */\r\n      \r\n      display: block;\r\n      width: 100%;\r\n      padding: 5px 0;\r\n      margin-bottom: 10px;\r\n      background: none;\r\n      border: 0;\r\n      outline: 0;\r\n      font-size: 1.5em;\r\n      font-weight: 400;\r\n      font-family: inherit;\r\n  }\r\n  /* textarea {\r\n      height:200px;\r\n      max-width:600px;\r\n      color:#999;\r\n      font-weight:400;\r\n      font-size:30px;\r\n      font-family:'Ubuntu', Helvetica, Arial, sans-serif;\r\n      width:100%;\r\n      background:#fff;\r\n      border-radius:3px;\r\n      line-height:2em;\r\n      border:none;\r\n      box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);\r\n      padding:30px;\r\n      -webkit-transition: height 2s ease;\r\n      -moz-transition: height 2s ease;\r\n      -ms-transition: height 2s ease;\r\n      -o-transition: height 2s ease;\r\n      transition: height 2s ease;\r\n  }\r\n  \r\n  * {\r\n      -webkit-font-smoothing:antialiased !important;\r\n  } */\r\n  body {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    background-color: #fe7b1a;\r\n  }\r\n  .form {\r\n    max-width: 35em;\r\n    width: 100%;\r\n    padding: 4em;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    box-shadow: 0 0 40px 2px rgba(48, 48, 48, 0.22);\r\n  }\r\n  .form__fieldset {\r\n    padding: 0;\r\n    border: 0;\r\n    margin: 0;\r\n  }\r\n  .form__legend {\r\n    font-size: 1.5em;\r\n    margin-bottom: 1em;\r\n    color: #3e3e42;\r\n  }\r\n  .form__label {\r\n    display: block;\r\n  }\r\n  .form__input {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    margin-bottom: 10px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 400;\r\n    font-family: inherit;\r\n  }\r\n  .form__input:not(:last-of-type) {\r\n    border-bottom: 1px solid #e4e4e4;\r\n  }\r\n  .form__input::-webkit-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n  .form__input::-ms-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n  .form__input::-moz-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n  .form__input::placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n  .form__btn {\r\n    position: relative;\r\n    z-index: 1;\r\n    display: block;\r\n    width: 140px;\r\n    height: 40px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    color: #fe7b1a;\r\n    border: 0;\r\n    padding: .5em 3.5em;\r\n    border-radius: 25px;\r\n    border-radius: 0;\r\n    margin-top: 1.5em;\r\n    font-family: inherit;\r\n    box-shadow: inset 0 0 0 1px #e4e4e4;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n    -webkit-transition-delay: .4s;\r\n            transition-delay: .4s;\r\n  }\r\n  .is-valid .form__btn {\r\n    color: #fff;\r\n    -webkit-transition-delay: 0;\r\n            transition-delay: 0;\r\n  }\r\n  .form__btn::before {\r\n    content: ' ';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    background-color: #fe7b1a;\r\n    border-radius: inherit;\r\n    -webkit-transform: scaleX(0);\r\n            transform: scaleX(0);\r\n    -webkit-transition: all .5s ease-in-out;\r\n    transition: all .5s ease-in-out;\r\n  }\r\n  .is-valid .form__btn::before {\r\n    -webkit-transform: scaleX(1);\r\n            transform: scaleX(1);\r\n    -webkit-transition-delay: .3s;\r\n            transition-delay: .3s;\r\n  }\r\n  .form__indicator {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .form__indicator .progressbar {\r\n    stroke-width: 2px;\r\n    stroke: #fe7b1a;\r\n    fill: none;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9tb2RhbC1jaGFuZ2UtZGVzY3JpcHRpb24vbW9kYWwtY2hhbmdlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7RUFDQTs7O0lBR0UsbUJBQW1CO0VBQ3JCO0VBS0E7TUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQXFCK0I7O01BRS9CLGNBQWM7TUFDZCxXQUFXO01BQ1gsY0FBYztNQUNkLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsU0FBUztNQUNULFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLG9CQUFvQjtFQUN4QjtFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVCRztFQUVIO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7RUFDakQ7RUFFQTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztFQUNYO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7RUFFQTtJQUNFLGNBQWM7RUFDaEI7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUtBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0VBSEE7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFDL0IsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsV0FBVztJQUNYLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtZQUNwQixvQkFBb0I7SUFDNUIsdUNBQStCO0lBQS9CLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNEJBQTRCO1lBQ3BCLG9CQUFvQjtJQUM1Qiw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsVUFBVTtJQUNWLHVDQUErQjtJQUEvQiwrQkFBK0I7RUFDakMiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXAtZGV0YWlsL21vZGFsLWNoYW5nZS1kZXNjcmlwdGlvbi9tb2RhbC1jaGFuZ2UtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgaHRtbCAqLFxyXG4gIGh0bWwgKjphZnRlcixcclxuICBodG1sICo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICN0ZXh0IHtcclxuICAgICAgLyogd2lkdGg6YXV0bztcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRjtcclxuICAgICAgY29sb3I6IzIyMjtcclxuICAgICAgZm9udC1mYW1pbHk6Q291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICByZXNpemU6bm9uZTtcclxuICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OjEwMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjMwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjQ1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjM0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vbWFvcGJ0Zy9FOUJtZ3RvaHQvbGluZXMucG5nKSwgdXJsKGh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vbWFvcGJ0Zy9uQlVtZ3RvZ3gvcGFwZXIucG5nKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXksIHJlcGVhdDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MTJweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDE0cHggIzAwMDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxNHB4ICMwMDA7XHJcbiAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNGRkY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNGRkY7ICovXHJcbiAgICAgIFxyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAvKiB0ZXh0YXJlYSB7XHJcbiAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgbWF4LXdpZHRoOjYwMHB4O1xyXG4gICAgICBjb2xvcjojOTk5O1xyXG4gICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICBmb250LWZhbWlseTonVWJ1bnR1JywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgICAgbGluZS1oZWlnaHQ6MmVtO1xyXG4gICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgYm94LXNoYWRvdzowcHggMHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAgIC1tcy10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAqIHtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICBcclxuICBib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LWZhbWlseTogJ1NhaXJhIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU3YjFhO1xyXG4gIH1cclxuICBcclxuICAuZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDM1ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCAycHggcmdiYSg0OCwgNDgsIDQ4LCAwLjIyKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1fX2ZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtX19sZWdlbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGNvbG9yOiAjM2UzZTQyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9fbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtX19pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9fYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY29sb3I6ICNmZTdiMWE7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAuNWVtIDMuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlNGU0ZTQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG4gIH1cclxuICAuaXMtdmFsaWQgLmZvcm1fX2J0biB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XHJcbiAgfVxyXG4gIC5mb3JtX19idG46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTdiMWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuaXMtdmFsaWQgLmZvcm1fX2J0bjo6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9faW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuZm9ybV9faW5kaWNhdG9yIC5wcm9ncmVzc2JhciB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZTogI2ZlN2IxYTtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-change-description/modal-change-description.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-change-description/modal-change-description.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <label for=\"description\">Description</label>\r\n    <textarea class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"description\" cols=\"50\" rows=\"6\"></textarea>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<div class=\"modal-content modal modal-wide\" style=\"width: auto; max-width: 600px;\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"width: auto; height: auto; max-height: 100%;\">\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-12\">\r\n            <form class=\"form\">\r\n              <fieldset class=\"form__fieldset\">\r\n            \r\n                <legend class=\"form__legend\">Description</legend>\r\n            \r\n                \r\n                \r\n\r\n                <textarea placeholder=\"Yor text\" id=\"text\" name=\"description\" rows=\"4\" [(ngModel)]=\"description\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 150px; \"></textarea>\r\n\r\n            \r\n              </fieldset>\r\n            </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-change-description/modal-change-description.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-change-description/modal-change-description.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ModalChangeDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalChangeDescriptionComponent", function() { return ModalChangeDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");





var ModalChangeDescriptionComponent = /** @class */ (function () {
    function ModalChangeDescriptionComponent(modalRef, groupDetailService, router, route) {
        this.modalRef = modalRef;
        this.groupDetailService = groupDetailService;
        this.router = router;
        this.route = route;
    }
    ModalChangeDescriptionComponent.prototype.ngOnInit = function () {
    };
    ModalChangeDescriptionComponent.prototype.onSubmit = function () {
        this.groupDetailService.updateDescriptionGroup(this.description);
        this.modalRef.hide();
    };
    ModalChangeDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-change-description',
            template: __webpack_require__(/*! ./modal-change-description.component.html */ "./src/app/groups/group-detail/modal-change-description/modal-change-description.component.html"),
            styles: [__webpack_require__(/*! ./modal-change-description.component.css */ "./src/app/groups/group-detail/modal-change-description/modal-change-description.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"], _group_detail_service__WEBPACK_IMPORTED_MODULE_3__["GroupDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ModalChangeDescriptionComponent);
    return ModalChangeDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Saira+Condensed\");\r\nhtml {\r\n  box-sizing: border-box;\r\n}\r\nhtml *,\r\nhtml *:after,\r\nhtml *:before {\r\n  box-sizing: inherit;\r\n}\r\n#text {\r\n    /* width:auto;\r\n    max-width: 100%;\r\n\toverflow:hidden;\r\n\tbackground-color:#FFF;\r\n\tcolor:#222;\r\n\tfont-family:Courier, monospace;\r\n\tfont-weight:normal;\r\n\tfont-size:18px;\r\n\tresize:none;\r\n\tline-height:40px;\r\n\tpadding-left:100px;\r\n\tpadding-right:30px;\r\n\tpadding-top:45px;\r\n\tpadding-bottom:34px;\r\n\tbackground-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);\r\n\tbackground-repeat:repeat-y, repeat;\r\n\t-webkit-border-radius:12px;\r\n\tborder-radius:12px;\r\n\t-webkit-box-shadow: 0px 2px 14px #000;\r\n\tbox-shadow: 0px 2px 14px #000;\r\n\tborder-top:1px solid #FFF;\r\n    border-bottom:1px solid #FFF; */\r\n    \r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    margin-bottom: 10px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 400;\r\n    font-family: inherit;\r\n    overflow: hidden;\r\n    word-wrap: break-word;\r\n    resize: none;\r\n    height: 150px;\r\n}\r\n#textSign {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    margin-bottom: 10px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 400;\r\n    font-family: inherit;\r\n    overflow: hidden;\r\n    word-wrap: break-word;\r\n    resize: none;\r\n    height: 35px;\r\n    width: 200px;\r\n}\r\n/* textarea {\r\n    height:200px;\r\n    max-width:600px;\r\n    color:#999;\r\n    font-weight:400;\r\n    font-size:30px;\r\n    font-family:'Ubuntu', Helvetica, Arial, sans-serif;\r\n    width:100%;\r\n    background:#fff;\r\n    border-radius:3px;\r\n    line-height:2em;\r\n    border:none;\r\n    box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);\r\n    padding:30px;\r\n    -webkit-transition: height 2s ease;\r\n    -moz-transition: height 2s ease;\r\n    -ms-transition: height 2s ease;\r\n    -o-transition: height 2s ease;\r\n    transition: height 2s ease;\r\n}\r\n\r\n* {\r\n    -webkit-font-smoothing:antialiased !important;\r\n} */\r\nbody {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  min-height: 100vh;\r\n  line-height: 1.6;\r\n  font-family: 'Saira Condensed', sans-serif;\r\n  background-color: #fe7b1a;\r\n}\r\n.form {\r\n  max-width: 35em;\r\n  width: 100%;\r\n  padding: 4em;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  box-shadow: 0 0 40px 2px rgba(48, 48, 48, 0.22);\r\n}\r\n.form__fieldset {\r\n  padding: 0;\r\n  border: 0;\r\n  margin: 0;\r\n}\r\n.form__legend {\r\n  font-size: 1.5em;\r\n  margin-bottom: 1em;\r\n  color: #3e3e42;\r\n}\r\n.form__label {\r\n  display: block;\r\n}\r\n.form__input {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 5px 0;\r\n  margin-bottom: 10px;\r\n  background: none;\r\n  border: 0;\r\n  outline: 0;\r\n  font-size: 1.5em;\r\n  font-weight: 400;\r\n  font-family: inherit;\r\n}\r\n.form__input:not(:last-of-type) {\r\n  border-bottom: 1px solid #e4e4e4;\r\n}\r\n.form__input::-webkit-input-placeholder {\r\n  font-size: .8em;\r\n  color: #e4e4e4;\r\n}\r\n.form__input::-ms-input-placeholder {\r\n  font-size: .8em;\r\n  color: #e4e4e4;\r\n}\r\n.form__input::-moz-placeholder {\r\n  font-size: .8em;\r\n  color: #e4e4e4;\r\n}\r\n.form__input::placeholder {\r\n  font-size: .8em;\r\n  color: #e4e4e4;\r\n}\r\n.form__btn {\r\n  position: relative;\r\n  z-index: 1;\r\n  display: block;\r\n  width: 140px;\r\n  height: 40px;\r\n  background: none;\r\n  border: 0;\r\n  outline: 0;\r\n  color: #fe7b1a;\r\n  border: 0;\r\n  padding: .5em 3.5em;\r\n  border-radius: 25px;\r\n  border-radius: 0;\r\n  margin-top: 1.5em;\r\n  font-family: inherit;\r\n  box-shadow: inset 0 0 0 1px #e4e4e4;\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\r\n  -webkit-transition-delay: .4s;\r\n          transition-delay: .4s;\r\n}\r\n.is-valid .form__btn {\r\n  color: #fff;\r\n  -webkit-transition-delay: 0;\r\n          transition-delay: 0;\r\n}\r\n.form__btn::before {\r\n  content: ' ';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  background-color: #fe7b1a;\r\n  border-radius: inherit;\r\n  -webkit-transform: scaleX(0);\r\n          transform: scaleX(0);\r\n  -webkit-transition: all .5s ease-in-out;\r\n  transition: all .5s ease-in-out;\r\n}\r\n.is-valid .form__btn::before {\r\n  -webkit-transform: scaleX(1);\r\n          transform: scaleX(1);\r\n  -webkit-transition-delay: .3s;\r\n          transition-delay: .3s;\r\n}\r\n.form__indicator {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.form__indicator .progressbar {\r\n  stroke-width: 2px;\r\n  stroke: #fe7b1a;\r\n  fill: none;\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9tb2RhbC1tYWlsLXNlbmRlci9tb2RhbC1tYWlsLXNlbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTtBQUN0RTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBOzs7RUFHRSxtQkFBbUI7QUFDckI7QUFLQTtJQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBcUIrQjs7SUFFL0IsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUVIO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztBQUNYO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUtBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBSEE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QsU0FBUztFQUNULG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLHVDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtVQUNwQixvQkFBb0I7RUFDNUIsdUNBQStCO0VBQS9CLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsNEJBQTRCO1VBQ3BCLG9CQUFvQjtFQUM1Qiw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtFQUNWLHVDQUErQjtFQUEvQiwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXAtZGV0YWlsL21vZGFsLW1haWwtc2VuZGVyL21vZGFsLW1haWwtc2VuZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TYWlyYStDb25kZW5zZWRcIik7XHJcbmh0bWwge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaHRtbCAqLFxyXG5odG1sICo6YWZ0ZXIsXHJcbmh0bWwgKjpiZWZvcmUge1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiN0ZXh0IHtcclxuICAgIC8qIHdpZHRoOmF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdGJhY2tncm91bmQtY29sb3I6I0ZGRjtcclxuXHRjb2xvcjojMjIyO1xyXG5cdGZvbnQtZmFtaWx5OkNvdXJpZXIsIG1vbm9zcGFjZTtcclxuXHRmb250LXdlaWdodDpub3JtYWw7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0cmVzaXplOm5vbmU7XHJcblx0bGluZS1oZWlnaHQ6NDBweDtcclxuXHRwYWRkaW5nLWxlZnQ6MTAwcHg7XHJcblx0cGFkZGluZy1yaWdodDozMHB4O1xyXG5cdHBhZGRpbmctdG9wOjQ1cHg7XHJcblx0cGFkZGluZy1ib3R0b206MzRweDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL3N0YXRpYy50dW1ibHIuY29tL21hb3BidGcvRTlCbWd0b2h0L2xpbmVzLnBuZyksIHVybChodHRwczovL3N0YXRpYy50dW1ibHIuY29tL21hb3BidGcvbkJVbWd0b2d4L3BhcGVyLnBuZyk7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXksIHJlcGVhdDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6MTJweDtcclxuXHRib3JkZXItcmFkaXVzOjEycHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDE0cHggIzAwMDtcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDE0cHggIzAwMDtcclxuXHRib3JkZXItdG9wOjFweCBzb2xpZCAjRkZGO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0ZGRjsgKi9cclxuICAgIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4jdGV4dFNpZ24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi8qIHRleHRhcmVhIHtcclxuICAgIGhlaWdodDoyMDBweDtcclxuICAgIG1heC13aWR0aDo2MDBweDtcclxuICAgIGNvbG9yOiM5OTk7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIGZvbnQtZmFtaWx5OidVYnVudHUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6MmVtO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbn1cclxuXHJcbioge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBmb250LWZhbWlseTogJ1NhaXJhIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlN2IxYTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1heC13aWR0aDogMzVlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA0ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggMnB4IHJnYmEoNDgsIDQ4LCA0OCwgMC4yMik7XHJcbn1cclxuXHJcbi5mb3JtX19maWVsZHNldCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9ybV9fbGVnZW5kIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBjb2xvcjogIzNlM2U0MjtcclxufVxyXG5cclxuLmZvcm1fX2xhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm1fX2lucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcbi5mb3JtX19pbnB1dDpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xyXG59XHJcbi5mb3JtX19pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAuOGVtO1xyXG4gIGNvbG9yOiAjZTRlNGU0O1xyXG59XHJcbi5mb3JtX19pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICBjb2xvcjogI2U0ZTRlNDtcclxufVxyXG4uZm9ybV9faW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAuOGVtO1xyXG4gIGNvbG9yOiAjZTRlNGU0O1xyXG59XHJcbi5mb3JtX19pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICBjb2xvcjogI2U0ZTRlNDtcclxufVxyXG5cclxuLmZvcm1fX2J0biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNvbG9yOiAjZmU3YjFhO1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAuNWVtIDMuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2U0ZTRlNDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IC40cztcclxufVxyXG4uaXMtdmFsaWQgLmZvcm1fX2J0biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMDtcclxufVxyXG4uZm9ybV9fYnRuOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTdiMWE7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxufVxyXG4uaXMtdmFsaWQgLmZvcm1fX2J0bjo6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xyXG59XHJcblxyXG4uZm9ybV9faW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uZm9ybV9faW5kaWNhdG9yIC5wcm9ncmVzc2JhciB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgc3Ryb2tlOiAjZmU3YjFhO1xyXG4gIGZpbGw6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content modal modal-wide\" style=\"width: auto; max-width: 600px;\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Mail Sender</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"width: auto; height: auto; max-height: 100%;\">\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-12\">\r\n            <form class=\"form\">\r\n              <fieldset class=\"form__fieldset\">\r\n\r\n                <legend class=\"form__legend\">Mail for all members of the group</legend>\r\n\r\n\r\n                <label class=\"form__label\" for=\"subject\"></label>\r\n                <input class=\"form__input\" type=\"text\" placeholder=\"Subject\" id=\"subject\" name=\"subject\" [(ngModel)]=\"subject\" required autocomplete=\"off\">\r\n                <br>\r\n                <!-- <label class=\"form__label\" for=\"message\"></label>\r\n                <input class=\"form__input\" type=\"text\" placeholder=\"Message\" id=\"message\" required autocomplete=\"off\"> -->\r\n                <!-- <textarea class=\"form_input\" name=\"\" id=\"\" cols=\"40\" rows=\"10\"></textarea> -->\r\n\r\n                <textarea placeholder=\"Your text\" id=\"text\" name=\"text\" rows=\"4\" [(ngModel)]=\"text\"></textarea>\r\n                \r\n                <textarea placeholder=\"\" id=\"textSign\" name=\"textSign\" rows=\"1\" [(ngModel)]=\"textSign\" disabled></textarea>\r\n                \r\n                <!-- <button class=\"form__btn\" (click)=\"onSend()\">Send\r\n                </button> -->\r\n\r\n              </fieldset>\r\n            </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onSend()\">Send</button>\r\n    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSaveImage()\">Save</button> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ModalMailSenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMailSenderComponent", function() { return ModalMailSenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _group_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_getip_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/getip.service */ "./src/app/getip.service.ts");








var ModalMailSenderComponent = /** @class */ (function () {
    function ModalMailSenderComponent(modalRef, groupDetailService, router, route, http, getipService, authService) {
        this.modalRef = modalRef;
        this.groupDetailService = groupDetailService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.getipService = getipService;
        this.authService = authService;
        this.nameEmail = this.authService.getName() + " " + this.authService.getEmail();
        this.textSign = this.nameEmail;
    }
    ModalMailSenderComponent.prototype.ngOnInit = function () {
    };
    ModalMailSenderComponent.prototype.onSend = function () {
        var _this = this;
        var resultJson = {
            groupId: this.groupDetailService.getGroupId(),
            subject: this.subject,
            text: this.text + "\n -- \n " + this.authService.getName() + " " + this.authService.getEmail()
        };
        console.log(resultJson);
        this.http.post('http://' + this.getipService.getip() + ':5000/api/sendEmail', resultJson).subscribe(function (res) {
            console.log(res);
            if (res.message === "Email Sent! :)") {
                _this.modalRef.hide();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalMailSenderComponent.prototype, "subject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalMailSenderComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalMailSenderComponent.prototype, "textSign", void 0);
    ModalMailSenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modal-mail-sender',
            template: __webpack_require__(/*! ./modal-mail-sender.component.html */ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.html"),
            styles: [__webpack_require__(/*! ./modal-mail-sender.component.css */ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"], _group_detail_service__WEBPACK_IMPORTED_MODULE_5__["GroupDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_getip_service__WEBPACK_IMPORTED_MODULE_7__["GetipService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ModalMailSenderComponent);
    return ModalMailSenderComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWwvbW9kYWwtcmVtb3ZlLWdyb3VwL21vZGFsLXJlbW92ZS1ncm91cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <h5>Yoy really want to do this</h5>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Remove</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ModalRemoveGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRemoveGroupComponent", function() { return ModalRemoveGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _group_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ModalRemoveGroupComponent = /** @class */ (function () {
    function ModalRemoveGroupComponent(modalRef, groupDetailService, router, route) {
        this.modalRef = modalRef;
        this.groupDetailService = groupDetailService;
        this.router = router;
        this.route = route;
    }
    ModalRemoveGroupComponent.prototype.ngOnInit = function () {
    };
    ModalRemoveGroupComponent.prototype.onSubmit = function () {
        if (this.leaveOrRemove) {
            this.onLeave();
        }
        else {
            this.onRemove();
        }
    };
    ModalRemoveGroupComponent.prototype.onRemove = function () {
        this.groupDetailService.removeGroup();
        this.modalRef.hide();
    };
    ModalRemoveGroupComponent.prototype.onLeave = function () {
        this.groupDetailService.leaveGroup(this.modalRef);
        // setTimeout(() => {
        // }, 800);
    };
    ModalRemoveGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-modal-remove-group',
            template: __webpack_require__(/*! ./modal-remove-group.component.html */ "./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.html"),
            styles: [__webpack_require__(/*! ./modal-remove-group.component.css */ "./src/app/groups/group-detail/modal-remove-group/modal-remove-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"], _group_detail_service__WEBPACK_IMPORTED_MODULE_1__["GroupDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ModalRemoveGroupComponent);
    return ModalRemoveGroupComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import url(\"https://fonts.googleapis.com/css?family=Saira+Condensed\"); */\r\nhtml {\r\n    box-sizing: border-box;\r\n  }\r\nhtml *,\r\n  html *:after,\r\n  html *:before {\r\n    box-sizing: inherit;\r\n  }\r\n#text {\r\n      /* width:auto;\r\n      max-width: 100%;\r\n      overflow:hidden;\r\n      background-color:#FFF;\r\n      color:#222;\r\n      font-family:Courier, monospace;\r\n      font-weight:normal;\r\n      font-size:18px;\r\n      resize:none;\r\n      line-height:40px;\r\n      padding-left:100px;\r\n      padding-right:30px;\r\n      padding-top:45px;\r\n      padding-bottom:34px;\r\n      background-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);\r\n      background-repeat:repeat-y, repeat;\r\n      -webkit-border-radius:12px;\r\n      border-radius:12px;\r\n      -webkit-box-shadow: 0px 2px 14px #000;\r\n      box-shadow: 0px 2px 14px #000;\r\n      border-top:1px solid #FFF;\r\n      border-bottom:1px solid #FFF; */\r\n      \r\n      display: block;\r\n      width: 100%;\r\n      padding: 5px 0;\r\n      margin-bottom: 10px;\r\n      background: none;\r\n      border: 0;\r\n      outline: 0;\r\n      font-size: 1.5em;\r\n      font-weight: 400;\r\n      font-family: inherit;\r\n  }\r\n/* textarea {\r\n      height:200px;\r\n      max-width:600px;\r\n      color:#999;\r\n      font-weight:400;\r\n      font-size:30px;\r\n      font-family:'Ubuntu', Helvetica, Arial, sans-serif;\r\n      width:100%;\r\n      background:#fff;\r\n      border-radius:3px;\r\n      line-height:2em;\r\n      border:none;\r\n      box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);\r\n      padding:30px;\r\n      -webkit-transition: height 2s ease;\r\n      -moz-transition: height 2s ease;\r\n      -ms-transition: height 2s ease;\r\n      -o-transition: height 2s ease;\r\n      transition: height 2s ease;\r\n  }\r\n  \r\n  * {\r\n      -webkit-font-smoothing:antialiased !important;\r\n  } */\r\nbody {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    background-color: #fe7b1a;\r\n  }\r\n.form {\r\n    max-width: 35em;\r\n    width: 100%;\r\n    padding: 4em;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    box-shadow: 0 0 40px 2px rgba(48, 48, 48, 0.22);\r\n  }\r\n.form__fieldset {\r\n    padding: 0;\r\n    border: 0;\r\n    margin: 0;\r\n  }\r\n.form__legend {\r\n    font-size: 1.5em;\r\n    margin-bottom: 1em;\r\n    color: #3e3e42;\r\n  }\r\n.form__label {\r\n    display: block;\r\n  }\r\n.form__input {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    margin-bottom: 10px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 400;\r\n    font-family: inherit;\r\n  }\r\n.form__input:not(:last-of-type) {\r\n    border-bottom: 1px solid #e4e4e4;\r\n  }\r\n.form__input::-webkit-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n.form__input::-ms-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n.form__input::-moz-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n.form__input::placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n.form__btn {\r\n    position: relative;\r\n    z-index: 1;\r\n    display: block;\r\n    width: 140px;\r\n    height: 40px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    color: #fe7b1a;\r\n    border: 0;\r\n    padding: .5em 3.5em;\r\n    border-radius: 25px;\r\n    border-radius: 0;\r\n    margin-top: 1.5em;\r\n    font-family: inherit;\r\n    box-shadow: inset 0 0 0 1px #e4e4e4;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n    -webkit-transition-delay: .4s;\r\n            transition-delay: .4s;\r\n  }\r\n.is-valid .form__btn {\r\n    color: #fff;\r\n    -webkit-transition-delay: 0;\r\n            transition-delay: 0;\r\n  }\r\n.form__btn::before {\r\n    content: ' ';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    background-color: #fe7b1a;\r\n    border-radius: inherit;\r\n    -webkit-transform: scaleX(0);\r\n            transform: scaleX(0);\r\n    -webkit-transition: all .5s ease-in-out;\r\n    transition: all .5s ease-in-out;\r\n  }\r\n.is-valid .form__btn::before {\r\n    -webkit-transform: scaleX(1);\r\n            transform: scaleX(1);\r\n    -webkit-transition-delay: .3s;\r\n            transition-delay: .3s;\r\n  }\r\n.form__indicator {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.form__indicator .progressbar {\r\n    stroke-width: 2px;\r\n    stroke: #fe7b1a;\r\n    fill: none;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9wZW9wbGVncm91cC1saXN0L21vZGFsLWNoYW5nZS1hdmF0YXItcGVyc29uL21vZGFsLWNoYW5nZS1hdmF0YXItcGVyc29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFO0FBQzVFO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBQ0E7OztJQUdFLG1CQUFtQjtFQUNyQjtBQUtBO01BQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FxQitCOztNQUUvQixjQUFjO01BQ2QsV0FBVztNQUNYLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixvQkFBb0I7RUFDeEI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1Qkc7QUFFSDtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsK0NBQStDO0VBQ2pEO0FBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7RUFDWDtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7QUFDQTtJQUNFLGdDQUFnQztFQUNsQztBQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFLQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUhBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyx1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQy9CLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLFdBQVc7SUFDWCwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7WUFDcEIsb0JBQW9CO0lBQzVCLHVDQUErQjtJQUEvQiwrQkFBK0I7RUFDakM7QUFDQTtJQUNFLDRCQUE0QjtZQUNwQixvQkFBb0I7SUFDNUIsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVix1Q0FBK0I7SUFBL0IsK0JBQStCO0VBQ2pDIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9wZW9wbGVncm91cC1saXN0L21vZGFsLWNoYW5nZS1hdmF0YXItcGVyc29uL21vZGFsLWNoYW5nZS1hdmF0YXItcGVyc29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TYWlyYStDb25kZW5zZWRcIik7ICovXHJcbmh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgaHRtbCAqLFxyXG4gIGh0bWwgKjphZnRlcixcclxuICBodG1sICo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICN0ZXh0IHtcclxuICAgICAgLyogd2lkdGg6YXV0bztcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRjtcclxuICAgICAgY29sb3I6IzIyMjtcclxuICAgICAgZm9udC1mYW1pbHk6Q291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICByZXNpemU6bm9uZTtcclxuICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OjEwMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjMwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjQ1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjM0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vbWFvcGJ0Zy9FOUJtZ3RvaHQvbGluZXMucG5nKSwgdXJsKGh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vbWFvcGJ0Zy9uQlVtZ3RvZ3gvcGFwZXIucG5nKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXksIHJlcGVhdDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MTJweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDE0cHggIzAwMDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxNHB4ICMwMDA7XHJcbiAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNGRkY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNGRkY7ICovXHJcbiAgICAgIFxyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAvKiB0ZXh0YXJlYSB7XHJcbiAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgbWF4LXdpZHRoOjYwMHB4O1xyXG4gICAgICBjb2xvcjojOTk5O1xyXG4gICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICBmb250LWZhbWlseTonVWJ1bnR1JywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgICAgbGluZS1oZWlnaHQ6MmVtO1xyXG4gICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgYm94LXNoYWRvdzowcHggMHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAgIC1tcy10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAqIHtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICBcclxuICBib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LWZhbWlseTogJ1NhaXJhIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU3YjFhO1xyXG4gIH1cclxuICBcclxuICAuZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDM1ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCAycHggcmdiYSg0OCwgNDgsIDQ4LCAwLjIyKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1fX2ZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtX19sZWdlbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGNvbG9yOiAjM2UzZTQyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9fbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtX19pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9fYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY29sb3I6ICNmZTdiMWE7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAuNWVtIDMuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlNGU0ZTQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG4gIH1cclxuICAuaXMtdmFsaWQgLmZvcm1fX2J0biB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XHJcbiAgfVxyXG4gIC5mb3JtX19idG46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTdiMWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuaXMtdmFsaWQgLmZvcm1fX2J0bjo6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9faW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuZm9ybV9faW5kaWNhdG9yIC5wcm9ncmVzc2JhciB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZTogI2ZlN2IxYTtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"row align-items-center justify-content-center\">\r\n            <div class=\"col-xs-2\" style=\"float: left;\">\r\n              <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onBack()\"><i class=\"fa fa-arrow-circle-o-left fa-2x\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n            <div class=\"col-xs-8\">\r\n              <img [src]=\"imgPath\" style=\"width: 150px;\">\r\n            </div>\r\n            <div class=\"col-xs-2 align-items-right\" style=\"float: right;\">\r\n              <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onForward()\"><i class=\"fa fa-arrow-circle-o-right fa-2x\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSaveAvatar()\">Save</button>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<div class=\"modal-content modal modal-wide\" style=\"width: auto; max-width: 600px;\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"width: auto; height: auto; max-height: 100%;\">\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-12\">\r\n            <form class=\"form\">\r\n              <fieldset class=\"form__fieldset\">\r\n            \r\n                <legend class=\"form__legend\">{{ title }}</legend>\r\n            \r\n                <label class=\"form__label\" for=\"subject\"></label>\r\n                <div class=\"row align-items-center justify-content-center\">\r\n                  <div class=\"col-xs-2\" style=\"float: left;\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onBack()\"><i class=\"fa fa-arrow-circle-o-left fa-2x\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                  <div class=\"col-xs-8\">\r\n                    <img [src]=\"imgPath\" style=\"width: 150px;\">\r\n                  </div>\r\n                  <div class=\"col-xs-2 align-items-right\" style=\"float: right;\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onForward()\"><i class=\"fa fa-arrow-circle-o-right fa-2x\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n            </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSaveAvatar()\">Save</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ModalChangeAvatarPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalChangeAvatarPersonComponent", function() { return ModalChangeAvatarPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _peopleGroup_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../peopleGroup.model */ "./src/app/groups/peopleGroup.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _group_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");






var ModalChangeAvatarPersonComponent = /** @class */ (function () {
    function ModalChangeAvatarPersonComponent(modalRef, groupDetailService, authService) {
        this.modalRef = modalRef;
        this.groupDetailService = groupDetailService;
        this.authService = authService;
        this.imgNumber = 1;
        this.imgPath = "assets/img/people/person1.png";
    }
    ModalChangeAvatarPersonComponent.prototype.ngOnInit = function () {
        console.log(this.title);
        console.log(this.person);
        console.log(this.personIndex);
    };
    ModalChangeAvatarPersonComponent.prototype.onForward = function () {
        if (this.imgNumber === 9) {
            this.imgNumber = 1;
        }
        else {
            this.imgNumber++;
        }
        console.log(this.imgNumber);
        this.imgPath = "assets/img/people/person" + this.imgNumber + ".png";
    };
    ModalChangeAvatarPersonComponent.prototype.onBack = function () {
        if (this.imgNumber === 1) {
            this.imgNumber = 9;
        }
        else {
            this.imgNumber--;
        }
        console.log(this.imgNumber);
        this.imgPath = "assets/img/people/person" + this.imgNumber + ".png";
    };
    ModalChangeAvatarPersonComponent.prototype.onSaveAvatar = function () {
        this.person.user.avatarPath = this.imgPath;
        this.groupDetailService.updateAvatarOfPerson(this.person, this.personIndex);
        this.authService.setAvatarPathLocal(this.imgPath);
        this.modalRef.hide();
        // window.location.reload();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalChangeAvatarPersonComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _peopleGroup_model__WEBPACK_IMPORTED_MODULE_1__["PeopleGroup"])
    ], ModalChangeAvatarPersonComponent.prototype, "person", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ModalChangeAvatarPersonComponent.prototype, "personIndex", void 0);
    ModalChangeAvatarPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-modal-change-avatar-person',
            template: __webpack_require__(/*! ./modal-change-avatar-person.component.html */ "./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.html"),
            styles: [__webpack_require__(/*! ./modal-change-avatar-person.component.css */ "./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"], _group_detail_service__WEBPACK_IMPORTED_MODULE_4__["GroupDetailService"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ModalChangeAvatarPersonComponent);
    return ModalChangeAvatarPersonComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* Hexagons */\r\n#hexGrid {\r\n    overflow: hidden;\r\n    width: 45.5%;\r\n    margin: 0 auto;\r\n    /* padding: 0.866% 0; */\r\n    padding: 3.7%;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 15px;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n    background: transparent;\r\n}\r\n#hexGrid:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n}\r\n.hex {\r\n    position: relative;\r\n    list-style-type: none;\r\n    float: left;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n    -webkit-transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n            transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n}\r\n.hex * {\r\n    position: absolute;\r\n    visibility: visible;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n}\r\n.hexIn {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    color: #fff;\r\n    overflow: hidden;\r\n    -webkit-transform: skewY(-30deg) rotate(60deg);\r\n            transform: skewY(-30deg) rotate(60deg);\r\n}\r\n/*** HEX CONTENT **********************************************************************/\r\n.hex img {\r\n    left: -100%;\r\n    right: -100%;\r\n    width: auto;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n}\r\n.hex h1, .hex p {\r\n    margin: 0;\r\n    width: 102%;\r\n    left: -1%;  /* prevent line on the right where background doesn't cover image */\r\n    padding: 5%;\r\n    box-sizing: border-box;\r\n    background-color: rgba(0, 128, 128, 0.8);\r\n    font-weight: 300;\r\n    -webkit-transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n}\r\n.hex h1 {\r\n    bottom: 50%;\r\n    padding-top: 50%;\r\n    font-size: 1.5em;\r\n    z-index: 1;\r\n    -webkit-transform: translateY(-100%) translatez(-1px);\r\n            transform: translateY(-100%) translatez(-1px);\r\n}\r\n.hex h1:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 45%;\r\n    width: 10%;\r\n    text-align: center;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.hex p {\r\n    top: 50%;\r\n    padding-bottom: 50%;\r\n    -webkit-transform: translateY(100%) translatez(-1px);\r\n            transform: translateY(100%) translatez(-1px);\r\n}\r\n/*** HOVER EFFECT  **********************************************************************/\r\n.hexIn:hover h1, .hexIn:focus h1, .hexIn:hover p, .hexIn:focus p {\r\n    -webkit-transform: translateY(0%) translatez(-1px);\r\n            transform: translateY(0%) translatez(-1px);\r\n}\r\n/*** SPACING AND SIZING *****************************************************************/\r\n@media (min-width:1201px) {  /* <- 2-3  hexagons per row */\r\n.hex {\r\n    width: 32.666%;    /* = (100-2) / 3 */\r\n    padding-bottom: 37.720%;    /* =  width / sin(60) */\r\n}\r\n.hex:nth-child(5n+1),\r\n.hex:nth-child(5n+2) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n}\r\n.hex:nth-child(5n+3),\r\n.hex:nth-child(5n+4),\r\n.hex:nth-child(5n+5) {\r\n    margin-top: -8.564%;\r\n    margin-bottom: -8.564%;\r\n}\r\n.hex:nth-child(5n+2),\r\n.hex:nth-child(5n+4) {\r\n    margin-right: 1%;\r\n    margin-left: 1%;\r\n}\r\n.hex:nth-child(5n+1) {\r\n    margin-left: 0.5%;\r\n}\r\n.hex:nth-child(5n+3),\r\n.hex:nth-child(5n+6) {\r\n    clear: left;\r\n}\r\n}\r\n@media (max-width: 1200px) {  /* <- 1-2  hexagons per row */\r\n.hex {\r\n    width: 49.5%;    /* = (100-1) / 2 */\r\n    padding-bottom: 57.158%;    /* =  width / sin(60) */\r\n}\r\n.hex:nth-child(3n+1) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n}\r\n.hex:nth-child(3n+2),\r\n.hex:nth-child(3n+3) {\r\n    margin-top: -13.423%;\r\n    margin-bottom: -13.423%;\r\n}\r\n.hex:nth-child(3n+1) {\r\n    margin-left: 0.5%\r\n}\r\n.hex:nth-child(3n+3) {\r\n    margin-left: 1%;\r\n}\r\n.hex:nth-child(3n+2),\r\n.hex:nth-child(3n+4) {\r\n    clear: left;\r\n}\r\n}\r\n@media (max-width: 400px) {\r\n#hexGrid {\r\n    font-size: 13px;\r\n}\r\n}\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 24px;\r\n}\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    left: 4px;\r\n    bottom: 3px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n}\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(14px);\r\n    transform: translateX(14px);\r\n}\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n.float{\r\n\tposition:fixed;\r\n\twidth:60px;\r\n  height:60px;\r\n\tbottom:20px;\r\n\tright:500px;\r\n\tbackground-color:rgb(23, 23, 24);\r\n\tcolor:#FFF;\r\n\tborder-radius:50px;\r\n\ttext-align:center;\r\n\tbox-shadow: 2px 2px 3px #999;\r\n}\r\n.float:hover{\r\n    cursor: pointer;\r\n}\r\n#fontFloat:hover{\r\n  color: #88b999;\r\n  /* cursor: pointer; */\r\n}\r\n.my-float{\r\n\tmargin-top:22px;\r\n}\r\n.name {\r\n  position: relative;\r\n  width: 250px;\r\n  height: 120px;\r\n  font-size: 18px;\r\n  color: #fff;\r\n  line-height: 28px;\r\n  text-align: center;\r\n  background: rgb(0, 0, 0);\r\n  margin-top: 90%;\r\n  left: -17%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9wZW9wbGVncm91cC1saXN0L3Blb3BsZWdyb3VwLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsYUFBYTtBQUNiO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsOEJBQThCLEdBQUcsbURBQW1EO0lBQ3BGLCtEQUF1RDtZQUF2RCx1REFBdUQ7QUFDM0Q7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOEJBQThCLEdBQUcsbURBQW1EO0FBQ3hGO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0FBQzFDO0FBR0EsdUZBQXVGO0FBRXZGO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUyxHQUFHLG1FQUFtRTtJQUMvRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsd0VBQXdEO0lBQXhELGdFQUF3RDtJQUF4RCx3REFBd0Q7SUFBeEQsd0ZBQXdEO0FBQzVEO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YscURBQTZDO1lBQTdDLDZDQUE2QztBQUNqRDtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLG9EQUE0QztZQUE1Qyw0Q0FBNEM7QUFDaEQ7QUFHQSx5RkFBeUY7QUFFekY7SUFDSSxrREFBMEM7WUFBMUMsMENBQTBDO0FBQzlDO0FBR0EseUZBQXlGO0FBRXpGLDZCQUE2Qiw2QkFBNkI7QUFDMUQ7SUFDSSxjQUFjLEtBQUssa0JBQWtCO0lBQ3JDLHVCQUF1QixLQUFLLHVCQUF1QjtBQUN2RDtBQUNBOztJQUVJLDhEQUFzRDtZQUF0RCxzREFBc0Q7QUFDMUQ7QUFDQTs7O0lBR0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTtBQUVBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7SUFDSSxZQUFZLEtBQUssa0JBQWtCO0lBQ25DLHVCQUF1QixLQUFLLHVCQUF1QjtBQUN2RDtBQUNBO0lBQ0ksOERBQXNEO1lBQXRELHNEQUFzRDtBQUMxRDtBQUNBOztJQUVJLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTtBQUVBO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLG1DQUFtQztJQUVuQywyQkFBMkI7QUFDL0I7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUlBO0NBQ0MsY0FBYztDQUNkLFVBQVU7RUFDVCxXQUFXO0NBQ1osV0FBVztDQUNYLFdBQVc7Q0FDWCxnQ0FBZ0M7Q0FDaEMsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNEJBQTRCO0FBQzdCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBR0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXAtZGV0YWlsL3Blb3BsZWdyb3VwLWxpc3QvcGVvcGxlZ3JvdXAtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIEhleGFnb25zICovXHJcbiNoZXhHcmlkIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNDUuNSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qIHBhZGRpbmc6IDAuODY2JSAwOyAqL1xyXG4gICAgcGFkZGluZzogMy43JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jaGV4R3JpZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmhleCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7ICAvKiBmaXggZm9yIGphZ2dlZCBlZGdlcyBpbiBGRiBvbiBob3ZlciB0cmFuc2l0aW9uICovXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpIHNrZXdZKDMwZGVnKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG59XHJcblxyXG4uaGV4ICoge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgIC8qIGZpeCBmb3IgamFnZ2VkIGVkZ2VzIGluIEZGIG9uIGhvdmVyIHRyYW5zaXRpb24gKi9cclxufVxyXG5cclxuLmhleEluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0zMGRlZykgcm90YXRlKDYwZGVnKTtcclxufVxyXG5cclxuXHJcbi8qKiogSEVYIENPTlRFTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5oZXggaW1nIHtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhleCBoMSwgLmhleCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDIlO1xyXG4gICAgbGVmdDogLTElOyAgLyogcHJldmVudCBsaW5lIG9uIHRoZSByaWdodCB3aGVyZSBiYWNrZ3JvdW5kIGRvZXNuJ3QgY292ZXIgaW1hZ2UgKi9cclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAxMjgsIDAuOCk7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dCwgb3BhY2l0eSAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5oZXggaDEge1xyXG4gICAgYm90dG9tOiA1MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZXooLTFweCk7XHJcbn1cclxuXHJcbi5oZXggaDE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5oZXggcCB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgdHJhbnNsYXRleigtMXB4KTtcclxufVxyXG5cclxuXHJcbi8qKiogSE9WRVIgRUZGRUNUICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmhleEluOmhvdmVyIGgxLCAuaGV4SW46Zm9jdXMgaDEsIC5oZXhJbjpob3ZlciBwLCAuaGV4SW46Zm9jdXMgcCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHRyYW5zbGF0ZXooLTFweCk7XHJcbn1cclxuXHJcblxyXG4vKioqIFNQQUNJTkcgQU5EIFNJWklORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMDFweCkgeyAgLyogPC0gMi0zICBoZXhhZ29ucyBwZXIgcm93ICovXHJcbi5oZXgge1xyXG4gICAgd2lkdGg6IDMyLjY2NiU7ICAgIC8qID0gKDEwMC0yKSAvIDMgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAzNy43MjAlOyAgICAvKiA9ICB3aWR0aCAvIHNpbig2MCkgKi9cclxufVxyXG4uaGV4Om50aC1jaGlsZCg1bisxKSxcclxuLmhleDpudGgtY2hpbGQoNW4rMikge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlKC02MGRlZykgc2tld1koMzBkZWcpO1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDVuKzMpLFxyXG4uaGV4Om50aC1jaGlsZCg1bis0KSxcclxuLmhleDpudGgtY2hpbGQoNW4rNSkge1xyXG4gICAgbWFyZ2luLXRvcDogLTguNTY0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IC04LjU2NCU7XHJcbn1cclxuLmhleDpudGgtY2hpbGQoNW4rMiksXHJcbi5oZXg6bnRoLWNoaWxkKDVuKzQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuLmhleDpudGgtY2hpbGQoNW4rMSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNSU7XHJcbn1cclxuLmhleDpudGgtY2hpbGQoNW4rMyksXHJcbi5oZXg6bnRoLWNoaWxkKDVuKzYpIHtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgIC8qIDwtIDEtMiAgaGV4YWdvbnMgcGVyIHJvdyAqL1xyXG4uaGV4IHtcclxuICAgIHdpZHRoOiA0OS41JTsgICAgLyogPSAoMTAwLTEpIC8gMiAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU3LjE1OCU7ICAgIC8qID0gIHdpZHRoIC8gc2luKDYwKSAqL1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzEpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZSgtNjBkZWcpIHNrZXdZKDMwZGVnKTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCgzbisyKSxcclxuLmhleDpudGgtY2hpbGQoM24rMykge1xyXG4gICAgbWFyZ2luLXRvcDogLTEzLjQyMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTMuNDIzJTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCgzbisxKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41JVxyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzMpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCgzbisyKSxcclxuLmhleDpudGgtY2hpbGQoM24rNCkge1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiNoZXhHcmlkIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG59XHJcblxyXG5cclxuLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTRweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTRweCk7XHJcbn1cclxuXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHJcblxyXG4uZmxvYXR7XHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0d2lkdGg6NjBweDtcclxuICBoZWlnaHQ6NjBweDtcclxuXHRib3R0b206MjBweDtcclxuXHRyaWdodDo1MDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMywgMjMsIDI0KTtcclxuXHRjb2xvcjojRkZGO1xyXG5cdGJvcmRlci1yYWRpdXM6NTBweDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xyXG59XHJcblxyXG4uZmxvYXQ6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4jZm9udEZsb2F0OmhvdmVye1xyXG4gIGNvbG9yOiAjODhiOTk5O1xyXG4gIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cclxufVxyXG5cclxuLm15LWZsb2F0e1xyXG5cdG1hcmdpbi10b3A6MjJweDtcclxufVxyXG4ubmFtZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xyXG4gIG1hcmdpbi10b3A6IDkwJTtcclxuICBsZWZ0OiAtMTclO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"hexGrid\">\r\n    <ng-container *ngFor=\"let person of people | filter : ['user','fullName'] : namePersonSearch : 'includes'; let i = index\">\r\n        <ng-container [ngSwitch]=\"person.user.fullName\">\r\n            <li class=\"hex\" *ngSwitchCase=\"authService.getAcc().fullName\">\r\n                <a class=\"hexIn\">\r\n                    <img [src]=\"person.user.avatarPath\" alt=\"\"/>\r\n                    <h1>\r\n                        {{ person.user.fullName }}\r\n                    </h1>\r\n                    <div class=\"name\">{{ person.user.fullName }}</div>\r\n                    <p *ngIf=\"admin\">\r\n                    <button type=\"button\" style=\"width: 24px; height: 24px; right: 72px; top: 40px;\" class=\"btn btn-secondary\" tooltip=\"Change Avatar\" placement=\"top\"><i class=\"fa fa-user-circle\" style=\"right: 4px; top: 2px; bottom: 0px;\" (click)=\"changeAvatarPerson(person, i)\"></i></button>\r\n                    </p>\r\n                    <p *ngIf=\"!admin\">\r\n                    </p>\r\n                </a>\r\n            </li>\r\n\r\n            <li class=\"hex\" *ngSwitchDefault>\r\n                <a class=\"hexIn\">\r\n                    <img [src]=\"person.user.avatarPath\" alt=\"\"/>\r\n                    <h1>\r\n                        {{ person.user.fullName }}\r\n                    </h1>\r\n                    <div class=\"name\">{{ person.user.fullName }}</div>\r\n                    <p *ngIf=\"admin\">\r\n\r\n                    <button type=\"button\" style=\"left: 60px; height: 24px;\" class=\"btn btn-danger\" tooltip=\"Remove Him\"  placement=\"bottom\" (click)=\"onRemove(i)\"><i class=\"fa fa-times\" style=\"right: 6px; top: 1px; bottom: 0px;\"></i></button>\r\n                    <label class=\"switch\" tooltip=\"Admin\" placement=\"bottom\">\r\n                        <input type=\"checkbox\" name=\"admin\" id=\"admin\" [checked]=\"person.admin\" (change)=\"checkValueAdmin(i)\">\r\n                        <span class=\"slider round\"></span>\r\n                    </label>\r\n                    <br>\r\n                    <!-- Change Avatar -->\r\n                    <!-- <button type=\"button\" style=\"width: 24px; height: 24px; right: 72px; top: 40px;\" class=\"btn btn-secondary\" tooltip=\"Change Avatar\" placement=\"top\"><i class=\"fa fa-user-circle\" style=\"right: 4px; top: 2px; bottom: 0px;\" (click)=\"changeAvatarPerson(person, i)\"></i></button> -->\r\n                    </p>\r\n\r\n                    <p *ngIf=\"!admin\">\r\n\r\n                    </p>\r\n                </a>\r\n            </li>\r\n        </ng-container>\r\n    </ng-container>\r\n    <!-- <li *ngIf=\"admin\" class=\"hex\" (click)=\"onAddPerson()\">\r\n        <a class=\"hexIn\">\r\n            <img src=\"assets/img/Plus_Sign.png\" alt=\"\"/>\r\n            <h1>Add a new Person</h1>\r\n            <p>Add a new Person</p>\r\n        </a>\r\n    </li> -->\r\n    <a class=\"float\" (click)=\"onAddPerson()\">\r\n      <font id=\"fontFloat\" color=\"#FFFFFF\"><i class=\"fa fa-plus my-float\"></i></font>\r\n    </a>\r\n</ul>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: PeoplegroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplegroupListComponent", function() { return PeoplegroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _group_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _group_newModal_group_newModal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../group-newModal/group-newModal.component */ "./src/app/groups/group-newModal/group-newModal.component.ts");
/* harmony import */ var _modal_change_avatar_person_modal_change_avatar_person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-change-avatar-person/modal-change-avatar-person.component */ "./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.ts");







var PeoplegroupListComponent = /** @class */ (function () {
    function PeoplegroupListComponent(groupDetailService, authService, modalService) {
        this.groupDetailService = groupDetailService;
        this.authService = authService;
        this.modalService = modalService;
    }
    PeoplegroupListComponent.prototype.ngOnInit = function () {
        this.people = this.groupDetailService.getPeople();
        // console.log("asdasd");
        console.log(this.people);
        // console.log(this.groupDetailService.getPeople());
    };
    PeoplegroupListComponent.prototype.checkValueAdmin = function (index) {
        this.people[index].admin = !this.people[index].admin;
        console.log(this.people[index].admin);
        this.groupDetailService.updatePeopleGroup(this.people);
        // this.groupDetailService.updateGroup();
    };
    PeoplegroupListComponent.prototype.changeAvatarPerson = function (person, index) {
        this.modalRef = this.modalService.show(_modal_change_avatar_person_modal_change_avatar_person_component__WEBPACK_IMPORTED_MODULE_6__["ModalChangeAvatarPersonComponent"], {
            initialState: {
                title: 'Change Avatar Of Person',
                person: person,
                personIndex: index
            }
        });
    };
    PeoplegroupListComponent.prototype.onRemove = function (index) {
        this.people.splice(index, 1);
        this.groupDetailService.updatePeopleGroup(this.people);
    };
    PeoplegroupListComponent.prototype.onAddPerson = function () {
        this.modalRef = this.modalService.show(_group_newModal_group_newModal_component__WEBPACK_IMPORTED_MODULE_5__["GroupNewModalComponent"], {
            initialState: {
                title: 'Add People To Group',
                addPeople: true,
                nameGroup: this.groupDetailService.getGroupName(),
                description: this.groupDetailService.getGroupDescription()
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PeoplegroupListComponent.prototype, "people", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PeoplegroupListComponent.prototype, "namePersonSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PeoplegroupListComponent.prototype, "admin", void 0);
    PeoplegroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-peoplegroup-list',
            template: __webpack_require__(/*! ./peoplegroup-list.component.html */ "./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.html"),
            styles: [__webpack_require__(/*! ./peoplegroup-list.component.css */ "./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_group_detail_service__WEBPACK_IMPORTED_MODULE_3__["GroupDetailService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], PeoplegroupListComponent);
    return PeoplegroupListComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-item/group-item.component.css":
/*!************************************************************!*\
  !*** ./src/app/groups/group-item/group-item.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hex {\r\n    position: relative;\r\n    list-style-type: none;\r\n    float: left;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n    -webkit-transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n            transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n  }\r\n  \r\n  .hex * {\r\n    position: absolute;\r\n    visibility: visible;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n  }\r\n  \r\n  .hexIn {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    color: #fff;\r\n    overflow: hidden;\r\n    -webkit-transform: skewY(-30deg) rotate(60deg);\r\n            transform: skewY(-30deg) rotate(60deg);\r\n  }\r\n  \r\n  /*** HEX CONTENT **********************************************************************/\r\n  \r\n  .hex img {\r\n    left: -100%;\r\n    right: -100%;\r\n    width: auto;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .hex h1,\r\n  .hex p {\r\n    margin: 0;\r\n    width: 102%;\r\n    left: -1%;  /* prevent line on the right where background doesn't cover image */\r\n    padding: 5%;\r\n    box-sizing: border-box;\r\n    background-color: rgba(0, 128, 128, 0.8);\r\n    font-weight: 300;\r\n    -webkit-transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n  }\r\n  \r\n  .hex h1 {\r\n    bottom: 50%;\r\n    padding-top: 50%;\r\n    font-size: 1.5em;\r\n    z-index: 1;\r\n    -webkit-transform: translateY(-100%) translatez(-1px);\r\n            transform: translateY(-100%) translatez(-1px);\r\n  }\r\n  \r\n  .hex h1:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 45%;\r\n    width: 10%;\r\n    text-align: center;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n  \r\n  .hex p {\r\n    top: 50%;\r\n    padding-bottom: 50%;\r\n    -webkit-transform: translateY(100%) translatez(-1px);\r\n            transform: translateY(100%) translatez(-1px);\r\n  }\r\n  \r\n  /*** HOVER EFFECT  **********************************************************************/\r\n  \r\n  .hexIn:hover h1, .hexIn:focus h1, .hexIn:hover p, .hexIn:focus p {\r\n    -webkit-transform: translateY(0%) translatez(-1px);\r\n            transform: translateY(0%) translatez(-1px);\r\n  }\r\n  \r\n  /*** SPACING AND SIZING *****************************************************************/\r\n  \r\n  @media (min-width:1201px) {  /* <- 2-3  hexagons per row */\r\n    .hex {\r\n      width: 32.666%;    /* = (100-2) / 3 */\r\n      padding-bottom: 37.720%;    /* =  width / sin(60) */\r\n    }\r\n    .hex:nth-child(5n+1),\r\n    .hex:nth-child(5n+2) {\r\n      -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n              transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n    }\r\n    .hex:nth-child(5n+3),\r\n    .hex:nth-child(5n+4),\r\n    .hex:nth-child(5n+5) {\r\n      margin-top: -8.564%;\r\n      margin-bottom: -8.564%;\r\n    }\r\n    .hex:nth-child(5n+2),\r\n    .hex:nth-child(5n+4) {\r\n      margin-right: 1%;\r\n      margin-left: 1%;\r\n    }\r\n    .hex:nth-child(5n+1) {\r\n      margin-left: 0.5%;\r\n    }\r\n    .hex:nth-child(5n+3),\r\n    .hex:nth-child(5n+6) {\r\n      clear: left;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 1200px) {  /* <- 1-2  hexagons per row */\r\n    .hex {\r\n      width: 49.5%;    /* = (100-1) / 2 */\r\n      padding-bottom: 57.158%;    /* =  width / sin(60) */\r\n    }\r\n    .hex:nth-child(3n+1) {\r\n      -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n              transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n    }\r\n    .hex:nth-child(3n+2),\r\n    .hex:nth-child(3n+3) {\r\n      margin-top: -13.423%;\r\n      margin-bottom: -13.423%;\r\n    }\r\n    .hex:nth-child(3n+1) {\r\n      margin-left: 0.5%\r\n    }\r\n    .hex:nth-child(3n+3) {\r\n      margin-left: 1%;\r\n    }\r\n    .hex:nth-child(3n+2),\r\n    .hex:nth-child(3n+4) {\r\n      clear: left;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWl0ZW0vZ3JvdXAtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEIsR0FBRyxtREFBbUQ7SUFDcEYsK0RBQXVEO1lBQXZELHVEQUF1RDtFQUN6RDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOEJBQThCLEdBQUcsbURBQW1EO0VBQ3RGOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsOENBQXNDO1lBQXRDLHNDQUFzQztFQUN4Qzs7RUFHQSx1RkFBdUY7O0VBRXZGO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTLEdBQUcsbUVBQW1FO0lBQy9FLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQix3RUFBd0Q7SUFBeEQsZ0VBQXdEO0lBQXhELHdEQUF3RDtJQUF4RCx3RkFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YscURBQTZDO1lBQTdDLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsb0RBQTRDO1lBQTVDLDRDQUE0QztFQUM5Qzs7RUFHQSx5RkFBeUY7O0VBRXpGO0lBQ0Usa0RBQTBDO1lBQTFDLDBDQUEwQztFQUM1Qzs7RUFHQSx5RkFBeUY7O0VBRXpGLDZCQUE2Qiw2QkFBNkI7SUFDeEQ7TUFDRSxjQUFjLEtBQUssa0JBQWtCO01BQ3JDLHVCQUF1QixLQUFLLHVCQUF1QjtJQUNyRDtJQUNBOztNQUVFLDhEQUFzRDtjQUF0RCxzREFBc0Q7SUFDeEQ7SUFDQTs7O01BR0UsbUJBQW1CO01BQ25CLHNCQUFzQjtJQUN4QjtJQUNBOztNQUVFLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTs7TUFFRSxXQUFXO0lBQ2I7RUFDRjs7RUFFQSw4QkFBOEIsNkJBQTZCO0lBQ3pEO01BQ0UsWUFBWSxLQUFLLGtCQUFrQjtNQUNuQyx1QkFBdUIsS0FBSyx1QkFBdUI7SUFDckQ7SUFDQTtNQUNFLDhEQUFzRDtjQUF0RCxzREFBc0Q7SUFDeEQ7SUFDQTs7TUFFRSxvQkFBb0I7TUFDcEIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRTtJQUNGO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7O01BRUUsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXAtaXRlbS9ncm91cC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGV4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgIC8qIGZpeCBmb3IgamFnZ2VkIGVkZ2VzIGluIEZGIG9uIGhvdmVyIHRyYW5zaXRpb24gKi9cclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZykgc2tld1koMzBkZWcpIHRyYW5zbGF0ZXooLTFweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZXggKiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyAgLyogZml4IGZvciBqYWdnZWQgZWRnZXMgaW4gRkYgb24gaG92ZXIgdHJhbnNpdGlvbiAqL1xyXG4gIH1cclxuICBcclxuICAuaGV4SW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogc2tld1koLTMwZGVnKSByb3RhdGUoNjBkZWcpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKioqIEhFWCBDT05URU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgXHJcbiAgLmhleCBpbWcge1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuaGV4IGgxLFxyXG4gIC5oZXggcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAyJTtcclxuICAgIGxlZnQ6IC0xJTsgIC8qIHByZXZlbnQgbGluZSBvbiB0aGUgcmlnaHQgd2hlcmUgYmFja2dyb3VuZCBkb2Vzbid0IGNvdmVyIGltYWdlICovXHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMTI4LCAwLjgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsIG9wYWNpdHkgLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAuaGV4IGgxIHtcclxuICAgIGJvdHRvbTogNTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG4gIH1cclxuICBcclxuICAuaGV4IGgxOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNDUlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuaGV4IHAge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHRyYW5zbGF0ZXooLTFweCk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qKiogSE9WRVIgRUZGRUNUICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIFxyXG4gIC5oZXhJbjpob3ZlciBoMSwgLmhleEluOmZvY3VzIGgxLCAuaGV4SW46aG92ZXIgcCwgLmhleEluOmZvY3VzIHAge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKioqIFNQQUNJTkcgQU5EIFNJWklORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDoxMjAxcHgpIHsgIC8qIDwtIDItMyAgaGV4YWdvbnMgcGVyIHJvdyAqL1xyXG4gICAgLmhleCB7XHJcbiAgICAgIHdpZHRoOiAzMi42NjYlOyAgICAvKiA9ICgxMDAtMikgLyAzICovXHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzNy43MjAlOyAgICAvKiA9ICB3aWR0aCAvIHNpbig2MCkgKi9cclxuICAgIH1cclxuICAgIC5oZXg6bnRoLWNoaWxkKDVuKzEpLFxyXG4gICAgLmhleDpudGgtY2hpbGQoNW4rMikge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGUoLTYwZGVnKSBza2V3WSgzMGRlZyk7XHJcbiAgICB9XHJcbiAgICAuaGV4Om50aC1jaGlsZCg1biszKSxcclxuICAgIC5oZXg6bnRoLWNoaWxkKDVuKzQpLFxyXG4gICAgLmhleDpudGgtY2hpbGQoNW4rNSkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtOC41NjQlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtOC41NjQlO1xyXG4gICAgfVxyXG4gICAgLmhleDpudGgtY2hpbGQoNW4rMiksXHJcbiAgICAuaGV4Om50aC1jaGlsZCg1bis0KSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIH1cclxuICAgIC5oZXg6bnRoLWNoaWxkKDVuKzEpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNSU7XHJcbiAgICB9XHJcbiAgICAuaGV4Om50aC1jaGlsZCg1biszKSxcclxuICAgIC5oZXg6bnRoLWNoaWxkKDVuKzYpIHtcclxuICAgICAgY2xlYXI6IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgIC8qIDwtIDEtMiAgaGV4YWdvbnMgcGVyIHJvdyAqL1xyXG4gICAgLmhleCB7XHJcbiAgICAgIHdpZHRoOiA0OS41JTsgICAgLyogPSAoMTAwLTEpIC8gMiAqL1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNTcuMTU4JTsgICAgLyogPSAgd2lkdGggLyBzaW4oNjApICovXHJcbiAgICB9XHJcbiAgICAuaGV4Om50aC1jaGlsZCgzbisxKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZSgtNjBkZWcpIHNrZXdZKDMwZGVnKTtcclxuICAgIH1cclxuICAgIC5oZXg6bnRoLWNoaWxkKDNuKzIpLFxyXG4gICAgLmhleDpudGgtY2hpbGQoM24rMykge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTMuNDIzJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTEzLjQyMyU7XHJcbiAgICB9XHJcbiAgICAuaGV4Om50aC1jaGlsZCgzbisxKSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjUlXHJcbiAgICB9XHJcbiAgICAuaGV4Om50aC1jaGlsZCgzbiszKSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIH1cclxuICAgIC5oZXg6bnRoLWNoaWxkKDNuKzIpLFxyXG4gICAgLmhleDpudGgtY2hpbGQoM24rNCkge1xyXG4gICAgICBjbGVhcjogbGVmdDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/groups/group-item/group-item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/groups/group-item/group-item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a class=\"hover list-group-item clearfix\" routerLinkActive=\"active\" [routerLink]=\"[id]\">\r\n    <div class=\"pull-left\">\r\n        <h4 class=\"list-group-item-text\">{{ group.name }}</h4>\r\n    </div>\r\n</a> -->\r\n\r\n<li class=\"hex\">\r\n    <a class=\"hexIn\" href=\"\">\r\n        <img src=\"https://cdn.pixabay.com/photo/2016/11/14/17/39/group-1824145_960_720.png\" alt=\"\"/>\r\n        <h1>{{ group.name }}</h1>\r\n        <p>{{ group.people.length }} of members</p>\r\n    </a>\r\n</li>\r\n"

/***/ }),

/***/ "./src/app/groups/group-item/group-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/groups/group-item/group-item.component.ts ***!
  \***********************************************************/
/*! exports provided: GroupItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupItemComponent", function() { return GroupItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../group.model */ "./src/app/groups/group.model.ts");




var GroupItemComponent = /** @class */ (function () {
    function GroupItemComponent(route, router) {
        this.route = route;
        this.router = router;
        this.check = false;
    }
    GroupItemComponent.prototype.ngOnInit = function () {
    };
    GroupItemComponent.prototype.onChooseGroup = function () {
        // this.check = !this.check;
        // this.location.back();
        console.log(this.route);
        // this.router.navigate([this.id], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GroupItemComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _group_model__WEBPACK_IMPORTED_MODULE_3__["Group"])
    ], GroupItemComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GroupItemComponent.prototype, "id", void 0);
    GroupItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-item',
            template: __webpack_require__(/*! ./group-item.component.html */ "./src/app/groups/group-item/group-item.component.html"),
            styles: [__webpack_require__(/*! ./group-item.component.css */ "./src/app/groups/group-item/group-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GroupItemComponent);
    return GroupItemComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-newModal/group-newModal.component.css":
/*!********************************************************************!*\
  !*** ./src/app/groups/group-newModal/group-newModal.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .modal-backdrop{z-index: 1050;}\r\n.modal{z-index: 1060;} */\r\n\r\n\r\n.inlinee {\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n#horizscroll {\r\n    /* overflow: auto;\r\n    white-space: nowrap; */\r\n    max-height: 150px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n\r\n#horizscroll .hover {\r\n    display: inline-block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n/* .hover {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n    width: max-content;\r\n    height: 9rem;\r\n}\r\n\r\n.hover:hover {\r\n    background-color: #f0f0f5;\r\n}\r\n\r\n.btn-circle.btn-xl {\r\n    width: 70px;\r\n    height: 70px;\r\n    padding: 10px 16px;\r\n    border-radius: 35px;\r\n    font-size: 24px;\r\n    line-height: 1.33;\r\n}\r\n\r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 1.42857;\r\n} */\r\n\r\n\r\n/* @import url(\"https://fonts.googleapis.com/css?family=Saira+Condensed\"); */\r\n\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n\r\nhtml *,\r\n  html *:after,\r\n  html *:before {\r\n    box-sizing: inherit;\r\n  }\r\n\r\n\r\n#text {\r\n      /* width:auto;\r\n      max-width: 100%;\r\n      overflow:hidden;\r\n      background-color:#FFF;\r\n      color:#222;\r\n      font-family:Courier, monospace;\r\n      font-weight:normal;\r\n      font-size:18px;\r\n      resize:none;\r\n      line-height:40px;\r\n      padding-left:100px;\r\n      padding-right:30px;\r\n      padding-top:45px;\r\n      padding-bottom:34px;\r\n      background-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);\r\n      background-repeat:repeat-y, repeat;\r\n      -webkit-border-radius:12px;\r\n      border-radius:12px;\r\n      -webkit-box-shadow: 0px 2px 14px #000;\r\n      box-shadow: 0px 2px 14px #000;\r\n      border-top:1px solid #FFF;\r\n      border-bottom:1px solid #FFF; */\r\n\r\n      display: block;\r\n      width: 100%;\r\n      padding: 5px 0;\r\n      margin-bottom: 10px;\r\n      background: none;\r\n      border: 0;\r\n      outline: 0;\r\n      font-size: 1.5em;\r\n      font-weight: 400;\r\n      font-family: inherit;\r\n  }\r\n\r\n\r\n/* textarea {\r\n      height:200px;\r\n      max-width:600px;\r\n      color:#999;\r\n      font-weight:400;\r\n      font-size:30px;\r\n      font-family:'Ubuntu', Helvetica, Arial, sans-serif;\r\n      width:100%;\r\n      background:#fff;\r\n      border-radius:3px;\r\n      line-height:2em;\r\n      border:none;\r\n      box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);\r\n      padding:30px;\r\n      -webkit-transition: height 2s ease;\r\n      -moz-transition: height 2s ease;\r\n      -ms-transition: height 2s ease;\r\n      -o-transition: height 2s ease;\r\n      transition: height 2s ease;\r\n  }\r\n\r\n  * {\r\n      -webkit-font-smoothing:antialiased !important;\r\n  } */\r\n\r\n\r\nbody {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n    font-family: 'Saira Condensed', sans-serif;\r\n    background-color: #fe7b1a;\r\n  }\r\n\r\n\r\n.form {\r\n    max-width: 35em;\r\n    width: 100%;\r\n    padding: 4em;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    box-shadow: 0 0 40px 2px rgba(48, 48, 48, 0.22);\r\n  }\r\n\r\n\r\n.form__fieldset {\r\n    padding: 0;\r\n    border: 0;\r\n    margin: 0;\r\n  }\r\n\r\n\r\n.form__legend {\r\n    font-size: 1.5em;\r\n    margin-bottom: 1em;\r\n    color: #3e3e42;\r\n  }\r\n\r\n\r\n.form__label {\r\n    display: block;\r\n  }\r\n\r\n\r\n.form__input {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    margin-bottom: 10px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 400;\r\n    font-family: inherit;\r\n  }\r\n\r\n\r\n.form__input:not(:last-of-type) {\r\n    border-bottom: 1px solid #e4e4e4;\r\n  }\r\n\r\n\r\n.form__input::-webkit-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n\r\n\r\n.form__input::-ms-input-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n\r\n\r\n.form__input::-moz-placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n\r\n\r\n.form__input::placeholder {\r\n    font-size: .8em;\r\n    color: #e4e4e4;\r\n  }\r\n\r\n\r\n.form__btn {\r\n    position: relative;\r\n    z-index: 1;\r\n    display: block;\r\n    width: 140px;\r\n    height: 40px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    color: #fe7b1a;\r\n    border: 0;\r\n    padding: .5em 3.5em;\r\n    border-radius: 25px;\r\n    border-radius: 0;\r\n    margin-top: 1.5em;\r\n    font-family: inherit;\r\n    box-shadow: inset 0 0 0 1px #e4e4e4;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n    -webkit-transition-delay: .4s;\r\n            transition-delay: .4s;\r\n  }\r\n\r\n\r\n.is-valid .form__btn {\r\n    color: #fff;\r\n    -webkit-transition-delay: 0;\r\n            transition-delay: 0;\r\n  }\r\n\r\n\r\n.form__btn::before {\r\n    content: ' ';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    background-color: #fe7b1a;\r\n    border-radius: inherit;\r\n    -webkit-transform: scaleX(0);\r\n            transform: scaleX(0);\r\n    -webkit-transition: all .5s ease-in-out;\r\n    transition: all .5s ease-in-out;\r\n  }\r\n\r\n\r\n.is-valid .form__btn::before {\r\n    -webkit-transform: scaleX(1);\r\n            transform: scaleX(1);\r\n    -webkit-transition-delay: .3s;\r\n            transition-delay: .3s;\r\n  }\r\n\r\n\r\n.form__indicator {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n\r\n.form__indicator .progressbar {\r\n    stroke-width: 2px;\r\n    stroke: #fe7b1a;\r\n    fill: none;\r\n    -webkit-transition: all .3s ease-in-out;\r\n    transition: all .3s ease-in-out;\r\n  }\r\n\r\n\r\n.form-control:focus {\r\n    box-shadow: none;\r\n  }\r\n\r\n\r\n.form-control-underlined {\r\n    border-width: 0;\r\n    border-bottom-width: 1px;\r\n    border-radius: 0;\r\n    padding-left: 0;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLW5ld01vZGFsL2dyb3VwLW5ld01vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7d0JBQ3dCOzs7QUFHeEI7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJOzBCQUNzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCRzs7O0FBR0gsNEVBQTRFOzs7QUFDNUU7SUFDSSxzQkFBc0I7RUFDeEI7OztBQUNBOzs7SUFHRSxtQkFBbUI7RUFDckI7OztBQUtBO01BQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FxQitCOztNQUUvQixjQUFjO01BQ2QsV0FBVztNQUNYLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixvQkFBb0I7RUFDeEI7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVCRzs7O0FBRUg7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMseUJBQXlCO0VBQzNCOzs7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsK0NBQStDO0VBQ2pEOzs7QUFFQTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztFQUNYOzs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOzs7QUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7O0FBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7OztBQUtBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7OztBQUhBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFDL0IsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2Qjs7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjs7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7WUFDcEIsb0JBQW9CO0lBQzVCLHVDQUErQjtJQUEvQiwrQkFBK0I7RUFDakM7OztBQUNBO0lBQ0UsNEJBQTRCO1lBQ3BCLG9CQUFvQjtJQUM1Qiw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCOzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7RUFDZDs7O0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVix1Q0FBK0I7SUFBL0IsK0JBQStCO0VBQ2pDOzs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7O0FBRUE7SUFDRSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL2dyb3VwLW5ld01vZGFsL2dyb3VwLW5ld01vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubW9kYWwtYmFja2Ryb3B7ei1pbmRleDogMTA1MDt9XHJcbi5tb2RhbHt6LWluZGV4OiAxMDYwO30gKi9cclxuXHJcblxyXG4uaW5saW5lZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbiNob3JpenNjcm9sbCB7XHJcbiAgICAvKiBvdmVyZmxvdzogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuI2hvcml6c2Nyb2xsIC5ob3ZlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiAuaG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiA5cmVtO1xyXG59XHJcblxyXG4uaG92ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmNTtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUuYnRuLXhsIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XHJcbn0gKi9cclxuXHJcblxyXG4vKiBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TYWlyYStDb25kZW5zZWRcIik7ICovXHJcbmh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgaHRtbCAqLFxyXG4gIGh0bWwgKjphZnRlcixcclxuICBodG1sICo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAjdGV4dCB7XHJcbiAgICAgIC8qIHdpZHRoOmF1dG87XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7XHJcbiAgICAgIGNvbG9yOiMyMjI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OkNvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgcmVzaXplOm5vbmU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OjQwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDoxMDBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDozMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDo0NXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTozNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL3N0YXRpYy50dW1ibHIuY29tL21hb3BidGcvRTlCbWd0b2h0L2xpbmVzLnBuZyksIHVybChodHRwczovL3N0YXRpYy50dW1ibHIuY29tL21hb3BidGcvbkJVbWd0b2d4L3BhcGVyLnBuZyk7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OnJlcGVhdC15LCByZXBlYXQ7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxNHB4ICMwMDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTRweCAjMDAwO1xyXG4gICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRkZGO1xyXG4gICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRkZGOyAqL1xyXG5cclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gIC8qIHRleHRhcmVhIHtcclxuICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6NjAwcHg7XHJcbiAgICAgIGNvbG9yOiM5OTk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OidVYnVudHUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDoyZW07XHJcbiAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICBib3gtc2hhZG93OjBweCAwcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgIHBhZGRpbmc6MzBweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgICAgLW1zLXRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlO1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAqIHtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuXHJcbiAgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlN2IxYTtcclxuICB9XHJcblxyXG4gIC5mb3JtIHtcclxuICAgIG1heC13aWR0aDogMzVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDJweCByZ2JhKDQ4LCA0OCwgNDgsIDAuMjIpO1xyXG4gIH1cclxuXHJcbiAgLmZvcm1fX2ZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuZm9ybV9fbGVnZW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBjb2xvcjogIzNlM2U0MjtcclxuICB9XHJcblxyXG4gIC5mb3JtX19sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5mb3JtX19pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gIH1cclxuICAuZm9ybV9faW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gIH1cclxuXHJcbiAgLmZvcm1fX2J0biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGNvbG9yOiAjZmU3YjFhO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogLjVlbSAzLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZTRlNGU0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IC40cztcclxuICB9XHJcbiAgLmlzLXZhbGlkIC5mb3JtX19idG4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwO1xyXG4gIH1cclxuICAuZm9ybV9fYnRuOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU3YjFhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmlzLXZhbGlkIC5mb3JtX19idG46OmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IC4zcztcclxuICB9XHJcblxyXG4gIC5mb3JtX19pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5mb3JtX19pbmRpY2F0b3IgLnByb2dyZXNzYmFyIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgc3Ryb2tlOiAjZmU3YjFhO1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sLXVuZGVybGluZWQge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/groups/group-newModal/group-newModal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/groups/group-newModal/group-newModal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\"> {{ title }} </h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onCloseModal()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <div class=\"container\">\r\n        <div class=\"jumbotron\">\r\n          <br>\r\n            <label for=\"nameGroup\">Name of Group</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"nameGroup\" [(ngModel)]=\"nameGroup\" placeholder=\"Name of Group\" [disabled]=\"isInvalidInputName()\">\r\n          <br>\r\n          <label for=\"name\">Search of people</label>\r\n          <input class=\"form-control\" type=\"text\" name=\"name\" #searchPeople [(ngModel)]=\"inputName\" #namee=\"ngModel\" placeholder=\"Search of People\">\r\n          <br>\r\n          <label for=\"description\">Description</label>\r\n          <textarea class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"description\" cols=\"50\" rows=\"6\" [disabled]=\"isInvalidInputName()\"></textarea>\r\n          <br>\r\n          <div id=\"horizscroll\">\r\n            <div class=\"inlinee\" *ngFor=\"let person of personGroupService.getPeopleToAdd(); let i = index;\">\r\n              <div class=\"d-flex flex-column align-items-center\">\r\n                  <div class=\"\"><app-person-group [nameToAdd]=\"person.fullName\" [person]=\"person\" [indexPerson]=\"i\"></app-person-group></div>\r\n                  <div class=\"\"><p>{{ person.user.fullName }}</p></div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"col-xs-12\">\r\n            <ng-container *ngFor=\"let person of people\">\r\n              <app-person *ngIf=\"person.fullName !== authService.getAcc().fullName\" style=\"cursor: pointer;\" (click)=\"onChoosePerson(person)\" [name]=\"person.fullName\" [hierarchy]=\"person.hierarchy\"></app-person>\r\n            </ng-container>\r\n          </div>\r\n          <div class=\"col-12 text-center\" *ngIf=\"isSearching\"> Search Loading\r\n            <h4>Searching ... </h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"onCloseModal()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"!personGroupService.getPeopleToAdd() || personGroupService.getPeopleToAdd().length === 0\">Save changes</button>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<div class=\"modal-content modal modal-wide\" style=\"width: auto; max-width: 600px;\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{ title }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\" style=\"width: auto; height: auto; max-height: 100%;\">\r\n      <div class=\"container\">\r\n        <div class=\"col-xs-12\">\r\n            <form class=\"form\">\r\n              <fieldset class=\"form__fieldset\">\r\n\r\n                <legend class=\"form__legend\">{{ title }}</legend>\r\n\r\n                <label class=\"form_label\" for=\"nameGroup\">Name of Group</label>\r\n                <input type=\"text\" class=\"form__input\" name=\"nameGroup\" [(ngModel)]=\"nameGroup\" placeholder=\"Name of Group\" [disabled]=\"isInvalidInputName()\">\r\n                <br>\r\n                <label class=\"form_label\" for=\"name\">Search of people</label>\r\n                <input class=\"form__input form-control\" type=\"text\" name=\"name\" #searchPeople [(ngModel)]=\"inputName\" #namee=\"ngModel\" placeholder=\"Search of People\">\r\n                <!-- <br>\r\n                <label class=\"form__label\" for=\"description\">Description</label>\r\n                <textarea class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"description\" cols=\"50\" rows=\"6\" [disabled]=\"isInvalidInputName()\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 150px; \"></textarea>\r\n                <br> -->\r\n                <div id=\"horizscroll\">\r\n                  <div class=\"inlinee\" *ngFor=\"let person of personGroupService.getPeopleToAdd(); let i = index;\">\r\n                    <div class=\"d-flex flex-column align-items-center\">\r\n                        <div class=\"\"><app-person-group [nameToAdd]=\"person.fullName\" [person]=\"person\" [indexPerson]=\"i\"></app-person-group></div>\r\n                        <div class=\"\"><p>{{ person.user.fullName }}</p></div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"col-xs-12\">\r\n                  <ng-container *ngFor=\"let person of people\">\r\n                    <app-person *ngIf=\"person.fullName !== authService.getAcc().fullName\" style=\"cursor: pointer;\" (click)=\"onChoosePerson(person)\" [name]=\"person.fullName\" [hierarchy]=\"person.hierarchy\"></app-person>\r\n                  </ng-container>\r\n                </div>\r\n                <div class=\"text-center\" *ngIf=\"isSearching\">\r\n                  <h4>Searching ... </h4>\r\n                </div>\r\n              </fieldset>\r\n              <br>\r\n              <label class=\"form__label\" for=\"description\">Description</label>\r\n              <textarea class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"description\" cols=\"50\" rows=\"6\" [disabled]=\"isInvalidInputName()\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 150px; \"></textarea>\r\n              <br>\r\n            </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"!personGroupService.getPeopleToAdd() || personGroupService.getPeopleToAdd().length === 0\">Create Group</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/groups/group-newModal/group-newModal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/groups/group-newModal/group-newModal.component.ts ***!
  \*******************************************************************/
/*! exports provided: GroupNewModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupNewModalComponent", function() { return GroupNewModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../group-detail/group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _getip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../getip.service */ "./src/app/getip.service.ts");
/* harmony import */ var _person_group_person_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-group/person-group.service */ "./src/app/groups/group-newModal/person-group/person-group.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");











var GroupNewModalComponent = /** @class */ (function () {
    function GroupNewModalComponent(modalRef, http, router, route, authService, personGroupService, getipService, groupDetailService) {
        this.modalRef = modalRef;
        this.http = http;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.personGroupService = personGroupService;
        this.getipService = getipService;
        this.groupDetailService = groupDetailService;
        this.description = "";
        // private peopleToAdd: PeopleGroup[];
        // heightCard = "140px";
        // widthCard = "140px";
        this.selectedFile = null;
    }
    GroupNewModalComponent.prototype.ngOnInit = function () {
        // this.http.get('https://groups-3fd03.firebaseio.com/people.json').subscribe((res: any[]) => {
        //   console.log(res);
        var _this = this;
        //   this.personGroupService.setPeople(res);
        //   let people = this.personGroupService.getPeople();
        // });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(this.searchPeople.nativeElement, 'keyup').pipe(
        // get value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (event) {
            return event.target.value;
        })
        // if character length greater then 2
        , Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (res) { return res.length > 2; })
        // Time in milliseconds between key events
        , Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(1000)
        // If previous query is diffent from current
        , Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])()
        // subscription for response
        ).subscribe(function (text) {
            _this.isSearching = true;
            _this.searchGetCall(text).subscribe(function (res) {
                console.log('res', res);
                _this.isSearching = false;
                _this.personGroupService.setPeople(res);
                _this.people = _this.personGroupService.getPeople();
                console.log(_this.people);
            }, function (err) {
                _this.isSearching = false;
                console.log('error', err);
            });
        });
    };
    GroupNewModalComponent.prototype.searchGetCall = function (term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])([]);
        }
        console.log('byuser', term);
        return this.http.get('http://localhost:5000/api/getuserByName/' + term);
    };
    GroupNewModalComponent.prototype.onChoosePerson = function (person) {
        console.log("choose");
        this.personGroupService.addPeopleToAdd(person);
        this.personGroupService.removeFromPeople(person);
        this.inputName = "";
    };
    GroupNewModalComponent.prototype.checking = function (str) {
        if (!this.inputName || this.inputName.length < 3 || str === this.authService.getAcc().fullName)
            return false;
        if (str.toUpperCase().substr(0, this.inputName.length).indexOf(this.inputName.toUpperCase()) >= 0) {
            // console.log(true);
            return true;
        }
        else {
            return false;
        }
    };
    GroupNewModalComponent.prototype.onSubmit = function () {
        console.log(this.description);
        if (!this.addPeople) {
            this.onCreateGroup();
        }
        else {
            this.onAddPeopleToGroup();
        }
    };
    GroupNewModalComponent.prototype.onCreateGroup = function () {
        var img = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        console.log(img);
        console.log(this.personGroupService.getPeopleToAdd());
        var myacc = {
            user: this.authService.getAcc(),
            admin: true
        };
        // this.personGroupService.addAdminPeopleToAdd(myacc);
        this.personGroupService.addMyAccountPeopleToAdd(myacc);
        console.log(this.personGroupService.getPeopleToAdd());
        var resGroup = {
            name: this.nameGroup,
            people: this.personGroupService.getPeopleToAdd(),
            imgPath: "assets/img/default" + img + ".png",
            description: this.description
        };
        console.log(resGroup);
        this.http.post('http://' + this.getipService.getip() + ':5000/api/createGroup', resGroup).subscribe(function (res) {
            console.log(res);
        });
        this.inputName = "";
        this.nameGroup = "";
        this.personGroupService.cleanPeopleToAdd();
        this.modalRef.hide();
        window.location.reload();
    };
    GroupNewModalComponent.prototype.onAddPeopleToGroup = function () {
        var people = this.groupDetailService.getPeople();
        Array.prototype.push.apply(people, this.personGroupService.getPeopleToAdd());
        this.groupDetailService.updatePeopleGroup(people);
        this.modalRef.hide();
    };
    GroupNewModalComponent.prototype.onFileSelected = function (event) {
        // console.log(event);
        this.selectedFile = event.target.files[0];
    };
    GroupNewModalComponent.prototype.onCloseModal = function () {
        this.personGroupService.cleanPeopleToAdd();
        this.modalRef.hide();
    };
    GroupNewModalComponent.prototype.isInvalidInputName = function () {
        return this.addPeople;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('searchPeople', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], GroupNewModalComponent.prototype, "searchPeople", void 0);
    GroupNewModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-group-newModal',
            template: __webpack_require__(/*! ./group-newModal.component.html */ "./src/app/groups/group-newModal/group-newModal.component.html"),
            styles: [__webpack_require__(/*! ./group-newModal.component.css */ "./src/app/groups/group-newModal/group-newModal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _person_group_person_group_service__WEBPACK_IMPORTED_MODULE_3__["PersonGroupService"], _getip_service__WEBPACK_IMPORTED_MODULE_2__["GetipService"], _group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_1__["GroupDetailService"]])
    ], GroupNewModalComponent);
    return GroupNewModalComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-newModal/person-group/person-group.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/groups/group-newModal/person-group/person-group.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inlinee {\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n}\r\n\r\n#horizscroll {\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n#horizscroll .hover {\r\n    display: inline-block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px;\r\n    text-decoration: none;\r\n}\r\n\r\n.hover {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    height: 8rem;\r\n\r\n    position: relative;\r\n    /* bottom: 8px;\r\n    left: 16px; */\r\n}\r\n\r\n.top-right {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 16px;\r\n}\r\n\r\n.hover:hover {\r\n    background-color: #f0f0f5;\r\n}\r\n\r\n.btn-circle.btn-xl {\r\n    width: 70px;\r\n    height: 70px;\r\n    padding: 10px 16px;\r\n    border-radius: 35px;\r\n    font-size: 24px;\r\n    line-height: 1.33;\r\n}\r\n\r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 1.42857;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLW5ld01vZGFsL3BlcnNvbi1ncm91cC9wZXJzb24tZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCO2lCQUNhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1uZXdNb2RhbC9wZXJzb24tZ3JvdXAvcGVyc29uLWdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5saW5lZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbiNob3JpenNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbiNob3JpenNjcm9sbCAuaG92ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGhlaWdodDogOHJlbTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBib3R0b206IDhweDtcclxuICAgIGxlZnQ6IDE2cHg7ICovXHJcbn1cclxuXHJcbi50b3AtcmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTZweDtcclxufVxyXG5cclxuLmhvdmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjU7XHJcbn1cclxuXHJcbi5idG4tY2lyY2xlLmJ0bi14bCB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zMztcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/groups/group-newModal/person-group/person-group.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/groups/group-newModal/person-group/person-group.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"hover card rounded-circle inlinee\" style=\"background-image: https://www.seekpng.com/png/full/72-729700_account-avatar-face-head-person-profile-user-comments.png;\" [ngStyle]=\"!disabled?{'height' : '140px', 'width' : '140px'} : {'height' : '50px', 'width' : '50px'}\">\r\n  <div class=\"card-body\"  (click)=\"onMakeLittleCard()\">\r\n    <p *ngIf=\"!disabled\" class=\"card-title\" style=\"display: inline-block;\">\r\n      {{ nameToAdd }} <sup *ngIf=\"personGroupService.checkAdminPersonToAdd(indexPerson)\" class=\"fa fa-user-secret\" style=\"color: #33cc33;\" tooltip=\"Admin\" [adaptivePosition]=\"false\" placement=\"top\"></sup>\r\n    </p>\r\n    <br>\r\n  </div>\r\n    <div style=\"margin-left: 25%;\" *ngIf=\"!disabled\">\r\n      <button type=\"button\" class=\"btn btn-danger btn-circle\" tooltip=\"Remove Him\" [adaptivePosition]=\"false\" placement=\"top\" (click)=\"onRemoveFromList(person)\"><i class=\"fa fa-times\"></i></button>\r\n      <button type=\"button\" class=\"btn btn-success btn-circle\" tooltip=\"Make Him Admin\" [adaptivePosition]=\"false\" placement=\"top\" (click)=\"onAdminPerson(indexPerson)\" style=\"margin-left: 15px;\"><i class=\"fa fa-user\"></i></button>\r\n    </div>\r\n</div> -->\r\n\r\n<!-- <div class=\"inlinee\" style=\"position: relative;\"> -->\r\n  <div class=\"hover card img-fluid rounded-circle\" style=\"z-index: 1;\" [ngStyle]=\"!disabled?{'height' : '140px', 'width' : '140px'} : {'height' : '50px', 'width' : '50px'}\">\r\n    <img class=\"card-img-top rounded-circle\" src=\"assets/img/guest.png\" alt=\"account image\" [ngStyle]=\"!disabled?{'height' : '139px', 'width' : '139px'} : {'height' : '49px', 'width' : '49px'}\">\r\n    <sup *ngIf=\"personGroupService.checkAdminPersonToAdd(indexPerson)\" class=\"top-right fa fa-user-secret\" style=\"color: #33cc33; margin-top: 75px;\" tooltip=\"Admin\" [adaptivePosition]=\"false\" placement=\"top\"></sup>\r\n    <div class=\"card-img-overlay\">\r\n      <div class=\"card-body\" (click)=\"onMakeLittleCard()\">\r\n        <div class=\"card-text\" *ngIf=\"!disabled\">\r\n          <!-- <button type=\"button\" style=\"margin-top: 20px; left: 2px;\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i></button> -->\r\n          <br>\r\n          <br>\r\n          <button type=\"button\" class=\"btn btn-danger btn-circle\" tooltip=\"Remove Him\" [adaptivePosition]=\"false\" placement=\"top\" (click)=\"onRemoveFromList(person)\"><i class=\"fa fa-times\"></i></button>\r\n          <button type=\"button\" class=\"btn btn-success btn-circle\" tooltip=\"Make Him Admin\" [adaptivePosition]=\"false\" placement=\"top\" (click)=\"onAdminPerson(indexPerson)\" style=\"margin-left: 15px;\"><i class=\"fa fa-user\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <button type=\"button\" style=\"z-index: 2;\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i></button> -->\r\n  <!-- <h3 *ngIf=\"!disabled\" class=\"card-title\" style=\"display: inline-block; position: absolute; bottom: 0;\">\r\n      {{ nameToAdd }} <sup *ngIf=\"personGroupService.checkAdminPersonToAdd(indexPerson)\" class=\"fa fa-user-secret\" style=\"color: #33cc33;\" tooltip=\"Admin\" [adaptivePosition]=\"false\" placement=\"top\"></sup>\r\n  </h3> -->\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "./src/app/groups/group-newModal/person-group/person-group.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/groups/group-newModal/person-group/person-group.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonGroupComponent", function() { return PersonGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _person_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person-group.service */ "./src/app/groups/group-newModal/person-group/person-group.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _peopleGroup_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../peopleGroup.model */ "./src/app/groups/peopleGroup.model.ts");




var PersonGroupComponent = /** @class */ (function () {
    function PersonGroupComponent(personGroupService) {
        this.personGroupService = personGroupService;
        this.disabled = false;
        this.heightCard = "140px";
        this.widthCard = "140px";
    }
    PersonGroupComponent.prototype.ngOnInit = function () {
        // console.log(this.personGroupService.getPeople());
    };
    PersonGroupComponent.prototype.onRemoveFromList = function (person) {
        // let index = this.peopleToAdd.indexOf(person);
        // this.peopleToAdd.splice(index, 1);
        // if(!this.people) 
        //   this.people = [person];
        // else this.people.push(person);
        console.log("remove");
        this.personGroupService.removeFromPeopleToAdd(person);
        this.personGroupService.addPeople(person);
    };
    PersonGroupComponent.prototype.onAdminPerson = function (index) {
        // this.peopleToAdd[index].admin = !this.peopleToAdd[index].admin;
        this.personGroupService.makeAdminPersonToAdd(index);
    };
    PersonGroupComponent.prototype.onMakeLittleCard = function () {
        this.disabled = !this.disabled;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PersonGroupComponent.prototype, "nameToAdd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _peopleGroup_model__WEBPACK_IMPORTED_MODULE_3__["PeopleGroup"])
    ], PersonGroupComponent.prototype, "person", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PersonGroupComponent.prototype, "indexPerson", void 0);
    PersonGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-person-group',
            template: __webpack_require__(/*! ./person-group.component.html */ "./src/app/groups/group-newModal/person-group/person-group.component.html"),
            styles: [__webpack_require__(/*! ./person-group.component.css */ "./src/app/groups/group-newModal/person-group/person-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_person_group_service__WEBPACK_IMPORTED_MODULE_1__["PersonGroupService"]])
    ], PersonGroupComponent);
    return PersonGroupComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-newModal/person-group/person-group.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/groups/group-newModal/person-group/person-group.service.ts ***!
  \****************************************************************************/
/*! exports provided: PersonGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonGroupService", function() { return PersonGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PersonGroupService = /** @class */ (function () {
    function PersonGroupService(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
    }
    PersonGroupService.prototype.setPeople = function (arr) {
        this.people = arr;
    };
    PersonGroupService.prototype.getPeople = function () {
        return this.people;
    };
    PersonGroupService.prototype.getPeopleToAdd = function () {
        return this.peopleToAdd;
    };
    PersonGroupService.prototype.addPeopleToAdd = function (person) {
        console.log(person);
        var img = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        person.avatarPath = "assets/img/people/person" + img + ".png";
        // person.admin = false;
        var personGroup = {
            user: person,
            admin: false
        };
        if (!this.peopleToAdd)
            this.peopleToAdd = [personGroup];
        else
            this.peopleToAdd.push(personGroup);
        console.log(this.peopleToAdd);
    };
    PersonGroupService.prototype.addAdminPeopleToAdd = function (person) {
        // person.admin = true;
        // let img = Math.floor(Math.random() * (9 - 1 + 1) ) + 1;
        // person.avatarPath = "assets/img/people/person" + img + ".png";
        // if(!this.peopleToAdd) 
        //     this.peopleToAdd = [person];
        // else this.peopleToAdd.push(person);
        // console.log(this.peopleToAdd);
        console.log(person);
        var img = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        person.avatarPath = "assets/img/people/person" + img + ".png";
        var personGroup = {
            user: person,
            admin: true
        };
        if (!this.peopleToAdd)
            this.peopleToAdd = [personGroup];
        else
            this.peopleToAdd.push(personGroup);
        console.log(this.peopleToAdd);
    };
    PersonGroupService.prototype.addMyAccountPeopleToAdd = function (person) {
        person.admin = true;
        console.log(person);
        var img = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        person.user.avatarPath = "assets/img/people/person" + img + ".png";
        console.log(person);
        if (!this.peopleToAdd)
            this.peopleToAdd = [person];
        else
            this.peopleToAdd.push(person);
        console.log(this.peopleToAdd);
    };
    PersonGroupService.prototype.removeFromPeopleToAdd = function (person) {
        var index = this.peopleToAdd.indexOf(person);
        this.peopleToAdd.splice(index, 1);
        console.log(this.peopleToAdd);
    };
    PersonGroupService.prototype.cleanPeopleToAdd = function () {
        if (this.peopleToAdd) {
            this.peopleToAdd.splice(0, this.peopleToAdd.length);
        }
    };
    PersonGroupService.prototype.makeAdminPersonToAdd = function (index) {
        console.log(this.peopleToAdd[index]);
        this.peopleToAdd[index].admin = !this.peopleToAdd[index].admin;
        console.log(this.peopleToAdd[index]);
    };
    PersonGroupService.prototype.checkAdminPersonToAdd = function (index) {
        return this.peopleToAdd[index].admin;
    };
    PersonGroupService.prototype.addPeople = function (person) {
        if (!this.people)
            this.people = [person.user];
        else
            this.people.push(person.user);
        console.log(this.people);
    };
    PersonGroupService.prototype.removeFromPeople = function (person) {
        var index = this.people.indexOf(person);
        this.people.splice(index, 1);
        console.log(this.people);
    };
    PersonGroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PersonGroupService);
    return PersonGroupService;
}());



/***/ }),

/***/ "./src/app/groups/group-newModal/person/person.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/groups/group-newModal/person/person.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1uZXdNb2RhbC9wZXJzb24vcGVyc29uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/groups/group-newModal/person/person.component.html":
/*!********************************************************************!*\
  !*** ./src/app/groups/group-newModal/person/person.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"hover list-group-item clearfix\">\r\n  <div class=\"pull-left\">\r\n      <p class=\"list-group-item-text\">{{ name }}</p>\r\n      <p class=\"list-group-item-text\">{{ hierarchy.join('/') }}</p>\r\n  </div>\r\n</a>"

/***/ }),

/***/ "./src/app/groups/group-newModal/person/person.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/groups/group-newModal/person/person.component.ts ***!
  \******************************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PersonComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PersonComponent.prototype, "hierarchy", void 0);
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/groups/group-newModal/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/groups/group-newModal/person/person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/groups/group.model.ts":
/*!***************************************!*\
  !*** ./src/app/groups/group.model.ts ***!
  \***************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Group = /** @class */ (function () {
    function Group(name, people, _id, imgPath, description) {
        this.name = name;
        this.people = people;
        this._id = _id;
        this.imgPath = imgPath;
        this.description = description;
    }
    Group = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, Array, String, String, String])
    ], Group);
    return Group;
}());



/***/ }),

/***/ "./src/app/groups/groups-list/groups-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/groups/groups-list/groups-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle {\r\n  position: relative;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  font-size: 20px;\r\n  color: #fff;\r\n  line-height: 28px;\r\n  text-align: center;\r\n  background: #000;\r\n  margin-top: 20%;\r\n  margin-left: 75%;\r\n}\r\n.name {\r\n  position: relative;\r\n  width: 250px;\r\n  height: 120px;\r\n  font-size: 18px;\r\n  color: #fff;\r\n  line-height: 28px;\r\n  text-align: center;\r\n  background: rgb(0, 0, 0);\r\n  margin-top: 90%;\r\n  left: -17%;\r\n}\r\n.float{\r\n\tposition:fixed;\r\n\twidth:60px;\r\n\theight:60px;\r\n\tbottom:40px;\r\n\tright:40px;\r\n\tbackground-color:rgb(23, 23, 24);\r\n\tcolor:#FFF;\r\n\tborder-radius:50px;\r\n\ttext-align:center;\r\n\tbox-shadow: 2px 2px 3px #999;\r\n}\r\n.my-float{\r\n\tmargin-top:22px;\r\n}\r\n.float:hover{\r\n  visibility:visible!important;\r\n\topacity:1!important;\r\n}\r\n/* Hexagons */\r\n#hexGrid {\r\n  overflow: hidden;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  /* padding: 0.866% 0; */\r\n  padding: 3.7%;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 15px;\r\n}\r\n::-webkit-scrollbar {\r\n  width: 0px;\r\n  background: transparent;\r\n}\r\n#hexGrid:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n.hex {\r\n  position: relative;\r\n  list-style-type: none;\r\n  float: left;\r\n  overflow: hidden;\r\n  visibility: hidden;\r\n  outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n  -webkit-transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n          transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n}\r\n.hex:hover {\r\n  cursor: pointer;\r\n}\r\n.hex * {\r\n  position: absolute;\r\n  visibility: visible;\r\n  outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n}\r\n.hexIn {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  color: #fff;\r\n  overflow: hidden;\r\n  -webkit-transform: skewY(-30deg) rotate(60deg);\r\n          transform: skewY(-30deg) rotate(60deg);\r\n}\r\n/*** HEX CONTENT **********************************************************************/\r\n.hex img {\r\n  left: -100%;\r\n  right: -100%;\r\n  width: auto;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n.hex h1,\r\n.hex p {\r\n  margin: 0;\r\n  width: 102%;\r\n  left: -1%;  /* prevent line on the right where background doesn't cover image */\r\n  padding: 5%;\r\n  box-sizing: border-box;\r\n  background-color: rgba(0, 128, 128, 0.8);\r\n  font-weight: 300;\r\n  -webkit-transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n  transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n  transition: transform .2s ease-out, opacity .3s ease-out;\r\n  transition: transform .2s ease-out, opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n}\r\n.hex h1 {\r\n  bottom: 50%;\r\n  padding-top: 50%;\r\n  font-size: 1.5em;\r\n  z-index: 1;\r\n  -webkit-transform: translateY(-100%) translatez(-1px);\r\n          transform: translateY(-100%) translatez(-1px);\r\n}\r\n.hex h1:after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 45%;\r\n  width: 10%;\r\n  text-align: center;\r\n  border-bottom: 1px solid #fff;\r\n}\r\n.hex p {\r\n  top: 50%;\r\n  padding-bottom: 50%;\r\n  -webkit-transform: translateY(100%) translatez(-1px);\r\n          transform: translateY(100%) translatez(-1px);\r\n}\r\n/*** HOVER EFFECT  **********************************************************************/\r\n.hexIn:hover h1, .hexIn:focus h1, .hexIn:hover p, .hexIn:focus p {\r\n  -webkit-transform: translateY(0%) translatez(-1px);\r\n          transform: translateY(0%) translatez(-1px);\r\n}\r\n/*** SPACING AND SIZING *****************************************************************/\r\n@media (min-width:1201px) {  /* <- 2-3  hexagons per row */\r\n  .hex {\r\n    width: 32.666%;    /* = (100-2) / 3 */\r\n    padding-bottom: 37.720%;    /* =  width / sin(60) */\r\n  }\r\n  .hex:nth-child(5n+1),\r\n  .hex:nth-child(5n+2) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n  }\r\n  .hex:nth-child(5n+3),\r\n  .hex:nth-child(5n+4),\r\n  .hex:nth-child(5n+5) {\r\n    margin-top: -8.564%;\r\n    margin-bottom: -8.564%;\r\n  }\r\n  .hex:nth-child(5n+2),\r\n  .hex:nth-child(5n+4) {\r\n    margin-right: 1%;\r\n    margin-left: 1%;\r\n  }\r\n  .hex:nth-child(5n+1) {\r\n    margin-left: 0.5%;\r\n  }\r\n  .hex:nth-child(5n+3),\r\n  .hex:nth-child(5n+6) {\r\n    clear: left;\r\n  }\r\n}\r\n@media (max-width: 1800px) {  /* <- 1-2  hexagons per row */\r\n  .hex {\r\n    width: 49.5%;    /* = (100-1) / 2 */\r\n    padding-bottom: 57.158%;    /* =  width / sin(60) */\r\n  }\r\n  .hex:nth-child(3n+1) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n  }\r\n  .hex:nth-child(3n+2),\r\n  .hex:nth-child(3n+3) {\r\n    margin-top: -13.423%;\r\n    margin-bottom: -13.423%;\r\n  }\r\n  .hex:nth-child(3n+1) {\r\n    margin-left: 0.5%\r\n  }\r\n  .hex:nth-child(3n+3) {\r\n    margin-left: 1%;\r\n  }\r\n  .hex:nth-child(3n+2),\r\n  .hex:nth-child(3n+4) {\r\n    clear: left;\r\n  }\r\n}\r\n@media (max-width: 400px) {\r\n  #hexGrid {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy1saXN0L2dyb3Vwcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFFQTtDQUNDLGNBQWM7Q0FDZCxVQUFVO0NBQ1YsV0FBVztDQUNYLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsZ0NBQWdDO0NBQ2hDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLDRCQUE0QjtBQUM3QjtBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBO0VBQ0UsNEJBQTRCO0NBQzdCLG1CQUFtQjtBQUNwQjtBQUVBLGFBQWE7QUFDYjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhCQUE4QixHQUFHLG1EQUFtRDtFQUNwRiwrREFBdUQ7VUFBdkQsdURBQXVEO0FBQ3pEO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QixHQUFHLG1EQUFtRDtBQUN0RjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4QztBQUdBLHVGQUF1RjtBQUV2RjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsU0FBUztFQUNULFdBQVc7RUFDWCxTQUFTLEdBQUcsbUVBQW1FO0VBQy9FLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQix3RUFBd0Q7RUFBeEQsZ0VBQXdEO0VBQXhELHdEQUF3RDtFQUF4RCx3RkFBd0Q7QUFDMUQ7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixxREFBNkM7VUFBN0MsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsb0RBQTRDO1VBQTVDLDRDQUE0QztBQUM5QztBQUdBLHlGQUF5RjtBQUV6RjtFQUNFLGtEQUEwQztVQUExQywwQ0FBMEM7QUFDNUM7QUFHQSx5RkFBeUY7QUFFekYsNkJBQTZCLDZCQUE2QjtFQUN4RDtJQUNFLGNBQWMsS0FBSyxrQkFBa0I7SUFDckMsdUJBQXVCLEtBQUssdUJBQXVCO0VBQ3JEO0VBQ0E7O0lBRUUsOERBQXNEO1lBQXRELHNEQUFzRDtFQUN4RDtFQUNBOzs7SUFHRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLFdBQVc7RUFDYjtBQUNGO0FBRUEsOEJBQThCLDZCQUE2QjtFQUN6RDtJQUNFLFlBQVksS0FBSyxrQkFBa0I7SUFDbkMsdUJBQXVCLEtBQUssdUJBQXVCO0VBQ3JEO0VBQ0E7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0VBQ3hEO0VBQ0E7O0lBRUUsb0JBQW9CO0lBQ3BCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBOztJQUVFLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMtbGlzdC9ncm91cHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBtYXJnaW4tbGVmdDogNzUlO1xyXG59XHJcbi5uYW1lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgbWFyZ2luLXRvcDogOTAlO1xyXG4gIGxlZnQ6IC0xNyU7XHJcbn1cclxuXHJcbi5mbG9hdHtcclxuXHRwb3NpdGlvbjpmaXhlZDtcclxuXHR3aWR0aDo2MHB4O1xyXG5cdGhlaWdodDo2MHB4O1xyXG5cdGJvdHRvbTo0MHB4O1xyXG5cdHJpZ2h0OjQwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMsIDIzLCAyNCk7XHJcblx0Y29sb3I6I0ZGRjtcclxuXHRib3JkZXItcmFkaXVzOjUwcHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0Ym94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcclxufVxyXG5cclxuLm15LWZsb2F0e1xyXG5cdG1hcmdpbi10b3A6MjJweDtcclxufVxyXG5cclxuLmZsb2F0OmhvdmVye1xyXG4gIHZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7XHJcblx0b3BhY2l0eToxIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogSGV4YWdvbnMgKi9cclxuI2hleEdyaWQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvKiBwYWRkaW5nOiAwLjg2NiUgMDsgKi9cclxuICBwYWRkaW5nOiAzLjclO1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jaGV4R3JpZDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmhleCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7ICAvKiBmaXggZm9yIGphZ2dlZCBlZGdlcyBpbiBGRiBvbiBob3ZlciB0cmFuc2l0aW9uICovXHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKSBza2V3WSgzMGRlZykgdHJhbnNsYXRleigtMXB4KTtcclxufVxyXG5cclxuLmhleDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGV4ICoge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgIC8qIGZpeCBmb3IgamFnZ2VkIGVkZ2VzIGluIEZGIG9uIGhvdmVyIHRyYW5zaXRpb24gKi9cclxufVxyXG5cclxuLmhleEluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiBza2V3WSgtMzBkZWcpIHJvdGF0ZSg2MGRlZyk7XHJcbn1cclxuXHJcblxyXG4vKioqIEhFWCBDT05URU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaGV4IGltZyB7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgcmlnaHQ6IC0xMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhleCBoMSxcclxuLmhleCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMiU7XHJcbiAgbGVmdDogLTElOyAgLyogcHJldmVudCBsaW5lIG9uIHRoZSByaWdodCB3aGVyZSBiYWNrZ3JvdW5kIGRvZXNuJ3QgY292ZXIgaW1hZ2UgKi9cclxuICBwYWRkaW5nOiA1JTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAxMjgsIDAuOCk7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LCBvcGFjaXR5IC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmhleCBoMSB7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgcGFkZGluZy10b3A6IDUwJTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG59XHJcblxyXG4uaGV4IGgxOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB3aWR0aDogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmhleCBwIHtcclxuICB0b3A6IDUwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG59XHJcblxyXG5cclxuLyoqKiBIT1ZFUiBFRkZFQ1QgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaGV4SW46aG92ZXIgaDEsIC5oZXhJbjpmb2N1cyBoMSwgLmhleEluOmhvdmVyIHAsIC5oZXhJbjpmb2N1cyBwIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHRyYW5zbGF0ZXooLTFweCk7XHJcbn1cclxuXHJcblxyXG4vKioqIFNQQUNJTkcgQU5EIFNJWklORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMDFweCkgeyAgLyogPC0gMi0zICBoZXhhZ29ucyBwZXIgcm93ICovXHJcbiAgLmhleCB7XHJcbiAgICB3aWR0aDogMzIuNjY2JTsgICAgLyogPSAoMTAwLTIpIC8gMyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM3LjcyMCU7ICAgIC8qID0gIHdpZHRoIC8gc2luKDYwKSAqL1xyXG4gIH1cclxuICAuaGV4Om50aC1jaGlsZCg1bisxKSxcclxuICAuaGV4Om50aC1jaGlsZCg1bisyKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGUoLTYwZGVnKSBza2V3WSgzMGRlZyk7XHJcbiAgfVxyXG4gIC5oZXg6bnRoLWNoaWxkKDVuKzMpLFxyXG4gIC5oZXg6bnRoLWNoaWxkKDVuKzQpLFxyXG4gIC5oZXg6bnRoLWNoaWxkKDVuKzUpIHtcclxuICAgIG1hcmdpbi10b3A6IC04LjU2NCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOC41NjQlO1xyXG4gIH1cclxuICAuaGV4Om50aC1jaGlsZCg1bisyKSxcclxuICAuaGV4Om50aC1jaGlsZCg1bis0KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIH1cclxuICAuaGV4Om50aC1jaGlsZCg1bisxKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41JTtcclxuICB9XHJcbiAgLmhleDpudGgtY2hpbGQoNW4rMyksXHJcbiAgLmhleDpudGgtY2hpbGQoNW4rNikge1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTgwMHB4KSB7ICAvKiA8LSAxLTIgIGhleGFnb25zIHBlciByb3cgKi9cclxuICAuaGV4IHtcclxuICAgIHdpZHRoOiA0OS41JTsgICAgLyogPSAoMTAwLTEpIC8gMiAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU3LjE1OCU7ICAgIC8qID0gIHdpZHRoIC8gc2luKDYwKSAqL1xyXG4gIH1cclxuICAuaGV4Om50aC1jaGlsZCgzbisxKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGUoLTYwZGVnKSBza2V3WSgzMGRlZyk7XHJcbiAgfVxyXG4gIC5oZXg6bnRoLWNoaWxkKDNuKzIpLFxyXG4gIC5oZXg6bnRoLWNoaWxkKDNuKzMpIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMy40MjMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEzLjQyMyU7XHJcbiAgfVxyXG4gIC5oZXg6bnRoLWNoaWxkKDNuKzEpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjUlXHJcbiAgfVxyXG4gIC5oZXg6bnRoLWNoaWxkKDNuKzMpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICB9XHJcbiAgLmhleDpudGgtY2hpbGQoM24rMiksXHJcbiAgLmhleDpudGgtY2hpbGQoM24rNCkge1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAjaGV4R3JpZCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/groups/groups-list/groups-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/groups/groups-list/groups-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport style=\"height: 600px;\" itemSize=\"250\" class=\"viewport\">\r\n<ul id=\"hexGrid\">\r\n        <ng-container *ngFor=\"let group of groups | filter :['name'] : nameGroupp : 'includes'\" >\r\n            <!-- <li *ngIf=\"checking(group.name)\" class=\"hex\"> -->\r\n            <li class=\"hex\" (click)=\"onChooseGroup(group._id)\">\r\n                <a class=\"hexIn\">\r\n                    <img src=\"{{ group.imgPath }}\" alt=\"\"/>\r\n                    <div class=\"circle\">{{ group.people.length }}</div>\r\n                    <div class=\"name\">{{ group.name }}</div>\r\n                    <h1>{{ group.name }}</h1>\r\n                    <!-- <p>{{ group.people.length }} of members</p> -->\r\n                    <p>{{ group.description }}</p>\r\n                </a>\r\n            </li>\r\n        </ng-container>\r\n\r\n        <!-- <li *ngIf=\"mygroups\" class=\"hex\" (click)=\"onNew()\">\r\n            <a class=\"hexIn\">\r\n                <img src=\"assets/img/Plus_Sign.png\" alt=\"\"/>\r\n                <h1>Create a new Group</h1>\r\n                <p>Create a new Group</p>\r\n            </a>\r\n        </li> -->\r\n    </ul>\r\n</cdk-virtual-scroll-viewport>\r\n\r\n<a *ngIf=\"mygroups\" href=\"#\" class=\"float\" disabled=\"\" (click)=\"onNew()\">\r\n  <i class=\"fa fa-plus my-float\"></i>\r\n</a>\r\n\r\n<!-- <ul id=\"hexGrid\">\r\n    <ng-container *ngFor=\"let group of groups\" >\r\n            <app-group-item class=\"hexmy\" [group]=\"group\" [id]=\"group._id\"></app-group-item>\r\n    </ng-container>\r\n\r\n</ul> -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/groups/groups-list/groups-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/groups/groups-list/groups-list.component.ts ***!
  \*************************************************************/
/*! exports provided: GroupsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsListComponent", function() { return GroupsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _group_newModal_group_newModal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../group-newModal/group-newModal.component */ "./src/app/groups/group-newModal/group-newModal.component.ts");






var GroupsListComponent = /** @class */ (function () {
    function GroupsListComponent(modalService, authService, route, router) {
        this.modalService = modalService;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    GroupsListComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getAcc().fullName;
    };
    // checking(str) {
    //   if(!this.nameGroupp || this.nameGroupp.length < 3) return true;
    //   if(str.toUpperCase().substr(0, this.nameGroupp.length).indexOf(this.nameGroupp.toUpperCase()) >= 0){
    //     // console.log(true);
    //     return true;
    //   } else {
    //     return false;
    //   }    
    // }
    GroupsListComponent.prototype.onNew = function () {
        this.modalRef = this.modalService.show(_group_newModal_group_newModal_component__WEBPACK_IMPORTED_MODULE_5__["GroupNewModalComponent"], {
            initialState: {
                title: 'Create a New Group',
                addPeople: false,
                nameGroup: null
            }
        });
    };
    GroupsListComponent.prototype.onChooseGroup = function (id) {
        console.log(id);
        this.router.navigate(['/group', id], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GroupsListComponent.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GroupsListComponent.prototype, "mygroups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GroupsListComponent.prototype, "nameGroupp", void 0);
    GroupsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-groups-list',
            template: __webpack_require__(/*! ./groups-list.component.html */ "./src/app/groups/groups-list/groups-list.component.html"),
            styles: [__webpack_require__(/*! ./groups-list.component.css */ "./src/app/groups/groups-list/groups-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GroupsListComponent);
    return GroupsListComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vl {\r\nborder-left: 6px solid green;\r\nheight: 500px;\r\n}\r\n\r\n.line {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    margin-top: 50%;\r\n    border: none;\r\n    background-color: black;\r\n    height: 2px;\r\n}\r\n\r\n.container{\r\n  width: 30%;\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n    #line2 {\r\n        display: none;\r\n    }\r\n\r\n    #line3 {\r\n        display: none;\r\n    }\r\n\r\n    #line1 {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n        /* border: none;\r\n        background-color: black;\r\n        height: 2px; */\r\n    }\r\n\r\n    .line-list br {\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n.float{\r\n\tposition:fixed;\r\n\twidth:60px;\r\n\theight:60px;\r\n\tbottom:40px;\r\n\tright:40px;\r\n\tbackground-color:rgb(23, 23, 24);\r\n\tcolor:#FFF;\r\n\tborder-radius:50px;\r\n\ttext-align:center;\r\n\tbox-shadow: 2px 2px 3px #999;\r\n}\r\n\r\n.float:hover{\r\n  color: #88b999;\r\n}\r\n\r\n.my-float{\r\n\tmargin-top:22px;\r\n}\r\n\r\n/* body,html{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: #e74c3c !important;\r\n    }\r\n\r\n    .searchbar{\r\n    margin-bottom: auto;\r\n    margin-top: auto;\r\n    height: 60px;\r\n    background-color: #353b48;\r\n    border-radius: 30px;\r\n    padding: 10px;\r\n    }\r\n\r\n    .search_input{\r\n    color: white;\r\n    border: 0;\r\n    outline: 0;\r\n    background: none;\r\n    width: 0;\r\n    caret-color:transparent;\r\n    line-height: 40px;\r\n    transition: width 0.4s linear;\r\n    }\r\n\r\n    .searchbar:hover > .search_input{\r\n    padding: 0 10px;\r\n    width: 450px;\r\n    caret-color:red;\r\n    transition: width 0.4s linear;\r\n    }\r\n\r\n    .searchbar:hover > .search_icon{\r\n    background: white;\r\n    color: #e74c3c;\r\n    }\r\n\r\n    .search_icon{\r\n    height: 40px;\r\n    width: 40px;\r\n    float: right;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    color:white;\r\n    } */\r\n\r\n.form-control:focus {\r\n  box-shadow: none;\r\n}\r\n\r\n.form-control-underlined {\r\n  border-width: 0;\r\n  border-bottom-width: 1px;\r\n  border-radius: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.p-1{\r\n  padding: .35rem!important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYjs7QUFFQTtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCOztzQkFFYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUdBO0NBQ0MsY0FBYztDQUNkLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDVixnQ0FBZ0M7Q0FDaEMsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNEJBQTRCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBR0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpREc7O0FBRVA7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZsIHtcclxuYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncmVlbjtcclxuaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAjbGluZTIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI2xpbmUzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICNsaW5lMSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgLyogYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGhlaWdodDogMnB4OyAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5lLWxpc3QgYnIge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5mbG9hdHtcclxuXHRwb3NpdGlvbjpmaXhlZDtcclxuXHR3aWR0aDo2MHB4O1xyXG5cdGhlaWdodDo2MHB4O1xyXG5cdGJvdHRvbTo0MHB4O1xyXG5cdHJpZ2h0OjQwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMsIDIzLCAyNCk7XHJcblx0Y29sb3I6I0ZGRjtcclxuXHRib3JkZXItcmFkaXVzOjUwcHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0Ym94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcclxufVxyXG5cclxuLmZsb2F0OmhvdmVye1xyXG4gIGNvbG9yOiAjODhiOTk5O1xyXG59XHJcblxyXG4ubXktZmxvYXR7XHJcblx0bWFyZ2luLXRvcDoyMnB4O1xyXG59XHJcblxyXG5cclxuICAgIC8qIGJvZHksaHRtbHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2MgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoYmFye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYjQ4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaF9pbnB1dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBjYXJldC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaGJhcjpob3ZlciA+IC5zZWFyY2hfaW5wdXR7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBjYXJldC1jb2xvcjpyZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pY29ue1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogI2U3NGMzYztcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoX2ljb257XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH0gKi9cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtdW5kZXJsaW5lZCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnAtMXtcclxuICBwYWRkaW5nOiAuMzVyZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/groups/groups.component.html":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n\r\n    <div class=\"p-1 bg-light rounded rounded-pill shadow-sm mb-4\">\r\n        <div class=\"input-group\">\r\n          <input type=\"search\" name=\"nameGroup\" [(ngModel)]=\"nameGroup\" placeholder=\"Search groups\" aria-describedby=\"button-addon1\" class=\"form-control border-0 bg-light\">\r\n          <div class=\"input-group-append\">\r\n            <button id=\"button-addon1\" type=\"submit\" class=\"btn btn-link text-primary\"><i class=\"fa fa-search\"></i></button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n      <!-- animanted search bar -->\r\n      <!-- <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n      <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\r\n      <div class=\"container h-100\">\r\n          <div class=\"d-flex justify-content-center h-100\">\r\n            <div class=\"searchbar\">\r\n              <input class=\"search_input\"  name=\"nameGroup\" [(ngModel)]=\"nameGroup\" type=\"text\" placeholder=\"Search...\">\r\n              <a href=\"#\" class=\"search_icon\"><i class=\"fas fa-search\"></i></a>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n\r\n    <!-- <div class=\"input-group\">\r\n    <input type=\"text\" class=\"form-control\" name=\"nameGroup\" [(ngModel)]=\"nameGroup\" placeholder=\"Search\">\r\n  </div> -->\r\n  <!-- </div> -->\r\n\r\n\r\n</div>\r\n<hr style=\"border: none;\r\nbackground-color: black;\r\nopacity: 0.2;\r\nheight: 12px;\r\nwidth: 1400px;\">\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-5\">\r\n    <h1 style=\"text-align: center\">Groups Includes Me</h1>\r\n    <app-groups-list [mygroups]=\"false\" [groups]=\"groups\" [nameGroupp]=\"nameGroup\"></app-groups-list>\r\n  </div>\r\n\r\n  <div class=\"col-lg-2 line-list\">\r\n    <hr id=\"line1\" style=\"border: none;\r\n    background-color: black;\r\n    height: 1px; opacity: 0;\" class=\"line\">\r\n    <br>\r\n    <hr id=\"line2\" style=\"border: none;\r\n    background-color: black;\r\n    height: 12px; opacity: 0.2;\" class=\"line\">\r\n    <br>\r\n    <hr id=\"line3\" style=\"border: none;\r\n    background-color: black;\r\n    height: 1px; opacity: 0;\" class=\"line\">\r\n  </div>\r\n\r\n  <div class=\"col-lg-5\">\r\n    <!-- <app-hive></app-hive> -->\r\n    <h1 style=\"text-align: center\">My Groups</h1>\r\n    <app-groups-list [mygroups]=\"true\" [groups]=\"groupsAdmin\" [nameGroupp]=\"nameGroup\"></app-groups-list>\r\n    <!-- <a href=\"#\" class=\"float\">\r\n      <i class=\"fa fa-plus my-float\"></i>\r\n    </a> -->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _getip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getip.service */ "./src/app/getip.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(http, router, route, authService, getipService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.getipService = getipService;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** Shraga */
        this.http.get('http://' + this.getipService.getip() + ':4200/user').subscribe(function (res) {
            _this.authService.login(res);
            console.log(_this.authService.getUser());
            _this.http.get('http://' + _this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonNotAdmin/' + _this.authService.getId()).subscribe(function (res) {
                _this.groups = res;
                // console.log(this.groups);
            });
            _this.http.get('http://' + _this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonAdmin/' + _this.authService.getId()).subscribe(function (res) {
                _this.groupsAdmin = res;
            });
        });
        /** Angular */
        // this.http.get('http://' + this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonNotAdmin/' + this.authService.getId()).subscribe((res: any[]) => {
        //   this.groups = res;
        //   // console.log(this.groups);
        // });
        // this.http.get('http://' + this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonAdmin/' + this.authService.getId()).subscribe((res: any[]) => {
        //   this.groupsAdmin = res;
        // });
    };
    GroupsComponent.prototype.checking = function (str) {
        if (!this.nameGroup || this.nameGroup.length < 3)
            return false;
        if (str.toUpperCase().substr(0, this.nameGroup.length).indexOf(this.nameGroup.toUpperCase()) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    GroupsComponent.prototype.onGroup = function (group) {
        // console.log(group);
        // this.router.navigate([group._id], {relativeTo: this.route});
    };
    GroupsComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.nameGroup;
        console.log('got name: ', name.currentValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GroupsComponent.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GroupsComponent.prototype, "groupsAdmin", void 0);
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _getip_service__WEBPACK_IMPORTED_MODULE_1__["GetipService"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/groups/people.model.ts":
/*!****************************************!*\
  !*** ./src/app/groups/people.model.ts ***!
  \****************************************/
/*! exports provided: People */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "People", function() { return People; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var People = /** @class */ (function () {
    function People(_id, fullName, personalNumber, hierarchy, primaryDomainUser, secondaryDomainUsers, mail, avatarPath) {
        this._id = _id;
        this.fullName = fullName;
        this.personalNumber = personalNumber;
        this.hierarchy = hierarchy;
        this.primaryDomainUser = primaryDomainUser;
        this.secondaryDomainUsers = secondaryDomainUsers;
        this.mail = mail;
        this.avatarPath = avatarPath;
    }
    People = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String, String, Array, DomainUser, Array, String, String])
    ], People);
    return People;
}());

var DomainUser = /** @class */ (function () {
    function DomainUser(adfsUID, uniqueID) {
        this.adfsUID = adfsUID;
        this.uniqueID = uniqueID;
    }
    return DomainUser;
}());


/***/ }),

/***/ "./src/app/groups/peopleGroup.model.ts":
/*!*********************************************!*\
  !*** ./src/app/groups/peopleGroup.model.ts ***!
  \*********************************************/
/*! exports provided: PeopleGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleGroup", function() { return PeopleGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _people_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people.model */ "./src/app/groups/people.model.ts");



var PeopleGroup = /** @class */ (function () {
    function PeopleGroup(user, admin) {
        this.user = user;
        // this.user._id = _id;
        // this.user.name = name;
        // this.user.number = number;
        // this.user.email = email;
        this.admin = admin;
        // this.user.avatarPath = avatarPath;
    }
    PeopleGroup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_people_model__WEBPACK_IMPORTED_MODULE_2__["People"], Boolean])
    ], PeopleGroup);
    return PeopleGroup;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdown]',
            exportAs: 'appDropdown'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\groups-hive\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map