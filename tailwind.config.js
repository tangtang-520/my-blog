module.exports = {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
     
    }
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // 用来指定是否启用多主题支持。如果设置为false，只会包含默认的亮色和暗色主题。如果设置为true，会包含所有的主题。如果设置为一个数组，可以指定特定的主题，比如["light", "dark", "cupcake"]。
    darkTheme: "light", // 指定默认的暗色主题名称。这是在启用多主题支持时使用的。
    base: true, // 为根元素应用背景色和前景色。
    styled: true, // 为所有组件包含DaisyUI的颜色和设计决策。
    utils: true, // 添加响应式和修改器的实用类
    prefix: "", // 用于DaisyUI类名的前缀。可以根据需要指定一个前缀，用于避免与其他类名冲突
    logs: true, // 会在构建CSS时在控制台显示有关DaisyUI版本和使用的配置的信息
    themeRoot: ":root", //用于接收主题颜色CSS变量的元素选择器
  },
};
