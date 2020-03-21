<template>
    <div
        class="flex flex-wrap items-center md:flex-no-wrap h-screen bg-warning"
    >
        <div class="w-full p-10 m-auto text-center">
            <h1 class="text-2xl text-primary font-bold">
                Login, please wait.
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'notAuthenticated',
    name: 'Callback',
    layout: 'blanc',
    data() {
        return {}
    }
}
</script>
