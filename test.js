class Road {
  constructor(road, n) {

    this.road = road.split('');
    this.n = n;
    this.lights = [];
  }

  runCars() {

    const green = 'G';
    const red = 'R';
    const yellow = 'Y';
    const car = 'C';
    const lastBlock = this.road.length - 1;
  
    for (let i = lastBlock; i >= 0; i--) {
      let currentBlock = this.road[i];
      let nextBlock = this.road[i + 1]

 
     
      if (this.road[lastBlock] == car) {
        this.road[lastBlock] = '.';
        continue;
      }


      if (currentBlock == car && nextBlock != red && nextBlock != yellow) {
        this.road[i + 1] = car;
        this.road[i] = '.';
      }
    }
  }

  initLights() {


    this.road.forEach(( el, i)  => {  // ищим светофоры
      if (el != '.' && el != 'C') {
        this.lights.push({
          position: i,
          color: el,
          timeLeft: // времени осталось
        });
      }
    });

    console.log(this.lights)


  }


  init() {

    this.initLights();
    for (let i = 0; i <= this.n; i++) {
      this.runCars();
    }

    return this.road.join('');
  }



}



function trafficLights(road, n) {
  let game = new Road(road, n);
  return game.init();
}


console.log(trafficLights("..G..", 2));





/*


[
  "CCC.G...R...", // 0 initial state as passed
  ".CCCG...R...", // 1
  "..CCC...R...", // 2 show 1st car, not the green light
  "..CCGC..R...", // 3 2nd car cannot enter intersection because 1st car blocks the exit
  "...CC.C.R...", // 4 show 2nd car, not the green light
  "...COC.CG...", // 5 3rd car stops for the orange light
  "...CR.C.C...", // 6
  "...CR..CGC..", // 7
  "...CR...C.C.", // 8
  "...CR...GC.C", // 9
  "...CR...O.C.", // 10
  "....C...R..C", // 11 3rd car can proceed
  "....GC..R...", // 12
  "....G.C.R...", // 13
  "....G..CR...", // 14
  "....G..CR...", // 15
  "....O...C..."  // 16
]


*/
      //console.log(currentBlock === car, currentBlock, car);
