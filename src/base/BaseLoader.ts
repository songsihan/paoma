 /*
  * 负责一些基础性的项目共有的一些资源和配置加载
  * 
  */

class BaseLoader extends egret.EventDispatcher
{
  public constructor()
  {
      super();
      //inject the custom material parser
      //注入自定义的素材解析器

      RES.registerAnalyzer("egret.gui.IAssetAdapter", AssetAdapter)

      // load skin theme configuration file, you can manually modify the file. And replace the default skin.
      //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
      //egret.gui.Theme.load("resource/theme.thm");
  }

  public LoadConfig()
  {
        RES.loadConfig("resource/resource1.json", "resource/");
   // RES.loadConfig("resource/resource.json", "resource/");


      RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
  }

  public LoadGroupRes(groupName : string)
  {
      RES.loadGroup(groupName);
      RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
      RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
      RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
  }

  /**
   * 配置文件加载完成,开始预加载preload资源组。
   * Loading of configuration file is complete, start to pre-load the preload resource group
   */
  private onConfigComplete(event: RES.ResourceEvent)
  {
      RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
      this.dispatchEvent(event)
  }


  /**
   * preload资源组加载完成
   * preload resource group is loaded
   */
  private onResourceLoadComplete(event: RES.ResourceEvent): void 
  {
      RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
      RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
      RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);

      this.dispatchEvent(event);
  }

  /**
  * 资源组加载出错
   * Resource group loading failed
  */
  private onResourceLoadError(event: RES.ResourceEvent)
  {
      //TODO
      console.warn("Group:" + event.groupName + " has failed to load");
      //忽略加载失败的项目
      //ignore loading failed projects
      this.onResourceLoadComplete(event);
  }
  /**
   * preload资源组加载进度
   * loading process of preload resource
   */
  private onResourceProgress(event: RES.ResourceEvent)
  {
      this.dispatchEvent(event);
  }
}