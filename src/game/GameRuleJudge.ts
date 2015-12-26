module game {
    export class GameRuleJudge 
    {
        private static instance: GameRuleJudge;

        public constructor() 
        {
        }

        public static GetInstance(): GameRuleJudge
        {
            if (!this.instance)
            {
                this.instance = new GameRuleJudge();
            }

            return this.instance;
        }

        public JudgeFight(attackRole: any, defendRole: any, distance: number, knockdown: boolean)
        {
        	var direction    = attackRole.GetDirection();
        	var attackDist   = distance * direction;
        	var attackXPos   = attackRole.GetPosX() + attackDist;
        	var attackYPos   = attackRole.GetPosY(); //调整Y轴的攻击距离

        	var defendHeight = defendRole.GetHeight();
        	var defendWidth = defendRole.GetWidth();
        	var defendXPos  = defendRole.GetPosX();
        	var defendYPos  = defendRole.GetPosY();

			if ( attackXPos > (defendXPos - defendWidth / 2)
				&& attackXPos < (defendXPos + defendWidth / 2)
				&& attackYPos > (defendYPos - defendHeight / 2)
				&& attackYPos < (defendYPos + defendHeight / 2)
				)
			{
                if (defendRole.IsDefend()) return;
                
                if (knockdown)
                {
                    defendRole.KnockDown(direction, KNOCK_DIST);
                }
                else
                {
                    defendRole.UnderAttack();
                }
			}
        }
    }
}