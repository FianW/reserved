let url = "http://ip-api.com/json/?fields=16969727&lang=zh-CN"
$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
	let query =jsonData.query 
	let isp =jsonData.isp
	let as =jsonData.as
	let country =jsonData.country
	let city =jsonData.city
	let timezone =jsonData.timezone
	let regionName =jsonData.regionName
  let hosting =jsonData.hosting
  let proxy =jsonData.proxy
    let emoji = getFlagEmoji(jsonData.countryCode)
const params = getParams($argument);
  body = {
    title: "代理信息",
    content: `➡️IP：${query}\n➡️ISP：${isp}\n➡️ASN：${as}\n➡️城市：${city}\n➡️区域：${regionName}\n➡️国家/地区：${emoji}${country}\n➡️Proxy：${proxy}\n➡️Hosting：${hosting}`,
        icon: params.icon,
        "icon-color": params.color
  }
  $done(body);
});

function getFlagEmoji(countryCode) {
      if (countryCode.toUpperCase() == 'TW') {
    countryCode = 'CN'
  }
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

function getParams(param) {
  return Object.fromEntries(
    $argument
      .split("&")
      .map((item) => item.split("="))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  );
}
