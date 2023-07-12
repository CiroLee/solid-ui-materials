import { type Component } from 'solid-js';
import style from './home.module.scss';
const Home: Component = () => {
  return (
    <div class={style.home} h-full flex flex-center>
      <div class={style['slogan']} flex flex-center flex-wrap>
        <span font-bold text-32px>
          No
        </span>
        <span class={style['inline-code']}>install</span>
        <span font-bold text-32px>
          Hight
        </span>
        <span class={style['inline-code']}>re-useable</span>
        <span font-bold text-32px>
          Just
        </span>
        <span class={style['inline-code']}>copy</span> and <span class={style['inline-code']}>paste</span> codes to your
        project.
      </div>
    </div>
  );
};

export default Home;
