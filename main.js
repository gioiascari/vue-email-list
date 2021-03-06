console.log("Ok Vue Js :)");
/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */
const app = new Vue({
  el: "#id",
  data: {
    emailRandom: [],
  },
  mounted() {
    for (let i = 1; i <= 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.emailRandom.push(response.data.response);
        });
    }
  },
});
