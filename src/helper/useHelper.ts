import { Languages } from "@/middleware";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export const useHelper = () => {
    const params = useParams()
    const pathName = usePathname();

    const getLocalizedURL = (path?: string) => {
        if (!!params && !!path) {
            return `/${params.locale}${path}`;
        }
        else if (!!params) {
            return `/${params.locale}`;
        }
        return "/"
    }

    const isHeaderBackButton = useMemo(() => {
        const lang = Languages.map((ele) => `/${ele}`)
        if (pathName) {
            return lang.includes(pathName)
        }
        return false
    }, [pathName])
    return {
        getLocalizedURL: getLocalizedURL,
        isHeaderBackButton: isHeaderBackButton
    }


};