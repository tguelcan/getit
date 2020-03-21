import hello from 'hellojs'

hello.init(
    {
        facebook: process.env.facebookId,
        google: process.env.googleId,
        github: process.env.githubId
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
