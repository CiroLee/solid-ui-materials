import { type Component } from 'solid-js';
import style from './home.module.scss';
import SIcon from '@/components/SIcon';
import { A } from '@solidjs/router';
const Home: Component = () => {
  return (
    <div class={style.home} h-full flex flex-col flex-center>
      <div class={style['slogan']} flex flex-center flex-wrap overflow-hidden>
        <span font-bold text-32px>
          No
        </span>
        <span class={style['inline-code']}>install</span>
        <span font-bold text-32px>
          Hight
        </span>
        <span class={style['inline-code']}>re-useable</span>
        <span font-bold text-32px>
          Easy
        </span>
        <span mx-1>to modify</span>
        <span font-bold text-32px>
          Just
        </span>
        <span class={style['inline-code']}>copy</span> and <span class={style['inline-code']}>paste</span> codes to your
        project.
      </div>
      <div mt-12>
        <span mr-2>visit on</span>
        <A
          class="decoration-none text-inherit transition-all hover:text-blue-600"
          href="https://github.com/CiroLee/solid-ui-materials"
          target="_blank">
          <SIcon name="github-fill" size="22px" class="mr-1" />
          Github
        </A>
      </div>
    </div>
  );
};

export default Home;
