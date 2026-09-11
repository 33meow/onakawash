//从网址取出练习编号，交给答题组件。

import AdaptiveReviewSessionPanel from "../../../components/AdaptiveReviewSessionPanel";

export default async function AdaptiveReviewPage({
  params,
}: {
  params: Promise<{ sessionKey: string }>;
}) {
  const { sessionKey } = await params;

  return (
    <AdaptiveReviewSessionPanel
      key={sessionKey}
      sessionKey={sessionKey}
    />
  );
}