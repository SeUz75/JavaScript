function calculateDistance(){
    let lat= parseFloat(document.getElementById("latitude").value);
    let lon = parseFloat(document.getElementById("longitude").value);

    let object = document.getElementById("object").value;

    if(isNaN(lat) || isNaN(lon)){
        document.getElementById("result").innerText="Please enter valid coordinates";
        return;
    }

    let distances= {
        moon: 384400,
        mars: 225000000,
        sun : 149000000
    };

    let distance = distances[object];

    document.getElementById("reuslt").innerText= 'You  are ${distance.toLocalString()} km away from the ${object.charAt(0).toUppercase() + object.slice(1)}}';
}