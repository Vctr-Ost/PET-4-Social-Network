import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "dc4dfe60-ebd0-45d4-9366-6739241bde8b" },
})

export const authAPI = {
    isAuth: () => {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers: (usersCount, currentPage) => {
        return instance.get(`users?count=${usersCount}&page=${currentPage}`)
            .then(response => response.data)
    },

    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}

