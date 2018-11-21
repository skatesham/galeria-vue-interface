export default function (Vue) {
    Vue.auth = {
        setToken (token, expires) {
            localStorage.setItem('token', token)
            localStorage.setItem('expires_in', expires)
        },
        getToken() {
            var token = localStorage.getItem('token')
            var expiration = localStorage.getItem('expires_in')
            if (!token || !expiration)
                return null
            if (Date.now() > parseInt(expiration)) {
                this.destroyToken()
                return null
            } else
                return token
        },
        destroyToken() {
            localStorage.removeItem('token')
            localStorage.removeItem('expires_in')
        },
        isAuthenticated() {
            if (this.getToken())
                return true
            else {
                return false
            }
        }
    }

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get() {
                return Vue.auth
            }
        }
    })
}