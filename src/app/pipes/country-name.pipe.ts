import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryName',
  standalone: true
})
export class CountryNamePipe implements PipeTransform {

  transform(countryCode: string): string {
    switch (countryCode) {
      case 'RS':
        return 'Serbia'
      case 'BA':
        return 'Bosnia and Herzegovina'
      case 'HR':
        return 'Croatia'
      case 'HU':
        return 'Hungary'
      case 'RO':
        return 'Romania'
      case 'ME':
        return 'Montenegro'
      case 'MK':
        return 'North Macedonia'
      case 'DE':
        return 'Germany'
      case 'GB':
        return 'United Kingdom'
      case 'FR':
        return 'France'
      case 'CH':
        return 'Switzerland'
      case 'US':
        return 'United States'
      case 'CZ':
        return 'Czechia'
      case 'AR':
        return 'Argentina'
      case 'BR':
        return 'Brazil'
      case 'AU':
        return 'Australia'
      case 'AT':
        return 'Austria'
      case 'CN':
        return 'China'
      case 'IN':
        return 'India'
      case 'CA':
        return 'Canada'
      case 'IL':
        return 'Israel'
      case 'IT':
        return 'Italy'
// By alphabet

      case 'AF':
        return 'Afghanistan'
      case 'AL':
        return 'Albania'
      case 'DZ':
        return 'Algeria'
      case 'AS':
        return 'American Samoa'
      case 'AD':
        return 'Andorra'
      case 'AO':
        return 'Angola'
      case 'AI':
        return 'Anguilla'
      case 'AQ':
        return 'Antarctica'
      case 'AG':
        return 'Antigua and Barbuda'
      case 'AM':
        return 'Armenia'
      case 'AW':
        return 'Aruba'
      case 'AZ':
        return 'Azerbaijan'

      case 'BS':
        return 'Bahamas'
      case 'BH':
        return 'Bahrain'
      case 'BD':
        return 'Bangladesh'
      case 'BB':
        return 'Barbados'
      case 'BY':
        return 'Belarus'
      case 'BE':
        return 'Belgium'
      case 'BZ':
        return 'Belize'
      case 'BJ':
        return 'Benin'
      case 'BM':
        return 'Bermuda'
      case 'BT':
        return 'Bhutan'
      case 'BO':
        return 'Bolivia'
      case 'BW':
        return 'Botswana'
      case 'VG':
        return 'British Virgin Islands'
      case 'BN':
        return 'Brunei'
      case 'BG':
        return 'Bulgaria'
      case 'BF':
        return 'Burkina Faso'
      case 'BI':
        return 'Burundi'

      case 'KH':
        return 'Cambodia'
      case 'CM':
        return 'Cameroon'
      case 'CV':
        return 'Cape Verde'
      case 'KY':
        return 'Cayman Islands'
      case 'CF':
        return 'Central African Republic'
      case 'TD':
        return 'Chad'
      case 'CL':
        return 'Chile'
      case 'CX':
        return 'Christmas Islands'
      case 'CC':
        return 'Cocos Islands'
      case 'CO':
        return 'Colombia'
      case 'KM':
        return 'Comoros'
      case 'CK':
        return 'Cook Islands'
      case 'CR':
        return 'Costa Rica'
      case 'CU':
        return 'Cuba'
      case 'CW':
        return 'Curacao'
      case 'CY':
        return 'Cyprus'
      case 'CD':
        return 'Democratic Republic of Congo'

      case 'DK':
        return 'Denmark'
      case 'DJ':
        return 'Djibouti'
      case 'DM':
        return 'Dominica'
      case 'DO':
        return 'Dominican Republic'

      case 'TL':
        return 'East Timor'
      case 'EC':
        return 'Ecuador'
      case 'EG':
        return 'Egypt'
      case 'SV':
        return 'El Salvador'
      case 'GQ':
        return 'Equatorial Guinea'
      case 'ER':
        return 'Eritrea'
      case 'EE':
        return 'Estonia'
      case 'ET':
        return 'Ethiopia'

      case 'FK':
        return 'Falkland Islands'
      case 'FO':
        return 'Faroe Islands'
      case 'FJ':
        return 'Fiji'
      case 'FI':
        return 'Finland'
      case 'PF':
        return 'French Polynesia'

      case 'GA':
        return 'Gabon'
      case 'GM':
        return 'Gambia'
      case 'GE':
        return 'Georgia'
      case 'GH':
        return 'Ghana'
      case 'GI':
        return 'Gibraltar'
      case 'GR':
        return 'Greece'
      case 'GL':
        return 'Greenland'
      case 'GD':
        return 'Grenada'
      case 'GU':
        return 'Guam'
      case 'GT':
        return 'Guatemala'
      case 'GN':
        return 'Guinea'
      case 'GW':
        return 'Guinea Bissau'
      case 'GY':
        return 'Guyana'

      case 'HT':
        return 'Haiti'
      case 'HN':
        return 'Honduras'
      case 'HK':
        return 'Hong Kong'

      case 'IS':
        return 'Iceland'
      case 'ID':
        return 'Indonesia'
      case 'IR':
        return 'Iran'
      case 'IQ':
        return 'Iraq'
      case 'IE':
        return 'Ireland'
      case 'IM':
        return 'Isle of Man'
      case 'CI':
        return 'Ivory Coast'

      case 'JM':
        return 'Jamaica'
      case 'JP':
        return 'Japan'
      case 'JE':
        return 'Jersey'
      case 'JO':
        return 'Jordan'

      case 'KZ':
        return 'Kazakhstan'
      case 'KE':
        return 'Kenya'
      case 'KI':
        return 'Kiribati'
      case 'Xk':
        return 'Serbia'
      case 'KW':
        return 'Kuwait'
      case 'KG':
        return 'Kyrgyzstan'

      case 'LA':
        return 'Laos'
      case 'LV':
        return 'Latvia'
      case 'LB':
        return 'Lebanon'
      case 'LS':
        return 'Lesotho'
      case 'LR':
        return 'Liberia'
      case 'LY':
        return 'Libya'
      case 'LI':
        return 'Liechtenstein'
      case 'LT':
        return 'Lithuania'
      case 'LU':
        return 'Luxembourg'

      case 'MO':
        return 'Macau'
      case 'MG':
        return 'Madagascar'
      case 'MW':
        return 'Malawi'
      case 'MY':
        return 'Malaysia'
      case 'MV':
        return 'Maldives'
      case 'MT':
        return 'Malta'
      case 'MH':
        return 'Marshall Islands'
      case 'MR':
        return 'Mauritania'
      case 'MU':
        return 'Mauritius'
      case 'YT':
        return 'Mayotte'
      case 'MX':
        return 'Mexico'
      case 'FM':
        return 'Micronesia'
      case 'MD':
        return 'Moldova'
      case 'MC':
        return 'Monaco'
      case 'MN':
        return 'Mongolia'
      case 'MS':
        return 'Montserrat'
      case 'MA':
        return 'Morocco'
      case 'MZ':
        return 'Mozambique'
      case 'MM':
        return 'Myanmar'

      case 'NA':
        return 'Namibia'
      case 'NR':
        return 'Nauru'
      case 'NP':
        return 'Nepal'
      case 'NL':
        return 'Netherlands'
      case 'NC':
        return 'New Caledonia'
      case 'NZ':
        return 'New Zealand'
      case 'NI':
        return 'Nicaragua'
      case 'NG':
        return 'Nigeria'
      case 'NU':
        return 'Niue'
      case 'KP':
        return 'North Korea'
      case 'NO':
        return 'Norway'

      case 'OM':
        return 'Oman'

      case 'PK':
        return 'Pakistan'
      case 'PW':
        return 'Palau'
      case 'PS':
        return 'Palestine'
      case 'PA':
        return 'Panama'
      case 'PG':
        return 'Papua New Guinea'
      case 'PY':
        return 'Paraguay'
      case 'PE':
        return 'Peru'
      case 'PH':
        return 'Philippines'
      case 'PL':
        return 'Poland'
      case 'PT':
        return 'Portugal'
      case 'PR':
        return 'Puerto Rico'

      case 'QA':
        return 'Qatar'

      case 'CG':
        return 'Republic of the Congo'
      case 'RE':
        return 'Reunion'
      case 'RU':
        return 'Russia'
      case 'RW':
        return 'Rwanda'

      case 'SH':
        return 'Saint Helena'
      case 'KN':
        return 'Saint Kits and Nevis'
      case 'LC':
        return 'Saint Lucia'
      case 'MF':
        return 'Saint Martin'
      case 'VC':
        return 'Saint Vincent and Grenadines'
      case 'WS':
        return 'Samoa'
      case 'SM':
        return 'San Marino'
      case 'ST':
        return 'Sao Tome and Principe'
      case 'SA':
        return 'Saudi Arabia'
      case 'SN':
        return 'Senegal'
      case 'SC':
        return 'Seychelles'
      case 'SL':
        return 'Sierra Leone'
      case 'SG':
        return 'Singapore'
      // SQ does not exist as country code, but nationalize.io returns it
      case 'SQ':
        return 'Singapore'
      case 'SK':
        return 'Slovakia'
      case 'SI':
        return 'Slovenia'
      case 'SB':
        return 'Solomon Islands'
      case 'SO':
        return 'Somalia'
      case 'ZA':
        return 'South Africa'
      case 'KR':
        return 'South Korea'
      case 'SS':
        return 'South Sudan'
      case 'ES':
        return 'Spain'
      case 'LK':
        return 'Sri Lanka'
      case 'SD':
        return 'Sudan'
      case 'SR':
        return 'Suriname'
      case 'SZ':
        return 'Swaziland'
      case 'SE':
        return 'Sweden'
      case 'SY':
        return 'Syria'

      case 'TW':
        return 'Taiwan'
      case 'TJ':
        return 'Tajikistan'
      case 'TZ':
        return 'Tanzania'
      case 'TH':
        return 'Thailand'
      case 'TG':
        return 'Togo'
      case 'TK':
        return 'Tokelau'
      case 'TO':
        return 'Tonga'
      case 'TT':
        return 'Trinidad and Tobago'
      case 'TN':
        return 'Tunisia'
      case 'TR':
        return 'Turkey'
      case 'TM':
        return 'Turkmenistan'
      case 'TC':
        return 'Turks and Caicos Islands'
      case 'TV':
        return 'Tuvalu'

      case 'UG':
        return 'Uganda'
      case 'UA':
        return 'Ukraine'
      case 'AE':
        return 'United Arab Emirates'
      case 'UY':
        return 'Uruguay'
      case 'UZ':
        return 'Uzbekistan'

      case 'VU':
        return 'Vanuatu'
      case 'VA':
        return 'Vatican'
      case 'VE':
        return 'Venezuela'
      case 'VN':
        return 'Vietnam'

      case 'WF':
        return 'Wallis and Fortuna'
      case 'EH':
        return 'Western Sahara'

      case 'YE':
        return 'Yemen'

      case 'ZM':
        return 'Zambia'
      case 'ZW':
        return 'Zimbabwe'

      default:
        return countryCode;
    }
  }
}
