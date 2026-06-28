import type { PronunciationGuide } from "../data/pronunciationGuides";

type PronunciationGuidePanelProps = {
  selectedKana: string | null;
  selectedGuide: PronunciationGuide | null;
};

export default function PronunciationGuidePanel(
  props: PronunciationGuidePanelProps
) {
  return (
    <aside
      style={{
        position: "sticky",
        top: "16px",
        alignSelf: "start",
        backgroundColor: "#f6f2e8",
        borderLeft: "1px solid #eadfce",
        padding: "26px 28px",
      }}
    >
      {props.selectedKana ? (
        props.selectedGuide ? (
          <>
  <div style={{ textAlign: "center", marginBottom: "28px" }}>
    <p
      style={{
        fontSize: "72px",
        margin: "0",
        lineHeight: "1",
        color: "#2f2435",
        fontWeight: "600",
      }}
    >
      {props.selectedGuide.kana}
    </p>

    <p
      style={{
        margin: "12px 0 0",
        color: "#6f5a4e",
        fontSize: "16px",
        lineHeight: "1.6",
        fontWeight: "700",
      }}
    >
      {props.selectedGuide.hepburnRomaji}
    </p>
  </div>

  {props.selectedGuide.mouthImageSrc ? (
    <img
      src={props.selectedGuide.mouthImageSrc}
      alt={`${props.selectedGuide.kana} mouth shape`}
      style={{
        display: "block",
        width: "100%",
        maxWidth: "220px",
        margin: "0 auto 16px",
        borderRadius: "12px",
      }}
    />
  ) : null}

  <p
    style={{
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#4a2b22",
      margin: "0 0 28px",
    }}
  >
    {props.selectedGuide.pronunciationTip}
  </p>

  {props.selectedGuide.strokeHintImageSrc ? (
    <img
      src={props.selectedGuide.strokeHintImageSrc}
      alt={`${props.selectedGuide.kana} stroke hint`}
      style={{
        display: "block",
        width: "100%",
        maxWidth: "220px",
        margin: "0 auto 8px",
        borderRadius: "12px",
      }}
    />
  ) : null}

  <p
    style={{
      fontSize: "13px",
      lineHeight: "1.6",
      color: "#8a7c72",
      margin: "0",
      textAlign: "center",
    }}
  >
    {props.selectedGuide.strokeHint}
  </p>
</>
        ) : (
          <p>Guide not ready for this kana yet.</p>
        )
      ) : (
        <p>Click a kana to see pronunciation tips.</p>
      )}
    </aside>
  );
}