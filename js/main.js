

function initMap() {
    // Your location
    const loc={lat: 19.075983, lng: 72.877655};
    // setting pointer
    const map= new google.maps.Map(document.querySelector('.map'), {
    zoom:14,
    center:loc
  });
  const marker= new google.maps.Marker({position: loc ,map:map});
}
