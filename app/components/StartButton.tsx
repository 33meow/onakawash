// Link 是 Next.js 提供的页面跳转组件
import Link from "next/link";

// Props = 父组件传给子组件的数据
// text：按钮中间显示的文字，比如 进入 / Start / 시작
type StartButtonProps = {
  text: string;
};

// StartButton 只负责首页的海绵开始按钮
// 它不负责语言切换，也不负责整个主页布局
export default function StartButton({ text }: StartButtonProps) {
  return (
    <Link
      href="/intro"
      className="spongeButton"
      aria-label={text}
      style={{
        position: "absolute",
        right: "45%",
        bottom: "0.1%",
        display: "block",
        width: "20%",
        minWidth: "90px",
        textDecoration: "none",
      }}
    >
      {/* 普通状态的海绵图片 */}
      <img
        className="spongeNormal"
        src="/images/buttons/sponge-normal.png"
        alt=""
        aria-hidden="true"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* 鼠标悬浮时显示的海绵图片 */}
      <img
        className="spongeHover"
        src="/images/buttons/sponge-hover.png"
        alt=""
        aria-hidden="true"
        style={{
          width: "100%",
          height: "auto",
          display: "none",
        }}
      />

      {/* 这一层文字盖在海绵图片上 */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "clamp(14px, 2vw, 24px)",
          fontWeight: "bold",
          color: "#5b3a42",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </Link>
  );
}