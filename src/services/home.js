import {get} from "../utils/request";

export function getList() {
    return get('home/list')
}