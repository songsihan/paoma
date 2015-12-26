
/**
 * 游戏中的角色
 */
module game {
    export class SkillMgr {
        private role: game.Role;

        public constructor(role : game.Role) 
        {
            this.role = role;
        }

        public UseSkill(skillId : number)
        {
            if ( this.role.IsUsingSkill() ) return;

            var config = game.SkillConfig.GetInstance().GetConfig(skillId)
            if (!config) return;

            //技能表现
            this.role.SetAction(config.action)
            if (config.sound != "")
            {
                game.GameSound.GetInstance().PlaySound(config.sound, false);
            }
        }
    }
}