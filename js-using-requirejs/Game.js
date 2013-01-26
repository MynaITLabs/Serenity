// Game.js
define ([], 
    function(){
        function Game(){
            var game = this;
            this.scenes = [];
            this.fps = 50;
            this.update = function(){
                // update entities
                for (s in this.scenes){
                    this.scenes[s].update();
                }
            };
            this.draw = function(){
                // draw entities
                for (s in this.scenes){
                    this.scenes[s].draw();
                }
            };
            this.run = (function(){
                var updateInterval = 1000 / game.fps;
                var nextInterval = (new Date).getTime() + updateInterval;

                return function(){
                    // update is 50 fps
                    if((new Date).getTime() > nextInterval){
                        game.update();
                        nextInterval = (new Date).getTime() + updateInterval;
                    }
                    // draw is 60 fps max 
                    game.draw();
                }
            })();
        }
        return Game;
    }
);