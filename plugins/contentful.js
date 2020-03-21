import { createClient } from 'contentful'

const config = {
    space: process.env.contentfulSpaceId,
    accessToken: process.env.contentfulAccessToken
}

export default ({ app, $axios }, inject) =>
    inject('contentful', () => createClient(config))
