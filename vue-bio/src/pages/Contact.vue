<template>
  <div class="flex justify-center items-center flex-col px-72 pt-24">
    <h1 class="text-5xl text-gray-50 pb-4 font-semibold">Let's chat!</h1>
    <p class="text-2xl text-gray-50 pb-4 font-medium text-center">
      Got a question, idea, or just want to say hello? I’d love to hear from
      you! Whether you're looking for collaboration or simply want to
      connect, feel free to drop me a message. I’ll get back to you as soon as I
      can.
    </p>

    <p class="text-2xl text-gray-50 font-medium text-center">
      Use the contact form below or shoot me an email directly — I can’t wait to talk!
    </p>
  </div>
  <div class="flex justify-center items-center px-10 pt-10 pb-40">
    <form @submit.prevent="sendEmail" class="max-w-3xl">
      <div class="pb-4 flex gap-4">
        <input
          type="text"
          v-model="name"
          placeholder="Your Name..."
          class="drop-shadow-lg rounded-xl px-4 h-8"
          required
        />
        <input
          type="email"
          v-model="email"
          placeholder="Your Email..."
          class="drop-shadow-lg rounded-xl px-4"
          required
        />
      </div>
      <div class="pb-4">
        <textarea
          v-model="message"
          placeholder="Your Message..."
          class="drop-shadow-lg rounded-xl px-4 py-2 w-full h-44"
          required
        ></textarea>
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="drop-shadow-lg border border-custom-bg-green rounded-xl text-custom-dark-purple font-bold bg-custom-bg-green px-6 h-10 hover:bg-custom-dark-purple hover:border-custom-dark-purple hover:font-bold hover:text-gray-50"
        >
          Send Email
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import emailService from "../utils/emailService";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async sendEmail() {
      const params = {
        to_name: "Your Name", // Replace with the recipient's name
        from_name: this.name,
        from_email: this.email,
        message: this.message,
      };

      try {
        await emailService.sendEmail(params);
        alert("Email sent successfully!");
        // Reset the form fields
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Error sending email. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
/* Your CSS for the contact page */
</style>
