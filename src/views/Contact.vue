<template>
  <div class="container-fluid py-5" id="contact">
    <div class="container">
      <div
        class="position-relative d-flex align-items-center justify-content-center"
      >
        <h1 class="mb-5 text-uppercase text-primary">Contact Me</h1>
      </div>
      <div
        class="alert alert-danger"
        v-if="error"
        style="margin-bottom: 35px"
        !important
        role="alert"
      >
        Silahkan untuk mengisi keseluruhan data terlebih dahulu.
      </div>
      <div
        class="alert alert-success"
        v-if="success"
        style="margin-bottom: 35px"
        !important
        role="alert"
      >
        Pesan anda telah berhasil terkirim.
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="contact-form text-center">
            <div id="success"></div>
            <div name="sentMessage" id="contactForm">
              <div class="row">
                <div class="control-group col-sm-6">
                  <input
                    type="text"
                    class="form-control p-4"
                    v-model="data.name"
                    id="name"
                    placeholder="Your Name"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group col-sm-6">
                  <input
                    type="text"
                    class="form-control p-4"
                    v-model="data.email"
                    id="email"
                    placeholder="Your Email"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group col-sm-6">
                  <input
                    type="text"
                    class="form-control p-4"
                    v-model="data.subject"
                    id="subject"
                    placeholder="Subject"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group col-sm-6">
                  <input
                    type="text"
                    class="form-control p-4"
                    v-model="data.message"
                    id="message"
                    placeholder="Your Message"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div>
                  <a
                    href="#"
                    class="btn btn-outline-info"
                    @click="sendMessage"
                    id="sendMessageButton"
                    >Send Message</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ContactPage",
  data() {
    return {
      data: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      error: false,
      success: false,
    };
  },
  methods: {
    sendMessage() {
      if (
        this.data.name &&
        this.data.email &&
        this.data.subject &&
        this.data.message
      ) {
        axios
          .post("http://localhost:3000/messages", this.data)
          .then(() => this.clearForm())
          .catch((err) => console.log(err));
      } else {
        this.error = true;
      }
    },
    clearForm() {
      this.success = true;
      this.data.name = "";
      this.data.email = "";
      this.data.subject = "";
      this.data.message = "";
    },
  },
};
</script>

<style></style>
