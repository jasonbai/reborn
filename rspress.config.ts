import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'reborn life',
  description: '我们相信通过学习获得重生,对我们来说，七年就是一辈子',
  icon: '/avatar.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  base: '/reborn/',
	builderConfig: {
		output: {
			// 给所有 static 目录下的静态文件引用添加前缀以便能够正确访问
			assetPrefix: '/reborn/'
		}
	},
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/jasonbai' },
    ],
  },
});
