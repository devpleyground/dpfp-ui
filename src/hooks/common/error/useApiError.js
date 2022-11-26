import {useCallback} from "react";
import {commonHandler} from "./handler/commonHandler";
import {defaultHandler} from "./handler/defaultHandler";
import {handler400} from "./handler/handler400";
import {handler500} from "./handler/handler500";

export const useApiError = (handlers) => {

    const defaultHandlers = {
        common: commonHandler,
        default: defaultHandler,
        400: {
            default: handler400,
        },
        500: {
            default: handler500,
        },
    };

    const handleError = useCallback((error) => {

        const httpStatus = error.response.status;
        const serviceCode = error.response.code;

        switch(true) {
            case defaultHandlers[httpStatus][serviceCode] && true:
                defaultHandlers[httpStatus][serviceCode]();
                break;

            case defaultHandlers[httpStatus] && true:
                defaultHandlers[httpStatus].default();
                break;

            default:
                defaultHandlers.default();
        }
        defaultHandlers.common();
    }, [handlers]);

    return { handleError };
};
