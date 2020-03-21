import hello from 'hellojs'

console.log(process.env.facebookId)

hello.init(
    {
        facebook: process.env.facebookId,
        google: process.env.googleId
    },
    {
        redirect_uri: '/callback'
    }
)

export default ({ app, $axios }, inject) =>
    inject('socialLoginService', (provider) =>
        hello(provider).login({
            scope: 'email'
        })
    )
