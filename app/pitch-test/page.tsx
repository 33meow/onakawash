import PitchLine from "../components/PitchLine";

export default function PitchTestPage() {
  return (
    <main
      style={{
        padding: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "40px",
      }}
    >
      <PitchLine reading="あめ" accent={1} />

      <PitchLine
        reading="さかな"
        accent={0}
        showContinuation
      />

      <PitchLine
        reading="おとこ"
        accent={3}
       showContinuation
      />

      <PitchLine reading="きょう" accent={1} />

      <PitchLine reading="がっこう" accent={0} />
    </main>
  );
}