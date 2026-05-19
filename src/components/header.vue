<script setup>
import {ref} from "vue";

const props = defineProps({
  title: {
    type: String,
  },
})
const myPopover = ref(null);
const visibilityPopover = ref(false);
const togglePopover = (event) => {
  myPopover.value.toggle(event);
};
</script>

<template>
  <header>
    <span class="title">{{ title }}</span>
    <div>
      <div class="contact-info" :class="visibilityPopover? 'active': ''" @click="togglePopover">
        <img :src="visibilityPopover? '/images/contact-profile-active.png': '/images/contact-profile.png'" alt=""/>
        <span class="contact-info__text">{{ $t('t.contact_your_manager') }}</span>
        <i class="pi pi-chevron-down"></i>
      </div>
      <Popover ref="myPopover" class="ch-popover" @show="visibilityPopover=true" @hide="visibilityPopover=false">
        <div class="contacts-card">
          <a href="https://t.me/traffic_cake" target="_blank" class="contact-item">
            <i class="pi pi-telegram icon-tg"></i>
            <span class="contact-text">@traffic_cake</span>
          </a>

          <a href="https://wa.me/traffic_cake" target="_blank" class="contact-item">
            <i class="pi pi-whatsapp icon-wa"></i>
            <span class="contact-text">@traffic_cake</span>
          </a>

          <a href="mailto:jenniferlucas@gmail.com" class="contact-item">
            <i class="pi pi-envelope icon-email"></i>
            <span class="contact-text">jenniferlucas@gmail.com</span>
          </a>

        </div>
      </Popover>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
}

.contact-info {
  height: 48px;
  border-radius: 100px;
  border: 1px solid var(--Neutral-50);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.25s;

  &__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-left: 8px;
  }

  i {
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
    margin-right: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform-origin: center center;
    transition: transform 0.25s ease, color 0.25s ease;
    transform: rotate(0deg);
  }

  &.active {
    border: 1px solid #FFE2D6;

    i {
      color: var(--primary-color);
      transform: rotate(180deg);
    }
  }

}

.contacts-card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  overflow: hidden;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  text-decoration: none;
  border-bottom: 1px solid #f3f4f6;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item i {
  font-size: 18px;
  transition: color 0.25s ease;
  color: #9ca3af;
}

.contact-text {
  color: #000000;
  font-weight: 500;
  transition: color 0.25s ease;
}

.contact-item:hover {
  i, .contact-text {
    color: var(--primary-color) !important;
  }
}

</style>
