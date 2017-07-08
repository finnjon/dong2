webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api/api.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/api.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"auth.authenticated() && auth.userProfile\">\n  <h4>You are logged in</h4>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h3>Profile</h3>\n      <img [src]=\"auth.userProfile.picture\" alt=\"\" class=\"profile-img\">\n      <p><strong>Name: </strong> {{auth.userProfile.name}}</p>\n      <p><strong>Email: </strong> {{auth.userProfile.email}}</p>\n      <p><strong>Nickname: </strong> {{auth.userProfile.nickname}}</p>\n      <p><strong>Created At: </strong> {{auth.userProfile.created_at}}</p>\n      <p><strong>Updated At: </strong> {{auth.userProfile.updated_at}}</p>\n    </div>\n  </div>\n</div>\n<h4 *ngIf=\"!auth.authenticated()\">You are not logged in, please click 'Log in' button to login</h4> -->\n\n<h4>Deeply API</h4>\n<p>Deeply is a respository of learning droplets. Think Wikipedia but for learning. The data is accessible via our api. To see what you are likely to get click on the droplets below.</p>\n\n<!-- droplet search\napi view -->\n\n<p>If you are interested in using our data in your app or other materials get in touch with \n<a href=\"mailto:jonathon@deeply.io\">Jonathon</a>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/api/api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiComponent = (function () {
    function ApiComponent(auth) {
        this.auth = auth;
    }
    ApiComponent.prototype.ngOnInit = function () {
    };
    return ApiComponent;
}());
ApiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-api',
        template: __webpack_require__("../../../../../src/app/api/api.component.html"),
        styles: [__webpack_require__("../../../../../src/app/api/api.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */]) === "function" && _a || Object])
], ApiComponent);

var _a;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/api.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n   <div class=\"col-xs-4 col-xs-offset-4 text-center\">\n     <flash-messages></flash-messages>\n   </div>\n</div>\n\n<app-navbar></app-navbar>\n\n<div class=\"main-content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_api_component__ = __webpack_require__("../../../../../src/app/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__create_create_start_create_start_component__ = __webpack_require__("../../../../../src/app/create/create-start/create-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__create_create_1_create_1_component__ = __webpack_require__("../../../../../src/app/create/create-1/create-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__create_create_2_create_2_component__ = __webpack_require__("../../../../../src/app/create/create-2/create-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__create_create_3_create_3_component__ = __webpack_require__("../../../../../src/app/create/create-3/create-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__show_droplet_show_droplet_component__ = __webpack_require__("../../../../../src/app/show-droplet/show-droplet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__create_create_4_create_4_component__ = __webpack_require__("../../../../../src/app/create/create-4/create-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__create_create_5_create_5_component__ = __webpack_require__("../../../../../src/app/create/create-5/create-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__create_create_6_create_6_component__ = __webpack_require__("../../../../../src/app/create/create-6/create-6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__review_review_component__ = __webpack_require__("../../../../../src/app/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_quill__ = __webpack_require__("../../../../ngx-quill/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular_confirmation_popover__ = __webpack_require__("../../../../angular-confirmation-popover/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"]({
        tokenGetter: (function () { return localStorage.getItem('access_token'); })
    }), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_8__api_api_component__["a" /* ApiComponent */],
            __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__create_create_start_create_start_component__["a" /* CreateStartComponent */],
            __WEBPACK_IMPORTED_MODULE_14__create_create_1_create_1_component__["a" /* Create1Component */],
            __WEBPACK_IMPORTED_MODULE_15__create_create_2_create_2_component__["a" /* Create2Component */],
            __WEBPACK_IMPORTED_MODULE_16__create_create_3_create_3_component__["a" /* Create3Component */],
            __WEBPACK_IMPORTED_MODULE_17__show_droplet_show_droplet_component__["a" /* ShowDropletComponent */],
            __WEBPACK_IMPORTED_MODULE_19__create_create_4_create_4_component__["a" /* Create4Component */],
            __WEBPACK_IMPORTED_MODULE_20__create_create_5_create_5_component__["a" /* Create5Component */],
            __WEBPACK_IMPORTED_MODULE_21__create_create_6_create_6_component__["a" /* Create6Component */],
            __WEBPACK_IMPORTED_MODULE_22__review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_27__editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_29__navbar_navbar_component__["a" /* NavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_26_ngx_quill__["a" /* QuillModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_28_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({
                confirmButtonType: 'danger'
            })
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
            },
            __WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_18__droplet_service__["a" /* DropletService */], __WEBPACK_IMPORTED_MODULE_23__http_service__["a" /* HttpService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api_component__ = __webpack_require__("../../../../../src/app/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__review_review_component__ = __webpack_require__("../../../../../src/app/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_create_routes__ = __webpack_require__("../../../../../src/app/create/create.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });










var APP_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_2__callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_1__create_create_component__["a" /* CreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]], children: __WEBPACK_IMPORTED_MODULE_8__create_create_routes__["a" /* CREATE_ROUTES */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_1__create_create_component__["a" /* CreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]], children: __WEBPACK_IMPORTED_MODULE_8__create_create_routes__["a" /* CREATE_ROUTES */] },
    { path: 'api', component: __WEBPACK_IMPORTED_MODULE_3__api_api_component__["a" /* ApiComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: 'review', component: __WEBPACK_IMPORTED_MODULE_6__review_review_component__["a" /* ReviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: 'editor/:id', component: __WEBPACK_IMPORTED_MODULE_7__editor_editor_component__["a" /* EditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: 'dashboard' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['signup']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Auth = (function () {
    function Auth(router) {
        this.router = router;
        this.pushedProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.redirectUri = process.env.url || 'http://localhost:8080/callback';
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: 'DZj2YgDoOKZU6tTRlEWsODMF7yGiRuis',
            domain: 'deeply.eu.auth0.com',
            responseType: 'token id_token',
            audience: 'http://localhost:3001',
            redirectUri: this.redirectUri,
            scope: 'openid profile'
        });
    }
    ;
    Auth.prototype.login = function () {
        this.auth0.authorize();
    };
    ;
    Auth.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
            }
            else if (err) {
                _this.router.navigate(['/signup']);
                console.log(err);
            }
        });
    };
    Auth.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        this.getProfile();
    };
    Auth.prototype.getProfile = function () {
        var _this = this;
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
                self.role = self.userProfile["http://roles/roles"];
                _this.pushProfile(self);
            }
            _this.router.navigate(['/dashboard']);
        });
    };
    Auth.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    Auth.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/signup']);
    };
    Auth.prototype.pushProfile = function (profile) {
        this.pushedProfile.emit(profile);
    };
    return Auth;
}());
Auth = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], Auth);

var _a;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/auth.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallbackComponent = (function () {
    function CallbackComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    CallbackComponent.prototype.ngOnInit = function () { };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-callback',
        template: __webpack_require__("../../../../../src/app/callback/callback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/callback/callback.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */]) === "function" && _a || Object])
], CallbackComponent);

var _a;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/callback.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create-1/create-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".results {\n  margin: 20px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/create-1/create-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Create1Component = (function () {
    function Create1Component(router, dropletService, httpService, flashMessagesService) {
        this.router = router;
        this.dropletService = dropletService;
        this.httpService = httpService;
        this.flashMessagesService = flashMessagesService;
        this.searchResults = [];
        this.focussed = false;
    }
    Create1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.droplet = this.dropletService.getCurrentDroplet();
        this.dropletService.pushedDroplet.subscribe(function (droplet) { return _this.droplet = droplet; });
    };
    Create1Component.prototype.ngAfterViewInit = function () {
        var el = document.getElementById('name');
        if (el) {
            el.focus();
        }
    };
    Create1Component.prototype.onSubmit = function (data) {
        var _this = this;
        this.droplet.name = data.name;
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        }, function (error) {
            _this.error = error;
            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        }, function () { return _this.router.navigate(['create/create2']); });
    };
    Create1Component.prototype.onSearch = function (query) {
        var _this = this;
        this.httpService.searchDroplets(query)
            .subscribe(function (data) {
            _this.searchResults = data.json();
        });
    };
    Create1Component.prototype.onFocus = function () {
        this.focussed = true;
    };
    return Create1Component;
}());
Create1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-1',
        template: "\n    <p>Make sure no-one has already created your droplet. Check below. If nothing comes up you are good to go.</p>\n    <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <input id=\"name\"\n               class=\"form-control\"\n               type=\"text\"\n               placeholder=\"Add unique name\"\n               [ngModel]=\"droplet.name\"\n               name=\"name\"\n               (keyup)=\"onSearch(f.value.name)\"\n               autocomplete=\"off\"\n               (focus)=\"onFocus()\">\n      </div>\n      <div class=\"advice\">\n        <p>Your name should be unique, not less than 10 characters, and the most obvious way a person would search for it.</p>\n      </div>\n      <div class=\"results\">\n        <div *ngFor=\"let result of searchResults\">\n          <div>{{ result.name }}</div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">\n        <span *ngIf=\"droplet._id\">Edit Name</span>\n        <span *ngIf=\"!droplet._id\">Add Name</span>\n      </button>\n    </form>\n  ",
        styles: [__webpack_require__("../../../../../src/app/create/create-1/create-1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], Create1Component);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/create-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create-2/create-2.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"addDescription(f.value)\" #f=\"ngForm\">\n  <div class=\"form-group\">\n    <label>Description: <small>(required)</small></label>\n    <quill-editor\n      id=\"description\"\n      name=\"description\"\n      placholder=\"Add helpful description of what this droplet tests.\"\n      [ngModel]=\"droplet.description\"\n      (onEditorCreated)=\"setFocus($event)\"\n      [modules]=\"{\n        toolbar: [\n          ['bold', 'italic', 'underline', 'strike'],\n          ['code-block', 'clean']\n        ]\n      }\"\n      required>\n    </quill-editor>\n  </div>\n  <div class=\"advice\">\n    <p>Give a brief and clear description of whatever your droplet is testing, with examples if possible. Use HTML tags to make it clearer.</p>\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Save Description</button>\n  <button class=\"btn\" [routerLink]=\"['/create/create3']\">Next</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/create/create-2/create-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Create2Component = (function () {
    function Create2Component(dropletService, router, httpService, flashMessagesService) {
        this.dropletService = dropletService;
        this.router = router;
        this.httpService = httpService;
        this.flashMessagesService = flashMessagesService;
    }
    Create2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.droplet = this.dropletService.getCurrentDroplet();
        this.dropletService.pushedDroplet.subscribe(function (droplet) { return _this.droplet = droplet; });
    };
    Create2Component.prototype.ngAfterViewChecked = function () {
        var el = document.getElementById('description');
        if (el) {
            el.focus();
        }
    };
    Create2Component.prototype.addDescription = function (droplet) {
        var _this = this;
        this.droplet.description = droplet.description;
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
            _this.router.navigate(['create/create3']);
        }, function (error) {
            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        });
    };
    Create2Component.prototype.setFocus = function ($event) {
        $event.focus();
    };
    return Create2Component;
}());
Create2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-2',
        template: __webpack_require__("../../../../../src/app/create/create-2/create-2.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], Create2Component);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/create-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create-3/create-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Create3Component = (function () {
    function Create3Component(dropletService, activatedRoute, router, httpService, flashMessagesService) {
        var _this = this;
        this.dropletService = dropletService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.httpService = httpService;
        this.flashMessagesService = flashMessagesService;
        this.routeSubscription = this.activatedRoute.params.subscribe(function (param) { return _this.index = param['index']; });
    }
    Create3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.droplet = this.dropletService.getCurrentDroplet();
        this.dropletService.pushedDroplet.subscribe(function (droplet) { return _this.droplet = droplet; });
    };
    Create3Component.prototype.ngAfterViewChecked = function () {
        var el = document.getElementById('explanation');
        if (el) {
            el.focus();
        }
    };
    Create3Component.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe(); //prevents memory leaks from observable
    };
    //note here if the explanation has an index it exists already in which case I only update the relevant field because otherwise the whole object is transformed and I lose all the other data.
    Create3Component.prototype.addExplanation = function (explanation, index) {
        var _this = this;
        if (index) {
            this.droplet.explanations[index].updated_at = new Date().toJSON();
            this.droplet.explanations[index].content = explanation.content; //prevent overide
        }
        else {
            explanation.created_at = new Date().toJSON();
            explanation.updated_at = new Date().toJSON();
            this.droplet.explanations.push(explanation);
        }
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        }, function (error) {
            _this.flashMessagesService.show('An error occurred!', { cssClass: 'alert-success', timeout: 2000 });
        });
        this.content = ''; //empty form field
        if (index) {
            this.router.navigate(['create/create3']);
        }
    };
    Create3Component.prototype.setFocus = function ($event) {
        $event.focus();
    };
    return Create3Component;
}());
Create3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-3',
        template: "\n    <form (ngSubmit)=\"addExplanation(f.value, index)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Explanation: <small>(required)</small></label>\n        <quill-editor\n          *ngIf=\"index\"\n          id=\"explanation\"\n          name=\"content\"\n          placholder=\"Add an explanation of the content this droplet tests.\"\n          [(ngModel)]=\"droplet.explanations[index].content\"\n          (onEditorCreated)=\"setFocus($event)\"\n          [modules]=\"{\n            toolbar: [\n              ['bold', 'italic', 'underline', 'strike'],\n              ['code-block', 'clean']\n            ]\n          }\"\n          required>\n        </quill-editor>\n        <quill-editor\n          *ngIf=\"!index\"\n          id=\"explanation\"\n          name=\"content\"\n          placholder=\"Add an explanation of the content this droplet tests.\"\n          [(ngModel)]=\"content\"\n          (onEditorCreated)=\"setFocus($event)\"\n          [modules]=\"{\n            toolbar: [\n              ['bold', 'italic', 'underline', 'strike'],\n              ['code-block', 'clean']\n            ]\n          }\"\n          required>\n        </quill-editor>\n      </div>\n      <div class=\"advice\">\n        <p>How would you explain this droplet to a student? Make sure you write plainly and make sure to direct students to other resources if additional concepts are required.</p>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">\n        <span *ngIf=\"index\">Update</span>\n        <span *ngIf=\"!index\">Add</span>\n      </button>\n      <button class=\"btn\" [routerLink]=\"['/create/create4']\">Next</button>\n    </form>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], Create3Component);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/create-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create-4/create-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Create4Component = (function () {
    function Create4Component(dropletService, activatedRoute, router, httpService, flashMessagesService) {
        var _this = this;
        this.dropletService = dropletService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.httpService = httpService;
        this.flashMessagesService = flashMessagesService;
        this.question = {};
        this.focussed = "question";
        this.subscription = this.activatedRoute.params.subscribe(function (param) { return _this.index = param['index']; });
    }
    Create4Component.prototype.ngOnInit = function () {
        var _this = this;
        this.droplet = this.dropletService.getCurrentDroplet();
        this.dropletService.pushedDroplet.subscribe(function (droplet) { return _this.droplet = droplet; });
    };
    Create4Component.prototype.ngAfterViewChecked = function () {
        var el = document.getElementById('question');
        if (el) {
            setTimeout(function () {
                var focussed = document.activeElement.id;
                if (focussed !== ('question') &&
                    focussed !== ('answer') &&
                    focussed !== ('filled')) {
                    el.focus();
                }
            }, 500);
        }
    };
    Create4Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe(); //prevents memory leaks from observable
    };
    Create4Component.prototype.addQuestion = function (question, index) {
        var _this = this;
        if (index) {
            this.droplet.questions[index].updated_at = new Date().toJSON();
            this.droplet.questions[index].prompt = question.prompt;
            this.droplet.questions[index].answer = question.answer;
            this.droplet.questions[index].filledAnswer = question.filledAnswer;
        }
        else {
            question.created_at = new Date().toJSON();
            question.updated_at = new Date().toJSON();
            this.droplet.questions.push(question);
        }
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        }, function (error) {
            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        });
        this.question = {};
        if (index) {
            this.router.navigate(['create/create4']);
        }
    };
    Create4Component.prototype.onFocus = function (field) {
        switch (field) {
            case "question":
                this.focussed = "question";
                break;
            case "answer":
                this.focussed = "answer";
                break;
            case "filledAnswer":
                this.focussed = "filledAnswer";
                break;
            default:
                this.focussed = "";
                ;
        }
    };
    Create4Component.prototype.setFocus = function ($event) {
        $event.focus();
    };
    return Create4Component;
}());
Create4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-4',
        template: "\n    <div>Add some questions to test understanding of this droplet.</div>\n    <br>\n    <form (ngSubmit)=\"addQuestion(f.value, index)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Question: <small>(required)</small></label>\n        <quill-editor\n          *ngIf=\"index\"\n          id=\"question\"\n          name=\"prompt\"\n          placholder=\"Add a question here.\"\n          [(ngModel)]=\"droplet.questions[index].prompt\"\n          (onEditorCreated)=\"setFocus($event)\"\n          [modules]=\"{\n            toolbar: [\n              ['bold', 'italic', 'underline', 'strike'],\n              ['code-block', 'clean']\n            ]\n          }\"\n          required\n          (focus)=\"onFocus('question')\">\n        </quill-editor>\n        <quill-editor\n          *ngIf=\"!index\"\n          id=\"question\"\n          name=\"prompt\"\n          placholder=\"Add a question here.\"\n          [(ngModel)]=\"question.prompt\"\n          (onEditorCreated)=\"setFocus($event)\"\n          [modules]=\"{\n            toolbar: [\n              ['bold', 'italic', 'underline', 'strike'],\n              ['code-block', 'clean']\n            ]\n          }\"\n          required\n          (focus)=\"onFocus('question')\">\n        </quill-editor>\n      </div>\n      <div *ngIf=\"focussed === 'question'\" class=\"advice\">\n        <p>Add a question and .....</p>\n      </div>\n      <div class=\"form-group\">\n        <label>Answer: <small>(required)</small></label>\n        <input id=\"answer\" *ngIf=\"index\" class=\"form-control\" [(ngModel)]=\"droplet.questions[index].answer\" name=\"answer\" type=\"text\" placeholder=\"Answer\" (focus)=\"onFocus('answer')\" required>\n        <input id=\"answer\" *ngIf=\"!index\" class=\"form-control\" [(ngModel)]=\"question.answer\" name=\"answer\" type=\"text\" placeholder=\"Answer\" (focus)=\"onFocus('answer')\" required>\n      </div>\n      <div *ngIf=\"focussed === 'answer'\" class=\"advice\">\n        <p>Add an answer and .....</p>\n      </div>\n      <div class=\"form-group\">\n        <label>Filled Answer:</label>\n        <input id=\"filled\" *ngIf=\"index\" class=\"form-control\" [(ngModel)]=\"droplet.questions[index].filledAnswer\" name=\"filledAnswer\" type=\"text\" class=\"form-control\" placeholder=\"If you would like to pre-fill the answer field, do so here\" (focus)=\"onFocus('filledAnswer')\">\n        <input id=\"filled\" *ngIf=\"!index\" class=\"form-control\" [(ngModel)]=\"question.filledAnswer\" name=\"filledAnswer\" type=\"text\" class=\"form-control\" placeholder=\"If you would like to pre-fill the answer field, do so here\" (focus)=\"onFocus('filledAnswer')\">\n      </div>\n      <div *ngIf=\"focussed === 'filledAnswer'\" class=\"advice\">\n        <p>If you would like an answer field to be pre-filled, do so here.</p>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">\n        <span *ngIf=\"index\">Update Question</span>\n        <span *ngIf=\"!index\">Add Question</span>\n      </button>\n      <button class=\"btn\" [routerLink]=\"['/create/create5']\">Next</button>\n    </form>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], Create4Component);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/create-4.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create-5/create-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Create5Component = (function () {
    function Create5Component(dropletService, activatedRoute, router, httpService, flashMessagesService) {
        var _this = this;
        this.dropletService = dropletService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.httpService = httpService;
        this.flashMessagesService = flashMessagesService;
        this.subscription = this.activatedRoute.params.subscribe(function (param) { return _this.index = param['index']; });
    }
    Create5Component.prototype.ngOnInit = function () {
        var _this = this;
        this.droplet = this.dropletService.getCurrentDroplet();
        this.dropletService.pushedDroplet.subscribe(function (droplet) { return _this.droplet = droplet; });
    };
    Create5Component.prototype.ngAfterViewChecked = function () {
        var el = document.getElementById('hint');
        if (el) {
            el.focus();
        }
    };
    Create5Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe(); //prevents memory leaks from observable
    };
    Create5Component.prototype.addHint = function (hint, index) {
        var _this = this;
        if (index) {
            this.droplet.hints[index].updated_at = new Date().toJSON();
            this.droplet.hints[index].content = hint.content;
        }
        else {
            hint.created_at = new Date().toJSON();
            hint.updated_at = new Date().toJSON();
            this.droplet.hints.push(hint);
        }
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        }, function (error) {
            _this.flashMessagesService.show('An error occurred!', { cssClass: 'alert-success', timeout: 2000 });
        });
        this.content = ''; //empty form field
        if (index) {
            this.router.navigate(['create/create5']);
        }
    };
    Create5Component.prototype.setFocus = function ($event) {
        $event.focus();
    };
    return Create5Component;
}());
Create5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-5',
        template: "\n    <div>Create hints that will help jog students' memories as they try to answer questions.</div>\n    <br>\n    <form (ngSubmit)=\"addHint(f.value, index)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Hint: <small>(required)</small></label>\n        <quill-editor\n          id=\"hint\"\n          *ngIf=\"index\"\n          [(ngModel)]=\"droplet.hints[index].content\"name=\"content\"\n          placeholder=\"Add a hint.\"\n          (onEditorCreated)=\"setFocus($event)\"\n          [modules]=\"{\n            toolbar: [\n              ['bold', 'italic', 'underline', 'strike'],\n              ['code-block', 'clean']\n            ]\n          }\"\n          required></quill-editor>\n        <quill-editor\n          id=\"hint\"\n          *ngIf=\"!index\"\n          [(ngModel)]=\"content\"\n          name=\"content\"\n          placeholder=\"Add a hint.\"\n          (onEditorCreated)=\"setFocus($event)\"\n          [modules]=\"{\n            toolbar: [\n              ['bold', 'italic', 'underline', 'strike'],\n              ['code-block', 'clean']\n            ]\n          }\"\n          required></quill-editor>\n      </div>\n      <div class=\"advice\">\n        <p>Hinty hint.</p>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">\n        <span *ngIf=\"index\">Update Hint</span>\n        <span *ngIf=\"!index\">Add Hint</span>\n      </button>\n      <button class=\"btn\" [routerLink]=\"['/create/create6']\">Next</button>\n    </form>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], Create5Component);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/create-5.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create-6/create-6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Create6Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Create6Component = (function () {
    function Create6Component(dropletService, httpService, flashMessagesService) {
        this.dropletService = dropletService;
        this.httpService = httpService;
        this.flashMessagesService = flashMessagesService;
    }
    Create6Component.prototype.ngOnInit = function () {
        var _this = this;
        this.droplet = this.dropletService.getCurrentDroplet();
        this.dropletService.pushedDroplet.subscribe(function (droplet) { return _this.droplet = droplet; });
    };
    Create6Component.prototype.ngAfterViewChecked = function () {
        var el = document.getElementById('tag');
        if (el) {
            el.focus();
        }
    };
    //note you can't edit tags as there is no point. You just delete the one you don't like and make another one.
    Create6Component.prototype.addTag = function (tag) {
        var _this = this;
        tag.created_at = new Date().toJSON();
        this.droplet.tags.push(tag);
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        }, function (error) {
            _this.flashMessagesService.show('An error occurred!', { cssClass: 'alert-success', timeout: 2000 });
        });
        this.tag = ''; //empty form field
    };
    return Create6Component;
}());
Create6Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-6',
        template: "\n    <div>Add search terms to help people find your droplet. Add one at a time and press enter or add.</div>\n    <br>\n    <form (ngSubmit)=\"addTag(f.value)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Tag: <small>(required)</small></label>\n        <input id=\"tag\" class=\"form-control\" [(ngModel)]=\"tag\" name=\"tag\" type=\"text\" placeholder=\"Add tags one at a time.\" required>\n      </div>\n      <div class=\"advice\">\n        <p>taggy tag</p>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Add Tag</button>\n    </form>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__droplet_service__["a" /* DropletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], Create6Component);

var _a, _b, _c;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/create-6.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create-start/create-start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateStartComponent = (function () {
    function CreateStartComponent(dropletService) {
        this.dropletService = dropletService;
        this.newDroplet = true;
    }
    CreateStartComponent.prototype.ngOnInit = function () {
        this.droplet = this.dropletService.getCurrentDroplet();
        if (this.droplet._id) {
            this.newDroplet = false;
        }
    };
    return CreateStartComponent;
}());
CreateStartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-start',
        template: "\n    <div *ngIf=\"newDroplet\" class=\"pad8\">\n      Hi! Let's get started creating a droplet. The first thing to do is check that the droplet you want to create is not already in use. To do that, click here:\n    </div>\n    <div *ngIf=\"!newDroplet\" class=\"pad8\">\n      To edit your droplet simply click on the element you wish to edit on the right. To add something new click above.\n    </div>\n    <button *ngIf=\"newDroplet\" class=\"btn btn-large\" [routerLink]=\"['create1']\">Start</button>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__droplet_service__["a" /* DropletService */]) === "function" && _a || Object])
], CreateStartComponent);

var _a;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/create-start.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"!newDroplet\">Edit Droplet</h3>\n<h3 *ngIf=\"newDroplet\">Create a Droplet</h3>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div *ngIf=\"newDroplet\">\n      <button class=\"btn btn-primary\" [routerLink]=\"['create1']\">Name</button>\n      <button class=\"btn btn-primary\" [routerLink]=\"['create2']\">Description</button>\n      <button class=\"btn btn-primary\" [routerLink]=\"['create3']\">Explanations</button>\n      <button class=\"btn btn-primary\" [routerLink]=\"['create4']\">Questions</button>\n      <button class=\"btn btn-primary\" [routerLink]=\"['create5']\">Hints</button>\n      <button class=\"btn btn-primary\" [routerLink]=\"['create6']\">Tags</button>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"show-droplet col-md-6\">\n    <app-show-droplet></app-show-droplet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = (function () {
    function CreateComponent(dropletService, httpService, auth) {
        this.dropletService = dropletService;
        this.httpService = httpService;
        this.auth = auth;
        this.newDroplet = true;
        this.profile = this.auth.userProfile;
        this.role = this.auth.role;
        this.droplet = this.dropletService.getCurrentDroplet();
    }
    CreateComponent.prototype.ngOnInit = function () {
        if (this.droplet._id) {
            this.newDroplet = false;
        }
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create',
        template: __webpack_require__("../../../../../src/app/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__droplet_service__["a" /* DropletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */]) === "function" && _c || Object])
], CreateComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/create.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_start_create_start_component__ = __webpack_require__("../../../../../src/app/create/create-start/create-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_1_create_1_component__ = __webpack_require__("../../../../../src/app/create/create-1/create-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_2_create_2_component__ = __webpack_require__("../../../../../src/app/create/create-2/create-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_3_create_3_component__ = __webpack_require__("../../../../../src/app/create/create-3/create-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_4_create_4_component__ = __webpack_require__("../../../../../src/app/create/create-4/create-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_5_create_5_component__ = __webpack_require__("../../../../../src/app/create/create-5/create-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_6_create_6_component__ = __webpack_require__("../../../../../src/app/create/create-6/create-6.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_ROUTES; });







//import { AuthGuard } from './auth.guard';
var CREATE_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__create_start_create_start_component__["a" /* CreateStartComponent */], pathMatch: 'full' },
    { path: 'create1', component: __WEBPACK_IMPORTED_MODULE_1__create_1_create_1_component__["a" /* Create1Component */] },
    { path: 'create2', component: __WEBPACK_IMPORTED_MODULE_2__create_2_create_2_component__["a" /* Create2Component */] },
    { path: 'create3', component: __WEBPACK_IMPORTED_MODULE_3__create_3_create_3_component__["a" /* Create3Component */] },
    { path: 'create3/:index', component: __WEBPACK_IMPORTED_MODULE_3__create_3_create_3_component__["a" /* Create3Component */] },
    { path: 'create4', component: __WEBPACK_IMPORTED_MODULE_4__create_4_create_4_component__["a" /* Create4Component */] },
    { path: 'create4/:index', component: __WEBPACK_IMPORTED_MODULE_4__create_4_create_4_component__["a" /* Create4Component */] },
    { path: 'create5', component: __WEBPACK_IMPORTED_MODULE_5__create_5_create_5_component__["a" /* Create5Component */] },
    { path: 'create5/:index', component: __WEBPACK_IMPORTED_MODULE_5__create_5_create_5_component__["a" /* Create5Component */] },
    { path: 'create6', component: __WEBPACK_IMPORTED_MODULE_6__create_6_create_6_component__["a" /* Create6Component */] }
];
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/create.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropletRow {\n  padding: 3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-offset-1\">\n    <h1>Dashboard</h1>\n    <h3>Your Droplets</h3>\n    <div *ngFor=\"let droplet of userDroplets\" class=\"dropletRow\">\n      <div class=\"row vertical-align\">\n        <div class=\"col-md-3\">{{ droplet.name | uppercase }} </div>\n        <div class=\"col-md-4\">\n          <button class=\"btn btn-sm\" (click)=\"editDroplet(droplet._id)\">\n            <span class=\"glyphicon glyphicon-pencil\"></span>\n          </button>\n          <button class=\"btn btn-sm btn-primary\" [ngClass]=\"{'btn-danger': droplet.verified === 'review complete'}\">{{ droplet.verified }}</button>\n        </div>\n      </div>\n    </div>\n\n    <hr>\n\n    <h3>Your Review Droplets</h3>\n    <div *ngFor=\"let droplet of userReviewDroplets; let i=index;\" class=\"dropletRow\">\n      <div class=\"row vertical-align\">\n        <div class=\"col-md-3\">{{ droplet.name | uppercase }}</div>\n        <div class=\"col-md-4\">\n          <button class=\"btn btn-sm\" (click)=\"reviewDroplet(droplet)\">Review</button>\n          <button\n            class=\"btn btn-sm\"\n            mwlConfirmationPopover\n            [title]=\"title\"\n            [message]=\"message\"\n            placement=\"left\"\n            (confirm)=\"confirmClicked = true; unreviewDroplet(droplet, i)\"\n            (cancel)=\"cancelClicked = true\">\n            Resign!\n          </button>\n          <button\n            class=\"btn btn-sm btn-primary\"\n            [ngClass]=\"{'btn-danger': droplet.verified === 'review complete'}\">{{ droplet.verified }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(router, httpService, dropletService, flashMessagesService) {
        this.router = router;
        this.httpService = httpService;
        this.dropletService = dropletService;
        this.flashMessagesService = flashMessagesService;
        this.title = 'Warning!!!';
        this.message = 'Are you sure you wish to resign as editor of this droplet?';
        this.confirmClicked = false;
        this.cancelClicked = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //note that I set the new droplet here because this is first component loaded after authentication. To set the new droplet requires a user id so I can't do it earlier. If I do it in the create component it doesn't work.
        this.dropletService.setNewDroplet();
        this.httpService.getUserDroplets()
            .subscribe(function (data) {
            _this.userDroplets = data.json();
        });
        this.httpService.getUserReviewDroplets()
            .subscribe(function (data) {
            _this.userReviewDroplets = data.json();
        });
    };
    DashboardComponent.prototype.editDroplet = function (id) {
        var _this = this;
        this.httpService.getDroplet(id)
            .subscribe(function (data) {
            _this.droplet = data.json();
            _this.dropletService.setCurrentDroplet(_this.droplet);
            _this.router.navigate(['/edit', _this.droplet._id]);
        }),
            function (error) { return _this.error = error; };
        (function () { return _this.router.navigate(['/edit', _this.droplet._id]); });
    };
    DashboardComponent.prototype.unreviewDroplet = function (droplet, index) {
        var _this = this;
        droplet.verified = "submitted";
        droplet.editor = "";
        this.httpService.saveDroplet(droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
            _this.flashMessagesService.show('You have successfully resigned as editor of this droplet', { cssClass: 'alert-success', timeout: 2000 });
        }, function (error) {
            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        }, function () { return _this.userReviewDroplets.splice(index, 1); });
    };
    DashboardComponent.prototype.reviewDroplet = function (droplet) {
        this.dropletService.droplet = droplet;
        this.router.navigate(['/editor', droplet._id]);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__droplet_service__["a" /* DropletService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/droplet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__droplet__ = __webpack_require__("../../../../../src/app/droplet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropletService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DropletService = (function () {
    function DropletService(auth, flashMessagesService) {
        this.auth = auth;
        this.flashMessagesService = flashMessagesService;
        this.pushedDroplet = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DropletService.prototype.getCurrentDroplet = function () {
        if (this.droplet) {
            return this.droplet;
        }
        else {
            this.droplet = this.setNewDroplet();
        }
    };
    DropletService.prototype.setNewDroplet = function () {
        this.droplet = new __WEBPACK_IMPORTED_MODULE_1__droplet__["a" /* Droplet */]("", //name
        "", //description
        this.auth.userProfile["sub"], //user_id
        "", //editor
        new Date().toJSON(), //created_at
        new Date().toJSON(), //updated_at
        "draft", //status
        "unverified", //verified
        "", //language
        false, //open
        [], //tags
        [], //hints
        [], //explanations
        [], //questions
        {} //comments
        );
        this.setCurrentDroplet(this.droplet);
    };
    DropletService.prototype.setCurrentDroplet = function (droplet) {
        this.droplet = droplet;
        this.pushDroplet(droplet);
    };
    DropletService.prototype.updateCurrentDroplet = function (droplet) {
        this.droplet = droplet;
        this.flashMessagesService.show('Droplet updated!', { cssClass: 'alert-success', timeout: 2000 });
        this.pushDroplet(droplet);
    };
    DropletService.prototype.pushDroplet = function (droplet) {
        this.pushedDroplet.emit(droplet);
    };
    return DropletService;
}());
DropletService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], DropletService);

var _a, _b;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/droplet.service.js.map

/***/ }),

/***/ "../../../../../src/app/droplet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Droplet; });
var Droplet = (function () {
    function Droplet(name, description, user_id, editor, created_at, updated_at, status, verified, language, open, tags, hints, explanations, questions, comments, _id) {
        this.name = name;
        this.description = description;
        this.user_id = user_id;
        this.editor = editor;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.status = status;
        this.verified = verified;
        this.language = language;
        this.open = open;
        this.tags = tags;
        this.hints = hints;
        this.explanations = explanations;
        this.questions = questions;
        this.comments = comments;
        this._id = _id;
    }
    return Droplet;
}());

//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/droplet.js.map

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment-box {\n  border: 1px solid black;\n  padding: 5px;\n  border-radius: 5px;\n}\n\nhr {\n  border-top: 3px double #8c8b8b;\n}\n\n.glyphicon-remove {\n  float: right;\n}\n\n.margin-l-5 {\n  margin-left: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 col-md-offset-1\">\n<div>\n  <h2>\n    <span>Editor Page</span>\n    <button class=\"btn btn-small btn-success pull-right margin-l-5\">Verify</button>\n    <button class=\"btn btn-small btn-info pull-right\" (click)=\"alertAuthor()\">Alert Author</button>\n  </h2>\n</div>\n<p>Click on a comment bubble to leave a comment or suggestion (or edit one already existing). When you have left all your suggestions click 'notify author'.</p>\n\n<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h4>Name <span class=\"glyphicon glyphicon-comment\" (click)=\"toggleMe('name', 0)\"></span></h4>\n    <span>{{ droplet.name || \"no name\" }}</span>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"comment-box\" (click)=\"toggleMe('name', 0)\" *ngIf=\"showEdit !== 'name' + 0 && droplet.comments.name\">\n      <div><label>Comment:</label><span class=\"glyphicon glyphicon-remove\" (click)=\"removeComment(false, 'name', 0)\"></span></div>\n      <p>{{ droplet.comments.name }}</p>\n    </div>\n    <form (ngSubmit)=\"addComment(f.value, 'name', 0)\" #f=\"ngForm\" *ngIf=\"showEdit === 'name' + 0\">\n      <div class=\"form-group\">\n        <textarea\n          name=\"comment\"\n          class=\"form-control\"\n          placeholder=\"Add comment\"\n          [ngModel]=\"droplet.comments.name\">\n        </textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-xsmall\">Add Comment</button>\n    </form>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h4>Description <span class=\"glyphicon glyphicon-comment\" (click)=\"toggleMe('description', 0)\"></span></h4>\n    <span [innerHTML]=\"droplet.description\"></span>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"comment-box\" (click)=\"toggleMe('description', 0)\" *ngIf=\"showEdit !== 'description' + 0 && droplet.comments.description\">\n      <div><label>Comment:</label><span class=\"glyphicon glyphicon-remove\" (click)=\"removeComment(false, 'description', 0)\"></span></div>\n      <p>{{ droplet.comments.description }}</p>\n    </div>\n    <form (ngSubmit)=\"addComment(f.value, 'description', 0)\" #f=\"ngForm\" *ngIf=\"showEdit === 'description' + 0\">\n      <div class=\"form-group\">\n        <textarea\n          name=\"comment\"\n          class=\"form-control\"\n          placeholder=\"Add comment\"\n          [ngModel]=\"droplet.comments.description\">\n        </textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-xsmall\">Add Comment</button>\n    </form>\n  </div>\n</div>\n<hr>\n\n<h4>Explanations</h4>\n<div class=\"row\" *ngFor=\"let explanation of droplet.explanations; let i=index;\">\n  <div class=\"col-md-5\">\n    <h5>Explanation {{ i+1 }} <span class=\"glyphicon glyphicon-comment\" (click)=\"toggleMe('explanations', i)\"></span></h5>\n    <span [innerHTML]=\"explanation.content\"></span>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"comment-box\" *ngIf=\"showEdit !== 'explanations' + i && explanation.comment\">\n      <div><label>Comment:</label><span class=\"glyphicon glyphicon-remove\" (click)=\"removeComment(true, 'explanations', i)\"></span></div>\n      <p>{{ explanation.comment }}</p>\n    </div>\n    <form (ngSubmit)=\"addCommentMulti(f.value, 'explanations', i)\" #f=\"ngForm\" *ngIf=\"showEdit === 'explanations' + i\">\n      <div class=\"form-group\">\n        <textarea\n          name=\"comment\"\n          class=\"form-control\"\n          placeholder=\"Add comment\"\n          [ngModel]=\"explanation.comment\">\n        </textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-xsmall\">Add Comment</button>\n    </form>\n  </div>\n</div>\n<hr>\n\n<h4>Questions</h4>\n<div class=\"row\" *ngFor=\"let question of droplet.questions; let i=index;\">\n  <div class=\"col-md-5\">\n    <h5>Question {{ i+1 }} <span class=\"glyphicon glyphicon-comment\" (click)=\"toggleMe('questions', i)\"></span></h5>\n    <label>Prompt</label>\n    <div [innerHTML]=\"question.prompt\"></div>\n    <label>Answer</label>\n    <div>{{ question.answer }}</div>\n    <div *ngIf=\"question.filled_answer\">\n      <label>Pre-filled Answer</label>\n      <div>{{ question.filled_answer }}</div>\n    </div>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"comment-box\" *ngIf=\"showEdit !== 'questions' + i && question.comment\">\n      <div><label>Comment:</label><span class=\"glyphicon glyphicon-remove\" (click)=\"removeComment(true, 'questions', i)\"></span></div>\n      <p>{{ question.comment }}</p>\n    </div>\n    <form (ngSubmit)=\"addCommentMulti(f.value, 'questions', i)\" #f=\"ngForm\" *ngIf=\"showEdit === 'questions' + i\">\n      <div class=\"form-group\">\n        <textarea\n          name=\"comment\"\n          class=\"form-control\"\n          placeholder=\"Add comment\"\n          [ngModel]=\"question.comment\">\n        </textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-xsmall\">Add Comment</button>\n    </form>\n  </div>\n</div>\n<hr>\n\n<h4>Hints</h4>\n<div class=\"row\" *ngFor=\"let hint of droplet.hints; let i=index;\">\n  <div class=\"col-md-5\">\n    <h5>Hint {{ i+1 }} <span class=\"glyphicon glyphicon-comment\" (click)=\"toggleMe('hints', i)\"></span></h5>\n    <span [innerHTML]=\"hint.content\"></span>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"comment-box\" *ngIf=\"showEdit !== 'hints' + i && hint.comment\">\n      <div><label>Comment:</label><span class=\"glyphicon glyphicon-remove\" (click)=\"removeComment(true, 'hints', i)\"></span></div>\n      <p>{{ hint.comment }}</p>\n    </div>\n    <form (ngSubmit)=\"addCommentMulti(f.value, 'hints', i)\" #f=\"ngForm\" *ngIf=\"showEdit === 'hints' + i\">\n      <div class=\"form-group\">\n        <textarea\n          name=\"comment\"\n          class=\"form-control\"\n          placeholder=\"Add comment\"\n          [ngModel]=\"hint.comment\">\n        </textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-xsmall\">Add Comment</button>\n    </form>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h4>Tags <span class=\"glyphicon glyphicon-comment\" (click)=\"toggleMe('tags', 0)\"></span></h4>\n    <button *ngFor=\"let tag of droplet.tags; let i=index;\" type=\"button\" class=\"btn btn-default btn-sm\">{{ tag.tag }}</button>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"comment-box\" (click)=\"toggleMe('tags', 0)\" *ngIf=\"showEdit !== 'tags' + 0 && droplet.comments.tags\">\n      <div><label>Comment:</label><span class=\"glyphicon glyphicon-remove\" (click)=\"removeComment(false, 'tags', 0)\"></span></div>\n      <p>{{ droplet.comments.tags }}</p>\n    </div>\n    <form (ngSubmit)=\"addComment(f.value, 'tags', 0)\" #f=\"ngForm\" *ngIf=\"showEdit === 'tags' + 0\">\n      <div class=\"form-group\">\n        <textarea\n          name=\"comment\"\n          class=\"form-control\"\n          placeholder=\"Add comment\"\n          [ngModel]=\"droplet.comments.tags\">\n        </textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-xsmall\">Add Comment</button>\n    </form>\n  </div>\n</div>\n<hr>\n\n<!-- <h4>Tags</h4>\n<button *ngFor=\"let tag of droplet.tags; let i=index; trackBy: tracking\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"commentThis(tag, i)\">{{ tag.tag }}</button> -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditorComponent = (function () {
    function EditorComponent(router, dropletService, httpService, flashMessagesService) {
        this.router = router;
        this.dropletService = dropletService;
        this.httpService = httpService;
        this.flashMessagesService = flashMessagesService;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.droplet = this.dropletService.getCurrentDroplet();
        this.dropletService.pushedDroplet.subscribe(function (droplet) { return _this.droplet = droplet; });
        if (!this.droplet.comments) {
            this.droplet.comments = {};
        }
    };
    EditorComponent.prototype.addComment = function (comment, field, index) {
        var _this = this;
        if (!this.droplet.comments) {
            this.droplet.comments = {};
        } //some old bits don't have comments
        this.droplet.comments[field] = comment.comment;
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        }, function (error) {
            _this.error = error;
            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        }, function () { return _this.toggleMe(field, index); });
    };
    EditorComponent.prototype.addCommentMulti = function (comment, field, index) {
        var _this = this;
        this.droplet[field][index].comment = comment.comment;
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        }, function (error) {
            _this.error = error;
            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        }, function () { return _this.toggleMe(field, index); });
    };
    EditorComponent.prototype.removeComment = function (multi, field, index) {
        var _this = this;
        if (!multi) {
            this.droplet.comments[field] = "";
        }
        else {
            this.droplet[field][index].comment = "";
        }
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        }, function (error) {
            _this.error = error;
            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        });
    };
    EditorComponent.prototype.alertAuthor = function () {
        var _this = this;
        this.droplet.verified = "review complete";
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
            _this.flashMessagesService.show('Author alerted', { cssClass: 'alert-success', timeout: 2000 });
        }, function (error) {
            _this.error = error;
            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        }, function () { return _this.router.navigate(['/dashboard']); });
    };
    //Notes on toggling. In order to toggle visibility we use the field and the index, which are passed in the click handler. By adding them together we can create a variable that combines them to provide a unique id for the field, even if there are many. This is what is toggled.
    EditorComponent.prototype.toggleMe = function (field, index) {
        if (this.showEdit !== field + index) {
            this.showEdit = field + index;
        }
        else {
            this.showEdit = field;
        }
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editor/editor.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], EditorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //curious


var HttpService = (function () {
    function HttpService(http, authHttp, auth) {
        this.http = http;
        this.authHttp = authHttp;
        this.auth = auth;
        this.API_URL = process.env.url || 'http://localhost:8080';
    }
    HttpService.prototype.getReviewDroplets = function () {
        return this.authHttp.get(this.API_URL + "/api/reviewDroplets");
    };
    HttpService.prototype.getUserDroplets = function () {
        return this.authHttp.get(this.API_URL + "/api/userDroplets");
    };
    HttpService.prototype.getUserReviewDroplets = function () {
        return this.authHttp.get(this.API_URL + "/api/userReviewDroplets");
    };
    HttpService.prototype.getDroplet = function (id) {
        return this.http.get(this.API_URL + "/api/droplets/" + id);
    };
    HttpService.prototype.searchDroplets = function (query) {
        return this.http.get(this.API_URL + "/api/droplets?search=" + query);
    };
    HttpService.prototype.saveDroplet = function (droplet) {
        if (droplet._id) {
            droplet.updated_at = new Date().toJSON();
            droplet.status = this.checkStatus(droplet);
            return this.put(droplet);
        }
        return this.post(droplet);
    };
    HttpService.prototype.post = function (droplet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this
            .authHttp
            .post(this.API_URL + "/api/droplets", JSON.stringify(droplet), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.put = function (droplet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var url = this.API_URL + "/api/droplets";
        return this
            .authHttp
            .post(url, JSON.stringify(droplet), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpService.prototype.checkStatus = function (droplet) {
        if (droplet.name &&
            droplet.description &&
            (droplet.explanations.length > 0) &&
            (droplet.questions.length > 4) &&
            (droplet.tags.length > 2)) {
            return "complete";
        }
        else {
            return "draft";
        }
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* Auth */]) === "function" && _c || Object])
], HttpService);

var _a, _b, _c;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/http.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".details {\n  color: #fff;\n  margin-right: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Deeply Open</a>\n  <ul class=\"nav navbar-nav\" *ngIf=\"auth.isAuthenticated()\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard<span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" (click)=\"goToCreate()\">Create<span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" [routerLink]=\"['/review']\">Review<span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" [routerLink]=\"['/api']\">API<span class=\"sr-only\">(current)</span></a>\n    </li>\n  </ul>\n  <div class=\"pull-right pad8\">\n    <li class=\"btn btn-primary btn-margin\" (click)=\"auth.login()\" *ngIf=\"!auth.isAuthenticated()\">Log In | Sign Up</li>\n    <li class=\"btn btn-primary btn-margin\" (click)=\"auth.logout()\" *ngIf=\"auth.isAuthenticated()\">Log Out</li>\n  </div>\n  <div *ngIf=\"auth.isAuthenticated() && profile.role\" class=\"details pull-right vertical-align\">\n    <h5>Signed in as: {{ profile.userProfile.nickname }} | role: {{ profile.role }}</h5>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(auth, router, dropletService) {
        this.auth = auth;
        this.router = router;
        this.dropletService = dropletService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.pushedProfile.subscribe(function (profile) { return _this.profile = profile; });
    };
    NavbarComponent.prototype.goToCreate = function () {
        this.dropletService.setNewDroplet();
        this.router.navigate(['/create']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__droplet_service__["a" /* DropletService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewComponent = (function () {
    function ReviewComponent(httpService, dropletService, auth, flashMessagesService, router) {
        this.httpService = httpService;
        this.dropletService = dropletService;
        this.auth = auth;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profile = this.auth.userProfile;
        this.role = this.auth.role;
        this.httpService.getReviewDroplets()
            .subscribe(function (data) {
            _this.reviewDroplets = data.json();
        }, function (error) {
            _this.flashMessagesService.show('Could not retrieve review droplets', { cssClass: 'alert-success', timeout: 2000 });
        });
    };
    ReviewComponent.prototype.addEditor = function (droplet) {
        var _this = this;
        droplet.editor = this.profile.sub;
        droplet.verified = "under review";
        this.httpService.saveDroplet(droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        }, function (error) {
            _this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        });
    };
    ReviewComponent.prototype.reviewDroplet = function (droplet) {
        this.router.navigate(['/editor', droplet._id]);
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review',
        template: "\n    <h3>Droplets for Review</h3>\n    <p>Draft droplets ready for review will show up here. Only people who have the right to edit droplets can select them. If you would like this role please contact us immediately.</p>\n    <div *ngFor=\"let droplet of reviewDroplets\">\n      <div class=\"row pad vertical-align\">\n          <div class=\"col-md-3\">{{ droplet.name | uppercase }}</div>\n          <div class=\"col-md-4\" *ngIf=\"!droplet.editor && role !== 'user'\">\n            <button class=\"btn btn-primary btn-xsmall\" (click)=\"addEditor(droplet)\">Review this droplet</button>\n          </div>\n          <div class=\"col-md-2\"><button class=\"btn btn-success btn-xsmall\" *ngIf=\"droplet.editor === profile.sub\" (click)=\"reviewDroplet(droplet)\">Go to Review</button></div>\n      </div>\n    </div>\n\n  ",
        styles: ["\n    .pad {\n      margin-bottom: 3px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__droplet_service__["a" /* DropletService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* Auth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _e || Object])
], ReviewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/review.component.js.map

/***/ }),

/***/ "../../../../../src/app/show-droplet/show-droplet.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h4>\n      <span class=\"label label-primary\">{{ droplet.status || \"draft\" }}</span>\n      <span class=\"label label-danger\">{{ droplet.open || \"private\" }}</span>\n      <span class=\"label label-warning\">{{ droplet.verified || \"unverified\" }}</span>\n    </h4>\n    <button *ngIf=\"droplet.verified === 'unverified' && droplet.status ==='complete'\" class=\"btn btn-small\" (click)=\"submitForReview('submit')\">Submit for Review</button>\n    <button *ngIf=\"droplet.verified === 'under review' && droplet.status ==='complete'\" class=\"btn btn-small\" (click)=\"submitForReview('resubmit')\">Resubmit for Review</button>\n    <div class=\"droplet-name\" (click)=\"editThis('name')\">{{ droplet.name || \"no name\" }}\n      <div class=\"progress-marker\" [class.complete]=\"droplet.name\">\n      </div>\n    </div>\n    <div *ngIf=\"droplet.comments && droplet.comments.name\" class=\"left15 comments col-md-10\">\n      <label>Editor comment:</label>\n      <div>{{ droplet.comments.name }}</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h4>Description\n      <div class=\"progress-marker\" [class.complete]=\"droplet.description\"></div>\n    </h4>\n    <div class=\"row\">\n      <div class=\"col-md-10\" (click)=\"editThis('description')\">\n        <span [innerHTML]=\"droplet.description\"></span>\n      </div>\n    </div>\n    <div *ngIf=\"droplet.comments && droplet.comments.description\" class=\"left15 comments col-md-10\">\n      <label>Editor comment:</label>\n      <div>{{ droplet.comments.description }}</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h4>Explanations\n      <div class=\"progress-marker\" [class.complete]=\"droplet.explanations.length > 0\"></div>\n    </h4>\n    <button class=\"btn btn-sm\" [routerLink]=\"['/create/create3']\">Add New</button>\n    <div *ngIf=\"droplet.explanations.length < 1\">None</div>\n    <div class=\"row\" *ngFor=\"let explanation of droplet.explanations; let i=index; trackBy: tracking\">\n      <div class=\"explanation col-md-10\" (click)=\"selectExplanation(i)\">\n        <span (click)=\"removeElement(i, 'explanation')\" class=\"pull-right glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n        <span [innerHTML]=\"explanation.content || empty\"></span>\n      </div>\n      <div *ngIf=\"explanation.comment\" class=\"comments col-md-10\">\n        <label>Editor comment:</label>\n        <div>{{ explanation.comment }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h4>Questions\n      <div class=\"progress-marker\" [class.complete]=\"droplet.questions.length > 0\"></div>\n      <div class=\"progress-marker\" [class.complete]=\"droplet.questions.length > 1\"></div>\n      <div class=\"progress-marker\" [class.complete]=\"droplet.questions.length > 2\"></div>\n      <div class=\"progress-marker\" [class.complete]=\"droplet.questions.length > 3\"></div>\n      <div class=\"progress-marker\" [class.complete]=\"droplet.questions.length > 4\"></div>\n    </h4>\n    <button class=\"btn btn-sm\" [routerLink]=\"['/create/create4']\">Add New</button>\n    <div *ngIf=\"droplet.questions.length < 1\">None</div>\n    <div class=\"row\" *ngFor=\"let question of droplet.questions; let i=index; trackBy: tracking\">\n      <div class=\"question col-md-10\" (click)=\"selectQuestion(i)\">\n        <div>\n          <span (click)=\"removeElement(i, 'question')\" class=\"pull-right glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n          <h5>Prompt:</h5>\n          <span [innerHTML]=\"question.prompt || empty\"></span>\n        </div>\n        <hr>\n        <h5>Answer:</h5>\n        <div>{{ question.answer || \"empty\" }}</div>\n        <hr>\n        <h5>Filled Answer:</h5>\n        <div>{{ question.filledAnswer || \"empty\" }}</div>\n      </div>\n      <div *ngIf=\"question.comment\" class=\"comments col-md-10\">\n        <label>Editor comment:</label>\n        <div>{{ question.comment }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h4>Hints (optional)</h4>\n    <button class=\"btn btn-sm\" [routerLink]=\"['/create/create5']\">Add New</button>\n    <div *ngIf=\"droplet.hints.length < 1\">None</div>\n    <div class=\"row\" *ngFor=\"let hint of droplet.hints; let i=index; trackBy: tracking\">\n      <div class=\"hint col-md-10\" (click)=\"selectHint(i)\">\n        <span (click)=\"removeElement(i, 'hint')\" class=\"pull-right glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n        <span [innerHTML]=\"hint.content || empty\"></span>\n      </div>\n      <div *ngIf=\"hint.comment\" class=\"comments col-md-10\">\n        <label>Editor comment:</label>\n        <div>{{ hint.comment }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h4>Tags\n      <div class=\"progress-marker\" [class.complete]=\"droplet.tags.length > 0\"></div>\n      <div class=\"progress-marker\" [class.complete]=\"droplet.tags.length > 1\"></div>\n      <div class=\"progress-marker\" [class.complete]=\"droplet.tags.length > 2\"></div>\n    </h4>\n    <button class=\"btn btn-sm\" [routerLink]=\"['/create/create6']\">Add New</button>\n    <div *ngIf=\"droplet.tags.length < 1\">None</div>\n    <br>\n    <button *ngFor=\"let tag of droplet.tags; let i=index; trackBy: tracking\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"removeElement(i, 'tag')\">\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> {{ tag.tag }}\n    </button>\n    <div *ngIf=\"droplet.comments && droplet.comments.tags\" class=\"left15 comments col-md-10\">\n      <label>Editor comment:</label>\n      <div>{{ droplet.comments.tags }}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/show-droplet/show-droplet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__droplet_service__ = __webpack_require__("../../../../../src/app/droplet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowDropletComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowDropletComponent = (function () {
    function ShowDropletComponent(dropletService, router, httpService) {
        this.dropletService = dropletService;
        this.router = router;
        this.httpService = httpService;
    }
    ShowDropletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.droplet = this.dropletService.getCurrentDroplet();
        this.dropletService.pushedDroplet.subscribe(function (droplet) { return _this.droplet = droplet; });
    };
    ShowDropletComponent.prototype.removeElement = function (index, element) {
        var _this = this;
        var dummy = this.droplet; //use dummy to ensure droplet is only updated after response from server.
        if (element === "explanation") {
            this.router.navigate(['create/create3']);
            dummy.explanations.splice(index, 1);
        }
        else if (element === "question") {
            this.router.navigate(['create/create4']);
            dummy.questions.splice(index, 1);
        }
        else if (element === "hint") {
            this.router.navigate(['create/create5']);
            dummy.hints.splice(index, 1);
        }
        else if (element === "tag") {
            dummy.tags.splice(index, 1);
        }
        this.httpService.saveDroplet(dummy)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        });
    };
    ShowDropletComponent.prototype.editThis = function (field) {
        if (field === "description") {
            this.router.navigate(['create/create2']);
        }
        else if (field === "name") {
            this.router.navigate(['create/create1']);
        }
    };
    ShowDropletComponent.prototype.selectExplanation = function (index) {
        this.router.navigate(['create/create3', index]);
    };
    ShowDropletComponent.prototype.selectQuestion = function (index) {
        this.router.navigate(['create/create4', index]);
    };
    ShowDropletComponent.prototype.selectHint = function (index) {
        this.router.navigate(['create/create5', index]);
    };
    ShowDropletComponent.prototype.submitForReview = function (submissionType) {
        var _this = this;
        if (submissionType === "submit") {
            this.droplet.verified = "submitted";
        }
        else if (submissionType === "resubmit") {
            this.droplet.verified = "resubmitted";
        }
        this.httpService.saveDroplet(this.droplet)
            .subscribe(function (droplet) {
            _this.dropletService.updateCurrentDroplet(droplet);
        });
    };
    ShowDropletComponent.prototype.tracking = function (index, item) {
        return item._id;
    };
    return ShowDropletComponent;
}());
ShowDropletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show-droplet',
        template: __webpack_require__("../../../../../src/app/show-droplet/show-droplet.component.html"),
        styles: ["\n    .explanation, .question, .hint {\n      background-color: rgba(255, 235, 59, 0.54);\n      border: 1px solid transparent;\n      border-radius: 4px;\n      padding: 10px;\n      margin-bottom: 5px;\n      margin-left: 15px;\n    }\n    .droplet-name {\n      font-size: 24px;\n      font-weight: bold;\n    }\n    .progress-marker {\n      margin-left: 5px;\n      display: inline-block;\n      background-color: #d9534f;\n\t    border-radius: 50%;\n\t    width: 12px;\n\t    height: 12px;\n    }\n    .complete {\n      background-color: green;\n    }\n    .btn {\n      margin-bottom: 10px;\n    }\n    .comments {\n      border: 1px solid black;\n      padding: 5px;\n      margin: 0 0 10px 15px;\n    }\n    .left15 {\n      margin-left: 0;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__droplet_service__["a" /* DropletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__droplet_service__["a" /* DropletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object])
], ShowDropletComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/show-droplet.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Imagine if all the world's knowledge was organised for learning, not for reading.\n</p>\n\n<p>\n  Imagine if it was free to access and use.\n</p>\n\n<p>\n  That is Deeply Open. Contribute or build your own learning apps on our platform.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__("../../../../../src/app/index.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/jonathonmartin/Code/dong2/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map