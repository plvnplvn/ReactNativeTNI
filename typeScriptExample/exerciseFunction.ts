type Product = {
    name : string;
    price : number;
    category : string;
    }

//กำหนด array ของ Product
let products : Product[] =[
    {name:'Laptop' ,price:50000,category:'Electronics'},
    {name:'Shirt' ,price:1200,category:'Apparel'},
    {name:'Coffee Maker' ,price:2500,category:'Appliances'},
]
//สร้างฟังก์ชันชื่อ filterProductByPrice สำหรับกรองข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
function filterProductByPrice(products:Product[],minPrice:number):Product[]{
    return products.filter(product=>product.price>minPrice);
}
//สร้างฟังก์ชั่นชื่อ discountProduct ใช้สำหรับลดราคาสินค้า 10%
function discountProduct(products:Product[]):Product[]{
    return products.map(product=>({...product,price:product.price*0.9}));
}

//เรียกใช้ฟังก์ชัน
let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

//แสดงผลลัพธ์
//console.log(filterProduct);
console.log(discountProducts);