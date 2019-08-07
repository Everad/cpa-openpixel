;(function () {
	var countryMapping = { "Afghanistan": "AF", "Albania": "AL", "Algeria": "DZ", "Andorra": "AD", "Angola": "AO", "Anguilla": "AI", "Antigua & Barbuda": "AG", "Argentina": "AR", "Armenia": "AM", "Australia": "AU", "Austria": "AT", "Azerbaijan": "AZ", "Bahamas": "BS", "Bahrain": "BH", "Bangladesh": "BD", "Barbados": "BB", "Belarus": "BY", "Belgium": "BE", "Belize": "BZ", "Benin": "BJ", "Bermuda": "BM", "Bhutan": "BT", "Bolivia": "BO", "Bosnia & Herzegovina": "BA", "Botswana": "BW", "Brazil": "BR", "Brunei Darussalam": "BN", "Bulgaria": "BG", "Burkina Faso": "BF", "Burundi": "BI", "Cambodia": "KH", "Cameroon": "CM", "Canada": "CA", "Cape Verde": "CV", "Cayman Islands": "KY", "Central African Republic": "CF", "Chad": "TD", "Chile": "CL", "China": "CN", "China - Hong Kong / Macau": "MO", "Colombia": "CO", "Comoros": "KM", "Congo": "CD", "Congo, Democratic Republic of (DRC)": "CG", "Costa Rica": "CR", "Croatia": "HR", "Cuba": "CU", "Cyprus": "CY", "Czech Republic": "CZ", "Denmark": "DK", "Djibouti": "DJ", "Dominica": "DM", "Dominican Republic": "DO", "Ecuador": "EC", "Egypt": "EG", "El Salvador": "SV", "Equatorial Guinea": "GQ", "Eritrea": "ER", "Estonia": "EE", "Ethiopia": "ET", "Fiji": "FJ", "Finland": "FI", "France": "FR", "French Guiana": "GF", "Gabon": "GA", "Gambia": "GM", "Georgia": "GE", "Germany": "DE", "Ghana": "GH", "Great Britain": "GB", "Greece": "GR", "Grenada": "GD", "Guadeloupe": "GP", "Guatemala": "GT", "Guinea": "GN", "Guinea-Bissau": "GW", "Guyana": "GY", "Haiti": "HT", "Honduras": "HN", "Hungary": "HU", "Iceland": "IS", "India": "IN", "Indonesia": "ID", "Iran": "IR", "Iraq": "IQ", "Israel and the Occupied Territories": "IL", "Italy": "IT", "Ivory Coast (Cote dIvoire)": "CI", "Jamaica": "JM", "Japan": "JP", "Jordan": "JO", "Kazakhstan": "KZ", "Kenya": "KE", "Korea, Democratic Republic of (North Korea)": "KP", "Korea, Republic of (South Korea)": "KR", "Kosovo": "XK", "Kuwait": "KW", "Kyrgyz Republic (Kyrgyzstan)": "KG", "Laos": "LA", "Latvia": "LV", "Lebanon": "LB", "Lesotho": "LS", "Liberia": "LR", "Libya": "LY", "Liechtenstein": "LI", "Lithuania": "LT", "Luxembourg": "LU", "Madagascar": "MG", "Malawi": "MW", "Malaysia": "MY", "Maldives": "MV", "Mali": "ML", "Malta": "MT", "Martinique": "MQ", "Mauritania": "MR", "Mauritius": "MU", "Mayotte": "YT", "Mexico": "MX", "Moldova, Republic of": "MD", "Monaco": "MC", "Mongolia": "MN", "Montenegro": "ME", "Montserrat": "MS", "Morocco": "MA", "Mozambique": "MZ", "Myanmar/Burma": "MM", "Namibia": "MA", "Nepal": "NP", "New Zealand": "NZ", "Nicaragua": "NI", "Niger": "NE", "Nigeria": "NG", "North Macedonia, Republic of": "MK", "Norway": "NO", "Oman": "OM", "Pacific Islands": "PC", "Pakistan": "PK", "Panama": "PA", "Papua New Guinea": "PG", "Paraguay": "PY", "Peru": "PE", "Philippines": "PH", "Poland": "PL", "Portugal": "PT", "Puerto Rico": "PR", "Qatar": "QA", "Reunion": "RE", "Romania": "RO", "Russian Federation": "RU", "Rwanda": "RW", "Saint Kitts and Nevis": "KN", "Saint Lucia": "LC", "Saint Vincent and the Grenadines": "VC", "Samoa": "WS", "Sao Tome and Principe": "ST", "Saudi Arabia": "SA", "Senegal": "SN", "Serbia": "RS", "Seychelles": "SC", "Sierra Leone": "SL", "Singapore": "SG", "Slovak Republic (Slovakia)": "SK", "Slovenia": "SI", "Solomon Islands": "SB", "Somalia": "SO", "South Africa": "ZA", "South Sudan": "SS", "Spain": "ES", "Sri Lanka": "LK", "Sudan": "SD", "Suriname": "SR", "Swaziland": "SZ", "Sweden": "SE", "Switzerland": "CH", "Syria": "SY", "Tajikistan": "TJ", "Tanzania": "TZ", "Thailand": "TH", "Netherlands": "NL", "Timor Leste": "TL", "Togo": "TG", "Trinidad & Tobago": "TT", "Tunisia": "TN", "Turkey": "TR", "Turkmenistan": "TM", "Turks & Caicos Islands": "TC", "Uganda": "UG", "Ukraine": "UA", "United Arab Emirates": "AE", "United States of America (USA)": "US", "Uruguay": "UY", "Uzbekistan": "UZ", "Venezuela": "VE", "Vietnam": "VN", "Virgin Islands (UK)": "VG", "Virgin Islands (US)": "VI", "Yemen": "YE", "Zambia": "ZM", "Zimbabwe": "ZW" };
	var currencyMapping = {"$": "usd"};
	window.sendTokenFn = function (_token) {
		var _country_code = '';
		var _tcart = {};
		var _currency = ''
		var _amount = 0;
		var _initial_hash = '';
		try {
			_country_code = countryMapping[window.sessionStorage.getItem('Country')];
			_tcart = JSON.parse(window.localStorage.getItem('tcart'));
			_currency = currencyMapping[_tcart.currency];
			_amount = _tcart.amount;
			_initial_hash = document.cookie.match(/__initial_track_cpa_hash=.{5,};/)[0].split(/(=|;)/g)[2];
		} catch (e) {
			return true;
		}
		if (!_country_code || !_token || !_currency || !_amount) return true;
		window.navigator.sendBeacon("http://rocketprofit.exttracker.com/api/v1/tracking/mawiband/order"
		+ "?country_code=" + _country_code
		+ "&token=" + _token
		+ "&address=" + _amount+ '__' + _currency
		+ "&initial_hash=" + _initial_hash);
	}
})();