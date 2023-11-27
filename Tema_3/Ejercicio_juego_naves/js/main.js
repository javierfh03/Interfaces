const cookieMap = getCookies()
var ship = new HeroShip(cookieMap)
var audio = new AudioManager(cookieMap)

audio.playTheme()

var solarSystems = [
    new SolarSystem("Solar System", "img/solarSystem0.jpg",
    new PeacefullPlanet("Mercury", "mercury", "In this planet it's very hot, it seems peaceful because it doesn't have a population"),
    new HostilePlanet("Venus", "venus", "In this planet the weader is very violent, it seems to have a hostile creatures"),
        new PeacefullPlanet("The Earth", "earth", "In this planet contains a semi avanced civilitation, in some zones it seems pacific"),
        new HostilePlanet("Mars", "mars", "This planet is very cold and it have a gigant orange desert, it seems hostile")),

    new SolarSystem("Dragon Ball System", "img/solarSystem1.jpg",
    new HostilePlanet("Cold", "cold", "The home of the space tyrant King Cold and his family, featuring advanced technology and futuristic structures"),
    new PeacefullPlanet("Namek", "namek", "A serene, green planet mostly covered by oceans, with floating cities in the sky, it seems peacefull"),
        new PeacefullPlanet("Earth", "earthdb", "A diverse world with majestic mountains, vast oceans, and modern cities, home to humans and mystical beings."),
        new HostilePlanet("Vegeta", "vegeta", "An arid, desert world with advanced technology, once home to the Saiyan warriors, it seems hostile")),

    new SolarSystem("Star Wars System", "img/solarSystem2.jpg",
        new PeacefullPlanet("Colussant", "colussant", "A bustling city-covered planet, this planet serves as the political and cultural hub of the galaxy"),
        new HostilePlanet("Hoth", "hoth", "This is an icy and desolate planet with freezing temperatures"),
        new PeacefullPlanet("Naboo", "naboo", "This planet is known for its rich cultural heritage and serves as a key player in galactic politics, it seems pacific"),
        new HostilePlanet("Tatooine", "tatooine", "A desert planet with harsh, arid landscapes, it have a lot of bounty hunter"))
]

putPlanets(solarSystems[ship.jumps])
putValues()
manipulateBattleInputs(false)