function restart(){
    items.splice(0,3);
    localStorage.setItem("items",JSON.stringify(items));
    location.reload();
}
if(JSON.parse(localStorage.getItem('items'))!=0){
    items=JSON.parse(localStorage.getItem("items"));
}else{
    items = [
            {
                title: "Сумка",
                description: "Сумка black",
                price: "10.000тг",
                src: "https://ecco.kz/images/eshop/img/jpg/bigw/9105813_90000.jpg",
                isInStock: false
            },
            {
                title: "IPhone 14",
                description: "IPhone 14 128Gb black",
                price: "100.000тг",
                src: "https://static.pepper.ru/threads/raw/N0F90/347395_1/re/1024x1024/qt/60/347395_1.jpg",  
                isInStock: false
            },
            {
                title: "Платье",
                description: "Платье black M",
                price: "25.000",
                src: "https://hommes.kz/images/thumbnails/800/1066/detailed/66/PV-4706DKAL_bbf3-jb.jpg",
                isInStock: false}
        ]
        console.log('Товары перезаписаны')
}

function createItem(item){
    let cards = document.getElementById('cards');
    let card = document.createElement('div');
    card.classList.add('card');
    let header = document.createElement('div');
    header.classList.add('card-header');
    let img = document.createElement('div');
    img.classList.add('card-img');
    let desc = document.createElement('div');
    desc.classList.add('card-desc');
    let btn = document.createElement('div');
    
    let textheader = document.createElement('h2');
    textheader.innerHTML = item.title;
    let image = document.createElement('img');
    image.src = item.src;
    let name = document.createElement('p');
    name.innerHTML = item.description;
    let price = document.createElement('p');
    price.innerHTML = item.price;
    let btn1 = document.createElement('button');
    btn1.innerHTML = "Удалить";
    let btn2 = document.createElement('button');
    btn2.classList.add('btnbtn');
    btn2.innerHTML = "Есть/Нет в наличии";
    
    btn1.addEventListener('click', function(){
        if(confirm('Вы уверены?')){
            let thiscard = document.querySelectorAll('.card');
            for(let i in items){
                if(thiscard[i]==card){
                    items.splice(i,1);
                    localStorage.setItem("items",JSON.stringify(items));
                }
            }
            card.remove();
        }
    });
    btn2.addEventListener('click', function(){
        card.classList.toggle('isInStock');
        let thiscard = document.querySelectorAll('.card');
        for(let i=0;i<thiscard.length;i++){
            if(thiscard[i].classList.contains('isInStock')==!items[i].isInStock){
                items[i].isInStock=!items[i].isInStock;
                localStorage.setItem("items",JSON.stringify(items));
            }
        }

    });

    header.append(textheader);
    img.append(image);
    desc.append(name);
    desc.append(price);
    btn.append(btn1);
    btn.append(btn2);

    card.append(header);
    card.append(img);
    card.append(desc);
    card.append(btn);

    cards.append(card);
}
for(let i in items){
    createItem(items[i]);
}
let card = document.getElementsByClassName('card');
for(let i in items){
    if(items[i].isInStock == true){
        card[i].classList.add('isInStock');
    }
}