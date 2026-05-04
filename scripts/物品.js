function newItem(name) {
	exports[name] = (() => {
		let myItem = extend(Item, name, {});
		return myItem;
	})();
}
newItem("裂位能")
newItem("氢氧化钠")