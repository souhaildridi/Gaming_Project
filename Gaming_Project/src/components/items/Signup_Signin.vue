<template>
  <article>
    <div class="container" :class="{'sign-up-active': signUp}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Welcome Back!</h2>
            <p>Please login with your personal information</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
          </div>
          <div class="overlay-right">
            <h2>Hello friend!</h2>
            <p>Please enter your personal details</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
          </div>
        </div>
      </div>
      <form v-if="signUp" class="sign-up" action="#" @submit.prevent="submitForm">
  <h2>Create login</h2>
  <div>Use your email for registration</div>
  <input v-model="name" type="text" placeholder="Name" />
  <input v-model="Email" type="email" placeholder="Email" />
  <input v-model="password" type="password" placeholder="Password" />
  <button @click="submitForm">Sign up</button>
</form>
      <form v-else class="sign-in" action=""  @submit.prevent="submitForm">
        <h2>Sign In</h2>
        <div>Use your account</div>
        <input v-model="Email" type="email" placeholder="EmailLogin" />
        <input v-model="password" type="password" placeholder="PasswordLogin" />
        <a href="#">Forget your password?</a>
        <button @click="submitForm">Sign in</button>
      </form>
    </div>
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      Email: "",
      password: "",
      name:"",
      signUp: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        let result;

        if (this.signUp) {
          result = await axios.post("http://localhost:3000/users", {
            Email: this.Email,
            password: this.password,
            name:this.name
          });
        } else {
          result = await axios.post("http://localhost:3001/cards", {
            Email: this.Email,
            password: this.password,
          });
        }

        console.log(result);

        if (result.status === 201) {
          alert(`${this.signUp ? "Sign up" : "Sign in"} successful`);
          localStorage.setItem("user-info", JSON.stringify(result.data));
        }
      } catch (error) {
        console.error(error);
        alert(
          `${this.signUp ? "Sign up" : "Sign in"} failed. Please check your credentials.`
        );
      }
    },
  },
  props: {
    source: String,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 800px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);
  margin-top:80px;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  z-index: 100;
}

.overlay {
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  color: #020202;
  background: rgba(0, 0, 0, 0.5) url('../../../public/hero.jpg');
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}

.overlay-left {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 70px 40px;
  width: calc(65% - 120px);
  height: calc(100% - 140px);
  text-align: center;
  transform: translateX(-20%);
  transition: transform .5s ease-in-out;
}

.overlay-right {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 70px 40px;
  width: calc(65% - 120px);
  height: calc(100% - 140px);
  text-align: center;
  transform: translateX(0);
  transition: transform .5s ease-in-out;
  right: 0;
}

h2 {
  margin: 0;
  font-weight: bold;
  font-size: 20px;
}

p {
  margin: 20px 0 30px;
  font-weight: bold;
}

a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}

button {
  border-radius: 20px;
  border: 1px solid #0b0b0b;
  background-color: #760404;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}

button.invert {
  background-color: transparent;
  border-color: #fff;
}

form {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 61%;
  height: auto;
  text-align: center;
  background: #000;
  padding: 100px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  margin-left: -90px;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 10px;
    margin: 10px 0;
    width: 70%;
    border-radius: 8px;
    border: 1px solid #555;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
    overflow: hidden;
    text-align: center;
    color: #000;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }

  button {
    margin-top: 10px;
    border-radius: 20px;
    border: 1px solid #0b0b0b;
    background-color: #760404;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.1s ease-in;

    &:active {
      transform: scale(0.9);
    }

    &:focus {
      outline: none;
    }
  }

  button.invert {
    background-color: transparent;
    border-color: #fff;
  }
}

.sign-in {
  left: 0;
  z-index: 2;
}

.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show .5s;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    transform: translateX(20%);
  }
}

@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }

  49% {
    opacity: 0;
    z-index: 1;
  }

  50% {
    opacity: 1;
    z-index: 10;
  }
}

button:hover {
  background-color: #8b0808;
  transform: scale(1.1);
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

button.invert:hover {
  background-color: #fff;
  color: #8b0808;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
</style>
