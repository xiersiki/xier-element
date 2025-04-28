<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <xr-tooltip class="box-item" content="Top Left prompts info" placement="top-start">
        <xr-button>top-start</xr-button>
      </xr-tooltip>
      <xr-tooltip class="box-item" content="Top Center prompts info" placement="top">
        <xr-button>top</xr-button>
      </xr-tooltip>
      <xr-tooltip class="box-item" content="Top Right prompts info" placement="top-end">
        <xr-button>top-end</xr-button>
      </xr-tooltip>
    </div>
    <div class="row">
      <xr-tooltip class="box-item" content="Left Top prompts info" placement="left-start">
        <xr-button>left-start</xr-button>
      </xr-tooltip>
      <xr-tooltip class="box-item" content="Right Top prompts info" placement="right-start">
        <xr-button>right-start</xr-button>
      </xr-tooltip>
    </div>
    <div class="row">
      <xr-tooltip class="box-item" content="Left Center prompts info" placement="left">
        <xr-button class="mt-3 mb-3">left</xr-button>
      </xr-tooltip>
      <xr-tooltip class="box-item" content="Right Center prompts info" placement="right">
        <xr-button>right</xr-button>
      </xr-tooltip>
    </div>
    <div class="row">
      <xr-tooltip class="box-item" content="Left Bottom prompts info" placement="left-end">
        <xr-button>left-end</xr-button>
      </xr-tooltip>
      <xr-tooltip class="box-item" content="Right Bottom prompts info" placement="right-end">
        <xr-button>right-end</xr-button>
      </xr-tooltip>
    </div>
    <div class="row center">
      <xr-tooltip class="box-item" content="Bottom Left prompts info" placement="bottom-start">
        <xr-button>bottom-start</xr-button>
      </xr-tooltip>
      <xr-tooltip class="box-item" content="Bottom Center prompts info" placement="bottom">
        <xr-button>bottom</xr-button>
      </xr-tooltip>
      <xr-tooltip class="box-item" content="Bottom Right prompts info" placement="bottom-end">
        <xr-button>bottom-end</xr-button>
      </xr-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}

.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tooltip-base-box .center {
  justify-content: center;
}

.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
