;(function() {
	window.addEventListener('load', function () {
		var _initial_hash = '';
		try {
			_initial_hash = document.cookie.match(/__initial_track_cpa_hash=.{5,};?/)[0].split(/(=|;)/g)[2];
			window.navigator.sendBeacon('http://extrack.cpa2.zapasnoydomen.com/api/v1/tracking/mawiband/lead?initial_hash=' + _initial_hash);
		} catch (e) {
			return true;
		}
	});
})();