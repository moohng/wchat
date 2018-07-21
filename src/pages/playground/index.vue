<template>
  <div class="cell">
    <div class="hd">hd</div>
    <div class="bd">bdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbd</div>
    <div class="ft">ft</div>
  </div>
</template>

<style lang="scss" scoped>
.cell {
  padding: 20px 15px;
  border: 1px solid blue;
  white-space: nowrap;

  .hd, .bd {
    display: inline-block;
  }
  .bd, .ft {
    border: 1px solid #000;
  }
  .hd {
    width: 50px;
    height: 50px;
    background: darkcyan;
  }
  .bd {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ft {
    float: right;
  }
}
</style>

<script>
export default {
  name: 'playground'
}
</script>
