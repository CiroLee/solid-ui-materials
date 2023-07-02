import { type Component, createSignal } from 'solid-js';
import style from './home.module.scss';
const Home: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class={style.home}>
      <p>{count()}</p>
      <button onClick={() => setCount(() => count() + 1)}>count++</button>
    </div>
  );
};

export default Home;
