export default {
    name: 'TheMetalPackage',

    props: {
        hero: Object
    },

    template:
    `
    <li @click="loadLightcontainerData">
        <img :src='"images/" + hero.metalpic' alt="hero image" width="260">
        <!-- <div class="sprite"></div> -->
        <div class="red-bumper"></div>
        <h5>{{hero.topic}}</h5>
    </li>
    `,

    methods: {
        loadLightcontainerData() {
            // pass the individual hero object back to the main VM instance
            this.$emit('loadlb',this.hero);
        }
    }
}