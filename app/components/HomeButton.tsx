//import:把外面的代码拿进当前文件 Link:拿进来后，在当前文件使用的名字
import Link from "next/link";
import Image from "next/image";

type HomeButtonProps = {
  label: string;
};
export default function HomeButton(
  {label,}:HomeButtonProps
){
    return(
       <Link
  href="/"
  className="side-nav-item"
  aria-label={label}
  title={label}
>
                <Image 
                       src="/images/buttons/home.png"
                       alt=""
                       width={72}
                       height={72}
                       priority
                       className="side-nav-image"
                       style={{
                        display:"block",
                        width:"72px",
                        height:"72px",
                        objectFit:"contain",
                       }}/>
                       <span>{label}</span>
              </Link>
    );
}