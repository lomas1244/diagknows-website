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



(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D52331").s().p("AguIDQg0gBgVgUQgUgVgBg1IAAh4QAAhHABgyQABgYgKgIQgIgIgYABIh5AAIh4AAQgiABgVgLQgZgNgNgdIAAivQANgeAZgMQAVgLAiAAQAoABBRAAIB5AAQAYABAIgIQAJgIgBgZQgBgrAAhNIAAh4QgBgjALgWQANgZAegNICwAAQAdANAMAZQAMAWgCAjIAAB4QABBLgCAtQAAAZAJAIQAJAIAYgBQB+gCB/ACQAqABATAUQATATABAqIAABoQgBA0gUAVQgVAUg0AAQi8ABg2gBQgYgBgJAJQgHAJAAAXQADBjgCCbQgBApgUAUQgUATgqABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103,103);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D52331").s().p("AguIDQg0gBgVgUQgUgVgBg1IAAh4QAAhHABgyQABgYgKgIQgIgIgYABIh5AAIh4AAQgiABgVgLQgZgNgNgdIAAivQANgeAZgMQAVgLAiAAQAoABBRAAIB5AAQAYABAIgIQAJgIgBgZQgBgrAAhNIAAh4QgBgjALgWQANgZAegNICwAAQAdANAMAZQAMAWgCAjIAAB4QABBLgCAtQAAAZAJAIQAJAIAYgBQB+gCB/ACQAqABATAUQATATABAqIAABoQgBA0gUAVQgVAUg0AAQi8ABg2gBQgYgBgJAJQgHAJAAAXQADBjgCCbQgBApgUAUQgUATgqABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103,103);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D52331").s().p("AgmGWQgnAAgQgQQgQgPgBgnQgBiRABgwQABgUgGgGQgGgHgTAAQg0ABiLgBQgqAAgQgQQgRgQAAgpIAAhIQAAgqAQgRQAQgQAqAAIC/ABQASAAAHgGQAIgGgBgUIgBheIAAhgQAAgbAIgSQAKgTAXgKICLAAQAXAKAKATQAIASAAAbIAABgIgBBeQgBAUAIAGQAGAGATAAQBAgCB/ABQA2gBAUAqIAACLQgLAXgTAJQgRAKgbgBQh/ABhAgCQgTgBgGAHQgIAGABAUQABAyAACMQgBAqgQAQQgPAQgqAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-40.6,81.3,81.3);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D52331").s().p("AgmGWQgnAAgQgQQgQgPgBgnQgBiRABgwQABgUgGgGQgGgHgTAAQg0ABiLgBQgqAAgQgQQgRgQAAgpIAAhIQAAgqAQgRQAQgQAqAAIC/ABQASAAAHgGQAIgGgBgUIgBheIAAhgQAAgbAIgSQAKgTAXgKICLAAQAXAKAKATQAIASAAAbIAABgIgBBeQgBAUAIAGQAGAGATAAQBAgCB/ABQA2gBAUAqIAACLQgLAXgTAJQgRAKgbgBQh/ABhAgCQgTgBgGAHQgIAGABAUQABAyAACMQgBAqgQAQQgPAQgqAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-40.6,81.3,81.3);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D52331").s().p("AgcEOQgXgBgLgKQgKgKgBgYIABiFQAAgLgEgEQgEgEgLAAQgsABhWgBQgaAAgLgKQgLgLAAgZIAAg4QABgWAKgKQAKgLAWAAICGAAQAMAAAEgEQAFgEgBgLIgBiAQgBglAcgNIBdAAQAcANgBAlIgBCAQAAALAEAEQAEAEAMAAICCAAQAZAAALALQALAKAAAaIAAA0QgBAZgKALQgKAKgbAAQhWABgsgBQgLAAgEAEQgEAEAAALIABCDQgBAagLAKQgKALgaAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-26.9,54,54);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D52331").s().p("AgcEOQgXgBgLgKQgKgKgBgYIABiFQAAgLgEgEQgEgEgLAAQgsABhWgBQgaAAgLgKQgLgLAAgZIAAg4QABgWAKgKQAKgLAWAAICGAAQAMAAAEgEQAFgEgBgLIgBiAQgBglAcgNIBdAAQAcANgBAlIgBCAQAAALAEAEQAEAEAMAAICCAAQAZAAALALQALAKAAAaIAAA0QgBAZgKALQgKAKgbAAQhWABgsgBQgLAAgEAEQgEAEAAALIABCDQgBAagLAKQgKALgaAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-26.9,54,54);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF2932").s().p("AP1f8MgftgiXIeQ9gIBpAAI+HdgMAfnAiXgAxgf4MAAAg/zIBWAAMAAAA/zg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.1,-204.3,224.3,408.8);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF2932").s().p("ARZf8MgjTg+WQAKDvAAKMMAAAAwbIhUAAMAAAg/3IBvAAMAjRA+WQgLnRAAn2MAAAgvPIBUAAMAAAA/3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.1,-204.3,244.3,408.8);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF2932").s().p("AqLerQkjiLjQkLQmvotAAvaQAAnsBzmQQBvmFDTkUQDRkREiiOQEliPFfAAQFqAAElCKQEkCKDOEMQGtIsAAPtQABPimhIoQmhIortAAQlmAAkkiLgApi9cQkRCHjFEEQmbIhAAO9QAAO3GXIXQDDEAETCFQEUCEFRAAQLJAAGGoMQGGoNABvHQAAvLmUoVQjCkAkUiEQkViElXAAQlNAAkUCIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.1,-210.2,316.3,420.4);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF2932").s().p("AQdf8MgQdg+jMgQcA+jIhkAAMgO+g/3IBcAAMAOZA+eMAQWg+eIBnAAMAQbA+aMAOWg+aIBaAAMgO+A/3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211,-204.3,422.2,408.8);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF2932").s().p("Aq/ezQkFhyj8jsIA3g9QDyDkDxBqQEfB+F3AAQIAABE9kjQCZiMBRjBQBTjEAAjrQAAjohAinQg/iliGh9Qh/h3jVhkQi9hZkvhfQlAhmjJhfQjXhmh+h1QiAh2g6iaQg4iVAAjPQAAjFBOirQBMipCPh+QExkMHkAAIAAAAQFfAAELBxQDbBcDjDIIg3A/QjXjFjehZQj2hllGAAQnAAAkXDzQiDBzhHCbQhHCcAAC1QAADDA2CKQA2COB6BtQB2BqDNBeQC8BXExBgQE6BiDHBfQDfBpCJCAQCOCGBECyQBFC1gBD4QABD5haDVQhYDPilCYQikCZjgBRQjnBTkNAAQmBAAkwiDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.6,-210.2,243.3,420.4);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Amze+Qk2iHjbkKQnQoyAAwPQAAoACRmdQCFl+D3kQQDnj+ExiGQEmiAE/AAQFZAAEGBgQDxBZEBDNIiuC0QjdiqjShLQjchPkSAAQkEAAjsBmQj+Bti9DWQm5HxAAOfQAAOpF7HmQFmHNKJAAQEGAADbg5QDKg1DOhwIAA4BIs9AAIgkj1IR7AAIAAeGQotFKpyAAQl3AAkyiGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-211.6,285.8,423.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgRAcIARg3IASA3g");
	this.shape.setTransform(131.6,223.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhfAcIAAg3IC/AAIAAA3g");
	this.shape_1.setTransform(122,223.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgRAcIARg3IASA3g");
	this.shape_2.setTransform(-131.6,223.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhfAcIAAg3IC/AAIAAA3g");
	this.shape_3.setTransform(-121.9,223.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(20).p("AAA+WIgFgWIALAAgEATEAjjMgTEhB5MgTDBB5");
	this.shape_4.setTransform(0,-3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0D2D3").s().p("AiCCCQg2g1AAhNQAAhMA2g2QA3g2BLAAQBMAAA2A2QA2A2AABMQAABNg2A1Qg2A2hMAAQhLAAg3g2g");
	this.shape_5.setTransform(0,-208.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.4,-226.6,266.8,460.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgCPAgFMAAAhAJIEfAAMAAABAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-205.3,28.8,410.7);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgUxAgFMAAAhAJIMfAAQM5AAHBF4QJKHrAAR+QAASHpXIOQnLGTr4AAgAwXcPIJBAAQKOAAFyliQHcnIAAwIQAAwUntmkQjKitklhKQjrg8k/AAIoXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-205.3,266,410.7);


(lib.rightsmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9212D").ss(10).p("AhQlSQCOCHAEDHQADDFiICS");
	this.shape.setTransform(8.1,33.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,24.7,77.8);


(lib.rightmedium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9212D").ss(10).p("Ah3oDQBrBlA5CGQA4CCADCPQADCOgzCGQg1CLhmBt");
	this.shape.setTransform(12,51.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-24.3,35.3,151.3);


(lib.rightlarge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9212D").ss(10).p("AiaqpQCNCFBLCyQBKCrAEC9QADC8hDCwQhGC4iHCQ");
	this.shape.setTransform(15.5,68.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,39.5,146.4);


(lib.leftsmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9212D").ss(10).p("ABRlSQiOCHgEDHQgDDFCJCS");
	this.shape.setTransform(6.6,33.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,24.7,77.8);


(lib.leftmedium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9212D").ss(10).p("AB4oEQhrBlg5CHQg4CCgDCPQgDCNAzCGQA1CMBmBt");
	this.shape.setTransform(10.4,51.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-24.3,35.3,151.3);


(lib.leftlarge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9212D").ss(10).p("ACbqpQiNCFhLCyQhKCrgEC9QgDC8BDCwQBGC4CHCQ");
	this.shape.setTransform(14,68.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,39.5,146.4);


// stage content:
(lib.diagknowslogo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// small
	this.instance = new lib.leftsmall("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(715.7,197.4,1,1,0,0,0,7.4,33.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).to({alpha:1},10).wait(30));

	// medium
	this.instance_1 = new lib.leftmedium("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(697.1,197.2,1,1,0,0,0,12.6,51.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({_off:false},0).to({alpha:1},10).wait(20));

	// large
	this.instance_2 = new lib.leftlarge("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(674.3,197.6,1,1,0,0,0,14.8,68.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140).to({_off:false},0).to({alpha:1},10).wait(10));

	// small
	this.instance_3 = new lib.rightsmall("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(808.6,198.3,1,1,0,0,0,7.4,33.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:false},0).to({alpha:1},10).wait(30));

	// medium
	this.instance_4 = new lib.rightmedium("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(830.3,196.7,1,1,0,0,0,9.8,51.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130).to({_off:false},0).to({x:828.9,y:195.8,alpha:1},10).wait(20));

	// large
	this.instance_5 = new lib.rightlarge("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(861.7,197.2,1,1,0,0,0,14.8,68.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).to({x:855,y:194.5,alpha:1},10).wait(10));

	// small
	this.instance_6 = new lib.Tween10("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(747.7,872);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween11("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(762.1,386.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},60).to({state:[{t:this.instance_7}]},23).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).to({_off:true,x:762.1,y:386.9},23).wait(77));

	// medium
	this.instance_8 = new lib.Tween12("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(747.8,954.8);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween13("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(762.2,462.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},69).to({state:[{t:this.instance_9}]},25).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({_off:false},0).to({_off:true,x:762.2,y:462.5},25).wait(66));

	// large
	this.instance_10 = new lib.Tween14("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(747.7,1062.3);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween15("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(762,562.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},78).to({state:[{t:this.instance_11}]},27).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(78).to({_off:false},0).to({_off:true,x:762,y:562.8},27).wait(55));

	// K
	this.instance_12 = new lib.Tween5("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(4925.2,422);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:2927.5,y:421.3},59).wait(101));

	// N
	this.instance_13 = new lib.Tween6("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(4541.6,422.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:2529.5,y:425.2},59).wait(101));

	// O
	this.instance_14 = new lib.Tween7("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(4105.7,422);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:2122.4,y:421.3},59).wait(101));

	// W
	this.instance_15 = new lib.Tween8("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(3701.6,422.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:1739.9,y:425.2},59).wait(101));

	// S
	this.instance_16 = new lib.Tween9("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(3386.7,422.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:1432.1,y:425.2},59).wait(101));

	// D
	this.instance_17 = new lib.Tween1("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-1063.8,420.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:294.4,y:426.1},59).wait(101));

	// I
	this.instance_18 = new lib.Tween2("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-805.4,420.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:524,y:426.1},59).wait(101));

	// Antenna
	this.instance_19 = new lib.Tween3("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-553.6,405.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:761.5,y:404.8},59).wait(101));

	// G
	this.instance_20 = new lib.Tween4("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-218.2,420.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:1068.1,y:419.8},59).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(403.2,579,6243.6,460.5);
// library properties:
lib.properties = {
	id: '1E5D93A278C64CC7A11860BC1DAB6F56',
	width: 3200,
	height: 800,
	fps: 72,
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
an.compositions['1E5D93A278C64CC7A11860BC1DAB6F56'] = {
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