import { SendMail } from "./components/mailer.js";

(() => {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                    givenname: false,
                    surname: false,
                    emailaddress: false,
                    noteMessage: false,
                    textMessage: false,

                form: {
                    firstname: "",
                    lastname: "",
                    email: "",
                    text: ""
                }
            }
        },

        methods: {
            processMailFailure(result) {

                if(this.form.firstname.length > 0){
                    this.$refs.fname.classList.remove("error");
                    this.givenname = false;
                    } else {
                        this.$refs.fname.classList.add("error");
                        this.givenname = true;
                    }

                if(this.form.lastname.length > 0){
                    this.$refs.lname.classList.remove("error");
                    this.surname = false;
                    } else {
                        this.$refs.lname.classList.add("error");
                        this.surname = true;
                    }                

                if(this.form.email.length > 0){
                    this.$refs.email.classList.remove("error");
                    this.emailaddress = false;
                    } else {
                        this.$refs.email.classList.add("error");
                        this.emailaddress = true;
                    }
                    
                if(this.form.text.length > 0){
                    this.$refs.message.classList.remove("error");
                    this.noteMessage = false;
                    } else {
                        this.$refs.message.classList.add("error");
                        this.noteMessage = true;
                    }           
            
            },

            processMailSuccess(result) {
                this.textMessage = true;
                this.$refs.fname.classList.remove("error");
                this.$refs.lname.classList.remove("error");
                this.$refs.email.classList.remove("error");
                this.$refs.message.classList.remove("error");
                this.givenname = false;
                this.surname = false;
                this.emailaddress = false;
                this.noteMessage = false;
            },

            processMail(event) {        
                // use the SendMail component to process mail
                SendMail(this.$el.parentNode)
                    .then(data => this.processMailSuccess(data))
                    .catch(err => this.processMailFailure(err));
            },

        }
    }).mount('#mail-form')
})();