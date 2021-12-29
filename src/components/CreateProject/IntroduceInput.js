import React from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CreateProjectLabelText } from "./AddProjectForm";
import { DateInput, DateInputContainer } from "./RecruitmentPeriodSelector";

const IntroduceInput = ({ simpleIntro, setDetailedIntro, handleInput }) => {
  return (
    <>
      <SimpleIntroduceContainer>
        <CreateProjectLabelText>한줄 소개</CreateProjectLabelText>
        <SimpleIntroduceInputContainer>
          <SimpleIntroduceInput
            placeholder="프로젝트의 한줄 소개 내용을 입력해 주세요"
            value={simpleIntro}
            onChange={handleInput("simpleIntro")}
          />
        </SimpleIntroduceInputContainer>
      </SimpleIntroduceContainer>
      <DetailedIntroduceContainer>
        <CreateProjectLabelText>세부 소개</CreateProjectLabelText>
        <CKEditor
          editor={ClassicEditor}
          config={{
            placeholder: "프로젝트의 세부 소개 내용을 입력해 주세요",
            fontFamily: "Pretendard",
            fontSize: "18px",
            image: {
              resizeUnit: "100px",
            }
          }}
          data=""
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setDetailedIntro(data);
          }}
        />
        <DetailedIntroduceInputContainer>
          <DetailedIntroduceInput
            type="textarea"
            placeholder="프로젝트의 세부 소개 내용을 입력해 주세요"
          />
        </DetailedIntroduceInputContainer>
      </DetailedIntroduceContainer>
    </>
  );
};

export default IntroduceInput;

const SimpleIntroduceContainer = styled.div`
  padding-top: 100px;
`;

const SimpleIntroduceInputContainer = styled(DateInputContainer)`
  width: 960px;
`;

const SimpleIntroduceInput = styled(DateInput)`
  width: 900px;
`;

const DetailedIntroduceContainer = styled(SimpleIntroduceContainer)`
.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 500px;

  placeholder: "프로젝트의 세부 소개 내용을 입력해 주세요"
  :focus{
    outline: none;
  }
}
`;

const DetailedIntroduceInputContainer = styled(SimpleIntroduceInputContainer)``;

const DetailedIntroduceInput = styled(SimpleIntroduceInput)``;
