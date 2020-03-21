<template>
    <div class="flex flex-col">
        <div
            class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
            <div class="table-wrap">
                <table class="table min-w-full">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Role
                            </th>
                            <th />
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr>
                            <td>
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img
                                            class="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div class="ml-4">
                                        <div
                                            class="text-tertiary leading-tight"
                                        >
                                            Bernard Lane
                                        </div>
                                        <div class="text-sm leading-tight">
                                            bernardlane@example.com
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    Director
                                </div>
                                <div>
                                    Human Resources
                                </div>
                            </td>
                            <td>
                                <g-tag color="success">
                                    Active
                                </g-tag>
                            </td>
                            <td>
                                Owner
                            </td>
                            <td class="text-right">
                                <a href="#">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img
                                            class="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div class="ml-4">
                                        <div
                                            class="text-tertiary leading-tight"
                                        >
                                            Bernard Lane
                                        </div>
                                        <div class="text-sm leading-tight">
                                            bernardlane@example.com
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    Director
                                </div>
                                <div>
                                    Human Resources
                                </div>
                            </td>
                            <td>
                                <g-tag color="success">
                                    Active
                                </g-tag>
                            </td>
                            <td>
                                Owner
                            </td>
                            <td class="text-right">
                                <a href="#">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img
                                            class="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div class="ml-4">
                                        <div
                                            class="text-tertiary leading-tight"
                                        >
                                            Bernard Lane
                                        </div>
                                        <div class="text-sm leading-tight">
                                            bernardlane@example.com
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    Director
                                </div>
                                <div>
                                    Human Resources
                                </div>
                            </td>
                            <td>
                                <g-tag>
                                    Inactive
                                </g-tag>
                            </td>
                            <td>
                                Owner
                            </td>
                            <td class="text-right">
                                <a href="#">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img
                                            class="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div class="ml-4">
                                        <div
                                            class="text-tertiary leading-tight"
                                        >
                                            Bernard Lane
                                        </div>
                                        <div class="text-sm leading-tight">
                                            bernardlane@example.com
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    Director
                                </div>
                                <div>
                                    Human Resources
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap">
                                <g-tag>
                                    Inactive
                                </g-tag>
                            </td>
                            <td>
                                Owner
                            </td>
                            <td class="text-right">
                                <a href="#">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import gTag from '@/components/molecules/tag'

export default {
    name: 'GTable',
    components: {
        gTag
    },
    data: () => ({})
}
</script>

<style lang="scss" scoped>
.table {
    &-wrap {
        @apply align-middle inline-block min-w-full overflow-hidden;
    }
    th {
        @apply px-6 py-4 border-b border-neutral text-left text-sm leading-4 text-grey uppercase tracking-wider;
    }
    td {
        @apply px-6 py-4 whitespace-no-wrap border-b;
    }
    tr:last-child td {
        border-bottom: none;
    }
}
</style>
