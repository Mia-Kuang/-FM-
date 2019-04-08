let	oPic = document.getElementById("pic")
				aImg = document.querySelectorAll("#pic li img")
				aBtn = document.querySelectorAll(".btn")
				aSpan = document.querySelectorAll("#btn span")
				index = 1
				len = 5
				picArr = []
				;
				
			function border(dir){
				if(dir === "left"){
					index++
					if(index>len){
						index = 1
					}
				}else{
					index--
					if(index === 0){
						index = len
					}
				}
				if(index === len){
					picArr = [len,1]
					return
				}
				//console.log(index)
				picArr = [index,index+1]
			}
			function move(dir){
				if(dir === "left"){
					border(dir)
					oPic.style.transition = "1s"
					oPic.style.left = "-500px"
					setTimeout(function(){
						oPic.style.transition = "0s"
						oPic.style.left = 0 
						oPic.style.transition = "0s"
						aImg[0].src = `image/${picArr[0]}.jpg`
						aImg[1].src = `image/${picArr[1]}.jpg`
					},1000)
				}
//				else{
//					border(dir)
//					oPic.style.transition = "0s"
//					oPic.style.left = -500+"px"
//					aImg[0].src = `img/${picArr[0]}.jpg`
//					aImg[1].src = `img/${picArr[1]}.jpg`
//					setTimeout(function(){//异步执行
//						oPic.style.transition = "1s"
//						oPic.style.left = 0
//					},0)
//				}
			}
			
			setInterval(function(){
				move("left")
			},2000)
//			aBtn[0].onclick = function(){
//				move("left")
//			}
//			aBtn[1].onclick = function(){
//				move("right")
//			}
			aSpan.forEach((v,i)=>{
				aSpan[i].onclick = function(){
					aImg[0].src = `image/${i+1}.jpg`
				}
			})