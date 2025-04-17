<template>
  <div>
    <xr-button type="primary" loading>Loading</xr-button>
    <xr-button type="primary" loading-icon="circle-notch" loading>Loading</xr-button>
    <xr-button type="primary" loading>
      <template #loading>
        <xr-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </xr-button>
  </div>
</template>
