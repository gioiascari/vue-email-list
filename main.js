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
    mailRandom: [],
  },
  mounted() {
    for (let i = 1; i <= 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.i = response.data;
          this.mailRandom.push(response.data);
          console.log(i);
        });
    }
  },
});
