export default {
    name: 'TheLightcontainerComponent',
    
    props: ['hero'],

    template:
    `
    <section ref="lbWrapper" class="lightcontainer" :style="{ 'background-image': 'url(../images/'+ hero.lbBG +')'}" >
    <!--validate date here-->
    
        <img @click="closeLB" src="images/closeIcon.png" class="lightcontainer_close">
        <!-- hero image on the left, text on the right -->
        <!-- her image is a background image -->
        <article>
            <h3 class="lb_heading">
                <pre>{{ hero.topic }}</pre>
            </h3>
           
            <p class="lb_text">
               <pre>{{ hero.price }}</pre>
            </p>
            <p class="lb_text">
                <pre>{{ hero.infor }}</pre>
            </p>
        </article>
    </section>
    `,

    methods: {
        closeLB() {
            debugger;
            this.$emit('closelb');
        }
    }
}