(function () {
    'use strict';

    requirejs.config({
        baseUrl: 'js/',

        paths: {
            'entity-manager': '../lib/entity-system-js/entity-manager',
            'lib': '../lib'
        }
    });

    require([
    'states/boot',
    'states/preloader',
    'states/title',
    'states/game',
    'states/upgrade',
    'states/player-choice',
    'states/score',
    'states/controls'
    ],
    function (Boot, Preloader, Title, Game, Upgrade, PlayerChoice, Score, Controls) {

        var game = new Phaser.Game(960, 768, Phaser.AUTO, 'stage', {
            init: init,
            create: create
        });

        function create() {
            this.game.state.add('Boot', Boot);
            this.game.state.add('Preload', Preloader);
            this.game.state.add('Title', Title);
            this.game.state.add('Game', Game);
            this.game.state.add('Upgrade', Upgrade);
            this.game.state.add('PlayerChoice', PlayerChoice);
            this.game.state.add('Score', Score);
            this.game.state.add('Controls', Controls);

            this.game.state.start('Boot');
        }

        function init() {
            // Activate plugins.
            this.game.add.plugin(Phaser.Plugin.Tiled);
        }
    });
}());


