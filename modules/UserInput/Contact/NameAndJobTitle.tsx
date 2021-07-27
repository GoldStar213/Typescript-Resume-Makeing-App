import React from "react";
import patchContact from "../../../apis/patchContact";
import InputField from "../../../components/common/InputField";
import Section from "../../../components/layouts/Section";
import { usePatchParams } from "../../../hooks/usePatchParams";
import useContactStore from "./store";

const NameAndJobTitle = () => {
  const fullName = useContactStore((state) => state.fullName);
  const jobTitle = useContactStore((state) => state.jobTitle);
  const setProperty = useContactStore((state) => state.setProperty);
  const { setSaveStatus, setLastSavedAt, resumeId, token, Status } =
    usePatchParams();

  const handleSubmit = async (key: string, value: any) => {
    const res = async () => {
      setSaveStatus(Status.loading);
      return await patchContact(key)(token, resumeId, { [key]: value })
        .then(() => {
          setLastSavedAt(new Date());
          return setSaveStatus(Status.success);
        })
        .catch(() => setSaveStatus(Status.error));
    };

    const timeout = setTimeout(res, 3000);
    setSaveStatus(Status.idle);
    return () => clearTimeout(timeout);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [key, value] = [e.target.name, e.target.value];
    setProperty(key, value);
    handleSubmit(key, value);
  };

  return (
    <Section
      header={{
        title: "Let's go over some basic info",
        subtitle: "Provide your name, email, and where to contact you",
      }}
      flexDir="row"
      flexWrap="wrap"
    >
      <InputField
        labelProps={{ fontSize: "sm" }}
        label="Full Name"
        name="fullName"
        value={fullName}
        onChange={handleChange}
      />
      <InputField
        labelProps={{ fontSize: "sm" }}
        label="Job Title"
        name="jobTitle"
        value={jobTitle}
        onChange={handleChange}
      />
    </Section>
  );
};

export default NameAndJobTitle;
