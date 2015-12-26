
/**
 * 游戏中角色的AI
 */
module game {
    export class RoleAI {
        private role: game.Role;
        private aiStatus: AI_STATUS;
        private bMoving: boolean;

        public constructor(role: game.Role) {
            this.role = role;
            this.aiStatus = AI_STATUS.IDLE;
            this.bMoving = false;
        }

        public ResetMoving()
        {
            this.bMoving = false;
        }
        
        // AI的表现
        public Behave()
        {
            //人物正在受到攻击或者使用技能不能操作
            if (!this.role.CheckCanOperate()) return;

            if (this.aiStatus == AI_STATUS.ATTACK) return;

            var value = Math.random() * 100;

            if (value < 70)
            {
                this.aiStatus = AI_STATUS.DEFEND;
            }
            else if (value < 100)
            {
                this.aiStatus = AI_STATUS.ATTACK
            }
        }

        public OnTiker()
        {
            if (!this.role.CheckCanOperate()) return;

            if (this.aiStatus == AI_STATUS.ATTACK)
            {
                var player = game.Game.GetInstance().GetPlayer();
                if (!player) return;

                var posX = this.role.GetPosX();
                var posY = this.role.GetPosY();

                var targetX = player.GetPosX();
                var targetY = player.GetPosY();

                if ( Math.abs(posX - targetX) > 80 )
                {
                    var diff = targetX - posX;

                    posX = posX + diff / Math.abs(diff) * 2;

                    this.role.SetDirection(diff / Math.abs(diff))
                    this.role.SetPosX(posX);

                    if (!this.bMoving)
                    {
                        this.role.SetAction("run");
                        this.bMoving = true;                    
                    }
                    return;
                }

                if ( Math.abs(posY - targetY ) > 100)
                {
                    var diff = targetY - posY;
                    posY = posY + diff / Math.abs(diff) * 2;

                    this.role.SetPosY(posY);

                    if (!this.bMoving)
                    {
                        this.role.SetAction("run");
                        this.bMoving = true;                    
                    }
                    return;
                }
                
                this.bMoving = false;

                var ratio = Math.random() * 100;
                if (ratio < 20)
                {
                    this.role.UseSkill(1);
                }
                else if(ratio < 40)
                {
                    this.role.UseSkill(2);
                }
                else if(ratio < 60)
                {
                    this.role.UseSkill(3);
                }
                else if(ratio < 80)
                {
                    this.role.UseSkill(4);
                }
                else
                {
                    this.role.UseSkill(5);
                }

                this.aiStatus = AI_STATUS.IDLE;
            }
            else if(this.aiStatus == AI_STATUS.DEFEND)
            {
                
                this.aiStatus = AI_STATUS.IDLE;
            }
        }
    }
}