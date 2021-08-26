import React from "react";

export const Form = ({
  onSubmit,
  children,
}: {
  onSubmit: () => void;
  children: JSX.Element[] | JSX.Element;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
