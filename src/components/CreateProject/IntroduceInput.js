import React from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CreateProjectLabelText } from "./AddProjectForm";

const IntroduceInput = ({ simple, detailed, setDetailedIntro, handleInput }) => {
  return (
    <>
      <SimpleIntroduceContainer>
        <CreateProjectLabelText>한줄 소개</CreateProjectLabelText>
        <SimpleIntroduceInputContainer>
          <SimpleIntroduceInput
            placeholder="프로젝트의 한줄 소개 내용을 입력해 주세요"
            value={simple}
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
            },
          }}
          data={detailed}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setDetailedIntro(data);
          }}
        />
      </DetailedIntroduceContainer>
    </>
  );
};

export default IntroduceInput;

const SimpleIntroduceContainer = styled.div`
  padding-top: 100px;
`;

const SimpleIntroduceInputContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  padding-left: 20px;
  border: none;
  border-radius: 100px;
  width: 960px;
  height: 50px;
  font-size: 18px;
  color: #313338;
  background: #fafafa;
`;

const SimpleIntroduceInput = styled.input`
  border: none;
  width: 900px;
  height: 50px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  color: #313338;
  background: #fafafa;
  :focus {
    outline: none;
  }
`;

const DetailedIntroduceContainer = styled(SimpleIntroduceContainer)`
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 500px;
    placeholder: "프로젝트의 세부 소개 내용을 입력해 주세요";
    :focus {
      outline: none;
    }
  }
`;
