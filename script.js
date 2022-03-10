const btn = document.getElementsByClassName('nav-toggle')[0]
const zone = document.getElementsByClassName('zone-side')[0]
const push = document.getElementsByClassName('push')[0]

const arrow = document.querySelectorAll('.imgq')
var newArr = []
for (let i = 0; i < arrow.length; i++) {
	arrow[i].getAttribute("aria-expanded")
}

const sum = document.querySelectorAll(".summary")
for (let i = 0; i < sum.length; i++) {
	sum[i].addEventListener("click", () => {
		console.log("hgcghsv")
		if(arrow[i].getAttribute("aria-expanded")==="false") {
			arrow[i].setAttribute("aria-expanded", "true")
		} else {
			arrow[i].setAttribute("aria-expanded", "false")
		}
	})
}

btn.addEventListener("click", () => {
	const visibility = zone.getAttribute("data-visible")
	if(visibility==="false") {
		zone.setAttribute("data-visible", true)
		push.style.display = "none"
		btn.setAttribute("aria-expanded", true)
		disableScroll()
	} else if (visibility==="true") {
		zone.setAttribute("data-visible", false)
		push.style.display = "flex"
		btn.setAttribute("aria-expanded", false)
		enableScroll()
	}
})


// const arrow = document.getElementsByClassName('imgq1')[0]


// const sum1 = document.getElementsByClassName("sum1")[0]
// const arrow = document.getElementsByClassName('imgq1')[0]


// const sum2 = document.getElementsByClassName("sum2")[0]
// const arrow2 = document.getElementsByClassName('imgq2')[0]


// const sum3 = document.getElementsByClassName("sum3")[0]
// const arrow3 = document.getElementsByClassName('imgq3')[0]


// const sum4 = document.getElementsByClassName("sum4")[0]
// const arrow4 = document.getElementsByClassName('imgq4')[0]


// sum1.addEventListener("click", () => {
// 	console.log("hgcghsv")
// 	const expanded = sum1.getAttribute("aria-expanded")

// 	if(expanded==="false") {
// 		sum1.setAttribute("aria-expanded", true)
// 		arrow.style.transform = "rotate(180deg)"
// 		arrow.style.padding = "0"
// 	} else {
// 		sum1.setAttribute("aria-expanded", false)
// 		arrow.style.transform = "rotate(0deg)"
// 		arrow.style.paddingLeft = "20px"
// 	}
// })


// sum2.addEventListener("click", () => {
// 	const expanded = sum2.getAttribute("aria-expanded")

// 	if(expanded==="false") {
// 		sum2.setAttribute("aria-expanded", true)
// 		arrow2.style.transform = "rotate(180deg)"
// 		arrow2.style.padding = "0"
// 	} else {
// 		sum2.setAttribute("aria-expanded", false)
// 		arrow2.style.transform = "rotate(0deg)"
// 		arrow2.style.paddingLeft = "20px"
// 	}
// })


// sum3.addEventListener("click", () => {
// 	const expanded = sum3.getAttribute("aria-expanded")

// 	if(expanded==="false") {
// 		sum3.setAttribute("aria-expanded", true)
// 		arrow3.style.transform = "rotate(180deg)"
// 		arrow3.style.padding = "0"
// 	} else {
// 		sum3.setAttribute("aria-expanded", false)
// 		arrow3.style.transform = "rotate(0deg)"
// 		arrow3.style.paddingLeft = "20px"
// 	}
// })


// sum4.addEventListener("click", () => {
// 	const expanded = sum4.getAttribute("aria-expanded")

// 	if(expanded==="false") {
// 		sum4.setAttribute("aria-expanded", true)
// 		arrow4.style.transform = "rotate(180deg)"
// 		arrow4.style.padding = "0"
// 	} else {
// 		sum4.setAttribute("aria-expanded", false)
// 		arrow4.style.transform = "rotate(0deg)"
// 		arrow4.style.paddingLeft = "20px"
// 	}
// })


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
                // if any scroll is attempted,
                // set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}




	








