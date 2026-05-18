<script setup>

</script>

<template>
  <div class="container">
    <div style="margin-bottom: 24px">
      <h3>Welcome, Jennifer Lucas!</h3>
    </div>
    <div class="block" style="margin-bottom: 16px">
      <div class="block__title">General info</div>
      <div class="block__info">
        <div class="card" v-for="info in 4">
          <span class="card__title">Payment amount</span>
          <span class="card__value">$123</span>
        </div>
      </div>
    </div>

    <div class="block test">
      <div class="block__title">Top Offers</div>

        <div class="row" v-for="info in 4">

        </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.block {
  background-color: #EFEDEC;
  width: 100%;
  border-radius: 20px;
  padding: 24px;


  &__title {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
}

.card {
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 10px 15px 0 #00000005;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  &__title {
    font-weight: 400;
    color: #878787;
    line-height: 24px;
    margin-bottom: 10px;
  }
  &__value {
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
    text-transform: uppercase;

  }
}
.test{
  flex: 1;
  overflow: auto;
}
.row{
  width: 100%;
  height: 102px;
  background-color: #ffffff;
  border-radius: 12px;
margin-bottom: 8px;
}
</style>