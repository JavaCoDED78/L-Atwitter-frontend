export const getPhoneCode = (userCountryCode?: string): string => {
    const countryCode = countryCodes.find((value) => value.countryCode === userCountryCode);

    return countryCode ? countryCode.phoneCode : "";
};

export const getCountryCode = (userCountryCode?: string): string => {
    const countryCode = countryCodes.find((value) => value.countryCode === userCountryCode);

    return countryCode ? countryCode.countryCode : "";
};

export const getCountry = (userCountryCode?: string): string => {
    const countryCode = countryCodes.find((value) => value.countryCode === userCountryCode);

    return countryCode ? countryCode.country : "";
};

export const countryCodes = [
    { countryCode: "AF", phoneCode: "+93", country: "Afghanistan" },
    { countryCode: "AL", phoneCode: "+355", country: "Albania" },
    { countryCode: "DZ", phoneCode: "+213", country: "Algeria" },
    { countryCode: "AS", phoneCode: "+1", country: "American Samoa" },
    { countryCode: "AD", phoneCode: "+376", country: "Andorra" },
    { countryCode: "AO", phoneCode: "+244", country: "Angola" },
    { countryCode: "AI", phoneCode: "+1", country: "Anguilla" },
    { countryCode: "AG", phoneCode: "+1", country: "Antigua and Barbuda" },
    { countryCode: "AR", phoneCode: "+54", country: "Argentina" },
    { countryCode: "AM", phoneCode: "+374", country: "Armenia" },
    { countryCode: "AW", phoneCode: "+297", country: "Aruba" },
    { countryCode: "AU", phoneCode: "+61", country: "Australia" },
    { countryCode: "AT", phoneCode: "+43", country: "Austria" },
    { countryCode: "AZ", phoneCode: "+994", country: "Azerbaijan" },
    { countryCode: "BS", phoneCode: "+1", country: "Bahamas" },
    { countryCode: "BH", phoneCode: "+973", country: "Bahrain" },
    { countryCode: "BD", phoneCode: "+880", country: "Bangladesh" },
    { countryCode: "BB", phoneCode: "+1", country: "Barbados" },
    { countryCode: "BY", phoneCode: "+375", country: "Belarus" },
    { countryCode: "BE", phoneCode: "+32", country: "Belgium" },
    { countryCode: "BZ", phoneCode: "+501", country: "Belize" },
    { countryCode: "BJ", phoneCode: "+229", country: "Benin" },
    { countryCode: "BM", phoneCode: "+1", country: "Bermuda" },
    { countryCode: "BT", phoneCode: "+975", country: "Bhutan" },
    { countryCode: "BO", phoneCode: "+591", country: "Bolivia" },
    { countryCode: "BQ", phoneCode: "+599", country: "Bonaire, Sint Eustatius and Saba" },
    { countryCode: "BA", phoneCode: "+387", country: "Bosnia and Herzegovina" },
    { countryCode: "BW", phoneCode: "+267", country: "Botswana" },
    { countryCode: "BR", phoneCode: "+55", country: "Brazil" },
    { countryCode: "VG", phoneCode: "+1", country: "British Virgin Islands" },
    { countryCode: "BN", phoneCode: "+673", country: "Brunei" },
    { countryCode: "BG", phoneCode: "+359", country: "Bulgaria" },
    { countryCode: "BF", phoneCode: "+226", country: "Burkina Faso" },
    { countryCode: "BI", phoneCode: "+257", country: "Burundi" },
    { countryCode: "KH", phoneCode: "+855", country: "Cambodia" },
    { countryCode: "CM", phoneCode: "+237", country: "Cameroon" },
    { countryCode: "CA", phoneCode: "+1", country: "Canada" },
    { countryCode: "CV", phoneCode: "+238", country: "Cape Verde" },
    { countryCode: "KY", phoneCode: "+1", country: "Cayman Islands" },
    { countryCode: "CF", phoneCode: "+236", country: "Central African Republic" },
    { countryCode: "TD", phoneCode: "+235", country: "Chad" },
    { countryCode: "CL", phoneCode: "+56", country: "Chile" },
    { countryCode: "CN", phoneCode: "+86", country: "China" },
    { countryCode: "CO", phoneCode: "+57", country: "Colombia" },
    { countryCode: "KM", phoneCode: "+269", country: "Comoros" },
    { countryCode: "CG", phoneCode: "+242", country: "Congo" },
    { countryCode: "CK", phoneCode: "+682", country: "Cook Islands" },
    { countryCode: "CR", phoneCode: "+506", country: "Costa Rica" },
    { countryCode: "HR", phoneCode: "+385", country: "Croatia" },
    { countryCode: "CU", phoneCode: "+53", country: "Cuba" },
    { countryCode: "CW", phoneCode: "+599", country: "Curaçao" },
    { countryCode: "CY", phoneCode: "+357", country: "Cyprus" },
    { countryCode: "CZ", phoneCode: "+420", country: "Czech Republic" },
    { countryCode: "CI", phoneCode: "+225", country: "Côte d'Ivoire" },
    { countryCode: "DK", phoneCode: "+45", country: "Denmark" },
    { countryCode: "DJ", phoneCode: "+253", country: "Djibouti" },
    { countryCode: "DM", phoneCode: "+1", country: "Dominica" },
    { countryCode: "DO", phoneCode: "+1", country: "Dominican Republic" },
    { countryCode: "EC", phoneCode: "+593", country: "Ecuador" },
    { countryCode: "EG", phoneCode: "+20", country: "Egypt" },
    { countryCode: "SV", phoneCode: "+503", country: "El Salvador" },
    { countryCode: "GQ", phoneCode: "+240", country: "Equatorial Guinea" },
    { countryCode: "ER", phoneCode: "+291", country: "Eritrea" },
    { countryCode: "EE", phoneCode: "+372", country: "Estonia" },
    { countryCode: "ET", phoneCode: "+251", country: "Ethiopia" },
    { countryCode: "FK", phoneCode: "+500", country: "Falkland Islands" },
    { countryCode: "FO", phoneCode: "+298", country: "Faroe Islands" },
    { countryCode: "FJ", phoneCode: "+679", country: "Fiji" },
    { countryCode: "FI", phoneCode: "+358", country: "Finland" },
    { countryCode: "FR", phoneCode: "+33", country: "France" },
    { countryCode: "GF", phoneCode: "+594", country: "French Guiana" },
    { countryCode: "PF", phoneCode: "+689", country: "French Polynesia" },
    { countryCode: "GA", phoneCode: "+241", country: "Gabon" },
    { countryCode: "GM", phoneCode: "+220", country: "Gambia" },
    { countryCode: "GE", phoneCode: "+995", country: "Georgia" },
    { countryCode: "DE", phoneCode: "+49", country: "Germany" },
    { countryCode: "GH", phoneCode: "+233", country: "Ghana" },
    { countryCode: "GI", phoneCode: "+350", country: "Gibraltar" },
    { countryCode: "GR", phoneCode: "+30", country: "Greece" },
    { countryCode: "GL", phoneCode: "+299", country: "Greenland" },
    { countryCode: "GD", phoneCode: "+1", country: "Grenada" },
    { countryCode: "GP", phoneCode: "+590", country: "Guadeloupe" },
    { countryCode: "GU", phoneCode: "+1", country: "Guam" },
    { countryCode: "GT", phoneCode: "+502", country: "Guatemala" },
    { countryCode: "GN", phoneCode: "+224", country: "Guinea" },
    { countryCode: "GW", phoneCode: "+245", country: "Guinea-Bissau" },
    { countryCode: "GY", phoneCode: "+592", country: "Guyana" },
    { countryCode: "HT", phoneCode: "+509", country: "Haiti" },
    { countryCode: "HN", phoneCode: "+504", country: "Honduras" },
    { countryCode: "HK", phoneCode: "+852", country: "Hong Kong" },
    { countryCode: "HU", phoneCode: "+36", country: "Hungary" },
    { countryCode: "IS", phoneCode: "+354", country: "Iceland" },
    { countryCode: "IN", phoneCode: "+91", country: "India" },
    { countryCode: "ID", phoneCode: "+62", country: "Indonesia" },
    { countryCode: "IR", phoneCode: "+98", country: "Iran" },
    { countryCode: "IQ", phoneCode: "+964", country: "Iraq" },
    { countryCode: "IE", phoneCode: "+353", country: "Ireland" },
    { countryCode: "IM", phoneCode: "+44", country: "Isle Of Man" },
    { countryCode: "IL", phoneCode: "+972", country: "Israel" },
    { countryCode: "IT", phoneCode: "+39", country: "Italy" },
    { countryCode: "JM", phoneCode: "+1", country: "Jamaica" },
    { countryCode: "JP", phoneCode: "+81", country: "Japan" },
    { countryCode: "JE", phoneCode: "+44", country: "Jersey" },
    { countryCode: "JO", phoneCode: "+962", country: "Jordan" },
    { countryCode: "KZ", phoneCode: "+7", country: "Kazakhstan" },
    { countryCode: "KE", phoneCode: "+254", country: "Kenya" },
    { countryCode: "KI", phoneCode: "+686", country: "Kiribati" },
    { countryCode: "KW", phoneCode: "+965", country: "Kuwait" },
    { countryCode: "KG", phoneCode: "+996", country: "Kyrgyzstan" },
    { countryCode: "LA", phoneCode: "+856", country: "Laos" },
    { countryCode: "LV", phoneCode: "+371", country: "Latvia" },
    { countryCode: "LB", phoneCode: "+961", country: "Lebanon" },
    { countryCode: "LS", phoneCode: "+266", country: "Lesotho" },
    { countryCode: "LR", phoneCode: "+231", country: "Liberia" },
    { countryCode: "LY", phoneCode: "+218", country: "Libya" },
    { countryCode: "LI", phoneCode: "+423", country: "Liechtenstein" },
    { countryCode: "LT", phoneCode: "+370", country: "Lithuania" },
    { countryCode: "LU", phoneCode: "+352", country: "Luxembourg" },
    { countryCode: "MO", phoneCode: "+853", country: "Macao" },
    { countryCode: "MK", phoneCode: "+389", country: "Macedonia" },
    { countryCode: "MG", phoneCode: "+261", country: "Madagascar" },
    { countryCode: "MW", phoneCode: "+265", country: "Malawi" },
    { countryCode: "MY", phoneCode: "+60", country: "Malaysia" },
    { countryCode: "MV", phoneCode: "+960", country: "Maldives" },
    { countryCode: "ML", phoneCode: "+223", country: "Mali" },
    { countryCode: "MT", phoneCode: "+356", country: "Malta" },
    { countryCode: "MQ", phoneCode: "+596", country: "Martinique" },
    { countryCode: "MR", phoneCode: "+222", country: "Mauritania" },
    { countryCode: "MU", phoneCode: "+230", country: "Mauritius" },
    { countryCode: "YT", phoneCode: "+262", country: "Mayotte" },
    { countryCode: "MX", phoneCode: "+52", country: "Mexico" },
    { countryCode: "FM", phoneCode: "+691", country: "Micronesia" },
    { countryCode: "MD", phoneCode: "+373", country: "Moldova" },
    { countryCode: "MC", phoneCode: "+377", country: "Monaco" },
    { countryCode: "MN", phoneCode: "+976", country: "Mongolia" },
    { countryCode: "ME", phoneCode: "+382", country: "Montenegro" },
    { countryCode: "MS", phoneCode: "+1", country: "Montserrat" },
    { countryCode: "MA", phoneCode: "+212", country: "Morocco" },
    { countryCode: "MZ", phoneCode: "+258", country: "Mozambique" },
    { countryCode: "MM", phoneCode: "+95", country: "Myanmar" },
    { countryCode: "NA", phoneCode: "+264", country: "Namibia" },
    { countryCode: "NR", phoneCode: "+674", country: "Nauru" },
    { countryCode: "NP", phoneCode: "+977", country: "Nepal" },
    { countryCode: "NL", phoneCode: "+31", country: "Netherlands" },
    { countryCode: "NC", phoneCode: "+687", country: "New Caledonia" },
    { countryCode: "NZ", phoneCode: "+64", country: "New Zealand" },
    { countryCode: "NI", phoneCode: "+505", country: "Nicaragua" },
    { countryCode: "NE", phoneCode: "+227", country: "Niger" },
    { countryCode: "NG", phoneCode: "+234", country: "Nigeria" },
    { countryCode: "NF", phoneCode: "+672", country: "Norfolk Island" },
    { countryCode: "MP", phoneCode: "+1", country: "Northern Mariana Islands" },
    { countryCode: "NO", phoneCode: "+47", country: "Norway" },
    { countryCode: "OM", phoneCode: "+968", country: "Oman" },
    { countryCode: "PK", phoneCode: "+92", country: "Pakistan" },
    { countryCode: "PS", phoneCode: "+970", country: "Palestine" },
    { countryCode: "PA", phoneCode: "+507", country: "Panama" },
    { countryCode: "PG", phoneCode: "+675", country: "Papua New Guinea" },
    { countryCode: "PY", phoneCode: "+595", country: "Paraguay" },
    { countryCode: "PE", phoneCode: "+51", country: "Peru" },
    { countryCode: "PH", phoneCode: "+63", country: "Philippines" },
    { countryCode: "PL", phoneCode: "+48", country: "Poland" },
    { countryCode: "PT", phoneCode: "+351", country: "Portugal" },
    { countryCode: "PR", phoneCode: "+1", country: "Puerto Rico" },
    { countryCode: "QA", phoneCode: "+974", country: "Qatar" },
    { countryCode: "RE", phoneCode: "+262", country: "Reunion" },
    { countryCode: "RO", phoneCode: "+40", country: "Romania" },
    { countryCode: "RU", phoneCode: "+7", country: "Russia" },
    { countryCode: "RW", phoneCode: "+250", country: "Rwanda" },
    { countryCode: "KN", phoneCode: "+1", country: "Saint Kitts And Nevis" },
    { countryCode: "LC", phoneCode: "+1", country: "Saint Lucia" },
    { countryCode: "MF", phoneCode: "+590", country: "Saint Martin" },
    { countryCode: "VC", phoneCode: "+1", country: "Saint Vincent And The Grenadines" },
    { countryCode: "WS", phoneCode: "+685", country: "Samoa" },
    { countryCode: "SM", phoneCode: "+378", country: "San Marino" },
    { countryCode: "ST", phoneCode: "+239", country: "Sao Tome And Principe" },
    { countryCode: "SA", phoneCode: "+966", country: "Saudi Arabia" },
    { countryCode: "SN", phoneCode: "+221", country: "Senegal" },
    { countryCode: "RS", phoneCode: "+381", country: "Serbia" },
    { countryCode: "SC", phoneCode: "+248", country: "Seychelles" },
    { countryCode: "SL", phoneCode: "+232", country: "Sierra Leone" },
    { countryCode: "SG", phoneCode: "+65", country: "Singapore" },
    { countryCode: "SX", phoneCode: "+1", country: "Sint Maarten (Dutch part)" },
    { countryCode: "SK", phoneCode: "+421", country: "Slovakia" },
    { countryCode: "SI", phoneCode: "+386", country: "Slovenia" },
    { countryCode: "SB", phoneCode: "+677", country: "Solomon Islands" },
    { countryCode: "SO", phoneCode: "+252", country: "Somalia" },
    { countryCode: "ZA", phoneCode: "+27", country: "South Africa" },
    { countryCode: "KR", phoneCode: "+82", country: "South Korea" },
    { countryCode: "SS", phoneCode: "+211", country: "South Sudan" },
    { countryCode: "ES", phoneCode: "+34", country: "Spain" },
    { countryCode: "LK", phoneCode: "+94", country: "Sri Lanka" },
    { countryCode: "SR", phoneCode: "+597", country: "Suriname" },
    { countryCode: "SZ", phoneCode: "+268", country: "Swaziland" },
    { countryCode: "SE", phoneCode: "+46", country: "Sweden" },
    { countryCode: "CH", phoneCode: "+41", country: "Switzerland" },
    { countryCode: "TW", phoneCode: "+886", country: "Taiwan" },
    { countryCode: "TJ", phoneCode: "+992", country: "Tajikistan" },
    { countryCode: "TZ", phoneCode: "+255", country: "Tanzania" },
    { countryCode: "TH", phoneCode: "+66", country: "Thailand" },
    { countryCode: "CD", phoneCode: "+243", country: "The Democratic Republic Of Congo" },
    { countryCode: "TL", phoneCode: "+670", country: "Timor-Leste" },
    { countryCode: "TG", phoneCode: "+228", country: "Togo" },
    { countryCode: "TO", phoneCode: "+676", country: "Tonga" },
    { countryCode: "TT", phoneCode: "+1", country: "Trinidad and Tobago" },
    { countryCode: "TN", phoneCode: "+216", country: "Tunisia" },
    { countryCode: "TR", phoneCode: "+90", country: "Turkey" },
    { countryCode: "TM", phoneCode: "+993", country: "Turkmenistan" },
    { countryCode: "TC", phoneCode: "+1", country: "Turks And Caicos Islands" },
    { countryCode: "TV", phoneCode: "+688", country: "Tuvalu" },
    { countryCode: "VI", phoneCode: "+1", country: "U.S. Virgin Islands" },
    { countryCode: "UG", phoneCode: "+256", country: "Uganda" },
    { countryCode: "UA", phoneCode: "+380", country: "Ukraine" },
    { countryCode: "AE", phoneCode: "+971", country: "United Arab Emirates" },
    { countryCode: "GB", phoneCode: "+44", country: "United Kingdom" },
    { countryCode: "US", phoneCode: "+1", country: "United States" },
    { countryCode: "UY", phoneCode: "+598", country: "Uruguay" },
    { countryCode: "UZ", phoneCode: "+998", country: "Uzbekistan" },
    { countryCode: "VU", phoneCode: "+678", country: "Vanuatu" },
    { countryCode: "VE", phoneCode: "+58", country: "Venezuela" },
    { countryCode: "VN", phoneCode: "+84", country: "Vietnam" },
    { countryCode: "XK", phoneCode: "+383", country: "XK" },
    { countryCode: "YE", phoneCode: "+967", country: "Yemen" },
    { countryCode: "ZM", phoneCode: "+260", country: "Zambia" },
    { countryCode: "ZW", phoneCode: "+263", country: "Zimbabwe" }
];
