import React, { FC } from "react";
import QuestionCard from "./components/QuestionCard";

const List1: FC = () => {
  const questionList = [
    { id: "q1", title: "问卷1", isPublished: false },
    { id: "q2", title: "问卷2", isPublished: true },
    { id: "q3", title: "问卷3", isPublished: false },
    { id: "q4", title: "问卷4", isPublished: true },
  ];
  const edit = (name: string) => {
    console.log("编辑", name);
  };

  return (
    <div>
      <strong>问卷调查</strong>
      {questionList.map((user) => {
        const {id, title, isPublished} = user;
        return <QuestionCard  key={user.id} id={id} title={title} isPublished={isPublished} ></QuestionCard>
      })}
    </div>
  );
};
export default List1;
