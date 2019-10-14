
 export default class MarketService {

    data = [
        {
            id: 1,
            img: 'https://cdn.mos.cms.futurecdn.net/5DWGyXiqNvGbuNoK2vBk69-650-80.jpg',
            name: 'HP Spectre x360 (2019)',
            brand: 'HP'
    },
        {
            id: 2,
            img: 'https://cdn.mos.cms.futurecdn.net/zSxwsyG4xVh7P8qFoRM8EB-650-80.jpg',
            name: "Huawei MateBook 13 Note",
            brand: "Huawei",
    
        }
    ]
    getItem(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.data)
                reject(new Error("Sory, but it's ERROR!"))
            }, 3000);
        });
     }
    
}
