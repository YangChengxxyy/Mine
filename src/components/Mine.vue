<template>
  <div class="row">
    <q-card class="col-6 offset-3">
      <q-form
          @submit="onSubmit"
          class="row justify-center items-center"
      >
        <div class="col-2 col-sm-6 col-md-2">
          <q-select
              v-model="difficulty"
              :options="difficultyList"
              label="选择游戏难度"
          />
        </div>
        <div class="col-2 col-sm-6 col-md-2">
          <q-btn class="col" label="开始游戏" type="submit" color="primary"/>
        </div>
      </q-form>
    </q-card>
    <q-card v-if="start">
      <div class="row">

      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {
      difficultyList: [{value: 10, label: '简单（10x10）'}, {value: 30, label: '中等（30x30）'}, {value: 100, label: '困难（100x100）'}],
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