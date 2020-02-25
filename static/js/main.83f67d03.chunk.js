(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),r=a(9),m=a.n(r),n=(a(18),a(12)),o=a(3),s=a(4),c=a(6),d=a(5),p=a(7),h=(a(19),a(20),a(21),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("figure",{className:"image is-4by3"},l.a.createElement("img",{src:i,alt:"Film logo"}))),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-48x48"},l.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("p",{className:"title is-8"},t))),l.a.createElement("div",{className:"content"},a,l.a.createElement("br",null),l.a.createElement("a",{href:r},"IMDB"))))});h.defaultProps={description:""};var b=function(e){var t=e.movies;return l.a.createElement("div",{className:"movies"},t.map((function(e){return l.a.createElement(h,Object.assign({key:e.imdbId},e))})))};b.defaultProps={movies:[]};var u=a(2),f=a(10),g=(a(22),a(1)),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",errors:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}},a.handleChange=function(e){var t=/^\s/,i=e.target,l=i.name,r=i.value;a.setState((function(e){var a;return a={},Object(u.a)(a,l,r.replace(t,"")),Object(u.a)(a,"errors",Object(f.a)({},e.isValid,Object(u.a)({},l,!1))),a}))},a.clearInputs=function(){a.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,i=t.title,l=t.description,r=t.imgUrl,m=t.imdbUrl,n=t.imdbId,o=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;a.setState((function(e){var t={title:!1,description:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1};return""===i&&(t.title=!0),""===l&&(t.description=!0),""!==r&&o.test(r)||(t.imgUrl=!0),""!==m&&o.test(m)||(t.imdbUrl=!0),""===n&&(t.imdbId=!0),{errors:{title:t.title,description:t.description,imgUrl:t.imgUrl,imdbUrl:t.imdbUrl,imdbId:t.imdbId}}}));var s={title:i,description:l,imgUrl:r,imdbUrl:m,imdbId:n};""!==i&&""!==l&&""!==r&&o.test(r)&&""!==m&&o.test(m)&&""!==n&&(a.props.addMovie(s),a.clearInputs())},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl,m=e.imdbId,n=e.errors;return l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"movie-title",className:"form__label"},"Title"),l.a.createElement("input",{onChange:this.handleChange,type:"text",id:"movie-title",className:g("form__input",{"form__input-red":n.title}),value:t,name:"title",placeholder:"Type title"}),l.a.createElement("span",{className:g("form__fill",{"form__fill-all":!n.title})},"Empty field"),l.a.createElement("label",{htmlFor:"movie-description",className:"form__label"},"Description"),l.a.createElement("input",{onChange:this.handleChange,type:"text",id:"movie-title",className:g("form__input",{"form__input-red":n.description}),value:a,name:"description",placeholder:"Type description"}),l.a.createElement("span",{className:g("form__fill",{"form__fill-all":!n.description})},"Empty field"),l.a.createElement("label",{htmlFor:"movie-imgUrl",className:"form__label"},"imgUrl"),l.a.createElement("input",{onChange:this.handleChange,type:"text",id:"movie-imgUrl",className:g("form__input",{"form__input-red":n.imgUrl}),value:i,name:"imgUrl",placeholder:"Type imgUrl"}),l.a.createElement("span",{className:g("form__error-Url",{"form__right-Url":!n.imgUrl})},"Not valid"),l.a.createElement("label",{htmlFor:"movie-imdbUrl",className:"form__label"},"imdbUrl"),l.a.createElement("input",{onChange:this.handleChange,onBlur:this.onblur,type:"text",id:"movie-title",className:g("form__input",{"form__input-red":n.imdbUrl}),value:r,name:"imdbUrl",placeholder:"Type imdbUrl"}),l.a.createElement("span",{className:g("form__error-Url",{"form__right-Url":!n.imdbUrl})},"Not valid"),l.a.createElement("label",{htmlFor:"movie-imdbId",className:"form__label"},"imdbId"),l.a.createElement("input",{onChange:this.handleChange,type:"text",id:"movie-imdbId",className:g("form__input",{"form__input-red":n.imdbId}),value:m,name:"imdbId",placeholder:"Type imdbId"}),l.a.createElement("span",{className:g("form__fill",{"form__fill-all":!n.imdbId})},"Empty field"),l.a.createElement("button",{type:"submit",className:"form__button"},"Add"))}}]),t}(i.Component),_=a(11),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={movies:_},a.addMovie=function(e){a.setState((function(t){return{movies:[].concat(Object(n.a)(t.movies),[e])}}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.movies;return l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"page-content"},l.a.createElement(b,{movies:e})),l.a.createElement("div",{className:"sidebar"},l.a.createElement(v,{addMovie:this.addMovie})))}}]),t}(i.Component);m.a.render(l.a.createElement(U,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.83f67d03.chunk.js.map