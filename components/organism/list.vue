<template>
    <div>
        <div
            class="animated bg-white border shadow-none hover:shadow-lg hover:border-white rounded-sm cursor-pointer p-3 sm:p-5"
        >
            <div class="flex flex-wrap justify-between">
                <div>
                    <h3 v-if="item.name" class="leading-none text-teritary">
                        {{ item.name }}
                    </h3>
                    <span v-if="item.postcode" class="text-sm text-grey">{{
                        item.postcode
                    }}</span>
                </div>
                <div>
                    <g-tag>{{ item.entryType }}</g-tag>
                </div>
            </div>
            <div class="flex flex-col mb-2">
                <div class="text-subtle">
                    <span class="font-bold">Erstellt:</span>
                    <timeago :datetime="item.createdAt"></timeago>
                </div>
                <div class="text-subtle">
                    <span class="font-bold">Fällig:</span>
                    <timeago :datetime="item.deliveryDate"></timeago>
                </div>
            </div>
            <div class="flex flex-wrap justify-between">
                <div>
                    <g-avatar
                        :img-src="item.user.picture"
                        custom="my-auto mr-3 h-8 w-8"
                        ><ol>
                            <li class="leading-none font-bold text-dark">
                                {{ item.user.name }}
                            </li>
                        </ol></g-avatar
                    >
                </div>
                <div class="font-bold">{{ countArray(item.list) }} Artikel</div>
            </div>
        </div>
    </div>
</template>

<script>
import gTag from '@/components/molecules/tag'
import gAvatar from '@/components/molecules/avatar'

export default {
    name: 'List',
    components: {
        gTag,
        gAvatar
    },
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({}),
    methods: {
        countArray(array) {
            return array?.length
        }
    }
}
</script>

<style lang="css" scoped></style>
