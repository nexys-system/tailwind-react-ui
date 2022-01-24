import { c as createCommonjsModule, a as commonjsGlobal } from './common/_commonjsHelpers-8c19dec8.js';
import { r as react } from './common/index-04edb6a1.js';
import { r as reactDom } from './common/index-3eae4d6e.js';

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_production_min;
}
});

var PopoverPortal_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverPortal = void 0;


var PopoverPortal = function (_a) {
    var container = _a.container, element = _a.element, scoutElement = _a.scoutElement, children = _a.children;
    react.useLayoutEffect(function () {
        container.appendChild(element);
        container.appendChild(scoutElement);
        return function () {
            container.removeChild(element);
            container.removeChild(scoutElement);
        };
    }, [container, element]);
    return reactDom.createPortal(children, element);
};
exports.PopoverPortal = PopoverPortal;

});

var util = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNudgedPopoverRect = exports.getNewPopoverRect = exports.popoverRectForPosition = exports.getBoundingRectNeglectingPositionalTransform = exports.createContainer = exports.targetPositionHasChanged = exports.popoverStatesAreEqual = exports.rectsAreEqual = exports.arrayUnique = exports.Constants = void 0;
exports.Constants = {
    POPOVER_CONTAINER_CLASS_NAME: 'react-tiny-popover-container',
    DEFAULT_ALIGN: 'center',
    OBSERVER_THRESHOLDS: Array(1000)
        .fill(null)
        .map(function (_, i) { return i / 1000; })
        .reverse(),
    DEFAULT_POSITIONS: ['top', 'left', 'right', 'bottom'],
    EMPTY_CLIENT_RECT: {
        top: 0,
        left: 0,
        bottom: 0,
        height: 0,
        right: 0,
        width: 0,
    },
};
var arrayUnique = function (array) {
    return array.filter(function (value, index, self) { return self.indexOf(value) === index; });
};
exports.arrayUnique = arrayUnique;
var rectsAreEqual = function (rectA, rectB) {
    return rectA === rectB ||
        ((rectA === null || rectA === void 0 ? void 0 : rectA.bottom) === (rectB === null || rectB === void 0 ? void 0 : rectB.bottom) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.height) === (rectB === null || rectB === void 0 ? void 0 : rectB.height) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.left) === (rectB === null || rectB === void 0 ? void 0 : rectB.left) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.right) === (rectB === null || rectB === void 0 ? void 0 : rectB.right) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.top) === (rectB === null || rectB === void 0 ? void 0 : rectB.top) &&
            (rectA === null || rectA === void 0 ? void 0 : rectA.width) === (rectB === null || rectB === void 0 ? void 0 : rectB.width));
};
exports.rectsAreEqual = rectsAreEqual;
var popoverStatesAreEqual = function (stateA, stateB) {
    return stateA === stateB ||
        ((stateA === null || stateA === void 0 ? void 0 : stateA.align) === (stateB === null || stateB === void 0 ? void 0 : stateB.align) &&
            (stateA === null || stateA === void 0 ? void 0 : stateA.nudgedLeft) === (stateB === null || stateB === void 0 ? void 0 : stateB.nudgedLeft) &&
            (stateA === null || stateA === void 0 ? void 0 : stateA.nudgedTop) === (stateB === null || stateB === void 0 ? void 0 : stateB.nudgedTop) &&
            stateA.padding === stateB.padding &&
            exports.rectsAreEqual(stateA === null || stateA === void 0 ? void 0 : stateA.popoverRect, stateB === null || stateB === void 0 ? void 0 : stateB.popoverRect) &&
            exports.rectsAreEqual(stateA === null || stateA === void 0 ? void 0 : stateA.childRect, stateB === null || stateB === void 0 ? void 0 : stateB.childRect) &&
            (stateA === null || stateA === void 0 ? void 0 : stateA.position) === (stateB === null || stateB === void 0 ? void 0 : stateB.position));
};
exports.popoverStatesAreEqual = popoverStatesAreEqual;
var targetPositionHasChanged = function (oldRect, newRect) {
    return oldRect === undefined ||
        oldRect.left !== newRect.left ||
        oldRect.top !== newRect.top ||
        oldRect.width !== newRect.width ||
        oldRect.height !== newRect.height;
};
exports.targetPositionHasChanged = targetPositionHasChanged;
var createContainer = function (containerStyle, containerClassName) {
    var container = window.document.createElement('div');
    if (containerClassName)
        container.className = containerClassName;
    Object.assign(container.style, containerStyle);
    return container;
};
exports.createContainer = createContainer;
var getBoundingRectNeglectingPositionalTransform = function (element) {
    if (element == null)
        return undefined;
    var el = element;
    var top = 0;
    var left = 0;
    do {
        top += el.offsetTop;
        left += el.offsetLeft;
        el = el.offsetParent;
    } while (el != null);
    var scrollTop = 0;
    var scrollLeft = 0;
    el = element;
    do {
        scrollTop += el.scrollTop;
        scrollLeft += el.scrollLeft;
        el = el.parentElement;
    } while (el != null);
    top -= scrollTop;
    left -= scrollLeft;
    var _a = element.getBoundingClientRect(), width = _a.width, height = _a.height;
    return { top: top, left: left, width: width, height: height, bottom: top + height, right: left + width };
};
exports.getBoundingRectNeglectingPositionalTransform = getBoundingRectNeglectingPositionalTransform;
var popoverRectForPosition = function (position, childRect, popoverRect, padding, align) {
    var targetMidX = childRect.left + childRect.width / 2;
    var targetMidY = childRect.top + childRect.height / 2;
    var width = popoverRect.width, height = popoverRect.height;
    var top;
    var left;
    switch (position) {
        case 'left':
            top = targetMidY - height / 2;
            left = childRect.left - padding - width;
            if (align === 'start') {
                top = childRect.top;
            }
            if (align === 'end') {
                top = childRect.bottom - height;
            }
            break;
        case 'bottom':
            top = childRect.bottom + padding;
            left = targetMidX - width / 2;
            if (align === 'start') {
                left = childRect.left;
            }
            if (align === 'end') {
                left = childRect.right - width;
            }
            break;
        case 'right':
            top = targetMidY - height / 2;
            left = childRect.right + padding;
            if (align === 'start') {
                top = childRect.top;
            }
            if (align === 'end') {
                top = childRect.bottom - height;
            }
            break;
        default:
            top = childRect.top - height - padding;
            left = targetMidX - width / 2;
            if (align === 'start') {
                left = childRect.left;
            }
            if (align === 'end') {
                left = childRect.right - width;
            }
            break;
    }
    return { top: top, left: left, width: width, height: height, right: left + width, bottom: top + height };
};
exports.popoverRectForPosition = popoverRectForPosition;
var getNewPopoverRect = function (_a, boundaryInset) {
    var position = _a.position, align = _a.align, childRect = _a.childRect, popoverRect = _a.popoverRect, boundaryRect = _a.boundaryRect, padding = _a.padding, reposition = _a.reposition;
    var rect = exports.popoverRectForPosition(position, childRect, popoverRect, padding, align);
    var boundaryViolation = reposition &&
        ((position === 'top' && rect.top < boundaryRect.top + boundaryInset) ||
            (position === 'left' && rect.left < boundaryRect.left + boundaryInset) ||
            (position === 'right' && rect.right > boundaryRect.right - boundaryInset) ||
            (position === 'bottom' && rect.bottom > boundaryRect.bottom - boundaryInset));
    return {
        rect: rect,
        boundaryViolation: boundaryViolation,
    };
};
exports.getNewPopoverRect = getNewPopoverRect;
var getNudgedPopoverRect = function (popoverRect, boundaryRect, boundaryInset) {
    var topBoundary = boundaryRect.top + boundaryInset;
    var leftBoundary = boundaryRect.left + boundaryInset;
    var rightBoundary = boundaryRect.right - boundaryInset;
    var bottomBoundary = boundaryRect.bottom - boundaryInset;
    var top = popoverRect.top < topBoundary ? topBoundary : popoverRect.top;
    top = top + popoverRect.height > bottomBoundary ? bottomBoundary - popoverRect.height : top;
    var left = popoverRect.left < leftBoundary ? leftBoundary : popoverRect.left;
    left = left + popoverRect.width > rightBoundary ? rightBoundary - popoverRect.width : left;
    return {
        top: top,
        left: left,
        width: popoverRect.width,
        height: popoverRect.height,
        right: left + popoverRect.width,
        bottom: top + popoverRect.height,
    };
};
exports.getNudgedPopoverRect = getNudgedPopoverRect;

});

var useElementRef_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.useElementRef = void 0;


var useElementRef = function (containerClassName, containerStyle) {
    var element = react.useMemo(function () { return util.createContainer(containerStyle, containerClassName); }, [containerClassName, containerStyle]);
    return react.useRef(element);
};
exports.useElementRef = useElementRef;

});

var usePopover_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePopover = void 0;



var usePopover = function (_a) {
    var childRef = _a.childRef, positions = _a.positions, containerClassName = _a.containerClassName, parentElement = _a.parentElement, contentLocation = _a.contentLocation, align = _a.align, padding = _a.padding, reposition = _a.reposition, boundaryInset = _a.boundaryInset, boundaryElement = _a.boundaryElement, onPositionPopover = _a.onPositionPopover;
    var popoverRef = useElementRef_1.useElementRef(containerClassName, {
        position: 'fixed',
        overflow: 'visible',
        top: '0px',
        left: '0px',
    });
    var scoutRef = useElementRef_1.useElementRef('react-tiny-popover-scout', {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '0px',
        height: '0px',
        visibility: 'hidden',
    });
    var positionPopover = react.useCallback(function (_a) {
        var _b, _c;
        var _d = _a === void 0 ? {} : _a, _e = _d.positionIndex, positionIndex = _e === void 0 ? 0 : _e, _f = _d.parentRect, parentRect = _f === void 0 ? parentElement.getBoundingClientRect() : _f, _g = _d.childRect, childRect = _g === void 0 ? (_b = childRef === null || childRef === void 0 ? void 0 : childRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect() : _g, _h = _d.scoutRect, scoutRect = _h === void 0 ? (_c = scoutRef === null || scoutRef === void 0 ? void 0 : scoutRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect() : _h, _j = _d.popoverRect, popoverRect = _j === void 0 ? popoverRef.current.getBoundingClientRect() : _j, _k = _d.boundaryRect, boundaryRect = _k === void 0 ? boundaryElement === parentElement
            ? parentRect
            : boundaryElement.getBoundingClientRect() : _k;
        if (!childRect || !parentRect) {
            return;
        }
        if (contentLocation) {
            var _l = typeof contentLocation === 'function'
                ? contentLocation({
                    childRect: childRect,
                    popoverRect: popoverRect,
                    parentRect: parentRect,
                    boundaryRect: boundaryRect,
                    padding: padding,
                    nudgedTop: 0,
                    nudgedLeft: 0,
                    boundaryInset: boundaryInset,
                })
                : contentLocation, inputTop = _l.top, inputLeft = _l.left;
            var left_1 = parentRect.left + inputLeft;
            var top_1 = parentRect.top + inputTop;
            popoverRef.current.style.transform = "translate(" + (left_1 - scoutRect.left) + "px, " + (top_1 - scoutRect.top) + "px)";
            onPositionPopover({
                childRect: childRect,
                popoverRect: popoverRect,
                parentRect: parentRect,
                boundaryRect: boundaryRect,
                padding: padding,
                nudgedTop: 0,
                nudgedLeft: 0,
                boundaryInset: boundaryInset,
            });
            return;
        }
        var isExhausted = positionIndex === positions.length;
        var position = isExhausted ? positions[0] : positions[positionIndex];
        var _m = util.getNewPopoverRect({
            childRect: childRect,
            popoverRect: popoverRect,
            boundaryRect: boundaryRect,
            position: position,
            align: align,
            padding: padding,
            reposition: reposition,
        }, boundaryInset), rect = _m.rect, boundaryViolation = _m.boundaryViolation;
        if (boundaryViolation && reposition && !isExhausted) {
            positionPopover({
                positionIndex: positionIndex + 1,
                childRect: childRect,
                popoverRect: popoverRect,
                parentRect: parentRect,
                boundaryRect: boundaryRect,
            });
            return;
        }
        var top = rect.top, left = rect.left, width = rect.width, height = rect.height;
        var shouldNudge = reposition && !isExhausted;
        var _o = util.getNudgedPopoverRect(rect, boundaryRect, boundaryInset), nudgedLeft = _o.left, nudgedTop = _o.top;
        var finalTop = top;
        var finalLeft = left;
        if (shouldNudge) {
            finalTop = nudgedTop;
            finalLeft = nudgedLeft;
        }
        popoverRef.current.style.transform = "translate(" + (finalLeft - scoutRect.left) + "px, " + (finalTop - scoutRect.top) + "px)";
        onPositionPopover({
            childRect: childRect,
            popoverRect: {
                top: finalTop,
                left: finalLeft,
                width: width,
                height: height,
                right: finalLeft + width,
                bottom: finalTop + height,
            },
            parentRect: parentRect,
            boundaryRect: boundaryRect,
            position: position,
            align: align,
            padding: padding,
            nudgedTop: nudgedTop - top,
            nudgedLeft: nudgedLeft - left,
            boundaryInset: boundaryInset,
        });
    }, [
        parentElement,
        childRef,
        popoverRef,
        boundaryElement,
        contentLocation,
        positions,
        align,
        padding,
        reposition,
        boundaryInset,
        onPositionPopover,
    ]);
    return {
        positionPopover: positionPopover,
        popoverRef: popoverRef,
        scoutRef: scoutRef,
    };
};
exports.usePopover = usePopover;

});

var useMemoizedArray_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMemoizedArray = void 0;

var useMemoizedArray = function (externalArray) {
    var prevArrayRef = react.useRef(externalArray);
    var array = react.useMemo(function () {
        if (prevArrayRef.current === externalArray)
            return prevArrayRef.current;
        if (prevArrayRef.current.length !== externalArray.length) {
            prevArrayRef.current = externalArray;
            return externalArray;
        }
        for (var i = 0; i < externalArray.length; i += 1) {
            if (externalArray[i] !== prevArrayRef.current[i]) {
                prevArrayRef.current = externalArray;
                return externalArray;
            }
        }
        return prevArrayRef.current;
    }, [externalArray]);
    return array;
};
exports.useMemoizedArray = useMemoizedArray;

});

var useArrowContainer_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useArrowContainer = void 0;

var useArrowContainer = function (_a) {
    var childRect = _a.childRect, popoverRect = _a.popoverRect, position = _a.position, arrowSize = _a.arrowSize, arrowColor = _a.arrowColor;
    var arrowContainerStyle = react.useMemo(function () {
        return ({
            padding: arrowSize,
        });
    }, [arrowSize]);
    var arrowStyle = react.useMemo(function () {
        return (__assign({ position: 'absolute' }, (function () {
            var arrowWidth = arrowSize * 2;
            var top = childRect.top - popoverRect.top + childRect.height / 2 - arrowWidth / 2;
            var left = childRect.left - popoverRect.left + childRect.width / 2 - arrowWidth / 2;
            var lowerBound = arrowSize;
            var leftUpperBound = popoverRect.width - arrowSize;
            var topUpperBound = popoverRect.height - arrowSize;
            left = left < lowerBound ? lowerBound : left;
            left = left + arrowWidth > leftUpperBound ? leftUpperBound - arrowWidth : left;
            top = top < lowerBound ? lowerBound : top;
            top = top + arrowWidth > topUpperBound ? topUpperBound - arrowWidth : top;
            top = Number.isNaN(top) ? 0 : top;
            left = Number.isNaN(left) ? 0 : left;
            switch (position) {
                case 'right':
                    return {
                        borderTop: arrowSize + "px solid transparent",
                        borderBottom: arrowSize + "px solid transparent",
                        borderRight: arrowSize + "px solid " + arrowColor,
                        left: 0,
                        top: top,
                    };
                case 'left':
                    return {
                        borderTop: arrowSize + "px solid transparent",
                        borderBottom: arrowSize + "px solid transparent",
                        borderLeft: arrowSize + "px solid " + arrowColor,
                        right: 0,
                        top: top,
                    };
                case 'bottom':
                    return {
                        borderLeft: arrowSize + "px solid transparent",
                        borderRight: arrowSize + "px solid transparent",
                        borderBottom: arrowSize + "px solid " + arrowColor,
                        top: 0,
                        left: left,
                    };
                case 'top':
                    return {
                        borderLeft: arrowSize + "px solid transparent",
                        borderRight: arrowSize + "px solid transparent",
                        borderTop: arrowSize + "px solid " + arrowColor,
                        bottom: 0,
                        left: left,
                    };
                default:
                    return {
                        display: 'hidden',
                    };
            }
        })()));
    }, [
        arrowColor,
        arrowSize,
        childRect.height,
        childRect.left,
        childRect.top,
        childRect.width,
        popoverRect.height,
        popoverRect.left,
        popoverRect.top,
        popoverRect.width,
        position,
    ]);
    return {
        arrowContainerStyle: arrowContainerStyle,
        arrowStyle: arrowStyle,
    };
};
exports.useArrowContainer = useArrowContainer;

});

var ArrowContainer_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowContainer = void 0;



var ArrowContainer = function (_a) {
    var childRect = _a.childRect, popoverRect = _a.popoverRect, position = _a.position, arrowColor = _a.arrowColor, arrowSize = _a.arrowSize, arrowClassName = _a.arrowClassName, externalArrowStyle = _a.arrowStyle, className = _a.className, children = _a.children, externalArrowContainerStyle = _a.style;
    var _b = useArrowContainer_1.useArrowContainer({
        childRect: childRect,
        popoverRect: popoverRect,
        position: position,
        arrowColor: arrowColor,
        arrowSize: arrowSize,
    }), arrowContainerStyle = _b.arrowContainerStyle, arrowStyle = _b.arrowStyle;
    var mergedContainerStyle = react.useMemo(function () { return (__assign(__assign({}, arrowContainerStyle), externalArrowContainerStyle)); }, [arrowContainerStyle, externalArrowContainerStyle]);
    var mergedArrowStyle = react.useMemo(function () { return (__assign(__assign({}, arrowStyle), externalArrowStyle)); }, [arrowStyle, externalArrowStyle]);
    return (jsxRuntime.jsxs("div", __assign({ className: className, style: mergedContainerStyle }, { children: [jsxRuntime.jsx("div", { style: mergedArrowStyle, className: arrowClassName }, void 0), children] }), void 0));
};
exports.ArrowContainer = ArrowContainer;

});

var Popover = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = exports.usePopover = exports.ArrowContainer = exports.useArrowContainer = void 0;





Object.defineProperty(exports, "usePopover", { enumerable: true, get: function () { return usePopover_1.usePopover; } });


Object.defineProperty(exports, "useArrowContainer", { enumerable: true, get: function () { return useArrowContainer_1.useArrowContainer; } });

Object.defineProperty(exports, "ArrowContainer", { enumerable: true, get: function () { return ArrowContainer_1.ArrowContainer; } });
var PopoverInternal = react.forwardRef(function (_a, externalRef) {
    var isOpen = _a.isOpen, children = _a.children, content = _a.content, _b = _a.positions, externalPositions = _b === void 0 ? util.Constants.DEFAULT_POSITIONS : _b, _c = _a.align, align = _c === void 0 ? util.Constants.DEFAULT_ALIGN : _c, _d = _a.padding, padding = _d === void 0 ? 0 : _d, _e = _a.reposition, reposition = _e === void 0 ? true : _e, _f = _a.parentElement, parentElement = _f === void 0 ? window.document.body : _f, _g = _a.boundaryElement, boundaryElement = _g === void 0 ? parentElement : _g, _h = _a.containerClassName, containerClassName = _h === void 0 ? 'react-tiny-popover-container' : _h, containerStyle = _a.containerStyle, contentLocation = _a.contentLocation, _j = _a.boundaryInset, boundaryInset = _j === void 0 ? 0 : _j, onClickOutside = _a.onClickOutside;
    var positions = useMemoizedArray_1.useMemoizedArray(externalPositions);
    // TODO: factor prevs out into a custom prevs hook
    var prevIsOpen = react.useRef(false);
    var prevPositions = react.useRef();
    var prevContentLocation = react.useRef();
    var prevReposition = react.useRef(reposition);
    var childRef = react.useRef();
    var _k = react.useState({
        align: align,
        nudgedLeft: 0,
        nudgedTop: 0,
        position: positions[0],
        padding: padding,
        childRect: util.Constants.EMPTY_CLIENT_RECT,
        popoverRect: util.Constants.EMPTY_CLIENT_RECT,
        parentRect: util.Constants.EMPTY_CLIENT_RECT,
        boundaryRect: util.Constants.EMPTY_CLIENT_RECT,
        boundaryInset: boundaryInset,
    }), popoverState = _k[0], setPopoverState = _k[1];
    var onPositionPopover = react.useCallback(function (popoverState) { return setPopoverState(popoverState); }, []);
    var _l = usePopover_1.usePopover({
        childRef: childRef,
        containerClassName: containerClassName,
        parentElement: parentElement,
        boundaryElement: boundaryElement,
        contentLocation: contentLocation,
        positions: positions,
        align: align,
        padding: padding,
        boundaryInset: boundaryInset,
        reposition: reposition,
        onPositionPopover: onPositionPopover,
    }), positionPopover = _l.positionPopover, popoverRef = _l.popoverRef, scoutRef = _l.scoutRef;
    react.useLayoutEffect(function () {
        var shouldUpdate = true;
        var updatePopover = function () {
            var _a, _b;
            if (isOpen && shouldUpdate) {
                var childRect = (_a = childRef === null || childRef === void 0 ? void 0 : childRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                var popoverRect = (_b = popoverRef === null || popoverRef === void 0 ? void 0 : popoverRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
                if (childRect != null &&
                    popoverRect != null &&
                    (!util.rectsAreEqual(childRect, {
                        top: popoverState.childRect.top,
                        left: popoverState.childRect.left,
                        width: popoverState.childRect.width,
                        height: popoverState.childRect.height,
                        bottom: popoverState.childRect.top + popoverState.childRect.height,
                        right: popoverState.childRect.left + popoverState.childRect.width,
                    }) ||
                        popoverRect.width !== popoverState.popoverRect.width ||
                        popoverRect.height !== popoverState.popoverRect.height ||
                        popoverState.padding !== padding ||
                        popoverState.align !== align ||
                        positions !== prevPositions.current ||
                        contentLocation !== prevContentLocation.current ||
                        reposition !== prevReposition.current)) {
                    positionPopover();
                }
                // TODO: factor prev checks out into the custom prevs hook
                if (positions !== prevPositions.current) {
                    prevPositions.current = positions;
                }
                if (contentLocation !== prevContentLocation.current) {
                    prevContentLocation.current = contentLocation;
                }
                if (reposition !== prevReposition.current) {
                    prevReposition.current = reposition;
                }
                if (shouldUpdate) {
                    window.requestAnimationFrame(updatePopover);
                }
            }
            prevIsOpen.current = isOpen;
        };
        window.requestAnimationFrame(updatePopover);
        return function () {
            shouldUpdate = false;
        };
    }, [
        align,
        contentLocation,
        isOpen,
        padding,
        popoverRef,
        popoverState.align,
        popoverState.childRect.height,
        popoverState.childRect.left,
        popoverState.childRect.top,
        popoverState.childRect.width,
        popoverState.padding,
        popoverState.popoverRect.height,
        popoverState.popoverRect.width,
        positionPopover,
        positions,
        reposition,
    ]);
    react.useEffect(function () {
        var popoverElement = popoverRef.current;
        Object.assign(popoverElement.style, containerStyle);
        return function () {
            Object.keys(containerStyle !== null && containerStyle !== void 0 ? containerStyle : {}).forEach(function (key) {
                return delete popoverElement.style[key];
            });
        };
    }, [containerStyle, isOpen, popoverRef]);
    var handleOnClickOutside = react.useCallback(function (e) {
        var _a, _b;
        if (isOpen &&
            !((_a = popoverRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) &&
            !((_b = childRef.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
            onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(e);
        }
    }, [isOpen, onClickOutside, popoverRef]);
    var handleWindowResize = react.useCallback(function () {
        if (childRef.current) {
            window.requestAnimationFrame(function () { return positionPopover(); });
        }
    }, [positionPopover]);
    react.useEffect(function () {
        window.addEventListener('click', handleOnClickOutside);
        window.addEventListener('resize', handleWindowResize);
        return function () {
            window.removeEventListener('click', handleOnClickOutside);
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleOnClickOutside, handleWindowResize]);
    var handleRef = react.useCallback(function (node) {
        childRef.current = node;
        if (externalRef != null) {
            if (typeof externalRef === 'object') {
                externalRef.current = node;
            }
            else if (typeof externalRef === 'function') {
                externalRef(node);
            }
        }
    }, [externalRef]);
    var renderChild = function () {
        return react.cloneElement(children, {
            ref: handleRef,
        });
    };
    var renderPopover = function () {
        if (!isOpen)
            return null;
        return (jsxRuntime.jsx(PopoverPortal_1.PopoverPortal, __assign({ element: popoverRef.current, scoutElement: scoutRef.current, container: parentElement }, { children: typeof content === 'function' ? content(popoverState) : content }), void 0));
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [renderChild(), renderPopover()] }, void 0));
});
exports.Popover = react.forwardRef(function (props, ref) {
    if (typeof window === 'undefined')
        return props.children;
    return jsxRuntime.jsx(PopoverInternal, __assign({}, props, { ref: ref }), void 0);
});

});

var ArrowContainer = Popover.ArrowContainer;
var Popover$1 = Popover.Popover;
export { ArrowContainer, Popover$1 as Popover };
