var game;
(function (game) {
    var GameRuleJudge = (function () {
        function GameRuleJudge() {
        }
        var d = __define,c=GameRuleJudge;p=c.prototype;
        GameRuleJudge.GetInstance = function () {
            if (!this.instance) {
                this.instance = new GameRuleJudge();
            }
            return this.instance;
        };
        p.JudgeFight = function (attackRole, defendRole, distance, knockdown) {
            var direction = attackRole.GetDirection();
            var attackDist = distance * direction;
            var attackXPos = attackRole.GetPosX() + attackDist;
            var attackYPos = attackRole.GetPosY(); //调整Y轴的攻击距离
            var defendHeight = defendRole.GetHeight();
            var defendWidth = defendRole.GetWidth();
            var defendXPos = defendRole.GetPosX();
            var defendYPos = defendRole.GetPosY();
            if (attackXPos > (defendXPos - defendWidth / 2)
                && attackXPos < (defendXPos + defendWidth / 2)
                && attackYPos > (defendYPos - defendHeight / 2)
                && attackYPos < (defendYPos + defendHeight / 2)) {
                if (defendRole.IsDefend())
                    return;
                if (knockdown) {
                    defendRole.KnockDown(direction, game.KNOCK_DIST);
                }
                else {
                    defendRole.UnderAttack();
                }
            }
        };
        return GameRuleJudge;
    })();
    game.GameRuleJudge = GameRuleJudge;
    egret.registerClass(GameRuleJudge,"game.GameRuleJudge");
})(game || (game = {}));
