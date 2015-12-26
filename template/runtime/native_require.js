
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/gui/gui.js",
	"libs/modules/dragonbones/dragonbones.js",
	"bin-debug/base/AssetAdapter.js",
	"bin-debug/base/BaseLoader.js",
	"bin-debug/base/BaseType.js",
	"bin-debug/base/Debug.js",
	"bin-debug/base/Geometry.js",
	"bin-debug/base/HttpRequest.js",
	"bin-debug/base/MapSite.js",
	"bin-debug/base/Newton.js",
	"bin-debug/base/Utils.js",
	"bin-debug/game/AI/AIDefine.js",
	"bin-debug/game/AI/RoleAI.js",
	"bin-debug/game/audio/GameSound.js",
	"bin-debug/game/config/RoleConfig.js",
	"bin-debug/game/dataMgr/SelHorseMgr.js",
	"bin-debug/game/Game.js",
	"bin-debug/game/GameDef.js",
	"bin-debug/game/GameEvent.js",
	"bin-debug/game/GameRuleJudge.js",
	"bin-debug/game/horse/Horse.js",
	"bin-debug/game/map/DlgSelRoleSkin.g.js",
	"bin-debug/game/map/Scene.js",
	"bin-debug/game/Role/Role.js",
	"bin-debug/game/Role/Enemey.js",
	"bin-debug/game/Role/Player.js",
	"bin-debug/game/Role/RoleDefine.js",
	"bin-debug/game/Role/RoleFactory.js",
	"bin-debug/game/skill/SkillConfig.js",
	"bin-debug/game/skill/SkillMgr.js",
	"bin-debug/game/ui/DlgController.js",
	"bin-debug/game/ui/DlgHistory.js",
	"bin-debug/game/ui/DlgHorseInfo.js",
	"bin-debug/game/ui/DlgPlayRule.js",
	"bin-debug/game/ui/DlgPushMoeny.js",
	"bin-debug/game/ui/DlgRank.js",
	"bin-debug/game/ui/DlgSelectHorse.js",
	"bin-debug/game/ui/DlgSelPlayMethod.js",
	"bin-debug/game/ui/DlgSelRole.js",
	"bin-debug/game/ui/LoadingUI.js",
	"bin-debug/game/ui/SelectScroll.js",
	"bin-debug/game/ui/skins/ButtonASkin.g.js",
	"bin-debug/game/ui/skins/ButtonBSkin.g.js",
	"bin-debug/game/ui/skins/ButtonSkin.g.js",
	"bin-debug/game/ui/skins/CheckSelRoleSkin.g.js",
	"bin-debug/game/ui/skins/DlgControllerSkin.g.js",
	"bin-debug/game/ui/skins/DlgHistorySkin.g.js",
	"bin-debug/game/ui/skins/DlgHorseInfoSkin.g.js",
	"bin-debug/game/ui/skins/DlgPlayRuleSkin.g.js",
	"bin-debug/game/ui/skins/DlgPushMoneySkin.g.js",
	"bin-debug/game/ui/skins/DlgRankSkin.g.js",
	"bin-debug/game/ui/skins/DlgRewardSkin.g.js",
	"bin-debug/game/ui/skins/DlgSelectHorseSkin.g.js",
	"bin-debug/game/ui/skins/DlgSelPlayMethodSkin.g.js",
	"bin-debug/game/ui/skins/DlgSelRoleSkin.g.js",
	"bin-debug/game/ui/skins/DownButtonSkin.g.js",
	"bin-debug/game/ui/skins/LeftButtonSkin.g.js",
	"bin-debug/game/ui/skins/RightButtonSkin.g.js",
	"bin-debug/game/ui/skins/UpButtonSkin.g.js",
	"bin-debug/Main.js",
	"bin-debug/ThemeAdapter.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "showAll",
		contentWidth: 1136,
		contentHeight: 640,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};