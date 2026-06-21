//import:把外面的代码拿进当前文件 Link:拿进来后，在当前文件使用的名字
import Link from "next/link";
import Image from "next/image";

export default function HomeButton(){
    return(
        <Link 
        style={{
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#4a2b22",
  textDecoration: "none",
  fontWeight: "700",
}}
              href="/"
              className="intro-nav-item"
              aria-label="回到主页面"
              title="回到主页面">
                <Image 
                       src="/images/buttons/home.png"
                       alt=""
                       width={72}
                       height={72}
                       priority
                       className="intro-nav-image"
                       style={{
                        display:"block",
                        width:"72px",
                        height:"72px",
                        objectFit:"contain",
                       }}/>
                       <span>回到主页面</span>
              </Link>
    );
}