import React, { FC } from "react";

interface propType {
  user: { id: string; title: string; isPublished: boolean };
}

type propType1 = {
  id: string,
  title: string,
  isPublished: boolean,
}

const QuestionCard: FC<propType1> = (props) => {
  const edit = (name: string) => {
    console.log("编辑", name);
  };
  const {id, title, isPublished} = props;
  return (
    <div key={id}>
      <span>{title}</span>
      {isPublished ? (
        <span style={{ color: "green" }}>已发布 </span>
      ) : (
        <span>未发布 </span>
      )}
      <button onClick={() => edit(id)}> 编辑问卷 </button>
    </div>
  );
};

export default QuestionCard;
