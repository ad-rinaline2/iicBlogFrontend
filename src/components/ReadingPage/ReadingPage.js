import React from "react";
import ArticleData from "./ArticleData";
import VRimage from "./VRimage.svg";
import "./ReadingPage.css";
import ContentData from "./ContentData";
const ArticleTitle = () => {
  /*const {userName,id}= useParams();
  console.log(userName,id);
  const ArticleData = (props) =>{
   return(
     
   );
  };*/
  return (
    <>
      <div className="article_page_container">
        <div>
          {ContentData.map((e,index) => {
              return <ArticleData key={index} {...e}/>
           })}
        </div>
        <div>
          {ContentData.map((ele, index) => {const { body } = ele;
        return (
            <>
              <div className="article_page_user">
                <div className="article_page_titlename">
                </div>
                <div className="article_page_titleicons">️</div>
              </div>
                <div className="main">
                  <div className="article_page_image">
                    <img src={VRimage} alt=" "  />
                  </div>
                  <div className="second-main">
                    <div className="small-para">
                        {body}
                        <br/>
                    </div>
                  </div>
                </div>
            </>
        );
      })}
        </div>
      </div>
    </>
  );
};

export default ArticleTitle;
