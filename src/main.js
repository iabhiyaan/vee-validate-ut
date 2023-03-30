import { createApp } from 'vue'
import App from './App.vue'

import {defineRule} from 'vee-validate'

import { required } from '@vee-validate/rules'

defineRule('required', required)

createApp(App).mount('#app')
