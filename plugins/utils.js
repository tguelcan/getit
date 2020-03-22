import Vue from 'vue'
import { debounce } from 'lodash'

// Mixins
Vue.mixin({
    computed: {
        currentPage() {
            return this.$route.path
        },
        user() {
            return this.$store.state?.user
        }
    },
    mounted: debounce(function() {
        document.addEventListener(
            'keyup',
            (event) => {
                if (event.keyCode === 27) {
                    this.$root.$emit('keyDownEscape')
                }
            },
            250
        )
        if (this.user.role === 'user') {
            this.$router.push('/role')
        }
    }),
    methods: {
        isEmpty(someObject) {
            return (
                Object.entries(someObject).length === 0 &&
                someObject.constructor === Object
            )
        },
        promiseTimeout: (ms) =>
            new Promise((resolve) => setTimeout(resolve, ms))
    }
})

Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted(el) {
        // Focus the element
        el.focus()
    }
})

Vue.directive('click-outside', {
    bind(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
            // here I check that click was outside the el and his childrens
            if (!(el === event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event)
            }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    }
})
