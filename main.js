let clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    setHours: function(h) {this.hours = h},
    setMinutes: function(m) {this.minutes = m},
    setSeconds: function(s) {this.seconds = s}
};

//Dates and Times
let now = new Date()
clock.setHours(now.getHours());
clock.setMinutes(now.getMinutes());
clock.setSeconds(now.getSeconds());
console.log(clock)

//Intervals
setInterval(function() {
    clock.seconds++
    if(clock.seconds === 60){
        clock.seconds = 0;
        clock.minutes++;
    }
    if(clock.minutes === 60){
        clock.minutes = 0;
        clock.hours++;
    }
    if(clock.hours === 24){
        clock.hours = 0;
    }
}, 1000);

console.log(clock);