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

module.exports = "<app-header></app-header>\n<!-- <div class=\"container\"> -->\n  <!-- <div [ngStyle]=\"{'background-image': 'url(./assets/img/wallpaper.jpg)'}\"> -->\n    <div class=\"row\" >\n      <div class=\"col-lg-12\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  <!-- </div> -->\n<!-- </div> -->\n"

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
                _groups_group_detail_peoplegroup_list_modal_change_avatar_person_modal_change_avatar_person_component__WEBPACK_IMPORTED_MODULE_1__["ModalChangeAvatarPersonComponent"]
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
                _groups_group_detail_peoplegroup_list_modal_change_avatar_person_modal_change_avatar_person_component__WEBPACK_IMPORTED_MODULE_1__["ModalChangeAvatarPersonComponent"]
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
/* harmony import */ var _groups_peopleGroup_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../groups/peopleGroup.model */ "./src/app/groups/peopleGroup.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (login, password) {
        // this.http.post('http://192.168.99.100:5000/authenticate', {login: login, password: password}).subscribe((resp: any) => {
        //     localStorage.setItem('auth_token', resp.token);
        //     localStorage.setItem('auth_login', resp.signed_user);
        //     this.router.navigate(['chat'], {relativeTo: this.route});
        // });
    };
    AuthService.prototype.registr = function (login, password) {
        // this.http.post('http://192.168.99.100:5000/setupAcc', {login: login, password: password}).subscribe((resp: any) => {
        //     localStorage.setItem('auth_token', resp.token);
        //     localStorage.setItem('auth_login', resp.signed_user);
        //     this.router.navigate(['chat'], {relativeTo: this.route});
        // });
    };
    AuthService.prototype.logout = function () {
        // localStorage.removeItem('auth_token');
        // localStorage.removeItem('auth_login');
    };
    // public logIn(): boolean {
    // return (localStorage.getItem('auth_token') !== null);
    // }
    // public getName(): string {
    // if(localStorage.getItem('auth_login')){
    // return localStorage.getItem('auth_login').toString();
    // }
    // }
    AuthService.prototype.getAcc = function () {
        var acc = new _groups_peopleGroup_model__WEBPACK_IMPORTED_MODULE_1__["PeopleGroup"]('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");
        return acc;
    };
    AuthService.prototype.checkAdmin = function (people) {
        var acc = new _groups_peopleGroup_model__WEBPACK_IMPORTED_MODULE_1__["PeopleGroup"]('5d2594e36fcb691a0d178a71', 'first', '1', 'first@test.com', true, "assets/img/guest.png");
        var result = people.find(function (person) {
            return person.user.name === acc.user.name && person.admin === acc.admin;
        });
        if (result) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = "/* body {\r\n    background: url(../../../assets/img/background.jpg) no-repeat center center fixed;\r\n} */\r\n\r\n.backgrounds {\r\n    width: 150px;\r\n    height: 75px;\r\n}\r\n\r\n/* .backgrounds:hover {\r\n    color: slategray;\r\n} */\r\n\r\n.navbar {\r\n    background-color: black;\r\n    color: black;\r\n}\r\n\r\n.navbar-header a {\r\n    color: black;\r\n}\r\n\r\n.nav-item a {\r\n    color: white;\r\n}\r\n\r\nh2 {\r\n    color: white;\r\n}\r\n\r\nh2:hover {\r\n  color: slategrey;\r\n}\r\n\r\n#home:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    background-color: black\r\n}\r\n\r\nul li {\r\n\tfloat: left;\r\n\tpadding: 3px;\r\n\r\n}\r\n\r\nul li a {\r\n\tdisplay: block;\r\n\tpadding: 20px;\r\n\tcolor: #fff;\r\n    text-decoration: none;\r\n    font-weight: 700;\r\n}\r\n\r\nul li a:hover {\r\n\tbackground: #444;\r\n\t -webkit-transition-property: background-color;\r\n\t transition-property: background-color;\r\n   -webkit-transition-duration: 0.4s;\r\n           transition-duration: 0.4s;\r\n   -webkit-transition-timing-function: ease;\r\n           transition-timing-function: ease;\r\n   color: #FFF;\r\n\r\n\r\n\r\n}\r\n\r\nul li:hover {\r\n    background: #a3c2c2;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-menu {\r\n    background-color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7O0FBRWI7O0FBR0E7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtDQUNiLFdBQVc7SUFDUixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0VBQ2YsNkNBQXFDO0VBQXJDLHFDQUFxQztHQUNwQyxpQ0FBeUI7V0FBekIseUJBQXlCO0dBQ3pCLHdDQUFnQztXQUFoQyxnQ0FBZ0M7R0FDaEMsV0FBVzs7OztBQUlkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG59ICovXHJcblxyXG4uYmFja2dyb3VuZHMge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4vKiAuYmFja2dyb3VuZHM6aG92ZXIge1xyXG4gICAgY29sb3I6IHNsYXRlZ3JheTtcclxufSAqL1xyXG5cclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5hdmJhci1oZWFkZXIgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMjpob3ZlciB7XHJcbiAgY29sb3I6IHNsYXRlZ3JleTtcclxufVxyXG5cclxuI2hvbWU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG5cclxudWwgbGkge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBhZGRpbmc6IDNweDtcclxuXHJcbn1cclxuXHJcblxyXG51bCBsaSBhIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxudWwgbGkgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzQ0NDtcclxuXHQgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcclxuICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgIGNvbG9yOiAjRkZGO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG51bCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTNjMmMyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n        <a (click)=\"onHome()\" id=\"home\"><h2>Groups</h2></a>\n    </div>\n    <div class=\"collaps navbar-collapse\">\n      \n    </div>\n    <div class=\"navbar-nav nav-right\">\n      <!-- <div class=\"nav-item\">\n      </div>\n      <div class=\"nav-item\">\n      </div>\n      <div class=\"nav-item\">\n      </div> -->\n\n      <!-- <li class=\"dropdown\" appDropdown #r=\"appDropdown\" >\n          <a style=\"cursor: pointer; color: white;\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu dropdown-menu-right pull-right\" [ngClass]=\"{'show':r.isOpen}\">\n              <li><a class=\"dropdown-item\" style=\"cursor: pointer;\">Change background</a></li>\n          </ul>\n      </li> -->\n      <li class=\"dropdown\" appDropdown #r=\"appDropdown\" >\n        <a style=\"cursor: pointer; color: white;\" class=\"dropdown-toggle\" role=\"button\">Backgrounds <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu dropdown-menu-right pull-right\" [ngClass]=\"{'show':r.isOpen}\">\n            <!-- <li><a class=\"dropdown-item\" style=\"cursor: pointer;\">Change background</a></li> -->\n            <ng-container *ngFor=\"let background of backgrounds\">\n              <li (click)=\"onChooseBackground(background)\"><img class=\"backgrounds\" src=\"assets/img/backgrounds/{{ background }}\" alt=\"image\"></li>\n            </ng-container>\n            \n        </ul>\n    </li>\n    </div>\n  </div>\n</nav>"

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
/* harmony import */ var _groups_group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../groups/group-detail/group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, router, groupDetailService, elementRef) {
        this.route = route;
        this.router = router;
        this.groupDetailService = groupDetailService;
        this.elementRef = elementRef;
        this.backgrounds = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg', 'background5.jpg'];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onHome = function () {
        // this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(assets/img/backgrounds/background2.jpg) no-repeat center center fixed';
        this.groupDetailService.cleanGroup();
        this.router.navigate(['/'], { relativeTo: this.route });
    };
    HeaderComponent.prototype.onChooseBackground = function (background) {
        this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(assets/img/backgrounds/' + background + ') no-repeat center center fixed';
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _groups_group_detail_group_detail_service__WEBPACK_IMPORTED_MODULE_1__["GroupDetailService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], HeaderComponent);
    return HeaderComponent;
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
                        if (el.user.name.toUpperCase().includes(target.toUpperCase())) {
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

module.exports = "/* Hexagons */\r\n#hexGrid {\r\n    overflow: hidden;\r\n    width: 5%;\r\n    margin: 0 auto;\r\n    /* padding: 0.866% 0; */\r\n    padding: 3.7%;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 15px;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n    background: transparent;\r\n}\r\n#hexGrid:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n}\r\n.hex {\r\n    position: relative;\r\n    list-style-type: none;\r\n    float: left;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n    -webkit-transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n            transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n}\r\n.hex * {\r\n    position: absolute;\r\n    visibility: visible;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n}\r\n.hexIn {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    color: #fff;\r\n    overflow: hidden;\r\n    -webkit-transform: skewY(-30deg) rotate(60deg);\r\n            transform: skewY(-30deg) rotate(60deg);\r\n}\r\n/*** HEX CONTENT **********************************************************************/\r\n.hex img {\r\n    left: -100%;\r\n    right: -100%;\r\n    width: auto;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n}\r\n.hex h1, .hex p {\r\n    margin: 0;\r\n    width: 102%;\r\n    left: -1%;  /* prevent line on the right where background doesn't cover image */\r\n    padding: 5%;\r\n    box-sizing: border-box;\r\n    background-color: rgba(0, 128, 128, 0.8);\r\n    font-weight: 300;\r\n    -webkit-transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n}\r\n.hex h1 {\r\n    bottom: 50%;\r\n    padding-top: 50%;\r\n    font-size: 1.5em;\r\n    z-index: 1;\r\n    -webkit-transform: translateY(-100%) translatez(-1px);\r\n            transform: translateY(-100%) translatez(-1px);\r\n}\r\n.hex h1:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 45%;\r\n    width: 10%;\r\n    text-align: center;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.hex p {\r\n    top: 50%;\r\n    padding-bottom: 50%;\r\n    -webkit-transform: translateY(100%) translatez(-1px);\r\n            transform: translateY(100%) translatez(-1px);\r\n}\r\n/*** HOVER EFFECT  **********************************************************************/\r\n.hexIn:hover h1, .hexIn:focus h1, .hexIn:hover p, .hexIn:focus p {\r\n    -webkit-transform: translateY(0%) translatez(-1px);\r\n            transform: translateY(0%) translatez(-1px);\r\n}\r\n/*** SPACING AND SIZING *****************************************************************/\r\n@media (min-width:1201px) {  /* <- 2-3  hexagons per row */\r\n.hex {\r\n    width: 32.666%;    /* = (100-2) / 3 */\r\n    padding-bottom: 37.720%;    /* =  width / sin(60) */\r\n}\r\n.hex:nth-child(5n+1),\r\n.hex:nth-child(5n+2) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n}\r\n.hex:nth-child(5n+3),\r\n.hex:nth-child(5n+4),\r\n.hex:nth-child(5n+5) {\r\n    margin-top: -8.564%;\r\n    margin-bottom: -8.564%;\r\n}\r\n.hex:nth-child(5n+2),\r\n.hex:nth-child(5n+4) {\r\n    margin-right: 1%;\r\n    margin-left: 1%;\r\n}\r\n.hex:nth-child(5n+1) {\r\n    margin-left: 0.5%;\r\n}\r\n.hex:nth-child(5n+3),\r\n.hex:nth-child(5n+6) {\r\n    clear: left;\r\n}\r\n}\r\n@media (max-width: 1200px) {  /* <- 1-2  hexagons per row */\r\n.hex {\r\n    width: 49.5%;    /* = (100-1) / 2 */\r\n    padding-bottom: 57.158%;    /* =  width / sin(60) */\r\n}\r\n.hex:nth-child(3n+1) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n}\r\n.hex:nth-child(3n+2),\r\n.hex:nth-child(3n+3) {\r\n    margin-top: -13.423%;\r\n    margin-bottom: -13.423%;\r\n}\r\n.hex:nth-child(3n+1) {\r\n    margin-left: 0.5%\r\n}\r\n.hex:nth-child(3n+3) {\r\n    margin-left: 1%;\r\n}\r\n.hex:nth-child(3n+2),\r\n.hex:nth-child(3n+4) {\r\n    clear: left;\r\n}\r\n}\r\n@media (max-width: 400px) {\r\n#hexGrid {\r\n    font-size: 13px;\r\n}\r\n}\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 24px;\r\n}\r\n.switch input { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    left: 4px;\r\n    bottom: 3px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n}\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(14px);\r\n    transform: translateX(14px);\r\n}\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9ncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2I7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEIsR0FBRyxtREFBbUQ7SUFDcEYsK0RBQXVEO1lBQXZELHVEQUF1RDtBQUMzRDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEIsR0FBRyxtREFBbUQ7QUFDeEY7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7QUFHQSx1RkFBdUY7QUFFdkY7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTLEdBQUcsbUVBQW1FO0lBQy9FLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQix3RUFBd0Q7SUFBeEQsZ0VBQXdEO0lBQXhELHdEQUF3RDtJQUF4RCx3RkFBd0Q7QUFDNUQ7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixxREFBNkM7WUFBN0MsNkNBQTZDO0FBQ2pEO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsb0RBQTRDO1lBQTVDLDRDQUE0QztBQUNoRDtBQUdBLHlGQUF5RjtBQUV6RjtJQUNJLGtEQUEwQztZQUExQywwQ0FBMEM7QUFDOUM7QUFHQSx5RkFBeUY7QUFFekYsNkJBQTZCLDZCQUE2QjtBQUMxRDtJQUNJLGNBQWMsS0FBSyxrQkFBa0I7SUFDckMsdUJBQXVCLEtBQUssdUJBQXVCO0FBQ3ZEO0FBQ0E7O0lBRUksOERBQXNEO1lBQXRELHNEQUFzRDtBQUMxRDtBQUNBOzs7SUFHSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLFdBQVc7QUFDZjtBQUNBO0FBRUEsOEJBQThCLDZCQUE2QjtBQUMzRDtJQUNJLFlBQVksS0FBSyxrQkFBa0I7SUFDbkMsdUJBQXVCLEtBQUssdUJBQXVCO0FBQ3ZEO0FBQ0E7SUFDSSw4REFBc0Q7WUFBdEQsc0RBQXNEO0FBQzFEO0FBQ0E7O0lBRUksb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOztJQUVJLFdBQVc7QUFDZjtBQUNBO0FBRUE7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksbUNBQW1DO0lBRW5DLDJCQUEyQjtBQUMvQjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9ncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhleGFnb25zICovXHJcbiNoZXhHcmlkIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qIHBhZGRpbmc6IDAuODY2JSAwOyAqL1xyXG4gICAgcGFkZGluZzogMy43JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jaGV4R3JpZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmhleCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7ICAvKiBmaXggZm9yIGphZ2dlZCBlZGdlcyBpbiBGRiBvbiBob3ZlciB0cmFuc2l0aW9uICovXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpIHNrZXdZKDMwZGVnKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG59XHJcblxyXG4uaGV4ICoge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgIC8qIGZpeCBmb3IgamFnZ2VkIGVkZ2VzIGluIEZGIG9uIGhvdmVyIHRyYW5zaXRpb24gKi9cclxufVxyXG5cclxuLmhleEluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0zMGRlZykgcm90YXRlKDYwZGVnKTtcclxufVxyXG5cclxuXHJcbi8qKiogSEVYIENPTlRFTlQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5oZXggaW1nIHtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhleCBoMSwgLmhleCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDIlO1xyXG4gICAgbGVmdDogLTElOyAgLyogcHJldmVudCBsaW5lIG9uIHRoZSByaWdodCB3aGVyZSBiYWNrZ3JvdW5kIGRvZXNuJ3QgY292ZXIgaW1hZ2UgKi9cclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAxMjgsIDAuOCk7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dCwgb3BhY2l0eSAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5oZXggaDEge1xyXG4gICAgYm90dG9tOiA1MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZXooLTFweCk7XHJcbn1cclxuXHJcbi5oZXggaDE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5oZXggcCB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgdHJhbnNsYXRleigtMXB4KTtcclxufVxyXG5cclxuXHJcbi8qKiogSE9WRVIgRUZGRUNUICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmhleEluOmhvdmVyIGgxLCAuaGV4SW46Zm9jdXMgaDEsIC5oZXhJbjpob3ZlciBwLCAuaGV4SW46Zm9jdXMgcCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHRyYW5zbGF0ZXooLTFweCk7XHJcbn1cclxuXHJcblxyXG4vKioqIFNQQUNJTkcgQU5EIFNJWklORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMDFweCkgeyAgLyogPC0gMi0zICBoZXhhZ29ucyBwZXIgcm93ICovXHJcbi5oZXgge1xyXG4gICAgd2lkdGg6IDMyLjY2NiU7ICAgIC8qID0gKDEwMC0yKSAvIDMgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAzNy43MjAlOyAgICAvKiA9ICB3aWR0aCAvIHNpbig2MCkgKi9cclxufVxyXG4uaGV4Om50aC1jaGlsZCg1bisxKSxcclxuLmhleDpudGgtY2hpbGQoNW4rMikge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlKC02MGRlZykgc2tld1koMzBkZWcpO1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDVuKzMpLFxyXG4uaGV4Om50aC1jaGlsZCg1bis0KSxcclxuLmhleDpudGgtY2hpbGQoNW4rNSkge1xyXG4gICAgbWFyZ2luLXRvcDogLTguNTY0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IC04LjU2NCU7XHJcbn1cclxuLmhleDpudGgtY2hpbGQoNW4rMiksXHJcbi5oZXg6bnRoLWNoaWxkKDVuKzQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuLmhleDpudGgtY2hpbGQoNW4rMSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNSU7XHJcbn1cclxuLmhleDpudGgtY2hpbGQoNW4rMyksXHJcbi5oZXg6bnRoLWNoaWxkKDVuKzYpIHtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgIC8qIDwtIDEtMiAgaGV4YWdvbnMgcGVyIHJvdyAqL1xyXG4uaGV4IHtcclxuICAgIHdpZHRoOiA0OS41JTsgICAgLyogPSAoMTAwLTEpIC8gMiAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU3LjE1OCU7ICAgIC8qID0gIHdpZHRoIC8gc2luKDYwKSAqL1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzEpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZSgtNjBkZWcpIHNrZXdZKDMwZGVnKTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCgzbisyKSxcclxuLmhleDpudGgtY2hpbGQoM24rMykge1xyXG4gICAgbWFyZ2luLXRvcDogLTEzLjQyMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTMuNDIzJTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCgzbisxKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41JVxyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzMpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCgzbisyKSxcclxuLmhleDpudGgtY2hpbGQoM24rNCkge1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiNoZXhHcmlkIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG59XHJcblxyXG5cclxuLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7IFxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTRweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0cHgpO1xyXG59XHJcblxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/group-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/groups/group-detail/group-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <!-- <div class=\"jumbotron\"> -->\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" name=\"namePerson\" [(ngModel)]=\"namePerson\" placeholder=\"Search\">\n    </div>\n    \n  <!-- </div> -->\n</div>\n<hr style=\"border: none;\nbackground-color: black;\nheight: 2px;\">\n<br>\n<div class=\"row\" *ngIf=\"groupDetailService.existGroup()\">\n  <div class=\"col-lg-12\">\n\n    <div class=\"container align-items-center justify-content-center\">\n      <div class=\"input-group\" style=\"width: 475px; margin: 0 auto; float: none;\" *ngIf=\"changeName\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"\" [value]=\"groupDetailService.getGroupName()\" [(ngModel)]=\"changingName\">\n        <div class=\"input-group-prepend\">\n          <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"savename\" (click)=\"onSaveName(changingName)\">Save Name</button>\n          <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"savename\" (click)=\"onCancelChangingName()\">Cancel</button>\n        </div>\n      </div>\n    </div>\n\n    <h1 style=\"text-align: center\" *ngIf=\"!changeName\"> \n      <img [src]=\"groupDetailService.getGroupImagePath()\" style=\"width: 50px;\" alt=\"\"/>\n      <span> {{ groupDetailService.getGroupName() }}</span>\n      <button class=\"btn btn-primary\" style=\"margin-left: 25px;\" *ngIf=\"admin\" (click)=\"onChangeName()\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Change Name</button>\n      <button class=\"btn btn-primary\" style=\"margin-left: 25px;\" *ngIf=\"admin\" (click)=\"onChangAvatarGroup()\"><i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i> Change Avatar</button>\n      <button class=\"btn btn-primary\" style=\"margin-left: 25px;\" (click)=\"onSendMailForGroup()\"><i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i> Send Mail</button>\n    </h1>\n    \n    <hr style=\"border: none;\n    background-color: black;\n    height: 2px;\">\n    <div class=\"row\">\n    \n      <div class=\"col-lg-9\">\n        <app-peoplegroup-list [namePersonSearch]=\"namePerson\" [people]=\"groupDetailService.getPeople()\" [admin]=\"admin\"></app-peoplegroup-list>\n      </div>\n      <div class=\"col-lg-3\">\n        <div>\n          <!-- <div class=\"row\"> -->\n            <label style=\"margin-left: 5px;\"><h1>Description</h1></label>\n            <button class=\"btn btn-warning\" style=\"position: relative; margin-bottom: 15px; margin-left: 5px;\" (click)=\"onChangeDescriptionGroup()\">Change Description</button>\n          <!-- </div> -->\n          <cdk-virtual-scroll-viewport style=\"height: 600px;\" itemSize=\"250\" class=\"viewport\">\n            <h3>{{ description }}</h3>\n          </cdk-virtual-scroll-viewport>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger\" *ngIf=\"admin\" style=\"float: right; margin-right: 20px;\" (click)=\"onRemoveGroup()\">Remove Group</button>\n<button class=\"btn btn-danger\" style=\"float: right; margin-right: 20px;\" (click)=\"onLeaveFromGroup()\">Leave Group</button>\n"

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
        var name = this.authService.getAcc().user.name;
        console.log(name);
        var result = this.group.people.filter(function (el) {
            return el.user.name === name;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWwvbW9kYWwtY2hhbmdlLWF2YXRhci1ncm91cC9tb2RhbC1jaGFuZ2UtYXZhdGFyLWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-change-avatar-group/modal-change-avatar-group.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Changing image of group</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"container\">\n        <div class=\"col-xs-12\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col-xs-2\" style=\"float: left;\">\n              <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onBack()\"><i class=\"fa fa-arrow-circle-o-left fa-2x\" aria-hidden=\"true\"></i></button>\n            </div>\n            <div class=\"col-xs-8\">\n              <img [src]=\"imgPath\" style=\"width: 150px;\">\n            </div>\n            <div class=\"col-xs-2 align-items-right\" style=\"float: right;\">\n              <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onForward()\"><i class=\"fa fa-arrow-circle-o-right fa-2x\" aria-hidden=\"true\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSaveImage()\">Save</button>\n  </div>\n</div>\n"

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
        console.log(this.imgNumber);
        this.imgPath = "assets/img/default" + this.imgNumber + ".png";
    };
    ModalChangeAvatarGroupComponent.prototype.onBack = function () {
        if (this.imgNumber === 1) {
            this.imgNumber = 10;
        }
        else {
            this.imgNumber--;
        }
        console.log(this.imgNumber);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWwvbW9kYWwtY2hhbmdlLWRlc2NyaXB0aW9uL21vZGFsLWNoYW5nZS1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-change-description/modal-change-description.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-change-description/modal-change-description.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ title }}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <!-- <h5>Yoy really want to do this</h5> -->\n    <label for=\"description\">Description</label>\n    <textarea class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"description\" cols=\"50\" rows=\"6\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n  </div>\n</div>\n"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Saira+Condensed\");\r\nhtml {\r\n  box-sizing: border-box;\r\n}\r\nhtml *,\r\nhtml *:after,\r\nhtml *:before {\r\n  box-sizing: inherit;\r\n}\r\n#text {\r\n    /* width:auto;\r\n    max-width: 100%;\r\n\toverflow:hidden;\r\n\tbackground-color:#FFF;\r\n\tcolor:#222;\r\n\tfont-family:Courier, monospace;\r\n\tfont-weight:normal;\r\n\tfont-size:18px;\r\n\tresize:none;\r\n\tline-height:40px;\r\n\tpadding-left:100px;\r\n\tpadding-right:30px;\r\n\tpadding-top:45px;\r\n\tpadding-bottom:34px;\r\n\tbackground-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);\r\n\tbackground-repeat:repeat-y, repeat;\r\n\t-webkit-border-radius:12px;\r\n\tborder-radius:12px;\r\n\t-webkit-box-shadow: 0px 2px 14px #000;\r\n\tbox-shadow: 0px 2px 14px #000;\r\n\tborder-top:1px solid #FFF;\r\n    border-bottom:1px solid #FFF; */\r\n    \r\n    display: block;\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    margin-bottom: 10px;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 400;\r\n    font-family: inherit;\r\n}\r\n/* textarea {\r\n    height:200px;\r\n    max-width:600px;\r\n    color:#999;\r\n    font-weight:400;\r\n    font-size:30px;\r\n    font-family:'Ubuntu', Helvetica, Arial, sans-serif;\r\n    width:100%;\r\n    background:#fff;\r\n    border-radius:3px;\r\n    line-height:2em;\r\n    border:none;\r\n    box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);\r\n    padding:30px;\r\n    -webkit-transition: height 2s ease;\r\n    -moz-transition: height 2s ease;\r\n    -ms-transition: height 2s ease;\r\n    -o-transition: height 2s ease;\r\n    transition: height 2s ease;\r\n}\r\n\r\n* {\r\n    -webkit-font-smoothing:antialiased !important;\r\n} */\r\nbody {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  min-height: 100vh;\r\n  line-height: 1.6;\r\n  font-family: 'Saira Condensed', sans-serif;\r\n  background-color: #fe7b1a;\r\n}\r\n.form {\r\n  max-width: 35em;\r\n  width: 100%;\r\n  padding: 4em;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  box-shadow: 0 0 40px 2px rgba(48, 48, 48, 0.22);\r\n}\r\n.form__fieldset {\r\n  padding: 0;\r\n  border: 0;\r\n  margin: 0;\r\n}\r\n.form__legend {\r\n  font-size: 1.5em;\r\n  margin-bottom: 1em;\r\n  color: #3e3e42;\r\n}\r\n.form__label {\r\n  display: block;\r\n}\r\n.form__input {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 5px 0;\r\n  margin-bottom: 10px;\r\n  background: none;\r\n  border: 0;\r\n  outline: 0;\r\n  font-size: 1.5em;\r\n  font-weight: 400;\r\n  font-family: inherit;\r\n}\r\n.form__input:not(:last-of-type) {\r\n  border-bottom: 1px solid #e4e4e4;\r\n}\r\n.form__input::-webkit-input-placeholder {\r\n  font-size: .8em;\r\n  color: #e4e4e4;\r\n}\r\n.form__input::-ms-input-placeholder {\r\n  font-size: .8em;\r\n  color: #e4e4e4;\r\n}\r\n.form__input::-moz-placeholder {\r\n  font-size: .8em;\r\n  color: #e4e4e4;\r\n}\r\n.form__input::placeholder {\r\n  font-size: .8em;\r\n  color: #e4e4e4;\r\n}\r\n.form__btn {\r\n  position: relative;\r\n  z-index: 1;\r\n  display: block;\r\n  width: 140px;\r\n  height: 40px;\r\n  background: none;\r\n  border: 0;\r\n  outline: 0;\r\n  color: #fe7b1a;\r\n  border: 0;\r\n  padding: .5em 3.5em;\r\n  border-radius: 25px;\r\n  border-radius: 0;\r\n  margin-top: 1.5em;\r\n  font-family: inherit;\r\n  box-shadow: inset 0 0 0 1px #e4e4e4;\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\r\n  -webkit-transition-delay: .4s;\r\n          transition-delay: .4s;\r\n}\r\n.is-valid .form__btn {\r\n  color: #fff;\r\n  -webkit-transition-delay: 0;\r\n          transition-delay: 0;\r\n}\r\n.form__btn::before {\r\n  content: ' ';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  background-color: #fe7b1a;\r\n  border-radius: inherit;\r\n  -webkit-transform: scaleX(0);\r\n          transform: scaleX(0);\r\n  -webkit-transition: all .5s ease-in-out;\r\n  transition: all .5s ease-in-out;\r\n}\r\n.is-valid .form__btn::before {\r\n  -webkit-transform: scaleX(1);\r\n          transform: scaleX(1);\r\n  -webkit-transition-delay: .3s;\r\n          transition-delay: .3s;\r\n}\r\n.form__indicator {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.form__indicator .progressbar {\r\n  stroke-width: 2px;\r\n  stroke: #fe7b1a;\r\n  fill: none;\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9tb2RhbC1tYWlsLXNlbmRlci9tb2RhbC1tYWlsLXNlbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTtBQUN0RTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBOzs7RUFHRSxtQkFBbUI7QUFDckI7QUFLQTtJQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBcUIrQjs7SUFFL0IsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBRUg7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtDQUErQztBQUNqRDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxTQUFTO0FBQ1g7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBS0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFIQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsdUNBQStCO0VBQS9CLCtCQUErQjtFQUMvQiw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsNEJBQTRCO1VBQ3BCLG9CQUFvQjtFQUM1Qix1Q0FBK0I7RUFBL0IsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSw0QkFBNEI7VUFDcEIsb0JBQW9CO0VBQzVCLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixVQUFVO0VBQ1YsdUNBQStCO0VBQS9CLCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWwvbW9kYWwtbWFpbC1zZW5kZXIvbW9kYWwtbWFpbC1zZW5kZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNhaXJhK0NvbmRlbnNlZFwiKTtcclxuaHRtbCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5odG1sICosXHJcbmh0bWwgKjphZnRlcixcclxuaHRtbCAqOmJlZm9yZSB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuI3RleHQge1xyXG4gICAgLyogd2lkdGg6YXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzpoaWRkZW47XHJcblx0YmFja2dyb3VuZC1jb2xvcjojRkZGO1xyXG5cdGNvbG9yOiMyMjI7XHJcblx0Zm9udC1mYW1pbHk6Q291cmllciwgbW9ub3NwYWNlO1xyXG5cdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRyZXNpemU6bm9uZTtcclxuXHRsaW5lLWhlaWdodDo0MHB4O1xyXG5cdHBhZGRpbmctbGVmdDoxMDBweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjMwcHg7XHJcblx0cGFkZGluZy10b3A6NDVweDtcclxuXHRwYWRkaW5nLWJvdHRvbTozNHB4O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vbWFvcGJ0Zy9FOUJtZ3RvaHQvbGluZXMucG5nKSwgdXJsKGh0dHBzOi8vc3RhdGljLnR1bWJsci5jb20vbWFvcGJ0Zy9uQlVtZ3RvZ3gvcGFwZXIucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteSwgcmVwZWF0O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czoxMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6MTJweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMTRweCAjMDAwO1xyXG5cdGJveC1zaGFkb3c6IDBweCAycHggMTRweCAjMDAwO1xyXG5cdGJvcmRlci10b3A6MXB4IHNvbGlkICNGRkY7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRkZGOyAqL1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiB0ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6NjAwcHg7XHJcbiAgICBjb2xvcjojOTk5O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBmb250LWZhbWlseTonVWJ1bnR1JywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgIGxpbmUtaGVpZ2h0OjJlbTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm94LXNoYWRvdzowcHggMHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgcGFkZGluZzozMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlO1xyXG59XHJcblxyXG4qIHtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgZm9udC1mYW1pbHk6ICdTYWlyYSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTdiMWE7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBtYXgtd2lkdGg6IDM1ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IDJweCByZ2JhKDQ4LCA0OCwgNDgsIDAuMjIpO1xyXG59XHJcblxyXG4uZm9ybV9fZmllbGRzZXQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZvcm1fX2xlZ2VuZCB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgY29sb3I6ICMzZTNlNDI7XHJcbn1cclxuXHJcbi5mb3JtX19sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtX19pbnB1dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG4uZm9ybV9faW5wdXQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcclxufVxyXG4uZm9ybV9faW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICBjb2xvcjogI2U0ZTRlNDtcclxufVxyXG4uZm9ybV9faW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgY29sb3I6ICNlNGU0ZTQ7XHJcbn1cclxuLmZvcm1fX2lucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICBjb2xvcjogI2U0ZTRlNDtcclxufVxyXG4uZm9ybV9faW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgY29sb3I6ICNlNGU0ZTQ7XHJcbn1cclxuXHJcbi5mb3JtX19idG4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjb2xvcjogI2ZlN2IxYTtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogLjVlbSAzLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlNGU0ZTQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAuNHM7XHJcbn1cclxuLmlzLXZhbGlkIC5mb3JtX19idG4ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDA7XHJcbn1cclxuLmZvcm1fX2J0bjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU3YjFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmlzLXZhbGlkIC5mb3JtX19idG46OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IC4zcztcclxufVxyXG5cclxuLmZvcm1fX2luZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmZvcm1fX2luZGljYXRvciAucHJvZ3Jlc3NiYXIge1xyXG4gIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gIHN0cm9rZTogI2ZlN2IxYTtcclxuICBmaWxsOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content modal modal-wide\" style=\"width: auto; max-width: 600px;\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Mail Sender</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" style=\"width: auto; height: auto; max-height: 100%;\">\n      <div class=\"container\">\n        <div class=\"col-xs-12\">\n            <form class=\"form\">\n              <fieldset class=\"form__fieldset\">\n            \n                <legend class=\"form__legend\">Mail for all members of group</legend>\n            \n                \n                <label class=\"form__label\" for=\"subject\"></label>\n                <input class=\"form__input\" type=\"text\" placeholder=\"Subject\" id=\"subject\" name=\"subject\" [(ngModel)]=\"subject\" required autocomplete=\"off\">\n                <br>\n                <!-- <label class=\"form__label\" for=\"message\"></label>\n                <input class=\"form__input\" type=\"text\" placeholder=\"Message\" id=\"message\" required autocomplete=\"off\"> -->\n                <!-- <textarea class=\"form_input\" name=\"\" id=\"\" cols=\"40\" rows=\"10\"></textarea> -->\n\n                <textarea placeholder=\"Yor text\" id=\"text\" name=\"text\" rows=\"4\" [(ngModel)]=\"text\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 150px; \"></textarea>\n\n                <button class=\"form__btn\" (click)=\"onSend()\">\n                  <!-- <svg class=\"form__indicator\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path class=\"progressbar\" d=\"\"></path>\n                  </svg> -->\n                  send\n                </button>\n            \n              </fieldset>\n            </form>\n        </div>\n      </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\n    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSaveImage()\">Save</button> -->\n  </div>\n</div>\n  "

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _group_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../group-detail.service */ "./src/app/groups/group-detail/group-detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_getip_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/getip.service */ "./src/app/getip.service.ts");







var ModalMailSenderComponent = /** @class */ (function () {
    function ModalMailSenderComponent(modalRef, groupDetailService, router, route, http, getipService) {
        this.modalRef = modalRef;
        this.groupDetailService = groupDetailService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.getipService = getipService;
    }
    ModalMailSenderComponent.prototype.ngOnInit = function () {
    };
    ModalMailSenderComponent.prototype.onSend = function () {
        var _this = this;
        var resultJson = {
            groupId: this.groupDetailService.getGroupId(),
            subject: this.subject,
            text: this.text
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalMailSenderComponent.prototype, "subject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalMailSenderComponent.prototype, "text", void 0);
    ModalMailSenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-modal-mail-sender',
            template: __webpack_require__(/*! ./modal-mail-sender.component.html */ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.html"),
            styles: [__webpack_require__(/*! ./modal-mail-sender.component.css */ "./src/app/groups/group-detail/modal-mail-sender/modal-mail-sender.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"], _group_detail_service__WEBPACK_IMPORTED_MODULE_4__["GroupDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_getip_service__WEBPACK_IMPORTED_MODULE_6__["GetipService"]])
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

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ title }}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <h5>Yoy really want to do this</h5>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n  </div>\n</div>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWwvcGVvcGxlZ3JvdXAtbGlzdC9tb2RhbC1jaGFuZ2UtYXZhdGFyLXBlcnNvbi9tb2RhbC1jaGFuZ2UtYXZhdGFyLXBlcnNvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/groups/group-detail/peoplegroup-list/modal-change-avatar-person/modal-change-avatar-person.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ title }}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"container\">\n        <div class=\"col-xs-12\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col-xs-2\" style=\"float: left;\">\n              <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onBack()\"><i class=\"fa fa-arrow-circle-o-left fa-2x\" aria-hidden=\"true\"></i></button>\n            </div>\n            <div class=\"col-xs-8\">\n              <img [src]=\"imgPath\" style=\"width: 150px;\">\n            </div>\n            <div class=\"col-xs-2 align-items-right\" style=\"float: right;\">\n              <button type=\"button\" class=\"btn btn-default btn-circle\" style=\"width: 50px;\" (click)=\"onForward()\"><i class=\"fa fa-arrow-circle-o-right fa-2x\" aria-hidden=\"true\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSaveAvatar()\">Save</button>\n  </div>\n</div>"

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





var ModalChangeAvatarPersonComponent = /** @class */ (function () {
    function ModalChangeAvatarPersonComponent(modalRef, groupDetailService) {
        this.modalRef = modalRef;
        this.groupDetailService = groupDetailService;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"], _group_detail_service__WEBPACK_IMPORTED_MODULE_4__["GroupDetailService"]])
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

module.exports = "\r\n/* Hexagons */\r\n#hexGrid {\r\n    overflow: hidden;\r\n    width: 45.5%;\r\n    margin: 0 auto;\r\n    /* padding: 0.866% 0; */\r\n    padding: 3.7%;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 15px;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 0px;\r\n    background: transparent;\r\n}\r\n#hexGrid:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n}\r\n.hex {\r\n    position: relative;\r\n    list-style-type: none;\r\n    float: left;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n    -webkit-transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n            transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n}\r\n.hex * {\r\n    position: absolute;\r\n    visibility: visible;\r\n    outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n}\r\n.hexIn {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    color: #fff;\r\n    overflow: hidden;\r\n    -webkit-transform: skewY(-30deg) rotate(60deg);\r\n            transform: skewY(-30deg) rotate(60deg);\r\n}\r\n/*** HEX CONTENT **********************************************************************/\r\n.hex img {\r\n    left: -100%;\r\n    right: -100%;\r\n    width: auto;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n}\r\n.hex h1, .hex p {\r\n    margin: 0;\r\n    width: 102%;\r\n    left: -1%;  /* prevent line on the right where background doesn't cover image */\r\n    padding: 5%;\r\n    box-sizing: border-box;\r\n    background-color: rgba(0, 128, 128, 0.8);\r\n    font-weight: 300;\r\n    -webkit-transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out;\r\n    transition: transform .2s ease-out, opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n}\r\n.hex h1 {\r\n    bottom: 50%;\r\n    padding-top: 50%;\r\n    font-size: 1.5em;\r\n    z-index: 1;\r\n    -webkit-transform: translateY(-100%) translatez(-1px);\r\n            transform: translateY(-100%) translatez(-1px);\r\n}\r\n.hex h1:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 45%;\r\n    width: 10%;\r\n    text-align: center;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.hex p {\r\n    top: 50%;\r\n    padding-bottom: 50%;\r\n    -webkit-transform: translateY(100%) translatez(-1px);\r\n            transform: translateY(100%) translatez(-1px);\r\n}\r\n/*** HOVER EFFECT  **********************************************************************/\r\n.hexIn:hover h1, .hexIn:focus h1, .hexIn:hover p, .hexIn:focus p {\r\n    -webkit-transform: translateY(0%) translatez(-1px);\r\n            transform: translateY(0%) translatez(-1px);\r\n}\r\n/*** SPACING AND SIZING *****************************************************************/\r\n@media (min-width:1201px) {  /* <- 2-3  hexagons per row */\r\n.hex {\r\n    width: 32.666%;    /* = (100-2) / 3 */\r\n    padding-bottom: 37.720%;    /* =  width / sin(60) */\r\n}\r\n.hex:nth-child(5n+1),\r\n.hex:nth-child(5n+2) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n}\r\n.hex:nth-child(5n+3),\r\n.hex:nth-child(5n+4),\r\n.hex:nth-child(5n+5) {\r\n    margin-top: -8.564%;\r\n    margin-bottom: -8.564%;\r\n}\r\n.hex:nth-child(5n+2),\r\n.hex:nth-child(5n+4) {\r\n    margin-right: 1%;\r\n    margin-left: 1%;\r\n}\r\n.hex:nth-child(5n+1) {\r\n    margin-left: 0.5%;\r\n}\r\n.hex:nth-child(5n+3),\r\n.hex:nth-child(5n+6) {\r\n    clear: left;\r\n}\r\n}\r\n@media (max-width: 1200px) {  /* <- 1-2  hexagons per row */\r\n.hex {\r\n    width: 49.5%;    /* = (100-1) / 2 */\r\n    padding-bottom: 57.158%;    /* =  width / sin(60) */\r\n}\r\n.hex:nth-child(3n+1) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n}\r\n.hex:nth-child(3n+2),\r\n.hex:nth-child(3n+3) {\r\n    margin-top: -13.423%;\r\n    margin-bottom: -13.423%;\r\n}\r\n.hex:nth-child(3n+1) {\r\n    margin-left: 0.5%\r\n}\r\n.hex:nth-child(3n+3) {\r\n    margin-left: 1%;\r\n}\r\n.hex:nth-child(3n+2),\r\n.hex:nth-child(3n+4) {\r\n    clear: left;\r\n}\r\n}\r\n@media (max-width: 400px) {\r\n#hexGrid {\r\n    font-size: 13px;\r\n}\r\n}\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 24px;\r\n}\r\n.switch input { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    left: 4px;\r\n    bottom: 3px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n}\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(14px);\r\n    transform: translateX(14px);\r\n}\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWRldGFpbC9wZW9wbGVncm91cC1saXN0L3Blb3BsZWdyb3VwLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsYUFBYTtBQUNiO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsOEJBQThCLEdBQUcsbURBQW1EO0lBQ3BGLCtEQUF1RDtZQUF2RCx1REFBdUQ7QUFDM0Q7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOEJBQThCLEdBQUcsbURBQW1EO0FBQ3hGO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0FBQzFDO0FBR0EsdUZBQXVGO0FBRXZGO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUyxHQUFHLG1FQUFtRTtJQUMvRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsd0VBQXdEO0lBQXhELGdFQUF3RDtJQUF4RCx3REFBd0Q7SUFBeEQsd0ZBQXdEO0FBQzVEO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YscURBQTZDO1lBQTdDLDZDQUE2QztBQUNqRDtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLG9EQUE0QztZQUE1Qyw0Q0FBNEM7QUFDaEQ7QUFHQSx5RkFBeUY7QUFFekY7SUFDSSxrREFBMEM7WUFBMUMsMENBQTBDO0FBQzlDO0FBR0EseUZBQXlGO0FBRXpGLDZCQUE2Qiw2QkFBNkI7QUFDMUQ7SUFDSSxjQUFjLEtBQUssa0JBQWtCO0lBQ3JDLHVCQUF1QixLQUFLLHVCQUF1QjtBQUN2RDtBQUNBOztJQUVJLDhEQUFzRDtZQUF0RCxzREFBc0Q7QUFDMUQ7QUFDQTs7O0lBR0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTtBQUVBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7SUFDSSxZQUFZLEtBQUssa0JBQWtCO0lBQ25DLHVCQUF1QixLQUFLLHVCQUF1QjtBQUN2RDtBQUNBO0lBQ0ksOERBQXNEO1lBQXRELHNEQUFzRDtBQUMxRDtBQUNBOztJQUVJLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTtBQUVBO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLG1DQUFtQztJQUVuQywyQkFBMkI7QUFDL0I7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWwvcGVvcGxlZ3JvdXAtbGlzdC9wZW9wbGVncm91cC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogSGV4YWdvbnMgKi9cclxuI2hleEdyaWQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiA0NS41JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLyogcGFkZGluZzogMC44NjYlIDA7ICovXHJcbiAgICBwYWRkaW5nOiAzLjclO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNoZXhHcmlkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uaGV4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgIC8qIGZpeCBmb3IgamFnZ2VkIGVkZ2VzIGluIEZGIG9uIGhvdmVyIHRyYW5zaXRpb24gKi9cclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZykgc2tld1koMzBkZWcpIHRyYW5zbGF0ZXooLTFweCk7XHJcbn1cclxuXHJcbi5oZXggKiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyAgLyogZml4IGZvciBqYWdnZWQgZWRnZXMgaW4gRkYgb24gaG92ZXIgdHJhbnNpdGlvbiAqL1xyXG59XHJcblxyXG4uaGV4SW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogc2tld1koLTMwZGVnKSByb3RhdGUoNjBkZWcpO1xyXG59XHJcblxyXG5cclxuLyoqKiBIRVggQ09OVEVOVCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmhleCBpbWcge1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaGV4IGgxLCAuaGV4IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMiU7XHJcbiAgICBsZWZ0OiAtMSU7ICAvKiBwcmV2ZW50IGxpbmUgb24gdGhlIHJpZ2h0IHdoZXJlIGJhY2tncm91bmQgZG9lc24ndCBjb3ZlciBpbWFnZSAqL1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDEyOCwgMC44KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LCBvcGFjaXR5IC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmhleCBoMSB7XHJcbiAgICBib3R0b206IDUwJTtcclxuICAgIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRleigtMXB4KTtcclxufVxyXG5cclxuLmhleCBoMTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmhleCBwIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG59XHJcblxyXG5cclxuLyoqKiBIT1ZFUiBFRkZFQ1QgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaGV4SW46aG92ZXIgaDEsIC5oZXhJbjpmb2N1cyBoMSwgLmhleEluOmhvdmVyIHAsIC5oZXhJbjpmb2N1cyBwIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgdHJhbnNsYXRleigtMXB4KTtcclxufVxyXG5cclxuXHJcbi8qKiogU1BBQ0lORyBBTkQgU0laSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6MTIwMXB4KSB7ICAvKiA8LSAyLTMgIGhleGFnb25zIHBlciByb3cgKi9cclxuLmhleCB7XHJcbiAgICB3aWR0aDogMzIuNjY2JTsgICAgLyogPSAoMTAwLTIpIC8gMyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM3LjcyMCU7ICAgIC8qID0gIHdpZHRoIC8gc2luKDYwKSAqL1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDVuKzEpLFxyXG4uaGV4Om50aC1jaGlsZCg1bisyKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGUoLTYwZGVnKSBza2V3WSgzMGRlZyk7XHJcbn1cclxuLmhleDpudGgtY2hpbGQoNW4rMyksXHJcbi5oZXg6bnRoLWNoaWxkKDVuKzQpLFxyXG4uaGV4Om50aC1jaGlsZCg1bis1KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOC41NjQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTguNTY0JTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCg1bisyKSxcclxuLmhleDpudGgtY2hpbGQoNW4rNCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCg1bisxKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41JTtcclxufVxyXG4uaGV4Om50aC1jaGlsZCg1biszKSxcclxuLmhleDpudGgtY2hpbGQoNW4rNikge1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgeyAgLyogPC0gMS0yICBoZXhhZ29ucyBwZXIgcm93ICovXHJcbi5oZXgge1xyXG4gICAgd2lkdGg6IDQ5LjUlOyAgICAvKiA9ICgxMDAtMSkgLyAyICovXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTcuMTU4JTsgICAgLyogPSAgd2lkdGggLyBzaW4oNjApICovXHJcbn1cclxuLmhleDpudGgtY2hpbGQoM24rMSkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlKC02MGRlZykgc2tld1koMzBkZWcpO1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzIpLFxyXG4uaGV4Om50aC1jaGlsZCgzbiszKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTMuNDIzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMy40MjMlO1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzEpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjUlXHJcbn1cclxuLmhleDpudGgtY2hpbGQoM24rMykge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcbi5oZXg6bnRoLWNoaWxkKDNuKzIpLFxyXG4uaGV4Om50aC1jaGlsZCgzbis0KSB7XHJcbiAgICBjbGVhcjogbGVmdDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuI2hleEdyaWQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbn1cclxuXHJcblxyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHsgXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTRweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTRweCk7XHJcbn1cclxuXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/groups/group-detail/peoplegroup-list/peoplegroup-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"hexGrid\">\n    <ng-container *ngFor=\"let person of people | filter : ['user','name'] : namePersonSearch : 'includes'; let i = index\">\n        <ng-container [ngSwitch]=\"person.user.name\">\n            <li class=\"hex\" *ngSwitchCase=\"authService.getAcc().user.name\">\n                <a class=\"hexIn\">\n                    <img [src]=\"person.user.avatarPath\" alt=\"\"/>\n                    <h1>\n                        {{ person.user.name }}\n                    </h1>\n                    <p *ngIf=\"admin\">\n                    <button type=\"button\" style=\"width: 24px; height: 24px; right: 72px; top: 40px;\" class=\"btn btn-secondary\" tooltip=\"Change Avatar\" placement=\"top\"><i class=\"fa fa-user-circle\" style=\"right: 4px; top: 2px; bottom: 0px;\" (click)=\"changeAvatarPerson(person, i)\"></i></button>\n                    </p>\n    \n                    <p *ngIf=\"!admin\">\n    \n                    </p>\n                </a>\n            </li>\n            \n            <li class=\"hex\" *ngSwitchDefault>\n                <a class=\"hexIn\">\n                    <img [src]=\"person.user.avatarPath\" alt=\"\"/>\n                    <h1>\n                        {{ person.user.name }}\n                    </h1>\n                    <p *ngIf=\"admin\">\n                        \n                    <button type=\"button\" style=\"left: 60px; height: 24px;\" class=\"btn btn-danger\" tooltip=\"Remove Him\"  placement=\"bottom\" (click)=\"onRemove(i)\"><i class=\"fa fa-times\" style=\"right: 6px; top: 1px; bottom: 0px;\"></i></button>\n                    <label class=\"switch\" tooltip=\"Admin\" placement=\"bottom\">\n                        <input type=\"checkbox\" name=\"admin\" id=\"admin\" [checked]=\"person.admin\" (change)=\"checkValueAdmin(i)\">\n                        <span class=\"slider round\"></span>\n                    </label>\n                    <br>\n                    <button type=\"button\" style=\"width: 24px; height: 24px; right: 72px; top: 40px;\" class=\"btn btn-secondary\" tooltip=\"Change Avatar\" placement=\"top\"><i class=\"fa fa-user-circle\" style=\"right: 4px; top: 2px; bottom: 0px;\" (click)=\"changeAvatarPerson(person, i)\"></i></button>\n                    </p>\n    \n                    <p *ngIf=\"!admin\">\n    \n                    </p>\n                </a>\n            </li>\n        </ng-container>      \n    </ng-container>\n    <li *ngIf=\"admin\" class=\"hex\" (click)=\"onAddPerson()\">\n        <a class=\"hexIn\">\n            <img src=\"assets/img/Plus_Sign.png\" alt=\"\"/>\n            <h1>Add a new Person</h1>\n            <p>Add a new Person</p>\n        </a>\n    </li>\n</ul>"

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
        // console.log(this.people);
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

module.exports = "<!-- <a class=\"hover list-group-item clearfix\" routerLinkActive=\"active\" [routerLink]=\"[id]\">\n    <div class=\"pull-left\">\n        <h4 class=\"list-group-item-text\">{{ group.name }}</h4>\n    </div>\n</a> -->\n\n<li class=\"hex\">\n    <a class=\"hexIn\" href=\"\">\n        <img src=\"https://cdn.pixabay.com/photo/2016/11/14/17/39/group-1824145_960_720.png\" alt=\"\"/>\n        <h1>{{ group.name }}</h1>\n        <p>{{ group.people.length }} of members</p>\n    </a>\n</li>\n"

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

module.exports = "/* .modal-backdrop{z-index: 1050;}\r\n.modal{z-index: 1060;} */\r\n\r\n\r\n.inlinee {\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n#horizscroll {\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n#horizscroll .hover {\r\n    display: inline-block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n/* .hover {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n    width: max-content;\r\n    height: 9rem;\r\n}\r\n\r\n.hover:hover {\r\n    background-color: #f0f0f5;\r\n}\r\n\r\n.btn-circle.btn-xl {\r\n    width: 70px;\r\n    height: 70px;\r\n    padding: 10px 16px;\r\n    border-radius: 35px;\r\n    font-size: 24px;\r\n    line-height: 1.33;\r\n}\r\n\r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 1.42857;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLW5ld01vZGFsL2dyb3VwLW5ld01vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7d0JBQ3dCOzs7QUFHeEI7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL2dyb3VwLW5ld01vZGFsL2dyb3VwLW5ld01vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubW9kYWwtYmFja2Ryb3B7ei1pbmRleDogMTA1MDt9XHJcbi5tb2RhbHt6LWluZGV4OiAxMDYwO30gKi9cclxuXHJcblxyXG4uaW5saW5lZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbiNob3JpenNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbiNob3JpenNjcm9sbCAuaG92ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogLmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGhlaWdodDogOXJlbTtcclxufVxyXG5cclxuLmhvdmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjU7XHJcbn1cclxuXHJcbi5idG4tY2lyY2xlLmJ0bi14bCB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zMztcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xyXG59ICovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/groups/group-newModal/group-newModal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/groups/group-newModal/group-newModal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\"> {{ title }} </h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onCloseModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"container\">\n        <div class=\"jumbotron\">\n          <br>\n          <!-- <div class=\"input-group\" *ngIf=\"!addPeople\">\n            <input type=\"text\" class=\"form-control\" name=\"nameGroup\" [(ngModel)]=\"nameGroup\" placeholder=\"Name of Group\">\n          </div> -->\n          <!-- <div class=\"input-group\"> -->\n            <label for=\"nameGroup\">Name of Group</label>\n            <input type=\"text\" class=\"form-control\" name=\"nameGroup\" [(ngModel)]=\"nameGroup\" placeholder=\"Name of Group\" [disabled]=\"isInvalidInputName()\">\n          <!-- </div> -->\n          <br>\n          <label for=\"name\">Search of people</label>\n          <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"inputName\" #namee=\"ngModel\" placeholder=\"Search of People\">\n          <br>\n          <label for=\"description\">Description</label>\n          <textarea class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"description\" cols=\"50\" rows=\"6\" [disabled]=\"isInvalidInputName()\"></textarea>\n          <br>\n          <div id=\"horizscroll\">\n            <div class=\"inlinee\" *ngFor=\"let person of personGroupService.getPeopleToAdd(); let i = index;\">\n              <div class=\"d-flex flex-column align-items-center\">\n                  <div class=\"\"><app-person-group [nameToAdd]=\"person.name\" [person]=\"person\" [indexPerson]=\"i\"></app-person-group></div>\n                  <div class=\"\"><p>{{ person.user.name }}</p></div>\n                  <!-- <div class=\"\"><p>Yeagor Kryshniov Andreevich</p></div> -->\n                </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"col-xs-12\">\n            <ng-container *ngFor=\"let person of personGroupService.getPeople() | filterdontshowinstart: 'name' : inputName: 'addpeople'\">\n              <!-- <app-person *ngIf=\"checking(person.name)\" style=\"cursor: pointer;\" (click)=\"onChoosePerson(person)\" [name]=\"person.name\"></app-person> -->\n              <app-person *ngIf=\"person.name !== authService.getAcc().user.name\" style=\"cursor: pointer;\" (click)=\"onChoosePerson(person)\" [name]=\"person.name\"></app-person>\n            </ng-container>\n          </div>\n        </div>\n      </div> \n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"onCloseModal()\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"!personGroupService.getPeopleToAdd() || personGroupService.getPeopleToAdd().length === 0\">Save changes</button>\n    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Save changes</button> -->\n  </div>\n</div>"

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
        var _this = this;
        this.http.get('https://groups-3fd03.firebaseio.com/people.json').subscribe(function (res) {
            console.log(res);
            // this.people = res;
            _this.personGroupService.setPeople(res);
            var people = _this.personGroupService.getPeople();
            // let peopleinsideGroup = this.groupDetailService.getPeople();
        });
    };
    GroupNewModalComponent.prototype.onChoosePerson = function (person) {
        console.log("choose");
        this.personGroupService.addPeopleToAdd(person);
        this.personGroupService.removeFromPeople(person);
        this.inputName = "";
    };
    GroupNewModalComponent.prototype.checking = function (str) {
        if (!this.inputName || this.inputName.length < 3 || str === this.authService.getAcc().user.name)
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
        // this.personGroupService.addAdminPeopleToAdd(this.authService.getAcc());
        this.personGroupService.addMyAccountPeopleToAdd(this.authService.getAcc());
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

module.exports = "<!-- <div class=\"hover card rounded-circle inlinee\" style=\"background-image: https://www.seekpng.com/png/full/72-729700_account-avatar-face-head-person-profile-user-comments.png;\" [ngStyle]=\"!disabled?{'height' : '140px', 'width' : '140px'} : {'height' : '50px', 'width' : '50px'}\">\n  <div class=\"card-body\"  (click)=\"onMakeLittleCard()\">\n    <p *ngIf=\"!disabled\" class=\"card-title\" style=\"display: inline-block;\">\n      {{ nameToAdd }} <sup *ngIf=\"personGroupService.checkAdminPersonToAdd(indexPerson)\" class=\"fa fa-user-secret\" style=\"color: #33cc33;\" tooltip=\"Admin\" [adaptivePosition]=\"false\" placement=\"top\"></sup>\n    </p>\n    <br>\n  </div>\n    <div style=\"margin-left: 25%;\" *ngIf=\"!disabled\">\n      <button type=\"button\" class=\"btn btn-danger btn-circle\" tooltip=\"Remove Him\" [adaptivePosition]=\"false\" placement=\"top\" (click)=\"onRemoveFromList(person)\"><i class=\"fa fa-times\"></i></button>\n      <button type=\"button\" class=\"btn btn-success btn-circle\" tooltip=\"Make Him Admin\" [adaptivePosition]=\"false\" placement=\"top\" (click)=\"onAdminPerson(indexPerson)\" style=\"margin-left: 15px;\"><i class=\"fa fa-user\"></i></button>\n    </div>\n</div> -->\n\n<!-- <div class=\"inlinee\" style=\"position: relative;\"> -->\n  <div class=\"hover card img-fluid rounded-circle\" style=\"z-index: 1;\" [ngStyle]=\"!disabled?{'height' : '140px', 'width' : '140px'} : {'height' : '50px', 'width' : '50px'}\">\n    <img class=\"card-img-top rounded-circle\" src=\"assets/img/guest.png\" alt=\"account image\" [ngStyle]=\"!disabled?{'height' : '139px', 'width' : '139px'} : {'height' : '49px', 'width' : '49px'}\">\n    <sup *ngIf=\"personGroupService.checkAdminPersonToAdd(indexPerson)\" class=\"top-right fa fa-user-secret\" style=\"color: #33cc33;\" tooltip=\"Admin\" [adaptivePosition]=\"false\" placement=\"top\"></sup>\n    <div class=\"card-img-overlay\">\n      <div class=\"card-body\" (click)=\"onMakeLittleCard()\">\n        <div class=\"card-text\" *ngIf=\"!disabled\">\n          <!-- <button type=\"button\" style=\"margin-top: 20px; left: 2px;\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i></button> -->\n          <br>\n          <br>\n          <button type=\"button\" class=\"btn btn-danger btn-circle\" tooltip=\"Remove Him\" [adaptivePosition]=\"false\" placement=\"top\" (click)=\"onRemoveFromList(person)\"><i class=\"fa fa-times\"></i></button>\n          <button type=\"button\" class=\"btn btn-success btn-circle\" tooltip=\"Make Him Admin\" [adaptivePosition]=\"false\" placement=\"top\" (click)=\"onAdminPerson(indexPerson)\" style=\"margin-left: 15px;\"><i class=\"fa fa-user\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <button type=\"button\" style=\"z-index: 2;\"><i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i></button> -->\n  <!-- <h3 *ngIf=\"!disabled\" class=\"card-title\" style=\"display: inline-block; position: absolute; bottom: 0;\">\n      {{ nameToAdd }} <sup *ngIf=\"personGroupService.checkAdminPersonToAdd(indexPerson)\" class=\"fa fa-user-secret\" style=\"color: #33cc33;\" tooltip=\"Admin\" [adaptivePosition]=\"false\" placement=\"top\"></sup>\n  </h3> -->\n<!-- </div> -->"

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
            this.people = [person];
        else
            this.people.push(person);
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

module.exports = "<a class=\"hover list-group-item clearfix\">\n  <div class=\"pull-left\">\n      <p class=\"list-group-item-text\">{{ name }}</p>\n  </div>\n</a>"

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

module.exports = ".circle {\r\n  position: relative;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  font-size: 20px;\r\n  color: #fff;\r\n  line-height: 28px;\r\n  text-align: center;\r\n  background: #000;\r\n  margin-top: 25%;\r\n  margin-left: 75%;\r\n}\r\n\r\n/* Hexagons */\r\n\r\n#hexGrid {\r\n  overflow: hidden;\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  /* padding: 0.866% 0; */\r\n  padding: 3.7%;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 0px;\r\n  background: transparent;\r\n}\r\n\r\n#hexGrid:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.hex {\r\n  position: relative;\r\n  list-style-type: none;\r\n  float: left;\r\n  overflow: hidden;\r\n  visibility: hidden;\r\n  outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n  -webkit-transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n          transform: rotate(-60deg) skewY(30deg) translatez(-1px);\r\n}\r\n\r\n.hex:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.hex * {\r\n  position: absolute;\r\n  visibility: visible;\r\n  outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */\r\n}\r\n\r\n.hexIn {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  color: #fff;\r\n  overflow: hidden;\r\n  -webkit-transform: skewY(-30deg) rotate(60deg);\r\n          transform: skewY(-30deg) rotate(60deg);\r\n}\r\n\r\n/*** HEX CONTENT **********************************************************************/\r\n\r\n.hex img {\r\n  left: -100%;\r\n  right: -100%;\r\n  width: auto;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.hex h1,\r\n.hex p {\r\n  margin: 0;\r\n  width: 102%;\r\n  left: -1%;  /* prevent line on the right where background doesn't cover image */\r\n  padding: 5%;\r\n  box-sizing: border-box;\r\n  background-color: rgba(0, 128, 128, 0.8);\r\n  font-weight: 300;\r\n  -webkit-transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n  transition: opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n  transition: transform .2s ease-out, opacity .3s ease-out;\r\n  transition: transform .2s ease-out, opacity .3s ease-out, -webkit-transform .2s ease-out;\r\n}\r\n\r\n.hex h1 {\r\n  bottom: 50%;\r\n  padding-top: 50%;\r\n  font-size: 1.5em;\r\n  z-index: 1;\r\n  -webkit-transform: translateY(-100%) translatez(-1px);\r\n          transform: translateY(-100%) translatez(-1px);\r\n}\r\n\r\n.hex h1:after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 45%;\r\n  width: 10%;\r\n  text-align: center;\r\n  border-bottom: 1px solid #fff;\r\n}\r\n\r\n.hex p {\r\n  top: 50%;\r\n  padding-bottom: 50%;\r\n  -webkit-transform: translateY(100%) translatez(-1px);\r\n          transform: translateY(100%) translatez(-1px);\r\n}\r\n\r\n/*** HOVER EFFECT  **********************************************************************/\r\n\r\n.hexIn:hover h1, .hexIn:focus h1, .hexIn:hover p, .hexIn:focus p {\r\n  -webkit-transform: translateY(0%) translatez(-1px);\r\n          transform: translateY(0%) translatez(-1px);\r\n}\r\n\r\n/*** SPACING AND SIZING *****************************************************************/\r\n\r\n@media (min-width:1201px) {  /* <- 2-3  hexagons per row */\r\n  .hex {\r\n    width: 32.666%;    /* = (100-2) / 3 */\r\n    padding-bottom: 37.720%;    /* =  width / sin(60) */\r\n  }\r\n  .hex:nth-child(5n+1),\r\n  .hex:nth-child(5n+2) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n  }\r\n  .hex:nth-child(5n+3),\r\n  .hex:nth-child(5n+4),\r\n  .hex:nth-child(5n+5) {\r\n    margin-top: -8.564%;\r\n    margin-bottom: -8.564%;\r\n  }\r\n  .hex:nth-child(5n+2),\r\n  .hex:nth-child(5n+4) {\r\n    margin-right: 1%;\r\n    margin-left: 1%;\r\n  }\r\n  .hex:nth-child(5n+1) {\r\n    margin-left: 0.5%;\r\n  }\r\n  .hex:nth-child(5n+3),\r\n  .hex:nth-child(5n+6) {\r\n    clear: left;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {  /* <- 1-2  hexagons per row */\r\n  .hex {\r\n    width: 49.5%;    /* = (100-1) / 2 */\r\n    padding-bottom: 57.158%;    /* =  width / sin(60) */\r\n  }\r\n  .hex:nth-child(3n+1) {\r\n    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n            transform: translateX(50%) rotate(-60deg) skewY(30deg);\r\n  }\r\n  .hex:nth-child(3n+2),\r\n  .hex:nth-child(3n+3) {\r\n    margin-top: -13.423%;\r\n    margin-bottom: -13.423%;\r\n  }\r\n  .hex:nth-child(3n+1) {\r\n    margin-left: 0.5%\r\n  }\r\n  .hex:nth-child(3n+3) {\r\n    margin-left: 1%;\r\n  }\r\n  .hex:nth-child(3n+2),\r\n  .hex:nth-child(3n+4) {\r\n    clear: left;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  #hexGrid {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy1saXN0L2dyb3Vwcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLGFBQWE7O0FBQ2I7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBOEIsR0FBRyxtREFBbUQ7RUFDcEYsK0RBQXVEO1VBQXZELHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QixHQUFHLG1EQUFtRDtBQUN0Rjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7O0FBR0EsdUZBQXVGOztBQUV2RjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsU0FBUyxHQUFHLG1FQUFtRTtFQUMvRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsd0VBQXdEO0VBQXhELGdFQUF3RDtFQUF4RCx3REFBd0Q7RUFBeEQsd0ZBQXdEO0FBQzFEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHFEQUE2QztVQUE3Qyw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLG9EQUE0QztVQUE1Qyw0Q0FBNEM7QUFDOUM7O0FBR0EseUZBQXlGOztBQUV6RjtFQUNFLGtEQUEwQztVQUExQywwQ0FBMEM7QUFDNUM7O0FBR0EseUZBQXlGOztBQUV6Riw2QkFBNkIsNkJBQTZCO0VBQ3hEO0lBQ0UsY0FBYyxLQUFLLGtCQUFrQjtJQUNyQyx1QkFBdUIsS0FBSyx1QkFBdUI7RUFDckQ7RUFDQTs7SUFFRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0VBQ3hEO0VBQ0E7OztJQUdFLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7RUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7O0lBRUUsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsOEJBQThCLDZCQUE2QjtFQUN6RDtJQUNFLFlBQVksS0FBSyxrQkFBa0I7SUFDbkMsdUJBQXVCLEtBQUssdUJBQXVCO0VBQ3JEO0VBQ0E7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0VBQ3hEO0VBQ0E7O0lBRUUsb0JBQW9CO0lBQ3BCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBOztJQUVFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXBzLWxpc3QvZ3JvdXBzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcclxufVxyXG5cclxuLyogSGV4YWdvbnMgKi9cclxuI2hleEdyaWQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvKiBwYWRkaW5nOiAwLjg2NiUgMDsgKi9cclxuICBwYWRkaW5nOiAzLjclO1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jaGV4R3JpZDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmhleCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7ICAvKiBmaXggZm9yIGphZ2dlZCBlZGdlcyBpbiBGRiBvbiBob3ZlciB0cmFuc2l0aW9uICovXHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKSBza2V3WSgzMGRlZykgdHJhbnNsYXRleigtMXB4KTtcclxufVxyXG5cclxuLmhleDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGV4ICoge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgIC8qIGZpeCBmb3IgamFnZ2VkIGVkZ2VzIGluIEZGIG9uIGhvdmVyIHRyYW5zaXRpb24gKi9cclxufVxyXG5cclxuLmhleEluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiBza2V3WSgtMzBkZWcpIHJvdGF0ZSg2MGRlZyk7XHJcbn1cclxuXHJcblxyXG4vKioqIEhFWCBDT05URU5UICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaGV4IGltZyB7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgcmlnaHQ6IC0xMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhleCBoMSxcclxuLmhleCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMiU7XHJcbiAgbGVmdDogLTElOyAgLyogcHJldmVudCBsaW5lIG9uIHRoZSByaWdodCB3aGVyZSBiYWNrZ3JvdW5kIGRvZXNuJ3QgY292ZXIgaW1hZ2UgKi9cclxuICBwYWRkaW5nOiA1JTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAxMjgsIDAuOCk7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LCBvcGFjaXR5IC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmhleCBoMSB7XHJcbiAgYm90dG9tOiA1MCU7XHJcbiAgcGFkZGluZy10b3A6IDUwJTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG59XHJcblxyXG4uaGV4IGgxOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB3aWR0aDogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmhleCBwIHtcclxuICB0b3A6IDUwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSB0cmFuc2xhdGV6KC0xcHgpO1xyXG59XHJcblxyXG5cclxuLyoqKiBIT1ZFUiBFRkZFQ1QgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaGV4SW46aG92ZXIgaDEsIC5oZXhJbjpmb2N1cyBoMSwgLmhleEluOmhvdmVyIHAsIC5oZXhJbjpmb2N1cyBwIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHRyYW5zbGF0ZXooLTFweCk7XHJcbn1cclxuXHJcblxyXG4vKioqIFNQQUNJTkcgQU5EIFNJWklORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMDFweCkgeyAgLyogPC0gMi0zICBoZXhhZ29ucyBwZXIgcm93ICovXHJcbiAgLmhleCB7XHJcbiAgICB3aWR0aDogMzIuNjY2JTsgICAgLyogPSAoMTAwLTIpIC8gMyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM3LjcyMCU7ICAgIC8qID0gIHdpZHRoIC8gc2luKDYwKSAqL1xyXG4gIH1cclxuICAuaGV4Om50aC1jaGlsZCg1bisxKSxcclxuICAuaGV4Om50aC1jaGlsZCg1bisyKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGUoLTYwZGVnKSBza2V3WSgzMGRlZyk7XHJcbiAgfVxyXG4gIC5oZXg6bnRoLWNoaWxkKDVuKzMpLFxyXG4gIC5oZXg6bnRoLWNoaWxkKDVuKzQpLFxyXG4gIC5oZXg6bnRoLWNoaWxkKDVuKzUpIHtcclxuICAgIG1hcmdpbi10b3A6IC04LjU2NCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOC41NjQlO1xyXG4gIH1cclxuICAuaGV4Om50aC1jaGlsZCg1bisyKSxcclxuICAuaGV4Om50aC1jaGlsZCg1bis0KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIH1cclxuICAuaGV4Om50aC1jaGlsZCg1bisxKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41JTtcclxuICB9XHJcbiAgLmhleDpudGgtY2hpbGQoNW4rMyksXHJcbiAgLmhleDpudGgtY2hpbGQoNW4rNikge1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7ICAvKiA8LSAxLTIgIGhleGFnb25zIHBlciByb3cgKi9cclxuICAuaGV4IHtcclxuICAgIHdpZHRoOiA0OS41JTsgICAgLyogPSAoMTAwLTEpIC8gMiAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU3LjE1OCU7ICAgIC8qID0gIHdpZHRoIC8gc2luKDYwKSAqL1xyXG4gIH1cclxuICAuaGV4Om50aC1jaGlsZCgzbisxKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGUoLTYwZGVnKSBza2V3WSgzMGRlZyk7XHJcbiAgfVxyXG4gIC5oZXg6bnRoLWNoaWxkKDNuKzIpLFxyXG4gIC5oZXg6bnRoLWNoaWxkKDNuKzMpIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMy40MjMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEzLjQyMyU7XHJcbiAgfVxyXG4gIC5oZXg6bnRoLWNoaWxkKDNuKzEpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjUlXHJcbiAgfVxyXG4gIC5oZXg6bnRoLWNoaWxkKDNuKzMpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICB9XHJcbiAgLmhleDpudGgtY2hpbGQoM24rMiksXHJcbiAgLmhleDpudGgtY2hpbGQoM24rNCkge1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAjaGV4R3JpZCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/groups/groups-list/groups-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/groups/groups-list/groups-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport style=\"height: 600px;\" itemSize=\"250\" class=\"viewport\">\n<ul id=\"hexGrid\">\n        <ng-container *ngFor=\"let group of groups | filter :['name'] : nameGroupp : 'includes'\" >\n            <!-- <li *ngIf=\"checking(group.name)\" class=\"hex\"> -->\n            <li class=\"hex\" (click)=\"onChooseGroup(group._id)\">\n                <a class=\"hexIn\">\n                    <img src=\"{{ group.imgPath }}\" alt=\"\"/>\n                    <div class=\"circle\">{{ group.people.length }}</div>\n                    <h1>{{ group.name }}</h1>\n                    <p>{{ group.people.length }} of members</p>\n                </a>\n            </li>\n        </ng-container>\n        \n        <li *ngIf=\"mygroups\" class=\"hex\" (click)=\"onNew()\">\n            <a class=\"hexIn\">\n                <img src=\"assets/img/Plus_Sign.png\" alt=\"\"/>\n                <h1>Create a new Group</h1>\n                <p>Create a new Group</p>\n            </a>\n        </li>\n    </ul>\n</cdk-virtual-scroll-viewport>\n\n<!-- <ul id=\"hexGrid\">\n    <ng-container *ngFor=\"let group of groups\" >\n            <app-group-item class=\"hexmy\" [group]=\"group\" [id]=\"group._id\"></app-group-item>\n    </ng-container>\n    \n</ul> -->\n\n\n\n"

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
        this.user = this.authService.getAcc().user.name;
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

module.exports = ".vl {\r\nborder-left: 6px solid green;\r\nheight: 500px;\r\n}\r\n\r\n.line {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    margin-top: 50%;\r\n    border: none;\r\n    background-color: black;\r\n    height: 2px;\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n    #line2 {\r\n        display: none;\r\n    }\r\n\r\n    #line3 {\r\n        display: none;\r\n    }\r\n\r\n    #line1 {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n        /* border: none;\r\n        background-color: black;\r\n        height: 2px; */\r\n    }\r\n\r\n    .line-list br {\r\n        visibility: hidden;\r\n    }\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWE7QUFDYjs7QUFFQTtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUdBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCOztzQkFFYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZsIHtcclxuYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncmVlbjtcclxuaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICNsaW5lMiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAjbGluZTMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI2xpbmUxIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAvKiBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7ICovXHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmUtbGlzdCBiciB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/groups/groups.component.html":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <!-- <div class=\"jumbotron\"> -->\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\" name=\"nameGroup\" [(ngModel)]=\"nameGroup\" placeholder=\"Search\">\n  </div>\n  <!-- </div> -->\n</div>\n<hr style=\"border: none;\nbackground-color: black;\nheight: 2px;\">\n<br>\n<div class=\"row\">\n  <div class=\"col-lg-5\">\n    <h1 style=\"text-align: center\">Groups Includes Me</h1>\n    <app-groups-list [mygroups]=\"false\" [groups]=\"groups\" [nameGroupp]=\"nameGroup\"></app-groups-list>\n  </div>\n\n  <div class=\"col-lg-2 line-list\">\n    <hr id=\"line1\" class=\"line\">\n    <br>\n    <hr id=\"line2\" class=\"line\">\n    <br>\n    <hr id=\"line3\" class=\"line\">\n  </div>\n  \n  <div class=\"col-lg-5\">\n    <!-- <app-hive></app-hive> -->\n    <h1 style=\"text-align: center\">My Groups</h1>\n    <app-groups-list [mygroups]=\"true\" [groups]=\"groupsAdmin\" [nameGroupp]=\"nameGroup\"></app-groups-list>\n  </div>\n</div>\n"

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
        this.http.get('http://' + this.getipService.getip() + ':4200/user').subscribe(function (res) {
            console.log(res);
        });
        this.http.get('http://' + this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonNotAdmin/' + this.authService.getAcc().user._id).subscribe(function (res) {
            _this.groups = res;
            console.log(_this.groups);
            // console.log(this.groups);
        });
        this.http.get('http://' + this.getipService.getip() + ':5000/api/allGroups/getGroupsByPersonAdmin/' + this.authService.getAcc().user._id).subscribe(function (res) {
            _this.groupsAdmin = res;
        });
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


var PeopleGroup = /** @class */ (function () {
    function PeopleGroup(_id, name, number, email, admin, avatarPath) {
        this.user = {
            _id: _id,
            name: name,
            number: number,
            email: email,
            avatarPath: avatarPath
        };
        // this.user._id = _id;
        // this.user.name = name;
        // this.user.number = number;
        // this.user.email = email;
        this.admin = admin;
        // this.user.avatarPath = avatarPath;
    }
    PeopleGroup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String, String, String, Boolean, String])
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

module.exports = __webpack_require__(/*! C:\groups\new versions\groups-hive\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map