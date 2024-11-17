<template>
  <form @submit.prevent="sendEmail">
    <input type="text" v-model="name" placeholder="Your Name" />
    <input type="email" v-model="email" placeholder="Your Email" />
    <textarea v-model="message" placeholder="Your Message"></textarea>
    <button type="submit">Send Email</button>
  </form>
</template>
  
  <script>
  import emailService from '../utils/emailService';

  export default {
    name: 'Contact',
    data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    async sendEmail() {
      const params = {
        to_name: 'Your Name', // Replace with the recipient's name
        from_name: this.name,
        from_email: this.email,
        message: this.message
      };

      try {
        await emailService.sendEmail(params);
        alert('Email sent successfully!');
        // Reset the form fields
        this.name = '';
        this.email = '';
        this.message = '';
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again.');
      }
    }
  }
  };
  </script>
  
  <style scoped>
  /* Your CSS for the contact page */
  </style>
  