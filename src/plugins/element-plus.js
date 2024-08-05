// src/plugins/element-plus.js
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"; // Mengimpor stylesheet Element Plus

export default function setupElementPlus(app) {
  app.use(ElementPlus);
}
