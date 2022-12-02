(() => {
 
    const { createApp } = Vue

    createApp({
        created(){
            console.log('vue instance is created');
            //fetch the remote date here and pass it to the data object

            fetch('./data.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                //push the data into the vue instance
                // the "this" keyword inside of the vue instance always refers to the instance itself

                    this.remoteData = data;
            })

            .catch(error => console.error(error));
        },

        data() {
          return {
            welcome: 'My Skill, My Passion, My Strengh',
            topic: 'My name is Ying. I list all my skills as below. You can click the belwo button if you want to make an order.',

            //this is a array//
            //profs: ['joe','john','justin','jarrod'],//
            member: ['Graphic','Education','Video','Writing','Marketing'],
            remoteData: {}

          }
        },

        methods: {
            logicbutton() {
                console.log('clicked!');
            }
        }

      }).mount('#app');



})();