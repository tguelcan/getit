<template>
    <div class="container mx-auto px-3 markdown">
        <div class="md:mt-24">
            <h1>
                {{ title }}
            </h1>
            <!-- eslint-disable-next-line -->
      <div v-html="body" />
        </div>
    </div>
</template>

<script>
const sanitizeHtml = require('sanitize-html')
const md = require('markdown-it')({
    html: true,
    typographer: true
})
// TODO ASYNC CALL
export default {
    name: 'Imprint',
    async asyncData({ app }) {
        const { fields } = await app
            .$contentful()
            .getEntry('5k9HrrW6bU69duxBOdgBee')
        return {
            title: fields.title,
            body: sanitizeHtml(md.render(fields.body))
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="css" scoped></style>
