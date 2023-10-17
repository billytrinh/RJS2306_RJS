import api from "../api";
import URL from "./url"

export const list_product = async (limit)=>{
    const url = URL.PRODUCT.LIST+limit;
    try {
        const rs = await api.get(url);
        return rs.data.products;
    } catch (error) {
        return [];
    }
}

export const detail_product = async (id)=>{
    const url = URL.PRODUCT.DETAIL+id;
    try {
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {}
    }
}