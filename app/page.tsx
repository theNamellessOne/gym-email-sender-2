"use client"

import React, {useState} from "react";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {sendMail} from "@/app/email-service";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <div className={"absolute inset-0 flex items-center justify-center"}>
        <div className={"flex flex-col border p-8 gap-4 w-[700px] rounded-xl"}>
      <Input type="email" onChange={handleEmailChange} variant={"flat"} label="Email" />
      <Input type="name" onChange={handleNameChange} variant={"flat"} label="Name" />
      <Button onClick={() => {
        if (email.trim().length > 0 && name.trim().length > 0) {
          sendMail("Data", `email: ${email}; name: ${name}`).then(r => console.log(r));
        }}
      } color="primary">
        Send
      </Button>
        </div>
    </div>
  )
}
