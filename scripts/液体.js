function newLiquid(name) {
	exports[name] = (() => {
		let myLiquid = extend(Liquid, name, {});
		return myLiquid;
	})();
}
newLiquid("氯气")
newLiquid("乙烯")
newLiquid("原油")
newLiquid("重油")
newLiquid("燃料")
newLiquid("页岩气")
newLiquid("盐水")
newLiquid("天然气")
newLiquid("高压蒸汽")
newLiquid("中压蒸汽")