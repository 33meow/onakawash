"use client"

import Link from "next/link";


type PracticeMenuProps = {
    label:string;
     hiraganaLabel: string;
  katakanaLabel: string;
    isOpen: boolean;
  onToggle: () => void;
   
};

export default function PracticeMenu(props: PracticeMenuProps){
   
    return(
         <div style={{ position: "relative" }}>
     <button
  type="button"
  onClick={props.onToggle}
  className="side-nav-item"
  
> <img
  src="/images/buttons/practice.png"
  alt=""
  className="side-nav-image"
  style={{
    width: "76px",
    height: "76px",
    objectFit: "contain",
      marginLeft: "6px",
    marginRight: "0px",
  }}
/>
<span>{props.label}</span>
      </button>

    {props.isOpen && (
  <div  style={{
    position: "absolute",
    left: "100%",
    top: "0",
    minWidth: "260px",
    padding: "16px",
    backgroundColor: "#fffaf0",
    border: "1px solid #eadfce",
    borderRadius: "24px",
    boxShadow: "0 18px 40px rgba(59, 36, 28, 0.16)",
    zIndex: 50,
  }}>
    <Link href="/practice/hiragana"
   
     style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 12px",
    borderRadius: "16px",
    color: "#3b241c",
    textDecoration: "none",
    fontWeight: 700,
  }}>
      
      <span>{props.hiraganaLabel}</span>
    </Link>

    <Link
  href="/practice/katakana"
 
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 12px",
    borderRadius: "16px",
    color: "#3b241c",
    textDecoration: "none",
    fontWeight: 700,
  }}
>
      
      <span>{props.katakanaLabel}</span>
    </Link>
  </div>
)}
    </div>
    );
}