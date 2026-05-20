<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
});

const managerPopover = ref(null);
const isManagerVisible = ref(false);
const toggleManager = (event) => {
  managerPopover.value.toggle(event);
};

const langPopover = ref(null);
const isLangVisible = ref(false);
const toggleLang = (event) => {
  langPopover.value.toggle(event);
};

const languages = ref([
  { code: 'EN', name: 'EN', flag: '/images/flags/en.png' },
  { code: 'UA', name: 'UA', flag: '/images/flags/ua.png' },
  { code: 'RU', name: 'RU', flag: '/images/flags/ru.png' }
]);

const currentLangCode = ref('EN');

const currentLanguage = computed(() => {
  return languages.value.find(lang => lang.code === currentLangCode.value) || languages.value[0];
});

const selectLanguage = (code) => {
  currentLangCode.value = code;
  langPopover.value.hide();
};
</script>

<template>
  <header>
    <span class="title">{{ title }}</span>

    <div class="header-actions">
      <div class="contact-info" :class="{ active: isManagerVisible }" @click="toggleManager">
        <img :src="isManagerVisible ? '/images/contact-profile-active.png' : '/images/contact-profile.png'" alt=""/>
        <span class="contact-info__text">{{ $t('t.contact_your_manager') }}</span>
        <i class="pi pi-chevron-down"></i>
      </div>

      <div class="lang-selector" :class="{ active: isLangVisible }" @click="toggleLang">
        <img :src="currentLanguage.flag" :alt="currentLanguage.name" class="flag-icon" />
        <span class="lang-text">{{ currentLanguage.name }}</span>
        <i class="pi pi-chevron-down"></i>
      </div>

      <Popover ref="managerPopover" class="ch-popover" @show="isManagerVisible = true" @hide="isManagerVisible = false">
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

      <Popover ref="langPopover" class="ch-popover" @show="isLangVisible = true" @hide="isLangVisible = false">
        <div class="lang-card">
          <div
              v-for="lang in languages"
              :key="lang.code"
              class="lang-item"
              :class="{ 'lang-item--active': lang.code === currentLangCode }"
              @click="selectLanguage(lang.code)"
          >
            <img :src="lang.flag" :alt="lang.name" class="flag-icon" />
            <span class="lang-item__text">{{ lang.name }}</span>
          </div>
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

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-info {
  height: 48px;
  border-radius: 100px;
  border: 1px solid var(--Neutral-50);
  padding: 8px 16px;
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
      color: var(--primary-color, #ff5722);
      transform: rotate(180deg);
    }
  }
}

.lang-selector {
  width: 95px;
  height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border-left: 1px solid var(--Neutral-50);
  padding-left: 20px;
  margin-left: 8px;

  .flag-icon {
    width: 22px;
    height: 15px;
    object-fit: cover;
    border-radius: 2px;
  }

  .lang-text {
    font-weight: 600;
    font-size: 14px;
    margin-left: 8px;
    color: #000000;
  }

  i {
    font-size: 11px;
    font-weight: 600;
    margin-left: 8px;
    color: #000000;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform-origin: center center;
    transition: transform 0.25s ease, color 0.25s ease;
    transform: rotate(0deg);
  }

  &.active {
    i {
      color: var(--primary-color, #ff5722);
      transform: rotate(180deg);
    }
  }
}

.lang-card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  min-width: 140px;
  padding: 4px 0;
}

.lang-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 16px;
    right: 16px;
    height: 1px;
    background-color: #f3f4f6;
  }

  .flag-icon {
    width: 22px;
    height: 15px;
    object-fit: cover;
    border-radius: 2px;
  }

  &__text {
    font-size: 14px;
    font-weight: 500;
    margin-left: 12px;
    color: #000000;
    transition: color 0.2s ease;
  }

  &:hover {
    background-color: #f9fafb;
    .lang-item__text {
      color: var(--primary-color);
    }
  }

  &--active {
    .lang-item__text {
      color: var(--primary-color);
      font-weight: 600;
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

  &:last-child {
    border-bottom: none;
  }

  i {
    font-size: 18px;
    transition: color 0.25s ease;
    color: #9ca3af;
  }
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