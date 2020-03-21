<template
    ><div>
        <div v-if="showInstall">
            <g-button class="mt-4 float-right" rounded @click="installer">
                Install <i class="icon i-cast" />
            </g-button>
        </div>
        <div v-else>
            <g-button class="mt-4 float-right" rounded disabled>
                <span class="inline-block">Install</span>
                <span v-if="status" class="inline-block">({{ status }})</span>
                <i class="icon i-cast" />
            </g-button>
        </div>
    </div>
</template>

<script>
import gButton from '@/components/molecules/button'

export default {
    name: 'GInstall',
    components: {
        gButton
    },
    data: () => ({
        showInstall: false,
        installer: undefined,
        status: 'Chrome Browsers'
    }),
    mounted() {
        // show popup after 10 sek
        let installPrompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault()
            installPrompt = e
            this.showInstall = true
        })
        window.addEventListener('appinstalled', (evt) => {
            this.status = 'already installed'
        })
        this.installer = () => {
            this.showInstall = false
            installPrompt.prompt()
            installPrompt.userChoice.then((result) => {
                console.log('result')
                console.log(result)
                if (result.outcome === 'accepted') {
                    console.log('Install accepted!')
                } else {
                    console.log('Install denied!')
                }
            })
        }
    }
}
</script>

<style lang="css" scoped></style>
