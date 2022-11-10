<template>
    <div class="fixed bottom-4 left-4 transition text-white px-5 pr-8 py-4 cursor-pointer z-50"
        v-show="notification.displayStatus" :class="notification.color">
        <div class="flex items-center space-x-2">
            <font-awesome-icon :icon="notification.icon" class="text-white p-2 rounded-full" :class="notification.icon_bg" />
            <div>
                <p class="font-bold">{{ notification.label }}</p>
                <p class="text-gray-200 text-sm">{{ notification.message }}</p>
            </div>
          <font-awesome-icon icon="close" @click="closeNotification(false)"
            class="p-2 text-gray-300 close-btn hover:bg-gray-200 hover:bg-opacity-70 cursor-pointer 
                hover:text-gray-700 absolute right-1 rounded-md top-3" />
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    computed: {
        ...mapState(["notification"]),
    },
    methods: {
        ...mapMutations({
            closeNotification: 'closeNotification'
        }),
    },
    watch: {
        notification (newCount, oldCount) {
        // Our fancy notification (2).
        console.log(`We have ${newCount} fruits now, yay!`)
        }
    }
}
</script>