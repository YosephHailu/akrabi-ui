export const state = () => ({
    notification: {
        displayStatus: false,
        label: "Notification!",
        message: "-- -- -- -- ",
        icon: "check",
        color: "bg-red-600",
    },
    count: 0,
})

export const getters = () => {
    
}

export const mutations = {
    updateNotification(state, payload) {
        state.notification.message = payload.message;
        state.notification.color = payload.color;
        state.notification.icon = payload.icon;
        state.notification.displayStatus = payload.displayStatus;
    },

    successNotification(state, payload) {
        state.notification.message = payload;
        state.notification.color = "bg-green-600";
        state.notification.icon_bg = "bg-green-700";
        state.notification.icon = "check";
        state.notification.displayStatus = true;
    },

    errorNotification(state, payload) {
        state.notification.message = payload;
        state.notification.color = "bg-red-600";
        state.notification.icon_bg = "bg-red-700";
        state.notification.icon = "exclamation";
        state.notification.displayStatus = true;
    },

    infoNotification(state, payload) {
        state.notification.message = payload;
        state.notification.color = "bg-gray-600";
        state.notification.icon_bg = "bg-gray-700";
        state.notification.icon = "info";
        state.notification.displayStatus = true;
    },

    closeNotification(state, payload) {
        state.notification.displayStatus = false;
    }
}

export const actions = {
    successNotification({commit, state}, payload) {
        commit('successNotification', payload)
        setTimeout(function(){ commit("closeNotification", false) },5000);
    },
    errorNotification({commit, state}, payload) {
        commit('errorNotification', payload)
        setTimeout(function(){ commit("closeNotification", false) },5000);
    },
    infoNotification({commit, state}, payload) {
        commit('infoNotification', payload)
        setTimeout(function(){ commit("closeNotification", false) },5000);
    }
    
}

