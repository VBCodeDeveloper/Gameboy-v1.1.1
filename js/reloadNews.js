const exist_element=document.getElementById("reload")

exist_element.addEventListener("click",()=>{
    let footer__cards = document.querySelectorAll(".footer__info_pos");

    for (const el of footer__cards) {
        el.remove();
    }

    const footer__info = document.querySelectorAll(".footer__info");
    linkDiv = "footer__info_date";
    linkA = "#";

    for (const el of footer__info) {
        let newFooter__info_pos = document.createElement("div");
        newFooter__info_pos.classList.add("footer__info_pos");
        newFooter__info_pos.innerHTML=`<a href = ${linkA}>updated news</a><div class = ${linkDiv}><p>dd.mm.yy</p></div>`;
        
        el.appendChild(newFooter__info_pos);
    }

    // const fillGrid = () => {
    //     let col = 1, row = 1;
    //     const items = [...document.getElementsByClassName('grid-item')];
    //     const grid = document.getElementById('grid');
    //     items.forEach(item => {
    //         item.style.gridArea = `${row} / ${col}`;
    //         col++;
    //         if(col>4){
    //           col=1;
    //           row++;
    //         }
    //     });
    // }

    // footer__info[0].appendChild(newFooter__info_pos);

    // let new_element=document.createElement("div");
    // new_element.innerHTML="new div";
    // new_element.classList.add("new_style");
    // exist_element.before(new_element);
    // let new_element_close=document.createElement("input");
    // new_element_close.type="button";
    // new_element_close.value="X";
    // new_element_close.addEventListener("click",()=>{
    //     new_element.remove();
    // })
    // new_element.append(new_element_close);
})