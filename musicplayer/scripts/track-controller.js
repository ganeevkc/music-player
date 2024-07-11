/* 
    call backend api via api-client.js

*/
import { apiCall } from "./api-client.js";
function loadTrack() {
	const url =
		"https://raw.githubusercontent.com/ganeevkc/music-player-api/main/music-api.json";
	const promise = apiCall(url);
	//first pending
	promise
		.then(function (response) {
			//resp: header not visible (200 success, json/xml/text) and body: json visible
			const pr = response.json();
			pr.then(function (data) {
				displayTracks(data.results);
				console.log("Track data", data);
			}).catch(function (err) {
				console.log("Invalid JSON", err);
			});
		})
		.catch(function (err) {
			console.log("Unable to make API call", err);
		}); //fullfil/success: then | reject/fail: catch
}
loadTrack();

function displayTracks(tracks) {
	for (var i = 0; i < tracks.length; i++) {
		displayTrack(tracks[i]);
	}
}
function displayTrack(track) {
	const card = `<div class="col-12 col-md-6 col-lg-4">
    <div class="card">
  <img src="${track.artworkUrl100}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${track.artistName}</h5>
    <p class="card-text">${track.trackName}</p>
    <a href="#" class="btn btn-primary">Add to Playlist</a>
  </div>
</div></div>`;
	console.log("hbv");
	const div = document.getElementById("tracks");
	div.innerHTML = div.innerHTML + card;
}
