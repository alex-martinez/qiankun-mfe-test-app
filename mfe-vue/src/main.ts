import { type App as AppType, createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { name } from "../package.json";
import './style.css';
import App from './App.vue';
import { routes } from './routes';

let app: AppType | null = null;
let router;

const BASE_PATH = '/vue-micro';

const render = (props: any = {}) => {
  const { container } = props;

  router = createRouter({
    history: createWebHistory(BASE_PATH),
    routes,
  });

  const target: HTMLElement = container
    ? container.querySelector("#app")
    : document.querySelector("#app");

  app = createApp(App);
  app.use(router);
  app.mount(target);
};


if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log(`${name} bootstrap`);
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function mount(props: any) {
  console.log(`${name} mount`, props);
  render(props);
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function unmount(props: any) {
  console.log(`${name} unmount`, props);
  if (app) {
    app.unmount();
    app = null;
    router = null;
  }
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function update(props: any) {
  console.log(`${name} update`, props);
}
