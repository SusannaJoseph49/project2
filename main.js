const loc=()=>{

    const status = document.querySelector('.status');

    const success = (position) =>
    {
      console.log(position)
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const geoApiUrl = `https://us1.locationiq.com/v1/reverse?key=pk.4e329bcab1f9f19eb24bdf847a4ad511&lat=${latitude}&lon=${longitude}&format=json`
      fetch(geoApiUrl)
       .then(res => res.json())

       .then(data => {
        console.log(data)
        const place = data.display_name;
        console.log(place);
        status.textContent = data.display_name;
      })
    }
    const error = () =>
    {
        status.textContent = 'Unable to retreive location';
    }
    navigator.geolocation.getCurrentPosition(success, error);

}
document.querySelector('.findloc').addEventListener('click', loc);