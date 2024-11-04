
import React, { createContext, useState } from 'react';

type Participant = {
  qrData: string;
  firstname: string;
  lastname: string;
  company: string;
  position: string;
  phone: string;
  email: string;
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
    company: "",
    firstname: "",
    lastname: "",
    qrData: "",
    position: "",
    phone: "",
    email: ""
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
