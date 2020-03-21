<template>
    <div>
        <ul>
            <li
                v-for="(item, index) in questions"
                :key="index"
                class="faq-item"
                :class="{ 'bg-light': item.active }"
                @click="open(index)"
            >
                <g-dropdown
                    :show-content="item.active"
                    animation="slide-bottom-fade"
                    full
                >
                    <g-dropdown slot="button">
                        <div class="flex p-3 subpixel-antialiased">
                            <div class="w-full">
                                {{ item.question }}
                            </div>
                            <div>
                                <i
                                    class="icon"
                                    :class="
                                        item.active
                                            ? 'i-dropdown-closed'
                                            : 'i-dropdown-open'
                                    "
                                />
                            </div>
                        </div>
                    </g-dropdown>
                    <g-dropdown slot="content">
                        <div class="md:flex bg-light">
                            <div class="px-3 pb-3 text-base">
                                {{ item.answer }}
                            </div>
                        </div>
                    </g-dropdown>
                </g-dropdown>
            </li>
        </ul>
    </div>
</template>

<script>
import { map } from 'lodash'
import gDropdown from '@/components/molecules/dropdown'
export default {
    name: 'GFaq',
    components: {
        gDropdown
    },
    data: () => ({
        questions: [
            {
                question:
                    'Ich habe einen ganzen Eiswürfel geschluckt. Was tun?',
                answer:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
                active: false
            },
            {
                question:
                    'Schwitzen Kühe unter schwarzen Flecken mehr als unter weißen?',
                answer:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
                active: false
            },
            {
                question:
                    'Wieso sieht man auf Fotos anders aus als im Spiegel?',
                answer:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                active: false
            },
            {
                question:
                    'Muss um 7 raus, jetzt ist es 4 Uhr, lohnt es sich noch aufzubleiben?',
                answer:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
                active: false
            },
            {
                question:
                    'Kann man echt Gewicht verlieren, wenn man seinen Bauch reibt?',
                answer: 'Nein!',
                active: false
            }
        ]
    }),
    methods: {
        open(index) {
            if (!this.questions[index].active) {
                map(this.questions, (item) => {
                    item.active = false
                    return item
                })
            }
            this.questions[index].active = !this.questions[index].active
        }
    }
}
</script>

<style lang="scss" scoped>
.faq {
    &-item {
        @apply text-xl cursor-pointer border-b subpixel-antialiased;
        &:hover {
            @apply bg-light;
        }
        &:last-child {
            @apply border-b-0;
        }
    }
    &-icon {
        @apply ml-auto my-auto pr-4;
    }
    &-answer {
        @apply bg-light;
    }
}
</style>
