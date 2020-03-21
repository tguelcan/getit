<template>
    <!--UPLOAD FORM-->
    <div>
        <form
            v-if="isInitial || isSaving || isSuccess"
            enctype="multipart/form-data"
            novalidate
        >
            <div class="animated dropbox">
                <div class="dropbox-content">
                    <p v-if="isInitial">
                        <i class="icon i-document-storage" />
                        Drag your file(s) here to begin
                    </p>
                    <p v-if="isSaving">Uploading {{ fileCount }} files...</p>
                    <p v-if="isSuccess">Upload Successful</p>
                </div>
                <input
                    type="file"
                    multiple
                    :name="uploadFieldName"
                    :disabled="isSaving"
                    accept="image/*"
                    class="input-file"
                    @change="
                        filesChange($event.target.name, $event.target.files)
                        fileCount = $event.target.files.length
                    "
                />
            </div>
        </form>
    </div>
</template>

<script>
/**
 * Todo: Build upload function
 * you can find an example here:
 * https://scotch.io/tutorials/how-to-handle-file-uploads-in-vue-2
 */

const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
    name: 'GUploadArea',

    data() {
        return {
            uploadedFiles: [],
            uploadError: null,
            currentStatus: null,
            uploadFieldName: 'photos'
        }
    },
    computed: {
        isInitial() {
            return this.currentStatus === STATUS_INITIAL
        },
        isSaving() {
            return this.currentStatus === STATUS_SAVING
        },
        isSuccess() {
            return this.currentStatus === STATUS_SUCCESS
        },
        isFailed() {
            return this.currentStatus === STATUS_FAILED
        }
    },
    mounted() {
        this.reset()
    },
    methods: {
        reset() {
            // reset form to initial state
            this.currentStatus = STATUS_INITIAL
            this.uploadedFiles = []
            this.uploadError = null
        },
        async save(formData) {
            // upload data to the server
            this.currentStatus = STATUS_SAVING
            await this.promiseTimeout(2000)
            this.currentStatus = STATUS_SUCCESS

            // Todo: Upload Service here
        },
        filesChange(fieldName, fileList) {
            // handle file changes
            const formData = new FormData()

            if (!fileList.length) {
                return
            }

            // append the files to FormData
            Array.from(Array(fileList.length).keys()).map((x) => {
                formData.append(fieldName, fileList[x], fileList[x].name)
            })

            // save it
            this.save(formData)
        }
    }
}
</script>

<style lang="scss" scoped>
.dropbox {
    @apply transition-all duration-100 ease-in-out;
    @apply flex content-center justify-center flex-wrap;
    @apply bg-white text-grey border-2 border-dashed border-2 rounded text-center h-40 cursor-pointer;
    &:hover {
        @apply bg-light;
    }
    &-content {
        @apply absolute mt-16;
    }
}

.input-file {
    @apply opacity-0 w-full h-full cursor-pointer bg-primary inline-block;
}
</style>
