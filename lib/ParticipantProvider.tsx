
import React, { createContext, useState } from 'react';

type Participant = {
  qrData: string;
  firstname: string;
  lastname: string;
  company: string;
  title: string;
  batch: string;
};

type IParticipantContext = {
  participant: Participant | null;
  setParticipant: React.Dispatch<React.SetStateAction<Participant>>
};

export const ParticipantContext = createContext<IParticipantContext>({
  participant: null,
  setParticipant: () => {},
});

export default function ParticipantProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [participant, setParticipant] = useState<Participant>({
    batch: "",
    company: "",
    firstname: "",
    lastname: "",
    qrData: "",
    title: ""
  });

  const value = {
    participant,
    setParticipant,
  };
  return (
    <ParticipantContext.Provider value={value}>
      {children}
    </ParticipantContext.Provider>
  );
}
