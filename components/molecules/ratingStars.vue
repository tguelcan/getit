<template>
    <div>
        <div
            v-for="star in stars"
            :key="star.value"
            class="inline cursor-pointer"
            @mouseover="activeStar(star)"
            @mouseleave="inactiveStar"
            @click="clickOnStar(star)"
        >
            <i
                class="icon"
                :class="[
                    star.hover || star.active ? `i-${icon}` : `i-star`,
                    `text-${color}`
                ]"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'GRatingStars',
    props: {
        icon: {
            type: String,
            default: 'star'
        },
        color: {
            type: String,
            default: 'warning'
        }
    },
    data: () => ({
        stars: [
            { value: 1, hover: false, active: false },
            { value: 2, hover: false, active: false },
            { value: 3, hover: false, active: false },
            { value: 4, hover: false, active: false },
            { value: 5, hover: false, active: false }
        ],
        clickedStar: null,
        clicked: false
    }),
    methods: {
        activeStar(star) {
            star.hover = true
            this.stars.map((x) => {
                x.value <= star.value ? (x.hover = true) : (x.hover = false)
                return x
            })
        },
        inactiveStar() {
            this.stars.map((x) => {
                x.hover = false
                return x
            })
        },
        clickOnStar(star) {
            // Check if active and set to null
            if (this.clicked && star.value === this.clickedStar) {
                this.stars.map((x) => {
                    x.active = false
                    x.hover = false
                    return x
                })
                this.clicked = false
                this.clickedStar = null
                this.$emit('getStar', this.clickedStar)
                this.$emit('getState', this.clicked)
                return
            }
            // Activate the other stars
            this.stars.map((x) => {
                x.value <= star.value ? (x.active = true) : (x.active = false)
                return x
            })
            // Set state
            this.clicked = true
            this.clickedStar = star.value
            this.$emit('getStar', this.clickedStar)
            this.$emit('getState', this.clicked)
        }
    }
}
</script>
<style lang="scss" scoped></style>
