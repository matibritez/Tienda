let productos=[
    {
        id:"1",
        nombre: "Motorola e20",
        price: 35000,
        img:"https://www.cetrogar.com.ar/media/catalog/product/2/0/2021_aruba_basic_pack_graphite_gray_frontback.png?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
        stock:2,
        categoria:"motorola"
    },
    {
        id:"KhfeETW3RGLQtOWoGv",
        nombre: "Samsung a22",
        price: 41000,
        img: "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2755-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
        stock:0,
        categoria:"samsung"
    },
    {
        id:"3",
        nombre:"Samsung a12",
        price: 30000,
        img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2735_1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
        stock:9,
        categoria:"samsung"
    },
    {
        id:"4",
        nombre:"Samsung ZFfold2",
        price: 138999,
        img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2665-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds://tienda.movistar.com.ar/media/catalog/product/cache/29ccbb5c02aec1862b4f5a57a55d0f2f/s/m/sm-f711_zflip3_openfront_phantomblack_4_1.png",
        stock:0,
        categoria:"samsung"
    },
    {
        id:"5",
        nombre:"Motorola G9Plus"
        ,price: 89560,
        img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2657_6_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",
        stock:3,
        categoria:"motorola"
    },
    {
        id:"6",
        nombre:"Motorola EDGE6",
        price: 111379,
        img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2623_1__1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        stock:15,
        categoria:"motorola"
    }
];

export const getFetch=() =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(productos)
            },2000)
        })
    }