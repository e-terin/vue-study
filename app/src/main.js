import { createApp } from 'vue'
import App from './App.vue'
import ComponentsUi from "@/components/ui/index";

// Создаем корневой компонент
const app = createApp(App)

// Автоподгружаем библиотеку компонентов
ComponentsUi.forEach(component=>{
    console.log(component)
    app.component(component.name, component)
})

// Монтируем основной компонент к диву
app.mount('#app')
