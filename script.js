
const magnetometer = document.getElementById("magnetometer")

const gyroscope = document.getElementById("gyroscope")

const accelerometer = document.getElementById("accelerometer")

const accelerometerBtn = document.getElementById("accelerometer-btn")
const gyroscopeBtn = document.getElementById("gyroscope-btn")
const magnetometerBtn = document.getElementById("magnetometer-btn")

function toggle(btn, block){
    btn.addEventListener('click', ()=>{
        if (block.style.display !== 'none') {
            block.style.display = 'none';
        }
        else {
            block.style.display = 'block';
        }
    })
}

function round2(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

toggle(accelerometerBtn, accelerometer)
toggle(gyroscopeBtn, gyroscope)
toggle(magnetometerBtn, magnetometer)

function createView(type,{x, y, z}){
    return `
            ${type}:
        X: ${round2(x)}\n
        Y: ${round2(y)}\n
        Z: ${round2(z)}\n
    
    `
}
const accelerometerSensor = new Accelerometer({ frequency: 60 });

accelerometerSensor.addEventListener("reading", () => {

    accelerometer.innerHTML = createView("accelerometer",accelerometerSensor )

});

accelerometerSensor.start();


const gyroscopeSensor = new Gyroscope({frequency: 60});

gyroscopeSensor.addEventListener('reading', (e) => {
    gyroscope.innerHTML = createView("gyroscope",gyroscopeSensor )
});

gyroscopeSensor.start();

const magnetometerSensor = new Magnetometer({frequency: 10});

magnetometerSensor.addEventListener('reading', (e) => {
    magnetometer.innerHTML = createView("magnetometer",magnetometerSensor )
});

magnetometerSensor.start();



