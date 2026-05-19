<template>
  <div class="sidebar">
    <div class="logo">
      <img src="/images/logo.svg"/>
    </div>
    <nav>
      <ul>
        <li v-for="item in menuTop" :key="item.url">
          <router-link :to="{name: item.url}" class="item-menu">
            <img class="icon" alt="" :src="item.icon">
            <span class="name">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {i18n} from '@/main.js'

const menuTop = computed(() => [
  {name: i18n.global.t('t.menu.overviews'), url: "overviews", icon: "/images/icons/document.svg"},
  {name: i18n.global.t('t.menu.statistics'), url: "statistics", icon: "images/icons/graph.svg"},
  {name: i18n.global.t('t.menu.promo'), url: "promo", icon: "images/icons/promo.svg"},
  {name: i18n.global.t('t.menu.offers'), url: "offers", icon: "images/icons/shop.svg"},
])

</script>


<style scoped>
.sidebar {
  padding: 40px;

  .logo {
    width: 180px;
    text-align: center;
    margin-bottom: 20px;

    img {
      width: 100%;
    }
  }
}

.item-menu {
  display: flex;
  align-items: center;
  height: 44px;
  position: relative;
  margin-top: 16px;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 100px;
  transition: all 0.3s;

  .name {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
  }

  .icon {
    margin-right: 8px;
  }

  &:hover {
    cursor: pointer;
  }

  &.router-link-active {
    border: 1px solid #6A260A;
    background-color: #401C0D;
    .icon {
      filter: brightness(0) invert(35%) sepia(87%) saturate(4612%) hue-rotate(354deg) brightness(98%) contrast(106%);
    }
    .name{
      color: var(--primary-color);
    }
  }
}
</style>
