import { useToast } from "@chakra-ui/toast";
import React, { useCallback, useEffect } from "react";
import { QueryStatus } from "react-query";
import useCertificationStore from "../modules/UserInput/Certification/store";
import useContactStore from "../modules/UserInput/Contact/store";
import useEducationStore from "../modules/UserInput/Education/store";
import useExperienceStore from "../modules/UserInput/Experience/store";
import useProjectStore from "../modules/UserInput/Projects/store";
import usePublicationStore from "../modules/UserInput/Publications/store";
import useSkillStore from "../modules/UserInput/Skills/store";
import useGlobalStore from "./global.store";
import useResumeStore from "./resume.store";
import { Result } from "./types";

interface Props {
  data: Result;
  status: QueryStatus;
}

const InitStore: React.FC<Props> = ({ data, status }) => {
  const educationInit = useEducationStore((state) => state.setData);
  const experienceInit = useExperienceStore((state) => state.setData);
  const certificationInit = useCertificationStore((state) => state.setData);
  const projectInit = useProjectStore((state) => state.setData);
  const publicationsInit = usePublicationStore((state) => state.setData);
  const skillsInit = useSkillStore((state) => state.setData);
  const { setFullName, setContact, setJobTitle, setUserImage } =
    useContactStore();
  const {
    setProperties,
    setFontProfile,
    setColorProfile,
    setSpacing,
    setCustomSections,
  } = useResumeStore();
  const { setInit, setLoading } = useGlobalStore();
  const toast = useToast();

  const initResume = useCallback(
    (resume: Result["resumes"]) => {
      const obj = resume[0];
      setProperties({
        inputs: obj.inputs, //default
        layout: obj.layout, //default
      });
      setFontProfile(obj.font_profile);
      setColorProfile(obj.color);
      setSpacing(obj.spacing);
      setCustomSections(obj.customSections);
    },
    [
      setProperties,
      setFontProfile,
      setColorProfile,
      setSpacing,
      setCustomSections,
    ]
  );

  const initUserInfo = useCallback(
    (userInfo: Result["contact"]) => {
      setFullName(userInfo.fullName);
      setJobTitle(userInfo.jobTitle);
      setUserImage(userInfo.userImage);
      setContact(userInfo.contact);
    },
    [setContact, setFullName, setJobTitle, setUserImage]
  );

  const initApp = useCallback(
    (data: Result) => {
      educationInit(data.education);
      experienceInit(data.experience);
      certificationInit(data.certifications);
      projectInit(data.projects);
      publicationsInit(data.publications);
      skillsInit(data.skills.data);
      initResume(data.resumes);
      initUserInfo(data.contact);
      setInit(true);
    },
    [
      educationInit,
      experienceInit,
      certificationInit,
      projectInit,
      publicationsInit,
      skillsInit,
      setInit,
      initResume,
      initUserInfo,
    ]
  );

  if (status === "error")
    toast({
      title: "Cannot connect to server.",
      variant: "subtle",
      description:
        "Try checking your network connection while we try to reconnect.",
      status: "error",
      duration: 3500,
      isClosable: true,
    });

  if (status === "loading") setLoading(true);

  useEffect(() => {
    if (status === "success") {
      initApp(data);
      setLoading(false);
    }
  }, [data, initApp, status, setLoading]);

  return null;
};

export default InitStore;
