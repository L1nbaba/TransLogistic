/* font-family: 'Lato', sans-serif;
font-family: 'Merriweather', serif;
font-family: 'PT Sans', sans-serif; */

/* иконки генератор - https://realfavicongenerator.net/ */
/* бесплатные картинки https://unsplash.com/ */
/* Проверки сайти https://validator.w3.org/nu/#file */
body {
    margin: 0;
    font-family: 'PT Sans', sans-serif;
    background-color: #fff;
    /* межстрочный отступ */
    line-height: 1.5;
    font-size: 15px;
    color: #585858;
    /* сглаживание для Mac */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


body.no-scroll{
    overflow: hidden;
}
*, *:before,*:after {
    box-sizing: border-box;
}

.text-center{
    text-align: center;
}
h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
}

p {
    margin: 0 0 10px;
}


ol {
    margin: 0;
    padding: 0;
    list-style: none;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
li {
    margin: 0;
    padding: 0;
    
}

img {
    display: block;
    max-width: 100% ;
    height: auto;
}
/* Page */
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* скрываем всё, что вылезает за рамки нашего сайта */
    overflow: hidden;
}
/* Header */
.header {
   
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1000;

    transition: background .2s linear;
}
.header--scroll {
    background-color: rgba(0, 0, 0,  .8);
}
.container {
    margin:0 auto;
    
    
    width: 100%;
    max-width: 1100px;
    padding: 0 15px;
}
.header__inner {
    display: flex;
    height: 85px;
    /* пространство между элементами контейнера */
    justify-content: space-between;
    align-items: center;
}
.nav__link {
     /* чтобы задать отступы справа/слева */
    display: flex;
    padding: 0 10px;
    color: #fff;
    /* убираем подчёркивание текста */
    text-decoration: none;
    /* элементы по центру во всю высоту */
    align-items: center;

    transition: background .3s linear;
   
}

.nav__link:not(.active):hover {
    text-decoration: underline;
}
.nav {
    display: flex;
    height: 100%;
    font-size: 15px;
}
.nav__link.active {
    background-color: #004Af2;
}

/* burger */

.burger {
    padding: 0;
    background: none;
    border: 0;

    display: none;
}
.burger:focus {
    outline: none;
}

/* 2 lesson */
.intro {
    /* background: #000 url(images/seb-creativo-3jG-UM8IZ40-unsplash.jpg) no-repeat center ; */
    /* убираем повторы no-repeat */
    margin-bottom: 30px;
    background-size: cover;

    position: relative;

   
    background: #000;
}


.intro--text {
    height: 350px;
    background:  url(images/textphoto.svg) no-repeat center ;
    background-size: cover;
}

.intro--blog {
    height: 350px;
    background: #000 url(images/photo\ bg.svg) no-repeat center ;
    /* убираем повторы no-repeat */
    margin-bottom: 30px;
    block-size: cover;
}
.intro__slider {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;

    top: 0;
    left: 0;
    z-index: 1;

    
    
    background-color: #04244a url(images/seb-creativo-3jG-UM8IZ40-unsplash.jpg) no-repeat center;
    background-size: cover;
}
.intro__slider.intro__slider-photo {
   opacity: 0;
   transition: opacity .2s ease-out ;
}
.intro__slider.slick-initialized {
    background: #04244a;
    
}
.intro__slider.slick-initialized.intro__slider-photo {
    opacity: 1;
}
.intro__slider .slick-list, 
.intro__slider .slick-track {
    height: 100%;

} 


.intro__slider-photo {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    
    top: 0;
    left: 0;
}
.intro__inner {
    height: 600px;
    display: flex;
    /* прижимаем элементы к конце по вертикале */
    align-items: flex-end;
    justify-content: space-between;

    position: relative;
    z-index: 2;

    /* не реагирует на события мыши */
    /* pointer-events: none; */
}

.intro__text {
    /* прижимаем текст */
    text-align: right;
}
.intro__countries {
    font-size: 15px;
    color: #fff;
}
.intro__title {
    position: relative;
    font-family: 'Lato', sans-serif;
    font-size: 110px;
    font-weight: 700;
    line-height: 100px;
    color: rgba(255, 255, 255, 0.7);
}

.intro__text{
    margin-bottom: 45px;
    text-align: right;
    /* pointer-events: auto; */
}
.intro__title-amp {
    position: absolute;
    right: 0;

    /* лайфхак для выравнивания по центру; */
    top: 50%;
    transform: translateY(-50%);


    font-size: 170px;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.2);
    line-height: 1;
}
/* css triangle generator */
.intro_slider-arrows {
    position: absolute;
    bottom: 30px;
    left: 430px;
}
.intro__slider-btn {
    width: 0;
    padding: 0;
    height: 0;
    margin: 0 3px;

    font-size: 0;
    color: transparent;
    cursor: pointer;

    background: none;
}
.intro__slider-btn--prev {
    width: 0;
    padding: 0;
    height: 0;

    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #fff
    transparent transparent;
}
.intro__slider-btn--next {
    width: 0;
    padding: 0;
    height: 0;

    border-style: solid;
    border-width: 10px 0px 10px 10px;
    border-color: transparent transparent transparent #fff;
}


.request-form {
    max-width: 400px;
    width: 100%;
    background-color: #004af2;
    /* скрываем все. что находится за бордером */
    overflow: hidden;
    border-radius: 5px;
}

.request-form--right {
    margin-left: auto;
}

/* опускаем вниз форму */
.request-form--intro {
    position: relative;
    bottom: -30px;   
/* 
    pointer-events: auto; */
}
section
.request-form__header {
    padding: 20px 30px;
    background-color: #0f3fb0;
}
.request-form__title {
    margin-bottom: 5px;
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    font-weight: 900;
    color: #fff;
    
    padding-left: 30px;
}
.request-form__text {
    padding-left: 20px;
    padding-right: 10px;
    text-align: left;
    font-size: 15px;
    color: #fff;
    line-height: 1.4;
}
.request-form__content {
    padding: 30px;
}


/* Form */
.form__group {
    margin-bottom: 25px;
}
.input{
    display: block;
    width: 100%;

    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    padding-bottom: 15px;
    padding-left: 50px;

    /* для инпута шрифт не берётся от body */

    font-family: 'PT-Sans', sans-serif;
    font-size: 16px;
    color: #fff;
    /* меняем время изменения подчёркивания */
    transition: border-color 1s;
}



.input::placeholder {
    color: #fff;
}
.input:focus {
    outline: none;
    border-bottom-color: #fff;
}

.input--dark {
    color: #2C2C2C;
    border-bottom-color: #e8e8e8;
}
.input--dark:focus {
    border-bottom-color: #000;
}
.input--dark::placeholder {
    color: #2C2C2C;
}
.input--dark.input--user {
    background: url('images/hblack.svg') left 20px top 4px no-repeat;
}
.input--dark.input--phone {
    background: url('images/phblack.svg') left 20px top 4px no-repeat;
}
.input--dark.input--email {
    background: url('images/mailblack.svg') left 20px top 4px no-repeat;
}


.input--user {
    background: url('images/person.svg') left 20px top 4px no-repeat;
}

.input--phone {
    background: url('images/phone.svg') left 15px top 4px no-repeat;
}
.input--email {
    background: url('images/email.svg') left 20px top 4px no-repeat;
}

/* btn */
.btn {
    display: inline-block;
    vertical-align: top;
    padding: 15px 45px;
    /* выравниваем элементы наравне с текстом кнопки */
    vertical-align: middle;


    background: #333;
    border: 0;
    border-radius: 5px;
    line-height: 1.1;
    font-family: 'PT-Sans', sans-serif;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    cursor: pointer;

    text-decoration: none;
}
.btn--orange{
    background-image: linear-gradient(to right, #ff903e, #ff2c2c
    ) ;
}
.btn--size {
    display: block;
    
    width: 100%;

    vertical-align: top ;
}

.btn:hover {
    background-size: 150%;
  
}

.btn--shadow {
    box-shadow: 0 10px 15px
    rgba(0, 0, 0,  .20);
}
/* section */
.section {
    padding: 60px 60px 0px 20px ;
}
.section--last {
    margin-bottom: 60px;
}
.section--map {
    background: url(images/clients/map.svg) no-repeat left 30px top 130px ;
}
.section--gray{
    background-color: #F9F9F9;
}
.section__title {
    margin-bottom: 40px;
    font-size: 45px;
    color: 2c2c2c;
    font-weight: 900;
    line-height: 1.2;
    font-family: 'Lato', sans-serif;
}
.section__title span {
    color: #0d53f2;
}
/* services */
.services {
    display: flex;
    position: relative;
    /* разрешаем перенос элементов на новую строку */
   
    flex-wrap: wrap;
    padding: 30px 0 50px;
    /* выделяем блок тенями */
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
   
}
.services__main-title {
    position: absolute;
    color: rgba(44, 44, 44, .05);
    font-family: 'Lato', sans-serif;
    bottom: 0;
    right: 0;
    z-index: 1;
    font-size: 90px;
    line-height: 1;
}
.services__item {
    display: flex;
    flex-direction: column;
    /* если блоков будет больше 4, то отделим их */
    margin-bottom: 25px;

    width: 25%;
    padding: 0px 25px;
}
.sercices__title {
    margin-bottom: 20px;
    font-size: 24px;
    color: #2c2c2c;
    font-weight: 900;
    line-height: 1.2;
    font-family: 'Lato', sans-serif;
}
.services__text {
    margin-bottom: 20px;
    color: #585858;
    font-size: 15px;
    /* 1,4 примерно 21px */
    line-height: 1.4;
}
.services__footer {
    margin-top: auto;
    
}
.services__link {
    display: inline-block;
    font-size: 15px;
    color: #004af2;
    /* убираем нижнее подчеркивание */
    text-decoration: none;

    
    transition: color .1s linear;
}
.services__link:after {
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background-color: #004Af2;

    transition: width .1s linear;
    /* pointer-events: none;  */
}
.services__link:hover {
    color: #ff3e2f;

}
overflow 
.services__link:hover:after {
    width: 100%;
    color: #ff3e2f;
}

/* Clients/logo */
.clients {
    display: flex;
    margin-bottom: 60px;
}
.clients__logos {
    width: 60%;
}
.clients__rewiews {
    width: 40%;
}
.clients__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.clients__list li{
    margin-right: 20px;
    margin-bottom: 40px;
}
.clients-love {
    display: inline-block;
    margin-left: 40px;
    min-height: 47px;
    padding-top: 5px;

    background: url(images/clients/_ionicons_svg_ios-heart-empty.svg) no-repeat left 19px top 0;
    font-family: 'Pt sans', sans-serif;
    font-size: 18px;
    color: #464646;
}

/* Reviews */
.reviews {
    position: relative;
    height: 200px;

    background: url("ajax-loader.gif") no-repeat center;
}
.reviews.slick-initialized {
    background: none;
}
.reviews__item {
    display: none;
    padding: 0 10px;
}
.reviews__header {
    position: relative;
    padding-left: 121px;
    min-height: 100px;
    padding-top: 10px;
    margin-bottom: 30px;

    background: url('images/clients/lines.svg')
    no-repeat;


    font-family: 'Lato', sans-serif;
}
.reviews__photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;

    border: 5px solid #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0, .16);

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.reviews__name {
   
    font-size: 18px;
    color: #2c2c2c;
    font-weight: 900;
}
.reviews__company {
 
    font-size: 15px;
    color: #2c2c2c;
}
.services__item  {
    padding: 0 10px;
}
.reviews:before,
.reviews:after {
    content: "";
    display: block;
    width: 10px;
    height: 100%;
 


  
    position: absolute;
   
    top: 0;

    z-index: 3;
}
.reviews:before {
    background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
    left: 0;
}
.reviews:after {
    background-image: linear-gradient(to left, #fff, rgba(255, 255, 255, 0));
    right: 0;
}
.reviews .slick-list {
   padding-top: 20px;
   z-index: 2;
    
}
.reviews .slick-dots {
    width: 100%;

    display: flex;
    justify-content: center;

    position: absolute;
    /* bottom: 0px; */
    left: 0;
    z-index: 3;
}
.reviews .slick-dots li  {
    margin: 0 5px;
}
.reviews .slick-dots li.slick-active button {
    background: #004Af2;
    box-shadow:0 0 0 5px rgba(0, 74, 242, .11);
}
.reviews .slick-dots button {
    width: 10px;
    height: 10px;   
    display: block;

    padding: 0;
    background:  #DBDBDB;
    border: 0;
    cursor: pointer;
    border-radius: 50%;

    color: transparent;
    font-size: 0;
}
.reviews .slick-dots button {
    outline: none;
}
.reviews__photo-lin {
    width: 82px;
    height: 80px;
    top: 8px;
    left: 5px;
}
.reviews.slick-slide {
    overflow: none;
}
.reviews__content {
    font-size: 15px;
    line-height: 1.8;
    color: #585858;

}
.reviews__content p {
    margin-bottom: 20px;
}
/* делаем отступ у первой строки текста */
.reviews__content p {
    text-indent: 20px; /* Отступ первой строки в пикселах */
}

/* Benefits */
.benefits {
    display: flex;
}
.benefits__col {
    width: 50%;
}
.benefits-list {
    padding-left: 50px;
    position: relative;


    width: 100%;
    max-width: 370px;
    /* сверху-вниз , делаем белый до 40 процентов*/
    background-image: linear-gradient(to bottom, #fff 40%, #A5A5A5 40%);
    /* уменьшаем градиент */
    background-size: 2px 35px;
    background-repeat: repeat-y;

    background-position: left 12px top 0px;
}
.benefits-list:before,
.benefits-list:after{
    content: "";
    display: block;
    width: 26px;
    height: 36px;

    background-repeat: no-repeat;
    /* background: url(images/startofwaay.svg); */
    background-color: #fff;
    position: absolute;
    left: 0;
    z-index: 1;

   
}
.benefits-list:before {
    background-image: url(images/startofwaay.svg);

    top: 1px;
}
.benefits-list:after{
    background-image: url(images/endofway.svg);

    bottom: -1px;
}
/* кроме последнего элемента */
.benefits-list__item:not(:last-child ){
    margin-bottom: 35px;
}
.benefits-list__title {
    margin-bottom: 12px;

    font-family: 'Lato', sans-serif;
    color: #2c2c2c;
    font-size: 21px;
    font-weight: bold;
    line-height: 1.2;
}
.benefits-list__item {

    font-size: 15px;
    color: #585858;
    line-height: 1.4;
}

/* Team */

.team {
    margin: 0 -15px;
    display: flex;
    flex-wrap: wrap;
}
.team__col {
    width: 33.3333%;
    padding: 0px 15px;
}
.team__photo {
    margin-bottom: 13px;
    box-shadow: 10px 5px 13px rgba(0, 0, 0,  .16);
}
.team__name {
    margin-bottom: 5px;
    color: #2c2c2c;
    font-family: "Lato", sans-serif;
    font-size: 18px;

    line-height: 1.2;
    font-weight: 900;
}
.team__prof { 
    margin-bottom: 11px;
    font-size: 15px;
    color: #707070;
}
.team__contacts {
    padding-left: 0px;
    font-size: 14px;
    color: #585858;
}
.team__contacts li{
    
    line-height: 1.2;
    margin-bottom: 10px;
}
.team__contacts a {
    color: #585858;
    text-decoration: none;
}
.team__contacts a:hover {
    text-decoration: underline;
}
.team__contacts-icon {
    display: inline;
    width: 16px;
    height: auto;
    margin-right: 7px;
}


/* Mission */
.mission-title {
    font-family: 'Lato',sans-serif;
    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    
    color: rgba(0, 0, 0, .05);
    text-align: center;

    text-transform: uppercase;


    
}
.mission {
    margin-bottom: 30px;

    padding: 60px 30px;
    background-color: #fff;


    position: relative;
    top: -23px;

    border-radius: 5px;
    box-shadow: 0 5px 30px 
    rgba(0, 0, 0, .16);

    text-align: center;

    font-family: 'Lato',sans-serif;


}
.mission:before,
.mission:after{
    content: "";
    display: block;
    width: 41.66666%;
    height: 2px;

    position: absolute;

    bottom: 0;
    z-index: 1;
}
.mission:before {
    background-color: #004AF2;
    right: 50%;
}
.mission:after {
    background-color: #FC2C2B;
    left: 50%;
}


.mission__title {
    margin-bottom: 5px;

    
    font-size: 30px;
    font-weight: 700;

    color: #004AF2;

    line-height: 1.2;
   
}

.mission__subtitle {
    font-size: 21px;
    color: #585858;
}

/* News */

.articles {
    margin-bottom: 30px;
    display: flex;
    /* flex-wrap: wrap;  */
    justify-content: space-between;
    margin: 0 -15px 30px;
    
}
.articles--column {
    flex-direction: column;
    margin-bottom: 75px;
}
.articles--column
.articles__item {
    min-width: none;
    margin-bottom: 45px;
}
/* отступу последнего */
.articles--column
.articles__item:last-child {
    margin-bottom: 0;
}
.articles__item {
    width: 100%;
    max-width: 500px;
    margin-bottom: 20px;
    padding:  0 15px;
}
.articles__title {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
    color: #2c2c2c;
}
.articles__title a {
    /* наследуем цвет ссылки у родителя */
    color: inherit;
    /* убираем подчекривание 
    */
    text-decoration: none;
}
.articles__title a:hover {
     text-decoration: underline;
}
.articles__text {
    margin-bottom: 15px;
    font-size: 15px;
    line-height: 1.4;
    color: #585858;
}
.articles__data {
    /* time по умолчанию строчный элемент , поэтому сделаем его блочным */
    display: block;
    font-size: 12px;
    color: #6e6e6e;

}

/* Footer */
.footer {
    padding: 40px 0px;
    
    
    /* прижимаем футер к низу */
    margin-top: auto;

    background-color: #F9F9F9;
    background-image: url("images/tire_left.svg"), url("images/tire_right.svg");
    background-repeat: no-repeat, no-repeat;
    background-position: left -50px bottom -80px, right -50px bottom -80px;

    text-align: center;
}
.footer__contacts {
    margin: 25px 0;

    font-size: 12px;
    font-weight: 700;
   
    color: #585858;
    font-style: normal;
}
.footer__contacts p {
    margin: 0 0 5px;
}
.footer__contacts a {
    color: inherit;
    text-decoration: none;
}
.footer__contacts a:hover {
   text-decoration: underline;
}
.foot--icon {
    display: inline;
}
.footer__nav {
    flex: 12px;
}
.footer__nav a{
    margin: 0 5px;
    color: #004AF2;
    text-decoration: none;
}
.footer__nav a:hover{
   text-decoration: underline;
}


/* Modals */
.modal {
    display:none ;
/* 
    display: block; */
 

    width: 100%;
    height: 100%;

    padding:30px 15px;

    /* сколько бы контекнта не было, будет всего по центру */
   
    background-color: rgba(0, 0, 0,  .9);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    overflow-y: auto;
    overflow: auto;
}

.modal.show {
    display: block;
}
.modal__inner {
    display: flex;
    
    justify-content: center;

    align-items: center;
    min-height: 100%;
}
.modal__content {
    max-width: 400px;
    width: 100%;
    padding: 25px;
    margin-top: 50px;
    background-color: #fff;
    
    position: relative;
    opacity: 0;
    /* translateY(0) */
    transform: scale(0.4);

    transition: transform .2s ease-out, opacity .2s ease-out;
}
.modal__header {
    text-align: center;
    margin-bottom: 25px ;
}
.modal__title {
    margin-bottom: 1px;

    font-family: 'Lato', sans-serif;
    font-size: 24px;
    color: #004AF2;
    font-weight: 900;
    line-height: 1.4;

    text-align: center;
}
.modal__text {
    font-family: 'PT sans', sans-serif;
    font-size: 15px;
    color: #2c2c2c;
}

.modal__footer {
    margin-top: 25px;
    padding-top: 25px;

    border: 1px solid #e8e8e8;

    text-align: center;
}
.modal__footer-title {
    font-family: "Lato", sans-serif;
    font-size: 18px;
    color: #2C2C2C;
    font-weight: 900;
}
.modal__contacts {
    font-size: 15px;
    font-style: normal;
    color: #2C2C2C;
}
.modal__contacts p {
    margin-bottom: 3px;
}
.modal__contacts a {
    color: inherit;
    text-decoration: none;
}
.modal__contacts a:hover {
    text-decoration: underline;
}
.modal__close {
    width: 20px;
    height: 20px;

    position: absolute;
    top: -20px;
    right: -30px;
    z-index:2;


    background: none;
    border: none;

    cursor: pointer;

    transition:transform 4.s linear;
}
.modal__close:hover {
    transform: rotate(90deg);
}
.modal__close img{
    display: block;

}
.modal__header-thx {
    text-align: center;
    margin-bottom: 25px ;
}
.modal__header-thx img{
    display: inline-block;
}


/* Main */
.main{
    display: flex;

}
.main__col {
    width: 50%;
}

/* Text */
.text {
    min-width: 890px;
    font-style: 18px;
    font-family: "PT sans", sans-serif;
    color: #585858;
    line-height: 1.8;
}

.text p {
    margin-bottom: 20px;
}

.text h2,
.text h3,
.text h4,
.text h5,
.text h6 {
    margin-bottom: 20px;

    font-weight: 700;
    color: #2c2c2c;

}

.text h2 {
    font-size: 27px;
}
.text h3 {
    font-size: 24px;
}
.text h4 {
    font-size: 21px;
}
.text h5 {
    font-size: 18px;
}
.text h6 {
    font-size: 15px;
}

.text ul,
.text ol {
    margin-bottom: 20px;
}

.text ol {
    list-style: decimal;
    list-style-position: inside;
}
.text hr {
    display: block;
    width: 100%;
    height: 1px;

    border:0;
    background-color: #d1d1d1;

}

.text img {
    display: block;
    max-width: 100%;
    height: auto;
}

.text a {
    text-decoration: none;
}
.text a:hover {
    text-decoration: underline;
}




/* последние штрихи */

.page1--last {
    margin-bottom: 60px;
}









/* Media */
@media (max-width: 991px) {

    .services__item {
        width: 50%;
    }
    .clients {
        flex-direction: column;
        margin-bottom: 60px;
    }
    .clients__logos,
    .clients__rewiews {
        width: 100%;
    }
    .clients__logos {
        margin-bottom: 50px;
    }
    .clients__list li {
        min-width: 130px;
    }
    .clients__list {
        justify-content: center;
    }



    /*  Section */
    .section__title {
        text-align: center;
    }
    .section--map {
    background-position: 
    center top 130px;
    }

   /* footer */
   .footer {
    background-size: 350px auto    ;
    background-position: left -30px 
    bottom -30px, right -30px 
    bottom -30px;
   }
   
    /* Intro */
   .intro__title {
    font-size: 90px;
   }
   .intro__title-amp {
    font-size: 120px;

    right: auto;
    left: 50%;
    transform:  translate3d(-50%,-50%,0);
   }
   .intro--blog,
   .intro--text {
    height: 250px;
   }

   /* Blog Main */
 
   .main__col {
        width: 100%;
   }
   /* .request-form */
   .request-form--right {
        margin: 30px auto;
   }
   .main__col--left {
    width: 50%;
   
   }
   .main__col--right {
    width: 40%;
    margin-top: 0;
    margin-left:  15px;
   }
   /* Articles */
}

@media (max-width: 767px) {
    /* Header */
    .header__inner {
        height: 50px;
        
    }
    /* ?Nav */
    .nav {
       
        position: absolute;
        flex-direction: column;
        padding-top: 9px;

        width: 100%;
        height: auto;
        min-height: calc(100vh - 50px);
        top: 100%;
        left: 0;
        right: 0;     
        z-index: 1;

        background-color: rgba(25, 23, 23, 0.9);
    
    
        transform: translateX(100%);
        transition: transfrom 4s ease-out;
    } 
    .nav.show {
        
        transform: translateX(0);
    }
    .nav__link {
        display: block;
        padding: 10px 15px;
        text-align: right;
       
    }

    .burger {
          
        display: block;
        
    }



    /* Intro */

    .intro {
         margin-bottom: 0;
    }
    .intro__inner {
        
        flex-direction: column;
        align-items: center;

        height: auto;
        padding-top: 75px;
        padding-bottom: 25px;
    }
    .intro__title {
        
        font-size: 90px;
    }
    
    .intro_slider-arrows {
        display: none;
    }


      /* Intro */
   .intro__title {
    font-size:70px;
   }
   .intro__title-amp {
    font-size: 100px;

  
   }
    /* Request form */
    
    .request-form--intro {
        order: 2;
        position: static;
    }

      /* Benefits */
      .benefits {
        flex-direction: column;
        max-width: none;
        margin: 0 auto;
    }
    
      .benefits__col {
        
        width: 100%;
      }

      .benefits-list li{
        margin-bottom: 30px;
      }

      /* Team */
      .team {
        flex-direction: column;
      }
      .team__col {
        width: 100%;
        
      }
      .team__item {
        max-width: 370px;
        margin: 0 auto;
      }

      /* Mission */
      .mission-title {
        font-size: 70px;
      }
      .mission {
        padding: 40px 20px;
        margin-top: -16px;
      }
     
      .mission__subtitle {
        font-size: 18px;
      }
      /* Articles */
      .articles {
        flex-wrap: wrap;
      }
      .articles__item {
        max-width: none;
      }
        /* footer */
   .footer {
    background-size: 250px auto    ;
    background-position: left -20px 
    bottom -30px, right -20px 
    bottom -30px;
   }

   /* modals */
 
   .modal__close {
        right: 0;
        top: -30px;
   }

    /* Blog Main */
    .main {
        flex-direction: column;
   }
   .main__col {
        width: 100%;
   }
   /* .request-form */
   .request-form--right {
        margin: 30px auto;
   }
   .articles--column {
    margin-bottom: 30px;
   }
   .main__col--left {
  
    /* margin: 0 auto; */
    text-align: left;
   }
}

@media (max-width: 575px) {
    /* .intro */
   
    .intro {
        background: #000 url(images/seb-creativo-3jG-UM8IZ40-unsplash.jpg) no-repeat center  ;
        background-size: cover;
    }
    .intro__title {
        font-size: 60px;
        line-height: 1.2;
    }
    .intro__title-amp {
        font-size: 90px;
    }

    /* Services */
    .services {
        padding-top: 50px;
        padding-bottom: 10px;
    }
    .services__main-title {
        position: static;
        margin-bottom: 20px;
        font-size: 60px;

        width: 100%;
        text-align: center;

        bottom: auto;
        right: auto;
        top: 20px;
    }
    .services__item {
        width: 100%;
    }

     /* Section */
    
     .section__title {
        text-align: center;
    }
     .section {
        padding: 30px 0;
     }

     .section__title {
        font-size: 35px;
     }
     /* Clients */
     .clients__list {
       justify-content: center;
        margin: 0 -15px;
     }
     .clients__list li {
        max-width: none; 
        min-width: 30%;
        margin-right: 0;
        padding: 0 15px;
    }
    .clients__list-logo {
        margin: 0 auto;
    }
    /* request form*/
    .request-form {
        margin-bottom: 100px;
    }
    .form {
        order: 2;
    }
    .request-form__header,
    .request-form__content {
        padding:20px;
       
    }
.request-form__title {
    font-size: 25px;
}

    /* Benefits */
      /* Mission */
      .mission-title {
        font-size: 70px;
      }
      .mission {
        padding: 50px 20px;
        /* margin-top: -10px; */
      }
     
      .mission__subtitle {
        font-size: 16px;
      }

      /* Section */
      .section--last {
        margin-bottom: 30px;
      }
            /* footer */
   .footer {
    background-size: 250px auto    ;
    background-position: left -120px 
    bottom -80px, right -120px 
    bottom -80px;
   }

   .main__col--left {
    width: 75%;
    /* margin: 0 auto; */
    /* text-align: center; */
   }
   .text_page2 p{
    display: block;
    flex-direction: column;
   }
   .footer__nav {
    margin-bottom: 0;
   }
   .intro__text ul, ol {
    margin: 0 25px;
   }
   .intro--text h3 {
    margin:20px 35px;
   }
}
