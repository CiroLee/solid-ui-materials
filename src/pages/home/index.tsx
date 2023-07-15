import { type Component } from 'solid-js';
import style from './home.module.scss';
import SIcon from '@/components/SIcon';
import { A } from '@solidjs/router';
const Home: Component = () => {
  return (
    <div class={style.home} h-full flex flex-col flex-center>
      <div class={style['slogan']}>
        <p>
          <span font-bold text-32px>
            No
          </span>
          <span class={style['inline-code']}>install</span>
        </p>
        <p>
          <span font-bold text-32px>
            Zero
          </span>
          <span class={style['inline-code']}>3rd dependencies</span>
        </p>
        <p>
          <span font-bold text-32px>
            Hight
          </span>
          <span class={style['inline-code']}>re-useable</span>
        </p>
        <div>
          <span font-bold text-32px>
            Easy
          </span>
          <span ml-1>to</span>
          <span class={style['inline-code']}>modify</span>
        </div>
        <p>
          <span font-bold text-32px>
            Just
          </span>
          <span class={style['inline-code']}>copy</span> and <span class={style['inline-code']}>paste</span> codes to
          your project.
        </p>
      </div>
      <A
        class="text-16px flex flex-center absolute top-4 right-4 decoration-none text-inherit transition-all 
        hover:text-blue-600"
        href="https://github.com/CiroLee/solid-ui-materials"
        target="_blank">
        <SIcon name="github-fill" size="22px" class="mr-1" />
        Github
      </A>
    </div>
  );
};

export default Home;
