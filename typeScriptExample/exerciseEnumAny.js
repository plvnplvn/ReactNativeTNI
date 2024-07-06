//การกำหนด enum สำหรับสถานะสินค้า
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Avaliable"] = "Avaliable";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
//การกำหนด array ของสินค้าใช้ชนิดข้อมูล any
var products = [
    { name: "Laptop", status: ProductStatus.Avaliable, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
function displayProductDetails(products) {
    products.forEach(function (product) {
        console.log("Product: ".concat(product.name, ", status: ").concat(product.status, ", price: ").concat(product.price));
    });
}
displayProductDetails(products);
