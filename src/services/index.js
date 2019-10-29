
 export default class MarketService {

    data = [
    
        {
            id: 1,
            type: 'laptop',
            img: 'https://www.giztop.com/media/catalog/product/cache/8/image/473x473/9df78eab33525d08d6e5fb8d27136e95/h/u/huawei_matebook_13_grey.png',
            name: "Huawei MateBook 13 Note",
            brand: "Huawei",
            price: 950,
            count: 1
    
        },
        {
            id: 2,
            type: 'laptop',
            img: "https://images-na.ssl-images-amazon.com/images/I/81kb3jmzMuL._AC_SL1500_.jpg",
            name: "Dell XPS 13 13.3 Inch 4K UHD Thin and Ligh",
            brand: "Dell",
            price: 580,
            count: 1
    
        },
        {
            id: 3,
            type: "ram",
            img: "https://images-na.ssl-images-amazon.com/images/I/615xnSLBW7L._AC_SL1000_.jpg",
            name: "Corsair Vengeance DDR4",
            brand: "Corsair",
            price: 180,
            count: 1
    
        },
        {
            id: 4,
            type: 'laptop',
            img: "https://cdn.mos.cms.futurecdn.net/zSxwsyG4xVh7P8qFoRM8EB-650-80.jpg",
            name: "HP Spectre x360 (2019)",
            brand: "HP",
            price: 760,
            count: 1
        },
        {
            id: 5,
            type: 'docking',
            img: 'https://images-na.ssl-images-amazon.com/images/I/41PkabzTLtL.jpg',
            name: "Patriot Viper 4 Series",
            brand: "Viper",
            price: 140,
            count: 1
    
        },
        {
            id: 6,
            type: 'docking',
            img: "https://cdn.mos.cms.futurecdn.net/WSm3Qt8cdpwEHD8JcmrGmj-650-80.jpg",
            name: "Targus USB 3.0 Dual Video Docking Station with Power",
            brand: "Targus",
            price: 130,
            count: 1
    
        },
        {
            id: 7,
            type: 'ssd',
            img: "https://www.techadvisor.co.uk/cmsdata/reviews/3670490/crucial_mx500-review_thumb800.png",
            name: "Crucial MX500",
            brand: "NX",
            price: 70,
            count: 1
    
        },
        {
            id: 8,
            type: 'laptop',
            img: "https://s3.us-east-2.amazonaws.com/cc-prd-s3-uploads/2019/4/2/4dc25e67dd4e21ed21b4aa11451fdecd8c932bfe.jpeg",
            name: "Alienware Area-51m",
            brand: "Alienware",
            price: 130,
            count: 1
    
        },
        {
            id: 9,
            type: "ram",
            img: "https://images-na.ssl-images-amazon.com/images/I/61mNMkFhvhL._AC_SL1000_.jpg",
            name: "Kingston Hyper X Impact",
            brand: "Kingston",
            price: 130,
            count: 1
    
        },
        {
            id: 10,
            type: "docking",
            img: "https://cdn.mos.cms.futurecdn.net/E8pVczQQNetzxfsTvpDkjj-650-80.jpg",
            name: "Anker USB 3.0 Docking Station",
            brand: "Anker",
            price: 110,
            count: 1
    
        },
        {
            id: 11,
            type: "laptop",
            img: "https://images-na.ssl-images-amazon.com/images/I/81zE58TfiDL._AC_SL1500_.jpg",
            name: "HP ENVY 13-aq0003na 13.3 Inch FHD Touch-Screen Laptop",
            brand: "Huawei",
            price: 175,
            count: 1
        },
        {
            id: 12,
            type: "ssd",
            img: 'https://www.techadvisor.co.uk/cmsdata/reviews/3673445/wd_blue_3d_nand_ssd_review_thumb800.jpg',
            name: "WD Blue 3D NAND",
            brand: "WD",
            price: 250, 
            count: 1
    
        }
    ]
    getItem(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.data);
                reject(new Error("Sory, but it's ERROR!"))
            }, 3000);
        });
     }
    
}
