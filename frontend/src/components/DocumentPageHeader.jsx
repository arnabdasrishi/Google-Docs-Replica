import React, { useState } from "react";
import "../styles.css";
import { GiBackwardTime } from "react-icons/gi";
import {BiMessageDetail} from "react-icons/bi"
import {BsCameraVideo} from "react-icons/bs"
import {SlLock} from "react-icons/sl"
import {FaUserCircle} from "react-icons/fa"

const DocumentPageHeader = () => {
  const [stared, setStated] = useState(false);
  const [docName, setDocName] = useState("Untitled Document");

  return (
    <div className="main__header">
      <div className="header__left__doc__name">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1200px-Google_Docs_logo_%282014-2020%29.svg.png"
          alt="doc_icon"
        />

        <div>
          <div className="name__file__name">
            <input
              type="text"
              id="document__name"
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
            />
            <div className="star__doc" onClick={() => setStated(!stared)}>
              {stared ? <p>⭐</p> : <p>✰</p>}
            </div>
          </div>

          <div className="functionality__list__header">
            <div>
              <p>File</p>
              <div className="floating__lists1">
                <p>
                  New <span>⮞</span>
                </p>
                <p>
                  Open <span>Ctrl+O</span>
                </p>
                <p>Make a copy</p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Share <span>⮞</span>
                </p>
                <p>
                  Email <span>⮞</span>
                </p>
                <p>
                  Download <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Rename</p>
                <p>Move to trash</p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Version history <span>⮞</span>
                </p>
                <p>Make available offline</p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Details</p>
                <p>
                  Language <span>⮞</span>
                </p>
                <p>Page setup</p>
                <p>
                  Print <span>Ctrl+P</span>
                </p>
              </div>
            </div>

            <div>
              <p>Edit</p>
              <div className="floating__lists2">
                <p>
                  Undo <span>Ctrl+Z</span>
                </p>
                <p>
                  Redo <span>Ctrl+Y</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Cut a copy <span>Ctrl+X</span>
                </p>
                <p>
                  Copy <span>Ctrl+C</span>
                </p>
                <p>
                  Paste <span>Ctrl+V</span>
                </p>
                <p>
                  Paste without formatting <span>Ctrl+Shift+V</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Select All <span>Ctrl+A</span>
                </p>
                <p>Delete</p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Find and replace <span>Ctrl+H</span>
                </p>
              </div>
            </div>

            <div>
              <p>View</p>
              <div className="floating__lists3">
                <p>
                  Mode <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Show Print Layout</p>
                <p>Show Ruler</p>
                <p>
                  Show outline <span>Ctrl+Alt+A+H</span>
                </p>
                <p>Show equation toolbar</p>
                <p>
                  Show non printing characters <span>Ctrl+Shift+P</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Full Screen</p>
              </div>
            </div>

            <div>
              <p>Insert</p>
              <div className="floating__lists4">
                <p>
                  Image <span>⮞</span>
                </p>
                <p>
                  Table <span>⮞</span>
                </p>
                <p>
                  Drawing <span>⮞</span>
                </p>
                <p>Chart</p>
                <p>Horizonal Line</p>
                <p>Emoji</p>
                <p>Smart chip</p>
                <p>Dropdown</p>
                <p>
                  Footnote <span>Ctrl+Alt+F</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Building Blocks <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Special Characters</p>
                <p>Equation</p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Link <span>Ctrl+K</span>
                </p>
                <p>
                  Comment <span>Ctrl+Alt+M</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Bookmark</p>
                <p>
                  Table of contents <span>⮞</span>
                </p>
              </div>
            </div>

            <div>
              <p>Format</p>
              <div className="floating__lists5">
                <p>
                  Text <span>⮞</span>
                </p>
                <p>
                  Paragraph Styles <span>⮞</span>
                </p>
                <p>
                  Align & indent <span>⮞</span>
                </p>
                <p>
                  Line & paragraph spacing <span>⮞</span>
                </p>
                <p>
                  Columns <span>⮞</span>
                </p>
                <p>
                  Bullets & numbering <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Headers and footers</p>
                <p>Page numbers</p>
                <p>Page orientation</p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Table <span>⮞</span>
                </p>
                <p>
                  Image <span>⮞</span>
                </p>
                <p>
                  Borders and lines <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Clear formatting <span>Ctrl+l</span>
                </p>
              </div>
            </div>

            <div>
              <p>Tools</p>
              <div className="floating__lists6">
                <p>
                  Spelling and grammer <span>⮞</span>
                </p>
                <p>
                  Word count <span>Ctrl+Shift+C</span>
                </p>
                <p>
                  Review suggest edits <span>Ctrl+Alt+O</span>
                </p>
                <p>Compare documents</p>
                <p>Citations</p>
                <p>
                  Explore <span>Ctrl+Alt+Shit+I</span>
                </p>
                <p>Linked object</p>
                <p>
                  Dictionary <span>Ctrl+Shift+Y</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Translate document</p>
                <p>
                  Voice Typing <span>Ctrl+Shit+S</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Notification settings</p>
                <p>Preferences</p>
                <p>Accessibility</p>
              </div>
            </div>

            <div>
              <p>Extensions</p>
              <div className="floating__lists7">
                <p>
                  Add-ons <span>⮞</span>
                </p>
                <p>Apps Script</p>
              </div>
            </div>

            <div>
              <p>Help</p>
              <div className="floating__lists8">
                <input type="text" placeholder="Search in the menus (Alt+/)" />
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Help</p>
                <p>Training</p>
                <p>Updates</p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Help Docs improve</p>
                <p>Report abuse</p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>Privacy policy</p>
                <p>Terms of Service</p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  Keyboard shortcuts <span>Ctrl+/</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="header__right__doc__share">
            <GiBackwardTime size={30}/>
            <BiMessageDetail size={27}/>
            <BsCameraVideo size={27}/>
            <button><SlLock size={15}/> Share</button>
            <FaUserCircle size={35} color="#82d67a"/>
      </div>
    </div>
  );
};

export default DocumentPageHeader;
