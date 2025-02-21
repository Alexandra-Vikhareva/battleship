/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n\tpadding: 0px;\n\tmargin: 0px;\n\tborder: none;\n}\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/* Links */\n\na, a:link, a:visited  {\n    text-decoration: none;\n}\n\na:hover  {\n    text-decoration: none;\n}\n\n/* Common */\n\naside, nav, footer, header, section, main {\n\tdisplay: block;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    font-size: inherit;\n\tfont-weight: inherit;\n}\n\nul, ul li {\n\tlist-style: none;\n}\n\nimg {\n\tvertical-align: top;\n}\n\nimg, svg {\n\tmax-width: 100%;\n\theight: auto;\n}\n\naddress {\n  font-style: normal;\n}\n\n/* Form */\n\ntextarea, button, select {\n\tfont-family: inherit;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n}\n\ninput::-ms-clear {\n\tdisplay: none;\n}\n\nbutton, input[type=\"submit\"] {\n    display: inline-block;\n    box-shadow: none;\n    background-color: transparent;\n    background: none;\n    cursor: pointer;\n}\n\ninput:focus, input:active,\nbutton:focus, button:active {\n    outline: none;\n}\n\nbutton::-moz-focus-inner {\n\tpadding: 0;\n\tborder: 0;\n}\n\nlabel {\n\tcursor: pointer;\n}\n\nlegend {\n\tdisplay: block;\n}\n\n\n:root{\n    --main-bg-color: #ffffff;\n    --blue-color: #77a6f7;\n    --green-color: #00887a;\n    --light-blue-color: #d3e3fc;\n    --pink-color: #ffccbc;\n    --right-color: chartreuse;\n    --wrong-color: tomato;\n}\n\nbody {\n    background-color: var(--main-bg-color);\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.board {\n    padding: 10px;\n    max-width: min(40vw, 400px);\n    height: min(40vw, 400px);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.board div {\n    border: 1px solid var(--green-color)\n}\n\n.content {\n    flex: 1 0 auto;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n    align-items: center;\n    margin: 3em;\n}\n\n.cell {\n    aspect-ratio: 1;\n}\n\n.avaliable {\n    background-color: var(--right-color);\n}\n\n.not-avaliable {\n    background-color: var(--wrong-color);\n}\n\n.ship {\n    background-color: var(--green-color);\n}\n.enemyBoard .cell:hover {\n    background-color: var(--pink-color);\n}\n.content .board .stricken {\n    background-color: var(--wrong-color);\n}\n\n.content .board .miss {\n    background-color: var(--light-blue-color);\n}\n\nform {\n    padding: 30px;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 10px;\n    background-color: var(--light-blue-color);\n    width: 300px;\n    height: 150px;\n    position: absolute;\n    top: calc(50vh - 75px);\n    left: calc(50vw - 150px);\n}\n\nlabel {\n    font-size: 2em;\n    color: var(--blue-color);\n}\n\nbutton {\n    background-color: var(--blue-color);\n    color: var(--main-bg-color);\n    padding: 5px 10px;\n    border-radius: 5px;\n}\n\n.info {\n    padding: 30px;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 10px;\n    background-color: var(--light-blue-color);\n    width: 300px;\n    height: 150px;\n    border: 3px solid var(--blue-color);\n    position: absolute;\n    top: calc(50vh - 75px);\n    left: calc(50vw - 150px);\n}\n\nh1 {\n    font-size: 2em;\n    color: var(--blue-color);\n}\n\nheader{\n    background-color: var(--green-color);\n    color: var(--main-bg-color);\n    padding: 5px 20px;\n    font-size: 3em;\n}\n\nfooter {\n    background-color: var(--green-color);\n    color: var(--main-bg-color);\n    flex: 0 0 auto;\n    text-align: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass Gameboard {\n\n    // '' - empty spot\n    // 'S' - ship\n    // '*' - missed hit\n    // 'X' - ship was hit\n\n    constructor() {\n        this.board = [['', '', '', '', '', '', '', '', '', ''],\n                      ['', '', '', '', '', '', '', '', '', ''],\n                      ['', '', '', '', '', '', '', '', '', ''],\n                      ['', '', '', '', '', '', '', '', '', ''],\n                      ['', '', '', '', '', '', '', '', '', ''],\n                      ['', '', '', '', '', '', '', '', '', ''],\n                      ['', '', '', '', '', '', '', '', '', ''],\n                      ['', '', '', '', '', '', '', '', '', ''],\n                      ['', '', '', '', '', '', '', '', '', ''],\n                      ['', '', '', '', '', '', '', '', '', '']];\n\n        this.fleet = [{name: 'Carrier', \n                       ship: new Ship(5),\n                       isVertical: false,\n                       x: -1,\n                       y: -1},\n\n                      {name: 'Battleship',\n                       ship: new Ship(4),\n                       isVertical: false,\n                       x: -1,\n                       y: -1},\n\n                      {name: 'Cruiser',\n                       ship: new Ship(3),\n                       isVertical: false,\n                       x: -1,\n                       y: -1},\n\n                      {name: 'Submarine',\n                       ship: new Ship(3),\n                       isVertical: false,\n                       x: -1,\n                       y: -1},\n\n                      {name: 'Destroyer',\n                       ship: new Ship(2),\n                       isVertical: false,\n                       x: -1,\n                       y: -1}]\n    }\n\n    isAllShipSunk() {\n        return this.fleet.every(el => el.ship.sunk)\n    }\n\n    receiveAttack(x, y) {\n        if (this.isAttackPossible(x, y)){\n            if (this.board[y][x] === 'S'){\n                this.board[y][x] = 'X';\n                const indx = this.findShip(x, y);\n                this.fleet[indx].ship.hit();\n            }else {\n                this.board[y][x] = '*';\n\n            }\n        }\n        \n    }\n\n    placeShip(indxOfFleet, x, y) {\n        if (this.isValidLocation(indxOfFleet, x, y)){\n            if (!this.fleet[indxOfFleet].isVertical){\n                for (let iter = x; iter < x + this.fleet[indxOfFleet].ship.length; iter++){\n                    this.board[y][iter] = 'S';\n                };\n            } else{\n                for (let iter = y; iter < y + this.fleet[indxOfFleet].ship.length; iter++){\n                    this.board[iter][x] = 'S';\n                }   \n            };\n            this.fleet[indxOfFleet].x = x;\n            this.fleet[indxOfFleet].y = y;\n        }\n    }\n\n    isValidLocation(indxOfFleet, x, y) {\n        if (this.fleet[indxOfFleet].isVertical){\n\n            if (y + this.fleet[indxOfFleet].ship.length > this.board.length) return false\n\n            for (let iter = y; iter < y + this.fleet[indxOfFleet].ship.length; iter++){\n                if (this.board[iter][x] !== '') return false\n                if (x > 0 && this.board[iter][x - 1] !== '') return false\n                if (x < 9 && this.board[iter][x + 1] !== '') return false\n            };\n            \n            if (y > 0 && this.board[y - 1][x] !== '') return false\n            if (y > 0 && x > 0 && this.board[y - 1][x - 1] !== '') return false\n            if (y > 0 && x < 9 && this.board[y - 1][x + 1] !== '') return false\n\n            if (y + this.fleet[indxOfFleet].ship.length <= 9 && this.board[y + this.fleet[indxOfFleet].ship.length][x] !== '') return false\n            if (y + this.fleet[indxOfFleet].ship.length <= 9 && x > 0 && this.board[y + this.fleet[indxOfFleet].ship.length][x - 1] !== '') return false\n            if (y + this.fleet[indxOfFleet].ship.length <= 9 && x < 9 && this.board[y + this.fleet[indxOfFleet].ship.length][x + 1] !== '') return false\n\n\n        } else{\n            if (x + this.fleet[indxOfFleet].ship.length > this.board[0].length) return false\n            \n            for (let iter = x; iter < x + this.fleet[indxOfFleet].ship.length; iter++){\n                if (this.board[y][iter] !== '') return false\n                if (y > 0 && this.board[y - 1][iter] !== '') return false\n                if (y < 9 && this.board[y + 1][iter] !== '') return false\n            };\n            \n\n            if (x > 0 && this.board[y][x - 1] !== '') return false\n            if (x > 0 && y > 0 && this.board[y - 1][x - 1] !== '') return false\n            if (x > 0 && y < 9 && this.board[y + 1][x - 1] !== '') return false\n\n            if (x + this.fleet[indxOfFleet].ship.length <= 9 && this.board[y][x + this.fleet[indxOfFleet].ship.length] !== '') return false\n            if (x + this.fleet[indxOfFleet].ship.length <= 9 && y > 0 && this.board[y - 1][x + this.fleet[indxOfFleet].ship.length] !== '') return false\n            if (x + this.fleet[indxOfFleet].ship.length <= 9 && y < 9 && this.board[y + 1][x + this.fleet[indxOfFleet].ship.length] !== '') return false\n        };\n        return true\n    }\n\n    findShip(x, y) {\n        for (let indxOfFleet in this.fleet) {\n            if (this.fleet[indxOfFleet].isVertical) {\n                if (this.fleet[indxOfFleet].y <= y && y  < this.fleet[indxOfFleet].y + this.fleet[indxOfFleet].ship.length \n                    && this.fleet[indxOfFleet].x === x)\n                        return indxOfFleet\n            }else {\n                if (this.fleet[indxOfFleet].x <= x && x < this.fleet[indxOfFleet].x + this.fleet[indxOfFleet].ship.length  \n                    && this.fleet[indxOfFleet].y === y)\n                        return indxOfFleet\n            }\n        }\n    }\n\n    isAttackPossible(x, y) {\n        return this.board[y][x] === 'S' || this.board[y][x] === ''\n    }\n}\n\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nfunction drawBoard(){\n    const content = document.querySelector('.content');\n\n    const board = document.createElement('div');\n    board.className = 'board';\n\n    for (let y = 0; y < 10; y++){\n        for (let x = 0; x < 10; x++) {\n            const cell = document.createElement('div');\n            cell.className = 'cell';\n            board.append(cell);\n        }\n    }\n\n    content.append(board);\n}\n\nfunction fillBoard(board, boardInfo) {\n    const cells = board.childNodes;\n    for (let y = 0; y < 10; y++){\n        for (let x = 0; x < 10; x++){\n            if (boardInfo[y][x] === 'S') cells[y * 10 + x].classList.add('ship')\n        }\n    }\n}\n\nfunction drawForm(){\n    const content = document.querySelector('.content');\n    const form = document.createElement('form');\n    const name = document.createElement('input');\n    const nameLabel = document.createElement('label');\n    const button = document.createElement('button');\n\n    name.name = 'playerName';\n    name.id = 'playerName';\n    name.placeholder = `Player Name`;\n\n    nameLabel.for = 'playerName';\n    nameLabel.textContent = 'Enter your name: ';\n\n    button.type = 'button';\n    button.textContent = 'Start Game';\n\n    form.append(nameLabel, name, button);\n    content.appendChild(form);\n\n    button.addEventListener('click', () => {\n        const player = new Player(name.value);\n        clearContent();\n        placeFleet(player);\n    })\n}\n\nfunction placeFleet(player) {\n    drawBoard();\n    const board = document.querySelector('.board');\n    const cells = document.querySelectorAll('.cell');\n    const button = document.createElement('button');\n    const content = document.querySelector('.content');\n\n    button.type = 'button';\n    button.textContent = 'Rotate';\n    content.append(button);\n\n    let indxShip = 0;\n    let ship = player.gameboard.fleet[indxShip];\n    \n    \n    button.addEventListener('click', () => {ship.isVertical = !ship.isVertical})\n    \n    cells.forEach((cell) => {\n        cell.addEventListener('mouseover', (e) => {\n            let indx = [...cells].indexOf(e.target);\n            let x = indx % 10;\n            let y = (indx - indx % 10) / 10;\n            \n            if (ship.isVertical){\n                if (player.gameboard.isValidLocation(indxShip, x, y)){\n                    for (let i = 0; i < ship.ship.length; i++) {\n                        cells[indx + i * 10].classList.add('avaliable');\n                    }\n                }\n\n                else {\n                    for (let i = 0; i < ship.ship.length; i++) {\n                        if ((indx + i * 10 ) > 99) break\n                        cells[indx + i * 10].classList.add('not-avaliable');\n                    }\n                }\n            }\n            \n            else{\n                if (player.gameboard.isValidLocation(indxShip, x, y)){\n                    for (let i = 0; i < ship.ship.length; i++) {\n                        cells[indx + i].classList.add('avaliable');\n                    }\n                }\n                \n                else {\n                    for (let i = 0; i < ship.ship.length; i++) {\n                        if (indx + i > y * 10 + 9) break;\n                        cells[indx + i].classList.add('not-avaliable');\n                    }\n                }\n            }\n        })\n    });\n\n    cells.forEach((cell) => {\n        cell.addEventListener('mouseout', (e) => {\n        \n            let indx = [...cells].indexOf(e.target);\n            let x = indx % 10;\n            let y = (indx - indx % 10) / 10;\n            \n            if (ship.isVertical) {\n                if (player.gameboard.isValidLocation(indxShip, x, y)){\n                    for (let i = 0; i < ship.ship.length; i++) {\n                        cells[indx + i * 10].classList.remove('avaliable');\n                    }\n                }\n\n                else {\n                    for (let i = 0; i < 10 - y; i++) {\n                        cells[indx + i * 10].classList.remove('not-avaliable');\n                    }\n                } \n            }\n\n            else {\n                if (player.gameboard.isValidLocation(indxShip, x, y)){\n                    for (let i = 0; i < ship.ship.length; i++) {\n                        cells[indx + i].classList.remove('avaliable');\n                    }\n                } \n\n                else {\n                    for (let i = 0; i < 10 - x; i++) {\n                        cells[indx + i].classList.remove('not-avaliable');\n                    }\n                } \n            }\n        })\n    });\n\n    cells.forEach((cell) => {\n        cell.addEventListener('click', (e) => {\n            let indx = [...cells].indexOf(e.target);\n            let x = indx % 10;\n            let y = (indx - indx % 10) / 10;\n            if (ship.isVertical) {\n                if (player.gameboard.isValidLocation(indxShip, x, y)){\n                    for (let i = 0; i < ship.ship.length; i++) {\n                        cells[indx + i * 10].classList.add('ship');\n                    };\n                    player.gameboard.placeShip(indxShip, x, y);\n                    indxShip += 1;\n                    if (indxShip === 5) {\n                        clearContent();\n                        const PC = new Player('computer', true);\n                        PC.placeFleetRandom();\n                        startGame(player, PC);\n                    }\n                    ship = player.gameboard.fleet[indxShip];\n                }\n            }\n\n            else {\n                if (player.gameboard.isValidLocation(indxShip, x, y)){\n                    for (let i = 0; i < ship.ship.length; i++) {\n                        cells[indx + i].classList.add('ship');\n                    };\n                    player.gameboard.placeShip(indxShip, x, y);\n                    indxShip += 1;\n                    if (indxShip === 5) {\n                        clearContent();\n                        const PC = new Player('computer', true);\n                        PC.placeFleetRandom();\n                        startGame(player, PC);\n                    }\n                    ship = player.gameboard.fleet[indxShip];\n                }\n            }\n        })\n    })\n}\n\nfunction winOrLoose(str) {\n    const div = document.createElement('div');\n    const playAgain = document.createElement('button');\n    const h1 = document.createElement('h1');\n    const content = document.querySelector('.content');\n\n    playAgain.textContent = 'Play Again';\n    playAgain.type = 'button';\n\n    h1.textContent = str;\n\n    div.append(h1, playAgain);\n    content.append(div);\n    div.classList.add('info');\n\n    const body = document.querySelector('body');\n    body.addEventListener('click', (e) => {\n        if (e.target === playAgain) {\n            clearContent();\n            drawForm();\n        }\n    })\n\n}\n\nfunction clearContent() {\n    const content = document.querySelector('.content');\n    while (content.firstChild) {\n        content.removeChild(content.firstChild)\n    }\n}\n\nfunction startGame(player, PC) {\n    drawBoard();\n    drawBoard();\n\n    const boards = document.querySelectorAll('.board');\n    const cells = boards[1].childNodes;\n    const cellsPC = boards[0].childNodes;\n\n    fillBoard(boards[0], player.gameboard.board);\n    boards[1].classList.add('enemyBoard');\n\n    cells.forEach((cell) => {\n        cell.addEventListener('click', (e) => {\n            if (!PC.gameboard.isAllShipSunk() \n                && !player.gameboard.isAllShipSunk() \n                && !e.target.classList.contains('stricken')\n                && !e.target.classList.contains('miss')) {\n\n                const indx = [...cells].indexOf(e.target);\n                const x = indx % 10;\n                const y = (indx - indx % 10) / 10;\n\n                if (PC.gameboard.isAttackPossible(x, y)) {\n                    PC.gameboard.receiveAttack(x, y);\n                    PC.gameboard.board[y][x] === 'X'\n                        ? e.target.classList.add('stricken')\n                        : e.target.classList.add('miss')\n                }\n\n                if (PC.gameboard.isAllShipSunk()) {\n                    winOrLoose(`You're win!`)\n                }\n\n                const indxPC = player.makeMoveRandom();\n                const xPC = indxPC % 10;\n                const yPC = (indxPC - indxPC % 10) / 10;\n\n                player.gameboard.board[yPC][xPC] === 'X'\n                    ? cellsPC[indxPC].classList.add('stricken')\n                    : cellsPC[indxPC].classList.add('miss');\n\n                if (player.gameboard.isAllShipSunk()) {\n                    winOrLoose(`You're loose!`)\n                }\n            }\n        })\n    })\n}\n\ndrawForm()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\nclass Player {\n    constructor(name, isPc = false) {\n        this.name = name;\n        this.isPc = isPc;\n        this.gameboard = new Gameboard();\n    }\n\n    #randomInt(maxnum){\n        return Math.floor(Math.random() * maxnum)\n    }\n\n    makeMoveRandom() {\n        while (true){\n            const x = this.#randomInt(10);\n            const y = this.#randomInt(10);\n            if (this.gameboard.isAttackPossible(x, y)){\n                this.gameboard.receiveAttack(x, y)\n                return y * 10 + x\n            }\n        }\n    }\n\n    placeFleetRandom() {\n        for (let indxOfShip = 0; indxOfShip < this.gameboard.fleet.length; indxOfShip++) {\n            let ship =  this.gameboard.fleet[indxOfShip];\n            ship.isVertical = Boolean(this.#randomInt(2));\n            if (ship.isVertical) {\n                while (true){\n                    let x = this.#randomInt(10);\n                    let y = this.#randomInt(10 - ship.ship.length + 1);\n                    if (this.gameboard.isValidLocation(indxOfShip, x, y)) {\n                        this.gameboard.placeShip(indxOfShip, x, y);\n                        break\n                    }\n                }\n                \n            } else {\n                while(true){\n                    let y = this.#randomInt(10);\n                    let x = this.#randomInt(10 - ship.ship.length + 1);\n                    if (this.gameboard.isValidLocation(indxOfShip,x, y)) {\n                        this.gameboard.placeShip(indxOfShip, x, y);\n                        break\n                    }\n                }\n            }\n        }\n    }\n}\n\nmodule.exports = Player\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n    constructor(length) {\n        this.length = length;\n        this.countHit = 0;\n        this.sunk = false;\n    }\n\n    hit() {\n        if (!this.sunk){\n            this.countHit += 1;\n            this.isSunk();\n        }\n        return this\n    }\n\n    isSunk() {\n        this.length <= this.countHit\n        ? this.sunk = true\n        : this.sunk = false\n    }\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;