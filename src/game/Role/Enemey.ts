
/**
 * 游戏中的角色
 */
module game {
    export class Enemey extends game.Role {
        private AI: RoleAI;

        public constructor(armature : dragonBones.FastArmature) 
        {
            super(armature);
            this.AI = new RoleAI(this);
        }

        public Update()
        {
            super.Update();
            this.AI.Behave();
            this.AI.OnTiker();
        }

        public onFrameEvent(evt: dragonBones.FrameEvent):void
        {
            super.onFrameEvent(evt);

            if (evt.frameLabel == "attack" || evt.frameLabel == "knockdown")
            {
                var skillId = super.GetUseSkillId();
                var enemey = game.Game.GetInstance().GetPlayer();
                var config = game.SkillConfig.GetInstance().GetConfig(skillId)
                if (!config) return;

                var bKnockDown = config.konckDown && evt.frameLabel == "knockdown";
                game.GameRuleJudge.GetInstance().JudgeFight(this, enemey, config.attack_distance, bKnockDown);
            }
        }

        public UnderAttack()
        {
            super.UnderAttack();
            this.AI.ResetMoving();
        }

        public AutoAdjustDir()
        {
            if (this.IsUsingSkill()) return;

            var enemey = game.Game.GetInstance().GetPlayer();
            var enemeyPosX = enemey.GetPosX();
            var selfPosX = this.GetPosX();

            var dir = Math.abs(enemeyPosX - selfPosX) / (enemeyPosX - selfPosX);

            if (this.GetDirection() != dir)
            {
                this.SetDirection(dir);
            }
        }
    }
}