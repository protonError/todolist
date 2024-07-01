import { toast } from "@src/components/ui/use-toast";

;

// remove all falsy property from  object
export function removeFalsyProperties(obj) {
    const newObj = {};
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop]) {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

export function stringShorter(str, length) {
    return str?.length > length ? str.slice(0, length) + "..." : str;
}

export const generateKey = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export function errorHandler(apierror) {
    const { error } = apierror?.response?.data;
    return toast({
        variant: "destructive",
        title: "Error",
        description:error || "Something went wrong, Please try again later",
    })

}

export function errorMessage(error, toastStatus, message = "Something went wrong, Please try again") {
    let firstKeyValue = '';
    try {
        if (error && error.response?.data) {
            const [firstKey] = Object.keys(error?.response?.data);
            const firstKeyValueArray = error.response.data[firstKey];
            firstKeyValue = firstKeyValueArray && firstKeyValueArray.length > 0 ? firstKeyValueArray[0] : '';
            console.log(firstKeyValue, 'firstKeyValue');
            toastStatus && toast.error(firstKeyValue);
        } else {
            toastStatus && toast.warning(message);
            firstKeyValue = message;
        }
    } catch (err) {
        toastStatus && toast.error("An error occurred while processing your request.");
        firstKeyValue = "An error occurred while processing your request.";
    }
    return {
        message: "error",
        error: firstKeyValue,
    };
}


export function successHandler(data, title, description) {
    title && toast({
        variant: "default",
        title: title || "Something went wrong, Please try again",
        description: description ||""
    })
    return {
        message: "success",
        data,
    };
}

export function SpecificError(error) {
    const data = error.response.data;
    if (data.base_err_messages && data.base_err_messages.length > 0) {
        toast.error(data.base_err_messages[0]);
    } else if (data.specific_err_messages) {
        const key = Object.keys(data.specific_err_messages)[0];
        const message = data.specific_err_messages[key][0];
        toast({
            variant: "success",
            title: message || "Something went wrong, Please try again"
        })
    } else {
        toast({
            variant: "destructive",
            title: "Something went wrong, Please try again"
        })
    }


}
