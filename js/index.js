
function _$(elts) { return document.getElementById(elts) }
function _createElts(elts) { return document.createElement(elts)}


const nav_link = _$("nav-link")
const icon = _$("icon")
const t_btn1 = _$("btn_1")
const t_btn2 = _$("btn_2")
const t_btn3 = _$("btn_3")
const t_btn4 = _$("btn_4")
const line_container = _$("line-container")
const line = _$("line")
const trait_1 = _$("trait1")
const trait_2 = _$("trait2")
const trait_3 = _$("trait3")
const trait_4 = _$("trait4")
const trait_5 = _$("trait5")
const image_container = _$("image-box-container")
const classement = _$("classement-container")
const classement2 = _$("classement-container1")

let tab_nav_link = ["Home","Pages","About","Services","Contact"]
let tab_icon_grid = ["img/facebook.png","img/twitter-xxl.png","img/linkedin.png"]
let tab_text = ["Pages","Length","Ratings"]
let tab_property = ["586 pages","10 hours","4.5/5 (305 ratings)"]


const image_grid = (selector,data,width,height,marginTop) =>{
    selector.src = data
    selector.style.width = width + "rem"
    selector.style.height = height + "rem"
    selector.style.marginTop = marginTop + "rem"
}

const icon_grid = (selector,table) =>{
    table.forEach((data) => {
    let t_div = _createElts("div")
    let t_img = _createElts("img")
    selector.appendChild(t_div)
    t_div.appendChild(t_img)
    t_div.classList.add("nav-link-background")

    image_grid(t_img,data,"1","1","-0.5")
 
    })
}
    icon_grid(icon,tab_icon_grid)

const navLink = (selector, table) => {
    table.forEach((data) => {   
  let lien = _createElts("td")
      selector.appendChild(lien)
  
      let lien_href = _createElts("span")
      lien.appendChild(lien_href)
  
      let a = _createElts("a")
      a.href = "#"
      a.textContent = data
      a.classList.add("lien_href")
      lien_href.appendChild(a)
    })
  }

  navLink(nav_link,tab_nav_link)

  const buttonCheck = (selector,height,width,value,backgroundColor, color,borderColor,radius,marginTop,marginLeft) => {
    let t_btn = _createElts("button")
    selector.appendChild(t_btn)

    t_btn.style.height = height + "rem"
    t_btn.style.width = width + "rem"
    t_btn.textContent = value
    t_btn.style.background = backgroundColor
    t_btn.style.color = color
    t_btn.style.borderColor = borderColor
    t_btn.style.borderRadius = radius + "%"
    t_btn.classList.add("btn_1")
    t_btn.style.marginTop = marginTop + "rem"
    t_btn.style.marginLeft = marginLeft + "rem"
  }

  buttonCheck(t_btn1,3,8,"Order Today","rgba(255, 202, 66, 1)","rgba(27, 55, 100, 1)","transparent",0,'','')
  buttonCheck(t_btn2,3,10,"Order Today","rgba(255, 202, 66, 1)","rgba(27, 55, 100, 1)","transparent",0,'','')
  const graphForm = (selector,height, width,color,radius,classe) => {
    selector.style.width = width + "em"
    selector.style.height = height + "em"
    selector.style.background = color
    selector.style.borderRadius = radius + "em"
    selector.classList.add(classe)
}
const graph =(selector,height,width,color,radius) => {
    selector.style.width = width + "rem"
    selector.style.height = height + "rem"
    selector.style.background = color
    selector.style.borderRadius = radius + "rem"
}

graph(line,0.1,2,"rgba(255, 202, 66, 0.8)",0)

const poster_text = (selector, data) => {
    let t_div = _createElts("div");
    selector.appendChild(t_div)
    t_div.textContent = data
  }
  
  const poster = (selector, table1, table2,color1,color2,n) => {

    for(let i = 0; i<table1.length - n ; i++){
    let t_div1 = _createElts("div")
    selector.appendChild(t_div1)
    selector.classList.add("line-container-style1")
    t_div1.classList.add("line-separate")

    let t_span1 = _createElts("span")
    t_div1.appendChild(t_span1);
  
    let t_span2 = _createElts("span")
    t_div1.appendChild(t_span2)
        
      buttonCheck(t_span1,0.9,0," ","rgba(255, 202, 66, 0.9)"," ","transparent",50,0.19,'')
      poster_text(t_span1,table1[i])
      t_span1.classList.add("line-place")
      t_span1.classList.add("line-container-text")
      t_span1.style.color = color1

      poster_text(t_span2, table2[i])
      t_span2.classList.add("line-place2")
      t_span2.style.color = color2
    }
  };
  
  poster(line_container, tab_text, tab_property,"rgba(255, 255, 255, 0.9)","rgba(255, 255, 255, 0.9)",0)

  graph(trait_1,0.1,2,"rgba(27, 55, 100, 1)",0)
  graph(trait_2,0.1,2,"rgba(27, 55, 100, 1)",0)
  graph(trait_3,0.1,1,"rgba(27, 55, 100, 1)",0)
  graph(trait_4,0.1,1,"rgba(27, 55, 100, 1)",0)
  graph(trait_5,0.1,2,"rgba(255, 202, 66, 0.7",0)
  
 poster(classement,tab_text,tab_property,"black","black",1)
 poster(classement2,tab_text,tab_property,"black","black",1)
 buttonCheck(t_btn3,3,10,"Order Today","transparent","rgba(27, 55, 100, 1)","rgba(255, 202, 66, 1)",0,2,'')
 buttonCheck(t_btn4,3,10,"Order Today","transparent","rgba(27, 55, 100, 1)","rgba(255, 202, 66, 1)",0,2,'')
