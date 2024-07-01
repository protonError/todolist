// product Routes export const


const productprefix = "/";
const customerPrefix = '';
const address = "";
const salesPrefix = "/"
const userPrefix = "/"

export const ProductRoutes = {
    userProfile: userPrefix + "me/",
    addProduct : productprefix + "products/",
    addSales :productprefix + "sales/",
    addRetailLevel:productprefix + "retails/",
    loadProduct : productprefix + "products/", // Route to load products
    loadInventoryProducts: productprefix + "invenotory_products/",
    updateProduct : "product", // Route to update a product
    loadSingleProduct : "product", // Route to load a single product
    loadPosProduct : "product?query=search&key=", // Route to load products for a point of sale
    deleteProduct : "product", // Route to delete a product
    allProduct:productprefix +"products/",
    searchProduct : productprefix + "invenotory_products/?search=", 
    uploadImages : productprefix + "images/", // Route to upload images
    getBrands :productprefix + "brands",
    addBrand:productprefix + "brands/",
    getTags :productprefix + "tags/",
    addTag :productprefix + "tags/",
    getCategories :productprefix + "categories",
    addCategory :productprefix + "categories/",
    getSuppliers :productprefix + "suppliers/",
    addSupplier :productprefix + "suppliers/",
    addStandard :productprefix + "inventory_details/",
    addTaxes :productprefix + "product_taxes/",
    listStandard :productprefix + "inventory_details/",
    addInventory :productprefix + "inventories/",
    listoutLets : productprefix + "outlets/",
    addInventorylevels : productprefix + "inventory_levels/",
    addVariants : productprefix + "variant_products/",
    addInventory : productprefix + "inventory/",
    addAccount : productprefix + "accounting/",
    addStandard : productprefix + "standard_products/",
    addComposite : productprefix + "composite_products/",
    listInventoryProducts :productprefix + "invenotory_products/"
}

export const CustomerRoutes = {
    createCustomer: customerPrefix + "/customer_with_realted_models/",
    uploadImages: customerPrefix + "/image/",
    loadCustomer: customerPrefix + "/customer",
    updateCustomer: customerPrefix + "/customer/",
    deleteCustomer: customerPrefix + "/customer/",
    addAddress: customerPrefix + "/address/",
    addNote: customerPrefix + "/note/",
}

export const AddressRoutes = {
    listCountries: address + "/countries/",
    listStates: address + "/states/",
    listCities: address + "/cities/",
}

export const SalesRoutes = {
    addSale: salesPrefix + "sale/",
    addSaleItem: salesPrefix + "sale_item/",
    cartList:salesPrefix + "sale_item/?sale=",
    cartProductQuantityChange: salesPrefix + "sale_item/",
    latestSaleDetail:salesPrefix + "sale/?register_session__register__outlet__id=1",
    saleDetails: salesPrefix + 'sale/',
    openRegister : salesPrefix + "register_session_open/",
    openRegisterSession: salesPrefix + "opened_register_session/",
}







