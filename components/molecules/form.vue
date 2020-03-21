<template>
    <div class="form-container">
        <slot />
        <div class="flex button-group">
            <g-form-field>
                <g-button>Submit</g-button>
            </g-form-field>
        </div>
    </div>
</template>

<script>
import gButton from '@/components/molecules/button'
import gFormField from '@/components/molecules/formField'
export default {
    name: 'GForm',
    components: {
        gButton,
        gFormField
    }
}
</script>

<style lang="scss" scoped></style>
