export default function queryGenerator(arg) {
    const queryProperty = Object.keys(arg);
    const propertyFiltered = queryProperty.filter((item) => {
        if (Array.isArray(arg[item])) {
            return !!arg[item]?.length;
        } else {
            return arg[item];
        }
    });

    let query = propertyFiltered
        .map((item) => {
            return `${item}=${[arg[item]]}`;
        })
        .join("&");
    if (!query.includes("status")) {
        if (arg.status != undefined) {
            query = `status=${arg.status}&` + query;
        }
        else {
            query = 'status=true&' + query;

        }

    }
    if (!query.includes("page")) {

        if (arg.page != undefined) {
            query = `page=${arg.page}&` + query;
        }
        else {
            query = "page=1&" + query;

        }
    }
    if (!query.includes("count")) {

        if (arg.count != undefined) {
            query = `count=${arg.count}&` + query;
        }
        else {
            query = "count=10&" + query;
        }
    }
    if (!query.includes("is_customer")) {
        if (arg.is_customer != undefined) {
            query = `is_customer=${arg.is_customer}&` + query;
        }
        else {
            query = 'is_customer=1&' + query;

        }

    }
    if (!query.includes("sortBy")) {
        if (arg.sortBy != undefined) {
            query = `sortBy=${arg.sortBy}&` + query;
        }
    }
    if (!query.includes("sort")) {
        if (arg.sort != undefined) {
            query = `sort=${arg.sort}&` + query;
        }

    }
    if (!query.includes("entity_type")) {
        if (arg.entity_type != undefined) {
            query = `entity_type=${arg.entity_type}&` + query;
        }

    }


    return query;
}
