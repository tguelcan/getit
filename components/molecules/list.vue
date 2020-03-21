<template>
    <div>
        <div
            v-for="(example, index) in examples"
            :key="index"
            class="flex justify-between"
            :class="{ 'border-b': index != Object.keys(examples).length - 1 }"
        >
            <div class="p-3 flex-1">
                <g-avatar :img-src="example.picture" custom="mr-3 h-10 w-10"
                    ><ol>
                        <li class="leading-none font-bold text-dark">
                            {{ example.name }}
                        </li>
                        <li class="text-sm leading-snug text-grey">
                            <i class="icon i-e-mail"></i>
                            <span class="inline-block sm:hidden">Mail</span
                            ><span class="hidden sm:inline-block">{{
                                example.email
                            }}</span>
                        </li>
                    </ol></g-avatar
                >
            </div>
            <div class="p-3 my-auto">
                <ol class="text-right">
                    <li
                        v-if="example.status === 'success'"
                        class="leading-none font-bold"
                    >
                        <i class="icon i-check-circle text-success"></i>
                        <span class="">Successfull</span>
                    </li>
                    <li
                        v-if="example.status === 'pending'"
                        class="leading-none font-bold"
                    >
                        <i class="icon i-clock text-warning"></i>
                        <span class="">Pending</span>
                    </li>
                    <li
                        class="hidden sm:inline-block text-grey text-sm leading-snug"
                    >
                        {{ example.date }}
                    </li>
                </ol>
            </div>
            <div class="my-auto mx-3">
                <g-button color="flat" link
                    ><i class="icon i-forward text-grey"></i
                ></g-button>
            </div>
        </div>
    </div>
</template>

<script>
import gButton from '@/components/molecules/button'
import gAvatar from '@/components/molecules/avatar'

export default {
    name: 'GList',
    components: {
        gAvatar,
        gButton
    },
    data: () => ({
        examples: [
            {
                name: 'Clara Marlson',
                email: 'clara.marslson@example.com',
                picture:
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                status: 'success',
                date: '24.08.2020'
            },
            {
                name: 'Simon Schmidt',
                email: 's.schmidt@example.com',
                picture:
                    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                status: 'success',
                date: '23.08.2020'
            },
            {
                name: 'Jonas Richter',
                email: 'jrichter@example.com',
                picture:
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
                status: 'pending',
                date: '23.08.2020'
            },
            {
                name: 'Maik Marlson',
                email: 'maik_marslson@example.com',
                picture:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                status: 'pending',
                date: '14.08.2020'
            }
        ]
    })
}
</script>

<style lang="css" scoped></style>
