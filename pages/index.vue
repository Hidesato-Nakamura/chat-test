<template>
  <div>
    <div id="canvas">あなたのchat IDは{{ uid }}です</div>
    <p><textarea v-model="note_content"></textarea></p>
    <p><button @click="SendContent(note_content)">投稿</button></p>
    <div v-for="(i, index) in chatlog" :key="index">{{ i.content }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from '@/plugins/firebase'
import 'firebase/auth'
const axios = require('axios')

export default {
  data() {
    return {
      value: '',
      context: null,
      note_content: '',
      uid: '',
      count: 0,
      chatlog: [],
    }
  },
  methods: {
    SendContent(value) {
      // 新しいテキストのためのキーを取得
      var newNoteKey = firebase.database().ref().child('notes').push().key
      firebase
        .database()
        .ref('notes/' + newNoteKey)
        .set({ content: value, uid: this.uid })
    },
  },

  //起動時にfirebase authの匿名認証を行い、storeに一意なIDを保存しストアに格納
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid
        this.$store.commit('AddUser', this.uid)
        // document.getElementById(
        //   'canvas'
        // ).innerHTML = `あたなのIDは「<strong>${uid}</strong>」です`
      }
    })
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        console.log('サインインしました')
      })
      .catch((error) => {
        console.log('エラーです！')
        console.log(error.message)
        var errorCode = error.code
        var errorMessage = error.message
        // ...
      }),
      // RealtimeDatabaseの更新を検知
      firebase
        .database()
        .ref('notes')
        .on('value', (snapshot) => {
          this.chatlog = snapshot.val()
          console.log('real time database が 更新されました。')
          console.log(snapshot.val())
        })
  },
}
</script>

<style>
.test {
  height: 200px;
  background-color: red;
}
</style>
