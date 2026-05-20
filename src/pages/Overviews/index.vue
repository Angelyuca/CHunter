<script setup>

import Header from "@/components/header.vue";

const listOffers = [
  {}, {},{},{},{}
]
</script>

<template>
  <div class="work-space">
    <Header title="Welcome, Jennifer Lucas!"/>

    <div class="container" style="margin-bottom: 16px">
      <div class="container__header"><span class="container__title">General info</span></div>
      <div class="container__info">
        <div class="card" v-for="info in 4" :key="info">
          <span class="card__title">Payment amount</span>
          <span class="card__value">$123</span>
        </div>
      </div>
    </div>

    <div class="container flex-shrink-container">
      <div class="container__header">
        <span class="container__title">Top Offers</span>
        <Button label="View all" class="ch-btn ch-btn-small" severity="secondary"/>
      </div>

      <div class="flex-shrink-container">
        <DataTable :value="listOffers" class="offer-list" :showHeaders="false" scrollable scrollHeight="flex">
          <Column field="category">
            <template #body="slotProps">img</template>
          </Column>
          <Column field="trafficSource">
            <template #body="slotProps">Admiral Shark</template>
          </Column>
          <Column field="cpaAllowedGeos">
            <template #body="slotProps">PL</template>
          </Column>
          <Column field="" style="text-align:end">
            <template #body="slotProps">
              <Button :label="$t ? $t('t.request') : 't.request'" class="ch-btn ch-btn-orange" style="width:138px"/>
            </template>
          </Column>
        </DataTable>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: var(--Neutral-50);
  width: 100%;
  border-radius: 20px;
  padding: 24px;
  box-sizing: border-box;

  &__header {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
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


::v-deep(.offer-list) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;

  .p-datatable-wrapper {
    flex: 1;
    min-height: 0;
  }

  .p-datatable-empty-message {
    display: none;
  }

  table {
    border-spacing: 0 8px;
    border-collapse: separate;
  }

  tr {
    border-radius: 12px;
    height: 102px;
  }

  th {
    border: none;
  }

  tr:hover {
    td {
      border-color: var(--primary-color);
      cursor: pointer;
      transition: 0.6s;
      background: #DC2E700D;
    }
  }

  td {
    border-color: transparent;
    border-style: solid;
    border-width: 1px 0;
    transition: 0.2s;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    vertical-align: middle;

    &:first-child {
      border-left-width: 1px;
      border-radius: 12px 0 0 12px;
    }

    &:last-child {
      border-right-width: 1px;
      border-radius: 0 12px 12px 0;
    }
  }
}

</style>
