<template>
  <div class="header-container">
    <div class="logo">
      <img src="@/assets/pic1.png" alt="Азербайджанская TPP" />
    </div>
    <div class="nav-items">
      <div @click="$emit('scrollTo', 'aboutUs')" class="nav-item">{{ $t('aboutUsTitle') }}</div>
      <div @click="$emit('scrollTo', 'scale')" class="nav-item">{{ $t('scaleTitle') }}</div>
      <div @click="$emit('scrollTo', 'history')" class="nav-item">{{ $t('historyTitle') }}</div>
      <div @click="$emit('scrollTo', 'repairs')" class="nav-item">{{ $t('repairsTitle') }}</div>
      <div @click="$emit('scrollTo', 'efficiency')" class="nav-item">{{ $t('efficiencyTitle') }}</div>
      <div @click="$emit('scrollTo', 'contactSection')" class="nav-item">{{ $t('contactTitle') }}</div>
    </div>
    <div class="lang-switch" @click="toggleLang">
      {{ currentLang === 'zh-CN' ? '🇨🇳' : '🇷🇺' }}
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      currentLang: 'en-US'
    };
  },
  methods: {
    toggleLang() {
      this.currentLang = this.currentLang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.$i18n.locale = this.currentLang;
    },
    scrollTo(ref) {
      if (ref === 'footer') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        this.$emit('scrollTo', ref);
      }
    }
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #001f3f;
}


.header {
  display: flex;
  align-items: center;
}

.nav-items {
  display: flex;
  gap: 20px;
}


.logo img {
  max-height: 40px;
}

.nav-item {
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  transition: color 0.3s, background-color 0.3s;
  color: #fff;
}

.nav-item:hover {
  color: #001f3f;
  background-color: #fff;
}

.lang-switch {
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-right: 10px;  /* 距离右侧一些距离 */
}

.lang-switch:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
