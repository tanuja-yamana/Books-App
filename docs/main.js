(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yamana.tanuja\OneDrive - Accenture\Desktop\TrainingHONPractice\Angular\books-app\src\main.ts */"zUnb");


/***/ }),

/***/ "6VMB":
/*!***************************************************************!*\
  !*** ./src/app/modules/new-books/new-books-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NewBooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBooksRoutingModule", function() { return NewBooksRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class NewBooksRoutingModule {
}
NewBooksRoutingModule.ɵfac = function NewBooksRoutingModule_Factory(t) { return new (t || NewBooksRoutingModule)(); };
NewBooksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewBooksRoutingModule });
NewBooksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewBooksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "7TgW":
/*!****************************************************************!*\
  !*** ./src/app/modules/landing-page/landing-page.component.ts ***!
  \****************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { EventEmitter } from 'stream';
class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 8, vars: 0, consts: [[1, "landing-page-container", "d-flex", "justify-content-center", "align-items-center"], [1, "position-relative", "w-100", "h-100"], [1, "landing-page-title"], [1, "landingPageImage"], ["src", "assets/pic3.jpg", 1, "img-fluid"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Book Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   .landing-page-container[_ngcontent-%COMP%] {\n  height: 91vh;\n}\n[_nghost-%COMP%]   .landing-page-container[_ngcontent-%COMP%]   .landingPageImage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 99%;\n}\n[_nghost-%COMP%]   .landing-page-container[_ngcontent-%COMP%]   .landingPageImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n  margin-top: 0.5rem !important;\n}\n[_nghost-%COMP%]   .landing-page-container[_ngcontent-%COMP%]   .landing-page-title[_ngcontent-%COMP%] {\n  color: darkred;\n  font-size: 2.5rem;\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  line-height: 2.5rem;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);\n}\n@media (min-width: 2560px) {\n  [_nghost-%COMP%]   .landing-page-container[_ngcontent-%COMP%]   .landing-page-title[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    line-height: 4rem;\n    top: 25%;\n  }\n  [_nghost-%COMP%]   .landing-page-container[_ngcontent-%COMP%]   .landingPageImage[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBQU47QUFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUFSO0FBSUk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFGTjtBQUtJO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxRQUFBO0VBSE47RUFNSTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5sYW5kaW5nLXBhZ2UtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogOTF2aDtcclxuXHJcbiAgICAubGFuZGluZ1BhZ2VJbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDk5JTtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGFuZGluZy1wYWdlLXRpdGxlIHtcclxuICAgICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAgICAgLmxhbmRpbmctcGFnZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIHRvcDogMjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGFuZGluZ1BhZ2VJbWFnZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Ap20":
/*!************************************************************!*\
  !*** ./src/app/modules/about-page/about-page.component.ts ***!
  \************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_book_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/book-list.service */ "oJi4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AboutPageComponent_ng_container_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bookCategory_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bookCategory_r1);
} }
function AboutPageComponent_ng_container_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutPageComponent_ng_container_11_ng_container_4_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.editedBook = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_ng_container_11_ng_container_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.updateBook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_ng_container_11_ng_container_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.editedBook);
} }
function AboutPageComponent_ng_container_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_ng_container_11_ng_container_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.startEditing(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_ng_container_11_ng_container_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deleteBook(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AboutPageComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutPageComponent_ng_container_11_ng_container_3_Template, 3, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AboutPageComponent_ng_container_11_ng_container_4_Template, 7, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AboutPageComponent_ng_container_11_ng_container_5_Template, 6, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editModeIndex !== i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editModeIndex === i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editModeIndex !== i_r2);
} }
class AboutPageComponent {
    constructor(bookListService) {
        this.bookListService = bookListService;
        this.bookCategoryList = [];
        this.newBook = '';
        this.editModeIndex = null;
        this.editedBook = '';
    }
    ngOnInit() {
        this.loadBooks();
    }
    loadBooks() {
        this.bookCategoryList = this.bookListService.getBooks();
    }
    addBook() {
        if (this.newBook.trim()) {
            this.bookListService.addBook(this.newBook);
            this.newBook = '';
            this.loadBooks();
        }
    }
    deleteBook(index) {
        this.bookListService.deleteBook(index);
        this.loadBooks();
    }
    startEditing(index) {
        this.editModeIndex = index;
        this.editedBook = this.bookCategoryList[index];
    }
    updateBook() {
        if (this.editModeIndex !== null && this.editedBook.trim()) {
            this.bookListService.updateBook(this.editModeIndex, this.editedBook);
            this.editModeIndex = null;
            this.editedBook = '';
            this.loadBooks();
        }
    }
    cancelEdit() {
        this.editModeIndex = null;
        this.editedBook = '';
    }
    ngOnDestroy() {
        this.editModeIndex = null;
        this.editedBook = '';
        this.newBook = '';
        this.bookCategoryList = [];
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_list_service__WEBPACK_IMPORTED_MODULE_1__["BookListService"])); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 12, vars: 2, consts: [[1, "content"], [1, "addBook"], ["type", "text", "placeholder", "Add a new book", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "bi", "bi-plus"], [1, "container"], [1, "list-items"], [4, "ngFor", "ngForOf"], [1, "book-item"], [4, "ngIf"], [1, "edit-section"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "bi", "bi-check-lg"], [1, "bi", "bi-trash3"], [1, "action-buttons"], [1, "bi", "bi-pencil"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This website contains a list of available Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The list of available category of books are here and you can add a new book category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutPageComponent_Template_input_ngModelChange_6_listener($event) { return ctx.newBook = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_button_click_7_listener() { return ctx.addBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AboutPageComponent_ng_container_11_Template, 6, 3, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookCategoryList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: #3d3b3b;\n  color: #f1f1f155;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .addBook[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .addBook[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #f8f5f5f1;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   h2[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #c23a3a;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   h3[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #efccccd8;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%] {\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .edit-section[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .edit-section[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .edit-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .edit-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .edit-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .edit-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #f8f5f5f1;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #f8f5f5f1;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  margin-top: 1rem;\n  max-width: 100%;\n  max-height: 80vh;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: beige;\n  display: flex;\n  flex-direction: column;\n  padding: 1.25rem;\n  max-height: 100vh;\n  overflow-y: auto;\n  height: 91vh;\n  padding-top: 0;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n[_nghost-%COMP%]   .addBook[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  max-width: 30rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  border-radius: 0.375rem;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);\n  padding: 0.4rem 0.6rem;\n}\n[_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  max-width: 26rem;\n  padding: 0.4rem 0.6rem;\n  border: none;\n  border-radius: 0.25rem;\n  font-size: 1rem;\n  outline: none;\n  background-color: #fff3e0;\n  margin-right: 0.4rem;\n}\n[_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #333;\n  transition: color 0.3s;\n}\n[_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 2.5rem !important;\n  color: brown;\n  font-size: 1.8rem;\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #444;\n  font-size: 1.3rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #fff3e0;\n  border-radius: 0.375rem;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);\n  padding: 0.4rem 1rem;\n  list-style-type: none;\n}\n[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .edit-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  gap: 0.375rem;\n}\n[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .edit-section[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   .list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .book-item[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  margin-left: auto;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #333;\n  transition: color 0.3s;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n@media screen and (min-width: 2560px) {\n  [_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 2rem;\n    margin-top: 2rem;\n    padding: 0 2rem;\n    overflow-x: hidden;\n  }\n  [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    overflow-x: hidden;\n  }\n  [_nghost-%COMP%]   .addBook[_ngcontent-%COMP%] {\n    max-width: 50rem;\n    width: 25rem;\n    padding: 1rem 1.2rem;\n    min-height: 80px;\n  }\n  [_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  [_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder {\n    font-size: 1.8rem;\n  }\n  [_nghost-%COMP%]   .addBook[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  [_nghost-%COMP%]   .list-items[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 2rem;\n    justify-content: center;\n    margin: 0 2rem;\n  }\n  [_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 35rem;\n    font-size: 2rem;\n    min-height: 100px;\n  }\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    font-size: 3.5rem;\n  }\n  [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUROO0FBSUk7RUFDRSxzQkFBQTtBQUZOO0FBSU07RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBRlI7QUFLTTtFQUNFLGdCQUFBO0FBSFI7QUFNTTtFQUNFLGdCQUFBO0FBSlI7QUFRSTtFQUNFLGNBQUE7QUFOTjtBQVNJO0VBQ0UsZ0JBQUE7QUFQTjtBQVVJO0VBQ0Usc0JBQUE7QUFSTjtBQVVNO0VBQ0UsZ0JBQUE7QUFSUjtBQVdVO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQVRaO0FBWVU7RUFDRSxnQkFBQTtBQVZaO0FBYVU7RUFDRSxnQkFBQTtBQVhaO0FBZVE7RUFDRSxnQkFBQTtBQWJWO0FBZ0JRO0VBQ0UsZ0JBQUE7QUFkVjtBQW9CRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFsQko7QUFvQkk7RUFDRSxhQUFBO0FBbEJOO0FBc0JFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQU1BLHdCQUFBO0VBQ0EscUJBQUE7QUF6Qko7QUFvQkk7RUFDRSxhQUFBO0FBbEJOO0FBeUJFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtBQXZCSjtBQXlCSTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUF2Qk47QUEwQkk7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF4Qk47QUEwQk07RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUF4QlI7QUEyQk07RUFDRSxjQUFBO0FBekJSO0FBOEJFOztFQUVFLGtCQUFBO0FBNUJKO0FBK0JFO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQTdCSjtBQWdDRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBOUJKO0FBaUNFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQS9CSjtBQWlDSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0RBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBL0JOO0FBaUNNO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBL0JSO0FBaUNRO0VBQ0UsT0FBQTtBQS9CVjtBQWtDUTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBaENWO0FBa0NVO0VBQ0UsT0FBQTtFQUNBLGVBQUE7QUFoQ1o7QUFvQ1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBbENWO0FBd0NFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF0Q0o7QUF3Q0k7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUF0Q047QUF5Q0k7RUFDRSxjQUFBO0FBdkNOO0FBMkNFO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQXpDSjtFQTRDRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUExQ0o7RUE2Q0U7SUFDRSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0VBM0NKO0VBNkNJO0lBQ0UsaUJBQUE7RUEzQ047RUE2Q007SUFDRSxpQkFBQTtFQTNDUjtFQStDSTtJQUNFLGVBQUE7RUE3Q047RUFpREU7SUFDRSxxQ0FBQTtJQUNBLFNBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7RUEvQ0o7RUFrREU7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBaERKO0VBbURFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQWpESjtFQW9ERTtJQUNFLGVBQUE7RUFsREo7RUFxREU7SUFDRSxlQUFBO0VBbkRKO0FBQ0YiLCJmaWxlIjoiYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNiM2I7XHJcbiAgICAgIGNvbG9yOiAjZjFmMWYxNTU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZEJvb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG5cclxuICAgICAgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGNvbG9yOiAjZWNlMGUwYjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiBpIHtcclxuICAgICAgICBjb2xvcjogI2VjZTBlMGI1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246aG92ZXIgaSB7XHJcbiAgICAgICAgY29sb3I6ICNmOGY1ZjVmMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICNjMjNhM2E7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogI2VmY2NjY2Q4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LWl0ZW1zIGxpIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHJcbiAgICAgIC5ib29rLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAjZWNlMGUwYjU7XHJcblxyXG4gICAgICAgIC5lZGl0LXNlY3Rpb24ge1xyXG4gICAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgICAgY29sb3I6ICNlY2UwZTBiNTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24gaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWNlMGUwYjU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y4ZjVmNWYxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbi1idXR0b25zIGJ1dHRvbiBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjZWNlMGUwYjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9uLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNmOGY1ZjVmMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGhlaWdodDogOTF2aDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYWRkQm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2UwO1xyXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjA2MjVyZW0gMC4xODc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjZyZW07XHJcblxyXG4gICAgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICAgICAgbWF4LXdpZHRoOiAyNnJlbTtcclxuICAgICAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzZTA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIGkge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMixcclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBicm93bjtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAubGlzdC1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNlMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4wNjI1cmVtIDAuMTg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gICAgICAuYm9vay1pdGVtIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lZGl0LXNlY3Rpb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZ2FwOiAwLjM3NXJlbTtcclxuXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDAuMzc1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIGkge1xyXG4gICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NjBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICAgIGdhcDogMnJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZEJvb2sge1xyXG4gICAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG4gICAgICB3aWR0aDogMjVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMS4ycmVtO1xyXG4gICAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgICAgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuXHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LWl0ZW1zIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgICAgZ2FwOiAycmVtO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICB3aWR0aDogMzVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BGIG":
/*!*******************************************************************!*\
  !*** ./src/app/components/more-details/more-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: MoreDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreDetailsComponent", function() { return MoreDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_modules_cart_services_cart_quantity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/cart/services/cart-quantity.service */ "xg83");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_cart_components_cart_quantity_cart_quantity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/cart/components/cart-quantity/cart-quantity.component */ "HYjV");






function MoreDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cart-quantity", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoreDetailsComponent_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onBuyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " BUY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PREVIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Subtitle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ISBN13:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "URL:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Chapter 2:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoreDetailsComponent_div_2_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openChapter2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Click for Chapter 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Chapter5:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoreDetailsComponent_div_2_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openChapter5(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Click for Chapter 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.book.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bookId", ctx_r0.book.isbn13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.buyButtonDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.isbn13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.book.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.book.url);
} }
function MoreDetailsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Book not found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MoreDetailsComponent {
    constructor(route, cartQuantityService) {
        this.route = route;
        this.cartQuantityService = cartQuantityService;
        this.isbn13 = '';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buyButtonDisabled = false;
    }
    ngOnInit() {
        if (!this.book) {
            this.isbn13 = this.route.snapshot.paramMap.get('isbn13') || '';
            this.fetchBookDetails();
        }
    }
    fetchBookDetails() {
        const allBooks = JSON.parse(localStorage.getItem('allBooks') || '[]');
        this.book = allBooks.find((b) => b.isbn13 === this.isbn13);
        if (this.book && !this.book.buyClicked) {
            this.book.buyClicked = false;
        }
    }
    openChapter2() {
        window.open('https://itbook.store/files/9781617294136/chapter2.pdf', '_blank');
    }
    openChapter5() {
        window.open('https://itbook.store/files/9781617294136/chapter5.pdf', '_blank');
    }
    // Adding specific book to cart
    onBuyClick() {
        var _a;
        const bookDetails = {
            bookImage: (_a = this.book) === null || _a === void 0 ? void 0 : _a.image,
            bookId: this.book.isbn13,
            title: this.book.title,
            price: parseFloat(this.book.price.replace('$', '')),
            quantity: this.cartQuantityService.getQuantity(this.book.isbn13)
        };
        this.cartQuantityService.addToCart(bookDetails);
        this.addToCart.emit(bookDetails);
        this.buyButtonDisabled = true;
        this.book.buyClicked = true;
    }
    updateBuyButtonState() {
        const quantity = this.cartQuantityService.getQuantity(this.book.isbn13);
        if (quantity === 1) {
            this.buyButtonDisabled = false;
        }
    }
    ngOnDestroy() {
        this.buyButtonDisabled = undefined;
        this.isbn13 = '';
    }
}
MoreDetailsComponent.ɵfac = function MoreDetailsComponent_Factory(t) { return new (t || MoreDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_cart_services_cart_quantity_service__WEBPACK_IMPORTED_MODULE_2__["CartQuantityService"])); };
MoreDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoreDetailsComponent, selectors: [["app-more-details"]], inputs: { book: "book" }, outputs: { close: "close", addToCart: "addToCart" }, decls: 5, vars: 3, consts: [[1, "title"], ["class", "card ", 4, "ngIf", "ngIfElse"], ["notFound", ""], [1, "card"], [1, "card-image"], [1, "image-container"], [1, "card-img-top", 3, "src", "alt"], [3, "bookId"], [1, "button-container"], [1, "btn-buy", 3, "disabled", "click"], [1, "btn-preview"], [1, "card-body"], [1, "table", "table-striped"], ["target", "_blank", 3, "href"], [1, "btn", 3, "click"], [1, "text-center"]], template: function MoreDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoreDetailsComponent_div_2_Template, 58, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MoreDetailsComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _modules_cart_components_cart_quantity_cart_quantity_component__WEBPACK_IMPORTED_MODULE_4__["CartQuantityComponent"]], styles: ["[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fcfbfbf1;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%], .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%], .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #e0e0e0;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%] {\n  background-color: #5c4d91;\n  color: white;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%] {\n  background-color: #444;\n  color: white;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd), .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd), [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd), .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd), .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd), .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd), .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd), .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #2c2c2c;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #8080c8;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .dark-theme.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .dark-theme.book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .dark-theme   .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .dark-theme   .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .book-card   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .book-card   .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color: #8080c8;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-top: 0.8rem !important;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-align: center;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  gap: 2rem;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  margin: 1rem;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  flex: 0 0 20%;\n  max-width: 20%;\n  height: 80%;\n  position: relative;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background-color: #eee;\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.9375rem;\n  width: 100%;\n  background-color: #bfb4f7;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.9375rem;\n  width: 100%;\n  background-color: #f0eded;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 0.625rem;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 1rem;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #eee;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-size: 1rem;\n  vertical-align: top;\n  word-wrap: break-word;\n  text-align: left;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 20%;\n  white-space: normal;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: 50%;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: inherit;\n  text-decoration: none;\n  color: black;\n  padding-left: 0;\n  border-radius: 0.3125rem;\n  transition: background-color 0.3s;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #52528d;\n  text-decoration: underline !important;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: inherit;\n  padding-left: 0;\n  border: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color: #52528d;\n  text-decoration: underline;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding: 0.5rem;\n  font-size: 0.975rem;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 25%;\n  height: 80%;\n  position: relative;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  margin-bottom: 1rem;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  width: 100%;\n  background-color: #dcbef7;\n  margin-bottom: 0.5rem;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  width: 100%;\n  background-color: #e0e0e0;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 0.5rem;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 0.5rem;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n  font-size: 0.875rem;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd), .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #eee;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.45rem;\n  font-size: 1rem;\n  vertical-align: top;\n  word-wrap: break-word;\n  text-align: left;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 20%;\n  white-space: normal;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: 50%;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: inherit;\n  text-decoration: none;\n  color: black;\n  padding-left: 0;\n  border-radius: 0.3125rem;\n  transition: background-color 0.3s;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #52528d;\n  text-decoration: underline !important;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: inherit;\n  padding-left: 0;\n  border: none;\n}\n.book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color: #52528d;\n  text-decoration: underline;\n}\n.more-details[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .more-details   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #eef2f5;\n  border-radius: 10px;\n}\n.more-details[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], .more-details   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n}\n.more-details[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .more-details   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%] {\n  background-color: #bfb4f7;\n}\n.more-details[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .more-details   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%] {\n  background-color: #f0eded;\n}\n@media screen and (min-width: 1024px) and (max-width: 1439px) {\n  .book-card[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-bottom: 0;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    font-size: 0.5rem;\n    margin: 0;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 1rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n    padding: 0.375rem 0.25rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding-left: 0.8rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.35rem;\n    font-size: 0.6rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n@media screen and (min-width: 1440px) and (max-width: 2559px) {\n  .book-card[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 0;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    font-size: 0.5rem;\n    margin: 0;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 1rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n    padding: 0.375rem 0.25rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding-left: 0.8rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.35rem;\n    font-size: 0.6rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n@media screen and (min-width: 2560px) {\n  [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    gap: 3rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 1rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 1rem 0.9rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    padding: 1rem;\n    font-size: 1.125rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n    flex: 0 0 28%;\n    max-width: 28%;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 1rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-buy[_ngcontent-%COMP%], .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-preview[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.875rem 1.25rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 1.525rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    font-size: 1.525rem;\n  }\n  .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .book-card[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .book-card   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3JlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxnQkFBQTtBQUROO0FBSUk7O0VBRUUsc0JBQUE7RUFDQSxjQUFBO0FBRk47QUFLUTs7RUFDRSxzQkFBQTtBQUZWO0FBTVU7O0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBSFo7QUFNVTs7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFIWjtBQVVVOztFQUNFLHlCQUFBO0FBUFo7QUFVVTs7RUFDRSxnQkFBQTtBQVBaO0FBU1k7O0VBQ0UsZ0JBQUE7QUFOZDtBQVNZOztFQUNFLGdCQUFBO0FBTmQ7QUFRYzs7RUFDRSxjQUFBO0FBTGhCO0FBU1k7O0VBQ0UsZ0JBQUE7QUFOZDtBQVFjOztFQUNFLGNBQUE7QUFMaEI7QUFjRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWko7QUFlRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQWVJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFiTjtBQWVNO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQWJSO0FBaUJRO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWZWO0FBa0JRO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFoQlY7QUFvQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBbEJSO0FBc0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFwQk47QUFzQk07RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXBCUjtBQXNCUTtFQUNFLHNCQUFBO0FBcEJWO0FBdUJRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFyQlY7QUF1QlU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFyQlo7QUF3QlU7RUFDRSxVQUFBO0FBdEJaO0FBeUJVO0VBQ0UseUJBQUE7QUF2Qlo7QUEwQlU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0FBeEJaO0FBMEJZO0VBQ0UsY0FBQTtFQUNBLHFDQUFBO0FBeEJkO0FBNEJVO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQTFCWjtBQTRCWTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQTFCZDtBQW9DRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBakNKO0FBbUNJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFqQ047QUFtQ007RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBakNSO0FBcUNRO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQW5DVjtBQXNDUTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBcENWO0FBd0NNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQXRDUjtBQTBDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBeENOO0FBMENNO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXhDUjtBQTBDUTtFQUNFLHNCQUFBO0FBeENWO0FBMkNRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBekNWO0FBMkNVO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBekNaO0FBNENVO0VBQ0UsVUFBQTtBQTFDWjtBQTZDVTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7QUEzQ1o7QUE2Q1k7RUFDRSxjQUFBO0VBQ0EscUNBQUE7QUEzQ2Q7QUErQ1U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBN0NaO0FBK0NZO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FBN0NkO0FBdURFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQXBESjtBQXVETTtFQUNFLHlCQUFBO0FBckRSO0FBeURRO0VBQ0UseUJBQUE7QUF2RFY7QUEwRFE7RUFDRSx5QkFBQTtBQXhEVjtBQStEQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtFQTdESjtFQWdFRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFNBQUE7RUE5REo7RUFnRUk7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQTlETjtFQWdFTTtJQUNFLG1CQUFBO0VBOURSO0VBa0VROztJQUVFLGlCQUFBO0lBQ0EseUJBQUE7RUFoRVY7RUFxRUk7SUFDRSxvQkFBQTtFQW5FTjtFQXFFTTtJQUNFLGlCQUFBO0VBbkVSO0VBcUVRO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQW5FVjtFQXFFVTs7SUFFRSxpQkFBQTtFQW5FWjtBQUNGO0FBMkVBO0VBRUk7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUExRUo7RUE2RUU7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxTQUFBO0VBM0VKO0VBNkVJO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUEzRU47RUE2RU07SUFDRSxtQkFBQTtFQTNFUjtFQStFUTs7SUFFRSxpQkFBQTtJQUNBLHlCQUFBO0VBN0VWO0VBa0ZJO0lBQ0Usb0JBQUE7RUFoRk47RUFrRk07SUFDRSxpQkFBQTtFQWhGUjtFQWtGUTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFoRlY7RUFrRlU7O0lBRUUsaUJBQUE7RUFoRlo7QUFDRjtBQXdGQTtFQUVJO0lBQ0UsZUFBQTtFQXZGSjtFQTBGRTtJQUNFLFNBQUE7RUF4Rko7RUEwRkk7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQXhGTjtFQTBGTTtJQUNFLG1CQUFBO0VBeEZSO0VBNEZROztJQUVFLGlCQUFBO0lBQ0Esb0JBQUE7RUExRlY7RUErRkk7SUFDRSxrQkFBQTtFQTdGTjtFQStGTTtJQUNFLGVBQUE7RUE3RlI7RUErRlE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQTdGVjtFQStGVTtJQUNFLGVBQUE7RUE3Rlo7RUFnR1U7SUFDRSxtQkFBQTtFQTlGWjs7RUF1R0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7RUFwR0o7RUFzR0k7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQXBHTjtFQXNHTTtJQUNFLG1CQUFBO0VBcEdSO0VBd0dROztJQUVFLGVBQUE7SUFDQSx5QkFBQTtFQXRHVjtFQTJHSTtJQUNFLG9CQUFBO0VBekdOO0VBMkdNO0lBQ0UsbUJBQUE7RUF6R1I7RUEyR1E7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBekdWO0VBMkdVOztJQUVFLGVBQUE7RUF6R1o7QUFDRiIsImZpbGUiOiJtb3JlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgY29sb3I6ICNmY2ZiZmJmMTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCxcclxuICAgIDpob3N0LWNvbnRleHQoLmJvb2stY2FyZCkgLmNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICBjb2xvcjogI2UwZTBlMDtcclxuXHJcbiAgICAgIC5jYXJkLWltYWdlIHtcclxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAuYnRuLWJ1eSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzRkOTE7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLXByZXZpZXcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2VjZTBlMGI1O1xyXG5cclxuICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2VjZTBlMGI1O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2VjZTBlMGI1O1xyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjODA4MGM4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNlY2UwZTBiNTtcclxuXHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgwODBjODtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgIC5jYXJkLWltYWdlIHtcclxuICAgICAgZmxleDogMCAwIDIwJTtcclxuICAgICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAuYnRuLWJ1eSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAwLjkzNzVyZW07XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDE4MCwgMjQ3KTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLXByZXZpZXcge1xyXG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW0gMC45Mzc1cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG5cclxuICAgICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuXHJcbiAgICAgICAgdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiKDgyLCA4MiwgMTQxKTtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig4MiwgODIsIDE0MSk7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmJvb2stY2FyZCkge1xyXG4gIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuOTc1cmVtO1xyXG5cclxuICAgIC5jYXJkLWltYWdlIHtcclxuICAgICAgZmxleDogMCAwIDI1JTtcclxuICAgICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAuYnRuLWJ1eSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMTkwLCAyNDcpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bi1wcmV2aWV3IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG5cclxuICAgICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMC40NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig4MiwgODIsIDE0MSk7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoODIsIDgyLCAxNDEpO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5tb3JlLWRldGFpbHMpIHtcclxuICAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAuY2FyZC1pbWFnZSB7XHJcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAuYnRuLWJ1eSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAxODAsIDI0Nyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLXByZXZpZXcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWRlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDE0MzlweCkge1xyXG4gIDpob3N0LWNvbnRleHQoLmJvb2stY2FyZCkge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAuY2FyZC1pbWFnZSB7XHJcbiAgICAgICAgZmxleDogMCAwIDIwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwJTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAuYnRuLWJ1eSxcclxuICAgICAgICAgIC5idG4tcHJldmlldyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjI1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG5cclxuICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4zNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcblxyXG4gICAgICAgICAgICBhLFxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XHJcbiAgOmhvc3QtY29udGV4dCguYm9vay1jYXJkKSB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAuY2FyZC1pbWFnZSB7XHJcbiAgICAgICAgZmxleDogMCAwIDIwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwJTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAuYnRuLWJ1eSxcclxuICAgICAgICAgIC5idG4tcHJldmlldyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjI1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG5cclxuICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4zNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcblxyXG4gICAgICAgICAgICBhLFxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgZ2FwOiAzcmVtO1xyXG5cclxuICAgICAgLmNhcmQtaW1hZ2Uge1xyXG4gICAgICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNSU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgLmJ0bi1idXksXHJcbiAgICAgICAgICAuYnRuLXByZXZpZXcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwLjlyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA6aG9zdC1jb250ZXh0KC5ib29rLWNhcmQpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuXHJcbiAgICAgIC5jYXJkLWltYWdlIHtcclxuICAgICAgICBmbGV4OiAwIDAgMjglO1xyXG4gICAgICAgIG1heC13aWR0aDogMjglO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAgIC5idG4tYnV5LFxyXG4gICAgICAgICAgLmJ0bi1wcmV2aWV3IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41MjVyZW07XHJcblxyXG4gICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNTI1cmVtO1xyXG5cclxuICAgICAgICAgICAgYSxcclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "GcBr":
/*!*********************************************!*\
  !*** ./src/app/modules/cart/cart.module.ts ***!
  \*********************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-routing.module */ "mH6/");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "OyTY");
/* harmony import */ var _components_cart_quantity_cart_quantity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart-quantity/cart-quantity.component */ "HYjV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CartModule {
}
CartModule.ɵfac = function CartModule_Factory(t) { return new (t || CartModule)(); };
CartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_1__["CartRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], _components_cart_quantity_cart_quantity_component__WEBPACK_IMPORTED_MODULE_3__["CartQuantityComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _cart_routing_module__WEBPACK_IMPORTED_MODULE_1__["CartRoutingModule"]], exports: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"],
        _components_cart_quantity_cart_quantity_component__WEBPACK_IMPORTED_MODULE_3__["CartQuantityComponent"]] }); })();


/***/ }),

/***/ "HYjV":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/cart/components/cart-quantity/cart-quantity.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CartQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartQuantityComponent", function() { return CartQuantityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_quantity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart-quantity.service */ "xg83");



class CartQuantityComponent {
    constructor(cartQuantityService) {
        this.cartQuantityService = cartQuantityService;
        this.bookId = '';
        this.quantityChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onInputChange(event) {
        const value = +event.target.value;
        if (value >= 0) {
            this.cartQuantityService.updateQuantity(this.bookId, value);
            this.quantityChanged.emit();
        }
    }
    increment() {
        this.cartQuantityService.increment(this.bookId);
        this.quantityChanged.emit();
    }
    decrement() {
        this.cartQuantityService.decrement(this.bookId);
        this.quantityChanged.emit();
    }
}
CartQuantityComponent.ɵfac = function CartQuantityComponent_Factory(t) { return new (t || CartQuantityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_quantity_service__WEBPACK_IMPORTED_MODULE_1__["CartQuantityService"])); };
CartQuantityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartQuantityComponent, selectors: [["app-cart-quantity"]], inputs: { bookId: "bookId" }, outputs: { quantityChanged: "quantityChanged" }, decls: 6, vars: 1, consts: [[1, "cartQuantity"], [3, "click"], ["type", "number", 3, "value", "input"]], template: function CartQuantityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartQuantityComponent_Template_button_click_1_listener() { return ctx.decrement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CartQuantityComponent_Template_input_input_3_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartQuantityComponent_Template_button_click_4_listener() { return ctx.increment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.cartQuantityService.getQuantity(ctx.bookId));
    } }, styles: ["[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 2rem;\n  height: 2rem;\n  border: 1px solid black;\n  background-color: white;\n  cursor: pointer;\n  font-size: 1.2rem;\n}\n[_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2rem;\n  text-align: center;\n  border: 1px solid black;\n  font-size: 1rem;\n  -moz-appearance: textfield;\n}\n[_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, [_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n@media screen and (max-width: 1024px) {\n  [_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 1.5rem;\n    font-size: 0.9rem;\n  }\n}\n@media screen and (min-width: 2560px) {\n  [_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 4.8rem;\n    height: 3.8rem;\n    font-size: 1.8rem;\n  }\n  [_nghost-%COMP%]   .cartQuantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 5rem;\n    height: 3.8rem;\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhcnQtcXVhbnRpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDQSwyQkFBQTtBQURKO0FBR0k7RUFDRSwyQkFBQTtBQUROO0FBS0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSEo7QUFNRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBTEo7QUFRRTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFOSjtBQVVFO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFSSjtFQVdFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQVRKO0FBQ0Y7QUFZRTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQVZKO0VBYUU7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBWEo7QUFDRiIsImZpbGUiOiJjYXJ0LXF1YW50aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcclxuICAgIC5jYXJ0UXVhbnRpdHkgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2VjZTBlMGI1IDtcclxuICAgIH1cclxuICAgIC5jYXJ0UXVhbnRpdHkgaW5wdXQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlMGUwYjU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJ0UXVhbnRpdHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcnRRdWFudGl0eSBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FydFF1YW50aXR5IGlucHV0IHtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gIH1cclxuICBcclxuICAuY2FydFF1YW50aXR5IGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIC5jYXJ0UXVhbnRpdHkgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY2FydFF1YW50aXR5IGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnRRdWFudGl0eSBpbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAgIC5jYXJ0UXVhbnRpdHkgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDQuOHJlbTtcclxuICAgICAgaGVpZ2h0OiAzLjhyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJ0UXVhbnRpdHkgaW5wdXQge1xyXG4gICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgaGVpZ2h0OiAzLjhyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "ICyc":
/*!*******************************************************!*\
  !*** ./src/app/modules/new-books/new-books.module.ts ***!
  \*******************************************************/
/*! exports provided: NewBooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBooksModule", function() { return NewBooksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _new_books_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-books-routing.module */ "6VMB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NewBooksModule {
}
NewBooksModule.ɵfac = function NewBooksModule_Factory(t) { return new (t || NewBooksModule)(); };
NewBooksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NewBooksModule });
NewBooksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _new_books_routing_module__WEBPACK_IMPORTED_MODULE_1__["NewBooksRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewBooksModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _new_books_routing_module__WEBPACK_IMPORTED_MODULE_1__["NewBooksRoutingModule"]] }); })();


/***/ }),

/***/ "KqmH":
/*!**********************************************************!*\
  !*** ./src/app/modules/new-books/new-books.component.ts ***!
  \**********************************************************/
/*! exports provided: NewBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBooksComponent", function() { return NewBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_new_book_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/new-book-card.service */ "gZs2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function NewBooksComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBooksComponent_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2191 Scroll to Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/more-details", a1]; };
function NewBooksComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "More Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const book_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.getCardClass(i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", book_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", book_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r6.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r6.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, book_r6.isbn13));
} }
function NewBooksComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "More Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const book_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", book_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", book_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r8.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r8.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, book_r8.isbn13));
} }
function NewBooksComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading more books...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NewBooksComponent {
    constructor(newBookCardService) {
        this.newBookCardService = newBookCardService;
        this.allBooks = [];
        this.carouselBooks = [];
        this.randomBooks = [];
        this.isLoading = false;
        this.currentIndex = 0;
        this.visibleCount = 5;
        this.cardWidth = 180;
        this.isAnimating = false;
        this.showScrollTop = false;
        this.counter = 0;
    }
    ngOnInit() {
        this.newBookCardService.getBooks().subscribe((data) => {
            this.allBooks = data.books;
            localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
            this.carouselBooks = this.allBooks.slice(0, 5);
            this.loadMoreBooks(this.allBooks);
        });
    }
    scrollToTop() {
        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0 });
        }
    }
    onContainerScroll(event) {
        const scrollContainer = event.target;
        this.showScrollTop = scrollContainer.scrollTop > 300;
        if (scrollContainer.scrollTop + scrollContainer.offsetHeight >= scrollContainer.scrollHeight - 50 && !this.isLoading) {
            this.isLoading = true;
            setTimeout(() => {
                const remainingBooks = this.allBooks;
                this.loadMoreBooks(remainingBooks);
                this.isLoading = false;
            }, 500);
        }
    }
    next() {
        if (this.counter + this.visibleCount < this.allBooks.length) {
            this.counter++;
            this.carouselBooks = this.allBooks.slice(this.counter, this.counter + this.visibleCount);
        }
    }
    prev() {
        if (this.counter > 0) {
            this.counter--;
            this.carouselBooks = this.allBooks.slice(this.counter, this.counter + this.visibleCount);
        }
    }
    getCardClass(index) {
        const relativeIndex = index - this.currentIndex;
        switch (relativeIndex) {
            case 0:
            case 4:
                return 'edge-card';
            case 1:
            case 3:
                return 'near-middle';
            case 2:
                return 'middle-card';
            default:
                return '';
        }
    }
    loadMoreBooks(sourceBooks = this.allBooks) {
        if (sourceBooks.length === 0)
            return;
        for (let i = 0; i < 20; i++) {
            const randomIndex = Math.floor(Math.random() * sourceBooks.length);
            this.randomBooks.push(sourceBooks[randomIndex]);
        }
    }
    storeBook(book) {
        localStorage.setItem('selectedBook', JSON.stringify(book));
    }
}
NewBooksComponent.ɵfac = function NewBooksComponent_Factory(t) { return new (t || NewBooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_new_book_card_service__WEBPACK_IMPORTED_MODULE_1__["NewBookCardService"])); };
NewBooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewBooksComponent, selectors: [["app-new-books"]], decls: 13, vars: 6, consts: [[1, "scroll-container", 3, "scroll"], ["class", "scroll-btn", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "mt-4", "carousel-viewport", "overflow-hidden"], [1, "btn", "btn-outline-secondary", "me-2", 3, "disabled", "click"], [1, "carousel-track-wrapper"], [1, "carousel-track"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-secondary", "ms-2", 3, "disabled", "click"], [1, "cards-container", "mt-5"], ["class", "loading-spinner", 4, "ngIf"], [1, "scroll-btn"], [1, "scroll-top-btn", 3, "click"], [1, "carousel-card", 3, "ngClass"], [1, "card", "text-center"], [1, "ribbon"], [1, "card-img-top", 3, "src", "alt"], [1, "card-title"], [1, "card-text"], ["target", "_blank", 1, "more-details-tag", 3, "routerLink"], [1, "card"], [3, "src", "alt"], ["target", "_blank", 3, "routerLink"], [1, "loading-spinner"]], template: function NewBooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NewBooksComponent_Template_div_scroll_0_listener($event) { return ctx.onContainerScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewBooksComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBooksComponent_Template_button_click_3_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u2190 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewBooksComponent_ng_container_7_Template, 15, 9, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBooksComponent_Template_button_click_8_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewBooksComponent_ng_container_11_Template, 14, 8, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewBooksComponent_div_12_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showScrollTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.counter === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carouselBooks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.counter + ctx.visibleCount >= ctx.allBooks.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.randomBooks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #80b682;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  background-color: #80b682 !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   h3[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: rgba(12, 11, 11, 0.811) !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   a[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(247, 28, 28, 0.811) !important;\n  text-decoration: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(190, 7, 7, 0.811) !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   p[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #130404b5 !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .ribbon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n  background-color: #de3652 !important;\n}\n[_nghost-%COMP%]   .scroll-container[_ngcontent-%COMP%] {\n  height: 91vh;\n  overflow-y: auto;\n  position: relative;\n}\n[_nghost-%COMP%]   .scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n[_nghost-%COMP%]   .carousel-viewport[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .carousel-track-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 53%;\n}\n[_nghost-%COMP%]   .carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: initial;\n  padding-left: 0.8rem !important;\n  transition: transform 0.5s ease;\n}\n[_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%] {\n  width: 7rem;\n  height: 18rem;\n  transition: transform 0.3s ease;\n}\n[_nghost-%COMP%]   .carousel-card.edge-card[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  z-index: 1;\n}\n[_nghost-%COMP%]   .carousel-card.near-middle[_ngcontent-%COMP%] {\n  transform: scale(0.7);\n  z-index: 2;\n}\n[_nghost-%COMP%]   .carousel-card.middle-card[_ngcontent-%COMP%] {\n  transform: scale(0.8);\n  z-index: 3;\n}\n[_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n  text-align: center;\n  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: auto;\n  border-radius: 0.5rem;\n}\n[_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #911af3;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 3.4rem;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 15.625rem;\n  height: 18.75rem;\n  margin: 0.3125rem;\n  padding: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 0.5rem;\n  background-color: #b7a4c9;\n  color: #252222;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n  transition: transform 0.3s ease, background-color 0.3s ease;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: auto;\n  border-radius: 0.5rem;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: black;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #911af3;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  background-color: #9980ae;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .more-details-tag[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n  width: 9.375rem;\n  background: crimson;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  font-size: 0.75rem;\n  padding: 0.3125rem 0;\n  position: absolute;\n  left: -3.4375rem;\n  transform: rotate(-45deg);\n  z-index: 10;\n  box-shadow: 0 0.1875rem 0.625rem rgba(0, 0, 0, 0.3);\n}\n[_nghost-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.25rem;\n  font-size: 1rem;\n  color: #555;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n[_nghost-%COMP%]   .scroll-top-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 2rem;\n  background-color: #826ee7;\n  color: white;\n  border: none;\n  border-radius: 2rem;\n  padding: 0.75rem 1.2rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  transition: opacity 0.3s ease;\n}\n[_nghost-%COMP%]   .scroll-top-btn[_ngcontent-%COMP%]:hover {\n  background-color: #7056f0;\n}\n\n@media (min-width: 1024px) and (max-width: 1439px) {\n  [_nghost-%COMP%]   .carousel-viewport[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 1rem 0;\n    overflow: hidden;\n  }\n  [_nghost-%COMP%]   .carousel-track-wrapper[_ngcontent-%COMP%] {\n    overflow: hidden;\n    width: 50%;\n  }\n  [_nghost-%COMP%]   .carousel-track[_ngcontent-%COMP%] {\n    padding-left: 0rem !important;\n  }\n}\n@media (min-width: 1440px) and (max-width: 2559px) {\n  [_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%] {\n    gap: 3.8rem;\n    justify-content: center;\n  }\n  [_nghost-%COMP%]   .carousel-viewport[_ngcontent-%COMP%] {\n    width: 60%;\n    margin: 0 auto;\n  }\n  [_nghost-%COMP%]   .carousel-track-wrapper[_ngcontent-%COMP%] {\n    width: 80% !important;\n    padding-right: 2rem !important;\n  }\n  [_nghost-%COMP%]   .carousel-track[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 17.8rem;\n    height: 22rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 6rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%] {\n    width: 10rem;\n    height: 24rem;\n  }\n  [_nghost-%COMP%]   .carousel-card.edge-card[_ngcontent-%COMP%] {\n    transform: scale(0.7);\n  }\n  [_nghost-%COMP%]   .carousel-card.near-middle[_ngcontent-%COMP%] {\n    transform: scale(0.8);\n  }\n  [_nghost-%COMP%]   .carousel-card.middle-card[_ngcontent-%COMP%] {\n    transform: scale(0.9);\n  }\n  [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 6.5rem;\n  }\n  [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  [_nghost-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n    width: 12rem;\n    font-size: 1rem;\n    left: -4rem;\n  }\n  [_nghost-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n@media (min-width: 2560px) {\n  [_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%] {\n    gap: 7.8rem;\n    justify-content: center;\n  }\n  [_nghost-%COMP%]   .carousel-viewport[_ngcontent-%COMP%] {\n    width: 55%;\n    padding: 3.625rem 0 !important;\n    margin: 0 auto;\n  }\n  [_nghost-%COMP%]   .carousel-track[_ngcontent-%COMP%] {\n    padding: 6rem;\n    padding-right: 0 !important;\n    margin-bottom: 0.5rem !important;\n  }\n  [_nghost-%COMP%]   .carousel-track-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 32rem;\n    height: 40rem !important;\n    gap: 1rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 12rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%] {\n    width: 12rem;\n    height: 34rem;\n    gap: 2rem !important;\n  }\n  [_nghost-%COMP%]   .carousel-card.edge-card[_ngcontent-%COMP%] {\n    transform: scale(0.8);\n  }\n  [_nghost-%COMP%]   .carousel-card.near-middle[_ngcontent-%COMP%] {\n    transform: scale(0.9);\n  }\n  [_nghost-%COMP%]   .carousel-card.middle-card[_ngcontent-%COMP%] {\n    transform: scale(1);\n  }\n  [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10rem;\n  }\n  [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .carousel-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  [_nghost-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n    width: 16rem;\n    font-size: 1.3rem;\n    top: 1rem;\n    left: -4.5rem;\n    transform: rotate(-45deg);\n  }\n  [_nghost-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuZXctYm9va3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSx5QkFBQTtBQUROO0FBR007RUFDRSxzQkFBQTtFQUNBLG9DQUFBO0FBRFI7QUFLSTtFQUNFLHlDQUFBO0FBSE47QUFNSTtFQUNFLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSk47QUFNTTtFQUNFLHdDQUFBO0FBSlI7QUFRSTtFQUNFLDJCQUFBO0FBTk47QUFTSTtFQUNFLG9DQUFBO0FBUE47QUFXRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVEo7QUFXSTtFQUNFLGFBQUE7QUFUTjtBQWFFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVhKO0FBY0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFaSjtBQWVFO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQWRKO0FBZ0JJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBZE47QUFpQkk7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFmTjtBQWtCSTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQWhCTjtBQW1CSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFqQk47QUFvQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBbEJOO0FBcUJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBbkJOO0FBc0JJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQXBCTjtBQXVCSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBckJOO0FBeUJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUF2Qko7QUEwQkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUF4Qko7QUEwQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBeEJOO0FBMkJJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBekJOO0FBNEJJO0VBQ0UsaUJBQUE7QUExQk47QUE2Qkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQTNCTjtBQThCSTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUE1Qk47QUE4Qkk7RUFDRSwwQkFBQTtBQTVCTjtBQWlDRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtREFBQTtBQS9CSjtBQWtDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWhDSjtBQW1DRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQWpDSjtBQW9DRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFsQ0o7QUFvQ0k7RUFDRSx5QkFBQTtBQWxDTjtBQXVDQSxzQkFBQTtBQUVBO0VBRUk7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBdENKO0VBeUNFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VBdkNKO0VBMENFO0lBQ0UsNkJBQUE7RUF4Q0o7QUFDRjtBQTRDQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VBM0NKO0VBOENFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUE1Q0o7RUErQ0U7SUFDRSxxQkFBQTtJQUNBLDhCQUFBO0VBN0NKO0VBZ0RFO0lBQ0UsMEJBQUE7RUE5Q0o7RUFpREU7SUFDRSxjQUFBO0lBQ0EsYUFBQTtFQS9DSjtFQWlESTtJQUNFLFdBQUE7RUEvQ047RUFrREk7SUFDRSxlQUFBO0VBaEROO0VBbURJOztJQUVFLGlCQUFBO0VBakROO0VBcURFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFuREo7RUFxREk7SUFDRSxxQkFBQTtFQW5ETjtFQXNESTtJQUNFLHFCQUFBO0VBcEROO0VBdURJO0lBQ0UscUJBQUE7RUFyRE47RUF3REk7SUFDRSxhQUFBO0VBdEROO0VBeURJO0lBQ0UsaUJBQUE7RUF2RE47RUEwREk7O0lBRUUsa0JBQUE7RUF4RE47RUE0REU7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUExREo7RUE2REU7SUFDRSxpQkFBQTtFQTNESjtBQUNGO0FBK0RBO0VBRUk7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7RUE5REo7RUFpRUU7SUFDRSxVQUFBO0lBQ0EsOEJBQUE7SUFDQSxjQUFBO0VBL0RKO0VBa0VFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsZ0NBQUE7RUFoRUo7RUFtRUU7SUFDRSxXQUFBO0VBakVKO0VBb0VFO0lBQ0UsWUFBQTtJQUNBLHdCQUFBO0lBQ0EsU0FBQTtFQWxFSjtFQW9FSTtJQUNFLFlBQUE7RUFsRU47RUFxRUk7SUFDRSxpQkFBQTtFQW5FTjtFQXNFSTs7SUFFRSxpQkFBQTtFQXBFTjtFQXdFRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7RUF0RUo7RUF3RUk7SUFDRSxxQkFBQTtFQXRFTjtFQXlFSTtJQUNFLHFCQUFBO0VBdkVOO0VBMEVJO0lBQ0UsbUJBQUE7RUF4RU47RUEyRUk7SUFDRSxZQUFBO0VBekVOO0VBNEVJO0lBQ0UsaUJBQUE7RUExRU47RUE2RUk7O0lBRUUsaUJBQUE7RUEzRU47RUErRUU7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO0VBN0VKO0VBZ0ZFO0lBQ0UsZUFBQTtFQTlFSjtBQUNGIiwiZmlsZSI6Im5ldy1ib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MGI2ODI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MGI2ODIgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6IHJnYmEoMTIsIDExLCAxMSwgMC44MTEpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI0NywgMjgsIDI4LCAwLjgxMSkgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOTAsIDcsIDcsIDAuODExKSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjMTMwNDA0YjUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucmliYm9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgNTQsIDgyKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5MXZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtdmlld3BvcnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsLXRyYWNrLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiA1MyU7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtdHJhY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcclxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsLWNhcmQge1xyXG4gICAgd2lkdGg6IDdyZW07XHJcbiAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmLmVkZ2UtY2FyZCB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5lYXItbWlkZGxlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG5cclxuICAgICYubWlkZGxlLWNhcmQge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMC4zMTI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDUge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGNvbG9yOiByZ2IoMTQ1LCAyNiwgMjQzKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDMuNHJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAxNS42MjVyZW07XHJcbiAgICBoZWlnaHQ6IDE4Ljc1cmVtO1xyXG4gICAgbWFyZ2luOiAwLjMxMjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODMsIDE2NCwgMjAxKTtcclxuICAgIGNvbG9yOiByZ2IoMzcsIDM0LCAzNCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgY29sb3I6IHJnYigxNDUsIDI2LCAyNDMpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDEyOCwgMTc0KTtcclxuICAgIH1cclxuICAgIC5tb3JlLWRldGFpbHMtdGFnOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnJpYmJvbiB7XHJcbiAgICB3aWR0aDogOS4zNzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjMxMjVyZW0gMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0zLjQzNzVyZW07XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMTg3NXJlbSAwLjYyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAubG9hZGluZy1zcGlubmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC10b3AtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTEwLCAyMzEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgODYsIDI0MCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDE0MzlweCkge1xyXG4gIDpob3N0IHtcclxuICAgIC5jYXJvdXNlbC12aWV3cG9ydCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLXRyYWNrLXdyYXBwZXIge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC10cmFjayB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkgYW5kIChtYXgtd2lkdGg6IDI1NTlweCkge1xyXG4gIDpob3N0IHtcclxuICAgIC5jYXJkcy1jb250YWluZXIge1xyXG4gICAgICBnYXA6IDMuOHJlbTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLXZpZXdwb3J0IHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLXRyYWNrLXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtdHJhY2sge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAxNy44cmVtO1xyXG4gICAgICBoZWlnaHQ6IDIycmVtO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCxcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgaGVpZ2h0OiAyNHJlbTtcclxuXHJcbiAgICAgICYuZWRnZS1jYXJkIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubmVhci1taWRkbGUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5taWRkbGUtY2FyZCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA2LjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCxcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpYmJvbiB7XHJcbiAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBsZWZ0OiAtNHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubG9hZGluZy1zcGlubmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjU2MHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICAgIGdhcDogNy44cmVtO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtdmlld3BvcnQge1xyXG4gICAgICB3aWR0aDogNTUlO1xyXG4gICAgICBwYWRkaW5nOiAzLjYyNXJlbSAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC10cmFjayB7XHJcbiAgICAgIHBhZGRpbmc6IDZyZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLXRyYWNrLXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAzMnJlbTtcclxuICAgICAgaGVpZ2h0OiA0MHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwLFxyXG4gICAgICBhIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1jYXJkIHtcclxuICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICBoZWlnaHQ6IDM0cmVtO1xyXG4gICAgICBnYXA6IDJyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAgICYuZWRnZS1jYXJkIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubmVhci1taWRkbGUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5taWRkbGUtY2FyZCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCxcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmliYm9uIHtcclxuICAgICAgd2lkdGg6IDE2cmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICBsZWZ0OiAtNC41cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2FkaW5nLXNwaW5uZXIge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "OyTY":
/*!************************************************!*\
  !*** ./src/app/modules/cart/cart.component.ts ***!
  \************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_quantity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/cart-quantity.service */ "xg83");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_cart_quantity_cart_quantity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart-quantity/cart-quantity.component */ "HYjV");





function CartComponent_ng_container_8_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_8_ng_container_11_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeFromCart(item_r4.bookId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-cart-quantity", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("quantityChanged", function CartComponent_ng_container_8_ng_container_11_Template_app_cart_quantity_quantityChanged_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.updateBuyButtonState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.bookImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: $", item_r4.totalPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bookId", item_r4.bookId);
} }
function CartComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Total Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Total Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CartComponent_ng_container_8_ng_container_11_Template, 12, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx_r0.getTotalPrice(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getTotalQuantity(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);
} }
function CartComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your cart is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(cartQuantityService) {
        this.cartQuantityService = cartQuantityService;
        this.visible = true;
        this.cartItems = this.cartQuantityService.getCartItems();
        this.closeCartEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    closeCart() {
        this.closeCartEvent.emit();
    }
    getTotalPrice() {
        let total = 0;
        this.cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    }
    getTotalQuantity() {
        let totalQuantity = 0;
        this.cartItems.forEach(item => {
            totalQuantity += item.quantity;
        });
        return totalQuantity;
    }
    removeFromCart(bookId) {
        this.cartQuantityService.deleteFromCart(bookId);
        this.cartItems = this.cartQuantityService.getCartItems();
        this.cartQuantityService.updateQuantity(bookId, 1);
    }
    updateBuyButtonState() {
        this.cartQuantityService.getCartItems().forEach(item => { });
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_quantity_service__WEBPACK_IMPORTED_MODULE_1__["CartQuantityService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], outputs: { closeCartEvent: "closeCartEvent" }, decls: 14, vars: 2, consts: [[1, "cart-content"], [1, "cart-sidebar"], [1, "cart-header"], [1, "close-cart", 3, "click"], [1, "cart-scrollable-content"], [4, "ngIf", "ngIfElse"], ["emptyCart", ""], [1, "checkout-btn"], [1, "total-price"], [1, "cart-total-quantity"], [4, "ngFor", "ngForOf"], [1, "cart-item"], [1, "cart-item-image", 3, "src", "alt"], [1, "price-quantity"], [1, "delete-quantity"], [1, "bi", "bi-trash3", 3, "click"], [1, "abc", 3, "bookId", "quantityChanged"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_5_listener() { return ctx.closeCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_ng_container_8_Template, 12, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_ng_template_9_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_cart_quantity_cart_quantity_component__WEBPACK_IMPORTED_MODULE_3__["CartQuantityComponent"]], styles: ["[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .cart-sidebar[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .cart-sidebar[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #f0f0f0;\n  box-shadow: -2px 0 5px rgba(255, 255, 255, 0.1);\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .cart-header[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .cart-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #333;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .close-cart[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .close-cart[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #333;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .price-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .price-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%] {\n  background-color: #333;\n  border-top: 1px solid #444;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #6455c8;\n}\n[_nghost-%COMP%]   .cart-sidebar[_ngcontent-%COMP%] {\n  margin-top: 3.1rem !important;\n  width: 30%;\n  background-color: whitesmoke;\n  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);\n  padding: 1rem;\n  height: 92vh;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0 !important;\n}\n[_nghost-%COMP%]   .cart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1rem;\n}\n[_nghost-%COMP%]   .close-cart[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 2rem;\n  color: #333;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  margin-bottom: 8px;\n}\n[_nghost-%COMP%]   .cart-scrollable-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding-right: 0.5rem;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n[_nghost-%COMP%]   .cart-total-quantity[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n[_nghost-%COMP%]   .cart-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #eee;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .cart-item-image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 5px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #555;\n}\n[_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #333;\n}\n[_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  flex: 1;\n}\n[_nghost-%COMP%]   .price-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n}\n[_nghost-%COMP%]   .price-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-align: center;\n}\n[_nghost-%COMP%]   .delete-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n[_nghost-%COMP%]   .delete-quantity[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid #ccc;\n  background: whitesmoke;\n  text-align: center;\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 100%;\n  font-size: 1rem;\n  background-color: #826ee7;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n@media screen and (max-width: 1024px) and (max-width: 1439px) {\n  [_nghost-%COMP%]   .cart-sidebar[_ngcontent-%COMP%] {\n    width: 30%;\n    padding: 1rem;\n    margin-top: 2.5rem !important;\n    font-size: 0.9rem;\n  }\n  [_nghost-%COMP%]   .cart-header[_ngcontent-%COMP%] {\n    padding-bottom: 0.8rem;\n  }\n  [_nghost-%COMP%]   .cart-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-top: 0.5rem;\n  }\n  [_nghost-%COMP%]   .close-cart[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    right: 8px;\n  }\n  [_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%] {\n    gap: 0.7rem;\n    padding: 0.4rem 0;\n  }\n  [_nghost-%COMP%]   .cart-item-image[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n  [_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  [_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  [_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  [_nghost-%COMP%]   .price-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  [_nghost-%COMP%]   .delete-quantity[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  [_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  [_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 2rem;\n    font-size: 0.9rem;\n  }\n}\n@media screen and (min-width: 1440px) and (max-width: 2559px) {\n  [_nghost-%COMP%]   .cart-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  [_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none !important;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  [_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 2560px) {\n  [_nghost-%COMP%]   .cart-sidebar[_ngcontent-%COMP%] {\n    width: 30%;\n    padding: 2rem;\n    font-size: 2rem !important;\n    margin-top: 7.1rem !important;\n  }\n  [_nghost-%COMP%]   .cart-header[_ngcontent-%COMP%] {\n    padding-bottom: 1.5rem;\n  }\n  [_nghost-%COMP%]   .cart-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 3rem !important;\n  }\n  [_nghost-%COMP%]   .close-cart[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    right: 15px;\n  }\n  [_nghost-%COMP%]   .cart-scrollable-content[_ngcontent-%COMP%] {\n    padding-top: 1rem !important;\n    padding-bottom: 2rem !important;\n  }\n  [_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n    padding: 1rem 0 !important;\n  }\n  [_nghost-%COMP%]   .cart-item-image[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 130px;\n  }\n  [_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 3rem !important;\n  }\n  [_nghost-%COMP%]   .cart-item-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 2.2rem !important;\n  }\n  [_nghost-%COMP%]   .cart-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  [_nghost-%COMP%]   .price-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  [_nghost-%COMP%]   .delete-quantity[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  [_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n  [_nghost-%COMP%]   .checkout-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 5rem;\n    font-size: 1.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7QUFETjtBQUlJO0VBQ0UsNkJBQUE7QUFGTjtBQUtJO0VBQ0UsV0FBQTtBQUhOO0FBTUk7RUFDRSw2QkFBQTtBQUpOO0FBUU07O0VBRUUsV0FBQTtBQU5SO0FBVUk7RUFDRSxXQUFBO0FBUk47QUFXSTtFQUNFLFdBQUE7QUFUTjtBQVlJO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtBQVZOO0FBWU07RUFDRSx5QkFBQTtBQVZSO0FBZUU7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFiSjtBQWdCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFkSjtBQWlCRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBZko7QUFrQkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFoQko7QUFtQkU7RUFDRSxxQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFsQko7QUFxQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFuQko7QUFzQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXBCSjtBQXVCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBckJKO0FBdUJJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBckJOO0FBd0JJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUF0Qk47QUEwQkU7RUFDRSxpQkFBQTtFQUNBLE9BQUE7QUF4Qko7QUEyQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBekJKO0FBMkJJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBekJOO0FBNkJFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUEzQko7QUE2Qkk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUEzQk47QUErQkU7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0UsbUJBQUE7QUE3Qk47QUErQkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUdBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBL0JOO0FBcUNBO0VBRUk7SUFDRSxVQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0lBQ0EsaUJBQUE7RUFuQ0o7RUFzQ0U7SUFDRSxzQkFBQTtFQXBDSjtFQXFDSTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUFuQ047RUF1Q0U7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUFyQ0o7RUF3Q0U7SUFDRSxXQUFBO0lBQ0EsaUJBQUE7RUF0Q0o7RUF5Q0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQXZDSjtFQTJDSTtJQUNFLGlCQUFBO0VBekNOO0VBNENJO0lBQ0UsaUJBQUE7RUExQ047RUE4Q0U7SUFDRSxpQkFBQTtFQTVDSjtFQStDRTtJQUNFLGlCQUFBO0VBN0NKO0VBZ0RFO0lBQ0UsaUJBQUE7RUE5Q0o7RUFpREU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBL0NKO0VBaURJO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0VBL0NOO0FBQ0Y7QUFxREE7RUFHTTtJQUNFLGdCQUFBO0VBckROO0VBeURFO0lBQ0UsV0FBQTtJQUNBLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQXZESjtFQXlERTtJQUNFLFdBQUE7RUF2REo7QUFDRjtBQTZEQTtFQUVJO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSwwQkFBQTtJQUNBLDZCQUFBO0VBNURKO0VBK0RFO0lBRUUsc0JBQUE7RUE5REo7RUErREk7SUFFRSwwQkFBQTtFQTlETjtFQWtFRTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBaEVKO0VBbUVFO0lBQ0osNEJBQUE7SUFDQSwrQkFBQTtFQWpFRTtFQW9FRTtJQUNFLFdBQUE7SUFDQSwwQkFBQTtFQWxFSjtFQXFFRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBbkVKO0VBdUVJO0lBQ0UsMEJBQUE7RUFyRU47RUF3RUk7SUFDRSw0QkFBQTtFQXRFTjtFQTBFRTtJQUNFLGlCQUFBO0VBeEVKO0VBMkVFO0lBQ0UsZUFBQTtFQXpFSjtFQTRFRTtJQUNFLGlCQUFBO0VBMUVKO0VBNkVFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQTNFSjtFQThFRTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtFQTVFSjtBQUNGIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xyXG4gICAgLmNhcnQtc2lkZWJhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgIGNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICBib3gtc2hhZG93OiAtMnB4IDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC1oZWFkZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtY2FydCB7XHJcbiAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJ0LWl0ZW0ge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC1pdGVtLWRldGFpbHMge1xyXG4gICAgICBzcGFuLFxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnQtaXRlbSBzcGFuIHtcclxuICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlLXF1YW50aXR5IHNwYW4ge1xyXG4gICAgICBjb2xvcjogI2RkZDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tvdXQtYnRuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDg1LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FydC1zaWRlYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDMuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDkydmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYXJ0LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWNhcnQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FydC1zY3JvbGxhYmxlLWNvbnRlbnQge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jYXJ0LXRvdGFsLXF1YW50aXR5IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICB9XHJcblxyXG4gIC5jYXJ0LXNpZGViYXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY2FydC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuY2FydC1pdGVtLWltYWdlIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmNhcnQtaXRlbS1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FydC1pdGVtIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnByaWNlLXF1YW50aXR5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZS1xdWFudGl0eSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hlY2tvdXQtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8vIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIC8vIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTEwLCAyMzEpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgLmNhcnQtc2lkZWJhciB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWNhcnQge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgcmlnaHQ6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC1pdGVtIHtcclxuICAgICAgZ2FwOiAwLjdyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJ0LWl0ZW0taW1hZ2Uge1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJ0LWl0ZW0tZGV0YWlscyB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnQtaXRlbSBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlLXF1YW50aXR5IHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVsZXRlLXF1YW50aXR5IGkge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tvdXQtYnRuIHtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgLmNhcnQtaGVhZGVyIHtcclxuICAgICAgaDQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tvdXQtYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmNoZWNrb3V0LWJ0biBidXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgLmNhcnQtc2lkZWJhciB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tdG9wOiA3LjFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC1oZWFkZXIge1xyXG4gICAgICBcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICAgICAgaDQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWNhcnQge1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJ0LXNjcm9sbGFibGUtY29udGVudHtcclxucGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcclxucGFkZGluZy1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FydC1pdGVtIHtcclxuICAgICAgZ2FwOiAxLjVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJ0LWl0ZW0taW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcnQtaXRlbS1kZXRhaWxzIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJ0LWl0ZW0gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZS1xdWFudGl0eSBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWxldGUtcXVhbnRpdHkgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja291dC1idG4ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja291dC1idG4gYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cart/cart.component */ "OyTY");





function AppComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_5_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-cart", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeCartEvent", function AppComponent_ng_container_5_Template_app_cart_closeCartEvent_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showCart = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'books-app';
        this.showCart = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 3, consts: [[1, "app-container"], [3, "cartClick"], [1, "content-container"], [1, "content"], [4, "ngIf"], [1, "cart-sidebar", 3, "click"], [3, "closeCartEvent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cartClick", function AppComponent_Template_app_navbar_cartClick_1_listener() { return ctx.showCart = !ctx.showCart; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_container_5_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blurred", ctx.showCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCart);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _modules_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}\n[_nghost-%COMP%]   html[_ngcontent-%COMP%], [_nghost-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n[_nghost-%COMP%]   .app-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  box-sizing: border-box;\n  margin-top: 3rem;\n  height: calc(100vh - 3rem);\n}\n[_nghost-%COMP%]   .app-container.cart-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .content.blurred[_ngcontent-%COMP%] {\n  filter: blur(5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUY7QUFLQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFIRjtBQU1BO0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFMRjtBQVVBO0VBQ0UsZ0JBQUE7QUFSRjtBQVdBO0VBQ0UsaUJBQUE7QUFURiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAvLyBtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4uYXBwLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcblxyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0pO1xyXG59XHJcblxyXG5cclxuXHJcbi5hcHAtY29udGFpbmVyLmNhcnQtb3BlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgfVxyXG5cclxuLmNvbnRlbnQuYmx1cnJlZCB7XHJcbiAgZmlsdGVyOiBibHVyKDVweCk7ICBcclxufVxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "TUD7":
/*!********************************************************************************!*\
  !*** ./src/app/modules/books-page/components/book-card/book-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: BookCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCardComponent", function() { return BookCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/more-details/more-details.component */ "BGIG");



function BookCardComponent_div_12_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-more-details", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function BookCardComponent_div_12_ng_container_3_Template_app_more_details_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", ctx_r2.selectedBook);
} }
function BookCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookCardComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookCardComponent_div_12_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookCardComponent_div_12_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookCardComponent_div_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedBook);
} }
function BookCardComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.book.subtitle, " ");
} }
class BookCardComponent {
    constructor() {
        this.popoverVisible = false;
        this.modalVisible = false;
        this.selectedBook = null;
    }
    ngOnInit() { }
    showPopover() {
        this.popoverVisible = true;
    }
    hidePopover() {
        this.popoverVisible = false;
    }
    storeBook(book) {
        localStorage.setItem('selectedBook', JSON.stringify(book));
    }
    openModal() {
        this.selectedBook = this.book;
        this.modalVisible = true;
    }
    closeModal() {
        this.modalVisible = false;
        this.selectedBook = null;
    }
    ngOnDestroy() {
        this.popoverVisible = false;
        this.modalVisible = false;
        this.selectedBook = null;
    }
}
BookCardComponent.ɵfac = function BookCardComponent_Factory(t) { return new (t || BookCardComponent)(); };
BookCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookCardComponent, selectors: [["app-book-card"]], inputs: { book: "book" }, decls: 14, vars: 7, consts: [[1, "card", "book-card"], [1, "card-img-top", 3, "src", "alt"], [1, "subtitle", 3, "mouseenter", "mouseleave"], [3, "click"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-wrapper", 3, "click"], [1, "modal-content"], [1, "modal-close-btn", 3, "click"], [3, "book", "close"], [1, "popover"]], template: function BookCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function BookCardComponent_Template_p_mouseenter_4_listener() { return ctx.showPopover(); })("mouseleave", function BookCardComponent_Template_p_mouseleave_4_listener() { return ctx.hidePopover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookCardComponent_Template_a_click_10_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "More Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookCardComponent_div_12_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookCardComponent_ng_container_13_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.book.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.book.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popoverVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], src_app_components_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_2__["MoreDetailsComponent"]], styles: ["[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background-color: #333 !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .modal-wrapper[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .modal-wrapper[_ngcontent-%COMP%] {\n  background-color: #333 !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .modal-close-btn[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n  background-color: #417fa5 !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #246791 !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #80b682;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   h3[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: rgba(12, 11, 11, 0.811) !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   a[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(247, 28, 28, 0.811) !important;\n  text-decoration: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(190, 7, 7, 0.811) !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   p[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #130404b5 !important;\n}\n[_nghost-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 1rem;\n  height: 91vh;\n  padding: 1rem;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 12.5rem;\n  height: 15rem;\n  margin: 1rem;\n  padding: 1rem;\n  background-color: #b7a4c9;\n  color: #252222;\n  border: 0.063rem solid #ccc;\n  border-radius: 0.5rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  border-radius: 0.5rem;\n  object-fit: cover;\n  margin-bottom: 0.4rem;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: black;\n  margin: 0;\n  padding-bottom: 0.7em;\n  word-wrap: break-word;\n  overflow: hidden;\n  white-space: normal;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin: 0;\n  color: #484848;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #252222;\n  margin: 0;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #911af3;\n  text-decoration: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .popover[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 30%;\n  width: 80%;\n  max-width: 90%;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  border-radius: 0.25rem;\n  z-index: 10;\n  overflow: auto;\n  word-break: break-word;\n  white-space: normal;\n  pointer-events: none;\n  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);\n  text-align: center;\n  line-height: 1.2;\n}\n[_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 50rem;\n  height: 31.25rem;\n  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  margin: auto;\n  inset: 0;\n}\n[_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);\n  padding: 0.5rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n  font-size: 0.8rem;\n  text-align: center;\n  color: #333;\n}\n[_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 0.3rem;\n}\n[_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #5282a0;\n  color: white;\n  width: 10em;\n  padding: 0.3rem;\n  margin-bottom: 0;\n  border: none;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: 0.8rem;\n  z-index: 1000;\n}\n[_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #3c6e8c;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #911af3;\n  color: white;\n  border: none;\n  padding: 1rem 1rem;\n  width: 20em;\n  cursor: pointer;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #7814c4;\n}\n[_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  background-color: #5282a0;\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n  z-index: 1000;\n}\n@media screen and (min-width: 1024px) and (max-width: 1439px) {\n  [_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n    top: 10%;\n    width: 35rem;\n    height: 21rem;\n  }\n  [_nghost-%COMP%]   .modal-wrapper[_ngcontent-%COMP%] {\n    width: 35rem;\n    height: 21rem;\n    overflow-y: hidden !important;\n  }\n  [_nghost-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n  }\n  [_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    height: 15rem;\n    overflow-y: auto;\n  }\n  [_nghost-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n    bottom: 0.2rem !important;\n    padding: 0.2rem !important;\n  }\n}\n@media screen and (min-width: 1440px) and (max-width: 2559px) {\n  [_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n    top: 10%;\n    width: 39rem;\n    height: 23rem;\n  }\n}\n@media screen and (min-width: 2560px) {\n  [_nghost-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n    top: 11%;\n    width: 76rem;\n    height: 46rem;\n  }\n  [_nghost-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    font-size: 3rem !important;\n  }\n  [_nghost-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n    bottom: 2rem;\n    padding: 1rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJvb2stY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGlDQUFBO0FBRE47QUFHSTtFQUNFLGlDQUFBO0FBRE47QUFHSTtFQUNFLG9DQUFBO0FBRE47QUFHTTtFQUNFLG9DQUFBO0FBRFI7QUFJSTtFQUVFLHlCQUFBO0FBSE47QUFLSTtFQUNFLHlDQUFBO0FBSE47QUFLSTtFQUNFLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSE47QUFNSTtFQUNFLHdDQUFBO0FBSk47QUFPSTtFQUNFLDJCQUFBO0FBTE47QUFTRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBUEo7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVJKO0FBVUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVJOO0FBV0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFUTjtBQVlJO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFWTjtBQWFJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFYTjtBQWNJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWk47QUFlSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBYk47QUFpQkU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFHQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQWpCSjtBQW1CSTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGVBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFuQk47QUFxQk07RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbkJSO0FBc0JNO0VBQ0UsT0FBQTtFQUdBLHFCQUFBO0FBdEJSO0FBeUJNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUF4QlI7QUEwQlE7RUFDRSx5QkFBQTtBQXhCVjtBQThCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTVCSjtBQThCSTtFQUNFLHlCQUFBO0FBNUJOO0FBZ0NFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUE5Qko7QUFtQ0E7RUFFSTtJQUNFLFFBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQWpDSjtFQW9DRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFsQ0o7RUFtQ0k7SUFDRSx5QkFBQTtFQWpDTjtFQXFDRTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtFQW5DSjtFQXNDRTtJQUVFLHlCQUFBO0lBQ0EsMEJBQUE7RUFyQ0o7QUFDRjtBQXdDQTtFQUVJO0lBQ0UsUUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBdkNKO0FBQ0Y7QUE0Q0U7RUFFSTtJQUNFLFFBQUE7SUFHQSxZQUFBO0lBQ0EsYUFBQTtFQTdDTjtFQStDSTtJQUNFLDBCQUFBO0VBN0NOO0VBK0NJO0lBQ0UsMEJBQUE7SUFDQSxZQUFBO0lBQ0Esd0JBQUE7RUE3Q047QUFDRiIsImZpbGUiOiJib29rLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xyXG4gICAgLm1vZGFsLXdyYXBwZXIgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtY2xvc2UtYnRuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCAxMjcsIDE2NSkgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMTAzLCAxNDUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogICM4MGI2ODI7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDEyLCAxMSwgMTEsIDAuODExKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAgcmdiYSgyNDcsIDI4LCAyOCwgMC44MTEpICAhaW1wb3J0YW50OyAgXHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogcmdiYSgxOTAsIDcsIDcsIDAuODExKSFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzEzMDQwNGI1ICFpbXBvcnRhbnQ7ICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDkxdmg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTIuNXJlbTsgXHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODMsIDE2NCwgMjAxKTtcclxuICAgIGNvbG9yOiByZ2IoMzcsIDM0LCAzNCk7XHJcbiAgICBib3JkZXI6IDAuMDYzcmVtIHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuN2VtO1xyXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6IHJnYig3MiwgNzIsIDcyKTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJpY2Uge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogcmdiKDM3LCAzNCwgMzQpO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgY29sb3I6IHJnYigxNDUsIDI2LCAyNDMpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucG9wb3ZlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICB0b3A6IDQwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44NSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4zNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kYWwtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDUwcmVtOyBcclxuICAgIGhlaWdodDogMzEuMjVyZW07IFxyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJveC1zaGFkb3c6IC0ycHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBpbnNldDogMDtcclxuXHJcbiAgICAubW9kYWwtd3JhcHBlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIC8vIHdpZHRoOiA5NSU7XHJcbiAgICAgIC8vIGhlaWdodDogOTUlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAubW9kYWwtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vZGFsLWNsb3NlLWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMXJlbTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgMTMwLCAxNjApO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogMTBlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICBcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDExMCwgMTQwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAyNiwgMjQzKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgIHdpZHRoOiAyMGVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDIwLCAxOTYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vZGFsLW92ZXJsYXkgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgMTMwLCAxNjApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxNDM5cHgpIHtcclxuICAgOmhvc3Qge1xyXG4gICAgLm1vZGFsLW92ZXJsYXkge1xyXG4gICAgICB0b3A6IDEwJTtcclxuICAgICAgd2lkdGg6IDM1cmVtOyBcclxuICAgICAgaGVpZ2h0OiAyMXJlbTsgXHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogMzVyZW07IFxyXG4gICAgICBoZWlnaHQ6IDIxcmVtOyBcclxuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIC5tb2RhbC10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgaGVpZ2h0OiAxNXJlbTsgXHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87IFxyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jbG9zZS1idG4ge1xyXG4gICAgICAvLyBmb250LXNpemU6IDAuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICBib3R0b206IDAuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAwLjJyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgLm1vZGFsLW92ZXJsYXkge1xyXG4gICAgICB0b3A6IDEwJTtcclxuICAgICAgd2lkdGg6IDM5cmVtOyBcclxuICAgICAgaGVpZ2h0OiAyM3JlbTsgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAgIDpob3N0IHtcclxuICAgICAgLm1vZGFsLW92ZXJsYXkge1xyXG4gICAgICAgIHRvcDogMTElO1xyXG4gICAgICAgIC8vIHdpZHRoOiA3MHJlbTsgXHJcbiAgICAgICAgLy8gaGVpZ2h0OiA0MnJlbTsgXHJcbiAgICAgICAgd2lkdGg6IDc2cmVtOyBcclxuICAgICAgICBoZWlnaHQ6IDQ2cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5tb2RhbC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLm1vZGFsLWNsb3NlLWJ0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm90dG9tOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudCA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "U4nq":
/*!*****************************************************************!*\
  !*** ./src/app/modules/about-page/about-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page.component */ "Ap20");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'about', component: _about_page_component__WEBPACK_IMPORTED_MODULE_1__["AboutPageComponent"] }
];
class AboutPageRoutingModule {
}
AboutPageRoutingModule.ɵfac = function AboutPageRoutingModule_Factory(t) { return new (t || AboutPageRoutingModule)(); };
AboutPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AboutPageRoutingModule });
AboutPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "UOTb":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/books-page/components/book-page-filters/book-page-filters.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BookPageFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageFiltersComponent", function() { return BookPageFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_book_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book-list.service */ "oJi4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BookPageFiltersComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const book_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", book_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r4, " ");
} }
function BookPageFiltersComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function BookPageFiltersComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BookPageFiltersComponent {
    constructor(router, activatedRoute, bookListService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.bookListService = bookListService;
        this.sortByPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bookSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchKeyword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedBook = '';
        this.sortAscending = false;
        this.searchInput = '';
        this.bookCategoryList = [];
    }
    ngOnInit() {
        this.bookCategoryList = this.bookListService.getBooks();
    }
    toggleSort() {
        this.sortAscending = !this.sortAscending;
        this.sortByPrice.emit(this.sortAscending);
    }
    onBookSelect(event) {
        this.selectedBook = event.target.value;
        this.searchInput = '';
        this.bookSelected.emit(this.selectedBook);
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                book: this.selectedBook || null,
                search: null,
            },
            queryParamsHandling: 'merge',
        });
    }
    onSearchClick() {
        this.searchKeyword.emit(this.searchInput);
        this.selectedBook = '';
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                search: this.searchInput || null,
                book: null,
            },
            queryParamsHandling: 'merge',
        });
    }
    ngOnDestroy() {
        this.selectedBook = '';
        this.searchInput = '';
        this.bookCategoryList = [];
        this.sortAscending = false;
    }
}
BookPageFiltersComponent.ɵfac = function BookPageFiltersComponent_Factory(t) { return new (t || BookPageFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_list_service__WEBPACK_IMPORTED_MODULE_2__["BookListService"])); };
BookPageFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookPageFiltersComponent, selectors: [["app-book-page-filters"]], outputs: { sortByPrice: "sortByPrice", bookSelected: "bookSelected", searchKeyword: "searchKeyword" }, decls: 19, vars: 5, consts: [[1, "filters-page"], [1, "left-side-options"], [1, "select-dropdown"], [3, "value", "change"], ["value", ""], [4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-down"], [1, "right-side-options"], [1, "btn", 3, "click"], [4, "ngIf", "ngIfElse"], ["descending", ""], [1, "searchButton"], ["placeholder", "Search by title or subtitle", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "bi", "bi-search"], [3, "value"]], template: function BookPageFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BookPageFiltersComponent_Template_select_change_3_listener($event) { return ctx.onBookSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select a Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookPageFiltersComponent_ng_container_6_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookPageFiltersComponent_Template_button_click_10_listener() { return ctx.toggleSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sort by Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookPageFiltersComponent_ng_container_12_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookPageFiltersComponent_ng_template_13_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookPageFiltersComponent_Template_input_ngModelChange_16_listener($event) { return ctx.searchInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookPageFiltersComponent_Template_button_click_17_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookCategoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sortAscending)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #555;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%] {\n  background-color: #444;\n  border: 1px solid #555;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #444;\n  color: #ece0e0ec;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ece0e0ec;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #444;\n  color: #ece0e0ec;\n  border: 1px solid #555;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #555;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #555;\n  color: #ece0e0ec;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%] {\n  background-color: #444;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #444;\n  color: #ece0e0ec;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #ece0e0ec;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #444;\n  color: #ece0e0ec;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #555;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ece0e0ec;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ece0e0ec;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid gray;\n  border-radius: 6px;\n  margin-left: 1.8rem;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 6px 0rem;\n  border: none;\n  width: 200%;\n  appearance: none;\n  background: none;\n  outline: none;\n  font-size: 0.95rem;\n  padding-left: 10px;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid gray;\n  padding: 6px 0.3rem;\n  background-color: #fff;\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-right: 1.8rem;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  font-size: 0.95rem;\n  padding-right: 0;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid gray;\n  border-radius: 6px;\n  align-items: center;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #fff;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 0;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n@media screen and (min-width: 1024px) {\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%] {\n    padding: 0.7rem 0rem 0.5rem 0rem;\n  }\n  [_nghost-%COMP%]   .select-dropdown[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1440px) {\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.6rem 0rem !important;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    padding: 10px;\n    height: 45px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    width: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    height: 45px;\n    padding: 12px 18px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    padding: 12px 16px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%] {\n    height: 45px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    padding: 8px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n    padding-left: 0;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n@media screen and (min-width: 2560px) {\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    padding: 3rem 0rem 2rem 0rem !important;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%] {\n    width: 120%;\n    height: 75px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 2rem;\n    height: 75px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    max-width: 50px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    right: 18px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    height: 75px;\n    padding: 16px 24px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%] {\n    gap: 3.5rem;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    padding: 16px 24px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%] {\n    height: 75px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    padding: 12px;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n    padding-left: 0;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   .searchButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  [_nghost-%COMP%]   .filters-page[_ngcontent-%COMP%]   .right-side-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJvb2stcGFnZS1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUUsNkJBQUE7QUFGTjtBQUlNO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtBQUZSO0FBS1E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBSFY7QUFNUTtFQUNFLGdCQUFBO0FBSlY7QUFRTTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQU5SO0FBUVE7RUFDRSxzQkFBQTtBQU5WO0FBWVE7O0VBRUUsc0JBQUE7RUFDQSxnQkFBQTtBQVZWO0FBYVE7RUFDRSxzQkFBQTtBQVhWO0FBYVU7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBWFo7QUFhWTtFQUNFLGdCQUFBO0FBWGQ7QUFlVTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUFiWjtBQWVZO0VBQ0Usc0JBQUE7QUFiZDtBQWlCVTtFQUNFLGdCQUFBO0FBZlo7QUFtQlE7RUFDRSxnQkFBQTtBQWpCVjtBQTJCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUF6Qko7QUEyQkk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBekJOO0FBMkJNO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXpCUjtBQTRCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBMUJSO0FBOEJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBNUJOO0FBOEJNO0VBQ0UseUJBQUE7QUE1QlI7QUFnQ0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBOUJOO0FBa0NNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBaENSO0FBbUNNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBakNSO0FBbUNRO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFqQ1Y7QUFvQ1E7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBbENWO0FBcUNRO0VBQ0UsZUFBQTtBQW5DVjtBQXVDTTtFQUNFLGlCQUFBO0FBckNSO0FBMENFO0VBQ0U7SUFDRSxnQ0FBQTtFQXhDSjtFQTBDRTtJQUNFLFdBQUE7RUF4Q0o7QUFDRjtBQTJDRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLCtCQUFBO0VBekNKO0VBMkNJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUF6Q047RUEyQ007SUFDRSxpQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VBekNSO0VBNENNO0lBQ0UsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VBMUNSO0VBNkNNO0lBQ0UsaUJBQUE7RUEzQ1I7RUErQ0k7SUFDRSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQTdDTjtFQWdESTtJQUNFLFNBQUE7RUE5Q047RUFnRE07SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBOUNSO0VBaURNO0lBQ0UsWUFBQTtFQS9DUjtFQWlEUTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtFQS9DVjtFQWtEUTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQWhEVjtFQW1EUTtJQUNFLGlCQUFBO0VBakRWO0VBcURNO0lBQ0UsaUJBQUE7RUFuRFI7QUFDRjtBQXdERTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSx1Q0FBQTtFQXRESjtFQXdESTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBdEROO0VBd0RNO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBdERSO0VBeURNO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VBdkRSO0VBMERNO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUF4RFI7RUE0REk7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBMUROO0VBNkRJO0lBQ0UsV0FBQTtFQTNETjtFQTZETTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQTNEUjtFQThETTtJQUNFLFlBQUE7RUE1RFI7RUE4RFE7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQTVEVjtFQStEUTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQTdEVjtFQWdFUTtJQUNFLGVBQUE7RUE5RFY7RUFrRU07SUFDRSxlQUFBO0VBaEVSO0FBQ0YiLCJmaWxlIjoiYm9vay1wYWdlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xyXG4gICAgLmZpbHRlcnMtcGFnZSB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTU1O1xyXG5cclxuICAgICAgLnNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICBjb2xvcjogI2VjZTBlMGVjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogI2VjZTBlMGVjO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgICAgIGNvbG9yOiAjZWNlMGUwZWM7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnJpZ2h0LXNpZGUtb3B0aW9ucyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCxcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgY29sb3I6ICNlY2UwZTBlYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2hCdXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWNlMGUwZWM7XHJcblxyXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNlY2UwZTBlYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWNlMGUwZWM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWNlMGUwZWM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjZWNlMGUwZWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAuZmlsdGVycy1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XHJcblxyXG4gICAgLnNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMS44cmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgc2VsZWN0IHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMHJlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgcGFkZGluZzogNnB4IDAuM3JlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LXNpZGUtb3B0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMXJlbTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW07XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoQnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmZpbHRlcnMtcGFnZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuN3JlbSAwcmVtIDAuNXJlbSAwcmVtO1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAuZmlsdGVycy1wYWdlIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjZyZW0gMHJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgLnNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG5cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0IG9wdGlvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yaWdodC1zaWRlLW9wdGlvbnMge1xyXG4gICAgICAgIGdhcDogMnJlbTtcclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2hCdXR0b24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XHJcbiAgICAuZmlsdGVycy1wYWdlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDNyZW0gMHJlbSAycmVtIDByZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAgIC5zZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0IG9wdGlvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmlnaHQtc2lkZS1vcHRpb25zIHtcclxuICAgICAgICBnYXA6IDMuNXJlbTtcclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoQnV0dG9uIHtcclxuICAgICAgICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Yxwt":
/*!*****************************************************************!*\
  !*** ./src/app/modules/books-page/books-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: BooksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksPageRoutingModule", function() { return BooksPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class BooksPageRoutingModule {
}
BooksPageRoutingModule.ɵfac = function BooksPageRoutingModule_Factory(t) { return new (t || BooksPageRoutingModule)(); };
BooksPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BooksPageRoutingModule });
BooksPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BooksPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/landing-page/landing-page.module */ "mhFj");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _modules_about_page_about_page_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/about-page/about-page.module */ "fMLr");
/* harmony import */ var _components_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toggle-button/toggle-button.component */ "imdu");
/* harmony import */ var _modules_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/contact-page/contact-page.component */ "rkbQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _modules_books_page_books_page_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/books-page/books-page.module */ "oFpZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _modules_new_books_new_books_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/new-books/new-books.component */ "KqmH");
/* harmony import */ var _modules_new_books_new_books_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/new-books/new-books.module */ "ICyc");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _modules_cart_cart_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/cart/cart.module */ "GcBr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















// import { MoreDetailsComponent } from './components/more-details/more-details.component';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _modules_landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_3__["LandingPageModule"],
            _modules_about_page_about_page_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageModule"],
            _modules_books_page_books_page_module__WEBPACK_IMPORTED_MODULE_9__["BooksPageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _modules_new_books_new_books_module__WEBPACK_IMPORTED_MODULE_12__["NewBooksModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__["InfiniteScrollModule"],
            _modules_cart_cart_module__WEBPACK_IMPORTED_MODULE_14__["CartModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_6__["ToggleButtonComponent"],
        _modules_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_7__["ContactPageComponent"],
        _modules_new_books_new_books_component__WEBPACK_IMPORTED_MODULE_11__["NewBooksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _modules_landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_3__["LandingPageModule"],
        _modules_about_page_about_page_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageModule"],
        _modules_books_page_books_page_module__WEBPACK_IMPORTED_MODULE_9__["BooksPageModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _modules_new_books_new_books_module__WEBPACK_IMPORTED_MODULE_12__["NewBooksModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__["InfiniteScrollModule"],
        _modules_cart_cart_module__WEBPACK_IMPORTED_MODULE_14__["CartModule"]] }); })();


/***/ }),

/***/ "fMLr":
/*!*********************************************************!*\
  !*** ./src/app/modules/about-page/about-page.module.ts ***!
  \*********************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page-routing.module */ "U4nq");
/* harmony import */ var _about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page.component */ "Ap20");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AboutPageModule {
}
AboutPageModule.ɵfac = function AboutPageModule_Factory(t) { return new (t || AboutPageModule)(); };
AboutPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AboutPageModule });
AboutPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _about_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["AboutPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AboutPageModule, { declarations: [_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _about_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["AboutPageRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]] }); })();


/***/ }),

/***/ "gZs2":
/*!*********************************************************************!*\
  !*** ./src/app/modules/new-books/services/new-book-card.service.ts ***!
  \*********************************************************************/
/*! exports provided: NewBookCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBookCardService", function() { return NewBookCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class NewBookCardService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://api.itbook.store/1.0/new";
    }
    getBooks() {
        return this.http.get(this.apiUrl);
    }
}
NewBookCardService.ɵfac = function NewBookCardService_Factory(t) { return new (t || NewBookCardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NewBookCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewBookCardService, factory: NewBookCardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modules_cart_services_cart_quantity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/cart/services/cart-quantity.service */ "xg83");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toggle-button/toggle-button.component */ "imdu");






function NavbarComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r2.label, " ");
} }
function NavbarComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r1.getTotalCartQuantity());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getTotalCartQuantity() > 99 ? (ctx_r1.getTotalCartQuantity() + "").slice(0, 2) + "..." : ctx_r1.getTotalCartQuantity(), " ");
} }
class NavbarComponent {
    constructor(cartQuantityService) {
        this.cartQuantityService = cartQuantityService;
        this.cartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cartItems = [];
        this.navLinks = [
            { label: 'About', path: 'about' },
            { label: 'Books', path: 'books' },
            { label: 'Contact us', path: 'contactus' },
            { label: 'New Books', path: 'newbooks' },
        ];
    }
    ngOnInit() {
        this.cartItems = this.cartQuantityService.getCartItems();
    }
    getTotalCartQuantity() {
        let totalQuantity = 0;
        const cartItems = this.cartQuantityService.getCartItems();
        cartItems.forEach(item => {
            totalQuantity += item.quantity;
        });
        return totalQuantity;
    }
    ngOnDestroy() {
        this.cartItems = [];
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_cart_services_cart_quantity_service__WEBPACK_IMPORTED_MODULE_1__["CartQuantityService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], outputs: { cartClick: "cartClick" }, decls: 14, vars: 2, consts: [[1, "custom-navbar"], [1, "navbar-container"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/pic.jpg", "alt", "Logo"], [1, "navbar-links"], [4, "ngFor", "ngForOf"], [1, "nav-link-cart", 3, "click"], [1, "bi", "bi-cart4"], [4, "ngIf"], ["routerLinkActive", "active-link", 3, "routerLink"], [1, "cart-quantity-badge"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_ng_container_8_Template, 4, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() { return ctx.cartClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_ng_container_12_Template, 3, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-toggle-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getTotalCartQuantity() > 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_4__["ToggleButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["[_nghost-%COMP%]   .custom-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3rem;\n  background-color: #a39bc9;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 0 3rem;\n}\n[_nghost-%COMP%]   .navbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n[_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px !important;\n  border-radius: 50%;\n  margin-right: 10px !important;\n}\n[_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n[_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n  font-size: 1.3rem;\n}\n[_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%] {\n  color: purple;\n}\n[_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: purple;\n}\n[_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nav-link-cart[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n}\n[_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nav-link-cart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1.6rem;\n}\n[_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nav-link-cart[_ngcontent-%COMP%]   .cart-quantity-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background-color: red;\n  color: white;\n  font-size: 12px;\n  border-radius: 50%;\n  width: 25px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n}\n[_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   app-toggle-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media screen and (min-width: 1024px) and (max-width: 1439px) {\n  [_nghost-%COMP%]   .custom-navbar[_ngcontent-%COMP%] {\n    height: 3.4rem;\n  }\n  [_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 20px;\n  }\n  [_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.3rem !important;\n  }\n  [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.2rem !important;\n  }\n  [_nghost-%COMP%]   app-toggle-button[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n@media screen and (min-width: 1440px) and (max-width: 2559px) {\n  [_nghost-%COMP%]   .custom-navbar[_ngcontent-%COMP%] {\n    height: 4rem;\n  }\n  [_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.5rem !important;\n  }\n  [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nav-link-cart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem !important;\n  }\n  [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nav-link-cart[_ngcontent-%COMP%]   .cart-quantity-badge[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 25px;\n    font-size: 1rem;\n    top: -10px;\n    right: -8px;\n  }\n}\n@media screen and (min-width: 2560px) {\n  [_nghost-%COMP%]   .custom-navbar[_ngcontent-%COMP%] {\n    height: 7rem;\n    padding: 0 4rem;\n  }\n  [_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 3.2rem !important;\n  }\n  [_nghost-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px !important;\n  }\n  [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 2.7rem !important;\n  }\n  [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    gap: 2rem !important;\n  }\n  [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nav-link-cart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nav-link-cart[_ngcontent-%COMP%]   .cart-quantity-badge[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 40px;\n    font-size: 1.5rem;\n    top: -10px;\n    right: -10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUZOO0FBSU07RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFGUjtBQUtNO0VBQ0UseUJBQUE7QUFIUjtBQVFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQU5OO0FBUU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU5SO0FBUVE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU5WO0FBUVU7RUFDRSxhQUFBO0FBTlo7QUFTVTtFQUNFLGFBQUE7QUFQWjtBQVdRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBVFY7QUFXVTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQVRaO0FBWVU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFWWjtBQWVNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBYlI7QUFpQkk7RUFDRTtJQUNFLGNBQUE7RUFmTjtFQWtCSTtJQUNFLFlBQUE7RUFoQk47RUFtQkk7SUFDRSw0QkFBQTtFQWpCTjtFQW9CSTtJQUNFLDRCQUFBO0VBbEJOO0VBcUJJO0lBQ0UsaUJBQUE7RUFuQk47QUFDRjtBQXNCSTtFQUNFO0lBQ0UsWUFBQTtFQXBCTjtFQXVCSTtJQUNFLGlCQUFBO0VBckJOO0VBd0JJO0lBQ0UsNEJBQUE7RUF0Qk47RUF5Qkk7SUFDRSwwQkFBQTtFQXZCTjtFQTBCSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBeEJOO0FBQ0Y7QUEyQkk7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VBekJOO0VBNEJJO0lBQ0UsNEJBQUE7RUExQk47RUE2Qkk7SUFDRSx1QkFBQTtFQTNCTjtFQThCSTtJQUNFLDRCQUFBO0VBNUJOO0VBK0JJO0lBQ0Usb0JBQUE7RUE3Qk47RUFnQ0k7SUFDRSxlQUFBO0VBOUJOO0VBaUNJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBL0JOO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmN1c3RvbS1uYXZiYXIge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTU1LCAyMDEpO1xyXG4gICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1saW5rcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTVweDtcclxuICBcclxuICAgICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDE1cHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICBcclxuICAgICAgICBsaSBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgXHJcbiAgICAgICAgICAmLmFjdGl2ZS1saW5rIHtcclxuICAgICAgICAgICAgY29sb3I6IHB1cnBsZTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcHVycGxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAubmF2LWxpbmstY2FydCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5jYXJ0LXF1YW50aXR5LWJhZGdlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICB9ICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgYXBwLXRvZ2dsZS1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KSB7XHJcbiAgICAgIC5jdXN0b20tbmF2YmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDMuNHJlbTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5uYXZiYXItYnJhbmQgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubmF2YmFyLWxpbmtzIHVsIGxpIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgYXBwLXRvZ2dsZS1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LXdpZHRoOiAyNTU5cHgpIHtcclxuICAgICAgLmN1c3RvbS1uYXZiYXIge1xyXG4gICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubmF2YmFyLWJyYW5kIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5uYXZiYXItbGlua3MgdWwgbGkgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdmJhci1saW5rcyB1bCAubmF2LWxpbmstY2FydCBpIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDsgLy8gSW5jcmVhc2VkIGljb24gc2l6ZSBzbGlnaHRseVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLm5hdmJhci1saW5rcyB1bCAubmF2LWxpbmstY2FydCAuY2FydC1xdWFudGl0eS1iYWRnZSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAgICAgLmN1c3RvbS1uYXZiYXIge1xyXG4gICAgICAgIGhlaWdodDogN3JlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDRyZW07XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm5hdmJhci1icmFuZCBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDMuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubmF2YmFyLWxpbmtzIHVsIGxpIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi43cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXZiYXItbGlua3MgdWwge1xyXG4gICAgICAgIGdhcDogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2YmFyLWxpbmtzIHVsIC5uYXYtbGluay1jYXJ0IGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTsgLy8gSW5jcmVhc2VkIGNhcnQgaWNvbiBzaXplXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAubmF2YmFyLWxpbmtzIHVsIC5uYXYtbGluay1jYXJ0IC5jYXJ0LXF1YW50aXR5LWJhZGdlIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "imdu":
/*!*********************************************************************!*\
  !*** ./src/app/components/toggle-button/toggle-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: ToggleButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonComponent", function() { return ToggleButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ToggleButtonComponent {
    constructor() {
        this.isDarkMode = false;
    }
    ngOnInit() {
        const theme = localStorage.getItem('theme') || 'light';
        this.setTheme(theme);
        this.isDarkMode = theme === 'dark';
    }
    // switching between light and dark mode
    toggleTheme(event) {
        const checked = event.target.checked;
        const theme = checked ? 'dark' : 'light';
        this.setTheme(theme);
    }
    setTheme(theme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${theme}-theme`);
        localStorage.setItem('theme', theme);
    }
}
ToggleButtonComponent.ɵfac = function ToggleButtonComponent_Factory(t) { return new (t || ToggleButtonComponent)(); };
ToggleButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleButtonComponent, selectors: [["app-toggle-button"]], decls: 3, vars: 1, consts: [[1, "switch"], ["type", "checkbox", 3, "checked", "change"], [1, "slider", "round"]], template: function ToggleButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ToggleButtonComponent_Template_input_change_1_listener($event) { return ctx.toggleTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isDarkMode);
    } }, styles: ["[_nghost-%COMP%]   .switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 30px;\n}\n[_nghost-%COMP%]   .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n[_nghost-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n[_nghost-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #4CAF50;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\n[_nghost-%COMP%]   .slider.round[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n[_nghost-%COMP%]   .slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n@media screen and (min-width: 1024px) {\n  [_nghost-%COMP%]   .switch[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 24px;\n  }\n  [_nghost-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n    height: 16px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n  }\n  [_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n    transform: translateX(16px);\n  }\n}\n@media screen and (min-width: 2560px) {\n  [_nghost-%COMP%]   .switch[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 45px;\n  }\n  [_nghost-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n    height: 35px;\n    width: 35px;\n    left: 5px;\n    bottom: 5px;\n  }\n  [_nghost-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n    transform: translateX(35px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFJSTtFQUNJLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQUhSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQUpSO0FBT0k7RUFDSSx5QkFBQTtBQUxSO0FBUUk7RUFDSSwyQkFBQTtBQU5SO0FBU0k7RUFHSSwyQkFBQTtBQVBSO0FBVUk7RUFDSSxtQkFBQTtBQVJSO0FBV0k7RUFDSSxrQkFBQTtBQVRSO0FBYUk7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBWFY7RUFjTTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFaVjtFQWVNO0lBQ0ksMkJBQUE7RUFiVjtBQUNGO0FBZ0JJO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQWRWO0VBaUJNO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQWZWO0VBa0JNO0lBQ0ksMkJBQUE7RUFoQlY7QUFDRiIsImZpbGUiOiJ0b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLnN3aXRjaCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuc3dpdGNoIGlucHV0IHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAjNENBRjUwO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAuc3dpdGNoIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XHJcbiAgICAgICAgLnN3aXRjaCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzVweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "kKmT":
/*!***********************************************************************!*\
  !*** ./src/app/modules/contact-page/services/contact-page.service.ts ***!
  \***********************************************************************/
/*! exports provided: ContactPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageService", function() { return ContactPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactPageService {
    constructor() { }
    saveData(contactData) {
        let existingData = JSON.parse(localStorage.getItem('contactData') || '[]');
        existingData.push(contactData);
        localStorage.setItem('contactData', JSON.stringify(existingData));
    }
    getData() {
        const data = localStorage.getItem('contactData');
        return data ? JSON.parse(data) : [];
    }
}
ContactPageService.ɵfac = function ContactPageService_Factory(t) { return new (t || ContactPageService)(); };
ContactPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactPageService, factory: ContactPageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mH6/":
/*!*****************************************************!*\
  !*** ./src/app/modules/cart/cart-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class CartRoutingModule {
}
CartRoutingModule.ɵfac = function CartRoutingModule_Factory(t) { return new (t || CartRoutingModule)(); };
CartRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CartRoutingModule });
CartRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CartRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "mhFj":
/*!*************************************************************!*\
  !*** ./src/app/modules/landing-page/landing-page.module.ts ***!
  \*************************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page-routing.module */ "vOCQ");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page.component */ "7TgW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class LandingPageModule {
}
LandingPageModule.ɵfac = function LandingPageModule_Factory(t) { return new (t || LandingPageModule)(); };
LandingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LandingPageModule });
LandingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["LandingPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LandingPageModule, { declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["LandingPageRoutingModule"]], exports: [_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]] }); })();


/***/ }),

/***/ "oFpZ":
/*!*********************************************************!*\
  !*** ./src/app/modules/books-page/books-page.module.ts ***!
  \*********************************************************/
/*! exports provided: BooksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksPageModule", function() { return BooksPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _books_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books-page-routing.module */ "Yxwt");
/* harmony import */ var _components_book_card_book_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/book-card/book-card.component */ "TUD7");
/* harmony import */ var _books_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books-page.component */ "sMQX");
/* harmony import */ var _components_book_page_filters_book_page_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/book-page-filters/book-page-filters.component */ "UOTb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _about_page_about_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-page/about-page.module */ "fMLr");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../about-page/about-page.component */ "Ap20");
/* harmony import */ var src_app_components_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/more-details/more-details.component */ "BGIG");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cart/cart.module */ "GcBr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class BooksPageModule {
}
BooksPageModule.ɵfac = function BooksPageModule_Factory(t) { return new (t || BooksPageModule)(); };
BooksPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: BooksPageModule });
BooksPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _books_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["BooksPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _about_page_about_page_module__WEBPACK_IMPORTED_MODULE_6__["AboutPageModule"],
            _cart_cart_module__WEBPACK_IMPORTED_MODULE_9__["CartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](BooksPageModule, { declarations: [_books_page_component__WEBPACK_IMPORTED_MODULE_3__["BooksPageComponent"],
        _components_book_card_book_card_component__WEBPACK_IMPORTED_MODULE_2__["BookCardComponent"],
        _components_book_page_filters_book_page_filters_component__WEBPACK_IMPORTED_MODULE_4__["BookPageFiltersComponent"],
        src_app_components_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_8__["MoreDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _books_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["BooksPageRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _about_page_about_page_module__WEBPACK_IMPORTED_MODULE_6__["AboutPageModule"],
        _cart_cart_module__WEBPACK_IMPORTED_MODULE_9__["CartModule"]], exports: [_books_page_component__WEBPACK_IMPORTED_MODULE_3__["BooksPageComponent"],
        _components_book_page_filters_book_page_filters_component__WEBPACK_IMPORTED_MODULE_4__["BookPageFiltersComponent"],
        _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"],
        src_app_components_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_8__["MoreDetailsComponent"]] }); })();


/***/ }),

/***/ "oJi4":
/*!***********************************************!*\
  !*** ./src/app/services/book-list.service.ts ***!
  \***********************************************/
/*! exports provided: BookListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListService", function() { return BookListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BookListService {
    constructor() {
        this.bookCategoryList = [
            'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Python',
            'MongoDB', 'Node', 'Databases', 'JSON',
            'AWS', 'Flask', 'Angular', 'Express'
        ];
    }
    getBooks() {
        return [...this.bookCategoryList];
    }
    addBook(book) {
        this.bookCategoryList.unshift(book);
    }
    updateBook(index, updatedBook) {
        if (index >= 0 && index < this.bookCategoryList.length) {
            this.bookCategoryList[index] = updatedBook;
        }
    }
    deleteBook(index) {
        if (index >= 0 && index < this.bookCategoryList.length) {
            this.bookCategoryList.splice(index, 1);
        }
    }
}
BookListService.ɵfac = function BookListService_Factory(t) { return new (t || BookListService)(); };
BookListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookListService, factory: BookListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rkbQ":
/*!****************************************************************!*\
  !*** ./src/app/modules/contact-page/contact-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contact_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/contact-page.service */ "kKmT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ContactPageComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.timestamp);
} }
class ContactPageComponent {
    constructor(contactPageService) {
        this.contactPageService = contactPageService;
        this.username = '';
        this.email = '';
        this.gender = '';
        this.message = '';
    }
    ngOnInit() {
    }
    storeData() {
        if (!this.username || !this.email || !this.gender || !this.message) {
            alert('Please fill out all fields.');
            return;
        }
        const formData = {
            username: this.username,
            email: this.email,
            gender: this.gender,
            message: this.message,
            timestamp: new Date().toISOString()
        };
        this.contactPageService.saveData(formData);
        this.username = '';
        this.email = '';
        this.gender = '';
        this.message = '';
    }
    getStoredData() {
        return this.contactPageService.getData();
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_page_service__WEBPACK_IMPORTED_MODULE_1__["ContactPageService"])); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["app-contact-page"]], decls: 50, vars: 6, consts: [[1, "content", "d-flex", "flex-column", "flex-md-row", "justify-content-center", "align-items-center"], [1, "box", "p-4", "shadow-lg", "bg-white", "rounded", "col-12", "col-md-8", "col-lg-6"], [1, "contactData"], [1, "mb-1", "text-primary"], [3, "submit"], [1, "mb-2"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "mb-2", "gender-container"], [1, "gender-option"], ["type", "radio", "name", "gender", "value", "Male", "id", "male", "required", "", 3, "ngModel", "ngModelChange"], ["for", "male", 1, "form-check-label"], ["type", "radio", "name", "gender", "value", "Female", "id", "female", "required", "", 3, "ngModel", "ngModelChange"], ["for", "female", 1, "form-check-label"], ["for", "message"], ["id", "message", "name", "message", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], [1, "submittedData", "mt-4", "mt-md-0"], ["id", "dataTable", 1, "table", "table-bordered"], [4, "ngFor", "ngForOf"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactPageComponent_Template_form_submit_5_listener() { return ctx.storeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactPageComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactPageComponent_Template_input_ngModelChange_18_listener($event) { return ctx.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactPageComponent_Template_input_ngModelChange_22_listener($event) { return ctx.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactPageComponent_Template_textarea_ngModelChange_28_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submitted Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "TimeStamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ContactPageComponent_ng_container_49_Template, 12, 5, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getStoredData());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   body[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   body[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #e0e0e0;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .box[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .box[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n  color: #e0e0e0;\n  box-shadow: 0 0.25rem 0.5rem rgba(255, 255, 255, 0.1);\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   input[type=text][_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   input[type=text][_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   input[type=email][_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   input[type=email][_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   textarea[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {\n  color: #fff;\n  border: 1px solid #555;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #ff21c0;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e21daa;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   table[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n  color: #fff;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   th[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even), .dark-theme   [_nghost-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #1f1f1f;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   label[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  color: black;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .contactData[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .contactData[_ngcontent-%COMP%] {\n  border-right: 1px solid gray;\n}\n[_nghost-%COMP%]   body[_ngcontent-%COMP%] {\n  background-color: gray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 100%;\n  background-color: gray;\n  padding: 10%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .box[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.5rem;\n  padding: 0.6rem;\n  margin: 0.5rem;\n  width: 70%;\n  max-width: 1200px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  box-sizing: border-box;\n  max-height: 70vh;\n  overflow: auto;\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   .contactData[_ngcontent-%COMP%] {\n  border-right: 1px solid #ddd;\n  padding-right: 1rem;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .submittedData[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n[_nghost-%COMP%]   .contactData[_ngcontent-%COMP%], [_nghost-%COMP%]   .submittedData[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #db34ac !important;\n  margin: 0;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0.3rem;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   input[type=text][_ngcontent-%COMP%], [_nghost-%COMP%]   input[type=email][_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5em;\n  border: 0.07em solid #ccc;\n  border-radius: 0.25em;\n}\n[_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 3em;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #db34ac;\n  color: white;\n  padding: 0.6em 1.2em;\n  border: none;\n  border-radius: 0.4em;\n  cursor: pointer;\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #b51788;\n}\n[_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin-top: 1.2em;\n  width: 100%;\n}\n[_nghost-%COMP%]   th[_ngcontent-%COMP%], [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  text-align: left;\n  border: 1px solid #ddd;\n}\n[_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #db34ac;\n  color: white;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n}\n[_nghost-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f1f1f1;\n}\n[_nghost-%COMP%]   .gender-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .gender-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .gender-option[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.3rem;\n}\n[_nghost-%COMP%]   .gender-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 2px;\n  transform: scale(0.8);\n}\n[_nghost-%COMP%]   .gender-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: normal;\n}\n@media (max-width: 1439px) {\n  [_nghost-%COMP%]   .box[_ngcontent-%COMP%] {\n    overflow: auto;\n    padding: 0.4rem;\n    margin: 0.3rem;\n    width: 90%;\n    max-height: 90vh;\n  }\n  [_nghost-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    padding: 0.4em 0.8em;\n  }\n  [_nghost-%COMP%]   input[type=text][_ngcontent-%COMP%], [_nghost-%COMP%]   input[type=email][_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {\n    padding: 0.4em;\n    font-size: 0.9rem;\n  }\n  [_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  [_nghost-%COMP%]   th[_ngcontent-%COMP%], [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.2rem;\n  }\n}\n@media (min-width: 1440px) {\n  [_nghost-%COMP%]   .box[_ngcontent-%COMP%] {\n    padding: 0.4rem;\n    margin: 0.3rem;\n    width: 80%;\n    max-height: 90vh;\n    overflow: hidden;\n  }\n  [_nghost-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    padding: 0.8em 1.5em;\n  }\n  [_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n    margin: 0;\n    margin-top: 3px;\n    transform: scale(1.2);\n  }\n}\n@media (min-width: 2560px) {\n  [_nghost-%COMP%]   .box[_ngcontent-%COMP%] {\n    padding: 2rem;\n    margin: 1.5rem auto;\n    width: 100%;\n    max-width: 1600px;\n    max-height: 90vh;\n  }\n  [_nghost-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    padding: 1em 2em;\n  }\n  [_nghost-%COMP%]   input[type=text][_ngcontent-%COMP%], [_nghost-%COMP%]   input[type=email][_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {\n    padding: 0.8em;\n    font-size: 1.8rem;\n  }\n  [_nghost-%COMP%]   textarea[_ngcontent-%COMP%] {\n    min-height: 4em;\n  }\n  [_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  [_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  [_nghost-%COMP%]   th[_ngcontent-%COMP%], [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.6rem;\n    font-size: 1.8rem;\n  }\n  [_nghost-%COMP%]   .gender-container[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  [_nghost-%COMP%]   .gender-container[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n    margin: 0;\n    margin-top: 3px;\n    transform: scale(1.5);\n  }\n  [_nghost-%COMP%]   .gender-option[_ngcontent-%COMP%] {\n    gap: 0.8rem;\n  }\n  [_nghost-%COMP%]   .gender-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-right: 0.6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUk7RUFDRSxzQkFSaUI7RUFTakIsY0FBQTtBQVROO0FBWUk7RUFDRSxzQkFiaUI7QUFHdkI7QUFhSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0FBWE47QUFjSTs7O0VBR0UsV0FBQTtFQUNBLHNCQUFBO0FBWk47QUFlSTtFQUNFLHlCQS9CYztBQWtCcEI7QUFlTTtFQUNFLHlCQUFBO0FBYlI7QUFpQkk7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFmTjtBQWtCSTtFQUNFLFlBQUE7QUFoQk47QUFtQkk7RUFDRSx5QkFBQTtBQWpCTjtBQW9CSTtFQUNFLFlBQUE7QUFsQk47QUFxQkk7RUFDRSw0QkFBQTtBQW5CTjtBQWdDRTtFQUNFLHNCQVJpQjtFQVNqQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBOUJKO0FBaUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBcEJpQjtFQXFCakIsWUFBQTtFQUNBLFlBQUE7QUEvQko7QUFrQ0U7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7QUFoQ0o7QUFtQ0U7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFqQ0o7QUFvQ0U7RUFDRSxrQkFBQTtBQWxDSjtBQXFDRTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FBbkNKO0FBc0NFOztFQUVFLGlCQTNEaUI7RUE0RGpCLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBcENKO0FBdUNFO0VBQ0UsZUFqRWE7QUE0QmpCO0FBd0NFO0VBQ0UsaUJBQUE7QUF0Q0o7QUF5Q0U7OztFQUdFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQXZDSjtBQTBDRTtFQUNFLGVBQUE7QUF4Q0o7QUEyQ0U7RUFDRSx5QkExRmM7RUEyRmQsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF6Q0o7QUEyQ0k7RUFDRSx5QkFBQTtBQXpDTjtBQTZDRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBM0NKO0FBOENFOztFQUVFLGdCQTFHYztFQTJHZCxnQkFBQTtFQUNBLHNCQUFBO0FBNUNKO0FBK0NFO0VBQ0UseUJBckhjO0VBc0hkLFlBQUE7QUE3Q0o7QUFnREU7RUFDRSx5QkFBQTtBQTlDSjtBQWlERTtFQUNFLHlCQUFBO0FBL0NKO0FBa0RFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFoREo7QUFrREk7RUFDRSxTQUFBO0FBaEROO0FBb0RFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBbERKO0FBb0RJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWxETjtBQXFESTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQW5ETjtBQXVERTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VBckRKO0VBd0RFOztJQUVFLGlCQUFBO0VBdERKO0VBeURFO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQXZESjtFQTBERTs7O0lBR0UsY0FBQTtJQUNBLGlCQUFBO0VBeERKO0VBMkRFO0lBQ0UsaUJBQUE7RUF6REo7RUE0REU7O0lBRUUsZUFBQTtFQTFESjtBQUNGO0FBNkRFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBM0RKO0VBOERFOztJQUVFLGVBQUE7RUE1REo7RUErREU7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0VBN0RKO0VBZ0VFO0lBQ0UsU0FBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQTlESjtBQUNGO0FBaUVFO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQS9ESjtFQWtFRTs7SUFFRSxlQUFBO0VBaEVKO0VBbUVFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBakVKO0VBb0VFOzs7SUFHRSxjQUFBO0lBQ0EsaUJBQUE7RUFsRUo7RUFxRUU7SUFDRSxlQUFBO0VBbkVKO0VBc0VFO0lBQ0UsZUFBQTtFQXBFSjtFQXVFRTtJQUNFLGlCQUFBO0VBckVKO0VBd0VFOztJQUVFLGVBQUE7SUFDQSxpQkFBQTtFQXRFSjtFQXlFRTtJQUNFLFdBQUE7RUF2RUo7RUF5RUk7SUFDRSxTQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0VBdkVOO0VBMkVFO0lBQ0UsV0FBQTtFQXpFSjtFQTJFSTtJQUNFLG9CQUFBO0VBekVOO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcclxuICAgICRwcmltYXJ5LWNvbG9yOiAjZmYyMWMwO1xyXG4gICAgJGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAkaGVhZGVyLWZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgJGZvcm0tcGFkZGluZzogMC4zcmVtO1xyXG4gICAgJHRhYmxlLXBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAkYm94LXBhZGRpbmc6IDFyZW07XHJcbiAgICAkYm94LW1hcmdpbjogMC43cmVtO1xyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuYm94IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjVyZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oI2I1MTc4OCwgMTAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGgge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZjtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdERhdGEge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHByaW1hcnktY29sb3I6ICNkYjM0YWM7XHJcbiAgJHNlY29uZGFyeS1jb2xvcjogIzJlY2M3MTtcclxuICAkYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAkaGVhZGVyLWZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICRmb3JtLXBhZGRpbmc6IDAuM3JlbTtcclxuICAkdGFibGUtcGFkZGluZzogMC4yNXJlbTtcclxuICAkYm94LXBhZGRpbmc6IDFyZW07XHJcbiAgJGJveC1tYXJnaW46IDAuN3JlbTtcclxuXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0RGF0YSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5zdWJtaXR0ZWREYXRhIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0RGF0YSxcclxuICAuc3VibWl0dGVkRGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICBoMSxcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6ICRoZWFkZXItZm9udC1zaXplO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZzogJGZvcm0tcGFkZGluZztcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBib3JkZXI6IDAuMDdlbSBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgbWluLWhlaWdodDogM2VtO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC42ZW0gMS4yZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I1MTc4ODtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdGgsXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogJHRhYmxlLXBhZGRpbmc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICB9XHJcblxyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgLmdlbmRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ2VuZGVyLW9wdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjNyZW07XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcclxuICAgIC5ib3gge1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgICBtYXJnaW46IDAuM3JlbTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWF4LWhlaWdodDogOTB2aDtcclxuICAgIH1cclxuXHJcbiAgICBoMSxcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICBwYWRkaW5nOiAwLjRlbTtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgLmJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgICAgbWFyZ2luOiAwLjNyZW07XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgaDEsXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgcGFkZGluZzogMC44ZW0gMS41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAgIC5ib3gge1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICBtYXJnaW46IDEuNXJlbSBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEsXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDRlbTtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5nZW5kZXItY29udGFpbmVyIHtcclxuICAgICAgZ2FwOiAxLjVyZW07XHJcblxyXG4gICAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdlbmRlci1vcHRpb24ge1xyXG4gICAgICBnYXA6IDAuOHJlbTtcclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "sMQX":
/*!************************************************************!*\
  !*** ./src/app/modules/books-page/books-page.component.ts ***!
  \************************************************************/
/*! exports provided: BooksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksPageComponent", function() { return BooksPageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_book_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/book-card.service */ "wOCU");
/* harmony import */ var _components_book_page_filters_book_page_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/book-page-filters/book-page-filters.component */ "UOTb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_book_card_book_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/book-card/book-card.component */ "TUD7");






function BooksPageComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading books, please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function BooksPageComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-book-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("moreDetails", function BooksPageComponent_ng_container_5_ng_container_2_Template_app_book_card_moreDetails_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.openModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const book_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("book", book_r6);
} }
function BooksPageComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BooksPageComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.books);
} }
function BooksPageComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No books found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function BooksPageComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BooksPageComponent_ng_template_6_ng_container_0_Template, 3, 0, "ng-container", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.loading && ctx_r3.noBooksFound);
} }
function BooksPageComponent_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BooksPageComponent_ng_container_8_ng_container_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const page_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.onPageChange(page_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", page_r11 === ctx_r10.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r11, " ");
} }
function BooksPageComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BooksPageComponent_ng_container_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onPageChange(ctx_r14.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BooksPageComponent_ng_container_8_ng_container_4_Template, 3, 3, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BooksPageComponent_ng_container_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onPageChange(ctx_r16.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.getVisiblePages());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.currentPage === ctx_r4.getTotalPages());
} }
class BooksPageComponent {
    constructor(bookcardService) {
        this.bookcardService = bookcardService;
        this.books = [];
        this.allBooks = [];
        this.filteredBooks = [];
        this.loading = false;
        this.noBooksFound = false;
        this.currentPage = 1;
        this.booksPerPage = 20;
        this.totalPages = 0;
        this.totalBooks = 0;
        this.searchText = 'mongodb';
        this.sortAscending = true;
        this.sortActive = false;
        this.selectedBookFilter = '';
        this.selectedBook = null;
    }
    ngOnInit() {
        this.fetchBooks();
    }
    fetchBooks() {
        this.loading = true;
        this.books = [];
        this.noBooksFound = false;
        this.totalPages = 0;
        this.bookcardService.getBooks(this.searchText, 1).subscribe(firstPage => {
            const totalBooksFromApi = parseInt(firstPage.total) || 0;
            const totalApiPages = Math.ceil(totalBooksFromApi / 10);
            const requests = [];
            for (let i = 1; i <= totalApiPages; i++) {
                requests.push(this.bookcardService.getBooks(this.searchText, i));
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(requests).subscribe((responses) => {
                this.allBooks = responses
                    .map(resp => resp.books || [])
                    .reduce((acc, curr) => acc.concat(curr), []);
                this.applyFilters();
                this.loading = false;
            }, error => {
                console.error('Failed to fetch all books:', error);
                this.loading = false;
                this.noBooksFound = true;
            });
        }, error => {
            console.error('Failed to fetch first page:', error);
            this.loading = false;
            this.noBooksFound = true;
        });
    }
    applyFilters() {
        let books = [...this.allBooks];
        if (this.selectedBookFilter) {
            const keyword = this.selectedBookFilter.toLowerCase();
            books = books.filter(book => (book.title && book.title.toLowerCase().includes(keyword)) ||
                (book.subtitle && book.subtitle.toLowerCase().includes(keyword)));
        }
        if (this.sortActive) {
            books.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('$', '')) || 0;
                const priceB = parseFloat(b.price.replace('$', '')) || 0;
                return this.sortAscending ? priceA - priceB : priceB - priceA;
            });
        }
        this.filteredBooks = books;
        this.totalBooks = books.length;
        this.totalPages = Math.ceil(this.totalBooks / this.booksPerPage);
        const start = (this.currentPage - 1) * this.booksPerPage;
        const end = start + this.booksPerPage;
        this.books = books.slice(start, end);
        this.noBooksFound = books.length === 0;
    }
    onSortByPrice(ascending) {
        this.sortAscending = ascending;
        this.sortActive = true;
        this.applyFilters();
    }
    onBookFilterChange(selectedBook) {
        this.selectedBookFilter = selectedBook.toLowerCase();
        this.currentPage = 1;
        this.applyFilters();
    }
    onSearchInput(inputText) {
        this.selectedBookFilter = inputText.toLowerCase();
        this.currentPage = 1;
        this.applyFilters();
    }
    onPageChange(page) {
        if (page < 1 || page > this.totalPages)
            return;
        this.currentPage = page;
        this.applyFilters();
    }
    getVisiblePages() {
        const pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }
    getTotalPages() {
        return this.totalPages;
    }
    openModal(book) {
        this.selectedBook = book;
    }
    closeModal() {
        this.selectedBook = null;
    }
}
BooksPageComponent.ɵfac = function BooksPageComponent_Factory(t) { return new (t || BooksPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_book_card_service__WEBPACK_IMPORTED_MODULE_2__["BookCardService"])); };
BooksPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BooksPageComponent, selectors: [["app-books-page"]], decls: 9, vars: 4, consts: [[1, "book-page-wrapper"], [1, "book-page-filters"], [3, "sortByPrice", "bookSelected", "searchKeyword"], [1, "cards-container-wrapper"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noBooks", ""], [1, "text-center", "my-4", "loading-message"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "cards-container"], [4, "ngFor", "ngForOf"], [3, "book", "moreDetails"], [1, "text-center", "mt-4", "text-muted", "no-books-message"], [1, "pagination-container", "text-center"], [3, "disabled", "click"], [3, "click"]], template: function BooksPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-book-page-filters", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sortByPrice", function BooksPageComponent_Template_app_book_page_filters_sortByPrice_2_listener($event) { return ctx.onSortByPrice($event); })("bookSelected", function BooksPageComponent_Template_app_book_page_filters_bookSelected_2_listener($event) { return ctx.onBookFilterChange($event); })("searchKeyword", function BooksPageComponent_Template_app_book_page_filters_searchKeyword_2_listener($event) { return ctx.onSearchInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BooksPageComponent_ng_container_4_Template, 5, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BooksPageComponent_ng_container_5_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BooksPageComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BooksPageComponent_ng_container_8_Template, 7, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.noBooksFound)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.noBooksFound);
    } }, directives: [_components_book_page_filters_book_page_filters_component__WEBPACK_IMPORTED_MODULE_3__["BookPageFiltersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_book_card_book_card_component__WEBPACK_IMPORTED_MODULE_5__["BookCardComponent"]], styles: ["[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .book-page-filters[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .book-page-filters[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n  background-color: #333;\n  border-top: 1px solid #555;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #ece0e0b5;\n  border: 1px solid #555 !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:focus {\n  background: #555 !important;\n  color: #ece0e0ec !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left.active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right.active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right.active[_ngcontent-%COMP%] {\n  background: #5cd460;\n  color: black;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:disabled, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:disabled, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:disabled {\n  background-color: #333;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:focus, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:focus, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:hover, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:focus, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:focus, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:disabled:hover, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:disabled:focus, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:disabled:focus, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:disabled:hover, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:disabled:focus, .dark-theme   [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:disabled:focus {\n  background: #333 !important;\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .no-books-message[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .no-books-message[_ngcontent-%COMP%] {\n  color: #ece0e0b5 !important;\n}\n[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .loading-message[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .loading-message[_ngcontent-%COMP%] {\n  color: #ece0e0b5;\n}\n[_nghost-%COMP%]   .book-page-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .book-page-filters[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding: 0.6rem 0.3rem 0rem;\n}\n[_nghost-%COMP%]   .cards-container-wrapper[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  padding-bottom: 45px;\n  scrollbar-width: none;\n}\n[_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1.2rem;\n  padding-top: 0;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  padding: 6px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #e0e0e0;\n  z-index: 100;\n}\n[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 15px;\n  margin: 0 3px;\n  border: 1px solid #4caf50;\n  border-radius: 50%;\n  background: white;\n  color: black;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:focus {\n  background: gray !important;\n  color: black !important;\n}\n[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right.active[_ngcontent-%COMP%] {\n  background: #4caf50;\n  color: black;\n}\n[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  border-color: #ccc;\n  background: #f5f5f5;\n  color: #999 !important;\n}\n[_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:focus, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:focus, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%]:disabled:focus, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:disabled:hover, [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%]:disabled:focus {\n  background: #f5f5f5 !important;\n  color: #999 !important;\n}\n@media (min-width: 1024px) and (max-width: 1439px) {\n  [_nghost-%COMP%]   .book-page-filters[_ngcontent-%COMP%] {\n    padding: 0.3rem 1rem 0rem;\n  }\n  [_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%] {\n    gap: 0.8rem;\n  }\n}\n@media (min-width: 1440px) and (max-width: 2559px) {\n  [_nghost-%COMP%]   .book-page-filters[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 0rem 1rem;\n  }\n  [_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%] {\n    gap: 3.35rem;\n  }\n  [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 2560px) {\n  [_nghost-%COMP%]   .book-page-filters[_ngcontent-%COMP%] {\n    padding: 2.8rem 2.2rem 0rem;\n  }\n  [_nghost-%COMP%]   .cards-container[_ngcontent-%COMP%] {\n    padding: 0 2rem 0;\n    gap: 3rem;\n    margin-top: 0;\n  }\n  [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n    padding: 20px 0;\n  }\n  [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-left[_ngcontent-%COMP%], [_nghost-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .arrow-btn-right[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib29rcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0Usc0JBQUE7QUFGTjtBQUtJO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtBQUhOO0FBTU07Ozs7RUFJRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFKUjtBQU1ROzs7Ozs7O0VBRUUsMkJBQUE7RUFDQSwyQkFBQTtBQUNWO0FBRVE7Ozs7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFHVjtBQUFROzs7O0VBQ0Usc0JBQUE7QUFLVjtBQUpVOzs7Ozs7O0VBRUUsMkJBQUE7RUFDQSxnQkFBQTtBQVdaO0FBTkk7RUFDRSwyQkFBQTtBQVFOO0FBTkk7RUFDRSxnQkFBQTtBQVFOO0FBSEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUtKO0FBRkU7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBSUo7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUVKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQURKO0FBTUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFKSjtBQU1JOzs7O0VBSUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUpOO0FBTU07Ozs7Ozs7RUFFRSwyQkFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFFTTs7OztFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUdSO0FBQU07Ozs7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFLUjtBQUhROzs7Ozs7O0VBRUUsOEJBQUE7RUFDQSxzQkFBQTtBQVVWO0FBTEU7RUFDRTtJQUNFLHlCQUFBO0VBT0o7RUFKRTtJQUNFLFdBQUE7RUFNSjtBQUNGO0FBRkU7RUFDRTtJQUNFLDRCQUFBO0VBSUo7RUFBRTtJQUNFLFlBQUE7RUFFSjtFQUNFOzs7O0lBSUUsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0U7SUFDRSwyQkFBQTtFQUFKO0VBR0U7SUFDRSxpQkFBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0VBREo7RUFLRTtJQUNFLGVBQUE7RUFISjtFQU1FOzs7O0lBSUUsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBSko7QUFDRiIsImZpbGUiOiJib29rcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcclxuXHJcbiAgICAuYm9vay1wYWdlLWZpbHRlcnMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTU1O1xyXG5cclxuXHJcbiAgICAgIGJ1dHRvbixcclxuICAgICAgLmJ0bixcclxuICAgICAgLmFycm93LWJ0bi1sZWZ0LFxyXG4gICAgICAuYXJyb3ctYnRuLXJpZ2h0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGNvbG9yOiAjZWNlMGUwYjU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzU1NSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29sb3I6ICNlY2UwZTBlYyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzVjZDQ2MDtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2VjZTBlMGI1O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5vLWJvb2tzLW1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogI2VjZTBlMGI1ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubG9hZGluZy1tZXNzYWdlIHtcclxuICAgICAgY29sb3I6ICNlY2UwZTBiNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC5ib29rLXBhZ2Utd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLmJvb2stcGFnZS1maWx0ZXJzIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjNyZW0gMHJlbTtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmRzLWNvbnRhaW5lci13cmFwcGVyIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDEuMnJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICBidXR0b24sXHJcbiAgICAuYnRuLFxyXG4gICAgLmFycm93LWJ0bi1sZWZ0LFxyXG4gICAgLmFycm93LWJ0bi1yaWdodCB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRjYWY1MDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJjpob3ZlcixcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzRjYWY1MDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2NjYztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogIzk5OSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KXtcclxuICAgIC5ib29rLXBhZ2UtZmlsdGVycyB7XHJcbiAgICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtIDByZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICAgIGdhcDogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSAgYW5kIChtYXgtd2lkdGg6IDI1NTlweCl7XHJcbiAgICAuYm9vay1wYWdlLWZpbHRlcnMge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMHJlbSAxcmVtO1xyXG4gICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkcy1jb250YWluZXIge1xyXG4gICAgICBnYXA6IDMuMzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24tY29udGFpbmVyIGJ1dHRvbixcclxuICAgIC5wYWdpbmF0aW9uLWNvbnRhaW5lciAuYnRuLFxyXG4gICAgLnBhZ2luYXRpb24tY29udGFpbmVyIC5hcnJvdy1idG4tbGVmdCxcclxuICAgIC5wYWdpbmF0aW9uLWNvbnRhaW5lciAuYXJyb3ctYnRuLXJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDI1NjBweCkge1xyXG4gICAgLmJvb2stcGFnZS1maWx0ZXJzIHtcclxuICAgICAgcGFkZGluZzogMi44cmVtIDIuMnJlbSAwcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkcy1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiAwIDJyZW0gMDtcclxuICAgICAgZ2FwOiAzcmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24tY29udGFpbmVyIGJ1dHRvbixcclxuICAgIC5wYWdpbmF0aW9uLWNvbnRhaW5lciAuYnRuLFxyXG4gICAgLnBhZ2luYXRpb24tY29udGFpbmVyIC5hcnJvdy1idG4tbGVmdCxcclxuICAgIC5wYWdpbmF0aW9uLWNvbnRhaW5lciAuYXJyb3ctYnRuLXJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vOCQ":
/*!*********************************************************************!*\
  !*** ./src/app/modules/landing-page/landing-page-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class LandingPageRoutingModule {
}
LandingPageRoutingModule.ɵfac = function LandingPageRoutingModule_Factory(t) { return new (t || LandingPageRoutingModule)(); };
LandingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LandingPageRoutingModule });
LandingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/landing-page/landing-page.component */ "7TgW");
/* harmony import */ var _modules_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about-page/about-page.component */ "Ap20");
/* harmony import */ var _modules_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact-page/contact-page.component */ "rkbQ");
/* harmony import */ var _modules_books_page_books_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/books-page/books-page.component */ "sMQX");
/* harmony import */ var _modules_new_books_new_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/new-books/new-books.component */ "KqmH");
/* harmony import */ var _components_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/more-details/more-details.component */ "BGIG");
/* harmony import */ var _modules_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/cart/cart.component */ "OyTY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: 'about ', component: _modules_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"] },
    { path: 'books', component: _modules_books_page_books_page_component__WEBPACK_IMPORTED_MODULE_4__["BooksPageComponent"] },
    { path: 'contactus', component: _modules_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactPageComponent"] },
    { path: 'newbooks', component: _modules_new_books_new_books_component__WEBPACK_IMPORTED_MODULE_5__["NewBooksComponent"], },
    { path: 'more-details/:isbn13', component: _components_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_6__["MoreDetailsComponent"] },
    { path: 'cart', component: _modules_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
    { path: '', component: _modules_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wOCU":
/*!******************************************************************!*\
  !*** ./src/app/modules/books-page/services/book-card.service.ts ***!
  \******************************************************************/
/*! exports provided: BookCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCardService", function() { return BookCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class BookCardService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://api.itbook.store/1.0/search';
    }
    getBooks(query, page) {
        return this.http.get(`${this.baseUrl}/${query}/${page}`);
    }
}
BookCardService.ɵfac = function BookCardService_Factory(t) { return new (t || BookCardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BookCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookCardService, factory: BookCardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "xg83":
/*!****************************************************************!*\
  !*** ./src/app/modules/cart/services/cart-quantity.service.ts ***!
  \****************************************************************/
/*! exports provided: CartQuantityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartQuantityService", function() { return CartQuantityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CartQuantityService {
    constructor() {
        this.cartItems = [];
        this.quantities = {};
        this.loadCartFromLocalStorage();
        window.addEventListener('storage', this.onStorageChange.bind(this));
    }
    saveCartToLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        localStorage.setItem('quantities', JSON.stringify(this.quantities));
    }
    loadCartFromLocalStorage() {
        const storedCartItems = localStorage.getItem('cartItems');
        const storedQuantities = localStorage.getItem('quantities');
        if (storedCartItems) {
            this.cartItems = JSON.parse(storedCartItems);
        }
        if (storedQuantities) {
            this.quantities = JSON.parse(storedQuantities);
        }
    }
    onStorageChange(event) {
        if (event.key === 'cartItems' || event.key === 'quantities') {
            this.loadCartFromLocalStorage();
        }
    }
    getQuantity(bookId) {
        return this.quantities[bookId] || 1;
    }
    increment(bookId) {
        this.quantities[bookId] = this.getQuantity(bookId) + 1;
        this.updateCart(bookId);
    }
    decrement(bookId) {
        const currentQty = this.getQuantity(bookId);
        if (currentQty > 1) {
            this.quantities[bookId] = currentQty - 1;
            this.updateCart(bookId);
        }
    }
    updateQuantity(bookId, newQty) {
        if (newQty > 0) {
            this.quantities[bookId] = newQty;
            this.updateCart(bookId);
        }
    }
    addToCart(book) {
        const index = this.cartItems.findIndex(item => item.bookId === book.bookId);
        if (index === -1) {
            this.cartItems.push(Object.assign(Object.assign({}, book), { totalPrice: book.price * book.quantity }));
        }
        else {
            this.cartItems[index].quantity = book.quantity;
            this.cartItems[index].totalPrice = book.price * book.quantity;
        }
        this.quantities[book.bookId] = book.quantity;
        this.saveCartToLocalStorage();
    }
    getCartItems() {
        return this.cartItems;
    }
    updateCart(bookId) {
        const index = this.cartItems.findIndex(item => item.bookId === bookId);
        if (index !== -1) {
            const qty = this.quantities[bookId];
            this.cartItems[index].quantity = qty;
            this.cartItems[index].totalPrice = (this.cartItems[index].price * qty).toFixed(2);
        }
        this.saveCartToLocalStorage();
    }
    deleteFromCart(bookId) {
        const updatedCartItems = this.cartItems.filter(item => item.bookId !== bookId);
        delete this.quantities[bookId];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        localStorage.setItem('quantities', JSON.stringify(this.quantities));
        this.cartItems = updatedCartItems;
    }
}
CartQuantityService.ɵfac = function CartQuantityService_Factory(t) { return new (t || CartQuantityService)(); };
CartQuantityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartQuantityService, factory: CartQuantityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map