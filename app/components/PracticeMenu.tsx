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
         <div style={{ position: "relative" ,
            width: "100%"
         }}>
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
  <section
    aria-label={props.label}
    style={{
      position: "absolute",
      top: "0",
      left: "calc(100% + 12px)",
      zIndex: 200,
      width: "260px",
      padding: "16px",
      boxSizing: "border-box",
      backgroundColor: "#fffaf5",
      border: "1px solid #ead8d0",
      borderRadius: "8px",
      boxShadow: "0 12px 28px rgba(74, 43, 34, 0.18)",
    }}
  >
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
  </section>
)}
    </div>
    );
}