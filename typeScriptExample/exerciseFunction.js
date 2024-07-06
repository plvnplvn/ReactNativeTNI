var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//กำหนด array ของ Product
var products = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffee Maker', price: 2500, category: 'Appliances' },
];
//สร้างฟังก์ชันชื่อ filterProductByPrice สำหรับกรองข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
function filterProductByPrice(products, minPrice) {
    return products.filter(function (product) { return product.price > minPrice; });
}
//สร้างฟังก์ชั่นชื่อ discountProduct ใช้สำหรับลดราคาสินค้า 10%
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
//เรียกใช้ฟังก์ชัน
var filterProduct = filterProductByPrice(products, 2000);
var discountProducts = discountProduct(filterProduct);
//แสดงผลลัพธ์
//console.log(filterProduct);
console.log(discountProducts);
