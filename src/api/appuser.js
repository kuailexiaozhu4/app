import request from "@/request";

export function login(data) {
    return request({
        url: '/appuser',
        method: 'post',
        data
    })
}

export function register(data) {
    return request({
        url: '/appuser/add',
        method: 'post',
        data
    })
}

export function update(data) {
    return request({
        url: '/appuser',
        method: 'put',
        data
    })
}