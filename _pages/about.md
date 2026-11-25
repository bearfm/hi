---
layout: page
title: 永远相信美好的事情即将发生
permalink: /about/
comments: true
---

<div class="row justify-content-between">
<div class="col-md-8 pe-5">

<blockquote>有一天，我想要把中国看遍<br/>有一天，我想要把世界看遍</blockquote>

<p>我走过许多地方的路，行过许多地方的桥，看过许多次数的云，喝过许多种类的酒，但脚步却一直不曾停下。我在追寻五湖四海中的绚烂，也在思考三餐四季里的意义。用脚步丈量山河湖海，用目光捕捉人文世界。去向未知的远方，探寻大地的脉络；俯瞰身边的视界，记录人文的华章。在理想与现实交界处，悄悄写下一个人所见的真相与邂逅。</p>

<p class="mb-5"><img class="shadow-lg" src="{{site.baseurl}}/assets/images/mediumish-jekyll-template.png" alt="jekyll template mediumish" /></p>
<h4>Documentation</h4>

<p>行做笔，心当墨。记录跋山涉水的个人感悟；路为纸，地成册，解读风景背后的时光沉淀。在自然与人文之间，发现世界。身未动，心已远。期待借助照片的色彩，加上文字的描述，为某一段走出去的旅程留下一点纪念。相信，每一张照片、每一段文字、每一秒时光，以及每一寸土地都有着不同的解读，就像每一张平静的面孔背后，都有一个鲜为人知的故事。</p>

<h4>我所走过的足迹（还在补充各种）</h4>

<div id="my-footprints-map" style="width: 100%; height: 400px;"></div>

</div>

<div class="col-md-4">

<div class="sticky-top sticky-top-80">
<h5>Buy me a token</h5>

<p>如果你觉得我的小站还不错，那么我就厚脸皮求一波打赏。真的，一分也是爱，赠人玫瑰，手有余香，先谢谢您了！</p>

<a target="_blank" href="https://poor.cn/home" class="btn btn-danger">点这里打赏</a> <!--<a target="_blank" href="https://bootstrapstarter.com/bootstrap-templates/template-mediumish-bootstrap-jekyll/" class="btn btn-warning">Documentation</a>-->

</div>
</div>
</div>

<!-- 高德地图 JS API -->
<script type="text/javascript" src="https://webapi.amap.com/maps?v=2.0&key=5c2af6540cdf4a0be387bd9507108f35"></script>
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function () {
    var map = new AMap.Map('my-footprints-map', {
      zoom: 4,                  // 初始缩放级别
      center: [105.0, 35.0],    // 初始中心点（大致中国中部）
      viewMode: '2D',
    });
    var footprints = [
      { pos: [123.379454, 41.822471], name: '沈阳',   desc: '这里住着一个我 🏠️' },
      { pos: [116.39757394662445, 39.90936278896621],  name: '北京',   desc: '我爱北京天安门 🇨🇳' },
      { pos: [113.32361205011284, 23.105053887232362], name: '广州',   desc: '小蛮腰看过了 🗼' },
      { pos: [113.77488711641331, 22.69625119471307], name: '深圳',   desc: '这里每个人走路都像跑 🏃‍♂️' },
      { pos: [123.456839, 41.796943], name: '沈阳',   desc: '沈阳故宫在这 🏘️' },
      { pos: [112.96196410979576, 28.18738366112186], name: '长沙',   desc: '橘子洲没上去过 🌌' },
      { pos: [87.618057, 43.779847], name: '乌鲁木齐',   desc: '国际大巴扎 🕌' },
      { pos: [111.68395452039499, 40.70797835687305], name: '呼和浩特',   desc: '敕勒川，阴山下 🐎' },
      { pos: [126.617723, 45.778336], name: '哈尔滨',   desc: '东方小巴黎 冰雪大世界 ❄️' },
      { pos: [125.323643, 43.816996], name: '长春',   desc: '我上大学的地方 🏫' },
      { pos: [126.80854787396675, 43.644539749369386], name: '吉林市',   desc: '去看松花湖 🚣‍♂' },
      { pos: [129.4994755617472, 42.91286036877813], name: '延边',   desc: '全是朝鲜文朝鲜语和朝鲜食物 🍜' },
      { pos: [129.445041997737, 48.448527806670384], name: '伊春',   desc: '景色不错，凉快，就是蚊子多 🌄' },
      { pos: [132.49620930987635, 47.67565609675607], name: '佳木斯',   desc: '隔着黑龙江看俄罗斯 🏞️' },
      { pos: [130.297687, 47.350659], name: '鹤岗',   desc: '这里的房价老便宜了 💰' },
      { pos: [86.03929840303692,44.30142377552378], name: '石河子',   desc: '军垦博物馆让人泪目 🏟️' },
      { pos: [122.26114528546873,43.64326751854066], name: '通辽',   desc: '地形不可描述，小约翰的故乡 🏕️' },
      { pos: [118.89985058273942,42.24727201136048], name: '赤峰',   desc: '和辽宁没什么两样的地方 🎑' },
      { pos: [117.94387882145702,40.982516625616476], name: '承德',   desc: '避暑山庄和我们这的公园一样 🛣️' },
      { pos: [104.04988341998285,30.645947422175333], name: '成都',   desc: '跟我在街头走一走Wow Wow 🐼' },
      { pos: [103.7744009999999,29.538761000000033], name: '乐山',   desc: '看大佛的时候他在维修 🗿' },
      { pos: [118.13815807718856,24.539507994839425], name: '厦门',   desc: '很干净，头顶飞机划过 🌊' },
      { pos: [120.21299799999997,30.291330999999992], name: '杭州',   desc: '去过很多次，都没碰到过马云 💰' },
      { pos: [116.80292800000007,33.966435], name: '淮北',   desc: '胡辣汤喝得嗓子肿了 🥣' },
      { pos: [117.0047303233539,36.61770288363723], name: '济南',   desc: '老舍《济南的冬天》我是夏天去的 🎐' },
      { pos: [121.49349099999995,31.23209099999999], name: '南京',   desc: '盐水鸭、老鸭粉 🍗' },
      { pos: [120.54924299999993,31.30207100000001], name: '苏州',   desc: '园林好看 🍃' },
      { pos: [118.84891900000002,28.974188999999978], name: '衢州',   desc: '衢江 🌌' },
      { pos: [121.14085445378001,41.12514160903023], name: '锦州',   desc: '老家🏠烤串🍢' },
      { pos: [120.3854598191702,41.59935352317729], name: '朝阳',   desc: '第一只鸟飞的地方 第一朵花开的地方🌸' },
      { pos: [119.76170457460175,40.01204910081981], name: '秦皇岛',   desc: '北过山海关就算到家了🏰' },
      { pos: [88.12912306373244,43.89217570447731], name: '昌吉',   desc: '天山天池🏔️' },
      { pos: [124.39333409811594,40.11850277408729], name: '丹东',   desc: '中朝边境 鸭绿江断桥🌉' }
    ];
    var markers = [];
    footprints.forEach(function (item) {
      var marker = new AMap.Marker({
        position: item.pos,
        title: item.name,
      });
      marker.setMap(map);
      markers.push(marker);
      var infoWindow = new AMap.InfoWindow({
        anchor: 'top-center',
        content: '<div style="font-size:13px;"><strong>' + item.name + '</strong><br>' + item.desc + '</div>'
      });
      marker.on('click', function () {
        infoWindow.open(map, marker.getPosition());
      });
    });
    map.setFitView(markers);
  });
</script>