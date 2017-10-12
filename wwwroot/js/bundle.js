/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Drawing = /** @class */ (function () {
    function Drawing(ctx) {
        this.ctx = ctx;
    }
    Drawing.prototype.fillRect = function (x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    };
    Drawing.prototype.fillCircle = function (x, y, radius, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        this.ctx.fill();
    };
    return Drawing;
}());
exports.Drawing = Drawing;
var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vec2.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Vec2;
}());
exports.Vec2 = Vec2;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __webpack_require__(2);
window.onload = function (ev) {
    var canvas = document.getElementById('canvas');
    var app = new app_1.App(canvas);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(0);
var Entity_1 = __webpack_require__(3);
var Timer_1 = __webpack_require__(4);
var App = /** @class */ (function () {
    function App(canvas) {
        var _this = this;
        this.canvas = canvas;
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext('2d');
        this.drawing = new lib_1.Drawing(this.ctx);
        this.setupButtonHandlers();
        this.entity = new Entity_1.Entity(this.canvas, this.ctx, this.drawing);
        /*
        setInterval(()=>{
            this.update();
            this.draw();
        },1000/60);
        */
        this.timer = new Timer_1.Timer();
        this.timer.update = function (deltaTime) {
            _this.update(deltaTime);
            _this.draw();
        };
        this.timer.start();
    }
    App.prototype.update = function (deltaTime) {
        this.entity.update(deltaTime);
    };
    App.prototype.draw = function () {
        this.drawing.fillRect(0, 0, this.canvas.width, this.canvas.height, 'black');
        this.entity.draw();
    };
    App.prototype.setupButtonHandlers = function () {
        var _this = this;
        document.getElementById('btnTest').onclick = function () {
            _this.test();
        };
    };
    App.prototype.test = function () {
        this.drawing.fillCircle(150, 150, 10, '#ffffff');
        this.timer.start();
    };
    return App;
}());
exports.App = App;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(0);
var Entity = /** @class */ (function () {
    function Entity(canvas, ctx, drawing) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.drawing = drawing;
        this.pos = new lib_1.Vec2(50, 50);
        this.radius = 10;
        this.vel = new lib_1.Vec2(200, 100);
        this.color = '#f00';
    }
    Entity.prototype.update = function (deltaTime) {
        this.pos.x += this.vel.x * deltaTime;
        this.pos.y += this.vel.y * deltaTime;
        this.checkCollision();
    };
    Entity.prototype.draw = function () {
        this.drawing.fillCircle(this.pos.x, this.pos.y, this.radius, this.color);
    };
    Entity.prototype.checkCollision = function () {
        if (this.pos.x > this.canvas.width) {
            this.pos.x = 0;
        }
        if (this.pos.x < 0) {
            this.pos.x = this.canvas.width;
        }
        if (this.pos.y > this.canvas.height) {
            this.pos.y = 0;
        }
        if (this.pos.y < 0) {
            this.pos.y = this.canvas.height;
        }
    };
    return Entity;
}());
exports.Entity = Entity;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Timer = /** @class */ (function () {
    function Timer(deltaTime) {
        if (deltaTime === void 0) { deltaTime = 1 / 60; }
        this.deltaTime = deltaTime;
        this.accumulatedTime = 0;
        this.lastTime = 0;
    }
    Timer.prototype.enqueue = function () {
        var _this = this;
        requestAnimationFrame(function (time) {
            _this.accumulatedTime += (time - _this.lastTime) / 1000;
            while (_this.accumulatedTime > _this.deltaTime) {
                _this.update(_this.deltaTime);
                _this.accumulatedTime -= _this.deltaTime;
            }
            _this.lastTime = time;
            _this.enqueue();
        });
    };
    Timer.prototype.start = function () {
        this.enqueue();
    };
    return Timer;
}());
exports.Timer = Timer;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map