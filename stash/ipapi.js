let url = "http://ip-api.com/json/?fields=61439&lang=zh-CN"
$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
	let query =jsonData.query 
	let isp =jsonData.isp
	let as =jsonData.as
	let country =jsonData.country
	let city =jsonData.city
	let timezone =jsonData.timezone
	let regionName =jsonData.regionName
    let emoji = getFlagEmoji(jsonData.countryCode)
const params = getParams($argument);
  body = {
    title: "代理信息",
    content: `IP：${query}\nISP：${isp}\nASN：${as}\n城市：${city}\n区域：${regionName}\n国家/地区：${emoji}${country}\n时区：${timezone}`,
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
