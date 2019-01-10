export function loadingMap(type, key) {
  return new Promise(function(resolve, reject) {
    //for baiduMap 2.0
    //高德地图引入
    let amapLoad = () => {
      let script = document.createElement("script");
      script.type = "text/javascript";
      // script.src = type == 'baidu' ? ("http://api.map.baidu.com/api?v=2.0&ak=" + key + "&callback=init") : ("https://webapi.amap.com/maps?v=1.4.5&key=" + key + "&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder,AMap.MapType,AMap.Driving,AMap.DistrictSearch");
      script.src = "https://webapi.amap.com/maps?v=1.4.5&key=" + key + "&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder,AMap.MapType,AMap.Driving,AMap.DistrictSearch";
      script.onerror = reject;
      document.head.appendChild(script);
      script.onload = function() {
        type == 'baidu' ? resolve(BMap) : resolve(AMap)
      }
    }
    //百度地图引入
    let bmapLoad = () => {
      window.HOST_TYPE = "2";
      window.BMap_loadScriptTime = (new Date).getTime();
      window.BMap = window.BMap || {};
      window.BMap.apiLoad = function() { delete window.BMap.apiLoad; if (typeof init == "function") { init() } };
      let s = document.createElement('script');
      s.src = 'https://api.map.baidu.com/getscript?v=2.0&ak=' + key + '&services=&t=20180629105709&s=1';
      document.body.appendChild(s);
      s.onload = function() {
        type == 'baidu' ? resolve(BMap) : resolve(AMap)
      }
    }
    if (type != 'baidu') {amapLoad()} else {bmapLoad()};
    // window.onload = function() {
    //   type=='baidu'?resolve(BMap):resolve(AMap)
    // }
    // var script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = type=='baidu'?("http://api.map.baidu.com/api?v=2.0&ak=" + key + "&callback=init"):("https://webapi.amap.com/maps?v=1.4.5&key=" + key + "&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder,AMap.MapType,AMap.Driving,AMap.DistrictSearch");
    // script.onerror = reject;
    // document.head.appendChild(script);
  })
}
