// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:size.attributes.idl
// Description:Getting/setting width/height IDL attributes
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Getting/setting width/height IDL attributes");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

offscreenCanvas.width = "100";
offscreenCanvas.height = "100";
_assertSame(offscreenCanvas.width, 100, "offscreenCanvas.width", "100");
_assertSame(offscreenCanvas.height, 100, "offscreenCanvas.height", "100");
offscreenCanvas.width = "+1.5e2";
offscreenCanvas.height = "0x96";
_assertSame(offscreenCanvas.width, 150, "offscreenCanvas.width", "150");
_assertSame(offscreenCanvas.height, 150, "offscreenCanvas.height", "150");
offscreenCanvas.width = 301.999;
offscreenCanvas.height = 301.001;
_assertSame(offscreenCanvas.width, 301, "offscreenCanvas.width", "301");
_assertSame(offscreenCanvas.height, 301, "offscreenCanvas.height", "301");
offscreenCanvas.width = "400x";
offscreenCanvas.height = "foo";
_assertSame(offscreenCanvas.width, 0, "offscreenCanvas.width", "0");
_assertSame(offscreenCanvas.height, 0, "offscreenCanvas.height", "0");

t.done();

});
done();
