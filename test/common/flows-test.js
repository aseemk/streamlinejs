/*** Generated by streamline 0.1.44rt1 - DO NOT EDIT ***/ var __rt=require('streamline/lib/compiler/runtime')(__filename),__func=__rt.__func,__cb=__rt.__cb,__propagate=__rt.__propagate,__trap=__rt.__trap,__future=__rt.__future,__setEF=__rt.__setEF,__g=__rt.__g; var module = QUnit.module;

var flows = require("streamline/lib/util/flows");

function delay(_, val) { var __frame = { name: "delay", line: 5 }; return __func(_, this, arguments, delay, 0, __frame, function __$delay() {
 return flows.nextTick(__cb(_, __frame, 1, 1, function __$delay() {
 return _(null, val); })); });};


function delayFail(_, err) { var __frame = { name: "delayFail", line: 10 }; return __func(_, this, arguments, delayFail, 0, __frame, function __$delayFail() {
 return flows.nextTick(__cb(_, __frame, 1, 1, function __$delayFail() {
 return _(err); })); });};


module("flows");

asyncTest("each", 1, function __1(_) { var result; var __frame = { name: "__1", line: 17 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
 result = 1;
 return flows.each(__cb(_, __frame, 2, 1, function __$__1() {


 strictEqual(result, 24);
 start(); _(); }), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 19 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 20, function ___(__0, __1) { result = (result * __1); _(); }), val); }); }); });});

asyncTest("map", 1, function __2(_) { var result; var __frame = { name: "__2", line: 25 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() {
 return flows.map(__cb(_, __frame, 1, 14, function ___(__0, __2) { result = __2;


 deepEqual(result, [2,4,6,8,]);
 start(); _(); }), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 26 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (2 * __2); return _(null, __1); }), val); }); }); });});

asyncTest("filter", 1, function __3(_) { var result; var __frame = { name: "__3", line: 32 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() {
 return flows.filter(__cb(_, __frame, 1, 14, function ___(__0, __2) { result = __2;


 deepEqual(result, [1,3,]);
 start(); _(); }), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 33 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 % 2); return _(null, __1); }), val); }); }); });});

asyncTest("every", 1, function __4(_) { var result; var __frame = { name: "__4", line: 39 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() {
 return flows.every(__cb(_, __frame, 1, 14, function ___(__0, __2) { result = __2;


 strictEqual(result, true);
 start(); _(); }), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 40 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 5); return _(null, __1); }), val); }); }); });});

asyncTest("every", 1, function __5(_) { var result; var __frame = { name: "__5", line: 46 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() {
 return flows.every(__cb(_, __frame, 1, 14, function ___(__0, __2) { result = __2;


 strictEqual(result, false);
 start(); _(); }), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 47 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }), val); }); }); });});

asyncTest("some", 1, function __6(_) { var result; var __frame = { name: "__6", line: 53 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() {
 return flows.some(__cb(_, __frame, 1, 14, function ___(__0, __2) { result = __2;


 strictEqual(result, true);
 start(); _(); }), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 54 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }), val); }); }); });});

asyncTest("some", 1, function __7(_) { var result; var __frame = { name: "__7", line: 60 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() {
 return flows.some(__cb(_, __frame, 1, 14, function ___(__0, __2) { result = __2;


 strictEqual(result, false);
 start(); _(); }), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 61 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 0); return _(null, __1); }), val); }); }); });});

asyncTest("reduce", 1, function __8(_) { var result; var __frame = { name: "__8", line: 67 }; return __func(_, this, arguments, __8, 0, __frame, function __$__8() {
 return flows.reduce(__cb(_, __frame, 1, 14, function ___(__0, __2) { result = __2;


 strictEqual(result, 24);
 start(); _(); }), [1,2,3,4,], function __1(_, v, val) { var __frame = { name: "__1", line: 68 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (v * __2); return _(null, __1); }), val); }); }, 1); });});

asyncTest("reduceRight", 1, function __9(_) { var result; var __frame = { name: "__9", line: 74 }; return __func(_, this, arguments, __9, 0, __frame, function __$__9() {
 return flows.reduceRight(__cb(_, __frame, 1, 14, function ___(__0, __2) { result = __2;


 strictEqual(result, 24);
 start(); _(); }), [1,2,3,4,], function __1(_, v, val) { var __frame = { name: "__1", line: 75 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (v * __2); return _(null, __1); }), val); }); }, 1); });});

asyncTest("sort", 3, function __10(_) { var array; var __frame = { name: "__10", line: 81 }; return __func(_, this, arguments, __10, 0, __frame, function __$__10() {
 array = [1,2,3,4,];
 return flows.sort(__cb(_, __frame, 2, 1, function __$__10() {


 deepEqual(array, [1,2,3,4,], "In order array sort ok");
 array = [4,3,2,1,];
 return flows.sort(__cb(_, __frame, 7, 1, function __$__10() {


 deepEqual(array, [1,2,3,4,], "Reverse array sort ok");
 array = [1,4,2,3,];
 return flows.sort(__cb(_, __frame, 12, 1, function __$__10() {


 deepEqual(array, [1,2,3,4,], "Random array sort ok");
 start(); _(); }), array, function __3(_, a, b) { var __frame = { name: "__3", line: 93 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 9, _), (a - b)); }); }); }), array, function __2(_, a, b) { var __frame = { name: "__2", line: 88 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 9, _), (a - b)); }); }); }), array, function __1(_, a, b) { var __frame = { name: "__1", line: 83 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, _), (a - b)); }); }); });});

asyncTest("collectAll", 4, function __11(_) { var total, peak, count, results;



 function doIt(i) {
 return function __1(_) { var __frame = { name: "__1", line: 104 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
 count++;
 peak = Math.max(count, peak);
 return delay(__cb(_, __frame, 3, 12, function ___(__0, __1) { total += __1;
 count--;
 return _(null, (2 * i)); }), i); }); }; }; var __frame = { name: "__11", line: 99 }; return __func(_, this, arguments, __11, 0, __frame, function __$__11() { total = 0; peak = 0; count = 0;



 return flows.spray([doIt(1),doIt(2),doIt(3),]).collectAll(__cb(_, __frame, 14, 15, function ___(__0, __1) { results = __1;
 equal(total, 6);
 ok((peak >= 2));
 equal(count, 0);
 deepEqual(results, [2,4,6,]);
 start(); _(); })); });});

asyncTest("collectOne", 4, function __12(_) { var total, peak, count, result;



 function doIt(i) {
 return function __1(_) { var __frame = { name: "__1", line: 125 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
 count++;
 peak = Math.max(count, peak);
 return delay(__cb(_, __frame, 3, 12, function ___(__0, __1) { total += __1;
 count--;
 return _(null, (2 * i)); }), i); }); }; }; var __frame = { name: "__12", line: 120 }; return __func(_, this, arguments, __12, 0, __frame, function __$__12() { total = 0; peak = 0; count = 0;



 return flows.spray([doIt(1),doIt(2),doIt(3),]).collectOne(__cb(_, __frame, 14, 14, function ___(__0, __1) { result = __1;
 ok(((total == 1) || (total == 2)));
 ok((peak >= 2));
 ok((count > 0));
 ok(((result == 2) || (result == 4)));
 start(); _(); })); });});

asyncTest("collectAll with limit", 1, function __13(_) { var total, peak, count, results;



 function doIt(i) {
 return function __1(_) { var __frame = { name: "__1", line: 146 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
 count++;
 peak = Math.max(count, peak);
 return delay(__cb(_, __frame, 3, 12, function ___(__0, __1) { total += __1;
 count--;
 return _(null, (2 * i)); }), i); }); }; }; var __frame = { name: "__13", line: 141 }; return __func(_, this, arguments, __13, 0, __frame, function __$__13() { total = 0; peak = 0; count = 0;



 return flows.spray([doIt(1),doIt(2),doIt(3),], 2).collectAll(__cb(_, __frame, 14, 15, function ___(__0, __1) { results = __1;
 deepEqual([total,peak,count,results,], [6,2,0,[2,4,6,],]);
 start(); _(); })); });});

asyncTest("contexts", 3, function __14(_) { var result;
 function testContext(_, x) { var y; var __frame = { name: "testContext", line: 160 }; return __func(_, this, arguments, testContext, 0, __frame, function __$testContext() {
 flows.setContext({
 val: x });

 return delay(__cb(_, __frame, 4, 10, function ___(__0, __1) { y = __1;
 strictEqual(y, (2 * flows.getContext().val));
 return _(null, (y + 1)); }), (2 * x)); }); }; var __frame = { name: "__14", line: 159 }; return __func(_, this, arguments, __14, 0, __frame, function __$__14() {











 return flows.spray([function __1(_) { var __frame = { name: "__1", line: 170 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return testContext(__cb(_, __frame, 1, 9, _), 3); }); },function __2(_) { var __frame = { name: "__2", line: 174 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return testContext(__cb(_, __frame, 1, 9, _), 5); }); },]).collectAll(__cb(_, __frame, 19, 14, function ___(__0, __3) { result = __3;
 deepEqual(result, [7,11,]);
 start(); _(); })); });});