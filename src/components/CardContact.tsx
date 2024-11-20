import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";
import { Input } from "./ui/input";
import { Camera, Mail, PhoneCall, Send } from "lucide-react";
import { Textarea } from "./ui/textarea";
import ButtonAlert from "./ButtonAlert";

const CardContact = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [account, setAccount] = useState<string>("");

  const to = import.meta.env.VITE_EMAIL;
  const phoneNumber = import.meta.env.VITE_TELEPON;
  const subject = "Ajakan Kerjasama";

  const handleWa = () => {
    if (account === "wa") {
      setOpen((prev) => !prev);
    } else {
      setAccount("wa");
      setOpen(true);
    }
  };
  const handleEmail = () => {
    if (account === "email") {
      setOpen((prev) => !prev);
    } else {
      setAccount("email");
      setOpen(true);
    }
  };

  const send2Wa = () => {
    const wa2Link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(wa2Link, "_blank");
  };

  const send2Email = () => {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(text)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <Card className="sm:min-w-[40vw]">
      <CardHeader>
        <CardTitle>Sosial Media</CardTitle>
        <CardDescription>Hubungi saya di kontak di bawah ini</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={
            open ? "flex flex-col justify-end items-end mb-3 gap-2" : "hidden"
          }
        >
          <Textarea
            placeholder="kirimi saya pesan"
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="sm:h-20"
          />
          <Button
            variant="default"
            className="bg-mainAccent text-white"
            onClick={account === "wa" ? send2Wa : send2Email}
          >
            Kirim <Send size={12} />
          </Button>
        </div>
        <div className="flex sm:flex-row flex-col gap-3 text-base">
          <ButtonAlert />
          <Button
            variant="neutral"
            onClick={handleWa}
            className={account === "wa" ? "bg-secAccent" : "bg-bg"}
          >
            <PhoneCall size={12} />
            Whatsapp
          </Button>
          <Button
            variant="neutral"
            onClick={handleEmail}
            className={account === "email" ? "bg-secAccent" : "bg-bg"}
          >
            <Mail size={12} /> Email
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardContact;
