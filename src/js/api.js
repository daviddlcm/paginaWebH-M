function iniciarMap(){
    var coord = {lat:16.75112449683959 ,lng: -93.06365650958351};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}