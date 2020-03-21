<template>
    <div class="flex">
        <div class="mx-auto">
            <img src="~assets/img/vwag_logo.svg" :width="width" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'GBrand',
    props: {
        width: {
            type: Number,
            default: 200
        }
    },
    data: () => ({})
}
</script>

<style lang="css" scoped></style>
