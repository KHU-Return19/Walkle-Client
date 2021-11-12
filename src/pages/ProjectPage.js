import React from 'react'


const ProjectPage = () => {
    return (
        <div>
          <input type="text" placeholder="프로젝트명 or 태그 검색하기" onChange={(e)=>this.searchSpace(e)}/>
          <div className="Projects">
            Card1
          </div>
          <div className="Projects">
            Card2
          </div>
          <div className="Projects">
            Card3
          </div>
          <div className="Projects">
            Card4
          </div>
          <div className="Projects">
            Card5
          </div>
        </div>
    )
}

export default ProjectPage;