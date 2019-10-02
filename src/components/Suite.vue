<template>
  <div class="card p-3" :class="passed ? 'border-success' : 'border-danger'">
    <div>
      <em class="action text-info" @click="toggleSuite">{{showTests ? 'close':'view'}} suite</em>
    </div>
    <h1>
      <span class="mr-4">{{suite.name}}</span>
      <button class="btn btn-secondary" @click="suite.runTests.call(suite)">
        <span>Run Tests</span>
        <i v-if="suite.running" class="fa fa-fw fa-spin fa-spinner ml-2"></i>
      </button>
    </h1>
    <p>These tests use the following base URL: api/{{suite.path}}</p>
    <tests v-if="showTests" :tests="suite.tests" />
  </div>
</template>

<script>
import Tests from "./tests.vue";
export default {
  props: ["suite"],
  data() {
    return {
      showTests: true
    };
  },
  mounted() {
    this.showTests = JSON.parse(
      window.localStorage.getItem(`suite::${this.suite.name}`)
    );
  },
  computed: {
    passed() {
      return this.suite.tests.filter(t => t.success) == this.suite.tests.length;
    }
  },
  methods: {
    toggleSuite() {
      this.showTests = !this.showTests;
      window.localStorage.setItem(`suite::${this.suite.name}`, this.showTests);
    }
  },
  components: {
    Tests
  }
};
</script>