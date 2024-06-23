<template>
  <div id="app">
    <Header @scrollTo="handleScrollTo" />
    <Banner />
  <InfoSection 
    ref="aboutUs"
    :imageSrc="lastImage"  
    titleKey="aboutUsTitle"
    descriptionKey="aboutUsDescription" 
    orientation="left" />
  <InfoSection 
    ref="scale"
    :imageSrc="scaleImage" 
    titleKey="scaleTitle"
    descriptionKey="scaleDescription" 
    orientation="right" />
  <InfoSection 
    ref="history"
    :imageSrc="historyImage"  
    titleKey="historyTitle"
    descriptionKey="historyDescription" 
    orientation="left" />
  <InfoSection 
    ref="repairs"
    :imageSrc="repairsImage" 
    titleKey="repairsTitle"
    descriptionKey="repairsDescription" 
    orientation="left" />
  <InfoSection 
    ref="efficiency"
    :imageSrc="efficiencyImage" 
    titleKey="efficiencyTitle"
    descriptionKey="efficiencyDescription" 
    orientation="right" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/SiteHeader.vue';
import Banner from '@/components/SiteBanner.vue';
import InfoSection from '@/components/InfoSection.vue';
import Footer from '@/components/SiteFooter.vue';

export default {
  mounted() {
    this.addAlternateLink();
  },
  data() {
    return {
      scaleImage: require('@/assets/00e3ee5d8e03bf800b5211b01e229a40.jpg'),
      historyImage: require('@/assets/3f2af7e7bbf05f0e5c74cb1289b6c2c7.jpg'),
      repairsImage: require('@/assets/0000004JFGJBNSJ283N011WYJ9.jpg'),
      efficiencyImage: require('@/assets/21ec5b85-5041-4fea-b4db-1bf06c946466.jpg'),
      lastImage: require('@/assets/94939650-a404-4d1e-a164-4483a40586ea.jpg')
    };
  },

  methods: {
    handleScrollTo(sectionId) {
      if (sectionId === 'contactSection') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        const section = this.$refs[sectionId];
        if (section && section.$refs.sectionRoot) {
          section.$refs.sectionRoot.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
      addAlternateLink() {
        const linkEn = document.createElement('link');
        linkEn.rel = 'alternate';
        linkEn.href = 'https://www.tpp-power.az/';
        linkEn.hreflang = 'ru-ru';
        
        document.head.appendChild(linkEn);
      }
  },

  components: {
    Header,
    Banner,
    InfoSection,
    Footer
  }
};
</script>
