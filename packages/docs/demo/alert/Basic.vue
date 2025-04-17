<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <xr-alert type="success">Success alert</xr-alert>
    <xr-alert type="info">Info alert</xr-alert>
    <xr-alert type="warning">Warning alert</xr-alert>
    <xr-alert type="danger">Error alert</xr-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <xr-alert type="success" title="Success alert" />
    <xr-alert type="info" title="Info alert" />
    <xr-alert type="warning" title="Warning alert" />
    <xr-alert type="danger" title="Error alert" />
  </div>
</template>
