 /*
  * 实现一些方便打log调试的接口
  * 
  */

class Debug
{
	// 根据次数控制log
	private static arrCount: any = {};

	// 根据时间控制log
	private static arrTime: any = {};

	/*
	 * 将Point转为string
	 */
	public static ptStr(pt: egret.Point): string
	{
		return '(' + pt.x + ', ' + pt.y +')';
	}

	/*
	 * 次数限制打印log
	 * @param name log的名字
	 * @param count log最多打印的次数
	 * @param log log的类型
	 */
	public static logCount(name: string, count:number, log:string)
	{
		var n = Debug.arrCount[name];
		if (!n)
		{
			Debug.arrCount[name] = 0;
		}
		else 
		{
			if(n > count)
			{
				return;
			}
		}

		Debug.arrCount[name]++;

		console.log(log);
	}

	/*
	 * 根据时间限制打印log
	 * @param name log的名字
	 * @param time 每个log打印的最短时间限制
	 * @param log log的类型
	 */
	public static logTime(name: string, time:number, log:string)
	{
		var now = egret.getTimer();

		var last = Debug.arrTime[name];
		if (last)
		{
			if(now - last < time)
			{
				return;
			}
		}

		Debug.arrTime[name] = now;

		console.log(log);
	}
}