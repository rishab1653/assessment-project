window.addEventListener("load", () =>{
    var lat;
    var long;
    var cityName;


    let d=new Date();
   if(d.getHours()==0 && d.getHours()<=3)
    {
        $("#body").css({"background":"linear-gradient(to bottom, #020111 10%,#3a3a52 100%)"})
    }
    else if(d.getHours()>3 && d.getHours()<5)
    $("#body").css({"background":"linear-gradient(to bottom, #020111 10%,#3a3a52 100%)"})

    else if(d.getHours()>=5 && d.getHours()<=8)
    $("#body").css({"background":"linear-gradient(to bottom, #757abf 0%,#8583be 60%,#eab0d1 100%)"})

    else if(d.getHours()>8 && d.getHours()<=12)
$("#body").css({"background": "linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)"});

else if(d.getHours()>12 && d.getHours()<=17)
$("#body").css({"background": "linear-gradient(to bottom, #2473ab 0%,#1e528e 70%,#5b7983 100%)","color":"white"})

else if(d.getHours()>17 && d.getHours()<=20)
$("#body").css({"background": "linear-gradient(to bottom, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)","color":"white"})

else if(d.getHours()>20 && d.getHours()<=23)
$("#body").css({"background": "linear-gradient(to bottom, #090401 50%,#4B1D06 100%)","color":"pink"})

$("#btn1").click(function(){
   
    var city=$("#inputCity").val();
    if(city!='')
    {
        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?q=" + city+ '&units=metric' + '&APPID=76b185c10d4bc6a73e0a51ec8c68db01',
            type:"GET",
            dataType:"jsonp",
            success: function(data){
            
                  cityName=data.name;
                  lat=data.coord.lat;
                  long=data.coord.lon;
                
            const proxy=`https://cors-anywhere.herokuapp.com/`;
            const api=`${proxy}https://api.darksky.net/forecast/89d7e10dc3def0fb678dff8f37fe4747/${lat},${long}`;
            
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
               console.log(data);
                const{temperature,humidity,visibility,summary,icon,windSpeed}= data.currently;
                const x=icon.replace(/-/g," ").toUpperCase();
                let t=temperature;
                var convert=Math.floor((t-32)*(5/9));
                  $("#temp").html("Temperature: "+convert + " C");
                $("#summary").html("Summary: "+summary);
                $("#humidity").html("Humidity: "+humidity);
                $("#status").html("Status: "+x);
                $("#visibility").html("Visibilty: "+visibility);
                $("#windspeed").html("Wind: "+windSpeed+" Kmph");

              
               
               setIcon(icon,document.getElementById("icon1"));
            })
       
        function setIcon(icon,iconID)
        {
            const skycons=new Skycons({color:"white"});
            const currentIcon=icon.replace(/-/g,"_").toUpperCase();
            skycons.play();
            return skycons.set(iconID , Skycons[currentIcon]);
        }
    }
}) 
}
else{
    alert("enter a valid city");
}
})

})