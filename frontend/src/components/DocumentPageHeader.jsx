import React, { useState } from "react";
import "../styles.css";

const DocumentPageHeader = () => {
  const [stared, setStated] = useState(false);

  return (
    <div>
      <div className="header__left__doc__name">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1200px-Google_Docs_logo_%282014-2020%29.svg.png"
          alt="doc_icon"
        />

        <div>
          <div className="name__file__name">
            <p>Untitled Document</p>
            <div className="star__doc" onClick={() => setStated(!stared)}>
              {stared ? <p>⭐</p> : <p>✰</p>}
            </div>
          </div>

          <div className="functionality__list__header">
            <div>
              <p>File</p>
              <div className="floating__lists1">
                <p>New</p>
                <p>Open</p>
                <p>Make a copy</p>
                <p>Share</p>
                <p>Email</p>
                <p>Download</p>
              </div>
            </div>

            <div>
              <p>Edit</p>
              <div className="floating__lists2">
                <p>Undo</p>
                <p>Redo</p>
                <p>Cut a copy</p>
                <p>Copy</p>
                <p>Paste</p>
                <p>Paste without formatting</p>
              </div>
            </div>

            <div>
              <p>View</p>
              <div className="floating__lists3">
                <p>Mode</p>
                <p>Show Print Layout</p>
                <p>Show Ruler</p>
                <p>Show outline</p>
                <p>Show equation toolbar</p>
                <p>Show non printing characters</p>
                <p>Full Screen</p>
              </div>
            </div>

            <div>
              <p>Insert</p>
              <div className="floating__lists4">
                <p>Mode</p>
                <p>Show Print Layout</p>
                <p>Show Ruler</p>
                <p>Show outline</p>
                <p>Show equation toolbar</p>
                <p>Show non printing characters</p>
                <p>Full Screen</p>
              </div>
            </div>

            <div>
              <p>Format</p>
              <div className="floating__lists5">
                <p>Mode</p>
                <p>Show Print Layout</p>
                <p>Show Ruler</p>
                <p>Show outline</p>
                <p>Show equation toolbar</p>
                <p>Show non printing characters</p>
                <p>Full Screen</p>
              </div>
            </div>

            <div>
              <p>Tools</p>
              <div className="floating__lists6">
                <p>Mode</p>
                <p>Show Print Layout</p>
                <p>Show Ruler</p>
                <p>Show outline</p>
                <p>Show equation toolbar</p>
                <p>Show non printing characters</p>
                <p>Full Screen</p>
              </div>
            </div>
            
            <div>
              <p>Extensions</p>
              <div className="floating__lists7">
                <p>Mode</p>
                <p>Show Print Layout</p>
                <p>Show Ruler</p>
                <p>Show outline</p>
                <p>Show equation toolbar</p>
                <p>Show non printing characters</p>
                <p>Full Screen</p>
              </div>
            </div>

            <div>
              <p>Help</p>
              <div className="floating__lists8">
                <p>Mode</p>
                <p>Show Print Layout</p>
                <p>Show Ruler</p>
                <p>Show outline</p>
                <p>Show equation toolbar</p>
                <p>Show non printing characters</p>
                <p>Full Screen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__right__doc__share"></div>
    </div>
  );
};

export default DocumentPageHeader;
