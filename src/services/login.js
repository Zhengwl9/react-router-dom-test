import {post} from "../utils/request";

export function login(data) {
    return post('login/signIn',data)
}