import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import { name } from "../package.json";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

let root: Root;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const render = (props: any = {}) => {
  const container = props?.container
    ? props.container.querySelector("#root")
    : document.getElementById("root");

  root = createRoot(container);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log(`${name} bootstrap`);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function mount(props: any) {
  console.log(`${name} mount`, props);
  render(props);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function unmount(props: any) {
  console.log(`${name} unmount`, props);
  root.unmount();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function update(props: any) {
  console.log(`${name} update`, props);
}