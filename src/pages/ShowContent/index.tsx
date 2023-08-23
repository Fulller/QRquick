import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowContent.scss";
import { getTextContent } from "../../services/qrcode.service";
import { featureName } from "../../constans/featureName.const";

const ShowContent: FC = () => {
  const { type, id } = useParams();
  const [content, setContent] = useState<any>(null);
  useEffect(() => {
    switch (type) {
      case featureName.TEXT: {
        (async function () {
          if (!id) return;
          const { metadata } = await getTextContent(id);
          setContent(metadata);
        })();
        break;
      }
    }
  }, [type, id]);
  return (
    <main id="show-content-page">
      {type === featureName.TEXT && (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </main>
  );
};

export default ShowContent;
