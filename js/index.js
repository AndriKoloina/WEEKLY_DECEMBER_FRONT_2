
function _$(elts) { return document.getElementById(elts) }
function _createElts(elts) { return document.createElement(elts)}


const nav_link = _$("nav-link")
const icon = _$("icon")
const t_btn1 = _$("btn_1")
const t_btn2 = _$("btn_2")
const t_btn3 = _$("btn_3")
const t_btn4 = _$("btn_4")
const t_btn5 = _$("btn_5")
const t_btn6 = _$("btn_6")
const line_container = _$("line-container")
const line = _$("line")
const trait_1 = _$("trait1")
const trait_2 = _$("trait2")
const trait_3 = _$("trait3")
const trait_4 = _$("trait4")
const trait_5 = _$("trait5")
const trait_6 = _$("trait6")
const trait_7 = _$("trait7")
const trait_8 = _$("trait8")
const trait_9 = _$("trait9")
const trait_10 = _$("trait10")
const trait_11 = _$("trait11")
const trait_12 = _$("trait12")
const image_container = _$("image-box-container")
const classement = _$("classement-container")
const classement2 = _$("classement-container1")
const about = _$("about_property")
const logo_element = _$("icon-grid-element")
const copy_container = _$("copy-container")
const body3 = _$("t_body3")
const grid1 = _$("grid1")
const grid2 = _$("grid2")
const chapter_grid1 = _$("chapter_grid1")
const chapter_grid2 = _$("chapter_grid2")
const round1 = _$("round1")
const round2 = _$("round2")
const round3 = _$("round3")
const round4 = _$("round4")
const round5 = _$("round5")
const user_container1 = _$("user-container1")
const user_container2 = _$("user-container2")
const box_container_image = _$("box-container-image")
const email = _$("email")
const icon1 = _$("icon1")
const footer1 = _$("footer1")
const footer2 = _$("footer2")

let tab_nav_link = ["Home","Pages","About","Services","Contact"]
let tab_icon_grid = ["img/facebook.png","img/twitter-xxl.png","img/linkedin.png"]
let tab_text = ["Pages","Length","Ratings"]
let tab_property = ["586 pages","10 hours","4.5/5 (305 ratings)"]
let tab_about_property = ["2","4.5","04"]
let tab_about_text = ["Books Published","User Reviews","Best Seller Award"]
let tab_logo = ["img/logo (1).png","img/logo (2).png","img/logo (3).png","img/logo (4).png"]
let tab_logo_title= ["Amazen Corp","Megan Books","Los Books","Urban Lib"] 
let tab_logo_text = ["A long established fact that a who looking at its layout.","A long established fact that a who looking at its layout.","A long established fact that a who looking at its layout.","A long established fact that a who looking at its layout."]
let tab_grid_text = ["Use HDFS & Map Reduce for storing & analyzing data at scale.","Choose an appropriate data storage technology for your application","Consume streaming data using Spark Streaming, Flink, and Storm.","Analyze non-relational data using HBase, Cassandra, and MongoDB."]
let tab_grid_btn = ["01","03","02","04"]
let tab_chapter_title = ["Chapter- 01   Get Started Intro","Chapter- 02   Create a Massive Content","Chapter- 03   Maintaining the Creative Arcs","Chapter- 04   The Conclusion"]
let tab_chapter_sub = ["Pages :","Length :","Pages :","Length :"]
let tab_chapter_hour = ["85 pages","1 Hour 15 mins","85 pages","1 Hour 15 mins"]
let tab_user_name = ["Martin Philips","James Anderson","Christina Louis"]
let tab_user_img = ["img/photo1.jpg","img/photo2.jpg","img/photo3.jpg"]
let tab_user_sub = ["“ Awesome Impact ”","“ Mind Blowing Words ”","“ Great Books Collections ”"]
let tab_article_img = ["img/Photoimg1.png","img/Photoimg2.png","img/Photoimg3.png"]
let tab_article_title = ["The energy efficiency offers hydrotherapy or swim","Release of Letraset sheets tools containing  passages","The energy efficiency offers hydrotherapy or swim"]
let tab_lien_footer = ["Home","AboutUs","Services","Appointments","Blog","Contact"]
let tab_lien_footer1 = ["Start here","Style Guide","404 not found","Password protected","Licenses","Changelog"]

let text_user = "All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
let text_chapter = "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful."
let text_article = "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
let lien_article = "Read more"
let data_article = "Author - 23.05.2022"

const image_grid = (selector,data,width,height,marginTop,marginLeft) =>{
    selector.src = data
    selector.style.width = width + "rem"
    selector.style.height = height + "rem"
    selector.style.marginTop = marginTop + "rem"
    selector.style.marginLeft = marginLeft + "rem"
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
  
  poster(line_container, tab_text, tab_property,"rgba(255, 255, 255, 0.9)","rgba(255, 255, 255, 0.6)",0)

  graph(trait_1,0.1,2,"rgba(27, 55, 100, 1)",0)
  graph(trait_2,0.1,2,"rgba(27, 55, 100, 1)",0)
  graph(trait_3,0.1,1,"rgba(27, 55, 100, 1)",0)
  graph(trait_4,0.1,1,"rgba(27, 55, 100, 1)",0)
  graph(trait_5,0.1,2,"rgba(255, 202, 66, 0.7)",0)
  
 poster(classement,tab_text,tab_property,"black","black",1)
 poster(classement2,tab_text,tab_property,"black","black",1)
 buttonCheck(t_btn3,3,10,"Order Today","transparent","rgba(27, 55, 100, 1)","rgba(255, 202, 66, 1)",0,2,'')
 buttonCheck(t_btn4,3,10,"Order Today","transparent","rgba(27, 55, 100, 1)","rgba(255, 202, 66, 1)",0,2,'')

 graph(trait_6,0.1,2,"rgba(255, 202, 66, 1)",0)
poster(about,tab_about_property,tab_about_text,"rgba(27, 55, 100, 1)","rgba(150, 154, 160, 1)",0)
graph(trait_7,0.2,3,"rgba(255, 202, 66, 0.7",0)  

const poster_icon_grid_element = (selector) =>{
  for(let i = 0 ; i < 4 ; i++){
    let t_div = _createElts("div")
  selector.appendChild(t_div)
  
  let t_div1 = _createElts("div")
  t_div.appendChild(t_div1)
  let t_img = _createElts("img")
  t_div1.appendChild(t_img)
  let t_div2 = _createElts("div")
  t_div.appendChild(t_div2)
  let t_div3 = _createElts("div")
  t_div.appendChild(t_div3)

  t_div.classList.add("logo-div")
  image_grid(t_img,tab_logo[i], 4,4,0)
  t_img.classList.add("logo-image")
  t_div2.textContent = tab_logo_title[i]
  t_div2.classList.add("logo-title")
  t_div3.textContent = tab_logo_text[i]
  t_div3.classList.add("logo-text")
  }

}
poster_icon_grid_element(logo_element)
buttonCheck(t_btn5,3,10,"Order Today","transparent","white","rgba(255, 202, 66, 0.8)",0,2,'')
graph(trait_8,0.2,3,"rgba(255, 202, 66, 0.7)",0)  

const marge_grid = (selector, table1, table2,n,m) => {
  for (let i = m; i <= n; i++) {
    let t_div = _createElts("div")
    let t_div1 = _createElts("div")
    let t_div2 = _createElts("div")

    selector.appendChild(t_div)
    t_div.classList.add("gride-element")
    t_div.appendChild(t_div1)
    t_div1.classList.add("gride-btn")
    t_div.appendChild(t_div2)
    t_div2.classList.add("gride-text")

    buttonCheck(t_div1,2,2,table1[i],"rgba(255, 202, 66, 1)","rgba(27, 55, 100, 1) ","transparent",50,0,0)
    t_div2.textContent = table2[i]
  }
}
marge_grid(grid1,tab_grid_btn,tab_grid_text,1,0)
marge_grid(grid2,tab_grid_btn,tab_grid_text,3,2)

graph(trait_9,0.2,3,"rgba(255, 202, 66, 0.7)",0)  


const marge_grid_two = (selector, table1, table2, table3, data, startIndex, endIndex) => {
  for (let i = startIndex; i <= endIndex; i++) {
    let t_div = _createElts("div")
    let t_div1 = _createElts("h1")
    let t_div2 = _createElts("div")
    let t_div3 = _createElts("div")
    

    selector.appendChild(t_div)
    t_div.appendChild(t_div1)
    t_div.appendChild(t_div2)
    t_div.appendChild(t_div3)
    

    t_div.classList.add("chapter_grid")

    t_div1.textContent = table1[i]
    t_div1.classList.add("chapter_title")
    t_div2.textContent = data
    t_div2.classList.add("chapter_paragraph")

    for(let i =startIndex;i<=endIndex;i++){
    let t_span1 = _createElts("span")
    let t_span2 = _createElts("span")
    let t_span3 = _createElts("span")
    t_div3.appendChild(t_span1)
    t_div3.appendChild(t_span2)
    t_div3.appendChild(t_span3)

   
    buttonCheck(t_span1,0.9,0.01,"","rgba(255, 202, 66, 1)","","transparent",50,0,0)
    t_span1.classList.add("chapter_container")
    
    t_span2.style.fontSize = 1+ "rem"
    t_span2.style.marginLeft = "0.8rem"

    t_span2.textContent = table2[i]
    t_span3.textContent = table3[i]
    }
  }
}

marge_grid_two(chapter_grid1,tab_chapter_title,tab_chapter_sub,tab_chapter_hour,text_chapter,0,1)
marge_grid_two(chapter_grid2,tab_chapter_title,tab_chapter_sub,tab_chapter_hour,text_chapter,2,3)
buttonCheck(t_btn6,3,20,"Start a 15-Days Free Trail","rgba(255, 202, 66, 1)","rgba(27, 55, 100, 1)","transparent",0,3,-9)

graph(trait_10,0.2,3,"rgba(255, 202, 66, 0.7)",0)
graph(round1,0.8,0.8,"rgba(255, 202, 66, 1)",50)
graph(round2,0.8,0.8,"rgba(255, 202, 66, 1)",50)
graph(round3,0.8,0.8,"rgba(255, 202, 66, 1)",50)
graph(round4,0.8,0.8,"rgba(255, 202, 66, 1)",50)
graph(round5,0.8,0.8,"linear-gradient(right rgba(255, 202, 66, 1) 50%,#ffff 50%)",50)

const marge_grid_three = (selector, table1, table2, table3, data, startIndex, endIndex) =>{
  for (let i = startIndex; i <= endIndex; i++) {
    let t_div = _createElts("div")
    let t_img = _createElts("img")
    let t_div1 = _createElts("div")
    let t_div1_2 = _createElts("div")
    let t_div1_1 = _createElts("div")
    let t_div2 = _createElts("div")
    let t_div3 = _createElts("div")
    let t_divs = _createElts("div")
    

    selector.appendChild(t_div)
    t_div.appendChild(t_divs)
    t_divs.appendChild(t_img)
    t_divs.appendChild(t_div1)
    t_div1.appendChild(t_div1_1)
    t_div1.appendChild(t_div1_2)
    t_div.appendChild(t_div2)
    t_div.appendChild(t_div3)

    t_div.classList.add("backFond")
    image_grid(t_img,tab_user_img[i],3,3,0,0)
    t_img.style.borderRadius = 50 + "%"
    t_divs.classList.add("placement")

    t_div1_1.textContent = table2[i]
    t_div1_1.classList.add("user_name")
    t_div1_2.classList.add("placement")
    for(let j = 0; j< 5 ; j++){

      let round = _createElts("div")
      t_div1_2.appendChild(round)
      round.style.marginLeft = "0.2rem"
      round.style.marginTop = "-0.4rem"
      graph(round,0.5,0.5,"rgba(255, 202, 66, 1)",50)  
    }
    t_div2.textContent = table3[i]
    t_div2.classList.add("user_sub")
    t_div3.textContent = data
    t_div3.classList.add("user_lorem")
    
    }
  }

marge_grid_three(user_container1,tab_user_img,tab_user_name,tab_user_sub,text_user,0,1)
marge_grid_three(user_container2,tab_user_img,tab_user_name,tab_user_sub,text_user,2,2)

graph(trait_11,0.2,3,"rgba(255, 202, 66, 0.7)",0)  

const item_grid = (selector,table1,table2,data1,data2,data3) =>{
    for(let i = 0; i < 3 ; i++){
      let t_div = _createElts("div")
      selector.appendChild(t_div)

      t_div.classList.add("backFond2")
      let t_img = _createElts("img")
      t_div.appendChild(t_img)

      let t_div1 = _createElts("div")
      t_div.appendChild(t_div1)
      let t_div2 = _createElts("div")
      t_div.appendChild(t_div2)
      let t_div3 = _createElts("div")
      t_div.appendChild(t_div3)

      let t_div3_1 = _createElts("a")
      t_div3.appendChild(t_div3_1)
      let t_div3_2 = _createElts("div")
      t_div3.appendChild(t_div3_2)

      image_grid(t_img,table1[i],16,12,0,0)
      t_div1.textContent = table2[i]
      t_div1.classList.add("chapter_title")
      t_div2.textContent = data1
      t_div2.classList.add("chapter_paragraph")
      t_div3_1.href ="#"
      t_div3_2.textContent = data3
      t_div3_1.textContent = data2
      t_div3_1.classList.add("lienColor")
      t_div3.classList.add("line-separate2")
    }
}

item_grid(box_container_image,tab_article_img,tab_article_title,text_article,lien_article,data_article)
graph(trait_12,0.1,3,"rgba(27, 55, 100, 1)",0)
buttonCheck(email,3.6,17,"Subscribe","rgba(27, 55, 100, 1)","white","transparent",0,0,0)

navLinkFooter = (selector,table,title) =>{
  let t_div = _createElts("h3")
    selector.appendChild(t_div)
    t_div.textContent = title
    t_div.classList.add("footer_title")
  table.forEach((data)=>{

    let lien = _createElts("div")
      selector.appendChild(lien)
    
      let lien_href = _createElts("span")
      lien.appendChild(lien_href)
      lien_href.classList.add("round-separate")
      for(let j = 0; j<3 ; j++){
        let round = _createElts("div")
        lien_href.appendChild(round)
        round.style.marginLeft = "0.1rem"
        round.style.marginTop = "1.7rem"
        graph(round,0.3,0.3,"rgba(255, 202, 66, 1)",50)  
      }
      let a = _createElts("a")
      a.href = "#"
      a.textContent = data
      a.classList.add("lien_href1")
      lien_href.appendChild(a)
    
  })
}
navLinkFooter(footer1,tab_lien_footer,"Explore")
navLinkFooter(footer2,tab_lien_footer1,"Utility Pages")