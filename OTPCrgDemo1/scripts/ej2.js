/*!
 * filename: ej2.js
 * version : 26.1.38
 * Copyright Syncfusion Inc. 2001 - 2024. All rights reserved.
 * Use of this code is subject to the terms of our license.
 * A copy of the current license can be obtained at any time by e-mailing
 * licensing@syncfusion.com. Any infringement will be prosecuted under
 * applicable laws.
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./crg-resources/26.1.38/src/ej2-1719214232574/copy.js":
/*!*************************************************************!*\
  !*** ./crg-resources/26.1.38/src/ej2-1719214232574/copy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

function copy(copied, first, second, deep) {
    var result = copied || {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return "continue";
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copyObj = obj1[key];
            var clone;
            if (deep && (ejs.base.isObject(copyObj) || Array.isArray(copyObj))) {
                if (ejs.base.isObject(copyObj)) {
                    clone = src ? src : {};
                    result[key] = copy({}, clone, copyObj, deep);
                }
                else {
                    clone = src ? src : [];
                    result[key] = copy([], clone,copyObj, deep);
                }
            }
            else {
                result[key] = copyObj;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
exports.copy = copy;


/***/ }),

/***/ "./crg-resources/26.1.38/src/ej2-1719214232574/otp-input.js":
/*!******************************************************************!*\
  !*** ./crg-resources/26.1.38/src/ej2-1719214232574/otp-input.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base1: () => (/* binding */ base1),
/* harmony export */   inputs1: () => (/* binding */ inputs1)
/* harmony export */ });
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy */ "./crg-resources/26.1.38/src/ej2-1719214232574/copy.js");
/* harmony import */ var _ej2_resources_26_1_38_scripts_ej2_inputs_otp_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ej2-resources/26.1.38/scripts/ej2-inputs/otp-input */ "./ej2-resources/26.1.38/scripts/ej2-inputs/otp-input/index.js");
/* harmony import */ var _ej2_resources_26_1_38_scripts_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ej2-resources/26.1.38/scripts/ej2-base */ "./ej2-resources/26.1.38/scripts/ej2-base/index.js");




var inputs1 = {};
var base1 = {};

(0,_copy__WEBPACK_IMPORTED_MODULE_0__.copy)(inputs1, _ej2_resources_26_1_38_scripts_ej2_inputs_otp_input__WEBPACK_IMPORTED_MODULE_1__);
(0,_copy__WEBPACK_IMPORTED_MODULE_0__.copy)(base1, _ej2_resources_26_1_38_scripts_ej2_base__WEBPACK_IMPORTED_MODULE_2__);



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/ajax.js":
/*!********************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/ajax.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ajax: () => (/* binding */ Ajax)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");

var headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
var defaultType = 'GET';
/**
 * Ajax class provides ability to make asynchronous HTTP request to the server
 * ```typescript
 *   var ajax = new Ajax("index.html", "GET", true);
 *   ajax.send().then(
 *               function (value) {
 *                   console.log(value);
 *               },
 *               function (reason) {
 *                   console.log(reason);
 *               });
 * ```
 */
var Ajax = /** @__PURE__ @class */ (function () {
    /**
     * Constructor for Ajax class
     *
     * @param  {string|Object} options ?
     * @param  {string} type ?
     * @param  {boolean} async ?
     * @returns defaultType any
     */
    function Ajax(options, type, async, contentType) {
        /**
         * A boolean value indicating whether the request should be sent asynchronous or not.
         *
         * @default true
         */
        this.mode = true;
        /**
         * A boolean value indicating whether to ignore the promise reject.
         *
         * @private
         * @default true
         */
        this.emitError = true;
        this.options = {};
        if (typeof options === 'string') {
            this.url = options;
            this.type = type ? type.toUpperCase() : defaultType;
            this.mode = !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(async) ? async : true;
        }
        else if (typeof options === 'object') {
            this.options = options;
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.merge)(this, this.options);
        }
        this.type = this.type ? this.type.toUpperCase() : defaultType;
        this.contentType = (this.contentType !== undefined) ? this.contentType : contentType;
    }
    /**
     *
     * Send the request to server.
     *
     * @param {any} data - To send the user data
     * @returns {Promise} ?
     */
    Ajax.prototype.send = function (data) {
        var _this = this;
        this.data = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(data) ? this.data : data;
        var eventArgs = {
            cancel: false,
            httpRequest: null
        };
        var promise = new Promise(function (resolve, reject) {
            _this.httpRequest = new XMLHttpRequest();
            _this.httpRequest.onreadystatechange = function () { _this.stateChange(resolve, reject); };
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(_this.onLoad)) {
                _this.httpRequest.onload = _this.onLoad;
            }
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(_this.onProgress)) {
                _this.httpRequest.onprogress = _this.onProgress;
            }
            /* istanbul ignore next */
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(_this.onAbort)) {
                _this.httpRequest.onabort = _this.onAbort;
            }
            /* istanbul ignore next */
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(_this.onError)) {
                _this.httpRequest.onerror = _this.onError;
            }
            //** Upload Events **/
            /* istanbul ignore next */
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(_this.onUploadProgress)) {
                _this.httpRequest.upload.onprogress = _this.onUploadProgress;
            }
            _this.httpRequest.open(_this.type, _this.url, _this.mode);
            // Set default headers
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(_this.data) && _this.contentType !== null) {
                _this.httpRequest.setRequestHeader('Content-Type', _this.contentType || 'application/json; charset=utf-8');
            }
            if (_this.beforeSend) {
                eventArgs.httpRequest = _this.httpRequest;
                _this.beforeSend(eventArgs);
            }
            if (!eventArgs.cancel) {
                _this.httpRequest.send(!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(_this.data) ? _this.data : null);
            }
        });
        return promise;
    };
    Ajax.prototype.successHandler = function (data) {
        if (this.onSuccess) {
            this.onSuccess(data, this);
        }
        return data;
    };
    Ajax.prototype.failureHandler = function (reason) {
        if (this.onFailure) {
            this.onFailure(this.httpRequest);
        }
        return reason;
    };
    Ajax.prototype.stateChange = function (resolve, reject) {
        var data = this.httpRequest.responseText;
        if (this.dataType && this.dataType.toLowerCase() === 'json') {
            if (data === '') {
                data = undefined;
            }
            else {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                    // no exception handle
                }
            }
        }
        if (this.httpRequest.readyState === 4) {
            //success range should be 200 to 299
            if ((this.httpRequest.status >= 200 && this.httpRequest.status <= 299) || this.httpRequest.status === 304) {
                resolve(this.successHandler(data));
            }
            else {
                if (this.emitError) {
                    reject(new Error(this.failureHandler(this.httpRequest.statusText)));
                }
                else {
                    resolve();
                }
            }
        }
    };
    /**
     * To get the response header from XMLHttpRequest
     *
     * @param  {string} key Key to search in the response header
     * @returns {string} ?
     */
    Ajax.prototype.getResponseHeader = function (key) {
        var responseHeaders = {};
        var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        while (headers) {
            responseHeaders[headers[1].toLowerCase()] = headers[2];
            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        }
        var header = responseHeaders[key.toLowerCase()];
        return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(header) ? null : header;
    };
    return Ajax;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/animation.js":
/*!*************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/animation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   GlobalAnimationMode: () => (/* binding */ GlobalAnimationMode),
/* harmony export */   animationMode: () => (/* binding */ animationMode),
/* harmony export */   enableRipple: () => (/* binding */ enableRipple),
/* harmony export */   isRippleEnabled: () => (/* binding */ isRippleEnabled),
/* harmony export */   rippleEffect: () => (/* binding */ rippleEffect),
/* harmony export */   setGlobalAnimation: () => (/* binding */ setGlobalAnimation)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./ej2-resources/26.1.38/scripts/ej2-base/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./ej2-resources/26.1.38/scripts/ej2-base/browser.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/26.1.38/scripts/ej2-base/event-handler.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/26.1.38/scripts/ej2-base/notify-property-change.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * The Animation framework provide options to animate the html DOM elements
 * ```typescript
 *   let animeObject = new Animation({
 *      name: 'SlideLeftIn',
 *      duration: 1000
 *   });
 *   animeObject.animate('#anime1');
 *   animeObject.animate('#anime2', { duration: 500 });
 * ```
 */
var Animation = /** @__PURE__ @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        /**
         * @private
         */
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation_1 = Animation;
    /**
     * Applies animation to the current element.
     *
     * @param {string | HTMLElement} element - Element which needs to be animated.
     * @param {AnimationModel} options - Overriding default animation settings.
     * @returns {void} ?
     */
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call((0,_dom__WEBPACK_IMPORTED_MODULE_0__.selectAll)(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    /**
     * Stop the animation effect on animated element.
     *
     * @param {HTMLElement} element - Element which needs to be stop the animation.
     * @param {AnimationOptions} model - Handling the animation model at stop function.
     * @returns {void}
     */
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    /**
     * Set delay to animation element
     *
     * @param {AnimationModel} model ?
     * @returns {void}
     */
    Animation.delayAnimation = function (model) {
        if (animationMode === 'Disable' || animationMode === GlobalAnimationMode.Disable) {
            if (model.begin) {
                model.begin.call(this, model);
            }
            if (model.end) {
                model.end.call(this, model);
            }
        }
        else {
            if (model.delay) {
                setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
            }
            else {
                Animation_1.applyAnimation(model);
            }
        }
    };
    /**
     * Triggers animation
     *
     * @param {AnimationModel} model ?
     * @returns {void}
     */
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    // let step: number = model.timeStamp = timeStamp - startTime;
                    /** phantomjs workaround for timestamp fix */
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    /** phantomjs workaround end */
                    // trigger animation begin event
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        // apply animation effect to the current element
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        // repeat requestAnimationFrame
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        // clear requestAnimationFrame
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    //startTime = performance.now();
                    // set initial requestAnimationFrame
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    /**
     * Returns Animation Model
     *
     * @param {AnimationModel} options ?
     * @returns {AnimationModel} ?
     */
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    /**
     * @private
     * @param {AnimationModel} newProp ?
     * @param {AnimationModel} oldProp ?
     * @returns {void} ?
     */
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
        // no code needed
    };
    /**
     * Returns module name as animation
     *
     * @private
     * @returns {void} ?
     */
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    /**
     *
     * @private
     * @returns {void} ?
     */
    Animation.prototype.destroy = function () {
        //Override base destroy;
    };
    var Animation_1;
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_4__.Property)('FadeIn')
    ], Animation.prototype, "name", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_4__.Property)(400)
    ], Animation.prototype, "duration", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_4__.Property)('ease')
    ], Animation.prototype, "timingFunction", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_4__.Property)(0)
    ], Animation.prototype, "delay", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_4__.Event)()
    ], Animation.prototype, "progress", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_4__.Event)()
    ], Animation.prototype, "begin", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_4__.Event)()
    ], Animation.prototype, "end", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_4__.Event)()
    ], Animation.prototype, "fail", void 0);
    Animation = Animation_1 = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_4__.NotifyPropertyChanges
    ], Animation);
    return Animation;
}(_base__WEBPACK_IMPORTED_MODULE_1__.Base));

/**
 * Ripple provides material theme's wave effect when an element is clicked
 * ```html
 * <div id='ripple'></div>
 * <script>
 *   rippleEffect(document.getElementById('ripple'));
 * </script>
 * ```
 *
 * @private
 * @param {HTMLElement} element - Target element
 * @param {RippleOptions} rippleOptions - Ripple options .
 * @param {Function} done .
 * @returns {void} .
 */
function rippleEffect(element, rippleOptions, done) {
    var rippleModel = getRippleModel(rippleOptions);
    if (rippleModel.rippleFlag === false || (rippleModel.rippleFlag === undefined && !isRippleEnabled)) {
        return (function () {
            // do nothing.
        });
    }
    element.setAttribute('data-ripple', 'true');
    _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
    _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
    _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    if (_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.isPointer) {
        _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    }
    return (function () {
        element.removeAttribute('data-ripple');
        _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.remove(element, 'mousedown', rippleHandler);
        _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.remove(element, 'mouseup', rippleUpHandler);
        _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
        _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.remove(element, 'transitionend', rippleLeaveHandler);
    });
}
/**
 * Handler for ripple model
 *
 * @param {RippleOptions} rippleOptions ?
 * @returns {RippleOptions} ?
 */
function getRippleModel(rippleOptions) {
    var rippleModel = {
        selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
        ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
        rippleFlag: rippleOptions && rippleOptions.rippleFlag,
        isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
        duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
    };
    return rippleModel;
}
/**
 * Handler for ripple event
 *
 * @param {MouseEvent} e ?
 * @returns {void} ?
 * @private
 */
function rippleHandler(e) {
    var target = (e.target);
    var selector = this.rippleOptions.selector;
    var element = selector ? (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closest)(target, selector) : target;
    if (!element || (this.rippleOptions && (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closest)(target, this.rippleOptions.ignore))) {
        return;
    }
    var offset = element.getBoundingClientRect();
    var offsetX = e.pageX - document.body.scrollLeft;
    var offsetY = e.pageY - ((!document.body.scrollTop && document.documentElement) ?
        document.documentElement.scrollTop : document.body.scrollTop);
    var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
    var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
    var radius = Math.sqrt(pageX * pageX + pageY * pageY);
    var diameter = radius * 2 + 'px';
    var x = offsetX - offset.left - radius;
    var y = offsetY - offset.top - radius;
    if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
        x = 0;
        y = 0;
        diameter = '100%';
    }
    element.classList.add('e-ripple');
    var duration = this.rippleOptions.duration.toString();
    var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' +
        'transition-duration: ' + duration + 'ms;';
    var rippleElement = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { className: 'e-ripple-element', styles: styles });
    element.appendChild(rippleElement);
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');
    rippleElement.style.transform = 'scale(1)';
    if (element !== this.parent) {
        _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
    }
}
/**
 * Handler for ripple element mouse up event
 *
 * @param {MouseEvent} e ?
 * @returns {void} ?
 * @private
 */
function rippleUpHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for ripple element mouse move event
 *
 * @param {MouseEvent} e ?
 * @returns {void} ?
 * @private
 */
function rippleLeaveHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for removing ripple element
 *
 * @param {MouseEvent} e ?
 * @param {RippleArgs} eventArgs ?
 * @returns {void} ?
 * @private
 */
function removeRipple(e, eventArgs) {
    var duration = eventArgs.rippleOptions.duration;
    var target = (e.target);
    var selector = eventArgs.rippleOptions.selector;
    var element = selector ? (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closest)(target, selector) : target;
    if (!element || (element && element.className.indexOf('e-ripple') === -1)) {
        return;
    }
    var rippleElements = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.selectAll)('.e-ripple-element', element);
    var rippleElement = rippleElements[rippleElements.length - 1];
    if (rippleElement) {
        rippleElement.style.opacity = '0.5';
    }
    if (eventArgs.parent !== element) {
        _event_handler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
    }
    setTimeout(function () {
        if (rippleElement && rippleElement.parentNode) {
            rippleElement.parentNode.removeChild(rippleElement);
        }
        if (!element.getElementsByClassName('e-ripple-element').length) {
            element.classList.remove('e-ripple');
        }
        if (eventArgs.done) {
            eventArgs.done(e);
        }
    }, duration);
}
var isRippleEnabled = false;
/**
 * Animation Module provides support to enable ripple effect functionality to Essential JS 2 components.
 *
 * @param {boolean} isRipple Specifies the boolean value to enable or disable ripple effect.
 * @returns {boolean} ?
 */
function enableRipple(isRipple) {
    isRippleEnabled = isRipple;
    return isRippleEnabled;
}
/**
 * Defines the Modes of Global animation.
 *
 * @private
 */
var animationMode;
/**
 * This method is used to enable or disable the animation for all components.
 *
 * @param {string|GlobalAnimationMode} value - Specifies the value to enable or disable the animation for all components. When set to 'enable', it enables the animation for all components, regardless of the individual component's animation settings. When set to 'disable', it disables the animation for all components, regardless of the individual component's animation settings.
 * @returns {void}
 */
function setGlobalAnimation(value) {
    animationMode = value;
}
/**
 * Defines the global animation modes for all components.
 */
var GlobalAnimationMode;
(function (GlobalAnimationMode) {
    /**
     * Defines the global animation mode as Default. Animation is enabled or disabled based on the component's animation settings.
     */
    GlobalAnimationMode["Default"] = "Default";
    /**
     * Defines the global animation mode as Enable. Enables the animation for all components, regardless of the individual component's animation settings.
     */
    GlobalAnimationMode["Enable"] = "Enable";
    /**
     * Defines the global animation mode as Disable. Disables the animation for all components, regardless of the individual component's animation settings.
     */
    GlobalAnimationMode["Disable"] = "Disable";
})(GlobalAnimationMode || (GlobalAnimationMode = {}));


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/base.js":
/*!********************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/base.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   getComponent: () => (/* binding */ getComponent),
/* harmony export */   proxyToRaw: () => (/* binding */ proxyToRaw),
/* harmony export */   removeChildInstance: () => (/* binding */ removeChildInstance),
/* harmony export */   setProxyToRaw: () => (/* binding */ setProxyToRaw)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer */ "./ej2-resources/26.1.38/scripts/ej2-base/observer.js");
/* eslint-disable @typescript-eslint/no-explicit-any */



var isColEName = new RegExp(']');
/**
 * Base library module is common module for Framework modules like touch,keyboard and etc.,
 *
 * @private
 * @returns {void} ?
 */
var Base = /** @__PURE__ @class */ (function () {
    /**
     * Base constructor accept options and element
     *
     * @param {Object} options ?
     * @param {string} element ?
     */
    function Base(options, element) {
        this.isRendered = false;
        this.isComplexArraySetter = false;
        this.isServerRendered = false;
        this.allowServerDataBinding = true;
        this.isProtectedOnChange = true;
        this.properties = {};
        this.changedProperties = {};
        this.oldProperties = {};
        this.bulkChanges = {};
        this.refreshing = false;
        this.ignoreCollectionWatch = false;
        this.finalUpdate = function () { };
        this.childChangedProperties = {};
        this.modelObserver = new _observer__WEBPACK_IMPORTED_MODULE_2__.Observer(this);
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(element)) {
            if ('string' === typeof (element)) {
                this.element = document.querySelector(element);
            }
            else {
                this.element = element;
            }
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(this.element)) {
                this.isProtectedOnChange = false;
                this.addInstance();
            }
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(options)) {
            this.setProperties(options, true);
        }
        this.isDestroyed = false;
    }
    /** Property base section */
    /**
     * Function used to set bunch of property at a time.
     *
     * @private
     * @param  {Object} prop - JSON object which holds components properties.
     * @param  {boolean} muteOnChange ? - Specifies to true when we set properties.
     * @returns {void} ?
     */
    Base.prototype.setProperties = function (prop, muteOnChange) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = !!muteOnChange;
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.merge)(this, prop);
        if (muteOnChange !== true) {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.merge)(this.changedProperties, prop);
            this.dataBind();
        }
        else if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)() && this.isRendered) {
            this.serverDataBind(prop);
        }
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.isProtectedOnChange = prevDetection;
    };
    /**
     * Calls for child element data bind
     *
     * @param {Object} obj ?
     * @param {Object} parent ?
     * @returns {void} ?
     */
    Base.callChildDataBind = function (obj, parent) {
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (parent["" + key] instanceof Array) {
                for (var _a = 0, _b = parent["" + key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    if (obj_1.dataBind !== undefined) {
                        obj_1.dataBind();
                    }
                }
            }
            else {
                parent["" + key].dataBind();
            }
        }
    };
    Base.prototype.clearChanges = function () {
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.childChangedProperties = {};
    };
    /**
     * Bind property changes immediately to components
     *
     * @returns {void} ?
     */
    Base.prototype.dataBind = function () {
        Base.callChildDataBind(this.childChangedProperties, this);
        if (Object.getOwnPropertyNames(this.changedProperties).length) {
            var prevDetection = this.isProtectedOnChange;
            var newChanges = this.changedProperties;
            var oldChanges = this.oldProperties;
            this.clearChanges();
            this.isProtectedOnChange = true;
            this.onPropertyChanged(newChanges, oldChanges);
            this.isProtectedOnChange = prevDetection;
        }
    };
    Base.prototype.serverDataBind = function (newChanges) {
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)()) {
            return;
        }
        newChanges = newChanges ? newChanges : {};
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(this.bulkChanges, {}, newChanges, true);
        var sfBlazor = 'sfBlazor';
        if (this.allowServerDataBinding && window["" + sfBlazor].updateModel) {
            window["" + sfBlazor].updateModel(this);
            this.bulkChanges = {};
        }
    };
    Base.prototype.saveChanges = function (key, newValue, oldValue) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)()) {
            var newChanges = {};
            newChanges["" + key] = newValue;
            this.serverDataBind(newChanges);
        }
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties["" + key] = oldValue;
        this.changedProperties["" + key] = newValue;
        this.finalUpdate();
        this.finalUpdate = (0,_util__WEBPACK_IMPORTED_MODULE_0__.setImmediate)(this.dataBind.bind(this));
    };
    /** Event Base Section */
    /**
     * Adds the handler to the given event listener.
     *
     * @param {string} eventName - A String that specifies the name of the event
     * @param {Function} handler - Specifies the call to run when the event occurs.
     * @returns {void} ?
     */
    Base.prototype.addEventListener = function (eventName, handler) {
        this.modelObserver.on(eventName, handler);
    };
    /**
     * Removes the handler from the given event listener.
     *
     * @param {string} eventName - A String that specifies the name of the event to remove
     * @param {Function} handler - Specifies the function to remove
     * @returns {void} ?
     */
    Base.prototype.removeEventListener = function (eventName, handler) {
        this.modelObserver.off(eventName, handler);
    };
    /**
     * Triggers the handlers in the specified event.
     *
     * @private
     * @param {string} eventName - Specifies the event to trigger for the specified component properties.
     * Can be a custom event, or any of the standard events.
     * @param {Event} eventProp - Additional parameters to pass on to the event properties
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it failured to call.
     * @returns {void} ?
     */
    Base.prototype.trigger = function (eventName, eventProp, successHandler, errorHandler) {
        var _this = this;
        if (this.isDestroyed !== true) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            var data = this.modelObserver.notify(eventName, eventProp, successHandler, errorHandler);
            if (isColEName.test(eventName)) {
                var handler = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(eventName, this);
                if (handler) {
                    var blazor = 'Blazor';
                    if (window["" + blazor]) {
                        var promise = handler.call(this, eventProp);
                        if (promise && typeof promise.then === 'function') {
                            if (!successHandler) {
                                data = promise;
                            }
                            else {
                                promise.then(function (data) {
                                    if (successHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ?
                                            JSON.parse(data) : data;
                                        successHandler.call(_this, data);
                                    }
                                }).catch(function (data) {
                                    if (errorHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ? JSON.parse(data) : data;
                                        errorHandler.call(_this, data);
                                    }
                                });
                            }
                        }
                        else if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                    else {
                        handler.call(this, eventProp);
                        if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                }
                else if (successHandler) {
                    successHandler.call(this, eventProp);
                }
            }
            this.isProtectedOnChange = prevDetection;
            return data;
        }
    };
    /**
     * To maintain instance in base class
     *
     * @returns {void} ?
     */
    Base.prototype.addInstance = function () {
        // Add module class to the root element
        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)([this.element], ['e-lib', moduleClass]);
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(this.element.ej2_instances)) {
            this.element.ej2_instances.push(this);
        }
        else {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.setValue)('ej2_instances', [this], this.element);
        }
    };
    /**
     * To remove the instance from the element
     *
     * @returns {void} ?
     */
    Base.prototype.destroy = function () {
        var _this = this;
        // eslint-disable-next-line camelcase
        this.element.ej2_instances =
            this.element.ej2_instances ?
                this.element.ej2_instances.filter(function (i) {
                    if (proxyToRaw) {
                        return proxyToRaw(i) !== proxyToRaw(_this);
                    }
                    return i !== _this;
                })
                : [];
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)([this.element], ['e-' + this.getModuleName()]);
        if (this.element.ej2_instances.length === 0) {
            // Remove module class from the root element
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)([this.element], ['e-lib']);
        }
        this.clearChanges();
        this.modelObserver.destroy();
        this.isDestroyed = true;
    };
    return Base;
}());

/**
 * Global function to get the component instance from the rendered element.
 *
 * @param {HTMLElement} elem Specifies the HTMLElement or element id string.
 * @param {string} comp Specifies the component module name or Component.
 * @returns {any} ?
 */
function getComponent(elem, comp) {
    var instance;
    var i;
    var ele = typeof elem === 'string' ? document.getElementById(elem) : elem;
    for (i = 0; i < ele.ej2_instances.length; i++) {
        instance = ele.ej2_instances[parseInt(i.toString(), 10)];
        if (typeof comp === 'string') {
            var compName = instance.getModuleName();
            if (comp === compName) {
                return instance;
            }
        }
        else {
            if (instance instanceof comp) {
                return instance;
            }
        }
    }
    return undefined;
}
/**
 * Function to remove the child instances.
 *
 * @param {HTMLElement} element ?
 * @returns {void} ?
 * @private
 */
function removeChildInstance(element) {
    var childEle = [].slice.call(element.getElementsByClassName('e-control'));
    for (var i = 0; i < childEle.length; i++) {
        var compName = childEle[parseInt(i.toString(), 10)].classList[1].split('e-')[1];
        var compInstance = getComponent(childEle[parseInt(i.toString(), 10)], compName);
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(compInstance)) {
            compInstance.destroy();
        }
    }
}
var proxyToRaw;
var setProxyToRaw = function (toRaw) { proxyToRaw = toRaw; };


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/browser.js":
/*!***********************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/browser.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* eslint-disable @typescript-eslint/no-explicit-any */

var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ /]([\w.]+)/i;
var REGX_BROWSER = {
    OPERA: /(opera|opr)(?:.*version|)[ /]([\w.]+)/i,
    EDGE: /(edge)(?:.*version|)[ /]([\w.]+)/i,
    CHROME: /(chrome|crios)[ /]([\w.]+)/i,
    PANTHOMEJS: /(phantomjs)[ /]([\w.]+)/i,
    SAFARI: /(safari)[ /]([\w.]+)/i,
    WEBKIT: /(webkit)[ /]([\w.]+)/i,
    MSIE: /(msie|trident) ([\w.]+)/i,
    MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
/* istanbul ignore else  */
if (typeof window !== 'undefined') {
    window.browserDetails = window.browserDetails || {};
}
/**
 * Get configuration details for Browser
 *
 * @private
 */
var Browser = /** @__PURE__ @class */ (function () {
    function Browser() {
    }
    Browser.extractBrowserDetail = function () {
        var browserInfo = { culture: {} };
        var keys = Object.keys(REGX_BROWSER);
        var clientInfo = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            clientInfo = Browser.userAgent.match(REGX_BROWSER["" + key]);
            if (clientInfo) {
                browserInfo.name = (clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase());
                browserInfo.name = (clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name);
                browserInfo.version = clientInfo[2];
                browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                if (Browser.userAgent.match(REGX_IE11)) {
                    browserInfo.name = 'msie';
                    break;
                }
                var version = Browser.userAgent.match(REGX_VERSION);
                if (browserInfo.name === 'safari' && version) {
                    browserInfo.version = version[2];
                }
                break;
            }
        }
        return browserInfo;
    };
    /**
     * To get events from the browser
     *
     * @param {string} event - type of event triggered.
     * @returns {string} ?
     */
    Browser.getEvent = function (event) {
        var events = {
            start: {
                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
            },
            move: {
                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
            },
            end: {
                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
            },
            cancel: {
                isPointer: 'pointercancel', isTouch: 'touchcancel', isDevice: 'mouseleave'
            }
        };
        return (Browser.isPointer ? events["" + event].isPointer :
            (Browser.isTouch ? events["" + event].isTouch + (!Browser.isDevice ? ' ' + events["" + event].isDevice : '')
                : events["" + event].isDevice));
    };
    /**
     * To get the Touch start event from browser
     *
     * @returns {string}
     */
    Browser.getTouchStartEvent = function () {
        return Browser.getEvent('start');
    };
    /**
     * To get the Touch end event from browser
     *
     * @returns {string}
     */
    Browser.getTouchEndEvent = function () {
        return Browser.getEvent('end');
    };
    /**
     * To get the Touch move event from browser
     *
     * @returns {string}
     */
    Browser.getTouchMoveEvent = function () {
        return Browser.getEvent('move');
    };
    /**
     * To cancel the touch event from browser
     *
     * @returns {string}
     */
    Browser.getTouchCancelEvent = function () {
        return Browser.getEvent('cancel');
    };
    /**
     * Check whether the browser on the iPad device is Safari or not
     *
     * @returns {boolean}
     */
    Browser.isSafari = function () {
        return (Browser.isDevice && Browser.isIos && Browser.isTouch && typeof window !== 'undefined'
            && window.navigator.userAgent.toLowerCase().indexOf('iphone') === -1
            && window.navigator.userAgent.toLowerCase().indexOf('safari') > -1);
    };
    /**
     * To get the value based on provided key and regX
     *
     * @param {string} key ?
     * @param {RegExp} regX ?
     * @returns {Object} ?
     */
    Browser.getValue = function (key, regX) {
        var browserDetails = typeof window !== 'undefined' ? window.browserDetails : {};
        if (typeof navigator !== 'undefined' && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 && Browser.isTouch === true && !REGX_BROWSER.CHROME.test(navigator.userAgent)) {
            browserDetails['isIos'] = true;
            browserDetails['isDevice'] = true;
            browserDetails['isTouch'] = true;
            browserDetails['isPointer'] = true;
        }
        if ('undefined' === typeof browserDetails["" + key]) {
            return browserDetails["" + key] = regX.test(Browser.userAgent);
        }
        return browserDetails["" + key];
    };
    Object.defineProperty(Browser, "userAgent", {
        get: function () {
            return Browser.uA;
        },
        //Properties
        /**
         * Property specifies the userAgent of the browser. Default userAgent value is based on the browser.
         * Also we can set our own userAgent.
         *
         * @param {string} uA ?
         */
        set: function (uA) {
            Browser.uA = uA;
            window.browserDetails = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "info", {
        //Read Only Properties
        /**
         * Property is to get the browser information like Name, Version and Language
         *
         * @returns {BrowserInfo} ?
         */
        get: function () {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.browserDetails.info)) {
                return window.browserDetails.info = Browser.extractBrowserDetail();
            }
            return window.browserDetails.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIE", {
        /**
         * Property is to get whether the userAgent is based IE.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isIE', REGX_IE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isTouch", {
        /**
         * Property is to get whether the browser has touch support.
         *
         * @returns {boolean} ?
         */
        get: function () {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.browserDetails.isTouch)) {
                return (window.browserDetails.isTouch =
                    ('ontouchstart' in window.navigator) ||
                        (window &&
                            window.navigator &&
                            (window.navigator.maxTouchPoints > 0)) || ('ontouchstart' in window));
            }
            return window.browserDetails.isTouch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isPointer", {
        /**
         * Property is to get whether the browser has Pointer support.
         *
         * @returns {boolean} ?
         */
        get: function () {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.browserDetails.isPointer)) {
                return window.browserDetails.isPointer = ('pointerEnabled' in window.navigator);
            }
            return window.browserDetails.isPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isMSPointer", {
        /**
         * Property is to get whether the browser has MSPointer support.
         *
         * @returns {boolean} ?
         */
        get: function () {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.browserDetails.isMSPointer)) {
                return window.browserDetails.isMSPointer = ('msPointerEnabled' in window.navigator);
            }
            return window.browserDetails.isMSPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isDevice", {
        /**
         * Property is to get whether the userAgent is device based.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isDevice', REGX_MOBILE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos", {
        /**
         * Property is to get whether the userAgent is IOS.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isIos', REGX_IOS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos7", {
        /**
         * Property is to get whether the userAgent is Ios7.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isIos7', REGX_IOS7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isAndroid", {
        /**
         * Property is to get whether the userAgent is Android.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isAndroid', REGX_ANDROID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWebView", {
        /**
         * Property is to identify whether application ran in web view.
         *
         * @returns {boolean} ?
         */
        get: function () {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.browserDetails.isWebView)) {
                window.browserDetails.isWebView = !((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.cordova) && (0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.PhoneGap)
                    && (0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.phonegap) && window.forge !== 'object');
                return window.browserDetails.isWebView;
            }
            return window.browserDetails.isWebView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWindows", {
        /**
         * Property is to get whether the userAgent is Windows.
         *
         * @returns {boolean} ?
         */
        get: function () {
            return Browser.getValue('isWindows', REGX_WINDOWS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchStartEvent", {
        /**
         * Property is to get the touch start event. It returns event name based on browser.
         *
         * @returns {string} ?
         */
        get: function () {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.browserDetails.touchStartEvent)) {
                return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
            }
            return window.browserDetails.touchStartEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchMoveEvent", {
        /**
         * Property is to get the touch move event. It returns event name based on browser.
         *
         * @returns {string} ?
         */
        get: function () {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.browserDetails.touchMoveEvent)) {
                return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
            }
            return window.browserDetails.touchMoveEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchEndEvent", {
        /**
         * Property is to get the touch end event. It returns event name based on browser.
         *
         * @returns {string} ?
         */
        get: function () {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.browserDetails.touchEndEvent)) {
                return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
            }
            return window.browserDetails.touchEndEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchCancelEvent", {
        /**
         * Property is to cancel the touch end event.
         *
         * @returns {string} ?
         */
        get: function () {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(window.browserDetails.touchCancelEvent)) {
                return window.browserDetails.touchCancelEvent = Browser.getTouchCancelEvent();
            }
            return window.browserDetails.touchCancelEvent;
        },
        enumerable: true,
        configurable: true
    });
    /* istanbul ignore next */
    Browser.uA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    return Browser;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/child-property.js":
/*!******************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/child-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChildProperty: () => (/* binding */ ChildProperty)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./ej2-resources/26.1.38/scripts/ej2-base/base.js");
/* eslint-disable @typescript-eslint/no-explicit-any */


/**
 * To detect the changes for inner properties.
 *
 * @private
 * @returns {void} ?
 */
var ChildProperty = /** @__PURE__ @class */ (function () {
    function ChildProperty(parent, propName, defaultValue, isArray) {
        this.isComplexArraySetter = false;
        this.properties = {};
        this.changedProperties = {};
        this.childChangedProperties = {};
        this.oldProperties = {};
        this.finalUpdate = function () { };
        this.callChildDataBind = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('callChildDataBind', _base__WEBPACK_IMPORTED_MODULE_1__.Base);
        this.parentObj = parent;
        this.controlParent = this.parentObj.controlParent || this.parentObj;
        this.propName = propName;
        this.isParentArray = isArray;
        this.setProperties(defaultValue, true);
    }
    /**
     * Updates the property changes
     *
     * @param {boolean} val ?
     * @param {string} propName ?
     * @returns {void} ?
     */
    ChildProperty.prototype.updateChange = function (val, propName) {
        if (val === true) {
            this.parentObj.childChangedProperties["" + propName] = val;
        }
        else {
            delete this.parentObj.childChangedProperties["" + propName];
        }
        if (this.parentObj.updateChange) {
            this.parentObj.updateChange(val, this.parentObj.propName);
        }
    };
    /**
     * Updates time out duration
     *
     * @returns {void} ?
     */
    ChildProperty.prototype.updateTimeOut = function () {
        if (this.parentObj.updateTimeOut) {
            this.parentObj.finalUpdate();
            this.parentObj.updateTimeOut();
        }
        else {
            var changeTime_1 = setTimeout(this.parentObj.dataBind.bind(this.parentObj));
            var clearUpdate = function () {
                clearTimeout(changeTime_1);
            };
            this.finalUpdate = clearUpdate;
        }
    };
    /**
     * Clears changed properties
     *
     * @returns {void} ?
     */
    ChildProperty.prototype.clearChanges = function () {
        this.finalUpdate();
        this.updateChange(false, this.propName);
        this.oldProperties = {};
        this.changedProperties = {};
    };
    /**
     * Set property changes
     *
     * @param {Object} prop ?
     * @param {boolean} muteOnChange ?
     * @returns {void} ?
     */
    ChildProperty.prototype.setProperties = function (prop, muteOnChange) {
        if (muteOnChange === true) {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.merge)(this, prop);
            this.updateChange(false, this.propName);
            this.clearChanges();
        }
        else {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.merge)(this, prop);
        }
    };
    /**
     * Binds data
     *
     * @returns {void} ?
     */
    ChildProperty.prototype.dataBind = function () {
        this.callChildDataBind(this.childChangedProperties, this);
        if (this.isParentArray) {
            var curIndex = this.parentObj[this.propName].indexOf(this);
            if (Object.keys(this.changedProperties).length) {
                (0,_util__WEBPACK_IMPORTED_MODULE_0__.setValue)(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                (0,_util__WEBPACK_IMPORTED_MODULE_0__.setValue)(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
            }
        }
        else {
            this.parentObj.changedProperties[this.propName] = this.changedProperties;
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
        }
        this.clearChanges();
    };
    /**
     * Saves changes to newer values
     *
     * @param {string} key ?
     * @param {Object} newValue ?
     * @param {Object} oldValue ?
     * @param {boolean} restrictServerDataBind ?
     * @returns {void} ?
     */
    ChildProperty.prototype.saveChanges = function (key, newValue, oldValue, restrictServerDataBind) {
        if (this.controlParent.isProtectedOnChange) {
            return;
        }
        if (!restrictServerDataBind) {
            this.serverDataBind(key, newValue, true);
        }
        this.oldProperties["" + key] = oldValue;
        this.changedProperties["" + key] = newValue;
        this.updateChange(true, this.propName);
        this.finalUpdate();
        this.updateTimeOut();
    };
    ChildProperty.prototype.serverDataBind = function (key, value, isSaveChanges, action) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)() && !this.parentObj.isComplexArraySetter) {
            var parent_1;
            var newChanges = {};
            var parentKey = isSaveChanges ? this.getParentKey(true) + '.' + key : key;
            /* istanbul ignore else  */
            if (parentKey.indexOf('.') !== -1) {
                var complexKeys = parentKey.split('.');
                parent_1 = newChanges;
                for (var i = 0; i < complexKeys.length; i++) {
                    var isFinal = i === complexKeys.length - 1;
                    parent_1[complexKeys[parseInt(i.toString(), 10)]] = isFinal ? value : {};
                    parent_1 = isFinal ? parent_1 : parent_1[complexKeys[parseInt(i.toString(), 10)]];
                }
            }
            else {
                newChanges["" + parentKey] = {};
                parent_1 = newChanges["" + parentKey];
                newChanges["" + parentKey]["" + key] = value;
            }
            /* istanbul ignore next */
            if (this.isParentArray) {
                var actionProperty = 'ejsAction';
                parent_1["" + actionProperty] = action ? action : 'none';
            }
            this.controlParent.serverDataBind(newChanges);
        }
    };
    ChildProperty.prototype.getParentKey = function (isSaveChanges) {
        var index = '';
        var propName = this.propName;
        /* istanbul ignore next */
        if (this.isParentArray) {
            index = this.parentObj[this.propName].indexOf(this);
            var valueLength = this.parentObj[this.propName].length;
            valueLength = isSaveChanges ? valueLength : (valueLength > 0 ? valueLength - 1 : 0);
            index = index !== -1 ? '-' + index : '-' + valueLength;
            propName = propName + index;
        }
        if (this.controlParent !== this.parentObj) {
            propName = this.parentObj.getParentKey() + '.' + this.propName + index;
        }
        return propName;
    };
    return ChildProperty;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/component.js":
/*!*************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/component.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   enableVersionBasedPersistence: () => (/* binding */ enableVersionBasedPersistence),
/* harmony export */   versionBasedStatePersistence: () => (/* binding */ versionBasedStatePersistence)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-loader */ "./ej2-resources/26.1.38/scripts/ej2-base/module-loader.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./ej2-resources/26.1.38/scripts/ej2-base/base.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer */ "./ej2-resources/26.1.38/scripts/ej2-base/observer.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-property */ "./ej2-resources/26.1.38/scripts/ej2-base/child-property.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/26.1.38/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internationalization */ "./ej2-resources/26.1.38/scripts/ej2-base/internationalization.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom */ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js");
/* harmony import */ var _validate_lic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validate-lic */ "./ej2-resources/26.1.38/scripts/ej2-base/validate-lic.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */









var componentCount = 0;
var lastPageID;
var lastHistoryLen = 0;
// Decalre the static variable to count the instance
var instancecount = 0;
// Decalre the static variable to find if control limit exceed or not
var isvalid = true;
// We have added styles to inline type so here declare the static variable to detect if banner is added or not
var isBannerAdded = false;
var versionBasedStatePersistence = false;
/**
 * To enable or disable version based statePersistence functionality for all components globally.
 *
 * @param {boolean} status - Optional argument Specifies the status value to enable or disable versionBasedStatePersistence option.
 * @returns {void}
 */
function enableVersionBasedPersistence(status) {
    versionBasedStatePersistence = status;
}
/**
 * Base class for all Essential JavaScript components
 */
var Component = /** @__PURE__ @class */ (function (_super) {
    __extends(Component, _super);
    /**
     * Initialize the constructor for component base
     *
     * @param {Object} options ?
     * @param {string} selector ?
     */
    function Component(options, selector) {
        var _this = _super.call(this, options, selector) || this;
        _this.randomId = (0,_util__WEBPACK_IMPORTED_MODULE_0__.uniqueID)();
        /**
         * string template option for Blazor template rendering
         *
         * @private
         */
        _this.isStringTemplate = false;
        _this.needsID = false;
        _this.isReactHybrid = false;
        _this.isAngular = false;
        _this.isReact = false;
        _this.isVue = false;
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(_this.enableRtl)) {
            _this.setProperties({ 'enableRtl': _internationalization__WEBPACK_IMPORTED_MODULE_6__.rightToLeft }, true);
        }
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(_this.locale)) {
            _this.setProperties({ 'locale': _internationalization__WEBPACK_IMPORTED_MODULE_6__.defaultCulture }, true);
        }
        _this.moduleLoader = new _module_loader__WEBPACK_IMPORTED_MODULE_1__.ModuleLoader(_this);
        _this.localObserver = new _observer__WEBPACK_IMPORTED_MODULE_3__.Observer(_this);
        _internationalization__WEBPACK_IMPORTED_MODULE_6__.onIntlChange.on('notifyExternalChange', _this.detectFunction, _this, _this.randomId);
        // Based on the considered control list we have count the instance
        if (typeof window !== 'undefined' && typeof document !== 'undefined' && !(0,_validate_lic__WEBPACK_IMPORTED_MODULE_8__.validateLicense)()) {
            if (_validate_lic__WEBPACK_IMPORTED_MODULE_8__.componentList.indexOf(_this.getModuleName()) !== -1) {
                instancecount = instancecount + 1;
                if (instancecount > 5) {
                    isvalid = false;
                }
            }
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(selector)) {
            _this.appendTo();
        }
        return _this;
    }
    Component.prototype.requiredModules = function () {
        return [];
    };
    /**
     * Destroys the sub modules while destroying the widget
     *
     * @returns {void} ?
     */
    Component.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        if (this.enablePersistence) {
            this.setPersistData();
            this.detachUnloadEvent();
        }
        this.localObserver.destroy();
        if (this.refreshing) {
            return;
        }
        (0,_dom__WEBPACK_IMPORTED_MODULE_7__.removeClass)([this.element], ['e-control']);
        this.trigger('destroyed', { cancel: false });
        _super.prototype.destroy.call(this);
        this.moduleLoader.clean();
        _internationalization__WEBPACK_IMPORTED_MODULE_6__.onIntlChange.off('notifyExternalChange', this.detectFunction, this.randomId);
    };
    /**
     * Applies all the pending property changes and render the component again.
     *
     * @returns {void} ?
     */
    Component.prototype.refresh = function () {
        this.refreshing = true;
        this.moduleLoader.clean();
        this.destroy();
        this.clearChanges();
        this.localObserver = new _observer__WEBPACK_IMPORTED_MODULE_3__.Observer(this);
        this.preRender();
        this.injectModules();
        this.render();
        this.refreshing = false;
    };
    Component.prototype.accessMount = function () {
        if (this.mount && !this.isReactHybrid) {
            this.mount();
        }
    };
    /**
     * Returns the route element of the component
     *
     * @returns {HTMLElement} ?
     */
    Component.prototype.getRootElement = function () {
        if (this.isReactHybrid) {
            return this.actualElement;
        }
        else {
            return this.element;
        }
    };
    /**
     * Returns the persistence data for component
     *
     * @returns {any} ?
     */
    Component.prototype.getLocalData = function () {
        var eleId = this.getModuleName() + this.element.id;
        if (versionBasedStatePersistence) {
            return window.localStorage.getItem(eleId + this.ej2StatePersistenceVersion);
        }
        else {
            return window.localStorage.getItem(eleId);
        }
    };
    /**
     * Adding unload event to persist data when enable persistence true
     *
     * @returns {void}
     */
    Component.prototype.attachUnloadEvent = function () {
        this.handleUnload = this.handleUnload.bind(this);
        window.addEventListener('pagehide', this.handleUnload);
    };
    /**
     * Handling unload event to persist data when enable persistence true
     *
     * @returns {void}
     */
    Component.prototype.handleUnload = function () {
        this.setPersistData();
    };
    /**
     * Removing unload event to persist data when enable persistence true
     *
     * @returns {void}
     */
    Component.prototype.detachUnloadEvent = function () {
        window.removeEventListener('pagehide', this.handleUnload);
    };
    /**
     * Appends the control within the given HTML element
     *
     * @param {string | HTMLElement} selector - Target element where control needs to be appended
     * @returns {void} ?
     */
    Component.prototype.appendTo = function (selector) {
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(selector) && typeof (selector) === 'string') {
            this.element = (0,_dom__WEBPACK_IMPORTED_MODULE_7__.select)(selector, document);
        }
        else if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(selector)) {
            this.element = selector;
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(this.element)) {
            var moduleClass = 'e-' + this.getModuleName().toLowerCase();
            (0,_dom__WEBPACK_IMPORTED_MODULE_7__.addClass)([this.element], ['e-control', moduleClass]);
            this.isProtectedOnChange = false;
            if (this.needsID && !this.element.id) {
                this.element.id = this.getUniqueID(this.getModuleName());
            }
            if (this.enablePersistence) {
                this.mergePersistData();
                this.attachUnloadEvent();
            }
            var inst = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('ej2_instances', this.element);
            if (!inst || inst.indexOf(this) === -1) {
                _super.prototype.addInstance.call(this);
            }
            this.preRender();
            this.injectModules();
            // Throw a warning for the required modules to be injected.
            var ignoredComponents = {
                schedule: 'all',
                diagram: 'all',
                PdfViewer: 'all',
                grid: ['logger'],
                richtexteditor: ['link', 'table', 'image', 'audio', 'video', 'formatPainter', 'emojiPicker', 'pasteCleanup', 'htmlEditor', 'toolbar'],
                treegrid: ['filter'],
                gantt: ['tooltip'],
                chart: ['Export', 'Zoom'],
                accumulationchart: ['Export'],
                'query-builder': 'all'
            };
            var component = this.getModuleName();
            if (this.requiredModules && (!ignoredComponents["" + component] || ignoredComponents["" + component] !== 'all')) {
                var modulesRequired = this.requiredModules();
                for (var _i = 0, _a = this.moduleLoader.getNonInjectedModules(modulesRequired); _i < _a.length; _i++) {
                    var module = _a[_i];
                    var moduleName = module.name ? module.name : module.member;
                    if (ignoredComponents["" + component] && ignoredComponents["" + component].indexOf(module.member) !== -1) {
                        continue;
                    }
                    var componentName = component.charAt(0).toUpperCase() + component.slice(1); // To capitalize the component name
                    console.warn("[WARNING] :: Module \"" + moduleName + "\" is not available in " + componentName + " component! You either misspelled the module name or forgot to load it.");
                }
            }
            // Checked weather cases are valid or not. If control leads to more than five counts
            if (!isvalid && !isBannerAdded) {
                (0,_validate_lic__WEBPACK_IMPORTED_MODULE_8__.createLicenseOverlay)();
                isBannerAdded = true;
            }
            this.render();
            if (!this.mount) {
                this.trigger('created');
            }
            else {
                this.accessMount();
            }
        }
    };
    /**
     * It is used to process the post rendering functionalities to a component.
     *
     * @param {Node} wrapperElement ?
     * @returns {void} ?
     */
    Component.prototype.renderComplete = function (wrapperElement) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)()) {
            var sfBlazor = 'sfBlazor';
            window["" + sfBlazor].renderComplete(this.element, wrapperElement);
        }
        this.isRendered = true;
    };
    /**
     * When invoked, applies the pending property changes immediately to the component.
     *
     * @returns {void} ?
     */
    Component.prototype.dataBind = function () {
        this.injectModules();
        _super.prototype.dataBind.call(this);
    };
    /**
     * Attach one or more  event handler to the current component context.
     * It is used for internal handling event internally within the component only.
     *
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the handler to run when the event occurs
     * @param {Object} context - optional parameter Specifies the context to be bind in the handler.
     * @returns {void} ?
     * @private
     */
    Component.prototype.on = function (event, handler, context) {
        if (typeof event === 'string') {
            this.localObserver.on(event, handler, context);
        }
        else {
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }
    };
    /**
     * To remove one or more event handler that has been attached with the on() method.
     *
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the function to run when the event occurs
     * @returns {void} ?
     * @private
     */
    Component.prototype.off = function (event, handler) {
        if (typeof event === 'string') {
            this.localObserver.off(event, handler);
        }
        else {
            for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }
    };
    /**
     * To notify the handlers in the specified event.
     *
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} argument - Additional parameters to pass while calling the handler.
     * @returns {void} ?
     * @private
     */
    Component.prototype.notify = function (property, argument) {
        if (this.isDestroyed !== true) {
            this.localObserver.notify(property, argument);
        }
    };
    /**
     * Get injected modules
     *
     * @returns {Function} ?
     * @private
     */
    Component.prototype.getInjectedModules = function () {
        return this.injectedModules;
    };
    /**
     * Dynamically injects the required modules to the component.
     *
     * @param {Function} moduleList ?
     * @returns {void} ?
     */
    Component.Inject = function () {
        var moduleList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            moduleList[_i] = arguments[_i];
        }
        if (!this.prototype.injectedModules) {
            this.prototype.injectedModules = [];
        }
        for (var i = 0; i < moduleList.length; i++) {
            if (this.prototype.injectedModules.indexOf(moduleList[parseInt(i.toString(), 10)]) === -1) {
                this.prototype.injectedModules.push(moduleList[parseInt(i.toString(), 10)]);
            }
        }
    };
    /**
     * This is a instance method to create an element.
     *
     * @param {string} tagName ?
     * @param {ElementProperties} prop ?
     * @param {boolean} isVDOM ?
     * @returns {any} ?
     * @private
     */
    Component.prototype.createElement = function (tagName, prop, isVDOM) {
        return (0,_dom__WEBPACK_IMPORTED_MODULE_7__.createElement)(tagName, prop);
    };
    /**
     *
     * @param {Function} handler - handler to be triggered after state Updated.
     * @param {any} argument - Arguments to be passed to caller.
     * @returns {void} .
     * @private
     */
    Component.prototype.triggerStateChange = function (handler, argument) {
        if (this.isReactHybrid) {
            this.setState();
            this.currentContext = { calls: handler, args: argument };
        }
    };
    Component.prototype.injectModules = function () {
        if (this.injectedModules && this.injectedModules.length) {
            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }
    };
    Component.prototype.detectFunction = function (args) {
        var prop = Object.keys(args);
        if (prop.length) {
            this[prop[0]] = args[prop[0]];
        }
    };
    Component.prototype.mergePersistData = function () {
        var data;
        if (versionBasedStatePersistence) {
            data = window.localStorage.getItem(this.getModuleName() + this.element.id + this.ej2StatePersistenceVersion);
        }
        else {
            data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        }
        if (!((0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(data) || (data === ''))) {
            this.setProperties(JSON.parse(data), true);
        }
    };
    Component.prototype.setPersistData = function () {
        if (!this.isDestroyed) {
            if (versionBasedStatePersistence) {
                window.localStorage.setItem(this.getModuleName() +
                    this.element.id + this.ej2StatePersistenceVersion, this.getPersistData());
            }
            else {
                window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
            }
        }
    };
    Component.prototype.renderReactTemplates = function (callback) {
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(callback)) {
            callback();
        }
    };
    Component.prototype.clearTemplate = function (templateName, index) {
        //No Code
    };
    Component.prototype.getUniqueID = function (definedName) {
        if (this.isHistoryChanged()) {
            componentCount = 0;
        }
        lastPageID = this.pageID(location.href);
        lastHistoryLen = history.length;
        return definedName + '_' + lastPageID + '_' + componentCount++;
    };
    Component.prototype.pageID = function (url) {
        var hash = 0;
        if (url.length === 0) {
            return hash;
        }
        for (var i = 0; i < url.length; i++) {
            var char = url.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };
    Component.prototype.isHistoryChanged = function () {
        return lastPageID !== this.pageID(location.href) || lastHistoryLen !== history.length;
    };
    Component.prototype.addOnPersist = function (options) {
        var _this = this;
        var persistObj = {};
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var key = options_1[_i];
            var objValue = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(key, this);
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(objValue)) {
                (0,_util__WEBPACK_IMPORTED_MODULE_0__.setValue)(key, this.getActualProperties(objValue), persistObj);
            }
        }
        return JSON.stringify(persistObj, function (key, value) {
            return _this.getActualProperties(value);
        });
    };
    Component.prototype.getActualProperties = function (obj) {
        if (obj instanceof _child_property__WEBPACK_IMPORTED_MODULE_4__.ChildProperty) {
            return (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('properties', obj);
        }
        else {
            return obj;
        }
    };
    Component.prototype.ignoreOnPersist = function (options) {
        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component.prototype.iterateJsonProperties = function (obj, ignoreList) {
        var newObj = {};
        var _loop_1 = function (key) {
            if (ignoreList.indexOf(key) === -1) {
                var value = obj["" + key];
                if (typeof value === 'object' && !(value instanceof Array)) {
                    var newList = ignoreList.filter(function (str) {
                        var regExp = RegExp;
                        return new regExp(key + '.').test(str);
                    }).map(function (str) {
                        return str.replace(key + '.', '');
                    });
                    newObj["" + key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                }
                else {
                    newObj["" + key] = value;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newObj;
    };
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_5__.Property)(false)
    ], Component.prototype, "enablePersistence", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_5__.Property)()
    ], Component.prototype, "enableRtl", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_5__.Property)()
    ], Component.prototype, "locale", void 0);
    Component = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_5__.NotifyPropertyChanges
    ], Component);
    return Component;
}(_base__WEBPACK_IMPORTED_MODULE_2__.Base));

//Function handling for page navigation detection
/* istanbul ignore next */
(function () {
    if (typeof window !== 'undefined') {
        window.addEventListener('popstate', 
        /* istanbul ignore next */
        function () {
            componentCount = 0;
        });
    }
})();


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js":
/*!*******************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/dom.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   attributes: () => (/* binding */ attributes),
/* harmony export */   classList: () => (/* binding */ classList),
/* harmony export */   cloneNode: () => (/* binding */ cloneNode),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   containsClass: () => (/* binding */ containsClass),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   detach: () => (/* binding */ detach),
/* harmony export */   getAttributeOrDefault: () => (/* binding */ getAttributeOrDefault),
/* harmony export */   includeInnerHTML: () => (/* binding */ includeInnerHTML),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   matches: () => (/* binding */ matches),
/* harmony export */   prepend: () => (/* binding */ prepend),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   select: () => (/* binding */ select),
/* harmony export */   selectAll: () => (/* binding */ selectAll),
/* harmony export */   setStyleAttribute: () => (/* binding */ setStyleAttribute),
/* harmony export */   siblings: () => (/* binding */ siblings)
/* harmony export */ });
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/26.1.38/scripts/ej2-base/event-handler.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Functions related to dom operations.
 */


var SVG_REG = /^svg|^path|^g/;
/**
 * Function to create Html element.
 *
 * @param {string} tagName - Name of the tag, id and class names.
 * @param {ElementProperties} properties - Object to set properties in the element.
 * @param {ElementProperties} properties.id - To set the id to the created element.
 * @param {ElementProperties} properties.className - To add classes to the element.
 * @param {ElementProperties} properties.innerHTML - To set the innerHTML to element.
 * @param {ElementProperties} properties.styles - To set the some custom styles to element.
 * @param {ElementProperties} properties.attrs - To set the attributes to element.
 * @returns {any} ?
 * @private
 */
function createElement(tagName, properties) {
    var element = (SVG_REG.test(tagName) ? document.createElementNS('http://www.w3.org/2000/svg', tagName) : document.createElement(tagName));
    if (typeof (properties) === 'undefined') {
        return element;
    }
    element.innerHTML = (properties.innerHTML ? properties.innerHTML : '');
    if (properties.className !== undefined) {
        element.className = properties.className;
    }
    if (properties.id !== undefined) {
        element.id = properties.id;
    }
    if (properties.styles !== undefined) {
        element.setAttribute('style', properties.styles);
    }
    if (properties.attrs !== undefined) {
        attributes(element, properties.attrs);
    }
    return element;
}
/**
 * The function used to add the classes to array of elements
 *
 * @param  {Element[]|NodeList} elements - An array of elements that need to add a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @returns {any} .
 * @private
 */
function addClass(elements, classes) {
    var classList = getClassList(classes);
    var regExp = RegExp;
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        for (var _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
            var className = classList_1[_b];
            if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isObject)(ele)) {
                var curClass = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('attributes.className', ele);
                if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(curClass)) {
                    (0,_util__WEBPACK_IMPORTED_MODULE_1__.setValue)('attributes.className', className, ele);
                }
                else if (!new regExp('\\b' + className + '\\b', 'i').test(curClass)) {
                    (0,_util__WEBPACK_IMPORTED_MODULE_1__.setValue)('attributes.className', curClass + ' ' + className, ele);
                }
            }
            else {
                if (!ele.classList.contains(className)) {
                    ele.classList.add(className);
                }
            }
        }
    }
    return elements;
}
/**
 * The function used to add the classes to array of elements
 *
 * @param  {Element[]|NodeList} elements - An array of elements that need to remove a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @returns {any} .
 * @private
 */
function removeClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        var flag = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isObject)(ele);
        var canRemove = flag ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('attributes.className', ele) : ele.className !== '';
        if (canRemove) {
            for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                var className = classList_2[_b];
                if (flag) {
                    var classes_1 = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('attributes.className', ele);
                    var classArr = classes_1.split(' ');
                    var index = classArr.indexOf(className);
                    if (index !== -1) {
                        classArr.splice(index, 1);
                    }
                    (0,_util__WEBPACK_IMPORTED_MODULE_1__.setValue)('attributes.className', classArr.join(' '), ele);
                }
                else {
                    ele.classList.remove(className);
                }
            }
        }
    }
    return elements;
}
/**
 * The function used to get classlist.
 *
 * @param  {string | string[]} classes - An element the need to check visibility
 * @returns {string[]} ?
 * @private
 */
function getClassList(classes) {
    var classList = [];
    if (typeof classes === 'string') {
        classList.push(classes);
    }
    else {
        classList = classes;
    }
    return classList;
}
/**
 * The function used to check element is visible or not.
 *
 * @param  {Element|Node} element - An element the need to check visibility
 * @returns {boolean} ?
 * @private
 */
function isVisible(element) {
    var ele = element;
    return (ele.style.visibility === '' && ele.offsetWidth > 0);
}
/**
 * The function used to insert an array of elements into a first of the element.
 *
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to prepend.
 * @param  {Element} toElement - An element that is going to prepend.
 * @param {boolean} isEval - ?
 * @returns {Element[] | NodeList} ?
 * @private
 */
function prepend(fromElements, toElement, isEval) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.insertBefore(docFrag, toElement.firstElementChild);
    if (isEval) {
        executeScript(toElement);
    }
    return fromElements;
}
/**
 * The function used to insert an array of elements into last of the element.
 *
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to append.
 * @param  {Element} toElement - An element that is going to prepend.
 * @param {boolean} isEval - ?
 * @returns {Element[] | NodeList} ?
 * @private
 */
function append(fromElements, toElement, isEval) {
    var docFrag = document.createDocumentFragment();
    if (fromElements instanceof NodeList) {
        while (fromElements.length > 0) {
            docFrag.appendChild(fromElements[0]);
        }
    }
    else {
        for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
            var ele = _a[_i];
            docFrag.appendChild(ele);
        }
    }
    toElement.appendChild(docFrag);
    if (isEval) {
        executeScript(toElement);
    }
    return fromElements;
}
/**
 * The function is used to evaluate script from Ajax request
 *
 * @param {Element} ele - An element is going to evaluate the script
 * @returns {void} ?
 */
function executeScript(ele) {
    var eleArray = ele.querySelectorAll('script');
    eleArray.forEach(function (element) {
        var script = document.createElement('script');
        script.text = element.innerHTML;
        document.head.appendChild(script);
        detach(script);
    });
}
/**
 * The function used to remove the element from parentnode
 *
 * @param  {Element|Node|HTMLElement} element - An element that is going to detach from the Dom
 * @returns {any} ?
 * @private
 */
function detach(element) {
    var parentNode = element.parentNode;
    if (parentNode) {
        return parentNode.removeChild(element);
    }
}
/**
 * The function used to remove the element from Dom also clear the bounded events
 *
 * @param  {Element|Node|HTMLElement} element - An element remove from the Dom
 * @returns {void} ?
 * @private
 */
function remove(element) {
    var parentNode = element.parentNode;
    _event_handler__WEBPACK_IMPORTED_MODULE_0__.EventHandler.clearEvents(element);
    parentNode.removeChild(element);
}
/**
 * The function helps to set multiple attributes to an element
 *
 * @param  {Element|Node} element - An element that need to set attributes.
 * @param  {string} attributes - JSON Object that is going to as attributes.
 * @returns {Element} ?
 * @private
 */
function attributes(element, attributes) {
    var keys = Object.keys(attributes);
    var ele = element;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isObject)(ele)) {
            var iKey = key;
            if (key === 'tabindex') {
                iKey = 'tabIndex';
            }
            ele.attributes["" + iKey] = attributes["" + key];
        }
        else {
            ele.setAttribute(key, attributes["" + key]);
        }
    }
    return ele;
}
/**
 * The function selects the element from giving context.
 *
 * @param  {string} selector - Selector string need fetch element
 * @param  {Document|Element} context - It is an optional type, That specifies a Dom context.
 * @param {boolean} needsVDOM ?
 * @returns {any} ?
 * @private
 */
function select(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    selector = querySelectId(selector);
    return context.querySelector(selector);
}
/**
 * The function selects an array of element from the given context.
 *
 * @param  {string} selector - Selector string need fetch element
 * @param  {Document|Element} context - It is an optional type, That specifies a Dom context.
 * @param {boolean} needsVDOM ?
 * @returns {HTMLElement[]} ?
 * @private
 */
function selectAll(selector, context, needsVDOM) {
    if (context === void 0) { context = document; }
    selector = querySelectId(selector);
    var nodeList = context.querySelectorAll(selector);
    return nodeList;
}
/**
 * The function selects an id of element from the given context.
 *
 * @param  {string} selector - Selector string need fetch element
 * @returns {string} ?
 * @private
 */
function querySelectId(selector) {
    var charRegex = /(!|"|\$|%|&|'|\(|\)|\*|\/|:|;|<|=|\?|@|\]|\^|`|{|}|\||\+|~)/g;
    if (selector.match(/#[0-9]/g) || selector.match(charRegex)) {
        var idList = selector.split(',');
        for (var i = 0; i < idList.length; i++) {
            var list = idList[parseInt(i.toString(), 10)].split(' ');
            for (var j = 0; j < list.length; j++) {
                if (list[parseInt(j.toString(), 10)].indexOf('#') > -1) {
                    if (!list[parseInt(j.toString(), 10)].match(/\[.*\]/)) {
                        var splitId = list[parseInt(j.toString(), 10)].split('#');
                        if (splitId[1].match(/^\d/) || splitId[1].match(charRegex)) {
                            var setId = list[parseInt(j.toString(), 10)].split('.');
                            setId[0] = setId[0].replace(/#/, '[id=\'') + '\']';
                            list[parseInt(j.toString(), 10)] = setId.join('.');
                        }
                    }
                }
            }
            idList[parseInt(i.toString(), 10)] = list.join(' ');
        }
        return idList.join(',');
    }
    return selector;
}
/**
 * Returns single closest parent element based on class selector.
 *
 * @param  {Element} element - An element that need to find the closest element.
 * @param  {string} selector - A classSelector of closest element.
 * @returns {Element} ?
 * @private
 */
function closest(element, selector) {
    var el = element;
    if (typeof el.closest === 'function') {
        return el.closest(selector);
    }
    while (el && el.nodeType === 1) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}
/**
 * Returns all sibling elements of the given element.
 *
 * @param  {Element|Node} element - An element that need to get siblings.
 * @returns {Element[]} ?
 * @private
 */
function siblings(element) {
    var siblings = [];
    var childNodes = Array.prototype.slice.call(element.parentNode.childNodes);
    for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
        var curNode = childNodes_1[_i];
        if (curNode.nodeType === Node.ELEMENT_NODE && element !== curNode) {
            siblings.push(curNode);
        }
    }
    return siblings;
}
/**
 * set the value if not exist. Otherwise set the existing value
 *
 * @param  {HTMLElement} element - An element to which we need to set value.
 * @param  {string} property - Property need to get or set.
 * @param  {string} value - value need to set.
 * @returns {string} ?
 * @private
 */
function getAttributeOrDefault(element, property, value) {
    var attrVal;
    var isObj = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isObject)(element);
    if (isObj) {
        attrVal = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('attributes.' + property, element);
    }
    else {
        attrVal = element.getAttribute(property);
    }
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(attrVal) && value) {
        if (!isObj) {
            element.setAttribute(property, value.toString());
        }
        else {
            element.attributes["" + property] = value;
        }
        attrVal = value;
    }
    return attrVal;
}
/**
 * Set the style attributes to Html element.
 *
 * @param {HTMLElement} element - Element which we want to set attributes
 * @param {any} attrs - Set the given attributes to element
 * @returns {void} ?
 * @private
 */
function setStyleAttribute(element, attrs) {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach(function (key) {
            element.style["" + key] = attrs["" + key];
        });
    }
}
/**
 * Method for add and remove classes to a dom element.
 *
 * @param {Element} element - Element for add and remove classes
 * @param {string[]} addClasses - List of classes need to be add to the element
 * @param {string[]} removeClasses - List of classes need to be remove from the element
 * @returns {void} ?
 * @private
 */
function classList(element, addClasses, removeClasses) {
    addClass([element], addClasses);
    removeClass([element], removeClasses);
}
/**
 * Method to check whether the element matches the given selector.
 *
 * @param {Element} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @returns {void} ?
 * @private
 */
function matches(element, selector) {
    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (matches) {
        return matches.call(element, selector);
    }
    else {
        return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
    }
}
/**
 * Method to get the html text from DOM.
 *
 * @param {HTMLElement} ele - Element to compare with the selector.
 * @param {string} innerHTML - String selector which element will satisfy.
 * @returns {void} ?
 * @private
 */
function includeInnerHTML(ele, innerHTML) {
    ele.innerHTML = innerHTML;
}
/**
 * Method to get the containsclass.
 *
 * @param {HTMLElement} ele - Element to compare with the selector.
 * @param {string} className - String selector which element will satisfy.
 * @returns {any} ?
 * @private
 */
function containsClass(ele, className) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isObject)(ele)) {
        var regExp = RegExp;
        return new regExp('\\b' + className + '\\b', 'i').test(ele.attributes.className);
    }
    else {
        return ele.classList.contains(className);
    }
}
/**
 * Method to check whether the element matches the given selector.
 *
 * @param {Object} element - Element to compare with the selector.
 * @param {boolean} deep ?
 * @returns {any} ?
 * @private
 */
function cloneNode(element, deep) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isObject)(element)) {
        if (deep) {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)({}, {}, element, true);
        }
    }
    else {
        return element.cloneNode(deep);
    }
}


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/draggable.js":
/*!*************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/draggable.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Draggable: () => (/* binding */ Draggable),
/* harmony export */   Position: () => (/* binding */ Position)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./ej2-resources/26.1.38/scripts/ej2-base/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./ej2-resources/26.1.38/scripts/ej2-base/browser.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/26.1.38/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/26.1.38/scripts/ej2-base/event-handler.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./child-property */ "./ej2-resources/26.1.38/scripts/ej2-base/child-property.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-explicit-any */








var defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };
var isDraggedObject = { isDragged: false };
/**
 * Specifies the position coordinates
 */
var Position = /** @__PURE__ @class */ (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(0)
    ], Position.prototype, "left", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(0)
    ], Position.prototype, "top", void 0);
    return Position;
}(_child_property__WEBPACK_IMPORTED_MODULE_5__.ChildProperty));

/**
 * Draggable Module provides support to enable draggable functionality in Dom Elements.
 * ```html
 * <div id='drag'>Draggable</div>
 * <script>
 * var ele = document.getElementById('drag');
 * var drag:Draggable = new Draggable(ele,{
 *     clone:false,
 *     drag: function(e) {
 *      //drag handler code.
 *      },
 *     handle:'.class'
 * });
 * </script>
 * ```
 */
var Draggable = /** @__PURE__ @class */ (function (_super) {
    __extends(Draggable, _super);
    function Draggable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.dragLimit = Draggable_1.getDefaultPosition();
        _this.borderWidth = Draggable_1.getDefaultPosition();
        _this.padding = Draggable_1.getDefaultPosition();
        _this.diffX = 0;
        _this.prevLeft = 0;
        _this.prevTop = 0;
        _this.dragProcessStarted = false;
        _this.eleTop = 0;
        _this.tapHoldTimer = 0;
        _this.externalInitialize = false;
        _this.diffY = 0;
        _this.parentScrollX = 0;
        _this.parentScrollY = 0;
        _this.droppables = {};
        _this.bind();
        return _this;
    }
    Draggable_1 = Draggable;
    Draggable.prototype.bind = function () {
        this.toggleEvents();
        if (_browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isIE) {
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)([this.element], 'e-block-touch');
        }
        this.droppables[this.scope] = {};
    };
    Draggable.getDefaultPosition = function () {
        return (0,_util__WEBPACK_IMPORTED_MODULE_6__.extend)({}, defaultPosition);
    };
    Draggable.prototype.toggleEvents = function (isUnWire) {
        var ele;
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(this.handle)) {
            ele = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.select)(this.handle, this.element);
        }
        var handler = (this.enableTapHold && _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice && _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isTouch) ? this.mobileInitialize : this.initialize;
        if (isUnWire) {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(ele || this.element, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchstart' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchStartEvent, handler);
        }
        else {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.add(ele || this.element, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchstart' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchStartEvent, handler, this);
        }
    };
    /* istanbul ignore next */
    Draggable.prototype.mobileInitialize = function (evt) {
        var _this = this;
        var target = evt.currentTarget;
        this.tapHoldTimer = setTimeout(function () {
            _this.externalInitialize = true;
            _this.removeTapholdTimer();
            _this.initialize(evt, target);
        }, this.tapHoldThreshold);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.add(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchmove' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchMoveEvent, this.removeTapholdTimer, this);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.add(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchend' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchEndEvent, this.removeTapholdTimer, this);
    };
    /* istanbul ignore next */
    Draggable.prototype.removeTapholdTimer = function () {
        clearTimeout(this.tapHoldTimer);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchmove' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchMoveEvent, this.removeTapholdTimer);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchend' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchEndEvent, this.removeTapholdTimer);
    };
    /* istanbul ignore next */
    Draggable.prototype.getScrollableParent = function (element, axis) {
        var scroll = { 'vertical': 'scrollHeight', 'horizontal': 'scrollWidth' };
        var client = { 'vertical': 'clientHeight', 'horizontal': 'clientWidth' };
        if ((0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(element)) {
            return null;
        }
        if (element[scroll["" + axis]] > element[client["" + axis]]) {
            if (axis === 'vertical' ? element.scrollTop > 0 : element.scrollLeft > 0) {
                if (axis === 'vertical') {
                    this.parentScrollY = this.parentScrollY +
                        (this.parentScrollY === 0 ? element.scrollTop : element.scrollTop - this.parentScrollY);
                    this.tempScrollHeight = element.scrollHeight;
                }
                else {
                    this.parentScrollX = this.parentScrollX +
                        (this.parentScrollX === 0 ? element.scrollLeft : element.scrollLeft - this.parentScrollX);
                    this.tempScrollWidth = element.scrollWidth;
                }
                if (!(0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(element)) {
                    return this.getScrollableParent(element.parentNode, axis);
                }
                else {
                    return element;
                }
            }
            else {
                return this.getScrollableParent(element.parentNode, axis);
            }
        }
        else {
            return this.getScrollableParent(element.parentNode, axis);
        }
    };
    Draggable.prototype.getScrollableValues = function () {
        this.parentScrollX = 0;
        this.parentScrollY = 0;
        var isModalDialog = this.element.classList.contains('e-dialog') && this.element.classList.contains('e-dlg-modal');
        var verticalScrollParent = this.getScrollableParent(this.element.parentNode, 'vertical');
        var horizontalScrollParent = this.getScrollableParent(this.element.parentNode, 'horizontal');
    };
    Draggable.prototype.initialize = function (evt, curTarget) {
        this.currentStateTarget = evt.target;
        if (this.isDragStarted()) {
            return;
        }
        else {
            this.isDragStarted(true);
            this.externalInitialize = false;
        }
        this.target = (evt.currentTarget || curTarget);
        this.dragProcessStarted = false;
        if (this.abort) {
            var abortSelectors = this.abort;
            if (typeof abortSelectors === 'string') {
                abortSelectors = [abortSelectors];
            }
            for (var i = 0; i < abortSelectors.length; i++) {
                if (!(0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)((0,_dom__WEBPACK_IMPORTED_MODULE_2__.closest)(evt.target, abortSelectors[parseInt(i.toString(), 10)]))) {
                    /* istanbul ignore next */
                    if (this.isDragStarted()) {
                        this.isDragStarted(true);
                    }
                    return;
                }
            }
        }
        if (this.preventDefault && !(0,_util__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(evt.changedTouches) && evt.type !== 'touchstart') {
            evt.preventDefault();
        }
        this.element.setAttribute('aria-grabbed', 'true');
        var intCoord = this.getCoordinates(evt);
        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
        if (!this.clone) {
            var pos = this.element.getBoundingClientRect();
            this.getScrollableValues();
            if (evt.clientX === evt.pageX) {
                this.parentScrollX = 0;
            }
            if (evt.clientY === evt.pageY) {
                this.parentScrollY = 0;
            }
            this.relativeXPosition = intCoord.pageX - (pos.left + this.parentScrollX);
            this.relativeYPosition = intCoord.pageY - (pos.top + this.parentScrollY);
        }
        if (this.externalInitialize) {
            this.intDragStart(evt);
        }
        else {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.add(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchmove' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchMoveEvent, this.intDragStart, this);
            _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.add(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchend' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchEndEvent, this.intDestroy, this);
        }
        this.toggleEvents(true);
        if (evt.type !== 'touchstart' && this.isPreventSelect) {
            document.body.classList.add('e-prevent-select');
        }
        this.externalInitialize = false;
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.trigger(document.documentElement, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchstart' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchStartEvent, evt);
    };
    Draggable.prototype.intDragStart = function (evt) {
        this.removeTapholdTimer();
        var isChangeTouch = !(0,_util__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(evt.changedTouches);
        if (isChangeTouch && (evt.changedTouches.length !== 1)) {
            return;
        }
        var intCordinate = this.getCoordinates(evt);
        var pos;
        var styleProp = getComputedStyle(this.element);
        this.margin = {
            left: parseInt(styleProp.marginLeft, 10),
            top: parseInt(styleProp.marginTop, 10),
            right: parseInt(styleProp.marginRight, 10),
            bottom: parseInt(styleProp.marginBottom, 10)
        };
        var element = this.element;
        if (this.clone && this.dragTarget) {
            var intClosest = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.closest)(evt.target, this.dragTarget);
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(intClosest)) {
                element = intClosest;
            }
        }
        /* istanbul ignore next */
        if (this.isReplaceDragEle) {
            element = this.currentStateCheck(evt.target, element);
        }
        this.offset = this.calculateParentPosition(element);
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var x = this.initialPosition.x - intCordinate.pageX;
        var y = this.initialPosition.y - intCordinate.pageY;
        var distance = Math.sqrt((x * x) + (y * y));
        if ((distance >= this.distance || this.externalInitialize)) {
            var ele = this.getHelperElement(evt);
            if (!ele || (0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(ele)) {
                return;
            }
            if (isChangeTouch) {
                evt.preventDefault();
            }
            var dragTargetElement = this.helperElement = ele;
            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
            if (this.dragStart) {
                var curTarget = this.getProperTargetElement(evt);
                var args = {
                    event: evt,
                    element: element,
                    target: curTarget,
                    bindEvents: (0,_util__WEBPACK_IMPORTED_MODULE_6__.isBlazor)() ? this.bindDragEvents.bind(this) : null,
                    dragElement: dragTargetElement
                };
                this.trigger('dragStart', args);
            }
            if (this.dragArea) {
                this.setDragArea();
            }
            else {
                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                this.borderWidth = { top: 0, left: 0 };
            }
            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
            if (this.clone && !this.enableTailMode) {
                this.diffX = this.position.left - this.offset.left;
                this.diffY = this.position.top - this.offset.top;
            }
            this.getScrollableValues();
            // when drag element has margin-top
            var styles = getComputedStyle(element);
            var marginTop = parseFloat(styles.marginTop);
            /* istanbul ignore next */
            if (this.clone && marginTop !== 0) {
                pos.top += marginTop;
            }
            this.eleTop = !isNaN(parseFloat(styles.top)) ? parseFloat(styles.top) - this.offset.top : 0;
            /* istanbul ignore next */
            // if (this.eleTop > 0) {
            //     pos.top += this.eleTop;
            // }
            if (this.enableScrollHandler && !this.clone) {
                pos.top -= this.parentScrollY;
                pos.left -= this.parentScrollX;
            }
            var posValue = this.getProcessedPositionValue({
                top: (pos.top - this.diffY) + 'px',
                left: (pos.left - this.diffX) + 'px'
            });
            if (this.dragArea && typeof this.dragArea !== 'string' && this.dragArea.classList.contains('e-kanban-content') && this.dragArea.style.position === 'relative') {
                pos.top += this.dragArea.scrollTop;
            }
            this.dragElePosition = { top: pos.top, left: pos.left };
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setStyleAttribute)(dragTargetElement, this.getDragPosition({ position: 'absolute', left: posValue.left, top: posValue.top }));
            _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchmove' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchMoveEvent, this.intDragStart);
            _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchend' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchEndEvent, this.intDestroy);
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_6__.isBlazor)()) {
                this.bindDragEvents(dragTargetElement);
            }
        }
    };
    Draggable.prototype.bindDragEvents = function (dragTargetElement) {
        if ((0,_dom__WEBPACK_IMPORTED_MODULE_2__.isVisible)(dragTargetElement)) {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.add(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchmove' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchMoveEvent, this.intDrag, this);
            _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.add(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchend' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchEndEvent, this.intDragStop, this);
            this.setGlobalDroppables(false, this.element, dragTargetElement);
        }
        else {
            this.toggleEvents();
            document.body.classList.remove('e-prevent-select');
        }
    };
    Draggable.prototype.elementInViewport = function (el) {
        this.top = el.offsetTop;
        this.left = el.offsetLeft;
        this.width = el.offsetWidth;
        this.height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            this.top += el.offsetTop;
            this.left += el.offsetLeft;
        }
        return (this.top >= window.pageYOffset &&
            this.left >= window.pageXOffset &&
            (this.top + this.height) <= (window.pageYOffset + window.innerHeight) &&
            (this.left + this.width) <= (window.pageXOffset + window.innerWidth));
    };
    Draggable.prototype.getProcessedPositionValue = function (value) {
        if (this.queryPositionInfo) {
            return this.queryPositionInfo(value);
        }
        return value;
    };
    Draggable.prototype.calculateParentPosition = function (ele) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(ele)) {
            return { left: 0, top: 0 };
        }
        var rect = ele.getBoundingClientRect();
        var style = getComputedStyle(ele);
        return {
            left: (rect.left + window.pageXOffset) - parseInt(style.marginLeft, 10),
            top: (rect.top + window.pageYOffset) - parseInt(style.marginTop, 10)
        };
    };
    Draggable.prototype.intDrag = function (evt) {
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        if (this.clone && evt.changedTouches && _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice && _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isTouch) {
            evt.preventDefault();
        }
        var left;
        var top;
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var docHeight = this.getDocumentWidthHeight('Height');
        if (docHeight < this.position.top) {
            this.position.top = docHeight;
        }
        var docWidth = this.getDocumentWidthHeight('Width');
        if (docWidth < this.position.left) {
            this.position.left = docWidth;
        }
        if (this.drag) {
            var curTarget = this.getProperTargetElement(evt);
            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            var flag = true;
            if (this.hoverObject) {
                if (this.hoverObject.instance !== eleObj.instance) {
                    this.triggerOutFunction(evt, eleObj);
                }
                else {
                    flag = false;
                }
            }
            if (flag) {
                eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
                eleObj.instance.intOver(evt, eleObj.target);
                this.hoverObject = eleObj;
            }
        }
        else if (this.hoverObject) {
            this.triggerOutFunction(evt, eleObj);
        }
        var helperElement = this.droppables[this.scope].helper;
        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
        var tLeft = this.parentClientRect.left;
        var tTop = this.parentClientRect.top;
        var intCoord = this.getCoordinates(evt);
        var pagex = intCoord.pageX;
        var pagey = intCoord.pageY;
        var dLeft = this.position.left - this.diffX;
        var dTop = this.position.top - this.diffY;
        var styles = getComputedStyle(helperElement);
        if (this.dragArea) {
            if (this.enableAutoScroll) {
                this.setDragArea();
            }
            if (this.pageX !== pagex || this.skipDistanceCheck) {
                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft)
                    + parseFloat(styles.marginRight));
                if (this.dragLimit.left > dLeft && dLeft > 0) {
                    left = this.dragLimit.left;
                }
                else if (this.dragLimit.right + window.pageXOffset < dLeft + helperWidth && dLeft > 0) {
                    left = dLeft - (dLeft - this.dragLimit.right) + window.pageXOffset - helperWidth;
                }
                else {
                    left = dLeft < 0 ? this.dragLimit.left : dLeft;
                }
            }
            if (this.pageY !== pagey || this.skipDistanceCheck) {
                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                    + parseFloat(styles.marginBottom));
                if (this.dragLimit.top > dTop && dTop > 0) {
                    top = this.dragLimit.top;
                }
                else if (this.dragLimit.bottom + window.pageYOffset < dTop + helperHeight && dTop > 0) {
                    top = dTop - (dTop - this.dragLimit.bottom) + window.pageYOffset - helperHeight;
                }
                else {
                    top = dTop < 0 ? this.dragLimit.top : dTop;
                }
            }
        }
        else {
            left = dLeft;
            top = dTop;
        }
        var iTop = tTop + this.borderWidth.top;
        var iLeft = tLeft + this.borderWidth.left;
        if (this.dragProcessStarted) {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(top)) {
                top = this.prevTop;
            }
            if ((0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(left)) {
                left = this.prevLeft;
            }
        }
        var draEleTop;
        var draEleLeft;
        if (this.helperElement.classList.contains('e-treeview')) {
            if (this.dragArea) {
                this.dragLimit.top = this.clone ? this.dragLimit.top : 0;
                draEleTop = (top - iTop) < 0 ? this.dragLimit.top : (top - this.borderWidth.top);
                draEleLeft = (left - iLeft) < 0 ? this.dragLimit.left : (left - this.borderWidth.left);
            }
            else {
                draEleTop = top - this.borderWidth.top;
                draEleLeft = left - this.borderWidth.left;
            }
        }
        else {
            if (this.dragArea) {
                var isDialogEle = this.helperElement.classList.contains('e-dialog');
                this.dragLimit.top = this.clone ? this.dragLimit.top : 0;
                draEleTop = (top - iTop) < 0 ? this.dragLimit.top : (top - iTop);
                draEleLeft = (left - iLeft) < 0 ? isDialogEle ? (left - (iLeft - this.borderWidth.left)) :
                    this.dragElePosition.left : (left - iLeft);
            }
            else {
                draEleTop = top - iTop;
                draEleLeft = left - iLeft;
            }
        }
        var marginTop = parseFloat(getComputedStyle(this.element).marginTop);
        // when drag-element has margin-top
        /* istanbul ignore next */
        if (marginTop > 0) {
            if (this.clone) {
                draEleTop += marginTop;
                if (dTop < 0) {
                    if ((marginTop + dTop) >= 0) {
                        draEleTop = marginTop + dTop;
                    }
                    else {
                        draEleTop -= marginTop;
                    }
                }
                if (this.dragArea) {
                    draEleTop = (this.dragLimit.bottom < draEleTop) ? this.dragLimit.bottom : draEleTop;
                }
            }
            if ((top - iTop) < 0) {
                if (dTop + marginTop + (helperElement.offsetHeight - iTop) >= 0) {
                    var tempDraEleTop = this.dragLimit.top + dTop - iTop;
                    if ((tempDraEleTop + marginTop + iTop) < 0) {
                        draEleTop -= marginTop + iTop;
                    }
                    else {
                        draEleTop = tempDraEleTop;
                    }
                }
                else {
                    draEleTop -= marginTop + iTop;
                }
            }
        }
        if (this.dragArea && this.helperElement.classList.contains('e-treeview')) {
            var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                + parseFloat(styles.marginBottom));
            draEleTop = (draEleTop + helperHeight) > this.dragLimit.bottom ? (this.dragLimit.bottom - helperHeight) : draEleTop;
        }
        /* istanbul ignore next */
        // if(this.eleTop > 0) {
        //      draEleTop += this.eleTop;
        // }
        if (this.enableScrollHandler && !this.clone) {
            draEleTop -= this.parentScrollY;
            draEleLeft -= this.parentScrollX;
        }
        if (this.dragArea && typeof this.dragArea !== 'string' && this.dragArea.classList.contains('e-kanban-content') && this.dragArea.style.position === 'relative') {
            draEleTop += this.dragArea.scrollTop;
        }
        var dragValue = this.getProcessedPositionValue({ top: draEleTop + 'px', left: draEleLeft + 'px' });
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setStyleAttribute)(helperElement, this.getDragPosition(dragValue));
        if (!this.elementInViewport(helperElement) && this.enableAutoScroll && !this.helperElement.classList.contains('e-treeview')) {
            this.helperElement.scrollIntoView();
        }
        var elements = document.querySelectorAll(':hover');
        if (this.enableAutoScroll && this.helperElement.classList.contains('e-treeview')) {
            if (elements.length === 0) {
                elements = this.getPathElements(evt);
            }
            var scrollParent = this.getScrollParent(elements, false);
            if (this.elementInViewport(this.helperElement)) {
                this.getScrollPosition(scrollParent, draEleTop);
            }
            else if (!this.elementInViewport(this.helperElement)) {
                elements = [].slice.call(document.querySelectorAll(':hover'));
                if (elements.length === 0) {
                    elements = this.getPathElements(evt);
                }
                scrollParent = this.getScrollParent(elements, true);
                this.getScrollPosition(scrollParent, draEleTop);
            }
        }
        this.dragProcessStarted = true;
        this.prevLeft = left;
        this.prevTop = top;
        this.position.left = left;
        this.position.top = top;
        this.pageX = pagex;
        this.pageY = pagey;
    };
    Draggable.prototype.getScrollParent = function (node, reverse) {
        var nodeEl = reverse ? node.reverse() : node;
        var hasScroll;
        for (var i = nodeEl.length - 1; i >= 0; i--) {
            hasScroll = window.getComputedStyle(nodeEl[parseInt(i.toString(), 10)])['overflow-y'];
            if ((hasScroll === 'auto' || hasScroll === 'scroll')
                && nodeEl[parseInt(i.toString(), 10)].scrollHeight > nodeEl[parseInt(i.toString(), 10)].clientHeight) {
                return nodeEl[parseInt(i.toString(), 10)];
            }
        }
        hasScroll = window.getComputedStyle(document.scrollingElement)['overflow-y'];
        if (hasScroll === 'visible') {
            document.scrollingElement.style.overflow = 'auto';
            return document.scrollingElement;
        }
    };
    Draggable.prototype.getScrollPosition = function (nodeEle, draEleTop) {
        if (nodeEle && nodeEle === document.scrollingElement) {
            if ((nodeEle.clientHeight + document.scrollingElement.scrollTop - this.helperElement.clientHeight) < draEleTop
                && nodeEle.getBoundingClientRect().height + this.parentClientRect.top > draEleTop) {
                nodeEle.scrollTop += this.helperElement.clientHeight;
            }
            else if (nodeEle.scrollTop > draEleTop - this.helperElement.clientHeight) {
                nodeEle.scrollTop -= this.helperElement.clientHeight;
            }
        }
        else if (nodeEle && nodeEle !== document.scrollingElement) {
            var docScrollTop = document.scrollingElement.scrollTop;
            var helperClientHeight = this.helperElement.clientHeight;
            if ((nodeEle.clientHeight + nodeEle.getBoundingClientRect().top - helperClientHeight + docScrollTop) < draEleTop) {
                nodeEle.scrollTop += this.helperElement.clientHeight;
            }
            else if (nodeEle.getBoundingClientRect().top > (draEleTop - helperClientHeight - docScrollTop)) {
                nodeEle.scrollTop -= this.helperElement.clientHeight;
            }
        }
    };
    Draggable.prototype.getPathElements = function (evt) {
        var elementTop = evt.clientX > 0 ? evt.clientX : 0;
        var elementLeft = evt.clientY > 0 ? evt.clientY : 0;
        return document.elementsFromPoint(elementTop, elementLeft);
    };
    Draggable.prototype.triggerOutFunction = function (evt, eleObj) {
        this.hoverObject.instance.intOut(evt, eleObj.target);
        this.hoverObject.instance.dragData[this.scope] = null;
        this.hoverObject = null;
    };
    Draggable.prototype.getDragPosition = function (dragValue) {
        var temp = (0,_util__WEBPACK_IMPORTED_MODULE_6__.extend)({}, dragValue);
        if (this.axis) {
            if (this.axis === 'x') {
                delete temp.top;
            }
            else if (this.axis === 'y') {
                delete temp.left;
            }
        }
        return temp;
    };
    Draggable.prototype.getDocumentWidthHeight = function (str) {
        var docBody = document.body;
        var docEle = document.documentElement;
        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
        return returnValue;
    };
    Draggable.prototype.intDragStop = function (evt) {
        this.dragProcessStarted = false;
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var type = ['touchend', 'pointerup', 'mouseup'];
        if (type.indexOf(evt.type) !== -1) {
            if (this.dragStop) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
            }
            this.intDestroy(evt);
        }
        else {
            this.element.setAttribute('aria-grabbed', 'false');
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.dragStopCalled = true;
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intDrop(evt, eleObj.target);
        }
        this.setGlobalDroppables(true);
        document.body.classList.remove('e-prevent-select');
    };
    /**
     * @param {MouseEvent | TouchEvent} evt ?
     * @returns {void}
     * @private
     */
    Draggable.prototype.intDestroy = function (evt) {
        this.dragProcessStarted = false;
        this.toggleEvents();
        document.body.classList.remove('e-prevent-select');
        this.element.setAttribute('aria-grabbed', 'false');
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchmove' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchMoveEvent, this.intDragStart);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchend' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchEndEvent, this.intDragStop);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchend' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchEndEvent, this.intDestroy);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchmove' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchMoveEvent, this.intDrag);
        if (this.isDragStarted()) {
            this.isDragStarted(true);
        }
    };
    // triggers when property changed
    Draggable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Draggable.prototype.getModuleName = function () {
        return 'draggable';
    };
    Draggable.prototype.isDragStarted = function (change) {
        if (change) {
            isDraggedObject.isDragged = !isDraggedObject.isDragged;
        }
        return isDraggedObject.isDragged;
    };
    Draggable.prototype.setDragArea = function () {
        var eleWidthBound;
        var eleHeightBound;
        var top = 0;
        var left = 0;
        var ele;
        var type = typeof this.dragArea;
        if (type === 'string') {
            ele = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.select)(this.dragArea);
        }
        else {
            ele = this.dragArea;
        }
        if (ele) {
            var elementArea = ele.getBoundingClientRect();
            eleWidthBound = ele.scrollWidth ? ele.scrollWidth : elementArea.right - elementArea.left;
            eleHeightBound = ele.scrollHeight ? (this.dragArea && !(0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.helperElement) && this.helperElement.classList.contains('e-treeview')) ? ele.clientHeight : ele.scrollHeight : elementArea.bottom - elementArea.top;
            var keys = ['Top', 'Left', 'Bottom', 'Right'];
            var styles = getComputedStyle(ele);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[parseInt(i.toString(), 10)];
                var tborder = styles['border' + key + 'Width'];
                var tpadding = styles['padding' + key];
                var lowerKey = key.toLowerCase();
                this.borderWidth["" + lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                this.padding["" + lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
            }
            if (this.dragArea && !(0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.helperElement) && this.helperElement.classList.contains('e-treeview')) {
                top = elementArea.top + document.scrollingElement.scrollTop;
            }
            else {
                top = elementArea.top;
            }
            left = elementArea.left;
            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
            this.dragLimit.top = ele.offsetTop + this.borderWidth.top + this.padding.top;
            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
        }
    };
    Draggable.prototype.getProperTargetElement = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var ele;
        var prevStyle = this.helperElement.style.pointerEvents || '';
        var isPointer = evt.type.indexOf('pointer') !== -1 && _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.info.name === 'safari' && parseInt(_browser__WEBPACK_IMPORTED_MODULE_1__.Browser.info.version, 10) > 12;
        if ((0,_util__WEBPACK_IMPORTED_MODULE_6__.compareElementParent)(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1 || isPointer) {
            this.helperElement.style.pointerEvents = 'none';
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
            this.helperElement.style.pointerEvents = prevStyle;
        }
        else {
            ele = evt.target;
        }
        return ele;
    };
    /* istanbul ignore next */
    Draggable.prototype.currentStateCheck = function (ele, oldEle) {
        var elem;
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.currentStateTarget) && this.currentStateTarget !== ele) {
            elem = this.currentStateTarget;
        }
        else {
            elem = !(0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(oldEle) ? oldEle : ele;
        }
        return elem;
    };
    Draggable.prototype.getMousePosition = function (evt, isdragscroll) {
        var dragEle = evt.srcElement !== undefined ? evt.srcElement : evt.target;
        var intCoord = this.getCoordinates(evt);
        var pageX;
        var pageY;
        var isOffsetParent = (0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(dragEle.offsetParent);
        /* istanbul ignore next */
        if (isdragscroll) {
            pageX = this.clone ? intCoord.pageX :
                (intCoord.pageX + (isOffsetParent ? 0 : dragEle.offsetParent.scrollLeft)) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY :
                (intCoord.pageY + (isOffsetParent ? 0 : dragEle.offsetParent.scrollTop)) - this.relativeYPosition;
        }
        else {
            pageX = this.clone ? intCoord.pageX : (intCoord.pageX + window.pageXOffset) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY : (intCoord.pageY + window.pageYOffset) - this.relativeYPosition;
        }
        if (document.scrollingElement && (!isdragscroll && !this.clone)) {
            var ele = document.scrollingElement;
            var isVerticalScroll = ele.scrollHeight > 0 && ele.scrollHeight > ele.clientHeight && ele.scrollTop > 0;
            var isHorrizontalScroll = ele.scrollWidth > 0 && ele.scrollWidth > ele.clientWidth && ele.scrollLeft > 0;
            pageX = isHorrizontalScroll ? pageX - ele.scrollLeft : pageX;
            pageY = isVerticalScroll ? pageY - ele.scrollTop : pageY;
        }
        return {
            left: pageX - (this.margin.left + this.cursorAt.left),
            top: pageY - (this.margin.top + this.cursorAt.top)
        };
    };
    Draggable.prototype.getCoordinates = function (evt) {
        if (evt.type.indexOf('touch') > -1) {
            return evt.changedTouches[0];
        }
        return evt;
    };
    Draggable.prototype.getHelperElement = function (evt) {
        var element;
        if (this.clone) {
            if (this.helper) {
                element = this.helper({ sender: evt, element: this.target });
            }
            else {
                element = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                document.body.appendChild(element);
            }
        }
        else {
            element = this.element;
        }
        return element;
    };
    Draggable.prototype.setGlobalDroppables = function (reset, drag, helper) {
        this.droppables[this.scope] = reset ? null : {
            draggable: drag,
            helper: helper,
            draggedElement: this.element
        };
    };
    Draggable.prototype.checkTargetElement = function (evt) {
        var target = this.getProperTargetElement(evt);
        var dropIns = this.getDropInstance(target);
        if (!dropIns && target && !(0,_util__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(target.parentNode)) {
            var parent_1 = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.closest)(target.parentNode, '.e-droppable') || target.parentElement;
            if (parent_1) {
                dropIns = this.getDropInstance(parent_1);
            }
        }
        return { target: target, instance: dropIns };
    };
    Draggable.prototype.getDropInstance = function (ele) {
        var name = 'getModuleName';
        var drop;
        var eleInst = ele && ele.ej2_instances;
        if (eleInst) {
            for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if (inst["" + name]() === 'droppable') {
                    drop = inst;
                    break;
                }
            }
        }
        return drop;
    };
    Draggable.prototype.destroy = function () {
        this.toggleEvents(true);
        _super.prototype.destroy.call(this);
    };
    var Draggable_1;
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Complex)({}, Position)
    ], Draggable.prototype, "cursorAt", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(true)
    ], Draggable.prototype, "clone", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)()
    ], Draggable.prototype, "dragArea", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)()
    ], Draggable.prototype, "isDragScroll", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)()
    ], Draggable.prototype, "isReplaceDragEle", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(true)
    ], Draggable.prototype, "isPreventSelect", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Event)()
    ], Draggable.prototype, "drag", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Event)()
    ], Draggable.prototype, "dragStart", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Event)()
    ], Draggable.prototype, "dragStop", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(1)
    ], Draggable.prototype, "distance", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)()
    ], Draggable.prototype, "handle", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)()
    ], Draggable.prototype, "abort", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)()
    ], Draggable.prototype, "helper", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)('default')
    ], Draggable.prototype, "scope", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)('')
    ], Draggable.prototype, "dragTarget", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)()
    ], Draggable.prototype, "axis", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)()
    ], Draggable.prototype, "queryPositionInfo", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(false)
    ], Draggable.prototype, "enableTailMode", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(false)
    ], Draggable.prototype, "skipDistanceCheck", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(true)
    ], Draggable.prototype, "preventDefault", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(false)
    ], Draggable.prototype, "enableAutoScroll", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(false)
    ], Draggable.prototype, "enableTapHold", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(750)
    ], Draggable.prototype, "tapHoldThreshold", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)(false)
    ], Draggable.prototype, "enableScrollHandler", void 0);
    Draggable = Draggable_1 = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_3__.NotifyPropertyChanges
    ], Draggable);
    return Draggable;
}(_base__WEBPACK_IMPORTED_MODULE_0__.Base));



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/droppable.js":
/*!*************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/droppable.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Droppable: () => (/* binding */ Droppable)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./ej2-resources/26.1.38/scripts/ej2-base/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./ej2-resources/26.1.38/scripts/ej2-base/browser.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/26.1.38/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/26.1.38/scripts/ej2-base/event-handler.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Droppable Module provides support to enable droppable functionality in Dom Elements.
 * ```html
 * <div id='drop'>Droppable</div>
 * <script>
 * let ele:HTMLElement = document.getElementById('drop');
 * var drag:Droppable = new Droppable(ele,{
 *     accept:'.drop',
 *     drop: function(e) {
 *      //drop handler code.
 *     }
 * });
 * </script>
 * ```
 */
var Droppable = /** @__PURE__ @class */ (function (_super) {
    __extends(Droppable, _super);
    function Droppable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseOver = false;
        _this.dragData = {};
        _this.dragStopCalled = false;
        _this.bind();
        return _this;
    }
    Droppable.prototype.bind = function () {
        this.wireEvents();
    };
    Droppable.prototype.wireEvents = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.add(this.element, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchend' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchEndEvent, this.intDrop, this);
    };
    // triggers when property changed
    Droppable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Droppable.prototype.getModuleName = function () {
        return 'droppable';
    };
    Droppable.prototype.intOver = function (event, element) {
        if (!this.mouseOver) {
            var drag = this.dragData[this.scope];
            this.trigger('over', { event: event, target: element, dragData: drag });
            this.mouseOver = true;
        }
    };
    Droppable.prototype.intOut = function (event, element) {
        if (this.mouseOver) {
            this.trigger('out', { evt: event, target: element });
            this.mouseOver = false;
        }
    };
    Droppable.prototype.intDrop = function (evt, element) {
        if (!this.dragStopCalled) {
            return;
        }
        else {
            this.dragStopCalled = false;
        }
        var accept = true;
        var drag = this.dragData[this.scope];
        var isDrag = drag ? (drag.helper && (0,_dom__WEBPACK_IMPORTED_MODULE_2__.isVisible)(drag.helper)) : false;
        var area;
        if (isDrag) {
            area = this.isDropArea(evt, drag.helper, element);
            if (this.accept) {
                accept = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.matches)(drag.helper, this.accept);
            }
        }
        if (isDrag && this.drop && area.canDrop && accept) {
            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
        }
        this.mouseOver = false;
    };
    Droppable.prototype.isDropArea = function (evt, helper, element) {
        var area = { canDrop: true, target: element || evt.target };
        var isTouch = evt.type === 'touchend';
        if (isTouch || area.target === helper) {
            helper.style.display = 'none';
            var coord = isTouch ? (evt.changedTouches[0]) : evt;
            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
            area.canDrop = false;
            area.canDrop = (0,_util__WEBPACK_IMPORTED_MODULE_5__.compareElementParent)(ele, this.element);
            if (area.canDrop) {
                area.target = ele;
            }
            helper.style.display = '';
        }
        return area;
    };
    Droppable.prototype.destroy = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_4__.EventHandler.remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isSafari() ? 'touchend' : _browser__WEBPACK_IMPORTED_MODULE_1__.Browser.touchEndEvent, this.intDrop);
        _super.prototype.destroy.call(this);
    };
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)()
    ], Droppable.prototype, "accept", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Property)('default')
    ], Droppable.prototype, "scope", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Event)()
    ], Droppable.prototype, "drop", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Event)()
    ], Droppable.prototype, "over", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_3__.Event)()
    ], Droppable.prototype, "out", void 0);
    Droppable = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_3__.NotifyPropertyChanges
    ], Droppable);
    return Droppable;
}(_base__WEBPACK_IMPORTED_MODULE_0__.Base));



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/event-handler.js":
/*!*****************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/event-handler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventHandler: () => (/* binding */ EventHandler)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./ej2-resources/26.1.38/scripts/ej2-base/browser.js");


/**
 * EventHandler class provides option to add, remove, clear and trigger events to a HTML DOM element
 * ```html
 * <div id="Eventdiv">  </div>
 * <script>
 *   let node: HTMLElement = document.querySelector("#Eventdiv");
 *   EventHandler.addEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   EventHandler.addEventListener(node, "onmouseover", function(){
 *       // mouseover handler function code
 *   });
 *   EventHandler.removeEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   eventObj.clearEvents();
 * </script>
 * ```
 */
var EventHandler = /** @__PURE__ @class */ (function () {
    function EventHandler() {
    }
    // to get the event data based on element
    EventHandler.addOrGetEventData = function (element) {
        if ('__eventList' in element) {
            return element.__eventList.events;
        }
        else {
            element.__eventList = {};
            return element.__eventList.events = [];
        }
    };
    /**
     * Add an event to the specified DOM element.
     *
     * @param {any} element - Target HTML DOM element
     * @param {string} eventName - A string that specifies the name of the event
     * @param {Function} listener - Specifies the function to run when the event occurs
     * @param {Object} bindTo - A object that binds 'this' variable in the event handler
     * @param {number} intDebounce - Specifies at what interval given event listener should be triggered.
     * @returns {Function} ?
     */
    EventHandler.add = function (element, eventName, listener, bindTo, intDebounce) {
        var eventData = EventHandler.addOrGetEventData(element);
        var debounceListener;
        if (intDebounce) {
            debounceListener = (0,_util__WEBPACK_IMPORTED_MODULE_0__.debounce)(listener, intDebounce);
        }
        else {
            debounceListener = listener;
        }
        if (bindTo) {
            debounceListener = debounceListener.bind(bindTo);
        }
        var event = eventName.split(' ');
        for (var i = 0; i < event.length; i++) {
            eventData.push({
                name: event[parseInt(i.toString(), 10)],
                listener: listener,
                debounce: debounceListener
            });
            if (_browser__WEBPACK_IMPORTED_MODULE_1__.Browser.isIE) {
                element.addEventListener(event[parseInt(i.toString(), 10)], debounceListener);
            }
            else {
                element.addEventListener(event[parseInt(i.toString(), 10)], debounceListener, { passive: false });
            }
        }
        return debounceListener;
    };
    /**
     * Remove an event listener that has been attached before.
     *
     * @param {any} element - Specifies the target html element to remove the event
     * @param {string} eventName - A string that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @returns {void} ?
     */
    EventHandler.remove = function (element, eventName, listener) {
        var eventData = EventHandler.addOrGetEventData(element);
        var event = eventName.split(' ');
        var _loop_1 = function (j) {
            var index = -1;
            var debounceListener;
            if (eventData && eventData.length !== 0) {
                eventData.some(function (x, i) {
                    return x.name === event[parseInt(j.toString(), 10)] && x.listener === listener ?
                        (index = i, debounceListener = x.debounce, true) : false;
                });
            }
            if (index !== -1) {
                eventData.splice(index, 1);
            }
            if (debounceListener) {
                element.removeEventListener(event[parseInt(j.toString(), 10)], debounceListener);
            }
        };
        for (var j = 0; j < event.length; j++) {
            _loop_1(j);
        }
    };
    /**
     * Clear all the event listeners that has been previously attached to the element.
     *
     * @param {any} element - Specifies the target html element to clear the events
     * @returns {void} ?
     */
    EventHandler.clearEvents = function (element) {
        var eventData = EventHandler.addOrGetEventData(element);
        var copyData = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)([], undefined, eventData);
        for (var i = 0; i < copyData.length; i++) {
            var parseValue = copyData[parseInt(i.toString(), 10)];
            element.removeEventListener(parseValue.name, parseValue.debounce);
            eventData.shift();
        }
    };
    /**
     * Trigger particular event of the element.
     *
     * @param {any} element - Specifies the target html element to trigger the events
     * @param {string} eventName - Specifies the event to trigger for the specified element.
     * Can be a custom event, or any of the standard events.
     * @param {any} eventProp - Additional parameters to pass on to the event properties
     * @returns {void} ?
     */
    EventHandler.trigger = function (element, eventName, eventProp) {
        var eventData = EventHandler.addOrGetEventData(element);
        for (var _i = 0, eventData_1 = eventData; _i < eventData_1.length; _i++) {
            var event_1 = eventData_1[_i];
            if (event_1.name === eventName) {
                event_1.debounce.call(this, eventProp);
            }
        }
    };
    return EventHandler;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/fetch.js":
/*!*********************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/fetch.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fetch: () => (/* binding */ Fetch)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * The Fetch class provides a way to make asynchronous network requests, typically to retrieve resources from a server.
 * ```typescript
 *   var fetchApi = new Fetch('index.html', 'GET');
 *   fetchApi.send()
 *      .then((value) => {
 *          console.log(value);
 *      }).catch((error) => {
 *          console.log(error);
 *      });
 * ```
 */
var Fetch = /** @__PURE__ @class */ (function () {
    /**
     * Constructor for Fetch class.
     *
     * @param {string|Object} options - Specifies the URL or Request object with URL to which the request is to be sent.
     * @param {string} type - Specifies which request method is to be used, such as GET, POST, etc.
     * @param {string} contentType - Specifies the content type of the request, which is used to indicate the original media type of the resource.
     */
    function Fetch(options, type, contentType) {
        /**
         * Specifies which request method is to be used, such as GET, POST, etc.
         *
         * @default GET
         */
        this.type = 'GET';
        /**
         * A boolean value indicating whether to reject the promise or not.
         *
         * @private
         * @default true
         */
        this.emitError = true;
        if (typeof options === 'string') {
            this.url = options;
            this.type = !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(type) ? type.toUpperCase() : this.type;
            this.contentType = contentType;
        }
        else if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(options) && Object.keys(options).length > 0) {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.merge)(this, options);
        }
        this.contentType = !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(this.contentType) ? this.contentType : 'application/json; charset=utf-8';
    }
    /**
     * Send the request to server.
     *
     * @param {string|Object} data - Specifies the data that needs to be added to the request.
     * @returns {Promise<Response>} - Returns the response to a request.
     */
    Fetch.prototype.send = function (data) {
        var _this = this;
        var contentTypes = {
            'application/json': 'json',
            'multipart/form-data': 'formData',
            'application/octet-stream': 'blob',
            'application/x-www-form-urlencoded': 'formData'
        };
        try {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(this.fetchRequest) && this.type === 'GET') {
                this.fetchRequest = new Request(this.url, { method: this.type });
            }
            else if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(this.fetchRequest)) {
                this.data = !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(data) ? data : this.data;
                this.fetchRequest = new Request(this.url, {
                    method: this.type,
                    headers: { 'Content-Type': this.contentType },
                    body: this.data
                });
            }
            var eventArgs = { cancel: false, fetchRequest: this.fetchRequest };
            this.triggerEvent(this['beforeSend'], eventArgs);
            if (eventArgs.cancel) {
                return null;
            }
            this.fetchResponse = fetch(this.fetchRequest);
            return this.fetchResponse.then(function (response) {
                _this.triggerEvent(_this['onLoad'], response);
                if (!response.ok) {
                    throw response;
                }
                var responseType = 'text';
                for (var _i = 0, _a = Object.keys(contentTypes); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (response.headers.get('Content-Type') && response.headers.get('Content-Type').indexOf(key) !== -1) {
                        responseType = contentTypes[key];
                    }
                }
                return response[responseType]();
            }).then(function (data) {
                _this.triggerEvent(_this['onSuccess'], data, _this);
                return data;
            }).catch(function (error) {
                var returnVal = {};
                if (_this.emitError) {
                    _this.triggerEvent(_this['onFailure'], error);
                    returnVal = Promise.reject(error);
                }
                return returnVal;
            });
        }
        catch (error) {
            return error;
        }
    };
    Fetch.prototype.triggerEvent = function (callback, data, instance) {
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(callback) && typeof callback === 'function') {
            callback(data, instance);
        }
    };
    return Fetch;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/hijri-parser.js":
/*!****************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/hijri-parser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HijriParser: () => (/* binding */ HijriParser)
/* harmony export */ });
/***
 * Hijri parser
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var HijriParser;
(function (HijriParser) {
    var dateCorrection = [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990,
        29019, 29049, 29078, 29108, 29137, 29167, 29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522,
        29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759, 29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053,
        30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348, 30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585,
        30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939, 30968, 30998, 31027, 31057, 31086, 31116,
        31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530, 31559, 31589, 31618, 31648,
        31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120, 32150, 32180,
        32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711,
        32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243,
        33272, 33302, 33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775,
        33804, 33834, 33863, 33893, 33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306,
        34336, 34365, 34395, 34424, 34454, 34483, 34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837,
        34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074, 35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370,
        35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665, 35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901,
        35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254, 36284, 36314, 36343, 36373, 36403, 36433,
        36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845, 36875, 36904, 36934, 36963,
        36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436, 37465, 37495,
        37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027,
        38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558,
        38587, 38617, 38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089,
        39118, 39148, 39178, 39208, 39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621,
        39650, 39680, 39709, 39739, 39768, 39798, 39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153,
        40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389, 40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685,
        40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980, 41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216,
        41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570, 41599, 41629, 41658, 41688, 41718, 41748,
        41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161, 42190, 42220, 42249, 42279,
        42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751, 42780, 42810,
        42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342,
        43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873,
        43903, 43932, 43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405,
        44434, 44464, 44493, 44523, 44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936,
        44966, 44996, 45025, 45055, 45084, 45114, 45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468,
        45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704, 45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999,
        46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295, 46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531,
        46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885, 46915, 46944, 46974, 47003, 47033, 47063,
        47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476, 47506, 47535, 47565, 47594,
        47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066, 48096, 48125,
        48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657,
        48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189,
        49218, 49248, 49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720,
        49749, 49779, 49809, 49838, 49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252,
        50281, 50311, 50340, 50370, 50400, 50429, 50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784,
        50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019, 51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315,
        51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611, 51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846,
        51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200, 52230, 52260, 52290, 52319, 52349, 52379,
        52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792, 52822, 52851, 52881, 52910,
        52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383, 53412, 53441,
        53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973,
        54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505,
        54535, 54564, 54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036,
        55066, 55095, 55125, 55154, 55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567,
        55597, 55627, 55657, 55686, 55716, 55745, 55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100,
        56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335, 56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631,
        56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926, 56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162,
        57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517, 57546, 57576, 57605, 57634, 57664, 57694,
        57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107, 58137, 58167, 58196, 58226,
        58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698, 58727, 58757,
        58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288,
        59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820,
        59850, 59879, 59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352,
        60381, 60411, 60440, 60469, 60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883,
        60912, 60942, 60972, 61002, 61031, 61061, 61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415,
        61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651, 61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947,
        61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242, 62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478,
        62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832, 62862, 62891, 62921, 62950, 62980, 63009,
        63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423, 63453, 63482, 63512, 63541,
        63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014, 64043, 64073,
        64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603,
        64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136,
        65166, 65195, 65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667,
        65697, 65726, 65755, 65785, 65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199,
        66228, 66258, 66287, 66317, 66346, 66376, 66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730,
        66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967, 66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262,
        67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557, 67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793,
        67823, 67852, 67882, 67911, 67941, 67971, 68000, 68030, 68060, 68089, 68119, 68148, 68177, 68207, 68236, 68266, 68295, 68325,
        68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738, 68768, 68797, 68827, 68857,
        68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330, 69359, 69388,
        69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919,
        69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451,
        70481, 70510, 70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983,
        71013, 71042, 71071, 71101, 71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514,
        71543, 71573, 71602, 71632, 71662, 71691, 71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046,
        72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282, 72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577,
        72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872, 72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109,
        73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464, 73493, 73523, 73552, 73581, 73611, 73640,
        73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053, 74083, 74113, 74142, 74172,
        74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645, 74675, 74704,
        74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235,
        75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766,
        75796, 75826, 75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299,
        76328, 76358, 76387, 76416, 76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830,
        76859, 76889, 76918, 76948, 76977, 77007, 77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361,
        77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598, 77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893,
        77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188, 78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425,
        78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779, 78808, 78838, 78867, 78897, 78926, 78956,
        78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369, 79399, 79428, 79458, 79487,
        79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960, 79990
    ];
    /**
     *
     * @param {Date} gDate ?
     * @returns {Object} ?
     */
    function getHijriDate(gDate) {
        var day = gDate.getDate();
        var month = gDate.getMonth();
        var year = gDate.getFullYear();
        var tMonth = month + 1;
        var tYear = year;
        if (tMonth < 3) {
            tYear -= 1;
            tMonth += 12;
        }
        var yPrefix = Math.floor(tYear / 100);
        var julilanOffset = yPrefix - Math.floor(yPrefix / 4.) - 2;
        var julianNumber = Math.floor(365.25 * (tYear + 4716)) + Math.floor(30.6001 * (tMonth + 1)) + day - julilanOffset - 1524;
        yPrefix = Math.floor((julianNumber - 1867216.25) / 36524.25);
        julilanOffset = yPrefix - Math.floor(yPrefix / 4.) + 1;
        var b = julianNumber + julilanOffset + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var tempMonth = Math.floor((b - d) / 30.6001);
        day = (b - d) - Math.floor(30.6001 * tempMonth);
        month = Math.floor((b - d) / 20.6001);
        if (month > 13) {
            c += 1;
            month -= 12;
        }
        month -= 1;
        year = c - 4716;
        var modifiedJulianDate = julianNumber - 2400000;
        // date calculation for year after 2077
        var iyear = 10631 / 30;
        var z = julianNumber - 1948084;
        var cyc = Math.floor(z / 10631.);
        z = z - 10631 * cyc;
        var j = Math.floor((z - 0.1335) / iyear);
        var iy = 30 * cyc + j;
        z = z - Math.floor(j * iyear + 0.1335);
        var im = Math.floor((z + 28.5001) / 29.5);
        /* istanbul ignore next */
        if (im === 13) {
            im = 12;
        }
        var tempDay = z - Math.floor(29.5001 * im - 29);
        var i = 0;
        for (; i < dateCorrection.length; i++) {
            if (dateCorrection[parseInt(i.toString(), 10)] > modifiedJulianDate) {
                break;
            }
        }
        var iln = i + 16260;
        var ii = Math.floor((iln - 1) / 12);
        var hYear = ii + 1;
        var hmonth = iln - 12 * ii;
        var hDate = modifiedJulianDate - dateCorrection[i - 1] + 1;
        if ((hDate + '').length > 2) {
            hDate = tempDay;
            hmonth = im;
            hYear = iy;
        }
        return { year: hYear, month: hmonth, date: hDate };
    }
    HijriParser.getHijriDate = getHijriDate;
    /**
     *
     * @param {number} year ?
     * @param {number} month ?
     * @param {number} day ?
     * @returns {Date} ?
     */
    function toGregorian(year, month, day) {
        var iy = year;
        var im = month;
        var id = day;
        var ii = iy - 1;
        var iln = (ii * 12) + 1 + (im - 1);
        var i = iln - 16260;
        var mcjdn = id + dateCorrection[i - 1] - 1;
        var julianDate = mcjdn + 2400000;
        var z = Math.floor(julianDate + 0.5);
        var a = Math.floor((z - 1867216.25) / 36524.25);
        a = z + 1 + a - Math.floor(a / 4);
        var b = a + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var e = Math.floor((b - d) / 30.6001);
        var gDay = b - d - Math.floor(e * 30.6001);
        var gMonth = e - (e > 13.5 ? 13 : 1);
        var gYear = c - (gMonth > 2.5 ? 4716 : 4715);
        /* istanbul ignore next */
        if (gYear <= 0) {
            gMonth--;
        } // No year zero
        return new Date(gYear + '/' + (gMonth) + '/' + gDay);
    }
    HijriParser.toGregorian = toGregorian;
})(HijriParser || (HijriParser = {}));


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/index.js":
/*!*********************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ajax: () => (/* reexport safe */ _ajax__WEBPACK_IMPORTED_MODULE_1__.Ajax),
/* harmony export */   Animation: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_3__.Animation),
/* harmony export */   Base: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_4__.Base),
/* harmony export */   Browser: () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_5__.Browser),
/* harmony export */   ChildProperty: () => (/* reexport safe */ _child_property__WEBPACK_IMPORTED_MODULE_7__.ChildProperty),
/* harmony export */   Collection: () => (/* reexport safe */ _notify_property_change__WEBPACK_IMPORTED_MODULE_15__.Collection),
/* harmony export */   CollectionFactory: () => (/* reexport safe */ _notify_property_change__WEBPACK_IMPORTED_MODULE_15__.CollectionFactory),
/* harmony export */   Complex: () => (/* reexport safe */ _notify_property_change__WEBPACK_IMPORTED_MODULE_15__.Complex),
/* harmony export */   ComplexFactory: () => (/* reexport safe */ _notify_property_change__WEBPACK_IMPORTED_MODULE_15__.ComplexFactory),
/* harmony export */   Component: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_6__.Component),
/* harmony export */   CreateBuilder: () => (/* reexport safe */ _notify_property_change__WEBPACK_IMPORTED_MODULE_15__.CreateBuilder),
/* harmony export */   Draggable: () => (/* reexport safe */ _draggable__WEBPACK_IMPORTED_MODULE_8__.Draggable),
/* harmony export */   Droppable: () => (/* reexport safe */ _droppable__WEBPACK_IMPORTED_MODULE_9__.Droppable),
/* harmony export */   Event: () => (/* reexport safe */ _notify_property_change__WEBPACK_IMPORTED_MODULE_15__.Event),
/* harmony export */   EventHandler: () => (/* reexport safe */ _event_handler__WEBPACK_IMPORTED_MODULE_10__.EventHandler),
/* harmony export */   Fetch: () => (/* reexport safe */ _fetch__WEBPACK_IMPORTED_MODULE_2__.Fetch),
/* harmony export */   GlobalAnimationMode: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_3__.GlobalAnimationMode),
/* harmony export */   HijriParser: () => (/* reexport safe */ _hijri_parser__WEBPACK_IMPORTED_MODULE_17__.HijriParser),
/* harmony export */   Internationalization: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.Internationalization),
/* harmony export */   IntlBase: () => (/* reexport safe */ _intl_intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase),
/* harmony export */   KeyboardEvents: () => (/* reexport safe */ _keyboard__WEBPACK_IMPORTED_MODULE_12__.KeyboardEvents),
/* harmony export */   L10n: () => (/* reexport safe */ _l10n__WEBPACK_IMPORTED_MODULE_13__.L10n),
/* harmony export */   ModuleLoader: () => (/* reexport safe */ _module_loader__WEBPACK_IMPORTED_MODULE_14__.ModuleLoader),
/* harmony export */   NotifyPropertyChanges: () => (/* reexport safe */ _notify_property_change__WEBPACK_IMPORTED_MODULE_15__.NotifyPropertyChanges),
/* harmony export */   Observer: () => (/* reexport safe */ _observer__WEBPACK_IMPORTED_MODULE_21__.Observer),
/* harmony export */   Position: () => (/* reexport safe */ _draggable__WEBPACK_IMPORTED_MODULE_8__.Position),
/* harmony export */   Property: () => (/* reexport safe */ _notify_property_change__WEBPACK_IMPORTED_MODULE_15__.Property),
/* harmony export */   SanitizeHtmlHelper: () => (/* reexport safe */ _sanitize_helper__WEBPACK_IMPORTED_MODULE_22__.SanitizeHtmlHelper),
/* harmony export */   SwipeSettings: () => (/* reexport safe */ _touch__WEBPACK_IMPORTED_MODULE_16__.SwipeSettings),
/* harmony export */   Touch: () => (/* reexport safe */ _touch__WEBPACK_IMPORTED_MODULE_16__.Touch),
/* harmony export */   addClass: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.addClass),
/* harmony export */   addInstance: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.addInstance),
/* harmony export */   animationMode: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_3__.animationMode),
/* harmony export */   append: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.append),
/* harmony export */   attributes: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.attributes),
/* harmony export */   blazorCultureFormats: () => (/* reexport safe */ _intl_intl_base__WEBPACK_IMPORTED_MODULE_0__.blazorCultureFormats),
/* harmony export */   blazorTemplates: () => (/* reexport safe */ _template_engine__WEBPACK_IMPORTED_MODULE_18__.blazorTemplates),
/* harmony export */   classList: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.classList),
/* harmony export */   cldrData: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.cldrData),
/* harmony export */   cloneNode: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.cloneNode),
/* harmony export */   closest: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.closest),
/* harmony export */   compareElementParent: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.compareElementParent),
/* harmony export */   compile: () => (/* reexport safe */ _template_engine__WEBPACK_IMPORTED_MODULE_18__.compile),
/* harmony export */   componentList: () => (/* reexport safe */ _validate_lic__WEBPACK_IMPORTED_MODULE_23__.componentList),
/* harmony export */   containerObject: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.containerObject),
/* harmony export */   containsClass: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.containsClass),
/* harmony export */   createElement: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.createElement),
/* harmony export */   createInstance: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.createInstance),
/* harmony export */   createLicenseOverlay: () => (/* reexport safe */ _validate_lic__WEBPACK_IMPORTED_MODULE_23__.createLicenseOverlay),
/* harmony export */   debounce: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.debounce),
/* harmony export */   defaultCulture: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.defaultCulture),
/* harmony export */   defaultCurrencyCode: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.defaultCurrencyCode),
/* harmony export */   deleteObject: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.deleteObject),
/* harmony export */   detach: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.detach),
/* harmony export */   disableBlazorMode: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.disableBlazorMode),
/* harmony export */   enableBlazorMode: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.enableBlazorMode),
/* harmony export */   enableRipple: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_3__.enableRipple),
/* harmony export */   enableRtl: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.enableRtl),
/* harmony export */   enableVersionBasedPersistence: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_6__.enableVersionBasedPersistence),
/* harmony export */   extend: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.extend),
/* harmony export */   formatUnit: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.formatUnit),
/* harmony export */   getAttributeOrDefault: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.getAttributeOrDefault),
/* harmony export */   getComponent: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_4__.getComponent),
/* harmony export */   getDefaultDateObject: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.getDefaultDateObject),
/* harmony export */   getElement: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.getElement),
/* harmony export */   getEnumValue: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.getEnumValue),
/* harmony export */   getInstance: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.getInstance),
/* harmony export */   getNumberDependable: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.getNumberDependable),
/* harmony export */   getNumericObject: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.getNumericObject),
/* harmony export */   getRandomId: () => (/* reexport safe */ _template_engine__WEBPACK_IMPORTED_MODULE_18__.getRandomId),
/* harmony export */   getTemplateEngine: () => (/* reexport safe */ _template_engine__WEBPACK_IMPORTED_MODULE_18__.getTemplateEngine),
/* harmony export */   getUniqueID: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.getUniqueID),
/* harmony export */   getValue: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.getValue),
/* harmony export */   getVersion: () => (/* reexport safe */ _validate_lic__WEBPACK_IMPORTED_MODULE_23__.getVersion),
/* harmony export */   includeInnerHTML: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.includeInnerHTML),
/* harmony export */   initializeCSPTemplate: () => (/* reexport safe */ _template_engine__WEBPACK_IMPORTED_MODULE_18__.initializeCSPTemplate),
/* harmony export */   isBlazor: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.isBlazor),
/* harmony export */   isNullOrUndefined: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.isNullOrUndefined),
/* harmony export */   isObject: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.isObject),
/* harmony export */   isObjectArray: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.isObjectArray),
/* harmony export */   isRippleEnabled: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_3__.isRippleEnabled),
/* harmony export */   isUndefined: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.isUndefined),
/* harmony export */   isVisible: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.isVisible),
/* harmony export */   loadCldr: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.loadCldr),
/* harmony export */   matches: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.matches),
/* harmony export */   merge: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.merge),
/* harmony export */   onIntlChange: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.onIntlChange),
/* harmony export */   prepend: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.prepend),
/* harmony export */   print: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.print),
/* harmony export */   proxyToRaw: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_4__.proxyToRaw),
/* harmony export */   queryParams: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.queryParams),
/* harmony export */   registerLicense: () => (/* reexport safe */ _validate_lic__WEBPACK_IMPORTED_MODULE_23__.registerLicense),
/* harmony export */   remove: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.remove),
/* harmony export */   removeChildInstance: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_4__.removeChildInstance),
/* harmony export */   removeClass: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.removeClass),
/* harmony export */   resetBlazorTemplate: () => (/* reexport safe */ _template_engine__WEBPACK_IMPORTED_MODULE_18__.resetBlazorTemplate),
/* harmony export */   rightToLeft: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.rightToLeft),
/* harmony export */   rippleEffect: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_3__.rippleEffect),
/* harmony export */   select: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.select),
/* harmony export */   selectAll: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.selectAll),
/* harmony export */   setCulture: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.setCulture),
/* harmony export */   setCurrencyCode: () => (/* reexport safe */ _internationalization__WEBPACK_IMPORTED_MODULE_11__.setCurrencyCode),
/* harmony export */   setGlobalAnimation: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_3__.setGlobalAnimation),
/* harmony export */   setImmediate: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.setImmediate),
/* harmony export */   setProxyToRaw: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_4__.setProxyToRaw),
/* harmony export */   setStyleAttribute: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.setStyleAttribute),
/* harmony export */   setTemplateEngine: () => (/* reexport safe */ _template_engine__WEBPACK_IMPORTED_MODULE_18__.setTemplateEngine),
/* harmony export */   setValue: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.setValue),
/* harmony export */   siblings: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_20__.siblings),
/* harmony export */   throwError: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.throwError),
/* harmony export */   uniqueID: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_19__.uniqueID),
/* harmony export */   updateBlazorTemplate: () => (/* reexport safe */ _template_engine__WEBPACK_IMPORTED_MODULE_18__.updateBlazorTemplate),
/* harmony export */   validateLicense: () => (/* reexport safe */ _validate_lic__WEBPACK_IMPORTED_MODULE_23__.validateLicense),
/* harmony export */   versionBasedStatePersistence: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_6__.versionBasedStatePersistence)
/* harmony export */ });
/* harmony import */ var _intl_intl_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intl/intl-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/intl-base.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax */ "./ej2-resources/26.1.38/scripts/ej2-base/ajax.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch */ "./ej2-resources/26.1.38/scripts/ej2-base/fetch.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./ej2-resources/26.1.38/scripts/ej2-base/animation.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ "./ej2-resources/26.1.38/scripts/ej2-base/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browser */ "./ej2-resources/26.1.38/scripts/ej2-base/browser.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component */ "./ej2-resources/26.1.38/scripts/ej2-base/component.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./child-property */ "./ej2-resources/26.1.38/scripts/ej2-base/child-property.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./draggable */ "./ej2-resources/26.1.38/scripts/ej2-base/draggable.js");
/* harmony import */ var _droppable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./droppable */ "./ej2-resources/26.1.38/scripts/ej2-base/droppable.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/26.1.38/scripts/ej2-base/event-handler.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internationalization */ "./ej2-resources/26.1.38/scripts/ej2-base/internationalization.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keyboard */ "./ej2-resources/26.1.38/scripts/ej2-base/keyboard.js");
/* harmony import */ var _l10n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./l10n */ "./ej2-resources/26.1.38/scripts/ej2-base/l10n.js");
/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./module-loader */ "./ej2-resources/26.1.38/scripts/ej2-base/module-loader.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/26.1.38/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./touch */ "./ej2-resources/26.1.38/scripts/ej2-base/touch.js");
/* harmony import */ var _hijri_parser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hijri-parser */ "./ej2-resources/26.1.38/scripts/ej2-base/hijri-parser.js");
/* harmony import */ var _template_engine__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./template-engine */ "./ej2-resources/26.1.38/scripts/ej2-base/template-engine.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dom */ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./observer */ "./ej2-resources/26.1.38/scripts/ej2-base/observer.js");
/* harmony import */ var _sanitize_helper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sanitize-helper */ "./ej2-resources/26.1.38/scripts/ej2-base/sanitize-helper.js");
/* harmony import */ var _validate_lic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./validate-lic */ "./ej2-resources/26.1.38/scripts/ej2-base/validate-lic.js");
/**
 * Base modules
 */


























/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/internationalization.js":
/*!************************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/internationalization.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Internationalization: () => (/* binding */ Internationalization),
/* harmony export */   cldrData: () => (/* binding */ cldrData),
/* harmony export */   defaultCulture: () => (/* binding */ defaultCulture),
/* harmony export */   defaultCurrencyCode: () => (/* binding */ defaultCurrencyCode),
/* harmony export */   enableRtl: () => (/* binding */ enableRtl),
/* harmony export */   getDefaultDateObject: () => (/* binding */ getDefaultDateObject),
/* harmony export */   getNumberDependable: () => (/* binding */ getNumberDependable),
/* harmony export */   getNumericObject: () => (/* binding */ getNumericObject),
/* harmony export */   loadCldr: () => (/* binding */ loadCldr),
/* harmony export */   onIntlChange: () => (/* binding */ onIntlChange),
/* harmony export */   rightToLeft: () => (/* binding */ rightToLeft),
/* harmony export */   setCulture: () => (/* binding */ setCulture),
/* harmony export */   setCurrencyCode: () => (/* binding */ setCurrencyCode)
/* harmony export */ });
/* harmony import */ var _intl_date_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intl/date-formatter */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/date-formatter.js");
/* harmony import */ var _intl_number_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intl/number-formatter */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/number-formatter.js");
/* harmony import */ var _intl_date_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl/date-parser */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/date-parser.js");
/* harmony import */ var _intl_number_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intl/number-parser */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/number-parser.js");
/* harmony import */ var _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intl/intl-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/intl-base.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observer */ "./ej2-resources/26.1.38/scripts/ej2-base/observer.js");







/**
 * Specifies the observer used for external change detection.
 */
var onIntlChange = new _observer__WEBPACK_IMPORTED_MODULE_6__.Observer();
/**
 * Specifies the default rtl status for EJ2 components.
 */
var rightToLeft = false;
/**
 * Specifies the CLDR data loaded for internationalization functionalities.
 *
 * @private
 */
var cldrData = {};
/**
 * Specifies the default culture value to be considered.
 *
 * @private
 */
var defaultCulture = 'en-US';
/**
 * Specifies default currency code to be considered
 *
 * @private
 */
var defaultCurrencyCode = 'USD';
var mapper = ['numericObject', 'dateObject'];
/**
 * Internationalization class provides support to parse and format the number and date object to the desired format.
 * ```typescript
 * // To set the culture globally
 * setCulture('en-GB');
 *
 * // To set currency code globally
 * setCurrencyCode('EUR');
 *
 * //Load cldr data
 * loadCldr(gregorainData);
 * loadCldr(timeZoneData);
 * loadCldr(numbersData);
 * loadCldr(numberSystemData);
 *
 * // To use formatter in component side
 * let Intl:Internationalization = new Internationalization();
 *
 * // Date formatting
 * let dateFormatter: Function = Intl.getDateFormat({skeleton:'long',type:'dateTime'});
 * dateFormatter(new Date('11/2/2016'));
 * dateFormatter(new Date('25/2/2030'));
 * Intl.formatDate(new Date(),{skeleton:'E'});
 *
 * //Number formatting
 * let numberFormatter: Function = Intl.getNumberFormat({skeleton:'C5'})
 * numberFormatter(24563334);
 * Intl.formatNumber(123123,{skeleton:'p2'});
 *
 * // Date parser
 * let dateParser: Function = Intl.getDateParser({skeleton:'short',type:'time'});
 * dateParser('10:30 PM');
 * Intl.parseDate('10',{skeleton:'H'});
 * ```
 */
var Internationalization = /** @__PURE__ @class */ (function () {
    function Internationalization(cultureName) {
        if (cultureName) {
            this.culture = cultureName;
        }
    }
    /**
     * Returns the format function for given options.
     *
     * @param {DateFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function} ?
     */
    Internationalization.prototype.getDateFormat = function (options) {
        return _intl_date_formatter__WEBPACK_IMPORTED_MODULE_0__.DateFormat.dateFormat(this.getCulture(), options || { type: 'date', skeleton: 'short' }, cldrData);
    };
    /**
     * Returns the format function for given options.
     *
     * @param {NumberFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function} ?
     */
    Internationalization.prototype.getNumberFormat = function (options) {
        if (options && !options.currency) {
            options.currency = defaultCurrencyCode;
        }
        if ((0,_util__WEBPACK_IMPORTED_MODULE_5__.isBlazor)() && options && !options.format) {
            options.minimumFractionDigits = 0;
        }
        return _intl_number_formatter__WEBPACK_IMPORTED_MODULE_1__.NumberFormat.numberFormatter(this.getCulture(), options || {}, cldrData);
    };
    /**
     * Returns the parser function for given options.
     *
     * @param {DateFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function} ?
     */
    Internationalization.prototype.getDateParser = function (options) {
        return _intl_date_parser__WEBPACK_IMPORTED_MODULE_2__.DateParser.dateParser(this.getCulture(), options || { skeleton: 'short', type: 'date' }, cldrData);
    };
    /**
     * Returns the parser function for given options.
     *
     * @param {NumberFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function} ?
     */
    Internationalization.prototype.getNumberParser = function (options) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_5__.isBlazor)() && options && !options.format) {
            options.minimumFractionDigits = 0;
        }
        return _intl_number_parser__WEBPACK_IMPORTED_MODULE_3__.NumberParser.numberParser(this.getCulture(), options || { format: 'N' }, cldrData);
    };
    /**
     * Returns the formatted string based on format options.
     *
     * @param {number} value - Specifies the number to format.
     * @param {NumberFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string} ?
     */
    Internationalization.prototype.formatNumber = function (value, option) {
        return this.getNumberFormat(option)(value);
    };
    /**
     * Returns the formatted date string based on format options.
     *
     * @param {Date} value - Specifies the number to format.
     * @param {DateFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string} ?
     */
    Internationalization.prototype.formatDate = function (value, option) {
        return this.getDateFormat(option)(value);
    };
    /**
     * Returns the date object for given date string and options.
     *
     * @param {string} value - Specifies the string to parse.
     * @param {DateFormatOptions} option - Specifies the parse options in which the date string will be parsed.
     * @returns {Date} ?
     */
    Internationalization.prototype.parseDate = function (value, option) {
        return this.getDateParser(option)(value);
    };
    /**
     * Returns the number object from the given string value and options.
     *
     * @param {string} value - Specifies the string to parse.
     * @param {NumberFormatOptions} option - Specifies the parse options in which the  string number  will be parsed.
     * @returns {number} ?
     */
    Internationalization.prototype.parseNumber = function (value, option) {
        return this.getNumberParser(option)(value);
    };
    /**
     * Returns Native Date Time Pattern
     *
     * @param {DateFormatOptions} option - Specifies the parse options for resultant date time pattern.
     * @param {boolean} isExcelFormat - Specifies format value to be converted to excel pattern.
     * @returns {string} ?
     * @private
     */
    Internationalization.prototype.getDatePattern = function (option, isExcelFormat) {
        return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
    };
    /**
     * Returns Native Number Pattern
     *
     * @param {NumberFormatOptions} option - Specifies the parse options for resultant number pattern.
     * @param {boolean} isExcel ?
     * @returns {string} ?
     * @private
     */
    Internationalization.prototype.getNumberPattern = function (option, isExcel) {
        return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getActualNumberFormat(this.getCulture(), option, cldrData, isExcel);
    };
    /**
     * Returns the First Day of the Week
     *
     * @returns {number} ?
     */
    Internationalization.prototype.getFirstDayOfWeek = function () {
        return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getWeekData(this.getCulture(), cldrData);
    };
    /**
     * Returns the culture
     *
     * @returns {string} ?
     */
    Internationalization.prototype.getCulture = function () {
        return this.culture || defaultCulture;
    };
    return Internationalization;
}());

/**
 * Set the default culture to all EJ2 components
 *
 * @param {string} cultureName - Specifies the culture name to be set as default culture.
 * @returns {void} ?
 */
function setCulture(cultureName) {
    defaultCulture = cultureName;
    onIntlChange.notify('notifyExternalChange', { 'locale': defaultCulture });
}
/**
 * Set the default currency code to all EJ2 components
 *
 * @param {string} currencyCode Specifies the culture name to be set as default culture.
 * @returns {void} ?
 */
function setCurrencyCode(currencyCode) {
    defaultCurrencyCode = currencyCode;
    onIntlChange.notify('notifyExternalChange', { 'currencyCode': defaultCurrencyCode });
}
/**
 * Load the CLDR data into context
 *
 * @param {Object[]} data Specifies the CLDR data's to be used for formatting and parser.
 * @returns {void} ?
 */
function loadCldr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var obj = data_1[_a];
        (0,_util__WEBPACK_IMPORTED_MODULE_5__.extend)(cldrData, obj, {}, true);
    }
}
/**
 * To enable or disable RTL functionality for all components globally.
 *
 * @param {boolean} status - Optional argument Specifies the status value to enable or disable rtl option.
 * @returns {void} ?
 */
function enableRtl(status) {
    if (status === void 0) { status = true; }
    rightToLeft = status;
    onIntlChange.notify('notifyExternalChange', { enableRtl: rightToLeft });
}
/**
 * To get the numeric CLDR object for given culture
 *
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @param {string} type ?
 * @returns {Object} ?
 * @ignore
 * @private
 */
function getNumericObject(locale, type) {
    var numObject = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getDependables(cldrData, locale, '', true)[mapper[0]];
    var dateObject = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getDependables(cldrData, locale, '')[mapper[1]];
    var numSystem = (0,_util__WEBPACK_IMPORTED_MODULE_5__.getValue)('defaultNumberingSystem', numObject);
    var symbPattern = (0,_util__WEBPACK_IMPORTED_MODULE_5__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_5__.getValue)('numberSymbols', numObject) : (0,_util__WEBPACK_IMPORTED_MODULE_5__.getValue)('symbols-numberSystem-' + numSystem, numObject);
    var pattern = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getSymbolPattern(type || 'decimal', numSystem, numObject, false);
    return (0,_util__WEBPACK_IMPORTED_MODULE_5__.extend)(symbPattern, _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getFormatData(pattern, true, '', true), { 'dateSeparator': _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getDateSeparator(dateObject) });
}
/**
 * To get the numeric CLDR  number base object for given culture
 *
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @param {string} currency - Specifies the currency for which numericObject to be returned.
 * @returns {string} ?
 * @ignore
 * @private
 */
function getNumberDependable(locale, currency) {
    var numObject = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getDependables(cldrData, locale, '', true);
    return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getCurrencySymbol(numObject.numericObject, currency);
}
/**
 * To get the default date CLDR object.
 *
 * @param {string} mode ?
 * @returns {Object} ?
 * @ignore
 * @private
 */
function getDefaultDateObject(mode) {
    return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__.IntlBase.getDependables(cldrData, '', mode, false)[mapper[1]];
}


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/intl/date-formatter.js":
/*!***********************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/intl/date-formatter.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFormat: () => (/* binding */ DateFormat),
/* harmony export */   basicPatterns: () => (/* binding */ basicPatterns),
/* harmony export */   datePartMatcher: () => (/* binding */ datePartMatcher)
/* harmony export */ });
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/parser-base.js");
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intl-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/intl-base.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _hijri_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hijri-parser */ "./ej2-resources/26.1.38/scripts/ej2-base/hijri-parser.js");





var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLLL|LLL|EEEEE|EEEE|E|K|cccc|ccc|WW|W|G+|z+/gi;
var standalone = 'stand-alone';
var weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var basicPatterns = ['short', 'medium', 'long', 'full'];
var timeSetter = {
    m: 'getMinutes',
    h: 'getHours',
    H: 'getHours',
    s: 'getSeconds',
    d: 'getDate',
    f: 'getMilliseconds'
};
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era',
    'f': 'milliseconds'
};
var timeSeparator = 'timeSeparator';
/**
 * Date Format is a framework provides support for date formatting.
 *
 * @private
 */
var DateFormat = /** @__PURE__ @class */ (function () {
    function DateFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     *
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} option - Specific the format in which date  will format.
     * @param {Object} cldr - Specifies the global cldr data collection.
     * @returns {Function} ?
     */
    DateFormat.dateFormat = function (culture, option, cldr) {
        var _this = this;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.getDependables(cldr, culture, option.calendar);
        var numObject = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('parserObject.numbers', dependable);
        var dateObject = dependable.dateObject;
        var formatOptions = { isIslamic: _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.islamicRegex.test(option.calendar) };
        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() && option.isServerRendered) {
            option = _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.compareBlazorDateFormats(option, culture);
        }
        var resPattern = option.format ||
            _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type, false, (0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() ? culture : '');
        formatOptions.dateSeperator = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('dateSeperator', dateObject) : _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.getDateSeparator(dependable.dateObject);
        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(resPattern)) {
            (0,_util__WEBPACK_IMPORTED_MODULE_2__.throwError)('Format options or type given must be invalid');
        }
        else {
            resPattern = _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.ConvertDateToWeekFormat(resPattern);
            if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)()) {
                resPattern = resPattern.replace(/tt/, 'a');
            }
            formatOptions.pattern = resPattern;
            formatOptions.numMapper = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() ?
                (0,_util__WEBPACK_IMPORTED_MODULE_2__.extend)({}, numObject) : _parser_base__WEBPACK_IMPORTED_MODULE_0__.ParserBase.getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_0__.ParserBase.getNumberingSystem(cldr));
            var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
            for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
                var str = patternMatch_1[_i];
                var len = str.length;
                var char = str[0];
                if (char === 'K') {
                    char = 'h';
                }
                switch (char) {
                    case 'E':
                    case 'c':
                        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)()) {
                            formatOptions.weekday = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('days.' + _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.monthIndex["" + len], dateObject);
                        }
                        else {
                            formatOptions.weekday = dependable.dateObject["" + _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.days]["" + standalone][_intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.monthIndex["" + len]];
                        }
                        break;
                    case 'M':
                    case 'L':
                        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)()) {
                            formatOptions.month = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('months.' + _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.monthIndex["" + len], dateObject);
                        }
                        else {
                            formatOptions.month = dependable.dateObject["" + _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.month]["" + standalone][_intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.monthIndex["" + len]];
                        }
                        break;
                    case 'a':
                        formatOptions.designator = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() ?
                            (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('dayPeriods', dateObject) : (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('dayPeriods.format.wide', dateObject);
                        break;
                    case 'G': {
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        formatOptions.era = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('eras', dateObject) : (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('eras.' + eText, dependable.dateObject);
                        break;
                    }
                    case 'z':
                        formatOptions.timeZone = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('dates.timeZoneNames', dependable.parserObject);
                        break;
                }
            }
        }
        return function (value) {
            if (isNaN(value.getDate())) {
                return null;
            }
            return _this.intDateFormatter(value, formatOptions);
        };
    };
    /**
     * Returns formatted date string based on options passed.
     *
     * @param {Date} value ?
     * @param {FormatOptions} options ?
     * @returns {string} ?
     */
    DateFormat.intDateFormatter = function (value, options) {
        var pattern = options.pattern;
        var ret = '';
        var matches = pattern.match(_intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.dateParseRegex);
        var dObject = this.getCurrentDateValue(value, options.isIslamic);
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var length_1 = match.length;
            var char = match[0];
            if (char === 'K') {
                char = 'h';
            }
            var curval = void 0;
            var curvalstr = '';
            var isNumber = void 0;
            var processNumber = void 0;
            var curstr = '';
            switch (char) {
                case 'M':
                case 'L':
                    curval = dObject.month;
                    if (length_1 > 2) {
                        ret += options.month["" + curval];
                    }
                    else {
                        isNumber = true;
                    }
                    break;
                case 'E':
                case 'c':
                    ret += options.weekday["" + weekdayKey[value.getDay()]];
                    break;
                case 'H':
                case 'h':
                case 'm':
                case 's':
                case 'd':
                case 'f':
                    isNumber = true;
                    if (char === 'd') {
                        curval = dObject.date;
                    }
                    else if (char === 'f') {
                        isNumber = false;
                        processNumber = true;
                        curvalstr = value["" + timeSetter["" + char]]().toString();
                        curvalstr = curvalstr.substring(0, length_1);
                        var curlength = curvalstr.length;
                        if (length_1 !== curlength) {
                            if (length_1 > 3) {
                                continue;
                            }
                            for (var i = 0; i < length_1 - curlength; i++) {
                                curvalstr = '0' + curvalstr.toString();
                            }
                        }
                        curstr += curvalstr;
                    }
                    else {
                        curval = value["" + timeSetter["" + char]]();
                    }
                    if (char === 'h') {
                        curval = curval % 12 || 12;
                    }
                    break;
                case 'y':
                    processNumber = true;
                    curstr += dObject.year;
                    if (length_1 === 2) {
                        curstr = curstr.substr(curstr.length - 2);
                    }
                    break;
                case 'a': {
                    var desig = value.getHours() < 12 ? 'am' : 'pm';
                    ret += options.designator["" + desig];
                    break;
                }
                case 'G': {
                    var dec = value.getFullYear() < 0 ? 0 : 1;
                    var retu = options.era["" + dec];
                    if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(retu)) {
                        retu = options.era[dec ? 0 : 1];
                    }
                    ret += retu || '';
                    break;
                }
                case '\'':
                    ret += (match === '\'\'') ? '\'' : match.replace(/'/g, '');
                    break;
                case 'z': {
                    var timezone = value.getTimezoneOffset();
                    var pattern_1 = (length_1 < 4) ? '+H;-H' : options.timeZone.hourFormat;
                    pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
                    if (timezone === 0) {
                        ret += options.timeZone.gmtZeroFormat;
                    }
                    else {
                        processNumber = true;
                        curstr = this.getTimeZoneValue(timezone, pattern_1);
                    }
                    curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                    break;
                }
                case ':':
                    ret += options.numMapper.numberSymbols["" + timeSeparator];
                    break;
                case '/':
                    ret += options.dateSeperator;
                    break;
                case 'W':
                    isNumber = true;
                    curval = _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.getWeekOfYear(value);
                    break;
                default:
                    ret += match;
            }
            if (isNumber) {
                processNumber = true;
                curstr = this.checkTwodigitNumber(curval, length_1);
            }
            if (processNumber) {
                ret += _parser_base__WEBPACK_IMPORTED_MODULE_0__.ParserBase.convertValueParts(curstr, _intl_base__WEBPACK_IMPORTED_MODULE_1__.IntlBase.latnParseRegex, options.numMapper.mapper);
            }
        }
        return ret;
    };
    DateFormat.getCurrentDateValue = function (value, isIslamic) {
        if (isIslamic) {
            return _hijri_parser__WEBPACK_IMPORTED_MODULE_3__.HijriParser.getHijriDate(value);
        }
        return { year: value.getFullYear(), month: value.getMonth() + 1, date: value.getDate() };
    };
    /**
     * Returns two digit numbers for given value and length
     *
     * @param {number} val ?
     * @param {number} len ?
     * @returns {string} ?
     */
    DateFormat.checkTwodigitNumber = function (val, len) {
        var ret = val + '';
        if (len === 2 && ret.length !== 2) {
            return '0' + ret;
        }
        return ret;
    };
    /**
     * Returns the value of the Time Zone.
     *
     * @param {number} tVal ?
     * @param {string} pattern ?
     * @returns {string} ?
     * @private
     */
    DateFormat.getTimeZoneValue = function (tVal, pattern) {
        var _this = this;
        var splt = pattern.split(';');
        var curPattern = splt[tVal > 0 ? 1 : 0];
        var no = Math.abs(tVal);
        return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
            var len = str.length;
            var ishour = str.indexOf('H') !== -1;
            return _this.checkTwodigitNumber(Math.floor(ishour ? (no / 60) : (no % 60)), len);
        });
    };
    return DateFormat;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/intl/date-parser.js":
/*!********************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/intl/date-parser.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateParser: () => (/* binding */ DateParser)
/* harmony export */ });
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intl-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/intl-base.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/parser-base.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-formatter */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/date-formatter.js");
/* harmony import */ var _hijri_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hijri-parser */ "./ej2-resources/26.1.38/scripts/ej2-base/hijri-parser.js");





var standalone = 'stand-alone';
var latnRegex = /^[0-9]*$/;
var timeSetter = {
    minute: 'setMinutes',
    hour: 'setHours',
    second: 'setSeconds',
    day: 'setDate',
    month: 'setMonth',
    milliseconds: 'setMilliseconds'
};
var month = 'months';
/**
 * Date Parser.
 *
 * @private
 */
var DateParser = /** @__PURE__ @class */ (function () {
    function DateParser() {
    }
    /**
     * Returns the parser function for given skeleton.
     *
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} option - Specific the format in which string date  will be parsed.
     * @param {Object} cldr - Specifies the global cldr data collection.
     * @returns {Function} ?
     */
    DateParser.dateParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.getDependables(cldr, culture, option.calendar);
        var numOptions = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.getCurrentNumericOptions(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.getNumberingSystem(cldr), false, (0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)());
        var parseOptions = {};
        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() && option.isServerRendered) {
            option = _intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.compareBlazorDateFormats(option, culture);
        }
        var resPattern = option.format ||
            _intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.getResultantPattern(option.skeleton, dependable.dateObject, option.type, false, (0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() ? culture : '');
        var regexString = '';
        var hourOnly;
        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(resPattern)) {
            (0,_util__WEBPACK_IMPORTED_MODULE_2__.throwError)('Format options or type given must be invalid');
        }
        else {
            resPattern = _intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.ConvertDateToWeekFormat(resPattern);
            parseOptions = { isIslamic: _intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.islamicRegex.test(option.calendar), pattern: resPattern, evalposition: {}, culture: culture };
            var patternMatch = resPattern.match(_intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.dateParseRegex) || [];
            var length_1 = patternMatch.length;
            var gmtCorrection = 0;
            var zCorrectTemp = 0;
            var isgmtTraversed = false;
            var nRegx = numOptions.numericRegex;
            var numMapper = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() ? dependable.parserObject.numbers
                : _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.getNumberingSystem(cldr));
            for (var i = 0; i < length_1; i++) {
                var str = patternMatch[parseInt(i.toString(), 10)];
                var len = str.length;
                var char = (str[0] === 'K') ? 'h' : str[0];
                var isNumber = void 0;
                var canUpdate = void 0;
                var charKey = _date_formatter__WEBPACK_IMPORTED_MODULE_3__.datePartMatcher["" + char];
                var optional = (len === 2) ? '' : '?';
                if (isgmtTraversed) {
                    gmtCorrection = zCorrectTemp;
                    isgmtTraversed = false;
                }
                switch (char) {
                    case 'E':
                    case 'c': {
                        var weekData = void 0;
                        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)()) {
                            weekData = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('days.' + _intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.monthIndex["" + len], dependable.dateObject);
                        }
                        else {
                            weekData = dependable.dateObject["" + _intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.days]["" + standalone][_intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.monthIndex["" + len]];
                        }
                        var weekObject = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.reverseObject(weekData);
                        regexString += '(' + Object.keys(weekObject).join('|') + ')';
                        break;
                    }
                    case 'M':
                    case 'L':
                    case 'd':
                    case 'm':
                    case 's':
                    case 'h':
                    case 'H':
                    case 'f':
                        canUpdate = true;
                        if ((char === 'M' || char === 'L') && len > 2) {
                            var monthData = void 0;
                            if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)()) {
                                monthData = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('months.' + _intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.monthIndex["" + len], dependable.dateObject);
                            }
                            else {
                                monthData = dependable.dateObject["" + month]["" + standalone][_intl_base__WEBPACK_IMPORTED_MODULE_0__.IntlBase.monthIndex["" + len]];
                            }
                            parseOptions["" + charKey] = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.reverseObject(monthData);
                            regexString += '(' + Object.keys(parseOptions["" + charKey]).join('|') + ')';
                        }
                        else if (char === 'f') {
                            if (len > 3) {
                                continue;
                            }
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + '?' + nRegx + '?' + ')';
                        }
                        else {
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + optional + ')';
                        }
                        if (char === 'h') {
                            parseOptions.hour12 = true;
                        }
                        break;
                    case 'W': {
                        var opt = len === 1 ? '?' : '';
                        regexString += '(' + nRegx + opt + nRegx + ')';
                        break;
                    }
                    case 'y':
                        canUpdate = isNumber = true;
                        if (len === 2) {
                            regexString += '(' + nRegx + nRegx + ')';
                        }
                        else {
                            regexString += '(' + nRegx + '{' + len + ',})';
                        }
                        break;
                    case 'a': {
                        canUpdate = true;
                        var periodValur = (0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() ?
                            (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('dayPeriods', dependable.dateObject) :
                            (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('dayPeriods.format.wide', dependable.dateObject);
                        parseOptions["" + charKey] = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.reverseObject(periodValur);
                        regexString += '(' + Object.keys(parseOptions["" + charKey]).join('|') + ')';
                        break;
                    }
                    case 'G': {
                        canUpdate = true;
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        parseOptions["" + charKey] = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.reverseObject((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() ?
                            (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('eras', dependable.dateObject) : (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('eras.' + eText, dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions["" + charKey]).join('|') + '?)';
                        break;
                    }
                    case 'z': {
                        var tval = new Date().getTimezoneOffset();
                        canUpdate = (tval !== 0);
                        parseOptions["" + charKey] = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getValue)('dates.timeZoneNames', dependable.parserObject);
                        var tzone = parseOptions["" + charKey];
                        hourOnly = (len < 4);
                        var hpattern = hourOnly ? '+H;-H' : tzone.hourFormat;
                        hpattern = hpattern.replace(/:/g, numMapper.timeSeparator);
                        regexString += '(' + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ')?';
                        isgmtTraversed = true;
                        zCorrectTemp = hourOnly ? 6 : 12;
                        break;
                    }
                    case '\'': {
                        var iString = str.replace(/'/g, '');
                        regexString += '(' + iString + ')?';
                        break;
                    }
                    default:
                        regexString += '([\\D])';
                        break;
                }
                if (canUpdate) {
                    parseOptions.evalposition["" + charKey] = { isNumber: isNumber, pos: i + 1 + gmtCorrection, hourOnly: hourOnly };
                }
                if (i === length_1 - 1 && !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(regexString)) {
                    var regExp = RegExp;
                    parseOptions.parserRegex = new regExp('^' + regexString + '$', 'i');
                }
            }
        }
        return function (value) {
            var parsedDateParts = _this.internalDateParse(value, parseOptions, numOptions);
            if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(parsedDateParts) || !Object.keys(parsedDateParts).length) {
                return null;
            }
            if (parseOptions.isIslamic) {
                var dobj = {};
                var tYear = parsedDateParts.year;
                var tDate = parsedDateParts.day;
                var tMonth = parsedDateParts.month;
                var ystrig = tYear ? (tYear + '') : '';
                var is2DigitYear = (ystrig.length === 2);
                if (!tYear || !tMonth || !tDate || is2DigitYear) {
                    dobj = _hijri_parser__WEBPACK_IMPORTED_MODULE_4__.HijriParser.getHijriDate(new Date());
                }
                if (is2DigitYear) {
                    tYear = parseInt((dobj.year + '').slice(0, 2) + ystrig, 10);
                }
                var dateObject = _hijri_parser__WEBPACK_IMPORTED_MODULE_4__.HijriParser.toGregorian(tYear || dobj.year, tMonth || dobj.month, tDate || dobj.date);
                parsedDateParts.year = dateObject.getFullYear();
                parsedDateParts.month = dateObject.getMonth() + 1;
                parsedDateParts.day = dateObject.getDate();
            }
            return _this.getDateObject(parsedDateParts);
        };
    };
    /**
     * Returns date object for provided date options
     *
     * @param {DateParts} options ?
     * @param {Date} value ?
     * @returns {Date} ?
     */
    DateParser.getDateObject = function (options, value) {
        var res = value || new Date();
        res.setMilliseconds(0);
        var tKeys = ['hour', 'minute', 'second', 'milliseconds', 'month', 'day'];
        var y = options.year;
        var desig = options.designator;
        var tzone = options.timeZone;
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(y)) {
            var len = (y + '').length;
            if (len <= 2) {
                var century = Math.floor(res.getFullYear() / 100) * 100;
                y += century;
            }
            res.setFullYear(y);
        }
        for (var _i = 0, tKeys_1 = tKeys; _i < tKeys_1.length; _i++) {
            var key = tKeys_1[_i];
            var tValue = options["" + key];
            if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(tValue) && key === 'day') {
                res.setDate(1);
            }
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(tValue)) {
                if (key === 'month') {
                    tValue -= 1;
                    if (tValue < 0 || tValue > 11) {
                        return new Date('invalid');
                    }
                    var pDate = res.getDate();
                    res.setDate(1);
                    res[timeSetter["" + key]](tValue);
                    var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
                    res.setDate(pDate < lDate ? pDate : lDate);
                }
                else {
                    if (key === 'day') {
                        var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
                        if ((tValue < 1 || tValue > lastDay)) {
                            return null;
                        }
                    }
                    res["" + timeSetter["" + key]](tValue);
                }
            }
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(desig)) {
            var hour = res.getHours();
            if (desig === 'pm') {
                res.setHours(hour + (hour === 12 ? 0 : 12));
            }
            else if (hour === 12) {
                res.setHours(0);
            }
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(tzone)) {
            var tzValue = tzone - res.getTimezoneOffset();
            if (tzValue !== 0) {
                res.setMinutes(res.getMinutes() + tzValue);
            }
        }
        return res;
    };
    /**
     * Returns date parsing options for provided value along with parse and numeric options
     *
     * @param {string} value ?
     * @param {ParseOptions} parseOptions ?
     * @param {NumericOptions} num ?
     * @returns {DateParts} ?
     */
    DateParser.internalDateParse = function (value, parseOptions, num) {
        var matches = value.match(parseOptions.parserRegex);
        var retOptions = { 'hour': 0, 'minute': 0, 'second': 0 };
        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(matches)) {
            return null;
        }
        else {
            var props = Object.keys(parseOptions.evalposition);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                var curObject = parseOptions.evalposition["" + prop];
                var matchString = matches[curObject.pos];
                if (curObject.isNumber) {
                    retOptions["" + prop] = this.internalNumberParser(matchString, num);
                }
                else {
                    if (prop === 'timeZone' && !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(matchString)) {
                        var pos = curObject.pos;
                        var val = void 0;
                        var tmatch = matches[pos + 1];
                        var flag = !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(tmatch);
                        if (curObject.hourOnly) {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 4], num) * 60;
                        }
                        else {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 7], num) * 60;
                            val += this.getZoneValue(flag, matches[pos + 4], matches[pos + 10], num);
                        }
                        if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(val)) {
                            retOptions["" + prop] = val;
                        }
                    }
                    else {
                        var cultureOptions = ['en-US', 'en-MH', 'en-MP'];
                        matchString = ((prop === 'month') && (!parseOptions.isIslamic) && (parseOptions.culture === 'en' || parseOptions.culture === 'en-GB' || parseOptions.culture === 'en-US'))
                            ? matchString[0].toUpperCase() + matchString.substring(1).toLowerCase() : matchString;
                        matchString = ((prop !== 'month') && (prop === 'designator') && parseOptions.culture && parseOptions.culture.indexOf('en-') !== -1 && cultureOptions.indexOf(parseOptions.culture) === -1)
                            ? matchString.toLowerCase() : matchString;
                        retOptions["" + prop] = parseOptions["" + prop]["" + matchString];
                    }
                }
            }
            if (parseOptions.hour12) {
                retOptions.hour12 = true;
            }
        }
        return retOptions;
    };
    /**
     * Returns parsed number for provided Numeric string and Numeric Options
     *
     * @param {string} value ?
     * @param {NumericOptions} option ?
     * @returns {number} ?
     */
    DateParser.internalNumberParser = function (value, option) {
        value = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.convertValueParts(value, option.numberParseRegex, option.numericPair);
        if (latnRegex.test(value)) {
            return +value;
        }
        return null;
    };
    /**
     * Returns parsed time zone RegExp for provided hour format and time zone
     *
     * @param {string} hourFormat ?
     * @param {base.TimeZoneOptions} tZone ?
     * @param {string} nRegex ?
     * @returns {string} ?
     */
    DateParser.parseTimeZoneRegx = function (hourFormat, tZone, nRegex) {
        var pattern = tZone.gmtFormat;
        var ret;
        var cRegex = '(' + nRegex + ')' + '(' + nRegex + ')';
        ret = hourFormat.replace('+', '\\+');
        if (hourFormat.indexOf('HH') !== -1) {
            ret = ret.replace(/HH|mm/g, '(' + cRegex + ')');
        }
        else {
            ret = ret.replace(/H|m/g, '(' + cRegex + '?)');
        }
        var splitStr = (ret.split(';').map(function (str) {
            return pattern.replace('{0}', str);
        }));
        ret = splitStr.join('|') + '|' + tZone.gmtZeroFormat;
        return ret;
    };
    /**
     * Returns zone based value.
     *
     * @param {boolean} flag ?
     * @param {string} val1 ?
     * @param {string} val2 ?
     * @param {NumericOptions} num ?
     * @returns {number} ?
     */
    DateParser.getZoneValue = function (flag, val1, val2, num) {
        var ival = flag ? val1 : val2;
        if (!ival) {
            return 0;
        }
        var value = this.internalNumberParser(ival, num);
        if (flag) {
            return -value;
        }
        return value;
    };
    return DateParser;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/intl/intl-base.js":
/*!******************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/intl/intl-base.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntlBase: () => (/* binding */ IntlBase),
/* harmony export */   blazorCultureFormats: () => (/* binding */ blazorCultureFormats)
/* harmony export */ });
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internationalization */ "./ej2-resources/26.1.38/scripts/ej2-base/internationalization.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/parser-base.js");
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-formatter */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/date-formatter.js");
/* harmony import */ var _number_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-formatter */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/number-formatter.js");
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */






var regExp = RegExp;
var blazorCultureFormats = {
    'en-US': {
        'd': 'M/d/y',
        'D': 'EEEE, MMMM d, y',
        'f': 'EEEE, MMMM d, y h:mm a',
        'F': 'EEEE, MMMM d, y h:mm:s a',
        'g': 'M/d/y h:mm a',
        'G': 'M/d/yyyy h:mm:ss tt',
        'm': 'MMMM d',
        'M': 'MMMM d',
        'r': 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
        'R': 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
        's': 'yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss',
        't': 'h:mm tt',
        'T': 'h:m:s tt',
        'u': 'yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'',
        'U': 'dddd, MMMM d, yyyy h:mm:ss tt',
        'y': 'MMMM yyyy',
        'Y': 'MMMM yyyy'
    }
};
/**
 * Date base common constants and function for date parser and formatter.
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var IntlBase;
(function (IntlBase) {
    // eslint-disable-next-line security/detect-unsafe-regex
    IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    // eslint-disable-next-line security/detect-unsafe-regex
    IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*[0# ]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
    var fractionRegex = /[0-9]/g;
    IntlBase.defaultCurrency = '$';
    var mapper = ['infinity', 'nan', 'group', 'decimal'];
    var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
    var patternMatch = {
        'G': '',
        'M': 'm',
        'L': 'm',
        'H': 'h',
        'c': 'd',
        '\'': '"',
        ' a': ' AM/PM',
        'yy': 'yy',
        'y': 'yyyy',
        'EEEE': 'dddd',
        'E': 'ddd'
    };
    IntlBase.dateConverterMapper = /dddd|ddd/ig;
    var defaultFirstDay = 'sun';
    IntlBase.islamicRegex = /^islamic/;
    var firstDayMapper = {
        'sun': 0,
        'mon': 1,
        'tue': 2,
        'wed': 3,
        'thu': 4,
        'fri': 5,
        'sat': 6
    };
    IntlBase.formatRegex = new regExp('(^[ncpae]{1})([0-1]?[0-9]|20)?$', 'i');
    IntlBase.currencyFormatRegex = new regExp('(^[ca]{1})([0-1]?[0-9]|20)?$', 'i');
    IntlBase.curWithoutNumberRegex = /(c|a)$/ig;
    var typeMapper = {
        '$': 'isCurrency',
        '%': 'isPercent',
        '-': 'isNegative',
        0: 'nlead',
        1: 'nend'
    };
    IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
    IntlBase.basicPatterns = ['short', 'medium', 'long', 'full'];
    IntlBase.defaultObject = {
        'dates': {
            'calendars': {
                'gregorian': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep',
                                '10': 'Oct',
                                '11': 'Nov',
                                '12': 'Dec'
                            },
                            'narrow': {
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S',
                                '10': 'O',
                                '11': 'N',
                                '12': 'D'
                            },
                            'wide': {
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September',
                                '10': 'October',
                                '11': 'November',
                                '12': 'December'
                            }
                        }
                    },
                    'days': {
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Sun',
                                'mon': 'Mon',
                                'tue': 'Tue',
                                'wed': 'Wed',
                                'thu': 'Thu',
                                'fri': 'Fri',
                                'sat': 'Sat'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'W',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Su',
                                'mon': 'Mo',
                                'tue': 'Tu',
                                'wed': 'We',
                                'thu': 'Th',
                                'fri': 'Fr',
                                'sat': 'Sa'
                            },
                            'wide': {
                                'sun': 'Sunday',
                                'mon': 'Monday',
                                'tue': 'Tuesday',
                                'wed': 'Wednesday',
                                'thu': 'Thursday',
                                'fri': 'Friday',
                                'sat': 'Saturday'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Before Christ',
                            '0-alt-variant': 'Before Common Era',
                            '1': 'Anno Domini',
                            '1-alt-variant': 'Common Era'
                        },
                        'eraAbbr': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'B',
                            '0-alt-variant': 'BCE',
                            '1': 'A',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y',
                        'long': 'MMMM d, y',
                        'medium': 'MMM d, y',
                        'short': 'M/d/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \'at\' {0}',
                        'long': '{1} \'at\' {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'hmsv': 'h:mm:ss a v',
                            'Hmsv': 'HH:mm:ss v',
                            'hmv': 'h:mm a v',
                            'Hmv': 'HH:mm v',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'M/d/y',
                            'yMEd': 'E, M/d/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'MMM d, y',
                            'yMMMEd': 'E, MMM d, y',
                            'yMMMM': 'MMMM y'
                        }
                    }
                },
                'islamic': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Muh.',
                                '2': 'Saf.',
                                '3': 'Rab. I',
                                '4': 'Rab. II',
                                '5': 'Jum. I',
                                '6': 'Jum. II',
                                '7': 'Raj.',
                                '8': 'Sha.',
                                '9': 'Ram.',
                                '10': 'Shaw.',
                                '11': 'Dhuʻl-Q.',
                                '12': 'Dhuʻl-H.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4',
                                '5': '5',
                                '6': '6',
                                '7': '7',
                                '8': '8',
                                '9': '9',
                                '10': '10',
                                '11': '11',
                                '12': '12'
                            },
                            'wide': {
                                '1': 'Muharram',
                                '2': 'Safar',
                                '3': 'Rabiʻ I',
                                '4': 'Rabiʻ II',
                                '5': 'Jumada I',
                                '6': 'Jumada II',
                                '7': 'Rajab',
                                '8': 'Shaʻban',
                                '9': 'Ramadan',
                                '10': 'Shawwal',
                                '11': 'Dhuʻl-Qiʻdah',
                                '12': 'Dhuʻl-Hijjah'
                            }
                        }
                    },
                    'days': {
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'Sun',
                                'mon': 'Mon',
                                'tue': 'Tue',
                                'wed': 'Wed',
                                'thu': 'Thu',
                                'fri': 'Fri',
                                'sat': 'Sat'
                            },
                            'narrow': {
                                'sun': 'S',
                                'mon': 'M',
                                'tue': 'T',
                                'wed': 'W',
                                'thu': 'T',
                                'fri': 'F',
                                'sat': 'S'
                            },
                            'short': {
                                'sun': 'Su',
                                'mon': 'Mo',
                                'tue': 'Tu',
                                'wed': 'We',
                                'thu': 'Th',
                                'fri': 'Fr',
                                'sat': 'Sa'
                            },
                            'wide': {
                                'sun': 'Sunday',
                                'mon': 'Monday',
                                'tue': 'Tuesday',
                                'wed': 'Wednesday',
                                'thu': 'Thursday',
                                'fri': 'Friday',
                                'sat': 'Saturday'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'AH'
                        },
                        'eraAbbr': {
                            '0': 'AH'
                        },
                        'eraNarrow': {
                            '0': 'AH'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y G',
                        'long': 'MMMM d, y G',
                        'medium': 'MMM d, y G',
                        'short': 'M/d/y GGGGG'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} \'at\' {0}',
                        'long': '{1} \'at\' {0}',
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y G',
                            'yyyy': 'y G',
                            'yyyyM': 'M/y GGGGG',
                            'yyyyMd': 'M/d/y GGGGG',
                            'yyyyMEd': 'E, M/d/y GGGGG',
                            'yyyyMMM': 'MMM y G',
                            'yyyyMMMd': 'MMM d, y G',
                            'yyyyMMMEd': 'E, MMM d, y G',
                            'yyyyMMMM': 'MMMM y G',
                            'yyyyQQQ': 'QQQ y G',
                            'yyyyQQQQ': 'QQQQ y G'
                        }
                    }
                }
            },
            'timeZoneNames': {
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT'
            }
        },
        'numbers': {
            'currencies': {
                'USD': {
                    'displayName': 'US Dollar',
                    'symbol': '$',
                    'symbol-alt-narrow': '$'
                },
                'EUR': {
                    'displayName': 'Euro',
                    'symbol': '€',
                    'symbol-alt-narrow': '€'
                },
                'GBP': {
                    'displayName': 'British Pound',
                    'symbol-alt-narrow': '£'
                }
            },
            'defaultNumberingSystem': 'latn',
            'minimumGroupingDigits': '1',
            'symbols-numberSystem-latn': {
                'decimal': '.',
                'group': ',',
                'list': ';',
                'percentSign': '%',
                'plusSign': '+',
                'minusSign': '-',
                'exponential': 'E',
                'superscriptingExponent': '×',
                'perMille': '‰',
                'infinity': '∞',
                'nan': 'NaN',
                'timeSeparator': ':'
            },
            'decimalFormats-numberSystem-latn': {
                'standard': '#,##0.###'
            },
            'percentFormats-numberSystem-latn': {
                'standard': '#,##0%'
            },
            'currencyFormats-numberSystem-latn': {
                'standard': '¤#,##0.00',
                'accounting': '¤#,##0.00;(¤#,##0.00)'
            },
            'scientificFormats-numberSystem-latn': {
                'standard': '#E0'
            }
        }
    };
    IntlBase.blazorDefaultObject = {
        'numbers': {
            'mapper': {
                '0': '0',
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
                '7': '7',
                '8': '8',
                '9': '9'
            },
            'mapperDigits': '0123456789',
            'numberSymbols': {
                'decimal': '.',
                'group': ',',
                'plusSign': '+',
                'minusSign': '-',
                'percentSign': '%',
                'nan': 'NaN',
                'timeSeparator': ':',
                'infinity': '∞'
            },
            'timeSeparator': ':',
            'currencySymbol': '$',
            'currencypData': {
                'nlead': '$',
                'nend': '',
                'groupSeparator': ',',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'percentpData': {
                'nlead': '',
                'nend': '%',
                'groupSeparator': ',',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'percentnData': {
                'nlead': '-',
                'nend': '%',
                'groupSeparator': ',',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'currencynData': {
                'nlead': '($',
                'nend': ')',
                'groupSeparator': ',',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'decimalnData': {
                'nlead': '-',
                'nend': '',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            },
            'decimalpData': {
                'nlead': '',
                'nend': '',
                'groupData': {
                    'primary': 3
                },
                'maximumFraction': 2,
                'minimumFraction': 2
            }
        },
        'dates': {
            'dayPeriods': {
                'am': 'AM',
                'pm': 'PM'
            },
            'dateSeperator': '/',
            'days': {
                'abbreviated': {
                    'sun': 'Sun',
                    'mon': 'Mon',
                    'tue': 'Tue',
                    'wed': 'Wed',
                    'thu': 'Thu',
                    'fri': 'Fri',
                    'sat': 'Sat'
                },
                'short': {
                    'sun': 'Su',
                    'mon': 'Mo',
                    'tue': 'Tu',
                    'wed': 'We',
                    'thu': 'Th',
                    'fri': 'Fr',
                    'sat': 'Sa'
                },
                'wide': {
                    'sun': 'Sunday',
                    'mon': 'Monday',
                    'tue': 'Tuesday',
                    'wed': 'Wednesday',
                    'thu': 'Thursday',
                    'fri': 'Friday',
                    'sat': 'Saturday'
                }
            },
            'months': {
                'abbreviated': {
                    '1': 'Jan',
                    '2': 'Feb',
                    '3': 'Mar',
                    '4': 'Apr',
                    '5': 'May',
                    '6': 'Jun',
                    '7': 'Jul',
                    '8': 'Aug',
                    '9': 'Sep',
                    '10': 'Oct',
                    '11': 'Nov',
                    '12': 'Dec'
                },
                'wide': {
                    '1': 'January',
                    '2': 'February',
                    '3': 'March',
                    '4': 'April',
                    '5': 'May',
                    '6': 'June',
                    '7': 'July',
                    '8': 'August',
                    '9': 'September',
                    '10': 'October',
                    '11': 'November',
                    '12': 'December'
                }
            },
            'eras': {
                '1': 'AD'
            }
        }
    };
    IntlBase.monthIndex = {
        3: 'abbreviated',
        4: 'wide',
        5: 'narrow',
        1: 'abbreviated'
    };
    /**
     *
     */
    IntlBase.month = 'months';
    IntlBase.days = 'days';
    /**
     * Default numerber Object
     */
    IntlBase.patternMatcher = {
        C: 'currency',
        P: 'percent',
        N: 'decimal',
        A: 'currency',
        E: 'scientific'
    };
    /**
     * Returns the resultant pattern based on the skeleton, dateObject and the type provided
     *
     * @private
     * @param {string} skeleton ?
     * @param {Object} dateObject ?
     * @param {string} type ?
     * @param {boolean} isIslamic ?
     * @param {string} blazorCulture ?
     * @returns {string} ?
     */
    function getResultantPattern(skeleton, dateObject, type, isIslamic, blazorCulture) {
        var resPattern;
        var iType = type || 'date';
        if (blazorCulture) {
            resPattern = compareBlazorDateFormats({ skeleton: skeleton }, blazorCulture).format ||
                compareBlazorDateFormats({ skeleton: 'd' }, 'en-US').format;
        }
        else {
            if (IntlBase.basicPatterns.indexOf(skeleton) !== -1) {
                resPattern = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(iType + 'Formats.' + skeleton, dateObject);
                if (iType === 'dateTime') {
                    var dPattern = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('dateFormats.' + skeleton, dateObject);
                    var tPattern = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('timeFormats.' + skeleton, dateObject);
                    resPattern = resPattern.replace('{1}', dPattern).replace('{0}', tPattern);
                }
            }
            else {
                resPattern = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('dateTimeFormats.availableFormats.' + skeleton, dateObject);
            }
            if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(resPattern) && skeleton === 'yMd') {
                resPattern = 'M/d/y';
            }
        }
        return resPattern;
    }
    IntlBase.getResultantPattern = getResultantPattern;
    /**
     * Returns the dependable object for provided cldr data and culture
     *
     * @private
     * @param {Object} cldr ?
     * @param {string} culture ?
     * @param {string} mode ?
     * @param {boolean} isNumber ?
     * @returns {any} ?
     */
    function getDependables(cldr, culture, mode, isNumber) {
        var ret = {};
        var calendartype = mode || 'gregorian';
        ret.parserObject = _parser_base__WEBPACK_IMPORTED_MODULE_2__.ParserBase.getMainObject(cldr, culture) || ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)() ? IntlBase.blazorDefaultObject : IntlBase.defaultObject);
        if (isNumber) {
            ret.numericObject = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('numbers', ret.parserObject);
        }
        else {
            var dateString = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)() ? 'dates' : ('dates.calendars.' + calendartype);
            ret.dateObject = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(dateString, ret.parserObject);
        }
        return ret;
    }
    IntlBase.getDependables = getDependables;
    /**
     * Returns the symbol pattern for provided parameters
     *
     * @private
     * @param {string} type ?
     * @param {string} numSystem ?
     * @param {Object} obj ?
     * @param {boolean} isAccount ?
     * @returns {string} ?
     */
    function getSymbolPattern(type, numSystem, obj, isAccount) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(type + 'Formats-numberSystem-' +
            numSystem + (isAccount ? '.accounting' : '.standard'), obj) || (isAccount ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(type + 'Formats-numberSystem-' +
            numSystem + '.standard', obj) : '');
    }
    IntlBase.getSymbolPattern = getSymbolPattern;
    /**
     *
     * @param {string} format ?
     * @returns {string} ?
     */
    function ConvertDateToWeekFormat(format) {
        var convertMapper = format.match(IntlBase.dateConverterMapper);
        if (convertMapper && (0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)()) {
            var tempString = convertMapper[0].length === 3 ? 'EEE' : 'EEEE';
            return format.replace(IntlBase.dateConverterMapper, tempString);
        }
        return format;
    }
    IntlBase.ConvertDateToWeekFormat = ConvertDateToWeekFormat;
    /**
     *
     * @param {DateFormatOptions} formatOptions ?
     * @param {string} culture ?
     * @returns {DateFormatOptions} ?
     */
    function compareBlazorDateFormats(formatOptions, culture) {
        var format = formatOptions.format || formatOptions.skeleton;
        var curFormatMapper = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)((culture || 'en-US') + '.' + format, blazorCultureFormats);
        if (!curFormatMapper) {
            curFormatMapper = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('en-US.' + format, blazorCultureFormats);
        }
        if (curFormatMapper) {
            curFormatMapper = ConvertDateToWeekFormat(curFormatMapper);
            formatOptions.format = curFormatMapper.replace(/tt/, 'a');
        }
        return formatOptions;
    }
    IntlBase.compareBlazorDateFormats = compareBlazorDateFormats;
    /**
     * Returns proper numeric skeleton
     *
     * @private
     * @param {string} skeleton ?
     * @returns {any} ?
     */
    function getProperNumericSkeleton(skeleton) {
        var matches = skeleton.match(IntlBase.formatRegex);
        var ret = {};
        var pattern = matches[1].toUpperCase();
        ret.isAccount = (pattern === 'A');
        ret.type = IntlBase.patternMatcher["" + pattern];
        if (skeleton.length > 1) {
            ret.fractionDigits = parseInt(matches[2], 10);
        }
        return ret;
    }
    IntlBase.getProperNumericSkeleton = getProperNumericSkeleton;
    /**
     * Returns format data for number formatting like minimum fraction, maximum fraction, etc..,
     *
     * @private
     * @param {string} pattern ?
     * @param {boolean} needFraction ?
     * @param {string} cSymbol ?
     * @param {boolean} fractionOnly ?
     * @returns {any} ?
     */
    function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
        var nData = fractionOnly ? {} : { nlead: '', nend: '' };
        var match = pattern.match(IntlBase.customRegex);
        if (match) {
            if (!fractionOnly) {
                nData.nlead = changeCurrencySymbol(match[1], cSymbol);
                nData.nend = changeCurrencySymbol(match[10], cSymbol);
                nData.groupPattern = match[4];
            }
            var fraction = match[7];
            if (fraction && needFraction) {
                var fmatch = fraction.match(fractionRegex);
                if (!(0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(fmatch)) {
                    nData.minimumFraction = fmatch.length;
                }
                else {
                    nData.minimumFraction = 0;
                }
                nData.maximumFraction = fraction.length - 1;
            }
        }
        return nData;
    }
    IntlBase.getFormatData = getFormatData;
    /**
     * Changes currency symbol
     *
     * @private
     * @param {string} val ?
     * @param {string} sym ?
     * @returns {string} ?
     */
    function changeCurrencySymbol(val, sym) {
        if (val) {
            val = val.replace(IntlBase.defaultCurrency, sym);
            return (sym === '') ? val.trim() : val;
        }
        return '';
    }
    IntlBase.changeCurrencySymbol = changeCurrencySymbol;
    /**
     * Returns currency symbol based on currency code ?
     *
     * @private
     * @param {Object} numericObject ?
     * @param {string} currencyCode ?
     * @param {string} altSymbol ?
     * @returns {string} ?
     */
    function getCurrencySymbol(numericObject, currencyCode, altSymbol) {
        var symbol = altSymbol ? ('.' + altSymbol) : '.symbol';
        var getCurrency = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('currencies.' + currencyCode + symbol, numericObject) ||
            (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('currencies.' + currencyCode + '.symbol-alt-narrow', numericObject) || '$';
        return getCurrency;
    }
    IntlBase.getCurrencySymbol = getCurrencySymbol;
    /**
     * Returns formatting options for custom number format
     *
     * @private
     * @param {string} format ?
     * @param {CommonOptions} dOptions ?
     * @param {any} obj ?
     * @returns {any} ?
     */
    function customFormat(format, dOptions, obj) {
        var options = {};
        var formatSplit = format.split(';');
        var data = ['pData', 'nData', 'zeroData'];
        for (var i = 0; i < formatSplit.length; i++) {
            options["" + data[parseInt(i.toString(), 10)]] = customNumberFormat(formatSplit[parseInt(i.toString(), 10)], dOptions, obj);
        }
        if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(options.nData)) {
            options.nData = (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)({}, options.pData);
            options.nData.nlead = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(dOptions) ? '-' + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
        }
        return options;
    }
    IntlBase.customFormat = customFormat;
    /**
     * Returns custom formatting options
     *
     * @private
     * @param {string} format ?
     * @param {CommonOptions} dOptions ?
     * @param {Object} numObject ?
     * @returns {any} ?
     */
    function customNumberFormat(format, dOptions, numObject) {
        var cOptions = { type: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        var pattern = format.match(IntlBase.customRegex);
        if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(pattern) || (pattern[5] === '' && format !== 'N/A')) {
            cOptions.type = undefined;
            return cOptions;
        }
        cOptions.nlead = pattern[1];
        cOptions.nend = pattern[10];
        var integerPart = pattern[6];
        var spaceCapture = integerPart.match(/ $/g) ? true : false;
        var spaceGrouping = integerPart.replace(/ $/g, '').indexOf(' ') !== -1;
        cOptions.useGrouping = integerPart.indexOf(',') !== -1 || spaceGrouping;
        integerPart = integerPart.replace(/,/g, '');
        var fractionPart = pattern[7];
        if (integerPart.indexOf('0') !== -1) {
            cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf('0');
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(fractionPart)) {
            cOptions.minimumFractionDigits = fractionPart.lastIndexOf('0');
            cOptions.maximumFractionDigits = fractionPart.lastIndexOf('#');
            if (cOptions.minimumFractionDigits === -1) {
                cOptions.minimumFractionDigits = 0;
            }
            if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
                cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
            }
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(dOptions)) {
            dOptions.isCustomFormat = true;
            (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '$', dOptions.currencySymbol));
            if (!cOptions.isCurrency) {
                (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', dOptions.percentSymbol));
            }
        }
        else {
            (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', '%'));
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(numObject)) {
            var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
            if (cOptions.useGrouping) {
                cOptions.groupSeparator = spaceGrouping ? ' ' : dOptions.numberMapper.numberSymbols[mapper[2]];
                cOptions.groupData = _number_formatter__WEBPACK_IMPORTED_MODULE_4__.NumberFormat.getGroupingDetails(symbolPattern.split(';')[0]);
            }
            cOptions.nlead = cOptions.nlead.replace(/'/g, '');
            cOptions.nend = spaceCapture ? ' ' + cOptions.nend.replace(/'/g, '') : cOptions.nend.replace(/'/g, '');
        }
        return cOptions;
    }
    IntlBase.customNumberFormat = customNumberFormat;
    /**
     * Returns formatting options for currency or percent type
     *
     * @private
     * @param {string[]} parts ?
     * @param {string} actual ?
     * @param {string} symbol ?
     * @returns {any} ?
     */
    function isCurrencyPercent(parts, actual, symbol) {
        var options = { nlead: parts[0], nend: parts[1] };
        for (var i = 0; i < 2; i++) {
            var part = parts[parseInt(i.toString(), 10)];
            var loc = part.indexOf(actual);
            if ((loc !== -1) && ((loc < part.indexOf('\'')) || (loc > part.lastIndexOf('\'')))) {
                options["" + typeMapper[parseInt(i.toString(), 10)]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
                options["" + typeMapper["" + actual]] = true;
                options.type = options.isCurrency ? 'currency' : 'percent';
                break;
            }
        }
        return options;
    }
    IntlBase.isCurrencyPercent = isCurrencyPercent;
    /**
     * Returns culture based date separator
     *
     * @private
     * @param {Object} dateObj ?
     * @returns {string} ?
     */
    function getDateSeparator(dateObj) {
        var value = ((0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('dateFormats.short', dateObj) || '').match(/[dM]([^dM])[dM]/i);
        return value ? value[1] : '/';
    }
    IntlBase.getDateSeparator = getDateSeparator;
    /**
     * Returns Native Date Time pattern
     *
     * @private
     * @param {string} culture ?
     * @param {DateFormatOptions} options ?
     * @param {Object} cldr ?
     * @param {boolean} isExcelFormat ?
     * @returns {string} ?
     */
    function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
        var dependable = getDependables(cldr, culture, options.calendar);
        if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)()) {
            options = compareBlazorDateFormats(options, culture);
        }
        var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
        if (isExcelFormat) {
            actualPattern = actualPattern.replace(patternRegex, function (pattern) {
                return patternMatch["" + pattern];
            });
            if (actualPattern.indexOf('z') !== -1) {
                var tLength = actualPattern.match(/z/g).length;
                var timeZonePattern = void 0;
                var options_1 = { 'timeZone': {} };
                options_1.numMapper = _parser_base__WEBPACK_IMPORTED_MODULE_2__.ParserBase.getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_2__.ParserBase.getNumberingSystem(cldr));
                options_1.timeZone = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('dates.timeZoneNames', dependable.parserObject);
                var value = new Date();
                var timezone = value.getTimezoneOffset();
                var pattern = (tLength < 4) ? '+H;-H' : options_1.timeZone.hourFormat;
                pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator);
                if (timezone === 0) {
                    timeZonePattern = options_1.timeZone.gmtZeroFormat;
                }
                else {
                    timeZonePattern = _date_formatter__WEBPACK_IMPORTED_MODULE_3__.DateFormat.getTimeZoneValue(timezone, pattern);
                    timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
                }
                actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
            }
            actualPattern = actualPattern.replace(/ $/, '');
        }
        return actualPattern;
    }
    IntlBase.getActualDateTimeFormat = getActualDateTimeFormat;
    /**
     *
     * @param {string} actual ?
     * @param {any} option ?
     * @returns {any} ?
     */
    function processSymbol(actual, option) {
        if (actual.indexOf(',') !== -1) {
            var split = actual.split(',');
            actual = (split[0] + (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('numberMapper.numberSymbols.group', option) +
                split[1].replace('.', (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('numberMapper.numberSymbols.decimal', option)));
        }
        else {
            actual = actual.replace('.', (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('numberMapper.numberSymbols.decimal', option));
        }
        return actual;
    }
    IntlBase.processSymbol = processSymbol;
    /**
     * Returns Native Number pattern
     *
     * @private
     * @param {string} culture ?
     * @param {NumberFormatOptions} options ?
     * @param {Object} cldr ?
     * @param {boolean} isExcel ?
     * @returns {string} ?
     */
    function getActualNumberFormat(culture, options, cldr, isExcel) {
        var dependable = getDependables(cldr, culture, '', true);
        var parseOptions = { custom: true };
        var numrericObject = dependable.numericObject;
        var minFrac;
        var curObj = {};
        var curMatch = (options.format || '').match(IntlBase.currencyFormatRegex);
        var type = IntlBase.formatRegex.test(options.format) ? getProperNumericSkeleton(options.format || 'N') : {};
        var dOptions = {};
        if (curMatch) {
            dOptions.numberMapper = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)() ?
                (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)({}, dependable.numericObject) :
                _parser_base__WEBPACK_IMPORTED_MODULE_2__.ParserBase.getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_2__.ParserBase.getNumberingSystem(cldr), true);
            var curCode = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('currencySymbol', dependable.numericObject) :
                getCurrencySymbol(dependable.numericObject, options.currency || _internationalization__WEBPACK_IMPORTED_MODULE_0__.defaultCurrencyCode, options.altSymbol);
            var symbolPattern = getSymbolPattern('currency', dOptions.numberMapper.numberSystem, dependable.numericObject, (/a/i).test(options.format));
            symbolPattern = symbolPattern.replace(/\u00A4/g, curCode);
            var split = symbolPattern.split(';');
            curObj.hasNegativePattern = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)() ? true : (split.length > 1);
            curObj.nData = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(type.type + 'nData', numrericObject) :
                getFormatData(split[1] || '-' + split[0], true, curCode);
            curObj.pData = (0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(type.type + 'pData', numrericObject) :
                getFormatData(split[0], false, curCode);
            if (!curMatch[2] && !options.minimumFractionDigits && !options.maximumFractionDigits) {
                minFrac = getFormatData(symbolPattern.split(';')[0], true, '', true).minimumFraction;
            }
        }
        var actualPattern;
        if ((IntlBase.formatRegex.test(options.format)) || !(options.format)) {
            (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)(parseOptions, getProperNumericSkeleton(options.format || 'N'));
            parseOptions.custom = false;
            actualPattern = '###0';
            if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
                var defaultMinimum = 0;
                if (parseOptions.fractionDigits) {
                    options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
                }
                actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits ||
                    options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
            }
            if (options.minimumIntegerDigits) {
                actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
            }
            if (options.useGrouping) {
                actualPattern = groupingPattern(actualPattern);
            }
            if (parseOptions.type === 'currency' || (parseOptions.type && (0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)())) {
                if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)() && parseOptions.type !== 'currency') {
                    curObj.pData = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(parseOptions.type + 'pData', numrericObject);
                    curObj.nData = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(parseOptions.type + 'nData', numrericObject);
                }
                var cPattern = actualPattern;
                actualPattern = curObj.pData.nlead + cPattern + curObj.pData.nend;
                if (curObj.hasNegativePattern || (0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)()) {
                    actualPattern += ';' + curObj.nData.nlead + cPattern + curObj.nData.nend;
                }
            }
            if (parseOptions.type === 'percent' && !(0,_util__WEBPACK_IMPORTED_MODULE_1__.isBlazor)()) {
                actualPattern += ' %';
            }
        }
        else {
            actualPattern = options.format.replace(/'/g, '"');
        }
        if (Object.keys(dOptions).length > 0) {
            actualPattern = !isExcel ? processSymbol(actualPattern, dOptions) : actualPattern;
        }
        return actualPattern;
    }
    IntlBase.getActualNumberFormat = getActualNumberFormat;
    /**
     *
     * @param {string} pattern ?
     * @param {number} minDigits ?
     * @param {number} maxDigits ?
     * @returns {string} ?
     */
    function fractionDigitsPattern(pattern, minDigits, maxDigits) {
        pattern += '.';
        for (var a = 0; a < minDigits; a++) {
            pattern += '0';
        }
        if (minDigits < maxDigits) {
            var diff = maxDigits - minDigits;
            for (var b = 0; b < diff; b++) {
                pattern += '#';
            }
        }
        return pattern;
    }
    IntlBase.fractionDigitsPattern = fractionDigitsPattern;
    /**
     *
     * @param {string} pattern ?
     * @param {number} digits ?
     * @returns {string} ?
     */
    function minimumIntegerPattern(pattern, digits) {
        var temp = pattern.split('.');
        var integer = '';
        for (var x = 0; x < digits; x++) {
            integer += '0';
        }
        return temp[1] ? (integer + '.' + temp[1]) : integer;
    }
    IntlBase.minimumIntegerPattern = minimumIntegerPattern;
    /**
     *
     * @param {string} pattern ?
     * @returns {string} ?
     */
    function groupingPattern(pattern) {
        var temp = pattern.split('.');
        var integer = temp[0];
        var no = 3 - integer.length % 3;
        var hash = (no && no === 1) ? '#' : (no === 2 ? '##' : '');
        integer = hash + integer;
        pattern = '';
        for (var x = integer.length - 1; x > 0; x = x - 3) {
            pattern = ',' + integer[x - 2] + integer[x - 1] + integer[parseInt(x.toString(), 10)] + pattern;
        }
        pattern = pattern.slice(1);
        return temp[1] ? (pattern + '.' + temp[1]) : pattern;
    }
    IntlBase.groupingPattern = groupingPattern;
    /**
     *
     * @param {string} culture ?
     * @param {Object} cldr ?
     * @returns {number} ?
     */
    function getWeekData(culture, cldr) {
        var firstDay = defaultFirstDay;
        var mapper = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('supplemental.weekData.firstDay', cldr);
        var iCulture = culture;
        if ((/en-/).test(iCulture)) {
            iCulture = iCulture.slice(3);
        }
        iCulture = iCulture.slice(0, 2).toUpperCase() + iCulture.substr(2);
        if (mapper) {
            firstDay = mapper["" + iCulture] || mapper[iCulture.slice(0, 2)] || defaultFirstDay;
        }
        return firstDayMapper["" + firstDay];
    }
    IntlBase.getWeekData = getWeekData;
    /**
     * @private
     * @param {any} pData ?
     * @param {string} aCurrency ?
     * @param {string} rCurrency ?
     * @returns {void} ?
     */
    function replaceBlazorCurrency(pData, aCurrency, rCurrency) {
        var iCurrency = (0,_parser_base__WEBPACK_IMPORTED_MODULE_2__.getBlazorCurrencySymbol)(rCurrency);
        if (aCurrency !== iCurrency) {
            for (var _i = 0, pData_1 = pData; _i < pData_1.length; _i++) {
                var data = pData_1[_i];
                data.nend = data.nend.replace(aCurrency, iCurrency);
                data.nlead = data.nlead.replace(aCurrency, iCurrency);
            }
        }
    }
    IntlBase.replaceBlazorCurrency = replaceBlazorCurrency;
    /**
     * @private
     * @param {Date} date ?
     * @returns {number} ?
     */
    function getWeekOfYear(date) {
        var newYear = new Date(date.getFullYear(), 0, 1);
        var day = newYear.getDay();
        var weeknum;
        day = (day >= 0 ? day : day + 7);
        var daynum = Math.floor((date.getTime() - newYear.getTime() -
            (date.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
        if (day < 4) {
            weeknum = Math.floor((daynum + day - 1) / 7) + 1;
            if (weeknum > 52) {
                var nYear = new Date(date.getFullYear() + 1, 0, 1);
                var nday = nYear.getDay();
                nday = nday >= 0 ? nday : nday + 7;
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum + day - 1) / 7);
        }
        return weeknum;
    }
    IntlBase.getWeekOfYear = getWeekOfYear;
})(IntlBase || (IntlBase = {}));


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/intl/number-formatter.js":
/*!*************************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/intl/number-formatter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberFormat: () => (/* binding */ NumberFormat)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internationalization */ "./ej2-resources/26.1.38/scripts/ej2-base/internationalization.js");
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/intl-base.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/parser-base.js");
/* eslint-disable @typescript-eslint/no-explicit-any */




var errorText = {
    'ms': 'minimumSignificantDigits',
    'ls': 'maximumSignificantDigits',
    'mf': 'minimumFractionDigits',
    'lf': 'maximumFractionDigits'
};
var percentSign = 'percentSign';
var minusSign = 'minusSign';
var mapper = ['infinity', 'nan', 'group', 'decimal', 'exponential'];
/**
 * Module for number formatting.
 *
 * @private
 */
var NumberFormat = /** @__PURE__ @class */ (function () {
    function NumberFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     *
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} option - Specific the format in which number  will format.
     * @param {Object} cldr - Specifies the global cldr data collection.
     * @returns {Function} ?
     */
    NumberFormat.numberFormatter = function (culture, option, cldr) {
        var _this = this;
        var fOptions = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)({}, option);
        var cOptions = {};
        var dOptions = {};
        var symbolPattern;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getDependables(cldr, culture, '', true);
        var numObject = dependable.numericObject;
        dOptions.numberMapper = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)({}, numObject) :
            _parser_base__WEBPACK_IMPORTED_MODULE_3__.ParserBase.getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_3__.ParserBase.getNumberingSystem(cldr), true);
        dOptions.currencySymbol = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('currencySymbol', numObject) : _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getCurrencySymbol(dependable.numericObject, fOptions.currency || _internationalization__WEBPACK_IMPORTED_MODULE_1__.defaultCurrencyCode, option.altSymbol);
        dOptions.percentSymbol = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('numberSymbols.percentSign', numObject) :
            dOptions.numberMapper.numberSymbols["" + percentSign];
        dOptions.minusSymbol = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)() ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('numberSymbols.minusSign', numObject) :
            dOptions.numberMapper.numberSymbols["" + minusSign];
        var symbols = dOptions.numberMapper.numberSymbols;
        if ((option.format) && !(_intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.formatRegex.test(option.format))) {
            cOptions = _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.customFormat(option.format, dOptions, dependable.numericObject);
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(fOptions.useGrouping) && fOptions.useGrouping) {
                fOptions.useGrouping = cOptions.pData.useGrouping;
            }
        }
        else {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(fOptions, _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getProperNumericSkeleton(option.format || 'N'));
            fOptions.isCurrency = fOptions.type === 'currency';
            fOptions.isPercent = fOptions.type === 'percent';
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)()) {
                symbolPattern = _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
            }
            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(fOptions.fractionDigits)) {
                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
            }
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(fOptions.useGrouping)) {
                fOptions.useGrouping = true;
            }
            if (fOptions.isCurrency && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)()) {
                symbolPattern = symbolPattern.replace(/\u00A4/g, _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.defaultCurrency);
            }
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)()) {
                var split = symbolPattern.split(';');
                cOptions.nData = _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
                cOptions.pData = _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getFormatData(split[0], false, dOptions.currencySymbol);
                if (fOptions.useGrouping) {
                    fOptions.groupSeparator = symbols[mapper[2]];
                    fOptions.groupData = this.getGroupingDetails(split[0]);
                }
            }
            else {
                cOptions.nData = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)({}, {}, (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(fOptions.type + 'nData', numObject));
                cOptions.pData = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)({}, {}, (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(fOptions.type + 'pData', numObject));
                if (fOptions.type === 'currency' && option.currency) {
                    _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.replaceBlazorCurrency([cOptions.pData, cOptions.nData], dOptions.currencySymbol, option.currency);
                }
            }
            var minFrac = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(fOptions.minimumFractionDigits);
            if (minFrac) {
                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
            }
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(fOptions.maximumFractionDigits)) {
                var mval = cOptions.nData.maximumFraction;
                fOptions.maximumFractionDigits = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(mval) && fOptions.isPercent ? 0 : mval;
            }
            var mfrac = fOptions.minimumFractionDigits;
            var lfrac = fOptions.maximumFractionDigits;
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(mfrac) && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(lfrac)) {
                if (mfrac > lfrac) {
                    fOptions.maximumFractionDigits = mfrac;
                }
            }
        }
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(cOptions.nData, fOptions);
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(cOptions.pData, fOptions);
        return function (value) {
            if (isNaN(value)) {
                return symbols[mapper[1]];
            }
            else if (!isFinite(value)) {
                return symbols[mapper[0]];
            }
            return _this.intNumberFormatter(value, cOptions, dOptions, option);
        };
    };
    /**
     * Returns grouping details for the pattern provided
     *
     * @param {string} pattern ?
     * @returns {GroupDetails} ?
     */
    NumberFormat.getGroupingDetails = function (pattern) {
        var ret = {};
        var match = pattern.match(_intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.negativeDataRegex);
        if (match && match[4]) {
            var pattern_1 = match[4];
            var p = pattern_1.lastIndexOf(',');
            if (p !== -1) {
                var temp = pattern_1.split('.')[0];
                ret.primary = (temp.length - p) - 1;
                var s = pattern_1.lastIndexOf(',', p - 1);
                if (s !== -1) {
                    ret.secondary = p - 1 - s;
                }
            }
        }
        return ret;
    };
    /**
     * Returns if the provided integer range is valid.
     *
     * @param {number} val1 ?
     * @param {number} val2 ?
     * @param {boolean} checkbothExist ?
     * @param {boolean} isFraction ?
     * @returns {boolean} ?
     */
    NumberFormat.checkValueRange = function (val1, val2, checkbothExist, isFraction) {
        var decide = isFraction ? 'f' : 's';
        var dint = 0;
        var str1 = errorText['l' + decide];
        var str2 = errorText['m' + decide];
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(val1)) {
            this.checkRange(val1, str1, isFraction);
            dint++;
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(val2)) {
            this.checkRange(val2, str2, isFraction);
            dint++;
        }
        if (dint === 2) {
            if (val1 < val2) {
                (0,_util__WEBPACK_IMPORTED_MODULE_0__.throwError)(str2 + 'specified must be less than the' + str1);
            }
            else {
                return true;
            }
        }
        else if (checkbothExist && dint === 1) {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.throwError)('Both' + str2 + 'and' + str2 + 'must be present');
        }
        return false;
    };
    /**
     * Check if the provided fraction range is valid
     *
     * @param {number} val ?
     * @param {string} text ?
     * @param {boolean} isFraction ?
     * @returns {void} ?
     */
    NumberFormat.checkRange = function (val, text, isFraction) {
        var range = isFraction ? [0, 20] : [1, 21];
        if (val < range[0] || val > range[1]) {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.throwError)(text + 'value must be within the range' + range[0] + 'to' + range[1]);
        }
    };
    /**
     * Returns formatted numeric string for provided formatting options
     *
     * @param {number} value ?
     * @param {base.GenericFormatOptions} fOptions ?
     * @param {CommonOptions} dOptions ?
     * @param {NumberFormatOptions} [option] ?
     * @returns {string} ?
     */
    NumberFormat.intNumberFormatter = function (value, fOptions, dOptions, option) {
        var curData;
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(fOptions.nData.type)) {
            return undefined;
        }
        else {
            if (value < 0) {
                value = value * -1;
                curData = fOptions.nData;
            }
            else if (value === 0) {
                curData = fOptions.zeroData || fOptions.pData;
            }
            else {
                curData = fOptions.pData;
            }
            var fValue = '';
            if (curData.isPercent) {
                value = value * 100;
            }
            if (curData.groupOne) {
                fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
            }
            else {
                fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits, option);
                if (curData.minimumIntegerDigits) {
                    fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
                }
                if (dOptions.isCustomFormat && curData.minimumFractionDigits < curData.maximumFractionDigits
                    && /\d+\.\d+/.test(fValue)) {
                    var temp = fValue.split('.');
                    var decimalPart = temp[1];
                    var len = decimalPart.length;
                    for (var i = len - 1; i >= 0; i--) {
                        if (decimalPart[parseInt(i.toString(), 10)] === '0' && i >= curData.minimumFractionDigits) {
                            decimalPart = decimalPart.slice(0, i);
                        }
                        else {
                            break;
                        }
                    }
                    fValue = temp[0] + '.' + decimalPart;
                }
            }
            if (curData.type === 'scientific') {
                fValue = value.toExponential(curData.maximumFractionDigits);
                fValue = fValue.replace('e', dOptions.numberMapper.numberSymbols[mapper[4]]);
            }
            fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper[3]]);
            fValue = curData.format === '#,###,,;(#,###,,)' ? this.customPivotFormat(parseInt(fValue, 10)) : fValue;
            if (curData.useGrouping) {
                fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper[3]] || '.', curData.groupData.secondary);
            }
            fValue = _parser_base__WEBPACK_IMPORTED_MODULE_3__.ParserBase.convertValueParts(fValue, _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.latnParseRegex, dOptions.numberMapper.mapper);
            if (curData.nlead === 'N/A') {
                return curData.nlead;
            }
            else {
                if (fValue === '0' && option && option.format === '0') {
                    return fValue + curData.nend;
                }
                return curData.nlead + fValue + curData.nend;
            }
        }
    };
    /**
     * Returns significant digits processed numeric string
     *
     * @param {number} value ?
     * @param {number} min ?
     * @param {number} max ?
     * @returns {string} ?
     */
    NumberFormat.processSignificantDigits = function (value, min, max) {
        var temp = value + '';
        var tn;
        var length = temp.length;
        if (length < min) {
            return value.toPrecision(min);
        }
        else {
            temp = value.toPrecision(max);
            tn = +temp;
            return tn + '';
        }
    };
    /**
     * Returns grouped numeric string
     *
     * @param {string} val ?
     * @param {number} level1 ?
     * @param {string} sep ?
     * @param {string} decimalSymbol ?
     * @param {number} level2 ?
     * @returns {string} ?
     */
    NumberFormat.groupNumbers = function (val, level1, sep, decimalSymbol, level2) {
        var flag = !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(level2) && level2 !== 0;
        var split = val.split(decimalSymbol);
        var prefix = split[0];
        var length = prefix.length;
        var str = '';
        while (length > level1) {
            str = prefix.slice(length - level1, length) + (str.length ?
                (sep + str) : '');
            length -= level1;
            if (flag) {
                level1 = level2;
                flag = false;
            }
        }
        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
        return split.join(decimalSymbol);
    };
    /**
     * Returns fraction processed numeric string
     *
     * @param {number} value ?
     * @param {number} min ?
     * @param {number} max ?
     * @param {NumberFormatOptions} [option] ?
     * @returns {string} ?
     */
    NumberFormat.processFraction = function (value, min, max, option) {
        var temp = (value + '').split('.')[1];
        var length = temp ? temp.length : 0;
        if (min && length < min) {
            var ret = '';
            if (length === 0) {
                ret = value.toFixed(min);
            }
            else {
                ret += value;
                for (var j = 0; j < min - length; j++) {
                    ret += '0';
                }
                return ret;
            }
            return value.toFixed(min);
        }
        else if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(max) && (length > max || max === 0)) {
            return value.toFixed(max);
        }
        var str = value + '';
        if (str[0] === '0' && option && option.format === '###.00') {
            str = str.slice(1);
        }
        return str;
    };
    /**
     * Returns integer processed numeric string
     *
     * @param {string} value ?
     * @param {number} min ?
     * @returns {string} ?
     */
    NumberFormat.processMinimumIntegers = function (value, min) {
        var temp = value.split('.');
        var lead = temp[0];
        var len = lead.length;
        if (len < min) {
            for (var i = 0; i < min - len; i++) {
                lead = '0' + lead;
            }
            temp[0] = lead;
        }
        return temp.join('.');
    };
    /**
     * Returns custom format for pivot table
     *
     * @param {number} value ?
     * @returns {string} ?
     */
    NumberFormat.customPivotFormat = function (value) {
        if (value >= 500000) {
            value /= 1000000;
            var _a = value.toString().split('.'), integer = _a[0], decimal = _a[1];
            return decimal && +decimal.substring(0, 1) >= 5
                ? Math.ceil(value).toString()
                : Math.floor(value).toString();
        }
        return '';
    };
    return NumberFormat;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/intl/number-parser.js":
/*!**********************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/intl/number-parser.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberParser: () => (/* binding */ NumberParser)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/parser-base.js");
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl-base */ "./ej2-resources/26.1.38/scripts/ej2-base/intl/intl-base.js");



var regExp = RegExp;
var parseRegex = new regExp('^([^0-9]*)' + '(([0-9,]*[0-9]+)(.[0-9]+)?)' + '([Ee][+-]?[0-9]+)?([^0-9]*)$');
var groupRegex = /,/g;
var keys = ['minusSign', 'infinity'];
/**
 * Module for Number Parser.
 *
 * @private
 */
var NumberParser = /** @__PURE__ @class */ (function () {
    function NumberParser() {
    }
    /**
     * Returns the parser function for given skeleton.
     *
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} option - Specific the format in which number  will parsed.
     * @param {Object} cldr - Specifies the global cldr data collection.
     * @returns {Function} ?
     */
    NumberParser.numberParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getDependables(cldr, culture, '', true);
        var parseOptions = { custom: true };
        if ((_intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.formatRegex.test(option.format)) || !(option.format)) {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(parseOptions, _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getProperNumericSkeleton(option.format || 'N'));
            parseOptions.custom = false;
            if (!parseOptions.fractionDigits) {
                if (option.maximumFractionDigits) {
                    parseOptions.maximumFractionDigits = option.maximumFractionDigits;
                }
            }
        }
        else {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(parseOptions, _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.customFormat(option.format, null, null));
        }
        var numbers = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('numbers', dependable.parserObject);
        var numOptions = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.getCurrentNumericOptions(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.getNumberingSystem(cldr), true, (0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)());
        parseOptions.symbolRegex = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.getSymbolRegex(Object.keys(numOptions.symbolMatch));
        parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
        var symbolpattern;
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)()) {
            symbolpattern = _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
            if (symbolpattern) {
                symbolpattern = symbolpattern.replace(/\u00A4/g, _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.defaultCurrency);
                var split = symbolpattern.split(';');
                parseOptions.nData = _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getFormatData(split[1] || '-' + split[0], true, '');
                parseOptions.pData = _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.getFormatData(split[0], true, '');
            }
        }
        else {
            parseOptions.nData = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)({}, {}, (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(parseOptions.type + 'nData', numbers));
            parseOptions.pData = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)({}, {}, (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(parseOptions.type + 'pData', numbers));
            if (parseOptions.type === 'currency' && option.currency) {
                _intl_base__WEBPACK_IMPORTED_MODULE_2__.IntlBase.replaceBlazorCurrency([parseOptions.pData, parseOptions.nData], (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('currencySymbol', numbers), option.currency);
            }
        }
        return function (value) {
            return _this.getParsedNumber(value, parseOptions, numOptions);
        };
    };
    /**
     * Returns parsed number for the provided formatting options
     *
     * @param {string} value ?
     * @param {NumericParts} options ?
     * @param {NumericOptions} numOptions ?
     * @returns {number} ?
     */
    NumberParser.getParsedNumber = function (value, options, numOptions) {
        var isNegative;
        var isPercent;
        var tempValue;
        var lead;
        var end;
        var ret;
        if (value.indexOf(options.infinity) !== -1) {
            return Infinity;
        }
        else {
            value = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.convertValueParts(value, options.symbolRegex, numOptions.symbolMatch);
            value = _parser_base__WEBPACK_IMPORTED_MODULE_1__.ParserBase.convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair);
            value = value.indexOf('-') !== -1 ? value.replace('-.', '-0.') : value;
            if (value.indexOf('.') === 0) {
                value = '0' + value;
            }
            var matches = value.match(parseRegex);
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(matches)) {
                return NaN;
            }
            lead = matches[1];
            tempValue = matches[2];
            var exponent = matches[5];
            end = matches[6];
            isNegative = options.custom ? ((lead === options.nData.nlead) && (end === options.nData.nend)) :
                ((lead.indexOf(options.nData.nlead) !== -1) && (end.indexOf(options.nData.nend) !== -1));
            isPercent = isNegative ?
                options.nData.isPercent :
                options.pData.isPercent;
            tempValue = tempValue.replace(groupRegex, '');
            if (exponent) {
                tempValue += exponent;
            }
            ret = +tempValue;
            if (options.type === 'percent' || isPercent) {
                ret = ret / 100;
            }
            if (options.custom || options.fractionDigits) {
                ret = parseFloat(ret.toFixed(options.custom ?
                    (isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits) : options.fractionDigits));
            }
            if (options.maximumFractionDigits) {
                ret = this.convertMaxFracDigits(tempValue, options, ret, isNegative);
            }
            if (isNegative) {
                ret *= -1;
            }
            return ret;
        }
    };
    NumberParser.convertMaxFracDigits = function (value, options, ret, isNegative) {
        var decimalSplitValue = value.split('.');
        if (decimalSplitValue[1] && decimalSplitValue[1].length > options.maximumFractionDigits) {
            ret = +(ret.toFixed(options.custom ?
                (isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits) : options.maximumFractionDigits));
        }
        return ret;
    };
    return NumberParser;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/intl/parser-base.js":
/*!********************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/intl/parser-base.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserBase: () => (/* binding */ ParserBase),
/* harmony export */   getBlazorCurrencySymbol: () => (/* binding */ getBlazorCurrencySymbol)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Parser
 */
var defaultNumberingSystem = {
    'latn': {
        '_digits': '0123456789',
        '_type': 'numeric'
    }
};

var defaultNumberSymbols = {
    'decimal': '.',
    'group': ',',
    'percentSign': '%',
    'plusSign': '+',
    'minusSign': '-',
    'infinity': '∞',
    'nan': 'NaN',
    'exponential': 'E'
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Interface for parser base
 *
 * @private
 */
var ParserBase = /** @__PURE__ @class */ (function () {
    function ParserBase() {
    }
    /**
     * Returns the cldr object for the culture specifies
     *
     * @param {Object} obj - Specifies the object from which culture object to be acquired.
     * @param {string} cName - Specifies the culture name.
     * @returns {Object} ?
     */
    ParserBase.getMainObject = function (obj, cName) {
        var value = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor)() ? cName : 'main.' + cName;
        return (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(value, obj);
    };
    /**
     * Returns the numbering system object from given cldr data.
     *
     * @param {Object} obj - Specifies the object from which number system is acquired.
     * @returns {Object} ?
     */
    ParserBase.getNumberingSystem = function (obj) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('supplemental.numberingSystems', obj) || this.numberingSystems;
    };
    /**
     * Returns the reverse of given object keys or keys specified.
     *
     * @param {Object} prop - Specifies the object to be reversed.
     * @param {number[]} keys - Optional parameter specifies the custom keyList for reversal.
     * @returns {Object} ?
     */
    ParserBase.reverseObject = function (prop, keys) {
        var propKeys = keys || Object.keys(prop);
        var res = {};
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var key = propKeys_1[_i];
            if (!Object.prototype.hasOwnProperty.call(res, prop["" + key])) {
                res[prop["" + key]] = key;
            }
        }
        return res;
    };
    /**
     * Returns the symbol regex by skipping the escape sequence.
     *
     * @param {string[]} props - Specifies the array values to be skipped.
     * @returns {RegExp} ?
     */
    ParserBase.getSymbolRegex = function (props) {
        var regexStr = props.map(function (str) {
            return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
        }).join('|');
        var regExp = RegExp;
        return new regExp(regexStr, 'g');
    };
    /**
     *
     * @param {Object} prop ?
     * @returns {Object} ?
     */
    ParserBase.getSymbolMatch = function (prop) {
        var matchKeys = Object.keys(defaultNumberSymbols);
        var ret = {};
        for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
            var key = matchKeys_1[_i];
            ret[prop["" + key]] = defaultNumberSymbols["" + key];
        }
        return ret;
    };
    /**
     * Returns regex string for provided value
     *
     * @param {string} val ?
     * @returns {string} ?
     */
    ParserBase.constructRegex = function (val) {
        var len = val.length;
        var ret = '';
        for (var i = 0; i < len; i++) {
            if (i !== len - 1) {
                ret += val[parseInt(i.toString(), 10)] + '|';
            }
            else {
                ret += val[parseInt(i.toString(), 10)];
            }
        }
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     *
     * @param {string} value - Specifies the  values to be replaced.
     * @param {RegExp} regex - Specifies the  regex to search.
     * @param {Object} obj - Specifies the  object matcher to be replace value parts.
     * @returns {string} ?
     */
    ParserBase.convertValueParts = function (value, regex, obj) {
        return value.replace(regex, function (str) {
            return obj["" + str];
        });
    };
    /**
     * Returns default numbering system object for formatting from cldr data
     *
     * @param {Object} obj ?
     * @returns {NumericObject} ?
     */
    ParserBase.getDefaultNumberingSystem = function (obj) {
        var ret = {};
        ret.obj = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('numbers', obj);
        ret.nSystem = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('defaultNumberingSystem', ret.obj);
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     *
     * @param {Object} curObj ?
     * @param {Object} numberSystem ?
     * @param {boolean} needSymbols ?
     * @param {boolean} blazorMode ?
     * @returns {Object} ?
     */
    ParserBase.getCurrentNumericOptions = function (curObj, numberSystem, needSymbols, blazorMode) {
        var ret = {};
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(cur.nSystem) || blazorMode) {
            var digits = blazorMode ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('obj.mapperDigits', cur) : (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(cur.nSystem + '._digits', numberSystem);
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(digits)) {
                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                var regExp = RegExp;
                ret.numberParseRegex = new regExp(this.constructRegex(digits), 'g');
                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                if (needSymbols) {
                    ret.numericRegex = digits[0] + '-' + digits[9];
                    ret.symbolNumberSystem = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(blazorMode ? 'numberSymbols' : 'symbols-numberSystem-' + cur.nSystem, cur.obj);
                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                    ret.numberSystem = cur.nSystem;
                }
            }
        }
        return ret;
    };
    /**
     * Returns number mapper object for the provided cldr data
     *
     * @param {Object} curObj ?
     * @param {Object} numberSystem ?
     * @param {boolean} isNumber ?
     * @returns {NumberMapper} ?
     */
    ParserBase.getNumberMapper = function (curObj, numberSystem, isNumber) {
        var ret = { mapper: {} };
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(cur.nSystem)) {
            ret.numberSystem = cur.nSystem;
            ret.numberSymbols = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('symbols-numberSystem-' + cur.nSystem, cur.obj);
            ret.timeSeparator = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('timeSeparator', ret.numberSymbols);
            var digits = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(cur.nSystem + '._digits', numberSystem);
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(digits)) {
                for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    ret.mapper[parseInt(i.toString(), 10)] = digits[parseInt(i.toString(), 10)];
                }
            }
        }
        return ret;
    };
    ParserBase.nPair = 'numericPair';
    ParserBase.nRegex = 'numericRegex';
    ParserBase.numberingSystems = defaultNumberingSystem;
    return ParserBase;
}());

/**
 * @private
 */
var blazorCurrencyData = {
    'DJF': 'Fdj',
    'ERN': 'Nfk',
    'ETB': 'Br',
    'NAD': '$',
    'ZAR': 'R',
    'XAF': 'FCFA',
    'GHS': 'GH₵',
    'XDR': 'XDR',
    'AED': 'د.إ.',
    'BHD': 'د.ب.',
    'DZD': 'د.ج.',
    'EGP': 'ج.م.',
    'ILS': '₪',
    'IQD': 'د.ع.',
    'JOD': 'د.ا.',
    'KMF': 'CF',
    'KWD': 'د.ك.',
    'LBP': 'ل.ل.',
    'LYD': 'د.ل.',
    'MAD': 'د.م.',
    'MRU': 'أ.م.',
    'OMR': 'ر.ع.',
    'QAR': 'ر.ق.',
    'SAR': 'ر.س.',
    'SDG': 'ج.س.',
    'SOS': 'S',
    'SSP': '£',
    'SYP': 'ل.س.',
    'TND': 'د.ت.',
    'YER': 'ر.ي.',
    'CLP': '$',
    'INR': '₹',
    'TZS': 'TSh',
    'EUR': '€',
    'AZN': '₼',
    'RUB': '₽',
    'BYN': 'Br',
    'ZMW': 'K',
    'BGN': 'лв.',
    'NGN': '₦',
    'XOF': 'CFA',
    'BDT': '৳',
    'CNY': '¥',
    'BAM': 'КМ',
    'UGX': 'USh',
    'USD': '$',
    'CZK': 'Kč',
    'GBP': '£',
    'DKK': 'kr.',
    'KES': 'Ksh',
    'CHF': 'CHF',
    'MVR': 'ރ.',
    'BTN': 'Nu.',
    'XCD': 'EC$',
    'AUD': '$',
    'BBD': '$',
    'BIF': 'FBu',
    'BMD': '$',
    'BSD': '$',
    'BWP': 'P',
    'BZD': '$',
    'CAD': '$',
    'NZD': '$',
    'FJD': '$',
    'FKP': '£',
    'GIP': '£',
    'GMD': 'D',
    'GYD': '$',
    'HKD': '$',
    'IDR': 'Rp',
    'JMD': '$',
    'KYD': '$',
    'LRD': '$',
    'MGA': 'Ar',
    'MOP': 'MOP$',
    'MUR': 'Rs',
    'MWK': 'MK',
    'MYR': 'RM',
    'PGK': 'K',
    'PHP': '₱',
    'PKR': 'Rs',
    'RWF': 'RF',
    'SBD': '$',
    'SCR': 'SR',
    'SEK': 'kr',
    'SGD': '$',
    'SHP': '£',
    'SLL': 'Le',
    'ANG': 'NAf.',
    'SZL': 'E',
    'TOP': 'T$',
    'TTD': '$',
    'VUV': 'VT',
    'WST': 'WS$',
    'ARS': '$',
    'BOB': 'Bs',
    'BRL': 'R$',
    'COP': '$',
    'CRC': '₡',
    'CUP': '$',
    'DOP': '$',
    'GTQ': 'Q',
    'HNL': 'L',
    'MXN': '$',
    'NIO': 'C$',
    'PAB': 'B/.',
    'PEN': 'S/',
    'PYG': '₲',
    'UYU': '$',
    'VES': 'Bs.S',
    'IRR': 'ريال',
    'GNF': 'FG',
    'CDF': 'FC',
    'HTG': 'G',
    'XPF': 'FCFP',
    'HRK': 'kn',
    'HUF': 'Ft',
    'AMD': '֏',
    'ISK': 'kr',
    'JPY': '¥',
    'GEL': '₾',
    'CVE': '​',
    'KZT': '₸',
    'KHR': '៛',
    'KPW': '₩',
    'KRW': '₩',
    'KGS': 'сом',
    'AOA': 'Kz',
    'LAK': '₭',
    'MZN': 'MTn',
    'MKD': 'ден',
    'MNT': '₮',
    'BND': '$',
    'MMK': 'K',
    'NOK': 'kr',
    'NPR': 'रु',
    'AWG': 'Afl.',
    'SRD': '$',
    'PLN': 'zł',
    'AFN': '؋',
    'STN': 'Db',
    'MDL': 'L',
    'RON': 'lei',
    'UAH': '₴',
    'LKR': 'රු.',
    'ALL': 'Lekë',
    'RSD': 'дин.',
    'TJS': 'смн',
    'THB': '฿',
    'TMT': 'm.',
    'TRY': '₺',
    'UZS': 'сўм',
    'VND': '₫',
    'TWD': 'NT$'
};
/**
 *
 * @param {string} currencyCode ?
 * @returns {string} ?
 */
function getBlazorCurrencySymbol(currencyCode) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(currencyCode || '', blazorCurrencyData);
}


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/keyboard.js":
/*!************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/keyboard.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardEvents: () => (/* binding */ KeyboardEvents)
/* harmony export */ });
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/26.1.38/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./ej2-resources/26.1.38/scripts/ej2-base/base.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var keyCode = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'control': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'space': 32,
    'escape': 27,
    'pageup': 33,
    'pagedown': 34,
    'end': 35,
    'home': 36,
    'leftarrow': 37,
    'uparrow': 38,
    'rightarrow': 39,
    'downarrow': 40,
    'insert': 45,
    'delete': 46,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'semicolon': 186,
    'plus': 187,
    'comma': 188,
    'minus': 189,
    'dot': 190,
    'forwardslash': 191,
    'graveaccent': 192,
    'openbracket': 219,
    'backslash': 220,
    'closebracket': 221,
    'singlequote': 222
};
/**
 * KeyboardEvents class enables you to bind key action desired key combinations for ex., Ctrl+A, Delete, Alt+Space etc.
 * ```html
 * <div id='testEle'>  </div>;
 * <script>
 *   let node: HTMLElement = document.querySelector('#testEle');
 *   let kbInstance = new KeyboardEvents({
 *       element: node,
 *       keyConfigs:{ selectAll : 'ctrl+a' },
 *       keyAction: function (e:KeyboardEvent, action:string) {
 *           // handler function code
 *       }
 *   });
 * </script>
 * ```
 */
var KeyboardEvents = /** @__PURE__ @class */ (function (_super) {
    __extends(KeyboardEvents, _super);
    /**
     * Initializes the KeyboardEvents
     *
     * @param {HTMLElement} element ?
     * @param {KeyboardEventsModel} options ?
     */
    function KeyboardEvents(element, options) {
        var _this = _super.call(this, options, element) || this;
        /**
         * To handle a key press event returns null
         *
         * @param {KeyboardEventArgs} e ?
         * @returns {void} ?
         */
        _this.keyPressHandler = function (e) {
            var isAltKey = e.altKey;
            var isCtrlKey = e.ctrlKey;
            var isShiftKey = e.shiftKey;
            var curkeyCode = e.which;
            var keys = Object.keys(_this.keyConfigs);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var configCollection = _this.keyConfigs["" + key].split(',');
                for (var _a = 0, configCollection_1 = configCollection; _a < configCollection_1.length; _a++) {
                    var rconfig = configCollection_1[_a];
                    var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                    if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey &&
                        isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
                        e.action = key;
                        if (_this.keyAction) {
                            _this.keyAction(e);
                        }
                    }
                }
            }
        };
        _this.bind();
        return _this;
    }
    KeyboardEvents_1 = KeyboardEvents;
    /**
     * Unwire bound events and destroy the instance.
     *
     * @returns {void} ?
     */
    KeyboardEvents.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    /**
     * Function can be used to specify certain action if a property is changed
     *
     * @param {KeyboardEventsModel} newProp ?
     * @param {KeyboardEventsModel} oldProp ?
     * @returns {void} ?
     * @private
     */
    KeyboardEvents.prototype.onPropertyChanged = function (newProp, oldProp) {
        // No code are needed
    };
    KeyboardEvents.prototype.bind = function () {
        this.wireEvents();
    };
    /**
     * To get the module name, returns 'keyboard'.
     *
     * @returns {string} ?
     * @private
     */
    KeyboardEvents.prototype.getModuleName = function () {
        return 'keyboard';
    };
    /**
     * Wiring event handlers to events
     *
     * @returns {void} ?
     * @private
     */
    KeyboardEvents.prototype.wireEvents = function () {
        this.element.addEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * Unwiring event handlers to events
     *
     * @returns {void} ?
     * @private
     */
    KeyboardEvents.prototype.unwireEvents = function () {
        this.element.removeEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * To get the key configuration data
     *
     * @param {string} config - configuration data
     * @returns {KeyData} ?
     */
    KeyboardEvents.getKeyConfigData = function (config) {
        if (config in this.configCache) {
            return this.configCache["" + config];
        }
        var keys = config.toLowerCase().split('+');
        var keyData = {
            altKey: (keys.indexOf('alt') !== -1 ? true : false),
            ctrlKey: (keys.indexOf('ctrl') !== -1 ? true : false),
            shiftKey: (keys.indexOf('shift') !== -1 ? true : false),
            keyCode: null
        };
        if (keys[keys.length - 1].length > 1 && !!Number(keys[keys.length - 1])) {
            keyData.keyCode = Number(keys[keys.length - 1]);
        }
        else {
            keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]);
        }
        KeyboardEvents_1.configCache["" + config] = keyData;
        return keyData;
    };
    // Return the keycode value as string
    KeyboardEvents.getKeyCode = function (keyVal) {
        return keyCode["" + keyVal] || keyVal.toUpperCase().charCodeAt(0);
    };
    var KeyboardEvents_1;
    KeyboardEvents.configCache = {};
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_0__.Property)({})
    ], KeyboardEvents.prototype, "keyConfigs", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_0__.Property)('keyup')
    ], KeyboardEvents.prototype, "eventName", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_0__.Event)()
    ], KeyboardEvents.prototype, "keyAction", void 0);
    KeyboardEvents = KeyboardEvents_1 = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_0__.NotifyPropertyChanges
    ], KeyboardEvents);
    return KeyboardEvents;
}(_base__WEBPACK_IMPORTED_MODULE_1__.Base));



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/l10n.js":
/*!********************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/l10n.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L10n: () => (/* binding */ L10n)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internationalization */ "./ej2-resources/26.1.38/scripts/ej2-base/internationalization.js");


/**
 * L10n modules provides localized text for different culture.
 * ```typescript
 * import {setCulture} from '../ts-base-library';
 * //load global locale object common for all components.
 * L10n.load({
 *    'fr-BE': {
 *       'button': {
 *            'check': 'vérifié'
 *        }
 *    }
 * });
 * //set globale default locale culture.
 * setCulture('fr-BE');
 * let instance: L10n = new L10n('button', {
 *    check: 'checked'
 * });
 * //Get locale text for current property.
 * instance.getConstant('check');
 * //Change locale culture in a component.
 * instance.setLocale('en-US');
 * ```
 */
var L10n = /** @__PURE__ @class */ (function () {
    /**
     * Constructor
     *
     * @param {string} controlName ?
     * @param {Object} localeStrings ?
     * @param {string} locale ?
     */
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || _internationalization__WEBPACK_IMPORTED_MODULE_1__.defaultCulture);
    }
    /**
     * Sets the locale text
     *
     * @param {string} locale ?
     * @returns {void} ?
     */
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        this.currentLocale = intLocale || this.localeStrings;
    };
    /**
     * Sets the global locale for all components.
     *
     * @param {Object} localeObject - specifies the localeObject to be set as global locale.
     * @returns {void} ?
     */
    L10n.load = function (localeObject) {
        this.locale = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(this.locale, localeObject, {}, true);
    };
    /**
     * Returns current locale text for the property based on the culture name and control name.
     *
     * @param {string} prop - specifies the property for which localize text to be returned.
     * @returns {string} ?
     */
    L10n.prototype.getConstant = function (prop) {
        // Removed conditional operator because this method does not return correct value when passing 0 as value in localization
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(this.currentLocale["" + prop])) {
            return this.currentLocale["" + prop];
        }
        else {
            return this.localeStrings["" + prop] || '';
        }
    };
    /**
     * Returns the control constant object for current object and the locale specified.
     *
     * @param {Object} curObject ?
     * @param {string} locale ?
     * @returns {Object} ?
     */
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if ((curObject)["" + locale]) {
            return (curObject)["" + locale][this.controlName];
        }
        return null;
    };
    L10n.locale = {};
    return L10n;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/module-loader.js":
/*!*****************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/module-loader.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleLoader: () => (/* binding */ ModuleLoader)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Module loading operations
 */

var MODULE_SUFFIX = 'Module';
var ModuleLoader = /** @__PURE__ @class */ (function () {
    function ModuleLoader(parent) {
        this.loadedModules = [];
        this.parent = parent;
    }
    /**
     * Inject required modules in component library
     *
     * @returns {void} ?
     * @param {ModuleDeclaration[]} requiredModules - Array of modules to be required
     * @param {Function[]} moduleList - Array of modules to be injected from sample side
     */
    ModuleLoader.prototype.inject = function (requiredModules, moduleList) {
        var reqLength = requiredModules.length;
        if (reqLength === 0) {
            this.clean();
            return;
        }
        if (this.loadedModules.length) {
            this.clearUnusedModule(requiredModules);
        }
        for (var i = 0; i < reqLength; i++) {
            var modl = requiredModules[parseInt(i.toString(), 10)];
            for (var _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
                var module = moduleList_1[_i];
                var modName = modl.member;
                if (module && module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                    var moduleObject = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createInstance)(module, modl.args);
                    var memberName = this.getMemberName(modName);
                    if (modl.isProperty) {
                        (0,_util__WEBPACK_IMPORTED_MODULE_0__.setValue)(memberName, module, this.parent);
                    }
                    else {
                        (0,_util__WEBPACK_IMPORTED_MODULE_0__.setValue)(memberName, moduleObject, this.parent);
                    }
                    var loadedModule = modl;
                    loadedModule.member = memberName;
                    this.loadedModules.push(loadedModule);
                }
            }
        }
    };
    /**
     * To remove the created object while destroying the control
     *
     * @returns {void}
     */
    ModuleLoader.prototype.clean = function () {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var modules = _a[_i];
            if (!modules.isProperty) {
                (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(modules.member, this.parent).destroy();
            }
        }
        this.loadedModules = [];
    };
    /**
     * Returns the array of modules that are not loaded in the component library.
     *
     * @param {ModuleDeclaration[]} requiredModules - Array of modules to be required
     * @returns {ModuleDeclaration[]} ?
     * @private
     */
    ModuleLoader.prototype.getNonInjectedModules = function (requiredModules) {
        var _this = this;
        return requiredModules.filter(function (module) { return !_this.isModuleLoaded(module.member); });
    };
    /**
     * Removes all unused modules
     *
     * @param {ModuleDeclaration[]} moduleList ?
     * @returns {void} ?
     */
    ModuleLoader.prototype.clearUnusedModule = function (moduleList) {
        var _this = this;
        var usedModules = moduleList.map(function (arg) { return _this.getMemberName(arg.member); });
        var removableModule = this.loadedModules.filter(function (module) {
            return usedModules.indexOf(module.member) === -1;
        });
        for (var _i = 0, removableModule_1 = removableModule; _i < removableModule_1.length; _i++) {
            var mod = removableModule_1[_i];
            if (!mod.isProperty) {
                (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(mod.member, this.parent).destroy();
            }
            this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.deleteObject)(this.parent, mod.member);
        }
    };
    /**
     * To get the name of the member.
     *
     * @param {string} name ?
     * @returns {string} ?
     */
    ModuleLoader.prototype.getMemberName = function (name) {
        return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
    };
    /**
     * Returns boolean based on whether the module specified is loaded or not
     *
     * @param {string} modName ?
     * @returns {boolean} ?
     */
    ModuleLoader.prototype.isModuleLoaded = function (modName) {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.member === this.getMemberName(modName)) {
                return true;
            }
        }
        return false;
    };
    return ModuleLoader;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/notify-property-change.js":
/*!**************************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/notify-property-change.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* binding */ Collection),
/* harmony export */   CollectionFactory: () => (/* binding */ CollectionFactory),
/* harmony export */   Complex: () => (/* binding */ Complex),
/* harmony export */   ComplexFactory: () => (/* binding */ ComplexFactory),
/* harmony export */   CreateBuilder: () => (/* binding */ CreateBuilder),
/* harmony export */   Event: () => (/* binding */ Event),
/* harmony export */   NotifyPropertyChanges: () => (/* binding */ NotifyPropertyChanges),
/* harmony export */   Property: () => (/* binding */ Property)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Returns the Class Object
 *
 * @param {ClassObject} instance - instance of ClassObject
 * @param {string} curKey - key of the current instance
 * @param {Object} defaultValue - default Value
 * @param {Object[]} type ?
 * @returns {ClassObject} ?
 */
function getObject(instance, curKey, defaultValue, type) {
    if (!Object.prototype.hasOwnProperty.call(instance.properties, curKey) || !(instance.properties["" + curKey] instanceof type)) {
        instance.properties["" + curKey] = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createInstance)(type, [instance, curKey, defaultValue]);
    }
    return instance.properties["" + curKey];
}
/**
 * Returns object array
 *
 * @param {ClassObject} instance ?
 * @param {string} curKey ?
 * @param {Object[]} defaultValue ?
 * @param {Object} type ?
 * @param {boolean} isSetter ?
 * @param {boolean} isFactory ?
 * @returns {Object[]} ?
 */
function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
    var result = [];
    var len = defaultValue ? defaultValue.length : 0;
    for (var i = 0; i < len; i++) {
        var curType = type;
        if (isFactory) {
            curType = type(defaultValue[parseInt(i.toString(), 10)], instance);
        }
        if (isSetter) {
            var inst = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createInstance)(curType, [instance, curKey, {}, true]);
            inst.setProperties(defaultValue[parseInt(i.toString(), 10)], true);
            result.push(inst);
        }
        else {
            result.push((0,_util__WEBPACK_IMPORTED_MODULE_0__.createInstance)(curType, [instance, curKey, defaultValue[parseInt(i.toString(), 10)], false]));
        }
    }
    return result;
}
/**
 * Returns the properties of the object
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @returns {void} ?
 */
function propertyGetter(defaultValue, curKey) {
    return function () {
        if (!Object.prototype.hasOwnProperty.call(this.properties, curKey)) {
            this.properties["" + curKey] = defaultValue;
        }
        return this.properties["" + curKey];
    };
}
/**
 * Set the properties for the object
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @returns {void} ?
 */
function propertySetter(defaultValue, curKey) {
    return function (newValue) {
        if (this.properties["" + curKey] !== newValue) {
            var oldVal = Object.prototype.hasOwnProperty.call(this.properties, curKey) ? this.properties["" + curKey] : defaultValue;
            this.saveChanges(curKey, newValue, oldVal);
            this.properties["" + curKey] = newValue;
        }
    };
}
/**
 * Returns complex objects
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexGetter(defaultValue, curKey, type) {
    return function () {
        return getObject(this, curKey, defaultValue, type);
    };
}
/**
 * Sets complex objects
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexSetter(defaultValue, curKey, type) {
    return function (newValue) {
        getObject(this, curKey, defaultValue, type).setProperties(newValue);
    };
}
/**
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @param {FunctionConstructor} type ?
 * @returns {void} ?
 */
function complexFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        if (Object.prototype.hasOwnProperty.call(this.properties, curKey)) {
            return this.properties["" + curKey];
        }
        else {
            return getObject(this, curKey, defaultValue, curType);
        }
    };
}
/**
 *
 * @param {Object} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var curType = type(newValue, this);
        getObject(this, curKey, defaultValue, curType).setProperties(newValue);
    };
}
/**
 *
 * @param {Object[]} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexArrayGetter(defaultValue, curKey, type) {
    return function () {
        var _this = this;
        if (!Object.prototype.hasOwnProperty.call(this.properties, curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, type, false);
            this.properties["" + curKey] = defCollection;
        }
        var ignore = ((this.controlParent !== undefined && this.controlParent.ignoreCollectionWatch)
            || this.ignoreCollectionWatch);
        if (!Object.prototype.hasOwnProperty.call(this.properties["" + curKey], 'push') && !ignore) {
            ['push', 'pop'].forEach(function (extendFunc) {
                var descriptor = {
                    value: complexArrayDefinedCallback(extendFunc, curKey, type, _this.properties["" + curKey]).bind(_this),
                    configurable: true
                };
                Object.defineProperty(_this.properties["" + curKey], extendFunc, descriptor);
            });
        }
        if (!Object.prototype.hasOwnProperty.call(this.properties["" + curKey], 'isComplexArray')) {
            Object.defineProperty(this.properties["" + curKey], 'isComplexArray', { value: true });
        }
        return this.properties["" + curKey];
    };
}
/**
 *
 * @param {Object[]} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexArraySetter(defaultValue, curKey, type) {
    return function (newValue) {
        this.isComplexArraySetter = true;
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true);
        this.isComplexArraySetter = false;
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties["" + curKey] = newValCollection;
    };
}
/**
 *
 * @param {Object[]} defaultValue ?
 * @param {string} curKey ?
 * @param {Object[]} type ?
 * @returns {void} ?
 */
function complexArrayFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var oldValueCollection = Object.prototype.hasOwnProperty.call(this.properties, curKey) ? this.properties["" + curKey] : defaultValue;
        var newValCollection = getObjectArray(this, curKey, newValue, type, true, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties["" + curKey] = newValCollection;
    };
}
/**
 *
 * @param {Object[]} defaultValue ?
 * @param {string} curKey ?
 * @param {FunctionConstructor} type ?
 * @returns {void} ?
 */
function complexArrayFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        if (!Object.prototype.hasOwnProperty.call(this.properties, curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, curType, false);
            this.properties["" + curKey] = defCollection;
        }
        return this.properties["" + curKey];
    };
}
/**
 *
 * @param {string} dFunc ?
 * @param {string} curKey ?
 * @param {Object} type ?
 * @param {Object} prop ?
 * @returns {Object} ?
 */
function complexArrayDefinedCallback(dFunc, curKey, type, prop) {
    return function () {
        var newValue = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newValue[_i] = arguments[_i];
        }
        var keyString = this.propName ? this.getParentKey() + '.' + curKey + '-' : curKey + '-';
        switch (dFunc) {
            case 'push':
                for (var i = 0; i < newValue.length; i++) {
                    var newValueParse = newValue[parseInt(i.toString(), 10)];
                    Array.prototype["" + dFunc].apply(prop, [newValueParse]);
                    var model = getArrayModel(keyString + (prop.length - 1), newValueParse, !this.controlParent, dFunc);
                    this.serverDataBind(model, newValue[parseInt(i.toString(), 10)], false, dFunc);
                }
                break;
            case 'pop': {
                Array.prototype["" + dFunc].apply(prop);
                var model = getArrayModel(keyString + prop.length, null, !this.controlParent, dFunc);
                this.serverDataBind(model, { ejsAction: 'pop' }, false, dFunc);
                break;
            }
        }
        return prop;
    };
}
/**
 *
 * @param {string} keyString ?
 * @param {Object} value ?
 * @param {boolean} isControlParent ?
 * @param {string} arrayFunction ?
 * @returns {Object} ?
 */
function getArrayModel(keyString, value, isControlParent, arrayFunction) {
    var modelObject = keyString;
    if (isControlParent) {
        modelObject = {};
        modelObject["" + keyString] = value;
        if (value && typeof value === 'object') {
            var action = 'ejsAction';
            modelObject["" + keyString]["" + action] = arrayFunction;
        }
    }
    return modelObject;
}
/**
 * Method used to create property. General syntax below.
 *
 * @param {Object} defaultValue - Specifies the default value of property.
 * @returns {PropertyDecorator} ?
 * @private
 */
function Property(defaultValue) {
    return function (target, key) {
        var propertyDescriptor = {
            set: propertySetter(defaultValue, key),
            get: propertyGetter(defaultValue, key),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'prop', defaultValue);
    };
}
/**
 * Method used to create complex property. General syntax below.
 *
 * @param  {any} defaultValue - Specifies the default value of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * @returns {PropertyDecorator} ?
 * ```
 * @Complex<Type>({},Type)
 * propertyName: Type;
 * ```
 * @private
 */
function Complex(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexSetter(defaultValue, key, type),
            get: complexGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', defaultValue, type);
    };
}
/**
 * Method used to create complex Factory property. General syntax below.
 *
 * @param  {Function} type - Specifies the class factory type of complex object.
 * @returns {PropertyDecorator} ?
 * ```
 * @ComplexFactory(defaultType, factoryFunction)
 * propertyName: Type1 | Type2;
 * ```
 * @private
 */
function ComplexFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexFactorySetter({}, key, type),
            get: complexFactoryGetter({}, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', {}, type);
    };
}
/**
 * Method used to create complex array property. General syntax below.
 *
 * @param  {any} defaultValue - Specifies the default value of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * @returns {PropertyDecorator} ?
 * ```
 * @Collection([], Type);
 * propertyName: Type;
 * ```
 * @private
 */
function Collection(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArraySetter(defaultValue, key, type),
            get: complexArrayGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', defaultValue, type);
    };
}
/**
 * Method used to create complex factory array property. General syntax below.
 *
 * @param  {Function} type - Specifies the class type of complex object.
 * @returns {PropertyCollectionInfo} ?
 * ```
 * @Collection([], Type);
 * propertyName: Type;
 * ```
 * @private
 */
function CollectionFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArrayFactorySetter([], key, type),
            get: complexArrayFactoryGetter([], key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', {}, type);
    };
}
/**
 * Method used to create event property. General syntax below.
 *
 * @returns {PropertyDecorator} ?
 * ```
 * @Event(()=>{return true;})
 * ```
 * @private
 */
function Event() {
    return function (target, key) {
        var eventDescriptor = {
            set: function (newValue) {
                var oldValue = this.properties["" + key];
                if (oldValue !== newValue) {
                    var finalContext = getParentContext(this, key);
                    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(oldValue) === false) {
                        finalContext.context.removeEventListener(finalContext.prefix, oldValue);
                    }
                    finalContext.context.addEventListener(finalContext.prefix, newValue);
                    this.properties["" + key] = newValue;
                }
            },
            get: propertyGetter(undefined, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, eventDescriptor);
        addPropertyCollection(target, key, 'event');
    };
}
/**
 * NotifyPropertyChanges is triggers the call back when the property has been changed.
 *
 * @param {Function} classConstructor ?
 * @returns {void} ?
 * @private
 */
function NotifyPropertyChanges(classConstructor) {
    /** Need to code */
}
/**
 * Method  used to create the builderObject for the target component.
 *
 * @param {BuildInfo} target ?
 * @param {string} key ?
 * @param {string} propertyType ?
 * @param {Object} defaultValue ?
 * @param {Function} type ?
 * @returns {void} ?
 * @private
 */
function addPropertyCollection(target, key, propertyType, defaultValue, type) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(target.propList)) {
        target.propList = {
            props: [],
            complexProps: [],
            colProps: [],
            events: [],
            propNames: [],
            complexPropNames: [],
            colPropNames: [],
            eventNames: []
        };
    }
    target.propList[propertyType + 's'].push({
        propertyName: key,
        defaultValue: defaultValue,
        type: type
    });
    target.propList[propertyType + 'Names'].push(key);
}
/**
 * Returns an object containing the builder properties
 *
 * @param {Function} component ?
 * @returns {Object} ?
 * @private
 */
function getBuilderProperties(component) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(component.prototype.builderObject)) {
        component.prototype.builderObject = {
            properties: {}, propCollections: [], add: function () {
                this.isPropertyArray = true;
                this.propCollections.push((0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)({}, this.properties, {}));
            }
        };
        var rex = /complex/;
        for (var _i = 0, _a = Object.keys(component.prototype.propList); _i < _a.length; _i++) {
            var key = _a[_i];
            var _loop_1 = function (prop) {
                if (rex.test(key)) {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        var childType = {};
                        (0,_util__WEBPACK_IMPORTED_MODULE_0__.merge)(childType, getBuilderProperties(prop.type));
                        value(childType);
                        var tempValue;
                        if (!childType.isPropertyArray) {
                            tempValue = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)({}, childType.properties, {});
                        }
                        else {
                            tempValue = childType.propCollections;
                        }
                        this.properties[prop.propertyName] = tempValue;
                        childType.properties = {};
                        childType.propCollections = [];
                        childType.isPropertyArray = false;
                        return this;
                    };
                }
                else {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        this.properties[prop.propertyName] = value;
                        return this;
                    };
                }
            };
            for (var _b = 0, _c = component.prototype.propList["" + key]; _b < _c.length; _b++) {
                var prop = _c[_b];
                _loop_1(prop);
            }
        }
    }
    return component.prototype.builderObject;
}
/**
 * Method used to create builder for the components
 *
 * @param {any} component -specifies the target component for which builder to be created.
 * @returns {Object} ?
 * @private
 */
function CreateBuilder(component) {
    var builderFunction = function (element) {
        this.element = element;
        return this;
    };
    var instanceFunction = function (element) {
        if (!Object.prototype.hasOwnProperty.call(builderFunction, 'create')) {
            builderFunction.prototype = getBuilderProperties(component);
            builderFunction.prototype.create = function () {
                var temp = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)({}, {}, this.properties);
                this.properties = {};
                return new component(temp, this.element);
            };
        }
        return new builderFunction(element);
    };
    return instanceFunction;
}
/**
 * Returns parent options for the object
 *
 * @param {Object} context ?
 * @param {string} prefix ?
 * @returns {ParentOption} ?
 * @private
 */
function getParentContext(context, prefix) {
    if (Object.prototype.hasOwnProperty.call(context, 'parentObj') === false) {
        return { context: context, prefix: prefix };
    }
    else {
        var curText = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('propName', context);
        if (curText) {
            prefix = curText + '-' + prefix;
        }
        return getParentContext((0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)('parentObj', context), prefix);
    }
}


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/observer.js":
/*!************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/observer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observer: () => (/* binding */ Observer)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */

var Observer = /** @__PURE__ @class */ (function () {
    function Observer(context) {
        this.ranArray = [];
        this.boundedEvents = {};
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(context)) {
            return;
        }
        this.context = context;
    }
    /**
     * To attach handler for given property in current context.
     *
     * @param {string} property - specifies the name of the event.
     * @param {Function} handler - Specifies the handler function to be called while event notified.
     * @param {Object} context - Specifies the context binded to the handler.
     * @param {string} id - specifies the random generated id.
     * @returns {void}
     */
    Observer.prototype.on = function (property, handler, context, id) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(handler)) {
            return;
        }
        var cntxt = context || this.context;
        if (this.notExist(property)) {
            this.boundedEvents["" + property] = [{ handler: handler, context: cntxt, id: id }];
            return;
        }
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(id)) {
            if (this.ranArray.indexOf(id) === -1) {
                this.ranArray.push(id);
                this.boundedEvents["" + property].push({ handler: handler, context: cntxt, id: id });
            }
        }
        else if (!this.isHandlerPresent(this.boundedEvents["" + property], handler)) {
            this.boundedEvents["" + property].push({ handler: handler, context: cntxt });
        }
    };
    /**
     * To remove handlers from a event attached using on() function.
     *
     * @param {string} property - specifies the name of the event.
     * @param {Function} handler - Optional argument specifies the handler function to be called while event notified.
     * @param {string} id - specifies the random generated id.
     * @returns {void} ?
     */
    Observer.prototype.off = function (property, handler, id) {
        if (this.notExist(property)) {
            return;
        }
        var curObject = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(property, this.boundedEvents);
        if (handler) {
            for (var i = 0; i < curObject.length; i++) {
                if (id) {
                    if (curObject[parseInt(i.toString(), 10)].id === id) {
                        curObject.splice(i, 1);
                        var indexLocation = this.ranArray.indexOf(id);
                        if (indexLocation !== -1) {
                            this.ranArray.splice(indexLocation, 1);
                        }
                        break;
                    }
                }
                else if (handler === curObject[parseInt(i.toString(), 10)].handler) {
                    curObject.splice(i, 1);
                    break;
                }
            }
        }
        else {
            delete this.boundedEvents["" + property];
        }
    };
    /**
     * To notify the handlers in the specified event.
     *
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} argument - Additional parameters to pass while calling the handler.
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it was failure to call.
     * @returns {void} ?
     */
    Observer.prototype.notify = function (property, argument, successHandler, errorHandler) {
        if (this.notExist(property)) {
            if (successHandler) {
                successHandler.call(this, argument);
            }
            return;
        }
        if (argument) {
            argument.name = property;
        }
        var blazor = 'Blazor';
        var curObject = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getValue)(property, this.boundedEvents).slice(0);
        if (window["" + blazor]) {
            return this.blazorCallback(curObject, argument, successHandler, errorHandler, 0);
        }
        else {
            for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
                var cur = curObject_1[_i];
                cur.handler.call(cur.context, argument);
            }
            if (successHandler) {
                successHandler.call(this, argument);
            }
        }
    };
    Observer.prototype.blazorCallback = function (objs, argument, successHandler, errorHandler, index) {
        var _this = this;
        var isTrigger = index === objs.length - 1;
        if (index < objs.length) {
            var obj_1 = objs[parseInt(index.toString(), 10)];
            var promise = obj_1.handler.call(obj_1.context, argument);
            if (promise && typeof promise.then === 'function') {
                if (!successHandler) {
                    return promise;
                }
                promise.then(function (data) {
                    data = typeof data === 'string' && _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data;
                    (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(argument, argument, data, true);
                    if (successHandler && isTrigger) {
                        successHandler.call(obj_1.context, argument);
                    }
                    else {
                        return _this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
                    }
                }).catch(function (data) {
                    if (errorHandler) {
                        errorHandler.call(obj_1.context, typeof data === 'string' &&
                            _this.isJson(data) ? JSON.parse(data, _this.dateReviver) : data);
                    }
                });
            }
            else if (successHandler && isTrigger) {
                successHandler.call(obj_1.context, argument);
            }
            else {
                return this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
            }
        }
    };
    Observer.prototype.dateReviver = function (key, value) {
        var dPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
        if (_util__WEBPACK_IMPORTED_MODULE_0__.isBlazor && typeof value === 'string' && value.match(dPattern) !== null) {
            return (new Date(value));
        }
        return (value);
    };
    Observer.prototype.isJson = function (value) {
        try {
            JSON.parse(value);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    /**
     * To destroy handlers in the event
     *
     * @returns {void} ?
     */
    Observer.prototype.destroy = function () {
        this.boundedEvents = this.context = undefined;
    };
    /**
     * To remove internationalization events
     *
     * @returns {void} ?
     */
    Observer.prototype.offIntlEvents = function () {
        var eventsArr = this.boundedEvents['notifyExternalChange'];
        if (eventsArr) {
            for (var i = 0; i < eventsArr.length; i++) {
                var curContext = eventsArr[parseInt(i.toString(), 10)].context;
                if (curContext && curContext.detectFunction && curContext.randomId && !curContext.isRendered) {
                    this.off('notifyExternalChange', curContext.detectFunction, curContext.randomId);
                    i--;
                }
            }
            if (!this.boundedEvents['notifyExternalChange'].length) {
                delete this.boundedEvents['notifyExternalChange'];
            }
        }
    };
    /**
     * Returns if the property exists.
     *
     * @param {string} prop ?
     * @returns {boolean} ?
     */
    Observer.prototype.notExist = function (prop) {
        return Object.prototype.hasOwnProperty.call(this.boundedEvents, prop) === false || this.boundedEvents["" + prop].length <= 0;
    };
    /**
     * Returns if the handler is present.
     *
     * @param {BoundOptions[]} boundedEvents ?
     * @param {Function} handler ?
     * @returns {boolean} ?
     */
    Observer.prototype.isHandlerPresent = function (boundedEvents, handler) {
        for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
            var cur = boundedEvents_1[_i];
            if (cur.handler === handler) {
                return true;
            }
        }
        return false;
    };
    return Observer;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/sanitize-helper.js":
/*!*******************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/sanitize-helper.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SanitizeHtmlHelper: () => (/* binding */ SanitizeHtmlHelper)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/**
 * SanitizeHtmlHelper for sanitize the value.
 */


var removeTags = [
    'script',
    'style',
    'iframe[src]',
    'link[href*="javascript:"]',
    'object[type="text/x-scriptlet"]',
    'object[data^="data:text/html;base64"]',
    'img[src^="data:text/html;base64"]',
    '[src^="javascript:"]',
    '[dynsrc^="javascript:"]',
    '[lowsrc^="javascript:"]',
    '[type^="application/x-shockwave-flash"]'
];
var removeAttrs = [
    { attribute: 'href', selector: '[href*="javascript:"]' },
    { attribute: 'background', selector: '[background^="javascript:"]' },
    { attribute: 'style', selector: '[style*="javascript:"]' },
    { attribute: 'style', selector: '[style*="expression("]' },
    { attribute: 'href', selector: 'a[href^="data:text/html;base64"]' }
];
var jsEvents = ['onchange',
    'onclick',
    'onmouseover',
    'onmouseout',
    'onkeydown',
    'onload',
    'onerror',
    'onblur',
    'onfocus',
    'onbeforeload',
    'onbeforeunload',
    'onkeyup',
    'onsubmit',
    'onafterprint',
    'onbeforeonload',
    'onbeforeprint',
    'oncanplay',
    'oncanplaythrough',
    'oncontextmenu',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'ondurationchange',
    'onemptied',
    'onended',
    'onformchange',
    'onforminput',
    'onhaschange',
    'oninput',
    'oninvalid',
    'onkeypress',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onmessage',
    'onmousedown',
    'onmousemove',
    'onmouseup',
    'onmousewheel',
    'onoffline',
    'onoine',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpause',
    'onplay',
    'onplaying',
    'onpopstate',
    'onprogress',
    'onratechange',
    'onreadystatechange',
    'onredo',
    'onresize',
    'onscroll',
    'onseeked',
    'onseeking',
    'onselect',
    'onstalled',
    'onstorage',
    'onsuspend',
    'ontimeupdate',
    'onundo',
    'onunload',
    'onvolumechange',
    'onwaiting',
    'onmouseenter',
    'onmouseleave',
    'onstart',
    'onpropertychange',
    'oncopy',
    'ontoggle',
    'onpointerout',
    'onpointermove',
    'onpointerleave',
    'onpointerenter',
    'onpointerrawupdate',
    'onpointerover',
    'onbeforecopy',
    'onbeforecut',
    'onbeforeinput'
];
var SanitizeHtmlHelper = /** @__PURE__ @class */ (function () {
    function SanitizeHtmlHelper() {
    }
    SanitizeHtmlHelper.beforeSanitize = function () {
        return {
            selectors: {
                tags: removeTags,
                attributes: removeAttrs
            }
        };
    };
    SanitizeHtmlHelper.sanitize = function (value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(value)) {
            return value;
        }
        var item = this.beforeSanitize();
        var output = this.serializeValue(item, value);
        return output;
    };
    SanitizeHtmlHelper.serializeValue = function (item, value) {
        this.removeAttrs = item.selectors.attributes;
        this.removeTags = item.selectors.tags;
        this.wrapElement = document.createElement('div');
        this.wrapElement.innerHTML = value;
        this.removeXssTags();
        this.removeJsEvents();
        this.removeXssAttrs();
        var tempEleValue = this.wrapElement.innerHTML;
        this.removeElement();
        this.wrapElement = null;
        return tempEleValue.replace(/&amp;/g, '&');
    };
    SanitizeHtmlHelper.removeElement = function () {
        // Removes an element's attibute to avoid html tag validation
        var nodes = this.wrapElement.children;
        for (var j = 0; j < nodes.length; j++) {
            var attribute = nodes[parseInt(j.toString(), 10)].attributes;
            for (var i = 0; i < attribute.length; i++) {
                this.wrapElement.children[parseInt(j.toString(), 10)].removeAttribute(attribute[parseInt(i.toString(), 10)].localName);
            }
        }
    };
    SanitizeHtmlHelper.removeXssTags = function () {
        var elements = this.wrapElement.querySelectorAll(this.removeTags.join(','));
        if (elements.length > 0) {
            elements.forEach(function (element) {
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.detach)(element);
            });
        }
        else {
            return;
        }
    };
    SanitizeHtmlHelper.removeJsEvents = function () {
        var elements = this.wrapElement.querySelectorAll('[' + jsEvents.join('],[') + ']');
        if (elements.length > 0) {
            elements.forEach(function (element) {
                jsEvents.forEach(function (attr) {
                    if (element.hasAttribute(attr)) {
                        element.removeAttribute(attr);
                    }
                });
            });
        }
        else {
            return;
        }
    };
    SanitizeHtmlHelper.removeXssAttrs = function () {
        var _this = this;
        this.removeAttrs.forEach(function (item, index) {
            var elements = _this.wrapElement.querySelectorAll(item.selector);
            if (elements.length > 0) {
                elements.forEach(function (element) {
                    element.removeAttribute(item.attribute);
                });
            }
        });
    };
    return SanitizeHtmlHelper;
}());



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/template-engine.js":
/*!*******************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/template-engine.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blazorTemplates: () => (/* binding */ blazorTemplates),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   getRandomId: () => (/* binding */ getRandomId),
/* harmony export */   getTemplateEngine: () => (/* binding */ getTemplateEngine),
/* harmony export */   initializeCSPTemplate: () => (/* binding */ initializeCSPTemplate),
/* harmony export */   resetBlazorTemplate: () => (/* binding */ resetBlazorTemplate),
/* harmony export */   setTemplateEngine: () => (/* binding */ setTemplateEngine),
/* harmony export */   updateBlazorTemplate: () => (/* binding */ updateBlazorTemplate)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./ej2-resources/26.1.38/scripts/ej2-base/template.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
/**
 * Template Engine Bridge
 */



var HAS_ROW = /^[\n\r.]+<tr|^<tr/;
var HAS_SVG = /^[\n\r.]+<svg|^<path|^<g/;
var blazorTemplates = {};
/**
 *
 * @returns {string} ?
 */
function getRandomId() {
    return '-' + Math.random().toString(36).substr(2, 5);
}
/**
 * Compile the template string into template function.
 *
 * @param {string | Function} templateString - The template string which is going to convert.
 * @param {Object} helper - Helper functions as an object.
 * @param {boolean} ignorePrefix ?
 * @returns {NodeList} ?
 * @private
 */
function compile(templateString, helper, ignorePrefix) {
    var compiler = engineObj.compile(templateString, helper, ignorePrefix);
    return function (data, component, propName, templateId, isStringTemplate, index, element, root) {
        var result = compiler(data, component, propName, element, root);
        var blazorTemplateId = 'BlazorTemplateId';
        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)() && !isStringTemplate) {
            var randomId = getRandomId();
            var blazorId = templateId + randomId;
            if (!blazorTemplates["" + templateId]) {
                blazorTemplates["" + templateId] = [];
            }
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(index)) {
                var keys = Object.keys(blazorTemplates["" + templateId][parseInt(index.toString(), 10)]);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    if (key !== blazorTemplateId && data["" + key]) {
                        blazorTemplates["" + templateId][parseInt(index.toString(), 10)]["" + key] = data["" + key];
                    }
                    if (key === blazorTemplateId) {
                        blazorId = blazorTemplates["" + templateId][parseInt(index.toString(), 10)]["" + key];
                    }
                }
            }
            else {
                data["" + blazorTemplateId] = blazorId;
                blazorTemplates["" + templateId].push(data);
            }
            return propName === 'rowTemplate' ? [(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)('tr', { id: blazorId, className: 'e-blazor-template' })] :
                [(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', { id: blazorId, className: 'e-blazor-template' })];
        }
        if (typeof result === 'string') {
            if (HAS_SVG.test(result)) {
                var ele = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)('svg', { innerHTML: result });
                return ele.childNodes;
            }
            else {
                var ele = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElement)((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
                return ele.childNodes;
            }
        }
        else {
            return result;
        }
    };
}
/**
 *
 * @param {string} templateId ?
 * @param {string} templateName ?
 * @param {string} comp ?
 * @param {boolean} isEmpty ?
 * @param {Function} callBack ?
 * @returns {void} ?
 */
function updateBlazorTemplate(templateId, templateName, comp, isEmpty, callBack) {
    if ((0,_util__WEBPACK_IMPORTED_MODULE_2__.isBlazor)()) {
        var ejsIntrop = 'sfBlazor';
        window["" + ejsIntrop].updateTemplate(templateName, blazorTemplates["" + templateId], templateId, comp, callBack);
        if (isEmpty !== false) {
            blazorTemplates["" + templateId] = [];
        }
    }
}
/**
 *
 * @param {string} templateId ?
 * @param {string} templateName ?
 * @param {number} index ?
 * @returns {void} ?
 */
function resetBlazorTemplate(templateId, templateName, index) {
    var templateDiv = document.getElementById(templateId);
    if (templateDiv) {
        var innerTemplates = templateDiv.getElementsByClassName('blazor-inner-template');
        for (var i = 0; i < innerTemplates.length; i++) {
            var tempId = ' ';
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(index)) {
                tempId = innerTemplates[parseInt(index.toString(), 10)].getAttribute('data-templateId');
            }
            else {
                tempId = innerTemplates[parseInt(i.toString(), 10)].getAttribute('data-templateId');
            }
            var tempElement = document.getElementById(tempId);
            if (tempElement) {
                var length_1 = tempElement.childNodes.length;
                for (var j = 0; j < length_1; j++) {
                    if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(index)) {
                        innerTemplates[parseInt(index.toString(), 10)].appendChild(tempElement.childNodes[0]);
                        i = innerTemplates.length;
                    }
                    else {
                        innerTemplates[parseInt(i.toString(), 10)].appendChild(tempElement.childNodes[0]);
                    }
                }
            }
        }
    }
}
/**
 * Set your custom template engine for template rendering.
 *
 * @param  {ITemplateEngine} classObj - Class object for custom template.
 * @returns {void} ?
 * @private
 */
function setTemplateEngine(classObj) {
    engineObj.compile = classObj.compile;
}
/**
 * Get current template engine for template rendering
 *
 * @returns {string} ?
 * @private
 */
function getTemplateEngine() {
    return engineObj.compile;
}
/**
 * Set the current template function to support Content Security Policy.
 *
 * @param {Function} template - The template function that is going to render.
 * @param {any} helper - The data utilized by the template from the helper.
 * @returns {Function} ?
 * @private
 */
function initializeCSPTemplate(template, helper) {
    var boundFunc;
    template.prototype.CSPTemplate = true;
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(helper)) {
        boundFunc = template.bind(helper);
        boundFunc.prototype = Object.create(template.prototype);
    }
    else {
        boundFunc = template;
    }
    return boundFunc;
}
//Default Engine Class
var Engine = /** @__PURE__ @class */ (function () {
    function Engine() {
    }
    Engine.prototype.compile = function (templateString, helper, ignorePrefix) {
        if (helper === void 0) { helper = {}; }
        return (0,_template__WEBPACK_IMPORTED_MODULE_0__.compile)(templateString, helper);
    };
    return Engine;
}());
var engineObj = { compile: new Engine().compile };


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/template.js":
/*!************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/template.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   expression: () => (/* binding */ expression)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Template Engine
 */
var LINES = new RegExp('\\n|\\r|\\s\\s+', 'g');
var QUOTES = new RegExp(/'|"/g);
var IF_STMT = new RegExp('if ?\\(');
var ELSEIF_STMT = new RegExp('else if ?\\(');
var ELSE_STMT = new RegExp('else');
var FOR_STMT = new RegExp('for ?\\(');
var IF_OR_FOR = new RegExp('(/if|/for)');
var CALL_FUNCTION = new RegExp('\\((.*)\\)', '');
var NOT_NUMBER = new RegExp('^[0-9]+$', 'g');
var WORD = new RegExp('[\\w"\'.\\s+]+', 'g');
var DBL_QUOTED_STR = new RegExp('"(.*?)"', 'g');
var WORDIF = new RegExp('[\\w"\'@#$.\\s-+]+', 'g');
var exp = new RegExp('\\${([^}]*)}', 'g');
// let cachedTemplate: Object = {};
var ARR_OBJ = /^\..*/gm;
var SINGLE_SLASH = /\\/gi;
var DOUBLE_SLASH = /\\\\/gi;
var WORDFUNC = new RegExp('[\\w"\'@#$.\\s+]+', 'g');
var WINDOWFUNC = /\window\./gm;
/**
 * The function to set regular expression for template expression string.
 *
 * @param {RegExp} value - Value expression.
 * @returns {RegExp} ?
 * @private
 */
function expression(value) {
    if (value) {
        exp = value;
    }
    return exp;
}
// /**
//  * To render the template string from the given data.
//  * @param  {string} template - String Template.
//  * @param  {Object[]|JSON} data - DataSource for the template.
//  * @param  {Object} helper? - custom helper object.
//  */
// export function template(template: string, data: JSON, helper?: Object): string {
//     let hash: string = hashCode(template);
//     let tmpl: Function;
//     if (!cachedTemplate[hash]) {
//         tmpl = cachedTemplate[hash] = compile(template, helper);
//     } else {
//         tmpl = cachedTemplate[hash];
//     }
//     return tmpl(data);
// }
/**
 * Compile the template string into template function.
 *
 * @param {string | Function} template - The template string which is going to convert.
 * @param {Object} helper - Helper functions as an object.
 * @param {boolean} ignorePrefix ?
 * @returns {string} ?
 * @private
 */
function compile(template, helper, ignorePrefix) {
    if (typeof template === 'function') {
        return template;
    }
    else {
        var argName = 'data';
        var evalExpResult = evalExp(template, argName, helper, ignorePrefix);
        var condtion = "var valueRegEx = (/value=\\'([A-Za-z0-9 _]*)((.)([\\w)(!-;?-\u25A0\\s]+)['])/g);\n        var hrefRegex = (/(?:href)([\\s='\"./]+)([\\w-./?=&\\\\#\"]+)((.)([\\w)(!-;/?-\u25A0\\s]+)['])/g);\n        if(str.match(valueRegEx)){\n            var check = str.match(valueRegEx);\n            var str1 = str;\n            for (var i=0; i < check.length; i++) {\n                var check1 = str.match(valueRegEx)[i].split('value=')[1];\n                var change = check1.match(/^'/) !== null ? check1.replace(/^'/, '\"') : check1;\n                change =change.match(/.$/)[0] === '\\'' ? change.replace(/.$/,'\"') : change;\n                str1 = str1.replace(check1, change);\n            }\n            str = str.replace(str, str1);\n        }\n        else if (str.match(/(?:href='')/) === null) {\n            if(str.match(hrefRegex)) {\n                var check = str.match(hrefRegex);\n                var str1 = str;\n                for (var i=0; i < check.length; i++) {\n                    var check1 = str.match(hrefRegex)[i].split('href=')[1];\n                    if (check1) {\n                        var change = check1.match(/^'/) !== null ? check1.replace(/^'/, '\"') : check1;\n                        change =change.match(/.$/)[0] === '\\'' ? change.replace(/.$/,'\"') : change;\n                        str1 = str1.replace(check1, change);\n                    }\n                }\n                str = str.replace(str, str1);\n            }\n        }\n        ";
        var fnCode = 'var str="' + evalExpResult + '";' + condtion + ' return str;';
        var fn = new Function(argName, fnCode);
        return fn.bind(helper);
    }
}
/** function used to evaluate the function expression
 *
 * @param {string} str ?
 * @param {string} nameSpace ?
 * @param {Object} helper ?
 * @param {boolean} ignorePrefix ?
 * @returns {string} ?
 */
function evalExp(str, nameSpace, helper, ignorePrefix) {
    var varCOunt = 0;
    /**
     * Variable containing Local Keys
     */
    var localKeys = [];
    var isClass = str.match(/class="([^"]+|)\s{2}/g);
    var singleSpace = '';
    if (isClass) {
        isClass.forEach(function (value) {
            singleSpace = value.replace(/\s\s+/g, ' ');
            str = str.replace(value, singleSpace);
        });
    }
    if (exp.test(str)) {
        var insideBraces = false;
        var outputString = '';
        for (var i = 0; i < str.length; i++) {
            if (str[i + ''] === '$' && str[i + 1] === '{') {
                insideBraces = true;
            }
            else if (str[i + ''] === '}') {
                insideBraces = false;
            }
            outputString += (str[i + ''] === '"' && !insideBraces) ? '\\"' : str[i + ''];
        }
        str = outputString;
    }
    else {
        str = str.replace(/\\?"/g, '\\"');
    }
    return str.replace(LINES, '').replace(DBL_QUOTED_STR, '\'$1\'').replace(exp, function (match, cnt, offset, matchStr) {
        var SPECIAL_CHAR = /@|#|\$/gm;
        var matches = cnt.match(CALL_FUNCTION);
        // matches to detect any function calls
        if (matches) {
            var rlStr = matches[1];
            if (ELSEIF_STMT.test(cnt)) {
                //handling else-if condition
                cnt = '";} ' + cnt.replace(matches[1], rlStr.replace(WORD, function (str) {
                    str = str.trim();
                    return addNameSpace(str, !(QUOTES.test(str)) && (localKeys.indexOf(str) === -1), nameSpace, localKeys, ignorePrefix);
                })) + '{ \n str = str + "';
            }
            else if (IF_STMT.test(cnt)) {
                //handling if condition
                cnt = '"; ' + cnt.replace(matches[1], rlStr.replace(WORDIF, function (strs) {
                    return HandleSpecialCharArrObj(strs, nameSpace, localKeys, ignorePrefix);
                })) + '{ \n str = str + "';
            }
            else if (FOR_STMT.test(cnt)) {
                //handling for condition
                var rlStr_1 = matches[1].split(' of ');
                // replace for each into actual JavaScript
                cnt = '"; ' + cnt.replace(matches[1], function (mtc) {
                    localKeys.push(rlStr_1[0]);
                    localKeys.push(rlStr_1[0] + 'Index');
                    varCOunt = varCOunt + 1;
                    return 'var i' + varCOunt + '=0; i' + varCOunt + ' < ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys, ignorePrefix) + '.length; i' + varCOunt + '++';
                }) + '{ \n ' + rlStr_1[0] + '= ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys, ignorePrefix)
                    + '[i' + varCOunt + ']; \n var ' + rlStr_1[0] + 'Index=i' + varCOunt + '; \n str = str + "';
            }
            else {
                //helper function handling
                var fnStr = cnt.split('(');
                var fNameSpace = (helper && Object.prototype.hasOwnProperty.call(helper, fnStr[0]) ? 'this.' : 'global');
                fNameSpace = (/\./.test(fnStr[0]) ? '' : fNameSpace);
                var ftArray = matches[1].split(',');
                if (matches[1].length !== 0 && !(/data/).test(ftArray[0]) && !(/window./).test(ftArray[0])) {
                    matches[1] = (fNameSpace === 'global' ? nameSpace + '.' + matches[1] : matches[1]);
                }
                var splRegexp = /@|\$|#/gm;
                var arrObj = /\]\./gm;
                if (WINDOWFUNC.test(cnt) && arrObj.test(cnt) || splRegexp.test(cnt)) {
                    var splArrRegexp = /@|\$|#|\]\./gm;
                    if (splArrRegexp.test(cnt)) {
                        cnt = '"+ ' + (fNameSpace === 'global' ? '' : fNameSpace) + cnt.replace(matches[1], rlStr.replace(WORDFUNC, function (strs) {
                            return HandleSpecialCharArrObj(strs, nameSpace, localKeys, ignorePrefix);
                        })) + '+ "';
                    }
                }
                else {
                    cnt = '" + ' + (fNameSpace === 'global' ? '' : fNameSpace) +
                        cnt.replace(rlStr, addNameSpace(matches[1].replace(/,( |)data.|,/gi, ',' + nameSpace + '.').replace(/,( |)data.window/gi, ',window'), (fNameSpace === 'global' ? false : true), nameSpace, localKeys, ignorePrefix)) +
                        '+"';
                }
            }
        }
        else if (ELSE_STMT.test(cnt)) {
            // handling else condition
            cnt = '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "');
        }
        else if (cnt.match(IF_OR_FOR)) {
            // close condition
            cnt = cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "');
        }
        else if (SPECIAL_CHAR.test(cnt)) {
            // template string with double slash with special character
            if (cnt.match(SINGLE_SLASH)) {
                cnt = SlashReplace(cnt);
            }
            cnt = '"+' + NameSpaceForspecialChar(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '"]+"';
        }
        else {
            // template string with double slash
            if (cnt.match(SINGLE_SLASH)) {
                cnt = SlashReplace(cnt);
                cnt = '"+' + NameSpaceForspecialChar(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '"]+"';
            }
            else {
                // evaluate normal expression
                cnt = cnt !== '' ? '"+' + addNameSpace(cnt.replace(/,/gi, '+' + nameSpace + '.'), (localKeys.indexOf(cnt) === -1), nameSpace, localKeys, ignorePrefix) + '+"' : '${}';
            }
        }
        return cnt;
    });
}
/**
 *
 * @param {string} str ?
 * @param {boolean} addNS ?
 * @param {string} nameSpace ?
 * @param {string[]} ignoreList ?
 * @param {boolean} ignorePrefix ?
 * @returns {string} ?
 */
function addNameSpace(str, addNS, nameSpace, ignoreList, ignorePrefix) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1 && !ignorePrefix && str !== 'true' && str !== 'false') ? nameSpace + '.' + str : str);
}
/**
 *
 * @param {string} str ?
 * @param {boolean} addNS ?
 * @param {string} nameSpace ?
 * @param {string[]} ignoreList ?
 * @returns {string} ?
 */
function NameSpaceArrObj(str, addNS, nameSpace, ignoreList) {
    var arrObjReg = /^\..*/gm;
    return ((addNS && !(NOT_NUMBER.test(str)) &&
        ignoreList.indexOf(str.split('.')[0]) === -1 && !(arrObjReg.test(str))) ? nameSpace + '.' + str : str);
}
// // Create hashCode for template string to storeCached function
// function hashCode(str: string): string {
//     return str.split('').reduce((a: number, b: string) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0).toString();
// }
/**
 *
 * @param {string} str ?
 * @param {boolean} addNS ?
 * @param {string} nameSpace ?
 * @param {string[]} ignoreList ?
 * @returns {string} ?
 */
function NameSpaceForspecialChar(str, addNS, nameSpace, ignoreList) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1) ? nameSpace + '["' + str : str);
}
/**
 * Replace double slashes to single slash.
 *
 * @param {string} tempStr ?
 * @returns {any} ?
 */
function SlashReplace(tempStr) {
    var double = '\\\\';
    if (tempStr.match(DOUBLE_SLASH)) {
        return tempStr;
    }
    else {
        return tempStr.replace(SINGLE_SLASH, double);
    }
}
/**
 *
 * @param {string} str ?
 * @param {string} nameSpaceNew ?
 * @param {string[]} keys ?
 * @param {boolean} ignorePrefix ?
 * @returns {string} ?
 */
function HandleSpecialCharArrObj(str, nameSpaceNew, keys, ignorePrefix) {
    str = str.trim();
    var windowFunc = /\window\./gm;
    if (!windowFunc.test(str)) {
        var quotes = /'|"/gm;
        var splRegexp = /@|\$|#/gm;
        if (splRegexp.test(str)) {
            str = NameSpaceForspecialChar(str, (keys.indexOf(str) === -1), nameSpaceNew, keys) + '"]';
        }
        if (ARR_OBJ.test(str)) {
            return NameSpaceArrObj(str, !(quotes.test(str)) && (keys.indexOf(str) === -1), nameSpaceNew, keys);
        }
        else {
            return addNameSpace(str, !(quotes.test(str)) && (keys.indexOf(str) === -1), nameSpaceNew, keys, ignorePrefix);
        }
    }
    else {
        return str;
    }
}


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/touch.js":
/*!*********************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/touch.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwipeSettings: () => (/* binding */ SwipeSettings),
/* harmony export */   Touch: () => (/* binding */ Touch)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify-property-change */ "./ej2-resources/26.1.38/scripts/ej2-base/notify-property-change.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./ej2-resources/26.1.38/scripts/ej2-base/browser.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./ej2-resources/26.1.38/scripts/ej2-base/base.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-property */ "./ej2-resources/26.1.38/scripts/ej2-base/child-property.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-handler */ "./ej2-resources/26.1.38/scripts/ej2-base/event-handler.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-explicit-any */






/**
 * SwipeSettings is a framework module that provides support to handle swipe event like swipe up, swipe right, etc..,
 */
var SwipeSettings = /** @__PURE__ @class */ (function (_super) {
    __extends(SwipeSettings, _super);
    function SwipeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_1__.Property)(50)
    ], SwipeSettings.prototype, "swipeThresholdDistance", void 0);
    return SwipeSettings;
}(_child_property__WEBPACK_IMPORTED_MODULE_4__.ChildProperty));

var swipeRegex = /(Up|Down)/;
/**
 * Touch class provides support to handle the touch event like tap, double tap, tap hold, etc..,
 * ```typescript
 *    let node: HTMLElement;
 * let touchObj: Touch = new Touch({
 *    element: node,
 *    tap: function (e) {
 *        // tap handler function code
 *    }
 *    tapHold: function (e) {
 *        // tap hold handler function code
 *    }
 *    scroll: function (e) {
 *        // scroll handler function code
 *    }
 *    swipe: function (e) {
 *        // swipe handler function code
 *    }
 * });
 * ```
 */
var Touch = /** @__PURE__ @class */ (function (_super) {
    __extends(Touch, _super);
    /* End-Properties */
    function Touch(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.touchAction = true;
        _this.tapCount = 0;
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.startEvent = function (evt) {
            if (_this.touchAction === true) {
                var point = _this.updateChangeTouches(evt);
                if (evt.changedTouches !== undefined) {
                    _this.touchAction = false;
                }
                _this.isTouchMoved = false;
                _this.movedDirection = '';
                _this.startPoint = _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
                _this.startEventData = point;
                _this.hScrollLocked = _this.vScrollLocked = false;
                _this.tStampStart = Date.now();
                _this.timeOutTapHold = setTimeout(function () { _this.tapHoldEvent(evt); }, _this.tapHoldThreshold);
                _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.add(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchMoveEvent, _this.moveEvent, _this);
                _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.add(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchEndEvent, _this.endEvent, _this);
                _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.add(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchCancelEvent, _this.cancelEvent, _this);
            }
        };
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.moveEvent = function (evt) {
            var point = _this.updateChangeTouches(evt);
            _this.movedPoint = point;
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            var eScrollArgs = {};
            if (_this.isTouchMoved) {
                clearTimeout(_this.timeOutTapHold);
                _this.calcScrollPoints(evt);
                var scrollArg = {
                    startEvents: _this.startEventData,
                    originalEvent: evt, startX: _this.startPoint.clientX,
                    startY: _this.startPoint.clientY, distanceX: _this.distanceX,
                    distanceY: _this.distanceY, scrollDirection: _this.scrollDirection,
                    velocity: _this.getVelocity(point)
                };
                eScrollArgs = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(eScrollArgs, {}, scrollArg);
                _this.trigger('scroll', eScrollArgs);
                _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            }
        };
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.cancelEvent = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            _this.tapCount = 0;
            _this.swipeFn(evt);
            _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchCancelEvent, _this.cancelEvent);
        };
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.endEvent = function (evt) {
            _this.swipeFn(evt);
            if (!_this.isTouchMoved) {
                if (typeof _this.tap === 'function') {
                    _this.trigger('tap', { originalEvent: evt, tapCount: ++_this.tapCount });
                    _this.timeOutTap = setTimeout(function () {
                        _this.tapCount = 0;
                    }, _this.tapThreshold);
                }
            }
            _this.modeclear();
        };
        /**
         *
         * @param {MouseEventArgs | TouchEventArgs} evt ?
         * @returns {void} ?
         */
        _this.swipeFn = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            var point = _this.updateChangeTouches(evt);
            var diffX = point.clientX - _this.startPoint.clientX;
            var diffY = point.clientY - _this.startPoint.clientY;
            diffX = Math.floor(diffX < 0 ? -1 * diffX : diffX);
            diffY = Math.floor(diffY < 0 ? -1 * diffY : diffX);
            _this.isTouchMoved = diffX > 1 || diffY > 1;
            var isFirefox = (/Firefox/).test(_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.userAgent);
            if (isFirefox && point.clientX === 0 && point.clientY === 0 && evt.type === 'mouseup') {
                _this.isTouchMoved = false;
            }
            _this.endPoint = point;
            _this.calcPoints(evt);
            var swipeArgs = {
                originalEvent: evt,
                startEvents: _this.startEventData,
                startX: _this.startPoint.clientX,
                startY: _this.startPoint.clientY,
                distanceX: _this.distanceX, distanceY: _this.distanceY, swipeDirection: _this.movedDirection,
                velocity: _this.getVelocity(point)
            };
            if (_this.isTouchMoved) {
                var tDistance = _this.swipeSettings.swipeThresholdDistance;
                var eSwipeArgs = (0,_util__WEBPACK_IMPORTED_MODULE_0__.extend)(undefined, _this.defaultArgs, swipeArgs);
                var canTrigger = false;
                var ele = _this.element;
                var scrollBool = _this.isScrollable(ele);
                var moved = swipeRegex.test(_this.movedDirection);
                if ((tDistance < _this.distanceX && !moved) || (tDistance < _this.distanceY && moved)) {
                    if (!scrollBool) {
                        canTrigger = true;
                    }
                    else {
                        canTrigger = _this.checkSwipe(ele, moved);
                    }
                }
                if (canTrigger) {
                    _this.trigger('swipe', eSwipeArgs);
                }
            }
            _this.modeclear();
        };
        _this.modeclear = function () {
            _this.modeClear = setTimeout(function () {
                _this.touchAction = true;
            }, (typeof _this.tap !== 'function' ? 0 : 20));
            _this.lastTapTime = new Date().getTime();
            _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchMoveEvent, _this.moveEvent);
            _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchEndEvent, _this.endEvent);
            _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchCancelEvent, _this.cancelEvent);
        };
        _this.bind();
        return _this;
    }
    // triggers when property changed
    /**
     *
     * @private
     * @param {TouchModel} newProp ?
     * @param {TouchModel} oldProp ?
     * @returns {void} ?
     */
    Touch.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Touch.prototype.bind = function () {
        this.wireEvents();
        if (_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.isIE) {
            this.element.classList.add('e-block-touch');
        }
    };
    /**
     * To destroy the touch instance.
     *
     * @returns {void}
     */
    Touch.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    // Need to changes the event binding once we updated the event handler.
    Touch.prototype.wireEvents = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.add(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchStartEvent, this.startEvent, this);
    };
    Touch.prototype.unwireEvents = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchStartEvent, this.startEvent);
    };
    /**
     * Returns module name as touch
     *
     * @returns {string} ?
     * @private
     */
    Touch.prototype.getModuleName = function () {
        return 'touch';
    };
    /**
     * Returns if the HTML element is Scrollable.
     *
     * @param {HTMLElement} element - HTML Element to check if Scrollable.
     * @returns {boolean} ?
     */
    Touch.prototype.isScrollable = function (element) {
        var eleStyle = getComputedStyle(element);
        var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
        if ((/(auto|scroll)/).test(style)) {
            return true;
        }
        return false;
    };
    /**
     *
     * @param {MouseEventArgs | TouchEventArgs} evt ?
     * @returns {void} ?
     */
    Touch.prototype.tapHoldEvent = function (evt) {
        this.tapCount = 0;
        this.touchAction = true;
        _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchMoveEvent, this.moveEvent);
        _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchEndEvent, this.endEvent);
        var eTapArgs = { originalEvent: evt };
        this.trigger('tapHold', eTapArgs);
        _event_handler__WEBPACK_IMPORTED_MODULE_5__.EventHandler.remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__.Browser.touchCancelEvent, this.cancelEvent);
    };
    Touch.prototype.calcPoints = function (evt) {
        var point = this.updateChangeTouches(evt);
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.startPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.startPoint.clientY)));
        if (this.distanceX > this.distanceY) {
            this.movedDirection = (point.clientX > this.startPoint.clientX) ? 'Right' : 'Left';
        }
        else {
            this.movedDirection = (point.clientY < this.startPoint.clientY) ? 'Up' : 'Down';
        }
    };
    Touch.prototype.calcScrollPoints = function (evt) {
        var point = this.updateChangeTouches(evt);
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY)));
        if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
            this.scrollDirection = (point.clientX > this.lastMovedPoint.clientX) ? 'Right' : 'Left';
            this.hScrollLocked = true;
        }
        else {
            this.scrollDirection = (point.clientY < this.lastMovedPoint.clientY) ? 'Up' : 'Down';
            this.vScrollLocked = true;
        }
    };
    Touch.prototype.getVelocity = function (pnt) {
        var newX = pnt.clientX;
        var newY = pnt.clientY;
        var newT = Date.now();
        var xDist = newX - this.startPoint.clientX;
        var yDist = newY - this.startPoint.clientX;
        var interval = newT - this.tStampStart;
        return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
    };
    Touch.prototype.checkSwipe = function (ele, flag) {
        var keys = ['scroll', 'offset'];
        var temp = flag ? ['Height', 'Top'] : ['Width', 'Left'];
        if ((ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]])) {
            return true;
        }
        return (ele[keys[0] + temp[1]] === 0) ||
            (ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]]);
    };
    Touch.prototype.updateChangeTouches = function (evt) {
        var point = evt.changedTouches && evt.changedTouches.length !== 0 ? evt.changedTouches[0] : evt;
        return point;
    };
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_1__.Event)()
    ], Touch.prototype, "tap", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_1__.Event)()
    ], Touch.prototype, "tapHold", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_1__.Event)()
    ], Touch.prototype, "swipe", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_1__.Event)()
    ], Touch.prototype, "scroll", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_1__.Property)(350)
    ], Touch.prototype, "tapThreshold", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_1__.Property)(750)
    ], Touch.prototype, "tapHoldThreshold", void 0);
    __decorate([
        (0,_notify_property_change__WEBPACK_IMPORTED_MODULE_1__.Complex)({}, SwipeSettings)
    ], Touch.prototype, "swipeSettings", void 0);
    Touch = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_1__.NotifyPropertyChanges
    ], Touch);
    return Touch;
}(_base__WEBPACK_IMPORTED_MODULE_3__.Base));



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/util.js":
/*!********************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/util.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addInstance: () => (/* binding */ addInstance),
/* harmony export */   compareElementParent: () => (/* binding */ compareElementParent),
/* harmony export */   containerObject: () => (/* binding */ containerObject),
/* harmony export */   createInstance: () => (/* binding */ createInstance),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   deleteObject: () => (/* binding */ deleteObject),
/* harmony export */   disableBlazorMode: () => (/* binding */ disableBlazorMode),
/* harmony export */   enableBlazorMode: () => (/* binding */ enableBlazorMode),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   formatUnit: () => (/* binding */ formatUnit),
/* harmony export */   getElement: () => (/* binding */ getElement),
/* harmony export */   getEnumValue: () => (/* binding */ getEnumValue),
/* harmony export */   getInstance: () => (/* binding */ getInstance),
/* harmony export */   getUniqueID: () => (/* binding */ getUniqueID),
/* harmony export */   getValue: () => (/* binding */ getValue),
/* harmony export */   isBlazor: () => (/* binding */ isBlazor),
/* harmony export */   isNullOrUndefined: () => (/* binding */ isNullOrUndefined),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isObjectArray: () => (/* binding */ isObjectArray),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   print: () => (/* binding */ print),
/* harmony export */   queryParams: () => (/* binding */ queryParams),
/* harmony export */   setImmediate: () => (/* binding */ setImmediate),
/* harmony export */   setValue: () => (/* binding */ setValue),
/* harmony export */   throwError: () => (/* binding */ throwError),
/* harmony export */   uniqueID: () => (/* binding */ uniqueID)
/* harmony export */ });
var instances = 'ej2_instances';
var uid = 0;
var isBlazorPlatform = false;
/**
 * Function to check whether the platform is blazor or not.
 *
 * @returns {void} result
 * @private
 */
function disableBlazorMode() {
    isBlazorPlatform = false;
}
/**
 * Create Instance from constructor function with desired parameters.
 *
 * @param {Function} classFunction - Class function to which need to create instance
 * @param {any[]} params - Parameters need to passed while creating instance
 * @returns {any} ?
 * @private
 */
function createInstance(classFunction, params) {
    var arrayParam = params;
    arrayParam.unshift(undefined);
    return new (Function.prototype.bind.apply(classFunction, arrayParam));
}
/**
 * To run a callback function immediately after the browser has completed other operations.
 *
 * @param {Function} handler - callback function to be triggered.
 * @returns {Function} ?
 * @private
 */
function setImmediate(handler) {
    var unbind;
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    intCrypto.getRandomValues(num);
    var secret = 'ej2' + combineArray(num);
    var messageHandler = function (event) {
        if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
            handler();
            unbind();
        }
    };
    window.addEventListener('message', messageHandler, false);
    window.postMessage(secret, '*');
    return unbind = function () {
        window.removeEventListener('message', messageHandler);
        handler = messageHandler = secret = undefined;
    };
}
/**
 * To get nameSpace value from the desired object.
 *
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} obj - Object to get the inner object value.
 * @returns {any} ?
 * @private
 */
function getValue(nameSpace, obj) {
    var value = obj;
    var splits = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    for (var i = 0; i < splits.length && !isUndefined(value); i++) {
        value = value[splits[parseInt(i.toString(), 10)]];
    }
    return value;
}
/**
 * To set value for the nameSpace in desired object.
 *
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} value - Value that you need to set.
 * @param {any} obj - Object to get the inner object value.
 * @returns {any} ?
 * @private
 */
function setValue(nameSpace, value, obj) {
    var keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    var start = obj || {};
    var fromObj = start;
    var i;
    var length = keys.length;
    var key;
    for (i = 0; i < length; i++) {
        key = keys[parseInt(i.toString(), 10)];
        if (i + 1 === length) {
            fromObj["" + key] = value === undefined ? {} : value;
        }
        else if (isNullOrUndefined(fromObj["" + key])) {
            fromObj["" + key] = {};
        }
        fromObj = fromObj["" + key];
    }
    return start;
}
/**
 * Delete an item from Object
 *
 * @param {any} obj - Object in which we need to delete an item.
 * @param {string} key - String value to the get the inner object
 * @returns {void} ?
 * @private
 */
function deleteObject(obj, key) {
    delete obj["" + key];
}
/**
 *@private
 */
var containerObject = typeof window !== 'undefined' ? window : {};
/**
 * Check weather the given argument is only object.
 *
 * @param {any} obj - Object which is need to check.
 * @returns {boolean} ?
 * @private
 */
function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}
/**
 * To get enum value by giving the string.
 *
 * @param {any} enumObject - Enum object.
 * @param {string} enumValue - Enum value to be searched
 * @returns {any} ?
 * @private
 */
function getEnumValue(enumObject, enumValue) {
    return enumObject["" + enumValue];
}
/**
 * Merge the source object into destination object.
 *
 * @param {any} source - source object which is going to merge with destination object
 * @param {any} destination - object need to be merged
 * @returns {void} ?
 * @private
 */
function merge(source, destination) {
    if (!isNullOrUndefined(destination)) {
        var temrObj = source;
        var tempProp = destination;
        var keys = Object.keys(destination);
        var deepmerge = 'deepMerge';
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!isNullOrUndefined(temrObj["" + deepmerge]) && (temrObj["" + deepmerge].indexOf(key) !== -1) &&
                (isObject(tempProp["" + key]) || Array.isArray(tempProp["" + key]))) {
                extend(temrObj["" + key], temrObj["" + key], tempProp["" + key], true);
            }
            else {
                temrObj["" + key] = tempProp["" + key];
            }
        }
    }
}
/**
 * Extend the two object with newer one.
 *
 * @param {any} copied - Resultant object after merged
 * @param {Object} first - First object need to merge
 * @param {Object} second - Second object need to merge
 * @param {boolean} deep ?
 * @returns {Object} ?
 * @private
 */
function extend(copied, first, second, deep) {
    var result = copied && typeof copied === 'object' ? copied : {};
    var length = arguments.length;
    var args = [copied, first, second, deep];
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!args[parseInt(i.toString(), 10)]) {
            return "continue";
        }
        var obj1 = args[parseInt(i.toString(), 10)];
        Object.keys(obj1).forEach(function (key) {
            var src = result["" + key];
            var copy = obj1["" + key];
            var clone;
            var isArrayChanged = Array.isArray(copy) && Array.isArray(src) && (copy.length !== src.length);
            var blazorEventExtend = isBlazor() ? (!(src instanceof Event) && !isArrayChanged) : true;
            if (deep && blazorEventExtend && (isObject(copy) || Array.isArray(copy))) {
                if (isObject(copy)) {
                    clone = src ? src : {};
                    if (Array.isArray(clone) && Object.prototype.hasOwnProperty.call(clone, 'isComplexArray')) {
                        extend(clone, {}, copy, deep);
                    }
                    else {
                        result["" + key] = extend(clone, {}, copy, deep);
                    }
                }
                else {
                    /* istanbul ignore next */
                    clone = isBlazor() ? src && Object.keys(copy).length : src ? src : [];
                    result["" + key] = extend([], clone, copy, (clone && clone.length) || (copy && copy.length));
                }
            }
            else {
                result["" + key] = copy;
            }
        });
    };
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
/**
 * To check whether the object is null or undefined.
 *
 * @param {any} value - To check the object is null or undefined
 * @returns {boolean} ?
 * @private
 */
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
/**
 * To check whether the object is undefined.
 *
 * @param {any} value - To check the object is undefined
 * @returns {boolean} ?
 * @private
 */
function isUndefined(value) {
    return ('undefined' === typeof value);
}
/**
 * To return the generated unique name
 *
 * @param {string} definedName - To concatenate the unique id to provided name
 * @returns {string} ?
 * @private
 */
function getUniqueID(definedName) {
    return definedName + '_' + uid++;
}
/**
 * It limits the rate at which a function can fire. The function will fire only once every provided second instead of as quickly.
 *
 * @param {Function} eventFunction - Specifies the function to run when the event occurs
 * @param {number} delay - A number that specifies the milliseconds for function delay call option
 * @returns {Function} ?
 * @private
 */
function debounce(eventFunction, delay) {
    var out;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            out = null;
            return eventFunction.apply(_this, args);
        };
        clearTimeout(out);
        out = setTimeout(later, delay);
    };
}
/**
 * To convert the object to string for query url
 *
 * @param  {Object} data ?
 * @returns {string} ?
 * @private
 */
function queryParams(data) {
    var array = [];
    var keys = Object.keys(data);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data["" + key]));
    }
    return array.join('&');
}
/**
 * To check whether the given array contains object.
 *
 * @param {any} value - Specifies the T type array to be checked.
 * @returns {boolean} ?
 * @private
 */
function isObjectArray(value) {
    var parser = Object.prototype.toString;
    if (parser.call(value) === '[object Array]') {
        if (parser.call(value[0]) === '[object Object]') {
            return true;
        }
    }
    return false;
}
/**
 * To check whether the  child element is descendant to parent element or parent and child are same element.
 *
 * @param {Element} child - Specifies the child element to compare with parent.
 * @param {Element} parent - Specifies the parent element.
 * @returns {boolean} ?
 * @private
 */
function compareElementParent(child, parent) {
    var node = child;
    if (node === parent) {
        return true;
    }
    else if (node === document || !node) {
        return false;
    }
    else {
        return compareElementParent(node.parentNode, parent);
    }
}
/**
 * To throw custom error message.
 *
 * @param {string} message - Specifies the error message to be thrown.
 * @returns {void} ?
 * @private
 */
function throwError(message) {
    try {
        throw new Error(message);
    }
    catch (e) {
        throw new Error(e.message + '\n' + e.stack);
    }
}
/**
 * This function is used to print given element
 *
 * @param {Element} element - Specifies the print content element.
 * @param {Window} printWindow - Specifies the print window.
 * @returns {Window} ?
 * @private
 */
function print(element, printWindow) {
    var div = document.createElement('div');
    var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('base, link, style'));
    var blinks = [].slice.call(document.getElementsByTagName('body')[0].querySelectorAll('link, style'));
    if (blinks.length) {
        for (var l = 0, len = blinks.length; l < len; l++) {
            links.push(blinks[parseInt(l.toString(), 10)]);
        }
    }
    var reference = '';
    if (isNullOrUndefined(printWindow)) {
        printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
    }
    div.appendChild(element.cloneNode(true));
    for (var i = 0, len = links.length; i < len; i++) {
        reference += links[parseInt(i.toString(), 10)].outerHTML;
    }
    printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML +
        '<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
    printWindow.document.close();
    printWindow.focus();
    var interval = setInterval(function () {
        if (printWindow.ready) {
            printWindow.print();
            printWindow.close();
            clearInterval(interval);
        }
    }, 500);
    return printWindow;
}
/**
 * Function to normalize the units applied to the element.
 *
 * @param {number|string} value ?
 * @returns {string} result
 * @private
 */
function formatUnit(value) {
    var result = value + '';
    if (result.match(/auto|cm|mm|in|px|pt|pc|%|em|ex|ch|rem|vw|vh|vmin|vmax/)) {
        return result;
    }
    return result + 'px';
}
/**
 * Function to check whether the platform is blazor or not.
 *
 * @returns {void} result
 * @private
 */
function enableBlazorMode() {
    isBlazorPlatform = true;
}
/**
 * Function to check whether the platform is blazor or not.
 *
 * @returns {boolean} result
 * @private
 */
function isBlazor() {
    return isBlazorPlatform;
}
/**
 * Function to convert xPath to DOM element in blazor platform
 *
 * @returns {HTMLElement} result
 * @param {HTMLElement | object} element ?
 * @private
 */
function getElement(element) {
    var xPath = 'xPath';
    if (!(element instanceof Node) && isBlazor() && !isNullOrUndefined(element["" + xPath])) {
        return document.evaluate(element["" + xPath], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    return element;
}
/**
 * Function to fetch the Instances of a HTML element for the given component.
 *
 * @param {string | HTMLElement} element ?
 * @param {any} component ?
 * @returns {Object} ?
 * @private
 */
function getInstance(element, component) {
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem["" + instances]) {
        for (var _i = 0, _a = elem["" + instances]; _i < _a.length; _i++) {
            var inst = _a[_i];
            if (inst instanceof component) {
                return inst;
            }
        }
    }
    return null;
}
/**
 * Function to add instances for the given element.
 *
 * @param {string | HTMLElement} element ?
 * @param {Object} instance ?
 * @returns {void} ?
 * @private
 */
function addInstance(element, instance) {
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem["" + instances]) {
        elem["" + instances].push(instance);
    }
    else {
        elem["" + instances] = [instance];
    }
}
/**
 * Function to generate the unique id.
 *
 * @returns {any} ?
 * @private
 */
function uniqueID() {
    if ((typeof window) === 'undefined') {
        return;
    }
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    return intCrypto.getRandomValues(num);
}
/**
 *
 * @param {Int16Array} num ?
 * @returns {string} ?
 */
function combineArray(num) {
    var ret = '';
    for (var i = 0; i < 5; i++) {
        ret += (i ? ',' : '') + num[parseInt(i.toString(), 10)];
    }
    return ret;
}


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-base/validate-lic.js":
/*!****************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-base/validate-lic.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   componentList: () => (/* binding */ componentList),
/* harmony export */   createLicenseOverlay: () => (/* binding */ createLicenseOverlay),
/* harmony export */   getVersion: () => (/* binding */ getVersion),
/* harmony export */   registerLicense: () => (/* binding */ registerLicense),
/* harmony export */   validateLicense: () => (/* binding */ validateLicense)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./ej2-resources/26.1.38/scripts/ej2-base/dom.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./ej2-resources/26.1.38/scripts/ej2-base/util.js");


var componentList = ['grid', 'pivotview', 'treegrid', 'spreadsheet', 'rangeNavigator', 'DocumentEditor', 'listbox', 'inplaceeditor', 'PdfViewer', 'richtexteditor', 'DashboardLayout', 'chart', 'stockChart', 'circulargauge', 'diagram', 'heatmap', 'lineargauge', 'maps', 'slider', 'smithchart', 'barcode', 'sparkline', 'treemap', 'bulletChart', 'kanban', 'daterangepicker', 'schedule', 'gantt', 'signature', 'query-builder', 'drop-down-tree', 'carousel', 'filemanager', 'uploader', 'accordion', 'tab', 'treeview'];
var bypassKey = [115, 121, 110, 99, 102, 117, 115, 105,
    111, 110, 46, 105, 115, 76, 105, 99, 86, 97, 108,
    105, 100, 97, 116, 101, 100];
var accountURL;
/**
 * License validation module
 *
 * @private
 */
var LicenseValidator = /** @__PURE__ @class */ (function () {
    function LicenseValidator(key) {
        this.isValidated = false;
        this.isLicensed = true;
        this.version = '26';
        this.platform = /JavaScript|ASPNET|ASPNETCORE|ASPNETMVC|FileFormats|essentialstudio/i;
        this.errors = {
            noLicense: '<span>This application was built using a trial version of Syncfusion Essential Studio.' +
                ' To remove the license validation message permanently, a valid license key must be included.</span>',
            trailExpired: '<span>This application was built using a trial version of Syncfusion Essential Studio.' +
                ' To remove the license validation message permanently, a valid license key must be included.</span>',
            versionMismatched: '<span>The included Syncfusion license key is invalid.</span>',
            platformMismatched: '<span>The included Syncfusion license key is invalid.</span>',
            invalidKey: '<span>The included Syncfusion license key is invalid.</span>'
        };
        /**
         * To manage licensing operation.
         */
        this.manager = (function () {
            var licKey = null;
            /**
             * Sets the license key.
             *
             * @param {string} key - Specifies the license key.
             * @returns {void}
             */
            function set(key) { licKey = key; }
            /**
             * Gets the license key.
             *
             * @returns {string} -Gets the license key.
             */
            function get() { return licKey; }
            return {
                setKey: set,
                getKey: get
            };
        })();
        /**
         * To manage npx licensing operation.
         */
        this.npxManager = (function () {
            var npxLicKey = 'npxKeyReplace';
            /**
             * Gets the license key.
             *
             * @returns {string} - Gets the license key.
             */
            function get() { return npxLicKey; }
            return {
                getKey: get
            };
        })();
        this.manager.setKey(key);
    }
    /**
     * To validate the provided license key.
     *
     * @returns {boolean} ?
     */
    LicenseValidator.prototype.validate = function () {
        var contentKey = [115, 121, 110, 99, 102, 117, 115, 105, 111, 110, 46,
            108, 105, 99, 101, 110, 115, 101, 67, 111, 110, 116, 101, 110, 116];
        var URLKey = [115, 121, 110, 99, 102, 117, 115, 105, 111, 110, 46,
            99, 108, 97, 105, 109, 65, 99, 99, 111, 117, 110, 116, 85, 82, 76];
        if (!this.isValidated && (_util__WEBPACK_IMPORTED_MODULE_1__.containerObject && !(0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(convertToChar(bypassKey), _util__WEBPACK_IMPORTED_MODULE_1__.containerObject) && !(0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)('Blazor', _util__WEBPACK_IMPORTED_MODULE_1__.containerObject))) {
            var validateMsg = void 0;
            var validateURL = void 0;
            if ((this.manager && this.manager.getKey()) || (this.npxManager && this.npxManager.getKey() !== 'npxKeyReplace')) {
                var result = this.getInfoFromKey();
                if (result && result.length) {
                    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                        var res = result_1[_i];
                        if (!this.platform.test(res.platform) || res.invalidPlatform) {
                            validateMsg = this.errors.platformMismatched;
                        }
                        else if (res.version.indexOf(this.version) === -1) {
                            validateMsg = this.errors.versionMismatched;
                            validateMsg = validateMsg.replace('##LicenseVersion', res.version);
                            validateMsg = validateMsg.replace('##Requireversion', this.version + '.x');
                        }
                        else if (res.expiryDate) {
                            var expDate = new Date(res.expiryDate);
                            var currDate = new Date();
                            if (expDate !== currDate && expDate < currDate) {
                                validateMsg = this.errors.trailExpired;
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
                else {
                    validateMsg = this.errors.invalidKey;
                }
            }
            else {
                var licenseContent = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(convertToChar(contentKey), _util__WEBPACK_IMPORTED_MODULE_1__.containerObject);
                validateURL = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getValue)(convertToChar(URLKey), _util__WEBPACK_IMPORTED_MODULE_1__.containerObject);
                if (licenseContent && licenseContent !== '') {
                    validateMsg = licenseContent;
                }
                else {
                    validateMsg = this.errors.noLicense;
                }
            }
            if (validateMsg && typeof document !== 'undefined' && !(0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(document)) {
                accountURL = (validateURL && validateURL !== '') ? validateURL : 'https://www.syncfusion.com/account/claim-license-key?pl=SmF2YVNjcmlwdA==&vs=MjY=&utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information';
                var errorDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
                    innerHTML: "<img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5OV80KSI+CjxwYXRoIGQ9Ik0xMiAyMUMxNi45NzA2IDIxIDIxIDE2Ljk3MDYgMjEgMTJDMjEgNy4wMjk0NCAxNi45NzA2IDMgMTIgM0M3LjAyOTQ0IDMgMyA3LjAyOTQ0IDMgMTJDMyAxNi45NzA2IDcuMDI5NDQgMjEgMTIgMjFaIiBzdHJva2U9IiM3MzczNzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS4yNSAxMS4yNUgxMlYxNi41SDEyLjc1IiBmaWxsPSIjNjE2MDYzIi8+CjxwYXRoIGQ9Ik0xMS4yNSAxMS4yNUgxMlYxNi41SDEyLjc1IiBzdHJva2U9IiM3MzczNzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS44MTI1IDlDMTIuNDMzOCA5IDEyLjkzNzUgOC40OTYzMiAxMi45Mzc1IDcuODc1QzEyLjkzNzUgNy4yNTM2OCAxMi40MzM4IDYuNzUgMTEuODEyNSA2Ljc1QzExLjE5MTIgNi43NSAxMC42ODc1IDcuMjUzNjggMTAuNjg3NSA3Ljg3NUMxMC42ODc1IDguNDk2MzIgMTEuMTkxMiA5IDExLjgxMjUgOVoiIGZpbGw9IiM3MzczNzMiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xOTlfNCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K' style=\"top: 6px;\n                    position: absolute;\n                    left: 16px;\n                    width: 24px;\n                    height: 24px;\"/>" + validateMsg + ' ' + '<a style="text-decoration: none;color: #0D6EFD;font-weight: 500;" href=' + accountURL + '>Claim your free account</a>'
                });
                errorDiv.setAttribute('style', "position: fixed;\n                top: 10px;\n                left: 10px;\n                right: 10px;\n                font-size: 14px;\n                background: #EEF2FF;\n                color: #222222;\n                z-index: 999999999;\n                text-align: left;\n                border: 1px solid #EEEEEE;\n                padding: 10px 11px 10px 50px;\n                border-radius: 8px;\n                font-family: Helvetica Neue, Helvetica, Arial;");
                document.body.appendChild(errorDiv);
                this.isLicensed = false;
            }
            this.isValidated = true;
            (0,_util__WEBPACK_IMPORTED_MODULE_1__.setValue)(convertToChar(bypassKey), this.isValidated, _util__WEBPACK_IMPORTED_MODULE_1__.containerObject);
        }
        return this.isLicensed;
    };
    LicenseValidator.prototype.getDecryptedData = function (key) {
        try {
            return atob(key);
        }
        catch (error) {
            return '';
        }
    };
    /**
     * Get license information from key.
     *
     * @returns {IValidator} - Get license information from key.
     */
    LicenseValidator.prototype.getInfoFromKey = function () {
        try {
            var licKey = '';
            var pkey = [5439488, 7929856, 5111808, 6488064, 4587520, 7667712, 5439488,
                6881280, 5177344, 7208960, 4194304, 4456448, 6619136, 7733248, 5242880, 7077888,
                6356992, 7602176, 4587520, 7274496, 7471104, 7143424];
            var decryptedStr = [];
            var resultArray = [];
            var invalidPlatform = false;
            var isNpxKey = false;
            if (this.manager.getKey()) {
                licKey = this.manager.getKey();
            }
            else {
                isNpxKey = true;
                licKey = this.npxManager.getKey().split('npxKeyReplace')[1];
            }
            var licKeySplit = licKey.split(';');
            for (var _i = 0, licKeySplit_1 = licKeySplit; _i < licKeySplit_1.length; _i++) {
                var lKey = licKeySplit_1[_i];
                var decodeStr = this.getDecryptedData(lKey);
                if (!decodeStr) {
                    continue;
                }
                var k = 0;
                var buffr = '';
                if (!isNpxKey) {
                    for (var i = 0; i < decodeStr.length; i++, k++) {
                        if (k === pkey.length) {
                            k = 0;
                        }
                        var c = decodeStr.charCodeAt(i);
                        buffr += String.fromCharCode(c ^ (pkey[parseInt(k.toString(), 10)] >> 16));
                    }
                }
                else {
                    var charKey = decodeStr[decodeStr.length - 1];
                    var decryptedKey = [];
                    for (var i = 0; i < decodeStr.length; i++) {
                        decryptedKey[parseInt(i.toString(), 10)] = decodeStr[parseInt(i.toString(), 10)].charCodeAt(0)
                            - charKey.charCodeAt(0);
                    }
                    for (var i = 0; i < decryptedKey.length; i++) {
                        buffr += String.fromCharCode(decryptedKey[parseInt(i.toString(), 10)]);
                    }
                }
                if (this.platform.test(buffr)) {
                    decryptedStr = buffr.split(';');
                    invalidPlatform = false;
                    // checked the length to verify the key in proper strucutre
                    if (decryptedStr.length > 3) {
                        resultArray.push({ platform: decryptedStr[0],
                            version: decryptedStr[1],
                            expiryDate: decryptedStr[2] });
                    }
                }
                else if (buffr && buffr.split(';').length > 3) {
                    invalidPlatform = true;
                }
            }
            if (invalidPlatform && !resultArray.length) {
                return [{ invalidPlatform: invalidPlatform }];
            }
            else {
                return resultArray.length ? resultArray : null;
            }
        }
        catch (error) {
            return null;
        }
    };
    return LicenseValidator;
}());
var licenseValidator = new LicenseValidator();
/**
 * Converts the given number to characters.
 *
 * @param {number} cArr - Specifies the license key as number.
 * @returns {string} ?
 */
function convertToChar(cArr) {
    var ret = '';
    for (var _i = 0, cArr_1 = cArr; _i < cArr_1.length; _i++) {
        var arr = cArr_1[_i];
        ret += String.fromCharCode(arr);
    }
    return ret;
}
/**
 * To set license key.
 *
 * @param {string} key - license key
 * @returns {void}
 */
function registerLicense(key) {
    licenseValidator = new LicenseValidator(key);
}
var validateLicense = function (key) {
    if (key) {
        registerLicense(key);
    }
    return licenseValidator.validate();
};
var getVersion = function () {
    return licenseValidator.version;
};
// Method for create overlay over the sample
var createLicenseOverlay = function () {
    var bannerTemplate = "\n    <div style=\"\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 99999;\n    \">\n        <div style=\"\n    background: #FFFFFF;\n    height: 455px;\n    width: 840px;\n    font-family: Helvetica Neue, Helvetica, Arial;\n    color: #000000;\n    box-shadow: 0px 4.8px 14.4px rgb(0 0 0 / 18%), 0px 25.6px 57.6px rgb(0 0 0 / 22%);\n    display: block;\n    margin: 8% auto;\n    border-radius: 20px;\n    \">\n            <div style=\"\n    position: absolute;\nwidth: 838px;\nheight: 62px;\nbackground-color: #F9F9F9;\nborder: 1px solid #EEEEEE;\nborder-top-left-radius: 20px;\nborder-top-right-radius: 20px;\n\">\n                <img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ2IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTQ2IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDAuNTk2NSAxNS4wMDc4SDMyLjQyNUMzMS41NTU3IDE1LjAwNzggMzAuOTAzNyAxNS4xODEyIDMwLjUxMjUgMTUuNDg0NkMzMC4xMjEzIDE1LjgzMTQgMjkuOTA0IDE2LjMwODIgMjkuOTA0IDE3LjA0NTFDMjkuOTA0IDE3LjYwODYgMzAuMDc3OCAxOC4wNDIxIDMwLjQyNTYgMTguMzAyMkMzMC43NzMzIDE4LjYwNTYgMzEuMjk0OSAxOC43MzU2IDMxLjk5MDMgMTguNzM1NkgzNi4zMzY5QzM4LjExODkgMTguNzM1NiAzOS40MjI5IDE5LjA4MjQgNDAuMTYxOCAxOS43MzI2QzQwLjk0NDIgMjAuNDI2MiA0MS4yOTE5IDIxLjU1MzIgNDEuMjkxOSAyMy4xMTM3QzQxLjI5MTkgMjQuNzE3NiA0MC44NTcyIDI1Ljg4OCAzOS45ODc5IDI2LjY2ODJDMzkuMTE4NiAyNy40MDUxIDM3LjcyNzcgMjcuNzk1MyAzNS44NTg3IDI3Ljc5NTNIMjcuMDc4N1YyNS4wMjFIMzUuMzM3MkMzNi4yOTM0IDI1LjAyMSAzNi45NDU0IDI0Ljg5MSAzNy4zMzY2IDI0LjYzMDlDMzcuNzI3NyAyNC4zNzA4IDM3LjkwMTYgMjMuODk0IDM3LjkwMTYgMjMuMjg3MUMzNy45MDE2IDIyLjYzNjkgMzcuNzI3NyAyMi4xNjAxIDM3LjM4IDIxLjlDMzcuMDMyMyAyMS42Mzk5IDM2LjQyMzggMjEuNDY2NSAzNS41NTQ1IDIxLjQ2NjVIMzEuNjQyNkMyOS44NjA1IDIxLjQ2NjUgMjguNTEzMSAyMS4xMTk4IDI3LjY4NzMgMjAuMzgyOEMyNi44NjE0IDE5LjY0NTkgMjYuNDI2OCAxOC41MTg5IDI2LjQyNjggMTcuMDAxN0MyNi40MjY4IDE1LjM1NDUgMjYuODYxNCAxNC4xNDA4IDI3LjczMDcgMTMuMzYwNkMyOC42IDEyLjU4MDMgMjkuOTkwOSAxMi4yMzM1IDMxLjkwMzQgMTIuMjMzNUg0MC41OTY1VjE1LjAwNzhaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik00OC4wNzI3IDI1LjI4MTFINTAuNTA2OFYxNi4zOTQ5SDUzLjU0OTNWMjcuNTM1MkM1My41NDkzIDI5LjA1MjQgNTMuMjAxNiAzMC4xNzk0IDUyLjUwNjIgMzAuOTE2M0M1MS44MTA3IDMxLjY1MzIgNTAuNzI0MSAzMiA0OS4yNDYzIDMySDQzLjMzNVYyOS42NTkySDQ4LjcyNDdDNDkuMjg5NyAyOS42NTkyIDQ5Ljc2NzkgMjkuNTI5MiA1MC4wNzIxIDI5LjIyNThDNTAuMzc2NCAyOC45NjU3IDUwLjU1MDIgMjguNTMyMiA1MC41NTAyIDI4LjAxMlYyNy44Mzg2SDQ3Ljg5ODlDNDYuMjAzNyAyNy44Mzg2IDQ0Ljk0MzIgMjcuNDkxOSA0NC4yNDc4IDI2Ljg0MTZDNDMuNTA4OSAyNi4xNDgxIDQzLjE2MTEgMjUuMDY0NCA0My4xNjExIDIzLjQ2MDVWMTYuMzk0OUg0Ni4xNjAyVjIzLjIwMDVDNDYuMTYwMiAyNC4wNjc0IDQ2LjI5MDYgMjQuNjMwOSA0Ni41NTE0IDI0Ljg5MUM0Ni43MjUzIDI1LjE1MTEgNDcuMjQ2OSAyNS4yODExIDQ4LjA3MjcgMjUuMjgxMVoiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTU1Ljg5NjUgMTYuMzk0OUg2MS41OTA0QzYzLjMyOTEgMTYuMzk0OSA2NC41NDYxIDE2LjY5ODMgNjUuMjg1IDE3LjM0ODVDNjYuMDIzOSAxNy45OTg4IDY2LjM3MTYgMTkuMDgyNCA2Ni4zNzE2IDIwLjU1NjNWMjcuNzk1M0g2My4zMjkxVjIwLjk0NjRDNjMuMzI5MSAyMC4wNzk0IDYzLjE5ODcgMTkuNTE1OSA2Mi45Mzc5IDE5LjI5OTJDNjIuNjc3MSAxOS4wMzkxIDYyLjE1NTUgMTguOTA5MSA2MS4zMjk3IDE4LjkwOTFINTguODk1NlYyNy44Mzg2SDU1Ljg1M1YxNi4zOTQ5SDU1Ljg5NjVaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik03NC45MzQyIDI1LjM2NzhINzguMTUwNlYyNy43OTUySDc0LjAyMTRDNzIuOTc4MiAyNy43OTUyIDcyLjEwODkgMjcuNjY1MiA3MS40NTcgMjcuNDkxOEM3MC44MDUgMjcuMjc1IDcwLjE5NjUgMjYuOTI4MyA2OS43MTgzIDI2LjQ1MTRDNjkuMTk2OCAyNS45MzEzIDY4Ljc2MjEgMjUuMjgxMSA2OC40NTc4IDI0LjU0NDJDNjguMTUzNiAyMy44MDcyIDY4LjAyMzIgMjIuOTgzNiA2OC4wMjMyIDIyLjE2QzY4LjAyMzIgMjEuMjkzMSA2OC4xNTM2IDIwLjQ2OTUgNjguNDU3OCAxOS42ODkyQzY4Ljc2MjEgMTguOTA5IDY5LjE1MzMgMTguMzAyMSA2OS43MTgzIDE3Ljc4MTlDNzAuMjM5OSAxNy4zMDUxIDcwLjgwNSAxNi45NTgzIDcxLjUwMDQgMTYuNzQxNkM3Mi4xOTU5IDE2LjUyNDkgNzMuMDIxNyAxNi40MzgyIDc0LjA2NDkgMTYuNDM4Mkg3OC4xOTQxVjE4LjkwOUg3NC45MzQyQzczLjQ5OTggMTguOTA5IDcyLjU0MzYgMTkuMTY5MSA3MS45Nzg1IDE5LjY0NTlDNzEuNDU2OSAyMC4xMjI3IDcxLjE1MjcgMjAuOTg5NyA3MS4xNTI3IDIyLjIwMzRDNzEuMTUyNyAyMi44OTY5IDcxLjI4MzEgMjMuNDYwNSA3MS41MDA0IDIzLjkzNzNDNzEuNzE3NyAyNC40MTQxIDcyLjA2NTUgMjQuNzYwOSA3Mi41MDAxIDI1LjA2NDNDNzIuNzE3NCAyNS4xOTQ0IDcyLjk3ODIgMjUuMjgxMSA3My4yODI1IDI1LjM2NzhDNzMuNjMwMiAyNS4zMjQ0IDc0LjE1MTggMjUuMzY3OCA3NC45MzQyIDI1LjM2NzhaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik04MC44NDU2IDE4LjY0ODlINzguNjcyNFYxNi4zNTE1SDgwLjg0NTZWMTUuMTgxMUM4MC44NDU2IDE0LjAxMDggODEuMDYzIDEzLjIzMDUgODEuNDk3NiAxMi44NDA0QzgxLjkzMjMgMTIuNDUwMyA4Mi43NTgxIDEyLjIzMzUgODMuOTc1MSAxMi4yMzM1SDg2Ljg0MzhWMTQuNDAwOUg4NS40MDk1Qzg0Ljg4NzkgMTQuNDAwOSA4NC41NDAyIDE0LjQ4NzYgODQuMzIyOSAxNC42NjFDODQuMTA1NSAxNC44MzQ0IDgzLjk3NTEgMTUuMDk0NSA4My45NzUxIDE1LjQ0MTJWMTYuMzUxNUg4Ni44NDM4VjE4LjY0ODlIODMuOTc1MVYyNy43OTUzSDgwLjg0NTZWMTguNjQ4OVoiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTk4LjQwNTYgMjcuNzk1M0g5Mi43MTE2QzkxLjAxNjUgMjcuNzk1MyA4OS44NDI5IDI3LjQ0ODUgODkuMDYwNSAyNi43OTgzQzg4LjMyMTYgMjYuMTQ4MSA4Ny45MzA0IDI1LjA2NDQgODcuOTMwNCAyMy41OTA2VjE2LjM5NDlIOTAuOTI5NVYyMy40MTcyQzkwLjkyOTUgMjQuMTk3NCA5MS4wNTk5IDI0LjY3NDMgOTEuMzIwNyAyNC45MzQ0QzkxLjU4MTUgMjUuMTk0NCA5Mi4xMDMxIDI1LjMyNDUgOTIuOTI4OSAyNS4zMjQ1SDk1LjM2M1YxNi4zOTQ5SDk4LjQwNTZWMjcuNzk1M1oiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTEwMC42MjIgMjUuNDExMkgxMDcuMDExQzEwNy41NzcgMjUuNDExMiAxMDguMDExIDI1LjMyNDUgMTA4LjI3MiAyNS4xNTExQzEwOC41MzMgMjQuOTc3NyAxMDguNjYzIDI0LjY3NDMgMTA4LjY2MyAyNC4zMjc1QzEwOC42NjMgMjMuOTM3NCAxMDguNTMzIDIzLjY3NzMgMTA4LjI3MiAyMy40NjA1QzEwOC4wMTEgMjMuMjg3MSAxMDcuNTc3IDIzLjIwMDUgMTA3LjA1NSAyMy4yMDA1SDEwNC40NDdDMTAyLjg4MiAyMy4yMDA1IDEwMS44MzkgMjIuOTgzNyAxMDEuMzE4IDIyLjUwNjlDMTAwLjc1MiAyMi4wMzAxIDEwMC40OTIgMjEuMjA2NSAxMDAuNDkyIDE5Ljk5MjdDMTAwLjQ5MiAxOC43NzkgMTAwLjgzOSAxNy44Njg3IDEwMS40OTEgMTcuMjYxOEMxMDIuMTQzIDE2LjY5ODMgMTAzLjE4NyAxNi4zOTQ5IDEwNC41MzQgMTYuMzk0OUgxMTEuMDU0VjE4Ljc3OUgxMDUuNzA4QzEwNC44MzggMTguNzc5IDEwNC4yNzMgMTguODY1NyAxMDQuMDEyIDE4Ljk5NTdDMTAzLjc1MiAxOS4xNjkxIDEwMy42MjEgMTkuNDI5MiAxMDMuNjIxIDE5LjgxOTRDMTAzLjYyMSAyMC4xNjYxIDEwMy43NTIgMjAuNDI2MiAxMDMuOTY5IDIwLjU5OTZDMTA0LjE4NiAyMC43NzMgMTA0LjU3NyAyMC44NTk3IDEwNS4wNTYgMjAuODU5N0gxMDcuNzk0QzEwOS4wNTQgMjAuODU5NyAxMTAuMDExIDIxLjE2MzEgMTEwLjY2MyAyMS43MjY2QzExMS4zMTUgMjIuMjkwMiAxMTEuNjYyIDIzLjE1NzEgMTExLjY2MiAyNC4yNDA4QzExMS42NjIgMjUuMjgxMSAxMTEuMzU4IDI2LjE0ODEgMTEwLjc5MyAyNi43OTgzQzExMC4yMjggMjcuNDQ4NSAxMDkuNDQ2IDI3Ljc5NTMgMTA4LjUzMyAyNy43OTUzSDEwMC43MDlWMjUuNDExMkgxMDAuNjIyWiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMTE2LjU3NCAxNS4wOTQ0SDExMy40MDFWMTIuMjc2OUgxMTYuNTc0VjE1LjA5NDRaTTExNi41NzQgMjcuNzk1M0gxMTMuNDAxVjE2LjM5NDlIMTE2LjU3NFYyNy43OTUzWiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMTMwLjMwOSAyMi4xMTY3QzEzMC4zMDkgMjMuODkzOSAxMjkuNzQ0IDI1LjMyNDQgMTI4LjY1NyAyNi40MDgxQzEyNy41NzEgMjcuNDkxOCAxMjYuMDkzIDI4LjAxMiAxMjQuMjI0IDI4LjAxMkMxMjIuMzU1IDI4LjAxMiAxMjAuODc3IDI3LjQ5MTggMTE5Ljc5IDI2LjQwODFDMTE4LjcwNCAyNS4zMjQ0IDExOC4xMzkgMjMuODkzOSAxMTguMTM5IDIyLjExNjdDMTE4LjEzOSAyMC4zMzk0IDExOC43MDQgMTguOTA5IDExOS43OSAxNy44MjUzQzEyMC44NzcgMTYuNzQxNiAxMjIuMzk4IDE2LjIyMTQgMTI0LjIyNCAxNi4yMjE0QzEyNi4wNDkgMTYuMjIxNCAxMjcuNTI3IDE2Ljc0MTYgMTI4LjY1NyAxNy44MjUzQzEyOS43NDQgMTguODY1NiAxMzAuMzA5IDIwLjI5NjEgMTMwLjMwOSAyMi4xMTY3Wk0xMjEuMjY4IDIyLjExNjdDMTIxLjI2OCAyMy4yMDA0IDEyMS41MjkgMjQuMDY3MyAxMjIuMDUxIDI0LjY3NDJDMTIyLjU3MiAyNS4yODExIDEyMy4yNjggMjUuNTg0NSAxMjQuMTggMjUuNTg0NUMxMjUuMDkzIDI1LjU4NDUgMTI1Ljc4OSAyNS4yODExIDEyNi4zMSAyNC42NzQyQzEyNi44MzIgMjQuMDY3MyAxMjcuMDkzIDIzLjIwMDQgMTI3LjA5MyAyMi4xMTY3QzEyNy4wOTMgMjEuMDMzIDEyNi44MzIgMjAuMTY2MSAxMjYuMzEgMTkuNjAyNUMxMjUuNzg5IDE4Ljk5NTcgMTI1LjA5MyAxOC42OTIyIDEyNC4xMzcgMTguNjkyMkMxMjMuMjI0IDE4LjY5MjIgMTIyLjUyOSAxOC45OTU3IDEyMi4wMDcgMTkuNjAyNUMxMjEuNTI5IDIwLjE2NjEgMTIxLjI2OCAyMS4wMzMgMTIxLjI2OCAyMi4xMTY3WiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMTMxLjc4NyAxNi4zOTQ5SDEzNy40ODFDMTM5LjIxOSAxNi4zOTQ5IDE0MC40MzYgMTYuNjk4MyAxNDEuMTc1IDE3LjM0ODVDMTQxLjkxNCAxNy45OTg4IDE0Mi4yNjIgMTkuMDgyNCAxNDIuMjYyIDIwLjU1NjNWMjcuNzk1M0gxMzkuMjE5VjIwLjk0NjRDMTM5LjIxOSAyMC4wNzk0IDEzOS4wODkgMTkuNTE1OSAxMzguODI4IDE5LjI5OTJDMTM4LjU2NyAxOS4wMzkxIDEzOC4wNDYgMTguOTA5MSAxMzcuMjIgMTguOTA5MUgxMzQuNzg2VjI3LjgzODZIMTMxLjc0M1YxNi4zOTQ5SDEzMS43ODdaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik03LjEyODMxIDMuNzM3NDNIMFYxMC44NDY0SDcuMTI4MzFWMy43Mzc0M1oiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTIzLjI1MTMgLTIuMTU3MjVlLTA1TDE4LjU1MTMgNS41MTY4NUwyNC4wODMxIDEwLjIwNDFMMjguNzgzMSA0LjY4NzI1TDIzLjI1MTMgLTIuMTU3MjVlLTA1WiIgZmlsbD0iI0ZGODYwMCIvPgo8cGF0aCBkPSJNMTUuNjA0MSAzLjczNzQzSDguNDc1ODNWMTAuODQ2NEgxNS42MDQxVjMuNzM3NDNaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik03LjEyODMxIDEyLjE5MDJIMFYxOS4yOTkySDcuMTI4MzFWMTIuMTkwMloiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTE1LjYwNDEgMTIuMTkwMkg4LjQ3NTgzVjE5LjI5OTJIMTUuNjA0MVYxMi4xOTAyWiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMjQuMDc5NyAxMi4xOTAySDE2Ljk1MTRWMTkuMjk5MkgyNC4wNzk3VjEyLjE5MDJaIiBmaWxsPSIjRkY4NjAwIi8+CjxwYXRoIGQ9Ik03LjEyODMxIDIwLjY4NjNIMFYyNy43OTUzSDcuMTI4MzFWMjAuNjg2M1oiIGZpbGw9IiMzNTQzQTgiLz4KPHBhdGggZD0iTTE1LjYwNDEgMjAuNjg2M0g4LjQ3NTgzVjI3Ljc5NTNIMTUuNjA0MVYyMC42ODYzWiIgZmlsbD0iIzM1NDNBOCIvPgo8cGF0aCBkPSJNMjQuMTIzMiAyMC42ODYzSDE2Ljk5NDlWMjcuNzk1M0gyNC4xMjMyVjIwLjY4NjNaIiBmaWxsPSIjMzU0M0E4Ii8+CjxwYXRoIGQ9Ik0xNDYgMTUuODMxM0MxNDYgMTYuODcxNyAxNDUuMTc0IDE3LjY5NTMgMTQ0LjEzMSAxNy42OTUzQzE0My4wODggMTcuNjk1MyAxNDIuMjYyIDE2Ljg3MTcgMTQyLjI2MiAxNS44MzEzQzE0Mi4yNjIgMTQuNzkxIDE0My4wODggMTQuMDEwNyAxNDQuMTMxIDE0LjAxMDdDMTQ1LjEzMSAxMy45Njc0IDE0NiAxNC43OTEgMTQ2IDE1LjgzMTNaTTE0Mi45NTcgMTQuNzkxQzE0Mi42OTcgMTUuMDUxMSAxNDIuNTY2IDE1LjQ0MTIgMTQyLjU2NiAxNS44MzEzQzE0Mi41NjYgMTYuNjk4MyAxNDMuMjYyIDE3LjM5MTggMTQ0LjEzMSAxNy4zOTE4QzE0NSAxNy4zOTE4IDE0NS42OTYgMTYuNjk4MyAxNDUuNjk2IDE1LjgzMTNDMTQ1LjY5NiAxNS4wMDc3IDE0NSAxNC4yNzA4IDE0NC4xNzQgMTQuMjcwOEMxNDMuNjUzIDE0LjI3MDggMTQzLjI2MiAxNC40NDQyIDE0Mi45NTcgMTQuNzkxWk0xNDQuODcgMTYuOTE1SDE0NC40NzlMMTQzLjkxNCAxNi4wOTE0VjE2LjkxNUgxNDMuNjA5VjE0Ljc0NzZIMTQzLjk1N0MxNDQuNDM1IDE0Ljc0NzYgMTQ0LjY1MyAxNC45NjQ0IDE0NC42NTMgMTUuMzU0NUMxNDQuNjUzIDE1LjY1NzkgMTQ0LjQ3OSAxNS44NzQ3IDE0NC4xNzQgMTUuOTYxNEwxNDQuODcgMTYuOTE1Wk0xNDQuMDQ0IDE1LjY1NzlDMTQ0LjI2MSAxNS42NTc5IDE0NC4zOTIgMTUuNTI3OSAxNDQuMzkyIDE1LjM1NDVDMTQ0LjM5MiAxNS4xMzc4IDE0NC4yNjEgMTUuMDUxMSAxNDQuMDAxIDE1LjA1MTFIMTQzLjkxNFYxNS42NTc5SDE0NC4wNDRaIiBmaWxsPSIjMzU0M0E4Ii8+Cjwvc3ZnPgo=\" style=\"\n    text-align: left;\n    width: 146px;\n    position: absolute;\n    top: 14px;\n    left: 31px;\n\">\n            </div>\n            <div style=\"\n    position: relative;\n    top: 80px;\n    left: 32px;\n    font-size: 20px;\n    text-align: left;\n    font-weight: 700;\n    letter-spacing: 0.02em;\n    font-style: normal;\n    line-height: 125%;\n    \">Claim your FREE account and get a key in less than a minute</div>\n            <ul style=\"\n        font-size: 15px;\n        font-weight: 400;\n        color: #333333;\n        letter-spacing: 0.01em;\n        position: relative;\n        left: 32px;\n        top: 88px;\n        line-height: 180%;\n        \">\n                <li><span>Access to a 30-day free trial of any of our products.</span></li>\n                <li><span>Access to 24x5 support by developers via the <a href=\"https://support.syncfusion.com/create?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\" style=\"text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;\">support tickets</a>, <a href=\"https://www.syncfusion.com/forums?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\" style=\"text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;\">forum</a>, <a href=\"https://www.syncfusion.com/feedback?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\n                \" style=\"text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;\">feature &amp; feedback page</a> and chat.</span></li>\n                <li><span>200+ <a href=\"https://www.syncfusion.com/succinctly-free-ebooks?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\" style=\"text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;\">ebooks </a>on the latest technologies, industry trends, and research topics.</span>\n                </li>\n                <li><span>Largest collection of over 7,000 flat and wireframe icons for free with Syncfusion <a href=\"https://www.syncfusion.com/downloads/metrostudio?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\n                \" style=\"text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;\">Metro Studio.</a></span></li>\n                <li><span>Free and unlimited access to Syncfusion technical <a href=\"https://www.syncfusion.com/blogs/?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\n                \" style=\"text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;\">blogs</a> and <a href=\"https://www.syncfusion.com/resources/techportal/whitepapers?utm_source=es_license_validation_banner&utm_medium=listing&utm_campaign=license-information\" style=\"text-decoration: none;\n                color: #0D6EFD;\n                font-weight: 500;\">whitepapers.</a></span></li>\n            </ul>\n            <div style=\"\n            font-size: 18px;\n            font-weight: 700;\n            position: relative;\n            line-height: 125%;\n            letter-spacing: 0.02em;\n            top: 90px;\n            left: 32px;\n    \">Syncfusion is trusted by 29,000+ businesses worldwide</div>\n            <img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIwIiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgODIwIDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MjcuNjE3IDIyLjU2NTlWMjQuNzIyNkM0MjYuNTU4IDI0LjM2MzggNDI1LjM5OCAyNC4xNTQ0IDQyNC40NzQgMjQuMTU0NEM0MjMuMzMzIDI0LjE1NDQgNDIyLjY5OCAyNC40OTEyIDQyMi42OTggMjUuMDk2M0M0MjIuNjk4IDI1LjQ4MjQgNDIyLjk3NiAyNS43MzgzIDQyMy43NzMgMjYuMDg1NEw0MjUuOTE3IDI3LjAxNzRDNDI3LjYzMyAyNy43NjM5IDQyOC40OTcgMjguODUzIDQyOC40OTcgMzAuMjY4MUM0MjguNDk3IDMyLjQ1MjIgNDI2LjU0NiAzMy44MyA0MjMuNDUyIDMzLjgzQzQyMi4zMjQgMzMuODMgNDIxLjAxOCAzMy42NzM2IDQxOS42MzYgMzMuMzcwOVYzMS4xNDE2QzQyMS4wMDYgMzEuNTAyOCA0MjIuMjYyIDMxLjY5NTcgNDIzLjIzOSAzMS42OTU3QzQyNC41MTggMzEuNjk1NyA0MjUuMjAzIDMxLjM1MDYgNDI1LjIwMyAzMC43MDc0QzQyNS4yMDMgMzAuMzIwOCA0MjQuOTM1IDMwLjAzNjcgNDI0LjMyMiAyOS43NzE3TDQyMS45NzUgMjguNzU5M0M0MjAuMjM2IDI4LjAwNzggNDE5LjQzMyAyNi45OTU0IDQxOS40MzMgMjUuNTUyMUM0MTkuNDMzIDIzLjQ4MzcgNDIxLjMxNCAyMi4xNjQ5IDQyNC4yNjUgMjIuMTY0OUM0MjUuMjk4IDIyLjE2NDkgNDI2LjU3IDIyLjMxNzEgNDI3LjYxNyAyMi41NjU5VjIyLjU2NTlaTTQzMC4xNjcgMjIuMzkwOUg0MzMuNjM1VjMzLjYwMzlINDMwLjE2N1YyMi4zOTA5Wk00NDQuOTExIDIyLjM5MDlWMjQuNDQ1MUg0MzkuNjc1VjI2Ljk3NDJINDQ0LjI0OVYyOC44MzIzSDQzOS42NzVWMzEuNDU0M0g0NDQuOTc4VjMzLjYwMzlINDM2LjMwNVYyMi4zOTA5SDQ0NC45MTFaTTQ2MS4yOTQgMjIuMzkwOVYzMy42MDM5SDQ1Ny45MzlWMjYuMjIzNkw0NTQuNjUyIDMzLjY5MTVINDUyLjUzMUw0NDkuMjY2IDI2LjIyMzZWMzMuNjAzOUg0NDYuOTQ5VjIyLjM5MDlINDUxLjE4NEw0NTQuMTc4IDI5LjIxMTRMNDU3LjE1NiAyMi4zOTA5SDQ2MS4yOTRWMjIuMzkwOVpNNDcyLjU3OSAyMi4zOTA5VjI0LjQ0NTFINDY3LjMzNVYyNi45NzQySDQ3MS45MDhWMjguODMyM0g0NjcuMzM1VjMxLjQ1NDNINDcyLjYzOFYzMy42MDM5SDQ2My45NTdWMjIuMzkwOUg0NzIuNTc5Wk00ODQuNzk0IDIyLjM5MDlWMzMuNjAzOUg0ODEuMDkzTDQ3Ni45MjYgMjYuNDEyM1YzMy42MDM5SDQ3NC42MDhWMjIuMzkwOUg0NzguNDA3TDQ4Mi40ODQgMjkuNDg3NlYyMi4zOTA5SDQ4NC43OTRaTTQ5NC44NTggMjIuNTY1OVYyNC43MjI2QzQ5My44MDcgMjQuMzY2MyA0OTIuNjQgMjQuMTU0NCA0OTEuNzMyIDI0LjE1NDRDNDkwLjU3MyAyNC4xNTQ0IDQ4OS45MzkgMjQuNDg1OCA0ODkuOTM5IDI1LjA5M0M0ODkuOTM5IDI1LjQ4ODYgNDkwLjE5OCAyNS43MjUgNDkxLjAyMyAyNi4wODU5TDQ5My4xNTcgMjcuMDE3OEM0OTQuODg1IDI3Ljc3MjIgNDk1LjczOSAyOC44NTE4IDQ5NS43MzkgMzAuMjgzNUM0OTUuNzM5IDMyLjQ1NTkgNDkzLjc4NiAzMy44MzA4IDQ5MC42OTkgMzMuODMwOEM0ODkuNTY5IDMzLjgzMDggNDg4LjI1OSAzMy42NzM2IDQ4Ni44NzggMzMuMzcxN1YzMS4xNDI0QzQ4OC4yNDcgMzEuNTAyOCA0ODkuNDk5IDMxLjY5NjUgNDkwLjQ3IDMxLjY5NjVDNDkxLjc0IDMxLjY5NjUgNDkyLjQ0NCAzMS4zNTE1IDQ5Mi40NDQgMzAuNzI4NUM0OTIuNDQ0IDMwLjMxNjMgNDkyLjE5NyAzMC4wNTA0IDQ5MS41NTUgMjkuNzcyNUw0ODkuMjE4IDI4Ljc2MDFDNDg3LjQ2NyAyOC4wMDI4IDQ4Ni42NzQgMjcuMDAyIDQ4Ni42NzQgMjUuNTUzM0M0ODYuNjc0IDIzLjQ4NjIgNDg4LjU1NiAyMi4xNjY1IDQ5MS41IDIyLjE2NjVDNDkyLjUzNiAyMi4xNjUzIDQ5My44MTMgMjIuMzE3MSA0OTQuODU4IDIyLjU2NTlWMjIuNTY1OVoiIGZpbGw9IiMwMEEwQjAiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzUyLjQxMyAyNi44MTlDMzUwLjk5MiAyNS4yNzU5IDM0OS42MzggMjMuODMxNSAzNDguMzQ5IDIyLjE1NzRMMzQ3LjkyIDIxLjU5OTVDMzQ5LjQwNiAyMS4zNjkzIDM1MC42OTUgMjAuMzg0OCAzNTAuNjk1IDE4Ljc0MzNDMzUwLjY5NSAxNy4yMzMxIDM0OS41MzkgMTYuMjQ4MiAzNDcuODIxIDE2LjI0ODJDMzQ2LjU5OCAxNi4yNDgyIDM0NS43MDYgMTYuMzEzNyAzNDUuMjQzIDE2LjMxMzdDMzQ0LjcxNSAxNi4zMTM3IDM0NC4yODUgMTYuMzEzNyAzNDMuNzkgMTYuMjgwOEMzNDMuODU2IDE4LjE1MjEgMzQzLjg4OSAxOC4yODM0IDM0My44ODkgMTkuNDMyMlYyMy42MzQzQzM0My44ODkgMjQuNDU1MyAzNDMuODU2IDI1LjI3NTkgMzQzLjc5IDI2LjgxODZDMzQ0LjE1MyAyNi43MjAyIDM0NC41MTcgMjYuNzIwMiAzNDQuNzgxIDI2LjcyMDJDMzQ1LjA0NSAyNi43MjAyIDM0NS40MDkgMjYuNzUzMSAzNDUuNzA2IDI2LjgxODZDMzQ1LjY0IDI1Ljc2NzkgMzQ1LjYwNyAyNC4wMjgzIDM0NS42MDcgMjMuNjM0M1YyMS4yMDUxQzM0Ny4xNiAyMy4yMDc3IDM0OS4yMDkgMjUuNjY5NSAzNTAuMDAxIDI2LjgxODZDMzUwLjM5OCAyNi43MjAyIDM1MC43MjggMjYuNzIwMiAzNTEuMTI0IDI2LjcyMDJDMzUxLjQ1NSAyNi43MjA2IDM1MS45MTggMjYuNzIwNiAzNTIuNDEzIDI2LjgxOVYyNi44MTlaTTM0OC44NzggMTkuMDA2QzM0OC44NzggMjAuMDIzNCAzNDguMzE3IDIxLjIwNTQgMzQ2Ljc5NyAyMS4yMDU0QzM0Ni40IDIxLjIwNTQgMzQ2LjAwMyAyMS4yMDU0IDM0NS42MDcgMjEuMTcyNVYxNy4wNjg4QzM0Ni4wMDMgMTYuOTcwNCAzNDYuNDk5IDE2LjkwNDYgMzQ2Ljc2MyAxNi45MDQ2QzM0OC4wODUgMTYuOTA0OSAzNDguODc4IDE3LjY2IDM0OC44NzggMTkuMDA2VjE5LjAwNlpNMzgyLjM4IDI2Ljg4NDVDMzgxLjgxOSAyNi4yOTM2IDM4MC45NiAyNS4zNDE3IDM4MC4xMzQgMjQuNDIyM0MzODAuODI4IDIzLjY2NzIgMzgxLjU1NSAyMi41NTEgMzgxLjk4NCAyMS41OTkxQzM4MS43MTkgMjEuNDY3OCAzODEuMzU2IDIxLjIwNTEgMzgxLjA5MiAyMC45NzUzQzM4MC45OTMgMjEuNzk1OSAzODAuNDMyIDIyLjg3OTIgMzc5LjYzOSAyMy44MzE1QzM3OC41MTUgMjIuNTE4NSAzNzguMjE4IDIyLjE1NzQgMzc3LjE5MyAyMC43Nzg1QzM3OC41ODEgMTkuODkyMSAzNzkuMjQyIDE4Ljg3NDMgMzc5LjI0MiAxOC4wNTM3QzM3OS4yNDIgMTcuMTAxNyAzNzguNTgxIDE2LjExNjkgMzc2Ljk2MiAxNi4xMTY5QzM3NS4yMTEgMTYuMTE2OSAzNzQuMzUyIDE3LjIwMDIgMzc0LjM1MiAxOC40ODAzQzM3NC4zNTIgMTkuMjM1NCAzNzQuNTUgMTkuODkxNyAzNzUuMzc2IDIwLjk3NTNDMzc0LjA1NCAyMS42OTc1IDM3Mi43NjYgMjIuNzQ3OSAzNzIuNzY2IDI0LjQyMjNDMzcyLjc2NiAyNi4wNjM5IDM3NC4wODcgMjYuOTE3NCAzNzUuNzA3IDI2LjkxNzRDMzc3LjE5MyAyNi45MTc0IDM3OC4xNTEgMjYuMzI2NiAzNzguOTEyIDI1LjYzNjlMMzc5LjkwMiAyNi44MTlDMzgwLjIgMjYuNzg2MSAzODAuNTMxIDI2LjcyMDYgMzgwLjg2MSAyNi43MjA2QzM4MS4zMjQgMjYuNzIwNiAzODEuODUyIDI2Ljc4NjEgMzgyLjM4IDI2Ljg4NDVWMjYuODg0NVpNMzgzLjM3MiA0MC4wMTU4QzM4MS45MTggMzguNDczIDM4MC41OTcgMzcuMDYxMiAzNzkuMzA4IDM1LjM4NzFMMzc4Ljg3OCAzNC44Mjg4QzM4MC4zMzIgMzQuNTk5MSAzODEuNjU0IDMzLjYxNSAzODEuNjU0IDMxLjk0MDFDMzgxLjY1NCAzMC40NjMyIDM4MC40OTggMjkuNDQ1NCAzNzguNzc5IDI5LjQ0NTRDMzc3LjU1NyAyOS40NDU0IDM3Ni42MzIgMjkuNTQzNSAzNzYuMTY5IDI5LjU0MzVDMzc1LjY3MyAyOS41NDM1IDM3NS4yNDQgMjkuNTQzNSAzNzQuNzQ4IDI5LjQ3NzZDMzc0LjgxNCAzMS4zODIyIDM3NC44NDggMzEuNDgwMiAzNzQuODQ4IDMyLjYyOTRWMzYuODMxMUMzNzQuODQ4IDM3LjY1MjQgMzc0LjgxNCAzOC41MDUyIDM3NC43NDggNDAuMDE1NEMzNzUuMTEyIDM5Ljk0OTYgMzc1LjQ3NSAzOS45NDk2IDM3NS43MDcgMzkuOTQ5NkMzNzYuMDA0IDM5Ljk0OTYgMzc2LjM2OCAzOS45NDk2IDM3Ni42MzIgNDAuMDE1NEMzNzYuNTY1IDM4Ljk5OCAzNzYuNTMzIDM3LjI1ODEgMzc2LjUzMyAzNi44MzExVjM0LjQzNDhDMzc4LjExOSAzNi40MDQyIDM4MC4xNjcgMzguODk5NiAzODAuOTYgNDAuMDE1NEMzODEuMzU2IDM5Ljk0OTYgMzgxLjY4NyAzOS45NDk2IDM4Mi4wODMgMzkuOTQ5NkMzODIuMzggMzkuOTUgMzgyLjg3NiAzOS45NSAzODMuMzcyIDQwLjAxNThaTTM2Mi4xNiAyNi44MTlDMzYwLjk3MSAyNS41NzE1IDM1OC44ODkgMjIuOTc4IDM1OC4wNjMgMjEuOTkzNUwzNTcuMjM3IDIwLjk3NTdDMzU4LjA5NiAxOS45NTgzIDM1OC42OSAxOS4zMzQxIDM1OS4zMTkgMTguNTc5QzM2MC4wNDUgMTcuNzkxIDM2MC43MDYgMTYuOTcwNCAzNjEuNDk5IDE2LjI0ODJDMzYxLjEzNiAxNi4zMTM3IDM2MC45MzcgMTYuMzEzNyAzNjAuNzM5IDE2LjMxMzdDMzYwLjU0MSAxNi4zMTM3IDM2MC4zNDMgMTYuMzEzNyAzNjAuMTQ0IDE2LjI0ODJDMzU5LjkxMyAxNi42MDkzIDM1OS41NSAxNy4wNjg4IDM1OS4xNTMgMTcuNTI4N0MzNTguNzU2IDE3Ljk1NTYgMzU4LjM2IDE4LjM4MjIgMzU4LjA2MyAxOC43NDMzQzM1Ny4yMzYgMTkuNjk1MiAzNTYuNzc0IDIwLjE1NDcgMzU1LjU4NSAyMS4yNzA5VjE5LjQ2NTVDMzU1LjU4NSAxOC40MTUxIDM1NS41ODUgMTcuNzI1NSAzNTUuNjUxIDE2LjI0ODJDMzU1LjMyMSAxNi4zMTM3IDM1NC45NTcgMTYuMzEzNyAzNTQuNzI2IDE2LjMxMzdDMzU0LjQ2MSAxNi4zMTM3IDM1NC4wMzIgMTYuMzEzNyAzNTMuNzY4IDE2LjI0ODJDMzUzLjgzMyAxNy44MjM5IDM1My44NjcgMTguMjgzNCAzNTMuODY3IDE5LjQzMjVWMjMuNjM0N0MzNTMuODY3IDI0LjY4NSAzNTMuODMzIDI1LjMwODggMzUzLjc2OCAyNi44MTlDMzU0LjE2NCAyNi43MjA2IDM1NC40OTUgMjYuNzIwNiAzNTQuNzI2IDI2LjcyMDZDMzU0Ljk1NyAyNi43MjA2IDM1NS4zNTMgMjYuNzUzNSAzNTUuNjUxIDI2LjgxOUMzNTUuNTg1IDI1LjE0NDkgMzU1LjU4NSAyNC4xNTk3IDM1NS41ODUgMjMuNjM0N1YyMS40MzUyQzM1Ni44MDcgMjIuODc5NiAzNTguNjkgMjUuMjQzMyAzNTkuNzQ4IDI2LjgxOUMzNjAuMTMgMjYuNzU2MyAzNjAuNTE3IDI2LjcyMzQgMzYwLjkwNSAyNi43MjA2QzM2MS4yMDIgMjYuNzIwNiAzNjEuNjY1IDI2LjcyMDYgMzYyLjE2IDI2LjgxOVYyNi44MTlaTTM3Mi42MDEgNDAuMDE1OEMzNzIuNTY4IDM5Ljg1MTkgMzcyLjUzNSAzOS43MjA2IDM3Mi41MzUgMzkuNTIzNEMzNzIuNTM1IDM5LjM5MjggMzcyLjU2OCAzOS4yMjgxIDM3Mi42MDEgMzkuMDk2NEMzNzEuMjggMzkuMTI5NyAzNjguOTAxIDM5LjE5NTIgMzY4LjM3MiAzOS4xOTUyVjM0LjY2NDlDMzY5LjY5NCAzNC42NjQ5IDM3MC45ODIgMzQuNjY0OSAzNzIuMjcgMzQuNzk2M0MzNzIuMjM4IDM0LjYzMjQgMzcyLjIwNCAzNC40Njc3IDM3Mi4yMDQgMzQuMzM2NEMzNzIuMjA0IDM0LjIwNTggMzcyLjIwNCAzNC4wNDE5IDM3Mi4yNyAzMy44NDQ3QzM3MS4zNDYgMzMuOTQyOCAzNjkuMTk4IDMzLjk3NiAzNjguMzcyIDMzLjk3NlYzMC4yNjZDMzY5LjgyNiAzMC4yNjYgMzcwLjY4NSAzMC4yNjYgMzcxLjE4IDMwLjI5OTNMMzcyLjUwMiAzMC4zNjUxQzM3Mi40MzYgMzAuMTY3OSAzNzIuNDM2IDMwLjA2OTIgMzcyLjQzNiAyOS45MDUzQzM3Mi40MzYgMjkuNzQxNCAzNzIuNDM2IDI5LjcwODEgMzcyLjUwMiAyOS40NDU4QzM3MS40MTEgMjkuNDc4MyAzNjkuOTI1IDI5LjU0MzggMzY5LjI2NCAyOS41NDM4QzM2OC44MDIgMjkuNTQzOCAzNjcuMzQ4IDI5LjUxMTMgMzY2LjU4NyAyOS40NDU4QzM2Ni42NTQgMzAuMjY2NCAzNjYuNjg2IDMxLjYxMjMgMzY2LjY4NiAzMi41NjQyVjM2Ljg2NTFDMzY2LjY4NiAzNy40ODg1IDM2Ni42MiAzOC43MzU3IDM2Ni41ODcgNDAuMDE2MkMzNjcuNTEzIDM5Ljk1MDMgMzY4LjgwMiAzOS45NTAzIDM2OS4yNjQgMzkuOTUwM0MzNzAuMDI0IDM5Ljk1IDM3MS42NDMgMzkuOTUgMzcyLjYwMSA0MC4wMTU4Wk0zNjQuNjA1IDM5LjEyOTRDMzY0LjQ0IDM4LjgwMDggMzY0LjM0MSAzOC4zMDg4IDM2NC4yNzUgMzguMDQ2MUMzNjIuOTIgMzkuMTYxOSAzNjEuOTk1IDM5LjM5MjQgMzYwLjkzOCAzOS4zOTI0QzM1OC41OTIgMzkuMzkyNCAzNTcuMzM3IDM3LjI5MTMgMzU3LjMzNyAzNC42NjQ5QzM1Ny4zMzcgMzEuNzQzNiAzNTguNzU3IDMwLjAzNjIgMzYxLjE2OSAzMC4wMzYyQzM2Mi40MjUgMzAuMDM2MiAzNjMuNjE0IDMwLjU5NDUgMzY0LjE3NiAzMS4xNTI4QzM2NC4yMDggMzAuODg5OCAzNjQuMzA4IDMwLjM2NDggMzY0LjQ3MyAzMC4wNjg4QzM2My4zMTYgMjkuNTExMyAzNjIuMjU5IDI5LjM0NjYgMzYxLjEwMiAyOS4zNDY2QzM1Ny4yMzcgMjkuMzQ2NiAzNTUuNDUzIDMxLjc0MzYgMzU1LjQ1MyAzNC44Mjg4QzM1NS40NTMgMzguMzA5MSAzNTcuNzk4IDQwLjE0NzEgMzYwLjczOSA0MC4xNDcxQzM2Mi40MjUgNDAuMTQ3MSAzNjMuODEyIDM5LjYyMjIgMzY0LjYwNSAzOS4xMjk0VjM5LjEyOTRaTTM0Mi4zMDMgMjYuODE5QzM0MC41MTkgMjMuNDA0OSAzMzguOCAxOS4xMzczIDMzNy41NzggMTYuMTE2OUgzMzcuMzhDMzM2LjU4NyAxOC4wMjA3IDMzNS4xMzMgMjEuMjcwOSAzMzQuNzM3IDIyLjE4OTlDMzM0LjI3NCAyMy4zMDYxIDMzMy4yNSAyNS41MDU2IDMzMi41ODkgMjYuODE4NkMzMzIuODAzIDI2Ljc1MzggMzMzLjAyNiAyNi43MjA2IDMzMy4yNSAyNi43MjAyQzMzMy40NDggMjYuNzIwMiAzMzMuNjEzIDI2Ljc1MzEgMzMzLjg0NSAyNi44MTg2QzMzNC4xNzUgMjUuOTMyMiAzMzQuNjM4IDI0LjgxNiAzMzUuMTMzIDIzLjYzNDNDMzM1Ljc5NCAyMy42MDE0IDMzNi4zODkgMjMuNTY4OCAzMzYuOTg0IDIzLjU2ODhDMzM3LjYxMiAyMy41Njg4IDMzOC4yNzIgMjMuNjAxNCAzMzguOTMzIDIzLjYzNDNMMzM5LjU5NCAyNS4yMUwzNDAuMjU1IDI2LjgxODZDMzQwLjcxNyAyNi43MjAyIDM0MS4wOCAyNi43MjAyIDM0MS4zMTIgMjYuNzIwMkMzNDEuNjA5IDI2LjcyMDYgMzQxLjg3MyAyNi43MjA2IDM0Mi4zMDMgMjYuODE5VjI2LjgxOVpNMzUzLjYzNiAyOS40NDU0QzM1My40MzggMjkuNTExMyAzNTMuMjczIDI5LjU0MzUgMzUzLjEwNyAyOS41NDM1QzM1Mi45MDkgMjkuNTQzNSAzNTIuNzQ0IDI5LjUxMDkgMzUyLjU0NiAyOS40NDU0QzM1Mi42NDQgMzAuNzU4NCAzNTIuNjc4IDMyLjA3MTQgMzUyLjY3OCAzMy4zNTE5VjM2LjczMzRDMzUyLjE0OSAzNi4yNzM2IDM1MC44NiAzNS4wOTE5IDM0OS4zNzQgMzMuNzEzQzM0Ny44NiAzMi4zMDc0IDM0Ni4zOTQgMzAuODUxMSAzNDQuOTc5IDI5LjM0NjZIMzQ0Ljc0OEMzNDQuNzgxIDMwLjgyNDMgMzQ0LjgxNCAzMi40IDM0NC44MTQgMzMuODExNFYzNS44Nzk5QzM0NC44MTQgMzcuNjUyOCAzNDQuODE0IDM4LjYwNDcgMzQ0LjcxNSA0MC4wMTYyQzM0NC45OCAzOS45NTAzIDM0NS4xMTIgMzkuOTUwMyAzNDUuMzEgMzkuOTUwM0MzNDUuNDQyIDM5Ljk1MDMgMzQ1LjU3NSAzOS45NTAzIDM0NS44MDYgNDAuMDE2MkMzNDUuNzQgMzguNjcwNiAzNDUuNzA3IDM2LjQ3MDggMzQ1LjcwNyAzNS44Nzk5VjMyLjU5NjhDMzQ4LjE4NSAzNC44NjI1IDM1MS4yMjQgMzcuODgyNiAzNTMuNDcxIDQwLjE0NzVIMzUzLjYwM0MzNTMuNjAzIDM4LjkzMjkgMzUzLjUzNyAzNy43MTc5IDM1My41MzcgMzYuNTA0VjM0LjYzMjdDMzUzLjUzNiAzMi40MzI1IDM1My41MzYgMzEuMzQ5MyAzNTMuNjM2IDI5LjQ0NTRaTTM0Mi41NjcgNDAuMDE1OEMzNDIuNTM0IDM5Ljg1MTkgMzQyLjUwMSAzOS43MjA2IDM0Mi41MDEgMzkuNTIzNEMzNDIuNTAxIDM5LjM5MjggMzQyLjUzNCAzOS4yMjgxIDM0Mi41NjcgMzkuMDk2NEMzNDEuMjQ2IDM5LjEyOTcgMzM4Ljg2NyAzOS4xOTUyIDMzOC4zNzEgMzkuMTk1MlYzNC42NjQ5QzMzOS42NiAzNC42NjQ5IDM0MC45NDggMzQuNjY0OSAzNDIuMjM3IDM0Ljc5NjNDMzQyLjIwNCAzNC42MzI0IDM0Mi4xNzEgMzQuNDY3NyAzNDIuMTcxIDM0LjMzNjRDMzQyLjE3MSAzNC4yMDU4IDM0Mi4xNzEgMzQuMDQxOSAzNDIuMjM3IDMzLjg0NDdDMzQxLjMxMiAzMy45NDI4IDMzOS4xOTcgMzMuOTc2IDMzOC4zNzEgMzMuOTc2VjMwLjI2NkMzMzkuNzkyIDMwLjI2NiAzNDAuNjUxIDMwLjI2NiAzNDEuMTc5IDMwLjI5OTNMMzQyLjQ2OCAzMC4zNjUxQzM0Mi40MzUgMzAuMTY3OSAzNDIuNDM1IDMwLjA2OTIgMzQyLjQzNSAyOS45MDUzQzM0Mi40MzUgMjkuNzQxNCAzNDIuNDM1IDI5LjY3NTUgMzQyLjQ2OCAyOS40NDU4QzM0MS4zNzggMjkuNDc4MyAzMzkuODkxIDI5LjU0MzggMzM5LjIzIDI5LjU0MzhDMzM4Ljc2NyAyOS41NDM4IDMzNy4zMTQgMjkuNTExMyAzMzYuNTU0IDI5LjQ0NThDMzM2LjYyIDMwLjI2NjQgMzM2LjY1MyAzMS42MTIzIDMzNi42NTMgMzIuNTY0MlYzNi44NjUxQzMzNi42NTMgMzcuNDg4NSAzMzYuNTg3IDM4LjczNTcgMzM2LjU1NCA0MC4wMTYyQzMzNy41MTIgMzkuOTUwMyAzMzguNzY3IDM5Ljk1MDMgMzM5LjIzIDM5Ljk1MDNDMzM5Ljk5IDM5Ljk1IDM0MS42NDIgMzkuOTUgMzQyLjU2NyA0MC4wMTU4VjQwLjAxNThaTTMzMS4yMDEgMjYuODE5QzMzMC42NzMgMjMuMjQwNiAzMzAuMjEgMTkuNDk4NCAzMjkuODQ3IDE2LjExNjlDMzI5Ljc0OCAxNi4xNDk4IDMyOS43MTQgMTYuMTQ5OCAzMjkuNjQ5IDE2LjExNjlDMzI4Ljk1NSAxNy4zMzE1IDMyOC4xNjIgMTguNjQ0NSAzMjcuNTY3IDE5LjU2MzlDMzI3LjAwNiAyMC40NTAzIDMyNi4zNDUgMjEuNTAwNyAzMjUuNTg1IDIyLjYxNjlDMzIzLjk5OSAyMC41ODE3IDMyMi4zNDcgMTguMDIxMSAzMjEuMjU2IDE2LjExNjlDMzIxLjE5IDE2LjE0OTggMzIxLjE1NyAxNi4xMTY5IDMyMS4wOTEgMTYuMTE2OUMzMjAuNzI4IDE5LjQ5OCAzMjAuMjMyIDIzLjI3MzIgMzE5LjczNiAyNi44MTlDMzIwLjAwMSAyNi43MjA2IDMyMC4xNjYgMjYuNzIwNiAzMjAuMjk4IDI2LjcyMDZDMzIwLjQ5NiAyNi43MjA2IDMyMC42MjggMjYuNzUzNSAzMjAuODU5IDI2LjgxOUMzMjAuOTkyIDI0LjQ1NTMgMzIxLjI1NiAyMi4xMjQ0IDMyMS41NTMgMTkuNjYyM0MzMjIuODQyIDIxLjUzMzYgMzIzLjk2NSAyMy4xNDIyIDMyNS4yMjEgMjQuODQ5M0MzMjYuMjc4IDIzLjIwNzcgMzI3LjM2OCAyMS40MzQ4IDMyOC41NTggMTkuNjI5NEMzMjguODg4IDIyLjE1NyAzMjkuMTg2IDI0LjQ1NTMgMzI5LjM1MSAyNi44MTlDMzI5Ljc4IDI2LjcyMDYgMzMwLjA3OCAyNi43MjA2IDMzMC4yNzYgMjYuNzIwNkMzMzAuNTQgMjYuNzIwNiAzMzAuODA1IDI2LjcyMDYgMzMxLjIwMSAyNi44MTlWMjYuODE5Wk0zMzQuOTY4IDMyLjIwMjhDMzM0Ljk2OCAzMC4yOTg5IDMzMy40NDggMjkuNDQ1NCAzMzEuNTk4IDI5LjQ0NTRDMzMwLjc3MiAyOS40NDU0IDMyOS44OCAyOS41NDM1IDMyOS4yNTIgMjkuNTQzNUMzMjkuMDIxIDI5LjU0MzUgMzI4LjUyNSAyOS41NDM1IDMyNy45OTcgMjkuNDc3NkMzMjguMDMgMzAuNTI4MyAzMjguMDk2IDMxLjQxNDggMzI4LjA5NiAzMi40MzIyVjM2LjkyOTVDMzI4LjA5NiAzNy45MTQ4IDMyOC4wMyAzOC45OTggMzI3Ljk5NyA0MC4wMTU0QzMyOC40MjYgMzkuOTQ5NiAzMjguNzI0IDM5Ljk0OTYgMzI4LjkyMiAzOS45NDk2QzMyOS4xNTMgMzkuOTQ5NiAzMjkuNDg0IDM5Ljk0OTYgMzI5Ljg4IDQwLjAxNTRDMzI5LjgxNSAzOS4wMzE5IDMyOS43ODIgMzguMDQ2NSAzMjkuNzgxIDM3LjA2MDlWMzUuNDJDMzMwLjE0NSAzNS40NTI2IDMzMC41MDggMzUuNDUyNiAzMzAuOTA1IDM1LjQ1MjZDMzMyLjgyIDM1LjQ1MjYgMzM0Ljk2OCAzNC43MzA0IDMzNC45NjggMzIuMjAyOFYzMi4yMDI4Wk0zMjYuMDE0IDM2Ljg5NzNDMzI2LjAxNCAzNS4yNTU4IDMyNC45MjQgMzQuNTMzNiAzMjMuMDQgMzMuNzQ1NkMzMjEuNjg2IDMzLjE4OCAzMjAuOTkyIDMyLjY5NTYgMzIwLjk5MiAzMS42NDQ1QzMyMC45OTIgMzAuNjYgMzIxLjc1MiAzMC4wMzYyIDMyMy4wMDggMzAuMDM2MkMzMjMuODM0IDMwLjAzNjIgMzI0LjU2MSAzMC4zMzE1IDMyNS4yMjIgMzAuODU2OEMzMjUuMjg3IDMwLjQ5NTcgMzI1LjQ1MyAzMC4xMzQ3IDMyNS42NTEgMjkuODM5NEMzMjQuODU4IDI5LjQ3ODMgMzIzLjk5OSAyOS4zNDcgMzIzLjA3NCAyOS4zNDdDMzIwLjM2NSAyOS4zNDcgMzE5LjUwNSAzMC44OTA1IDMxOS41MDUgMzIuMjAzNUMzMTkuNTA1IDMzLjgxMTggMzIwLjI5OSAzNC41NjcyIDMyMi4zNDcgMzUuMzU1M0MzMjMuNjM2IDM1Ljg0NyAzMjQuMjk2IDM2LjQ3MTEgMzI0LjI5NiAzNy41NTQ0QzMyNC4yOTYgMzguNzAzNSAzMjMuNDM3IDM5LjQyNTcgMzIyLjI0OCAzOS40MjU3QzMyMS41NTQgMzkuNDI1NyAzMjAuMzY1IDM5LjA2NDYgMzE5LjUzOSAzOC4zMDk5QzMxOS41MDUgMzguNzM2MSAzMTkuNTA1IDM5LjEzMDQgMzE5LjM3MyAzOS40OTE1QzMxOS45MDIgMzkuNzU0NiAzMjEuMTI1IDQwLjE0NzkgMzIyLjIxNSA0MC4xNDc5QzMyNC45OSA0MC4xNDcxIDMyNi4wMTQgMzguNDM5NyAzMjYuMDE0IDM2Ljg5NzNWMzYuODk3M1pNMzc4LjE1MiAxNy45ODgyQzM3OC4xNTIgMTguOTczIDM3Ny40NTggMTkuNjYyMyAzNzYuNzY0IDIwLjIyMDJDMzc2LjMwMSAxOS41NjM5IDM3NS43NCAxOC42NzcxIDM3NS43NCAxNy45ODgyQzM3NS43NCAxNy4yMzMxIDM3Ni4yNjggMTYuODA2MSAzNzYuOTk1IDE2LjgwNjFDMzc3Ljk4NyAxNi44MDY1IDM3OC4xNTIgMTcuNjkyNiAzNzguMTUyIDE3Ljk4ODJWMTcuOTg4MlpNMzc4LjQ4MiAyNS4wMTMyQzM3OC4xMTkgMjUuMzQxNyAzNzcuMjYgMjUuOTY1NSAzNzYuNTMzIDI1Ljk2NTVDMzc1LjU3NCAyNS45NjU1IDM3NC40MTggMjUuMjc1OSAzNzQuNDE4IDIzLjc5ODZDMzc0LjQxOCAyMi40ODU1IDM3NS4yNzcgMjEuODk0NyAzNzUuODA2IDIxLjU2NjVDMzc3LjAyOCAyMy4yNDA2IDM3Ny4wOTUgMjMuMzM5MSAzNzguNDgyIDI1LjAxMzJaTTM3OS44MDQgMzIuMjAyOEMzNzkuODA0IDMzLjI1MzUgMzc5LjI3NSAzNC40MDI2IDM3Ny43NTUgMzQuNDAyNkMzNzcuMzI2IDM0LjQwMjYgMzc2LjkyOSAzNC40MDI2IDM3Ni41MzMgMzQuMzY5M1YzMC4yNjU2QzM3Ni45MjkgMzAuMTY3NiAzNzcuNDI1IDMwLjEzNDMgMzc3LjcyMiAzMC4xMzQzQzM3OS4wMTEgMzAuMTM0MyAzNzkuODA0IDMwLjg4OTggMzc5LjgwNCAzMi4yMDI4Wk0zMzguNjAyIDIyLjgxNDFDMzM3LjkwOSAyMi44NDY2IDMzNy41NDUgMjIuODQ2NiAzMzcuMDgyIDIyLjg0NjZDMzM2LjUyMSAyMi44NDY2IDMzNi4xOSAyMi44NDY2IDMzNS40NjMgMjIuODE0MUwzMzcuMDgyIDE5LjAwNkwzMzguNjAyIDIyLjgxNDFaTTMzMy4xNTEgMzIuMzAwOEMzMzMuMTUxIDMzLjgxMTEgMzMyLjI1OCAzNC43OTU5IDMzMC44MDUgMzQuNzk1OUMzMzAuNTA3IDM0Ljc5NTkgMzMwLjE3NyAzNC43OTU5IDMyOS43OCAzNC43MzAxVjMwLjIzMjdDMzMwLjI0MyAzMC4xNjY5IDMzMC42MzkgMzAuMTMzOSAzMzEuMDM2IDMwLjEzMzlDMzMyLjQyNCAzMC4xMzQzIDMzMy4xNTEgMzEuMDIxMSAzMzMuMTUxIDMyLjMwMDhaTTM2OS41MjggMjMuNjY3NkMzNjkuNTI4IDIyLjAyNiAzNjguNDM4IDIxLjMwMzkgMzY2LjU1NSAyMC41MTYyQzM2NS4yIDE5Ljk1ODMgMzY0LjUwNiAxOS40OTg4IDM2NC41MDYgMTguNDE1MUMzNjQuNTA2IDE3LjQ2MzIgMzY1LjI2NiAxNi44MDY1IDM2Ni41MjEgMTYuODA2NUMzNjcuMzQ4IDE2LjgwNjUgMzY4LjA3NSAxNy4xMDE3IDM2OC43MzUgMTcuNjI3NUMzNjguODAyIDE3LjI2NjQgMzY4Ljk2NyAxNi45MDQ5IDM2OS4xMzEgMTYuNjQyMkMzNjguMzcyIDE2LjI4MTEgMzY3LjQ3OSAxNi4xMTcyIDM2Ni41ODcgMTYuMTE3MkMzNjMuOTQ0IDE2LjExNzIgMzYyLjk4NiAxNy42NiAzNjIuOTg2IDE5LjAwNkMzNjIuOTg2IDIwLjU4MTcgMzYzLjgxMiAyMS4zMzY4IDM2NS44NjEgMjIuMTI0NEMzNjcuMTQ5IDIyLjYxNjkgMzY3LjgxIDIzLjI0MDYgMzY3LjgxIDI0LjM1NjhDMzY3LjgxIDI1LjQ3MyAzNjYuOTUxIDI2LjE5NTIgMzY1Ljc2MiAyNi4xOTUyQzM2NS4wMzUgMjYuMTk1MiAzNjMuODc5IDI1LjgzNDEgMzYzLjA1MiAyNS4xMTE5QzM2My4wMiAyNS41Mzg5IDM2Mi45ODYgMjUuOSAzNjIuODg3IDI2LjI2MTFDMzYzLjM4MyAyNi41MjM4IDM2NC42MDYgMjYuOTE3NCAzNjUuNzI5IDI2LjkxNzRDMzY4LjUwNCAyNi45MTc0IDM2OS41MjggMjUuMjQzMyAzNjkuNTI4IDIzLjY2NzZWMjMuNjY3NloiIGZpbGw9IiMwMzY1NTUiLz4NCjxwYXRoIGQ9Ik02NDAuNDE2IDIwLjU1NzNDNjM4LjY3MSAxOS44MzU0IDYzNy42MzEgMTkuNTU1MSA2MzYuNTk4IDE5LjU1NTFDNjM1LjUxNCAxOS41NTUxIDYzNC44MTkgMTkuOTE3IDYzNC44MTkgMjAuNDc2NUM2MzQuODE5IDIyLjE2NDUgNjQwLjk2MiAyMS42ODkzIDY0MC45NjIgMjUuNTkzNkM2NDAuOTYyIDI3Ljc0NjQgNjM5LjAyNCAyOC45OTc0IDYzNi4zMzIgMjguOTk3NEM2MzQuMjIgMjguOTk3NCA2MzMuMTggMjguNDg4IDYzMS45ODMgMjcuOTExNlYyNS40OTYyQzYzMy43MSAyNi41NjM1IDYzNC43NjggMjYuOTQwMSA2MzYuMTAxIDI2Ljk0MDFDNjM3LjI1NiAyNi45NDAxIDYzNy44NzkgMjYuNTYzNSA2MzcuODc5IDI1LjkwNjNDNjM3Ljg3OSAyNC4wNjg1IDYzMS43MzcgMjQuNzQxNSA2MzEuNzM3IDIwLjcyMTNDNjMxLjczNyAxOC43ODI3IDYzMy41MzQgMTcuNDk5IDYzNi4zMzIgMTcuNDk5QzYzNy42ODIgMTcuNDk5IDYzOC45MDEgMTcuNzYzNSA2NDAuNDE2IDE4LjM3MDdWMjAuNTU3M1pNNjQ5LjAxNiAyOC40ODQxQzY0Ny45OTIgMjguODMwNiA2NDcuMTI2IDI4Ljk5NTQgNjQ2LjI2MiAyOC45OTU0QzY0My40MDIgMjguOTk1NCA2NDEuNTUyIDI3LjQ0MjIgNjQxLjU1MiAyNS4wNzkyQzY0MS41NTIgMjIuNzU5NCA2NDMuNDczIDIxLjEyMDIgNjQ2LjE1NiAyMS4xMjAyQzY0Ni45ODUgMjEuMTIwMiA2NDguMDQ0IDIxLjMxODIgNjQ4Ljg5MSAyMS42MTIzVjIzLjM4ODFDNjQ4LjIyMSAyMy4wNTYyIDY0Ny40NDQgMjIuODc0MSA2NDYuODA5IDIyLjg3NDFDNjQ1LjI3MyAyMi44NzQxIDY0NC4yODYgMjMuNzM0MyA2NDQuMjg2IDI1LjA2MTlDNjQ0LjI4NiAyNi40MDggNjQ1LjI1NiAyNy4yOTQgNjQ2LjcyIDI3LjI5NEM2NDcuMzM3IDI3LjI5NCA2NDcuODg2IDI3LjE2MjMgNjQ5LjAxNiAyNi43NjhMNjQ5LjAxNiAyOC40ODQxWk02NzEuMzIgMjQuMjA5QzY3MS40MjUgMjMuMTU0OCA2NzIuMDgxIDIyLjU0NTcgNjczLjA4NyAyMi41NDU3QzY3NC4wNzYgMjIuNTQ1NyA2NzQuNzQ2IDIzLjE3MjEgNjc0Ljg1MiAyNC4yMDlINjcxLjMyWk02NzIuOTEgMjEuMTIyOUM2NzAuNCAyMS4xMjI5IDY2OC42MTQgMjIuNzc1NSA2NjguNjE0IDI1LjEwMTJDNjY4LjYxNCAyNy40NDQxIDY3MC40NzEgMjguOTk1NCA2NzMuMzM1IDI4Ljk5NTRDNjczLjk3IDI4Ljk5NTQgNjc1LjUwNCAyOC45OTU0IDY3Ni45NjYgMjcuOTg3VjI2LjUwNDJDNjc1Ljc2OSAyNy4yOTkzIDY3NC45NzcgMjcuNTczMSA2NzMuOTU1IDI3LjU3MzFDNjcyLjM0MSAyNy41NzMxIDY3MS4zNTQgMjYuNzk0OSA2NzEuMjY1IDI1LjQ2NjZINjc3LjExQzY3Ny4yMzIgMjIuNjkzOSA2NzUuMjc5IDIxLjEyMjkgNjcyLjkxIDIxLjEyMjlWMjEuMTIyOVpNNjc4LjA5OSAyOC44NTcySDY4MC42NTRWMjEuMjYyN0g2NzguMDk5VjI4Ljg1NzJaTTY4Ny43NjcgMjYuNzgxNUM2ODcuMjM0IDI3LjIyODEgNjg2Ljc5MiAyNy40MDcyIDY4Ni4yNDYgMjcuNDA3MkM2ODUuMDQzIDI3LjQwNzIgNjg0LjI4MSAyNi40ODM4IDY4NC4yODEgMjUuMTAwNEM2ODQuMjgxIDIzLjU4NDEgNjg1LjA0MyAyMi43MTAxIDY4Ni4zMzEgMjIuNzEwMUM2ODYuNzkyIDIyLjcxMDEgNjg3LjM5NCAyMi45MDggNjg3Ljc2NyAyMy4xNTU5VjI2Ljc4MTVaTTY4Ny43NjcgMTcuNjM5MVYyMS41OTU4QzY4Ny4wNzYgMjEuMjg0NyA2ODYuMzg4IDIxLjEyMDIgNjg1LjY0NCAyMS4xMjAyQzY4My4zMTMgMjEuMTIwMiA2ODEuNyAyMi43MjY2IDY4MS43IDI1LjA1MDdDNjgxLjcgMjcuMzI0OCA2ODMuMzEzIDI4Ljk5NzQgNjg1LjUgMjguOTk3NEM2ODYuMzY3IDI4Ljk5NzQgNjg3LjAzNyAyOC43ODU2IDY4Ny43NjcgMjguMjQzNVYyOC44NTQ5SDY5MC4zMjJWMTcuNjM5MUg2ODcuNzY3Wk02OTQuMTA1IDI0LjIwOUM2OTQuMjExIDIzLjE1NDggNjk0Ljg2NCAyMi41NDU3IDY5NS44NjggMjIuNTQ1N0M2OTYuODU4IDIyLjU0NTcgNjk3LjUzNSAyMy4xNzIxIDY5Ny42NDEgMjQuMjA5SDY5NC4xMDVaTTY5NS42OTQgMjEuMTIyOUM2OTMuMTg0IDIxLjEyMjkgNjkxLjQgMjIuNzc1NSA2OTEuNCAyNS4xMDEyQzY5MS40IDI3LjQ0NDEgNjkzLjI1OSAyOC45OTU0IDY5Ni4xMTkgMjguOTk1NEM2OTYuNzUzIDI4Ljk5NTQgNjk4LjI5IDI4Ljk5NTQgNjk5Ljc1NSAyNy45ODdWMjYuNTA0MkM2OTguNTU3IDI3LjI5OTMgNjk3Ljc2MyAyNy41NzMxIDY5Ni43MzYgMjcuNTczMUM2OTUuMTMxIDI3LjU3MzEgNjk0LjE0IDI2Ljc5NDkgNjk0LjA1MSAyNS40NjY2SDY5OS44OTRDNzAwLjAxNSAyMi42OTM5IDY5OC4wNjEgMjEuMTIyOSA2OTUuNjk0IDIxLjEyMjkiIGZpbGw9IiMwMDlFNEQiLz4NCjxwYXRoIGQ9Ik03MDMuNzIxIDIzLjQzNjhINzAzLjc1OEM3MDQuNTE3IDIxLjg1NjIgNzA1LjM2NiAyMS4xMTUgNzA2LjM1MiAyMS4xMTVDNzA2Ljg2MiAyMS4xMTUgNzA3LjMwMyAyMS4yOTY0IDcwOC4wNDQgMjEuODA3Nkw3MDcuMzQxIDIzLjkxMzNDNzA2LjY3IDIzLjUxODYgNzA2LjIyOSAyMy4zNTM1IDcwNS44MjMgMjMuMzUzNUM3MDQuODg2IDIzLjM1MzUgNzA0LjI4NiAyNC4xNzc1IDcwMy43MjEgMjUuNTcwNFYyOC44NDY2SDcwMS4xNjJWMjEuMjU0MUg3MDMuNzIxVjIzLjQzNjhaTTY4MC43NzUgMTguMDY3NEM2ODEuMDE1IDE4LjY1NzUgNjgwLjU4MyAxOS40ODA1IDY3OS44MTQgMTkuOTA0QzY3OS4wNDEgMjAuMzI3MSA2NzguMjI0IDIwLjE5MjggNjc3Ljk4NiAxOS42MDI3QzY3Ny43NDMgMTkuMDExNyA2NzguMTczIDE4LjE4NzcgNjc4Ljk0NSAxNy43NjY2QzY3OS43MTYgMTcuMzQxMSA2ODAuNTMzIDE3LjQ3NTkgNjgwLjc3NSAxOC4wNjc0WiIgZmlsbD0iIzAwOUU0RCIvPg0KPHBhdGggZD0iTTY1OC4yMiAyNC4wMjMxQzY1OC4yMiAyMS45NjUxIDY1Ni43MTkgMjEuMTIyNiA2NTUuMjM5IDIxLjEyMjZDNjU0LjIzMiAyMS4xMjI2IDY1My40MDQgMjEuNTE4NCA2NTIuNjY0IDIyLjM5MjFINjUyLjYyOVYxNy42MzkySDY1MC4wNzFWMjguODM1M0g2NTIuNjI5VjI0LjAyMzFDNjUzLjIyOCAyMy4yMTYxIDY1My43MzggMjIuODcxMSA2NTQuMzM4IDIyLjg3MTFDNjU1LjEzNCAyMi44NzExIDY1NS42NjIgMjMuMzk4NiA2NTUuNjYyIDI0LjUzMjlWMjcuMjAwOEM2NTYuNTIgMjYuNzg5NiA2NTcuMzkzIDI2LjUzNzQgNjU4LjIyIDI2LjQ0MzhWMjQuMDIzMVpNNjY0LjYzNiAyMS4xMTk5QzY2My41OTQgMjEuMTE5OSA2NjIuNzk5IDIxLjQ4MTEgNjYxLjk4NCAyMi4zNDkzVjIxLjI2MjRINjU5LjQyOFYyNi40MjM0QzY2MC4zMTMgMjYuNTA1OCA2NjEuNDQzIDI2Ljg4NDcgNjYxLjk4NCAyNy41MTA0VjIzLjk2MzRDNjYyLjY1NyAyMy4wMjMyIDY2My4xMzQgMjIuNzA5NyA2NjMuNzcgMjIuNzA5N0M2NjQuNDk0IDIyLjcwOTcgNjY1LjA0NSAyMy4xNTU2IDY2NS4wNDUgMjQuMjI2NFYyOC44MzcySDY2Ny42MDJWMjQuMDI4OUM2NjcuNjAyIDIxLjc5MjYgNjY1LjkwOCAyMS4xMTk5IDY2NC42MzYgMjEuMTE5OVYyMS4xMTk5Wk02NjkuMDE1IDMxLjAxODFINjY2LjA0M1YzMi45ODY0SDY2OC45MDlWMzMuODMxMkg2NjYuMDQzVjM1Ljg2MTlINjY5LjEwM1YzNi43MDU1SDY2NS4wNDZWMzAuMTc1Mkg2NjkuMDE1TDY2OS4wMTUgMzEuMDE4MVpNNjcxLjQ0MiAzNi43MDkzSDY3Mi4zNTJWMzAuMTczM0g2NzEuNDQyVjM2LjcwOTNaTTY3Ni44NTkgMzMuMDQ4NEM2NzcuNTA0IDMzLjA0ODQgNjc3LjkwNCAzMy40NjMxIDY3Ny45MzUgMzQuMTE0Mkg2NzUuNjE2QzY3NS43NDIgMzMuNDM0MiA2NzYuMTYxIDMzLjA0ODQgNjc2Ljg1OSAzMy4wNDg0Wk02NzUuNiAzNC42ODFINjc4Ljg0MkM2NzguODQyIDMzLjA4NjkgNjc4LjA2MiAzMi4zMTggNjc2LjgzOCAzMi4zMThDNjc1LjU2OSAzMi4zMTggNjc0LjY4OCAzMy4xOTI0IDY3NC42ODggMzQuNDk2OUM2NzQuNjg4IDM1LjY4OSA2NzUuNDg0IDM2Ljc4OTggNjc2LjkxNyAzNi43ODk4QzY3Ny42OTggMzYuNzg5OCA2NzguMjAzIDM2LjYyODEgNjc4Ljc2MyAzNi4yODJWMzUuNDU2QzY3OC4yMjIgMzUuNzg1NiA2NzcuNjk4IDM1Ljk3NTggNjc3LjE0NyAzNS45NzU4QzY3Ni4yNjUgMzUuOTc1OCA2NzUuNzQyIDM1LjUzNSA2NzUuNiAzNC42ODA2VjM0LjY4MVpNNjg0Ljc4NiAzMy41MzA5QzY4NC4yNjMgMzMuMTk2NiA2ODMuOTE0IDMzLjA5ODUgNjgzLjUxNSAzMy4wOTg1QzY4Mi42ODIgMzMuMDk4NSA2ODIuMTA1IDMzLjY5NDUgNjgyLjEwNSAzNC41NjdDNjgyLjEwNSAzNS40NTYgNjgyLjcxOSAzNS45OTE2IDY4My42NjggMzUuOTkxNkM2ODQuMDU4IDM1Ljk5MTYgNjg0LjQzIDM1Ljg5NzMgNjg0Ljg4OCAzNS43MDU5VjM2LjU0MjZDNjg0LjU4MiAzNi42Nzc0IDY4My45OTcgMzYuNzg5OCA2ODMuNTE1IDM2Ljc4OThDNjgyLjEzNiAzNi43ODk4IDY4MS4xOCAzNS45MDYyIDY4MS4xOCAzNC42NDMyQzY4MS4xOCAzMy4yMTc4IDY4Mi4wNTQgMzIuMzE4IDY4My40NTMgMzIuMzE4QzY4My45ODcgMzIuMzE4IDY4NC4zNDYgMzIuNDMzOSA2ODQuNzg3IDMyLjYxNDVMNjg0Ljc4NiAzMy41MzA5Wk02ODguOTM0IDMyLjQwMDRINjkwLjM5NVYzMy4xNjUxSDY4OC45MzRWMzUuMzc1MkM2ODguOTM0IDM1Ljg4MTEgNjg5LjMyNyAzNi4wMjc0IDY4OS41OTMgMzYuMDI3NEM2ODkuOTIyIDM2LjAyNzQgNjkwLjI2MiAzNS45MiA2OTAuNjMgMzUuNzA3OVYzNi41MDM3QzY5MC4zMSAzNi42Njc4IDY4OS44MiAzNi43ODk4IDY4OS41MTkgMzYuNzg5OEM2ODguNTI4IDM2Ljc4OTggNjg4LjAyNyAzNi4yMTYxIDY4OC4wMjcgMzUuNDM5MVYzMy4xNjUxSDY4Ny4yMjRWMzMuMDcwM0w2ODguOTM0IDMxLjUxMDJWMzIuNDAwNFpNNjkzLjg3NiAzMi40MDA0VjMzLjM5NjlINjkzLjg5NUM2OTQuMzU5IDMyLjYzNDUgNjk0LjggMzIuMzE4IDY5NS4yMyAzMi4zMThDNjk1LjYwMSAzMi4zMTggNjk1Ljk0NyAzMi40ODAxIDY5Ni4zMjkgMzIuODE2Nkw2OTUuODQ3IDMzLjU2NDRDNjk1LjU3IDMzLjMwOTEgNjk1LjIxMSAzMy4xMzMxIDY5NC45OTUgMzMuMTMzMUM2OTQuMzY4IDMzLjEzMzEgNjkzLjg3NiAzMy43MjY4IDY5My44NzYgMzQuNDYyNlYzNi43MDkzSDY5Mi45NjdWMzIuNDAwNEg2OTMuODc2Wk03MDUuNjU3IDMzLjUzMDlDNzA1LjEzMSAzMy4xOTY2IDcwNC43ODIgMzMuMDk4NSA3MDQuMzgxIDMzLjA5ODVDNzAzLjU0OSAzMy4wOTg1IDcwMi45NzcgMzMuNjk0NSA3MDIuOTc3IDM0LjU2N0M3MDIuOTc3IDM1LjQ1NiA3MDMuNTkyIDM1Ljk5MTYgNzA0LjUzNSAzNS45OTE2QzcwNC45MjUgMzUuOTkxNiA3MDUuMjk1IDM1Ljg5NzMgNzA1Ljc2IDM1LjcwNTlWMzYuNTQyNkM3MDUuNDQ3IDM2LjY3NzQgNzA0Ljg2MiAzNi43ODk4IDcwNC4zOCAzNi43ODk4QzcwMy4wMDQgMzYuNzg5OCA3MDIuMDQ0IDM1LjkwNjIgNzAyLjA0NCAzNC42NDMyQzcwMi4wNDQgMzMuMjE3OCA3MDIuOTIyIDMyLjMxOCA3MDQuMzIgMzIuMzE4QzcwNC44NTUgMzIuMzE4IDcwNS4yMTIgMzIuNDMzOSA3MDUuNjU3IDMyLjYxNDVMNzA1LjY1NyAzMy41MzA5Wk02OTguNzQyIDM2LjcwOTNINjk5LjY1MlYzMi40MDA4SDY5OC43NDJWMzYuNzA5M1oiIGZpbGw9IiMwMDlFNEQiLz4NCjxwYXRoIGQ9Ik02OTkuNjg0IDMwLjg1MjVDNjk5Ljc3MyAzMS4wNjA0IDY5OS42MTggMzEuMzU0NCA2OTkuMzQ0IDMxLjUwNDFDNjk5LjA2OCAzMS42NTQzIDY5OC43NzYgMzEuNjA2MiA2OTguNjkzIDMxLjM5NzhDNjk4LjYxIDMxLjE4NzQgNjk4Ljc2MSAzMC44OTU4IDY5OS4wMzggMzAuNzQ1NkM2OTkuMzExIDMwLjU5MzUgNjk5LjYwMSAzMC42NDIxIDY5OS42ODQgMzAuODUyNVYzMC44NTI1Wk02NTguOTQgMzEuMjAwOUM2NTguNzc5IDMxLjIwMDkgNjU4LjcxMSAzMS4yMjU1IDY1OC42NDYgMzEuMjkzOEM2NTguNjIgMzEuMzIwMyA2NTguNjEgMzEuMzQ3MiA2NTguNiAzMS40MDExTDY1Ny43ODQgMzQuMjg3QzY1Ny41OTMgMzUuMjk5MiA2NTYuMjU5IDM2LjMwOTkgNjU0LjUyMSAzNi4zMDk5SDY1Mi4xMDRMNjUyLjUyMyAzNC44MjdINjU0LjA3NkM2NTQuMjM0IDM0LjgyNyA2NTQuMzU4IDM0Ljc3MjEgNjU0LjQ2MiAzNC42NjQzQzY1NC41IDM0LjYyMjUgNjU0LjU1IDM0LjU1NyA2NTQuNTU2IDM0LjQ4OTZMNjU1LjIwMSAzMS45NjgxQzY1NS4zOTEgMzAuOTU1NSA2NTYuNTM4IDI5LjgzNjkgNjU4LjI3NiAyOS44MzY5SDY2MC43NTFMNjYwLjQzNSAzMS4yMDA5SDY1OC45NFpNNjU5LjQ5NyAzMi45NTk2TDY1OS43NzMgMzIuMDI1OUg2NjIuMjg4QzY2Mi41OTggMzAuNjcyIDY2Mi4zNTQgMjkuNDE3NyA2NjEuNDczIDI4LjU5NjFDNjU5LjY4OSAyNi45MzMyIDY1NS45NTcgMjcuNDk4MyA2NTMuMTc3IDI5Ljk3NzlDNjUyLjc0MyAzMC4zNjMgNjUyLjM3NiAzMC43NzkzIDY1Mi4wNDIgMzEuMjA0OEg2NTMuNTU2TDY1My4yMDQgMzIuMTQwNEg2NTEuMzk1QzY1MS4yMjIgMzIuNDM1NCA2NTEuMDYgMzIuNzI4MSA2NTAuOTM2IDMzLjAyNUg2NTMuMDgxTDY1Mi43MzcgMzMuOTYwN0g2NTAuNjNDNjUwLjI2OSAzNS4zOTAxIDY1MC40OTkgMzYuNzIzMyA2NTEuNDA2IDM3LjU2OTlDNjUzLjE2NyAzOS4yMTE2IDY1Ni44ODggMzguNjM0NiA2NTkuNjY3IDM2LjE1NTRDNjYwLjE1MyAzNS43MjQyIDY2MC41NTUgMzUuMjU4NyA2NjAuOTE4IDM0Ljc4MDhINjU4Ljk3M0w2NTkuMjY5IDMzLjg0NzFINjYxLjU0M0M2NjEuNzEgMzMuNTUwMSA2NjEuODYzIDMzLjI1NjUgNjYxLjk4MyAzMi45NTk2SDY1OS40OTdaIiBmaWxsPSIjMDA5RTREIi8+DQo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNThfMTExKSI+DQo8cGF0aCBkPSJNNzc1LjA2OCA0MS4yMjc0Qzc2Ni4yODUgNDIuMDQ2MyA3NTcuMTMxIDQwLjc1NjQgNzU1Ljg0OCAzMy44MTlDNzU1LjIyMSAzMC4zOTkgNzU2Ljc2NSAyNi43NzI1IDc1OC44MSAyNC41MTg0VjIzLjMxNDhDNzU1LjEyNiAyNi41OCA3NTMuMTMgMzAuNzExNSA3NTQuMjggMzUuNTkyQzc1NS43NDggNDEuODUxOCA3NjMuNjAzIDQ1LjM5NjcgNzc1LjU5NSA0NC4yMTk1Qzc4MC4zNDIgNDMuNzU0NSA3ODYuNTUgNDIuMjEyIDc5MC44NjkgMzkuODE0NFYzNi40MTA5Qzc4Ni45NDkgMzguNzcxMyA3ODAuNDY4IDQwLjcyMTEgNzc1LjA2OCA0MS4yMjc0VjQxLjIyNzRaTTc5OC4yMDUgMjMuMjMzNUM3OTYuMTIyIDEyLjk1MzMgNzc2LjM3MyAxMi4zMDE2IDc2My42NDMgMjAuMTMzOFYyMC45OTg5Qzc3Ni4zNTkgMTQuMzkxNSA3OTQuMzk1IDE0LjQzMTcgNzk2LjAzNyAyMy45MDE2Qzc5Ni41ODkgMjcuMDM0MiA3OTQuODQzIDMwLjI5NzggNzkxLjcyMyAzMi4xNzdWMzQuNjM0MkM3OTUuNDc2IDMzLjI0MzIgNzk5LjMyNCAyOC43NDQyIDc5OC4yMDUgMjMuMjMzNVYyMy4yMzM1WiIgZmlsbD0iIzBFN0RDMiIvPg0KPHBhdGggZD0iTTc5MC4xNTkgMjEuNzM2OEg3ODcuODU2VjMyLjEwM0M3ODcuODU2IDMzLjMxNzkgNzg4LjQzNyAzNC4zNzQ0IDc5MC4xNTkgMzQuNTQzMlYyMS43MzY4Wk03NjIuNzM5IDI1LjUyMTdINzYwLjQzMkw3NjAuNDMxIDMyLjI5NDNDNzYwLjQzMSAzMy41MTM0IDc2MS4wMTMgMzQuNTY4OCA3NjIuNzM5IDM0LjczNDRWMjUuNTIxN1YyNS41MjE3Wk03NjAuNDMyIDIyLjA1MjFINzYyLjczMlYyNC4yNTg0SDc2MC40MzJWMjIuMDUyMVpNNzc2LjUzIDM0LjYyNzJDNzc0LjY2NiAzNC42MjcyIDc3My44NzcgMzMuMzE3NyA3NzMuODc3IDMyLjAyOFYyMy4wMzU1SDc3Ni4xNlYyNS41MjE3SDc3Ny44NzlWMjcuMzg1M0g3NzYuMTZWMzEuODg1NEM3NzYuMTYgMzIuNDExMyA3NzYuNDA3IDMyLjcwNDQgNzc2Ljk1IDMyLjcwNDRINzc3Ljg3OVYzNC42MjcyTDc3Ni41MyAzNC42MjcyVjM0LjYyNzJaTTc4MC43MzEgMzAuNzk2MUM3ODAuNzMxIDMxLjk3NjggNzgxLjQ2MSAzMi44NDQ2IDc4Mi43NTQgMzIuODQ0NkM3ODMuNzY2IDMyLjg0NDYgNzg0LjI2NiAzMi41NjA1IDc4NC44NSAzMS45NzY4TDc4Ni4yNjEgMzMuMzM0OUM3ODUuMzU3IDM0LjIzNzkgNzg0LjQwOSAzNC43ODcgNzgyLjczNyAzNC43ODdDNzgwLjU1MiAzNC43ODcgNzc4LjQ1OSAzMy41ODE5IDc3OC40NTkgMzAuMDY4NkM3NzguNDU5IDI3LjA2NTEgNzgwLjI4OCAyNS4zNjczIDc4Mi42ODYgMjUuMzY3M0M3ODUuMTI0IDI1LjM2NzMgNzg2LjUyNSAyNy4zNTQ5IDc4Ni41MjUgMjkuOTYzOVYzMC43OTYzSDc4MC43MzFWMzAuNzk2MVpNNzgyLjU4NiAyNy4yNzU2Qzc4MS44MDUgMjcuMjc1NiA3ODEuMjA0IDI3LjY4MjMgNzgwLjk1IDI4LjIzMDlDNzgwLjgwMiAyOC41NjA3IDc4MC43NDcgMjguODE3NyA3ODAuNzMxIDI5LjIyMjlINzg0LjI0OUM3ODQuMjA0IDI4LjIzMDkgNzgzLjc1OSAyNy4yNzU2IDc4Mi41ODYgMjcuMjc1NlpNNzY4LjkzOSAyNy4zODUzQzc2OS42MDggMjcuMzg1MyA3NjkuODg3IDI3LjcxOTggNzY5Ljg4NyAyOC4yNjI2VjM0LjY0MDZINzcyLjE3VjI4LjI0OTJDNzcyLjE3IDI2Ljk1NDIgNzcxLjQ4NyAyNS41MjQxIDc2OS40ODIgMjUuNTI0MUw3NjQuNzY2IDI1LjUyMTdWMzQuNjQwNkg3NjcuMDVWMjcuMzg1M0g3NjguOTM5VjI3LjM4NTNaTTc5Mi42MzcgMjMuNTg5MUM3OTIuMTI5IDIzLjU4OTEgNzkxLjcyNCAyMy4xNzU0IDc5MS43MjQgMjIuNjYyOUM3OTEuNzI0IDIyLjE1MjkgNzkyLjEyOSAyMS43MzY4IDc5Mi42MzcgMjEuNzM2OEM3OTMuMTQyIDIxLjczNjggNzkzLjU1NiAyMi4xNTI5IDc5My41NTYgMjIuNjYyOUM3OTMuNTU2IDIzLjE3NTQgNzkzLjE0MiAyMy41ODkxIDc5Mi42MzcgMjMuNTg5MVpNNzkyLjYzNyAyMS44OTEyQzc5Mi4yMTggMjEuODkxMiA3OTEuODgyIDIyLjI0MDcgNzkxLjg4MiAyMi42NjI5Qzc5MS44ODIgMjMuMDg3NiA3OTIuMjE4IDIzLjQzMDkgNzkyLjYzNyAyMy40MzA5Qzc5My4wNTUgMjMuNDMwOSA3OTMuNDAyIDIzLjA4NzYgNzkzLjQwMiAyMi42NjI5Qzc5My40MDIgMjIuMjQwNyA3OTMuMDU1IDIxLjg5MTIgNzkyLjYzNyAyMS44OTEyWk03OTMuMDQzIDIzLjIxOEg3OTIuODcyQzc5Mi44NjQgMjMuMjE3OSA3OTIuODU3IDIzLjIxNTcgNzkyLjg1MSAyMy4yMTE2Qzc5Mi44NDUgMjMuMjA3NSA3OTIuODQgMjMuMjAxNyA3OTIuODM3IDIzLjE5NDlMNzkyLjYwNSAyMi43OTdDNzkyLjU5OCAyMi43ODg1IDc5Mi41NzkgMjIuNzc4OCA3OTIuNTczIDIyLjc3ODhINzkyLjQ2N1YyMy4xNzU0Qzc5Mi40NjcgMjMuMTk1IDc5Mi40NTMgMjMuMjE4MSA3OTIuNDI4IDIzLjIxODFINzkyLjI3NEM3OTIuMjUxIDIzLjIxODEgNzkyLjIzNSAyMy4xOTUgNzkyLjIzNSAyMy4xNzU0VjIyLjE3NDlDNzkyLjIzNSAyMi4xMTY0IDc5Mi4yNTQgMjIuMDkyNCA3OTIuMzA1IDIyLjA4NUM3OTIuMzYxIDIyLjA3OSA3OTIuNTA1IDIyLjA3MTYgNzkyLjU4NiAyMi4wNzE2Qzc5Mi44NzIgMjIuMDcxNiA3OTMuMDM5IDIyLjE1NjYgNzkzLjAzOSAyMi40MjQ0VjIyLjQ0NEM3OTMuMDM5IDIyLjYwOTQgNzkyLjk1OSAyMi42OTk1IDc5Mi44MzMgMjIuNzM5N0w3OTMuMDc0IDIzLjE1NDdDNzkzLjA3OCAyMy4xNjQgNzkzLjA4IDIzLjE3MzkgNzkzLjA4IDIzLjE4NEM3OTMuMDggMjMuMTk5NyA3OTMuMDcyIDIzLjIxOCA3OTMuMDQzIDIzLjIxOFYyMy4yMThaTTc5Mi44MjEgMjIuNDI0NEM3OTIuODIxIDIyLjMxMjcgNzkyLjc1MiAyMi4yNzczIDc5Mi42MDUgMjIuMjc3M0g3OTIuNDU5VjIyLjU5NDdDNzkyLjQ4MiAyMi41OTQ3IDc5Mi41ODYgMjIuNTk5NiA3OTIuNjA1IDIyLjU5OTZDNzkyLjc1MiAyMi41OTk2IDc5Mi44MjEgMjIuNTUgNzkyLjgyMSAyMi40NDRWMjIuNDI0NFoiIGZpbGw9IiMwRTdEQzIiLz4NCjwvZz4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV81OF8xMTEpIj4NCjxwYXRoIGQ9Ik01MzMuNzczIDIwLjk5MTFDNTI5LjI2MyAyMC45OTExIDUyNS41OTkgMjQuNjU0NyA1MjUuNTk5IDI5LjE2NDRDNTI1LjU5OSAzMy42NzQxIDUyOS4yNjMgMzcuMzM3NyA1MzMuNzczIDM3LjMzNzdDNTM4LjI4MiAzNy4zMzc3IDU0MS45NDYgMzMuNjc0MSA1NDEuOTQ2IDI5LjE2NDRDNTQxLjk0NiAyNC42NTQ3IDUzOC4yODIgMjAuOTkxMSA1MzMuNzczIDIwLjk5MTFaTTUzMy43NzMgMzYuNTE4NkM1MjkuNzEzIDM2LjUxODYgNTI2LjQxOSAzMy4yMTUgNTI2LjQxOSAyOS4xNjQ0QzUyNi40MTkgMjUuMTEzNyA1MjkuNzEzIDIxLjgxMDIgNTMzLjc3MyAyMS44MTAyQzUzNy44MzIgMjEuODEwMiA1NDEuMTI3IDI1LjExMzcgNTQxLjEyNyAyOS4xNjQ0QzU0MS4xMjcgMzMuMjE1IDUzNy44MzIgMzYuNTE4NiA1MzMuNzczIDM2LjUxODZaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZD0iTTUzNi42OSAyMy45MjUyQzUzNi42NjMgMjMuOTA3MiA1MzYuNjI3IDIzLjg5ODIgNTM2LjU5MSAyMy44OTgyQzUzNi40ODMgMjMuODk4MiA1MzYuNDAyIDIzLjk3OTIgNTM2LjQwMiAyNC4wODczVjI2LjY0MzdDNTM2LjQwMiAyNi43MzM3IDUzNi4zMyAyNi44MDU3IDUzNi4yNCAyNi44MDU3SDUzMS4yOUM1MzEuMiAyNi44MDU3IDUzMS4xMzcgMjYuNzMzNyA1MzEuMTI4IDI2LjY0MzdWMjQuMDg3M0M1MzEuMTI4IDI0LjA1MTMgNTMxLjExOSAyNC4wMjQyIDUzMS4xMDEgMjMuOTg4MkM1MzEuMDQ3IDIzLjg5ODIgNTMwLjkzIDIzLjg3MTIgNTMwLjgzOSAyMy45MjUyQzUyOS4wMTIgMjUuMDUwNCA1MjcuOTA1IDI3LjAwMzcgNTI3LjkwNSAyOS4xNjQxQzUyNy45MDUgMzEuMzI0NCA1MjkuMDEyIDMzLjI3NzcgNTMwLjg1NyAzNC40MDI5QzUzMC44ODUgMzQuNDIwOSA1MzAuOTIxIDM0LjQyOTkgNTMwLjk1NyAzNC40Mjk5QzUzMS4wNjUgMzQuNDI5OSA1MzEuMTQ2IDM0LjM0ODkgNTMxLjE0NiAzNC4yNDA5VjMxLjY4NDVDNTMxLjE0NiAzMS41OTQ0IDUzMS4yMTggMzEuNTMxNCA1MzEuMzA4IDMxLjUyMjRINTM2LjI1OEM1MzYuMzQ4IDMxLjUyMjQgNTM2LjQyIDMxLjU5NDQgNTM2LjQyIDMxLjY4NDVWMzQuMjQwOUM1MzYuNDIgMzQuMjc2OSA1MzYuNDI5IDM0LjMwMzkgNTM2LjQ0NyAzNC4zMzk5QzUzNi41MDEgMzQuNDI5OSA1MzYuNjE4IDM0LjQ1NjkgNTM2LjcwOCAzNC40MDI5QzUzOC41NTQgMzMuMjc3NyA1MzkuNjYxIDMxLjMyNDQgNTM5LjY2MSAyOS4xNjQxQzUzOS42NjEgMjcuMDAzNyA1MzguNTM2IDI1LjA1MDQgNTM2LjY5IDIzLjkyNTJWMjMuOTI1MlpNNTMwLjE5MSAzMi4zNjg2TDUzMC4yMTggMzIuNjc0Nkw1MzAuMDIgMzIuNDMxNkM1MjguNDk5IDMwLjUxNDMgNTI4LjQ5OSAyNy44MDQ4IDUzMC4wMiAyNS44ODc1TDUzMC4xOTEgMjUuNjcxNUw1MzAuMjE4IDI1LjY0NDVMNTMwLjE5MSAyNS45NTk2QzUzMC4xNjQgMjYuMjExNiA1MzAuMTU1IDI2LjQ3MjYgNTMwLjE1NSAyNi43MzM3VjMxLjU4NTRDNTMwLjE1NSAzMS44NDY1IDUzMC4xNzMgMzIuMTA3NSA1MzAuMTkxIDMyLjM2ODZaTTUzNi40MDIgMzAuMzg4M0M1MzYuNDAyIDMwLjQ3ODMgNTM2LjMzIDMwLjU1MDMgNTM2LjI0IDMwLjU1MDNINTMxLjI5QzUzMS4yIDMwLjU1MDMgNTMxLjEzNyAzMC40NzgzIDUzMS4xMjggMzAuMzg4M1YyNy45Mzk5QzUzMS4xMjggMjcuODQ5OSA1MzEuMiAyNy43Nzc4IDUzMS4yOSAyNy43Nzc4SDUzNi4yNEM1MzYuMzMgMjcuNzc3OCA1MzYuNDAyIDI3Ljg0OTkgNTM2LjQwMiAyNy45Mzk5VjMwLjM4ODNaTTUzNy41MTkgMzIuNDMxNkw1MzcuMzIxIDMyLjY3NDZMNTM3LjM0OCAzMi4zNjg2QzUzNy4zNzUgMzIuMTE2NSA1MzcuMzg0IDMxLjg1NTUgNTM3LjM4NCAzMS41OTQ0VjI2LjczMzdDNTM3LjM4NCAyNi40NzI2IDUzNy4zNzUgMjYuMjExNiA1MzcuMzQ4IDI1Ljk1OTZMNTM3LjMzOSAyNS44MjQ1TDUzNy4zMyAyNS42ODA1VjI1LjY0NDVMNTM3LjUxOSAyNS44ODc1QzUzOC4yNTcgMjYuODA1NyA1MzguNjYyIDI3Ljk3NTkgNTM4LjY2MiAyOS4xNTUxQzUzOC42NjIgMzAuMzM0MiA1MzguMjU3IDMxLjUxMzQgNTM3LjUxOSAzMi40MzE2VjMyLjQzMTZaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZD0iTTU1NC4yNzYgMjkuMDIwMkM1NTQuMjMxIDI5LjAwMjIgNTU0LjE3NyAyOC45ODQyIDU1NC4xNzcgMjguOTMwMkM1NTQuMTc3IDI4Ljg5NDIgNTU0LjE5NSAyOC44NjcyIDU1NC4yMzEgMjguODQ5MkM1NTQuMjk0IDI4LjgyMjIgNTU1Ljg1MSAyOC4yNjQxIDU1NS44NTEgMjYuNDI3OEM1NTUuODUxIDI0LjM4NDUgNTU0LjQ3NCAyMy4xNjkzIDU1Mi4xNTIgMjMuMTY5M0g1NDYuNTI2VjM1LjE3NzJINTUyLjY2NUM1NTQuNDU2IDM1LjE3NzIgNTU2LjM4MiAzMy45MDggNTU2LjM4MiAzMS44NjQ2QzU1Ni4zODIgMjkuOTExMyA1NTQuOTA2IDI5LjIyNzIgNTU0LjI3NiAyOS4wMjAyVjI5LjAyMDJaTTU0OS4zNjEgMjUuNjI2N0M1NDkuMzYxIDI1LjU4MTcgNTQ5LjM5NyAyNS41NDU2IDU0OS40NDIgMjUuNTQ1Nkg1NTEuNjc1QzU1Mi40MTMgMjUuNTQ1NiA1NTIuOTE3IDI2LjA0MDcgNTUyLjkxNyAyNi43Nzg4QzU1Mi45MTcgMjcuMzU0OSA1NTIuNDY3IDI3Ljk3NiA1NTEuNjIxIDI3Ljk3Nkg1NDkuNDQyQzU0OS4zOTcgMjcuOTc2IDU0OS4zNjEgMjcuOTQgNTQ5LjM2MSAyNy44OTVWMjUuNjI2N1pNNTUxLjY3NSAzMi44MDk4SDU0OS40NDJDNTQ5LjM5NyAzMi44MDk4IDU0OS4zNjEgMzIuNzczOCA1NDkuMzYxIDMyLjcyODhWMzAuMzM0NEM1NDkuMzYxIDMwLjI4OTQgNTQ5LjM5NyAzMC4yNTM0IDU0OS40NDIgMzAuMjUzNEg1NTEuNjIxQzU1Mi42OTIgMzAuMjUzNCA1NTMuMzA0IDMwLjcxMjUgNTUzLjMwNCAzMS41MjI2QzU1My4zMDQgMzIuMzU5NyA1NTIuNzM3IDMyLjgwOTggNTUxLjY3NSAzMi44MDk4VjMyLjgwOThaTTU3NS4zODQgMjcuOTQ5TDU3NC45NTIgMjcuODU5QzU3My45OCAyNy42NTIgNTczLjAzNSAyNy4zOTA5IDU3My4wMzUgMjYuNTUzOEM1NzMuMDM1IDI1LjcxNjcgNTczLjgxOCAyNS4zMzg2IDU3NC41OTIgMjUuMzM4NkM1NzUuNTAxIDI1LjMzODYgNTc2LjQwMSAyNS43NDM3IDU3Ny4wODYgMjYuNDQ1OEw1NzguODY4IDI0LjY4MTVDNTc4LjEwMyAyMy44MzU0IDU3Ni43NDQgMjIuODYzMiA1NzQuNTQ3IDIyLjg2MzJDNTcxLjkwMSAyMi44NjMyIDU3MC4xMTggMjQuMzY2NSA1NzAuMTE4IDI2LjYwNzhDNTcwLjExOCAyOC45NzUyIDU3MS45ODIgMjkuODY2MyA1NzMuNTQ4IDMwLjE5OTRMNTczLjk3MSAzMC4yODk0QzU3NS40OTIgMzAuNjEzNSA1NzYuMjEyIDMwLjg1NjUgNTc2LjIxMiAzMS43MjA2QzU3Ni4yMTIgMzIuNDk0NyA1NzUuNTE5IDMzLjAwNzggNTc0LjQ5MyAzMy4wMDc4QzU3My4yODcgMzMuMDA3OCA1NzIuMjE2IDMyLjQ3NjcgNTcxLjQwNiAzMS40Nzc2TDU2OS41NzggMzMuMjY4OUM1NzAuNTUxIDM0LjQyMTEgNTcxLjgzOCAzNS40NjUyIDU3NC41MjkgMzUuNDY1MkM1NzYuODI1IDM1LjQ2NTIgNTc5LjE1NiAzNC4xMzMgNTc5LjE1NiAzMS41NzY2QzU3OS4xNDcgMjguOTU3MiA1NzcuMzY1IDI4LjM2MzEgNTc1LjM4NCAyNy45NDlWMjcuOTQ5Wk01OTkuMTAzIDIzLjE2OTNWMjcuNTYyQzU5OS4xMDMgMjcuNjA3IDU5OS4wNjcgMjcuNjQzIDU5OS4wMjIgMjcuNjQzSDU5NS4zMzFDNTk1LjI4NiAyNy42NDMgNTk1LjI1IDI3LjYwNyA1OTUuMjUgMjcuNTYyVjIzLjE2OTNINTkyLjIyNlYzNS4xNzcySDU5NS4yNVYzMC40NjA0QzU5NS4yNSAzMC40MTU0IDU5NS4yODYgMzAuMzc5NCA1OTUuMzMxIDMwLjM3OTRINTk5LjAyMkM1OTkuMDY3IDMwLjM3OTQgNTk5LjEwMyAzMC40MTU0IDU5OS4xMDMgMzAuNDYwNFYzNS4xNzcySDYwMi4xNDZWMjMuMTY5M0g1OTkuMTAzWk01ODYuMTQxIDMyLjcxOThDNTg0Ljc4MiAzMi43MTk4IDU4My4zMTUgMzEuNTg1NiA1ODMuMzE1IDI5LjA5MjJDNTgzLjMxNSAyNi44MTQ4IDU4NC42OTIgMjUuNjI2NyA1ODYuMDUxIDI1LjYyNjdDNTg3LjA0MSAyNS42MjY3IDU4Ny43MzQgMjYuMDQwNyA1ODguMjgzIDI2Ljk1ODlMNTkwLjYwNiAyNS40MTk2QzU4OS40MTggMjMuNjczMyA1ODguMDA0IDIyLjg4MTIgNTg2LjAzMyAyMi44ODEyQzU4Mi4xNzEgMjIuODgxMiA1ODAuNDQzIDI2LjAwNDcgNTgwLjQ0MyAyOS4wOTIyQzU4MC40NDMgMzIuODQ1OCA1ODIuNzI5IDM1LjQ2NTIgNTg1Ljk5NyAzNS40NjUyQzU4OC40MjcgMzUuNDY1MiA1ODkuNTM1IDM0LjU3NDEgNTkwLjY5NiAzMi45MjY4TDU4OC4zNTUgMzEuMzUxNkM1ODcuODMzIDMyLjE5NzcgNTg3LjI2NiAzMi43MTk4IDU4Ni4xNDEgMzIuNzE5OFpNNTYzLjE3OCAyMi44NjMyQzU1OS44NzUgMjIuODYzMiA1NTcuNjYxIDI1LjM5MjYgNTU3LjY2MSAyOS4xNjQyQzU1Ny42NjEgMzIuOTM1OCA1NTkuODc1IDM1LjQ2NTIgNTYzLjE3OCAzNS40NjUyQzU2Ni40ODIgMzUuNDY1MiA1NjguNjk2IDMyLjkzNTggNTY4LjY5NiAyOS4xNjQyQzU2OC42OTYgMjUuMzkyNiA1NjYuNDgyIDIyLjg2MzIgNTYzLjE3OCAyMi44NjMyVjIyLjg2MzJaTTU2My4xNzggMzIuNzE5OEM1NjEuNTU4IDMyLjcxOTggNTYwLjUxNCAzMS4zMjQ2IDU2MC41MTQgMjkuMTY0MkM1NjAuNTE0IDI3LjAxMjkgNTYxLjU1OCAyNS42MjY3IDU2My4xNzggMjUuNjI2N0M1NjQuODA4IDI1LjYyNjcgNTY1Ljg2MSAyNy4wMTI5IDU2NS44NjEgMjkuMTY0MkM1NjUuODYxIDMxLjMyNDYgNTY0LjgwOCAzMi43MTk4IDU2My4xNzggMzIuNzE5OFoiIGZpbGw9IiNGODAwMDAiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQ2LjM0NCAyMi4xODExQzE0Ny41OTUgMjIuMjg1NCAxNDguODQ1IDIxLjU1NTMgMTQ5LjYyNyAyMC42Mjk4QzE1MC4zOTUgMTkuNjc4MSAxNTAuOTAzIDE4LjQwMDUgMTUwLjc3MyAxNy4wOTY5QzE0OS42NjYgMTcuMTQ5MSAxNDguMjk4IDE3LjgyNjkgMTQ3LjUxNyAxOC43Nzg2QzE0Ni44IDE5LjU5OTkgMTQ2LjE4OCAyMC45Mjk2IDE0Ni4zNDQgMjIuMTgxMVpNMTQ3Ljg0MSAyMy4wNzk3QzE0OC42NTMgMjIuNzYwNiAxNDkuNjU4IDIyLjM2NTYgMTUwLjc2IDIyLjQyOTFDMTUxLjQ2MyAyMi40ODEyIDE1My40OTUgMjIuNjg5OCAxNTQuNzk4IDI0LjYxOTJDMTU0Ljc5MiAyNC42MjM3IDE1NC43NzggMjQuNjMyMyAxNTQuNzU5IDI0LjY0NUMxNTQuNDM2IDI0Ljg1NDggMTUyLjM5IDI2LjE4NzEgMTUyLjQxNCAyOC44MTY5QzE1Mi40MzkgMzEuOTQ5OSAxNTQuOTg4IDMzLjExODMgMTU1LjMyMiAzMy4yNzExQzE1NS4zNDQgMzMuMjgxMSAxNTUuMzU2IDMzLjI4NjcgMTU1LjM1OCAzMy4yODgzQzE1NS4zNTYgMzMuMjkyNiAxNTUuMzU0IDMzLjMwMSAxNTUuMzUgMzMuMzEzM0MxNTUuMjgzIDMzLjUyODggMTU0Ljg0NSAzNC45NDg5IDE1My44NDcgMzYuNDA0QzE1Mi45MjIgMzcuNzU5OCAxNTEuOTcxIDM5LjA4OTUgMTUwLjQ2IDM5LjExNTZDMTQ5Ljc0OSAzOS4xMjgzIDE0OS4yNyAzOC45MjExIDE0OC43NzIgMzguNzA1NEMxNDguMjQ3IDM4LjQ3ODUgMTQ3LjcwMSAzOC4yNDIyIDE0Ni44NCAzOC4yNDIyQzE0NS45NDcgMzguMjQyMiAxNDUuMzc2IDM4LjQ4NDggMTQ0LjgyNiAzOC43MTg0QzE0NC4zNDggMzguOTIxNCAxNDMuODg3IDM5LjExNzQgMTQzLjI0NSAzOS4xNDE3QzE0MS43ODYgMzkuMTkzOCAxNDAuNjc5IDM3LjcwNzcgMTM5Ljc1NCAzNi4zNTE5QzEzNy44NjYgMzMuNjE0MyAxMzYuNDIgMjguNjM0NCAxMzguMzc0IDI1LjI3MUMxMzkuMzI1IDIzLjU4OTMgMTQxLjA1NyAyMi41MzM0IDE0Mi45MTkgMjIuNTA3M0MxNDMuNzMyIDIyLjQ5MjUgMTQ0LjUwNyAyMi44MDA2IDE0NS4xODQgMjMuMDcwMUMxNDUuNzAyIDIzLjI3NTggMTQ2LjE2MiAyMy40NTg5IDE0Ni41NCAyMy40NTg5QzE0Ni44NzcgMjMuNDU4OSAxNDcuMzE5IDIzLjI4NTEgMTQ3Ljg0MSAyMy4wNzk3WiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik0zNi44NTg3IDM3LjUyNDFIMzEuOTg3NEwzNS4wMzQyIDE5LjY2NjhIMzkuOTA1MkwzNi44NTg3IDM3LjUyNDFaIiBmaWxsPSIjMDA1NzlGIi8+DQo8cGF0aCBkPSJNNTQuNTE1NyAyMC4xMDQxQzUzLjU1NDkgMTkuNzQyOCA1Mi4wMzA5IDE5LjM0MzggNTAuMTQ2NiAxOS4zNDM4QzQ1LjMzNjEgMTkuMzQzOCA0MS45NDg2IDIxLjc3NTMgNDEuOTI3OCAyNS4yNTE2QzQxLjg4NzggMjcuODE2NSA0NC4zNTMxIDI5LjI0MSA0Ni4xOTcgMzAuMDk2MkM0OC4wODE2IDMwLjk3MDEgNDguNzIyMyAzMS41NDA1IDQ4LjcyMjMgMzIuMzE5NEM0OC43MDMxIDMzLjUxNTcgNDcuMTk5NCAzNC4wNjcyIDQ1Ljc5NjkgMzQuMDY3MkM0My44NTIxIDM0LjA2NzIgNDIuODEgMzMuNzgyOSA0MS4yMjY0IDMzLjExNzNMNDAuNTg1IDMyLjgzMkwzOS45MDMzIDM2Ljg0MDZDNDEuMDQ1OCAzNy4zMzM5IDQzLjE1MDcgMzcuNzcxNyA0NS4zMzYxIDM3Ljc5MDlDNTAuNDQ3MyAzNy43OTA5IDUzLjc3NDkgMzUuMzk3MSA1My44MTQzIDMxLjY5MjVDNTMuODMzOCAyOS42NTk3IDUyLjUzMiAyOC4xMDIgNDkuNzI1NCAyNi44MjkyQzQ4LjAyMTcgMjYuMDEyMSA0Ni45NzgzIDI1LjQ2MTIgNDYuOTc4MyAyNC42MjUyQzQ2Ljk5ODMgMjMuODY1MiA0Ny44NjA4IDIzLjA4NjggNDkuNzg0IDIzLjA4NjhDNTEuMzY3NyAyMy4wNDg2IDUyLjUzMTIgMjMuNDA5NCA1My40MTI2IDIzLjc3MDVMNTMuODUzMiAyMy45NjAxTDU0LjUxNTcgMjAuMTA0MVoiIGZpbGw9IiMwMDU3OUYiLz4NCjxwYXRoIGQ9Ik02MC45OTI0IDMxLjE5NzlDNjEuMzkzNiAzMC4xNzIgNjIuOTM3MiAyNi4yMDE2IDYyLjkzNzIgMjYuMjAxNkM2Mi45MTcgMjYuMjM5NyA2My4zMzc2IDI1LjE1NjggNjMuNTc4MSAyNC40OTE5TDYzLjkxODYgMjYuMDMwNkM2My45MTg2IDI2LjAzMDYgNjQuODQxIDMwLjMwNTEgNjUuMDQxNCAzMS4xOTc5QzY0LjI4IDMxLjE5NzkgNjEuOTU0NiAzMS4xOTc5IDYwLjk5MjQgMzEuMTk3OVpNNjcuMDA1NCAxOS42NjY4SDYzLjIzNzRDNjIuMDc1NSAxOS42NjY4IDYxLjE5MjcgMTkuOTg5NSA2MC42OTE0IDIxLjE0ODRMNTMuNDU1OCAzNy41MjM5SDU4LjU2NzFDNTguNTY3MSAzNy41MjM5IDU5LjQwODUgMzUuMzE5OSA1OS41ODk0IDM0Ljg0NTJDNjAuMTUwMSAzNC44NDUyIDY1LjEyMjMgMzQuODQ1MiA2NS44NDM3IDM0Ljg0NTJDNjUuOTgzNSAzNS40NzIxIDY2LjQyNDkgMzcuNTIzOSA2Ni40MjQ5IDM3LjUyMzlINzAuOTM1Mkw2Ny4wMDU0IDE5LjY2NjhWMTkuNjY2OFoiIGZpbGw9IiMwMDU3OUYiLz4NCjxwYXRoIGQ9Ik0yNy45MTggMTkuNjY2OEwyMy4xNDc1IDMxLjg0MzhMMjIuNjI2MiAyOS4zNzQxQzIxLjc0NDIgMjYuNTI0NSAxOC45NzgxIDIzLjQyODQgMTUuODkxNCAyMS44ODlMMjAuMjYxIDM3LjUwNTJIMjUuNDEyMkwzMy4wNjkgMTkuNjY2OEgyNy45MThWMTkuNjY2OFoiIGZpbGw9IiMwMDU3OUYiLz4NCjxwYXRoIGQ9Ik0xOC43MTg0IDE5LjY2NjhIMTAuODgxMUwxMC44MDA5IDIwLjAyNzZDMTYuOTE0NSAyMS41MDk1IDIwLjk2MzUgMjUuMDgxNSAyMi42MjcgMjkuMzc0OUwyMC45MjMyIDIxLjE2NzlDMjAuNjQyNyAyMC4wMjc0IDE5Ljc4MDcgMTkuNzA0NCAxOC43MTg0IDE5LjY2NjhaIiBmaWxsPSIjRkFBNjFBIi8+DQo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDJfNThfMTExKSI+DQo8cGF0aCBkPSJNMjIxLjE1OCAxNy40OTlWMTguOTM1NkgyMzEuMzA2VjE3LjQ5OUgyMjEuMTU4Wk0yMzIuNzQ0IDE3LjQ5OVYxOC45MzU2SDI0Ny4yMDZDMjQ3LjIwNiAxOC45MzU2IDI0NS43MjkgMTcuNDk5IDI0My43NzMgMTcuNDk5SDIzMi43NDRaTTI1MC4wNDMgMTcuNDk5VjE4LjkzNTZIMjU4Ljc5M0wyNTguMjczIDE3LjQ5OUgyNTAuMDQzWk0yNjUuMDY1IDE3LjQ5OUwyNjQuNTQ2IDE4LjkzNTZIMjczLjIxNlYxNy40OTlIMjY1LjA2NVpNMjIxLjE1OCAyMC4yOTI5VjIxLjcyOTZIMjMxLjMwNlYyMC4yOTI5SDIyMS4xNThaTTIzMi43NDQgMjAuMjk1VjIxLjcyOTdIMjQ4Ljg4NEMyNDguODg0IDIxLjcyOTcgMjQ4LjY5NiAyMC42MjM5IDI0OC4zNjcgMjAuMjk1SDIzMi43NDRaTTI1MC4wNDMgMjAuMjk1VjIxLjcyOTdIMjU5Ljc1MkwyNTkuMjcxIDIwLjI5NUgyNTAuMDQzWk0yNjQuMDI3IDIwLjI5NUwyNjMuNTQ2IDIxLjcyOTdIMjczLjIxNlYyMC4yOTVIMjY0LjAyN1YyMC4yOTVaTTIyNC4wNzQgMjMuMDg2OVYyNC41MjU3SDIyOC40NjlWMjMuMDg2OUgyMjQuMDc0VjIzLjA4NjlaTTIzNS42NjEgMjMuMDg2OVYyNC41MjU3SDI0MC4wNTZWMjMuMDg2OUgyMzUuNjYxVjIzLjA4NjlaTTI0NC4zMzEgMjMuMDg2OVYyNC41MjU3SDI0OC43MjZDMjQ4LjcyNiAyNC41MjU3IDI0OS4wMDUgMjMuNzY1OSAyNDkuMDA1IDIzLjA4NjlIMjQ0LjMzMVYyMy4wODY5Wk0yNTIuOTYgMjMuMDg2OVYyNC41MjU3SDI2MC43NTJMMjYwLjIzMiAyMy4wODY5SDI1Mi45NlYyMy4wODY5Wk0yNjMuMDY5IDIzLjA4NjlMMjYyLjU0OCAyNC41MjU3SDI3MC4zNzlWMjMuMDg2OUgyNjMuMDY5VjIzLjA4NjlaTTIyNC4wNzQgMjUuODgzVjI3LjMxOTdIMjI4LjQ2OVYyNS44ODNIMjI0LjA3NFYyNS44ODNaTTIzNS42NjEgMjUuODgzVjI3LjMxOTdIMjQ2Ljg4N0MyNDYuODg3IDI3LjMxOTcgMjQ3LjgyNiAyNi41ODI1IDI0OC4xMjUgMjUuODgzSDIzNS42NjFaTTI1Mi45NiAyNS44ODNWMjcuMzE5N0gyNTcuMzU1VjI2LjUyTDI1Ny42MzQgMjcuMzE5N0gyNjUuNjg0TDI2NS45ODQgMjYuNTJWMjcuMzE5N0gyNzAuMzc5VjI1Ljg4M0gyNjIuMTI5TDI2MS42OTEgMjcuMDk5OUwyNjEuMjUxIDI1Ljg4M0gyNTIuOTZaTTIyNC4wNzQgMjguNjc3VjMwLjExMzdIMjI4LjQ2OVYyOC42NzdIMjI0LjA3NFpNMjM1LjY2MSAyOC42NzdWMzAuMTEzN0gyNDguMTI1QzI0Ny44MjYgMjkuNDE2NSAyNDYuODg3IDI4LjY3NyAyNDYuODg3IDI4LjY3N0gyMzUuNjYxWk0yNTIuOTYgMjguNjc3VjMwLjExMzdIMjU3LjM1NVYyOC42NzdIMjUyLjk2Wk0yNTguMTUzIDI4LjY3N0wyNTguNjg1IDMwLjExMzdIMjY0LjcyMUwyNjUuMjI2IDI4LjY3N0gyNTguMTUzWk0yNjUuOTg0IDI4LjY3N1YzMC4xMTM3SDI3MC4zNzlWMjguNjc3SDI2NS45ODRaTTIyNC4wNzQgMzEuNDcxVjMyLjkwNzZIMjI4LjQ2OVYzMS40NzFIMjI0LjA3NFpNMjM1LjY2MSAzMS40NzFWMzIuOTA3NkgyNDAuMDU2VjMxLjQ3MUgyMzUuNjYxWk0yNDQuMzMxIDMxLjQ3MVYzMi45MDc2SDI0OS4wMDVDMjQ5LjAwNSAzMi4yMjk2IDI0OC43MjYgMzEuNDcxIDI0OC43MjYgMzEuNDcxSDI0NC4zMzFWMzEuNDcxWk0yNTIuOTYgMzEuNDcxVjMyLjkwNzZIMjU3LjM1NVYzMS40NzFIMjUyLjk2Wk0yNTkuMTUxIDMxLjQ3MUwyNTkuNjY2IDMyLjkwNzZIMjYzLjcxM0wyNjQuMjMyIDMxLjQ3MUgyNTkuMTUxWk0yNjUuOTg0IDMxLjQ3MVYzMi45MDc2SDI3MC4zNzlWMzEuNDcxSDI2NS45ODRaTTIyMS4yMzcgMzQuMjY1VjM1LjcwMzdIMjMxLjM4NlYzNC4yNjVIMjIxLjIzN1pNMjMyLjc0NCAzNC4yNjVWMzUuNzAzN0gyNDguMzY3QzI0OC42OTYgMzUuMzc0MyAyNDguODg0IDM0LjI2NSAyNDguODg0IDM0LjI2NUgyMzIuNzQ0VjM0LjI2NVpNMjUwLjEyMyAzNC4yNjVWMzUuNzAzN0gyNTcuMzU1VjM0LjI2NUgyNTAuMTIzWk0yNjAuMTUxIDM0LjI2NUwyNjAuNjggMzUuNzAzN0gyNjIuNzM5TDI2My4yMzYgMzQuMjY1SDI2MC4xNTFaTTI2NS45ODQgMzQuMjY1VjM1LjcwMzdIMjczLjI5NVYzNC4yNjVIMjY1Ljk4NFpNMjIxLjIzNyAzNy4wNjFWMzguNDk3N0gyMzEuMzg2VjM3LjA2MUgyMjEuMjM3Wk0yMzIuNzQ0IDM3LjA2MVYzOC40OTU2SDI0My43NzNDMjQ1LjcyOSAzOC40OTU2IDI0Ny4yMDYgMzcuMDYxIDI0Ny4yMDYgMzcuMDYxSDIzMi43NDRaTTI1MC4xMjMgMzcuMDYxVjM4LjQ5NzdIMjU3LjM1NVYzNy4wNjFIMjUwLjEyM1pNMjYxLjE1NSAzNy4wNjFMMjYxLjY2NCAzOC40OTM2TDI2MS43NTIgMzguNDk1NkwyNjIuMjY5IDM3LjA2MUgyNjEuMTU1VjM3LjA2MVpNMjY1Ljk4NCAzNy4wNjFWMzguNDk3N0gyNzMuMjk1VjM3LjA2MUgyNjUuOTg0WiIgZmlsbD0iIzFGNzBDMSIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzU4XzExMSI+DQo8cmVjdCB3aWR0aD0iNDQuNDQ3MyIgaGVpZ2h0PSIyOS42MzE1IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzUzLjk1NSAxNC44MTU1KSIvPg0KPC9jbGlwUGF0aD4NCjxjbGlwUGF0aCBpZD0iY2xpcDFfNThfMTExIj4NCjxyZWN0IHdpZHRoPSI3Ni41NDgxIiBoZWlnaHQ9IjE2LjM1MDciIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MjUuNTk5IDIwLjk4ODkpIi8+DQo8L2NsaXBQYXRoPg0KPGNsaXBQYXRoIGlkPSJjbGlwMl81OF8xMTEiPg0KPHJlY3Qgd2lkdGg9IjUyLjEzNzIiIGhlaWdodD0iMjAuOTk4NyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyMS4xNTggMTcuNDk5KSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg0K\" style=\"\n            width: 742.5px;\n            position: relative;\n            top: 107px;\n            left: 32px;\n            \">\n            <a href=" + accountURL + " style=\"\n        float: left;\n        border-radius: 56px;\n        background: #0D6EFD;\n        padding-top: 8px;\n        width: 280px;\n        height: 38px;\n        text-align: center;\n        position: relative;\n        top: 127px;\n        left: 274px;\n        font-size: 16px;\n        color: white;\n        text-decoration: none;\n        letter-spacing: 0.02em;\n    \">Claim your FREE account</a>\n            <div style=\"\n    font-size: 14px;\n    position: relative;\n    top: 180px;\n    left: 19px;\n    letter-spacing: 0.02em;\n    font-weight: 500;\n    line-height: 125%;\n\">have a Syncfusion account? <a href=\"https://www.syncfusion.com/account/login?ReturnUrl=/account/login\" style=\"text-decoration: none;\ncolor: #0D6EFD;\nfont-weight: 500;\">Sign In</a></div>\n        </div>\n    </div>";
    if (typeof document !== 'undefined' && !(0,_util__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(document)) {
        var errorBackground = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
            innerHTML: bannerTemplate
        });
        document.body.appendChild(errorBackground);
    }
};


/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-inputs/otp-input/index.js":
/*!*********************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-inputs/otp-input/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpInput: () => (/* reexport safe */ _otp_input__WEBPACK_IMPORTED_MODULE_0__.OtpInput),
/* harmony export */   OtpInputStyle: () => (/* reexport safe */ _otp_input__WEBPACK_IMPORTED_MODULE_0__.OtpInputStyle),
/* harmony export */   OtpInputType: () => (/* reexport safe */ _otp_input__WEBPACK_IMPORTED_MODULE_0__.OtpInputType)
/* harmony export */ });
/* harmony import */ var _otp_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-input */ "./ej2-resources/26.1.38/scripts/ej2-inputs/otp-input/otp-input.js");
/**
 * OtpInput modules
 */



/***/ }),

/***/ "./ej2-resources/26.1.38/scripts/ej2-inputs/otp-input/otp-input.js":
/*!*************************************************************************!*\
  !*** ./ej2-resources/26.1.38/scripts/ej2-inputs/otp-input/otp-input.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpInput: () => (/* binding */ OtpInput),
/* harmony export */   OtpInputStyle: () => (/* binding */ OtpInputStyle),
/* harmony export */   OtpInputType: () => (/* binding */ OtpInputType)
/* harmony export */ });
/* harmony import */ var _ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ej2-base */ "./ej2-resources/26.1.38/scripts/ej2-base/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var INPUTFIELD = 'e-otp-input-field';
var RTL = 'e-rtl';
/**
 * Specifies the type of input for the Otp (One-Time Password) input component.
 */
var OtpInputType;
(function (OtpInputType) {
    /**
     * Specifies the type of input to be number for the Otp input.
     */
    OtpInputType["Number"] = "number";
    /**
     * Specifies the type of input to be text for the Otp input.
     */
    OtpInputType["Text"] = "text";
    /**
     * Specifies the type of input to be password for the Otp input.
     */
    OtpInputType["Password"] = "password";
})(OtpInputType || (OtpInputType = {}));
/**
 * Specifies the style variant for the Otp (One-Time Password) input component.
 */
var OtpInputStyle;
(function (OtpInputStyle) {
    /**
     * Specifies the style of the Otp input to be outlined.
     */
    OtpInputStyle["Outlined"] = "outlined";
    /**
     * Specifies the style of the Otp input to be underlined.
     */
    OtpInputStyle["Underlined"] = "underlined";
    /**
     * Specifies the style of the Otp input to be filled.
     */
    OtpInputStyle["Filled"] = "filled";
})(OtpInputStyle || (OtpInputStyle = {}));
/**
 * Represents the Otp component that allows the user to enter the otp values.
 * ```html
 * <div id='OTPInput'></div>
 * ```
 * ```typescript
 * <script>
 *   var OtpinputObj = new OtpInput();
 *   OtpinputObj.appendTo('#OTPInput');
 * </script>
 * ```
 */
var OtpInput = /** @__PURE__ @class */ (function (_super) {
    __extends(OtpInput, _super);
    function OtpInput(options, element) {
        var _this = _super.call(this, options, element) || this;
        /* Private variables */
        _this.inputs = [];
        _this.previousValue = '';
        _this.separatorElements = [];
        _this.shouldFireFocus = true;
        _this.shouldFireBlur = true;
        _this.isFocusInCalled = false;
        _this.isFocusOutCalled = false;
        return _this;
    }
    OtpInput.prototype.preRender = function () {
        if (!this.element.id) {
            this.element.id = (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.getUniqueID)('e-' + this.getModuleName());
        }
    };
    OtpInput.prototype.render = function () {
        this.initialize();
    };
    OtpInput.prototype.initialize = function () {
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.attributes)(this.element, { 'role': 'group' });
        this.renderInputs();
        this.renderSeparator(1, this.inputs.length);
        this.addPlaceHolder();
        this.updateCssClass(this.cssClass);
        this.updateVariantClass();
        this.updateAriaLabel(this.ariaLabels);
        this.setElementAttributes(this.htmlAttributes, this.element);
        if (this.enableRtl) {
            this.element.classList.add(RTL);
        }
        this.previousValue = this.value.toString();
    };
    OtpInput.prototype.renderInputs = function () {
        this.hiddenInputEle = this.createElement('input', {
            id: 'otpInput_hidden',
            attrs: {
                name: this.element.id,
                type: 'hidden',
                value: this.type === 'number' ? this.value.toString().replace(/\D/g, '') : this.value.toString(),
                autoComplete: 'off'
            }
        });
        this.element.appendChild(this.hiddenInputEle);
        for (var i = 0; i < this.length; i++) {
            this.createOtpInput(i);
        }
    };
    OtpInput.prototype.createOtpInput = function (index) {
        var valueContainer = this.getDefaultValue();
        var inputValue = '';
        if (valueContainer) {
            if (this.type === 'number') {
                var valueAtIndex = valueContainer[parseInt(index.toString(), 10)];
                if (!isNaN(Number(valueAtIndex))) {
                    inputValue = valueAtIndex;
                }
            }
            else {
                inputValue = valueContainer[parseInt(index.toString(), 10)] || '';
            }
        }
        var inputEle = this.createElement('input', {
            id: this.element.id + "-" + (index + 1),
            className: INPUTFIELD + ' ' + 'e-input',
            attrs: {
                maxlength: '1',
                type: this.type,
                inputmode: (this.type === 'number' ? 'numeric' : 'text')
            }
        });
        if (this.disabled) {
            inputEle.setAttribute('disabled', 'disabled');
        }
        this.element.appendChild(inputEle);
        this.inputs.push(inputEle);
        if (inputValue) {
            inputEle.value = inputValue;
        }
        this.wireEvents(inputEle, index);
    };
    OtpInput.prototype.renderSeparator = function (index, length) {
        if (this.separator.length > 0) {
            for (var i = index; i < length; i++) {
                var separatorElement = this.createElement('span', {
                    className: 'e-otp-separator'
                });
                separatorElement.textContent = this.separator;
                this.separatorElements.push(separatorElement);
                this.element.insertBefore(separatorElement, this.inputs[parseInt(i.toString(), 10)]);
            }
        }
    };
    OtpInput.prototype.updateSeparatorValue = function () {
        if (this.separator === '') {
            for (var i = 0; i < this.separatorElements.length; i++) {
                (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.remove)(this.separatorElements[parseInt(i.toString(), 10)]);
            }
            this.separatorElements = [];
            return;
        }
        for (var i = 0; i < this.separatorElements.length; i++) {
            this.separatorElements[parseInt(i.toString(), 10)].textContent = this.separator;
        }
    };
    OtpInput.prototype.addPlaceHolder = function () {
        for (var i = 0; i < this.inputs.length; i++) {
            this.setElementAttributes({ 'placeholder': this.placeholder.length === 1 || this.placeholder.length === 0 ? this.placeholder : this.placeholder.charAt(i) }, this.inputs[parseInt(i.toString(), 10)]);
        }
    };
    OtpInput.prototype.updateInputType = function (inputType) {
        this.inputs.forEach(function (input) {
            input.type = inputType;
            input.setAttribute('inputmode', (inputType === 'number' ? 'numeric' : 'text'));
        });
    };
    OtpInput.prototype.getDefaultValue = function () {
        var extractedValue = typeof this.value === 'number' ? this.value.toString() : this.value;
        // To remove the white space if present.
        var value = extractedValue.replace(/\s/g, '');
        if (value.length > 0) {
            return value.split('');
        }
        return undefined;
    };
    OtpInput.prototype.handleInputChange = function (index, event) {
        var currentInputElement = this.inputs[parseInt(index.toString(), 10)];
        if (currentInputElement && index < this.length - 1 && currentInputElement.value.length > 0) {
            var nextInputElement = this.inputs[parseInt(index.toString(), 10) + 1];
            this.shouldFireFocus = this.shouldFireBlur = false;
            nextInputElement.focus();
            if (nextInputElement && nextInputElement.value.length > 0) {
                nextInputElement.select();
            }
        }
        var target = event.target;
        if (target.value.length > 1) {
            target.value = target.value.slice(0, 1);
        }
        this.triggerInputEvent(event);
        this.triggerValuechanged(event, true);
    };
    OtpInput.prototype.handleKeyAction = function (index, event) {
        if (event.key.length > 1 && !((index === 0 && event.key === 'Backspace') ||
            (index === this.length - 1 && event.key === 'Delete'))) {
            this.shouldFireFocus = this.shouldFireBlur = false;
        }
        var currentInputElement = this.inputs[parseInt(index.toString(), 10)];
        var previousInputElement = this.inputs[parseInt(index.toString(), 10) - 1];
        var nextInputElement = this.inputs[parseInt(index.toString(), 10) + 1];
        if (event.key === 'Delete') {
            var value = '';
            if (currentInputElement.value.length > 0) {
                value = currentInputElement.value;
                currentInputElement.value = '';
            }
            else {
                if (index !== this.inputs.length - 1) {
                    value = nextInputElement.value;
                    nextInputElement.value = '';
                    nextInputElement.focus();
                }
            }
            if (value.length > 0) {
                this.triggerInputEvent(event);
            }
        }
        else if (event.key === 'Backspace') {
            if (index !== 0 && currentInputElement.value.length === 0) {
                var previousValue = previousInputElement.value;
                previousInputElement.value = '';
                previousInputElement.focus();
                if (previousValue.length > 0) {
                    this.triggerInputEvent(event);
                }
            }
        }
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            if (event.key === 'ArrowLeft') {
                if (index > 0) {
                    previousInputElement.focus();
                    previousInputElement.select();
                }
            }
            else {
                if (index < this.inputs.length - 1) {
                    nextInputElement.focus();
                    nextInputElement.select();
                }
            }
            event.preventDefault();
        }
        else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
        }
        else {
            if (event.key !== 'Tab' && !event.shiftKey && !event.ctrlKey) {
                if (this.type === 'number' && (/\D/.test(event.key.toLocaleLowerCase()))) {
                    event.preventDefault();
                }
            }
        }
    };
    OtpInput.prototype.handleSelection = function (index) {
        var currentInputElement = this.inputs[parseInt(index.toString(), 10)];
        if (currentInputElement.value) {
            currentInputElement.select();
        }
    };
    OtpInput.prototype.handleFocus = function (index, event) {
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.addClass)([this.inputs[parseInt(index.toString(), 10)]], 'e-otp-input-focus');
        if (this.shouldFireFocus) {
            var eventArgs = {
                element: this.element,
                event: event,
                isInteracted: this.isFocusInCalled ? false : true,
                value: this.value
            };
            this.trigger('focus', eventArgs);
        }
        this.shouldFireFocus = true;
    };
    OtpInput.prototype.handleBlur = function (index, event) {
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.removeClass)([this.inputs[parseInt(index.toString(), 10)]], 'e-otp-input-focus');
        if (this.shouldFireBlur) {
            var eventArgs = {
                element: this.element,
                event: event,
                isInteracted: this.isFocusOutCalled ? false : true,
                value: this.value
            };
            this.trigger('blur', eventArgs);
        }
        this.shouldFireBlur = true;
    };
    OtpInput.prototype.handlePaste = function (index, event) {
        var clipboardData = event.clipboardData;
        if (clipboardData) {
            var pastedText = clipboardData.getData('text');
            var pastedValues = pastedText.split('');
            var pastedValueIndex = 0;
            for (var i = index; i < this.inputs.length; i++) {
                if (pastedValues.length > 0 && pastedValues[parseInt(pastedValueIndex.toString(), 10)]) {
                    this.inputs[parseInt(i.toString(), 10)].value = pastedValues[parseInt(pastedValueIndex.toString(), 10)];
                    pastedValueIndex++;
                    this.updateValueProperty();
                }
            }
            this.focusIn();
            this.triggerValuechanged(event, true);
        }
    };
    OtpInput.prototype.triggerInputEvent = function (event) {
        var previousValue = this.value.toString();
        this.updateValueProperty();
        var inputEventArgs = {
            element: this.element,
            event: event,
            previousValue: previousValue,
            value: this.value.toString()
        };
        this.trigger('input', inputEventArgs);
    };
    OtpInput.prototype.triggerValuechanged = function (event, isInteracted) {
        if (this.length === this.value.toString().length) {
            if (this.previousValue !== this.value) {
                var eventArgs = {
                    element: this.element,
                    event: event,
                    isInteracted: isInteracted ? isInteracted : false,
                    previousValue: this.previousValue,
                    value: this.value
                };
                this.trigger('valueChanged', eventArgs);
                this.previousValue = this.value.toString();
            }
        }
    };
    OtpInput.prototype.wireEvents = function (inputEle, index) {
        inputEle.addEventListener('focus', this.handleFocus.bind(this, index));
        inputEle.addEventListener('blur', this.handleBlur.bind(this, index));
        inputEle.addEventListener('input', this.handleInputChange.bind(this, index));
        inputEle.addEventListener('keydown', this.handleKeyAction.bind(this, index));
        inputEle.addEventListener('click', this.handleSelection.bind(this, index));
        inputEle.addEventListener('paste', this.handlePaste.bind(this, index));
    };
    OtpInput.prototype.unWireEvents = function () {
        for (var i = 0; i < this.inputs.length; i++) {
            var currentInputElement = this.inputs[parseInt(i.toString(), 10)];
            currentInputElement.removeEventListener('focus', this.handleFocus.bind(this, i));
            currentInputElement.removeEventListener('blur', this.handleBlur.bind(this, i));
            currentInputElement.removeEventListener('input', this.handleInputChange.bind(this, i));
            currentInputElement.removeEventListener('keydown', this.handleKeyAction.bind(this, i));
            currentInputElement.removeEventListener('click', this.handleSelection.bind(this, i));
            currentInputElement.removeEventListener('paste', this.handlePaste.bind(this, i));
        }
    };
    OtpInput.prototype.updateValueProperty = function () {
        var value = '';
        this.inputs.forEach(function (input) {
            value += input.value;
        });
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.value = typeof this.value === 'number' ? parseInt(value, 10) : value;
        this.isProtectedOnChange = prevOnChange;
        this.hiddenInputEle.value = this.value.toString();
    };
    OtpInput.prototype.updateInputValue = function (previousValue) {
        var stringifiedValue = this.value.toString();
        for (var i = 0; i < this.inputs.length; i++) {
            var isValueChanged = previousValue.toString().charAt(i) !== stringifiedValue.charAt(i);
            if (isValueChanged) {
                this.inputs[parseInt(i.toString(), 10)].value = stringifiedValue.charAt(i);
                this.hiddenInputEle.value = stringifiedValue;
            }
        }
        this.focusIn();
    };
    OtpInput.prototype.updateCssClass = function (addCss, removeCss) {
        if (removeCss === void 0) { removeCss = ''; }
        var _a, _b;
        var cssClasses;
        if (removeCss) {
            cssClasses = removeCss.trim().split(' ');
            (_a = this.element.classList).remove.apply(_a, cssClasses);
        }
        if (addCss) {
            cssClasses = addCss.trim().split(' ');
            (_b = this.element.classList).add.apply(_b, cssClasses);
        }
    };
    OtpInput.prototype.updateVariantClass = function () {
        var variantClass = this.stylingMode.toLocaleLowerCase();
        variantClass = variantClass === 'outlined' ? 'outline' : variantClass;
        if (variantClass === 'underlined' || variantClass === 'filled' || variantClass === 'outline') {
            (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.removeClass)([this.element], ['e-underlined', 'e-filled', 'e-outline']);
            (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.addClass)([this.element], "e-" + variantClass);
        }
    };
    OtpInput.prototype.updateAriaLabel = function (customAriaLabel) {
        this.inputs.forEach(function (input, index) {
            var defaultLabel = "Enter Otp Character " + (index + 1);
            var ariaLabel = customAriaLabel && customAriaLabel.length > 0
                ? customAriaLabel[parseInt(index.toString(), 10)] || defaultLabel
                : defaultLabel;
            input.setAttribute('aria-label', ariaLabel);
        });
    };
    OtpInput.prototype.updateDisabledState = function () {
        var _this = this;
        this.inputs.forEach(function (input) {
            if (_this.disabled) {
                input.setAttribute('disabled', 'disabled');
            }
            else {
                input.removeAttribute('disabled');
            }
        });
    };
    OtpInput.prototype.setElementAttributes = function (htmlAttributes, element) {
        if (!(0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(htmlAttributes)) {
            for (var key in htmlAttributes) {
                if (key === 'class') {
                    var elementClass = htmlAttributes['class'].replace(/\s+/g, ' ').trim();
                    if (elementClass) {
                        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.addClass)([element], elementClass.split(' '));
                    }
                }
                else if (key === 'name' && this.element.id === element.id) {
                    this.hiddenInputEle.setAttribute(key, htmlAttributes["" + key]);
                }
                else {
                    element.setAttribute(key, htmlAttributes["" + key]);
                }
            }
        }
    };
    OtpInput.prototype.handleLengthChange = function (currentValue, previousValue) {
        var isLengthAdded = (currentValue - previousValue) > 0;
        if (isLengthAdded) {
            for (var i = previousValue; i < currentValue; i++) {
                this.createOtpInput(i);
            }
            this.renderSeparator(previousValue, currentValue);
            this.addPlaceHolder();
            this.updateAriaLabel(this.ariaLabels);
        }
        else {
            if (currentValue >= 0 && this.inputs.length > 0) {
                for (var i = currentValue; i < this.inputs.length; i++) {
                    (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.remove)(this.inputs[parseInt(i.toString(), 10)]);
                }
                this.inputs.splice(currentValue);
                if (this.separatorElements.length > 0) {
                    // separator should be completely removed when length is 0 or 1;
                    var index = currentValue === 0 ? 0 : currentValue - 1;
                    for (var i = index; i < this.separatorElements.length; i++) {
                        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.remove)(this.separatorElements[parseInt(i.toString(), 10)]);
                    }
                    this.separatorElements.splice(index);
                }
            }
        }
    };
    /**
     * To get component name.
     *
     * @returns {string} - Module Name
     * @private
     */
    OtpInput.prototype.getModuleName = function () {
        return 'otpinput';
    };
    /**
     * To get the properties to be maintained in the persisted state.
     *
     * @returns {string} - Persist data
     */
    OtpInput.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * Destroy the Otp input.
     *
     * @returns {void}
     */
    OtpInput.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unWireEvents();
        for (var i = 0; i < this.inputs.length; i++) {
            (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.remove)(this.inputs[parseInt(i.toString(), 10)]);
        }
        for (var i = 0; i < this.separatorElements.length; i++) {
            (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.remove)(this.separatorElements[parseInt(i.toString(), 10)]);
        }
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.remove)(this.hiddenInputEle);
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.removeClass)([this.element], ['e-underlined', 'e-filled', 'e-outline', 'e-rtl']);
        if (this.cssClass) {
            (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.removeClass)([this.element], this.cssClass.trim().split(' '));
        }
        this.element.removeAttribute('role');
        this.inputs = [];
        this.separatorElements = [];
        this.hiddenInputEle = null;
    };
    /**
     * Sets the focus to the Otp input for interaction.
     *
     * @returns {void}
     */
    OtpInput.prototype.focusIn = function () {
        this.isFocusInCalled = true;
        var focusIndex = 0;
        this.inputs.forEach(function (input, index) {
            if (input.value.length > 0) {
                focusIndex = index;
            }
        });
        this.inputs[parseInt(focusIndex.toString(), 10)].focus();
        this.isFocusInCalled = false;
    };
    /**
     * Remove the focus from Otp input, if it is in focus state.
     *
     * @returns {void}
     */
    OtpInput.prototype.focusOut = function () {
        this.isFocusOutCalled = true;
        this.inputs.forEach(function (input) {
            input.blur();
        });
        this.isFocusOutCalled = false;
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param  {OtpInputModel} newProp - Specifies new properties
     * @param  {OtpInputModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    OtpInput.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'value':
                    {
                        this.updateInputValue(oldProp.value);
                        this.triggerValuechanged();
                    }
                    break;
                case 'placeholder':
                    this.addPlaceHolder();
                    break;
                case 'disabled':
                    this.updateDisabledState();
                    break;
                case 'cssClass':
                    this.updateCssClass(newProp.cssClass, oldProp.cssClass);
                    break;
                case 'separator':
                    if (oldProp.separator === '') {
                        this.renderSeparator(1, this.inputs.length);
                    }
                    else {
                        this.updateSeparatorValue();
                    }
                    break;
                case 'type':
                    this.updateInputType(newProp.type);
                    break;
                case 'stylingMode':
                    this.updateVariantClass();
                    break;
                case 'ariaLabels':
                    this.updateAriaLabel(newProp.ariaLabels);
                    break;
                case 'length':
                    this.handleLengthChange(newProp.length, oldProp.length);
                    break;
                case 'enableRtl':
                    this.element.classList[this.enableRtl ? 'add' : 'remove'](RTL);
                    break;
            }
        }
    };
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)(4)
    ], OtpInput.prototype, "length", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)('')
    ], OtpInput.prototype, "value", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)(OtpInputType.Number)
    ], OtpInput.prototype, "type", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)('')
    ], OtpInput.prototype, "separator", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)('')
    ], OtpInput.prototype, "placeholder", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)(OtpInputStyle.Outlined)
    ], OtpInput.prototype, "stylingMode", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)(false)
    ], OtpInput.prototype, "disabled", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)('')
    ], OtpInput.prototype, "cssClass", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)({})
    ], OtpInput.prototype, "htmlAttributes", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Property)([])
    ], OtpInput.prototype, "ariaLabels", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Event)()
    ], OtpInput.prototype, "created", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Event)()
    ], OtpInput.prototype, "valueChanged", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Event)()
    ], OtpInput.prototype, "focus", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Event)()
    ], OtpInput.prototype, "blur", void 0);
    __decorate([
        (0,_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Event)()
    ], OtpInput.prototype, "input", void 0);
    OtpInput = __decorate([
        _ej2_base__WEBPACK_IMPORTED_MODULE_0__.NotifyPropertyChanges
    ], OtpInput);
    return OtpInput;
}(_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************************!*\
  !*** ./crg-resources/26.1.38/src/ej2-1719214232574/script.js ***!
  \***************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy */ "./crg-resources/26.1.38/src/ej2-1719214232574/copy.js");
/* harmony import */ var _otp_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-input */ "./crg-resources/26.1.38/src/ej2-1719214232574/otp-input.js");



var inputs = {};
var base = {};

(0,_copy__WEBPACK_IMPORTED_MODULE_0__.copy)(inputs, _otp_input__WEBPACK_IMPORTED_MODULE_1__.inputs1);
(0,_copy__WEBPACK_IMPORTED_MODULE_0__.copy)(base, _otp_input__WEBPACK_IMPORTED_MODULE_1__.base1);

var ejs = { inputs:inputs,base:base }

if (window.ejs) { (0,_copy__WEBPACK_IMPORTED_MODULE_0__.copy)(ejs, window.ejs, null, true); }
window.ejs = ejs;
window.ej = ejs;
})();

/******/ })()
;