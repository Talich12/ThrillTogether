<template>
    <div class="container">
        <div class="header">
        <div class="logo">
            <img @click="Logout()" src="../assets/img/svg/Logo.svg" alt="#">
        </div>
        <h1>THRILL TOGETHER</h1>
        <div class="header_right">
            <input type="text">
            <img class="ic_search" src="../assets/img/svg/Search.svg" alt="">
            <img class="ic_acc" src="../assets/img/svg/Account.svg" alt="">
        </div>
    </div>
    <div class="history">
        <div class="content">
            <div class="hist_head">
                <p class="author">Автор</p>
                <div class="eye">
                    <img class = "img_eye" src="../assets/img/svg/eye.svg" alt="">
                    <p class="eye_count">count</p>
                </div>
            </div>

            <p class="name_history">История 1</p>
            <div class="date_ganre">
                <p class="ganre">Жанр</p>
                <p class="date">Дата</p>
            </div>

            <div class="review">
                <p class="text_history">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum maxime voluptate? Assumenda explicabo cupiditate nesciunt eum inventore voluptatum facere.</p>
            </div>
            <div class="icons">
                <div class="icon_item">
                    <img src="../assets/img/svg/Bookmark.svg" alt="">
                    <p class="icon_count">count</p>
                </div>
                <div class="icon_item">
                    <img src="../assets/img/svg/Like.svg" alt="">
                    <p class="icon_count">count</p>
                </div>
                <div class="icon_item">
                    <img src="../assets/img/svg/Dislike.svg" alt="">
                    <p class="icon_count">count</p>
                </div>
            </div>

        </div>
        
        <img class="img_hist" src="../assets/img/svg/img_history.svg" alt="">
    </div>    
    </div>
 </template>
  
 <script>
     import axios from 'axios';
  
     export default {
     name: 'index',
     data() {
         return {

         };
 
     },
     methods: {
        Get(){
        const path = 'http://localhost:3000/'; 
        axios.get(path,{
            headers: {
                'Authorization': 'Bearer ' + this.$cookies.get("access_token")
            }
        })
        .then((response) => {
            console.log(response.data)
            console.log(this.$cookies.get("access_token"))
        })
        .catch((error) =>{
            console.log(error)
            this.$router.push({name: 'Login'})
        })
        },
        Logout(){
        const path = 'http://localhost:3000/LogoutAccess'; 
        axios.get(path,{
            headers: {
                'Authorization': 'Bearer ' + this.$cookies.get("access_token"),
                'Access-Control-Allow-Origin': 'http//localhost:8081'
            }
        })
        .then((response) => {
            console.log(response.data)
            console.log(this.$cookies.get("access_token"))
            this.$router.push({name: 'Login'})
        })
        .catch((error) =>{
            console.log(error)
            console.log(this.$cookies.get("access_token"))
        })
        },
     },
     created(){
        this.Get();
     },
  
     };
 </script>
 
 <style>

 </style>