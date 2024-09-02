<template>
  <div class="footer">
    <div>{{ $t('companyName') }}</div>
    <div>{{ $t('address') }}Мингоцяо</div>
    <div>{{ $t('email') }}g.m.pashirov@outlook.com</div>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter'
};
</script>

<style>
.footer {
  background-color: #001f3f; /*深蓝色*/
  color: #fff;
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
