function playState(game) {
    this.init = function () {

    }
    this.preload = function () {
        game.load.image('box1','asset/img/box1.png');
    }
    this.create = function () {
        var lz = ['box1'];
        var em = game.add.emitter(300,300,20);
        em.makeParticles(lz);
        em.setXSpeed(-20,20);
        em.setYSpeed(-20,20);
        em.setScale(0.2, 0.5, 0.2, 0.5, 1000);
        em.gravity=0;
        //em.setAlpha(1,0.1,5000);
        em.setRotation()
        em.flow(1000, 500, 20, -1,false);
    }
}