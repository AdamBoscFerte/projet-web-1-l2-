
/*for (let item in truc){
    console.log('FOR', item);
}*/
/*function hide_show(doc){
    doc.forEach((item) =>{
        //console.log('forEach', element);
        item.addEventListener("click", (e) =>{
            console.log('Click sur', item);
            const subItem = item.getElementsByTagName('ul');
            if (subItem && subItem.length){
                console.log('Sous Menu', subItem);
                //subItem[0].classList.toggle('hide');
                if (subItem[0].style.display === "none") {
                    subItem[0].style.display = "flex";
                  } else {
                    subItem[0].style.display = "none";
                }
            }
            
        });
    });
}*/
function showNavbarSubItem (event, item){
    const subItem = item.getElementsByTagName('ul');
    if (subItem && subItem.length){
        //subItem[0].classList.toggle('hide');
        if (subItem[0].style.display === "none") {
            subItem[0].style.display = "flex";
          } else {
            subItem[0].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event){
    const truc = document.querySelectorAll('#navbar > ul > li');
    console.log(truc);
    truc.forEach((item) =>{
        // console.log('forEach', item);
        item.addEventListener('click', (e) => showNavbarSubItem(e, item));
    })
})