<template>
    <div class="AMap">
        <router-link target="_self" class="link" to='Bmap'>高德地图版</router-link>
        <div class="city-panel"></div>
        <div class="m-filter">
            <div class="mui-input-row mui-search mui-active">
                <input type="search" id="address-detail" class="address-detail mui-input-clear" name="address-detail" placeholder="选择收货地址 街道/小区">
            </div>
            <span class="sl-switch">
                <span class="curcity">{{curcity}}</span>
      <span class="icon icon-ctrl pos"></span>
      </span>
            <!-- <span class="cancel">取消</span> -->
        </div>
        <div class="pos-icon" v-if='mapShow'>
            <div class="obj"><img src="./img/cur.png"></div>
        </div>
        <div id="mapPanelG">
            <div style="text-align:center;padding-top:200px;color:#fff">地图加载中...</div>
        </div>
        <div id="m-result">
      <span class="curResult">
                <img src="./img/local.png" alt="">
                <span class="curTit">
                  {{curTit}}
                </span>
      <span class="curAddress">
                  {{curAddress}}
                 </span>
      </span>
            <button class="confirm" @click='submitAdd'>确定</button>
        </div>
        <span class="pos-panel">
            <div class="pos-tool" @click='getPos'>
              <div class='overlay-loader'>
                    <div class="loader">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
              </div>
            </div>
    </span>
        <div class="cityList" id="cityPanel"></div>
        <div class="poiList" id="poiPanel" v-if='poiShow'>
            <div class="content">
                <ul>
                    <li v-for="poi in poiList.data" @click="getPoi(poi)">
                        <img src="./img/building.png" alt="">
                        <span class="poi-name">{{poi.name}}</span>
                        <span class="poi-address">{{poi.address}}</span>
                    </li>
                </ul>
                <div class="empty" v-if='poiList.data.length==0'>
                    <img src="img/empty.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {loadingMap} from './load'
    export default {
        name: 'HelloWorld',
        data() {
            return {
                poiList: { data: [] },
                map: null,
                geoLocation: null,
                ac: null,
                cur_city: '',
                mapShow: false,
                r_address: '',
                cityName: '',
                r_city: '',
                r_name: '',
                r_lng: '',
                r_lat: '',
                poiShow: false,
                curTit: '',
                curAddress: '',
                curcity: '定位中',
                local: null,
                geocoder: null,
                resultAddress: null,
                cityCode: null
            }
        },
        created() {
            this.loadScript();
        },
        methods: {
            submitAdd() {
                console.log(this.curTit + this.curAddress)
                console.log(this.r_lng + ',' + this.r_lat)
            },
            loadScript() {
                loadingMap('gaod','fd4d53420cd27886c3c2950a94099243').then(() => {
                    this.initMap()
                });
            },
            openPoi() {
                this.poiShow = true;
            },
            hidePoi() {
                this.poiShow = false;
            },
            //init Map
            initMap() {
                this.map = new AMap.Map('mapPanelG', {
                    center: [116.397428, 39.90923],
                    resizeEnable: true,
                    zoom: 18
                });
                this.map.on('dragend', () => {
                    var center = this.map.getCenter();
                    this.r_lng = center.lng;
                    this.r_lat = center.lat;
                    this.showPoi()
                })
                // //初始城市上海
                // this.map.addEventListener("dragend", () => {
                //   this.showPoi();
                // });
                // var opts = {
                //   subdistrict: 1, //返回下一级行政区
                //   showbiz: false //最后一级返回街道信息
                // };
                this.map.plugin('AMap.Geolocation', () => {
                    this.geolocation = new AMap.Geolocation({
                        // 是否使用高精度定位，默认：true
                        enableHighAccuracy: false,
                        // 设置定位超时时间，默认：无穷大
                        timeout: 1000,
                        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                        buttonOffset: new AMap.Pixel(10, 20),
                        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                        zoomToAccuracy: true,
                        //  定位按钮的排放位置,  RB表示右下
                        buttonPosition: 'RB'
                    })
                    // AMap.plugin('AMap.CitySearch', ()=>{
                    //   var citySearch = new AMap.CitySearch()
                    //   citySearch.getLocalCity((status, result)=> {
                    //     if (status === 'complete' && result.info === 'OK') {
                    //       // 查询成功，result即为当前所在城市信息
                    //       console.log(result)
                    //       this.map.panTo([result.position.lng,result.position.lat]);
                    //     }
                    //     else{

                    //     }
                    //   })
                    // })
                    // AMap.event.addListener(geolocation, 'complete', onComplete)
                    // AMap.event.addListener(geolocation, 'error', onError)

                })
                // this.geoLocation = new AMap.DistrictSearch(opts);
                // this.geoLocation = new window.BMap.Geolocation();
                this.getPos();
                this.mapShow = true;
            },
            getPos() {

                this.geolocation.getCurrentPosition((status, result) => {
                    if (result.status == 1 && result.info === "SUCCESS") {
                        this.resultAddress = result.formattedAddress;
                        this.r_lng = result.position.lng;
                        this.r_lat = result.position.lat;
                        this.map.panTo([result.position.lng, result.position.lat]);
                        this.cur_city = (result.addressComponent
                            .city ?
                            result.addressComponent.city :
                            result.addressComponent.province);
                        this.cityCode = result.addressComponent.citycode;
                        this.curcity = this.cur_city.split("市")[0];
                    } else {
                        this.map.panTo([121.39304, 31.16599]);
                        this.cur_city = '上海市';
                        this.resultAddress = "上海市浦东新区世纪大道地铁站";
                        this.r_lng = 121.39304;
                        this.r_lat = 31.16599;
                        this.curcity = '上海';
                        this.cityCode = '021';
                    }
                    this.showPoi();
                    this.resetAutocomplete(this.cur_city);
                })
                // geoL.getCurrentPosition((r) => {
                //   if (geoL.getStatus() == BMAP_STATUS_SUCCESS) {

                //     var c_lat = r.point.lat;
                //     var c_lng = r.point.lng;
                //     this.map.centerAndZoom(new BMap.Point(c_lng, c_lat), 16);
                //     this.showPoi();
                //   } else {}
                // });
            },
            showPoi() {
                var center = this.map.getCenter();
                // var sc_pt = new AMap.Point(center.lng, center.lat);
                // $(".m-filter").animate({
                //   left: "87%"
                // }, 500);
                AMap.plugin('AMap.Geocoder', () => {
                    this.geocoder = new AMap.Geocoder({
                        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                        city: '全国',
                        extensions: 'all'
                    })

                    // 使用geocoder做地理/逆地理编码
                })
                this.geocoder.getAddress([this.r_lng, this.r_lat], (info, rs) => {
                    var results = rs.regeocode;
                    var Rlist = [];
                    if (results.pois.length > 0) {
                        for (var i = 0; i < results.pois.length; ++i) {
                            Rlist.push({
                                "title": results.pois[i].name,
                                "address": results.addressComponent.city + results.addressComponent.district +
                                    results.pois[i].address,
                                "city": results.addressComponent.city ? results.addressComponent.city : results.addressComponent.province,
                                "lng": results.pois[i].location.lng,
                                "lat": results.pois[i].location.lat
                            });
                        }
                        // Rlist = {
                        //   "title": results.addressComponent.township,
                        //   "address": results.formattedAddress,
                        //   "city": results.addressComponent.city ? results.addressComponent.city : results.addressComponent.province,
                        //   "lng": this.r_lng,
                        //   "lat": this.r_lat
                        // };
                        this.showList(Rlist);
                    } else {
                        // $(".ListPanel").html("");
                        // $(".ListPanel").append("<div class='empty-result'>待领取人达成</div>");
                    }
                });
            },
            showList(list) {
                // var reslt = ""
                // for (var i in list) {
                //   reslt += (list[i].address + list[i].title);
                // }
                this.r_lat = list[0].lat;
                this.r_lng = list[0].lng;
                this.curAddress = list[0].address;
                this.curTit = list[0].title;

            },
            resetAutocomplete(_cityStr) {
                // if (this.ac) this.ac.dispose();
                // this.ac = new BMap.Autocomplete({
                //   "input": "address-detail",
                //   "location": _cityStr,
                //   "onSearchComplete": this.SearchingCmplt
                // });
                this.ac = new AMap.Autocomplete({
                    input: "address-detail",
                    city: _cityStr
                });
                AMap.event.addListener(this.ac, "complete", this.SearchingCmplt)
            },
            getPoi(poi) {
                this.hidePoi();
                // this.local = new BMap.LocalSearch(this.map, { //智能搜索
                //   onSearchComplete: this.searchDone
                // });
                this.local = new AMap.PlaceSearch({});
                let _value = poi;
                this.r_address = _value.address + _value.name;
                this.local.search(this.r_address, (status, result) => {
                    var pp = result.poiList.pois[0].location;
                    this.map.panTo([pp.lng, pp.lat]);
                    this.curAddress = result.poiList.pois[0].address;
                    this.curTit = result.poiList.pois[0].name;
                    this.curcity = poi.city;
                    // $("#cur-city").text(this.cityName);
                    this.resetAutocomplete(this.cityName);
                });
            },
            searchDone() {
                var pp = this.local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
                this.map.centerAndZoom(pp, 18);
                this.curAddress = this.local.getResults().getPoi(0).address;
                this.curTit = this.local.getResults().getPoi(0).title;
                if (this.cityName !== "") {
                    this.curcity = this.cityName.split("市")[0];
                    // $("#cur-city").text(this.cityName);
                    this.resetAutocomplete(this.cityName);
                }
            },
            SearchingCmplt(AutocompleteResult) {
                var poiDetails = [];
                for (var i = 0; i < AutocompleteResult.count; i++) {
                    if (AutocompleteResult.tips[i].id || AutocompleteResult.tips[i].adcode) {
                        poiDetails.push({
                            name: AutocompleteResult.tips[i].name,
                            address: AutocompleteResult.tips[i].district + AutocompleteResult.tips[i].address,
                            city: AutocompleteResult.tips[i].id ? AutocompleteResult.tips[i].district.split('市')[0] : AutocompleteResult.tips[i].name,
                            district: AutocompleteResult.tips[i].district
                        });
                    }
                }
                this.poiList = {
                    data: []
                }
                this.poiList.data = poiDetails;
                this.openPoi();
            }
        }

    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .tangram-suggestion-main {
        display: none!important;
    }

    .AMap {
        .amap-logo {
            top: 70px!important;
        }
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        display:flex;
        align-items:center;
        justify-content:center;
        #mapPanelG {
            min-height: 300px;
            height: 100%;
            width: 100%;
            position: absolute!important;
            background-color:rgba(76, 76, 76, 0.7686274509803922);
        }
        .pos-panel {
            width: 92%;
            left: 4%;
            bottom: -50px;
            position: absolute;
        }
        .pos-icon {
            z-index: 999;
            position: absolute;
            left: 45%;
            top: 45%;
            width: 29px;
            height: 40px;
            display: block;
        }
        .pos-icon .obj {
            position: absolute;
        }
        .pos-icon .obj>img {
            width: 38px;
        }
        .pos-icon .shadow {
            position: absolute;
            top: 34px;
            left: 3.5px;
        }
        .pos-icon .shadow>img {
            width: 10px;
        }
        .pos-tool {
            box-shadow: 0px 2px 2px #7b7b7b;
            position: absolute;
            width: 37px;
            height: 37px;
            border-radius: 5px;
            background: #f0f0f0;
            bottom: 140px;
            text-align: center;
            line-height: 34px;
            img {
                width: 24px;
            }
        }
        .city-panel {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #f0f0f0;
            z-index: 5000;
            display: none;
        }
        .poi-panel {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #f0f0f0;
            z-index: 5000;
            display: none;
        }
        .m-filter {
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0px!important;
            z-index: 10000;
            background-color: #fff;
            margin: 0 auto;
            padding: 15px 0px;
            .cancel {
                position: absolute;
                display: block;
                font-size: 15px;
                right: 15px;
                top: 14px;
                z-index: 10;
            }
            .sl-switch {
                top: 0px;
                position: absolute;
                display: block;
                z-index: 10;
            }
        }
        .m-filter {
            div {
                .address-detail {
                    outline:none;
                    display: block;
                    width: 75.8%;
                    border: 0px solid #000;
                    border-radius: 0;
                    margin-left: 15%;
                    -webkit-appearance: none;
                    padding-left: 10px;
                    border-bottom: 1px solid #c6c6c6;
                    line-height: 20px;
                    font-size: 15px;
                    margin-top: -5px;
                    padding-bottom: 5px;
                }
            }
        }
        @media only screen and (max-width: 320px) {
            width: 70%;
        }
        .m-filter>div {
            width: 85%;
            margin: 0 auto;
        }
        .m-filter .mui-search {
            display: block;
            position: relative;
            content: ""
        }
        .m-filter .curcity {
            text-align: center;
            position: absolute;
            font-size: 16px;
            line-height: 16px;
            left: 0px;
            top: 15px;
            width: 60px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        #m-result {
            z-index: 1000;
            position: absolute;
            bottom: 10px;
            width: 92%;
            background: #fff;
            left: 4%;
            border-radius: 5px;
            box-shadow: 0px 2px 2px #7b7b7b;
            .curResult {
                float: left;
                padding-left: 40px;
                box-sizing: border-box;
                display: block;
                width: 82%;
                span {
                    height: 26px;
                    width: 100%;
                    display: block;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 15px;
                }
                .curTit {
                    float: left;
                    padding-top: 6px;
                    color: #35353f;
                    font-size: 18px
                }
                .curAddress {
                    float: left;
                    padding-bottom: 4px;
                    color: #90909b;
                    height: 20px;
                }
                img {
                    width: 20px;
                    position: absolute;
                    left: 10px;
                    top: 18px;
                }
            }
            .confirm {
                float: left;
                width: 18%;
                border: 0px;
                height: 60px;
                background: #1ea7fe;
                color: #fff;
                border-radius: 0px 5px 5px 0px;
                font-size: 15px;
            }
        }
        .cityList {
            width: 100%;
            height: 92%;
            overflow: scroll;
            overflow-x: hidden;
            background: #fff;
            position: absolute;
            display: none;
            z-index: 100000;
            top: 45px;
            .content {
                position: relative;
                ul {
                    padding-top: 49px;
                }
                span {
                    padding-left: 15px;
                    font-size: 15px;
                    min-height: 28px;
                }
                li {
                    padding-left: 15px;
                    font-size: 15px;
                    line-height: 49px;
                    border-bottom: 1px solid #f1f1f6;
                }
                .tit-bar {
                    width: 100%;
                    background: #f0f0f0;
                    display: block;
                    font-size: 13px;
                    color: #90909b;
                    padding: 15px;
                }
            }
            .footer {
                p {
                    line-height: 15px;
                    a {
                        line-height: 20px;
                        font-size: 14px;
                        color: #35353f;
                        font-family: PingFangSC-Semibold;
                    }
                }
            }
            .cur-city {
                width: 100%;
                position: fixed;
                top: 44px;
                background: #fff;
                border-bottom: 0px solid #fff!important;
            }
        }
        .cityList.fixing-ios {
            top: 64px;
            .cur-city {
                top: 63px;
            }
        }
        .poiList {
            width: 100%;
            height: 100%;
            overflow: scroll;
            overflow-x: hidden;
            position: absolute;
            background-color: #f0f0f0;
            z-index: 99999;
            top: 52px;
            .content {
                background: #f0f0f0;
                padding: 10px;
                .empty {
                    width: 100%;
                    text-align: center;
                    img {
                        margin-top: 80px;
                        width: 158px;
                    }
                }
                ul {
                    background: #fff;
                    padding-left: 0px;
                }
                li {
                    text-align: left;
                    position: relative;
                    padding-left: 40px;
                    font-size: 15px;
                    border-bottom: 1px solid #f1f1f6;
                    img {
                        position: absolute;
                        top: 15px;
                        width: 20px;
                        left: 10px;
                    }
                }
                span {
                    witdh: 100%;
                    display: block;
                    font-size: 15px;
                    line-height: 28px;
                }
                .poi-name {}
                .poi-address {
                    font-size: 13px;
                    color: #90909b;
                    min-height: 28px;
                }
            }
            .footer {
                p {
                    a {
                        font-size: 14px;
                        color: #35353f;
                        font-family: PingFangSC-Semibold;
                    }
                }
            }
            .cur-city {
                width: 100%;
                position: fixed;
                top: 8%;
                background: #fff;
            }
        }
        .poiList.fixing-ios {
            top: 115px;
        }
    }

</style>
