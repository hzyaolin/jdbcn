let dialog = {
    ele: document.getElementById("dialog"),
    title: document.getElementById("dialogTitle"),
    content: document.getElementById("dialogContent"),
}

dialog.listMsg = {
    联系方式: `QQ：6868265 (同时支持QQ邮箱)`,
}

dialog.msg = name => {
    dialog.title.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${name}`
    dialog.content.innerHTML = dialog.listMsg[name]
    dialog.show()
}

dialog.listQR = {
    最高人民法院司法案例研究院: "https://mp.weixin.qq.com/rr?timestamp=1693328738&src=11&ver=1&signature=cf6bE1IOryF2jdBTNwbcCe5H6VwIlbZkKfAEt9rqTvv2iVQWI6lHZXhGSW-6301ZOE4myielE8iUYWz0YY2Jwyj78pCYJmoIhZm9qIdejl4=",
    第二课堂: "https://win.9xueqi.com/",
    青年大学习: "https://h5.sxgqt.org.cn/#/statisticsNews",
    逸夫楼地图: "https://8.u.h5mc.com/c/7oor/ygju/index.html",
}

dialog.phone = name => {
    open(dialog.listQR[name], name, 'height=720px,width=360px,left=720px')
}

dialog.QR = name => {
    dialog.title.innerHTML = `<i class="fa-brands fa-weixin"></i> ${name}`
    dialog.content.innerHTML = `微信扫一扫、<a href="${dialog.listQR[name]}"><u>强制打开</u></a>或者<a onclick="dialog.phone('${name}')"><u>模拟手机尺寸打开</u></a>。`
    new QRCode(dialog.content, dialog.listQR[name])
    dialog.show()
}

dialog.show = () => {
    dialog.ele.classList.remove("hidden")
}

dialog.close = () => {
    dialog.ele.classList.add("hidden")
    dialog.title.innerHTML = ""
    dialog.content.innerHTML = ""
}
