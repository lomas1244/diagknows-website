(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1132F").s().p("A3kikQar0TUeUTI3lPSg");
	this.shape.setTransform(0,0,0.806,0.557);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.7,-45.3,243.4,90.7);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB122D").s().p("EgHpAshQijhHhEiLQg9h5ADi/QADjiAAnOQgCnIAEjpQAChmgngmQglglhnABQjpAEnHgBQnPgBjiADQi+ADh5g8QiLhGhIiiIAAvTQBIiiCLhGQB5g8C+ADQDiAEHPgCQHHgBDpAEQBnACAlgmQAnglgChnQgEjpACnIQAAnOgDjiQgDi/A9h5QBEiLCjhHIPSAAQCjBHBFCLQA9B6gDC+QgEDiABHOQACHJgEDoQgCBnAmAlQAmAmBngCQDogEHIABQHOACDjgEQC+gDB5A8QCLBGBICiIAAPTQhICiiLBGQh5A8i+gDQjjgDnOABQnIABjogEQhngBgmAlQgmAmACBmQAEDpgCHIQgBHOAEDiQADC+g9B6QhFCLijBHg");
	this.shape.setTransform(-7.3,-11.9,0.659,0.659);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C1132F").ss(15).p("EAZ0A7SMgznAAAQm0AAmOioQmAijkpkoQkokoijmBQiomOAAmzMAAAgzoQAAm0ComOQCjmAEokpQEpkoGAijQGOioG0AAMAznAAAQG0AAGOCoQGACjEpEoQEoEpCjGAQCoGOAAG0MAAAAzoQAAGzioGOQijGBkoEoQkpEomACjQmOCom0AAg");
	this.shape_1.setTransform(0,0,0.659,0.659);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgZzA7SQm0AAmOioQmAijkpkoQkokoijmBQiomOAAmzMAAAgzoQAAm0ComOQCjmAEokpQEpkoGAijQGOioG0AAMAznAAAQG0AAGOCoQGACjEpEoQEoEpCjGAQCoGOAAG0MAAAAzoQAAGzioGOQijGBkoEoQkpEomACjQmOCom0AAg");
	this.shape_2.setTransform(0,0,0.659,0.659);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-274.9,532.5,541.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ApgROMAAAgibISoAAIgkDzItVAAIAALPILlAAIAADzIrlAAIAALzIOSAAIAADzg");
	this.shape.setTransform(1328,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ApcROMAAAgibIEvAAIAAeSIOKAAIgkEJg");
	this.shape_1.setTransform(1168.2,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ArNROMAAAgibIJCAAQDJAACdAoQCgAqBtBVQBwBUA6CAQA8CCAACsIgQCwIgwCVQg/CEh1BZQhwBUigAqQiXApi6AAIkXAAIAAMpgAmeA0IEJAAQCDAABcgUQBngXBFgxQBJg3AkhbQAnheABiJQAAh4gmhZQgkhThIg3QhFgzhlgZQhfgZh+AAIkQAAg");
	this.shape_2.setTransform(993.7,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AjFRjQhggThUgkQhWgmhJg2QhKg3g9hIQg+hIgxhZQgwhZghhpQghhrgRh5IgRkFIARkAQARh6AhhrQAhhqAwhaQAxhZA+hKQA9hJBKg5QBJg4BWglQBUgnBggTQBfgUBmAAQBnAABgASQBfATBUAmQBWAjBKA3QBJA4A9BIQA+BIAvBZQAxBbAhBqQAiBsAQB6IASEEIgSEDQgQB4giBrQghBqgxBZQgvBZg+BJQg9BIhJA5QhKA2hWAmQhUAlhfATQhgAUhnAAQhmAAhfgSgAj6tIQhxA1hOBqQhRBvgrCnQgrCvAADpQAADpAtCuQAqClBTBuQBOBoByA0QBsAwCKAAQCOAABugyQBygyBMhoQBShuAoinQAsitAAjsQAAjogqiuQgpinhQhtQhOhqhyg1QhtgyiQAAQiNAAhtAyg");
	this.shape_3.setTransform(779.2,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("ApgROMAAAgibISoAAIgkDzItVAAIAALPILlAAIAADzIrlAAIAALzIOSAAIAADzg");
	this.shape_4.setTransform(590.2,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ArNROMAAAgibIJCAAQDIAACfAoQCeAqBuBVQBwBUA6CAQA8CCAACsIgQCwIgwCVQg/CEh1BZQhwBUigAqQiXApi6AAIkXAAIAAMpgAmeA0IEKAAQCBAABdgUQBngXBFgxQBKg3AkhbQAnhegBiJQAAh4glhZQgkhThIg3QhEgzhmgZQhfgZh+AAIkQAAg");
	this.shape_5.setTransform(415.2,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AFvROIuA9PQAqHEAAGYIAAPzIkdAAMAAAgibIGNAAIOIdSQgpmUAAkMIAAyyIEdAAMAAAAibg");
	this.shape_6.setTransform(117.3,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AjFRjQhggThUgkQhWgmhJg2QhKg3g9hIQg+hIgxhZQgwhZghhpQghhrgRh5IgRkFIARkAQARh6AhhrQAhhqAwhaQAxhZA+hKQA9hJBKg5QBJg4BWglQBUgnBggTQBfgUBmAAQBnAABgASQBfATBUAmQBWAjBKA3QBJA4A9BIQA+BIAvBZQAxBbAhBqQAiBsAQB6IASEEIgSEDQgQB4giBrQghBqgxBZQgvBZg+BJQg9BIhJA5QhKA2hWAmQhUAlhfATQhgAUhnAAQhmAAhfgSgAj6tIQhxA1hOBqQhRBvgrCnQgrCvAADpQAADpAtCuQAqClBTBuQBOBoByA0QBsAwCKAAQCOAABugyQBygyBMhoQBShuAoinQAsitAAjsQAAjogqiuQgpinhQhtQhOhqhyg1QhtgyiQAAQiNAAhtAyg");
	this.shape_7.setTransform(-102.6,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AiYROMAAAgibIExAAMAAAAibg");
	this.shape_8.setTransform(-260.7,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("ApcROMAAAgibIEwAAIAAeSIOJAAIgkEJg");
	this.shape_9.setTransform(-374.9,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("ApbROMAAAgibIEuAAIAAeSIOJAAIgjEJg");
	this.shape_10.setTransform(-534.3,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AiYROMAAAgibIExAAMAAAAibg");
	this.shape_11.setTransform(-674.1,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("ArjROMAAAgibIIJAAQDPAACcAgQChAjBvBDQBxBFA4BoQA7BrABCOQAABigjBWQghBQg7A+Qg4A9hMApQhJAnhTARQBrARBRAhQBgAlBEA4QBLBCAnBcQArBlAACHQAACqhAB7Qg8B3h5BLQhwBIiiAiQibAhjGAAgAm1NbIExAAQCCAABbgPQBpgRBGgoQBNgsAmhKQAphOABhzQAAhxgohTQgmhMhHgyQhCgthcgYQhUgUhoAAIlrAAgAm1inIFNAAQBeAABPgXQBPgWA8guQA9gtAfhCQAihEAAhVQAAhkgkhEQgihBhEgnQhBglhkgQIjagOIj6AAg");
	this.shape_12.setTransform(-809.9,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("ACxQ/IAAoQIuTAAIAAjTIKE2aID0BnIpBUdIJfAAIAZpAIEAAAIAAJAIEWAAIAADpIkWAAIAAIQg");
	this.shape_13.setTransform(-1084.3,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AidCdQhBhCABhdQgBhbBBhBQBAhABdAAQBfAAA/BAQBABBAABbQAABdhABCQg/BChfgBQhdABhAhCg");
	this.shape_14.setTransform(-1209.6,95.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("ApxQ/IAAjrIHRnsQC+jRBgiFQBpiNArh1QAohxAAiGQAAhTgbhDQgXhAgxgvQgugthAgZQhCgYhMAAQiEAAhmA4QhfA1hrB9IjGiaQBChRBIg8QBIg9BQgoQBRgpBYgUQBbgVBkAAQCQAAB6AuQB0ArBWBQQBVBQAsBqQAuBsAAB7QAACWg0CIQgwCIhvCYQhmCNi1DDImhGuIPBAAIgjD3g");
	this.shape_15.setTransform(-1331,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1429.9,-228.5,2859.9,457.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6D6E71").ss(42.9).p("Eg7ghLcMB3BCW5");
	this.shape.setTransform(273.5,346.7,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-21.4,-21.4,589.9,736.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6D6E71").ss(42.9).p("EA7hhLcMh3BCW5");
	this.shape.setTransform(273.5,346.7,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-21.4,-21.4,589.9,736.3), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtRfbQmHimkukuQkukuimmHQismWAAm8QAAm7CsmWQCmmHEukuQEukuGHimQGWisG7AAQG8AAGWCsQGHCmEvEuQEtEtCmGIQCsGWAAG7QAAG8isGWQimGHktEuQkvEvmHClQmWCsm8AAQm7AAmWisg");
	this.shape.setTransform(218.3,218.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,436.5,436.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtRfbQmHimkuktQkukvimmHQirmWAAm8QAAm7CrmWQCmmHEukuQEukuGHimQGWisG7AAQG8AAGVCsQGICmEuEuQEuEuCmGHQCrGWAAG7QAAG8irGWQimGHkuEvQkuEtmICmQmVCsm8AAQm7AAmWisg");
	this.shape.setTransform(218.2,218.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,436.5,436.5), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D3D4").s().p("EiDrAhRMAAAhCiMEHXAAAMAAABCig");
	this.shape_1.setTransform(15.6,213);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(-827.2,0,1685.7,425.9), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgI+Ao4QkVg9kAh0QETglE2hhQE4hkFGi8QCNBVClAAQDQABCciHQCdiHAqjEQIIhnFzi+QFyi+EBjWQiNF7j3FCQj5FClHDkQlIDmmHCAQmGCBmuAAQktAAkRg+gEgaYAgeQk0j9jak/QjdlCh6mBQCyCgDfCSQDfCSEQB4QESB4FJBVQFIBVGEAlQA3AHA3ACQA0AEA7AAQnYD7mQBDQk7A1j6AAQhEAAg+gEgAjSUtIhfgGQndgrl5h6Ql3h6khimQkgiljPjBQjOi/iPi5QgGgfAAghIAAhMQCagMEDgiQEBgiEchMQEdhMEyh7QEwh7EGi9QA3AZA6APQA5APBFAAQBEAAA/gTQA+gRBAggQC4C/DzC3QCgB7CnBPQCrBQCvA2QBDCrCTBcQiwG3k/FSQhEgxhVgeQhVgfhdAAQi+AAiMBrQiMBrhDCfgAWJMuQB3jTBWjjQCAgMBrg9QBrg9BKhiQC4gMCZgQQCcgOCPgaQAAAmgDAnQgDAoAAArQhLBkh/CBQiCCFi8CIQi7CJj+CCQj7CBk+BVQCgi/B3jSgEAgFgHrQhGhuhohEQAllAADkzQADk3gZkSQE5E5DDGNQDEGOA3HLQjoAxkgASQgMiGhHhugAMlnmQhrg2hohQQh2hXhhhVQhlhYhShTQAxh0AAh0QAAhpglhoQEmldCWkrQCXktA2ixQFXB1ETC4QArE6AMF5QAMF3grGZQifASiABlQiBBlg3CSQh2grhpg3gEgmJgRDQCUlMDekPQDfkPEjjRQEljSFPh5QAMCcAoDmQAoDiB6EUQhWBPgxBuQgxBvAAB6QAABEAQA9QAOA7AZA5QjZCRj+BmQj7BmjxBAQjxA/jeAjQjfAhiWANQA3lvCTlLgAi07VQhFgVhKAAQgYAAgNAFQh6kfgijcQgijaAAh9QCIgfCJgPQCOgQCHAAQDtABD2AwQgwCTh7D1Qh6D0joEnQhFgghFgUg");
	this.shape.setTransform(267.4,267.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,534.9,535.5), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgKgJQgEAEAAAFQAAAHAEADQAFAFAFAAQAGAAAFgFQAEgDAAgHQAAgFgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_1.setTransform(3.5,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvAYQgQgGgBgIIABgDQgHACgJAAQgQAAgJgEQgKgDAAgDQAAgJAKgGQAJgHAQAAQATAAAKAKQASgQAgAAQAgAAATAQQAJgKAUAAQAPAAAKAHQAKAGAAAJQAAADgKADQgKAEgPAAQgJAAgIgCIABADQAAAIgSAGQgTAGgbAAQgcAAgTgGgAgpAEQAPAGAaAAQAZAAAQgGQgNgNgcAAQgeAAgLANgAA6gGIACADQAIADAMAAQAPAAAJgEQgGgJgSAAQgPAAgHAHgAhngEQAHAEARAAQAMAAAIgDIACgDQgIgHgOAAQgSAAgGAJg");
	this.shape_2.setTransform(11.5,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgKgJQgEAEAAAFQAAAHAEADQAEAFAGAAQAGAAAEgFQAFgDAAgHQAAgFgFgEQgEgFgGAAQgGAAgEAFg");
	this.shape_3.setTransform(19.5,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjAkQgOgPAAgVQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAVgPAPQgPAOgUAAQgUAAgPgOgAgUgUQgJAJAAALQAAANAJAIQAJAJALAAQAMAAAJgJQAJgJAAgMQAAgLgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_4.setTransform(11.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,23,17.1), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhyB4QgxAAgjgjQgkgjAAgyQAAgwAkgjQAjgkAxAAIDlAAQAyAAAjAkQAjAjAAAwQAAAygjAjQgjAjgyAAgAiAgNQgGAGAAAHQAAAJAGAFQAGAGAIAAIDlAAQAIAAAGgGQAGgFAAgJQAAgHgGgGQgGgGgIAAIjlAAQgIAAgGAGg");
	this.shape_5.setTransform(188.4,233);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhyB4QgxAAgjgjQgkgjAAgyQAAgwAkgjQAjgkAxAAIDlAAQAxAAAkAkQAjAjAAAwQAAAygjAjQgkAjgxAAgAiAgNQgGAGAAAHQAAAJAGAFQAGAGAIAAIDlAAQAIAAAGgGQAGgFAAgJQAAgHgGgGQgGgGgIAAIjlAAQgIAAgGAGg");
	this.shape_6.setTransform(131.1,233);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhyB4QgyAAgjgjQgjgjAAgyQAAgwAjgjQAjgkAyAAIDlAAQAxAAAkAkQAjAjAAAwQAAAygjAjQgkAjgxAAgAiAgNQgGAGAAAHQAAAJAGAFQAGAGAIAAIDlAAQAIAAAGgGQAGgFAAgJQAAgHgGgGQgGgGgIAAIjlAAQgIAAgGAGg");
	this.shape_7.setTransform(73.9,233);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9AyQgUAAgPgPQgPgOAAgVQAAgUAPgPQAPgOAUAAIB7AAQAUAAAPAOQAPAPAAAUQAAAVgPAOQgOAPgVAAg");
	this.shape_8.setTransform(159.1,63.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag9AyQgUAAgPgPQgPgOAAgVQAAgUAPgPQAPgOAUAAIB7AAQAUAAAPAOQAPAPAAAUQAAAVgPAOQgPAPgUAAg");
	this.shape_9.setTransform(131.1,63.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9AyQgUAAgPgPQgPgOAAgVQAAgUAPgPQAPgOAUAAIB7AAQAUAAAPAOQAPAPAAAUQAAAVgPAOQgPAPgUAAg");
	this.shape_10.setTransform(103.1,63.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AqWGQQgUAAgPgPQgPgOAAgVIAAq7QAAgUAPgPQAPgPAUAAIUtAAQAUAAAPAPQAPAPAAAUIAAK7QAAAVgPAOQgPAPgUAAgApkEsITJAAIAApXIzJAAg");
	this.shape_11.setTransform(131.1,149.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Aq4JYQhZAAg/g/QhAg/AAhaIAAr/QAAhZBAhAQA/g/BZAAIVxAAQBZAAA/A/QBABAAABZIAAL/QAABahAA/Qg/A/hZAAgAsKnRQgiAiAAAwIAAL/QAAAxAiAhQAiAiAwAAIVxAAQAwAAAigiQAighAAgxIAAr/QAAgwgigiQgigigwAAI1xAAQgwAAgiAig");
	this.shape_12.setTransform(131.1,149.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiCCDQg2g2AAhNQAAhMA2g1QA3g3BLAAQBNAAA2A3QA2A1AABMQAABNg2A2Qg2A2hNAAQhLAAg3g2gAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgYAAgkQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_13.setTransform(193.4,368.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiCCDQg2g2AAhNQAAhMA2g1QA3g3BLAAQBNAAA2A3QA2A1AABMQAABNg2A2Qg2A2hNAAQhLAAg3g2gAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAkAAAYgZQAZgYAAgkQAAgigZgZQgYgZgkAAQgiAAgZAZg");
	this.shape_14.setTransform(151.9,368.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiBCDQg3g2AAhNQAAhMA3g1QA2g3BLAAQBMAAA3A3QA2A1AABMQAABNg2A2Qg3A2hMAAQhLAAg2g2gAg7g7QgZAZAAAiQAAAkAZAYQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_15.setTransform(110.4,368.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiBCDQg3g2AAhNQAAhMA3g1QA2g3BLAAQBMAAA3A3QA2A1AABMQAABNg2A2Qg3A2hMAAQhLAAg2g2gAg7g7QgZAZAAAiQAAAkAZAYQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_16.setTransform(68.9,368.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiCCDQg2g2AAhNQAAhLA2g3QA3g2BLAAQBNAAA2A2QA2A3AABLQAABNg2A2Qg2A2hNAAQhLAAg3g2gAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgYAAgkQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_17.setTransform(193.4,326.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiCCDQg2g2AAhNQAAhLA2g3QA3g2BLAAQBNAAA2A2QA2A3AABLQAABNg2A2Qg2A2hNAAQhLAAg3g2gAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAkAAAYgZQAZgYAAgkQAAgigZgZQgYgZgkAAQgiAAgZAZg");
	this.shape_18.setTransform(151.9,326.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiBCDQg3g2AAhNQAAhLA3g3QA2g2BLAAQBMAAA3A2QA2A3AABLQAABNg2A2Qg3A2hMAAQhLAAg2g2gAg7g7QgZAZAAAiQAAAkAZAYQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_19.setTransform(110.4,326.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiBCDQg3g2AAhNQAAhLA3g3QA2g2BLAAQBMAAA3A2QA2A3AABLQAABNg2A2Qg3A2hMAAQhLAAg2g2gAg7g7QgZAZAAAiQAAAkAZAYQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_20.setTransform(68.9,326.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiCCDQg2g3AAhMQAAhLA2g2QA3g3BLAAQBNAAA2A3QA2A2AABLQAABMg2A3Qg2A2hNAAQhLAAg3g2gAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_21.setTransform(193.4,284.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiCCDQg2g3AAhMQAAhLA2g2QA3g3BLAAQBNAAA2A3QA2A2AABLQAABMg2A3Qg2A2hNAAQhLAAg3g2gAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAkAAAYgZQAZgZAAgjQAAgigZgZQgYgZgkAAQgiAAgZAZg");
	this.shape_22.setTransform(151.9,284.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiBCDQg3g3AAhMQAAhLA3g2QA2g3BLAAQBMAAA3A3QA2A2AABLQAABMg2A3Qg3A2hMAAQhLAAg2g2gAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_23.setTransform(110.4,284.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiBCDQg3g3AAhMQAAhLA3g2QA2g3BLAAQBMAAA3A3QA2A2AABLQAABMg2A3Qg3A2hMAAQhLAAg2g2gAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_24.setTransform(68.9,284.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AlOe8QiYAAiMg7QiHg5hohoQhohog5iHQg7iLAAiZMAAAgmYQAAiZA7iLQA5iHBohpQBohoCHg5QCMg7CYAAIKdAAQCYAACMA7QCHA5BoBoQBoBpA5CHQA7CLAACZMAAAAmYQAACZg7CLQg5CHhoBoQhoBoiHA5QiMA7iYAAgAsa6YQi/C/AAEOMAAAAmYQAAEOC/C+QC/C/ENAAIKdAAQENAAC/i/QC/i+AAkOMAAAgmYQAAkOi/i/Qi/i/kNAAIqdAAQkNAAi/C/g");
	this.shape_25.setTransform(131.1,220.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EgFOAidQjGAAi2hNQivhKiHiHQiHiIhKivQhNi1AAjGMAAAgmYQAAjHBNi1QBKiwCHiHQCHiHCvhKQC2hNDGAAIKdAAQDGAAC2BNQCvBKCHCHQCHCHBKCwQBNC1AADHMAAAAmYQAADGhNC1QhKCviHCIQiHCHivBKQi2BNjGAAgAqP/FQiVA/hyByQhyBzg/CUQhBCaAACoMAAAAmYQAACoBBCZQA/CVByByQByByCVA/QCZBBCoAAIKdAAQCoAACZhBQCVg/ByhyQByhyA/iVQBBiZAAioMAAAgmYQAAiohBiaQg/iUhyhzQhyhyiVg/QiZhBioAAIqdAAQioAAiZBBg");
	this.shape_26.setTransform(131.1,220.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,262.3,441), null);


(lib.dotsright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgmgng");
	this.shape.setTransform(635.4,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgmgng");
	this.shape_1.setTransform(598.8,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgmgng");
	this.shape_2.setTransform(562.2,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgmgng");
	this.shape_3.setTransform(525.6,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgmgng");
	this.shape_4.setTransform(489,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_5.setTransform(452.4,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_6.setTransform(415.8,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_7.setTransform(379.2,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_8.setTransform(342.6,13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_9.setTransform(306,13.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_10.setTransform(269.4,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhdBdQgmgmAAg3QAAg1AmgnQAngnA2AAQA2AAAnAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgngng");
	this.shape_11.setTransform(232.8,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg1AAgngng");
	this.shape_12.setTransform(196.2,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhdBdQgmgmAAg3QAAg1AmgnQAngnA2AAQA3AAAnAnQAmAnAAA1QAAA3gmAmQgnAng3AAQg2AAgngng");
	this.shape_13.setTransform(159.6,13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhdBdQgmgmAAg3QAAg1AmgnQAognA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgogng");
	this.shape_14.setTransform(123,13.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAnAnQAmAnAAA1QAAA3gmAmQgoAng2AAQg2AAgmgng");
	this.shape_15.setTransform(86.4,13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhdBdQgmgmAAg3QAAg1AmgnQAngnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgngng");
	this.shape_16.setTransform(49.8,13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg1AAgngng");
	this.shape_17.setTransform(13.2,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dotsright, new cjs.Rectangle(0,0,648.6,26.4), null);


(lib.dotsleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape.setTransform(635.3,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_1.setTransform(598.7,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_2.setTransform(562.1,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_3.setTransform(525.5,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_4.setTransform(488.9,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_5.setTransform(452.3,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA2AAAnAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg1AAgngng");
	this.shape_6.setTransform(415.8,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAnAnQAmAnAAA1QAAA3gmAmQgnAng3AAQg2AAgmgng");
	this.shape_7.setTransform(379.2,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhdBdQgmgmAAg3QAAg1AmgnQAngnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgngng");
	this.shape_8.setTransform(342.6,13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg1AAgngng");
	this.shape_9.setTransform(306,13.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhdBdQgmgmAAg3QAAg1AmgnQAngnA2AAQA3AAAnAnQAmAnAAA1QAAA3gmAmQgnAng3AAQg2AAgngng");
	this.shape_10.setTransform(269.4,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhdBdQgmgmAAg3QAAg1AmgnQAngnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg2AAgngng");
	this.shape_11.setTransform(232.8,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAnAnQAmAnAAA1QAAA3gmAmQgoAng2AAQg2AAgmgng");
	this.shape_12.setTransform(196.2,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAnAnQAmAnAAA1QAAA3gmAmQgnAng3AAQg2AAgmgng");
	this.shape_13.setTransform(159.6,13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgmgng");
	this.shape_14.setTransform(123,13.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgmgng");
	this.shape_15.setTransform(86.4,13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgmgng");
	this.shape_16.setTransform(49.8,13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgnAng2AAQg2AAgmgng");
	this.shape_17.setTransform(13.2,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dotsleft, new cjs.Rectangle(0,0,648.5,26.4), null);


(lib.Block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1132F").s().p("Ek4fBKMMAAAiUYMEkQAAAITBIiITAoiMEmuAAAMAAACUYg");
	this.shape.setTransform(2000,474.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Block, new cjs.Rectangle(0,0,4000,949.7), null);


(lib._100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj4FBQhEg6AAh6QAAhpAXhcQAXhcAuhKQAvhHBHgqQBHgqBaAAQCDgBBBA9QBCA7AAB2QAABlgXBfQgYBgguBHQgzBOhFAnQhFAnhYgBQh/AAhEg5gAgajQQghAigZBBQgVA4gLBBQgMBDAAA2QAAA5AVAbQAUAbAsAAQArAAAfglQAggmAWg7QAVg2ALhAQAMhBAAg7QgBg5gUgbQgVgcgpABQgmgBgiAkg");
	this.shape.setTransform(210,66.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj4FBQhEg6AAh6QAAhpAXhcQAXhcAvhKQAuhHBHgqQBHgqBaAAQCDgBBCA9QBBA7AAB2QAABlgYBfQgXBggtBHQg0BOhFAnQhGAnhWgBQiAAAhEg5gAgZjQQgjAigYBBQgWA4gKBBQgMBDABA2QAAA5AUAbQAVAbAsAAQApAAAgglQAggmAWg7QAUg2AMhAQALhBAAg7QABg5gVgbQgVgcgpABQgmgBghAkg");
	this.shape_1.setTransform(138.9,66.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkAFsIAdh/ICZAAIBYl+IiZAAIAch4IBEgEQAjgEAWgKQAZgLATgTQASgTAJggICiAAIiLJZICVAAIgdB/g");
	this.shape_2.setTransform(63,66.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._100, new cjs.Rectangle(0,0,274.3,125.6), null);


(lib._97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlgFrIHcpPIlzAAIAfiGII5AAIggCLInNJKg");
	this.shape.setTransform(176.9,66.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjxF0IhBgLIAZiOIATABIArAQQAgAKAvAAQBWAAA5grQA7gsAdhTQgtAWgjAMQgkALg2AAQhiAAg4g0Qg3gzAAhYQAAiHBghWQBfhWCGAAQA8AAAxAOQAyANAkAgQAlAfATAxQATAyAABCQAABrggBcQggBeg8BCQg8BDhUAlQhSAlhsAAQgqAAgwgGgAg8jSQgjAsAABDQAAAzAeAYQAeAWA4AAIAugEIApgKIAKgyIAEg3QAAhDgXghQgWggg1gBQgxAAgjAsg");
	this.shape_1.setTransform(103.1,66.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._97, new cjs.Rectangle(0,0,274.3,125.6), null);


(lib.world = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(125,125.2,0.467,0.467,0,0,0,267.4,267.8);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.world, new cjs.Rectangle(0,0,250,250.3), null);


(lib.people = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(674.8,498.6,58.674,58.651,0,0,0,11.5,8.5);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.people, new cjs.Rectangle(0,0,1349.5,1000), null);


(lib.mobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(356.8,600,2.721,2.721,0,0,0,131.1,220.5);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mobile, new cjs.Rectangle(0,0,713.7,1200), null);


(lib.circleright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(218.2,218.2,1,1,0,0,0,218.2,218.2);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circleright, new cjs.Rectangle(0,0,436.5,436.5), null);


(lib.circleleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(218.2,218.2,1,1,0,0,0,218.2,218.2);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circleleft, new cjs.Rectangle(0,0,436.5,436.5), null);


// stage content:
(lib.diagknowsscene1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 2.4 BILLION PEOPLE
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1445.3,450.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:1582.6},9).wait(192));

	// SQAURE
	this.instance_1 = new lib.Path_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63.1,471.7,1.186,1.174,0,0,0,842.8,213);
	this.instance_1.alpha = 0.699;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:1848.4},9).wait(198));

	// cross 1/2
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3336.3,440.1,1,1,0,0,0,273.4,346.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).wait(1).to({regX:273.5,x:3336.4,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(175));

	// cross 1/2
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3344.7,433.5,1,1,0,0,0,273.4,346.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).wait(1).to({regX:273.5,x:3344.8,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(170));

	// HEALTH
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(3352.2,-294);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({y:444.8},7).wait(184));

	// World
	this.instance_5 = new lib.world();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1981.4,1395.5,1,1,0,0,0,125,125.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).wait(1).to({regY:125.1,scaleX:1.57,scaleY:1.57,x:1981.3,y:1395.4,alpha:0.064},0).wait(1).to({scaleX:2.13,scaleY:2.13,y:1395.3,alpha:0.128},0).wait(1).to({scaleX:2.69,scaleY:2.69,alpha:0.191},0).wait(1).to({scaleX:3.24,scaleY:3.24,x:1981.4,alpha:0.254},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:1981.3,alpha:0.316},0).wait(1).to({scaleX:4.34,scaleY:4.34,y:1395.2,alpha:0.378},0).wait(1).to({scaleX:4.88,scaleY:4.88,x:1981.4,alpha:0.439},0).wait(1).to({scaleX:5.41,scaleY:5.41,x:1981.3,alpha:0.5},0).wait(1).to({scaleX:5.18,scaleY:5.18,x:1981.4,alpha:0.56},0).wait(1).to({scaleX:4.67,scaleY:4.67,x:1981.3,alpha:0.62},0).wait(1).to({scaleX:4.17,scaleY:4.17,x:1981.4,alpha:0.679},0).wait(1).to({scaleX:3.67,scaleY:3.67,y:1395.3,alpha:0.738},0).wait(1).to({scaleX:3.17,scaleY:3.17,alpha:0.796},0).wait(1).to({scaleX:2.68,scaleY:2.68,alpha:0.853},0).wait(1).to({scaleX:2.19,scaleY:2.19,alpha:0.911},0).wait(1).to({scaleX:1.71,scaleY:1.71,alpha:0.967},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:1981.3,y:1395.4,alpha:1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1981.4},0).wait(110));

	// People
	this.instance_6 = new lib.people();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3746.7,-510.9,1,1,0,0,0,674.8,500);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).to({y:1408.6},28).wait(98));

	// Mobile
	this.instance_7 = new lib.mobile();
	this.instance_7.parent = this;
	this.instance_7.setTransform(356.8,-610.9,1,1,0,0,0,356.8,600);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(88).to({_off:false},0).to({x:453.2,y:1397},17).wait(111));

	// 100
	this.instance_8 = new lib._100();
	this.instance_8.parent = this;
	this.instance_8.setTransform(2992.5,2038.8,1,1,0,0,0,137.2,62.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(88).to({_off:false},0).to({y:1399.9},31,cjs.Ease.get(1)).wait(97));

	// 97
	this.instance_9 = new lib._97();
	this.instance_9.parent = this;
	this.instance_9.setTransform(963.9,2038.8,1,1,0,0,0,137.2,62.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(88).to({_off:false},0).to({y:1399.9},31,cjs.Ease.get(1)).wait(97));

	// Circle right
	this.instance_10 = new lib.circleright();
	this.instance_10.parent = this;
	this.instance_10.setTransform(4290.8,1396.9,1,1,0,0,0,218.2,218.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60).to({_off:false},0).to({x:2973.1},11,cjs.Ease.get(1)).wait(145));

	// dots right
	this.instance_11 = new lib.dotsright();
	this.instance_11.parent = this;
	this.instance_11.setTransform(2430.6,1399.9,1,1,0,0,0,324.2,13.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70).to({_off:false},0).wait(1).to({regX:324.3,x:2430.7,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(131));

	// dots left
	this.instance_12 = new lib.dotsleft();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1539.7,1399.9,1,1,0,0,0,324.2,13.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70).to({_off:false},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(131));

	// Circle left
	this.instance_13 = new lib.circleleft();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-289.1,1396.9,1,1,0,0,0,218.2,218.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(58).to({_off:false},0).to({x:997.2},11,cjs.Ease.get(1)).wait(147));

	// Layer 1
	this.instance_14 = new lib.Tween4("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(2000,-120.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(43).to({_off:false},0).to({x:2005,y:1743},14).wait(159));

	// Layer 4
	this.instance_15 = new lib.Block();
	this.instance_15.parent = this;
	this.instance_15.setTransform(2000,-595,1,1,0,0,0,2000,474.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(43).to({_off:false},0).to({y:1388.4},14).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '6B510A503AE244E08F12501939133DCC',
	width: 4000,
	height: 2250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6B510A503AE244E08F12501939133DCC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;