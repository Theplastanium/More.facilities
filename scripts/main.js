var table = new Table();
const control = {
	boosting: false
};
global.boostControl = control;
Events.on(EventType.ClientLoadEvent, e => {
	MapResizeDialog.maxSize = 1145;
	
	let editor = Vars.ui.editor;
	let resizeDialog = Reflect.get(editor, "resizeDialog");
	let cont = resizeDialog.cont;
	
	resizeDialog.shown(() => {
		let table = resizeDialog.cont.getChildren().get(0);
		table.getCells().each(cell => cell.maxTextLength(6));
	});
});
Events.on(EventType.ClientLoadEvent, cons(e => {
	rebuild();
    //miner大佬NB
	Vars.ui.hudGroup.fill(cons(t => {
		t.right().name = "fuzhu";
		t.add(table);
		 t.addListener(extend(InputListener, {
			 lastx: 1000,
			 lasty: 0,
			 touchDown(event, x, y, pointer, button){
				 var v = t.localToParentCoordinates(Tmp.v1.set(x, y));
				 this.lastx = v.x;
				 this.lasty = v.y;
				 return true;
			 },
	 
			 touchDragged(event, x, y, pointer){
				 var v = t.localToParentCoordinates(Tmp.v1.set(x, y));
				 t.translation.add(v.x - this.lastx, v.y - this.lasty);
				 this.lastx = v.x;
				 this.lasty = v.y;
			 },
		 }));
	}));
}));
function rebuild(){
	table.clear();
    	table.visibility = () => Vars.ui.hudfrag.shown && !Vars.ui.minimapfrag.shown();
    	table.defaults().left();
		table.background(Styles.black6);        
        table.row();
        table.table(cons(buttons => {
        buttons.background(Tex.buttonTrans)
    	buttons.row();
    	
    	buttons.button("暂停建造", Styles.togglet, () => {
		Vars.control.input.isBuilding = !Vars.control.input.isBuilding;
	}).size(120,55);

/*	    buttons.row();
	
        const button = buttons.button("关闭助推",Styles.togglet, () => {
		control.boosting = !control.boosting;
		button.setText(control.boosting ? "启动助推" : "关闭助推");
	}).width(120).height(55).get();*/
    	}));
    };

Events.run(Trigger.update, () => {
	Vars.player.boosting = control.boosting;
});
MapResizeDialog.minSize = 0
MapResizeDialog.maxSize = 50000
require("物品");
require("blocks/前哨基地");
require("blocks/迭代核心");
require("blocks/最高指挥中心");
require("blocks/护盾");
require("提示");
require("工厂/螺旋压缩机");
require("base/MFlib");
require("base/library");
require("sectorSize");
require("星球/ET");