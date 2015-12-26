module game {
    export class GameSound {
        private static instance: GameSound;
        private bgSoundChannel: egret.SoundChannel;

        public static GetInstance(): GameSound
        {
            if (!this.instance)
            {
                this.instance = new GameSound();
            }

            return this.instance;
        }

        //@brief 
        //@ param url 声音的相对或绝对路径
        //@ param bLoop 声音是否循环播放
        public PlaySound(url: string, bLoop: boolean)
        {
            //创建 URLLoader 对象
            var loader:egret.URLLoader = new egret.URLLoader();
            //设置加载方式为声音
            loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
            //添加加载完成侦听
            loader.addEventListener(egret.Event.COMPLETE, 
                function onLoadComplete(event:egret.Event):void 
                {
                    var loader:egret.URLLoader = <egret.URLLoader>event.target;
                    //获取加载到的 Sound 对象
                    var sound:egret.Sound = <egret.Sound>loader.data;
                    sound.addEventListener(egret.Event.SOUND_COMPLETE
                        , function (event:egret.Event):void {
                            }, this);

                    var times = 1;
                    if (bLoop) {times = 0;}

                    sound.play(0, times);
                }, this);

            var request:egret.URLRequest = new egret.URLRequest(url);
            //开始加载
            loader.load(request);
        }


        public PlayBGSound(url: string, bLoop: boolean)
        {
            if (this.bgSoundChannel)
            {
                this.bgSoundChannel.stop();
            }
            //创建 URLLoader 对象
            var loader:egret.URLLoader = new egret.URLLoader();
            //设置加载方式为声音
            loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
            //添加加载完成侦听
            loader.addEventListener(egret.Event.COMPLETE, 
                function onLoadComplete(event:egret.Event):void 
                {
                    var loader:egret.URLLoader = <egret.URLLoader>event.target;
                    //获取加载到的 Sound 对象
                    var bgSound = <egret.Sound>loader.data;

                    this.bgSoundChannel = bgSound.play(0, 0);
                    this.bgSoundChannel.addEventListener(egret.Event.SOUND_COMPLETE
                        , function (event:egret.Event):void {
                            }, this);

                }, this);

            var request:egret.URLRequest = new egret.URLRequest(url);
            //开始加载
            loader.load(request);
        }
    }
}