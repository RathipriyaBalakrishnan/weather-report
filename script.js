function weather(){

    var button =document.getElementById('submitButton');
    
    button.onclick=()=>{
    let city=document.getElementById('textBox').value;
    const key='f57039e0520135bdbb0125f2a337c4cf';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(response=>response.json())
        .then(data=>{console.log(data)
        draw(data);})
        document.getElementById('loc').innerHTML=city;
    
    };
    
    function draw(data){
        var celci=Math.round(parseFloat(data.main.temp)-273.15);
        var far=Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
        var des=data.weather[0].description;
        var description=`${des}y`;
        document.getElementById('descr').innerHTML=description;
        document.getElementById('celci').innerHTML=celci +'&deg';
    }
    };
    
    window.onload=function(){
        weather();
    }