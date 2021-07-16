class Link{
    constructor(bodyA,bodyB){
        var lastrect = bodyA.body.bodies.length-2
        this.link = Constraint.create({
            bodyA:bodyA.body.bodies[lastrect],
            bodyB:bodyB,
            length :-10,
            stiffness:0.01
        })
        World.add(world,this.link)
    }
}