DRONEX V2 — UAV Supply, Sourcing & Solutions for the Middle East
=================================================================

项目类型
--------
纯静态 HTML / CSS / JavaScript，无框架、无构建工具。
CSS 全部内联在 index.html 的 <style> 标签里。

文件结构
--------
/
├── index.html              主站（CSS 内联 + 阿拉伯语 i18n）
├── ar/
│   └── index.html          阿拉伯语 SEO 入口（跳转到 index.html?lang=ar）
├── js/
│   ├── config.js           联系方式配置（WhatsApp / Telegram / Phone / Email）
│   ├── main.js             占位符替换、导航高亮、表单验证、平滑滚动
│   └── i18n.js             语言切换 + 翻译加载
├── translations/
│   ├── en.json             英文文案
│   └── ar.json             阿拉伯语文案
├── assets/                 图片（13 张，来自原 V6.1）
└── README.txt

联系方式（已配置真实值）
------------------------
Telegram:  @lyjgeo         https://t.me/lyjgeo
Phone:     +8617361220132  tel:+8617361220132
Email:     lyjgeo@gmail.com
WhatsApp:  +8617361220132  https://wa.me/8617361220132

以上四项已写入 js/config.js，全站自动生效：
  - Hero 下方联系方式行
  - Contact 区块（4 张卡片）
  - Footer Contact 列
  - 导航栏 WhatsApp 按钮
  - 右下角 WhatsApp 悬浮按钮
  - Request a Quote 表单旁的 WhatsApp 按钮

语言切换
--------
- 默认英文
- 右上角 EN | العربية 切换
- 切换后写入 localStorage，并跳转到 ?lang=ar / ?lang=en
- 阿拉伯语模式自动设置 <html dir="rtl" lang="ar">
- 访问 /ar/ 会重定向到 /index.html?lang=ar

产品参数
--------
Heavy-Lift VTOL UAV 已公开 6 项参数（来自供应商 150KG 复合翼无人机手册）：
  Max Takeoff Weight: 150 kg
  Max Payload: 30 kg
  Max Endurance: 7 h
  Service Ceiling: 6000 m
  Cruise Speed: 90 – 120 km/h
  Takeoff / Landing: VTOL

EVO MAX 4T 已公开 6 项参数（来自 Autel Robotics 画册）：
  Max Flight Time: 42 min
  Transmission Range: 20 km (FCC) / 8 km (CE)
  IP Rating: IP43
  Wind Resistance: 12 m/s
  Max Takeoff Altitude: 7000 m
  Camera System: 50MP Wide + 48MP Zoom + 640×512 Thermal + 1.2 km Laser

Dragonfish Nest 已公开 3 项参数（来自 Alpha Manufacturing）：
  Range Between Units: 75 miles
  Operation: Autonomous Takeoff / Landing / Charging
  Use Cases: Long-range Corridor Inspection / Large-area Coverage

其余产品参数统一写 "Specifications available upon request."

供应商与产品参考
----------------
DRONEX 与 Autel Robotics 无任何正式商业关系。
EVO MAX 4T 是 Autel Robotics 的产品，作为 "Featured Platform" 参考展示，
必须保留免责声明：
  "Product reference: Autel Robotics EVO MAX 4T. DRONEX is not an authorized
   dealer of Autel Robotics unless explicitly stated."

DRONEX 与 Alpha Manufacturing Trading Limited 是正式供应商关系。
Alpha 在 About 页面具名，描述为 ODM manufacturer focused on high-end
industrial UAV systems。

Dragonfish Nest 通过 DRONEX 的制造合作伙伴网络提供，必须保留免责声明：
  "Dragonfish Nest is supplied through DRONEX's manufacturing partner network.
   Product specifications are provided for reference purposes."

DRONEX Field Lab
----------------
首页已预留 Field Lab 区域，目前显示 "Coming Soon"。
未来真实测试内容按以下结构补充：
  Field Lab
  ├── Flight Tests
  ├── Payload Demonstrations
  ├── VTOL Tests
  ├── Endurance Tests
  ├── Environmental Tests
  ├── Assembly & Maintenance
  └── Technical Reviews

部署
----
上传以下内容到 GitHub / Cloudflare Pages / 任意静态主机：
  index.html
  ar/
  js/
  translations/
  assets/

无需构建步骤。

本地预览
--------
不要用 file:// 打开（fetch 加载 translations/*.json 会被 CORS 阻止）。
用本地服务器：
  python -m http.server 8000
  或
  npx serve

然后访问 http://localhost:8000/

禁止内容
--------
不要写入任何军事、侦察、打击、战斗部、杀伤半径、目标照射、
箱火式发射、抗干扰军事功能等内容。
DRONEX 的公开定位严格保持 Civilian / Industrial UAV Applications only。

免责声明
--------
- 页面中的 DJI / Autel / JOUAV / XAG 等品牌仅作为技术参考，不代表 DRONEX 是
  其授权经销商或合作伙伴。
- Middle East 国家列表标注为 "Target Market"，不代表 DRONEX 在当地设有
  办公室、仓库或团队。
- 所有产品参数、认证、客户案例在拿到真实资料前不展示。
- 不要使用 "Authorized Dealer" 除非存在真实授权。

© 2026 DRONEX. All rights reserved.