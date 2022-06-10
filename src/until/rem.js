;(function (doc, win) {
	let docEl = doc.documentElement
	let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

	function recalc() {
		let clientWidth = docEl.clientWidth
		if (!clientWidth) {
			return
		}
		if (clientWidth > 720) {
			clientWidth = 720
		}
		// docEl.style.fontSize = (clientWidth / 3.6) + 'px';
		docEl.setAttribute('style', 'font-size:' + clientWidth / 3.6 + 'px!important')
		// 这里相当于认为手机屏幕宽度为3.6rem;
		setFontSize()
	}

	function setFontSize() {
		let html = document.getElementsByTagName('html')[0]
		let settedFs = parseInt(html.style.fontSize)
		let settingFs = parseInt(html.style.fontSize)
		let whileCount = 0
		while (true) {
			let realFs = parseInt(window.getComputedStyle(html).fontSize)
			let delta = realFs - settedFs
			if (Math.abs(delta) >= 1) {
				if (delta > 0) {
					settingFs--
				}
				// else settingFs++;
				html.setAttribute('style', 'font-size:' + settingFs + 'px!important')
			} else {
				break
			}
			if (whileCount++ > 100) {
				break
			}
		}
	}

	if (!doc.addEventListener) {
		return
	}
	win.addEventListener(resizeEvt, recalc, false)
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
