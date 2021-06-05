class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(180,0)

        var input = createInput("name")
        var button = createButton('play')
        var greeting = createElement('h3')

        input.position(130,180)
        button.position(300,200)

        button.mousePressed(function(){
        input.hide()
        button.hide()

        var name = input.value()

        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)

        greeting.html("hello player, welcome to the Car Racing Game. Lets enter into the world of racing"+name)
        greeting.position(150,300)
        })

    }

}