//以下注释为VSHES荔枝独立完成为了让其他蔚蓝开发者同样可以更新开屏显示窗口插件
Events.on(EventType.ClientLoadEvent, cons(e => {
       var dialogo = new BaseDialog("提示");//新建一个显示窗口
	dialogo.buttons.button("@close", run(() => {
		dialogo.hide()//退出此界面
	})).size(210, 64);//按钮用原版@close贴图
    dialogo.buttons.button("加入",run(() => {
        Core.app.openURI("https://qun.qq.com/universal-share/share?ac=1&authKey=kUJ2foDhFvzle2NFPgUdtw9GsxtoKCfeMOtRriFy%2Fu972M%2Flz%2FnihaBPhq8bnxHq&busi_data=eyJncm91cENvZGUiOiI1NzU5OTQ3MzUiLCJ0b2tlbiI6ImZKUXJLazJoV3NJSTJid05xbzlLZUV6QUVTdURxMnNjdzdMajdDVTh5VnZIYk5sMzUyVWYrakIvMDNGKzZSZXQiLCJ1aW4iOiI2MzI0ODAyMjcifQ%3D%3D&data=Ljr5ivhxsC9i9-4ZmVbj41JDBhG-xxg0YL8PXssgQTYMYyd79yeKiU1kc6lSZXosx1oZqXqgf2uChRQsXIWn1Q&svctype=4&tempid=h5_group_info");
    })).size(210,64);/*感谢荔枝的网址按钮*/

    dialogo.cont.pane(table => {//滑动显示
        
        //table.add(Core.bundle.get("mod.ap.update")).left().growX().wrap().width(600).maxWidth(600).pad(4).labelAlign(Align.left).row();

		table.add("").left().growX().wrap().pad(4).labelAlign(Align.left).row();/*本段介绍作者：小柠檬*/
		 let label = new FLabel("非模组QQ群:575994735");
		 table.add(label).left().row();
		 table.add("
  "fullTextDialog_String": "[blue]模组QQ群: [grey]575994735（并非）[white]\n🤔\n加群来提建议和赤石。😋😋😋\n我是S8[]\n另外不要将镓加入炮台里，不然他就会待机无响应，只需要等等而已"
).left().growX().wrap().width(580).maxWidth(590).pad(4).labelAlign(Align.left).row();

	}).grow().center().maxWidth(600)

             dialogo.show();
}))