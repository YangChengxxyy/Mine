<template>
  <div class="row">
    <q-card class="col-md-10 offset-md-1 col-xs-12 offset-xs-0">
      <q-form
          @submit="onSubmit"
          class="row items-center"
      >
        <div class="col-xs-5 offset-xs-1 col-md-2 offset-md-4">
          <q-select
              v-model="difficulty"
              :options="difficultyList"
              label="选择游戏难度"
          />
        </div>
        <div class="col-xs-4 offset-xs-2 col-md-2 offset-md-2">
          <q-btn label="开始游戏" type="submit" color="primary"/>
        </div>
      </q-form>
    </q-card>
    <q-card v-if="start" class="col-md-10 offset-md-1 col-xs-12 offset-xs-0">
      <div style="width: 100%;padding-top: 100%;height:0;">
        <div v-for="n in difficulty.value" :key="n">
          <div :style="{display: 'inline-block',border: 'solid 1px #1D1D1D',width:`${100/difficulty.value*0.9}%`,height:`${100/difficulty.value*0.9}%`,margin: `${100/difficulty.value*0.05}%`}" v-for="n in difficulty.value" :key="n">
            
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {
      difficultyList: [{value: 10, label: '简单（10x10）'}, {value: 30, label: '中等（30x30）'}],
      difficulty: null,
      start: false
    }
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: '开始游戏，祝好运'
      })
      this.start = true
    }
  }
}
</script>

<style scoped>
.center {
  margin: 2% 3%;
}
</style>