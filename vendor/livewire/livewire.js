! function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : (global = "undefined" != typeof globalThis ? globalThis : global || self).Livewire = factory()
}(this, (function() {
    "use strict";

    function ownKeys$1(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter((function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable
            }))), keys.push.apply(keys, symbols)
        }
        return keys
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys$1(Object(source), !0).forEach((function(key) {
                _defineProperty(target, key, source[key])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach((function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
            }))
        }
        return target
    }

    function _typeof(obj) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        })(obj)
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor
    }

    function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass)
    }

    function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
            return o.__proto__ || Object.getPrototypeOf(o)
        })(o)
    }

    function _setPrototypeOf(o, p) {
        return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
            return o.__proto__ = p, o
        })(o, p)
    }

    function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function _assertThisInitialized(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self
    }

    function _possibleConstructorReturn(self, call) {
        return !call || "object" != typeof call && "function" != typeof call ? _assertThisInitialized(self) : call
    }

    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function() {
            var result, Super = _getPrototypeOf(Derived);
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget)
            } else result = Super.apply(this, arguments);
            return _possibleConstructorReturn(this, result)
        }
    }

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
    }

    function _toArray(arr) {
        return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest()
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr)
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr
    }

    function _iterableToArray(iter) {
        if ("undefined" != typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter)
    }

    function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
            var _s, _e, _arr = [],
                _n = !0,
                _d = !1;
            try {
                for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0);
            } catch (err) {
                _d = !0, _e = err
            } finally {
                try {
                    _n || null == _i.return || _i.return()
                } finally {
                    if (_d) throw _e
                }
            }
            return _arr
        }
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (o) {
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0
        }
    }

    function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments,
                later = function() {
                    timeout = null, immediate || func.apply(context, args)
                },
                callNow = immediate && !timeout;
            clearTimeout(timeout), timeout = setTimeout(later, wait), callNow && func.apply(context, args)
        }
    }

    function wireDirectives(el) {
        return new DirectiveManager$1(el)
    }
    var DirectiveManager$1 = function() {
            function DirectiveManager(el) {
                _classCallCheck(this, DirectiveManager), this.el = el, this.directives = this.extractTypeModifiersAndValue()
            }
            return _createClass(DirectiveManager, [{
                key: "all",
                value: function() {
                    return this.directives
                }
            }, {
                key: "has",
                value: function(type) {
                    return this.directives.map((function(directive) {
                        return directive.type
                    })).includes(type)
                }
            }, {
                key: "missing",
                value: function(type) {
                    return !this.has(type)
                }
            }, {
                key: "get",
                value: function(type) {
                    return this.directives.find((function(directive) {
                        return directive.type === type
                    }))
                }
            }, {
                key: "extractTypeModifiersAndValue",
                value: function() {
                    var _this = this;
                    return Array.from(this.el.getAttributeNames().filter((function(name) {
                        return name.match(new RegExp("wire:"))
                    })).map((function(name) {
                        var _name$replace$split2 = _toArray(name.replace(new RegExp("wire:"), "").split(".")),
                            type = _name$replace$split2[0],
                            modifiers = _name$replace$split2.slice(1);
                        return new Directive(type, modifiers, name, _this.el)
                    })))
                }
            }]), DirectiveManager
        }(),
        Directive = function() {
            function Directive(type, modifiers, rawName, el) {
                _classCallCheck(this, Directive), this.type = type, this.modifiers = modifiers, this.rawName = rawName, this.el = el, this.eventContext
            }
            return _createClass(Directive, [{
                key: "setEventContext",
                value: function(context) {
                    this.eventContext = context
                }
            }, {
                key: "value",
                get: function() {
                    return this.el.getAttribute(this.rawName)
                }
            }, {
                key: "method",
                get: function() {
                    return this.parseOutMethodAndParams(this.value).method
                }
            }, {
                key: "params",
                get: function() {
                    return this.parseOutMethodAndParams(this.value).params
                }
            }, {
                key: "durationOr",
                value: function(defaultDuration) {
                    var durationInMilliSeconds, durationInMilliSecondsString = this.modifiers.find((function(mod) {
                            return mod.match(/([0-9]+)ms/)
                        })),
                        durationInSecondsString = this.modifiers.find((function(mod) {
                            return mod.match(/([0-9]+)s/)
                        }));
                    return durationInMilliSecondsString ? durationInMilliSeconds = Number(durationInMilliSecondsString.replace("ms", "")) : durationInSecondsString && (durationInMilliSeconds = 1e3 * Number(durationInSecondsString.replace("s", ""))), durationInMilliSeconds || defaultDuration
                }
            }, {
                key: "parseOutMethodAndParams",
                value: function(rawMethod) {
                    var method = rawMethod,
                        params = [],
                        methodAndParamString = method.match(/([\s\S]*?)\(([\s\S]*)\)/);
                    methodAndParamString && (method = methodAndParamString[1], params = new Function("$event", "return (function () {\n                for (var l=arguments.length, p=new Array(l), k=0; k<l; k++) {\n                    p[k] = arguments[k];\n                }\n                return [].concat(p);\n            })(".concat(methodAndParamString[2], ")"))(this.eventContext));
                    return {
                        method: method,
                        params: params
                    }
                }
            }, {
                key: "cardinalDirectionOr",
                value: function() {
                    var fallback = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "right";
                    return this.modifiers.includes("up") ? "up" : this.modifiers.includes("down") ? "down" : this.modifiers.includes("left") ? "left" : this.modifiers.includes("right") ? "right" : fallback
                }
            }]), Directive
        }();

    function walk(root, callback) {
        if (!1 !== callback(root))
            for (var node = root.firstElementChild; node;) walk(node, callback), node = node.nextElementSibling
    }

    function dispatch(eventName) {
        var event = document.createEvent("Events");
        return event.initEvent(eventName, !0, !0), document.dispatchEvent(event), event
    }

    function getCsrfToken() {
        var _window$livewire_toke, tokenTag = document.head.querySelector('meta[name="csrf-token"]');
        return tokenTag ? tokenTag.content : null !== (_window$livewire_toke = window.livewire_token) && void 0 !== _window$livewire_toke ? _window$livewire_toke : void 0
    }

    function kebabCase(subject) {
        return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
    }
    /*!
     * isobject <https://github.com/jonschlinkert/isobject>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */
    var isobject = function(val) {
            return null != val && "object" == typeof val && !1 === Array.isArray(val)
        },
        getValue = function(target, path, options) {
            if (isobject(options) || (options = {
                    default: options
                }), !isValidObject(target)) return void 0 !== options.default ? options.default : target;
            "number" == typeof path && (path = String(path));
            const isArray = Array.isArray(path),
                isString = "string" == typeof path,
                splitChar = options.separator || ".",
                joinChar = options.joinChar || ("string" == typeof splitChar ? splitChar : ".");
            if (!isString && !isArray) return target;
            if (isString && path in target) return isValid(path, target, options) ? target[path] : options.default;
            let segs = isArray ? path : split$1(path, splitChar, options),
                len = segs.length,
                idx = 0;
            do {
                let prop = segs[idx];
                for ("number" == typeof prop && (prop = String(prop)); prop && "\\" === prop.slice(-1);) prop = join([prop.slice(0, -1), segs[++idx] || ""], joinChar, options);
                if (prop in target) {
                    if (!isValid(prop, target, options)) return options.default;
                    target = target[prop]
                } else {
                    let hasProp = !1,
                        n = idx + 1;
                    for (; n < len;)
                        if (prop = join([prop, segs[n++]], joinChar, options), hasProp = prop in target) {
                            if (!isValid(prop, target, options)) return options.default;
                            target = target[prop], idx = n - 1;
                            break
                        }
                    if (!hasProp) return options.default
                }
            } while (++idx < len && isValidObject(target));
            return idx === len ? target : options.default
        };
    /*!
     * get-value <https://github.com/jonschlinkert/get-value>
     *
     * Copyright (c) 2014-2018, Jon Schlinkert.
     * Released under the MIT License.
     */
    function join(segs, joinChar, options) {
        return "function" == typeof options.join ? options.join(segs) : segs[0] + joinChar + segs[1]
    }

    function split$1(path, splitChar, options) {
        return "function" == typeof options.split ? options.split(path) : path.split(splitChar)
    }

    function isValid(key, target, options) {
        return "function" != typeof options.isValid || options.isValid(key, target)
    }

    function isValidObject(val) {
        return isobject(val) || Array.isArray(val) || "function" == typeof val
    }
    var _default$6 = function() {
            function _default(el) {
                var skipWatcher = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                _classCallCheck(this, _default), this.el = el, this.skipWatcher = skipWatcher, this.resolveCallback = function() {}, this.rejectCallback = function() {}, this.signature = (Math.random() + 1).toString(36).substring(8)
            }
            return _createClass(_default, [{
                key: "toId",
                value: function() {
                    return btoa(encodeURIComponent(this.el.outerHTML))
                }
            }, {
                key: "onResolve",
                value: function(callback) {
                    this.resolveCallback = callback
                }
            }, {
                key: "onReject",
                value: function(callback) {
                    this.rejectCallback = callback
                }
            }, {
                key: "resolve",
                value: function(thing) {
                    this.resolveCallback(thing)
                }
            }, {
                key: "reject",
                value: function(thing) {
                    this.rejectCallback(thing)
                }
            }]), _default
        }(),
        _default$5 = function(_Action) {
            _inherits(_default, _Action);
            var _super = _createSuper(_default);

            function _default(event, params, el) {
                var _this;
                return _classCallCheck(this, _default), (_this = _super.call(this, el)).type = "fireEvent", _this.payload = {
                    id: _this.signature,
                    event: event,
                    params: params
                }, _this
            }
            return _createClass(_default, [{
                key: "toId",
                value: function() {
                    return btoa(encodeURIComponent(this.type, this.payload.event, JSON.stringify(this.payload.params)))
                }
            }]), _default
        }(_default$6),
        MessageBus = function() {
            function MessageBus() {
                _classCallCheck(this, MessageBus), this.listeners = {}
            }
            return _createClass(MessageBus, [{
                key: "register",
                value: function(name, callback) {
                    this.listeners[name] || (this.listeners[name] = []), this.listeners[name].push(callback)
                }
            }, {
                key: "call",
                value: function(name) {
                    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                    (this.listeners[name] || []).forEach((function(callback) {
                        callback.apply(void 0, params)
                    }))
                }
            }, {
                key: "has",
                value: function(name) {
                    return Object.keys(this.listeners).includes(name)
                }
            }]), MessageBus
        }(),
        HookManager = {
            availableHooks: ["component.initialized", "element.initialized", "element.updating", "element.updated", "element.removed", "message.sent", "message.failed", "message.received", "message.processed", "interceptWireModelSetValue", "interceptWireModelAttachListener", "beforeReplaceState", "beforePushState"],
            bus: new MessageBus,
            register: function(name, callback) {
                if (!this.availableHooks.includes(name)) throw "Livewire: Referencing unknown hook: [".concat(name, "]");
                this.bus.register(name, callback)
            },
            call: function(name) {
                for (var _this$bus, _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                (_this$bus = this.bus).call.apply(_this$bus, [name].concat(params))
            }
        },
        DirectiveManager = {
            directives: new MessageBus,
            register: function(name, callback) {
                if (this.has(name)) throw "Livewire: Directive already registered: [".concat(name, "]");
                this.directives.register(name, callback)
            },
            call: function(name, el, directive, component) {
                this.directives.call(name, el, directive, component)
            },
            has: function(name) {
                return this.directives.has(name)
            }
        },
        store$2 = {
            componentsById: {},
            listeners: new MessageBus,
            initialRenderIsFinished: !1,
            livewireIsInBackground: !1,
            livewireIsOffline: !1,
            sessionHasExpired: !1,
            sessionHasExpiredCallback: void 0,
            directives: DirectiveManager,
            hooks: HookManager,
            onErrorCallback: function() {},
            components: function() {
                var _this = this;
                return Object.keys(this.componentsById).map((function(key) {
                    return _this.componentsById[key]
                }))
            },
            addComponent: function(component) {
                return this.componentsById[component.id] = component
            },
            findComponent: function(id) {
                return this.componentsById[id]
            },
            getComponentsByName: function(name) {
                return this.components().filter((function(component) {
                    return component.name === name
                }))
            },
            hasComponent: function(id) {
                return !!this.componentsById[id]
            },
            tearDownComponents: function() {
                var _this2 = this;
                this.components().forEach((function(component) {
                    _this2.removeComponent(component)
                }))
            },
            on: function(event, callback) {
                this.listeners.register(event, callback)
            },
            emit: function(event) {
                for (var _this$listeners, _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                (_this$listeners = this.listeners).call.apply(_this$listeners, [event].concat(params)), this.componentsListeningForEvent(event).forEach((function(component) {
                    return component.addAction(new _default$5(event, params))
                }))
            },
            emitUp: function(el, event) {
                for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) params[_key2 - 2] = arguments[_key2];
                this.componentsListeningForEventThatAreTreeAncestors(el, event).forEach((function(component) {
                    return component.addAction(new _default$5(event, params))
                }))
            },
            emitSelf: function(componentId, event) {
                var component = this.findComponent(componentId);
                if (component.listeners.includes(event)) {
                    for (var _len3 = arguments.length, params = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) params[_key3 - 2] = arguments[_key3];
                    component.addAction(new _default$5(event, params))
                }
            },
            emitTo: function(componentName, event) {
                for (var _len4 = arguments.length, params = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) params[_key4 - 2] = arguments[_key4];
                var components = this.getComponentsByName(componentName);
                components.forEach((function(component) {
                    component.listeners.includes(event) && component.addAction(new _default$5(event, params))
                }))
            },
            componentsListeningForEventThatAreTreeAncestors: function(el, event) {
                for (var parentIds = [], parent = el.parentElement.closest("[wire\\:id]"); parent;) parentIds.push(parent.getAttribute("wire:id")), parent = parent.parentElement.closest("[wire\\:id]");
                return this.components().filter((function(component) {
                    return component.listeners.includes(event) && parentIds.includes(component.id)
                }))
            },
            componentsListeningForEvent: function(event) {
                return this.components().filter((function(component) {
                    return component.listeners.includes(event)
                }))
            },
            registerDirective: function(name, callback) {
                this.directives.register(name, callback)
            },
            registerHook: function(name, callback) {
                this.hooks.register(name, callback)
            },
            callHook: function(name) {
                for (var _this$hooks, _len5 = arguments.length, params = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) params[_key5 - 1] = arguments[_key5];
                (_this$hooks = this.hooks).call.apply(_this$hooks, [name].concat(params))
            },
            changeComponentId: function(component, newId) {
                var oldId = component.id;
                component.id = newId, component.fingerprint.id = newId, this.componentsById[newId] = component, delete this.componentsById[oldId], this.components().forEach((function(component) {
                    var children = component.serverMemo.children || {};
                    Object.entries(children).forEach((function(_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            key = _ref2[0],
                            _ref2$ = _ref2[1],
                            id = _ref2$.id;
                        _ref2$.tagName, id === oldId && (children[key].id = newId)
                    }))
                }))
            },
            removeComponent: function(component) {
                component.tearDown(), delete this.componentsById[component.id]
            },
            onError: function(callback) {
                this.onErrorCallback = callback
            },
            getClosestParentId: function(childId, subsetOfParentIds) {
                var _this3 = this,
                    distancesByParentId = {};
                subsetOfParentIds.forEach((function(parentId) {
                    var distance = _this3.getDistanceToChild(parentId, childId);
                    distance && (distancesByParentId[parentId] = distance)
                }));
                var closestParentId, smallestDistance = Math.min.apply(Math, _toConsumableArray(Object.values(distancesByParentId)));
                return Object.entries(distancesByParentId).forEach((function(_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        parentId = _ref4[0];
                    _ref4[1] === smallestDistance && (closestParentId = parentId)
                })), closestParentId
            },
            getDistanceToChild: function(parentId, childId) {
                var distanceMemo = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    parentComponent = this.findComponent(parentId);
                if (parentComponent) {
                    var childIds = parentComponent.childIds;
                    if (childIds.includes(childId)) return distanceMemo;
                    for (var i = 0; i < childIds.length; i++) {
                        var distance = this.getDistanceToChild(childIds[i], childId, distanceMemo + 1);
                        if (distance) return distance
                    }
                }
            }
        },
        DOM = {
            rootComponentElements: function() {
                return Array.from(document.querySelectorAll("[wire\\:id]"))
            },
            rootComponentElementsWithNoParents: function() {
                var node = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                null === node && (node = document);
                var allEls = Array.from(node.querySelectorAll("[wire\\:initial-data]")),
                    onlyChildEls = Array.from(node.querySelectorAll("[wire\\:initial-data] [wire\\:initial-data]"));
                return allEls.filter((function(el) {
                    return !onlyChildEls.includes(el)
                }))
            },
            allModelElementsInside: function(root) {
                return Array.from(root.querySelectorAll("[wire\\:model]"))
            },
            getByAttributeAndValue: function(attribute, value) {
                return document.querySelector("[wire\\:".concat(attribute, '="').concat(value, '"]'))
            },
            nextFrame: function(fn) {
                var _this = this;
                requestAnimationFrame((function() {
                    requestAnimationFrame(fn.bind(_this))
                }))
            },
            closestRoot: function(el) {
                return this.closestByAttribute(el, "id")
            },
            closestByAttribute: function(el, attribute) {
                var closestEl = el.closest("[wire\\:".concat(attribute, "]"));
                if (!closestEl) throw "\nLivewire Error:\n\nCannot find parent element in DOM tree containing attribute: [wire:".concat(attribute, "].\n\nUsually this is caused by Livewire's DOM-differ not being able to properly track changes.\n\nReference the following guide for common causes: https://laravel-livewire.com/docs/troubleshooting \n\nReferenced element:\n\n").concat(el.outerHTML, "\n");
                return closestEl
            },
            isComponentRootEl: function(el) {
                return this.hasAttribute(el, "id")
            },
            hasAttribute: function(el, attribute) {
                return el.hasAttribute("wire:".concat(attribute))
            },
            getAttribute: function(el, attribute) {
                return el.getAttribute("wire:".concat(attribute))
            },
            removeAttribute: function(el, attribute) {
                return el.removeAttribute("wire:".concat(attribute))
            },
            setAttribute: function(el, attribute, value) {
                return el.setAttribute("wire:".concat(attribute), value)
            },
            hasFocus: function(el) {
                return el === document.activeElement
            },
            isInput: function(el) {
                return ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName.toUpperCase())
            },
            isTextInput: function(el) {
                return ["INPUT", "TEXTAREA"].includes(el.tagName.toUpperCase()) && !["checkbox", "radio"].includes(el.type)
            },
            valueFromInput: function(el, component) {
                if ("checkbox" === el.type) {
                    var modelName = wireDirectives(el).get("model").value,
                        modelValue = component.deferredActions[modelName] ? component.deferredActions[modelName].payload.value : getValue(component.data, modelName);
                    return Array.isArray(modelValue) ? this.mergeCheckboxValueIntoArray(el, modelValue) : !!el.checked && (el.getAttribute("value") || !0)
                }
                return "SELECT" === el.tagName && el.multiple ? this.getSelectValues(el) : el.value
            },
            mergeCheckboxValueIntoArray: function(el, arrayValue) {
                return el.checked ? arrayValue.includes(el.value) ? arrayValue : arrayValue.concat(el.value) : arrayValue.filter((function(item) {
                    return item != el.value
                }))
            },
            setInputValueFromModel: function(el, component) {
                var modelString = wireDirectives(el).get("model").value,
                    modelValue = getValue(component.data, modelString);
                "input" === el.tagName.toLowerCase() && "file" === el.type || this.setInputValue(el, modelValue)
            },
            setInputValue: function(el, value) {
                if (store$2.callHook("interceptWireModelSetValue", value, el), "radio" === el.type) el.checked = el.value == value;
                else if ("checkbox" === el.type)
                    if (Array.isArray(value)) {
                        var valueFound = !1;
                        value.forEach((function(val) {
                            val == el.value && (valueFound = !0)
                        })), el.checked = valueFound
                    } else el.checked = !!value;
                else "SELECT" === el.tagName ? this.updateSelect(el, value) : (value = void 0 === value ? "" : value, el.value = value)
            },
            getSelectValues: function(el) {
                return Array.from(el.options).filter((function(option) {
                    return option.selected
                })).map((function(option) {
                    return option.value || option.text
                }))
            },
            updateSelect: function(el, value) {
                var arrayWrappedValue = [].concat(value).map((function(value) {
                    return value + ""
                }));
                Array.from(el.options).forEach((function(option) {
                    option.selected = arrayWrappedValue.includes(option.value)
                }))
            }
        },
        ceil = Math.ceil,
        floor = Math.floor,
        toInteger = function(argument) {
            return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument)
        },
        requireObjectCoercible = function(it) {
            if (null == it) throw TypeError("Can't call method on " + it);
            return it
        },
        createMethod$3 = function(CONVERT_TO_STRING) {
            return function($this, pos) {
                var first, second, S = String(requireObjectCoercible($this)),
                    position = toInteger(pos),
                    size = S.length;
                return position < 0 || position >= size ? CONVERT_TO_STRING ? "" : void 0 : (first = S.charCodeAt(position)) < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : second - 56320 + (first - 55296 << 10) + 65536
            }
        },
        stringMultibyte = {
            codeAt: createMethod$3(!1),
            charAt: createMethod$3(!0)
        },
        commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function createCommonjsModule(fn, basedir, module) {
        return fn(module = {
            path: basedir,
            exports: {},
            require: function(path, base) {
                return commonjsRequire(path, null == base ? module.path : base)
            }
        }, module.exports), module.exports
    }

    function commonjsRequire() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
    }
    var check = function(it) {
            return it && it.Math == Math && it
        },
        global_1 = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof commonjsGlobal && commonjsGlobal) || function() {
            return this
        }() || Function("return this")(),
        fails = function(exec) {
            try {
                return !!exec()
            } catch (error) {
                return !0
            }
        },
        descriptors = !fails((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        isObject = function(it) {
            return "object" == typeof it ? null !== it : "function" == typeof it
        },
        document$3 = global_1.document,
        EXISTS = isObject(document$3) && isObject(document$3.createElement),
        documentCreateElement = function(it) {
            return EXISTS ? document$3.createElement(it) : {}
        },
        ie8DomDefine = !descriptors && !fails((function() {
            return 7 != Object.defineProperty(documentCreateElement("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        anObject = function(it) {
            if (!isObject(it)) throw TypeError(String(it) + " is not an object");
            return it
        },
        toPrimitive = function(input, PREFERRED_STRING) {
            if (!isObject(input)) return input;
            var fn, val;
            if (PREFERRED_STRING && "function" == typeof(fn = input.toString) && !isObject(val = fn.call(input))) return val;
            if ("function" == typeof(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
            if (!PREFERRED_STRING && "function" == typeof(fn = input.toString) && !isObject(val = fn.call(input))) return val;
            throw TypeError("Can't convert object to primitive value")
        },
        $defineProperty = Object.defineProperty,
        f$5 = descriptors ? $defineProperty : function(O, P, Attributes) {
            if (anObject(O), P = toPrimitive(P, !0), anObject(Attributes), ie8DomDefine) try {
                return $defineProperty(O, P, Attributes)
            } catch (error) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
            return "value" in Attributes && (O[P] = Attributes.value), O
        },
        objectDefineProperty = {
            f: f$5
        },
        createPropertyDescriptor = function(bitmap, value) {
            return {
                enumerable: !(1 & bitmap),
                configurable: !(2 & bitmap),
                writable: !(4 & bitmap),
                value: value
            }
        },
        createNonEnumerableProperty = descriptors ? function(object, key, value) {
            return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value))
        } : function(object, key, value) {
            return object[key] = value, object
        },
        setGlobal = function(key, value) {
            try {
                createNonEnumerableProperty(global_1, key, value)
            } catch (error) {
                global_1[key] = value
            }
            return value
        },
        SHARED = "__core-js_shared__",
        store$1 = global_1[SHARED] || setGlobal(SHARED, {}),
        sharedStore = store$1,
        functionToString = Function.toString;
    "function" != typeof sharedStore.inspectSource && (sharedStore.inspectSource = function(it) {
        return functionToString.call(it)
    });
    var inspectSource = sharedStore.inspectSource,
        WeakMap$1 = global_1.WeakMap,
        nativeWeakMap = "function" == typeof WeakMap$1 && /native code/.test(inspectSource(WeakMap$1)),
        toObject = function(argument) {
            return Object(requireObjectCoercible(argument))
        },
        hasOwnProperty = {}.hasOwnProperty,
        has$1 = Object.hasOwn || function(it, key) {
            return hasOwnProperty.call(toObject(it), key)
        },
        shared = createCommonjsModule((function(module) {
            (module.exports = function(key, value) {
                return sharedStore[key] || (sharedStore[key] = void 0 !== value ? value : {})
            })("versions", []).push({
                version: "3.15.2",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        })),
        id = 0,
        postfix = Math.random(),
        uid = function(key) {
            return "Symbol(" + String(void 0 === key ? "" : key) + ")_" + (++id + postfix).toString(36)
        },
        keys = shared("keys"),
        sharedKey = function(key) {
            return keys[key] || (keys[key] = uid(key))
        },
        hiddenKeys$1 = {},
        OBJECT_ALREADY_INITIALIZED = "Object already initialized",
        WeakMap = global_1.WeakMap,
        set$1, get, has, enforce = function(it) {
            return has(it) ? get(it) : set$1(it, {})
        },
        getterFor = function(TYPE) {
            return function(it) {
                var state;
                if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                return state
            }
        };
    if (nativeWeakMap || sharedStore.state) {
        var store = sharedStore.state || (sharedStore.state = new WeakMap),
            wmget = store.get,
            wmhas = store.has,
            wmset = store.set;
        set$1 = function(it, metadata) {
            if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
            return metadata.facade = it, wmset.call(store, it, metadata), metadata
        }, get = function(it) {
            return wmget.call(store, it) || {}
        }, has = function(it) {
            return wmhas.call(store, it)
        }
    } else {
        var STATE = sharedKey("state");
        hiddenKeys$1[STATE] = !0, set$1 = function(it, metadata) {
            if (has$1(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
            return metadata.facade = it, createNonEnumerableProperty(it, STATE, metadata), metadata
        }, get = function(it) {
            return has$1(it, STATE) ? it[STATE] : {}
        }, has = function(it) {
            return has$1(it, STATE)
        }
    }
    var internalState = {
            set: set$1,
            get: get,
            has: has,
            enforce: enforce,
            getterFor: getterFor
        },
        $propertyIsEnumerable = {}.propertyIsEnumerable,
        getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor,
        NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable.call({
            1: 2
        }, 1),
        f$4 = NASHORN_BUG ? function(V) {
            var descriptor = getOwnPropertyDescriptor$3(this, V);
            return !!descriptor && descriptor.enumerable
        } : $propertyIsEnumerable,
        objectPropertyIsEnumerable = {
            f: f$4
        },
        toString = {}.toString,
        classofRaw = function(it) {
            return toString.call(it).slice(8, -1)
        },
        split = "".split,
        indexedObject = fails((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(it) {
            return "String" == classofRaw(it) ? split.call(it, "") : Object(it)
        } : Object,
        toIndexedObject = function(it) {
            return indexedObject(requireObjectCoercible(it))
        },
        $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
        f$3 = descriptors ? $getOwnPropertyDescriptor : function(O, P) {
            if (O = toIndexedObject(O), P = toPrimitive(P, !0), ie8DomDefine) try {
                return $getOwnPropertyDescriptor(O, P)
            } catch (error) {}
            if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P])
        },
        objectGetOwnPropertyDescriptor = {
            f: f$3
        },
        redefine = createCommonjsModule((function(module) {
            var getInternalState = internalState.get,
                enforceInternalState = internalState.enforce,
                TEMPLATE = String(String).split("String");
            (module.exports = function(O, key, value, options) {
                var state, unsafe = !!options && !!options.unsafe,
                    simple = !!options && !!options.enumerable,
                    noTargetGet = !!options && !!options.noTargetGet;
                "function" == typeof value && ("string" != typeof key || has$1(value, "name") || createNonEnumerableProperty(value, "name", key), (state = enforceInternalState(value)).source || (state.source = TEMPLATE.join("string" == typeof key ? key : ""))), O !== global_1 ? (unsafe ? !noTargetGet && O[key] && (simple = !0) : delete O[key], simple ? O[key] = value : createNonEnumerableProperty(O, key, value)) : simple ? O[key] = value : setGlobal(key, value)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && getInternalState(this).source || inspectSource(this)
            }))
        })),
        path = global_1,
        aFunction$1 = function(variable) {
            return "function" == typeof variable ? variable : void 0
        },
        getBuiltIn = function(namespace, method) {
            return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method]
        },
        min$2 = Math.min,
        toLength = function(argument) {
            return argument > 0 ? min$2(toInteger(argument), 9007199254740991) : 0
        },
        max = Math.max,
        min$1 = Math.min,
        toAbsoluteIndex = function(index, length) {
            var integer = toInteger(index);
            return integer < 0 ? max(integer + length, 0) : min$1(integer, length)
        },
        createMethod$2 = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var value, O = toIndexedObject($this),
                    length = toLength(O.length),
                    index = toAbsoluteIndex(fromIndex, length);
                if (IS_INCLUDES && el != el) {
                    for (; length > index;)
                        if ((value = O[index++]) != value) return !0
                } else
                    for (; length > index; index++)
                        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                return !IS_INCLUDES && -1
            }
        },
        arrayIncludes = {
            includes: createMethod$2(!0),
            indexOf: createMethod$2(!1)
        },
        indexOf = arrayIncludes.indexOf,
        objectKeysInternal = function(object, names) {
            var key, O = toIndexedObject(object),
                i = 0,
                result = [];
            for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key);
            for (; names.length > i;) has$1(O, key = names[i++]) && (~indexOf(result, key) || result.push(key));
            return result
        },
        enumBugKeys = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        hiddenKeys = enumBugKeys.concat("length", "prototype"),
        f$2 = Object.getOwnPropertyNames || function(O) {
            return objectKeysInternal(O, hiddenKeys)
        },
        objectGetOwnPropertyNames = {
            f: f$2
        },
        f$1 = Object.getOwnPropertySymbols,
        objectGetOwnPropertySymbols = {
            f: f$1
        },
        ownKeys = getBuiltIn("Reflect", "ownKeys") || function(it) {
            var keys = objectGetOwnPropertyNames.f(anObject(it)),
                getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
            return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys
        },
        copyConstructorProperties = function(target, source) {
            for (var keys = ownKeys(source), defineProperty = objectDefineProperty.f, getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f, i = 0; i < keys.length; i++) {
                var key = keys[i];
                has$1(target, key) || defineProperty(target, key, getOwnPropertyDescriptor(source, key))
            }
        },
        replacement = /#|\.prototype\./,
        isForced = function(feature, detection) {
            var value = data[normalize(feature)];
            return value == POLYFILL || value != NATIVE && ("function" == typeof detection ? fails(detection) : !!detection)
        },
        normalize = isForced.normalize = function(string) {
            return String(string).replace(replacement, ".").toLowerCase()
        },
        data = isForced.data = {},
        NATIVE = isForced.NATIVE = "N",
        POLYFILL = isForced.POLYFILL = "P",
        isForced_1 = isForced,
        getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f,
        _export = function(options, source) {
            var target, key, targetProperty, sourceProperty, descriptor, TARGET = options.target,
                GLOBAL = options.global,
                STATIC = options.stat;
            if (target = GLOBAL ? global_1 : STATIC ? global_1[TARGET] || setGlobal(TARGET, {}) : (global_1[TARGET] || {}).prototype)
                for (key in source) {
                    if (sourceProperty = source[key], targetProperty = options.noTargetGet ? (descriptor = getOwnPropertyDescriptor$2(target, key)) && descriptor.value : target[key], !isForced_1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced) && void 0 !== targetProperty) {
                        if (typeof sourceProperty == typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty)
                    }(options.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(sourceProperty, "sham", !0), redefine(target, key, sourceProperty, options)
                }
        },
        correctPrototypeGetter = !fails((function() {
            function F() {}
            return F.prototype.constructor = null, Object.getPrototypeOf(new F) !== F.prototype
        })),
        IE_PROTO$1 = sharedKey("IE_PROTO"),
        ObjectPrototype = Object.prototype,
        objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function(O) {
            return O = toObject(O), has$1(O, IE_PROTO$1) ? O[IE_PROTO$1] : "function" == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectPrototype : null
        },
        engineUserAgent = getBuiltIn("navigator", "userAgent") || "",
        process$3 = global_1.process,
        versions = process$3 && process$3.versions,
        v8 = versions && versions.v8,
        match, version;
    v8 ? (match = v8.split("."), version = match[0] < 4 ? 1 : match[0] + match[1]) : engineUserAgent && (match = engineUserAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = engineUserAgent.match(/Chrome\/(\d+)/), match && (version = match[1])));
    var engineV8Version = version && +version,
        nativeSymbol = !!Object.getOwnPropertySymbols && !fails((function() {
            var symbol = Symbol();
            return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && engineV8Version && engineV8Version < 41
        })),
        useSymbolAsUid = nativeSymbol && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        WellKnownSymbolsStore = shared("wks"),
        Symbol$1 = global_1.Symbol,
        createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid,
        wellKnownSymbol = function(name) {
            return has$1(WellKnownSymbolsStore, name) && (nativeSymbol || "string" == typeof WellKnownSymbolsStore[name]) || (nativeSymbol && has$1(Symbol$1, name) ? WellKnownSymbolsStore[name] = Symbol$1[name] : WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name)), WellKnownSymbolsStore[name]
        },
        ITERATOR$5 = wellKnownSymbol("iterator"),
        BUGGY_SAFARI_ITERATORS$1 = !1,
        returnThis$2 = function() {
            return this
        },
        IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
    [].keys && (arrayIterator = [].keys(), "next" in arrayIterator ? (PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator)), PrototypeOfArrayIteratorPrototype !== Object.prototype && (IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype)) : BUGGY_SAFARI_ITERATORS$1 = !0);
    var NEW_ITERATOR_PROTOTYPE = null == IteratorPrototype$2 || fails((function() {
        var test = {};
        return IteratorPrototype$2[ITERATOR$5].call(test) !== test
    }));
    NEW_ITERATOR_PROTOTYPE && (IteratorPrototype$2 = {}), has$1(IteratorPrototype$2, ITERATOR$5) || createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$5, returnThis$2);
    var iteratorsCore = {
            IteratorPrototype: IteratorPrototype$2,
            BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
        },
        objectKeys = Object.keys || function(O) {
            return objectKeysInternal(O, enumBugKeys)
        },
        objectDefineProperties = descriptors ? Object.defineProperties : function(O, Properties) {
            anObject(O);
            for (var key, keys = objectKeys(Properties), length = keys.length, index = 0; length > index;) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
            return O
        },
        html = getBuiltIn("document", "documentElement"),
        GT = ">",
        LT = "<",
        PROTOTYPE = "prototype",
        SCRIPT = "script",
        IE_PROTO = sharedKey("IE_PROTO"),
        EmptyConstructor = function() {},
        scriptTag = function(content) {
            return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT
        },
        NullProtoObjectViaActiveX = function(activeXDocument) {
            activeXDocument.write(scriptTag("")), activeXDocument.close();
            var temp = activeXDocument.parentWindow.Object;
            return activeXDocument = null, temp
        },
        NullProtoObjectViaIFrame = function() {
            var iframeDocument, iframe = documentCreateElement("iframe"),
                JS = "java" + SCRIPT + ":";
            return iframe.style.display = "none", html.appendChild(iframe), iframe.src = String(JS), (iframeDocument = iframe.contentWindow.document).open(), iframeDocument.write(scriptTag("document.F=Object")), iframeDocument.close(), iframeDocument.F
        },
        activeXDocument, NullProtoObject = function() {
            try {
                activeXDocument = document.domain && new ActiveXObject("htmlfile")
            } catch (error) {}
            NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
            for (var length = enumBugKeys.length; length--;) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
            return NullProtoObject()
        };
    hiddenKeys$1[IE_PROTO] = !0;
    var objectCreate = Object.create || function(O, Properties) {
            var result;
            return null !== O ? (EmptyConstructor[PROTOTYPE] = anObject(O), result = new EmptyConstructor, EmptyConstructor[PROTOTYPE] = null, result[IE_PROTO] = O) : result = NullProtoObject(), void 0 === Properties ? result : objectDefineProperties(result, Properties)
        },
        defineProperty$1 = objectDefineProperty.f,
        TO_STRING_TAG$3 = wellKnownSymbol("toStringTag"),
        setToStringTag = function(it, TAG, STATIC) {
            it && !has$1(it = STATIC ? it : it.prototype, TO_STRING_TAG$3) && defineProperty$1(it, TO_STRING_TAG$3, {
                configurable: !0,
                value: TAG
            })
        },
        iterators = {},
        IteratorPrototype$1 = iteratorsCore.IteratorPrototype,
        returnThis$1 = function() {
            return this
        },
        createIteratorConstructor = function(IteratorConstructor, NAME, next) {
            var TO_STRING_TAG = NAME + " Iterator";
            return IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
                next: createPropertyDescriptor(1, next)
            }), setToStringTag(IteratorConstructor, TO_STRING_TAG, !1), iterators[TO_STRING_TAG] = returnThis$1, IteratorConstructor
        },
        aPossiblePrototype = function(it) {
            if (!isObject(it) && null !== it) throw TypeError("Can't set " + String(it) + " as a prototype");
            return it
        },
        objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var setter, CORRECT_SETTER = !1,
                test = {};
            try {
                (setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(test, []), CORRECT_SETTER = test instanceof Array
            } catch (error) {}
            return function(O, proto) {
                return anObject(O), aPossiblePrototype(proto), CORRECT_SETTER ? setter.call(O, proto) : O.__proto__ = proto, O
            }
        }() : void 0),
        IteratorPrototype = iteratorsCore.IteratorPrototype,
        BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS,
        ITERATOR$4 = wellKnownSymbol("iterator"),
        KEYS = "keys",
        VALUES = "values",
        ENTRIES = "entries",
        returnThis = function() {
            return this
        },
        defineIterator = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
            createIteratorConstructor(IteratorConstructor, NAME, next);
            var CurrentIteratorPrototype, methods, KEY, getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                    switch (KIND) {
                        case KEYS:
                        case VALUES:
                        case ENTRIES:
                            return function() {
                                return new IteratorConstructor(this, KIND)
                            }
                    }
                    return function() {
                        return new IteratorConstructor(this)
                    }
                },
                TO_STRING_TAG = NAME + " Iterator",
                INCORRECT_VALUES_NAME = !1,
                IterablePrototype = Iterable.prototype,
                nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT],
                defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT),
                anyNativeIterator = "Array" == NAME && IterablePrototype.entries || nativeIterator;
            if (anyNativeIterator && (CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable)), IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next && (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype && (objectSetPrototypeOf ? objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype) : "function" != typeof CurrentIteratorPrototype[ITERATOR$4] && createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$4, returnThis)), setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, !0))), DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES && (INCORRECT_VALUES_NAME = !0, defaultIterator = function() {
                    return nativeIterator.call(this)
                }), IterablePrototype[ITERATOR$4] !== defaultIterator && createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator), iterators[NAME] = defaultIterator, DEFAULT)
                if (methods = {
                        values: getIterationMethod(VALUES),
                        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                        entries: getIterationMethod(ENTRIES)
                    }, FORCED)
                    for (KEY in methods)(BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) && redefine(IterablePrototype, KEY, methods[KEY]);
                else _export({
                    target: NAME,
                    proto: !0,
                    forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                }, methods);
            return methods
        },
        charAt = stringMultibyte.charAt,
        STRING_ITERATOR = "String Iterator",
        setInternalState$2 = internalState.set,
        getInternalState$2 = internalState.getterFor(STRING_ITERATOR);
    defineIterator(String, "String", (function(iterated) {
        setInternalState$2(this, {
            type: STRING_ITERATOR,
            string: String(iterated),
            index: 0
        })
    }), (function() {
        var point, state = getInternalState$2(this),
            string = state.string,
            index = state.index;
        return index >= string.length ? {
            value: void 0,
            done: !0
        } : (point = charAt(string, index), state.index += point.length, {
            value: point,
            done: !1
        })
    }));
    var aFunction = function(it) {
            if ("function" != typeof it) throw TypeError(String(it) + " is not a function");
            return it
        },
        functionBindContext = function(fn, that, length) {
            if (aFunction(fn), void 0 === that) return fn;
            switch (length) {
                case 0:
                    return function() {
                        return fn.call(that)
                    };
                case 1:
                    return function(a) {
                        return fn.call(that, a)
                    };
                case 2:
                    return function(a, b) {
                        return fn.call(that, a, b)
                    };
                case 3:
                    return function(a, b, c) {
                        return fn.call(that, a, b, c)
                    }
            }
            return function() {
                return fn.apply(that, arguments)
            }
        },
        iteratorClose = function(iterator) {
            var returnMethod = iterator.return;
            if (void 0 !== returnMethod) return anObject(returnMethod.call(iterator)).value
        },
        callWithSafeIterationClosing = function(iterator, fn, value, ENTRIES) {
            try {
                return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value)
            } catch (error) {
                throw iteratorClose(iterator), error
            }
        },
        ITERATOR$3 = wellKnownSymbol("iterator"),
        ArrayPrototype$1 = Array.prototype,
        isArrayIteratorMethod = function(it) {
            return void 0 !== it && (iterators.Array === it || ArrayPrototype$1[ITERATOR$3] === it)
        },
        createProperty = function(object, key, value) {
            var propertyKey = toPrimitive(key);
            propertyKey in object ? objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value)) : object[propertyKey] = value
        },
        TO_STRING_TAG$2 = wellKnownSymbol("toStringTag"),
        test = {};
    test[TO_STRING_TAG$2] = "z";
    var toStringTagSupport = "[object z]" === String(test),
        TO_STRING_TAG$1 = wellKnownSymbol("toStringTag"),
        CORRECT_ARGUMENTS = "Arguments" == classofRaw(function() {
            return arguments
        }()),
        tryGet = function(it, key) {
            try {
                return it[key]
            } catch (error) {}
        },
        classof = toStringTagSupport ? classofRaw : function(it) {
            var O, tag, result;
            return void 0 === it ? "Undefined" : null === it ? "Null" : "string" == typeof(tag = tryGet(O = Object(it), TO_STRING_TAG$1)) ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : "Object" == (result = classofRaw(O)) && "function" == typeof O.callee ? "Arguments" : result
        },
        ITERATOR$2 = wellKnownSymbol("iterator"),
        getIteratorMethod = function(it) {
            if (null != it) return it[ITERATOR$2] || it["@@iterator"] || iterators[classof(it)]
        },
        arrayFrom = function(arrayLike) {
            var length, result, step, iterator, next, value, O = toObject(arrayLike),
                C = "function" == typeof this ? this : Array,
                argumentsLength = arguments.length,
                mapfn = argumentsLength > 1 ? arguments[1] : void 0,
                mapping = void 0 !== mapfn,
                iteratorMethod = getIteratorMethod(O),
                index = 0;
            if (mapping && (mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2)), null == iteratorMethod || C == Array && isArrayIteratorMethod(iteratorMethod))
                for (result = new C(length = toLength(O.length)); length > index; index++) value = mapping ? mapfn(O[index], index) : O[index], createProperty(result, index, value);
            else
                for (next = (iterator = iteratorMethod.call(O)).next, result = new C; !(step = next.call(iterator)).done; index++) value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], !0) : step.value, createProperty(result, index, value);
            return result.length = index, result
        },
        ITERATOR$1 = wellKnownSymbol("iterator"),
        SAFE_CLOSING = !1;
    try {
        var called = 0,
            iteratorWithReturn = {
                next: function() {
                    return {
                        done: !!called++
                    }
                },
                return: function() {
                    SAFE_CLOSING = !0
                }
            };
        iteratorWithReturn[ITERATOR$1] = function() {
            return this
        }, Array.from(iteratorWithReturn, (function() {
            throw 2
        }))
    } catch (error) {}
    var checkCorrectnessOfIteration = function(exec, SKIP_CLOSING) {
            if (!SKIP_CLOSING && !SAFE_CLOSING) return !1;
            var ITERATION_SUPPORT = !1;
            try {
                var object = {};
                object[ITERATOR$1] = function() {
                    return {
                        next: function() {
                            return {
                                done: ITERATION_SUPPORT = !0
                            }
                        }
                    }
                }, exec(object)
            } catch (error) {}
            return ITERATION_SUPPORT
        },
        INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration((function(iterable) {
            Array.from(iterable)
        }));
    _export({
        target: "Array",
        stat: !0,
        forced: INCORRECT_ITERATION$1
    }, {
        from: arrayFrom
    }), path.Array.from;
    var UNSCOPABLES = wellKnownSymbol("unscopables"),
        ArrayPrototype = Array.prototype;
    null == ArrayPrototype[UNSCOPABLES] && objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
        configurable: !0,
        value: objectCreate(null)
    });
    var addToUnscopables = function(key) {
            ArrayPrototype[UNSCOPABLES][key] = !0
        },
        $includes = arrayIncludes.includes;
    _export({
        target: "Array",
        proto: !0
    }, {
        includes: function(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), addToUnscopables("includes");
    var call = Function.call,
        entryUnbind = function(CONSTRUCTOR, METHOD, length) {
            return functionBindContext(call, global_1[CONSTRUCTOR].prototype[METHOD], length)
        };
    entryUnbind("Array", "includes");
    var isArray = Array.isArray || function(arg) {
            return "Array" == classofRaw(arg)
        },
        flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
            for (var element, targetIndex = start, sourceIndex = 0, mapFn = !!mapper && functionBindContext(mapper, thisArg, 3); sourceIndex < sourceLen;) {
                if (sourceIndex in source) {
                    if (element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex], depth > 0 && isArray(element)) targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
                    else {
                        if (targetIndex >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                        target[targetIndex] = element
                    }
                    targetIndex++
                }
                sourceIndex++
            }
            return targetIndex
        },
        flattenIntoArray_1 = flattenIntoArray,
        SPECIES$3 = wellKnownSymbol("species"),
        arraySpeciesCreate = function(originalArray, length) {
            var C;
            return isArray(originalArray) && ("function" != typeof(C = originalArray.constructor) || C !== Array && !isArray(C.prototype) ? isObject(C) && null === (C = C[SPECIES$3]) && (C = void 0) : C = void 0), new(void 0 === C ? Array : C)(0 === length ? 0 : length)
        };
    _export({
        target: "Array",
        proto: !0
    }, {
        flat: function() {
            var depthArg = arguments.length ? arguments[0] : void 0,
                O = toObject(this),
                sourceLen = toLength(O.length),
                A = arraySpeciesCreate(O, 0);
            return A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, void 0 === depthArg ? 1 : toInteger(depthArg)), A
        }
    }), addToUnscopables("flat"), entryUnbind("Array", "flat");
    var push = [].push,
        createMethod$1 = function(TYPE) {
            var IS_MAP = 1 == TYPE,
                IS_FILTER = 2 == TYPE,
                IS_SOME = 3 == TYPE,
                IS_EVERY = 4 == TYPE,
                IS_FIND_INDEX = 6 == TYPE,
                IS_FILTER_OUT = 7 == TYPE,
                NO_HOLES = 5 == TYPE || IS_FIND_INDEX;
            return function($this, callbackfn, that, specificCreate) {
                for (var value, result, O = toObject($this), self = indexedObject(O), boundFunction = functionBindContext(callbackfn, that, 3), length = toLength(self.length), index = 0, create = specificCreate || arraySpeciesCreate, target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : void 0; length > index; index++)
                    if ((NO_HOLES || index in self) && (result = boundFunction(value = self[index], index, O), TYPE))
                        if (IS_MAP) target[index] = result;
                        else if (result) switch (TYPE) {
                    case 3:
                        return !0;
                    case 5:
                        return value;
                    case 6:
                        return index;
                    case 2:
                        push.call(target, value)
                } else switch (TYPE) {
                    case 4:
                        return !1;
                    case 7:
                        push.call(target, value)
                }
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target
            }
        },
        arrayIteration = {
            forEach: createMethod$1(0),
            map: createMethod$1(1),
            filter: createMethod$1(2),
            some: createMethod$1(3),
            every: createMethod$1(4),
            find: createMethod$1(5),
            findIndex: createMethod$1(6),
            filterOut: createMethod$1(7)
        },
        $find = arrayIteration.find,
        FIND = "find",
        SKIPS_HOLES = !0;
    FIND in [] && Array(1)[FIND]((function() {
        SKIPS_HOLES = !1
    })), _export({
        target: "Array",
        proto: !0,
        forced: SKIPS_HOLES
    }, {
        find: function(callbackfn) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), addToUnscopables(FIND), entryUnbind("Array", "find");
    var $assign = Object.assign,
        defineProperty = Object.defineProperty,
        objectAssign = !$assign || fails((function() {
            if (descriptors && 1 !== $assign({
                    b: 1
                }, $assign(defineProperty({}, "a", {
                    enumerable: !0,
                    get: function() {
                        defineProperty(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var A = {},
                B = {},
                symbol = Symbol();
            return A[symbol] = 7, "abcdefghijklmnopqrst".split("").forEach((function(chr) {
                B[chr] = chr
            })), 7 != $assign({}, A)[symbol] || "abcdefghijklmnopqrst" != objectKeys($assign({}, B)).join("")
        })) ? function(target, source) {
            for (var T = toObject(target), argumentsLength = arguments.length, index = 1, getOwnPropertySymbols = objectGetOwnPropertySymbols.f, propertyIsEnumerable = objectPropertyIsEnumerable.f; argumentsLength > index;)
                for (var key, S = indexedObject(arguments[index++]), keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S), length = keys.length, j = 0; length > j;) key = keys[j++], descriptors && !propertyIsEnumerable.call(S, key) || (T[key] = S[key]);
            return T
        } : $assign;
    _export({
        target: "Object",
        stat: !0,
        forced: Object.assign !== objectAssign
    }, {
        assign: objectAssign
    }), path.Object.assign;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f,
        createMethod = function(TO_ENTRIES) {
            return function(it) {
                for (var key, O = toIndexedObject(it), keys = objectKeys(O), length = keys.length, i = 0, result = []; length > i;) key = keys[i++], descriptors && !propertyIsEnumerable.call(O, key) || result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
                return result
            }
        },
        objectToArray = {
            entries: createMethod(!0),
            values: createMethod(!1)
        },
        $entries = objectToArray.entries;
    _export({
        target: "Object",
        stat: !0
    }, {
        entries: function(O) {
            return $entries(O)
        }
    }), path.Object.entries;
    var $values = objectToArray.values;
    _export({
        target: "Object",
        stat: !0
    }, {
        values: function(O) {
            return $values(O)
        }
    }), path.Object.values;
    var Result = function(stopped, result) {
            this.stopped = stopped, this.result = result
        },
        iterate = function(iterable, unboundFunction, options) {
            var iterator, iterFn, index, length, result, next, step, that = options && options.that,
                AS_ENTRIES = !(!options || !options.AS_ENTRIES),
                IS_ITERATOR = !(!options || !options.IS_ITERATOR),
                INTERRUPTED = !(!options || !options.INTERRUPTED),
                fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED),
                stop = function(condition) {
                    return iterator && iteratorClose(iterator), new Result(!0, condition)
                },
                callFn = function(value) {
                    return AS_ENTRIES ? (anObject(value), INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1])) : INTERRUPTED ? fn(value, stop) : fn(value)
                };
            if (IS_ITERATOR) iterator = iterable;
            else {
                if ("function" != typeof(iterFn = getIteratorMethod(iterable))) throw TypeError("Target is not iterable");
                if (isArrayIteratorMethod(iterFn)) {
                    for (index = 0, length = toLength(iterable.length); length > index; index++)
                        if ((result = callFn(iterable[index])) && result instanceof Result) return result;
                    return new Result(!1)
                }
                iterator = iterFn.call(iterable)
            }
            for (next = iterator.next; !(step = next.call(iterator)).done;) {
                try {
                    result = callFn(step.value)
                } catch (error) {
                    throw iteratorClose(iterator), error
                }
                if ("object" == typeof result && result && result instanceof Result) return result
            }
            return new Result(!1)
        },
        $AggregateError = function(errors, message) {
            var that = this;
            if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
            objectSetPrototypeOf && (that = objectSetPrototypeOf(new Error(void 0), objectGetPrototypeOf(that))), void 0 !== message && createNonEnumerableProperty(that, "message", String(message));
            var errorsArray = [];
            return iterate(errors, errorsArray.push, {
                that: errorsArray
            }), createNonEnumerableProperty(that, "errors", errorsArray), that
        };
    $AggregateError.prototype = objectCreate(Error.prototype, {
        constructor: createPropertyDescriptor(5, $AggregateError),
        message: createPropertyDescriptor(5, ""),
        name: createPropertyDescriptor(5, "AggregateError")
    }), _export({
        global: !0
    }, {
        AggregateError: $AggregateError
    });
    var objectToString = toStringTagSupport ? {}.toString : function() {
        return "[object " + classof(this) + "]"
    };
    toStringTagSupport || redefine(Object.prototype, "toString", objectToString, {
        unsafe: !0
    });
    var nativePromiseConstructor = global_1.Promise,
        redefineAll = function(target, src, options) {
            for (var key in src) redefine(target, key, src[key], options);
            return target
        },
        SPECIES$2 = wellKnownSymbol("species"),
        setSpecies = function(CONSTRUCTOR_NAME) {
            var Constructor = getBuiltIn(CONSTRUCTOR_NAME),
                defineProperty = objectDefineProperty.f;
            descriptors && Constructor && !Constructor[SPECIES$2] && defineProperty(Constructor, SPECIES$2, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        anInstance = function(it, Constructor, name) {
            if (!(it instanceof Constructor)) throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
            return it
        },
        SPECIES$1 = wellKnownSymbol("species"),
        speciesConstructor = function(O, defaultConstructor) {
            var S, C = anObject(O).constructor;
            return void 0 === C || null == (S = anObject(C)[SPECIES$1]) ? defaultConstructor : aFunction(S)
        },
        engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent),
        engineIsNode = "process" == classofRaw(global_1.process),
        location = global_1.location,
        set = global_1.setImmediate,
        clear = global_1.clearImmediate,
        process$2 = global_1.process,
        MessageChannel = global_1.MessageChannel,
        Dispatch = global_1.Dispatch,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = "onreadystatechange",
        defer, channel, port, run = function(id) {
            if (queue.hasOwnProperty(id)) {
                var fn = queue[id];
                delete queue[id], fn()
            }
        },
        runner = function(id) {
            return function() {
                run(id)
            }
        },
        listener = function(event) {
            run(event.data)
        },
        post = function(id) {
            global_1.postMessage(id + "", location.protocol + "//" + location.host)
        };
    set && clear || (set = function(fn) {
        for (var args = [], i = 1; arguments.length > i;) args.push(arguments[i++]);
        return queue[++counter] = function() {
            ("function" == typeof fn ? fn : Function(fn)).apply(void 0, args)
        }, defer(counter), counter
    }, clear = function(id) {
        delete queue[id]
    }, engineIsNode ? defer = function(id) {
        process$2.nextTick(runner(id))
    } : Dispatch && Dispatch.now ? defer = function(id) {
        Dispatch.now(runner(id))
    } : MessageChannel && !engineIsIos ? (channel = new MessageChannel, port = channel.port2, channel.port1.onmessage = listener, defer = functionBindContext(port.postMessage, port, 1)) : global_1.addEventListener && "function" == typeof postMessage && !global_1.importScripts && location && "file:" !== location.protocol && !fails(post) ? (defer = post, global_1.addEventListener("message", listener, !1)) : defer = ONREADYSTATECHANGE in documentCreateElement("script") ? function(id) {
        html.appendChild(documentCreateElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this), run(id)
        }
    } : function(id) {
        setTimeout(runner(id), 0)
    });
    var task$1 = {
            set: set,
            clear: clear
        },
        engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent),
        getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f,
        macrotask = task$1.set,
        MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver,
        document$2 = global_1.document,
        process$1 = global_1.process,
        Promise$1 = global_1.Promise,
        queueMicrotaskDescriptor = getOwnPropertyDescriptor$1(global_1, "queueMicrotask"),
        queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value,
        flush, head, last, notify$1, toggle, node, promise, then;
    queueMicrotask || (flush = function() {
        var parent, fn;
        for (engineIsNode && (parent = process$1.domain) && parent.exit(); head;) {
            fn = head.fn, head = head.next;
            try {
                fn()
            } catch (error) {
                throw head ? notify$1() : last = void 0, error
            }
        }
        last = void 0, parent && parent.enter()
    }, engineIsIos || engineIsNode || engineIsWebosWebkit || !MutationObserver || !document$2 ? Promise$1 && Promise$1.resolve ? (promise = Promise$1.resolve(void 0), promise.constructor = Promise$1, then = promise.then, notify$1 = function() {
        then.call(promise, flush)
    }) : notify$1 = engineIsNode ? function() {
        process$1.nextTick(flush)
    } : function() {
        macrotask.call(global_1, flush)
    } : (toggle = !0, node = document$2.createTextNode(""), new MutationObserver(flush).observe(node, {
        characterData: !0
    }), notify$1 = function() {
        node.data = toggle = !toggle
    }));
    var microtask = queueMicrotask || function(fn) {
            var task = {
                fn: fn,
                next: void 0
            };
            last && (last.next = task), head || (head = task, notify$1()), last = task
        },
        PromiseCapability = function(C) {
            var resolve, reject;
            this.promise = new C((function($$resolve, $$reject) {
                if (void 0 !== resolve || void 0 !== reject) throw TypeError("Bad Promise constructor");
                resolve = $$resolve, reject = $$reject
            })), this.resolve = aFunction(resolve), this.reject = aFunction(reject)
        },
        f = function(C) {
            return new PromiseCapability(C)
        },
        newPromiseCapability$1 = {
            f: f
        },
        promiseResolve = function(C, x) {
            if (anObject(C), isObject(x) && x.constructor === C) return x;
            var promiseCapability = newPromiseCapability$1.f(C);
            return (0, promiseCapability.resolve)(x), promiseCapability.promise
        },
        hostReportErrors = function(a, b) {
            var console = global_1.console;
            console && console.error && (1 === arguments.length ? console.error(a) : console.error(a, b))
        },
        perform = function(exec) {
            try {
                return {
                    error: !1,
                    value: exec()
                }
            } catch (error) {
                return {
                    error: !0,
                    value: error
                }
            }
        },
        engineIsBrowser = "object" == typeof window,
        task = task$1.set,
        SPECIES = wellKnownSymbol("species"),
        PROMISE = "Promise",
        getInternalState$1 = internalState.get,
        setInternalState$1 = internalState.set,
        getInternalPromiseState = internalState.getterFor(PROMISE),
        NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype,
        PromiseConstructor = nativePromiseConstructor,
        PromiseConstructorPrototype = NativePromisePrototype,
        TypeError$1 = global_1.TypeError,
        document$1 = global_1.document,
        process = global_1.process,
        newPromiseCapability = newPromiseCapability$1.f,
        newGenericPromiseCapability = newPromiseCapability,
        DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global_1.dispatchEvent),
        NATIVE_REJECTION_EVENT = "function" == typeof PromiseRejectionEvent,
        UNHANDLED_REJECTION = "unhandledrejection",
        REJECTION_HANDLED = "rejectionhandled",
        PENDING = 0,
        FULFILLED = 1,
        REJECTED = 2,
        HANDLED = 1,
        UNHANDLED = 2,
        SUBCLASSING = !1,
        Internal, OwnPromiseCapability, PromiseWrapper, nativeThen, FORCED = isForced_1(PROMISE, (function() {
            var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor),
                GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
            if (!GLOBAL_CORE_JS_PROMISE && 66 === engineV8Version) return !0;
            if (engineV8Version >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return !1;
            var promise = new PromiseConstructor((function(resolve) {
                    resolve(1)
                })),
                FakePromise = function(exec) {
                    exec((function() {}), (function() {}))
                };
            return (promise.constructor = {})[SPECIES] = FakePromise, !(SUBCLASSING = promise.then((function() {})) instanceof FakePromise) || !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT
        })),
        INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration((function(iterable) {
            PromiseConstructor.all(iterable).catch((function() {}))
        })),
        isThenable = function(it) {
            var then;
            return !(!isObject(it) || "function" != typeof(then = it.then)) && then
        },
        notify = function(state, isReject) {
            if (!state.notified) {
                state.notified = !0;
                var chain = state.reactions;
                microtask((function() {
                    for (var value = state.value, ok = state.state == FULFILLED, index = 0; chain.length > index;) {
                        var result, then, exited, reaction = chain[index++],
                            handler = ok ? reaction.ok : reaction.fail,
                            resolve = reaction.resolve,
                            reject = reaction.reject,
                            domain = reaction.domain;
                        try {
                            handler ? (ok || (state.rejection === UNHANDLED && onHandleUnhandled(state), state.rejection = HANDLED), !0 === handler ? result = value : (domain && domain.enter(), result = handler(value), domain && (domain.exit(), exited = !0)), result === reaction.promise ? reject(TypeError$1("Promise-chain cycle")) : (then = isThenable(result)) ? then.call(result, resolve, reject) : resolve(result)) : reject(value)
                        } catch (error) {
                            domain && !exited && domain.exit(), reject(error)
                        }
                    }
                    state.reactions = [], state.notified = !1, isReject && !state.rejection && onUnhandled(state)
                }))
            }
        },
        dispatchEvent = function(name, promise, reason) {
            var event, handler;
            DISPATCH_EVENT ? ((event = document$1.createEvent("Event")).promise = promise, event.reason = reason, event.initEvent(name, !1, !0), global_1.dispatchEvent(event)) : event = {
                promise: promise,
                reason: reason
            }, !NATIVE_REJECTION_EVENT && (handler = global_1["on" + name]) ? handler(event) : name === UNHANDLED_REJECTION && hostReportErrors("Unhandled promise rejection", reason)
        },
        onUnhandled = function(state) {
            task.call(global_1, (function() {
                var result, promise = state.facade,
                    value = state.value;
                if (isUnhandled(state) && (result = perform((function() {
                        engineIsNode ? process.emit("unhandledRejection", value, promise) : dispatchEvent(UNHANDLED_REJECTION, promise, value)
                    })), state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED, result.error)) throw result.value
            }))
        },
        isUnhandled = function(state) {
            return state.rejection !== HANDLED && !state.parent
        },
        onHandleUnhandled = function(state) {
            task.call(global_1, (function() {
                var promise = state.facade;
                engineIsNode ? process.emit("rejectionHandled", promise) : dispatchEvent(REJECTION_HANDLED, promise, state.value)
            }))
        },
        bind = function(fn, state, unwrap) {
            return function(value) {
                fn(state, value, unwrap)
            }
        },
        internalReject = function(state, value, unwrap) {
            state.done || (state.done = !0, unwrap && (state = unwrap), state.value = value, state.state = REJECTED, notify(state, !0))
        },
        internalResolve = function(state, value, unwrap) {
            if (!state.done) {
                state.done = !0, unwrap && (state = unwrap);
                try {
                    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
                    var then = isThenable(value);
                    then ? microtask((function() {
                        var wrapper = {
                            done: !1
                        };
                        try {
                            then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state))
                        } catch (error) {
                            internalReject(wrapper, error, state)
                        }
                    })) : (state.value = value, state.state = FULFILLED, notify(state, !1))
                } catch (error) {
                    internalReject({
                        done: !1
                    }, error, state)
                }
            }
        };
    if (FORCED && (PromiseConstructor = function(executor) {
            anInstance(this, PromiseConstructor, PROMISE), aFunction(executor), Internal.call(this);
            var state = getInternalState$1(this);
            try {
                executor(bind(internalResolve, state), bind(internalReject, state))
            } catch (error) {
                internalReject(state, error)
            }
        }, PromiseConstructorPrototype = PromiseConstructor.prototype, Internal = function(executor) {
            setInternalState$1(this, {
                type: PROMISE,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: PENDING,
                value: void 0
            })
        }, Internal.prototype = redefineAll(PromiseConstructorPrototype, {
            then: function(onFulfilled, onRejected) {
                var state = getInternalPromiseState(this),
                    reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
                return reaction.ok = "function" != typeof onFulfilled || onFulfilled, reaction.fail = "function" == typeof onRejected && onRejected, reaction.domain = engineIsNode ? process.domain : void 0, state.parent = !0, state.reactions.push(reaction), state.state != PENDING && notify(state, !1), reaction.promise
            },
            catch: function(onRejected) {
                return this.then(void 0, onRejected)
            }
        }), OwnPromiseCapability = function() {
            var promise = new Internal,
                state = getInternalState$1(promise);
            this.promise = promise, this.resolve = bind(internalResolve, state), this.reject = bind(internalReject, state)
        }, newPromiseCapability$1.f = newPromiseCapability = function(C) {
            return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C)
        }, "function" == typeof nativePromiseConstructor && NativePromisePrototype !== Object.prototype)) {
        nativeThen = NativePromisePrototype.then, SUBCLASSING || (redefine(NativePromisePrototype, "then", (function(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor((function(resolve, reject) {
                nativeThen.call(that, resolve, reject)
            })).then(onFulfilled, onRejected)
        }), {
            unsafe: !0
        }), redefine(NativePromisePrototype, "catch", PromiseConstructorPrototype.catch, {
            unsafe: !0
        }));
        try {
            delete NativePromisePrototype.constructor
        } catch (error) {}
        objectSetPrototypeOf && objectSetPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype)
    }
    _export({
        global: !0,
        wrap: !0,
        forced: FORCED
    }, {
        Promise: PromiseConstructor
    }), setToStringTag(PromiseConstructor, PROMISE, !1), setSpecies(PROMISE), PromiseWrapper = getBuiltIn(PROMISE), _export({
        target: PROMISE,
        stat: !0,
        forced: FORCED
    }, {
        reject: function(r) {
            var capability = newPromiseCapability(this);
            return capability.reject.call(void 0, r), capability.promise
        }
    }), _export({
        target: PROMISE,
        stat: !0,
        forced: FORCED
    }, {
        resolve: function(x) {
            return promiseResolve(this, x)
        }
    }), _export({
        target: PROMISE,
        stat: !0,
        forced: INCORRECT_ITERATION
    }, {
        all: function(iterable) {
            var C = this,
                capability = newPromiseCapability(C),
                resolve = capability.resolve,
                reject = capability.reject,
                result = perform((function() {
                    var $promiseResolve = aFunction(C.resolve),
                        values = [],
                        counter = 0,
                        remaining = 1;
                    iterate(iterable, (function(promise) {
                        var index = counter++,
                            alreadyCalled = !1;
                        values.push(void 0), remaining++, $promiseResolve.call(C, promise).then((function(value) {
                            alreadyCalled || (alreadyCalled = !0, values[index] = value, --remaining || resolve(values))
                        }), reject)
                    })), --remaining || resolve(values)
                }));
            return result.error && reject(result.value), capability.promise
        },
        race: function(iterable) {
            var C = this,
                capability = newPromiseCapability(C),
                reject = capability.reject,
                result = perform((function() {
                    var $promiseResolve = aFunction(C.resolve);
                    iterate(iterable, (function(promise) {
                        $promiseResolve.call(C, promise).then(capability.resolve, reject)
                    }))
                }));
            return result.error && reject(result.value), capability.promise
        }
    }), _export({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(iterable) {
            var C = this,
                capability = newPromiseCapability$1.f(C),
                resolve = capability.resolve,
                reject = capability.reject,
                result = perform((function() {
                    var promiseResolve = aFunction(C.resolve),
                        values = [],
                        counter = 0,
                        remaining = 1;
                    iterate(iterable, (function(promise) {
                        var index = counter++,
                            alreadyCalled = !1;
                        values.push(void 0), remaining++, promiseResolve.call(C, promise).then((function(value) {
                            alreadyCalled || (alreadyCalled = !0, values[index] = {
                                status: "fulfilled",
                                value: value
                            }, --remaining || resolve(values))
                        }), (function(error) {
                            alreadyCalled || (alreadyCalled = !0, values[index] = {
                                status: "rejected",
                                reason: error
                            }, --remaining || resolve(values))
                        }))
                    })), --remaining || resolve(values)
                }));
            return result.error && reject(result.value), capability.promise
        }
    });
    var PROMISE_ANY_ERROR = "No one promise resolved";
    _export({
        target: "Promise",
        stat: !0
    }, {
        any: function(iterable) {
            var C = this,
                capability = newPromiseCapability$1.f(C),
                resolve = capability.resolve,
                reject = capability.reject,
                result = perform((function() {
                    var promiseResolve = aFunction(C.resolve),
                        errors = [],
                        counter = 0,
                        remaining = 1,
                        alreadyResolved = !1;
                    iterate(iterable, (function(promise) {
                        var index = counter++,
                            alreadyRejected = !1;
                        errors.push(void 0), remaining++, promiseResolve.call(C, promise).then((function(value) {
                            alreadyRejected || alreadyResolved || (alreadyResolved = !0, resolve(value))
                        }), (function(error) {
                            alreadyRejected || alreadyResolved || (alreadyRejected = !0, errors[index] = error, --remaining || reject(new(getBuiltIn("AggregateError"))(errors, PROMISE_ANY_ERROR)))
                        }))
                    })), --remaining || reject(new(getBuiltIn("AggregateError"))(errors, PROMISE_ANY_ERROR))
                }));
            return result.error && reject(result.value), capability.promise
        }
    });
    var NON_GENERIC = !!nativePromiseConstructor && fails((function() {
        nativePromiseConstructor.prototype.finally.call({
            then: function() {}
        }, (function() {}))
    }));
    if (_export({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: NON_GENERIC
        }, {
            finally: function(onFinally) {
                var C = speciesConstructor(this, getBuiltIn("Promise")),
                    isFunction = "function" == typeof onFinally;
                return this.then(isFunction ? function(x) {
                    return promiseResolve(C, onFinally()).then((function() {
                        return x
                    }))
                } : onFinally, isFunction ? function(e) {
                    return promiseResolve(C, onFinally()).then((function() {
                        throw e
                    }))
                } : onFinally)
            }
        }), "function" == typeof nativePromiseConstructor) {
        var method = getBuiltIn("Promise").prototype.finally;
        nativePromiseConstructor.prototype.finally !== method && redefine(nativePromiseConstructor.prototype, "finally", method, {
            unsafe: !0
        })
    }
    var domIterables = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        },
        ARRAY_ITERATOR = "Array Iterator",
        setInternalState = internalState.set,
        getInternalState = internalState.getterFor(ARRAY_ITERATOR),
        es_array_iterator = defineIterator(Array, "Array", (function(iterated, kind) {
            setInternalState(this, {
                type: ARRAY_ITERATOR,
                target: toIndexedObject(iterated),
                index: 0,
                kind: kind
            })
        }), (function() {
            var state = getInternalState(this),
                target = state.target,
                kind = state.kind,
                index = state.index++;
            return !target || index >= target.length ? (state.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == kind ? {
                value: index,
                done: !1
            } : "values" == kind ? {
                value: target[index],
                done: !1
            } : {
                value: [index, target[index]],
                done: !1
            }
        }), "values");
    iterators.Arguments = iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), addToUnscopables("entries");
    var ITERATOR = wellKnownSymbol("iterator"),
        TO_STRING_TAG = wellKnownSymbol("toStringTag"),
        ArrayValues = es_array_iterator.values;
    for (var COLLECTION_NAME in domIterables) {
        var Collection = global_1[COLLECTION_NAME],
            CollectionPrototype = Collection && Collection.prototype;
        if (CollectionPrototype) {
            if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
                createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues)
            } catch (error) {
                CollectionPrototype[ITERATOR] = ArrayValues
            }
            if (CollectionPrototype[TO_STRING_TAG] || createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME), domIterables[COLLECTION_NAME])
                for (var METHOD_NAME in es_array_iterator)
                    if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
                        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME])
                    } catch (error) {
                        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME]
                    }
        }
    }
    path.Promise, _export({
        target: "Promise",
        stat: !0
    }, {
        try: function(callbackfn) {
            var promiseCapability = newPromiseCapability$1.f(this),
                result = perform(callbackfn);
            return (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value), promiseCapability.promise
        }
    });
    var MATCH$1 = wellKnownSymbol("match"),
        isRegexp = function(it) {
            var isRegExp;
            return isObject(it) && (void 0 !== (isRegExp = it[MATCH$1]) ? !!isRegExp : "RegExp" == classofRaw(it))
        },
        notARegexp = function(it) {
            if (isRegexp(it)) throw TypeError("The method doesn't accept regular expressions");
            return it
        },
        MATCH = wellKnownSymbol("match"),
        correctIsRegexpLogic = function(METHOD_NAME) {
            var regexp = /./;
            try {
                "/./" [METHOD_NAME](regexp)
            } catch (error1) {
                try {
                    return regexp[MATCH] = !1, "/./" [METHOD_NAME](regexp)
                } catch (error2) {}
            }
            return !1
        },
        getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f,
        $startsWith = "".startsWith,
        min = Math.min,
        CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic("startsWith"),
        MDN_POLYFILL_BUG = !(CORRECT_IS_REGEXP_LOGIC || (descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith"), !descriptor || descriptor.writable)),
        descriptor;
    _export({
        target: "String",
        proto: !0,
        forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
    }, {
        startsWith: function(searchString) {
            var that = String(requireObjectCoercible(this));
            notARegexp(searchString);
            var index = toLength(min(arguments.length > 1 ? arguments[1] : void 0, that.length)),
                search = String(searchString);
            return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search
        }
    }), entryUnbind("String", "startsWith");
    var global$1 = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== global$1 && global$1,
        support = {
            searchParams: "URLSearchParams" in global$1,
            iterable: "Symbol" in global$1 && "iterator" in Symbol,
            blob: "FileReader" in global$1 && "Blob" in global$1 && function() {
                try {
                    return new Blob, !0
                } catch (e) {
                    return !1
                }
            }(),
            formData: "FormData" in global$1,
            arrayBuffer: "ArrayBuffer" in global$1
        };

    function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj)
    }
    if (support.arrayBuffer) var viewClasses = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
        };

    function normalizeName(name) {
        if ("string" != typeof name && (name = String(name)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || "" === name) throw new TypeError('Invalid character in header field name: "' + name + '"');
        return name.toLowerCase()
    }

    function normalizeValue(value) {
        return "string" != typeof value && (value = String(value)), value
    }

    function iteratorFor(items) {
        var iterator = {
            next: function() {
                var value = items.shift();
                return {
                    done: void 0 === value,
                    value: value
                }
            }
        };
        return support.iterable && (iterator[Symbol.iterator] = function() {
            return iterator
        }), iterator
    }

    function Headers(headers) {
        this.map = {}, headers instanceof Headers ? headers.forEach((function(value, name) {
            this.append(name, value)
        }), this) : Array.isArray(headers) ? headers.forEach((function(header) {
            this.append(header[0], header[1])
        }), this) : headers && Object.getOwnPropertyNames(headers).forEach((function(name) {
            this.append(name, headers[name])
        }), this)
    }

    function consumed(body) {
        if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
        body.bodyUsed = !0
    }

    function fileReaderReady(reader) {
        return new Promise((function(resolve, reject) {
            reader.onload = function() {
                resolve(reader.result)
            }, reader.onerror = function() {
                reject(reader.error)
            }
        }))
    }

    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader,
            promise = fileReaderReady(reader);
        return reader.readAsArrayBuffer(blob), promise
    }

    function readBlobAsText(blob) {
        var reader = new FileReader,
            promise = fileReaderReady(reader);
        return reader.readAsText(blob), promise
    }

    function readArrayBufferAsText(buf) {
        for (var view = new Uint8Array(buf), chars = new Array(view.length), i = 0; i < view.length; i++) chars[i] = String.fromCharCode(view[i]);
        return chars.join("")
    }

    function bufferClone(buf) {
        if (buf.slice) return buf.slice(0);
        var view = new Uint8Array(buf.byteLength);
        return view.set(new Uint8Array(buf)), view.buffer
    }

    function Body() {
        return this.bodyUsed = !1, this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = body, body ? "string" == typeof body ? this._bodyText = body : support.blob && Blob.prototype.isPrototypeOf(body) ? this._bodyBlob = body : support.formData && FormData.prototype.isPrototypeOf(body) ? this._bodyFormData = body : support.searchParams && URLSearchParams.prototype.isPrototypeOf(body) ? this._bodyText = body.toString() : support.arrayBuffer && support.blob && isDataView(body) ? (this._bodyArrayBuffer = bufferClone(body.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body)) ? this._bodyArrayBuffer = bufferClone(body) : this._bodyText = body = Object.prototype.toString.call(body) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof body ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : support.searchParams && URLSearchParams.prototype.isPrototypeOf(body) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, support.blob && (this.blob = function() {
            var rejected = consumed(this);
            if (rejected) return rejected;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var isConsumed = consumed(this);
                return isConsumed || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
            }
            return this.blob().then(readBlobAsArrayBuffer)
        }), this.text = function() {
            var rejected = consumed(this);
            if (rejected) return rejected;
            if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, support.formData && (this.formData = function() {
            return this.text().then(decode)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    Headers.prototype.append = function(name, value) {
        name = normalizeName(name), value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value
    }, Headers.prototype.delete = function(name) {
        delete this.map[normalizeName(name)]
    }, Headers.prototype.get = function(name) {
        return name = normalizeName(name), this.has(name) ? this.map[name] : null
    }, Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name))
    }, Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value)
    }, Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) this.map.hasOwnProperty(name) && callback.call(thisArg, this.map[name], name, this)
    }, Headers.prototype.keys = function() {
        var items = [];
        return this.forEach((function(value, name) {
            items.push(name)
        })), iteratorFor(items)
    }, Headers.prototype.values = function() {
        var items = [];
        return this.forEach((function(value) {
            items.push(value)
        })), iteratorFor(items)
    }, Headers.prototype.entries = function() {
        var items = [];
        return this.forEach((function(value, name) {
            items.push([name, value])
        })), iteratorFor(items)
    }, support.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
    var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method
    }

    function Request(input, options) {
        if (!(this instanceof Request)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var body = (options = options || {}).body;
        if (input instanceof Request) {
            if (input.bodyUsed) throw new TypeError("Already read");
            this.url = input.url, this.credentials = input.credentials, options.headers || (this.headers = new Headers(input.headers)), this.method = input.method, this.mode = input.mode, this.signal = input.signal, body || null == input._bodyInit || (body = input._bodyInit, input.bodyUsed = !0)
        } else this.url = String(input);
        if (this.credentials = options.credentials || this.credentials || "same-origin", !options.headers && this.headers || (this.headers = new Headers(options.headers)), this.method = normalizeMethod(options.method || this.method || "GET"), this.mode = options.mode || this.mode || null, this.signal = options.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && body) throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(body), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== options.cache && "no-cache" !== options.cache)) {
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) this.url = this.url.replace(reParamSearch, "$1_=" + (new Date).getTime());
            else {
                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
        }
    }

    function decode(body) {
        var form = new FormData;
        return body.trim().split("&").forEach((function(bytes) {
            if (bytes) {
                var split = bytes.split("="),
                    name = split.shift().replace(/\+/g, " "),
                    value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name), decodeURIComponent(value))
            }
        })), form
    }

    function parseHeaders(rawHeaders) {
        var headers = new Headers;
        return rawHeaders.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(header) {
            return 0 === header.indexOf("\n") ? header.substr(1, header.length) : header
        })).forEach((function(line) {
            var parts = line.split(":"),
                key = parts.shift().trim();
            if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value)
            }
        })), headers
    }

    function Response(bodyInit, options) {
        if (!(this instanceof Response)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        options || (options = {}), this.type = "default", this.status = void 0 === options.status ? 200 : options.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === options.statusText ? "" : "" + options.statusText, this.headers = new Headers(options.headers), this.url = options.url || "", this._initBody(bodyInit)
    }
    Request.prototype.clone = function() {
        return new Request(this, {
            body: this._bodyInit
        })
    }, Body.call(Request.prototype), Body.call(Response.prototype), Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
        })
    }, Response.error = function() {
        var response = new Response(null, {
            status: 0,
            statusText: ""
        });
        return response.type = "error", response
    };
    var redirectStatuses = [301, 302, 303, 307, 308];
    Response.redirect = function(url, status) {
        if (-1 === redirectStatuses.indexOf(status)) throw new RangeError("Invalid status code");
        return new Response(null, {
            status: status,
            headers: {
                location: url
            }
        })
    };
    var DOMException = global$1.DOMException;
    try {
        new DOMException
    } catch (err) {
        DOMException = function(message, name) {
            this.message = message, this.name = name;
            var error = Error(message);
            this.stack = error.stack
        }, DOMException.prototype = Object.create(Error.prototype), DOMException.prototype.constructor = DOMException
    }

    function fetch$1(input, init) {
        return new Promise((function(resolve, reject) {
            var request = new Request(input, init);
            if (request.signal && request.signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
            var xhr = new XMLHttpRequest;

            function abortXhr() {
                xhr.abort()
            }
            xhr.onload = function() {
                var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                };
                options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                var body = "response" in xhr ? xhr.response : xhr.responseText;
                setTimeout((function() {
                    resolve(new Response(body, options))
                }), 0)
            }, xhr.onerror = function() {
                setTimeout((function() {
                    reject(new TypeError("Network request failed"))
                }), 0)
            }, xhr.ontimeout = function() {
                setTimeout((function() {
                    reject(new TypeError("Network request failed"))
                }), 0)
            }, xhr.onabort = function() {
                setTimeout((function() {
                    reject(new DOMException("Aborted", "AbortError"))
                }), 0)
            }, xhr.open(request.method, function(url) {
                try {
                    return "" === url && global$1.location.href ? global$1.location.href : url
                } catch (e) {
                    return url
                }
            }(request.url), !0), "include" === request.credentials ? xhr.withCredentials = !0 : "omit" === request.credentials && (xhr.withCredentials = !1), "responseType" in xhr && (support.blob ? xhr.responseType = "blob" : support.arrayBuffer && request.headers.get("Content-Type") && -1 !== request.headers.get("Content-Type").indexOf("application/octet-stream") && (xhr.responseType = "arraybuffer")), !init || "object" != typeof init.headers || init.headers instanceof Headers ? request.headers.forEach((function(value, name) {
                xhr.setRequestHeader(name, value)
            })) : Object.getOwnPropertyNames(init.headers).forEach((function(name) {
                xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
            })), request.signal && (request.signal.addEventListener("abort", abortXhr), xhr.onreadystatechange = function() {
                4 === xhr.readyState && request.signal.removeEventListener("abort", abortXhr)
            }), xhr.send(void 0 === request._bodyInit ? null : request._bodyInit)
        }))
    }
    fetch$1.polyfill = !0, global$1.fetch || (global$1.fetch = fetch$1, global$1.Headers = Headers, global$1.Request = Request, global$1.Response = Response), null == Element.prototype.getAttributeNames && (Element.prototype.getAttributeNames = function() {
        for (var attributes = this.attributes, length = attributes.length, result = new Array(length), i = 0; i < length; i++) result[i] = attributes[i].name;
        return result
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
        for (var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length; --i >= 0 && matches.item(i) !== this;);
        return i > -1
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode
        } while (null !== el && 1 === el.nodeType);
        return null
    });
    var Connection = function() {
            function Connection() {
                _classCallCheck(this, Connection), this.headers = {}
            }
            return _createClass(Connection, [{
                key: "onMessage",
                value: function(message, payload) {
                    message.component.receiveMessage(message, payload)
                }
            }, {
                key: "onError",
                value: function(message, status, response) {
                    return message.component.messageSendFailed(), store$2.onErrorCallback(status, response)
                }
            }, {
                key: "showExpiredMessage",
                value: function(response, message) {
                    store$2.sessionHasExpiredCallback ? store$2.sessionHasExpiredCallback(response, message) : confirm("This page has expired.\nWould you like to refresh the page?") && window.location.reload()
                }
            }, {
                key: "sendMessage",
                value: function(message) {
                    var _this = this,
                        payload = message.payload(),
                        csrfToken = getCsrfToken(),
                        socketId = this.getSocketId();
                    if (window.__testing_request_interceptor) return window.__testing_request_interceptor(payload, this);
                    fetch("".concat(window.livewire_app_url, "/livewire/message/").concat(payload.fingerprint.name), {
                        method: "POST",
                        body: JSON.stringify(payload),
                        credentials: "same-origin",
                        headers: _objectSpread2(_objectSpread2(_objectSpread2({
                            "Content-Type": "application/json",
                            Accept: "text/html, application/xhtml+xml",
                            "X-Livewire": !0
                        }, this.headers), {}, {
                            Referer: window.location.href
                        }, csrfToken && {
                            "X-CSRF-TOKEN": csrfToken
                        }), socketId && {
                            "X-Socket-ID": socketId
                        })
                    }).then((function(response) {
                        if (response.ok) response.text().then((function(response) {
                            _this.isOutputFromDump(response) ? (_this.onError(message), _this.showHtmlModal(response)) : _this.onMessage(message, JSON.parse(response))
                        }));
                        else {
                            if (!1 === _this.onError(message, response.status, response)) return;
                            if (419 === response.status) {
                                if (store$2.sessionHasExpired) return;
                                store$2.sessionHasExpired = !0, _this.showExpiredMessage(response, message)
                            } else response.text().then((function(response) {
                                _this.showHtmlModal(response)
                            }))
                        }
                    })).catch((function() {
                        _this.onError(message)
                    }))
                }
            }, {
                key: "isOutputFromDump",
                value: function(output) {
                    return !!output.match(/<script>Sfdump\(".+"\)<\/script>/)
                }
            }, {
                key: "getSocketId",
                value: function() {
                    if ("undefined" != typeof Echo) return Echo.socketId()
                }
            }, {
                key: "showHtmlModal",
                value: function(html) {
                    var _this2 = this,
                        page = document.createElement("html");
                    page.innerHTML = html, page.querySelectorAll("a").forEach((function(a) {
                        return a.setAttribute("target", "_top")
                    }));
                    var modal = document.getElementById("livewire-error");
                    void 0 !== modal && null != modal ? modal.innerHTML = "" : ((modal = document.createElement("div")).id = "livewire-error", modal.style.position = "fixed", modal.style.width = "100vw", modal.style.height = "100vh", modal.style.padding = "50px", modal.style.backgroundColor = "rgba(0, 0, 0, .6)", modal.style.zIndex = 2e5);
                    var iframe = document.createElement("iframe");
                    iframe.style.backgroundColor = "#17161A", iframe.style.borderRadius = "5px", iframe.style.width = "100%", iframe.style.height = "100%", modal.appendChild(iframe), document.body.prepend(modal), document.body.style.overflow = "hidden", iframe.contentWindow.document.open(), iframe.contentWindow.document.write(page.outerHTML), iframe.contentWindow.document.close(), modal.addEventListener("click", (function() {
                        return _this2.hideHtmlModal(modal)
                    })), modal.setAttribute("tabindex", 0), modal.addEventListener("keydown", (function(e) {
                        "Escape" === e.key && _this2.hideHtmlModal(modal)
                    })), modal.focus()
                }
            }, {
                key: "hideHtmlModal",
                value: function(modal) {
                    modal.outerHTML = "", document.body.style.overflow = "visible"
                }
            }]), Connection
        }(),
        _default$4 = function(_Action) {
            _inherits(_default, _Action);
            var _super = _createSuper(_default);

            function _default(method, params, el) {
                var _this, skipWatcher = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return _classCallCheck(this, _default), (_this = _super.call(this, el, skipWatcher)).type = "callMethod", _this.method = method, _this.payload = {
                    id: _this.signature,
                    method: method,
                    params: params
                }, _this
            }
            return _default
        }(_default$6);

    function Polling() {
        store$2.registerHook("element.initialized", (function(el, component) {
            if (!wireDirectives(el).missing("poll")) {
                var intervalId = fireActionOnInterval(el, component);
                component.addListenerForTeardown((function() {
                    clearInterval(intervalId)
                })), el.__livewire_polling_interval = intervalId
            }
        })), store$2.registerHook("element.updating", (function(from, to, component) {
            void 0 === from.__livewire_polling_interval && wireDirectives(from).missing("poll") && wireDirectives(to).has("poll") && setTimeout((function() {
                var intervalId = fireActionOnInterval(from, component);
                component.addListenerForTeardown((function() {
                    clearInterval(intervalId)
                })), from.__livewire_polling_interval = intervalId
            }), 0)
        }))
    }

    function fireActionOnInterval(node, component) {
        var interval = wireDirectives(node).get("poll").durationOr(2e3);
        return setInterval((function() {
            if (!1 !== node.isConnected) {
                var directives = wireDirectives(node);
                if (!directives.missing("poll")) {
                    var directive = directives.get("poll"),
                        method = directive.method || "$refresh";
                    store$2.livewireIsInBackground && !directive.modifiers.includes("keep-alive") && Math.random() < .95 || directive.modifiers.includes("visible") && !inViewport(directive.el) || store$2.livewireIsOffline || component.addAction(new _default$4(method, directive.params, node))
                }
            }
        }), interval)
    }

    function inViewport(el) {
        var bounding = el.getBoundingClientRect();
        return bounding.top < (window.innerHeight || document.documentElement.clientHeight) && bounding.left < (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom > 0 && bounding.right > 0
    }
    var _default$3 = function() {
            function _default(component, updateQueue) {
                _classCallCheck(this, _default), this.component = component, this.updateQueue = updateQueue
            }
            return _createClass(_default, [{
                key: "payload",
                value: function() {
                    return {
                        fingerprint: this.component.fingerprint,
                        serverMemo: this.component.serverMemo,
                        updates: this.updateQueue.map((function(update) {
                            return {
                                type: update.type,
                                payload: update.payload
                            }
                        }))
                    }
                }
            }, {
                key: "shouldSkipWatcherForDataKey",
                value: function(dataKey) {
                    if (this.response.effects.dirty.includes(dataKey)) return !1;
                    return this.updateQueue.filter((function(update) {
                        return subject = update.name, value = dataKey, "string" == typeof subject && "string" == typeof value && subject.split(".")[0] === value.split(".")[0];
                        var subject, value
                    })).some((function(update) {
                        return update.skipWatcher
                    }))
                }
            }, {
                key: "storeResponse",
                value: function(payload) {
                    return this.response = payload
                }
            }, {
                key: "resolve",
                value: function() {
                    var returns = this.response.effects.returns || [];
                    this.updateQueue.forEach((function(update) {
                        "callMethod" === update.type && update.resolve(void 0 !== returns[update.signature] ? returns[update.signature] : void 0 !== returns[update.method] ? returns[update.method] : null)
                    }))
                }
            }, {
                key: "reject",
                value: function() {
                    this.updateQueue.forEach((function(update) {
                        update.reject()
                    }))
                }
            }]), _default
        }(),
        _default$2 = function(_Message) {
            _inherits(_default, _Message);
            var _super = _createSuper(_default);

            function _default(component, action) {
                return _classCallCheck(this, _default), _super.call(this, component, [action])
            }
            return _createClass(_default, [{
                key: "prefetchId",
                get: function() {
                    return this.updateQueue[0].toId()
                }
            }]), _default
        }(_default$3);

    function morphAttrs(fromNode, toNode) {
        if ((void 0 === fromNode._x_isShown || void 0 === toNode._x_isShown) && (!fromNode._x_isShown || toNode._x_isShown) && (fromNode._x_isShown || !toNode._x_isShown)) {
            var i, attr, attrName, attrNamespaceURI, attrValue, attrs = toNode.attributes;
            for (i = attrs.length - 1; i >= 0; --i) attrName = (attr = attrs[i]).name, attrNamespaceURI = attr.namespaceURI, attrValue = attr.value, attrNamespaceURI ? (attrName = attr.localName || attrName, fromNode.getAttributeNS(attrNamespaceURI, attrName) !== attrValue && ("xmlns" === attr.prefix && (attrName = attr.name), fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue))) : fromNode.getAttribute(attrName) !== attrValue && fromNode.setAttribute(attrName, attrValue);
            for (i = (attrs = fromNode.attributes).length - 1; i >= 0; --i) !1 !== (attr = attrs[i]).specified && (attrName = attr.name, (attrNamespaceURI = attr.namespaceURI) ? (attrName = attr.localName || attrName, toNode.hasAttributeNS(attrNamespaceURI, attrName) || fromNode.removeAttributeNS(attrNamespaceURI, attrName)) : toNode.hasAttribute(attrName) || fromNode.removeAttribute(attrName))
        }
    }

    function syncBooleanAttrProp(fromEl, toEl, name) {
        fromEl[name] !== toEl[name] && (fromEl[name] = toEl[name], fromEl[name] ? fromEl.setAttribute(name, "") : fromEl.removeAttribute(name))
    }
    var specialElHandlers = {
            OPTION: function(fromEl, toEl) {
                var parentNode = fromEl.parentNode;
                if (parentNode) {
                    var parentName = parentNode.nodeName.toUpperCase();
                    "OPTGROUP" === parentName && (parentName = (parentNode = parentNode.parentNode) && parentNode.nodeName.toUpperCase()), "SELECT" !== parentName || parentNode.hasAttribute("multiple") || (fromEl.hasAttribute("selected") && !toEl.selected && (fromEl.setAttribute("selected", "selected"), fromEl.removeAttribute("selected")), parentNode.selectedIndex = -1)
                }
                syncBooleanAttrProp(fromEl, toEl, "selected")
            },
            INPUT: function(fromEl, toEl) {
                syncBooleanAttrProp(fromEl, toEl, "checked"), syncBooleanAttrProp(fromEl, toEl, "disabled"), fromEl.value !== toEl.value && (fromEl.value = toEl.value), toEl.hasAttribute("value") || fromEl.removeAttribute("value")
            },
            TEXTAREA: function(fromEl, toEl) {
                var newValue = toEl.value;
                fromEl.value !== newValue && (fromEl.value = newValue);
                var firstChild = fromEl.firstChild;
                if (firstChild) {
                    var oldValue = firstChild.nodeValue;
                    if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) return;
                    firstChild.nodeValue = newValue
                }
            },
            SELECT: function(fromEl, toEl) {
                if (!toEl.hasAttribute("multiple")) {
                    for (var optgroup, nodeName, selectedIndex = -1, i = 0, curChild = fromEl.firstChild; curChild;)
                        if ("OPTGROUP" === (nodeName = curChild.nodeName && curChild.nodeName.toUpperCase())) curChild = (optgroup = curChild).firstChild;
                        else {
                            if ("OPTION" === nodeName) {
                                if (curChild.hasAttribute("selected")) {
                                    selectedIndex = i;
                                    break
                                }
                                i++
                            }!(curChild = curChild.nextSibling) && optgroup && (curChild = optgroup.nextSibling, optgroup = null)
                        }
                    fromEl.selectedIndex = selectedIndex
                }
            }
        },
        range, NS_XHTML = "http://www.w3.org/1999/xhtml",
        doc = "undefined" == typeof document ? void 0 : document,
        HAS_TEMPLATE_SUPPORT = !!doc && "content" in doc.createElement("template"),
        HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment" in doc.createRange();

    function createFragmentFromTemplate(str) {
        var template = doc.createElement("template");
        return template.innerHTML = str, template.content.childNodes[0]
    }

    function createFragmentFromRange(str) {
        return range || (range = doc.createRange()).selectNode(doc.body), range.createContextualFragment(str).childNodes[0]
    }

    function createFragmentFromWrap(str) {
        var fragment = doc.createElement("body");
        return fragment.innerHTML = str, fragment.childNodes[0]
    }

    function toElement(str) {
        return str = str.trim(), HAS_TEMPLATE_SUPPORT ? createFragmentFromTemplate(str) : HAS_RANGE_SUPPORT ? createFragmentFromRange(str) : createFragmentFromWrap(str)
    }

    function compareNodeNames(fromEl, toEl) {
        var fromNodeName = fromEl.nodeName,
            toNodeName = toEl.nodeName;
        return fromNodeName === toNodeName || !!(toEl.actualize && fromNodeName.charCodeAt(0) < 91 && toNodeName.charCodeAt(0) > 90) && fromNodeName === toNodeName.toUpperCase()
    }

    function createElementNS(name, namespaceURI) {
        return namespaceURI && namespaceURI !== NS_XHTML ? doc.createElementNS(namespaceURI, name) : doc.createElement(name)
    }

    function moveChildren(fromEl, toEl) {
        for (var curChild = fromEl.firstChild; curChild;) {
            var nextChild = curChild.nextSibling;
            toEl.appendChild(curChild), curChild = nextChild
        }
        return toEl
    }
    var ELEMENT_NODE = 1,
        DOCUMENT_FRAGMENT_NODE = 11,
        TEXT_NODE = 3,
        COMMENT_NODE = 8;

    function noop() {}

    function defaultGetNodeKey(node) {
        return node.id
    }

    function callHook(hook) {
        "getNodeKey" !== hook.name && hook.name;
        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
        if ("function" == typeof params[0].hasAttribute) return hook.apply(void 0, params)
    }

    function morphdomFactory(morphAttrs) {
        return function(fromNode, toNode, options) {
            if (options || (options = {}), "string" == typeof toNode)
                if ("#document" === fromNode.nodeName || "HTML" === fromNode.nodeName) {
                    var toNodeHtml = toNode;
                    (toNode = doc.createElement("html")).innerHTML = toNodeHtml
                } else toNode = toElement(toNode);
            var getNodeKey = options.getNodeKey || defaultGetNodeKey,
                onBeforeNodeAdded = options.onBeforeNodeAdded || noop,
                onNodeAdded = options.onNodeAdded || noop,
                onBeforeElUpdated = options.onBeforeElUpdated || noop,
                onElUpdated = options.onElUpdated || noop,
                onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop,
                onNodeDiscarded = options.onNodeDiscarded || noop,
                onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop,
                childrenOnly = !0 === options.childrenOnly,
                fromNodesLookup = Object.create(null),
                keyedRemovalList = [];

            function addKeyedRemoval(key) {
                keyedRemovalList.push(key)
            }

            function walkDiscardedChildNodes(node, skipKeyedNodes) {
                if (node.nodeType === ELEMENT_NODE)
                    for (var curChild = node.firstChild; curChild;) {
                        var key = void 0;
                        skipKeyedNodes && (key = callHook(getNodeKey, curChild)) ? addKeyedRemoval(key) : (callHook(onNodeDiscarded, curChild), curChild.firstChild && walkDiscardedChildNodes(curChild, skipKeyedNodes)), curChild = curChild.nextSibling
                    }
            }

            function removeNode(node, parentNode, skipKeyedNodes) {
                !1 !== callHook(onBeforeNodeDiscarded, node) && (parentNode && parentNode.removeChild(node), callHook(onNodeDiscarded, node), walkDiscardedChildNodes(node, skipKeyedNodes))
            }

            function handleNodeAdded(el) {
                if (callHook(onNodeAdded, el), !el.skipAddingChildren)
                    for (var curChild = el.firstChild; curChild;) {
                        var nextSibling = curChild.nextSibling,
                            key = callHook(getNodeKey, curChild);
                        if (key) {
                            var unmatchedFromEl = fromNodesLookup[key];
                            unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl) ? (curChild.parentNode.replaceChild(unmatchedFromEl, curChild), morphEl(unmatchedFromEl, curChild)) : handleNodeAdded(curChild)
                        } else handleNodeAdded(curChild);
                        curChild = nextSibling
                    }
            }

            function morphEl(fromEl, toEl, childrenOnly) {
                var toElKey = callHook(getNodeKey, toEl);
                if (toElKey && delete fromNodesLookup[toElKey], !childrenOnly) {
                    if (!1 === callHook(onBeforeElUpdated, fromEl, toEl)) return;
                    if (fromEl.skipElUpdatingButStillUpdateChildren || morphAttrs(fromEl, toEl), callHook(onElUpdated, fromEl), !1 === callHook(onBeforeElChildrenUpdated, fromEl, toEl)) return
                }
                "TEXTAREA" !== fromEl.nodeName ? function(fromEl, toEl) {
                    var curToNodeKey, curFromNodeKey, fromNextSibling, toNextSibling, matchingFromEl, curToNodeChild = toEl.firstChild,
                        curFromNodeChild = fromEl.firstChild;
                    outer: for (; curToNodeChild;) {
                        for (toNextSibling = curToNodeChild.nextSibling, curToNodeKey = callHook(getNodeKey, curToNodeChild); curFromNodeChild;) {
                            if (fromNextSibling = curFromNodeChild.nextSibling, curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                                curToNodeChild = toNextSibling, curFromNodeChild = fromNextSibling;
                                continue outer
                            }
                            curFromNodeKey = callHook(getNodeKey, curFromNodeChild);
                            var curFromNodeType = curFromNodeChild.nodeType,
                                isCompatible = void 0;
                            if (curFromNodeType === curToNodeChild.nodeType && (curFromNodeType === ELEMENT_NODE ? (curToNodeKey ? curToNodeKey !== curFromNodeKey && ((matchingFromEl = fromNodesLookup[curToNodeKey]) ? fromNextSibling === matchingFromEl ? isCompatible = !1 : (fromEl.insertBefore(matchingFromEl, curFromNodeChild), curFromNodeKey ? addKeyedRemoval(curFromNodeKey) : removeNode(curFromNodeChild, fromEl, !0), curFromNodeChild = matchingFromEl) : isCompatible = !1) : curFromNodeKey && (isCompatible = !1), (isCompatible = !1 !== isCompatible && compareNodeNames(curFromNodeChild, curToNodeChild)) && (!curToNodeChild.isEqualNode(curFromNodeChild) && curToNodeChild.nextElementSibling && curToNodeChild.nextElementSibling.isEqualNode(curFromNodeChild) ? isCompatible = !1 : morphEl(curFromNodeChild, curToNodeChild))) : curFromNodeType !== TEXT_NODE && curFromNodeType != COMMENT_NODE || (isCompatible = !0, curFromNodeChild.nodeValue !== curToNodeChild.nodeValue && (curFromNodeChild.nodeValue = curToNodeChild.nodeValue))), isCompatible) {
                                curToNodeChild = toNextSibling, curFromNodeChild = fromNextSibling;
                                continue outer
                            }
                            if (curToNodeChild.nextElementSibling && curToNodeChild.nextElementSibling.isEqualNode(curFromNodeChild)) {
                                var nodeToBeAdded = curToNodeChild.cloneNode(!0);
                                fromEl.insertBefore(nodeToBeAdded, curFromNodeChild), handleNodeAdded(nodeToBeAdded), curToNodeChild = curToNodeChild.nextElementSibling.nextSibling, curFromNodeChild = fromNextSibling;
                                continue outer
                            }
                            curFromNodeKey ? addKeyedRemoval(curFromNodeKey) : removeNode(curFromNodeChild, fromEl, !0), curFromNodeChild = fromNextSibling
                        }
                        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) fromEl.appendChild(matchingFromEl), morphEl(matchingFromEl, curToNodeChild);
                        else {
                            var onBeforeNodeAddedResult = callHook(onBeforeNodeAdded, curToNodeChild);
                            !1 !== onBeforeNodeAddedResult && (onBeforeNodeAddedResult && (curToNodeChild = onBeforeNodeAddedResult), curToNodeChild.actualize && (curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc)), fromEl.appendChild(curToNodeChild), handleNodeAdded(curToNodeChild))
                        }
                        curToNodeChild = toNextSibling, curFromNodeChild = fromNextSibling
                    }! function(fromEl, curFromNodeChild, curFromNodeKey) {
                        for (; curFromNodeChild;) {
                            var fromNextSibling = curFromNodeChild.nextSibling;
                            (curFromNodeKey = callHook(getNodeKey, curFromNodeChild)) ? addKeyedRemoval(curFromNodeKey): removeNode(curFromNodeChild, fromEl, !0), curFromNodeChild = fromNextSibling
                        }
                    }(fromEl, curFromNodeChild, curFromNodeKey);
                    var specialElHandler = specialElHandlers[fromEl.nodeName];
                    specialElHandler && !fromEl.isLivewireModel && specialElHandler(fromEl, toEl)
                }(fromEl, toEl) : fromEl.innerHTML != toEl.innerHTML && specialElHandlers.TEXTAREA(fromEl, toEl)
            }! function indexTree(node) {
                if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE)
                    for (var curChild = node.firstChild; curChild;) {
                        var key = callHook(getNodeKey, curChild);
                        key && (fromNodesLookup[key] = curChild), indexTree(curChild), curChild = curChild.nextSibling
                    }
            }(fromNode);
            var morphedNode = fromNode,
                morphedNodeType = morphedNode.nodeType,
                toNodeType = toNode.nodeType;
            if (!childrenOnly)
                if (morphedNodeType === ELEMENT_NODE) toNodeType === ELEMENT_NODE ? compareNodeNames(fromNode, toNode) || (callHook(onNodeDiscarded, fromNode), morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI))) : morphedNode = toNode;
                else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
                if (toNodeType === morphedNodeType) return morphedNode.nodeValue !== toNode.nodeValue && (morphedNode.nodeValue = toNode.nodeValue), morphedNode;
                morphedNode = toNode
            }
            if (morphedNode === toNode) callHook(onNodeDiscarded, fromNode);
            else {
                if (toNode.isSameNode && toNode.isSameNode(morphedNode)) return;
                if (morphEl(morphedNode, toNode, childrenOnly), keyedRemovalList)
                    for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
                        var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                        elToRemove && removeNode(elToRemove, elToRemove.parentNode, !1)
                    }
            }
            return !childrenOnly && morphedNode !== fromNode && fromNode.parentNode && (morphedNode.actualize && (morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc)), fromNode.parentNode.replaceChild(morphedNode, fromNode)), morphedNode
        }
    }
    var morphdom = morphdomFactory(morphAttrs),
        _default$1 = function(_Action) {
            _inherits(_default, _Action);
            var _super = _createSuper(_default);

            function _default(name, value, el) {
                var _this;
                return _classCallCheck(this, _default), (_this = _super.call(this, el)).type = "syncInput", _this.name = name, _this.payload = {
                    id: _this.signature,
                    name: name,
                    value: value
                }, _this
            }
            return _default
        }(_default$6),
        _default = function(_Action) {
            _inherits(_default, _Action);
            var _super = _createSuper(_default);

            function _default(name, value, el) {
                var _this, skipWatcher = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return _classCallCheck(this, _default), (_this = _super.call(this, el, skipWatcher)).type = "syncInput", _this.name = name, _this.payload = {
                    id: _this.signature,
                    name: name,
                    value: value
                }, _this
            }
            return _default
        }(_default$6),
        nodeInitializer = {
            initialize: function initialize(el, component) {
                var _this = this;
                if (store$2.initialRenderIsFinished && "script" === el.tagName.toLowerCase()) return eval(el.innerHTML), !1;
                wireDirectives(el).all().forEach((function(directive) {
                    switch (directive.type) {
                        case "init":
                            _this.fireActionRightAway(el, directive, component);
                            break;
                        case "model":
                            if (!directive.value) {
                                console.warn("Livewire: [wire:model] is missing a value.", el);
                                break
                            }
                            DOM.setInputValueFromModel(el, component), _this.attachModelListener(el, directive, component);
                            break;
                        default:
                            store$2.directives.has(directive.type) && store$2.directives.call(directive.type, el, directive, component), _this.attachDomListener(el, directive, component)
                    }
                })), store$2.callHook("element.initialized", el, component)
            },
            fireActionRightAway: function(el, directive, component) {
                var method = directive.value ? directive.method : "$refresh";
                component.addAction(new _default$4(method, directive.params, el))
            },
            attachModelListener: function(el, directive, component) {
                el.isLivewireModel = !0;
                var isLazy = directive.modifiers.includes("lazy"),
                    hasDebounceModifier = directive.modifiers.includes("debounce");
                if (store$2.callHook("interceptWireModelAttachListener", directive, el, component), "input" !== el.tagName.toLowerCase() || "file" !== el.type) {
                    var condition, callback, time, event = "select" === el.tagName.toLowerCase() || ["checkbox", "radio"].includes(el.type) || directive.modifiers.includes("lazy") ? "change" : "input",
                        handler = (condition = hasDebounceModifier || DOM.isTextInput(el) && !isLazy, callback = function(e) {
                            var _e$detail, model = directive.value,
                                el = e.target,
                                value = e instanceof CustomEvent && void 0 !== e.detail && void 0 === window.document.documentMode ? null !== (_e$detail = e.detail) && void 0 !== _e$detail ? _e$detail : e.target.value : DOM.valueFromInput(el, component);
                            directive.modifiers.includes("defer") ? component.addAction(new _default(model, value, el)) : component.addAction(new _default$1(model, value, el))
                        }, time = directive.durationOr(150), condition ? component.modelSyncDebounce(callback, time) : callback);
                    el.addEventListener(event, handler), component.addListenerForTeardown((function() {
                        el.removeEventListener(event, handler)
                    })), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && el.addEventListener("animationstart", (function(e) {
                        "livewireautofill" === e.animationName && (e.target.dispatchEvent(new Event("change", {
                            bubbles: !0
                        })), e.target.dispatchEvent(new Event("input", {
                            bubbles: !0
                        })))
                    }))
                }
            },
            attachDomListener: function(el, directive, component) {
                switch (directive.type) {
                    case "keydown":
                    case "keyup":
                        this.attachListener(el, directive, component, (function(e) {
                            var selectedSystemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((function(key) {
                                return directive.modifiers.includes(key)
                            }));
                            if (selectedSystemKeyModifiers.length > 0 && selectedSystemKeyModifiers.filter((function(key) {
                                    return "cmd" !== key && "super" !== key || (key = "meta"), !e["".concat(key, "Key")]
                                })).length > 0) return !1;
                            if (32 === e.keyCode || " " === e.key || "Spacebar" === e.key) return directive.modifiers.includes("space");
                            var modifiers = directive.modifiers.filter((function(modifier) {
                                return !modifier.match(/^debounce$/) && !modifier.match(/^[0-9]+m?s$/)
                            }));
                            return Boolean(0 === modifiers.length || e.key && modifiers.includes(kebabCase(e.key)))
                        }));
                        break;
                    case "click":
                        this.attachListener(el, directive, component, (function(e) {
                            if (directive.modifiers.includes("self")) return el.isSameNode(e.target)
                        }));
                        break;
                    default:
                        this.attachListener(el, directive, component)
                }
            },
            attachListener: function(el, directive, component, callback) {
                var _this2 = this;
                directive.modifiers.includes("prefetch") && el.addEventListener("mouseenter", (function() {
                    component.addPrefetchAction(new _default$4(directive.method, directive.params, el))
                }));
                var event = directive.type,
                    debouncedHandler = function(condition, callback, time) {
                        return condition ? debounce(callback, time) : callback
                    }(directive.modifiers.includes("debounce"), (function(e) {
                        callback && !1 === callback(e) || component.callAfterModelDebounce((function() {
                            var el = e.target;
                            directive.setEventContext(e), _this2.preventAndStop(e, directive.modifiers);
                            var _component$scopedList, method = directive.method,
                                params = directive.params;
                            if (0 === params.length && e instanceof CustomEvent && e.detail && params.push(e.detail), "$emit" === method) return (_component$scopedList = component.scopedListeners).call.apply(_component$scopedList, _toConsumableArray(params)), void store$2.emit.apply(store$2, _toConsumableArray(params));
                            "$emitUp" !== method ? "$emitSelf" !== method ? "$emitTo" !== method ? directive.value && component.addAction(new _default$4(method, params, el)) : store$2.emitTo.apply(store$2, _toConsumableArray(params)) : store$2.emitSelf.apply(store$2, [component.id].concat(_toConsumableArray(params))) : store$2.emitUp.apply(store$2, [el].concat(_toConsumableArray(params)))
                        }))
                    }), directive.durationOr(150));
                el.addEventListener(event, debouncedHandler), component.addListenerForTeardown((function() {
                    el.removeEventListener(event, debouncedHandler)
                }))
            },
            preventAndStop: function(event, modifiers) {
                modifiers.includes("prevent") && event.preventDefault(), modifiers.includes("stop") && event.stopPropagation()
            }
        },
        PrefetchManager = function() {
            function PrefetchManager(component) {
                _classCallCheck(this, PrefetchManager), this.component = component, this.prefetchMessagesByActionId = {}
            }
            return _createClass(PrefetchManager, [{
                key: "addMessage",
                value: function(message) {
                    this.prefetchMessagesByActionId[message.prefetchId] = message
                }
            }, {
                key: "actionHasPrefetch",
                value: function(action) {
                    return Object.keys(this.prefetchMessagesByActionId).includes(action.toId())
                }
            }, {
                key: "actionPrefetchResponseHasBeenReceived",
                value: function(action) {
                    return !!this.getPrefetchMessageByAction(action).response
                }
            }, {
                key: "getPrefetchMessageByAction",
                value: function(action) {
                    return this.prefetchMessagesByActionId[action.toId()]
                }
            }, {
                key: "clearPrefetches",
                value: function() {
                    this.prefetchMessagesByActionId = {}
                }
            }]), PrefetchManager
        }();

    function LoadingStates() {
        store$2.registerHook("component.initialized", (function(component) {
            component.targetedLoadingElsByAction = {}, component.genericLoadingEls = [], component.currentlyActiveLoadingEls = [], component.currentlyActiveUploadLoadingEls = []
        })), store$2.registerHook("element.initialized", (function(el, component) {
            var directives = wireDirectives(el);
            directives.missing("loading") || directives.directives.filter((function(i) {
                return "loading" === i.type
            })).forEach((function(directive) {
                processLoadingDirective(component, el, directive)
            }))
        })), store$2.registerHook("message.sent", (function(message, component) {
            var actions = message.updateQueue.filter((function(action) {
                    return "callMethod" === action.type
                })).map((function(action) {
                    return action.payload.method
                })),
                actionsWithParams = message.updateQueue.filter((function(action) {
                    return "callMethod" === action.type
                })).map((function(action) {
                    return generateSignatureFromMethodAndParams(action.payload.method, action.payload.params)
                })),
                models = message.updateQueue.filter((function(action) {
                    return "syncInput" === action.type
                })).map((function(action) {
                    var name = action.payload.name;
                    if (!name.includes(".")) return name;
                    var modelActions = [];
                    return modelActions.push(name.split(".").reduce((function(fullAction, part) {
                        return modelActions.push(fullAction), fullAction + "." + part
                    }))), modelActions
                })).flat();
            setLoading(component, actions.concat(actionsWithParams).concat(models))
        })), store$2.registerHook("message.failed", (function(message, component) {
            unsetLoading(component)
        })), store$2.registerHook("message.received", (function(message, component) {
            unsetLoading(component)
        })), store$2.registerHook("element.removed", (function(el, component) {
            removeLoadingEl(component, el)
        }))
    }

    function processLoadingDirective(component, el, directive) {
        el.__livewire_on_finish_loading = [];
        var actionNames = !1,
            directives = wireDirectives(el);
        if (directives.get("target")) {
            var target = directives.get("target");
            actionNames = target.params.length > 0 ? [generateSignatureFromMethodAndParams(target.method, target.params)] : target.value.split(",").map((function(s) {
                return s.trim()
            }))
        } else {
            var nonActionOrModelLivewireDirectives = ["init", "dirty", "offline", "target", "loading", "poll", "ignore", "key", "id"];
            (actionNames = directives.all().filter((function(i) {
                return !nonActionOrModelLivewireDirectives.includes(i.type)
            })).map((function(i) {
                return i.method
            }))).length < 1 && (actionNames = !1)
        }
        addLoadingEl(component, el, directive, actionNames)
    }

    function addLoadingEl(component, el, directive, actionsNames) {
        actionsNames ? actionsNames.forEach((function(actionsName) {
            component.targetedLoadingElsByAction[actionsName] ? component.targetedLoadingElsByAction[actionsName].push({
                el: el,
                directive: directive
            }) : component.targetedLoadingElsByAction[actionsName] = [{
                el: el,
                directive: directive
            }]
        })) : component.genericLoadingEls.push({
            el: el,
            directive: directive
        })
    }

    function removeLoadingEl(component, el) {
        component.genericLoadingEls.forEach((function(element, index) {
            element.el.isSameNode(el) && component.genericLoadingEls.splice(index, 1)
        })), Object.keys(component.targetedLoadingElsByAction).forEach((function(key) {
            component.targetedLoadingElsByAction[key] = component.targetedLoadingElsByAction[key].filter((function(element) {
                return !element.el.isSameNode(el)
            }))
        }))
    }

    function setLoading(component, actions) {
        var actionTargetedEls = actions.map((function(action) {
                return component.targetedLoadingElsByAction[action]
            })).filter((function(el) {
                return el
            })).flat(),
            allEls = removeDuplicates(component.genericLoadingEls.concat(actionTargetedEls));
        startLoading(allEls), component.currentlyActiveLoadingEls = allEls
    }

    function setUploadLoading(component, modelName) {
        var actionTargetedEls = component.targetedLoadingElsByAction[modelName] || [],
            allEls = removeDuplicates(component.genericLoadingEls.concat(actionTargetedEls));
        startLoading(allEls), component.currentlyActiveUploadLoadingEls = allEls
    }

    function unsetUploadLoading(component) {
        endLoading(component.currentlyActiveUploadLoadingEls), component.currentlyActiveUploadLoadingEls = []
    }

    function unsetLoading(component) {
        endLoading(component.currentlyActiveLoadingEls), component.currentlyActiveLoadingEls = []
    }

    function startLoading(els) {
        els.forEach((function(_ref) {
            var el = _ref.el,
                directive = _ref.directive;
            if (directive.modifiers.includes("class")) {
                var classes = directive.value.split(" ").filter(Boolean);
                doAndSetCallbackOnElToUndo(el, directive, (function() {
                    var _el$classList;
                    return (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes))
                }), (function() {
                    var _el$classList2;
                    return (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classes))
                }))
            } else if (directive.modifiers.includes("attr")) doAndSetCallbackOnElToUndo(el, directive, (function() {
                return el.setAttribute(directive.value, !0)
            }), (function() {
                return el.removeAttribute(directive.value)
            }));
            else {
                var cache = window.getComputedStyle(el, null).getPropertyValue("display");
                doAndSetCallbackOnElToUndo(el, directive, (function() {
                    el.style.display = directive.modifiers.includes("remove") ? cache : getDisplayProperty(directive)
                }), (function() {
                    el.style.display = "none"
                }))
            }
        }))
    }

    function getDisplayProperty(directive) {
        return ["inline", "block", "table", "flex", "grid", "inline-flex"].filter((function(i) {
            return directive.modifiers.includes(i)
        }))[0] || "inline-block"
    }

    function doAndSetCallbackOnElToUndo(el, directive, doCallback, undoCallback) {
        if (directive.modifiers.includes("remove")) {
            var _ref2 = [undoCallback, doCallback];
            doCallback = _ref2[0], undoCallback = _ref2[1]
        }
        if (directive.modifiers.includes("delay")) {
            var duration = 200,
                delayModifiers = {
                    shortest: 50,
                    shorter: 100,
                    short: 150,
                    long: 300,
                    longer: 500,
                    longest: 1e3
                };
            Object.keys(delayModifiers).some((function(key) {
                if (directive.modifiers.includes(key)) return duration = delayModifiers[key], !0
            }));
            var timeout = setTimeout((function() {
                doCallback(), el.__livewire_on_finish_loading.push((function() {
                    return undoCallback()
                }))
            }), duration);
            el.__livewire_on_finish_loading.push((function() {
                return clearTimeout(timeout)
            }))
        } else doCallback(), el.__livewire_on_finish_loading.push((function() {
            return undoCallback()
        }))
    }

    function endLoading(els) {
        els.forEach((function(_ref3) {
            for (var el = _ref3.el; el.__livewire_on_finish_loading.length > 0;) el.__livewire_on_finish_loading.shift()()
        }))
    }

    function generateSignatureFromMethodAndParams(method, params) {
        return method + btoa(encodeURIComponent(params.toString()))
    }

    function removeDuplicates(arr) {
        return Array.from(new Set(arr))
    }
    var MessageBag = function() {
            function MessageBag() {
                _classCallCheck(this, MessageBag), this.bag = {}
            }
            return _createClass(MessageBag, [{
                key: "add",
                value: function(name, thing) {
                    this.bag[name] || (this.bag[name] = []), this.bag[name].push(thing)
                }
            }, {
                key: "push",
                value: function(name, thing) {
                    this.add(name, thing)
                }
            }, {
                key: "first",
                value: function(name) {
                    return this.bag[name] ? this.bag[name][0] : null
                }
            }, {
                key: "last",
                value: function(name) {
                    return this.bag[name].slice(-1)[0]
                }
            }, {
                key: "get",
                value: function(name) {
                    return this.bag[name]
                }
            }, {
                key: "shift",
                value: function(name) {
                    return this.bag[name].shift()
                }
            }, {
                key: "call",
                value: function(name) {
                    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                    (this.listeners[name] || []).forEach((function(callback) {
                        callback.apply(void 0, params)
                    }))
                }
            }, {
                key: "has",
                value: function(name) {
                    return Object.keys(this.listeners).includes(name)
                }
            }]), MessageBag
        }(),
        UploadManager = function() {
            function UploadManager(component) {
                _classCallCheck(this, UploadManager), this.component = component, this.uploadBag = new MessageBag, this.removeBag = new MessageBag
            }
            return _createClass(UploadManager, [{
                key: "registerListeners",
                value: function() {
                    var _this = this;
                    this.component.on("upload:generatedSignedUrl", (function(name, url) {
                        setUploadLoading(_this.component, name), _this.handleSignedUrl(name, url)
                    })), this.component.on("upload:generatedSignedUrlForS3", (function(name, payload) {
                        setUploadLoading(_this.component, name), _this.handleS3PreSignedUrl(name, payload)
                    })), this.component.on("upload:finished", (function(name, tmpFilenames) {
                        return _this.markUploadFinished(name, tmpFilenames)
                    })), this.component.on("upload:errored", (function(name) {
                        return _this.markUploadErrored(name)
                    })), this.component.on("upload:removed", (function(name, tmpFilename) {
                        return _this.removeBag.shift(name).finishCallback(tmpFilename)
                    }))
                }
            }, {
                key: "upload",
                value: function(name, file, finishCallback, errorCallback, progressCallback) {
                    this.setUpload(name, {
                        files: [file],
                        multiple: !1,
                        finishCallback: finishCallback,
                        errorCallback: errorCallback,
                        progressCallback: progressCallback
                    })
                }
            }, {
                key: "uploadMultiple",
                value: function(name, files, finishCallback, errorCallback, progressCallback) {
                    this.setUpload(name, {
                        files: Array.from(files),
                        multiple: !0,
                        finishCallback: finishCallback,
                        errorCallback: errorCallback,
                        progressCallback: progressCallback
                    })
                }
            }, {
                key: "removeUpload",
                value: function(name, tmpFilename, finishCallback) {
                    this.removeBag.push(name, {
                        tmpFilename: tmpFilename,
                        finishCallback: finishCallback
                    }), this.component.call("removeUpload", name, tmpFilename)
                }
            }, {
                key: "setUpload",
                value: function(name, uploadObject) {
                    this.uploadBag.add(name, uploadObject), 1 === this.uploadBag.get(name).length && this.startUpload(name, uploadObject)
                }
            }, {
                key: "handleSignedUrl",
                value: function(name, url) {
                    var formData = new FormData;
                    Array.from(this.uploadBag.first(name).files).forEach((function(file) {
                        return formData.append("files[]", file, file.name)
                    }));
                    var headers = {
                            Accept: "application/json"
                        },
                        csrfToken = getCsrfToken();
                    csrfToken && (headers["X-CSRF-TOKEN"] = csrfToken), this.makeRequest(name, formData, "post", url, headers, (function(response) {
                        return response.paths
                    }))
                }
            }, {
                key: "handleS3PreSignedUrl",
                value: function(name, payload) {
                    var formData = this.uploadBag.first(name).files[0],
                        headers = payload.headers;
                    "Host" in headers && delete headers.Host;
                    var url = payload.url;
                    this.makeRequest(name, formData, "put", url, headers, (function(response) {
                        return [payload.path]
                    }))
                }
            }, {
                key: "makeRequest",
                value: function(name, formData, method, url, headers, retrievePaths) {
                    var _this2 = this,
                        request = new XMLHttpRequest;
                    request.open(method, url), Object.entries(headers).forEach((function(_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            key = _ref2[0],
                            value = _ref2[1];
                        request.setRequestHeader(key, value)
                    })), request.upload.addEventListener("progress", (function(e) {
                        e.detail = {}, e.detail.progress = Math.round(100 * e.loaded / e.total), _this2.uploadBag.first(name).progressCallback(e)
                    })), request.addEventListener("load", (function() {
                        if ("2" !== (request.status + "")[0]) {
                            var errors = null;
                            422 === request.status && (errors = request.response), _this2.component.call("uploadErrored", name, errors, _this2.uploadBag.first(name).multiple)
                        } else {
                            var paths = retrievePaths(request.response && JSON.parse(request.response));
                            _this2.component.call("finishUpload", name, paths, _this2.uploadBag.first(name).multiple)
                        }
                    })), request.send(formData)
                }
            }, {
                key: "startUpload",
                value: function(name, uploadObject) {
                    var fileInfos = uploadObject.files.map((function(file) {
                        return {
                            name: file.name,
                            size: file.size,
                            type: file.type
                        }
                    }));
                    this.component.call("startUpload", name, fileInfos, uploadObject.multiple), setUploadLoading(this.component, name)
                }
            }, {
                key: "markUploadFinished",
                value: function(name, tmpFilenames) {
                    unsetUploadLoading(this.component);
                    var uploadObject = this.uploadBag.shift(name);
                    uploadObject.finishCallback(uploadObject.multiple ? tmpFilenames : tmpFilenames[0]), this.uploadBag.get(name).length > 0 && this.startUpload(name, this.uploadBag.last(name))
                }
            }, {
                key: "markUploadErrored",
                value: function(name) {
                    unsetUploadLoading(this.component), this.uploadBag.shift(name).errorCallback(), this.uploadBag.get(name).length > 0 && this.startUpload(name, this.uploadBag.last(name))
                }
            }]), UploadManager
        }();

    function SupportAlpine() {
        window.addEventListener("livewire:load", (function() {
            window.Alpine && (refreshAlpineAfterEveryLivewireRequest(), addDollarSignWire(), supportEntangle())
        }))
    }

    function refreshAlpineAfterEveryLivewireRequest() {
        isV3() ? store$2.registerHook("message.processed", (function(message, livewireComponent) {
            walk(livewireComponent.el, (function(el) {
                el._x_hidePromise || el._x_runEffects && el._x_runEffects()
            }))
        })) : window.Alpine.onComponentInitialized && window.Alpine.onComponentInitialized((function(component) {
            var livewireEl = component.$el.closest("[wire\\:id]");
            livewireEl && livewireEl.__livewire && store$2.registerHook("message.processed", (function(message, livewireComponent) {
                livewireComponent === livewireEl.__livewire && component.updateElements(component.$el)
            }))
        }))
    }

    function addDollarSignWire() {
        isV3() ? window.Alpine.magic("wire", (function(el) {
            var wireEl = el.closest("[wire\\:id]");
            return wireEl || console.warn('Alpine: Cannot reference "$wire" outside a Livewire component.'), wireEl.__livewire.$wire
        })) : window.Alpine.addMagicProperty && window.Alpine.addMagicProperty("wire", (function(componentEl) {
            var wireEl = componentEl.closest("[wire\\:id]");
            return wireEl || console.warn('Alpine: Cannot reference "$wire" outside a Livewire component.'), wireEl.__livewire.$wire
        }))
    }

    function supportEntangle() {
        isV3() || window.Alpine.onBeforeComponentInitialized && window.Alpine.onBeforeComponentInitialized((function(component) {
            var livewireEl = component.$el.closest("[wire\\:id]");
            livewireEl && livewireEl.__livewire && Object.entries(component.unobservedData).forEach((function(_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];
                if (value && "object" === _typeof(value) && value.livewireEntangle) {
                    var livewireProperty = value.livewireEntangle,
                        isDeferred = value.isDeferred,
                        livewireComponent = livewireEl.__livewire,
                        livewirePropertyValue = livewireEl.__livewire.get(livewireProperty);
                    if (void 0 === livewirePropertyValue) return void console.error("Livewire Entangle Error: Livewire property '".concat(livewireProperty, "' cannot be found"));
                    component.unobservedData[key] = JSON.parse(JSON.stringify(livewirePropertyValue));
                    var blockAlpineWatcher = !1;
                    component.unobservedData.$watch(key, (function(value) {
                        !0 !== blockAlpineWatcher ? JSON.stringify(value) != JSON.stringify(livewireEl.__livewire.getPropertyValueIncludingDefers(livewireProperty)) && livewireComponent.set(livewireProperty, value, isDeferred, !isDeferred) : blockAlpineWatcher = !1
                    })), livewireComponent.watch(livewireProperty, (function(value) {
                        component.$data[key] = void 0 !== value ? JSON.parse(JSON.stringify(value)) : value
                    }))
                }
            }))
        }))
    }

    function getEntangleFunction(component) {
        return isV3() ? function(name) {
            var defer = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                isDeferred = defer,
                livewireProperty = name,
                livewireComponent = component,
                livewirePropertyValue = component.get(livewireProperty),
                interceptor = Alpine.interceptor((function(initialValue, getter, setter, path, key) {
                    if (void 0 !== livewirePropertyValue) {
                        var value = JSON.parse(JSON.stringify(livewirePropertyValue));
                        return setter(value), window.Alpine.effect((function() {
                            var value = getter();
                            JSON.stringify(value) != JSON.stringify(livewireComponent.getPropertyValueIncludingDefers(livewireProperty)) && livewireComponent.set(livewireProperty, value, isDeferred, !isDeferred)
                        })), livewireComponent.watch(livewireProperty, (function(value) {
                            window.Alpine.disableEffectScheduling((function() {
                                setter(void 0 !== value ? JSON.parse(JSON.stringify(value)) : value)
                            }))
                        })), value
                    }
                    console.error("Livewire Entangle Error: Livewire property '".concat(livewireProperty, "' cannot be found"))
                }), (function(obj) {
                    Object.defineProperty(obj, "defer", {
                        get: function() {
                            return isDeferred = !0, obj
                        }
                    })
                }));
            return interceptor(livewirePropertyValue)
        } : function(name) {
            var defer = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return {
                isDeferred: defer,
                livewireEntangle: name,
                get defer() {
                    return this.isDeferred = !0, this
                }
            }
        }
    }

    function alpinifyElementsForMorphdom(from, to) {
        if (isV3()) return alpinifyElementsForMorphdomV3(from, to);
        if (from.__x && window.Alpine.clone(from.__x, to), Array.from(from.attributes).map((function(attr) {
                return attr.name
            })).some((function(name) {
                return /x-show/.test(name)
            })))
            if (from.__x_transition) from.skipElUpdatingButStillUpdateChildren = !0;
            else if (isHiding(from, to)) {
            var style = to.getAttribute("style");
            style && to.setAttribute("style", style.replace("display: none;", ""))
        } else isShowing(from, to) && (to.style.display = from.style.display)
    }

    function alpinifyElementsForMorphdomV3(from, to) {
        1 === from.nodeType && from._x_dataStack && window.Alpine.clone(from, to)
    }

    function isHiding(from, to) {
        return beforeAlpineTwoPointSevenPointThree() ? "" === from.style.display && "none" === to.style.display : from.__x_is_shown && !to.__x_is_shown
    }

    function isShowing(from, to) {
        return beforeAlpineTwoPointSevenPointThree() ? "none" === from.style.display && "" === to.style.display : !from.__x_is_shown && to.__x_is_shown
    }

    function beforeAlpineTwoPointSevenPointThree() {
        var _window$Alpine$versio2 = _slicedToArray(window.Alpine.version.split(".").map((function(i) {
                return Number(i)
            })), 3),
            major = _window$Alpine$versio2[0],
            minor = _window$Alpine$versio2[1],
            patch = _window$Alpine$versio2[2];
        return major <= 2 && minor <= 7 && patch <= 2
    }

    function isV3() {
        return window.Alpine && window.Alpine.version && /^3\..+\..+$/.test(window.Alpine.version)
    }
    var Component = function() {
        function Component(el, connection) {
            _classCallCheck(this, Component), el.__livewire = this, this.el = el, this.lastFreshHtml = this.el.outerHTML, this.id = this.el.getAttribute("wire:id"), this.checkForMultipleRootElements(), this.connection = connection;
            var initialData = JSON.parse(this.el.getAttribute("wire:initial-data"));
            if (this.el.removeAttribute("wire:initial-data"), this.fingerprint = initialData.fingerprint, this.serverMemo = initialData.serverMemo, this.effects = initialData.effects, this.listeners = this.effects.listeners, this.updateQueue = [], this.deferredActions = {}, this.tearDownCallbacks = [], this.messageInTransit = void 0, this.scopedListeners = new MessageBus, this.prefetchManager = new PrefetchManager(this), this.uploadManager = new UploadManager(this), this.watchers = {}, store$2.callHook("component.initialized", this), this.initialize(), this.uploadManager.registerListeners(), this.effects.redirect) return this.redirect(this.effects.redirect)
        }
        return _createClass(Component, [{
            key: "name",
            get: function() {
                return this.fingerprint.name
            }
        }, {
            key: "data",
            get: function() {
                return this.serverMemo.data
            }
        }, {
            key: "childIds",
            get: function() {
                return Object.values(this.serverMemo.children).map((function(child) {
                    return child.id
                }))
            }
        }, {
            key: "checkForMultipleRootElements",
            value: function() {
                var _this = this;
                (function countElementsBeforeMarker(el) {
                    var carryCount = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (!el) return carryCount;
                    if (el.nodeType === Node.COMMENT_NODE && el.textContent.includes("wire-end:".concat(_this.id))) return carryCount;
                    var newlyDiscoveredEls = el.nodeType === Node.ELEMENT_NODE ? 1 : 0;
                    return countElementsBeforeMarker(el.nextSibling, carryCount + newlyDiscoveredEls)
                })(this.el.nextSibling) > 0 && console.warn("Livewire: Multiple root elements detected. This is not supported. See docs for more information https://laravel-livewire.com/docs/2.x/troubleshooting#root-element-issues", this.el)
            }
        }, {
            key: "initialize",
            value: function() {
                var _this2 = this;
                this.walk((function(el) {
                    return nodeInitializer.initialize(el, _this2)
                }), (function(el) {
                    return store$2.addComponent(new Component(el, _this2.connection))
                }))
            }
        }, {
            key: "get",
            value: function(name) {
                return name.split(".").reduce((function(carry, segment) {
                    return void 0 === carry ? carry : carry[segment]
                }), this.data)
            }
        }, {
            key: "getPropertyValueIncludingDefers",
            value: function(name) {
                var action = this.deferredActions[name];
                return action ? action.payload.value : this.get(name)
            }
        }, {
            key: "updateServerMemoFromResponseAndMergeBackIntoResponse",
            value: function(message) {
                var _this3 = this;
                Object.entries(message.response.serverMemo).forEach((function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];
                    "data" === key ? Object.entries(value || {}).forEach((function(_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                            dataKey = _ref4[0],
                            dataValue = _ref4[1];
                        _this3.serverMemo.data[dataKey] = dataValue, message.shouldSkipWatcherForDataKey(dataKey) || Object.entries(_this3.watchers).forEach((function(_ref5) {
                            var _ref6 = _slicedToArray(_ref5, 2),
                                key = _ref6[0],
                                watchers = _ref6[1],
                                originalSplitKey = key.split("."),
                                basePropertyName = originalSplitKey.shift(),
                                restOfPropertyName = originalSplitKey.join(".");
                            if (basePropertyName == dataKey) {
                                var potentiallyNestedValue = restOfPropertyName ? getValue(dataValue, restOfPropertyName) : dataValue;
                                watchers.forEach((function(watcher) {
                                    return watcher(potentiallyNestedValue)
                                }))
                            }
                        }))
                    })) : _this3.serverMemo[key] = value
                })), message.response.serverMemo = Object.assign({}, this.serverMemo)
            }
        }, {
            key: "watch",
            value: function(name, callback) {
                this.watchers[name] || (this.watchers[name] = []), this.watchers[name].push(callback)
            }
        }, {
            key: "set",
            value: function(name, value) {
                var defer = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    skipWatcher = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                defer ? this.addAction(new _default(name, value, this.el, skipWatcher)) : this.addAction(new _default$4("$set", [name, value], this.el, skipWatcher))
            }
        }, {
            key: "sync",
            value: function(name, value) {
                var defer = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                defer ? this.addAction(new _default(name, value, this.el)) : this.addAction(new _default$1(name, value, this.el))
            }
        }, {
            key: "call",
            value: function(method) {
                for (var _this4 = this, _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                return new Promise((function(resolve, reject) {
                    var action = new _default$4(method, params, _this4.el);
                    _this4.addAction(action), action.onResolve((function(thing) {
                        return resolve(thing)
                    })), action.onReject((function(thing) {
                        return reject(thing)
                    }))
                }))
            }
        }, {
            key: "on",
            value: function(event, callback) {
                this.scopedListeners.register(event, callback)
            }
        }, {
            key: "addAction",
            value: function(action) {
                if (action instanceof _default) this.deferredActions[action.name] = action;
                else {
                    if (this.prefetchManager.actionHasPrefetch(action) && this.prefetchManager.actionPrefetchResponseHasBeenReceived(action)) {
                        var message = this.prefetchManager.getPrefetchMessageByAction(action);
                        return this.handleResponse(message), void this.prefetchManager.clearPrefetches()
                    }
                    this.updateQueue.push(action), debounce(this.fireMessage, 5).apply(this), this.prefetchManager.clearPrefetches()
                }
            }
        }, {
            key: "fireMessage",
            value: function() {
                var _this5 = this;
                if (!this.messageInTransit) {
                    Object.entries(this.deferredActions).forEach((function(_ref7) {
                        var _ref8 = _slicedToArray(_ref7, 2);
                        _ref8[0];
                        var action = _ref8[1];
                        _this5.updateQueue.unshift(action)
                    })), this.deferredActions = {}, this.messageInTransit = new _default$3(this, this.updateQueue);
                    var sendMessage = function() {
                        _this5.connection.sendMessage(_this5.messageInTransit), store$2.callHook("message.sent", _this5.messageInTransit, _this5), _this5.updateQueue = []
                    };
                    window.capturedRequestsForDusk ? window.capturedRequestsForDusk.push(sendMessage) : sendMessage()
                }
            }
        }, {
            key: "messageSendFailed",
            value: function() {
                store$2.callHook("message.failed", this.messageInTransit, this), this.messageInTransit.reject(), this.messageInTransit = null
            }
        }, {
            key: "receiveMessage",
            value: function(message, payload) {
                message.storeResponse(payload), message instanceof _default$2 || (this.handleResponse(message), this.updateQueue.length > 0 && this.fireMessage(), dispatch("livewire:update"))
            }
        }, {
            key: "handleResponse",
            value: function(message) {
                var _this6 = this,
                    response = message.response;
                this.updateServerMemoFromResponseAndMergeBackIntoResponse(message), store$2.callHook("message.received", message, this), response.effects.html ? (this.lastFreshHtml = response.effects.html, this.handleMorph(response.effects.html.trim())) : this.handleMorph(this.lastFreshHtml), response.effects.dirty && this.forceRefreshDataBoundElementsMarkedAsDirty(response.effects.dirty), message.replaying || (this.messageInTransit && this.messageInTransit.resolve(), this.messageInTransit = null, response.effects.emits && response.effects.emits.length > 0 && response.effects.emits.forEach((function(event) {
                    var _this6$scopedListener;
                    (_this6$scopedListener = _this6.scopedListeners).call.apply(_this6$scopedListener, [event.event].concat(_toConsumableArray(event.params))), event.selfOnly ? store$2.emitSelf.apply(store$2, [_this6.id, event.event].concat(_toConsumableArray(event.params))) : event.to ? store$2.emitTo.apply(store$2, [event.to, event.event].concat(_toConsumableArray(event.params))) : event.ancestorsOnly ? store$2.emitUp.apply(store$2, [_this6.el, event.event].concat(_toConsumableArray(event.params))) : store$2.emit.apply(store$2, [event.event].concat(_toConsumableArray(event.params)))
                })), response.effects.dispatches && response.effects.dispatches.length > 0 && response.effects.dispatches.forEach((function(event) {
                    var data = event.data ? event.data : {},
                        e = new CustomEvent(event.event, {
                            bubbles: !0,
                            detail: data
                        });
                    _this6.el.dispatchEvent(e)
                }))), store$2.callHook("message.processed", message, this), response.effects.redirect && setTimeout((function() {
                    return _this6.redirect(response.effects.redirect)
                }))
            }
        }, {
            key: "redirect",
            value: function(url) {
                window.Turbolinks && window.Turbolinks.supported ? window.Turbolinks.visit(url) : window.location.href = url
            }
        }, {
            key: "forceRefreshDataBoundElementsMarkedAsDirty",
            value: function(dirtyInputs) {
                var _this7 = this;
                this.walk((function(el) {
                    var directives = wireDirectives(el);
                    if (!directives.missing("model")) {
                        var modelValue = directives.get("model").value;
                        DOM.hasFocus(el) && !dirtyInputs.includes(modelValue) || DOM.setInputValueFromModel(el, _this7)
                    }
                }))
            }
        }, {
            key: "addPrefetchAction",
            value: function(action) {
                if (!this.prefetchManager.actionHasPrefetch(action)) {
                    var message = new _default$2(this, action);
                    this.prefetchManager.addMessage(message), this.connection.sendMessage(message)
                }
            }
        }, {
            key: "handleMorph",
            value: function(dom) {
                var _this8 = this;
                this.morphChanges = {
                    changed: [],
                    added: [],
                    removed: []
                }, morphdom(this.el, dom, {
                    childrenOnly: !1,
                    getNodeKey: function(node) {
                        return node.hasAttribute("wire:key") ? node.getAttribute("wire:key") : node.hasAttribute("wire:id") ? node.getAttribute("wire:id") : node.id
                    },
                    onBeforeNodeAdded: function(node) {},
                    onBeforeNodeDiscarded: function(node) {
                        if (node.__x_inserted_me && Array.from(node.attributes).some((function(attr) {
                                return /x-transition/.test(attr.name)
                            }))) return !1
                    },
                    onNodeDiscarded: function(node) {
                        store$2.callHook("element.removed", node, _this8), node.__livewire && store$2.removeComponent(node.__livewire), _this8.morphChanges.removed.push(node)
                    },
                    onBeforeElChildrenUpdated: function(node) {},
                    onBeforeElUpdated: function(from, to) {
                        if (from.isEqualNode(to)) return !1;
                        store$2.callHook("element.updating", from, to, _this8), from.hasAttribute("wire:model") && "SELECT" === from.tagName.toUpperCase() && (to.selectedIndex = -1);
                        var fromDirectives = wireDirectives(from);
                        if (fromDirectives.has("ignore") || !0 === from.__livewire_ignore || !0 === from.__livewire_ignore_self) {
                            if (!(fromDirectives.has("ignore") && fromDirectives.get("ignore").modifiers.includes("self") || !0 === from.__livewire_ignore_self)) return !1;
                            from.skipElUpdatingButStillUpdateChildren = !0
                        }
                        if (DOM.isComponentRootEl(from) && from.getAttribute("wire:id") !== _this8.id) return !1;
                        DOM.isComponentRootEl(from) && (to.__livewire = _this8), alpinifyElementsForMorphdom(from, to)
                    },
                    onElUpdated: function(node) {
                        _this8.morphChanges.changed.push(node), store$2.callHook("element.updated", node, _this8)
                    },
                    onNodeAdded: function(node) {
                        if (DOM.closestRoot(node).getAttribute("wire:id") === _this8.id) {
                            if (!1 === nodeInitializer.initialize(node, _this8)) return !1
                        } else DOM.isComponentRootEl(node) && (store$2.addComponent(new Component(node, _this8.connection)), node.skipAddingChildren = !0);
                        _this8.morphChanges.added.push(node)
                    }
                }), window.skipShow = !1
            }
        }, {
            key: "walk",
            value: function(callback) {
                var _this9 = this,
                    callbackWhenNewComponentIsEncountered = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(el) {};
                walk(this.el, (function(el) {
                    if (!el.isSameNode(_this9.el)) return el.hasAttribute("wire:id") ? (callbackWhenNewComponentIsEncountered(el), !1) : !1 !== callback(el) && void 0;
                    callback(el)
                }))
            }
        }, {
            key: "modelSyncDebounce",
            value: function(callback, time) {
                this.modelDebounceCallbacks || (this.modelDebounceCallbacks = []);
                var timeout, callbackRegister = {
                    callback: function() {}
                };
                return this.modelDebounceCallbacks.push(callbackRegister),
                    function(e) {
                        clearTimeout(timeout), timeout = setTimeout((function() {
                            callback(e), timeout = void 0, callbackRegister.callback = function() {}
                        }), time), callbackRegister.callback = function() {
                            clearTimeout(timeout), callback(e)
                        }
                    }
            }
        }, {
            key: "callAfterModelDebounce",
            value: function(callback) {
                this.modelDebounceCallbacks && this.modelDebounceCallbacks.forEach((function(callbackRegister) {
                    callbackRegister.callback(), callbackRegister.callback = function() {}
                })), callback()
            }
        }, {
            key: "addListenerForTeardown",
            value: function(teardownCallback) {
                this.tearDownCallbacks.push(teardownCallback)
            }
        }, {
            key: "tearDown",
            value: function() {
                this.tearDownCallbacks.forEach((function(callback) {
                    return callback()
                }))
            }
        }, {
            key: "upload",
            value: function(name, file) {
                var finishCallback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                    errorCallback = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                    progressCallback = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {};
                this.uploadManager.upload(name, file, finishCallback, errorCallback, progressCallback)
            }
        }, {
            key: "uploadMultiple",
            value: function(name, files) {
                var finishCallback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                    errorCallback = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                    progressCallback = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {};
                this.uploadManager.uploadMultiple(name, files, finishCallback, errorCallback, progressCallback)
            }
        }, {
            key: "removeUpload",
            value: function(name, tmpFilename) {
                var finishCallback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                    errorCallback = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                this.uploadManager.removeUpload(name, tmpFilename, finishCallback, errorCallback)
            }
        }, {
            key: "$wire",
            get: function() {
                if (this.dollarWireProxy) return this.dollarWireProxy;
                var component = this;
                return this.dollarWireProxy = new Proxy({}, {
                    get: function(object, property) {
                        if (!["_x_interceptor"].includes(property)) {
                            if ("entangle" === property) return getEntangleFunction(component);
                            if ("__instance" === property) return component;
                            if ("string" == typeof property && property.match(/^emit.*/)) return function() {
                                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                                return "emitSelf" === property ? store$2.emitSelf.apply(store$2, [component.id].concat(args)) : "emitUp" === property ? store$2.emitUp.apply(store$2, [component.el].concat(args)) : store$2[property].apply(store$2, args)
                            };
                            if (["get", "set", "sync", "call", "on", "upload", "uploadMultiple", "removeUpload"].includes(property)) return function() {
                                for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
                                return component[property].apply(component, args)
                            };
                            var getResult = component.get(property);
                            return void 0 === getResult ? function() {
                                for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
                                return component.call.apply(component, [property].concat(args))
                            } : getResult
                        }
                    },
                    set: function(obj, prop, value) {
                        return component.set(prop, value), !0
                    }
                })
            }
        }]), Component
    }();

    function FileUploads() {
        store$2.registerHook("interceptWireModelAttachListener", (function(directive, el, component) {
            if ("input" === el.tagName.toLowerCase() && "file" === el.type) {
                var finish = function() {
                        return el.dispatchEvent(new CustomEvent("livewire-upload-finish", {
                            bubbles: !0
                        }))
                    },
                    error = function() {
                        return el.dispatchEvent(new CustomEvent("livewire-upload-error", {
                            bubbles: !0
                        }))
                    },
                    progress = function(progressEvent) {
                        var percentCompleted = Math.round(100 * progressEvent.loaded / progressEvent.total);
                        el.dispatchEvent(new CustomEvent("livewire-upload-progress", {
                            bubbles: !0,
                            detail: {
                                progress: percentCompleted
                            }
                        }))
                    },
                    eventHandler = function(e) {
                        0 !== e.target.files.length && (el.dispatchEvent(new CustomEvent("livewire-upload-start", {
                            bubbles: !0
                        })), e.target.multiple ? component.uploadMultiple(directive.value, e.target.files, finish, error, progress) : component.upload(directive.value, e.target.files[0], finish, error, progress))
                    };
                el.addEventListener("change", eventHandler);
                var clearFileInputValue = function() {
                    el.value = null
                };
                el.addEventListener("click", clearFileInputValue), component.addListenerForTeardown((function() {
                    el.removeEventListener("change", eventHandler), el.removeEventListener("click", clearFileInputValue)
                }))
            }
        }))
    }

    function LaravelEcho() {
        store$2.registerHook("component.initialized", (function(component) {
            Array.isArray(component.listeners) && component.listeners.forEach((function(event) {
                if (event.startsWith("echo")) {
                    if ("undefined" == typeof Echo) return void console.warn("Laravel Echo cannot be found");
                    var event_parts = event.split(/(echo:|echo-)|:|,/);
                    "echo:" == event_parts[1] && event_parts.splice(2, 0, "channel", void 0), "notification" == event_parts[2] && event_parts.push(void 0, void 0);
                    var _event_parts = _slicedToArray(event_parts, 7);
                    _event_parts[0], _event_parts[1];
                    var channel_type = _event_parts[2];
                    _event_parts[3];
                    var channel = _event_parts[4];
                    _event_parts[5];
                    var event_name = _event_parts[6];
                    ["channel", "private", "encryptedPrivate"].includes(channel_type) ? Echo[channel_type](channel).listen(event_name, (function(e) {
                        store$2.emit(event, e)
                    })) : "presence" == channel_type ? ["here", "joining", "leaving"].includes(event_name) ? Echo.join(channel)[event_name]((function(e) {
                        store$2.emit(event, e)
                    })) : Echo.join(channel).listen(event_name, (function(e) {
                        store$2.emit(event, e)
                    })) : "notification" == channel_type ? Echo.private(channel).notification((function(notification) {
                        store$2.emit(event, notification)
                    })) : console.warn("Echo channel type not yet supported")
                }
            }))
        }))
    }

    function DirtyStates() {
        store$2.registerHook("component.initialized", (function(component) {
            component.dirtyEls = []
        })), store$2.registerHook("element.initialized", (function(el, component) {
            wireDirectives(el).missing("dirty") || component.dirtyEls.push(el)
        })), store$2.registerHook("interceptWireModelAttachListener", (function(directive, el, component) {
            var property = directive.value;
            el.addEventListener("input", (function() {
                component.dirtyEls.forEach((function(dirtyEl) {
                    var directives = wireDirectives(dirtyEl);
                    (directives.has("model") && directives.get("model").value === property || directives.has("target") && directives.get("target").value.split(",").map((function(s) {
                        return s.trim()
                    })).includes(property)) && setDirtyState(dirtyEl, DOM.valueFromInput(el, component) != component.get(property))
                }))
            }))
        })), store$2.registerHook("message.received", (function(message, component) {
            component.dirtyEls.forEach((function(element) {
                element.__livewire_dirty_cleanup && (element.__livewire_dirty_cleanup(), delete element.__livewire_dirty_cleanup)
            }))
        })), store$2.registerHook("element.removed", (function(el, component) {
            component.dirtyEls.forEach((function(element, index) {
                element.isSameNode(el) && component.dirtyEls.splice(index, 1)
            }))
        }))
    }

    function setDirtyState(el, isDirty) {
        var directive = wireDirectives(el).get("dirty");
        if (directive.modifiers.includes("class")) {
            var _el$classList, _el$classList3, classes = directive.value.split(" ");
            if (directive.modifiers.includes("remove") !== isDirty)(_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes)), el.__livewire_dirty_cleanup = function() {
                var _el$classList2;
                return (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classes))
            };
            else(_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(classes)), el.__livewire_dirty_cleanup = function() {
                var _el$classList4;
                return (_el$classList4 = el.classList).add.apply(_el$classList4, _toConsumableArray(classes))
            }
        } else directive.modifiers.includes("attr") ? directive.modifiers.includes("remove") !== isDirty ? (el.setAttribute(directive.value, !0), el.__livewire_dirty_cleanup = function() {
            return el.removeAttribute(directive.value)
        }) : (el.removeAttribute(directive.value), el.__livewire_dirty_cleanup = function() {
            return el.setAttribute(directive.value, !0)
        }) : wireDirectives(el).get("model") || (el.style.display = isDirty ? "inline-block" : "none", el.__livewire_dirty_cleanup = function() {
            return el.style.display = isDirty ? "none" : "inline-block"
        })
    }
    var cleanupStackByComponentId = {};

    function DisableForms() {
        store$2.registerHook("element.initialized", (function(el, component) {
            wireDirectives(el).missing("submit") || el.addEventListener("submit", (function() {
                cleanupStackByComponentId[component.id] = [], component.walk((function(node) {
                    if (el.contains(node)) return !node.hasAttribute("wire:ignore") && void("button" === node.tagName.toLowerCase() && "submit" === node.type || "select" === node.tagName.toLowerCase() || "input" === node.tagName.toLowerCase() && ("checkbox" === node.type || "radio" === node.type) ? (node.disabled || cleanupStackByComponentId[component.id].push((function() {
                        return node.disabled = !1
                    })), node.disabled = !0) : "input" !== node.tagName.toLowerCase() && "textarea" !== node.tagName.toLowerCase() || (node.readOnly || cleanupStackByComponentId[component.id].push((function() {
                        return node.readOnly = !1
                    })), node.readOnly = !0))
                }))
            }))
        })), store$2.registerHook("message.failed", (function(message, component) {
            return cleanup(component)
        })), store$2.registerHook("message.received", (function(message, component) {
            return cleanup(component)
        }))
    }

    function cleanup(component) {
        if (cleanupStackByComponentId[component.id])
            for (; cleanupStackByComponentId[component.id].length > 0;) cleanupStackByComponentId[component.id].shift()()
    }

    function FileDownloads() {
        store$2.registerHook("message.received", (function(message, component) {
            var response = message.response;
            if (response.effects.download) {
                var urlObject = window.webkitURL || window.URL,
                    url = urlObject.createObjectURL(base64toBlob(response.effects.download.content, response.effects.download.contentType)),
                    invisibleLink = document.createElement("a");
                invisibleLink.style.display = "none", invisibleLink.href = url, invisibleLink.download = response.effects.download.name, document.body.appendChild(invisibleLink), invisibleLink.click(), setTimeout((function() {
                    urlObject.revokeObjectURL(url)
                }), 0)
            }
        }))
    }

    function base64toBlob(b64Data) {
        var contentType = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            sliceSize = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 512,
            byteCharacters = atob(b64Data),
            byteArrays = [];
        null === contentType && (contentType = "");
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            for (var slice = byteCharacters.slice(offset, offset + sliceSize), byteNumbers = new Array(slice.length), i = 0; i < slice.length; i++) byteNumbers[i] = slice.charCodeAt(i);
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray)
        }
        return new Blob(byteArrays, {
            type: contentType
        })
    }
    var offlineEls = [];

    function OfflineStates() {
        store$2.registerHook("element.initialized", (function(el) {
            wireDirectives(el).missing("offline") || offlineEls.push(el)
        })), window.addEventListener("offline", (function() {
            store$2.livewireIsOffline = !0, offlineEls.forEach((function(el) {
                toggleOffline(el, !0)
            }))
        })), window.addEventListener("online", (function() {
            store$2.livewireIsOffline = !1, offlineEls.forEach((function(el) {
                toggleOffline(el, !1)
            }))
        })), store$2.registerHook("element.removed", (function(el) {
            offlineEls = offlineEls.filter((function(el) {
                return !el.isSameNode(el)
            }))
        }))
    }

    function toggleOffline(el, isOffline) {
        var directives = wireDirectives(el),
            directive = directives.get("offline");
        if (directive.modifiers.includes("class")) {
            var _el$classList, _el$classList2, classes = directive.value.split(" ");
            if (directive.modifiers.includes("remove") !== isOffline)(_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
            else(_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classes))
        } else directive.modifiers.includes("attr") ? directive.modifiers.includes("remove") !== isOffline ? el.setAttribute(directive.value, !0) : el.removeAttribute(directive.value) : directives.get("model") || (el.style.display = isOffline ? "inline-block" : "none")
    }

    function SyncBrowserHistory() {
        var initializedPath = !1,
            componentIdsThatAreWritingToHistoryState = new Set;

        function normalizeResponse(response, component) {
            response.effects.dirty = Object.keys(response.serverMemo.data), response.effects.html = component.lastFreshHtml
        }

        function onlyChangeThePathAndQueryString(url) {
            if (url) {
                var destination = new URL(url),
                    afterOrigin = destination.href.replace(destination.origin, "").replace(/\?$/, "");
                return window.location.origin + afterOrigin + window.location.hash
            }
        }
        LivewireStateManager.clearState(), store$2.registerHook("component.initialized", (function(component) {
            component.effects.path && setTimeout((function() {
                var url = onlyChangeThePathAndQueryString(initializedPath ? void 0 : component.effects.path),
                    response = {
                        serverMemo: component.serverMemo,
                        effects: component.effects
                    };
                normalizeResponse(response, component), LivewireStateManager.replaceState(url, response, component), componentIdsThatAreWritingToHistoryState.add(component.id), initializedPath = !0
            }))
        })), store$2.registerHook("message.processed", (function(message, component) {
            if (!message.replaying) {
                var response = message.response,
                    effects = response.effects || {};
                if (normalizeResponse(response, component), "path" in effects && effects.path !== window.location.href) {
                    var url = onlyChangeThePathAndQueryString(effects.path);
                    LivewireStateManager.pushState(url, response, component), componentIdsThatAreWritingToHistoryState.add(component.id)
                } else componentIdsThatAreWritingToHistoryState.has(component.id) && LivewireStateManager.replaceState(window.location.href, response, component)
            }
        })), window.addEventListener("popstate", (function(event) {
            LivewireStateManager.missingState(event) || LivewireStateManager.replayResponses(event, (function(response, component) {
                var message = new _default$3(component, []);
                message.storeResponse(response), message.replaying = !0, component.handleResponse(message)
            }))
        })), store$2.registerHook("element.updating", (function(from, to, component) {
            from.getAttribute("wire:id") === component.id && (component.lastKnownDomId = component.id)
        })), store$2.registerHook("element.updated", (function(node, component) {
            component.lastKnownDomId && (node.getAttribute("wire:id") !== component.lastKnownDomId && store$2.changeComponentId(component, node.getAttribute("wire:id")), delete component.lastKnownDomId)
        }))
    }
    var LivewireStateManager = {
            replaceState: function(url, response, component) {
                this.updateState("replaceState", url, response, component)
            },
            pushState: function(url, response, component) {
                this.updateState("pushState", url, response, component)
            },
            updateState: function(method, url, response, component) {
                var state = this.currentState();
                state.storeResponse(response, component);
                var subject, stateArray = state.toStateArray(),
                    fullstateObject = Object.assign(history.state || {}, {
                        livewire: stateArray
                    });
                store$2.callHook("before" + ((subject = method).charAt(0).toUpperCase() + subject.slice(1)), fullstateObject, url, component);
                try {
                    "undefined" != decodeURI(url) && (url = decodeURI(url).replaceAll(" ", "+").replaceAll("\\", "%5C")), history[method](fullstateObject, "", url)
                } catch (error) {
                    if ("NS_ERROR_ILLEGAL_VALUE" === error.name) {
                        var key = this.storeInSession(stateArray);
                        fullstateObject.livewire = key, history[method](fullstateObject, "", url)
                    }
                }
            },
            replayResponses: function(event, callback) {
                event.state.livewire && ("string" == typeof event.state.livewire ? new LivewireState(this.getFromSession(event.state.livewire)) : new LivewireState(event.state.livewire)).replayResponses(callback)
            },
            currentState: function() {
                return history.state && history.state.livewire ? "string" == typeof history.state.livewire ? new LivewireState(this.getFromSession(history.state.livewire)) : new LivewireState(history.state.livewire) : new LivewireState
            },
            missingState: function(event) {
                return !(event.state && event.state.livewire)
            },
            clearState: function() {
                window.history.state && (window.history.state.livewire = (new LivewireState).toStateArray())
            },
            storeInSession: function(value) {
                var key = "livewire:" + (new Date).getTime(),
                    stringifiedValue = JSON.stringify(value);
                return this.tryToStoreInSession(key, stringifiedValue), key
            },
            tryToStoreInSession: function(key, value) {
                try {
                    sessionStorage.setItem(key, value)
                } catch (error) {
                    if (![22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(error.code)) return;
                    var oldestTimestamp = Object.keys(sessionStorage).map((function(key) {
                        return Number(key.replace("livewire:", ""))
                    })).sort().shift();
                    if (!oldestTimestamp) return;
                    sessionStorage.removeItem("livewire:" + oldestTimestamp), this.tryToStoreInSession(key, value)
                }
            },
            getFromSession: function(key) {
                var item = sessionStorage.getItem(key);
                if (item) return JSON.parse(item)
            }
        },
        LivewireState = function() {
            function LivewireState() {
                var stateArray = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                _classCallCheck(this, LivewireState), this.items = stateArray
            }
            return _createClass(LivewireState, [{
                key: "toStateArray",
                value: function() {
                    return this.items
                }
            }, {
                key: "pushItemInProperOrder",
                value: function(signature, response, component) {
                    var _this = this,
                        targetItem = {
                            signature: signature,
                            response: response
                        },
                        existingIndex = this.items.findIndex((function(item) {
                            return item.signature === signature
                        }));
                    if (-1 !== existingIndex) return this.items[existingIndex] = targetItem;
                    var closestParentId = store$2.getClosestParentId(component.id, this.componentIdsWithStoredResponses());
                    if (!closestParentId) return this.items.unshift(targetItem);
                    var closestParentIndex = this.items.findIndex((function(item) {
                        if (_this.parseSignature(item.signature).originalComponentId === closestParentId) return !0
                    }));
                    this.items.splice(closestParentIndex, 0, targetItem)
                }
            }, {
                key: "storeResponse",
                value: function(response, component) {
                    var signature = this.getComponentNameBasedSignature(component);
                    this.pushItemInProperOrder(signature, response, component)
                }
            }, {
                key: "replayResponses",
                value: function(callback) {
                    var _this2 = this;
                    this.items.forEach((function(_ref) {
                        var signature = _ref.signature,
                            response = _ref.response,
                            component = _this2.findComponentBySignature(signature);
                        component && callback(response, component)
                    }))
                }
            }, {
                key: "getComponentNameBasedSignature",
                value: function(component) {
                    var componentName = component.fingerprint.name,
                        componentIndex = store$2.getComponentsByName(componentName).indexOf(component);
                    return "".concat(component.id, ":").concat(componentName, ":").concat(componentIndex)
                }
            }, {
                key: "findComponentBySignature",
                value: function(signature) {
                    var _this$parseSignature2 = this.parseSignature(signature),
                        componentName = _this$parseSignature2.componentName,
                        componentIndex = _this$parseSignature2.componentIndex,
                        sameNamedComponents = store$2.getComponentsByName(componentName);
                    return sameNamedComponents[componentIndex] || sameNamedComponents[0] || console.warn("Livewire: couldn't find component on page: ".concat(componentName))
                }
            }, {
                key: "parseSignature",
                value: function(signature) {
                    var _signature$split2 = _slicedToArray(signature.split(":"), 3);
                    return {
                        originalComponentId: _signature$split2[0],
                        componentName: _signature$split2[1],
                        componentIndex: _signature$split2[2]
                    }
                }
            }, {
                key: "componentIdsWithStoredResponses",
                value: function() {
                    var _this3 = this;
                    return this.items.map((function(_ref2) {
                        var signature = _ref2.signature;
                        return _this3.parseSignature(signature).originalComponentId
                    }))
                }
            }]), LivewireState
        }();

    function SupportStacks() {
        store$2.registerHook("message.received", (function(message, component) {
            var response = message.response;
            if (response.effects.forStack) {
                var updates = [];
                for (response.effects.forStack.forEach((function(_ref) {
                        var key = _ref.key,
                            stack = _ref.stack,
                            type = _ref.type,
                            contents = _ref.contents,
                            startEl = document.querySelector('[livewire-stack="'.concat(stack, '"]')),
                            endEl = document.querySelector('[livewire-end-stack="'.concat(stack, '"]'));
                        if (startEl && endEl && !keyHasAlreadyBeenAddedToTheStack(startEl, endEl, key)) {
                            var frag = createFragment(contents);
                            updates.push((function() {
                                return "push" === type ? (el = frag, endEl.parentElement.insertBefore(el, endEl)) : function(el) {
                                    return startEl.parentElement.insertBefore(el, startEl.nextElementSibling)
                                }(frag);
                                var el
                            }))
                        }
                    })); updates.length > 0;) updates.shift()()
            }
        }))
    }

    function keyHasAlreadyBeenAddedToTheStack(startEl, endEl, key) {
        return function findKeyMarker(el) {
            if (!el.isSameNode(endEl)) return el.matches('[livewire-stack-key="'.concat(key, '"]')) ? el : findKeyMarker(el.nextElementSibling)
        }(startEl)
    }

    function createFragment(html) {
        return document.createRange().createContextualFragment(html)
    }
    var Livewire = function() {
        function Livewire() {
            _classCallCheck(this, Livewire), this.connection = new Connection, this.components = store$2, this.devToolsEnabled = !1, this.onLoadCallback = function() {}
        }
        return _createClass(Livewire, [{
            key: "first",
            value: function() {
                return Object.values(this.components.componentsById)[0].$wire
            }
        }, {
            key: "find",
            value: function(componentId) {
                return this.components.componentsById[componentId].$wire
            }
        }, {
            key: "all",
            value: function() {
                return Object.values(this.components.componentsById).map((function(component) {
                    return component.$wire
                }))
            }
        }, {
            key: "directive",
            value: function(name, callback) {
                this.components.registerDirective(name, callback)
            }
        }, {
            key: "hook",
            value: function(name, callback) {
                this.components.registerHook(name, callback)
            }
        }, {
            key: "onLoad",
            value: function(callback) {
                this.onLoadCallback = callback
            }
        }, {
            key: "onError",
            value: function(callback) {
                this.components.onErrorCallback = callback
            }
        }, {
            key: "emit",
            value: function(event) {
                for (var _this$components, _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                (_this$components = this.components).emit.apply(_this$components, [event].concat(params))
            }
        }, {
            key: "emitTo",
            value: function(name, event) {
                for (var _this$components2, _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) params[_key2 - 2] = arguments[_key2];
                (_this$components2 = this.components).emitTo.apply(_this$components2, [name, event].concat(params))
            }
        }, {
            key: "on",
            value: function(event, callback) {
                this.components.on(event, callback)
            }
        }, {
            key: "addHeaders",
            value: function(headers) {
                this.connection.headers = _objectSpread2(_objectSpread2({}, this.connection.headers), headers)
            }
        }, {
            key: "devTools",
            value: function(enableDevtools) {
                this.devToolsEnabled = enableDevtools
            }
        }, {
            key: "restart",
            value: function() {
                this.stop(), this.start()
            }
        }, {
            key: "stop",
            value: function() {
                this.components.tearDownComponents()
            }
        }, {
            key: "start",
            value: function() {
                var _this = this;
                DOM.rootComponentElementsWithNoParents().forEach((function(el) {
                    _this.components.addComponent(new Component(el, _this.connection))
                })), this.onLoadCallback(), dispatch("livewire:load"), document.addEventListener("visibilitychange", (function() {
                    _this.components.livewireIsInBackground = document.hidden
                }), !1), this.components.initialRenderIsFinished = !0
            }
        }, {
            key: "rescan",
            value: function() {
                var _this2 = this,
                    node = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                DOM.rootComponentElementsWithNoParents(node).forEach((function(el) {
                    var componentId = wireDirectives(el).get("id").value;
                    _this2.components.hasComponent(componentId) || _this2.components.addComponent(new Component(el, _this2.connection))
                }))
            }
        }, {
            key: "onPageExpired",
            value: function(callback) {
                this.components.sessionHasExpiredCallback = callback
            }
        }]), Livewire
    }();

    function monkeyPatchDomSetAttributeToAllowAtSymbols() {
        var original = Element.prototype.setAttribute,
            hostDiv = document.createElement("div");
        Element.prototype.setAttribute = function(name, value) {
            if (!name.includes("@")) return original.call(this, name, value);
            hostDiv.innerHTML = "<span ".concat(name, '="').concat(value, '"></span>');
            var attr = hostDiv.firstElementChild.getAttributeNode(name);
            hostDiv.firstElementChild.removeAttributeNode(attr), this.setAttributeNode(attr)
        }
    }
    return window.Livewire || (window.Livewire = Livewire), monkeyPatchDomSetAttributeToAllowAtSymbols(), SyncBrowserHistory(), SupportAlpine(), SupportStacks(), FileDownloads(), OfflineStates(), LoadingStates(), DisableForms(), FileUploads(), LaravelEcho(), DirtyStates(), Polling(), dispatch("livewire:available"), Livewire
}));