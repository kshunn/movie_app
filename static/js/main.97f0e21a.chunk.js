(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{34:function(e,t,a){e.exports=a(67)},39:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),s=a(7),i=a(6);a(39);var m=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"About"))},l=a(16),u=a.n(l),p=a(30),v=a(10),d=a(11),E=a(13),f=a(12),h=a(14),y=a(31),b=a.n(y);a(58);var g=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,c=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(s.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:o,poster:c,genres:i}}},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},n),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},o.slice(0,140),"..."))))},_=(a(64),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component)),N=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),t}(r.a.Component);a(65);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/about"},"About"))};a(66);var O=function(){return r.a.createElement(s.a,null,r.a.createElement(j,null),r.a.createElement(i.a,{path:"/",exact:!0,component:_}),r.a.createElement(i.a,{path:"/about",component:m}),r.a.createElement(i.a,{path:"/movie/:id",component:N}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.97f0e21a.chunk.js.map