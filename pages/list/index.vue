<template>
    <div class="container mx-auto sm:py-0 sm:px-0">
        <div class="flex flex-wrap justify-center content-center">
            <div class="w-full md:w-2/3 xl:w-1/2 mx-1">
                <g-list
                    v-for="(entrie, index) in findEntriesInStore"
                    :key="index"
                    :item="entrie"
                    class="mt-3"
                />
                <div v-if="noContentFound" class="flex flex-col mx-auto mt-3">
                    <g-empty class="mx-auto" />
                    <div class="text-center">
                        <h1>Keine Einträge in deiner Nähe gefunden.</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import gList from '@/components/organism/list'
import gEmpty from '@/components/organism/empty'
// import gButton from '@/components/molecules/button'

export default {
    name: 'Index',
    middleware: ['authenticated'],
    components: {
        gList,
        gEmpty
        // gButton
    },
    data: () => ({
        newZip: '',
        showBackToTop: true
    }),
    computed: {
        ...mapState({
            isEntriesLoading: (state) => state.entries.isGetPending
        }),
        ...mapGetters({
            findEntriesInStore: 'entries/listMy',
            findZipInStore: 'entries/zip'
        }),
        noContentFound() {
            return this.findEntriesInStore?.length === 0
        }
    },
    async mounted() {
        try {
            if (this.findZipInStore) {
                await this.getEntries({
                    postcode: this.findZipInStore,
                    type: 'product'
                })
            }
        } catch (e) {
            console.log(e.message)
        }
    },
    methods: {
        ...mapActions({
            getEntries: 'entries/getAllMy',
            setZip: 'entries/setZip'
        }),
        async searchByZip() {
            this.setZip(this.newZip)
            if (this.newZip) {
                await this.getEntries({
                    postcode: this.findZipInStore,
                    type: 'product'
                })
            }
        }
    }
}
</script>
