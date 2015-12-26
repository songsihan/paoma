var game;
(function (game) {
    var GameSound = (function () {
        function GameSound() {
        }
        var d = __define,c=GameSound;p=c.prototype;
        GameSound.GetInstance = function () {
            if (!this.instance) {
                this.instance = new GameSound();
            }
            return this.instance;
        };
        //@brief 
        //@ param url 声音的相对或绝对路径
        //@ param bLoop 声音是否循环播放
        p.PlaySound = function (url, bLoop) {
            //创建 URLLoader 对象
            var loader = new egret.URLLoader();
            //设置加载方式为声音
            loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
            //添加加载完成侦听
            loader.addEventListener(egret.Event.COMPLETE, function onLoadComplete(event) {
                var loader = event.target;
                //获取加载到的 Sound 对象
                var sound = loader.data;
                sound.addEventListener(egret.Event.SOUND_COMPLETE, function (event) {
                }, this);
                var times = 1;
                if (bLoop) {
                    times = 0;
                }
                sound.play(0, times);
            }, this);
            var request = new egret.URLRequest(url);
            //开始加载
            loader.load(request);
        };
        p.PlayBGSound = function (url, bLoop) {
            if (this.bgSoundChannel) {
                this.bgSoundChannel.stop();
            }
            //创建 URLLoader 对象
            var loader = new egret.URLLoader();
            //设置加载方式为声音
            loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
            //添加加载完成侦听
            loader.addEventListener(egret.Event.COMPLETE, function onLoadComplete(event) {
                var loader = event.target;
                //获取加载到的 Sound 对象
                var bgSound = loader.data;
                this.bgSoundChannel = bgSound.play(0, 0);
                this.bgSoundChannel.addEventListener(egret.Event.SOUND_COMPLETE, function (event) {
                }, this);
            }, this);
            var request = new egret.URLRequest(url);
            //开始加载
            loader.load(request);
        };
        return GameSound;
    })();
    game.GameSound = GameSound;
    egret.registerClass(GameSound,"game.GameSound");
})(game || (game = {}));
