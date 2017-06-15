<template>
  <div>
      <nav>
        <ul class="nav">
          <li class="left">
            <router-link to="/" class="tab">
              <i class="icon losewig_icon"></i>
              <span>减肥</span>
            </router-link>
          </li>
           <li>
            <router-link to="/friend" class="tab">
              <i class="icon friends_icon"></i>
              <span>伙伴</span>
            </router-link>
          </li>
           <li>
            <router-link to="/shop"class="tab">
              <i class="icon shop_icon"></i>
              <span>商店</span>
            </router-link>
          </li>
           <li>
            <router-link to="/me"class="tab">
              <i class="icon me_icon"></i>
              <span>我</span>
            </router-link>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.left{
  left:.375rem;
}
.icon{
    width:1.375rem;
    margin: auto ;
    display: block;
    height: 1.375rem;
    background-size: 100%;
}
.header{
	  height: 3.5rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
.nav{
    height:3.5rem;
  	position:fixed;
  	bottom:0;
    box-shadow: 0 -3px 4px rgba(0,0,0,.03);
	  width:100%;
    background: #fff;
    overflow: hidden;
    justify-content: space-around;
    display: flex
}
.nav li {
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
}
.nav li a {
  font-size: 12px;
  color: #a2a2a2;
}

.nav li.active {
  color: #508cee;
}
.losewig_icon{
    background-image: url(../assets/images/losewig.png);
}
.friends_icon{
    background-image: url(../assets/images/friends.png);
}
.shop_icon{
    background-image: url(../assets/images/shop.png);
}
.me_icon{
    background-image: url(../assets/images/me.png);
}

.losewig_icon:active {
    background-image: url(../assets/images/losewig_hover.png);
}
.nav li a.active i.friends_icon{
    background-image: url(../assets/images/friends_hover.png);
}
.nav li a.active i.shop_icon{
    background-image: url(../assets/images/shop_hover.png);
}
.nav li a.active i.me_icon{
    background-image: url(../assets/images/me_hover.png);
}
</style>
