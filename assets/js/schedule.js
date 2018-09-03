$.getJSON(
    "https://www.randy-gentry.com/jsontest/assets/json/tracks.json",
    function(data) {
        
      //Only change the following line to how many races you have in the json file.
      // var races = 4;

      // console.log(data)

      var trackInfo = $("#track")

      var i = 0;

      for (i=0; i<data.tracks.length; i++) {
        var track = $('<td>').text(data.tracks[i].track);
        var location = $('<td>').text(data.tracks[i].location);
        var date = $('<td>').text(data.tracks[i].date);
        var row = $('<tr>');

        row.append(row, track, location, date);
        trackInfo.append(row);

        // console.log("track= " + data.tracks[0].track );

      };
      
    }
);

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};