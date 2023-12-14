import BaseCard from "./UI/BaseCard.vue";

export default function globalComponents(app) {
    app.use('base-card', BaseCard)
}