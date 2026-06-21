//import:把外面的代码拿进当前文件 Link:拿进来后，在当前文件使用的名字
import Link from "next/link";
import Image from "next/image";

export default function HomeButton(){
    return(
        <Link 
              href="/"
              className="intro-home-link"
              aria-label="回到主页面"
              title="回到主页面">
                <Image 
                       src="/images/buttons/home.png"
                       alt=""
                       width={144}
                       height={144}
                       priority
                       className="intro-home-image"
                       style={{
                        display:"block",
                        width:"144px",
                        height:"144px",
                        objectFit:"contain",
                       }}/>
              </Link>
    );
}