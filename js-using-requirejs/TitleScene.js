// TitleScene.js
define(["Scene", "SolidBackground", "Text", "BlinkingText", "AnimatedSprite"],
    function(Scene, SolidBackground, Text, BlinkingText, AnimatedSprite){
        function TitleScene(){
            var that = this;
            this.numberOfStars = 100;
            this.stars = [];
            var addStar = function() {
                // TODO: don't hardcode size of the screen nor size of the sprite
                var randomX = (Math.random()*(460 - 8)) + 8;
                var randomY = (Math.random()*(-1600)) + 800;
                var randomOpacity = Math.random();
                var randomSpeedY = (randomOpacity*1.5); // far stars move slower
                var star = new AnimatedSprite("img/star-animated.png", {x: randomX, y: randomY} , {x:0, y:randomSpeedY}, randomOpacity, 16, 16, 8, .4);
                that.stars.push(star);
                that.gameObjects.push(star);
            };
            this.initialize = function(){
                // TODO: don't hardcode size of the screen 
                var background = new SolidBackground("#111", 0, 0, 460, 800);
                this.gameObjects.push(background);
                var title = new Text("Serenity", "#FFF", "48px sans-serif", 150, 200);
                this.gameObjects.push(title);
                var subtitle = new Text("a fanfic space shooter based on the Firefly universe", "#AAA", "12px sans-serif", 100, 225);
                this.gameObjects.push(subtitle);
                var startText = new BlinkingText("Start", "#b9090b", "24px sans-serif", 200, 400, 2000);
                this.gameObjects.push(startText);
                for (var i = 0; i < this.numberOfStars; i++) {
                    addStar();
                };
                // base
                TitleScene.prototype.initialize.call(this);
            }
            this.update = function() {
                // if star out of bounds move to top of the screen
                for (s in this.stars)
                {
                    var star = this.stars[s];
                    if (star.y > 800) star.y = -10;
                }
                // base
                TitleScene.prototype.update.call(this);
            }
        }
        // TitleScene 'derives' from Scene
        TitleScene.prototype = new Scene();
        return TitleScene;
    }
);