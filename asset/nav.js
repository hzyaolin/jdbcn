let nav = {
  name: "逍遥小酒馆",
  description: "",
  list: [],
  ele: document.getElementsByClassName("navlist"),
}

nav.list[0] = [{
  name: "综合搜索", icon: "fa-brands fa-searchengin", item: [
    { text: "oogle", icon: "fa-brands fa-google", link: "https://www.google.com/" },
    { text: "百度", link: "https://www.baidu.com/" },
    { text: "百度翻译", link: "https://fanyi.baidu.com/" },
    { text: "北大法宝", desc: "北京大学背景", link: "https://www.pkulaw.com/" },  
    { text: "天眼查", icon: "fa-solid fa-eye", link: "https://www.tianyancha.com/" },
    { text: "企查查", link: "https://www.qichacha.com/" },
  ]
}, {
  name: "司法案例", icon: "fa-solid fa-building-columns", item: [
    { text: "最高人民法院", icon: "fa-solid fa-scale-balanced ", link: "https://www.court.gov.cn/index.html" }, 
    { text: "判决文书网", desc: "最高人民法院", link: "https://wenshu.court.gov.cn/" },
    { text: "司法案例网", desc: "最高人民法院", link: "https://anli.court.gov.cn/" },
    { text: "行政处罚文书网", desc: "国家市场监督管理总局", link: "https://cfws.samr.gov.cn/" },
    { text: "聚法案例", desc: "吉林大学背景", link: "https://www.jufaanli.com/" },
  ]
}, {
  name: "主体信息查询", icon: "fa-solid fa-braille", item: [
    { text: "全国企业破产重组案件信息网", icon: "fa-solid fa-screwdriver-wrench", desc: "最高人民法院", link: "https://pccz.court.gov.cn/" },
    { text: "企业信用信息公示", icon: "fa-regular fa-credit-card", desc: "国家市场监督管理总局", link: "https://www.gsxt.gov.cn/" },
    { text: "信用中国", desc: "国家公共信用信息中心", link: "https://www.creditchina.gov.cn/" },
    { text: "人行征信中心", desc: "中国人民银行", link: "https://www.pbccrc.org.cn/" },
    { text: "人行中登网", desc: "动产融资统一登记公式系统", link: "https://www.zhongdengwang.org.cn/" },
    { text: "国家知识产权局", desc: "商标 专利 地理标志", link: "https://www.cnipa.gov.cn" },
    { text: "香港(ICRIS)系统", desc: "香港公司信息查询", link: "https://icris.cr.gov.hk/csci/" },
    { text: "澳门印务局", desc: "澳门公司信息查询", link: "https://www.io.gov.mo/cn/home/" },
  ]
}, {
  name: "争议解决", icon: "fa-solid fa-handshake-simple", item: [
    { text: "审判流程信息公开网", icon: "fa-solid fa-diagram-next", desc: "最高人民法院", link: "https://splcgk.court.gov.cn/" },  
    { text: "庭审公开网", desc: "最高人民法院", link: "http://tingshen.court.gov.cn/" },  
    { text: "执行信息公开网", desc: "最高人民法院", link: "http://zxgk.court.gov.cn/" },
    { text: "最高人民法院诉讼服务网", desc: "最高人民法院", link: "https://ssfw.court.gov.cn/" },
    { text: "人民法院公告网", desc: "最高人民法院", link: "https://rmfygg.court.gov.cn/"},
    { text: "诉讼文书样", desc: "最高人民法院", link: "https://www.court.gov.cn/susong.html" },
    { text: "12309中国检察网", desc: "最高人民检察院", link: "https://www.12309.gov.cn/" },
  ]
}, {
  name: "法律规定与标准", icon: "fa-solid fa-square-pen", item: [
    { text: "国家法律法规数据库", icon: "fa-solid fa-database", desc: "全国人大常委会办公厅", link: "https://flk.npc.gov.cn/" },  
    { text: "12348中国法网", desc: "中华人民共和国司法部", link: "https://ai.12348.gov.cn/" },  
    { text: "检察法律法规库", desc: "最高人民检察院", link: "https://www.spp.gov.cn/spp/flfgk/" },
    { text: "合同示范文本库", desc: "国家市场监督管理总局", link: "https://cont.12315.cn/" },
  ]
}, {
  name: "产权", icon: "fa-solid fa-archway ", item: [
    { text: "国家知识产权局", icon: "fa-regular fa-copyright", link: "https://www.cnipa.gov.cn/" },  
    { text: "国家版权局", link: "https://www.ncac.gov.cn/" },  
    { text: "专利检索及分析", link: "https://pss-system.cponline.cnipa.gov.cn/" },
    { text: "中国商标局",  desc: "国家知识产权局", link: "https://sbj.cnipa.gov.cn/sbj/index.html" },
    { text: "中国版权保护中心", desc: "计算机软件著作权查询", link: "https://www.ccopyright.com.cn/" },
  ]
}, {
  name: "资本市场", icon: "fa-solid fa-circle-dollar-to-slot", item: [
    { text: "巨潮信息", icon: "fa-solid fa-wave-square", desc: "境内上市公司资料查询", link: "http://www.cninfo.com.cn/" }, 
    { text: "披露易", desc: "香港上市公司资料查询", link: "https://www.hkexnews.hk/index_c.htm"}, 
    { text: "中小企业股权转让系统", link: "https://www.neeq.com.cn/" },  
    { text: "全国财政电子票据查验平台", link: "http://pjcy.mof.gov.cn/" },
    { text: "中国证券监督管理委员会", link: "http://www.csrc.gov.cn/" },
    { text: "中国证券投资基金业协会", link: "https://www.amac.org.cn/" },
  ]
}, {
  name: "行政政府部门", icon: "fa-solid fa-landmark-dome", item: [
    // { text: "校园网", link: "https://github.com/drcoms/drcom-generic/wiki/可用学校列表" },
    { text: "全国建筑市场监督公共服务平台", desc: "全国建筑市场监管公共服务平台（四库一平台）", icon: "fa-solid fa-building-shield", link: "https://jzsc.mohurd.gov.cn/home" },
    { text: "对外承包工程经营主体查询", desc: "国务院办公厅电子政务办公室", link: "http://app.gjzwfw.gov.cn/jmopen/webapp/html5/swbdwcbgcjyztcx/index.html" },
  ]
},]

nav.list[1] = [{
  name: "微信公众号", icon: "fa-solid fa-inbox",
  desc: `<a onclick="dialog.msg('联系方式')"><i class="fa-solid fa-pen-to-square"></i> 我要推荐</a>`,
  item: [
    { text: "最高人民法院司法案例研究院", desc: "扫码关注或者长按二维码识别", icon: "fa-brands fa-weixin", link: "./image/anliyanjiu.png" },
  ]
}, {
  name: "常用APP", icon: "fa-brands fa-app-store", item: [
    { text: "权利卫士取证", desc: "录屏录音取证维权工具", icon: "fa-solid fa-eye", link: "https://www.tsa.cn/qlwsDownLoad/" },
    { text: "e签宝", desc: "电子合同", link: "https://www.esign.cn/" },
    { text: "法大大", desc: "第三方电子合同平台", link: "https://www.fadada.com/" },
    { text: "企信宝", link: "https://www.qixin.com/" },
    { text: "尽调宝", link: "https://www.jindiaobao.cn/" },
  ]
}, {
  name: "效率工具", icon: "fa-solid fa-cube", item: [
    { text: "2ND软件", icon: "fa-brands fa-microsoft", desc: "常用软件", link: "https://www.2nd.cn/soft" },
    { text: "联想应用商店", desc: "常用软件Store", link: "https://lestore.lenovo.com/" },
    { text: "WPS365", desc: "PPT Word Excel", link: "https://www.wps.cn/" },
    { text: "腾讯文档", desc: "在线文档", link: "https://docs.qq.com/" },
    { text: "Xmind", desc: "思维导图", link: "https://www.xmind.cn" },
    { text: "沉浸式翻译", desc: "翻译插件", link: "https://immersivetranslate.com/" },
    { text: "扫描全能王", desc: "文档扫描工具", link: "https://www.camscanner.com/user/download" },
    { text: "OCR图像识别", desc: "图像提取文字", link: "https://tool.browser.qq.com/ocr.html" },
    { text: "超级PDF", desc: "PDF转Office", link: "https://xpdf.cn/" },
    { text: "秘塔合同", desc: "合同管理工具", link: "https://clm.metago.cn/clm/#/home/" },
    { text: "腾讯帮小帮", desc: "腾讯在线小工具", link: "https://tool.browser.qq.com/" },
  ]
}, {
  name: "友链", icon: "fa-solid fa-link",
  desc: `<a onclick="dialog.msg('联系方式')"><i class="fa-solid fa-user-plus"></i> 添加友链</a>`,
  item: [
    { text: "地产工作台", link: "https://www.fdc360.com/" },
   ]
},]

nav.list.forEach((list, i) => {
  nav.ele[i].innerHTML = list.map(group => `
    <div class="card">
    <div class="between">
    <h4><i class="${group.icon}"></i> ${group.name}</h4>
    ${group.desc ? `<p class="dim">${group.desc}</p>` : ``}
    </div>
    <div class="list">
    ${group.item.map(item => `
      <a ${item.desc ? `data-sub="${item.desc}"` : ``}
      ${item.js ? `onclick="${item.js}"` : `href="${item.link}"`}
      >${item.icon ? `<i class="${item.icon}"></i>` : ``}${item.text}</a>
      `).join(`\n`)}
    </div>
    </div>`).join(`\n`)
})
