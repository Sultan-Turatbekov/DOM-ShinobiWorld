// const someText = document.querySelector('.someText')
// someText.innerHTML = 'Salam'
// let a=5324324, b=12134
// let word = prompt('Write text', `${a}+${b}=${a+b}`)
// someText.innerHTML=word

// let someText = document.querySelector('.someText')
// let word = 'someWord'

// someText.insertAdjacentHTML("beforeend", word)

//'beforebegin - до самого element (до открывающего тега)
//'afterbegin' - сразу после открывающего тега element (после последнего потомка)
//'beforeend' - сразу переде закрывающим тегом element (после последнего потомка)
//'afterend' - после element (после закрывающего тега)
/////////////////////////////////////////////////////////////

// let someText = document.querySelector('.someText')
// someText.insertAdjacentHTML("beforeend", '<span class="adil">Adil</span>')
//////////////////////////////////////////////////////////////

// let someText = document.querySelector('.someText')
// let adil = prompt('sultan')
// let setTohtml = `<span class="adil">${adil}</span>`
// someText.insertAdjacentHTML("beforeend", setTohtml)

//////////////////////////////////////////////////////////////

// let adil = prompt('sultan')
// let setTohtml = `<span class="adil">${adil}</span>`
// someText.insertAdjacentHTML("beforeend", setTohtml)
// let someText = document.querySelector('.someText')
// const arrayGroup = [
//   'adil', 'dilbar', 'alihan', 'ammar', 'eleman', 'sarynji', 'sultan'
// ]

// function generateCards(arr){
//   // const res=arr.map(item=>`<span class="adil">${item}</span>`).join('')
//   // console.log(res, 'res')
//   // res.split('')
//   // return res
//   return arr.map(item=>`<span class="adil">${item}</span>`).join('')
// }

// generateCards(arrayGroup)
// someText.insertAdjacentHTML("beforeend", generateCards(arrayGroup))

let shinobiWorld = [
  {
    name: "Naruto",
    clan: "Uzumaki",
    gender: "Male",
    rang: "Genin",
    vallage: "Leafy Village",
    image:
      "https://overclockers.ru/st/c/650/400/legacy/blog/422417/370374_O.jpg",
  },
  {
    name: "Saske",
    clan: "Uchiha",
    gender: "Male",
    rang: "Genin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/9/9f/Sasuke_Part_2.jpg/revision/latest?cb=20210404192345&path-prefix=ru",
  },
  {
    name: "Sakura",
    clan: "Haruno",
    gender: "Female",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Sakura_Boruto.png/revision/latest?cb=20210224210410&path-prefix=ru",
  },
  {
    name: "Kakashi",
    clan: "hatake",
    gender: "Male",
    rang: "Sennin",
    vallage: "Leafy Village",
    image:
      "https://minecraftch.ru/uploads/posts/2018-03/1521238840_kakashihatake.jpg",
  },
  {
    name: "Orochimaru",
    clan: "",
    gender: "Male",
    rang: "Sanin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/1/14/Orochimaru_Infobox.png/revision/latest?cb=20151017160235&path-prefix=ru",
  },
  {
    name: "Madara",
    clan: "Uchiha",
    gender: "Male",
    rang: "dancer(died)",
    vallage: "Leafy Village",
    image:
      "https://sun9-56.userapi.com/impf/c850124/v850124490/cbafc/pqpDEyxae-Y.jpg?size=807x533&quality=96&sign=925f8a5abd5f8f0cd885e09ce61f7323&type=album",
  },
  {
    name: "Gaara",
    clan: "",
    gender: "Male",
    rang: "Kazekage",
    vallage: "Sand Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/0/0f/Gaara_Part_II.png/revision/latest?cb=20170507172824&path-prefix=ru",
  },
  {
    name: "Yamato",
    clan: "",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Yamato_newshot.png/revision/latest?cb=20190202094154&path-prefix=ru",
  },
  {
    name: "Jiraya",
    clan: "",
    gender: "Male",
    rang: "Sanin (died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.PNG/revision/latest?cb=20170818131513&path-prefix=ru",
  },
  {
    name: "Guy",
    clan: "Maito",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/3/31/Might_Guy.png/revision/latest/scale-to-width-down/300?cb=20150401084456",
  },
  {
    name: "Sunade",
    clan: "Senju",
    gender: "Female",
    rang: "Sanin",
    vallage: "Leafy Village",
    image: "https://prompthero.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWsxTURVNVl6WTNaaTFoTUdFNUxUUTFZbVV0WVRVMk5DMDNNemt6WmpCaE9EazVZekFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--de439eff1169c9dde8a2788ea5aa790b797494dc/136028.jpeg",
  },
  {
    name: "Hirusen",
    clan: "Sarutobi",
    gender: "Male",
    rang: "Hockage (died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/e/e4/Hiruzen_Sarutobi.png/revision/latest?cb=20170930091606&path-prefix=ru",
  },
  {
    name: "Tobirama",
    clan: "Senju",
    gender: "Male",
    rang: "Hockage (died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/b/be/Tobirama_Senju.png/revision/latest?cb=20200325223703&path-prefix=ru",
  },
  {
    name: "Killer",
    clan: "Be",
    gender: "Male",
    rang: "Jinchuriki",
    vallage: "Clouds Village",
    image:
      "https://static.wikia.nocookie.net/character-power/images/f/fa/%D0%9A%D0%B8%D0%BB%D0%BB%D0%B5%D1%80_%D0%91%D0%B81.png/revision/latest?cb=20140326105611&path-prefix=ru",
  },
  {
    name: "Minato",
    clan: "Namikaze",
    gender: "Male",
    rang: "Hockage(died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png/revision/latest?cb=20200324174322&path-prefix=ru",
  },
  {
    name: "Danzo",
    clan: "Shimuro",
    gender: "Male",
    rang: "Hockage(died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/0/08/Danzo_Shimura.png/revision/latest?cb=20181230092441&path-prefix=ru",
  },
  {
    name: "Onoki",
    clan: "",
    gender: "Male",
    rang: "Suchikage",
    vallage: "Rock Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/6/67/%C5%8Cnoki.png/revision/latest?cb=20200328000054&path-prefix=ru",
  },
  {
    name: "Choji",
    clan: "Akimichi",
    gender: "Male",
    rang: "lonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/e/ec/Ch%C5%8Dji_Part_II.png/revision/latest?cb=20141205195635&path-prefix=ru",
  },
  {
    name: "Deydara",
    clan: "",
    gender: "Male",
    rang: "Bomber(died)",
    vallage: "Rock Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/d/d3/Deidara_mugshot.png/revision/latest/top-crop/width/360/height/450?cb=20170203125226&path-prefix=ru",
  },
  {
    name: "Hinata",
    clan: "Huiga",
    gender: "Female",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://i.pinimg.com/originals/63/91/be/6391be5cac6f10c57c9a5eaa83a7b473.jpg",
  },
  {
    name: "Ino",
    clan: "Yamanako",
    gender: "Female",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/0/0c/Ino_Part_III.png/revision/latest?cb=20201206113822&path-prefix=ru",
  },
  {
    name: "Itachi",
    clan: "Uchiha",
    gender: "Male",
    rang: "Killer(programmer(died))",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20210225204731&path-prefix=ru",
  },
  {
    name: "Asuma",
    clan: "Sarutobi",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/7/7c/Asuma.png/revision/latest?cb=20170426175941&path-prefix=ru",
  },
  {
    name: "Shikamaru",
    clan: "Nara",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/9/9a/Shikamaru_Nara.png/revision/latest?cb=20150215172830&path-prefix=ru",
  },
  {
    name: "Iruka",
    clan: "Umino",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/b/bc/Iruka.png/revision/latest?cb=20170327171916&path-prefix=ru",
  },
  {
    name: "Ten Ten",
    clan: "",
    gender: "Female",
    rang: "Jonin",
    vallage: "Sand Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/d/da/Tenten_Part_1.png/revision/latest?cb=20190123214028&path-prefix=ru",
  },
  {
    name: "Neji",
    clan: "Huiga",
    gender: "Male",
    rang: "chunin(died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/8/8e/Neji_Part_I_Screenshot.png/revision/latest?cb=20210313213316&path-prefix=ru",
  },
  {
    name: "Shisui",
    clan: "Uchiha",
    gender: "Male",
    rang: "chunin(died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/4/4c/Shisui_Uchiha.png/revision/latest?cb=20171102152323&path-prefix=ru",
  },
  {
    name: "Nagato",
    clan: "Uzumaki",
    gender: "Male",
    rang: "Genin(died)",
    vallage: "Rain Village",
    image:
      "https://staticg.sportskeeda.com/editor/2022/07/89043-16587442226271.png?w=840",
  },
  {
    name: "Obito",
    clan: "Uchiha",
    gender: "Male",
    rang: "Genin(died)",
    vallage: "Leafy Village",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Hashirama",
    clan: "Senju",
    gender: "Male",
    rang: "Hockage(died)",
    vallage: "Leafy Village",
    image:
      "https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/anime/26/01e7547513569738.jpg",
  },
  {
    name: "Rock",
    clan: "Li",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/d/d4/Lee_Part_III.png/revision/latest?cb=20190205134348&path-prefix=ru",
  },
  {
    name: "Sasori",
    clan: "",
    gender: "Male",
    rang: "Kuklovod(died)",
    vallage: "Sand Village",
    image:
      "https://i.pinimg.com/736x/31/0a/f8/310af8ed1836b3aa75cc7b67955eaa90.jpg",
  },
  {
    name: "Kankuro",
    clan: "",
    gender: "Male",
    rang: "Jonin",
    vallage: "Sand Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/2/28/Kankuro_Boruto.png/revision/latest?cb=20180425122800&path-prefix=ru",
  },
  {
    name: "Kisame",
    clan: "hoshigake",
    gender: "Male",
    rang: "Skark(died)",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/8/8d/Hoshigaki_Kisame.png/revision/latest?cb=20150621205008&path-prefix=ru",
  },
  {
    name: "Kiba",
    clan: "Inuzuka",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/7/78/Kiba_Adult_New_Era.png/revision/latest?cb=20190216100215&path-prefix=ru",
  },
  {
    name: "May",
    clan: "Terumi",
    gender: "Female",
    rang: "Mizukage(was)",
    vallage: "Leafy Village",
    image:
      "http://pm1.narvii.com/7333/63648fc32a5c89533ff7fef55ae270be736a3a4cr1-600-1003v2_uhq.jpg",
  },
  {
    name: "Suygesu",
    clan: "Hozuki",
    gender: "Male",
    rang: "Water",
    vallage: "Orochimaru lab",
    image:
      "https://static.wikia.nocookie.net/naruto/images/7/72/Suigetsu_part_III.png/revision/latest?cb=20180520182724&path-prefix=ru",
  },
  {
    name: "Ibicki",
    clan: "Morino",
    gender: "Male",
    rang: "jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/6/61/Ibiki_Morino.png/revision/latest?cb=20150513145429&path-prefix=ru",
  },
  {
    name: "Hamura",
    clan: "Otsusuki",
    gender: "Male",
    rang: "Bro",
    vallage: "Bishkek",
    image:
      "https://static.wikia.nocookie.net/naruto/images/e/e8/Hamura.png/revision/latest?cb=20200402155357&path-prefix=ru",
  },
  {
    name: "Izumo",
    clan: "Kamizuki",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/5/5d/Izumo_Kamizuki.png/revision/latest?cb=20190119095015&path-prefix=ru",
  },
  {
    name: "Konohomaru",
    clan: "Sarutobi",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "http://pm1.narvii.com/6916/94118fdc8858f7ea7e8bc71c643585c7203e8526r1-1200-773v2_00.jpg",
  },
  {
    name: "Hagoromo",
    clan: "Otsusuki",
    gender: "Male",
    rang: "Мудрец 6",
    vallage: "Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/9/9b/Hagoromo_pic_2.png/revision/latest?cb=20170104134326&path-prefix=ru",
  },
  {
    name: "Zabuza",
    clan: "Momochi",
    gender: "Male",
    rang: "Killer(died)",
    vallage: "Tooman Village",
    image:
      "https://jut.su/forum/uploads/attachment/2016-08/1470513375_zabuza_momochi_anime_hd.png",
  },
  {
    name: "Darui",
    clan: "",
    gender: "Male",
    rang: "jonin",
    vallage: "Rain Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/4/45/Darui.png/revision/latest?cb=20150624100502&path-prefix=ru",
  },
  {
    name: "Karin",
    clan: "Uzumaki",
    gender: "Female",
    rang: "Genin",
    vallage: "Orochimaru lab",
    image:
      "https://static.wikia.nocookie.net/naruto/images/6/6e/Karin_p3.png/revision/latest?cb=20190410180505&path-prefix=ru",
  },
  {
    name: "Sai",
    clan: "",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://static.wikia.nocookie.net/naruto/images/6/6c/Sai_Part_III.png/revision/latest?cb=20201206114228&path-prefix=ru",
  },
  {
    name: "Momshiki",
    clan: "Otsusiki",
    gender: "Male",
    rang: "God(died)",
    vallage: "Space",
    image:
      "https://static.wikia.nocookie.net/naruto/images/1/13/Arco_Versus_Momoshiki.png/revision/latest?cb=20171210180323&path-prefix=ru",
  },
  {
    name: "Toneri",
    clan: "Otsusuki",
    gender: "Male",
    rang: "",
    vallage: "Moon",
    image:
      "https://static.wikia.nocookie.net/anime-characters-fight/images/0/0f/Ootsutsuki_Toneri_%282%29.png/revision/latest?cb=20190404144842&path-prefix=ru",
  },
];

let shinobiListContainer = document.querySelector(".shinobiList");

function generateCards(arr) {
  return shinobiWorld.map((shinobi) => `
          <div class="shinobi-card">
              <img src="${shinobi.image}" alt="${shinobi.name}">
              <h2>${shinobi.name}</h2>
              <p>Clan: ${shinobi.clan}</p>
              <p>Gender: ${shinobi.gender}</p>
              <p>Rang: ${shinobi.rang}</p>
              <p>Village: ${shinobi.vallage}</p>
          </div>
      `).join(" ");
}
shinobiListContainer.insertAdjacentHTML("beforeend", generateCards());
