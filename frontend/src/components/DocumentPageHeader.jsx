import React, { useState } from "react";
import "../styles.css";
import { GiBackwardTime } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { SlLock } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";

import { HiDocumentText } from "react-icons/hi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineFileCopy } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineDriveFileMove } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { BiCut } from "react-icons/bi";
import { FaRegCopy } from "react-icons/fa";
import { MdContentPaste } from "react-icons/md";
import { MdOutlineContentPasteOff } from "react-icons/md";
import { MdSelectAll } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdFindReplace } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { VscBlank } from "react-icons/vsc";
import { BiFullscreen } from "react-icons/bi";
import { FiImage } from "react-icons/fi";
import { BsTable } from "react-icons/bs";
import { GoScreenFull } from "react-icons/go";
import { AiOutlineBarChart } from "react-icons/ai";
import { MdTrendingFlat } from "react-icons/md";
import { BsEmojiLaughing } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsTextRight } from "react-icons/bs";
import { GiStoneBlock } from "react-icons/gi";
import { RiOmega } from "react-icons/ri";
import { TbMathPi } from "react-icons/tb";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiBold } from "react-icons/bi";
import { ImParagraphJustify } from "react-icons/im";
import { CiTextAlignRight } from "react-icons/ci";
import { RxTextAlignMiddle } from "react-icons/rx";
import { TbColumns } from "react-icons/tb";
import { BsListStars } from "react-icons/bs";
import { ImPageBreak } from "react-icons/im";
import { BsHash } from "react-icons/bs";
import { TbFileOrientation } from "react-icons/tb";
import { AiOutlineFileImage } from "react-icons/ai";
import { AiOutlineDash } from "react-icons/ai";
import { FaRemoveFormat } from "react-icons/fa";
import { MdSpellcheck } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlineRateReview } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";
import { ImQuotesRight } from "react-icons/im";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { FiLink2 } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { TbLanguageKatakana } from "react-icons/tb";
import { BsMic } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import { ImAccessibility } from "react-icons/im";
import { AiFillFolderAdd } from "react-icons/ai";
import { DiAppstore } from "react-icons/di";
import { BiHelpCircle } from "react-icons/bi";
import { SiGooglescholar } from "react-icons/si";
import { FaBroadcastTower } from "react-icons/fa";
import { AiOutlineFileExclamation } from "react-icons/ai";
import { BsExclamationTriangle } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { BsKeyboard } from "react-icons/bs";

const DocumentPageHeader = () => {
  const [stared, setStated] = useState(false);
  const [docName, setDocName] = useState("Untitled Document");

  const changeDocTitle = (e) => {
    setDocName(e.target.value);
    document.title = `${docName} - Google Docs`;
  };

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
              onChange={changeDocTitle}
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
                  <span>
                    <HiDocumentText />
                    New
                  </span>
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <AiOutlineFolderOpen />
                    Open
                  </span>
                  <span>Ctrl+O</span>
                </p>
                <p>
                  {" "}
                  <span>
                    <MdOutlineFileCopy /> Make a copy
                  </span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <FiUserPlus /> Share
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <AiOutlineMail /> Email
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <BsDownload /> Download
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <MdOutlineDriveFileRenameOutline /> Rename
                  </span>
                </p>
                <p>
                  <span>
                    <MdOutlineDriveFileMove /> Move
                  </span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <RxCountdownTimer />
                    Version history
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <BsCheckCircle /> Make available offline
                  </span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <AiOutlineInfoCircle /> Details
                  </span>
                </p>
                <p>
                  <span>
                    <TfiWorld /> Language
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <HiOutlineDocumentText />
                    Page setup
                  </span>
                </p>
                <p>
                  <span>
                    <AiFillPrinter /> Print
                  </span>{" "}
                  <span>Ctrl+P</span>
                </p>
              </div>
            </div>

            <div>
              <p>Edit</p>
              <div className="floating__lists2">
                <p>
                  <span>
                    <BiUndo /> Undo
                  </span>
                  <span>Ctrl+Z</span>
                </p>
                <p>
                  <span>
                    <BiRedo /> Redo
                  </span>{" "}
                  <span>Ctrl+Y</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <BiCut /> Cut
                  </span>{" "}
                  <span>Ctrl+X</span>
                </p>
                <p>
                  <span>
                    <FaRegCopy /> Copy
                  </span>{" "}
                  <span>Ctrl+C</span>
                </p>
                <p>
                  <span>
                    <MdContentPaste /> Paste
                  </span>{" "}
                  <span>Ctrl+V</span>
                </p>
                <p>
                  <span>
                    <MdOutlineContentPasteOff /> Paste without formatting
                  </span>{" "}
                  <span>Ctrl+Shift+V</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <MdSelectAll /> Select All
                  </span>{" "}
                  <span>Ctrl+A</span>
                </p>
                <p>
                  <span>
                    <RiDeleteBin6Line /> Delete
                  </span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <MdFindReplace /> Find and replace
                  </span>{" "}
                  <span>Ctrl+H</span>
                </p>
              </div>
            </div>

            <div>
              <p>View</p>
              <div className="floating__lists3">
                <p>
                  <span>
                    <BsPencil /> Mode
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <AiOutlineCheck />
                    Show print layout
                  </span>
                </p>
                <p>
                  <span>
                    <AiOutlineCheck /> Show ruler
                  </span>
                </p>
                <p>
                  <span>
                    <AiOutlineCheck /> Show outline
                  </span>{" "}
                  <span>Ctrl+Alt+A+H</span>
                </p>
                <p>
                  {" "}
                  <span>
                    <VscBlank /> Show equation toolbar
                  </span>
                </p>
                <p>
                  <span>
                    <VscBlank /> Show non-printing characters
                  </span>{" "}
                  <span>Ctrl+Shift+P</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <BiFullscreen /> Full screen
                  </span>
                </p>
              </div>
            </div>

            <div>
              <p>Insert</p>
              <div className="floating__lists4">
                <p>
                  <span>
                    <FiImage /> Image
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <BsTable /> Table
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <GoScreenFull /> Drawing
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <AiOutlineBarChart /> Chart
                  </span>
                </p>
                <p>
                  <span>
                    <MdTrendingFlat /> Horizonal Line
                  </span>
                </p>
                <p>
                  <span>
                    <BsEmojiLaughing /> Emoji
                  </span>
                </p>
                <p>
                  <span>
                    <BiServer /> Smart Chip
                  </span>
                </p>
                <p>
                  <span>
                    <IoIosArrowDropdown /> Dropdown
                  </span>
                </p>
                <p>
                  <span>
                    <BsTextRight /> Footnote
                  </span>{" "}
                  <span>Ctrl+Alt+F</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <GiStoneBlock /> Building blocks
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <RiOmega /> Special characters
                  </span>
                </p>
                <p>
                  <span>
                    <TbMathPi /> Equation
                  </span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <BsLink45Deg /> Link
                  </span>{" "}
                  <span>Ctrl+K</span>
                </p>
                <p>
                  <span>
                    <AiOutlineFolderAdd /> Comment
                  </span>{" "}
                  <span>Ctrl+Alt+M</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <BsBookmark /> Bookmark
                  </span>
                </p>
                <p>
                  <span>
                    <AiOutlineUnorderedList /> Table of contents
                  </span>{" "}
                  <span>⮞</span>
                </p>
              </div>
            </div>

            <div>
              <p>Format</p>
              <div className="floating__lists5">
                <p>
                  <span>
                    <BiBold /> Text
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <ImParagraphJustify /> Paragraph styles
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <CiTextAlignRight /> Align & indent
                  </span>
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <RxTextAlignMiddle /> Line & paragraph spacing
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <TbColumns /> Columns
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <BsListStars /> Bullets & Numbering
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <ImPageBreak /> Headers & footers
                  </span>
                </p>
                <p>
                  <span>
                    <BsHash /> Page numbers
                  </span>
                </p>
                <p>
                  <span>
                    <TbFileOrientation /> Page orientation
                  </span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <BsTable /> Table
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <AiOutlineFileImage /> Image
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <AiOutlineDash /> Borders & line
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <FaRemoveFormat /> Clear Formatting
                  </span>{" "}
                  <span>Ctrl+\</span>
                </p>
              </div>
            </div>

            <div>
              <p>Tools</p>
              <div className="floating__lists6">
                <p>
                  <span>
                    <MdSpellcheck /> Spelling and grammar
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <TiDocumentText /> Word count
                  </span>{" "}
                  <span>Ctrl+Shift+C</span>
                </p>
                <p>
                  <span>
                    <MdOutlineRateReview /> Review suggested edits
                  </span>{" "}
                  <span>Ctrl+Alt+O</span>
                </p>
                <p>
                  <span>
                    <MdCompareArrows /> Compare documents
                  </span>
                </p>
                <p>
                  <span>
                    <ImQuotesRight /> Citations
                  </span>
                </p>
                <p>
                  <span>
                    <HiOutlineDocumentAdd /> Explore
                  </span>{" "}
                  <span>Ctrl+Alt+Shit+I</span>
                </p>
                <p>
                  <span>
                    <FiLink2 /> Linked objects
                  </span>
                </p>
                <p>
                  <span>
                    <AiOutlineFileSearch /> Dictionary
                  </span>{" "}
                  <span>Ctrl+Shift+Y</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <TbLanguageKatakana /> Translate document
                  </span>
                </p>
                <p>
                  <span>
                    <BsMic /> Voice Typing
                  </span>{" "}
                  <span>Ctrl+Shit+S</span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <AiOutlineBell /> Notification setting
                  </span>
                </p>
                <p>
                  <span>
                    <GrUserSettings /> Preferences
                  </span>
                </p>
                <p>
                  <span>
                    <ImAccessibility /> Accessibility
                  </span>
                </p>
              </div>
            </div>

            <div>
              <p>Extensions</p>
              <div className="floating__lists7">
                <p>
                  <span>
                    <AiFillFolderAdd /> Add ons
                  </span>{" "}
                  <span>⮞</span>
                </p>
                <p>
                  <span>
                    <DiAppstore /> Apps script
                  </span>
                </p>
              </div>
            </div>

            <div>
              <p>Help</p>
              <div className="floating__lists8">
                <input type="text" placeholder="Search in the menus (Alt+/)" />
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <BiHelpCircle /> Help
                  </span>
                </p>
                <p>
                  <span>
                    <SiGooglescholar /> Training
                  </span>
                </p>
                <p>
                  <span>
                    <FaBroadcastTower /> Updates
                  </span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <AiOutlineFileExclamation /> Help Docs improve
                  </span>
                </p>
                <p>
                  <span>
                    <BsExclamationTriangle /> Report abuse
                  </span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <AiOutlineFileText /> Privacy Policy
                  </span>
                </p>
                <p>
                  <span>
                    <AiOutlineFileText /> Terms of Service
                  </span>
                </p>
                <p style={{ borderBottom: "1px solid lightgray" }}></p>
                <p>
                  <span>
                    <BsKeyboard /> Keyboard shortcuts
                  </span>{" "}
                  <span>Ctrl+/</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__right__doc__share">
        <GiBackwardTime size={30} />
        <BiMessageDetail size={27} />
        <BsCameraVideo size={27} />
        <button>
          <SlLock size={15} /> Share
        </button>
        <FaUserCircle size={35} color="#82d67a" />
      </div>
    </div>
  );
};

export default DocumentPageHeader;
